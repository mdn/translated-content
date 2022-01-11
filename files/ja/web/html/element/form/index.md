---
title: <form>
slug: Web/HTML/Element/form
tags:
  - HTML
  - HTML フォーム
  - 'HTML:フローコンテンツ'
  - 'HTML:知覚可能コンテンツ'
  - Reference
  - ウェブ
  - フォーム
  - 要素
translation_of: Web/HTML/Element/form
---
<div>{{HTMLRef}}</div>

<p><strong>HTML の <code>&lt;form&gt;</code> 要素</strong>は、ウェブサーバーに情報を送信するための対話型コントロールを含む文書の区間を表します。</p>

<div>{{EmbedInteractiveExample("pages/tabbed/form.html", "tabbed-standard")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p><code>&lt;form&gt;</code> 要素には、 CSS の {{cssxref(':valid')}} および {{cssxref(':invalid')}} 疑似クラスを使用して整形することが可能です。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ja/docs/Web/Guide/HTML/Content_categories">コンテンツカテゴリ</a></th>
   <td><a href="/ja/docs/Web/Guide/HTML/Content_categories#Flow_content">フローコンテンツ</a>, <a href="/ja/docs/Web/Guide/HTML/Content_categories#Palpable_content">知覚可能コンテンツ</a></td>
  </tr>
  <tr>
   <th scope="row">許可されている内容</th>
   <td><a href="/ja/docs/Web/Guide/HTML/Content_categories#Flow_content">フローコンテンツ</a>。ただし、<code>&lt;form&gt;</code> 要素の中に別の <code>&lt;form&gt;</code> 要素を内包することは許可されていません。</td>
  </tr>
  <tr>
   <th scope="row">タグの省略</th>
   <td>{{no_tag_omission}}</td>
  </tr>
  <tr>
   <th scope="row">許可されている親要素</th>
   <td><a href="/ja/docs/Web/Guide/HTML/Content_categories#Flow_content">フローコンテンツ</a>を受け入れるすべての要素</td>
  </tr>
  <tr>
   <th scope="row">許可されている ARIA ロール</th>
   <td>{{ARIARole("group")}}, {{ARIARole("presentation")}}</td>
  </tr>
  <tr>
   <th scope="row">DOM インターフェイス</th>
   <td>{{domxref("HTMLFormElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Attributes" name="Attributes">属性</h2>

<p>この要素には<a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>があります。</p>

<dl>
 <dt>{{htmlattrdef("accept")}} {{HTMLVersionInline(4)}} {{obsolete_inline}}</dt>
 <dd>サーバーが受け付けるコンテンツ型のコンマ区切りリスト。
 <div class="note"><strong>使用上のメモ:</strong> この属性は HTML5 の仕様から削除されており、すでに使用不可となっています。代わりに個々の {{HTMLElement("input")}} 要素の {{htmlattrxref("accept", "input")}} 属性を使用してください。</div>
 </dd>
 <dt>{{htmlattrdef("accept-charset")}}</dt>
 <dd>サーバーが受け入れる文字エンコーディングのリスト。リストはスペースまたはコンマで区切ることができます。ブラウザーは、それらがリストされている順序を優先順位として使用します。既定値である予約語 <code>"UNKNOWN"</code> は、 form 要素を含む文書のエンコーディングと同じであることを示します。<br>
 以前のバージョンの HTML では、さまざまな文字エンコーディングをスペースまたはコンマで区切ることができました。これは HTML5 ではあてはまらず、スペースだけが適切です。</dd>
 <dt>{{htmlattrdef("action")}}</dt>
 <dd>フォーム経由で送信された情報を処理するプログラムの URI。この値は {{HTMLElement("button")}}, <code><a href="/ja/docs/Web/HTML/Element/input/submit">&lt;input type="submit"&gt;</a></code>, <code><a href="/ja/docs/Web/HTML/Element/input/image">&lt;input type="image"&gt;</a></code> の {{htmlattrxref("formaction", "button")}} 属性によって上書きすることが可能です。</dd>
 <dt>{{htmlattrdef("autocapitalize")}} {{non-standard_inline}}</dt>
 <dd>これは iOS 版 Safari Mobile で使用する非標準属性であり、子孫の文字列型フォームコントロールでユーザーが入力または編集したテキスト値を自動的に大文字に変換するか否か、またどのように変換するかを制御します。<code>autocapitalize</code> 属性を個別にフォームコントロール子孫要素で指定した場合は、フォーム全体に設定した <code>autocapitalize</code> より優先します。非推奨とされていない値は、iOS 5 以降で使用できます。既定値は <code>sentences</code> です。以下の値を指定できます。
 <ul>
  <li><code>none</code>: 自動大文字化機能を無効にします。</li>
  <li><code>sentences</code>: 文の先頭文字を自動的に大文字化します。</li>
  <li><code>words</code>: 単語の先頭文字を自動的に大文字化します。</li>
  <li><code>characters</code>: すべての文字を自動的に大文字化します。</li>
  <li><code>on</code>: {{deprecated_inline}} iOS 5 から非推奨です。</li>
  <li><code>off</code>: {{deprecated_inline}} iOS 5 から非推奨です。</li>
 </ul>
 </dd>
 <dt>{{htmlattrdef("autocomplete")}} {{HTMLVersionInline(5)}}</dt>
 <dd>input 要素が既定で、ブラウザーによる値の入力補完を受けるかを示します。この設定はフォームに属する要素の <code>autocomplete</code> 属性で上書きできます。以下の値が指定可能です。
 <ul>
  <li><code>off</code>: ユーザーは、フォームを使用するたびにすべての値を入力するか、もしくは独自の入力補完を使用する必要があります。ブラウザーが入力補完をサポートすることはありません。</li>
  <li><code>on</code>: ブラウザーはユーザーが以前に入力した値に基づき、これを自動補完のための候補として使用することができます。</li>
 </ul>
 ほとんどの現行ブラウザー (Firefox 38+、Google Chrome 34+、IE 11+ など) では autocomplete 属性を設定しても、ブラウザーのパスワードマネージャーがユーザーにログイン情報 (ユーザー名やパスワード) を保存したいかを問い合わせる、またユーザーが同意した場合に次回以降ページを訪れた際にログイン情報を自動入力することは抑制できません。<a href="/ja/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#autocomplete_属性とログインフィールド">autocomplete 属性とログインフィールド</a>をご覧ください。</dd>
 <dd>
 <div class="note">
 <p><strong>メモ:</strong> 文書で独自の入力補完を提供するために <code>autocomplete</code> を <code>off</code> に設定する場合は、フォーム内で入力補完が可能なそれぞれの <code>input</code> 要素でも <code>autocomplete</code> を <code>off</code> に設定するべきです。詳しくは、<a href="#Browser_compatibility">互換性一覧表</a>の Google Chrome に関するメモを参照してください。</p>
 </div>
 </dd>
 <dt>{{htmlattrdef("enctype")}}</dt>
 <dd><code>method</code> 属性の値が <code>post</code> であるとき、この属性はフォームをサーバーに送信する際に使用する、コンテンツの <a href="https://en.wikipedia.org/wiki/Mime_type">MIME タイプ</a>を示します。以下の値が指定可能です。
 <ul>
  <li><code>application/x-www-form-urlencoded</code>: 初期値。属性を指定していない場合、この値が使用されます。</li>
  <li><code>multipart/form-data</code>: <code>type</code> 属性で "file" を指定した {{HTMLElement("input")}} 要素のために使用する値です。</li>
  <li><code>text/plain</code>: (HTML5)</li>
 </ul>

 <p>この値は、 {{HTMLElement("button")}}, <code><a href="/ja/docs/Web/HTML/Element/input/submit">&lt;input type="submit"&gt;</a></code>, <code><a href="/ja/docs/Web/HTML/Element/input/image">&lt;input type="image"&gt;</a></code> の {{htmlattrxref("formenctype", "button")}} 属性によって上書きすることが可能です。</p>
 </dd>
 <dt>{{htmlattrdef("method")}}</dt>
 <dd>フォームを送信する際にブラウザーが使用する <a href="/ja/docs/Web/HTTP">HTTP</a> メソッドです。以下の値が指定可能です。
 <ul>
  <li><code>post</code>: HTTP <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5">POST メソッド</a>に相当します。フォームのデータはボディに収めてサーバーに送信します。</li>
  <li><code>get</code>: HTTP <a href="https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3">GET メソッド</a>に相当します。フォームのデータは '?' をセパレーターとして <code>action</code> 属性の URI に追加して、その結果となる URI をサーバにー送信します。フォームが ASCII 文字列だけを含み、まったく副作用がない場合にのみ、このメソッドを使用してください。</li>
  <li><code>dialog</code>: フォームが {{HTMLElement("dialog")}} 要素の中にある場合に使用し、送信するとダイアログが閉じます。</li>
 </ul>

 <p>この値は、 {{HTMLElement("button")}}, <code><a href="/ja/docs/Web/HTML/Element/input/submit">&lt;input type="submit"&gt;</a></code>, <code><a href="/ja/docs/Web/HTML/Element/input/image">&lt;input type="image"&gt;</a></code> の {{htmlattrxref("formmethod", "button")}} 属性によって上書きすることが可能です。</p>
 </dd>
 <dt>{{htmlattrdef("name")}}</dt>
 <dd>フォームの名前です。HTML 4 では推奨されていません（代わりに <code>id</code> を用いるべきです）。HTML 5 ではドキュメント内のフォーム間でユニークである必要があり、また空文字列であってはいけません。</dd>
 <dt>{{htmlattrdef("novalidate")}} {{HTMLVersionInline("5")}}</dt>
 <dd>フォームを送信するときに検証しないことを示す真偽値です。この属性を指定していない（つまり検証される）場合は、既定の設定を {{HTMLElement("button")}}, <code><a href="/ja/docs/Web/HTML/Element/input/submit">&lt;input type="submit"&gt;</a></code>, <code><a href="/ja/docs/Web/HTML/Element/input/image">&lt;input type="image"&gt;</a></code> の {{htmlattrxref("formnovalidate", "button")}} 属性で上書きすることが可能です。</dd>
 <dt>{{htmlattrdef("target")}}</dt>
 <dd>フォームを送信した後に受け取った応答の表示位置を示す名前またはキーワードです。これは、HTML 4 ではフレームの名前またはキーワードでした。HTML5 では、<em>閲覧コンテキスト</em> の名前またはキーワードです (例えば、タブ、ウィンドウ、インラインフレームなど)。以下のキーワードは特別な意味を持ちます:
 <ul>
  <li><code>_self</code>: 応答を現在と同じ HTML 4 フレーム (または HTML5 閲覧コンテキスト) に表示します。この値は、属性が指定されていない場合の既定値です。</li>
  <li><code>_blank</code>: 応答を新しい名前のつけられていない、HTML 4 ウィンドウまたは HTML5 の閲覧コンテキストに読み込みます。</li>
  <li><code>_parent</code>: 応答を現在のフレームの HTML 4 フレームセットの親要素または HTML5 の現在の親閲覧コンテキストに読み込みます。親要素がない場合、このオプションは <code>_self</code> と同じ振る舞いをします。</li>
  <li><code>_top</code>: HTML 4 では、応答を元のウィンドウ全体に読み込み、他のフレームをすべてキャンセルします。HTML5 では、応答をトップレベルの閲覧コンテキストに読み込みます (現在の閲覧コンテキストの祖先にあたり、それ以上親のない要素です)。親要素がない場合、このオプションは <code>_self</code> と同じ振る舞いをします。</li>
  <li><em>iframename</em>: 応答を、名前のついた {{HTMLElement("iframe")}} に読み込みます。</li>
 </ul>

 <p>HTML5: この値は、 {{HTMLElement("button")}}, <code><a href="/ja/docs/Web/HTML/Element/input/submit">&lt;input type="submit"&gt;</a></code>, <code><a href="/ja/docs/Web/HTML/Element/input/image">&lt;input type="image"&gt;</a></code> の {{htmlattrxref("formtarget", "button")}} 属性によって上書きすることが可能です。</p>
 </dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="HTML">HTML</h3>

<pre class="brush: html">&lt;!-- Simple form which will send a GET request --&gt;
&lt;form action="" method="get"&gt;
  &lt;label for="GET-name"&gt;Name:&lt;/label&gt;
  &lt;input id="GET-name" type="text" name="name"&gt;
  &lt;input type="submit" value="Save"&gt;
&lt;/form&gt;

&lt;!-- POST 要求を送信する簡単なフォーム --&gt;
&lt;form action="" method="post"&gt;
  &lt;label for="POST-name"&gt;Name:&lt;/label&gt;
  &lt;input id="POST-name" type="text" name="name"&gt;
  &lt;input type="submit" value="Save"&gt;
&lt;/form&gt;

&lt;!-- fieldset、legend、label を用いたフォームのマークアップの例 --&gt;
&lt;form action="" method="post"&gt;
  &lt;fieldset&gt;
    &lt;legend&gt;Title&lt;/legend&gt;
    &lt;input type="radio" name="radio" id="radio"&gt;
    &lt;label for="radio"&gt;Click me&lt;/label&gt;
  &lt;/fieldset&gt;
&lt;/form&gt;
</pre>

<p>{{ EmbedLiveSample('Examples', '100%', 110) }}</p>

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
   <td>{{SpecName('HTML WHATWG', 'forms.html#the-form-element', '&lt;form&gt;')}}</td>
   <td>{{Spec2('HTML WHATWG')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML5 W3C', 'forms.html#the-form-element', '&lt;form&gt;')}}</td>
   <td>{{Spec2('HTML5 W3C')}}</td>
   <td></td>
  </tr>
  <tr>
   <td>{{SpecName('HTML4.01', 'interact/forms.html#h-17.3', '&lt;form&gt;')}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.elements.form")}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Guide/HTML/Forms">HTML フォームガイド</a></li>
 <li>フォームの作成に使用される、その他の要素: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}},{{HTMLElement("keygen")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}</li>
 <li>フォーム内の要素一覧の取得: {{domxref("HTMLFormElement.elements")}}</li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Form_Role">ARIA: Form ロール</a></li>
 <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Search_role">ARIA: Search ロール</a></li>
</ul>
