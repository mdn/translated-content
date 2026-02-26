---
title: ビューポートセグメント API
slug: Web/API/Viewport_segments_API
l10n:
  sourceCommit: 9be502ee0f8b030908e59d30884190281acb8054
---

{{DefaultAPISidebar("Viewport Segments API")}}{{seecompattable}}

**ビューポートセグメント API** (Viewport Segments API) により、開発者が CSS と JavaScript を使用して、論理的に個別のビューポートセグメントの位置とサイズにアクセスすることができることを可能にします。ビューポートセグメントは、ビューポートが画面の折り曲げや画面間の蝶番などといった、1 つ以上のハードウェア特性によって分割されたときに生成されます。ビューポートセグメント API を使用することで、開発者は異なるビューポートセグメントのサイズや配置に最適化されたレスポンシブデザインを生成することができます。

## 概念と使用法

同一表示面の異なるセグメントとして機能する、複数の画面を備えた端末（折り曲げ可能、または蝶番のある画面のスマートフォンなど）は、開発者にとって特有の設計上の課題が存在します。レイアウトを単一の表示面として最適化することは可能ですが、デザイン要素が各セグメントにぴったり収まり、分割されないようにするにはどうすればよいでしょうか？また、コンテンツが物理的な折り目や継ぎ目によって隠れるのを防ぐにはどうすればよいでしょうか？

ユーザーの端末画面に折り目や継ぎ目があるかどうか、各セグメントのサイズ、サイズが同一かどうか、セグメントの方向（横に並んでいるか縦に並んでいるか）を知ることは重要かもしれません。ビューポートセグメント API により、CSS および JavaScript の機能を使用してユーザーの分割された端末情報にアクセスすることができます。これには、表示領域内の各ビューポートセグメントの位置とサイズにアクセスする機能が含まれ、{{cssxref("@media")}} 機能を利用して異なる水平方向および垂直方向の領域のレイアウトを検出することも可能です。

API の動作に関する説明については、[ビューポートセグメント API の使用](/ja/docs/Web/API/Viewport_segments_API/Using)を参照してください。

## インターフェイス

- {{domxref("Viewport")}}
  - : 端末のビューポートを表します。{{domxref("Viewport.segments")}} プロパティへのアクセスを提供し、セグメント化された画面内のそれぞれのビューポートセグメントの位置とサイズを表す {{domxref("DOMRect")}} オブジェクトの配列を返します。

### その他のインターフェイスへの拡張

- {{domxref("Window.viewport")}}
  - : 端末のビューポートの現在の状態に関する情報を提供する `Viewport` オブジェクトインスタンスを返します。

## CSS 特性

- {{cssxref("@media/horizontal-viewport-segments", "horizontal-viewport-segments")}} `@media` 特性
  - : 端末に、水平方向に並んだビューポートセグメントが、指定された数だけあるかどうかを検出します。
- {{cssxref("@media/vertical-viewport-segments", "vertical-viewport-segments")}} `@media` 特性
  - : 端末に、垂直方向に並んだビューポートセグメントが、指定された数だけあるかどうかを検出します。
- [ビューポートセグメントの環境変数](/ja/docs/Web/CSS/Reference/Values/env#viewport-segment-width)
  - : これらの[環境変数](/ja/docs/Web/CSS/Guides/Environment_variables/Using)は、それぞれのビューポートセグメントの端の座標とサイズへのアクセスを提供します。

## 例

上記の機能の使用方法を示す完全な例は、[ビューポートセグメント API デモ](https://mdn.github.io/dom-examples/viewport-segments-api/)でご覧いただけます。

デキレバ、折り曲げ型端末でデモを閲覧してください。現在のブラウザー開発者ツールでは折り曲げ型端末のエミュレーションをすることができますが、異なる物理セグメントのエミュレーションは含まれていません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ビューポートセグメント API の使用](/ja/docs/Web/API/Viewport_segments_API/Using)
- [CSSOM view API](/ja/docs/Web/API/CSSOM_view_API)
- [端末形態 API](/ja/docs/Web/API/Device_Posture_API)
- [CSS 環境変数](/ja/docs/Web/CSS/Guides/Environment_variables)モジュール
- [Origin trial for Foldable APIs](https://developer.chrome.com/blog/foldable-apis-ot) - developer.chrome.com (2024)
