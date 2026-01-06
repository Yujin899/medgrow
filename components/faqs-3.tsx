'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { DynamicIcon, type IconName } from 'lucide-react/dynamic'
import Link from 'next/link'
import { motion } from 'framer-motion'

type FAQItem = {
    id: string
    icon: IconName
    question: string
    answer: string
}

// إعدادات الانميشن للحاوية (عشان تشغل العناصر اللي جواها بالترتيب)
const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1 // كل عنصر يتأخر 0.1 ثانية عن اللي قبله
        }
    }
}

// إعدادات الانميشن لكل سؤال لوحده
const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } }
}

export default function FAQsThree() {
    const faqItems: FAQItem[] = [
        {
            id: 'item-1',
            icon: 'package',
            question: 'What\'s included in each plan?',
            answer: 'Each plan builds on the previous one. Visibility Plan includes content strategy and social media. Growth Plan adds landing pages, ads, and funnels. Clinic System Plan adds full website and clinic management system. All plans include dedicated support.',
        },
        {
            id: 'item-2',
            icon: 'clock',
            question: 'How long until we see results?',
            answer: 'Most clinics see increased social media engagement within 2-3 weeks. Patient inquiries typically start within the first month with the Growth Plan. Full digital transformation with the Clinic System Plan takes 2-3 months for complete setup.',
        },
        {
            id: 'item-3',
            icon: 'heart-pulse',
            question: 'Do you work with dental clinics only?',
            answer: 'We started with dental clinics and they remain our focus in Phase 1. However, we also work with solo medical practitioners and small multi-specialty clinics. Contact us to discuss your specific specialty.',
        },
        {
            id: 'item-4',
            icon: 'arrow-up',
            question: 'Can we upgrade plans later?',
            answer: 'Absolutely! You can upgrade to a higher plan anytime. We\'ll prorate the difference and carry over everything from your current plan. Many clinics start with Visibility and upgrade to Growth once they see results.',
        },
        {
            id: 'item-5',
            icon: 'credit-card',
            question: 'Who manages the ads budget?',
            answer: 'You control and pay the ad budget directly to Meta/Google. We handle the strategy, setup, optimization, and management. This keeps costs transparent and gives you full control over your marketing spend.',
        },
    ]

    return (
        <section className="bg-muted dark:bg-background py-20 overflow-hidden">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="flex flex-col gap-10 md:flex-row md:gap-16">

                    {/* Left Side: Title & Description */}
                    <motion.div
                        className="md:w-1/3"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <div className="sticky top-20">
                            <h2 className="mt-4 text-3xl font-bold">Frequently Asked Questions</h2>
                            <p className="text-muted-foreground mt-4">
                                Can&apos;t find what you&apos;re looking for? Contact our{' '}
                                <Link
                                    href="#"
                                    className="text-primary font-medium hover:underline">
                                    customer support team
                                </Link>
                            </p>
                        </div>
                    </motion.div>

                    {/* Right Side: Accordion Items */}
                    <div className="md:w-2/3">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                        >
                            <Accordion
                                type="single"
                                collapsible
                                className="w-full space-y-2">
                                {faqItems.map((item) => (
                                    <motion.div key={item.id} variants={itemVariants}>
                                        <AccordionItem
                                            value={item.id}
                                            className="bg-background shadow-xs rounded-lg border px-4 last:border-b">
                                            <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline" suppressHydrationWarning>
                                                <div className="flex items-center gap-3">
                                                    <div className="flex size-6">
                                                        <DynamicIcon
                                                            name={item.icon}
                                                            className="m-auto size-4"
                                                        />
                                                    </div>
                                                    <span className="text-base text-left">{item.question}</span>
                                                </div>
                                            </AccordionTrigger>
                                            <AccordionContent className="pb-5">
                                                <div className="px-9">
                                                    <p className="text-base">{item.answer}</p>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    </motion.div>
                                ))}
                            </Accordion>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}