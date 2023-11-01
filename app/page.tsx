import ContributorSection from "@/components/core/ContributorSection";
import MessageForUser from "@/components/core/MessageForUser";
import SplashScreen from "@/components/core/SplashScreen";

export default function Home() {
  return (
    <main className="md:max-w-4xl mx-auto">
      <SplashScreen />
      <ContributorSection />
      <MessageForUser />
    </main>
  );
}
