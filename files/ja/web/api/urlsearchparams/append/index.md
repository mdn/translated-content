---
title: URLSearchParams.append()
slug: Web/API/URLSearchParams/append
---

{{ApiRef("URL API")}}

{{domxref("URLSearchParams")}} インターフェイスの **`append()`** メソッドは、指定されたキー/値のペアを新しい検索パラメーターとして追加します。

下にある例に示すように、同じキーが複数回追加された場合、各値がパラメーター文字列に複数回現れます。

{{availableinworkers}}

## 構文

```
URLSearchParams.append(name, value)
```

### パラメーター

- name
  - : 追加するパラメーターの名前。
- value
  - : 追加するパラメーターの値。

### 戻り値

無効。

## 例

```js
let url = new URL('https://example.com?foo=1&bar=2');
let params = new URLSearchParams(url.search.slice(1));

// 2番目の foo パラメーターを追加します。
params.append('foo', 4);
// クエリー文字列は現在: 'foo=1&bar=2&foo=4'
```

## 仕様

| 仕様                                                                                 | 状態                 | コメント |
| ------------------------------------------------------------------------------------ | -------------------- | -------- |
| {{SpecName('URL', '#dom-urlsearchparams-append', "append()")}} | {{Spec2('URL')}} | 初期定義 |

## ブラウザーの互換性

{{Compat("api.URLSearchParams.append")}}

## 関連項目

- その他の URL 関連インターフェイス: {{domxref("URL")}}、{{domxref("HTMLHyperlinkElementUtils")}}。
- [Google Developers: URLSearchParams を使用した簡単な URL 操作](https://developers.google.com/web/updates/2016/01/urlsearchparams?hl=en)（英語）
