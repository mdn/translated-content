---
title: 開発者ガイド
slug: MDN/Guides
original_slug: Web/Guide
l10n:
  sourceCommit: 58ad1df59f2ffb9ecab4e27fe1bdf1eb5a55f89b
---

<section id="Quick_links">
  {{ListSubpagesForSidebar("/ja/docs/Web/Guide")}}
</section>

MDN ドキュメントには多くのガイドがあります。この記事は使用例を追加したり、API や機能の使用方法を教えることを目的としています。このページでは、最も人気のある素材をリンクしています。

## HTML

- [HTML によるウェブの構成](/ja/docs/Learn/HTML)
  - : HTML の学習領域では、HTML を 1 から学ぶためのチュートリアルを提供しています。
- [HTML の基本](/ja/docs/Learn/Getting_started_with_the_web/HTML_basics)
  - : この記事では、HTML の基本的な理解を深めることができます。このガイドに従うこと以下で、HTML 学習領域の素材をさらに探求することができます。

## CSS

- [CSS を使用した HTML のスタイル設定方法を学ぶ](/ja/docs/Learn/CSS)
  - : 最初の段階からテキストのスタイル設定、レイアウトの作成などに至るまで、CSS チュートリアルの完全版です。
- [CSS レイアウトガイド](/ja/docs/Web/Guide/CSS/CSS_Layout)
  - : MDN には CSS レイアウトのガイドがたくさんありますが、このページではそれらを一斉に集めています。
- [CSS アニメーションの使用](/ja/docs/Web/CSS/CSS_animations/Using_CSS_animations)
  - : CSS のアニメーションでは、ある CSS スタイル設定から別の CSS スタイル設定へのトランジションをアニメーション化することが可能です。このガイドは、アニメーションプロパティを使い始めるのに役立ちます。

## JavaScript

- [JavaScript 学習領域](/ja/docs/Learn/JavaScript)
  - : 全くの初心者の方も、技術のリフレッシュを期待する方も、始めるにはこの場所から。

## メディア

- [音声と動画の配信](/ja/docs/Web/Media/Audio_and_video_delivery)
  - : ウェブ上で音声や動画を届ける手段には、「静的な」データからアダプティブライブストリームに至るまでたくさんのものものがあります。この記事は、ウェブベースのメディアを伝送する様々な仕組みや一般的なブラウザーとの互換性について学ぶ最初のステップとして作られたものです。
- [音声と動画の加工](/ja/docs/Web/Media/Audio_and_video_manipulation)
  - : 様々な技術を組み合わせて新たな形を作ることができるのがウェブの美しいところです。ブラウザーには音声や動画に対する諸々の機能が組み込まれていますから、{{htmlelement("canvas")}}や [WebGL](/ja/docs/Web/API/WebGL_API)、[ウェブオーディオ API](/ja/docs/Web/API/Web_Audio_API) といった技術を使い、直接的に音声や動画を編集することができます。例えば、エコーや圧縮効果を音声に加えたり、白黒やセピアのフィルターを動画に加えたりできます。この記事では、何をすべきかを説明するリファレンスを提供しています。

## API

- [FormData オブジェクトの使用](/ja/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
  - : [`FormData`](/ja/docs/Web/API/FormData) オブジェクトは、{{domxref("Window/fetch", "fetch()")}} を使用して送信するためのキーと値のペアのセットを収集可能にします。本来はフォームデータの送信に使用することを想定していましたが、キーのついたデータを伝送するためにフォームとは独立して使用することもできます。伝送されるデータは、フォームのエンコードタイプが "multipart/form-data" に設定されている場合に、`submit()` メソッドで送信する際に使用するデータと同じ形式です。
- [プログレッシブウェブアプリ](/ja/docs/Web/Progressive_web_apps#core_pwa_guides)
  - : プログレッシブウェブアプリ (PWA) は、現行のウェブ API と従来のプログレッシブエンハンスメント戦略を使用して、クロスプラットフォームのウェブアプリケーションを作成します。このアプリはあらゆる場所で動作し、ネイティブアプリと同じユーザー使い勝手の利点をもたらすいくつかの機能を提供します。この一連のガイドでは、PWA について知っておく必要があるすべてを教えます。
- [XML の構文解析とシリアライズ](/ja/docs/Web/XML/Parsing_and_serializing_XML)
  - : ウェブプラットフォーム上での XML の構文解析やシリアライズには複数の方法があり、それぞれ長所と短所があります。

## パフォーマンス

- [最適化とパフォーマンス](/ja/docs/Web/Performance)
  - : 現代的なウェブアプリやウェブサイトを構築する時に重要なのは、コンテンツをすばやく効率的に作ることです。強力なデスクトップシステムでも、比較的スペックの低い小型端末でも十分に動作するような作り方を学びましょう。

## モバイルウェブ開発

- [モバイルウェブ開発](/ja/docs/Learn/CSS/CSS_layout/Responsive_Design)
  - : この記事では、モバイル端末でもしっかりと動作するウェブサイトを設計するのに必要な主な技術の一部についての概要を示しています。

## フォント

- [可変フォントガイド](/ja/docs/Web/CSS/CSS_fonts/Variable_fonts_guide)
  - : デザインに可変フォントを使用する方法を見つけましょう。
- [Web Open Font Format (WOFF)](/ja/docs/Web/CSS/CSS_fonts/WOFF)
  - : WOFF (Web Open Font Format) はウェブ上で誰もが使えるフリーのフォントファイルフォーマットです。

## ユーザーインターフェイス開発

- [ユーザー入力とコントロール](/ja/docs/Learn/Forms/User_input_methods)
  - : 現代的なウェブでのユーザー入力は、単純なマウスとキーボードだけでは語れません。例えばタッチスクリーンなどを考慮する必要があります。この記事では、オープンなウェブアプリがユーザーの入力に対応したり操作を設計したりするにあたっての推奨事項を、よくある質問や、現実的な例、背景にある技術についてのより詳しく知りたい人向けの情報とともに紹介しています。
