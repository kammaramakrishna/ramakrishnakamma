import LocalConfig from "@/constants/config";
import Link from "next/link";

const ResumeButton = () => {
  return (
    <Link
      className="app__outlined_btn min-w-[10rem]"
<<<<<<< HEAD
      href={LocalConfig.values.NEXT_PUBLIC_RESUME_LINK}
=======
      href={LocalConfig.values.NEXT_PUBLIC_RESUME_URL}
>>>>>>> 7f8c69059cb9778cfc9ce309bc6660dd5c1b3e81
      // href={"https://github.com/kammaramakrishna/Databricks_Hackathon"}
      target="_blank"
    >
      Download Resume
    </Link>
  );
};

export default ResumeButton;
