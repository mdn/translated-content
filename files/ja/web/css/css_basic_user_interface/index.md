---
title: CSS 基本ユーザーインターフェイス
slug: Web/CSS/CSS_basic_user_interface
l10n:
  sourceCommit: 7a81d16fadbe5cbee1ad2f8d0ddccda846f4034c
---

{{CSSRef}}

**CSS 基本ユーザーインターフェイス** (CSS Basic User Interface) モジュールでは、輪郭線プロパティ、ポインティングデバイスやキーボードへの視覚的フィードバック、 UI ウィジェットの既定の外見の変更など、ユーザーインターフェイス関連の機能のレンダリングや機能を定義することができます。

基本ユーザーインターフェイスプロパティは、操作している要素に視覚的な手がかりを提供することで、使い勝手やアクセシビリティを向上させるために使用することができます。これには、マウスカーソルやキーボード方向のフォーカスナビゲーションのスタイル設定、編集可能な要素にフォーカスがあるときのキャレットカーソルのスタイル設定などがあります。このモジュールは、要素の[ボックスモデル](/ja/docs/Learn/CSS/Building_blocks/The_box_model#css_ボックスモデルとは)の寸法とスタイル設定に影響を与えることなく、フォーカスされた（またはフォーカスされていない）要素に輪郭線を提供するために指定されました。この UI モジュールは、ユーザーインターフェイスコントロールのスタイル設定も可能にします。

### 基本ユーザーインターフェイスの操作

基本ユーザーインターフェイスプロパティが UI 機能の外観をどのように変化させるかを見るには、この例の要素を操作してください。なお、このサンプルの機能の中には、使い勝手を向上させるものもあれば、ユーザー体験を損なうものもあります。

{{EmbedGHLiveSample("css-examples/modules/basicUI.html", '100%', 320)}}

CSS の {{CSSxRef("outline")}} と {{CSSxRef("outline-offset")}} プロパティは、どの要素が現在フォーカスを持っているかをユーザーにフィードバックするために使用されました。 {{CSSxRef("accent-color")}} は、すべてのフォームコントロールにテーマ色を提供します。テキスト編集時に現れるキャレットは、 {{CSSxRef("caret-color")}} プロパティのおかげで同じ色になっています。これらはすべて UI の改善と考えることができます。

いくつかの機能はユーザビリティを損ないます。 {{CSSxRef("cursor")}} プロパティは、ブラウザー既定値からカーソルを変更するために使用され、混乱を招きます。 {{CSSxRef("resize")}} プロパティは 2 つ目の {{HTMLElement("textarea")}} がリサイズ可能になるのを防ぎ、 {{CSSxRef("pointer-events")}} プロパティは 3 つ目の `<textarea>` がクリックイベントを受け取るのを防ぎます。キーボードを使用してフォーカスを移動することは可能です。

この基本ユーザーインターフェイスサンプルのコードを見るには、 [GitHub でソースを見てください](https://github.com/mdn/css-examples/blob/main/modules/basicUI.html)。

## リファレンス

## プロパティ

- {{CSSxRef("accent-color")}}
- {{CSSxRef("appearance")}}

- {{CSSxRef("caret")}}、以下の一括指定
  - {{CSSxRef("caret-color")}}
  - {{CSSxRef("caret-shape")}}
- {{CSSxRef("cursor")}}
- {{CSSxRef("nav-down")}} {{Experimental_Inline}}
- {{CSSxRef("nav-left")}} {{Experimental_Inline}}
- {{CSSxRef("nav-right")}} {{Experimental_Inline}}
- {{CSSxRef("nav-up")}} {{Experimental_Inline}}
- {{CSSxRef("outline")}}、以下の一括指定
  - {{CSSxRef("outline-color")}}
  - {{CSSxRef("outline-style")}}
  - {{CSSxRef("outline-width")}}
- {{CSSxRef("outline-offset")}}
- {{CSSxRef("pointer-events")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("user-select")}}

## ガイド

- [フォームの学習: フォームへの高度なスタイル設定](/ja/docs/Learn/Forms/Advanced_form_styling)
  - : {{CSSxRef("appearance")}} を使用してフォームコントロールをスタイル設定する方法を説明します。

## 関連概念

- CSS の [`cursor`](/ja/docs/Web/CSS/cursor) プロパティ
- SVG の [`cursor`](/ja/docs/Web/SVG/Attribute/cursor) 属性
- CSS の {{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}}, {{CSSxRef(":focus-visible")}} 擬似クラス
- {{DOMXref("CaretPosition")}} インターフェイス

## 仕様書

{{Specifications}}

## 関連情報

- [Tips for Designing Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
