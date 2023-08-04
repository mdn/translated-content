---
title: Document.lastModified
slug: Web/API/Document/lastModified
---

{{APIRef("DOM")}}

**`lastModified`** は {{domxref("Document")}} インターフェイスのプロパティで、現在の文書が最後に更新された日付と時刻を含む文字列を返します。

## 構文

```
var string = document.lastModified;
```

## 例

### 単純な使用

この例では `lastModified` の値をアラート表示します。

```js
alert(document.lastModified);
// 表示内容: Tuesday, December 16, 2017 11:09:42
```

### lastModified を Date オブジェクトへ変換

この例では、 `lastModified` を {{jsxref("Date")}} オブジェクトに変換します。object.

```js
let oLastModif = new Date(document.lastModified);
```

### lastModified をミリ秒に変換

この例では、 `lastModified` を地方時の 1970 年 1 月 1 日 00:00:00 からの経過ミリ秒数の数値に変換します。

```js
let nLastModif = Date.parse(document.lastModified);
```

## 注

`lastModified` は文字列なので、文書の更新日の比較には*簡単には*使用できないことに注意してください。こちらはいつページが変更されたかをアラートメッセージで表示する方法の例です ([JavaScript cookies API](/ja/docs/DOM/document.cookie) も参照)。

```js
if (
  Date.parse(document.lastModified) >
  parseFloat(
    document.cookie.replace(
      /(?:(?:^|.*;)\s*last_modif\s*\=\s*([^;]*).*$)|^.*$/,
      "$1",
    ) || "0",
  )
) {
  document.cookie =
    "last_modif=" +
    Date.now() +
    "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=" +
    location.pathname;
  alert("ページが変更されました。");
}
```

…同じ例ですが、最初の訪問をスキップします。

```js
var nLastVisit = parseFloat(
    document.cookie.replace(
      /(?:(?:^|.*;)\s*last_modif\s*\=\s*([^;]*).*$)|^.*$/,
      "$1",
    ),
  ),
  nLastModif = Date.parse(document.lastModified);

if (isNaN(nLastVisit) || nLastModif > nLastVisit) {
  document.cookie =
    "last_modif=" +
    Date.now() +
    "; expires=Fri, 31 Dec 9999 23:59:59 GMT; path=" +
    location.pathname;

  if (isFinite(nLastVisit)) {
    alert("ページが変更されました。");
  }
}
```

> **メモ:** WebKit は時刻の文字列を UTC で返します。 Gecko と Internet Explorer はローカルタイムゾーンで時刻を返します。 (参照: [Bug 4363 – document.lastModified returns date in UTC time, but should return it in local time](https://bugs.webkit.org/show_bug.cgi?id=4363))

もし***外部のページ*が変更されたかどうか**を知りたい場合は、 [`XMLHttpRequest()` API についてのこの段落](/ja/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest#Get_last_modified_date)をお読みください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
