import HomeContent from "@/components/page-sections/HomeContent";
import { getHeroData, getGalleryData, getServicesData } from "@/lib/actions";

export const metadata = {
  title: "Galaxy Events | Premium Event Management in Hoshangabad",
  description: "Where Every Moment Becomes a Memory. High-end event planning, luxury weddings, and cinematic entries in Hoshangabad, Madhya Pradesh.",
};

export default async function Home() {
  const heroData = await getHeroData();
  const servicesData = await getServicesData();
  const galleryTeaserData = await getGalleryData(); // maybe limit to first 6?
  
  return (
    <HomeContent 
      initialHero={heroData} 
      initialServices={servicesData} 
      initialGalleryTeaser={galleryTeaserData.slice(0, 6)} 
    />
  );
}
