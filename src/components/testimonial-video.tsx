import { useState } from "react";
import { Play } from "lucide-react";

export function TestimonialVideo({ id, title }: { id: string; title: string }) {
  const [playing, setPlaying] = useState(false);
  return playing ? (
    <iframe
      src={`https://www.youtube.com/embed/${id}?autoplay=1&playsinline=1&fs=0&rel=0&iv_load_policy=3&hl=pt-BR`}
      title={title}
      width="820"
      height="615"
      allow="autoplay; encrypted-media; picture-in-picture"
      referrerPolicy="strict-origin-when-cross-origin"
      className="aspect-video h-auto w-full rounded-xl border-0"
    />
  ) : (
    <button
      type="button"
      onClick={() => setPlaying(true)}
      aria-label={`Reproduzir ${title}`}
      className="group relative block aspect-video w-full overflow-hidden rounded-xl bg-slate-900 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
    >
      <img
        src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
        alt=""
        width={480}
        height={360}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <span className="absolute inset-0 bg-black/15 transition-colors group-hover:bg-black/25" />
      <span className="absolute inset-0 grid place-items-center">
        <span className="grid size-16 place-items-center rounded-full bg-primary text-white shadow-lg transition-transform group-hover:scale-110">
          <Play className="ml-1 size-7 fill-current" aria-hidden="true" />
        </span>
      </span>
    </button>
  );
}
