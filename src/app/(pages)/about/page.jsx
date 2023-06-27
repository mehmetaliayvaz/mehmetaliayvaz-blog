import AppLayout from "@/app/layouts/AppLayout";
import socialInfo from "@/app/data/socialInfo";
import { SiGmail } from "@icons-pack/react-simple-icons";

function About() {
  return (
    <AppLayout title="About">
      <div className="space-y-3 max-w-[800px] mx-auto text-center">
        <p>
          Years ago, I was creating blogs and corporate sites using wordpress.
          Then my adventure started by turning to software. I graduated from
          Beykent University Computer Engineering.
        </p>
        <p>
          I am actively working as a Frontend Developer. I have taken part in
          many projects both in the company and personally. I actively use Scss,
          Tailwind, Javascript, VueJs, NuxtJs, ReactJs, NextJs and Laravel
          technologies. You can access some of my works on the
          &quot;Portfolio&quot; page and follow them on Github.
        </p>
        <p>
          Whenever I have the opportunity, I write articles about my experiences
          on Medium.
        </p>
        <p>
          Besides software, I am interested in photography. You can find some of
          my photos on the &quot;Photos&quot; page. You can reach more of them
          through my Pexels account.
        </p>
        <p>You can follow and contact me from the links below.</p>
      </div>
      <div className="flex justify-center my-10">
        {socialInfo.map((item, index) => (
          <a
            key={index}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block p-2 text-2xl text-gray-700 hover:text-gray-900"
          >
            {item.icon}
          </a>
        ))}
      </div>
      <div className="flex justify-center my-10">
        <a href="mailto:mehmetaliayvaz61@gmail.com" className="flex space-x-3">
          <SiGmail />
          <span>mehmetaliayvaz61@gmail.com</span>
        </a>
      </div>
    </AppLayout>
  );
}

export default About;
