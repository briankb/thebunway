import tailwind from "bun-plugin-tailwind";
import { rm } from "node:fs/promises";
import path from "node:path";

const outdir = path.join(import.meta.dir, "dist");
await rm(outdir, { recursive: true, force: true });

const entrypoints = [...new Bun.Glob("*.html").scanSync(import.meta.dir)].map(f => path.join(import.meta.dir, f));

const result = await Bun.build({
  entrypoints,
  outdir,
  plugins: [tailwind],
  minify: true,
  target: "browser",
  sourcemap: "linked",
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});

for (const output of result.outputs) {
  console.log(` ${path.relative(process.cwd(), output.path)}  ${(output.size / 1024).toFixed(1)} KB`);
}

const opScript = await fetch("https://openpanel.dev/op1.js");
await Bun.write(path.join(outdir, "op1.js"), opScript);
const opSize = (await Bun.file(path.join(outdir, "op1.js")).size) / 1024;
console.log(` dist/op1.js  ${opSize.toFixed(1)} KB`);
