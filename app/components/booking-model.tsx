"use client";

import type React from "react";

import { useState } from "react";
import {
  X,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  MessageSquare,
} from "lucide-react";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  {
    id: "hair-cut",
    name: "Hair Cut & Styling",
    duration: "60 min",
    price: "$45",
  },
  {
    id: "hair-color",
    name: "Hair Coloring",
    duration: "120 min",
    price: "$85",
  },
  {
    id: "manicure",
    name: "Classic Manicure",
    duration: "45 min",
    price: "$35",
  },
  { id: "pedicure", name: "Spa Pedicure", duration: "60 min", price: "$45" },
  {
    id: "facial",
    name: "Rejuvenating Facial",
    duration: "75 min",
    price: "$65",
  },
  {
    id: "makeup",
    name: "Professional Makeup",
    duration: "45 min",
    price: "$55",
  },
  { id: "massage", name: "Relaxing Massage", duration: "60 min", price: "$70" },
  { id: "bridal", name: "Bridal Package", duration: "180 min", price: "$200" },
];

const timeSlots = [
  "9:00 AM",
  "9:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "1:00 PM",
  "1:30 PM",
  "2:00 PM",
  "2:30 PM",
  "3:00 PM",
  "3:30 PM",
  "4:00 PM",
  "4:30 PM",
  "5:00 PM",
  "5:30 PM",
];

export default function BookingModal({ isOpen, onClose }: BookingModalProps) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    notes: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsConfirmed(true);
  };

  const selectedService = services.find((s) => s.id === formData.service);

  const resetAndClose = () => {
    setStep(1);
    setIsConfirmed(false);
    setFormData({
      service: "",
      date: "",
      time: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      notes: "",
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-purple-800">
            {isConfirmed ? "Booking Confirmed!" : "Schedule Your Visit"}
          </h2>
          <button
            onClick={resetAndClose}
            className="text-gray-400 hover:text-gray-600 transition duration-200"
          >
            <X size={24} />
          </button>
        </div>

        {/* Progress Bar */}
        {!isConfirmed && (
          <div className="px-6 py-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">
                Step {step} of 3
              </span>
              <span className="text-sm text-gray-500">
                {step === 1 && "Select Service & Time"}
                {step === 2 && "Your Information"}
                {step === 3 && "Confirm Booking"}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-pink-400 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="p-6">
          {isConfirmed ? (
            // Confirmation Screen
            <div className="text-center py-8">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg
                  className="w-10 h-10 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Your appointment is confirmed!
              </h3>
              <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
                <h4 className="font-semibold text-gray-900 mb-3">
                  Appointment Details:
                </h4>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Service:</strong> {selectedService?.name}
                  </p>
                  <p>
                    <strong>Date:</strong>{" "}
                    {new Date(formData.date).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Time:</strong> {formData.time}
                  </p>
                  <p>
                    <strong>Duration:</strong> {selectedService?.duration}
                  </p>
                  <p>
                    <strong>Price:</strong> {selectedService?.price}
                  </p>
                  <p>
                    <strong>Client:</strong> {formData.firstName}{" "}
                    {formData.lastName}
                  </p>
                </div>
              </div>
              <p className="text-gray-600 mb-6">
                We've sent a confirmation email to {formData.email}. Please
                arrive 10 minutes early for your appointment.
              </p>
              <button
                onClick={resetAndClose}
                className="bg-pink-400 text-white px-8 py-3 rounded-full font-semibold hover:bg-pink-500 transition duration-300"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              {/* Step 1: Service & Time Selection */}
              {step === 1 && (
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      <Calendar className="inline mr-2" size={16} />
                      Select Service
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {services.map((service) => (
                        <label
                          key={service.id}
                          className={`border-2 rounded-lg p-4 cursor-pointer transition duration-200 ${
                            formData.service === service.id
                              ? "border-pink-400 bg-pink-50"
                              : "border-gray-200 hover:border-pink-200"
                          }`}
                        >
                          <input
                            type="radio"
                            name="service"
                            value={service.id}
                            checked={formData.service === service.id}
                            onChange={handleInputChange}
                            className="sr-only"
                          />
                          <div className="font-semibold text-gray-900">
                            {service.name}
                          </div>
                          <div className="text-sm text-gray-600">
                            {service.duration} • {service.price}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Select Date
                      </label>
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleInputChange}
                        min={new Date().toISOString().split("T")[0]}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <Clock className="inline mr-2" size={16} />
                        Select Time
                      </label>
                      <select
                        name="time"
                        value={formData.time}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                        required
                      >
                        <option value="">Choose time</option>
                        {timeSlots.map((time) => (
                          <option key={time} value={time}>
                            {time}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Personal Information */}
              {step === 2 && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <User className="inline mr-2" size={16} />
                        First Name
                      </label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Mail className="inline mr-2" size={16} />
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Phone className="inline mr-2" size={16} />
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MessageSquare className="inline mr-2" size={16} />
                      Special Requests (Optional)
                    </label>
                    <textarea
                      name="notes"
                      value={formData.notes}
                      onChange={handleInputChange}
                      rows={3}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-pink-400 focus:border-transparent"
                      placeholder="Any special requests or notes for your appointment..."
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Confirmation */}
              {step === 3 && (
                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    Please confirm your appointment details:
                  </h3>

                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Service Details
                        </h4>
                        <p className="text-gray-700">
                          <strong>Service:</strong> {selectedService?.name}
                        </p>
                        <p className="text-gray-700">
                          <strong>Duration:</strong> {selectedService?.duration}
                        </p>
                        <p className="text-gray-700">
                          <strong>Price:</strong> {selectedService?.price}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Appointment Time
                        </h4>
                        <p className="text-gray-700">
                          <strong>Date:</strong>{" "}
                          {new Date(formData.date).toLocaleDateString()}
                        </p>
                        <p className="text-gray-700">
                          <strong>Time:</strong> {formData.time}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">
                          Contact Information
                        </h4>
                        <p className="text-gray-700">
                          <strong>Name:</strong> {formData.firstName}{" "}
                          {formData.lastName}
                        </p>
                        <p className="text-gray-700">
                          <strong>Email:</strong> {formData.email}
                        </p>
                        <p className="text-gray-700">
                          <strong>Phone:</strong> {formData.phone}
                        </p>
                      </div>

                      {formData.notes && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            Special Requests
                          </h4>
                          <p className="text-gray-700">{formData.notes}</p>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Important Notes:
                    </h4>
                    <ul className="text-blue-800 text-sm space-y-1">
                      <li>
                        • Please arrive 10 minutes early for your appointment
                      </li>
                      <li>
                        • Cancellations must be made at least 24 hours in
                        advance
                      </li>
                      <li>
                        • A confirmation email will be sent to your provided
                        email address
                      </li>
                    </ul>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
                <div>
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="px-6 py-3 border border-gray-300 rounded-full text-gray-700 font-semibold hover:bg-gray-50 transition duration-300"
                    >
                      Back
                    </button>
                  )}
                </div>

                <div>
                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      disabled={
                        (step === 1 &&
                          (!formData.service ||
                            !formData.date ||
                            !formData.time)) ||
                        (step === 2 &&
                          (!formData.firstName ||
                            !formData.lastName ||
                            !formData.email ||
                            !formData.phone))
                      }
                      className="px-8 py-3 bg-pink-400 text-white rounded-full font-semibold hover:bg-pink-500 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-300"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="px-8 py-3 bg-pink-400 text-white rounded-full font-semibold hover:bg-pink-500 disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-300 flex items-center"
                    >
                      {isSubmitting ? (
                        <>
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Confirming...
                        </>
                      ) : (
                        "Confirm Booking"
                      )}
                    </button>
                  )}
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
