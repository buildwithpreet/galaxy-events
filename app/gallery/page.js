import GalleryContent from "@/components/page-sections/GalleryContent";
import { getGalleryData } from "@/lib/actions";

export const metadata = {
  title: "Event Gallery | Portfolio of Galaxy Events",
  description: "Browse our stunning portfolio of luxury weddings, sangeet ceremonies, and grand entries in and around Hoshangabad.",
};

export default async function GalleryPage() {
  const data = await getGalleryData();
  
  return <GalleryContent initialImages={data} />;
}
