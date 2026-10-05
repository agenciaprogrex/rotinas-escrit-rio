import { BookOpenCheck, GraduationCap, PlayCircle } from "lucide-react";
import { modules } from "@/lib/course";

export function CourseLaptop() {
  return (
    <figure className="mx-auto my-8 max-w-5xl">
      <div className="relative mx-auto w-[94%] rounded-t-2xl border-[6px] border-slate-800 bg-slate-950 pt-5 shadow-xl sm:border-[10px]">
        <span
          className="absolute left-1/2 top-1.5 size-1.5 -translate-x-1/2 rounded-full bg-slate-600"
          aria-hidden="true"
        />
        <div className="overflow-hidden bg-[#f5f6f8] text-slate-800">
          <div className="flex items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-3 sm:px-6">
            <span className="flex items-center gap-2 text-xs font-extrabold sm:text-sm">
              <span className="text-lg text-orange-600" aria-hidden="true">
                ♨
              </span>
              Hotmart Club
            </span>
            <span className="text-[10px] text-slate-500 sm:text-xs">
              Área de membros • Contador 360
            </span>
          </div>
          <div className="flex">
            <aside className="hidden w-40 shrink-0 border-r border-slate-200 bg-white p-4 md:block">
              <span className="grid size-10 place-items-center rounded-xl bg-primary text-white">
                <GraduationCap />
              </span>
              <p className="mt-3 text-sm font-extrabold">Contador 360</p>
              <p className="mt-1 text-[10px] text-slate-500">Sua formação prática</p>
              <div className="mt-6 rounded-md bg-sky-50 p-2 text-xs font-bold text-primary">
                Meu curso
              </div>
              <p className="mt-4 px-2 text-xs text-slate-500">Conteúdo e módulos</p>
            </aside>
            <div className="min-w-0 flex-1 p-3 sm:p-5">
              <div className="mb-4 rounded-lg bg-gradient-to-r from-slate-900 to-primary p-4 text-white sm:p-6">
                <p className="text-[10px] font-semibold uppercase text-sky-200">
                  Bem-vindo à sua jornada
                </p>
                <p className="mt-1 font-display text-base font-bold sm:text-2xl">
                  Rotinas contábeis na prática
                </p>
                <p className="mt-2 text-[10px] text-sky-100 sm:text-xs">
                  11 módulos para acompanhar passo a passo.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-3">
                {modules.map((module, index) => (
                  <div
                    key={module.title}
                    className="rounded-lg border border-slate-200 bg-white p-2 sm:p-3"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-[9px] font-bold text-primary">
                        MÓDULO {String(index + 1).padStart(2, "0")}
                      </span>
                      <BookOpenCheck className="size-3 text-primary" />
                    </div>
                    <p className="mt-2 text-[10px] font-bold leading-4 sm:text-xs">
                      {module.title}
                    </p>
                    <span className="mt-2 flex items-center gap-1 text-[9px] text-slate-500">
                      <PlayCircle className="size-3" />
                      Conteúdo em aulas
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="relative h-4 rounded-b-[50%] bg-gradient-to-b from-slate-300 to-slate-500 shadow-lg sm:h-6"
        aria-hidden="true"
      >
        <div className="mx-auto h-1.5 w-1/5 rounded-b-lg bg-slate-400" />
      </div>
      <figcaption className="mt-3 text-center text-[11px] text-muted-foreground">
        Representação ilustrativa da área de membros. Confira todos os módulos abaixo.
      </figcaption>
    </figure>
  );
}
