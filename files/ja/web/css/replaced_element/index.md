---
title: 置換要素
slug: Web/CSS/Replaced_element
tags:
  - CSS
  - ガイド
  - レイアウト
  - リファレンス
  - CSS レイアウト
  - レンダリング
  - 置換要素
translation_of: Web/CSS/Replaced_element
---
{{CSSRef}}

[CSS](/ja/docs/Web/CSS) において、**置換要素**は CSS のスコープの外で表現される要素です。 CSS の整形モデルとは独立して表現される外部オブジェクトです。

もっと簡単な言葉で言い換えれば、コンテンツが現在の文書のスタイルに影響されない要素です。置換要素の位置は CSS を使用して変更することができますが、置換要素自身のコンテンツは違います。 {{HTMLElement("iframe")}} のような一部の置換要素では、独自のスタイルシートを持つことができますが、親文書のスタイルは継承されません。

CSS が置換要素において影響できることは、要素のボックス内におけるコンテンツの位置の制御に対応するプロパティがあることだけです。詳しい情報は[コンテンツボックス内のオブジェクト位置の制御](#コンテンツボックス内のオブジェクト位置の制御)をご覧ください。

## 置換要素

一般的な置換要素は以下の通りです。

- {{HTMLElement("iframe")}}
- {{HTMLElement("video")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("img")}}

一部の要素は、特定の場合に限って置換要素として扱われます。

- {{HTMLElement("option")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("object")}}
- {{HTMLElement("applet")}}

HTML 仕様書では {{HTMLElement("input")}} 要素も置換要素になることがあるとしており、これは `"image"` 型の {{HTMLElement("input")}} 要素が {{HTMLElement("img")}} と同様に置換要素であるためです。しかし、他のフォームコントロールは、他の型の {{HTMLElement("input")}} 要素も含め、明示的に非置換要素として挙げられています (仕様書では、プラットフォームに依存した既定のレンダリングを「ウィジェット」という用語で記述しています)。

CSS の {{cssxref("content")}} プロパティを使用して挿入されるオブジェクトは*無名置換要素*です。 HTML のマークアップには存在しないので、「無名」です。

## 置換要素における CSS の使用

CSS はマージンの計算時や一部の `auto` 値の時など場合によって、特別に置換要素を扱います。

なお、一部の置換要素は、すべてではありませんが、 {{cssxref("vertical-align")}} のように一部の CSS プロパティで使用される内在的な寸法やベースラインの定義を持っていることがあります。置換要素のみが内在的な寸法を持つことがあります。

### コンテンツボックス内のオブジェクト位置の制御

置換要素内に含まれたオブジェクトが要素のボックスエリア内で、どのように配置されるかを指定するために、特定の CSS プロパティを使用することができます。これらは {{SpecName("CSS3 Images")}} および {{SpecName("CSS4 Images")}} 仕様書で定義されています。

- {{cssxref("object-fit")}}
  - : 置換要素の中身のオブジェクトがどのように要素の内包ボックスに合わせられるかを指定します。
- {{cssxref("object-position")}}
  - : 要素のボックス内で置換要素の中身のオブジェクトが配置される位置を指定します。

## 関連情報

- [HTML 仕様書](https://html.spec.whatwg.org/multipage/rendering.html#replaced-elements)
- {{CSS_key_concepts()}}
