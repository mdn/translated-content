---
title: URL.search
slug: Web/API/URL/search
---

{{ApiRef("URL API")}}

{{domxref("URL")}} インターフェイスの **`search`** プロパティは、*クエリー文字列*とも呼ばれる検索文字列、つまり `'?'` とその後に続く URL のパラメーターを含む {{domxref("USVString")}} です。

最新のブラウザーでは {{domxref("URL.searchParams")}} プロパティを提供して、クエリー文字列からパラメーターを簡単に解析できるようにしています。

{{AvailableInWorkers}}

## 構文

```
const searchParams = object.search
url.search = newSearchParams
```

### 値

{{domxref("USVString")}}。

## 例

```js
const url = new URL('https://developer.mozilla.org/ja/docs/Web/API/URL/search?q=123');
console.log(url.search); // 戻り値: "?q=123"
```

## 仕様

| 仕様                                                                 | 状態                 | コメント |
| -------------------------------------------------------------------- | -------------------- | -------- |
| {{SpecName('URL', '#dom-url-search', 'URL.search')}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URL.search")}}

## 関連情報

- {{domxref("URL")}} インターフェイスに属します。
