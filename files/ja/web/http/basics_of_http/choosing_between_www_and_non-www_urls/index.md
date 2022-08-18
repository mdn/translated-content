---
title: www 付きと www なしの URL の選択
slug: Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs
tags:
  - Guide
  - HTTP
  - URL
translation_of: Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs
---
<div>{{HTTPSidebar}}</div>

<p class="summary">ウェブサイトの管理者の間で繰り返される質問が、www URL と非 www URL のどちらを選択するかです。このページでは、何が最良かについてアドバイスを提供します。</p>

<h2 id="What_are_domain_names" name="What_are_domain_names">ドメイン名とは何か</h2>

<p>HTTP の URL では、先頭の <code>http://</code> または <code>https://</code> に続く部分文字列をドメインと呼びます。ドメイン名は、文書が存在するサーバーにホスティングされています。</p>

<p>サーバーは物理的な装置である必要はありません。同じ物理的な装置上に複数のサーバーを配置できます。あるいは複数の装置がひとつのサーバーとして扱われることもあり、協力して回答を生成したり、サーバー間でリクエストの負荷を分散したりします。重要なことは、意味的に<em>ひとつのドメイン名がひとつのサーバーを表す</em>ことです。</p>

<h2 id="So_do_I_have_to_choose_one_or_the_other_for_my_web_site" name="So_do_I_have_to_choose_one_or_the_other_for_my_web_site">では、自身のウェブサイトでどちらかを選択しなければならないのか</h2>

<ul>
 <li><u>はい</u>、ひとつを選択して維持しなければなりません。基準となる場所に応じてどちらを選択するかはあなた次第ですが、どちらかを選択したら、それを維持してください。それにより、ユーザーや検索エンジンから見てウェブサイトが首尾一貫したものになります。これは、常に選択したドメインにリンクする (ウェブサイト内で相対 URL を使用すれば、難しくはないでしょう)、および常に同じドメインへのリンクを (電子メールやソーシャルネットワークなどで) 共有することを含みます。</li>
 <li><u>いいえ</u>、二つ持つことができます。どちらが公式なドメインであるかについて、一貫性を持って矛盾しないことが重要です。<strong>この公式なドメインは<em>正規名</em>と呼ばれます。</strong>すべての絶対パスリンクで正規名を使用するべきです。しかし、それでも他のドメインを機能させることができます。HTTP ではどちらのドメインが正規のものであるかをユーザーや検索エンジンに対して明らかにするとともに、非正規のドメインが機能して想定したページを提供できるようにするための技術が 2 つあります。</li>
</ul>

<p>従って、正規なドメインとしてひとつ選択してください! 以下の 2 つの技術によって、非正規のドメインも機能させることができます。</p>

<h2 id="Techniques_for_canonical_URLs" name="Techniques_for_canonical_URLs">非正規の URL のための技術</h2>

<p>どのウェブサイトが<em>正規</em>であるかを選択するための、さまざまな方法があります。</p>

<h3 id="Using_HTTP_301_redirects" name="Using_HTTP_301_redirects">HTTP 301 リダイレクトを使用する</h3>

<p>この場合は非正規ドメインへのリクエストに対して適切な HTTP {{HTTPStatus(301)}} レスポンスを返すために、HTTP リクエストを受けるサーバー (おそらく、www URL 向けと非 www URL 向けは同じでしょう) の設定が必要です。これは、非正規 URL へアクセスしようとしたブラウザーを正規な同等 URL へリダイレクトします。例えば非 www URL を正規なものとして使用することを選択した場合は、すべての www URL を、www をつけない同等の URL にリダイレクトします。</p>

<p>例:</p>

<ol>
 <li>サーバーが <code>http://www.example.org/whaddup</code> へのリクエストを受けます (正規のドメインが example.org であるとき)。</li>
 <li>サーバーは <code>{{HTTPHeader("Location")}}: http://example.org/whaddup</code> ヘッダーを伴う {{HTTPStatus(301)}} コードのレスポンスを返します。</li>
 <li>クライアントは正規ドメイン <code>http://example.org/whatddup</code> へのリクエストを発行します。</li>
</ol>

<p><a href="https://github.com/h5bp/html5-boilerplate">HTML5 boilerplate project</a> に、<a href="https://github.com/h5bp/html5-boilerplate/blob/7a22a33d4041c479d0962499e853501073811887/.htaccess#L219-L258">あるドメインから別のドメインへリダイレクトするように Apache を設定する方法</a> の例があります。</p>

<h3 id="Using_&lt;link_relcanonical>" name="Using_&lt;link_relcanonical>"><em><code>&lt;link rel="canonical"&gt;</code></em> を使用する</h3>

<p>ページの正規のアドレスは何かを示す、専用の HTML {{HTMLElement("link")}} 要素をページに追加できます。これは人間向けのページリーダーには影響がありませんが、検索エンジンのクローラーに対してページが実際はどこにあるかを示します。この方法では検索エンジンが同じページで何度もインデックスを作成したり、重複したコンテンツやスパムであると判断されたり、検索エンジンの結果ページでページが排除されたりランクが下がったりすることがなくなります。</p>

<p>このようなタグを追加するときは両方のドメインで同じコンテンツを提供して、どの URL が正規であるかを検索エンジンに示します。先ほどの例では <code>http://www.example.org/whaddup</code> が <code>http://example.org/whaddup</code> と同じコンテンツを提供していますが、head に {{htmlelement("link")}} 要素を追加します:</p>

<p><code>&lt;link href="http://example.org/whaddup" rel="canonical"&gt;</code></p>

<p>リダイレクトの場合と異なり、ブラウザーの履歴では非 www URL と www URL が独立した項目であるとみなします。</p>

<h2 id="Make_your_page_work_for_both" name="Make_your_page_work_for_both">どちらでもページを動作させる</h2>

<p>これらの技術と併せて、 www つきドメインと www なしドメインの両方で正しく応答するようにサーバーを設定しましょう。ユーザーがブラウザーの URL バーにどちらの URL を入力するかは予測できませんので、これを行うことはよい助言になります。これは正式な場所としてどちらを使用したいかを選択するという問題であり、その結果に応じて他の URL をリダイレクトします。</p>

<h2 id="Deciding_the_case" name="Deciding_the_case">状況を判断する</h2>

<p class="entry-title">これは<a href="http://bikeshed.com/">自転車置き場</a>問題と考えられる、とても主観的な話題です。もっと深く読んでみたいと思ったら、この件に関する<a href="https://www.netlify.com/blog/2017/02/28/to-www-or-not-www/">多くの</a><a href="https://www.wpbeginner.com/beginners-guide/www-vs-non-www-which-is-better-for-wordpress-seo/">記事</a>をご覧ください。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://www.chrisfinke.com/2011/07/25/what-do-people-type-in-the-address-bar/">Stats on what people type in the URL bar</a> (2011)</li>
</ul>
