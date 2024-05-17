import PersonalInfo from "@/components/PersonalInfo";
import MobileStep from "@/components/ui/MobileStep";
import DesktopStep from "@/components/ui/DesktopStep";
import MobileNavigate from "@/components/ui/MobileNavigate";

// sm kahandap atau hp atau max-sm make nu mobile design
// sm/tablet atawa sm kaluhur make nu desktop design
export default function Home() {
  return (
    <main className="mainStyle">
      <MobileStep />
      <section className="formSection">
        <DesktopStep />
        <div className="flex flex-[1] w-full h-full  justify-center">
          <PersonalInfo />
        </div>
      </section>
      <MobileNavigate headTo="plan" />
    </main>
  );
}
