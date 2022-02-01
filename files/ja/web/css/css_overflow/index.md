---
title: CSS オーバーフロー
slug: Web/CSS/CSS_Overflow
tags:
  - CSS
  - ガイド
  - overflow
  - スクロールバー
  - スクロール
translation_of: Web/CSS/CSS_Overflow
---
{{CSSRef}}

**CSS オーバーフロー**モジュールは、視覚メディアにおけるスクロール可能なオーバーフローの処理に関連した CSS の機能を含んでいます。 CSS では、ボックスの内容がボックスの辺の 1 つ以上を越えてはみ出した場合にオーバーフローが発生します。

## インクオーバーフローとスクロール可能なオーバーフロー

CSS で遭遇する可能性のあるオーバーフローには、2 つの種類があります。 1 つ目は**インクオーバーフロー**と呼んでいます。これは、ボックスシャドウ、境界画像、テキスト装飾、張り出した文字、アウトラインなど、レイアウトに影響を与えない、あるいはスクロール可能なオーバーフロー領域を拡張しない描画効果のオーバーフローです。

CSS で時に管理しなければならないオーバーフローを**スクロール可能なオーバーフロー**と呼んでいます。これは、ボックスの外に現れるコンテンツで、スクロール機構を提供する必要があります。オーバーフローのプロパティは、コンテンツがボックスからオーバーフローしたときに何が起こるかを制御する方法です。

## 基本的な例

次のインタラクティブなデモでは、 `overflow` プロパティの値を変更すると、高さが固定されているボックスのオーバーフローの処理方法がどのように変わるかを示しています。

{{EmbedInteractiveExample("pages/css/overflow.html")}}

## リファレンス

### CSS プロパティ

- {{CSSxRef("overflow")}}
- {{CSSxRef("overflow-block")}}
- {{CSSxRef("overflow-inline")}}
- {{CSSxRef("overflow-x")}}
- {{CSSxRef("overflow-y")}}
- {{CSSxRef("text-overflow")}}
- {{CSSxRef("block-overflow")}} {{experimental_inline}}
- {{CSSxRef("line-clamp")}} {{experimental_inline}}
- {{CSSxRef("max-lines")}} {{experimental_inline}}
- {{CSSxRef("continue")}} {{experimental_inline}}

### 標準外のプロパティ

- {{CSSxRef("-webkit-line-clamp")}} {{non-standard_inline}}

## 仕様書

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">仕様書</th>
      <th scope="col">状態</th>
      <th scope="col">備考</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName('CSS3 Overflow', '#propdef-overflow', 'overflow')}}
      </td>
      <td>{{Spec2('CSS3 Overflow')}}</td>
      <td>
        <p>構文を 1 つだけでなく 1 つまたは 2 つのキーワードに変更した</p>
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName('CSS2.1', 'visufx.html#overflow', 'overflow')}}
      </td>
      <td>{{Spec2('CSS2.1')}}</td>
      <td>初回定義</td>
    </tr>
  </tbody>
</table>

## 関連情報

- スクロールバーの外見を制御する {{CSSxRef("scrollbar-width")}} および {{CSSxRef("scrollbar-color")}} プロパティ
- [スクロール可能なオーバーフローのデバッグ](/ja/docs/Tools/Page_Inspector/How_to/Debug_Scrollable_Overflow)の方法
