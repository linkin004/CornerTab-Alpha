import { useSeoMeta } from '@unhead/react';
import { Clock, User, MessageSquare, Search, Plus } from 'lucide-react';
import { useState } from 'react';
import { Layout } from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Skeleton } from '@/components/ui/skeleton';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import { CommentsSection } from '@/components/comments/CommentsSection';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';

const Articles = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedArticle, setSelectedArticle] = useState<typeof articles[0] | null>(null);
  const { user } = useCurrentUser();

  useSeoMeta({
    title: 'Articles - CornerTab',
    description: 'Bitcoin, entrepreneurship, culture, and technology. Solution-oriented writing for creators building independent futures.',
  });

  const categories = [
    { id: 'all', label: 'All Articles', count: 0 },
    { id: 'bitcoin', label: 'Bitcoin', count: 0 },
    { id: 'entrepreneurship', label: 'Entrepreneurship', count: 0 },
    { id: 'culture', label: 'Culture & Lifestyle', count: 0 },
    { id: 'technology', label: 'Technology', count: 0 },
  ];

  // Mock articles data - in real app this would come from Nostr kind 30023
  const articles = [
    {
      id: '1',
      title: 'Coming Soon',
      excerpt: 'New articles from SMiCEk and guest writers coming soon. Articles will cover Bitcoin, entrepreneurship, culture, and technology with a focus on freedom and independence.',
      author: 'SMiCEk',
      authorPubkey: 'npub10ulttdz8zep5asqm7nd35u3xmp7z5jhkut39q5ewc8ejwnk3vstql9gmm8',
      publishedAt: 'Coming Soon',
      readTime: '-- min',
      category: 'bitcoin',
      tags: ['coming-soon', 'articles'],
      comments: 0,
      featured: true,
    },
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articles.find(article => article.featured);

  return (
    <Layout>
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Articles</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
            Solution-oriented writing on Bitcoin, entrepreneurship, culture, and technology. Building independent futures through knowledge and action.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-blue-600" />
            <Input
              placeholder="Search articles, tags, or content..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-gray-300 focus:border-blue-500"
            />
          </div>
          {user && (
            <Button className="btn-premium text-white font-semibold">
              <Plus className="h-4 w-4 mr-2" />
              Publish Article
            </Button>
          )}
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map(({ id, label, count }) => (
            <Button
              key={id}
              variant={selectedCategory === id ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(id)}
              className={`font-medium ${
                selectedCategory === id
                  ? "bg-blue-600 text-white"
                  : "border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {label} ({count})
            </Button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Article */}
            {featuredArticle && selectedCategory === 'all' && (
              <Card className="gradient-bg border-blue-200 shadow-lg hover-lift">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-blue-100 text-blue-700 border-blue-200 font-semibold">
                      FEATURED
                    </Badge>
                    <div className="flex items-center space-x-4 text-sm text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{featuredArticle.readTime}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MessageSquare className="h-4 w-4" />
                        <span>{featuredArticle.comments}</span>
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-2xl text-gray-900 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                    {featuredArticle.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {featuredArticle.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {featuredArticle.tags.map(tag => (
                      <Badge key={tag} variant="outline" className="border-blue-200 text-blue-600 text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2 text-sm text-gray-500">
                      <User className="h-4 w-4" />
                      <span>{featuredArticle.author}</span>
                      <span>•</span>
                      <span>{featuredArticle.publishedAt}</span>
                    </div>
                    <Button
                      size="sm"
                      className="btn-premium text-white font-semibold"
                      onClick={() => setSelectedArticle(featuredArticle)}
                    >
                      Read Article
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Articles List */}
            <div className="space-y-6">
              {filteredArticles.filter(article => !article.featured || selectedCategory !== 'all').map(article => (
                <Card key={article.id} className="card-clean hover-lift border-0 shadow-sm">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="outline" className="border-blue-200 text-blue-600 text-xs">
                        {categories.find(c => c.id === article.category)?.label}
                      </Badge>
                      <div className="flex items-center space-x-4 text-sm text-gray-500">
                        <span className="flex items-center space-x-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </span>
                        <span className="flex items-center space-x-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{article.comments}</span>
                        </span>
                      </div>
                    </div>
                    <CardTitle className="text-xl text-gray-900 hover:text-blue-600 transition-colors duration-300 cursor-pointer">
                      {article.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {article.excerpt}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map(tag => (
                        <Badge key={tag} variant="outline" className="border-blue-200 text-blue-600 text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                        <span>•</span>
                        <span>{article.publishedAt}</span>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50"
                        onClick={() => setSelectedArticle(article)}
                      >
                        Read More
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Loading State */}
            {filteredArticles.length === 0 && (
              <div className="space-y-6">
                {[...Array(3)].map((_, i) => (
                  <Card key={i} className="card-clean border-0 shadow-sm">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Skeleton className="h-6 w-20 bg-gray-200" />
                        <Skeleton className="h-4 w-24 bg-gray-200" />
                      </div>
                      <Skeleton className="h-6 w-3/4 bg-gray-200" />
                    </CardHeader>
                    <CardContent>
                      <Skeleton className="h-4 w-full mb-2 bg-gray-200" />
                      <Skeleton className="h-4 w-2/3 mb-4 bg-gray-200" />
                      <div className="flex justify-between">
                        <Skeleton className="h-4 w-32 bg-gray-200" />
                        <Skeleton className="h-8 w-20 bg-gray-200" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card className="card-clean border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-foreground text-lg font-semibold">
                  Community Stats
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">Total Articles</span>
                  <span className="text-primary font-bold">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">Active Writers</span>
                  <span className="text-primary font-bold">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">Comments</span>
                  <span className="text-primary font-bold">0</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground text-sm">Publishing Soon</span>
                  <span className="text-primary font-bold">Monthly</span>
                </div>
              </CardContent>
            </Card>

            {/* Popular Tags */}
            <Card className="card-clean border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900 text-lg font-semibold">
                  Popular Tags
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {['building', 'optimism', 'future', 'culture', 'rebuilding', 'hope', 'community', 'stewardship'].map(tag => (
                    <Badge
                      key={tag}
                      variant="outline"
                      className="border-blue-200 text-blue-600 hover:bg-blue-50 cursor-pointer text-xs"
                    >
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Article Modal */}
        <Dialog open={!!selectedArticle} onOpenChange={() => setSelectedArticle(null)}>
          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-white border-gray-200">
            {selectedArticle && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl text-gray-900 font-bold">
                    {selectedArticle.title}
                  </DialogTitle>
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <span className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{selectedArticle.author}</span>
                    </span>
                    <span>{selectedArticle.publishedAt}</span>
                    <span className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>{selectedArticle.readTime}</span>
                    </span>
                  </div>
                </DialogHeader>
                <div className="space-y-6">
                  <div className="prose max-w-none">
                    <p className="text-gray-600 leading-relaxed text-lg">
                      {selectedArticle.excerpt}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      This is where the full article content would be displayed. In a real implementation,
                      this would be fetched from Nostr events and rendered with proper markdown support.
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {selectedArticle.tags.map((tag: string) => (
                      <Badge key={tag} variant="outline" className="border-blue-200 text-blue-600 text-xs">
                        #{tag}
                      </Badge>
                    ))}
                  </div>
                  <CommentsSection
                    root={new URL(`https://cornertab.example/articles/${selectedArticle.id}`)}
                    title="Discussion"
                    emptyStateMessage="Start the conversation"
                    emptyStateSubtitle="Share your thoughts on this article"
                  />
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </Layout>
  );
};

export default Articles;