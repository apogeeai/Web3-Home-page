import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Globe, MessageCircle } from "lucide-react";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-100 via-violet-100 to-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block p-2 glass-card rounded-2xl mb-4">
              <div className="flex items-center space-x-2 px-2">
                <MessageCircle className="h-6 w-6 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">Web3 Secured VPN</span>
              </div>
            </div>
            <h1 className="text-6xl font-bold tracking-tight space-y-2">
              <span className="block gradient-text">FASTEST</span>
              <span className="block text-blue-600">VPN NET</span>
              <span className="block">IN TOWN</span>
            </h1>
            <p className="text-xl text-gray-600">
              Get the ultimate VPN experience with blazing-fast speeds and uncompromised security. Connect to any location worldwide instantly.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-2xl px-8">
                Try it now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-2xl px-8">
                Learn more
              </Button>
            </div>
          </div>
          <div className="relative h-[600px] animate-float">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-[40px] blur-3xl"></div>
            <Image
              src="https://images.unsplash.com/photo-1614064641938-3bbee52942c7?auto=format&fit=crop&q=80"
              alt="VPN Illustration"
              fill
              className="object-contain p-8"
              priority
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600 to-purple-600 opacity-90"></div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              VEEPN SURPASSES EVERYTHING ELSE
            </h2>
            <p className="text-xl text-white/80">
              The fastest, most secure VPN service on the planet
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="glass-card rounded-3xl p-8 text-white hover:transform hover:scale-105 transition-all duration-300 ease-out"
              >
                <div className="bg-white/20 p-4 rounded-2xl inline-block mb-6">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-white/80 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-20 bg-white/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="glass-card rounded-3xl p-8 text-center">
                <div className="text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

const features = [
  {
    icon: Shield,
    title: "Military-grade Encryption",
    description: "Your data is protected with AES-256 encryption, the same standard used by security experts worldwide."
  },
  {
    icon: Zap,
    title: "Lightning Fast Speeds",
    description: "Experience the fastest VPN speeds with our optimized global network of servers."
  },
  {
    icon: Globe,
    title: "Global Coverage",
    description: "Connect to servers in over 100 countries with unlimited bandwidth and server switching."
  }
];

const stats = [
  { value: "10Gbps", label: "Maximum Speed" },
  { value: "100+", label: "Server Locations" },
  { value: "99.9%", label: "Uptime Guarantee" }
];