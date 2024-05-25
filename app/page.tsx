import PersonalInfo from "@/components/PersonalInfo";
import MobileStep from "@/components/ui/MobileStep";
import DesktopStep from "@/components/ui/DesktopStep";
import MobileNavigate from "@/components/ui/MobileNavigate";
import DesktopNavigate from "@/components/ui/DesktopNavigate";

// sm kahandap atau hp atau max-sm make nu mobile design
// sm/tablet atawa sm kaluhur make nu desktop design
export default function Home() {
  return (
    <main className="mainStyle">
      <MobileStep />
      <section className="sectionStyle">
        <div className="formStyle">
          <DesktopStep />
          <div className=" flex flex-[1] w-full h-full  justify-center">
            <PersonalInfo />
          </div>
        </div>
      </section>
      <MobileNavigate
            headTo={"plan"}
            stepState={"personalInfo"}
          />
    </main>
  );
}
