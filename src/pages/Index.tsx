import { useSeoMeta } from '@unhead/react';
import { TrendingUp, Users, Zap, ArrowRight, Sparkles, Building, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Index = () => {
  useSeoMeta({
    title: 'CornerTab - Artifacts for What Comes Next',
    description: 'A lifestyle brand for a harder future currency. Discover articles, marketplace, and gallery celebrating rebuilding and optimism.',
  });

  const features = [
    {
      icon: Building,
      title: 'Rebuilding Culture',
      description: 'Curated content and artifacts that inspire construction over destruction, building over breaking.',
    },
    {
      icon: TrendingUp,
      title: 'Future-Forward',
      description: 'Premium products and insights designed for those preparing for what comes next.',
    },
    {
      icon: Users,
      title: 'Community Driven',
      description: 'A collective of builders, creators, and optimists shaping tomorrow together.',
    },
    {
      icon: Sparkles,
      title: 'Premium Quality',
      description: 'Carefully crafted experiences and products that reflect our commitment to excellence.',
    },
  ];

  const stats = [
    { label: 'Active Builders', value: '12,847', icon: Users },
    { label: 'Articles Published', value: '2,340', icon: Building },
    { label: 'Products Listed', value: '567', icon: TrendingUp },
    { label: 'Community Growth', value: '+127%', icon: Sparkles },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 future-grid opacity-30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto fade-in-up">
            <Badge className="mb-6 bg-primary/10 text-primary hover:bg-primary/20 border-primary/30 font-semibold">
              Building Tomorrow Today
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              <span className="text-primary">Corner</span>
              <span className="text-foreground">Tab</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed font-light">
              Artifacts for what comes next.<br />
              <span className="text-primary font-semibold">Wear the rebuild.</span>
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
              Built for <span className="gradient-text">Tomorrow</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Every piece designed with intention, every experience crafted for those building the future.
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
              Where the sharper bite lives. Satirical takes, meme-heavy content, and biting commentary
              on the state of everything. Not for the faint of heart.
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
                "Inflation ate my future and all I got was this $99 t-shirt."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Build?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join thousands of builders, creators, and optimists who are actively shaping tomorrow.
              <br />
              <span className="text-primary font-semibold">The future needs more builders, not critics.</span>
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
    </Layout>
  );
};

export default Index;