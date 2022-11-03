import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import YoutubeEmbed from "../components/Utils/YoutubeEmbed";

const About = () => {
  return (
    <>
      <Hero Children="About" />

      <div className="container flex px-2 pt-10 mx-auto max-w-5xl">
        <div className="basis-1/2 px-2 bg-gray-100 pt-3">
          <YoutubeEmbed
            title="Rick and Morty Theatrical Trailer"
            embedId="_uUcMwsR5hg"
          />
        </div>
        <div className="lg:basis-1/2 px-2">
          <p className="text-md text-slate-800">
            <span className="font-bold">Rick and Morty</span> is an American
            adult animated science-fiction sitcom created by Justin Roiland and
            Dan Harmon for Cartoon Network's nighttime programming block Adult
            Swim. It is distributed internationally by Warner Bros. Domestic
            Television. The series follows the misadventures of cynical mad
            scientist Rick Sanchez and his good-hearted but fretful grandson
            Morty Smith, who split their time between domestic life and
            interdimensional adventures that take place across an infinite
            number of realities, often travelling to other planets and
            dimensions through portals and on Rick's flying saucer. The general
            concept of Rick and Morty relies on two conflicting scenarios:
            domestic family drama, and an alcoholic grandfather dragging his
            grandson into high jinks.
          </p>

          <p className="mt-4">
            Continue reading on{" "}
            <a
              className="italic underline"
              href="https://en.wikipedia.org/wiki/Rick_and_Morty"
            >
              Wikipedia
            </a>
          </p>

          <div className="mt-4">
            Watch Show on{" "}
            <a
              className="italic underline"
              href="https://www.netflix.com/title/80014749"
            >
              Netflix
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
