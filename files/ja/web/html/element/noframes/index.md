---
title: '<noframes>: フレームフォールバック要素'
slug: Web/HTML/Element/noframes
tags:
  - 要素
  - フレーム
  - HTML
  - HTML フレーム
  - 非推奨
  - リファレンス
  - ウェブ
  - noframes
browser-compat: html.elements.noframes
translation_of: Web/HTML/Element/noframes
---

{{deprecated_header}}

**`<noframes>`** は [HTML](/ja/docs/Web/HTML) の要素で、 {{HTMLElement("frame")}} 要素に対応していない（または対応を無効化した）ブラウザーのためのコンテンツを提供します。よく使われるほとんどのブラウザーがフレームに対応していますが、一部のモバイルブラウザーやテキストモードブラウザーなどの例外もあります。

`<noframes>` の中では HTML 文書の body 要素内で利用できる HTML 要素が使用できますが、フレームを使用するための {{HTMLElement("frameset")}} 要素および {{HTMLElement("frame")}} 要素は意味がないので例外です。

`<noframes>` は、ユーザーのブラウザーがフレームに対応していないことを説明するメッセージを表示するために利用することができますが、できればフレームを使わなくても同じ（または同等の）機能を提供するための別なフォームを表現するために使用するべきです。

> **Note:** HTML 5 以降では、 {{HTMLElement("frame")}} 要素および {{HTMLElement("frameset")}} 要素が廃止されたため、この要素も廃止されており使用するべきではありません。フレームがどうしても必要であれば、 {{HTMLElement("iframe")}} 要素を用いて表現するべきです。

## 属性

他のすべての HTML 要素と同様に、この要素は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)に対応しています。他の属性は利用できません。

## 例

この例には、 2 つのフレームを持つフレームセットがあります。加えて、 `<noframes>` を使用して{{Glossary("user agent","ユーザーエージェント")}}がフレームに対応していない場合には説明メッセージを表示します。

```html
<frameset cols="50%,50%">
  <frame src="https://developer.mozilla.org/en/HTML/Element/frameset" />
  <frame src="https://developer.mozilla.org/en/HTML/Element/frame" />
  <noframes><p>It seems your browser does not support frames or is
  configured to not allow them.</p></noframes>
</frameset>
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("frameset")}}
- {{HTMLElement("frame")}}

{{HTMLRef}}
