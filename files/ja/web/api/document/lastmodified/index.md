---
title: "Document: lastModified プロパティ"
short-title: lastModified
slug: Web/API/Document/lastModified
l10n:
  sourceCommit: 7e4769a3d501efb76e7cf92198b0589ab28f1864
---

{{APIRef("DOM")}}

**`lastModified`** は {{domxref("Document")}} インターフェイスのプロパティで、現在の文書が最後に更新された日付と時刻を含む文字列を返します。

## 値

文字列です。

## 例

### 単純な使用

この例では `lastModified` の値をアラート表示します。

```js
alert(document.lastModified);
// 表示内容: Tuesday, December 16, 2017 11:09:42
```

### lastModified を Date オブジェクトへ変換

この例では、 `lastModified` を {{jsxref("Date")}} オブジェクトに変換します。

```js
let oLastModif = new Date(document.lastModified);
```

### lastModified をミリ秒に変換

この例では、 `lastModified` を地方時の 1970 年 1 月 1 日 00:00:00 からの経過ミリ秒数の数値に変換します。

```js
let nLastModif = Date.parse(document.lastModified);
```

## メモ

`lastModified` は文字列なので、文書の更新日の比較には*簡単には*使用できないことに注意してください。こちらはいつページが変更されたかをアラートメッセージで表示する方法の例です（[JavaScript クッキー API](/ja/docs/Web/API/Document/cookie) も参照）。

```js
// 'timestamp' を 'last_modif=timestamp' で照合
// e.g. '1687964614822' は 'last_modif=1687964614822'
const pattern = /last_modif\s*=\s*([^;]*)/;

if (
  Date.parse(document.lastModified) >
  (parseFloat(document.cookie.match(pattern)?.[1]) || 0)
) {
  document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${
    location.pathname
  }`;
  alert("ページが変更されました。");
}
```

…同じ例ですが、最初の訪問をスキップします。

```js
const pattern = /last_modif\s*=\s*([^;]*)/;

const lastVisit = parseFloat(document.cookie.replace(pattern, "$1"));
const lastModif = Date.parse(document.lastModified);

if (Number.isNaN(lastVisit) || lastModif > lastVisit) {
  document.cookie = `last_modif=${Date.now()}; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=${
    location.pathname
  }`;

  if (isFinite(lastVisit)) {
    alert("ページが変更されました。");
  }
}
```

外部ページが変更されたかどうかを知りたい場合、{{HTTPMethod("HEAD")}} リクエストを {{domxref("Window/fetch", "fetch()")}} API によって行い、{{HTTPHeader("Last-Modified")}} レスポンスヘッダーを調べます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
