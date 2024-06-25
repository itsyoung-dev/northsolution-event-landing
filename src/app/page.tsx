import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        preTitle="North Solution Benefits"
      >
      The North Solution is a server that brings developers, programmers, and even people searching for them! 
      We provide YouTube tutorials for certain languages and/or projects (such as Discord.js).
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Watch our Latest video"
        title="Learn how to fullfil your needs"
      >
        View our newest Discord.js videos which you can learn a lot from our series.
      </SectionTitle>

      <Video videoId="vWJyodtgtJ8" />

      <SectionTitle
        preTitle="Testimonials"
        title="Here's what the Staff Like about Me"
      >
        Testimonials help provide trust among new buyers.
      </SectionTitle>

      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
