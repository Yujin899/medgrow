'use client' // لازم تضيف دي عشان framer-motion يشتغل في Next.js

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Pricing() {
    return (
        <section className="py-16 md:py-32 overflow-hidden">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Clear Plans. Real Growth.</h1>
                    <p>Choose the plan that fits your clinic&apos;s growth stage. All plans include dedicated support and monthly optimization.</p>
                </div>

                <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
                    {/* Left Card: Coming from -x */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <Card className="flex flex-col h-full">
                            <CardHeader>
                                <CardTitle className="font-medium">Visibility Plan</CardTitle>
                                <span className="my-3 block text-2xl font-semibold">Contact for Pricing</span>
                                <CardDescription className="text-sm">Best for new clinics</CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <hr className="border-dashed" />

                                <ul className="list-outside space-y-3 text-sm">
                                    {['Monthly content strategy', '8-12 Reel ideas + scripts', '8 designed social media posts', 'Medical copywriting (Arabic)', 'Posting guidelines', 'Dedicated account manager'].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2">
                                            <Check className="size-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className="mt-auto">
                                <Button
                                    asChild
                                    variant="outline"
                                    className="w-full">
                                    <Link href="">Get Started</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>

                    {/* Middle Card: Coming from bottom (y) */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                    >
                        <Card className="relative h-full">
                            <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">Popular</span>

                            <div className="flex flex-col h-full">
                                <CardHeader>
                                    <CardTitle className="font-medium">Growth Plan</CardTitle>
                                    <span className="my-3 block text-2xl font-semibold">Contact for Pricing</span>
                                    <CardDescription className="text-sm">Best for patient acquisition</CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-4">
                                    <hr className="border-dashed" />
                                    <ul className="list-outside space-y-3 text-sm">
                                        {['Everything in Visibility Plan', 'Conversion-focused landing page', 'WhatsApp funnel setup', 'Ads setup & management', 'Ad performance tracking', 'DM reply templates', 'Weekly strategy calls', 'Monthly growth reports'].map((item, index) => (
                                            <li
                                                key={index}
                                                className="flex items-center gap-2">
                                                <Check className="size-3" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>

                                <CardFooter className="mt-auto">
                                    <Button
                                        asChild
                                        className="w-full">
                                        <Link href="">Get Started</Link>
                                    </Button>
                                </CardFooter>
                            </div>
                        </Card>
                    </motion.div>

                    {/* Right Card: Coming from +x */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        <Card className="flex flex-col h-full">
                            <CardHeader>
                                <CardTitle className="font-medium">Clinic System Plan</CardTitle>
                                <span className="my-3 block text-2xl font-semibold">Contact for Pricing</span>
                                <CardDescription className="text-sm">Full digital transformation</CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4">
                                <hr className="border-dashed" />

                                <ul className="list-outside space-y-3 text-sm">
                                    {['Everything in Growth Plan', 'Full clinic website', 'Complete branding system', 'Advanced landing pages', 'Video editing (Reels & promos)', 'Clinic management system', 'Patient database', 'Appointment booking', 'Follow-up automation'].map((item, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-2">
                                            <Check className="size-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className="mt-auto">
                                <Button
                                    asChild
                                    variant="outline"
                                    className="w-full">
                                    <Link href="">Get Started</Link>
                                </Button>
                            </CardFooter>
                        </Card>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}