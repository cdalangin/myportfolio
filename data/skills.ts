import {
  SiJavascript, SiTypescript, SiPython, SiHtml5, SiCss,
  SiReact, SiNextdotjs, SiTailwindcss, SiMui,
  SiNodedotjs, SiFirebase, SiGit, SiGithub, SiExpo,
  SiFigma, SiSnowflake, SiPostgresql, SiJira, SiJenkins, SiJava, SiBootstrap, SiGithubcopilot 
} from "react-icons/si";
import { FiPenTool, FiLayers } from "react-icons/fi";
import { RiMicrosoftFill, RiJavaFill } from "react-icons/ri";
import { PiFileCSharp } from "react-icons/pi";

export type Skill = { name: string; Icon: React.ElementType };
export type Category = { label: string; skills: Skill[] };

const categories: Category[] = [
  {
    label: "Frontend",
    skills: [
      { name: "React", Icon: SiReact },
      { name: "JavaScript", Icon: SiJavascript },
      { name: "TypeScript", Icon: SiTypescript },
      { name: "Next.js", Icon: SiNextdotjs },
      { name: "HTML", Icon: SiHtml5 },
      { name: "CSS", Icon: SiCss },
      { name: "Bootstrap", Icon: SiBootstrap },
      { name: "Tailwind CSS", Icon: SiTailwindcss },
      { name: "Material UI", Icon: SiMui },
    ],
  },
  {
    label: "Backend",
    skills: [
      { name: "Node.js", Icon: SiNodedotjs },
      { name: "Java", Icon: RiJavaFill },
      { name: "C#", Icon: PiFileCSharp },
      { name: "Python", Icon: SiPython },
    ],
  },
  {
    label: "Databases",
    skills: [
      { name: "PostgreSQL", Icon: SiPostgresql },
      { name: "SQL Server Management Studio", Icon: RiMicrosoftFill },
      { name: "Snowflake", Icon: SiSnowflake },
    ],
  },
  {
    label: "Workflow",
    skills: [
      { name: "Git", Icon: SiGit },
      { name: "GitHub", Icon: SiGithub },
      { name: "Jira", Icon: SiJira },
      { name: "Jenkins", Icon: SiJenkins },
      { name: "Github Copilot", Icon: SiGithubcopilot },
    ],
  },
  {
    label: "Design",
    skills: [
      { name: "Figma", Icon: SiFigma },
      { name: "Photoshop", Icon: FiLayers },
      { name: "Illustrator", Icon: FiPenTool },
    ],
  },
];
export default categories;
