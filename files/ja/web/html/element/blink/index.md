---
title: '<blink>: 点滅文字列要素'
slug: Web/HTML/Element/blink
tags:
  - Blink
  - 要素
  - HTML
  - 非推奨
  - リファレンス
  - ウェブ
browser-compat: html.elements.blink
translation_of: Web/HTML/Element/blink
---

{{HTMLRef}}{{Deprecated_header}}

**`<blink>`** は [HTML](/ja/docs/Web/HTML) の要素で、標準外の要素であり、包含するテキストをゆっくり点滅させます。

> **Warning:** この要素は**廃止されており**、また悪いデザインの実例ですので使用しないでください。文字の点滅は複数のアクセシビリティ標準において難色が示されており、 CSS 仕様書ではブラウザーが `<blink>` 要素を無視することを許可しています。

## DOM インターフェイス

この要素は対応されていないので、 {{domxref("HTMLUnknownElement")}} インターフェイスを実装しています。

## 例

```html
<blink>Why would somebody use this?</blink>
```

### 結果 (toned down!)

![](htmlblinkelement.gif)

## CSS による代替手段

本当に代替手段が必要でしたら、以下の CSS を使用できます。 IE10 以降で動作します。

```css
blink {
  -webkit-animation: 2s linear infinite condemned_blink_effect; /* for Safari 4.0 - 8.0 */
  animation: 2s linear infinite condemned_blink_effect;
}

/* for Safari 4.0 - 8.0 */
@-webkit-keyframes condemned_blink_effect {
  0% {
    visibility: hidden;
  }
  50% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}

@keyframes condemned_blink_effect {
  0% {
    visibility: hidden;
  }
  50% {
    visibility: hidden;
  }
  100% {
    visibility: visible;
  }
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTML の `<blink>` 要素を作成した経緯](https://web.archive.org/web/20220331020029/http://www.montulli.org/theoriginofthe%3Cblink%3Etag)
- {{cssxref("text-decoration")}} に blink 値が存在しますが、ブラウザーが実際に点滅させる必要はありません。
- {{htmlelement("marquee")}} も同様に非標準の要素です。
- [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations/Using_CSS_animations)は、このような効果を生成するための手段です。
