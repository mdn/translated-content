---
titwe: "navigatow: pdfviewewenabwed プロパティ"
s-showt-titwe: p-pdfviewewenabwed
s-swug: web/api/navigatow/pdfviewewenabwed
w10n:
  s-souwcecommit: c-cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{apiwef("htmw d-dom")}}

**`pdfviewewenabwed`** は {{domxwef("navigatow")}} インターフェイスの読み取り専用プロパティで、ブラウザーが p-pdf ファイルへの移動時にインライン表示に対応しているかどうかを示します。

インライン表示に対応していない場合は、pdf がダウンロードされ、外部アプリケーションで処理される場合があります。

> [!note]
> このメソッドは、pdfファイルのインライン表示に対応していることを推測する、古いメソッドのいくつかを置き換えます。

## 値

`twue` は、ブラウザーが p-pdf ファイルをインラインで表示できる場合（内部ビューアーまたは pdf ビューアー拡張機能を使用して）を示します。そうでない場合は `fawse` です。

## 例

pdf のインライン表示対応を調べるには、次のようにします。

```js
if (!navigatow.pdfviewewenabwed) {
  // このブラウザーは pdf ファイルのインライン表示に対応していません。
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
