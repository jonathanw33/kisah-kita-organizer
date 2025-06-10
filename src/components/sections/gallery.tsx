"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Filter, X, Calendar, Users, Building, GraduationCap, Heart } from "lucide-react";

interface AnimateChangeInHeightProps {
  children: React.ReactNode;
  className?: string;
}

const AnimateChangeInHeight: React.FC<AnimateChangeInHeightProps> = ({
  children,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number | "auto">("auto");

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        const observedHeight = entries[0].contentRect.height;
        setHeight(observedHeight);
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        resizeObserver.disconnect();
      };
    }
  }, []);

  return (
    <motion.div
      className={cn(className, "overflow-hidden")}
      style={{ height }}
      animate={{ height }}
      transition={{ duration: 0.1, damping: 0.2, ease: "easeIn" }}
    >
      <div ref={containerRef}>{children}</div>
    </motion.div>
  );
};
interface EventImage {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
  date: string;
  guests: number;
}

interface EventGalleryProps {
  title?: string;
  description?: string;
  images?: EventImage[];
}

const eventCategories = [
  { name: "All", icon: <Calendar className="size-4" />, color: "#9DAF89" },
  { name: "Wedding Receptions", icon: <Heart className="size-4" />, color: "#9DAF89" },
  { name: "Birthday", icon: <Calendar className="size-4" />, color: "#9DAF89" },
  { name: "Graduation Photoshoot", icon: <GraduationCap className="size-4" />, color: "#9DAF89" },
  { name: "Family Gathering", icon: <Users className="size-4" />, color: "#9DAF89" },
  { name: "Company Gathering", icon: <Building className="size-4" />, color: "#9DAF89" },
];

const defaultImages: EventImage[] = [
  {
    id: "1",
    title: "Elegant Garden Wedding Reception",
    category: "Wedding Receptions",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop",
    description: "A beautiful outdoor ceremony with floral arrangements and stunning ocean views. The bride and groom arrived by boat, creating an unforgettable moment.",
    date: "2024-06-15",
    guests: 120,
  },
  {
    id: "2",
    title: "Sweet 16 Birthday Celebration",
    category: "Birthday",
    image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?q=80&w=2070&auto=format&fit=crop",
    description: "Colorful and vibrant birthday party with custom decorations and themed entertainment for a memorable milestone celebration.",
    date: "2024-03-22",
    guests: 45,
  },
  {
    id: "3",
    title: "University Graduation Photoshoot",
    category: "Graduation Photoshoot",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop",
    description: "Professional graduation photography session capturing the achievement and joy of completing university studies.",
    date: "2024-05-18",
    guests: 200,
  },
  {
    id: "4",
    title: "Annual Family Reunion",
    category: "Family Gathering",
    image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=2069&auto=format&fit=crop",
    description: "Multi-generational family gathering with traditional setup, bringing together relatives from across the country.",
    date: "2024-07-04",
    guests: 80,
  },
  {
    id: "5",
    title: "Corporate Annual Gala",
    category: "Company Gathering",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2070&auto=format&fit=crop",
    description: "Professional corporate event with elegant table settings and award ceremony for outstanding employees.",
    date: "2024-04-10",
    guests: 150,
  },
  {
    id: "6",
    title: "Beach Wedding Reception",
    category: "Wedding Receptions",
    image: "https://images.unsplash.com/photo-1465495976277-4387d4b0e4a6?q=80&w=2069&auto=format&fit=crop",
    description: "Romantic beachside wedding reception with ocean views and sunset ceremony creating magical memories.",
    date: "2024-08-12",
    guests: 90,
  },
  {
    id: "7",
    title: "Milestone 50th Birthday Party",
    category: "Birthday",
    image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?q=80&w=2069&auto=format&fit=crop",
    description: "Sophisticated 50th birthday celebration with elegant decorations and memorable entertainment.",
    date: "2024-09-05",
    guests: 65,
  },
  {
    id: "8",
    title: "High School Graduation Photoshoot",
    category: "Graduation Photoshoot",
    image: "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?q=80&w=2069&auto=format&fit=crop",
    description: "Traditional graduation photography session celebrating academic achievements with school colors and caps.",
    date: "2024-06-01",
    guests: 75,
  },
  {
    id: "9",
    title: "Holiday Family Gathering",
    category: "Family Gathering",
    image: "https://images.unsplash.com/photo-1574391884720-bbc3740c59d1?q=80&w=2069&auto=format&fit=crop",
    description: "Festive holiday celebration with seasonal decorations and multi-course traditional dinner.",
    date: "2024-12-24",
    guests: 35,
  },
];

const EventCard = React.memo(
  ({
    image,
    index,
    hovered,
    setHovered,
  }: {
    image: EventImage;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "group relative overflow-hidden rounded-xl bg-background border border-border transition-all duration-300 ease-out cursor-pointer",
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image.image}
          alt={image.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300",
          hovered === index && "opacity-100"
        )}
      />
      <div
        className={cn(
          "absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full transition-transform duration-300",
          hovered === index && "translate-y-0"
        )}
      >
        <h3 className="text-lg font-semibold mb-2">{image.title}</h3>
        <p className="text-sm text-gray-200 mb-3">{image.description}</p>
        <div className="flex items-center justify-between text-xs">
          <Badge 
            variant="secondary" 
            className="bg-[#9DAF89] text-white hover:bg-[#8A9B7A]"
          >
            {image.category}
          </Badge>
          <span className="text-gray-300">{image.guests} guests</span>
        </div>
      </div>
    </motion.div>
  )
);

EventCard.displayName = "EventCard";

const EventGallery = ({
  title = "Event Gallery",
  description = "Discover our portfolio of memorable events across different categories. From intimate family gatherings to grand corporate celebrations, we bring your vision to life with meticulous attention to detail.",
  images = defaultImages,
}: EventGalleryProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hovered, setHovered] = useState<number | null>(null);
  const [open, setOpen] = useState(false);

  const filteredImages = selectedCategory === "All" 
    ? images 
    : images.filter(image => image.category === selectedCategory);

  return (
    <section id="gallery" className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-[#9DAF89]">{title}</span>
          </h2>
          <div className="w-24 h-1 bg-[#9DAF89] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{description}</p>
          <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg max-w-2xl mx-auto">
            <p className="text-sm text-yellow-800">
              <strong>Note:</strong> This gallery will be populated with our actual event photos as we complete more projects and gather client permissions.
            </p>
          </div>
        </motion.div>

        {/* Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <div className="flex flex-wrap gap-2">
            {eventCategories.map((category) => (
              <Button
                key={category.name}
                variant={selectedCategory === category.name ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedCategory(category.name)}
                className={cn(
                  "flex items-center gap-2 transition-all duration-200",
                  selectedCategory === category.name 
                    ? "bg-[#9DAF89] hover:bg-[#8A9B7A] text-white border-[#9DAF89]" 
                    : "border-gray-300 text-gray-700 hover:bg-[#9DAF89]/10 hover:border-[#9DAF89] hover:text-[#9DAF89]"
                )}
              >
                {category.icon}
                {category.name}
              </Button>
            ))}
          </div>

          {/* Mobile Filter Dropdown */}
          <div className="md:hidden">
            <Popover open={open} onOpenChange={setOpen}>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex items-center gap-2"
                >
                  <Filter className="size-4" />
                  Filter
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-56 p-0">
                <AnimateChangeInHeight>
                  <Command>
                    <CommandInput placeholder="Search categories..." />
                    <CommandList>
                      <CommandEmpty>No categories found.</CommandEmpty>
                      <CommandGroup>
                        {eventCategories.map((category) => (
                          <CommandItem
                            key={category.name}
                            value={category.name}
                            onSelect={() => {
                              setSelectedCategory(category.name);
                              setOpen(false);
                            }}
                            className="flex items-center gap-2"
                          >
                            {category.icon}
                            {category.name}
                          </CommandItem>
                        ))}
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </AnimateChangeInHeight>
              </PopoverContent>
            </Popover>
          </div>
        </motion.div>

        {/* Results Count */}
        <div className="flex items-center justify-between mb-8">
          <p className="text-sm text-muted-foreground">
            Showing {filteredImages.length} {filteredImages.length === 1 ? 'event' : 'events'}
            {selectedCategory !== "All" && ` in ${selectedCategory}`}
          </p>
          {selectedCategory !== "All" && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSelectedCategory("All")}
              className="text-[#9DAF89] hover:text-[#8A9B7A] hover:bg-[#9DAF89]/10"
            >
              <X className="size-4 mr-1" />
              Clear filter
            </Button>
          )}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <EventCard
                key={image.id}
                image={image}
                index={index}
                hovered={hovered}
                setHovered={setHovered}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              No events found
            </h3>
            <p className="text-muted-foreground mb-4">
              We don&rsquo;t have any events in this category yet.
            </p>
            <Button
              onClick={() => setSelectedCategory("All")}
              variant="outline"
              className="border-[#9DAF89] text-[#9DAF89] hover:bg-[#9DAF89] hover:text-white"
            >
              View all events
            </Button>
          </motion.div>
        )}

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Create Your Own Story?
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
              Let us help you plan an unforgettable event that will become a cherished memory for years to come.
            </p>
            <Button 
              size="lg"
              className="bg-[#9DAF89] hover:bg-[#8A9B7A] text-white font-semibold px-8 py-3 rounded-full transition-colors duration-300 shadow-lg"
            >
              Start Planning Your Event
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EventGallery;
