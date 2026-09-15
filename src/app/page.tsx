import Image from "next/image";
import heroImage from "../../public/strolla-bg.png";
import {
  CarryingIcon,
  CartIcon,
  NoWatchIcon,
  StrollaMark,
  StrollerIcon,
  WalkingPadIcon,
} from "./icons";
import { WaitlistForm } from "./waitlist-form";

const useCases = [
   { label: "Pushing a stroller", Icon: StrollerIcon },
   { label: "Walking pad", Icon: WalkingPadIcon },
   { label: "Carrying your little one", Icon: CarryingIcon },
   { label: "Shopping cart", Icon: CartIcon },
   { label: "Or simply no watch", Icon: NoWatchIcon },
];

/* Washes the left of the photograph so the copy sits on a calm field, then
   releases so the walker and the ankle callout stay untouched. The peach is
   the supporting brand colour, used here only as a faint warmth. */
const SCRIM = [
  // Peach warmth first, so the washed area reads as cream rather than grey.
  "radial-gradient(64% 60% at 4% 16%, rgba(217,182,160,0.3) 0%, rgba(217,182,160,0) 72%)",
  // Stops are in PIXELS, not percentages: the copy column is a fixed width, so
  // a percentage wash covers too little of it at 1280 and far too much at
  // 1920. Pixel stops hold the text on a calm field at every width and free
  // the same amount of photograph on the right.
  "linear-gradient(97deg, rgba(255,252,250,0.96) 0px, rgba(255,252,250,0.95) 480px, rgba(255,252,250,0.85) 640px, rgba(255,252,250,0.42) 820px, rgba(255,252,250,0.1) 980px, rgba(255,252,250,0) 1100px)",
].join(",");

/* Every vertical step is capped against viewport height as well as width, so
   the page lands inside one screen from a 720px laptop to a 1440px monitor. */
const S = {
  pad: "lg:py-[clamp(14px,2.6svh,38px)]",
  logo: "text-[clamp(20px,2.6svh,26px)]",
  h1: "mt-[clamp(6px,1.4svh,18px)] text-[clamp(1.65rem,min(4.6vw,5.4svh),3rem)]",
  lead: "mt-[clamp(8px,1.6svh,20px)] text-[clamp(13px,1.75svh,16px)]",
  body: "mt-[clamp(4px,0.9svh,12px)] text-[clamp(12.5px,1.62svh,15px)]",
  cases: "mt-[clamp(9px,1.9svh,24px)]",
  chip: "h-[clamp(38px,5svh,56px)] w-[clamp(38px,5svh,56px)]",
  chipIcon: "h-[clamp(19px,2.5svh,28px)] w-[clamp(19px,2.5svh,28px)]",
  card: "mt-[clamp(9px,1.9svh,24px)]",
};

export default function Home() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-canvas">
      {/* One <Image> for both layouts: a leading banner on phones, the full
          page behind the copy from lg up. next/image serves AVIF/WebP at the
          size actually needed instead of the 2MB source. */}
      <div className="relative h-[34svh] min-h-[200px] w-full lg:absolute lg:inset-0 lg:h-auto lg:min-h-0">
        <Image
          src={heroImage}
          alt="A parent walking beside the water pushing a stroller, with the Strolla tracker worn on her ankle"
          fill
          priority
          placeholder="blur"
          sizes="100vw"
          className="object-cover object-[64%_58%] lg:object-[62%_66%]"
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-canvas to-transparent lg:hidden"
        />
        <div
          aria-hidden
          className="absolute inset-0 hidden lg:block"
          style={{ backgroundImage: SCRIM }}
        />
      </div>

      <div
        className={`relative z-10 flex flex-col justify-center px-5 pt-7 pb-[max(2.5rem,env(safe-area-inset-bottom))] sm:px-10 lg:min-h-svh lg:pr-10 lg:pb-0 lg:pl-[clamp(32px,5vw,84px)] ${S.pad}`}
      >
        <div className="w-full max-w-[600px] lg:max-w-[min(730px,56vw)]">
          <div className="rise flex items-center gap-2.5">
            <StrollaMark className="h-[1.05em] w-[0.85em] text-accent" />
            <span className={`font-extrabold tracking-[-0.03em] text-ink ${S.logo}`}>
              Strolla
            </span>
          </div>

          <h1
            className={`rise max-w-[600px] text-balance font-extrabold leading-[1.06] tracking-[-0.035em] text-ink ${S.h1}`}
            style={{ animationDelay: "80ms" }}
          >
            Finally, a fitness tracker that doesn&rsquo;t rely on{" "}
            <span className="whitespace-nowrap text-accent">arm movement.</span>
          </h1>

          <p
            className={`rise max-w-[46ch] leading-[1.55] text-ink ${S.lead}`}
            style={{ animationDelay: "150ms" }}
          >
            Most fitness trackers rely on arm movement, so they miss steps when
            your hands aren&rsquo;t swinging.
          </p>
          <p
            className={`rise max-w-[48ch] leading-[1.6] text-ink/85 ${S.body}`}
            style={{ animationDelay: "190ms" }}
          >
            <span className="font-bold text-ink">Strolla</span> is an ankle-worn
            fitness tracker designed to count every step&mdash;whether
            you&rsquo;re pushing a stroller, walking on a walking pad, carrying
            your little one, pushing a shopping cart, or simply prefer not to
            wear a watch.
          </p>

          <ul
            className={`rise grid max-w-[540px] grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-5 sm:gap-y-4 ${S.cases}`}
            style={{ animationDelay: "240ms" }}
          >
            {useCases.map(({ label, Icon }) => (
              <li
                key={label}
                className="flex items-center gap-2.5 sm:flex-col sm:gap-2 sm:text-center"
              >
                <span
                  className={`flex shrink-0 items-center justify-center rounded-full bg-peach/30 text-accent-600 ${S.chip}`}
                >
                  <Icon className={S.chipIcon} />
                </span>
                <span className="text-[11.5px] font-semibold leading-[1.25] text-ink sm:min-h-[26px] sm:text-[clamp(10.5px,1.35svh,11.5px)]">
                  {label}
                </span>
              </li>
            ))}
          </ul>

          <div className={`rise ${S.card}`} style={{ animationDelay: "320ms" }}>
            <WaitlistForm />
          </div>
        </div>
      </div>
    </main>
  );
}
