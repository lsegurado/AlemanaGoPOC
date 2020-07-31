import React, { useEffect, useState } from 'react';
import { View, StatusBar, ScrollView } from 'react-native';
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
    const newsResult = await apiHelper.getNews('business', new Date(2020, 6, 30), 'publishedAt', 'ar');
    setArticles(newsResult.articles);
  }

  return (
    <View>
      <StatusBar backgroundColor="#ccd520" barStyle={'dark-content'} />
      <AppBar />
      <ScrollView>
        {articles.map(article => <Article key={article.url} {...article}></Article>)}
      </ScrollView>
    </ View >
  );
}