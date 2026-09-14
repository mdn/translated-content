---
title: "HTMLIFrameElement: credentialless プロパティ"
short-title: credentialless
slug: Web/API/HTMLIFrameElement/credentialless
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

**`credentialless`** は {{domxref("HTMLIFrameElement")}} インターフェイスのプロパティで、この {{htmlelement("iframe")}} が無信頼であるどうか、すなわち内部の文書が新しい、一時的なコンテキストで読み込まれることを意味します。

これらのコンテキストは、そのオリジンに関連付けられたネットワーク、クッキー、ストレージデータにアクセスすることはできません。最上位の文書が変わるごとに新しくなります。つまり、格納されたデータは、ユーザーがページから離れたり、再読み込みしたりすると、アクセスできなくなります。

その代わりに {{httpheader("Cross-Origin-Embedder-Policy")}} (COEP) の埋め込みルールを解除することができ、COEP を設定した文書でも、そうでないサードパーティの文書を埋め込むことができます。

## 値

論理値です。既定値は `false` です。`<iframe>` を信用させないようにするには `true` に設定してください。

## 例

### 取得

次のようにして視覚情報のない `<iframe>` を指定します。

```html
<iframe
  src="https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)"
  title="Spectre vulnerability Wikipedia page"
  width="960"
  height="600"
  credentialless></iframe>
```

`credentialless` プロパティの値を返します。

```js
const iframeElem = document.querySelector("iframe");
console.log(iframeElem.credentialless); // 対応しているブラウザーでは true が返る
```

### 設定

こちらでは、HTML では詳細を最小限に設定します。

```html
<iframe width="960" height="600"> </iframe>
```

`<iframe>` の中身を読み込む際に、スクリプトから `credentialless` を `true` に設定します。

```js
const iframeElem = document.querySelector("iframe");

iframeElem.credentialless = true;
iframeElem.title = "Spectre vulnerability Wikipedia page";
iframeElem.src =
  "https://en.wikipedia.org/wiki/Spectre_(security_vulnerability)";
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [視覚情報のない iframe](/ja/docs/Web/HTTP/Guides/IFrame_credentialless)
- {{htmlelement("iframe")}}
