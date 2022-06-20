---
title: ウェブのエラーを文書化する方法
slug: MDN/Contribute/Howto/Document_web_errors
tags:
  - Howto
  - MDN
  - Meta
translation_of: MDN/Contribute/Howto/Document_web_errors
---
<div>{{MDNSidebar}}</div><div>{{IncludeSubnav("/ja/docs/MDN")}}</div>

<p>MDN <a href="/ja/docs/Web/JavaScript/Reference/Errors">JavaScript error reference</a> は <a href="/ja/docs/Tools/Web_Console">Developer Console </a>で発生するエラーについて、ウェブ開発者を手助けすることを目的とした新しいプロジェクトです。</p>

<p>この機能は、Firefox (Developer Edition) をお使いの場合に有効です。JavaScript エラーに含まれる "Learn more" が問題の修正に役立つ追加のアドバイスを含む JavaScript error reference にリンクしています。</p>

<p>{{EmbedYouTube("OabJc2QR6o0")}}</p>

<p>このプロジェクトを助けるには、メッセージが投げられるツールからより多くのリンクを追加できるように、もっと多くの MDN エラードキュメントを書くことが必要です。</p>

<h2 id="Prerequisites" name="Prerequisites">前提条件</h2>

<ul>
 <li><a href="/ja/docs/MDN/Contribute/Howto/Create_an_MDN_account">MDN アカウント</a>が必要です。</li>
 <li><a href="/ja/docs/Web/JavaScript">JavaScript </a>の知識か、検索する力が必要です。</li>
</ul>

<h2 id="Step_1_–_find_an_error_to_document" name="Step_1_–_find_an_error_to_document">Step 1 – 文書化するエラーを探しましょう</h2>

<ul>
 <li>Firefox/Gecko のエラーメッセージ: <a href="https://dxr.mozilla.org/mozilla-central/source/js/src/js.msg">https://dxr.mozilla.org/mozilla-central/source/js/src/js.msg</a></li>
 <li>Edge/Chakra のエラーメッセージ: <a href="https://github.com/Microsoft/ChakraCore/blob/master/lib/Parser/rterrors.h">https://github.com/Microsoft/ChakraCore/blob/master/lib/Parser/rterrors.h</a></li>
 <li>Chrome/v8 のエラーメッセージ: <a href="https://github.com/v8/v8/blob/master/src/messages.h#L75">https://github.com/v8/v8/blob/master/src/messages.h#L75</a></li>
</ul>

<h2 id="Step_2_–_look_at_existing_error_docs" name="Step_2_–_look_at_existing_error_docs">Step 2 – 既存のエラードキュメントを探しましょう</h2>

<ul>
 <li>既存の <a href="/ja/docs/Web/JavaScript/Reference/Errors">JavaScript エラーメッセージ</a>を見て、エラーの文書化される方法を見てみます。</li>
 <li>書こうとするエラーの種類によっては、このページを詳細に見ます。</li>
 <li>新しいエラーページをキックオフするのに、既存のエラーページのコンテンツをコピーしたくなるかもしれません。</li>
</ul>

<h2 id="Step_3_–_create_a_new_page" name="Step_3_–_create_a_new_page">Step 3 – 新しいページを作成します</h2>

<ul>
 <li>すべてのエラーページはこの木の下にあります: <a href="/ja/docs/Web/JavaScript/Reference/Errors">/docs/Web/JavaScript/Reference/Errors</a></li>
 <li><a href="/ja/docs/new?parent=179598">このリンク</a>に従ってサブページを作成できます。</li>
</ul>

<h2 id="Step_4_–_write_some_content" name="Step_4_–_write_some_content">Step 4 – ページの内容を書きます</h2>

<ul>
 <li>既存のエラードキュメントから構造をコピーして使うか、最初からスタートするかのいずれでも。あなたの選択です!</li>
 <li>少なくとも次のものが要ります:
  <ul>
   <li>いろいろなブラウザーで投げられるメッセージを含んだ文法ボックス</li>
   <li>エラーの種類</li>
   <li>エラーが発生する理由と、その結果を説明したテキスト。メッセージの投げられた背景まで</li>
   <li>エラーを展示する例 (1 つ以上要ります!) とコードを修正する方法の例</li>
   <li>MDN 上のその他のリファレンスへのポインター</li>
  </ul>
 </li>
</ul>
