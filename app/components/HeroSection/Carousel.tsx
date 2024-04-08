"use client";

import React from "react";
import clsx from "clsx";
import { getRandomBetween } from "@/app/utils";

import carouselJson from "../../mocks/persons.json";
import { type CarouselItem, carouselSchema } from "../../schemas/carousel";

const carouselData = carouselSchema.parse(carouselJson);

const names = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hank",
  "Ivy",
  "Jack",
];

export default function Carousel({
  className,
}: React.ComponentProps<"section">) {
  const [show, setShow] = React.useState(false);
  React.useEffect(() => {
    setShow(true);
  }, []);

  return (
    <>
      <section className={className}>
        <div
          className={clsx(
            "grid grid-flow-col [--card-gap:32px] [--card-speed:6s] gap-[--card-gap] [grid-auto-columns:min-content] min-w-fit",
            "animate-slide"
          )}
        >
          {[...carouselData, ...carouselData].map((props, index) => (
            <CarouselItem key={props.name + index} show={show} {...props} />
          ))}
        </div>
      </section>
      <style jsx global>{`
        :root {
          --card-number: ${names.length * 2};
        }

        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50% - var(--card-gap) / 2));
          }
        }
      `}</style>
    </>
  );
}

type CarouselItemProps = {
  show?: boolean;
} & CarouselItem;
function CarouselItem({
  show,
  name,
  mediaType,
  mediaUrl,
  surname,
  tags,
}: CarouselItemProps) {
  const revealDelay = getRandomBetween(0, 1);
  return (
    <div
      style={
        {
          "--card-reveal-delay": `${revealDelay}s`,
          "--card-opacity": show ? 1 : 0,
          transform: show
            ? `perspective(300px) translate3d(0, 0, 0)`
            : `perspective(300px) translate3d(0, 0, 16px)`,
        } as React.CSSProperties
      }
      className={clsx(
        "w-[273px] aspect-card rounded-[32px] relative overflow-hidden",
        "flex items-center justify-center text-white font-serif text-2xl",
        "opacity-[--card-opacity] animate-card-reveal",
        "transition-all duration-[600ms] ease-out delay-[--card-reveal-delay]"
      )}
    >
      {mediaType === "image" ? (
        <img
          className="absolute inset-0 object-cover h-full -z-10"
          src={mediaUrl}
          alt={name}
        />
      ) : (
        <video
          className="absolute inset-0 object-cover h-full -z-10"
          src={mediaUrl}
          autoPlay
          loop
          muted
        />
      )}
      <div
        className={clsx(
          "flex flex-col justify-end p-4 h-full w-full text-[13px] leading-[13px] space-y-2",
          "font-mona font-semibold",
          "transition-all duration-1000 ease-out delay-[--infos-delay]"
        )}
        style={
          {
            backgroundImage:
              "linear-gradient(rgba(0, 0, 0, 0) 51.91%, rgba(0, 0, 0, 0.3) 75.88%)",
            "--infos-delay": `${revealDelay + .3}s`,
            transform: show
              ? `perspective(300px) translate3d(0, 0, 0)`
              : `perspective(300px) translate3d(0, 0, 16px)`,
            opacity: show ? 1 : 0,
          } as React.CSSProperties
        }
      >
        <span>{name}</span>
        <span>{surname}</span>
        <ul className="flex space-x-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="border font-normal text-[11px] px-3 py-[2px] border-white/20 rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
