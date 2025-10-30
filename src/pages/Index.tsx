import { useSeoMeta } from '@unhead/react';
import { TrendingUp, Users, Zap, ArrowRight, Sparkles, Building, Globe, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  useSeoMeta({
    title: 'CornerTab - Helping Creators Exit a Broken System',
    description: 'Citizens Opting to Reject Normalized Robbery Through Adopting Bitcoin. A media and retail marketplace empowering artists with sound money, independent commerce, and the freedom to keep what they earn.',
  });

  const features = [
    {
      icon: Building,
      title: 'Sound Money',
      description: 'Built on Bitcoin and layer 2 innovations. Accept payments directly, keep 100% of your earnings, and own your economic future.',
    },
    {
      icon: TrendingUp,
      title: 'Independent Commerce',
      description: 'Sell your art without middlemen taking their cut. Direct to audience. Direct payment. Direct freedom.',
    },
    {
      icon: Users,
      title: 'Own Your Audience',
      description: 'Your community is yours. No algorithms deciding your reach. No platforms that can deplatform you. Built on Nostr.',
    },
    {
      icon: Sparkles,
      title: 'Freedom Technology',
      description: 'Leveraging Bitcoin and decentralized protocols to enable creators worldwide to build independently and sustainably.',
    },
  ];

  const stats = [
    { label: 'Active Builders', value: '0', icon: Users },
    { label: 'Articles Published', value: '0', icon: Building },
    { label: 'Products Listed', value: '0', icon: TrendingUp },
    { label: 'Community Growth', value: '∞', icon: Sparkles },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 future-grid opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto fade-in-up">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-primary/30 font-semibold">
              Citizens Opting to Reject Normalized Robbery Through Adopting Bitcoin
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-primary">Helping Creators</span><br />
              <span className="text-foreground">Exit a Broken System</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed font-light">
              Through sound money, independent commerce, and art that tells the truth.<br />
              <span className="text-primary font-semibold">Your designs. Your shop. Your rules.</span>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="btn-premium text-white font-semibold px-8"
              >
                <Link to="/marketplace" className="flex items-center space-x-2">
                  <span>Explore Marketplace</span>
                  <ArrowRight className="h-5 w-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-foreground/20 text-foreground hover:bg-foreground/5 hover:border-foreground/40 font-semibold px-8"
              >
                <Link to="/articles" className="flex items-center space-x-2">
                  <Building className="h-5 w-5" />
                  <span>Read Articles</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50 backdrop-blur-sm border-y border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map(({ label, value, icon: Icon }) => (
              <div key={label} className="text-center group">
                <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-4 group-hover:scale-110 transition-transform duration-200">
                  <Icon className="h-6 w-6" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {value}
                </div>
                <div className="text-sm text-muted-foreground font-semibold">
                  {label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why <span className="gradient-text">CornerTab?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              No middlemen taking cuts. No algorithms controlling your reach. No platforms that can deplatform you. Just direct commerce, direct freedom, and direct impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map(({ icon: Icon, title, description }) => (
              <Card key={title} className="card-clean hover-lift shadow-sm">
                <CardHeader className="text-center pb-4">
                  <div className="inline-flex p-4 rounded-xl bg-primary/10 text-primary mx-auto mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-foreground text-lg font-semibold">
                    {title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground leading-relaxed">
                    {description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* The Corner Teaser */}
      <section className="py-20 bg-gradient-to-r from-black via-red-950/20 to-black border-y border-red-500/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-red-900/30 text-red-400 px-4 py-2 rounded-full text-sm font-mono font-semibold mb-6 border border-red-500/30">
              <Zap className="h-4 w-4" />
              <span>Raw & Unfiltered</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Enter <span className="text-red-500 corner-glow">The Corner</span>
            </h2>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Where justice through freedom technology meets comedic relief. Biting commentary on the absurdity of broken systems.
              Angry. Frustrated. Absolutely honest. But we'll laugh about how ridiculous it all is.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                asChild
                className="bg-red-600 hover:bg-red-700 text-white font-bold px-8 corner-border-glow"
              >
                <Link to="/corner" className="flex items-center space-x-2">
                  <Zap className="h-5 w-5" />
                  <span>Enter The Corner</span>
                </Link>
              </Button>
              <p className="text-sm text-red-400 font-mono font-semibold">
                "Where anger meets comedy, justice meets absurdity."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Take Control?
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              <span className="font-semibold text-foreground">Start your path to independence:</span>
            </p>
            <div className="max-w-2xl mx-auto mb-8 text-left space-y-3">
              <div className="flex items-start space-x-3">
                <Badge className="bg-primary text-white font-bold mt-1">1</Badge>
                <p className="text-muted-foreground">Sign up for Nostr (use <span className="font-semibold text-foreground">Primal</span> or your client of choice)</p>
              </div>
              <div className="flex items-start space-x-3">
                <Badge className="bg-primary text-white font-bold mt-1">2</Badge>
                <p className="text-muted-foreground">Set up a Bitcoin wallet to receive payments directly</p>
              </div>
              <div className="flex items-start space-x-3">
                <Badge className="bg-primary text-white font-bold mt-1">3</Badge>
                <p className="text-muted-foreground">List your art on CornerTab and start selling without middlemen</p>
              </div>
              <div className="flex items-start space-x-3">
                <Badge className="bg-primary text-white font-bold mt-1">4</Badge>
                <p className="text-muted-foreground">Build your community on Nostr—it's <span className="font-semibold text-foreground">yours</span>, not ours</p>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-8 italic">
              No equity required. No growth targets. No exit strategy—we're already out.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="btn-premium text-white font-semibold px-8"
              >
                <Link to="/marketplace" className="flex items-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>Start Building</span>
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-2 border-foreground/20 text-foreground hover:bg-foreground/5 hover:border-foreground/40 font-semibold px-8"
              >
                <Link to="/gallery" className="flex items-center space-x-2">
                  <Sparkles className="h-5 w-5" />
                  <span>View Gallery</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-20 bg-muted/30 border-y border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex p-3 rounded-xl bg-primary/10 text-primary mb-6">
              <MessageSquare className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Join the Community
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Connect with other creators, builders, and freedom-focused individuals.
              <br />
              <span className="text-primary font-semibold">Discord server coming soon.</span>
            </p>
            <Button
              disabled
              size="lg"
              className="btn-premium text-white font-semibold px-8 opacity-60"
            >
              <MessageSquare className="h-5 w-5 mr-2" />
              <span>Join Discord (Coming Soon)</span>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;