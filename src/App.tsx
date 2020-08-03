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
    const date = new Date();
    date.setMonth(date.getMonth() - 1);
    const newsResult = await apiHelper.getNews('business', date, 'publishedAt', 'ar');
    setArticles(newsResult.articles);
  }

  return (
    <View>
      <StatusBar backgroundColor="#ccd520" barStyle={'dark-content'} />
      <AppBar />
      <ScrollView>
        {articles ? articles.map(article => <Article key={article.url} {...article}></Article>) : undefined}
      </ScrollView>
    </ View >
  );
}