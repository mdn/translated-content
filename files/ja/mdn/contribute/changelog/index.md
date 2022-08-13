---
title: MDN への貢献の変更履歴
slug: MDN/Contribute/Changelog
tags:
  - Changelog
  - Contribute
  - MDN
---
<p>{{MDNSidebar}}</p>

<p>この文書は MDN コンテンツのプロセス、構造、ベストプラクティスが変更されたこと、いつ変更されたかを記録するものです。これは、定期的に協力する人が、 MDN のコンテンツ作成プロセスで何が変わったかを確認するのに役立ちます。</p>

<h2 id="february_2021">2021 年 2 月</h2>

<h3 id="documenting_mixins">ミックスインの文書化</h3>

<p>Web IDL の<a href="https://heycam.github.io/webidl/#idl-interface-mixins">インターフェイスミックスイン</a>は、 Web API を定義するための仕様書で使用されています。
ウェブ開発者にとっては、直接見ることはできませんが、 API 定義の繰り返しを避けるためのヘルパーとして機能しています。</p>

<p>これまでは、ミックスインクラス自体にランディングページを定義し、その下のサブページに定義されたメンバーを配置してから、それらのミックスインを実装したインターフェースのランディングページからリンクするのが一般的でした。ミックスインは仕様上の構成要素であり、ミックスインクラスを使って定義されたメンバーにアクセスすることはないため、これは読者にとって誤解を招きやすいものでした。この混乱を避けるために、ミックスインで定義されたメンバーのページを、実装クラスのページの直下に配置しました。詳細については、 <a href="/ja/docs/MDN/Contribute/Howto/Write_an_API_reference/Information_contained_in_a_WebIDL_file#mixins">API リファレンスの書き方</a>に関するガイドページと、この変更に至るまでの <a href="https://github.com/mdn/content/issues/1940">mdn/content#1940</a> の議論を参照してください。</p>

<h2 id="january_2021">2021 年 1 月</h2>

<h3 id="markup_for_note_and_warning_boxes">注釈と警告ボックスのマークアップ</h3>

<p>これまでの MDN では、注釈ボックスと警告ボックスは、 <code>&lt;div&gt;</code> 要素にそれぞれ <code>note</code> クラスと <code>warning</code> クラスをつけたもので囲んでいました。多くの場合、それらの最初の段落は、 <code>&lt;strong&gt;</code> で囲まれた <code>note</code> や <code>warning</code> のテキストで始まります。</p>

<p>1 月にこれが変更され、 <code>class</code> 属性に追加の <code>notecard</code> クラスを含めるようにし、強調表示のテキストはブロックの上部で見出しに含めるようになりました。</p>

<p>詳しい情報と構文のガイドは、 <a href="/ja/docs/MDN/Guidelines/CSS_style_guide#.note.notecard">MDN のコンテンツで使われるクラスとスタイルのガイド</a>を参照してください。</p>
