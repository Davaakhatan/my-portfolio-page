"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setSubmitSuccess(true)
    setFormData({ name: "", email: "", subject: "", message: "" })

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <div className="relative z-10 p-8 md:p-12 lg:p-16 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-emerald-400">Contact Me</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <p className="text-lg mb-8">
            I'm always interested in new opportunities, collaborations, or just a friendly chat. Feel free to reach out
            using the form or through any of the contact methods below.
          </p>

          <div className="space-y-6 mb-8">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-500 text-zinc-900 p-3 rounded-full">
                <Mail size={20} />
              </div>
              <div>
                <h3 className="font-medium text-lg">Email</h3>
                <p className="text-zinc-300">your.email@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-500 text-zinc-900 p-3 rounded-full">
                <Phone size={20} />
              </div>
              <div>
                <h3 className="font-medium text-lg">Phone</h3>
                <p className="text-zinc-300">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-500 text-zinc-900 p-3 rounded-full">
                <MapPin size={20} />
              </div>
              <div>
                <h3 className="font-medium text-lg">Location</h3>
                <p className="text-zinc-300">San Francisco, CA</p>
              </div>
            </div>
          </div>

          <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6">
            <h3 className="font-bold text-xl mb-4">Availability</h3>
            <p className="text-zinc-300">
              I'm currently available for freelance work and open to discussing full-time opportunities. My typical
              response time is within 24-48 hours.
            </p>
          </div>
        </div>

        <div className="bg-zinc-800/50 backdrop-blur-sm rounded-xl p-6">
          <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>

          {submitSuccess ? (
            <div className="bg-emerald-500/20 border border-emerald-500 text-emerald-400 rounded-lg p-4 mb-6">
              Thank you for your message! I'll get back to you soon.
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Your Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-zinc-700 border-zinc-600 text-white"
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Your Email
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-zinc-700 border-zinc-600 text-white"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="bg-zinc-700 border-zinc-600 text-white"
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="bg-zinc-700 border-zinc-600 text-white"
              />
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-zinc-900"
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <div className="animate-spin h-4 w-4 border-2 border-zinc-900 border-t-transparent rounded-full"></div>
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Send size={16} />
                  Send Message
                </span>
              )}
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
