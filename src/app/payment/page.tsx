import dynamic from "next/dynamic";

const PageBox = dynamic(() => import("@/components/core/PageBox"));
<<<<<<< HEAD
const PaymentMainSection = dynamic(
  () => import("@/components/payment/MainSection")
);
=======
>>>>>>> 7f8c69059cb9778cfc9ce309bc6660dd5c1b3e81

const Home = () => {
  return (
    <PageBox>
<<<<<<< HEAD
      <PaymentMainSection />
=======
      <> </> {/* empty children */}
>>>>>>> 7f8c69059cb9778cfc9ce309bc6660dd5c1b3e81
    </PageBox>
  );
};

export default Home;
