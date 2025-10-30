import { useSeoMeta } from '@unhead/react';
import { Zap, AlertTriangle, DollarSign, TrendingDown, Flame, Skull, Target, Bomb } from 'lucide-react';
import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';

const Corner = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useSeoMeta({
    title: 'The Corner - Raw & Unfiltered | CornerTab',
    description: 'Where the real talk lives. Satirical takes, meme-heavy content, and biting commentary on everything.',
  });

  const cornerPosts = [
    {
      id: '1',
      title: 'Coming Soon',
      content: 'Biting commentary on the absurdity of broken systems. Justice through freedom technology meets comedic relief. SMiCEk publishing content attacking the egregious ways individuals have taken advantage of this broken system—with comedic relief acknowledging how ridiculous it all is.',
      author: 'SMiCEk',
      category: 'System Critique',
      tags: ['justice', 'freedom', 'technology'],
      likes: 0,
      comments: 0,
      timestamp: 'Coming Soon',
      featured: true,
    },
  ];

  const cornerStats = [
    { label: 'Truth Bombs Dropped', value: '0', icon: Bomb },
    { label: 'Systems Exposed', value: '0', icon: Target },
    { label: 'Injustices Called Out', value: '0', icon: Flame },
    { label: 'Solutions Proposed', value: '0', icon: Skull },
  ];

  const filteredPosts = cornerPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <div className="min-h-screen bg-black text-white corner-theme">
        {/* Hero Section */}
        <section className="relative py-16 overflow-hidden bg-gradient-to-br from-black via-red-950/20 to-black">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,0,0.1)_0%,transparent_50%)]"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center space-x-2 bg-red-900/30 text-red-400 px-4 py-2 rounded border border-red-500/30 text-sm font-mono mb-6">
                <AlertTriangle className="h-4 w-4" />
                <span>WARNING: UNFILTERED CONTENT AHEAD</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6 corner-glitch">
                <span className="text-red-500 corner-glow">THE</span>{' '}
                <span className="text-yellow-500">CORNER</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-400 mb-8 font-mono leading-relaxed">
                Where the real talk lives.<br />
                <span className="text-red-400">Raw. Meme-heavy. Biting satire.</span>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-[#ff6b00] hover:bg-[#ff7a1a] text-black font-mono font-bold corner-border-glow">
                  <Flame className="h-5 w-5 mr-2" />
                  Enter at Your Own Risk
                </Button>
                <Button variant="outline" className="border-2 border-[#39ff14] text-[#39ff14] hover:bg-[#39ff14]/10 font-mono font-bold">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Buy the Merch
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-y border-[#ff6b00]/30 bg-[#ff6b00]/5">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {cornerStats.map(({ label, value, icon: Icon }) => (
                <div key={label} className="text-center group">
                  <Icon className="h-8 w-8 text-[#ff6b00] mx-auto mb-3 corner-glow group-hover:scale-110 transition-transform duration-200" />
                  <div className="text-2xl md:text-3xl font-mono font-bold text-[#ff6b00] corner-glow mb-1">
                    {value}
                  </div>
                  <div className="text-sm text-white font-mono font-semibold">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Search */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Zap className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-[#ff6b00]" />
                <Input
                  placeholder="Search the chaos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-black border-2 border-[#ff6b00]/30 text-white placeholder:text-[#ff6b00]/50 font-mono focus:border-[#ff6b00] focus:ring-2 focus:ring-[#ff6b00]/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-mono font-bold text-[#ff6b00] corner-glow mb-8 text-center">
              FEATURED CONTENT
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {filteredPosts.filter(post => post.featured).map(post => (
                <Card key={post.id} className="bg-black/80 border-2 border-[#ff6b00]/30 hover:border-[#ff6b00] transition-all duration-300 corner-border-glow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-[#ff6b00]/20 text-[#ff6b00] border-[#ff6b00]/50 font-mono text-xs font-bold">
                        {post.category}
                      </Badge>
                      <div className="flex items-center space-x-4 text-sm text-white font-mono font-semibold">
                        <span className="flex items-center space-x-1">
                          <Flame className="h-4 w-4 text-[#ff0000] corner-glow" />
                          <span>{post.likes}</span>
                        </span>
                        <span>{post.timestamp}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-[#ff6b00] font-mono corner-glow leading-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-white font-mono text-sm mb-4 leading-relaxed">
                      {post.content}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-[#39ff14] font-mono font-bold">
                        by {post.author}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="border-[#39ff14]/50 text-[#39ff14] font-mono text-xs font-semibold">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Footer */}
        <section className="py-12 border-t border-[#ff6b00]/30 bg-[#ff6b00]/5">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <AlertTriangle className="h-12 w-12 text-[#ff0000] mx-auto mb-4 corner-glow" />
              <h3 className="text-xl font-mono font-bold text-[#ff6b00] corner-glow mb-4">
                CONTENT WARNING
              </h3>
              <p className="text-white font-mono text-sm leading-relaxed">
                The Corner contains satirical content, dark humor, and unfiltered commentary.
                Views expressed here are for entertainment and do not represent CornerTab's main brand voice.
                <br /><br />
                <span className="text-[#ff0000] font-bold corner-glow">Proceed with thick skin and a sense of humor.</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Corner;