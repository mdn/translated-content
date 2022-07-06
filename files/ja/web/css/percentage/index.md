---
title: <percentage>
slug: Web/CSS/percentage
tags:
  - CSS
  - CSS データ型
  - データ型
  - レイアウト
  - リファレンス
  - ウェブ
browser-compat: css.types.percentage
translation_of: Web/CSS/percentage
---
{{CSSRef}}

**`<percentage>`** は [CSS](/ja/docs/Web/CSS) の[データ型](/ja/docs/Web/CSS/CSS_Types)で、パーセント値による割合を表します。要素の親オブジェクトからの相対的な寸法を定義するためによく使われます。 {{CSSxRef("width")}}、 {{CSSxRef("height")}}, {{CSSxRef("margin")}}, {{CSSxRef("padding")}}、 {{CSSxRef("font-size")}} など、たくさんのプロパティでパーセント値を使うことができます。

> **Note:** 継承されるのは計算値だけです。親要素のプロパティでパーセント値が使われても、継承したプロパティではパーセント値ではなく、実数値 ({{CSSxRef("&lt;length&gt;")}} 値に向けたピクセル単位の幅など) にのみアクセスできます。

## 構文

`<percentage>` データ型は、 {{CSSxRef("&lt;number&gt;")}} とそれに続くパーセント記号 (`%`) から成ります。任意で、先行して符号 (`+` または `-`) を、負の値が許可されない値であってもすべてのプロパティに付けることができます。他の CSS の数値と同様、記号と数値の間には空白を置きません。

## 補間

アニメーションをする時、 `<percentage>` データ型は浮動小数点の実数として補間が行われます。補間の速度は、アニメーションに関連付けられた[タイミング関数](/ja/docs/Web/CSS/easing-function)で定義します。

## 例

<h3 id="Width_and_margin-left">幅と左マージン</h3>

```html
<div style="background-color:navy;">
  <div style="width:50%; margin-left:20%; background-color:chartreuse;">
    Width: 50%, Left margin: 20%
  </div>
  <div style="width:30%; margin-left:60%; background-color:pink;">
    Width: 30%, Left margin: 60%
  </div>
</div>
```

以上の HTML は以下のような出力になります。

{{EmbedLiveSample('Width_and_margin-left', '600', 140)}}

<h3 id="Font-size">font-size</h3>

```html
<div style="font-size:18px;">
  <p>Full-size text (18px)</p>
  <p><span style="font-size:50%;">50% (9px)</span></p>
  <p><span style="font-size:200%;">200% (36px)</span></p>
</div>
```

以上の HTML は以下のような出力になります。

{{EmbedLiveSample('Font-size', 'auto', 160)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("&lt;length-percentage&gt;")}}
- [CSS 値と単位](/ja/docs/Web/CSS/CSS_Values_and_Units)
