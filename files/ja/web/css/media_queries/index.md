---
title: メディアクエリー
slug: Web/CSS/Media_Queries
tags:
  - CSS
  - ガイド
  - メディアクエリー
  - 概要
  - リファレンス
  - レスポンシブデザイン
translation_of: Web/CSS/Media_Queries
---
{{CSSRef}}

**メディアクエリー**によって、サイトやアプリを様々な引数や端末の特性に基づいて合わせることができます。

これは[レスポンシブデザイン](/ja/docs/Web/Progressive_web_apps)のキーコンポーネントです。例えば、メディアクエリーでは小さい端末でフォントの大きさを縮小したり、ページが縦長モードで表示されたときに段落の間隔を広げたり、タッチ画面でボタンを拡大したりすることができます。

[CSS](/ja/docs/Web/CSS) では、 {{cssxref("@media")}} [アットルール](/ja/docs/Web/CSS/At-rule)を使用して、メディアクエリーの結果に基づいて条件付きでスタイルの一部を適用することができます。 {{cssxref("@import")}} を使用すると、条件付きでスタイルシート全体を適用することもできます。

### HTML でのメディアクエリー

[HTML](/ja/docs/Web/HTML) でも、メディアクエリーは様々な要素に適用することができます。

- {{HTMLElement("link")}} 要素の {{htmlattrxref("media", "link")}} 属性では、リンクされたリソース (ふつうは CSS) が適用されるメディアを定義します。
- {{HTMLElement("source")}} 要素の {{htmlattrxref("media", "source")}} 属性では、ソースが適用されるメディアを定義します。 (これは {{HTMLElement("picture")}} 要素内でのみ有効です。)
- {{HTMLElement("style")}} 要素の {{htmlattrxref("media", "style")}} 属性では、スタイルが適用されるメディアを定義します。

### JavaScript でのメディアクエリー

[JavaScript](/ja/docs/Web/JavaScript) では、ウィンドウがメディアクエリーに合うかどうかをテストするために {{domxref("Window.matchMedia()")}} メソッドを利用することができます。また、 {{domxref("MediaQueryList.addListener()")}} を使用して、クエリーの状態が変更されたときに通知を受け取ることもできます。この機能により、サイトやアプリが端末の設定、方向、状態が変化したときに応答することができます。

プログラムからのメディアクエリーの使用については、[メディアクエリーのテスト](/ja/docs/Web/CSS/Media_Queries/Testing_media_queries)で知ることができます。

## リファレンス

### アットルール

- {{cssxref("@import")}}
- {{cssxref("@media")}}

## ガイド

- [メディアクエリーの使用](/ja/docs/Web/CSS/Media_Queries/Using_media_queries)
  - : メディアクエリーと、その構文や演算子、メディアクエリー式を構築するために使用するメディア機能を紹介します。
- [プログラムからのメディアクエリーのテスト](/ja/docs/Web/CSS/Media_Queries/Testing_media_queries)
  - : JavaScript の中でメディアクエリーを使用して端末の状態を特定する方法、メディアクエリーの結果が変化したとき (ユーザーが画面を回転させたり、ブラウザーの大きさを変更したりしたとき) にコードに通知されるよう、リスナーをセットアップする方法を説明します。
- [アクセシビリティのためのメディアクエリーの使用](/ja/docs/Web/CSS/Media_Queries/Using_Media_Queries_for_Accessibility)
  - : ユーザーがウェブサイトをより理解できるように、メディアクエリーが支援できることを学びます。

## 仕様書

| 仕様書                                    | 状態                                   | 備考            |
| ------------------------------------------------ | ---------------------------------------- | ------------------ |
| {{SpecName('CSS5 Media Queries')}}     | {{Spec2('CSS5 Media Queries')}} |                    |
| {{SpecName('CSS3 Conditional')}}     | {{Spec2('CSS3 Conditional')}} |                    |
| {{SpecName('CSS4 Media Queries')}}     | {{Spec2('CSS4 Media Queries')}} |                    |
| {{SpecName('CSS3 Media Queries')}}     | {{Spec2('CSS3 Media Queries')}} |                    |
| {{SpecName('CSS2.1', 'media.html')}} | {{Spec2('CSS2.1')}}                 | 初回定義 |

## 関連情報

- {{cssxref("@supports")}} を使用すると、ブラウザーのさまざまな CSS の技術への対応状況に応じてスタイルを適用することができます。
