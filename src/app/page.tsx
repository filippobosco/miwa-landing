import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LaunchSection from "@/components/LaunchSection";
import CategoriesGrid from "@/components/CategoriesGrid";
import HowItWorks from "@/components/HowItWorks";
import LeadForm from "@/components/LeadForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <LaunchSection />
      <CategoriesGrid />
      <HowItWorks />
      <LeadForm />
      <Footer />
    </main>
  );
}
