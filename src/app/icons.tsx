type IconProps = React.SVGProps<SVGSVGElement>;

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.7,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** The Strolla mark: the stride waveform the tracker reads at the ankle. */
export function StrollaMark(props: IconProps) {
  return (
    <svg viewBox="0 0 19 23" fill="none" aria-hidden {...props}>
      <path
        d="M1.8 8.4c2.5-4.2 5-4.2 7.5 0c2.5 4.2 5 4.2 7.5 0"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M1.8 15.6c2.5-4.2 5-4.2 7.5 0c2.5 4.2 5 4.2 7.5 0"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function StrollerIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <g {...stroke}>
        <path d="M4 12.2h11.4A6.4 6.4 0 0 0 9 5.8H4v6.4Z" />
        <path d="M15.4 12.2 19.6 6.6" />
        <path d="M5.6 15.2h8.6" />
        <path d="M6.3 12.2 7.5 15.2" />
        <path d="M13.2 12.2 12.6 15.2" />
        <circle cx="7.6" cy="17.9" r="1.7" />
        <circle cx="14.4" cy="17.9" r="1.7" />
      </g>
    </svg>
  );
}

export function WalkingPadIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <g {...stroke}>
        <rect x="2.5" y="14.4" width="14" height="4" rx="2" />
        <path d="M16.5 16.4h1.2a2 2 0 0 0 1.94-1.5L21.5 6.2" />
        <path d="M5 16.4h8.5" />
        <path d="M4.6 18.4v1.6M14.4 18.4v1.6" />
      </g>
    </svg>
  );
}

export function CarryingIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <g {...stroke}>
        <circle cx="8.6" cy="5" r="2.6" />
        <path d="M4.5 20.5v-6.4a4.1 4.1 0 0 1 4.1-4.1a4.1 4.1 0 0 1 4.1 4.1v.9" />
        <circle cx="16" cy="12.4" r="2.4" />
        <path d="M12.7 15.6h3.9a2.1 2.1 0 0 0 0-4.2" />
        <path d="M7.2 20.5v-3.4" />
      </g>
    </svg>
  );
}

export function CartIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <g {...stroke}>
        <path d="M2.6 3.6h2.2l2.5 10.5a1.7 1.7 0 0 0 1.66 1.3h7.3a1.7 1.7 0 0 0 1.66-1.3l1.48-6H6.1" />
        <circle cx="9.4" cy="19.4" r="1.5" />
        <circle cx="16.8" cy="19.4" r="1.5" />
      </g>
    </svg>
  );
}

export function NoWatchIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <g {...stroke}>
        <rect x="7" y="7" width="10" height="10" rx="3.2" />
        <path d="M9.6 7V4.6a1.1 1.1 0 0 1 1.1-1.1h2.6a1.1 1.1 0 0 1 1.1 1.1V7" />
        <path d="M9.6 17v2.4a1.1 1.1 0 0 0 1.1 1.1h2.6a1.1 1.1 0 0 0 1.1-1.1V17" />
        <path d="M3.6 20.4 20.4 3.6" />
      </g>
    </svg>
  );
}

export function UsersIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden {...props}>
      <g {...stroke}>
        <circle cx="9.2" cy="8.4" r="3.1" />
        <path d="M3.4 19.2a5.8 5.8 0 0 1 11.6 0" />
        <path d="M16 5.6a3.1 3.1 0 0 1 0 5.9" />
        <path d="M17.6 14.2a5.8 5.8 0 0 1 3 5" />
      </g>
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden {...props}>
      <path
        d="m4.5 10.4 3.6 3.6 7.4-8.2"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function ArrowIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden {...props}>
      <path
        d="M2.5 8h11m0 0L9.5 4m4 4-4 4"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function LockIcon(props: IconProps) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden {...props}>
      <rect x="3" y="7" width="10" height="7" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5.5 7V5a2.5 2.5 0 0 1 5 0v2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}
