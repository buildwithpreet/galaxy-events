import { getGalleryData, addGalleryItem, deleteGalleryItem } from "@/lib/actions";
import { ImageIcon, Plus, Trash2, Film, Image as ImgIcon } from "lucide-react";
import Image from "next/image";

export default async function AdminGalleryPage() {
  const items = await getGalleryData();

  return (
    <div className="max-w-6xl">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-16">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-[#c9a84c]/20 rounded-sm border border-[#c9a84c]/30">
            <ImageIcon className="text-[#c9a84c]" size={24} />
          </div>
          <div>
            <h1 className="text-4xl font-heading font-bold text-white">Gallery Manager</h1>
            <p className="text-white/40 text-[10px] tracking-[0.4em] uppercase font-black mt-1">Cinematic Portfolio Control</p>
          </div>
        </div>

        {/* Modal-like Upload Form (Simple for now inlined) */}
        <div className="bg-[#111111] p-8 border border-white/5 w-full md:w-auto">
          <h2 className="text-[10px] tracking-[0.3em] font-black text-[#c9a84c] uppercase mb-6 flex items-center gap-2">
            <Plus size={14} /> Add New Media
          </h2>
          <form action={addGalleryItem} className="flex flex-col md:flex-row gap-4">
            <input name="title" placeholder="Project Title" className="bg-black border border-white/10 p-3 text-xs text-white outline-none w-full md:w-32" required />
            <select name="category" className="bg-black border border-white/10 p-3 text-xs text-white outline-none w-full md:w-32">
              <option>Weddings</option>
              <option>Birthdays</option>
              <option>Decor</option>
              <option>SFX & Fireworks</option>
              <option>Entries</option>
            </select>
            <select name="type" className="bg-black border border-white/10 p-3 text-xs text-white outline-none w-full md:w-32">
              <option value="image">Photo</option>
              <option value="video">Video</option>
            </select>
            <input type="file" name="file" className="text-[10px] text-white/40 file:bg-white/5 file:border-none file:text-white file:px-4 file:py-2 file:mr-4 file:cursor-pointer" required />
            <button type="submit" className="bg-[#c9a84c] text-[#111111] px-8 py-3 font-bold uppercase tracking-widest text-[10px]">Upload</button>
          </form>
        </div>
      </div>

      {/* Grid of existing items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.id} className="group relative bg-[#111111] border border-white/5 overflow-hidden">
            <div className="aspect-square relative">
              <Image 
                src={item.type === 'video' ? (item.poster || item.src) : item.src} 
                alt={item.title} 
                fill 
                className="object-cover opacity-60 group-hover:opacity-100 transition-opacity" 
              />
              <div className="absolute top-4 right-4 z-20 flex gap-2">
                {item.type === 'video' ? <Film size={14} className="text-[#c9a84c]" /> : <ImgIcon size={14} className="text-white/40" />}
              </div>
            </div>
            
            <div className="p-4 flex justify-between items-center bg-[#151515]">
              <div className="overflow-hidden">
                <p className="text-[10px] text-[#c9a84c] tracking-widest uppercase truncate">{item.category}</p>
                <h4 className="text-sm font-heading font-medium text-white truncate">{item.title}</h4>
              </div>
              <form action={async () => { "use server"; await deleteGalleryItem(item.id); }}>
                 <button className="p-2 text-white/20 hover:text-red-500 transition-colors">
                   <Trash2 size={16} />
                 </button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
