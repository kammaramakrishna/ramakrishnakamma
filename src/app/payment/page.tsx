import dynamic from "next/dynamic";

const PageBox = dynamic(() => import("@/components/core/PageBox"));

const Home = () => {
  return (
    <PageBox>
      <> </> {/* empty children */}
    </PageBox>
  );
};

export default Home;
