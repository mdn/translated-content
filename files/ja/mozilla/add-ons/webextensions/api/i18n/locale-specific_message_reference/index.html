---
title: ロケール固有のメッセージ参照
slug: Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference
tags:
  - Internationalization
  - Localization
  - Reference
  - String
  - WebExtensions
  - i18n
  - message
  - message.json
  - placeholders
translation_of: Mozilla/Add-ons/WebExtensions/API/i18n/Locale-Specific_Message_reference
---
<p>国際化対応 (i18n) した拡張機能は、ロケール固有のメッセージを提供する少なくとも 1 個の <code>messages.json</code> というファイルを持っています。このページでは、<code>messages.json</code> の書式を説明します。</p>

<div class="note">
<p><strong>補足</strong>: 拡張機能を国際化する方法についての情報は、<a href="/ja/Add-ons/WebExtensions/WebExtension_i18n">i18n</a> ガイドを参照してください。</p>
</div>

<h2 id="messages.json_example">messages.json example</h2>

<p>次のコードは、<a href="https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n">notify-link-clicks-i18n example</a> 拡張機能から取られた <code>messages.json ファイル</code> の例示です。"<em>name</em>" と "message" のフィールドのみが必須です。</p>

<pre class="brush: json">{
  "extensionName": {
    "message": "Notify link clicks i18n",
    "description": "Name of the extension."
  },

  "extensionDescription": {
    "message": "ユーザーがリンクをクリックしたときに通知を表示します。",
    "description": "Description of the extension."
  },

  "notificationTitle": {
    "message": "クリック通知",
    "description": "Title of the click notification."
  },

  "notificationContent": {
    "message": "$URL$ をクリックしました。",
    "description": "Tells the user which link they clicked.",
    "placeholders": {
      "url" : {
        "content" : "$1",
        "example" : "https://developer.mozilla.org"
      }
    }
  }
}</pre>

<h2 id="Placement" name="Placement">ファイルの配置</h2>

<p><code>messages.json</code> ファイルは、サポートされたロケール名 (<code>en</code>, <code>de</code>, <code>ja</code> など) のディレクトリー内に置く必要があります。さらにこれらは、拡張機能のルートディレクトリ内の  <code>_locales</code> と呼ばれるディレクトリー内に置く必要があります。</p>

<h2 id="Member_details" name="Member_details">メンバーの詳細</h2>

<p>このセクションは、<code>messages.json</code> 内に記述される各メンバーについて説明します。</p>

<h3 id="name" name="name">name</h3>

<p>各トップレベルのメンバーは、ローカライズするメッセージ文字列の name の後に名付けられます。例えば、上記の例の <code>"extensionName"</code> や <code>"notificationContent"</code> です。name は大文字と小文字が区別され、ローカライズされたメッセージテキストを受け取るためのキーとして振る舞います。</p>

<p>name には、次の文字が使用できます:</p>

<ul>
 <li>A-Z</li>
 <li>a-z</li>
 <li>0-9</li>
 <li>_ (アンダースコア)</li>
 <li>@</li>
</ul>

<p class="note"><strong>注記:</strong> @@ で始まる name を定義してはいけません。この名前は <a href="/ja/Add-ons/WebExtensions/Internationalization#Predefined_messages">事前定義されたメッセージ</a> で予約されています。</p>

<h3 id="message" name="message">message</h3>

<p><code>"message"</code> メンバーは、<a href="#placeholders">placeholders</a> を含むことのできるローカライズされた文字列を含みます。次のように使用します:</p>

<ul>
 <li><em>$placeholder_name$</em> (大文字と小文字を区別) は、文字列に特定のプレースホルダー (例えば、上記の例の $URL$) を挿入します。</li>
 <li><code>$1</code>, <code>$2</code>,<code> $3</code> 等は、{{WebExtAPIRef("i18n.getMessage()")}} 呼び出し時に取得した値を文字列に直接挿入します。</li>
</ul>

<p>他の注意すべき点:</p>

<ul>
 <li>文字列の前後に現れるいくつかのドル記号は、その個数から 1 を引いた数分のドル記号に置き換えられます。つまり、$$ は $ に、$$$ は $$ になります。</li>
 <li>ロケールファイルの読み込み時に、<code>/\$([a-z0-9_@]+)\$/i</code> と一致するトークンは、文字列の "置き換え" オブジェクトからの一致する値に置き換えられます。これらの置換は、メッセージ内の任意の <code>/\$\d/</code> トークンの処理よりも優先して行われます。</li>
 <li>ロケール文字列が使用される時に、<code>/\$\d+/</code> と一致するトークンは、{{WebExtAPIRef("i18n.getMessage()")}} に渡される replacement に置き換えられます。</li>
 <li><code>getMessage()</code> は、placeholder/substitution の呼び出しを 9 個までしか処理しません。</li>
</ul>

<h3 id="description" name="description">description</h3>

<p>{{optional_inline}}</p>

<p><code>"description"</code> メンバーは、文字列に最適な訳語を作成する助けとなる情報を翻訳者に提供するために、メッセージ文字列の内容についての説明を含みます。</p>

<h3 id="placeholders" name="placeholders">placeholders</h3>

<p>{{optional_inline}}</p>

<p><code>"placeholders"</code> メンバーは、メッセージ内で使用されるいくつかのプレースホルダー補助文字列を定義します。これらは、翻訳してほしくないハードコードされたアイテムや変数を参照するアイテムに利用できます。</p>

<p>各プレースホルダー補助文字列の定義は、それ自身がいくつかの値を持っています:</p>

<pre class="brush: json">"url" : {
  "content" : "$1",
  "example" : "https://developer.mozilla.org"
}</pre>

<h4 id="placeholder_name" name="placeholder_name">プレースホルダー名</h4>

<p>プレースホルダー名は、補助文字列内の placeholder を表すために使用します (<code>"url"</code> は <code>$url$</code> になります)。これは、大文字と小文字が区別され、メッセージ文字列と同じ文字が使用できます <a href="#name">name</a>。</p>

<h4 id="content" name="content">content</h4>

<p>"content" アイテムは、placeholder の内容を定義します。これは、"My placeholder" などハードコードされた文字列にすることができますが、{{WebExtAPIRef("i18n.getMessage()")}} 呼び出しから取得した値も含められます。詳しい情報は、<a href="/ja/Add-ons/WebExtensions/Internationalization#Retrieving_message_strings_from_JavaScript">JavaScript からメッセージ文字列を取得する</a> を参照してください。</p>

<h4 id="example" name="example">example</h4>

<p>{{optional_inline}}</p>

<p>任意の "example" アイテムは、プレースホルダーがエンドユーザーにどのように表示されるかの例を示すことによって翻訳者を助けるためのものです。これにより、翻訳者がファイルをローカライズするときに最適な選択ができるようになるでしょう。</p>
