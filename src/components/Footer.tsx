import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              🌿 Phyto Link Venture
            </h3>
            <p className="text-gray-400 mb-4">
              Empowering Malaysian businesses with modern, compliant solutions. 
              Our Invoice Management System features native LHDN e-Invoice integration.
            </p>
            <p className="text-gray-400">
              📧 phytolinkventure@gmail.com
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-green-400 transition">Home</Link>
              </li>
              <li>
                <Link href="/invoice-system" className="hover:text-green-400 transition">Invoice System</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-green-400 transition">Pricing</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-400 transition">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/terms" className="hover:text-green-400 transition">Terms of Service</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-green-400 transition">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/refund" className="hover:text-green-400 transition">Refund Policy</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Phyto Link Venture. All rights reserved.</p>
          <p className="mt-2 text-sm">
            SSM Registration: [Your SSM Number] | Based in Malaysia 🇲🇾
          </p>
        </div>
      </div>
    </footer>
  );
}
