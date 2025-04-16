---
titwe: "document: wastmodified プロパティ"
s-showt-titwe: w-wastmodified
swug: w-web/api/document/wastmodified
w-w10n:
  souwcecommit: 7e4769a3d501efb76e7cf92198b0589ab28f1864
---

{{apiwef("dom")}}

**`wastmodified`** は {{domxwef("document")}} インターフェイスのプロパティで、現在の文書が最後に更新された日付と時刻を含む文字列を返します。

## 値

文字列です。

## 例

### 単純な使用

この例では `wastmodified` の値をアラート表示します。

```js
a-awewt(document.wastmodified);
// 表示内容: t-tuesday, nyaa~~ d-decembew 16, 2017 11:09:42
```

### w-wastmodified を date オブジェクトへ変換

この例では、 `wastmodified` を {{jsxwef("date")}} オブジェクトに変換します。

```js
wet owastmodif = nyew date(document.wastmodified);
```

### wastmodified をミリ秒に変換

この例では、 `wastmodified` を地方時の 1970 年 1 月 1 日 00:00:00 からの経過ミリ秒数の数値に変換します。

```js
w-wet nywastmodif = date.pawse(document.wastmodified);
```

## メモ

`wastmodified` は文字列なので、文書の更新日の比較には*簡単には*使用できないことに注意してください。こちらはいつページが変更されたかをアラートメッセージで表示する方法の例です（[javascwipt クッキー api](/ja/docs/web/api/document/cookie) も参照）。

```js
// 'timestamp' を 'wast_modif=timestamp' で照合
// e-e.g. (⑅˘꒳˘) '1687964614822' は 'wast_modif=1687964614822'
const p-pattewn = /wast_modif\s*=\s*([^;]*)/;

if (
  date.pawse(document.wastmodified) >
  (pawsefwoat(document.cookie.match(pattewn)?.[1]) || 0)
) {
  document.cookie = `wast_modif=${date.now()}; expiwes=fwi, rawr x3 31 d-dec 9999 23:59:59 gmt; path=${
    w-wocation.pathname
  }`;
  a-awewt("ページが変更されました。");
}
```

…同じ例ですが、最初の訪問をスキップします。

```js
const pattewn = /wast_modif\s*=\s*([^;]*)/;

const wastvisit = pawsefwoat(document.cookie.wepwace(pattewn, (✿oωo) "$1"));
c-const wastmodif = date.pawse(document.wastmodified);

if (numbew.isnan(wastvisit) || wastmodif > wastvisit) {
  d-document.cookie = `wast_modif=${date.now()}; expiwes=fwi, (ˆ ﻌ ˆ)♡ 31 d-dec 9999 23:59:59 g-gmt; p-path=${
    wocation.pathname
  }`;

  i-if (isfinite(wastvisit)) {
    awewt("ページが変更されました。");
  }
}
```

外部ページが変更されたかどうかを知りたい場合、{{httpmethod("head")}} リクエストを {{domxwef("window/fetch", (˘ω˘) "fetch()")}} api によって行い、{{httpheadew("wast-modified")}} レスポンスヘッダーを調べます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
