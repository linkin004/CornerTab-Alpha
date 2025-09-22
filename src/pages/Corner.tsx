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
      title: 'Inflation Ate My Future and All I Got Was This $99 T-Shirt',
      content: 'Remember when $99 could buy groceries for a week? Now it barely covers a designer tee that says "I survived the money printer." Peak irony.',
      author: 'MoneyPrinterGoBrr',
      category: 'Economic Satire',
      tags: ['inflation', 'fashion', 'irony'],
      likes: 420,
      comments: 69,
      timestamp: '2h ago',
      featured: true,
    },
    {
      id: '2',
      title: 'In Case of Money Printer, Break Glass',
      content: 'New emergency kit just dropped: Contains one (1) wheelbarrow, instructions for burning cash for warmth, and a "How to Barter" handbook.',
      author: 'WeimarRepeat',
      category: 'Dark Humor',
      tags: ['hyperinflation', 'emergency', 'history'],
      likes: 666,
      comments: 88,
      timestamp: '4h ago',
      featured: true,
    },
    {
      id: '3',
      title: 'LinkedIn Influencers Discover "Hustle Culture" is Just Poverty with Better Marketing',
      content: 'Breaking: Local LinkedIn thought leader realizes "rise and grind" is just what poor people call working three jobs.',
      author: 'CorporateCringe',
      category: 'Social Commentary',
      tags: ['linkedin', 'hustle', 'poverty'],
      likes: 1337,
      comments: 156,
      timestamp: '6h ago',
      featured: false,
    },
    {
      id: '4',
      title: 'NFT Bros Pivot to "Digital Minimalism" After Losing Life Savings',
      content: 'Former JPEG collectors now selling courses on "intentional living" and "mindful spending." The grift never stops.',
      author: 'CryptoRealist',
      category: 'Crypto Roast',
      tags: ['nft', 'minimalism', 'grift'],
      likes: 892,
      comments: 203,
      timestamp: '8h ago',
      featured: false,
    },
  ];

  const cornerStats = [
    { label: 'Truth Bombs Dropped', value: '∞', icon: Bomb },
    { label: 'Sacred Cows Slaughtered', value: '2,847', icon: Target },
    { label: 'Feelings Hurt', value: '420k', icon: Flame },
    { label: 'Reality Checks Issued', value: '69k', icon: Skull },
  ];

  const filteredPosts = cornerPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <Layout>
      <div className="min-h-screen bg-black text-green-500">
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
                <Button className="bg-red-600 hover:bg-red-700 text-white font-mono font-bold corner-border-glow">
                  <Flame className="h-5 w-5 mr-2" />
                  Enter at Your Own Risk
                </Button>
                <Button variant="outline" className="border-yellow-500 text-yellow-500 hover:bg-yellow-500/10 font-mono font-bold">
                  <DollarSign className="h-5 w-5 mr-2" />
                  Buy the Merch
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 border-y border-red-500/30 bg-red-950/10">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {cornerStats.map(({ label, value, icon: Icon }) => (
                <div key={label} className="text-center group">
                  <Icon className="h-8 w-8 text-red-500 mx-auto mb-3 corner-glow group-hover:scale-110 transition-transform duration-200" />
                  <div className="text-2xl md:text-3xl font-mono font-bold text-red-500 corner-glow mb-1">
                    {value}
                  </div>
                  <div className="text-sm text-gray-400 font-mono">
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
                <Zap className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-red-500" />
                <Input
                  placeholder="Search the chaos..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 bg-black border-red-500/30 text-green-400 placeholder:text-red-500/50 font-mono focus:border-red-500"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-mono font-bold text-red-500 corner-glow mb-8 text-center">
              FEATURED CHAOS
            </h2>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {filteredPosts.filter(post => post.featured).map(post => (
                <Card key={post.id} className="bg-red-950/20 border-red-500/30 hover:border-red-500/60 transition-all duration-300 corner-border-glow">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-red-900/50 text-red-400 border-red-500/30 font-mono text-xs">
                        {post.category}
                      </Badge>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 font-mono">
                        <span className="flex items-center space-x-1">
                          <Flame className="h-4 w-4 text-red-500" />
                          <span>{post.likes}</span>
                        </span>
                        <span>{post.timestamp}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-red-500 font-mono corner-glow leading-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 font-mono text-sm mb-4 leading-relaxed">
                      {post.content}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-yellow-500 font-mono">
                        by {post.author}
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {post.tags.map(tag => (
                          <Badge key={tag} variant="outline" className="border-green-500/30 text-green-400 font-mono text-xs">
                            #{tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Regular Posts */}
            <h3 className="text-2xl font-mono font-bold text-yellow-500 mb-6">
              MORE TRUTH BOMBS
            </h3>
            <div className="space-y-6">
              {filteredPosts.filter(post => !post.featured).map(post => (
                <Card key={post.id} className="bg-black/50 border-red-500/20 hover:border-red-500/40 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <Badge variant="outline" className="border-yellow-500/30 text-yellow-400 font-mono text-xs">
                            {post.category}
                          </Badge>
                          <span className="text-xs text-gray-500 font-mono">{post.timestamp}</span>
                        </div>
                        <h3 className="text-lg font-mono font-bold text-red-400 mb-2 leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-gray-300 font-mono text-sm leading-relaxed">
                          {post.content}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-yellow-500 font-mono">
                        by {post.author}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 font-mono">
                        <span className="flex items-center space-x-1">
                          <Flame className="h-3 w-3 text-red-500" />
                          <span>{post.likes}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <TrendingDown className="h-3 w-3 text-yellow-500" />
                          <span>{post.comments}</span>
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Warning Footer */}
        <section className="py-12 border-t border-red-500/30 bg-red-950/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <AlertTriangle className="h-12 w-12 text-red-500 mx-auto mb-4 corner-glow" />
              <h3 className="text-xl font-mono font-bold text-red-500 mb-4">
                CONTENT WARNING
              </h3>
              <p className="text-gray-400 font-mono text-sm leading-relaxed">
                The Corner contains satirical content, dark humor, and unfiltered commentary. 
                Views expressed here are for entertainment and do not represent CornerTab's main brand voice. 
                <br /><br />
                <span className="text-red-400">Proceed with thick skin and a sense of humor.</span>
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Corner;