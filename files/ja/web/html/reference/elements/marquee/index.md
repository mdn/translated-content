---
title: "<marquee>: マーキー要素"
slug: Web/HTML/Reference/Elements/marquee
original_slug: Web/HTML/Element/marquee
l10n:
  sourceCommit: 1ebd589beda22afac79cde3cb8601061d1ce3798
---

{{HTMLSidebar}}{{Deprecated_Header}}

**`<marquee>`** は [HTML](/ja/docs/Web/HTML) の要素で、テキストがスクロールする領域を挿入します。要素の属性を使用して、テキストがコンテンツ領域の端に達したときにどうするかを制御できます。

HTML の `<marquee>` 要素は非推奨であり、使用は極力避けるべきです。 テキストや連続する要素をスクロールさせる必要がある場合は、 [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)を [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms/Using)と組み合わせて `<marquee>` 要素の代わりに使用すると、コンテンツをスムーズにアニメーションできますので、こちらを検討してください。さらに、 CSS の {{cssxref("@media")}} で [`prefers-reduced-motion`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-motion) クエリーを含めることで、ユーザーの好みに応じてアニメーションを停止できるようにすると、使いやすさとアクセシビリティの改善につながります。

## 属性

- `behavior` {{Deprecated_Inline}}
  - : marquee 要素内でのテキストのスクロール方法を `scroll`、`slide`、`alternate` の内の何れかのキーワードで指定します。指定を省略した場合は、初期値の `scroll` が適用されます。
- `bgcolor` {{Deprecated_Inline}}
  - : 背景色を、色名もしくは 16 進カラーコードで指定します。
- `direction` {{Deprecated_Inline}}
  - : marquee 要素内でのテキストのスクロール方向を `left`、`right`、`up`、`down` の内の何れかのキーワードで指定します。初期値は `left` です。
- `height` {{Deprecated_Inline}}
  - : スクロール範囲の高さを、ピクセル値かパーセント値で指定します。
- `hspace` {{Deprecated_Inline}}
  - : 水平方向のマージンを指定します。
- `loop` {{Deprecated_Inline}}
  - : テキストのスクロール回数を指定します。初期値は −1 であり、これはスクロール回数を制限せず、恒久的にスクロールを続ける指定です。
- `scrollamount` {{Deprecated_Inline}}
  - : インターバル内での、テキストの移動ピクセル数を指定します。初期値は 6 です。
- `scrolldelay` {{Deprecated_Inline}}
  - : スクロール動作のインターバルをミリ秒で指定します。初期値は 85 です。`truespeed` 属性が指定されていない場合は 60 が最下限であり、これ以下の値は 60 として解釈されます。
- `truespeed` {{Deprecated_Inline}}
  - : 既定では、`scrolldelay` で 60 を下回る値は無視します。`truespeed` を指定すると、それらの値が無視されません。
- `vspace` {{Deprecated_Inline}}
  - : 垂直方向のマージンをピクセル値かパーセント値で指定します。
- `width` {{Deprecated_Inline}}
  - : スクロール範囲の幅をピクセル値かパーセント値で指定します。

## 例

```html
<marquee>This text will scroll from right to left</marquee>

<marquee direction="up">This text will scroll from bottom to top</marquee>

<marquee
  direction="down"
  width="250"
  height="200"
  behavior="alternate"
  style="border:solid">
  <marquee behavior="alternate">This text will bounce</marquee>
</marquee>
```

### 結果

{{EmbedLiveSample("Examples", 600, 450)}}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{DOMxRef("HTMLMarqueeElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- CSS の {{cssxref("transform")}} プロパティ
- CSS の {{cssxref("translate")}} プロパティ
- [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)モジュール
- [CSS アニメーション](/ja/docs/Web/CSS/Guides/Animations)モジュール
- {{DOMxRef("HTMLMarqueeElement")}}
