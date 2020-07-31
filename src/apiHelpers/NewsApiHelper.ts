import ApiHelperBase from "./ApiHelperBase";
import { News } from "../types/News";

export default class NewsApiHelper extends ApiHelperBase {
    apiKey = '9692c316b68a40f48da02bcdd9797e94'
    constructor() {
        super('http://newsapi.org/v2');
    }
    async getNews(category: string, from: Date, sortBy: 'publishedAt', country: string): Promise<News> {
        const stringFrom = `${from.getFullYear()}-${from.getMonth()}-${from.getDate()}`;
        return await super.get<News>('/top-headlines', { category, from: stringFrom, sortBy, apiKey: this.apiKey, country });
    }
}
