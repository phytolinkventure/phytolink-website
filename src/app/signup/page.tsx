"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    companyName: "",
    phone: "",
    plan: "business",
    otp: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmitStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Send OTP to email
    setStep(2);
  };

  const handleSubmitStep2 = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Verify OTP
    setStep(3);
  };

  const handleSubmitStep3 = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Create account (Stripe integration will go here)
    setStep(4);
  };

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-xl mx-auto px-4 py-12">
        {/* Progress Steps */}
        <div className="flex items-center justify-center mb-12">
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 1 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'}`}>1</div>
            <div className={`w-16 h-1 ${step >= 2 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 2 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'}`}>2</div>
            <div className={`w-16 h-1 ${step >= 3 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 3 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'}`}>3</div>
            <div className={`w-16 h-1 ${step >= 4 ? 'bg-green-600' : 'bg-gray-200'}`}></div>
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${step >= 4 ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-500'}`}>✓</div>
          </div>
        </div>

        {/* Step 1: Basic Info */}
        {step === 1 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Your Account</h2>
            <p className="text-gray-600 mb-6">Start your 14-day free trial</p>

            <form onSubmit={handleSubmitStep1} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="you@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Company Name</label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="ABC Sdn Bhd"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="012-345 6789"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Select Plan</label>
                <select
                  name="plan"
                  value={formData.plan}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <option value="starter">Starter - RM79/month</option>
                  <option value="business">Business - RM149/month (Popular)</option>
                  <option value="professional">Professional - RM299/month</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Continue →
              </button>
            </form>

            <p className="text-center text-gray-500 text-sm mt-6">
              Already have an account?{" "}
              <Link href="/login" className="text-green-600 hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        )}

        {/* Step 2: Email Verification */}
        {step === 2 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Verify Your Email</h2>
            <p className="text-gray-600 mb-6">
              We've sent a 6-digit code to <strong>{formData.email}</strong>
            </p>

            <form onSubmit={handleSubmitStep2} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Enter Verification Code</label>
                <input
                  type="text"
                  name="otp"
                  value={formData.otp}
                  onChange={handleInputChange}
                  required
                  maxLength={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 text-center text-2xl tracking-widest"
                  placeholder="000000"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Verify →
              </button>
            </form>

            <p className="text-center text-gray-500 text-sm mt-6">
              Didn't receive the code?{" "}
              <button className="text-green-600 hover:underline">
                Resend
              </button>
            </p>

            <button 
              onClick={() => setStep(1)}
              className="w-full text-gray-500 mt-4 hover:text-gray-700"
            >
              ← Back
            </button>
          </div>
        )}

        {/* Step 3: Payment (Credit Card) */}
        {step === 3 && (
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Payment Details</h2>
            <p className="text-gray-600 mb-6">
              You won't be charged during your 14-day free trial
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
              <p className="text-green-800 text-sm">
                ✨ Your card will only be charged after the trial ends. Cancel anytime before to avoid charges.
              </p>
            </div>

            <form onSubmit={handleSubmitStep3} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Start Free Trial →
              </button>
            </form>

            <div className="flex items-center justify-center gap-4 mt-6 text-gray-400">
              <span>🔒 Secured by</span>
              <span className="font-semibold">Stripe</span>
            </div>

            <button 
              onClick={() => setStep(2)}
              className="w-full text-gray-500 mt-4 hover:text-gray-700"
            >
              ← Back
            </button>
          </div>
        )}

        {/* Step 4: Success */}
        {step === 4 && (
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="text-6xl mb-4">🎉</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Welcome Aboard!</h2>
            <p className="text-gray-600 mb-6">
              Your account has been created successfully. We're setting up your invoice system...
            </p>

            <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
              <p className="text-sm text-gray-500 mb-2">Your Dashboard URL:</p>
              <p className="font-mono text-green-600 font-semibold">
                {formData.companyName.toLowerCase().replace(/\s+/g, '-')}.invoice.phytolink.com
              </p>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 text-sm">
                📧 Check your email for login credentials and next steps.
              </p>

              <Link
                href="#"
                className="block w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition"
              >
                Go to Dashboard →
              </Link>
            </div>

            <p className="text-gray-500 text-sm mt-6">
              Need help? <Link href="/contact" className="text-green-600 hover:underline">Contact us</Link>
            </p>
          </div>
        )}

        {/* Trust badges */}
        {step !== 4 && (
          <div className="mt-8 text-center">
            <p className="text-gray-500 text-sm mb-4">Trusted by Malaysian businesses</p>
            <div className="flex justify-center gap-6 text-gray-400">
              <span>🔒 SSL Secured</span>
              <span>🇲🇾 Malaysia</span>
              <span>💳 Stripe</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
