import { loadRoadmap } from "@/lib/roadmap/transform";

export default function Home() {
  const { title, training_domains } = loadRoadmap();

  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-zinc-950 font-sans">
      <header className="bg-white dark:bg-zinc-900 border-b border-zinc-200 dark:border-zinc-800 px-6 py-5">
        <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">{title}</h1>
        <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
          {training_domains.length} training domains
        </p>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {training_domains.map((domain) => (
          <section
            key={domain.id}
            className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-5 flex flex-col gap-3 shadow-sm"
          >
            <h2 className="text-base font-semibold text-zinc-900 dark:text-zinc-50 leading-snug">
              {domain.name}
            </h2>
            <ul className="flex flex-col gap-2">
              {domain.modules.map((mod) => (
                <li key={mod.id} className="flex items-start gap-2">
                  {mod.required ? (
                    <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-violet-100 dark:bg-violet-900 text-violet-700 dark:text-violet-300 text-[10px] font-bold">
                      ★
                    </span>
                  ) : (
                    <span className="mt-0.5 inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-400 text-[10px]">
                      ○
                    </span>
                  )}
                  <span className="text-sm text-zinc-700 dark:text-zinc-300 leading-snug">
                    {mod.title}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-auto pt-2 text-xs text-zinc-400 dark:text-zinc-600">
              {(() => {
                const reqCount = domain.modules.filter((m) => m.required).length;
                return reqCount > 0 ? (
                  <span className="text-violet-600 dark:text-violet-400 font-medium">
                    {reqCount} required
                  </span>
                ) : null;
              })()}{" "}
              · {domain.modules.length} modules
            </p>
          </section>
        ))}
      </main>
    </div>
  );
}

