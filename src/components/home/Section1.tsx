"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Column from "@/components/core/Column";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Row from "@/components/core/Row";
import socialLinks from "@/data/socialLinks";
import Image from "next/image";

const HomeSection1 = ({ id }: Readonly<{ id: string }>) => {
  return (
    <ResponsiveBox
      classNames="dark:bg-[var(--bgColor)] bg-[var(--bgColor)] dark:bg-grid-white/[0.1] bg-grid-white/[0.1] min-h-screen items-center justify-center relative overflow-hidden rounded-md"
      id={id}
    >
      <ConstrainedBox classNames="px-4 py-8 pt-16 z-20 items-center justify-center">
        <Column classNames="w-full items-center justify-center">
          <p className="text-2xl/normal sm:text-3xl/normal md:text-5xl/normal lg:text-6xl/normal xl:text-7xl/normal dark:text-[var(--textColor)] text-[var(--textColor)] font-bold text-center">
            Hello, I am Rama Krishna
          </p>

          <div className="flex flex-col md:flex-row items-center md:items-start justify-center w-full mt-12 lg:mt-8 gap-4 md:gap-2">
            <p className="text-lg leading-relaxed font-normal text-gray-100 max-w-2xl text-center md:text-justify md:mr-8">
              I&apos;m a curious and driven Software Engineer professional with a passion
              for transforming complex data into meaningful insights.  

              I love exploring big data and Generative AI, turning complex datasets
              into clear, actionable insights through visualization and analysis.  

              For me, working with data isn&apos;t just a job, it&apos;s a way to innovate,
              learn, and drive smarter decisions every day.
            </p>

            <Image
              src="/images/Professional_Photo.png"
              alt="Rama Krishna"
              width={224}   // adjust accordingly
              height={224}  // adjust accordingly
              className="rounded-xl object-cover shadow-lg"
            />
          </div>

          <div className="mt-12 lg:mt-8">
            <div className="gap-4 flex flex-col md:flex-row">
              <a
                href="/Resume/Rama_Krishna_Kamma_Resume.pdf"
                download="Rama_Krishna_Kamma_Resume.pdf"
                className="px-5 py-3 rounded-lg bg-[var(--primaryColor)] text-white font-medium text-center"
              >
                Download Resume
              </a>
            </div>
          </div>
        </Column>

        {/* Social Links */}
        <div className="mt-12 lg:mt-16 w-full flex flex-col items-center">
          <p className="text-base/6 font-medium">Follow me here</p>

          <Row classNames="mt-2 gap-2">
            {socialLinks.slice(0, 5).map((link, index) => (
              <Link
                key={`social-link-${index}`}
                href={link.url}
                target="_blank"
                className="app__outlined_btn !rounded-full !p-2 lg:!p-3 !aspect-square !border-[var(--textColor)]"
                aria-label={link.name}
              >
                {typeof link.icon === "string" ? null : (
                  <FontAwesomeIcon icon={link.icon} />
                )}
              </Link>
            ))}
          </Row>
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default HomeSection1;
