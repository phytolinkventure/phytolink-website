import Link from "next/link";

export default function PricingPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-300 mb-4">
            No hidden fees. No per-invoice charges. Just straightforward pricing.
          </p>
          <p className="text-green-400 font-semibold">
            🎁 All plans include FREE custom invoice template design
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Starter */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Starter</h3>
                <p className="text-gray-500 mb-4">For freelancers & small businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">RM79</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-sm text-green-600 mb-6">
                  or RM790/year (save 17%)
                </p>
                <Link 
                  href="/signup?plan=starter"
                  className="block w-full bg-gray-900 text-white py-3 rounded-lg text-center font-semibold hover:bg-gray-800 transition"
                >
                  Start Free Trial
                </Link>
              </div>
              <div className="bg-gray-50 p-8">
                <p className="font-semibold text-gray-900 mb-4">Includes:</p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> 1 User
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> 1 Company
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> 100 Invoices/month
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> 50 Customers
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> Quotations
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> PDF Generation
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> LHDN e-Invoice
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> Email Support
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> 1 Custom Template
                  </li>
                </ul>
              </div>
            </div>

            {/* Business - Most Popular */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border-2 border-green-500 relative">
              <div className="absolute top-0 left-0 right-0 bg-green-500 text-white text-center py-1 text-sm font-semibold">
                MOST POPULAR
              </div>
              <div className="p-8 pt-12">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Business</h3>
                <p className="text-gray-500 mb-4">For growing companies</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-green-600">RM149</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-sm text-green-600 mb-6">
                  or RM1,490/year (save 17%)
                </p>
                <Link 
                  href="/signup?plan=business"
                  className="block w-full bg-green-600 text-white py-3 rounded-lg text-center font-semibold hover:bg-green-700 transition"
                >
                  Start Free Trial
                </Link>
              </div>
              <div className="bg-green-50 p-8">
                <p className="font-semibold text-gray-900 mb-4">Everything in Starter, plus:</p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> 3 Users
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> 2 Companies
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> 500 Invoices/month
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> 200 Customers
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> Recurring Invoices
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> Expense Tracking
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> API Access
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> WhatsApp Support
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> 2 Hours Training
                  </li>
                </ul>
              </div>
            </div>

            {/* Professional */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Professional</h3>
                <p className="text-gray-500 mb-4">For established businesses</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">RM299</span>
                  <span className="text-gray-500">/month</span>
                </div>
                <p className="text-sm text-green-600 mb-6">
                  or RM2,990/year (save 17%)
                </p>
                <Link 
                  href="/signup?plan=professional"
                  className="block w-full bg-gray-900 text-white py-3 rounded-lg text-center font-semibold hover:bg-gray-800 transition"
                >
                  Start Free Trial
                </Link>
              </div>
              <div className="bg-gray-50 p-8">
                <p className="font-semibold text-gray-900 mb-4">Everything in Business, plus:</p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> 10 Users
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> 5 Companies
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> Unlimited Invoices
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> Unlimited Customers
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> Partner Commissions
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> AI Chat Assistant
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> Priority Support
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> Unlimited Templates
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> 5 Hours Training
                  </li>
                </ul>
              </div>
            </div>

            {/* Enterprise */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Enterprise</h3>
                <p className="text-gray-500 mb-4">For large organizations</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">Custom</span>
                </div>
                <p className="text-sm text-gray-500 mb-6">
                  Contact us for pricing
                </p>
                <Link 
                  href="/contact"
                  className="block w-full bg-gray-900 text-white py-3 rounded-lg text-center font-semibold hover:bg-gray-800 transition"
                >
                  Contact Sales
                </Link>
              </div>
              <div className="bg-gray-50 p-8">
                <p className="font-semibold text-gray-900 mb-4">Everything in Professional, plus:</p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> Unlimited Users
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> Unlimited Companies
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> Dedicated Database
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> Custom Integrations
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> On-Premise Option
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> Dedicated Manager
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> SLA Guarantee
                  </li>
                  <li className="flex items-center text-gray-600">
                    <span className="text-green-500 mr-2">✓</span> 10+ Hours Training
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Optional Add-ons</h2>
            <p className="text-gray-600">Enhance your plan with additional features</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-900">Additional User</h3>
                <p className="text-sm text-gray-500">Add more team members</p>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold text-gray-900">RM25</span>
                <span className="text-gray-500">/user/mo</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-900">Additional Company</h3>
                <p className="text-sm text-gray-500">Manage more entities</p>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold text-gray-900">RM30</span>
                <span className="text-gray-500">/company/mo</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-900">SMS Notifications</h3>
                <p className="text-sm text-gray-500">100 SMS pack</p>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold text-gray-900">RM15</span>
                <span className="text-gray-500">/pack</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-900">WhatsApp Notifications</h3>
                <p className="text-sm text-gray-500">Invoice alerts via WhatsApp</p>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold text-gray-900">RM49</span>
                <span className="text-gray-500">/month</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-900">White-Label Branding</h3>
                <p className="text-sm text-gray-500">Remove our branding</p>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold text-gray-900">RM99</span>
                <span className="text-gray-500">/month</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex justify-between items-center">
              <div>
                <h3 className="font-semibold text-gray-900">Data Migration</h3>
                <p className="text-sm text-gray-500">We import your existing data</p>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold text-gray-900">RM500</span>
                <span className="text-gray-500"> one-time</span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl flex justify-between items-center md:col-span-2">
              <div>
                <h3 className="font-semibold text-gray-900">On-Site Training</h3>
                <p className="text-sm text-gray-500">In-person training at your office (Klang Valley)</p>
              </div>
              <div className="text-right">
                <span className="text-xl font-bold text-gray-900">RM800</span>
                <span className="text-gray-500">/day</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Is there really a free trial?</h3>
              <p className="text-gray-600">
                Yes! You get 14 days of full access to all features. No credit card required to start. 
                We'll remind you before the trial ends.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Can I change plans later?</h3>
              <p className="text-gray-600">
                Absolutely. You can upgrade or downgrade your plan at any time. 
                Changes take effect on your next billing cycle.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">What payment methods do you accept?</h3>
              <p className="text-gray-600">
                We accept credit/debit cards (Visa, Mastercard) and FPX online banking. 
                For Enterprise plans, we also accept bank transfers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Is my data secure?</h3>
              <p className="text-gray-600">
                Yes. Each customer has their own isolated database. 
                All data is encrypted and backed up daily. We never share your data.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">Do you charge per invoice?</h3>
              <p className="text-gray-600">
                No! Unlike some competitors, we don't charge per invoice or per transaction. 
                Pay one flat monthly fee and create as many invoices as your plan allows.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-2">What's included in the custom template?</h3>
              <p className="text-gray-600">
                We'll design a professional invoice template with your company logo, colors, 
                and branding. This is included FREE with all plans (one template per plan).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join Malaysian businesses already using our Invoice Management System.
          </p>
          <Link 
            href="/signup"
            className="bg-white text-green-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-50 transition inline-block"
          >
            Start Your 14-Day Free Trial
          </Link>
          <p className="mt-4 text-green-200 text-sm">
            No credit card required • Full features • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
