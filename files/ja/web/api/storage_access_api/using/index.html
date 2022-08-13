---
title: Storage Access API の使用
slug: Web/API/Storage_Access_API/Using
tags:
  - API
  - DOM
  - Guide
  - Reference
  - Storage
  - Storage Access API
translation_of: Web/API/Storage_Access_API/Using
---
<div>{{seecompattable}}{{DefaultAPISidebar("Storage Access API")}}</div>

<p class="summary"><span class="seoSummary">埋め込まれたクロスオリジンの文書で <a href="/ja/docs/Web/API/Storage_Access_API">Storage Access API</a> を使用して、ファーストパーティストレージにアクセスできるかどうかを確認し、そうでない場合はアクセスを要求する必要があります。 一般的なストレージアクセスのシナリオについて簡単に説明します。</span></p>

<h2 id="Usage_notes" name="Usage_notes">使用上の注意</h2>

<p>Storage Access API は、ユーザーのブラウザーがすべてのサードパーティのクッキーをブロックするように設定されている場合にブロックされるストレージへのアクセスを埋め込まれたコンテンツが要求できるように設計されています。 埋め込まれたコンテンツはユーザーが使用しているストレージポリシーを認識しないため、ストレージからの読み取りまたは書き込みを試みる前に、常に埋め込まれたフレームにストレージアクセスがあるかどうかを確認するのが最善です。 これは、{{domxref("Document.cookie")}} へのアクセスの場合に特に当てはまります。 サードパーティのクッキーがブロックされると、ブラウザーはしばしば空のクッキージャーを返すためです。</p>

<h2 id="Accessing_a_users_cookies_in_an_embedded_cross-origin_iframe" name="Accessing_a_users_cookies_in_an_embedded_cross-origin_iframe">埋め込まれたクロスオリジン iframe でユーザーのクッキーにアクセスする</h2>

<p>この例では、埋め込まれたクロスオリジン {{htmlelement("iframe")}} が、サードパーティのクッキーをブロックするストレージアクセスポリシーの下でユーザーのクッキーにアクセスする方法を示します。</p>

<p>まず、<code>&lt;iframe&gt;</code> がサンドボックス化されている場合、次のように、埋め込まれたウェブサイトは <code>allow-storage-access-by-user-activation</code> <a href="/ja/docs/Web/HTML/Element/iframe#attr-sandbox">sandbox トークン</a>を追加して、ストレージアクセス要求が成功することを許可するとともに、<code>allow-scripts</code> と <code>allow-same-origin</code> を使用して API の呼び出しを許可し、クッキーを持つことができるオリジンで実行します。</p>

<pre class="brush: html">&lt;iframe sandbox="allow-storage-access-by-user-activation
                 allow-scripts
                 allow-same-origin"&gt;
  ...
&lt;/iframe&gt;</pre>

<p>次に、埋め込まれた文書内で実行されるコードに進みます。 現在ストレージにアクセスできるかどうかはわからないため、最初に {{domxref("Document.hasStorageAccess()")}} を呼び出す必要があります。 その呼び出しが <code>false</code> を返す場合、{{domxref("Document.requestStorageAccess()")}} を呼び出すことができます。 それが返した結果は、前の Promise 呼び出しにチェーンできます。 最後の <code>then</code> では、ファーストパーティストレージへのアクセスが可能になります。</p>

<pre class="brush: js">document.hasStorageAccess().then(hasAccess =&gt; {
  if (!hasAccess) {
    return document.requestStorageAccess();
  }
}).then(_ =&gt; {
  // これで、ファーストパーティストレージにアクセスできます！

  // ファーストパーティのクッキージャーからいくつかのアイテムにアクセスしましょう
  document.cookie = "foo=bar";              // クッキーを設定
  localStorage.setItem("username", "John"); // localStorage エントリにアクセス
}).catch(_ =&gt; {
  // ストレージアクセスの取得エラー。
});</pre>

<p>埋め込まれたコンテンツがタップやクリックなどのユーザージェスチャーを現在処理していない限り、アクセス要求は自動的に拒否されることに注意してください。 このコードは、例えば、次のようなユーザージェスチャーベースのイベントハンドラー内で実行する必要があります。</p>

<pre class="brush: js">btn.addEventListener('click', () =&gt; {
  // ここでコードを実行します
});</pre>
