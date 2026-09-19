import Image from "next/image";
import heroImage from "./strolla-bg.webp";
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

/* Sizes come from the fluid scale in globals.css, which redefines the whole
   set once per layout mode. Nothing here is tuned per breakpoint. */
const S = {
  logo: "text-[length:var(--fs-logo)]",
  h1: "mt-[var(--gap-1)] text-[length:var(--fs-h1)]",
  lead: "mt-[var(--gap-2)] text-[length:var(--fs-lead)]",
  body: "mt-[var(--gap-1)] text-[length:var(--fs-body)]",
  case: "text-[length:var(--fs-case)]",
  chip: "h-[var(--chip)] w-[var(--chip)]",
  chipIcon: "h-[calc(var(--chip)*0.52)] w-[calc(var(--chip)*0.52)]",
  block: "mt-[var(--gap-3)]",
};

export default function Home() {
  return (
    <main className="relative min-h-svh overflow-hidden bg-canvas">
      {/* One <Image> for both layouts: a banner above the copy while the page
          is stacked, a full-height frame pinned to the right once it splits.
          Both carry the frame's own 1456:1080, so object-cover has nothing to
          crop and the whole photograph survives at every size: the walker is
          head-to-foot in the frame, and any vertical crop takes her head. The
          banner runs edge to edge and takes its height from that ratio, so
          phones and portrait tablets get the whole frame with no crop and no
          bars beside it. Only a wide, short window hits the 62svh ceiling, and
          there the crop is pushed to the bottom (object-position 12%) so the
          head and the ankle callout both survive. next/image serves AVIF/WebP
          at the size actually needed. The source itself is a 142KB WebP and
          lives beside this file rather than in public/, so the full-size
          original is never reachable as a plain URL the way it was when it
          sat in public/ as a 2MB PNG. */}
      <div className="relative aspect-[1456/1080] max-h-[62svh] w-full overflow-hidden desk:absolute desk:top-0 desk:right-0 desk:left-auto desk:aspect-auto desk:max-h-none desk:h-svh desk:w-[calc(100svh*1.3481)]">
        <Image
          src={heroImage}
          alt="A parent walking beside the water pushing a stroller, with the Strolla tracker worn on her ankle"
          fill
          preload
          placeholder="blur"
          sizes="(min-width: 1240px) 75vw, 100vw"
          className="object-cover object-[50%_12%] desk:object-right"
        />
        {/* Settles the banner's bottom edge into the page. Kept shallow so it
            lands on pavement rather than on her shoes. */}
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-[clamp(34px,11%,60px)] bg-gradient-to-t from-canvas to-transparent desk:hidden"
        />
      </div>

      <div aria-hidden className="wash hidden desk:block" />

      <div
        className={
          "relative z-10 flex flex-col justify-center px-[var(--gutter)] pt-[clamp(20px,5vw,34px)] " +
          "pb-[max(2.5rem,env(safe-area-inset-bottom))] " +
          "desk:min-h-svh desk:py-[var(--page-pad-y)] desk:pr-[4vw] desk:pl-[var(--pad-left)]"
        }
      >
        {/* Centred while stacked so a wide, short window doesn't strand the
            copy against the left edge; hard left once the photo is behind. */}
        <div className="mx-auto w-full max-w-[var(--copy)] desk:mx-0">
          <div className="rise flex items-center gap-2.5">
            <StrollaMark className="h-[1.05em] w-[0.85em] text-accent" />
            <span
              className={`font-extrabold tracking-[-0.03em] text-ink ${S.logo}`}
            >
              Strolla
            </span>
          </div>

          <h1
            className={`rise text-balance font-extrabold leading-[1.06] tracking-[-0.035em] text-ink ${S.h1}`}
            style={{ animationDelay: "40ms" }}
          >
            Finally, a fitness tracker that doesn&rsquo;t rely on{" "}
            <span className="whitespace-nowrap text-accent">arm movement.</span>
          </h1>

          {/* ch caps the measure for reading; the column caps it on a phone. */}
          <p
            className={`rise max-w-[52ch] leading-[1.5] text-ink ${S.lead}`}
            style={{ animationDelay: "75ms" }}
          >
            Most fitness trackers rely on arm movement, so they miss steps when
            your hands aren&rsquo;t swinging.
          </p>
          <p
            className={`rise max-w-[56ch] leading-[1.55] text-ink/85 ${S.body}`}
            style={{ animationDelay: "95ms" }}
          >
            <span className="font-bold text-ink">Strolla</span> is an ankle-worn
            fitness tracker designed to count every step, whether you&rsquo;re
            pushing a stroller, walking on a walking pad, carrying your little
            one, pushing a shopping cart, or simply prefer not to wear a watch.
          </p>

          <ul
            className={`rise grid grid-cols-2 gap-x-3 gap-y-3 sm:grid-cols-5 sm:gap-y-4 ${S.block}`}
            style={{ animationDelay: "120ms" }}
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
                <span
                  className={`font-semibold leading-[1.25] text-ink sm:min-h-[2.5em] ${S.case}`}
                >
                  {label}
                </span>
              </li>
            ))}
          </ul>

          {/* The card lays itself out from its OWN width, not the viewport's:
              it is the one block whose column count has to follow the copy
              column, which is fluid in both layouts. */}
          <div
            className={`rise @container ${S.block}`}
            style={{ animationDelay: "160ms" }}
          >
            <WaitlistForm />
          </div>
        </div>
      </div>
    </main>
  );
}
