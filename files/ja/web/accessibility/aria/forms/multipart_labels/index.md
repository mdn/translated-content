---
title: '複数の部分に分かれたラベル: 内部にフィールドがあるラベルに ARIA を使用'
slug: Web/Accessibility/ARIA/forms/Multipart_labels
tags:
  - ARIA
  - アクセシビリティ
  - Ben Millard
  - Firefox
  - ガイド
  - HELP
  - HTML
  - HTML 4
  - JAWS
  - NeedsContent
  - aria-labelledby
  - label
  - solution
  - trouble shoot
  - troubleshoot
translation_of: Web/Accessibility/ARIA/forms/Multipart_labels
---
## 問題点

ユーザーに質問をするフォームがあり、回答が質問文の中にある場合があります。有名なブラウザーの設定項目の例を挙げると、「履歴を x 日後に削除する」という設定です。「履歴を」はテキストボックスの左側にあり、また x は 21 のような数値であり、「日後に削除する」という文言はテキストボックスの後ろにあって、理解しやすい文を構成しています。

画面リーダーを使用している場合、 Firefox でこの設定項目に達すると「履歴を 21 日後に削除する」と伝えられ、その後でテキストボックス内にるので、数値 21 が入っているとと知らされることに気づきます。すばらしいでしょう？単位を見つけるために行き来する必要はありません。「日」は容易に「か月」や「年」に変えることができ、また多くの通常のダイアログではこれを見つけるための方法が、画面の再調査コマンドで行き来する以外にありません。

解決策は、ARIA の **aria-labelledby** という属性にあります。この引数は、ひとつのアクセシブルな名称になるように連結したい HTML 要素の ID で構成される文字列です。

**aria-labelledby** および **aria-describedby** はどちらもラベル付けされる要素、例えば \<input> で指定します。どちらの場合もラベルとコントロールの紐付けがあってもかまいませんが、 **aria-labelledby** によって上書きされます。**aria-labelledby** を提供する HTML ページでは、 ARIA に対応していない古いブラウザーにも対応できるように構成したラベルも提供してください。 Firefox 3 では新しい属性により、目の不自由なユーザーが自動的によりよいアクセシビリティを得ることができますが、古いブラウザーのユーザーは、この方法でアクセシビリティがない状態を抜けることができません。

例:
<input><span id="labelShutdown">Shut down computer after</span> <input> <span id="shutdownUnit"> minutes</span>

<pre class="brush: html">&lt;input aria-labelledby="labelShutdown shutdownTime shutdownUnit" type="checkbox" /&gt;
&lt;span id="labelShutdown"&gt;Shut down computer after&lt;/span&gt;
&lt;input aria-labelledby="labelShutdown shutdownTime shutdownUnit" id="shutdownTime" type="text" value="10" /&gt;
&lt;span id="shutdownUnit"&gt; minutes&lt;/span&gt;
</pre>

## JAWS 8 ユーザーへの注意

JAWS 8.0 はラベルを発見する独自のロジックを持っており、常に HTML 文書で見つけたテキストボックスの accessibleName より優先します。 JAWS 8 で、上記の例からラベルを受け入れるようにする方法は見つかっていません。しかし NVDA や Window-Eyes の動作は良好であり、また Linux での Orca も問題がありません。

> **Note:** TBD: さらに互換性情報を追加する

## ARIA を使用せずに実現できるか

コミュニティーのメンバーである Ben Millard はブログへの投稿で、単に input を label 内に埋め込むことにより <a class="external text" href="https://projectcerbera.com/blog/2008/03#day24" rel="nofollow">HTML 4 を使用して前出の例のようにコントロールをラベル内に埋め込むことが可能</a>であることを指摘しました。 Ben、情報ありがとうございます。これはとても役に立ち、また長年使用されてきたテクニックには時に権威から逃れるものもあることを示します。このテクニックは Firefox で動作しますが、現時点で IE を含む他の多くのブラウザーでは動作しません。従ってフォームコントロールを埋め込んだラベルについては、**aria-labelledby** を使用することがやはり最善の方法です。
