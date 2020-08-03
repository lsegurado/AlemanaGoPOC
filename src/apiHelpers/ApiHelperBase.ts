export default class ApiHelperBase {
    private apiUrl: string;
    constructor(apiUrl: string) {
        this.apiUrl = apiUrl;
    }
    async fetch<T>(input: RequestInfo, params: any, init?: RequestInit | undefined): Promise<T> {
        let url = new URL(this.apiUrl + input);
        Object.keys(params || {}).forEach(key => url.searchParams.append(key, params[key]));
        const response = await fetch(url.toString(), init);
        return response.json() as Promise<T>;
    }
    async get<T>(input: RequestInfo, params: any): Promise<T> {
        return await this.fetch<T>(input, params, { method: 'GET' });
    }
}