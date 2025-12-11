import { ISkillListItem, SkillLevel } from "@/types";

const skills: ISkillListItem[] = [
  {
    title: "Big Data Technologies",
    items: [
      {
        title: "Databricks",
        level: SkillLevel.Expert,
        icon: "/skills/Databricks.svg",
      },
      {
        title: "Apache Spark",
        level: SkillLevel.Intermediate,
        icon: "/skills/spark.svg",
      },
      {
        title: "Azure Data Factory",
        level: SkillLevel.Expert,
        icon: "/skills/Azure_Data_Factory.svg",
      },
      {
        title: "Microsoft Fabric",
        level: SkillLevel.Expert,
        icon: "/skills/Power_Platform.svg",
      },
      {
        title: "Snowflake",
        level: SkillLevel.Expert,
        icon: "/skills/snowflake.png",
      },
    ],
  },
  {
    title: "Database Management",
    items: [
      {
        title: "MySQL",
        level: SkillLevel.Expert,
        icon: "/skills/MySQL.svg",
      },
      {
        title: "Mongo DB",
        level: SkillLevel.Expert,
        icon: "/skills/mongodb.svg",
      },
      {
        title: "Oracle DB",
        level: SkillLevel.Expert,
        icon: "/skills/oracledb.svg",
      },
      {
        title: "SQL Server",
        level: SkillLevel.Intermediate,
        icon: "/skills/sql_server.svg",
      },
      {
        title: "Big Query",
        level: SkillLevel.Intermediate,
        icon: "/skills/bigquery.svg",
      },
      {
        title: "DBeaver",
        level: SkillLevel.Intermediate,
        icon: "/skills/dbeaver.png",
      },
      {
        title: "PostgreSQL",
        level: SkillLevel.Intermediate,
        icon: "/skills/postgresql.svg",
      },
    ],
  },
  {
    title: "Programming Languages",
    items: [
      {
        title: "Python",
        level: SkillLevel.Expert,
        icon: "/skills/python.svg",
      },
      {
        title: "Java",
        level: SkillLevel.Expert,
        icon: "/skills/java.svg",
      },
      {
        title: "C++",
        level: SkillLevel.Intermediate,
        icon: "/skills/c++.svg",
      },
      {
        title: "C",
        level: SkillLevel.Beginner,
        icon: "/skills/c.svg",
      },
    ],
  },
  {
    title: "Storage and Management",
    items: [
      {
        title: "Blob",
        level: SkillLevel.Expert,
        icon: "/skills/Storage_Accounts.svg",
      },
      {
        title: "ADLS Gen2",
        level: SkillLevel.Expert,
        icon: "/skills/adls.svg",
      },
      {
        title: "Synpase Analytics",
        level: SkillLevel.Expert,
        icon: "/skills/synapse.svg",
      },
    ],
  },
  {
    title: "Cloud",
    items: [
      {
        title: "Azure",
        level: SkillLevel.Intermediate,
        icon: "/skills/azure.png",
      },
      {
        title: "Amazon",
        level: SkillLevel.Beginner,
        icon: "/skills/aws.svg",
      },
      {
        title: "Google",
        level: SkillLevel.Beginner,
        icon: "/skills/gcp.png",
      },
    ],
  },
  {
    title: "DevOps",
    items: [
      {
        title: "Azure DevOps",
        level: SkillLevel.Expert,
        icon: "/skills/devops.png",
      },
      {
        title: "Docker",
        level: SkillLevel.Beginner,
        icon: "/skills/docker.png",
      },
      {
        title: "Git",
        level: SkillLevel.Expert,
        icon: "/skills/git.svg",
      },
      {
        title: "GitHub",
        level: SkillLevel.Expert,
        icon: "/skills/github.svg",
      },
    ],
  },
  {
    title: "Miscellaneous",
    items: [
      {
        title: "Postman",
        level: SkillLevel.Intermediate,
        icon: "/skills/postman.svg",
      },
      {
        title: "JIRA",
        level: SkillLevel.Intermediate,
        icon: "/skills/jira.svg",
      },
      // {
      //   title: "Figma",
      //   level: SkillLevel.Intermediate,
      //   icon: "/skills/figma.png",
      // },
      {
        title: "Confluence",
        level: SkillLevel.Intermediate,
        icon: "/skills/Confluence.svg",
      },
      {
        title: "Power BI",
        level: SkillLevel.Intermediate,
        icon: "/skills/PowerBI.svg",
      },
      {
        title: "Airflow",
        level: SkillLevel.Intermediate,
        icon: "/skills/airflow.svg",
      },
      // {
      //   title: "Kafka",
      //   level: SkillLevel.Intermediate,
      //   icon: "/skills/kafka.png",
      // },
      {
        title: "PowerApps",
        level: SkillLevel.Intermediate,
        icon: "/skills/power_apps.png",
      },
      {
        title: "Power Automate",
        level: SkillLevel.Intermediate,
        icon: "/skills/power_automate.png",
      },
    ],
  },
  {
    title: "Nontechnical Skills",
    items: [
      {
        title: "Problem Solving",
        level: SkillLevel.Expert,
        icon: "/images/logical-thinking.png",
      },
      {
        title: "Collaboration",
        level: SkillLevel.Expert,
        icon: "/images/collaboration.png",
      },
      {
        title: "Analytical Skills",
        level: SkillLevel.Expert,
        icon: "/images/analytical-skills.png",
      },
    ],
  },
];

export default skills;
