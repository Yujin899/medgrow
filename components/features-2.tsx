"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Settings2, Sparkles, Zap } from "lucide-react";
import { ReactNode } from "react";
import { motion } from "framer-motion";

/* =======================
   Motion setup
======================= */

const MotionCard = motion(Card);

const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.5 }
    }
}

/* =======================
   Page
======================= */

export default function Features() {
    return (
        <section className="py-16 md:py-32">
            <div className="@container mx-auto max-w-5xl px-6">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
                        Four Pillars of Clinic Growth
                    </h2>
                    <p className="mt-4 text-muted-foreground">
                        Everything your clinic needs to grow online, delivered monthly
                    </p>
                </div>

                {/* Features grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="@min-4xl:max-w-full @min-4xl:grid-cols-3 mx-auto mt-8 grid max-w-sm gap-6
            [--color-background:var(--color-muted)]
            [--color-card:var(--color-muted)]
            *:text-center
            md:mt-16
            dark:[--color-muted:var(--color-zinc-900)]"
                >
                    {/* Card 1 - Tech */}
                    <MotionCard
                        variants={cardVariants}
                        className="group border-0 shadow-none"
                    >
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Zap className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Tech</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">
                                Websites, landing pages, and clinic management systems built to convert visitors into patients.
                            </p>
                        </CardContent>
                    </MotionCard>

                    {/* Card 2 - Content */}
                    <MotionCard
                        variants={cardVariants}
                        className="group border-0 shadow-none"
                    >
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Settings2 className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Content</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">
                                Medical copywriting, Reel scripts, and post ideas that build trust and authority.
                            </p>
                        </CardContent>
                    </MotionCard>

                    {/* Card 3 - Design */}
                    <MotionCard
                        variants={cardVariants}
                        className="group border-0 shadow-none"
                    >
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Sparkles className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Design</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">
                                Branding, social media visuals, and video editing that makes your clinic stand out.
                            </p>
                        </CardContent>
                    </MotionCard>

                    {/* Card 4 - Marketing */}
                    <MotionCard
                        variants={cardVariants}
                        className="group border-0 shadow-none @min-4xl:col-start-2"
                    >
                        <CardHeader className="pb-3">
                            <CardDecorator>
                                <Sparkles className="size-6" aria-hidden />
                            </CardDecorator>
                            <h3 className="mt-6 font-medium">Marketing</h3>
                        </CardHeader>
                        <CardContent>
                            <p className="text-sm">
                                Ads strategy, funnels, and performance tracking to bring real patient inquiries.
                            </p>
                        </CardContent>
                    </MotionCard>
                </motion.div>
            </div>
        </section>
    );
}

/* =======================
   Card Decorator
======================= */

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200
    [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)]
    group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)]
    dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)]
    dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]"
    >
        <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] dark:opacity-50"
        />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">
            {children}
        </div>
    </div>
);
