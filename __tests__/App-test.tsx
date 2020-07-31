/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../src/App';
import { Article } from '../src/components/Article';
import { AppBar } from '../src/components/Appbar';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const articleMock = {
  author: "Juan Pablo Marino",
  content: "En ese marco, el índice S&amp;P Merval de Bolsas y Mercados Argentinos acumulaba en el mes una suba del 27% en pesos, tras alcanzar la semana pasada un nivel máximo histórico nominal de 50.091,35 uni… [+2222 chars]",
  description: "Las importantes variaciones positivas son medidas en pesos. Calculadas en dólares, los avances son menores por la devaluación del peso en los mercados bursátiles. Este viernes, en tanto, el índice S&P Merval de BYMA bajó 0,3% a 49.253,62 unidades.",
  publishedAt: "2020-07-31T19:05:31Z",
  source: { id: null, name: "ámbito.com" },
  title: "En julio, las acciones y los bonos argentinos saltan hasta 50% por mayor expectativa de acuerdo sobre deuda - ámbito.com",
  url: "https://www.ambito.com/finanzas/acciones/en-julio-las-y-los-bonos-argentinos-saltan-50-la-mayor-expectativa-un-acuerdo-la-deuda-n5121443",
  urlToImage: "https://media.ambito.com/adjuntos/239/imagenes/037/312/0037312588.jpg"
}

it('App renders correctly', () => {
  renderer.create(<App />);
});

it('App match snapshot', () => {
  const tree = renderer.create(<App/>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('Article renders correctly', () => {
  renderer.create(<Article {...articleMock} />);
});

it('Article match snapshot', () => {
  const tree = renderer.create(<Article {...articleMock} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('AppBar renders correctly', () => {
  renderer.create(<AppBar/>);
});

it('AppBar match snapshot', () => {
  const tree = renderer.create(<AppBar/>).toJSON();
  expect(tree).toMatchSnapshot();
});
