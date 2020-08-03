import React, { useEffect, useState } from 'react';
import { View, StatusBar, FlatList, ListRenderItemInfo } from 'react-native';
import NewsApiHelper from './apiHelpers/NewsApiHelper';
import { Articles } from './types/Articles';
import { Article } from './components/Article';
import { AppBar } from './components/Appbar';

export default function App() {
  const [articles, setArticles] = useState<Articles[]>([]);

  useEffect(() => {
    getNews();
  }, [])

  async function getNews() {
    const apiHelper = new NewsApiHelper();
    const date = new Date();
    date.setMonth(date.getMonth() - 1);
    const newsResult = await apiHelper.getNews('business', date, 'publishedAt', 'ar');
    setArticles(newsResult.articles);
  }

  const renderArticle = ({ item }: ListRenderItemInfo<Articles>) => (
    <Article {...item} />
  );

  return (
    <View style={{flex: 1}}>
      <StatusBar backgroundColor="#ccd520" barStyle={'dark-content'} />
      <AppBar />
      <FlatList<Articles>
        data={articles}
        renderItem={renderArticle}
        keyExtractor={article => article.url}
      />
    </View>
  );
}