---
title: CSS 基本ユーザーインターフェイス
short-title: 基本ユーザーインターフェイス
slug: Web/CSS/Guides/Basic_user_interface
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

**CSS 基本ユーザーインターフェイス** (CSS basic user interface) モジュールでは、輪郭線プロパティ、ポインティングデバイスやキーボードの視覚的フィードバック、 UI ウィジェットの既定の外見の変更など、ユーザーインターフェイス関連の機能のレンダリングや機能を定義することができます。

基本ユーザーインターフェイスプロパティは、操作している要素に視覚的な手がかりを提供することで、使い勝手やアクセシビリティを向上させるために使用することができます。これには、マウスカーソルやキーボード方向のフォーカスナビゲーションのスタイル設定、編集可能な要素にフォーカスがあるときのキャレットカーソルのスタイル設定などがあります。このモジュールは、要素の[ボックスモデル](/ja/docs/Learn_web_development/Core/Styling_basics/Box_model#what_is_the_css_box_model)のサイズやスタイル設定に影響を与えずに、フォーカス状態（または非フォーカス状態）の要素に概要を指定されたまま提供します。この UI モジュールは、ユーザーインターフェイスコントロールのスタイル設定も可能にします。

## 基本ユーザーインターフェイスの実例

基本ユーザーインターフェイスプロパティが UI 機能の外観をどのように変化させるかを見るには、この例の要素を操作してください。なお、このサンプルの機能の中には、使い勝手を向上させるものもあれば、ユーザー体験を損なうものもあります。

```html-nolint hidden live-sample___basicUI
<div><span contenteditable>このテキストを編集</span></div>
<fieldset>
  <legend>これらのフォームコントロールを操作してみましょう</legend>
  <input type="checkbox" id="check" />
  <input type="radio" name="a" />
  <input type="radio" name="a" />
  <input type="range" />
  <progress></progress>
</fieldset>
<fieldset>
  <legend>ユーザビリティを台無しにしないよう注意してください。これらのサイズを変更してみてください。</legend>
  <textarea>
  cursor: wait;
  </textarea>
  <textarea>
  resize: none;
  </textarea>
  <textarea>
  pointer-events: none;
  </textarea>
</fieldset>
```

```css hidden live-sample___basicUI
body {
  font-family: sans-serif;
  font-size: 1.25rem;
}
[contenteditable] {
  cursor: copy;
  caret-color: magenta;
  border: 1px solid #cccccc;
}
:focus {
  outline: dashed magenta 3px;
  outline-offset: 10px;
}
* {
  accent-color: magenta;
}
div,
fieldset {
  margin: 20px;
}
textarea:nth-of-type(1) {
  cursor: wait;
}
textarea:nth-of-type(2) {
  resize: none;
}
textarea:nth-of-type(3) {
  pointer-events: none;
}
```

{{EmbedLiveSample("basicUI", "", "300px")}}

CSS の {{CSSxRef("outline")}} と {{CSSxRef("outline-offset")}} プロパティは、どの要素が現在フォーカスを持っているかをユーザーにフィードバックするために使用されました。 {{CSSxRef("accent-color")}} は、すべてのフォームコントロールにテーマ色を提供します。テキスト編集時に現れるキャレットは、 {{CSSxRef("caret-color")}} プロパティのおかげで同じ色になっています。これらはすべて UI の改善と考えることができます。

いくつかの機能はユーザビリティを損ないます。 {{CSSxRef("cursor")}} プロパティは、ブラウザー既定値からカーソルを変更するために使用され、混乱を招きます。 {{CSSxRef("resize")}} プロパティは 2 つ目の {{HTMLElement("textarea")}} がリサイズ可能になるのを防ぎ、 {{CSSxRef("pointer-events")}} プロパティは 3 つ目の `<textarea>` がクリックイベントを受け取るのを防ぎます。キーボードを使用してフォーカスを移動することは可能です。

上記の例の "Play" クリックすると、 MDN Playground でこのアニメーションのコードを見たり編集したりすることができます。

## リファレンス

## プロパティ

- {{CSSxRef("accent-color")}}
- {{CSSxRef("appearance")}}
- {{CSSxRef("caret-animation")}}
- {{CSSxRef("caret-color")}}
- {{CSSxRef("caret-shape")}}
- {{CSSxRef("cursor")}}
- {{CSSxRef("interest-delay")}}、以下の一括指定
  - {{CSSxRef("interest-delay-start")}}
  - {{CSSxRef("interest-delay-end")}}
- {{CSSxRef("outline")}}、以下の一括指定
  - {{CSSxRef("outline-color")}}
  - {{CSSxRef("outline-style")}}
  - {{CSSxRef("outline-width")}}
- {{CSSxRef("outline-offset")}}
- {{CSSxRef("pointer-events")}}
- {{CSSxRef("resize")}}
- {{CSSxRef("user-select")}}

CSS 基本ユーザーインターフェイスモジュールは、{{CSSxRef("caret")}}、`nav-down`、`nav-left`、`nav-right`、`nav-up` の各プロパティも定義しています。今のところ、これらの機能に対応しているブラウザーはありません。

## ガイド

- [フォームの学習: フォームへの高度なスタイル設定](/ja/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)
  - : {{CSSxRef("appearance")}} を使用してフォームコントロールをスタイル設定する方法を説明します。

## 関連概念

- CSS の {{cssxref("cursor")}} プロパティ
- SVG の [`cursor`](/ja/docs/Web/SVG/Reference/Attribute/cursor) 属性
- CSS の {{CSSxRef(":focus")}}, {{CSSxRef(":focus-within")}}, {{CSSxRef(":focus-visible")}} 擬似クラス
- {{DOMXref("CaretPosition")}} インターフェイス

## 仕様書

{{Specifications}}

## 関連情報

- [Tips for Designing Useful and Usable Focus Indicators](https://www.deque.com/blog/give-site-focus-tips-designing-usable-focus-indicators/) (2016)
