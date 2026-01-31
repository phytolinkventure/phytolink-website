import Link from "next/link";

export default function InvoiceSystemPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🏆 Malaysia's #1 e-Invoice Solution
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Invoice Management System
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              The only invoice software with <strong>native LHDN e-Invoice integration</strong>. 
              Create, manage, and submit e-Invoices seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/signup"
                className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition"
              >
                Start Free Trial
              </Link>
              <Link 
                href="/pricing"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Video */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
              See It In Action
            </h2>
            <p className="text-gray-400">
              Watch a 3-minute demo of our Invoice Management System
            </p>
          </div>
          <div className="relative rounded-xl overflow-hidden shadow-2xl">
            <video 
              controls 
              poster="/demo-video/poster.jpg"
              className="w-full aspect-video bg-black"
            >
              <source src="/demo-video/invoice-demo.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p className="text-center text-gray-500 mt-4 text-sm">
            Features: Invoice creation • Payment tracking • Expense management • Partner commissions
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Everything You Need for Invoicing
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive features designed for Malaysian businesses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl mb-4">📄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Invoice Management</h3>
              <p className="text-gray-600">
                Create, edit, and manage invoices with ease. Support for multiple currencies, 
                taxes, and payment terms.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-green-50 p-8 rounded-xl hover:shadow-lg transition border-2 border-green-200">
              <div className="text-4xl mb-4">🏛️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">LHDN e-Invoice</h3>
              <p className="text-gray-600">
                <strong>Native MyInvois integration</strong>. Submit e-Invoices directly to LHDN 
                with one click. Stay compliant effortlessly.
              </p>
              <span className="inline-block mt-3 bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                Unique Feature
              </span>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl mb-4">📝</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quotations</h3>
              <p className="text-gray-600">
                Create professional quotations and convert them to invoices with one click. 
                Track quotation status and follow-ups.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl mb-4">👥</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Customer Management</h3>
              <p className="text-gray-600">
                Maintain customer database with contact details, payment history, 
                and outstanding balances.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Payment Tracking</h3>
              <p className="text-gray-600">
                Record payments, partial payments, and refunds. 
                Get a clear view of who owes you money.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Recurring Invoices</h3>
              <p className="text-gray-600">
                Set up automatic invoice generation for subscription or retainer clients. 
                Never miss a billing cycle.
              </p>
            </div>

            {/* Feature 7 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expense Tracking</h3>
              <p className="text-gray-600">
                Track business expenses with categories and allocations. 
                See your profit margins clearly.
              </p>
            </div>

            {/* Feature 8 */}
            <div className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition">
              <div className="text-4xl mb-4">🏢</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Multi-Company</h3>
              <p className="text-gray-600">
                Manage multiple companies or brands from one dashboard. 
                Separate databases for each entity.
              </p>
            </div>

            {/* Feature 9 */}
            <div className="bg-blue-50 p-8 rounded-xl hover:shadow-lg transition border-2 border-blue-200">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">AI Assistant</h3>
              <p className="text-gray-600">
                Chat with your invoice system via WhatsApp. 
                Create invoices, check payments, and get reports conversationally.
              </p>
              <span className="inline-block mt-3 bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How We Compare
            </h2>
            <p className="text-xl text-gray-600">
              See why Malaysian businesses choose us over international alternatives
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-xl shadow-lg overflow-hidden">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left text-gray-900 font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center text-green-600 font-semibold">Phyto Invoice</th>
                  <th className="px-6 py-4 text-center text-gray-600 font-semibold">Zoho Books</th>
                  <th className="px-6 py-4 text-center text-gray-600 font-semibold">QuickBooks</th>
                  <th className="px-6 py-4 text-center text-gray-600 font-semibold">FreshBooks</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                <tr>
                  <td className="px-6 py-4 text-gray-900">LHDN e-Invoice</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✅ Native</td>
                  <td className="px-6 py-4 text-center text-red-500">❌</td>
                  <td className="px-6 py-4 text-center text-red-500">❌</td>
                  <td className="px-6 py-4 text-center text-red-500">❌</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">SST Compliance</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✅ Full</td>
                  <td className="px-6 py-4 text-center text-yellow-600">⚠️ Partial</td>
                  <td className="px-6 py-4 text-center text-yellow-600">⚠️ Partial</td>
                  <td className="px-6 py-4 text-center text-red-500">❌</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900">Custom Template (FREE)</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✅ Included</td>
                  <td className="px-6 py-4 text-center text-gray-500">💰 Extra</td>
                  <td className="px-6 py-4 text-center text-gray-500">💰 Extra</td>
                  <td className="px-6 py-4 text-center text-gray-500">💰 Extra</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">Local Support (WhatsApp)</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✅ &lt;4 hours</td>
                  <td className="px-6 py-4 text-center text-gray-500">Email (24-48h)</td>
                  <td className="px-6 py-4 text-center text-gray-500">Email (24-48h)</td>
                  <td className="px-6 py-4 text-center text-gray-500">Email (24-48h)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900">API Access</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✅ All Plans</td>
                  <td className="px-6 py-4 text-center text-gray-500">💰 Paid Tier</td>
                  <td className="px-6 py-4 text-center text-gray-500">💰 Paid Tier</td>
                  <td className="px-6 py-4 text-center text-gray-500">💰 Paid Tier</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-6 py-4 text-gray-900">Partner Commissions</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">✅ Built-in</td>
                  <td className="px-6 py-4 text-center text-red-500">❌</td>
                  <td className="px-6 py-4 text-center text-red-500">❌</td>
                  <td className="px-6 py-4 text-center text-red-500">❌</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 text-gray-900">Starting Price</td>
                  <td className="px-6 py-4 text-center text-green-600 font-bold">RM79/mo</td>
                  <td className="px-6 py-4 text-center text-gray-600">RM75/mo</td>
                  <td className="px-6 py-4 text-center text-gray-600">RM130/mo</td>
                  <td className="px-6 py-4 text-center text-gray-600">RM70/mo</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* e-Invoice Compliance */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
                ⚠️ Compliance Alert
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                e-Invoice is Now Mandatory
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                LHDN (Inland Revenue Board of Malaysia) has mandated e-Invoice submission for all businesses:
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-red-500 mr-3 mt-1">●</span>
                  <div>
                    <strong className="text-gray-900">August 2024:</strong>
                    <span className="text-gray-600"> Businesses with revenue &gt;RM100M</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-3 mt-1">●</span>
                  <div>
                    <strong className="text-gray-900">January 2025:</strong>
                    <span className="text-gray-600"> Businesses with revenue &gt;RM25M</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-3 mt-1">●</span>
                  <div>
                    <strong className="text-gray-900">July 2025:</strong>
                    <span className="text-gray-600"> All remaining businesses</span>
                  </div>
                </li>
              </ul>
              <p className="text-gray-600 mb-6">
                Non-compliance can result in penalties and tax issues. 
                Our system ensures you're always compliant.
              </p>
              <Link 
                href="/signup"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition inline-block"
              >
                Get Compliant Now →
              </Link>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-bold text-gray-900 mb-4">How Our e-Invoice Works</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">1</div>
                  <div>
                    <p className="font-semibold text-gray-900">Create Invoice</p>
                    <p className="text-gray-600 text-sm">Use our simple interface to create your invoice</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">2</div>
                  <div>
                    <p className="font-semibold text-gray-900">One-Click Submit</p>
                    <p className="text-gray-600 text-sm">Click "Submit to LHDN" - we handle the rest</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">3</div>
                  <div>
                    <p className="font-semibold text-gray-900">Get Confirmation</p>
                    <p className="text-gray-600 text-sm">Receive LHDN validation with unique e-Invoice ID</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 text-green-800 rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 flex-shrink-0">✓</div>
                  <div>
                    <p className="font-semibold text-gray-900">Done!</p>
                    <p className="text-gray-600 text-sm">Invoice is compliant and stored in LHDN system</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Streamline Your Invoicing?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Start your 14-day free trial today. No credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/signup"
              className="bg-white text-blue-700 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition"
            >
              Start Free Trial
            </Link>
            <Link 
              href="/pricing"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-700 transition"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
