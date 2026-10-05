import { useEffect, useState } from "react";

export function getOfferCountdown(now: Date) {
  const parts = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hourCycle: "h23",
  }).formatToParts(now);
  const value = (type: string) => parts.find((part) => part.type === type)?.value ?? "00";
  const seconds =
    86400 - Number(value("hour")) * 3600 - Number(value("minute")) * 60 - Number(value("second"));
  return {
    date: `${value("day")}/${value("month")}/${value("year")}`,
    hours: String(Math.floor(seconds / 3600)).padStart(2, "0"),
    minutes: String(Math.floor((seconds % 3600) / 60)).padStart(2, "0"),
    seconds: String(seconds % 60).padStart(2, "0"),
  };
}

export function OfferCountdown() {
  const [countdown, setCountdown] = useState<ReturnType<typeof getOfferCountdown> | null>(null);
  useEffect(() => {
    const update = () => setCountdown(getOfferCountdown(new Date()));
    update();
    const interval = window.setInterval(update, 1000);
    document.addEventListener("visibilitychange", update);
    return () => {
      window.clearInterval(interval);
      document.removeEventListener("visibilitychange", update);
    };
  }, []);
  return (
    <div className="mb-6 rounded-xl border border-amber-300/50 bg-amber-50 p-5 text-center text-slate-900">
      <p className="text-lg font-extrabold text-amber-800">A oferta encerra hoje!</p>
      <p className="mt-1 text-sm font-semibold">
        {countdown?.date ?? "Hoje"} • até 23h59, horário de Brasília.
      </p>
      <div
        className="mt-4 flex justify-center gap-3"
        role="timer"
        aria-label="Tempo restante para o encerramento da oferta de hoje"
      >
        {[
          [countdown?.hours ?? "--", "horas"],
          [countdown?.minutes ?? "--", "minutos"],
          [countdown?.seconds ?? "--", "segundos"],
        ].map(([value, label]) => (
          <div key={label} className="min-w-16 rounded-lg bg-slate-900 px-3 py-2 text-white">
            <span className="block font-display text-2xl font-extrabold tabular-nums">{value}</span>
            <span className="text-[10px] uppercase">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
