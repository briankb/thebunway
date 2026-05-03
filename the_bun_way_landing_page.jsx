export default function TheBunWayLandingPage() {
  const principles = [
    {
      number: "1",
      title: "Start with working code quickly",
      text: "Get to a running app first. Spend less time on setup, configuration, and wiring tools together.",
    },
    {
      number: "2",
      title: "Prefer built-ins before dependencies",
      text: "Use Bun’s runtime, package manager, test runner, bundler, and server features before reaching for extra packages.",
    },
    {
      number: "3",
      title: "Build small, complete pieces",
      text: "Ship understandable slices of functionality instead of over-designing abstract systems too early.",
    },
    {
      number: "4",
      title: "Keep the stack minimal",
      text: "Reduce moving parts so projects stay easier to learn, maintain, and explain.",
    },
    {
      number: "5",
      title: "Add complexity only when needed",
      text: "Grow the architecture as the app earns it, not because the ecosystem expects it.",
    },
  ];

  const toolRows = [
    ["Runtime", "Node.js runtime"],
    ["Package manager", "npm, Yarn, pnpm"],
    ["Test runner", "Jest, Mocha"],
    ["Bundler", "Webpack, esbuild, Vite"],
    ["Task runner", "npm scripts, shell glue"],
    ["Built-in server + utilities", "Extra setup and helper libraries"],
  ];

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900">
      <header className="sticky top-0 z-50 border-b border-stone-200 bg-stone-50/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="#top" className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-900">
            The Bun Way
          </a>

          <nav className="hidden gap-6 text-sm text-stone-600 md:flex">
            <a href="#meaning" className="hover:text-stone-900">Meaning</a>
            <a href="#principles" className="hover:text-stone-900">Principles</a>
            <a href="#why" className="hover:text-stone-900">Why Bun</a>
            <a href="#book" className="hover:text-stone-900">Book</a>
          </nav>

          <a
            href="https://learnbun.org"
            className="rounded-full border border-amber-300 bg-amber-400 px-4 py-2 text-sm font-medium text-stone-950 transition hover:bg-amber-300"
          >
            Visit LearnBun.org
          </a>
        </div>
      </header>

      <main id="top">
        <section className="relative overflow-hidden border-b border-stone-200">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(251,191,36,0.18),transparent_38%)]" />

          <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-24 md:grid-cols-[1.2fr_0.8fr] md:py-32">
            <div>
              <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-stone-500">
                The philosophy behind LearnBun.org
              </p>
              <h1 className="max-w-4xl text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                Build modern JavaScript apps with fewer tools, less friction, and a clearer path forward.
              </h1>
              <p className="mt-8 max-w-2xl text-lg leading-8 text-stone-600 md:text-xl">
                The Bun Way is a practical approach to development with Bun: start fast, keep the stack minimal,
                prefer built-in features, and build complete applications without drowning in configuration.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="https://learnbun.org"
                  className="rounded-2xl bg-amber-400 px-6 py-3 text-base font-semibold text-stone-950 shadow-md shadow-amber-200 transition hover:-translate-y-px hover:bg-amber-300"
                >
                  Go to LearnBun.org
                </a>
                <a
                  href="#meaning"
                  className="rounded-2xl border border-stone-300 px-6 py-3 text-base font-semibold text-stone-900 transition hover:bg-stone-100"
                >
                  Explore the approach
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-[2rem] border border-stone-200 bg-white p-6 shadow-xl shadow-stone-200/70">
                <div className="rounded-[1.5rem] border border-stone-200 bg-stone-50 p-6">
                  <p className="text-sm font-medium text-stone-500">The old way</p>
                  <p className="mt-3 text-base leading-7 text-stone-600">
                    Node + package manager + test runner + bundler + web server + environment tooling + extra helper libraries.
                  </p>
                  <div className="my-6 h-px bg-stone-200" />
                  <p className="text-sm font-medium text-stone-500">The Bun Way</p>
                  <p className="mt-3 text-2xl font-semibold tracking-tight text-stone-900">
                    One runtime. One toolchain. Less overhead.
                  </p>
                  <p className="mt-4 text-base leading-7 text-stone-600">
                    Bun reduces the number of decisions and dependencies needed to get productive, especially for small teams,
                    solo builders, and anyone learning full-stack development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="meaning" className="mx-auto max-w-6xl px-6 py-24">
          <div className="max-w-3xl rounded-[2rem] border border-stone-200 bg-white p-8">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-stone-500">A simple definition</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight">What The Bun Way means</h2>
            <p className="mt-5 text-lg leading-8 text-stone-600">
              The Bun Way is a practical approach to modern JavaScript development: use Bun built-in capabilities,
              keep the stack small, and move from idea to working application with less setup and less friction.
            </p>
          </div>
        </section>

        <section id="principles" className="border-y border-stone-200 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-24">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-500">Core principles</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                A repeatable way to build with Bun
              </h2>
              <p className="mt-6 text-lg leading-8 text-stone-600">
                These ideas shape the book, the site, and the mindset behind The Bun Way.
              </p>
            </div>

            <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
              {principles.map((item) => (
                <div key={item.number} className="rounded-[2rem] border border-stone-200 bg-stone-50 p-7">
                  <div className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-amber-300 bg-amber-100 text-sm font-semibold text-amber-700">
                    {item.number}
                  </div>
                  <h3 className="text-2xl font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-4 text-base leading-7 text-stone-600">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="why" className="mx-auto max-w-6xl px-6 py-24">
          <div className="grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-500">Why Bun</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                A smaller toolchain with fewer decisions
              </h2>
              <p className="mt-6 text-lg leading-8 text-stone-600">
                Bun is compelling because it combines several common development tools into one default workflow.
                That can make projects easier to start, easier to teach, and easier to maintain.
              </p>
              <p className="mt-6 text-lg leading-8 text-stone-600">
                Instead of wiring together multiple tools before you can begin, you can often stay inside Bun for the essentials
                and add more only when the project actually needs it.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-white p-6">
              <div className="overflow-hidden rounded-[1.5rem] border border-stone-200">
                <table className="min-w-full divide-y divide-stone-200 text-left text-sm">
                  <thead className="bg-stone-100 text-stone-500">
                    <tr>
                      <th className="px-5 py-4 font-medium">Bun feature</th>
                      <th className="px-5 py-4 font-medium">Common tools it can replace</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200">
                    {toolRows.map(([feature, replaces]) => (
                      <tr key={feature} className="align-top">
                        <td className="px-5 py-4 font-medium text-stone-900">{feature}</td>
                        <td className="px-5 py-4 text-stone-600">{replaces}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section id="book" className="border-y border-stone-200 bg-white">
          <div className="mx-auto grid max-w-6xl gap-10 px-6 py-24 md:grid-cols-[1fr_0.9fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-500">LearnBun.org</p>
              <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-5xl">
                A book for learning Bun through real projects
              </h2>
              <p className="mt-6 text-lg leading-8 text-stone-600">
                LearnBun.org supports a project-based book for developers who are new to Bun, coming from Node.js,
                or building their first full-stack applications.
              </p>
              <p className="mt-6 text-lg leading-8 text-stone-600">
                It starts with the fundamentals, then builds toward complete applications with routing, data storage,
                validation, authentication, and deployment.
              </p>
            </div>

            <div className="rounded-[2rem] border border-stone-200 bg-amber-50 p-8">
              <h3 className="text-2xl font-semibold tracking-tight">Who it helps</h3>
              <ul className="mt-6 space-y-4 text-base leading-7 text-stone-600">
                <li>New developers who want a cleaner path into full-stack development</li>
                <li>Node.js developers exploring a simpler workflow</li>
                <li>Solo builders and small teams who want fewer moving parts</li>
                <li>Developers who learn best by building real projects</li>
              </ul>
              <a
                href="https://learnbun.org"
                className="mt-8 inline-flex rounded-2xl border border-amber-300 px-5 py-3 font-semibold text-stone-900 transition hover:bg-amber-100"
              >
                Visit LearnBun.org
              </a>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-stone-500">Start here</p>
          <h2 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
            The Bun Way is the mindset. LearnBun.org is the guide.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-stone-600">
            This site explains the approach in plain terms. LearnBun.org takes you through the full process of building with Bun step by step.
          </p>
          <div className="mt-10">
            <a
              href="https://learnbun.org"
              className="inline-flex rounded-2xl bg-amber-400 px-6 py-3 text-base font-semibold text-stone-950 shadow-md shadow-amber-200 transition hover:-translate-y-px hover:bg-amber-300"
            >
              Go to LearnBun.org
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
