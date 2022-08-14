---
title: '<marquee>: マーキー要素'
slug: Web/HTML/Element/marquee
tags:
  - 要素
  - HTML
  - 非推奨
  - リファレンス
  - ウェブ
  - marquee
browser-compat: html.elements.marquee
translation_of: Web/HTML/Element/marquee
---

{{deprecated_header}}

**`<marquee>`** は [HTML](/ja/docs/Web/HTML) の要素で、テキストがスクロールする領域を挿入します。要素の属性を使用して、テキストがコンテンツ領域の端に達したときにどうするかを制御できます。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{DOMxRef("HTMLMarqueeElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

- {{htmlattrdef("behavior")}}
  - : marquee 要素内でのテキストのスクロール方法を `scroll`、 `slide`、`alternate` の内の何れかのキーワードで指定します。指定を省略した場合は、初期値の `scroll` が適用されます。
- {{htmlattrdef("bgcolor")}}
  - : 背景色を、色名もしくは HEX カラーコードで指定します。
- {{htmlattrdef("direction")}}
  - : marquee 要素内でのテキストのスクロール方向を `left`、 `right`、 `up`、 `down` の内の何れかのキーワードで指定します。初期値は `left` です。
- {{htmlattrdef("height")}}
  - : スクロール範囲の高さを、ピクセル値かパーセント値で指定します。
- {{htmlattrdef("hspace")}}
  - : 水平方向のマージンを指定します。
- {{htmlattrdef("loop")}}
  - : テキストのスクロール回数を指定します。初期値は −1 であり、これはスクロール回数を制限せず、恒久的にスクロールを続ける指定です。
- {{htmlattrdef("scrollamount")}}
  - : インターバル内での、テキストの移動ピクセル数を指定します。初期値は 6 です。
- {{htmlattrdef("scrolldelay")}}
  - : スクロール動作のインターバルをミリ秒で指定します。初期値は 85 です。`truespeed` 属性が指定されていない場合は 60 が最下限であり、これ以下の値は 60 として解釈されます。
- {{htmlattrdef("truespeed")}}
  - : 既定では、`scrolldelay` で 60 を下回る値は無視します。`truespeed` を指定すると、それらの値が無視されません。
- {{htmlattrdef("vspace")}}
  - : 垂直方向のマージンをピクセル値かパーセント値で指定します。
- {{htmlattrdef("width")}}
  - : スクロール範囲の幅をピクセル値かパーセント値で指定します。

## イベントハンドラー

- {{htmlattrdef("onbounce")}}
  - : マーキーがスクロール位置の末端に達したときに発行されます。 behavior 属性の値に `alternate` が指定されている場合のみ発行されます。
- {{htmlattrdef("onfinish")}}
  - : loop 属性で指定された回数のループが終了した時に発行されます。 loop 属性に 1 以上の値が指定されている場合にのみ発行されます。
- {{htmlattrdef("onstart")}}
  - : marquee がスクロールを開始した時に発行されます。

## メソッド

- `start()`
  - : marquee のスクロールの開始
- `stop()`
  - : marquee のスクロールの停止

## 例

```html
<marquee>This text will scroll from right to left</marquee>

<marquee direction="up">This text will scroll from bottom to top</marquee>

<marquee direction="down" width="250" height="200" behavior="alternate" style="border:solid">
  <marquee behavior="alternate">
    This text will bounce
  </marquee>
</marquee>
```

{{EmbedLiveSample("Examples", 600, 450)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{DOMxRef("HTMLMarqueeElement")}}
