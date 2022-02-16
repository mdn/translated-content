---
title: API リファレンスサイドバー
slug: MDN/Contribute/Howto/Write_an_API_reference/Sidebars
tags:
  - API
  - Documentation
  - Guide
  - MDN
  - MDN Meta
  - Reference
  - groupdata
  - metadata
  - onboarding
  - sidebars
translation_of: MDN/Structures/API_references/API_reference_sidebars
original_slug: MDN/Structures/API_references/API_reference_sidebars
---
<div>{{MDNSidebar}}</div>

<p class="summary">API リファレンスページにカスタムサイドバーを追加して、関連するインターフェイス、チュートリアル、およびその API に関連する他のリソースへのリンクを表示することができます。この記事ではその方法を説明します。</p>

<h2 id="Creating_a_sidebar" name="Creating_a_sidebar">サイドバーの作成</h2>

<p>API サイドバーを作成するには、次の3つの手順を実行する必要があります。</p>

<ol>
 <li>API リファレンスページを作成します</li>
 <li>特定の API の項目を <a href="https://github.com/mdn/kumascript">KumaScript リポジトリ</a>の <code>GroupData.json</code> データファイルに追加します</li>
 <li>{{TemplateLink("APIRef")}} マクロを使用して、表示したい各ページにサイドバーを挿入します</li>
</ol>

<p>これらのステップを順番に実行しましょう。この記事で参照する例は、<a href="/ja/docs/Web/API/Fetch_API">Fetch API</a> です。</p>

<h3 id="Creating_your_API_reference_pages" name="Creating_your_API_reference_pages">API リファレンスページの作成</h3>

<p>サイドバーをページに追加する前に、ページ自体を作成する必要があります (詳細については、<a href="/ja/docs/MDN/Contribute/Structures/API_references/What_does_an_API_reference_need">API リファレンスに必要なもの</a>ガイドを参照してください)。</p>

<h3 id="Adding_an_entry_to_GroupData.json" name="Adding_an_entry_to_GroupData.json">GroupData.json への項目の追加</h3>

<p><code><a href="https://github.com/mdn/kumascript/blob/master/macros/GroupData.json">GroupData.json</a></code> ファイルには、API 参照サイドバーに表示されるリンクに関するすべてのデータが格納されます。呼び出されると、{{TemplateLink("APIRef")}} マクロは引数として与えられた API 名を取り、<code>GroupData.json</code> でその名前を検索し、適切なサイドバーを作成してページに挿入します。</p>

<p><code>GroupData.json</code> に項目を追加するには、以下を行う必要があります。</p>

<ol>
 <li><a href="https://github.com/">GitHub</a> アカウントを持っていることを確認します</li>
 <li>KumaScript リポジトリをフォークし、新しいブランチを作成して変更を保存し、リポジトリをローカルにクローンします</li>
 <li>作業を開始する前に新しいブランチをチェックアウトし、作業が終わったら変更を押してください</li>
 <li>プルリクエストを作成して、MDN チームがあなたの作業をレビューし、必要に応じて変更を求めることができるようにします</li>
</ol>

<p>GitHub の使用についてサポートが必要な場合は、<a href="/ja/docs/MDN/Contribute/Structures/Compatibility_tables#The_new_way_The_browser_compat_data_repo_and_dynamic_tables">互換性一覧表</a>に詳細なガイドがあります。</p>

<p><code><a href="https://github.com/mdn/kumascript/blob/master/macros/GroupData.json">GroupData.json</a></code> ファイルは、KumaScript リポジトリの macros ディレクトリ内にあります。それを見ると、巨大な JSON 構造があり、それぞれの API に独自のメンバーがあります。名前は API 名で、値は生成するサイドバーリンクを定義するいくつかのサブメンバーを含むオブジェクトです。</p>

<p>たとえば、MDN の <a href="/ja/docs/Web/API/Fetch_API">Fetch API</a> ページを見てください。 <code>GroupData.json</code> の対応する項目は次のようになります。</p>

<pre class="brush: json notranslate">"Fetch API": {
    "overview":   [ "Fetch API"],
    "interfaces": [ "Body",
                    "Headers",
                    "Request",
                    "Response",
                    "FetchController",
                    "FetchObserver",
                    "FetchSignal",
                    "ObserverCallback" ],
    "methods":    [ "WindowOrWorkerGlobalScope.fetch()" ],
    "properties": [],
    "events":     []
},</pre>

<p>ご覧のとおり、名前には "Fetch API" を使用し、オブジェクト値の内側には多数のサブメンバーが含まれています。</p>

<h4 id="Sub-members_to_include_inside_a_GroupData_entry" name="Sub-members_to_include_inside_a_GroupData_entry">GroupData 項目内に含めるサブメンバー</h4>

<p>この節では、<code>GroupData</code> 項目に含めることができるすべてのサブメンバーを一覧表示します。</p>

<p>リストされたサブメンバーの中に含まれる値のほとんどは、リンクテキストと、表示されるリンクの最終的な URL を生成するためのメイン API インデックスページ — <code>/<em>&lt;language-code&gt;</em>/docs/Web/API</code> — の最後に追加されたスラッグの両方に相当することに注意してください。そのため、例えば "Body" とすると、 <em>en-US</em> ロケールではこのようなリンクが生成されます。</p>

<pre class="brush: html notranslate">&lt;li&gt;&lt;a href="https://developer.mozilla.org/en-US/docs/Web/API"&gt;Body&lt;/a&gt;&lt;/li&gt;</pre>

<p>いくつかの例外があります。例えば "guides" サブメンバーには、関連するガイド/チュートリアルへのリンクを定義するリンク情報 (タイトルとスラッグ) が1つ以上含まれています。この場合、スラッグは MDN の docs ルート — https://developer.mozilla.org/<em>&lt;language-code&gt;</em>/docs — の最後に追加され、MDN のどこにでも記事を含めることができます。</p>

<p>以下が利用可能なメンバーです。それぞれの場合、ロケールが <em>en-US</em> であると仮定した例が含まれています。これらはすべて技術的にはオプションですが、これらを省略する代わりに空の配列を含めることを強く推奨します。</p>

<ol>
 <li>
  <p><code>"overview"</code> — 値は配列で、 API 概要ページがあればその中にスラッグを含めます。"Fetch API" の場合、 <a href="/en-US/docs/Web/API/Fetch_API">https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API</a> へのリンクが生成されます。</p>
 </li>
 <li>
  <p><code>"interfaces"</code> — 値は配列で、その API の一部を構成するすべてのインターフェイスをリストアップする必要があります。 "Body" の場合は <a href="/en-US/docs/Web/API/Body">https://developer.mozilla.org/en-US/docs/Web/API/Body</a> へのリンクが生成されます。</p>
 </li>
 <li>
  <p><code>"methods"</code> — 値は、 {{domxref("Navigator")}} や {{domxref("Window")}} で生成されたインスタンス化メソッドなど、仕様が他の API に関連付けられたインターフェイスに追加するメソッドを含む配列です。膨大な数のメソッドがある場合は、最も人気のあるものだけをリストアップするか、リストの先頭に置くことを検討するとよいでしょう。 "WindowOrWorkerGlobalScope.fetch()" を実行すると <a href="/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch">https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch</a> へのリンクが張られます。同じ API が所有するインターフェイスのメンバーであるメソッドを重複してリストアップしないようにしましょう。</p>
 </li>
 <li>
  <p><code>"properties"</code> — 値は、 API に関連付けられたすべてのプロパティを含む配列です。これには API 仕様で定義されているインターフェイスのメンバーであるプロパティや、API が他のインターフェイス上で定義しているプロパティを含めることができます。膨大な数のプロパティがある場合は、最も人気のあるものだけをリストアップするか、リストの先頭に配置することを検討するとよいでしょう。 "Headers.append" を実行すると、 <a href="/en-US/docs/Web/API/Headers/append">https://developer.mozilla.org/en-US/docs/Web/API/Headers/append</a> へのリンクが生成されます。</p>
 </li>
 <li>
  <p><code>"events"</code> — 値は、 API の仕様やその他の場所で定義されている API に関連するすべてのイベントを含む配列です。膨大な数のイベントがある場合は、最も人気のあるものだけをリストアップするか、リストの先頭に置くことを検討するとよいでしょう。 "animationstart" を実行すると、 <a href="/en-US/docs/Web/Events/animationstart">https://developer.mozilla.org/en-US/docs/Web/Events/animationstart</a> へのリンクが生成されます。</p>
 </li>
 <li>
  <p><code>"guides"</code> — 値は、API の使用方法を説明するガイドへのリンクを定義する1つ以上のオブジェクトを含む配列です。各オブジェクトは、ガイド記事を指す部分的な URL を含む "url" と、リンクのリンクテストを定義する "title" の2つのサブメンバーを含みます。例として、次のようなオブジェクトがあります。</p>

  <pre class="brush: json notranslate">{ "url":   "/docs/Web/API/Detecting_device_orientation",
"title": "Detecting device orientation" }</pre>

  <p>"Detecting device orientation" というタイトルのリンクを生成し、 <a href="/en-US/docs/Web/API/Detecting_device_orientation">https://developer.mozilla.org/en-US/docs/Web/API/Detecting_device_orientation</a> を指します。</p>
 </li>
 <li>
  <p><code>"dictionaries"</code> — API の一部であるすべての辞書を一覧にした文字列の配列。一般的に、特別な意味がある場合や、複数のページから参照する必要がある場合を除き、複数のプロパティやメソッドで使用される辞書のみをここにリストアップすべきです。 "RTCConfiguration" の場合は <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCConfiguration">https://developer.mozilla.org/en-US/docs/Web/API/RTCConfiguration</a> へのリンクを表示します。</p>
 </li>
 <li>
  <p><code>"types"</code> — API で定義されている型定義子と列挙型の配列。リストを短くするために、特別に重要なものや複数のページから参照されるものだけをリストアップすることもできます。 "RTCCodecType" は <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCCodecType">https://developer.mozilla.org/en-US/docs/Web/API/RTCCodecType</a> へのリンクを生成します。</p>
 </li>
 <li>
  <p><code>"callbacks"</code> — 値は、その API で定義されているすべてのコールバック型のリストを含む配列です。コールバック型を含む API であっても、このグループを使用する必要はないと思われるかもしれません。文字列 "RTCSessionDescriptionCallback" を含むこの配列の項目は、 <a href="https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescriptionCallback">https://developer.mozilla.org/en-US/docs/Web/API/RTCSessionDescriptionCallback</a> へのリンクが生成されます。</p>
 </li>
</ol>

<h2 id="Tags_used_by_sidebars" name="Tags_used_by_sidebars">サイドバーで使用されるタグ</h2>

<p>サブメンバーによっては、ページタグに基づいて子ページから自動的に発見されるものがあります。最上位 API 以下のページはサイドバーがレンダリングされるたびにクロールされ、メソッド ("Method" タグ)、プロパティ ("Property" タグ)、コンストラクター ("Constructor"タグ) の項目が自動的に生成されます。</p>

<p>サブメンバーにも、タグに基づいた警告アイコンが自動的に表示されます。実験的な ("Experimental" タグ)、標準外 ("Non Standard" または "Non-standard" タグ)、非推奨 ("Deprecated" タグ)、廃止 ("Obsolete" タグ) サブメンバーには装飾が追加されます。</p>

<p>タグベースの処理に関する詳細情報は、 <a href="https://github.com/mdn/kumascript/blob/master/macros/APIRef.ejs">APIRef ソースの中</a>にあります。</p>

<h2 id="Inserting_the_sidebar" name="Inserting_the_sidebar">サイドバーの挿入</h2>

<p><code>GroupData.json</code> に API の項目を追加してプルリクエストとして送信し、その変更がメインリポジトリに受け入れられたら、 {{TemplateLink("APIRef")}} マクロを使用して API リファレンスページに設置することができ、 GroupData の API に引数として使用されます。例として、 <a href="/ja/docs/Web/API/WebVR_API">WebVR API</a> のサイドバーは、各ページに次のように設置されています。</p>

<pre class="notranslate">\{{APIRef("WebVR API")}}</pre>
