import { IProjectItem, ProjectType, RepoType } from "@/types";

const projects: IProjectItem[] = [
  {
    id: " AI_Health_Risk_Agent",
    title: " AI Health Risk Agent",
    description:
      "An AI-driven health risk prediction platform developed on Databricks Free Edition using PySpark ML, MLflow, and SQL. Integrated AgentBricks and Genie AI to enable natural-language analytics and automated insights. Delivered end-to-end MLOps pipelines and an interactive BI dashboard for visualizing heart-disease risk patterns.",
    icon: "/skills/Databricks.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/kammaramakrishna/Databricks_Hackathon",
    // url: "https://github.com/kammaramakrishna/Databricks_Hackathon",
    tags: ["Databricks", "Azure", "MLflow", "Genie", "AI", "AI/BI"],
  },
  {
    id: "Genome_Sequence_Analysis",
    title: "Genome Sequence Analysis",
    description:
      "A distributed big-data processing pipeline developed using Hadoop MapReduce to analyze genome sequencing data at scale. Implemented mapper, reducer, combiner, and partitioner components to process large datasets efficiently with fault tolerance and parallel execution. Designed the system to demonstrate scalable analytics for genomic research and high-volume data environments.",
    icon: "/skills/genome.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/kammaramakrishna/Data-Bricks-Project",
    // url: "https://github.com/kammaramakrishna/Data-Bricks-Project",
    tags: ["Haddop", "MapReduce", "Big Data", "Genome"],
  },
  {
    id: "Sales_Analysis",
    title: "Sales Analysis",
    description:
      "A data-driven sales performance dashboard designed in Power BI to analyze revenue trends, product profitability, and customer purchasing patterns. Built using advanced DAX measures, star-schema modeling, and Power Query transformations to ensure high accuracy and fast refresh. Delivered interactive visuals and KPIs enabling stakeholders to make informed, real-time decisions.",
    icon: "/skills/PowerBI.svg",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/kammaramakrishna/Microsoft-Power-BI/tree/main/Sales_Analysis",
    // url: "https://github.com/kammaramakrishna/Microsoft-Power-BI/tree/main/Sales_Analysis",
    tags: ["PowerBI", "Sales", "Analysis", "Dashboard"],
  },
  {
    id: "Medical_Chatbot",
    title: "Medical Chatbot",
    description:
      "A comprehensive AI-powered medical chatbot designed to provide multilingual, accessible, and reliable healthcare guidance. Built by fine-tuning language models, integrating a high-precision translation system, and incorporating a secure information-retrieval engine that pulls data from trusted sources in real time. Ensures user privacy through anonymized interactions.",
    icon: "/skills/chatbot.png",
    repoType: RepoType.Public,
    projectType: ProjectType.Personal,
    githubUrl: "https://github.com/kammaramakrishna/Research",
    tags: ["AI", "Chatbot", "LLM", "Medical"],
  },
];
export default projects;
