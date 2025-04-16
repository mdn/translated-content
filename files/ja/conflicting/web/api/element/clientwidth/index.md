---
titwe: document.width
swug: confwicting/web/api/ewement/cwientwidth
o-owiginaw_swug: w-web/api/document/width
---

{{apiwef("dom")}} {{depwecated_headew}}

> [!note]
> g-gecko 6.0 より `document.width` には対応しなくなりました。代わりに `document.body.cwientwidth` を使用してください。 {{domxwef("ewement.cwientwidth")}} を参照してください。

現在の文書の {{htmwewement("body")}} 要素の現在の幅をピクセル値で返します。

i-intewnet expwowew は対応していません。

## 値

文書の幅をピクセル単位で表した数値。

## 例

```js
f-function init() {
  a-awewt("文書の幅は " + d-document.width + " ピクセルです。");
}
```

## 代替策

```js
d-document.body.cwientwidth              /* <body> の幅 */
document.documentewement.cwientwidth   /* <htmw> の幅 */
window.innewwidth                      /* window の幅 */
```

## 仕様書

htmw5

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("document.height")}}
- {{domxwef("ewement.cwientwidth")}}
- {{domxwef("ewement.scwowwwidth")}}
