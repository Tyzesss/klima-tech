import { SITE_NAME, LOGO_URL } from "@/lib/site";
import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
  imageClassName?: string;
  showName?: boolean;
};

function BrandWordmark({ className }: { className?: string }) {
  const [lead, tail] = SITE_NAME.includes("-") ? SITE_NAME.split("-", 2) : [SITE_NAME, ""];

  return (
    <span className={cn("site-wordmark flex items-center leading-none", className)}>
      <span className="text-white">{lead}</span>
      {tail ? (
        <>
          <span className="text-white">-</span>
          <span className="text-logo-orange">{tail}</span>
        </>
      ) : null}
    </span>
  );
}

export function SiteLogo({ className, imageClassName, showName = true }: SiteLogoProps) {
  if (LOGO_URL) {
    return (
      <span className={cn("inline-flex h-11 items-center gap-2.5 md:h-12 md:gap-3", className)}>
        <img
          src={LOGO_URL}
          alt=""
          aria-hidden
          className={cn("h-full w-auto object-contain", imageClassName)}
          width={200}
          height={48}
        />
        {showName ? <BrandWordmark /> : null}
      </span>
    );
  }

  return <BrandWordmark className={className} />;
}
