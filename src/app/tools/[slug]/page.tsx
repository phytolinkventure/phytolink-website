import Link from "next/link";
import { notFound } from "next/navigation";

const tools: Record<string, { name: string; file: string }> = {
  "epf-calculator": { name: "EPF + Investment Calculator", file: "epf-calculator.html" },
  "kwsp-calculator": { name: "KWSP Projection Calculator", file: "kwsp-calculator.html" },
  "airdrop-calculator": { name: "Airdrop Strategy Calculator", file: "airdrop-calculator.html" },
  "json-to-chart": { name: "JSON to Chart Tool", file: "json-to-chart.html" },
  "websocket-tester": { name: "WebSocket Tester", file: "websocket-tester.html" },
  "auto-rotator": { name: "Auto Rotator", file: "auto-rotator.html" },
  "n8n-odoo-setup": { name: "n8n + Odoo Setup Guide", file: "n8n-odoo-setup.html" },
};

export function generateStaticParams() {
  return Object.keys(tools).map((slug) => ({ slug }));
}

export default async function ToolPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const tool = tools[slug];
  if (!tool) notFound();

  return (
    <div className="pt-16 bg-gray-50 min-h-screen">
      {/* Header bar */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Link
              href="/tools"
              className="text-gray-500 hover:text-green-600 transition-colors text-sm font-medium flex items-center gap-1"
            >
              ← All Tools
            </Link>
            <span className="text-gray-300">|</span>
            <h1 className="text-lg font-bold text-gray-900">{tool.name}</h1>
          </div>
          <a
            href={`/tools/${tool.file}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-green-600 hover:text-green-700 font-medium flex items-center gap-1"
          >
            Open in New Tab ↗
          </a>
        </div>
      </div>

      {/* Tool iframe */}
      <iframe
        src={`/tools/${tool.file}`}
        className="w-full border-0"
        style={{ height: "calc(100vh - 8rem)" }}
        title={tool.name}
        sandbox="allow-scripts allow-forms allow-same-origin allow-popups"
      />
    </div>
  );
}
