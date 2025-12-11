import LocalConfig from "@/constants/config";
import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[10rem]"
      href={LocalConfig.values.NEXT_PUBLIC_RESUME_LINK}
      // href={"https://github.com/kammaramakrishna/Databricks_Hackathon"}
      target="_blank"
    >
      Download Resume
    </Link>
  );
};

export default ResumeButton;
