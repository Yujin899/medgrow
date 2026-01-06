"use client";

import { useRef } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

type Testimonial = {
    name: string;
    role: string;
    image: string;
    quote: string;
};

const testimonials: Testimonial[] = [
    {
        name: "Dr. Ahmed Hassan",
        role: "Dental Clinic - Cairo",
        image: "https://randomuser.me/api/portraits/men/1.jpg",
        quote: "MedGrow transformed our online presence. We went from zero patient inquiries to 30+ monthly calls within 3 months.",
    },
    {
        name: "Dr. Sara Mahmoud",
        role: "Dermatology Clinic - Alexandria",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
        quote: "The content strategy is perfect for medical practices. They understand how to build trust without being salesy.",
    },
    {
        name: "Dr. Mohamed Ali",
        role: "Dental Center - Tanta",
        image: "https://randomuser.me/api/portraits/men/7.jpg",
        quote: "Finally, a growth partner that gets healthcare. No more explaining medical compliance to marketers!",
    },
    {
        name: "Dr. Nour El-Din",
        role: "Solo Dental Practice - Giza",
        image: "https://randomuser.me/api/portraits/men/8.jpg",
        quote: "I was skeptical about monthly plans, but the Growth Plan paid for itself in the first month from new patient bookings.",
    },
    {
        name: "Dr. Layla Kamel",
        role: "Family Clinic - Mansoura",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
        quote: "MedGrow handles everything from content to landing pages. I can focus on patients while they handle the growth.",
    },
    {
        name: "Dr. Youssef Ibrahim",
        role: "Orthodontics Clinic - Zagazig",
        image: "https://randomuser.me/api/portraits/men/2.jpg",
        quote: "The Clinic System Plan gave us a complete digital transformation. Website, ads, and even appointment management!",
    },
    {
        name: "Dr. Hana Mostafa",
        role: "Dental Clinic - Cairo",
        image: "https://randomuser.me/api/portraits/women/5.jpg",
        quote: "Best investment for our clinic. The team understands dental marketing and delivers real results, not just posts.",
    },
    {
        name: "Dr. Khaled Sayed",
        role: "Multi-Specialty Clinic - Alexandria",
        image: "https://randomuser.me/api/portraits/men/9.jpg",
        quote: "Their WhatsApp funnel setup tripled our inquiry response rate. Patients love how easy it is to reach us now.",
    },
    {
        name: "Dr. Mariam Adel",
        role: "Pediatric Dental Clinic - Giza",
        image: "https://randomuser.me/api/portraits/women/10.jpg",
        quote: "Affordable, professional, and results-driven. MedGrow is exactly what growing clinics need.",
    },
];

const chunkArray = (array: Testimonial[], chunkSize: number) => {
    const result: Testimonial[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize));
    }
    return result;
};

const testimonialChunks = chunkArray(
    testimonials,
    Math.ceil(testimonials.length / 3)
);

const TestimonialColumn = ({
    chunk,
    columnIndex,
    scrollYProgress,
}: {
    chunk: Testimonial[];
    columnIndex: number;
    scrollYProgress: MotionValue<number>;
}) => {
    const isReverse = columnIndex % 2 !== 0;

    // تحويل قيمة السكرول لمسافة بيكسل
    const y = useTransform(
        scrollYProgress,
        [0, 1],
        isReverse ? [-500, 0] : [0, -500]
    );

    return (
        <motion.div
            style={{ y }}
            className="space-y-3" // رجعت المسافات زي ما كانت بسيطة
        >
            {[...chunk, ...chunk].map((testimonial, index) => (
                <Card key={`${columnIndex}-${index}`}>
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                        <Avatar className="size-9">
                            <AvatarImage src={testimonial.image} alt={testimonial.name} />
                            <AvatarFallback>{testimonial.name.slice(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h3 className="font-medium">{testimonial.name}</h3>
                            <span className="block text-sm text-muted-foreground">
                                {testimonial.role}
                            </span>
                            <blockquote className="mt-3">
                                <p className="text-sm leading-relaxed">
                                    {testimonial.quote}
                                </p>
                            </blockquote>
                        </div>
                    </CardContent>
                </Card>
            ))}
        </motion.div>
    );
};

export default function WallOfLoveSection() {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    return (
        // شلت أي ألوان خلفية من هنا
        <section
            ref={containerRef}
            className="py-16 md:py-32"
        >
            <div className="mx-auto max-w-6xl px-6">
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
                        Trusted by Growing Clinics
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Real results from dental and medical practices across Egypt
                    </p>
                </div>

                {/* mask-image: دي بتعمل التلاشي (Fade) فوق وتحت عشان السكرول يبقى شكله ناعم 
                    مش بتغير ألوان، هي بتلعب في الشفافية بس.
                */}
                <div className="relative mt-12 grid h-[600px] gap-3 overflow-hidden sm:grid-cols-2 lg:grid-cols-3 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                    {testimonialChunks.map((chunk, index) => (
                        <TestimonialColumn
                            key={index}
                            chunk={chunk}
                            columnIndex={index}
                            scrollYProgress={scrollYProgress}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}