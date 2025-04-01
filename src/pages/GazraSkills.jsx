/* eslint-disable react/prop-types */
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChefHat,
  Utensils,
  Palette,
  Scissors,
  Monitor,
  Edit,
  Search,
  Layers,
  Briefcase,
  Award,
  Users,
  Calendar,
  Clock,
  CheckCircle,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const HospitalityCourse = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-medium overflow-hidden border border-neutral-100">
        <div className="bg-gradient-to-r from-accent-ochre to-accent-terracotta p-6 text-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <ChefHat className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Hospitality & Restaurant Management
                </h3>
                <p className="text-white/80 text-sm sm:text-base">
                  Master essential skills for the food service industry
                </p>
              </div>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-lg text-sm self-start sm:self-center flex-shrink-0 mt-2 sm:mt-0">
              12 Weeks
            </div>
          </div>
        </div>

        <div className="p-6 border-b border-neutral-100">
          <h4 className="text-lg font-semibold text-neutral-800 mb-4">
            Course Overview
          </h4>
          <p className="text-neutral-600 mb-4">
            This comprehensive program prepares you for a successful career in
            the hospitality and restaurant sector. You&apos;ll learn everything
            from food preparation and service techniques to customer relations
            and basic business management—gaining both practical skills and
            theoretical knowledge needed in this dynamic industry.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-medium text-neutral-800">Duration</h5>
                <p className="text-neutral-600">12 Weeks (240 Hours)</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-medium text-neutral-800">Batch Size</h5>
                <p className="text-neutral-600">15 Students</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-medium text-neutral-800">Schedule</h5>
                <p className="text-neutral-600">Weekdays & Weekend Batches</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h5 className="font-medium text-neutral-800">
                  Placement Support
                </h5>
                <p className="text-neutral-600">
                  Yes, with Partner Restaurants
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="p-6">
          <h4 className="text-lg font-semibold text-neutral-800 mb-4">
            Course Curriculum
          </h4>
          <div className="space-y-6">
            <div className="border border-neutral-200 rounded-xl overflow-hidden">
              <div className="bg-primary-50 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Utensils className="w-5 h-5 text-primary-600" />
                  <h5 className="font-semibold text-neutral-800">
                    Module 1: Kitchen Fundamentals
                  </h5>
                </div>
                <span className="text-sm text-neutral-500">4 Weeks</span>
              </div>
              <div className="p-4 text-neutral-600 text-sm">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>Kitchen safety and hygiene practices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>Food storage and inventory management</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-xl overflow-hidden">
              <div className="bg-primary-50 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-primary-600" />
                  <h5 className="font-semibold text-neutral-800">
                    Module 2: Service & Customer Relations
                  </h5>
                </div>
                <span className="text-sm text-neutral-500">3 Weeks</span>
              </div>
              <div className="p-4 text-neutral-600 text-sm">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>Professional service techniques and etiquette</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>Upselling techniques and menu knowledge</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-xl overflow-hidden">
              <div className="bg-primary-50 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Briefcase className="w-5 h-5 text-primary-600" />
                  <h5 className="font-semibold text-neutral-800">
                    Module 3: Restaurant Management Basics
                  </h5>
                </div>
                <span className="text-sm text-neutral-500">3 Weeks</span>
              </div>
              <div className="p-4 text-neutral-600 text-sm">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>Restaurant operations and workflow</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>Health, safety and regulatory compliance</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="border border-neutral-200 rounded-xl overflow-hidden">
              <div className="bg-primary-50 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-primary-600" />
                  <h5 className="font-semibold text-neutral-800">
                    Module 4: Professional Development & Internship
                  </h5>
                </div>
                <span className="text-sm text-neutral-500">2 Weeks</span>
              </div>
              <div className="p-4 text-neutral-600 text-sm">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>Resume building and interview preparation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-primary-500 mt-0.5 flex-shrink-0" />
                    <span>
                      Final project: Menu development and service planning
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MakeupArtistCourse = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-medium overflow-hidden border border-neutral-100">
        <div className="bg-gradient-to-r from-accent-terracotta to-primary-500 p-6 text-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Palette className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Professional Makeup Artistry
                </h3>
                <p className="text-white/80 text-sm sm:text-base">
                  Learn the art and business of makeup application
                </p>
              </div>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-lg text-sm self-start sm:self-center flex-shrink-0 mt-2 sm:mt-0">
              10 Weeks
            </div>
          </div>
        </div>
        <div className="p-6 border-b border-neutral-100">
          <h4 className="text-lg font-semibold text-neutral-800 mb-4">
            Course Overview
          </h4>
          <p className="text-neutral-600 mb-4">
            This makeup artistry program equips you with the technical skills
            and artistic vision to excel in the beauty industry. From basic
            techniques to advanced applications for various occasions,
            you&apos;ll develop a versatile skill set along with the business
            knowledge needed to build a successful career as a professional
            makeup artist.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                {" "}
                <Calendar className="w-5 h-5" />{" "}
              </div>
              <div>
                {" "}
                <h5 className="font-medium text-neutral-800">Duration</h5>{" "}
                <p className="text-neutral-600">10 Weeks (200 Hours)</p>{" "}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                {" "}
                <Users className="w-5 h-5" />{" "}
              </div>
              <div>
                {" "}
                <h5 className="font-medium text-neutral-800">
                  Batch Size
                </h5>{" "}
                <p className="text-neutral-600">12 Students</p>{" "}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                {" "}
                <Clock className="w-5 h-5" />{" "}
              </div>
              <div>
                {" "}
                <h5 className="font-medium text-neutral-800">Schedule</h5>{" "}
                <p className="text-neutral-600">Flexible Timings Available</p>{" "}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                {" "}
                <Briefcase className="w-5 h-5" />{" "}
              </div>
              <div>
                {" "}
                <h5 className="font-medium text-neutral-800">
                  Kit Included
                </h5>{" "}
                <p className="text-neutral-600">
                  Professional Starter Kit Provided
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h4 className="text-lg font-semibold text-neutral-800 mb-4">
            Course Curriculum
          </h4>
          <div className="space-y-6">
            <div className="border border-neutral-200 rounded-xl overflow-hidden">
              <div className="bg-primary-50 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {" "}
                  <Palette className="w-5 h-5 text-primary-600" />{" "}
                  <h5 className="font-semibold text-neutral-800">
                    Module 1: Makeup Fundamentals
                  </h5>{" "}
                </div>
                <span className="text-sm text-neutral-500">3 Weeks</span>
              </div>
              <div className="p-4 text-neutral-600 text-sm">
                {" "}
                <ul className="space-y-2"> </ul>{" "}
              </div>
            </div>
            <div className="border border-neutral-200 rounded-xl overflow-hidden">
              <div className="bg-primary-50 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {" "}
                  <Scissors className="w-5 h-5 text-primary-600" />{" "}
                  <h5 className="font-semibold text-neutral-800">
                    Module 2: Eye & Lip Techniques
                  </h5>{" "}
                </div>
                <span className="text-sm text-neutral-500">3 Weeks</span>
              </div>
              <div className="p-4 text-neutral-600 text-sm">
                {" "}
                <ul className="space-y-2"> </ul>{" "}
              </div>
            </div>
            <div className="border border-neutral-200 rounded-xl overflow-hidden">
              <div className="bg-primary-50 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {" "}
                  <Users className="w-5 h-5 text-primary-600" />{" "}
                  <h5 className="font-semibold text-neutral-800">
                    Module 3: Special Occasion Makeup
                  </h5>{" "}
                </div>
                <span className="text-sm text-neutral-500">2 Weeks</span>
              </div>
              <div className="p-4 text-neutral-600 text-sm">
                {" "}
                <ul className="space-y-2"> </ul>{" "}
              </div>
            </div>
            <div className="border border-neutral-200 rounded-xl overflow-hidden">
              <div className="bg-primary-50 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {" "}
                  <Briefcase className="w-5 h-5 text-primary-600" />{" "}
                  <h5 className="font-semibold text-neutral-800">
                    Module 4: Business of Makeup Artistry
                  </h5>{" "}
                </div>
                <span className="text-sm text-neutral-500">2 Weeks</span>
              </div>
              <div className="p-4 text-neutral-600 text-sm">
                {" "}
                <ul className="space-y-2"> </ul>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ITCourse = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-medium overflow-hidden border border-neutral-100">
        <div className="bg-gradient-to-r from-accent-slate to-primary-600 p-6 text-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Monitor className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Digital Marketing: SEO & Content Writing
                </h3>
                <p className="text-white/80 text-sm sm:text-base">
                  Master the skills to succeed in the digital landscape
                </p>
              </div>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-lg text-sm self-start sm:self-center flex-shrink-0 mt-2 sm:mt-0">
              8 Weeks
            </div>
          </div>
        </div>
        <div className="p-6 border-b border-neutral-100">
          <h4 className="text-lg font-semibold text-neutral-800 mb-4">
            Course Overview
          </h4>
          <p className="text-neutral-600 mb-4">
            This comprehensive digital marketing program focuses on two
            high-demand skills: Search Engine Optimization (SEO) and Content
            Writing. You&apos;ll learn to create engaging content that ranks
            well on search engines, drive organic traffic, and develop digital
            marketing strategies that deliver results for businesses across
            industries.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                {" "}
                <Calendar className="w-5 h-5" />{" "}
              </div>
              <div>
                {" "}
                <h5 className="font-medium text-neutral-800">Duration</h5>{" "}
                <p className="text-neutral-600">8 Weeks (160 Hours)</p>{" "}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                {" "}
                <Users className="w-5 h-5" />{" "}
              </div>
              <div>
                {" "}
                <h5 className="font-medium text-neutral-800">
                  Batch Size
                </h5>{" "}
                <p className="text-neutral-600">15 Students</p>{" "}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                {" "}
                <Clock className="w-5 h-5" />{" "}
              </div>
              <div>
                {" "}
                <h5 className="font-medium text-neutral-800">Schedule</h5>{" "}
                <p className="text-neutral-600">Evening & Weekend Batches</p>{" "}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                {" "}
                <Award className="w-5 h-5" />{" "}
              </div>
              <div>
                {" "}
                <h5 className="font-medium text-neutral-800">
                  Certification
                </h5>{" "}
                <p className="text-neutral-600">
                  Industry-Recognized Certificate
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h4 className="text-lg font-semibold text-neutral-800 mb-4">
            Course Curriculum
          </h4>
          <div className="space-y-6">
            <div className="border border-neutral-200 rounded-xl overflow-hidden">
              <div className="bg-primary-50 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {" "}
                  <Monitor className="w-5 h-5 text-primary-600" />{" "}
                  <h5 className="font-semibold text-neutral-800">
                    Module 1: Digital Marketing Fundamentals
                  </h5>{" "}
                </div>
                <span className="text-sm text-neutral-500">2 Weeks</span>
              </div>
              <div className="p-4 text-neutral-600 text-sm">
                {" "}
                <ul className="space-y-2"></ul>{" "}
              </div>
            </div>
            <div className="border border-neutral-200 rounded-xl overflow-hidden">
              <div className="bg-primary-50 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {" "}
                  <Search className="w-5 h-5 text-primary-600" />{" "}
                  <h5 className="font-semibold text-neutral-800">
                    Module 2: SEO Principles and Techniques
                  </h5>{" "}
                </div>
                <span className="text-sm text-neutral-500">2 Weeks</span>
              </div>
              <div className="p-4 text-neutral-600 text-sm">
                {" "}
                <ul className="space-y-2"> </ul>{" "}
              </div>
            </div>
            <div className="border border-neutral-200 rounded-xl overflow-hidden">
              <div className="bg-primary-50 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {" "}
                  <Edit className="w-5 h-5 text-primary-600" />{" "}
                  <h5 className="font-semibold text-neutral-800">
                    Module 3: Content Writing Mastery
                  </h5>{" "}
                </div>
                <span className="text-sm text-neutral-500">2 Weeks</span>
              </div>
              <div className="p-4 text-neutral-600 text-sm">
                {" "}
                <ul className="space-y-2"> </ul>{" "}
              </div>
            </div>
            <div className="border border-neutral-200 rounded-xl overflow-hidden">
              <div className="bg-primary-50 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {" "}
                  <Briefcase className="w-5 h-5 text-primary-600" />{" "}
                  <h5 className="font-semibold text-neutral-800">
                    Module 4: Digital Marketing Career Development
                  </h5>{" "}
                </div>
                <span className="text-sm text-neutral-500">2 Weeks</span>
              </div>
              <div className="p-4 text-neutral-600 text-sm">
                {" "}
                <ul className="space-y-2"> </ul>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HandicraftsCourse = () => {
  return (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl shadow-medium overflow-hidden border border-neutral-100">
        <div className="bg-gradient-to-r from-accent-sage to-accent-ochre p-6 text-white">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <Layers className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold">
                  Handicrafts & Artisanal Skills
                </h3>
                <p className="text-white/80 text-sm sm:text-base">
                  Learn traditional and contemporary craft techniques
                </p>
              </div>
            </div>
            <div className="bg-white/20 px-4 py-2 rounded-lg text-sm self-start sm:self-center flex-shrink-0 mt-2 sm:mt-0">
              12 Weeks
            </div>
          </div>
        </div>
        <div className="p-6 border-b border-neutral-100">
          <h4 className="text-lg font-semibold text-neutral-800 mb-4">
            Course Overview
          </h4>
          <p className="text-neutral-600 mb-4">
            This hands-on handicrafts program preserves and promotes traditional
            artisanal skills while teaching modern applications. You&apos;ll
            learn various techniques across different craft disciplines, develop
            your creative vision, and gain entrepreneurial knowledge to
            transform your crafting passion into a sustainable livelihood.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-6">
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                {" "}
                <Calendar className="w-5 h-5" />{" "}
              </div>
              <div>
                {" "}
                <h5 className="font-medium text-neutral-800">Duration</h5>{" "}
                <p className="text-neutral-600">12 Weeks (240 Hours)</p>{" "}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                {" "}
                <Users className="w-5 h-5" />{" "}
              </div>
              <div>
                {" "}
                <h5 className="font-medium text-neutral-800">
                  Batch Size
                </h5>{" "}
                <p className="text-neutral-600">10 Students</p>{" "}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                {" "}
                <Clock className="w-5 h-5" />{" "}
              </div>
              <div>
                {" "}
                <h5 className="font-medium text-neutral-800">Schedule</h5>{" "}
                <p className="text-neutral-600">Morning & Weekend Batches</p>{" "}
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-full bg-primary-100 text-primary-600 flex-shrink-0">
                {" "}
                <Briefcase className="w-5 h-5" />{" "}
              </div>
              <div>
                {" "}
                <h5 className="font-medium text-neutral-800">Materials</h5>{" "}
                <p className="text-neutral-600">Basic Materials Provided</p>{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="p-6">
          <h4 className="text-lg font-semibold text-neutral-800 mb-4">
            Course Curriculum
          </h4>
          <div className="space-y-6">
            <div className="border border-neutral-200 rounded-xl overflow-hidden">
              <div className="bg-primary-50 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {" "}
                  <Layers className="w-5 h-5 text-primary-600" />{" "}
                  <h5 className="font-semibold text-neutral-800">
                    Module 1: Textile Crafts
                  </h5>{" "}
                </div>
                <span className="text-sm text-neutral-500">3 Weeks</span>
              </div>
              <div className="p-4 text-neutral-600 text-sm">
                {" "}
                <ul className="space-y-2"> </ul>{" "}
              </div>
            </div>
            <div className="border border-neutral-200 rounded-xl overflow-hidden">
              <div className="bg-primary-50 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {" "}
                  <Palette className="w-5 h-5 text-primary-600" />{" "}
                  <h5 className="font-semibold text-neutral-800">
                    Module 2: Decorative Arts
                  </h5>{" "}
                </div>
                <span className="text-sm text-neutral-500">3 Weeks</span>
              </div>
              <div className="p-4 text-neutral-600 text-sm">
                {" "}
                <ul className="space-y-2"> </ul>{" "}
              </div>
            </div>
            <div className="border border-neutral-200 rounded-xl overflow-hidden">
              <div className="bg-primary-50 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {" "}
                  <Edit className="w-5 h-5 text-primary-600" />{" "}
                  <h5 className="font-semibold text-neutral-800">
                    Module 3: Jewelry & Accessories
                  </h5>{" "}
                </div>
                <span className="text-sm text-neutral-500">3 Weeks</span>
              </div>
              <div className="p-4 text-neutral-600 text-sm">
                {" "}
                <ul className="space-y-2"> </ul>{" "}
              </div>
            </div>
            <div className="border border-neutral-200 rounded-xl overflow-hidden">
              <div className="bg-primary-50 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  {" "}
                  <Briefcase className="w-5 h-5 text-primary-600" />{" "}
                  <h5 className="font-semibold text-neutral-800">
                    Module 4: Craft Entrepreneurship
                  </h5>{" "}
                </div>
                <span className="text-sm text-neutral-500">3 Weeks</span>
              </div>
              <div className="p-4 text-neutral-600 text-sm">
                {" "}
                <ul className="space-y-2"> </ul>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const CourseSelectorTabs = ({ selectedCourse, onSelectCourse }) => {
  const courses = [
    {
      id: "hospitality",
      name: "Hospitality",
      sub: "Restaurant Management",
      icon: ChefHat,
      gradient: "from-accent-ochre to-accent-terracotta",
    },
    {
      id: "makeup",
      name: "Makeup",
      sub: "Professional Artistry",
      icon: Palette,
      gradient: "from-accent-terracotta to-primary-500",
    },
    {
      id: "it",
      name: "Digital Marketing",
      sub: "SEO & Content Writing",
      icon: Monitor,
      gradient: "from-accent-slate to-primary-600",
    },
    {
      id: "handicrafts",
      name: "Handicrafts",
      sub: "Artisanal Skills",
      icon: Layers,
      gradient: "from-accent-sage to-accent-ochre",
    },
  ];

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
      {courses.map((course) => (
        <button
          key={course.id}
          onClick={() => onSelectCourse(course.id)}
          className={`flex items-center gap-3 p-4 rounded-xl border w-full text-left ${selectedCourse === course.id
              ? "bg-primary-50 border-primary-200 shadow-medium"
              : "bg-white border-neutral-200 hover:bg-primary-50/50 hover:border-primary-100"
            } transition-all duration-200`}
        >
          <div
            className={`w-10 h-10 rounded-lg bg-gradient-to-r ${course.gradient} text-white flex items-center justify-center flex-shrink-0`}
          >
            <course.icon className="w-5 h-5" />
          </div>
          <div>
            <h3 className="font-medium text-neutral-800">{course.name}</h3>
            <p className="text-xs text-neutral-500">{course.sub}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

const SuccessStoryCard = ({ imageSrc, altText, title, text, graduateInfo }) => {
  return (
    <div className="bg-white rounded-2xl shadow-medium overflow-hidden border border-neutral-100">
      <div className="aspect-w-4 aspect-h-3">
        {" "}
        <img
          src={imageSrc}
          alt={altText}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="p-6 space-y-3">
        <h3 className="text-xl font-bold text-neutral-900">{title}</h3>
        <p className="text-neutral-600 text-sm leading-relaxed">{text}</p>{" "}
        <div className="pt-2">
          <p className="text-sm text-primary-600 font-medium">{graduateInfo}</p>
        </div>
      </div>
    </div>
  );
};

const FAQItem = ({ question, answer }) => {
  return (
    <div className="border border-neutral-200 rounded-xl p-4 hover:border-primary-200 transition-colors duration-200">
      <h4 className="font-medium text-neutral-800 mb-2">{question}</h4>
      <p className="text-neutral-600 text-sm">{answer}</p>
    </div>
  );
};

const GazraSkills = () => {
  const [selectedCourse, setSelectedCourse] = useState("hospitality");
  const [formStep, setFormStep] = useState(1);

  const renderCourseContent = () => {
    switch (selectedCourse) {
      case "hospitality":
        return <HospitalityCourse />;
      case "makeup":
        return <MakeupArtistCourse />;
      case "it":
        return <ITCourse />;
      case "handicrafts":
        return <HandicraftsCourse />;
      default:
        return <HospitalityCourse />;
    }
  };

  const successStories = [
    {
      imageSrc: "/images/image8.png",
      altText: "Ananya Success Story",
      title: "Ananya's Journey",
      text: "After completing the makeup artistry program, I started my own small business doing bridal makeup. The skills I learned at Gazra helped me build a client base and achieve financial independence.",
      graduateInfo: "Makeup Artistry Graduate",
    },
    {
      imageSrc: "/images/image9.png",
      altText: "Rahul Success Story",
      title: "Rahul's Story",
      text: "The hospitality training opened doors for me that I never thought possible. I started as a server and worked my way up to assistant manager at a respected restaurant within a year.",
      graduateInfo: "Hospitality Program Graduate",
    },
    {
      imageSrc: "/images/image10.png",
      altText: "Maya Success Story",
      title: "Maya's Success",
      text: "Learning digital marketing and SEO completely changed my career path. I now work remotely for clients around the country, enjoying the flexibility and income that comes with these skills.",
      graduateInfo: "Digital Marketing Graduate",
    },
  ];

  const faqs = [
    {
      question: "Is financial assistance available for courses?",
      answer:
        "Yes, we offer financial assistance based on need through the Gazra Support Fund. We ensure economic barriers don't prevent dedicated individuals from accessing our skills training.",
    },
    {
      question: "Do I need prior experience to join a course?",
      answer:
        "No prior experience is required. Our courses are designed for beginners and provide comprehensive foundational training. Your enthusiasm and commitment are what matter most.",
    },
    {
      question: "Will I receive a certificate upon completion?",
      answer:
        "Yes, all graduates receive a certificate recognized by our industry partners. Additionally, we provide ongoing support with job placement and starting your own venture.",
    },
    {
      question: "What is the selection process like?",
      answer:
        "After reviewing applications, shortlisted candidates are invited for a brief interview to discuss their goals and commitment. Our selection prioritizes motivation and need rather than prior qualifications.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-primary-50/30 to-white">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute w-[800px] h-[800px] -top-[400px] -left-[400px] bg-primary-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
          <div className="absolute w-[800px] h-[800px] -bottom-[400px] -right-[400px] bg-accent-terracotta/10 rounded-full mix-blend-multiply filter blur-3xl opacity-40"></div>
        </div>

        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-flex items-center px-3 py-1.5 bg-white/80 backdrop-blur-sm border-2 border-primary-100 rounded-full text-primary-600 text-sm font-medium">
                <Award className="w-4 h-4 mr-2" strokeWidth={3} />
                Gazra Skills Development
              </span>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight">
                <span className="block text-neutral-900">Empowering</span>
                <span className="block mt-2 bg-gradient-to-r from-primary-600 to-accent-terracotta bg-clip-text text-transparent">
                  Through Practical
                </span>
                <span className="block mt-2 text-neutral-900">
                  Skills Training
                </span>
              </h1>

              <p className="text-xl text-neutral-600 max-w-2xl">
                Develop marketable skills and build a sustainable livelihood
                with our industry-focused training programs designed for
                economic independence and professional growth.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#courses"
                  className="inline-flex items-center px-6 py-3 bg-primary-500 text-white rounded-xl shadow-colored hover:shadow-glow hover:-translate-y-0.5 transition-all duration-300"
                >
                  Explore Our Courses
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.a>

                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#apply"
                  className="inline-flex items-center px-6 py-3 border-2 border-primary-200 text-primary-600 rounded-xl hover:bg-primary-50 hover:-translate-y-0.5 transition-all duration-300"
                >
                  Apply Now
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.a>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-200 to-accent-ochre/20 rounded-3xl transform rotate-3"></div>
              <div className="relative rounded-3xl shadow-lg overflow-hidden w-full h-auto aspect-w-16 aspect-h-10">
                <video
                  src="/video/skill.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-white"
        style={{ backgroundImage: 'url("/images/background.jpg")' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full text-primary-600 text-sm font-medium mb-4">
              Our Approach
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-6">
              Training That Transforms Lives
            </h2>
            <p className="text-lg text-neutral-600">
              We focus on practical, in-demand skills that open doors to
              employment and entrepreneurship. Our inclusive approach ensures
              that everyone has access to quality training regardless of their
              background.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl shadow-soft border border-primary-100/50 p-6 hover:shadow-medium transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Inclusive Learning
              </h3>
              <p className="text-neutral-600 mb-4">
                Our programs are designed to be accessible to everyone, with
                special focus on creating supportive learning environments for
                the LGBTQIA+ community and women facing barriers to employment.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-soft border border-primary-100/50 p-6 hover:shadow-medium transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-6">
                <Briefcase className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Industry Partnerships
              </h3>
              <p className="text-neutral-600 mb-4">
                We collaborate with businesses and industry experts to ensure
                our curriculum meets current market needs, and to create
                pathways to employment for our graduates through our network of
                partners.
              </p>
            </div>
            <div className="bg-white rounded-2xl shadow-soft border border-primary-100/50 p-6 hover:shadow-medium transition-all duration-300">
              <div className="w-14 h-14 rounded-2xl bg-primary-50 flex items-center justify-center mb-6">
                <Award className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-neutral-900 mb-2">
                Holistic Support
              </h3>
              <p className="text-neutral-600 mb-4">
                Beyond technical skills, we provide mentorship,
                confidence-building, and ongoing support to help our students
                succeed professionally and personally in their chosen paths.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="courses"
        className="py-16 bg-gradient-to-b from-white to-primary-50/50"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full text-primary-600 text-sm font-medium mb-4">
              Our Programs
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-6">
              Skills Development Courses
            </h2>
            <p className="text-lg text-neutral-600">
              Select a program below to explore the curriculum and details. Our
              courses are designed to provide practical, market-relevant skills
              that lead to meaningful employment opportunities.
            </p>
          </div>

          <CourseSelectorTabs
            selectedCourse={selectedCourse}
            onSelectCourse={setSelectedCourse}
          />

          <div className="mt-12">{renderCourseContent()}</div>
        </div>
      </section>

      <section
        className="py-16 bg-primary-50/50"
        style={{ backgroundImage: 'url("/images/background.jpg")' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-white border border-primary-100 rounded-full text-primary-600 text-sm font-medium mb-4">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-6">
              Transforming Lives Through Skills
            </h2>
            <p className="text-lg text-neutral-600">
              Meet some of our graduates who have successfully used their new
              skills to build careers and businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <SuccessStoryCard
                key={index}
                imageSrc={story.imageSrc}
                altText={story.altText}
                title={story.title}
                text={story.text}
                graduateInfo={story.graduateInfo}
              />
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary-50 border border-primary-100 rounded-full text-primary-600 text-sm font-medium mb-4">
                Join Our Programs
              </span>
              <h2 className="text-3xl md:text-4xl font-display font-bold text-neutral-900 mb-6">
                Apply for Skills Training
              </h2>
              <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
                Take the first step toward building a sustainable livelihood by
                applying to one of our skills development programs.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-medium border border-primary-100 overflow-hidden">
              <div className="bg-gradient-to-r from-primary-500 to-accent-terracotta text-white p-6">
                <h3 className="text-xl font-bold mb-4">
                  Course Application Form
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <div
                      className={`w-8 h-8 rounded-full ${formStep >= 1
                          ? "bg-white text-primary-600"
                          : "bg-white/30 text-white"
                        } flex items-center justify-center font-bold`}
                    >
                      1
                    </div>
                    <div className="w-12 h-1 bg-white/30">
                      <div
                        className={`h-full ${formStep >= 2 ? "bg-white" : "bg-transparent"
                          }`}
                      ></div>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full ${formStep >= 2
                          ? "bg-white text-primary-600"
                          : "bg-white/30 text-white"
                        } flex items-center justify-center font-bold`}
                    >
                      2
                    </div>
                    <div className="w-12 h-1 bg-white/30">
                      <div
                        className={`h-full ${formStep >= 3 ? "bg-white" : "bg-transparent"
                          }`}
                      ></div>
                    </div>
                    <div
                      className={`w-8 h-8 rounded-full ${formStep >= 3
                          ? "bg-white text-primary-600"
                          : "bg-white/30 text-white"
                        } flex items-center justify-center font-bold`}
                    >
                      3
                    </div>
                  </div>

                  <div className="text-sm text-white/80">
                    Step {formStep} of 3
                  </div>
                </div>
              </div>

              {formStep === 1 && (
                <div className="p-6 md:p-8">
                  <h4 className="text-lg font-semibold text-neutral-800 mb-6">
                    1. Personal Information
                  </h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-neutral-700">
                        Full Name
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-neutral-700">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-neutral-700">
                        Email Address
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Enter your email address"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-neutral-700">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Enter your phone number"
                      />
                    </div>
                    <div className="md:col-span-2 space-y-2">
                      <label className="block text-sm font-medium text-neutral-700">
                        Address
                      </label>
                      <textarea
                        className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                        placeholder="Enter your complete address"
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-neutral-700">
                        Highest Education Level
                      </label>
                      <select className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                        <option value="">Select education level</option>{" "}
                        <option value="primary">Primary</option>{" "}
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-neutral-700">
                        Gender
                      </label>
                      <select className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500">
                        <option value="">Select gender</option>{" "}
                        <option value="male">Male</option>{" "}
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-end">
                    <button
                      onClick={() => setFormStep(2)}
                      className="px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors duration-300 flex items-center"
                    >
                      Next Step <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {formStep === 2 && (
                <div className="p-6 md:p-8">
                  <h4 className="text-lg font-semibold text-neutral-800 mb-6">
                    2. Course Selection & Background
                  </h4>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-neutral-700">
                        Which course are you interested in?
                      </label>
                      <div className="grid sm:grid-cols-2 gap-3 mt-2">
                        <label className="flex items-center p-3 border border-neutral-200 rounded-lg hover:bg-primary-50 cursor-pointer">
                          {" "}
                          <input
                            type="radio"
                            name="course-selection"
                            className="w-4 h-4 text-primary-600 border-neutral-300 focus:ring-primary-500"
                          />{" "}
                          <div className="ml-3">...</div>{" "}
                        </label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-neutral-700">
                        Preferred batch timing
                      </label>
                      <div className="flex flex-wrap gap-4 mt-2">
                        <label className="inline-flex items-center">
                          {" "}
                          <input
                            type="radio"
                            name="batch-timing"
                            className="w-4 h-4 ... "
                          />{" "}
                          <span className="ml-2 text-sm text-neutral-700">
                            Morning (9 AM - 12 PM)
                          </span>{" "}
                        </label>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-neutral-700">
                        Do you have any prior experience in the selected field?
                      </label>
                      <div className="flex gap-4"></div>
                      <div className="mt-2">
                        {" "}
                        <textarea
                          className="w-full ..."
                          placeholder="If yes, please describe..."
                          rows="3"
                        ></textarea>{" "}
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-neutral-700">
                        Current employment status
                      </label>
                      <select className="w-full ...">
                        <option value="">Select status</option>{" "}
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setFormStep(1)}
                      className="px-6 py-3 border border-neutral-300 text-neutral-700 rounded-xl hover:bg-neutral-50 transition-colors duration-300"
                    >
                      {" "}
                      Previous{" "}
                    </button>
                    <button
                      onClick={() => setFormStep(3)}
                      className="px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors duration-300 flex items-center"
                    >
                      {" "}
                      Next Step <ArrowRight className="ml-2 w-4 h-4" />{" "}
                    </button>
                  </div>
                </div>
              )}

              {formStep === 3 && (
                <div className="p-6 md:p-8">
                  <h4 className="text-lg font-semibold text-neutral-800 mb-6">
                    3. Motivation & Commitment
                  </h4>
                  <div className="space-y-6">
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-neutral-700">
                        Why are you interested in this course? What are your
                        goals?
                      </label>
                      <textarea
                        className="w-full ..."
                        placeholder="Tell us about your motivation..."
                        rows="5"
                      ></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-neutral-700">
                        How did you hear about Gazra Skills?
                      </label>
                      <select className="w-full ...">
                        <option value="">Select an option</option>{" "}
                        <option value="other">Other</option>
                      </select>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-neutral-700">
                        Do you have any specific needs or accommodations we
                        should be aware of?
                      </label>
                      <textarea
                        className="w-full ..."
                        placeholder="Please share any accessibility needs..."
                        rows="3"
                      ></textarea>
                    </div>
                    <div className="space-y-2">
                      <label className="block text-sm font-medium text-neutral-700">
                        Are you able to commit to the full duration of the
                        program?
                      </label>
                      <div className="flex gap-4"> </div>
                      <div className="mt-2">
                        {" "}
                        <input
                          type="text"
                          className="w-full ..."
                          placeholder="If no or not sure, please explain"
                        />{" "}
                      </div>
                    </div>
                    <div className="pt-6 border-t border-neutral-200">
                      <div className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          id="declaration"
                          className="mt-1 w-4 h-4 ..."
                        />
                        <label
                          htmlFor="declaration"
                          className="text-sm text-neutral-700"
                        >
                          {" "}
                          I confirm that all information provided is accurate...{" "}
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 flex justify-between">
                    <button
                      onClick={() => setFormStep(2)}
                      className="px-6 py-3 border border-neutral-300 text-neutral-700 rounded-xl hover:bg-neutral-50 transition-colors duration-300"
                    >
                      {" "}
                      Previous{" "}
                    </button>
                    <button className="px-6 py-3 bg-primary-500 text-white rounded-xl hover:bg-primary-600 transition-colors duration-300">
                      {" "}
                      Submit Application{" "}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary-50/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-neutral-900">
                  Have Questions?
                </h3>
                <p className="text-neutral-600">
                  Reach out to our team for more information about our skills
                  development programs, application process, or any other
                  inquiries.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary-100 text-primary-600">
                      {" "}
                      <Phone className="w-5 h-5" />{" "}
                    </div>
                    <div>
                      {" "}
                      <h4 className="font-medium text-neutral-800">
                        Call Us
                      </h4>{" "}
                      <p className="text-neutral-600">+91 82003 06871</p>{" "}
                      <p className="text-sm text-neutral-500">
                        Mon-Fri, 10 AM - 5 PM
                      </p>{" "}
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary-100 text-primary-600">
                      {" "}
                      <Mail className="w-5 h-5" />{" "}
                    </div>
                    <div>
                      {" "}
                      <h4 className="font-medium text-neutral-800">
                        Email Us
                      </h4>{" "}
                      <p className="text-neutral-600">skills@gazra.org</p>{" "}
                      <p className="text-sm text-neutral-500">
                        Response within 48 hours
                      </p>{" "}
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-primary-100 text-primary-600">
                      {" "}
                      <MapPin className="w-5 h-5" />{" "}
                    </div>
                    <div>
                      {" "}
                      <h4 className="font-medium text-neutral-800">
                        Visit Us
                      </h4>{" "}
                      <p className="text-neutral-600">
                        Gazra Cafe, Shri Maharani Chimnabai Stree Udyogalaya,
                        Vadodara
                      </p>{" "}
                      <p className="text-sm text-neutral-500">
                        Drop in for a conversation
                      </p>{" "}
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-neutral-900">
                  Frequently Asked Questions
                </h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <FAQItem
                      key={index}
                      question={faq.question}
                      answer={faq.answer}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-16 bg-white"
        style={{ backgroundImage: 'url("/images/background.jpg")' }}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-primary-500 to-accent-terracotta rounded-3xl shadow-medium overflow-hidden">
              <div className="grid md:grid-cols-2 items-center">
                <div className="p-8 md:p-12 text-white">
                  <h2 className="text-3xl font-display font-bold mb-4">
                    Ready to Transform Your Future?
                  </h2>
                  <p className="text-white/80 mb-6">
                    Take the first step toward a sustainable livelihood by
                    applying to one of our skills development programs. Empower
                    yourself with market-relevant skills and join our community
                    of successful graduates.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#apply"
                      className="px-6 py-3 bg-white text-primary-600 rounded-xl hover:bg-primary-50 transition-colors duration-300 font-medium inline-flex items-center"
                    >
                      Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      href="#courses"
                      className="px-6 py-3 bg-white/20 text-white border border-white/40 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-colors duration-300 inline-flex items-center"
                    >
                      Explore Courses
                    </motion.a>
                  </div>
                </div>
                <div className="hidden md:block h-full">
                  <video
                    src="/video/skill.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GazraSkills;
