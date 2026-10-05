import { describe, expect, it } from "vitest";
import { getOfferCountdown } from "@/components/offer-countdown";

describe("Daily offer countdown in Brasilia", () => {
  it("counts down to local midnight regardless of the machine timezone", () => {
    expect(getOfferCountdown(new Date("2026-10-06T02:59:59Z"))).toEqual({
      date: "05/10/2026",
      hours: "00",
      minutes: "00",
      seconds: "01",
    });
  });
  it("updates the date and resets at local midnight", () => {
    expect(getOfferCountdown(new Date("2026-10-06T03:00:00Z"))).toEqual({
      date: "06/10/2026",
      hours: "24",
      minutes: "00",
      seconds: "00",
    });
  });
});
