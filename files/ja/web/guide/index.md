---
title: 開発者ガイド
slug: Web/Guide
---

**これらの記事は、特定の技術や API を利用するための how-to 情報を提供します。**

- [HTML 学習エリア](/ja/docs/Learn/HTML)
  - : **[HTML](/ja/docs/Glossary/HTML)** (ハイパーテキスト・マークアップ・ランゲージ／Hypertext Markup Language) はほぼすべてのウェブコンテンツの中心となる言語です。ブラウザー画面上で目にする大半は、基本的に HTML を用いて記述されています。
- [CSS 学習エリア](/ja/docs/Learn/CSS)
  - : CSS (Cascading Style Sheets) とは HTML 内に書かれた文書の見た目を記述するスタイルシート言語です。
- [音声と動画の配信](/ja/docs/Web/Guide/Audio_and_video_delivery)
  - : ウェブ上で音声や動画を届ける手段には、「静的な」データからアダプティブライブストリームに至るまでたくさんのものものがあります。この記事は、ウェブベースのメディアを伝送する様々な仕組みや一般的なブラウザーとの互換性について学ぶ最初のステップとして作られたものです。
- [音声と動画の加工](/ja/docs/Web/Guide/Audio_and_video_manipulation)
  - : 様々な技術を組み合わせて新たな形を作ることができるのがウェブの美しいところです。ブラウザーには音声や動画に対する諸々の機能が組み込まれていますから、{{htmlelement("canvas")}}や WebGL、Web Audio API といった技術を使い、直接的に音声や動画を編集することができます。例えば、エコーや圧縮効果を音声に加えたり、白黒やセピアのフィルターを動画に加えたりできます。この記事では、何をすべきかを説明するリファレンスを提供しています。
- [イベント開発者ガイド](/ja/docs/Web/Guide/Events)
  - : イベントは、ウェブ上での処理中に起こる様々な出来事の非同期処理のためのデザインパターンや、様々なタイプの大量の出来事の名付け・特徴化・利用のために必要です。
- [AJAX](/ja/docs/Web/Guide/AJAX)
  - : **Asynchronous JavaScript + XML (AJAX)** は既存の技術同士を組み合わせた新しいアプローチで、ウェブアプリケーションはより速く、表示されているページ全てを再読み込みすることなく、ユーザーインターフェイスを逐次更新できるようになります。そして、アプリケーションにより早い表示、ユーザー操作へのより良い応答性をもたらします。
- [ウェブのグラフィック](/ja/docs/Web/Guide/Graphics)
  - : 現代のウェブサイトとアプリケーションは、グラフィックスによる表現を必要としています。
- [Web API ガイド](/ja/docs/Web/Guide/API)
  - : すべての Web API のリストとそれが何をするのか。
- [JavaScript](/ja/docs/JavaScript)
  - : JavaScript は、ウェブアプリケーションの作成に使われる強力なスクリプト言語です。
- [Localizations and character encodings](/ja/docs/Web/Guide/Localizations_and_character_encodings)
  - : ブラウザー内部では文章は Unicode 形式で処理されます。ところが、ネットワークを介して文章をブラウザーに送る過程では、文字をバイトで表現する (文字エンコード) ことが行われています。[HTML の仕様では (すべての Unicode 文字を表現できる) UTF-8 エンコーディングを利用することが推奨されており](https://www.whatwg.org/specs/web-apps/current-work/multipage/semantics.html#charset)、如何なるエンコーディングが使われていようと、ウェブコンテンツはそのエンコーディングを宣言する必要があります。
- [モバイルウェブ開発](/ja/docs/Web/Guide/Mobile)
  - : この記事では、モバイル端末でもしっかりと動作するウェブサイトを設計するのに必要な主な技術の一部についての概要を示しています。[Firefox for Android](/ja/Mozilla/Firefox_for_Android) もご覧ください。

<!---->

- [プログレッシブウェブアプリ](/ja/Apps/Progressive#Core_PWA_guides)
  - : PWA はどの環境でも動作し、ネイティブアプリケーションと同等のユーザー体験を得られるようないくつかの機能を提供します。このガイド集には PWA について知っておくべき全てのことが書かれています。
- [最適化とパフォーマンス](/ja/docs/Web/Guide/Performance)
  - : 現代的なウェブアプリやウェブサイトを構築する時に重要なのは、コンテンツをすばやく効率的に作ることです。強力なデスクトップシステムでも、比較的スペックの低い小型端末でも十分に動作するような作り方を学びましょう。
- [XML のパースとシリアライズ](/ja/docs/Parsing_and_serializing_XML)
  - : ウェブプラットフォーム上での XML のパースやシリアライズには複数の方法があり、それぞれ長所と短所があります。
- [Web Open Font Format (WOFF)](/ja/docs/Web/Guide/WOFF)
  - : WOFF (Web Open Font Format) はウェブ上で誰もが使えるフリーのフォントファイルフォーマットです。
- [Unicode Bidirectional Text Algorithm (BiDi)](/ja/docs/Web/Guide/Unicode_Bidrectional_Text_Algorithm)
  - : Unicode® BiDi アルゴリズムは Unicode 文章の標準の一つで、ブラウザーが Unicode の文章をレンダリングするにあたってどのように文字を整理すべきかを定めています。このガイドではこのアルゴリズムの概要を説明し、また、特に適切に多言語対応させたい時に、どういう風に制作コンテンツに適用すべきかを説明しています。
- [FormData オブジェクトの使用](/ja/docs/Web/Guide/Using_FormData_Objects)
  - : [`FormData`](/ja/DOM/XMLHttpRequest/FormData) オブジェクトは、`XMLHttpRequest` を使用して送信するためのキーと値のペアのセットを収集可能にします。本来はフォームデータの送信に使用することを想定していましたが、キーのついたデータを伝送するためにフォームとは独立して使用することもできます。伝送されるデータは、フォームのエンコードタイプが "multipart/form-data" に設定されている場合に、`submit()` メソッドで送信する際に使用するデータと同じ形式です。
- [ユーザ入力とコントロール](/ja/docs/Web/Guide/User_input_methods)
  - : 現代的なウェブでのユーザー入力は、単純なマウスとキーボードだけでは語れません。例えばタッチスクリーンなどを考慮する必要があります。この記事では、オープンなウェブアプリがユーザーの入力に対応したり操作を設計したりするにあたっての推奨事項を、よくある質問や、現実的な例、背景にある技術についてのより詳しく知りたい人向けの情報とともに紹介しています。
- [用語集](/ja/docs/Glossary)
  - : ウェブやインターネットに関連する多数の専門用語の定義。

## 関連情報

- [ウェブ技術リファレンス](/ja/docs/Web/Reference)
