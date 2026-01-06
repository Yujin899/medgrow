'use client'

import { Button } from '@/components/ui/button'
import { Mail, SendHorizonal } from 'lucide-react'
import { motion } from 'framer-motion'

export default function CallToAction() {

    // إعدادات الانميشن للحاوية الكبيرة (عشان تشغل اللي جواها بالترتيب)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2, // تأخير 0.2 ثانية بين كل عنصر والتاني
                delayChildren: 0.1,
            },
        },
    }

    // إعدادات الانميشن للعناصر الداخلية (تطلع لفوق مع ظهور)
    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        },
    }

    return (
        <section className="py-16 md:py-32 border-t overflow-hidden">
            <motion.div
                className="mx-auto max-w-5xl px-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }} // يشتغل لما العنصر يدخل الشاشة بـ 100 بيكسل
            >
                <div className="text-center">
                    <motion.h2
                        variants={itemVariants}
                        className="text-balance text-4xl font-semibold lg:text-5xl"
                    >
                        Ready to Grow Your Clinic?
                    </motion.h2>

                    <motion.p
                        variants={itemVariants}
                        className="mt-4"
                    >
                        Get a custom growth plan tailored to your clinic&apos;s needs
                    </motion.p>

                    <motion.form
                        variants={itemVariants}
                        action=""
                        className="mx-auto mt-10 max-w-sm lg:mt-12"
                    >
                        <div className="bg-background has-[input:focus]:ring-muted relative grid grid-cols-[1fr_auto] items-center rounded-[calc(var(--radius)+0.75rem)] border pr-3 shadow shadow-zinc-950/5 has-[input:focus]:ring-2 transition-shadow duration-300">
                            <Mail className="text-caption pointer-events-none absolute inset-y-0 left-5 my-auto size-5" />

                            <input
                                placeholder="Enter your clinic email"
                                className="h-14 w-full bg-transparent pl-12 focus:outline-none"
                                type="email"
                                suppressHydrationWarning
                            />

                            <div className="md:pr-1.5 lg:pr-0">
                                <Button
                                    aria-label="submit"
                                    className="rounded-(--radius)"
                                    suppressHydrationWarning>
                                    <span className="hidden md:block">Get Started</span>
                                    <SendHorizonal
                                        className="relative mx-auto size-5 md:hidden"
                                        strokeWidth={2}
                                    />
                                </Button>
                            </div>
                        </div>
                    </motion.form>
                </div>
            </motion.div>
        </section>
    )
}