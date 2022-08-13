---
title: <input type="hidden">
slug: Web/HTML/Element/input/hidden
tags:
  - Element
  - Forms
  - HTML
  - HTML forms
  - Input
  - Input Types
  - Reference
  - hidden
translation_of: Web/HTML/Element/input/hidden
---
<div>{{HTMLRef}}</div>

<p><span class="seoSummary">{{HTMLElement("input")}} 要素の <strong><code>hidden</code></strong> 型は、フォームの送信時にユーザーが見たり変更したりすることができないデータをウェブ開発者が含めることができます。例えば、現在注文中又は編集中の ID や、一意のセキュリティトークンなどに利用できます。隠し入力欄はページの表示で完全に非表示になり、ページの中で表示させる方法はありません。</span></p>

<div class="note">
<p><strong>注</strong>: 以下のコードにはライブサンプルがあります。正しく動作していれば、何も見えないはずです。</p>
</div>

<div id="Basic_example">
<pre class="brush: html notranslate">&lt;input id="prodId" name="prodId" type="hidden" value="xm234jq"&gt;</pre>

<p>{{ EmbedLiveSample('Basic_example', 600, 40) }}</p>
</div>

<table class="properties">
 <tbody>
  <tr>
   <td><strong><a href="#value">値</a></strong></td>
   <td>サーバーに送り返したい隠しデータの値を表す {{domxref("DOMString")}}。</td>
  </tr>
  <tr>
   <td><strong>イベント</strong></td>
   <td>なし。</td>
  </tr>
  <tr>
   <td><strong>対応する共通属性</strong></td>
   <td>{{htmlattrxref("autocomplete", "input")}}</td>
  </tr>
  <tr>
   <td><strong>IDL 属性</strong></td>
   <td><code>value</code></td>
  </tr>
  <tr>
   <td><strong>メソッド</strong></td>
   <td>なし。</td>
  </tr>
 </tbody>
</table>

<div class="note">
<p><strong>注</strong>: {{domxref("HTMLElement/input_event", "input")}} および {{domxref("HTMLElement/change_event", "change")}} の各イベントは、この入力型には適用されません。隠し入力欄は JavaScript (<code>hiddenInput.focus()</code> など) を使用してもフォーカスを与えることはできません。</p>
</div>

<h2 id="Value" name="Value">値</h2>

<p>{{HTMLElement("input")}} 要素の {{htmlattrxref("value", "input")}} 属性は、フォームをサーバーに送信する時に含めたい隠しデータを含みます。これは特に、ユーザーインターフェイスを通じで編集したり確認したりすることはできませんが、ブラウザーの開発者ツールから値を編集することはできます。</p>

<div class="warning">
<p>ページのコンテンツ内では値がユーザーに表示されませんが、ブラウザーの開発者ツールや「ソースを表示」機能を使用して、見たり編集したりすることができます。 <code>hidden</code> の入力欄をセキュリティの形として当てにしないでください。</p>
</div>

<h2 id="Additional_attributes" name="Additional_attributes">追加の属性</h2>

<p>すべての {{HTMLElement("input")}} 要素で共通する属性に加え、 <code>hidden</code> 型の入力欄は次の属性にも対応しています。</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">属性</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code><a href="#name">name</a></code></td>
   <td>他の入力型と同様、フォームを送信した場合に報告される入力欄の名前です。特殊な値 <code>_charset_</code> は、その入力欄の値がフォームの送信に使用される文字エンコーディングとして報告されます。</td>
  </tr>
 </tbody>
</table>

<h3 id="htmlattrdefname">{{htmlattrdef("name")}}</h3>

<p>これは実際には共通の属性の一つですが、隠し入力欄では特別な用途を持っています。通常、 {{htmlattrxref("name", "input")}} 属性は隠し属性でも他の入力欄と同様に機能します。しかし、フォームが送信された時、 <code>name</code> が <code>_charset_</code> に設定された隠し入力欄は、自動的にフォームを送信するのに使用される文字エンコーディングの値として報告されます。</p>

<h2 id="Using_hidden_inputs" name="Using_hidden_inputs">隠し入力欄の利用</h2>

<p>前述の通り、隠し入力欄はフォームに、一緒にサーバーに送信される、ユーザーが表示または編集できないデータを含めたい場合はどこでも使用できます。使い方を示すいくつかの例をご覧ください。</p>

<h3 id="Tracking_edited_content" name="Tracking_edited_content">編集された内容の追跡</h3>

<p>隠し入力欄のもっとも一般的な用途は、編集フォームを送信したときに、データベースのどのレコードを更新する必要があるかを追跡することです。一般的なワークフローは次のようなものです。</p>

<ol>
 <li>ユーザーはブログの記事や製品の項目など、管理権を持っているコンテンツの編集することにします。編集ボタンを押して始めます。</li>
 <li>編集するコンテンツがデータベースから取得され、 HTML フォーム内に読み込まれてユーザーが編集できるようになります。</li>
 <li>編集後、ユーザーはフォームを送信し、更新されたデータがサーバーに送り返されてデータベースを更新します。</li>
</ol>

<p>この考え方はステップ2で、更新するレコードの ID を隠し入力欄で保持しておきます。ステップ3でフォームが送信されたとき、 ID は自動的にレコードの中身と共にサーバーに送り返されます。サイトのサーバー側コンポーネントは、 ID によって送信されたデータでどのレコードを更新する必要があるかを正しく特定することができます。</p>

<p>以下の<a href="#examples">例</a>の節で、これがどのように見えるかを示す例全体を見ることができます。</p>

<h3 id="Improving_website_security" name="Improving_website_security">ウェブサイトのセキュリティの改善</h3>

<p>隠し入力欄は、ウェブサイトのセキュリティを高めるためにセキュリティトークンや秘密を格納しておくことができます。基本的な考え方としては、例えばオンラインバンキングで他の口座に送金するためのフォームなど、機密を要するフォームにユーザーが記入するときに、秘密を提供することで自分が誰であるか、正しいフォームを利用して送金リクエストを行っているかを証明することができます。</p>

<p>これで悪意のあるユーザーが偽のフォームを作成して、銀行に成りすまし、騙されやすいユーザーを騙して別なところに送金させるようなことを防ぐことができます。この種の攻撃は<a href="/ja/docs/Learn/Server-side/First_steps/Website_security#Cross-Site_Request_Forgery_(CSRF)">クロスサイトリクエストフォージェリ (CSRF)</a> と呼ばれており、非常に多くの信頼されているサーバー側フレームワークがこのような攻撃を防ぐために隠した秘密を使用しています。</p>

<div class="note">
<p>前述のように、隠し入力欄に秘密を配置することは、本質的に安全ではありません。キーの組み合わせやエンコーディングによって実現されます。隠し入力欄の値は秘密とデータを関連付け、フォームがサーバーに送信されるときに自動的に含められます。本当にウェブサイトを安全にするには、よく設計された秘密を使用する必要があります。</p>
</div>

<h2 id="Validation" name="Validation">検証</h2>

<p>隠し入力欄は制約検証には関係しません。制約される実際の値を持たないからです。</p>

<h2 id="Examples" name="Examples">例</h2>

<p>以前に作成した編集フォーム (<a href="#tracking_edited_content">編集された内容の追跡</a>を参照) に、隠し入力欄を使用して編集するレコードの ID を記憶する簡単なバージョンを実装する方法を見てみましょう。</p>

<p>編集フォームの HTML はこのようになっているかもしれません。</p>

<pre class="brush: html notranslate">&lt;form&gt;
  &lt;div&gt;
    &lt;label for="title"&gt;Post title:&lt;/label&gt;
    &lt;input type="text" id="title" name="title" value="My excellent blog post"&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;label for="content"&gt;Post content:&lt;/label&gt;
    &lt;textarea id="content" name="content" cols="60" rows="5"&gt;
This is the content of my excellent blog post. I hope you enjoy it!
    &lt;/textarea&gt;
  &lt;/div&gt;
  &lt;div&gt;
    &lt;button type="submit"&gt;Update post&lt;/button&gt;
  &lt;/div&gt;
  &lt;input type="hidden" id="postId" name="postId" value="34657"&gt;
&lt;/form&gt;</pre>

<p>簡単な CSS も追加しましょう。</p>

<pre class="brush: css notranslate">html {
  font-family: sans-serif;
}

form {
  width: 500px;
}

div {
  display: flex;
  margin-bottom: 10px;
}

label {
  flex: 2;
  line-height: 2;
  text-align: right;
  padding-right: 20px;
}

input, textarea {
  flex: 7;
  font-family: sans-serif;
  font-size: 1.1rem;
  padding: 5px;
}

textarea {
  height: 60px;
}</pre>

<p>サーバーはフォームをユーザーのブラウザーに送信する前に、 ID が "<code>postID</code>" である隠し入力欄の値にデータベース内の投稿の ID を設定し、フォームが戻されたときにこの情報を、変更された情報を更新するデータベースのレコードを知るために使用します。コンテンツの中でこれを扱うためにスクリプトは必要はありません。</p>

<p>出力結果は次のようになります。</p>

<p>{{ EmbedLiveSample('Examples', '100%', 200) }}</p>

<div class="note">
<p><strong>注</strong>: この例は GitHub にもあります (<a href="https://github.com/mdn/learning-area/blob/master/html/forms/hidden-input-example/index.html">ソースコード</a>および<a href="https://mdn.github.io/learning-area/html/forms/hidden-input-example/index.html">ライブでの動作の確認</a>も参照してください)。</p>
</div>

<p>送信されるとき、サーバーへ送信されるフォームデータは以下のようになります。</p>

<p><code>title=My+excellent+blog+post&amp;content=This+is+the+content+of+my+excellent+blog+post.+I+hope+you+enjoy+it!&amp;postId=34657</code></p>

<p>隠し入力欄は全く表示されなくても、データは送信されています。</p>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">状態</th>
   <th scope="col">備考</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName('HTML WHATWG', 'forms.html#hidden-state-(type=hidden)', '&lt;input type="hidden"&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td>初回定義</td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5.2', 'sec-forms.html#hidden-state-typehidden', '&lt;input type="hidden"&gt;')}}</td>
   <td>{{Spec2('HTML5.2')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.elements.input.input-hidden")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Learn/HTML/Forms">HTML フォームガイド</a></li>
 <li>{{HTMLElement("input")}} および {{domxref("HTMLInputElement")}} インターフェイス</li>
</ul>
