---
title: JavaScript によるフォームの送信
slug: Learn/Forms/Sending_forms_through_JavaScript
tags:
  - Advanced
  - Example
  - Forms
  - Forms Guide
  - Guide
  - HTML
  - HTML forms
  - JavaScript
  - Learn
  - Security
  - Web
  - Web Forms
translation_of: Learn/Forms/Sending_forms_through_JavaScript
---
<div>{{LearnSidebar}}</div>

<p><span class="seoSummary">HTML フォームは <a href="/ja/docs/Web/HTTP">HTTP</a> リクエストを宣言的に送信できます。しかし、フォームは 、例えば <code>XMLHttpRequest</code> のように JavaScript 経由で送信する HTTP リクエストを準備することもできます。この記事ではその方法を探ります。</span></p>

<h2 id="A_form_is_not_always_a_form" name="A_form_is_not_always_a_form">フォームは必ずしもフォームであるとは限らない</h2>

<p>PWA や SPA やフレームワークベースのアプリが現れたことで、<a href="/ja/docs/HTML/Forms" title="HTML/Forms">HTML フォーム</a>を、応答データを受け取ったときに、新しい文書を読み込むことなくデータ送信するのに使用することが次第に一般的になってきました。最初になぜいろいろなアプローチが必要となるのかを話しましょう。</p>

<h3 id="Gaining_control_of_the_global_interface" name="Gaining_control_of_the_global_interface">グローバルインターフェイスの制御を取得</h3>

<p>次の記事で述べる標準の HTML フォーム送信では、データが送信された URL がロードされます。つまり、ブラウザーウィンドウは全ページロードで移動します。ページ全体の読み込みを回避すると、ちらつきのような視覚上の問題や、ネットワークの遅延を避けて、よりスムーズな操作を提供できます。</p>

<p>最近の多くの UI は、HTML フォームを使用してユーザーからの入力を収集します。ユーザーがデータを送信しようとすると、アプリケーションはバックグラウンドでデータを非同期的に制御して送信し、変更が必要な UI の部分のみを更新します。</p>

<p>任意のデータを非同期に送信することは、<strong>"Asynchronous JavaScript And XML" </strong>を表す頭字語である <a href="/ja/docs/AJAX" title="AJAX">AJAX</a> として知られています。</p>

<h3 id="How_is_it_different" name="How_is_it_different">その違いは?</h3>

<p>{{domxref("XMLHttpRequest")}} (XHR) DOM オブジェクトで HTTP リクエストを作成して送信し、結果を取得することができます。歴史的には、{{domxref("XMLHttpRequest")}} は交換フォーマットとして <a href="/ja/docs/XML_Introduction">XML</a> を取得して送信するように設計されていました。しかし、<a href="/ja/docs/Glossary/JSON">JSON</a> は XML に取って代わっています。しかし、XML も JSON もフォームデータリクエストのエンコーディングには適合しません。フォームデータ (<code>application/x-www-form-urlencoded</code>) は、キーと値のペアの URL エンコードされたリストで構成されています。バイナリーデータを送信するために、HTTP リクエストは <code>multipart/form-data</code> に再形成されます<strong>。</strong></p>

<div class="blockIndicator note">
<p><strong>注記</strong>: <a href="/ja/docs/Web/API/Fetch_API">Fetch API</a> は最近 XHR の代わりによく使われます — これは XHR のモダンで更新されたバージョンであり、同様に動作しますが利点もあります。この記事で見る大半の XHR コードは Fetch で置き換えられます。</p>
</div>

<p>フロントエンド (ブラウザーで実行されるコード) とバックエンド (サーバーで実行されるコード) を制御すれば、JSON/XML を送信して必要に応じて処理することができます。</p>

<p>しかし、サードパーティのサービスを利用したい場合、サービスが要求する零式でデータ送信する必要があります。</p>

<p>ではどのようにしてそのようなデータを送信するのでしょうか?以下に必要となるさまざまなテクニックがあります。</p>

<h2 id="Sending_form_data" name="Sending_form_data">フォームデータの送信</h2>

<p>フォームデータを送信するには、従来の方法から新しい {{domxref("FormData")}} オブジェクトまで 3 つの方法があります。それらを詳しく見てみましょう。</p>

<h3 id="Building_an_XMLHttpRequest_manually" name="Building_an_XMLHttpRequest_manually">手作業での XMLHttpRequest の作成</h3>

<p>{{domxref("XMLHttpRequest")}} は、HTTP リクエストを作成する最も安全で信頼性の高い方法です。{{domxref("XMLHttpRequest")}} を使用してフォームデータを送信するには、URL エンコードしたデータを準備し、フォームデータリクエストの詳細に従ってください。</p>

<p>例を見てみましょう:</p>

<pre class="brush: html notranslate">&lt;button&gt;Click Me!&lt;/button&gt;</pre>

<p>JavaScript はこうです:</p>

<pre class="brush: js notranslate">const btn = document.querySelector('button');

function sendData( data ) {
  console.log( 'Sending data' );

  const XHR = new XMLHttpRequest();

  let urlEncodedData = "",
      urlEncodedDataPairs = [],
      name;

  // data オブジェクトを、URL エンコードしたキーと値のペアの配列に変換します
  for( name in data ) {
    urlEncodedDataPairs.push( encodeURIComponent( name ) + '=' + encodeURIComponent( data[name] ) );
  }

 // キーと値のペアをひとつの文字列に連結して、Web ブラウザーのフォーム送信方式に
 // 合うよう、エンコードされた空白をプラス記号に置き換えます。
  urlEncodedData = urlEncodedDataPairs.join( '&amp;' ).replace( /%20/g, '+' );

  // データが正常に送信された場合に行うことを定義します
  XHR.addEventListener( 'load', function(event) {
    alert( 'Yeah! Data sent and response loaded.' );
  } );

  // エラーが発生した場合に行うことを定義します
  XHR.addEventListener( 'error', function(event) {
    alert( 'Oops! Something went wrong.' );
  } );

  // リクエストをセットアップします
  XHR.open( 'POST', 'https://example.com/cors.php' );

  // フォームデータの POST リクエストを扱うために必要な HTTP ヘッダを追加します
  XHR.setRequestHeader( 'Content-Type', 'application/x-www-form-urlencoded' );

  // 最後に、データを送信します
  XHR.send( urlEncodedData );
}

btn.addEventListener( 'click', function() {
  sendData( {test:'ok'} );
} )
</pre>

<p>そして、結果は以下のとおりです:</p>

<p>{{EmbedLiveSample("Building_an_XMLHttpRequest_manually", "100%", 50)}}</p>

<div class="note">
<p><strong>注記:</strong> この {{domxref("XMLHttpRequest")}} の使用は、第三者の Web サイトにデータを送信したい場合にも、同一生成元ポリシーの対象となります。クロスオリジンリクエストの場合は、<a href="/ja/docs/Web/HTTP/CORS">CORS と HTTP のアクセス制御</a>が必要です。</p>
</div>

<h3 id="Using_XMLHttpRequest_and_the_FormData_object" name="Using_XMLHttpRequest_and_the_FormData_object">XMLHttpRequest と FormData オブジェクトの使用</h3>

<p>HTTP リクエストを手作業で作成するのは大変なことです。幸いなことに、最近の <a href="http://www.w3.org/TR/XMLHttpRequest/">XMLHttpRequest 仕様</a>では {{domxref("FormData")}} オブジェクトを使ってフォームデータリクエストを処理する便利で簡単な方法が提供されています。</p>

<p>{{domxref("FormData")}} オブジェクトは、送信用のフォームデータを作成したり、送信方法を管理するフォーム要素内のデータを取得するために使用できます。{{domxref("FormData")}} オブジェクトは "書き込み専用" であることに注意してください。つまり、変更することはできますが、内容を取得することはできません。</p>

<p>このオブジェクトの使い方は <a href="/ja/docs/Web/API/FormData/Using_FormData_Objects">FormData オブジェクトの使用</a>で詳述されていますが、2 つの例があります。</p>

<h4 id="Using_a_standalone_FormData_object" name="Using_a_standalone_FormData_object">独立した FormData オブジェクトを使用する</h4>

<pre class="brush: html notranslate">&lt;button type="button" onclick="sendData({test:'ok'})"&gt;Click Me!&lt;/button&gt;</pre>

<p>HTML のサンプルはおわかりでしょう。JavaScript はこうです。</p>

<pre class="brush: js notranslate">const btn = document.querySelector('button');

function sendData(data) {
  const XHR = new XMLHttpRequest(),
        FD  = new FormData();

  // データを FormData オブジェクトに投入します
  for(name in data) {
    FD.append(name, data[name]);
  }

  // データが正常に送信された場合に行うことを定義します
  XHR.addEventListener('load', function(event) {
    alert('Yeah! Data sent and response loaded.');
  });

  // エラーが発生した場合に行うことを定義します
  XHR.addEventListener('error', function(event) {
    alert('Oups! Something goes wrong.');
  });

  // リクエストをセットアップします
  XHR.open('POST', 'http://ucommbieber.unl.edu/CORS/cors.php');

  // FormData オブジェクトを送信するだけです。HTTP ヘッダは自動的に設定されます
  XHR.send(FD);
}</pre>

<p>そして、結果は以下のとおりです:</p>

<p>{{EmbedLiveSample("Using_a_standalone_FormData_object", "100%", 50)}}</p>

<h4 id="Using_FormData_bound_to_a_form_element" name="Using_FormData_bound_to_a_form_element">form 要素に紐づけた FormData を使用する</h4>

<p><code>FormData</code> オブジェクトを {{HTMLElement("form")}} 要素に紐づけることもできます。これにより、フォームに含まれるデータを表す <code>FormData</code> をすばやく得ることができます。</p>

<p>HTML の部分はかなり典型的です:</p>

<pre class="brush: html notranslate">&lt;form id="myForm"&gt;
  &lt;label for="myName"&gt;Send me your name:&lt;/label&gt;
  &lt;input id="myName" name="name" value="John"&gt;
  &lt;input type="submit" value="Send Me!"&gt;
&lt;/form&gt;</pre>

<p>しかし、JavaScript がフォームを乗っ取ります。</p>

<pre class="brush: js notranslate">window.addEventListener("load", function () {
  function sendData() {
    const XHR = new XMLHttpRequest();

    // FormData オブジェクトと form 要素を紐づけます
    const FD  = new FormData(form);

    // データが正常に送信された場合に行うことを定義します
    XHR.addEventListener("load", function(event) {
      alert(event.target.responseText);
    });

    // エラーが発生した場合に行うことを定義します
    XHR.addEventListener("error", function(event) {
      alert('Oups! Something goes wrong.');
    });

    // リクエストをセットアップします
    XHR.open("POST", "http://ucommbieber.unl.edu/CORS/cors.php");

    // 送信したデータは、ユーザーがフォームで提供したものです
    XHR.send(FD);
  }

  // form 要素にアクセスしなければなりません
  const form = document.getElementById("myForm");

  // フォームの submit イベントを乗っ取ります
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    sendData();
  });
});</pre>

<p>そして、結果は以下のとおりです:</p>

<p>{{EmbedLiveSample("Using_FormData_bound_to_a_form_element", "100%", 50)}}</p>

<p>フォームの {{domxref("HTMLFormElement.elements", "elements")}} プロパティを使用してフォーム内のすべてのデータ要素のリストを取得し、それらを一度に 1 つずつ手動で管理することで、このプロセスにさらに関わることができます。詳細については、{{SectionOnPage("/ja/docs/Web/API/HTMLFormElement.elements", "要素リストの内容にアクセスする")}}の例を参照してください。</p>

<h2 id="Dealing_with_binary_data" name="Dealing_with_binary_data">バイナリーデータを扱う</h2>

<p><code>&lt;input type="file"&gt;</code> ウィジェットを含むフォームで {{domxref("FormData")}} オブジェクトを使用すると、データは自動的に処理されます。しかし、バイナリーデータを手動で送るには、追加でやるべきことがあります。</p>

<p>現代の Web には、バイナリーデータのソースが多数あります。たとえば、{{domxref("FileReader")}}、{{domxref("HTMLCanvasElement","Canvas")}}、<a href="/ja/docs/Web/API/Navigator/getUserMedia">WebRTC</a> などです。残念ながら、一部の従来のブラウザーではバイナリーデータにアクセスできないか、または複雑な回避策が必要です。これらのレガシーケースはこの記事の範囲外です。<code>FileReader</code> API について詳しく知りたい場合は、<a href="/ja/docs/Web/API/File/Using_files_from_web_applications">Web アプリケーションからファイルを扱う</a>を読んでください。</p>

<p>{{domxref("FormData")}} をサポートするバイナリーデータを送信するのは簡単です。<code>append()</code> メソッドを使用すれば完了です。手動でやらなければならないならば、それはトリッキーです。</p>

<p>以下の例ではバイナリーデータへのアクセスに {{domxref("FileReader")}} API を使用しており、また手作業でマルチパートのフォームデータを作成しています:</p>

<pre class="brush: html notranslate">&lt;form id="myForm"&gt;
  &lt;p&gt;
    &lt;label for="i1"&gt;text data:&lt;/label&gt;
    &lt;input id="i1" name="myText" value="Some text data"&gt;
  &lt;/p&gt;
  &lt;p&gt;
    &lt;label for="i2"&gt;file data:&lt;/label&gt;
    &lt;input id="i2" name="myFile" type="file"&gt;
  &lt;/p&gt;
  &lt;button&gt;Send Me!&lt;/button&gt;
&lt;/form&gt;</pre>

<p>ご覧のとおり、HTML は標準の <code>&lt;form&gt;</code> です。不思議なところは何もありません。「魔法」は JavaScript にあります。</p>

<pre class="brush: js notranslate">// DOM ノードにアクセスしたいため、
// ページをロードしたときにスクリプトを初期化します。
window.addEventListener('load', function () {

  // この変数は、フォームデータを格納するために使用します。
  const text = document.getElementById("i1");;
  const file = {
        dom    : document.getElementById("i2"),
        binary : null
      };

  // ファイルコンテンツへのアクセスに FileReader API を使用します。
  const reader = new FileReader();

  // FileReader API は非同期であるため、ファイルの読み取りが完了したときに
  // その結果を保存しなければなりません。
  reader.addEventListener("load", function () {
    file.binary = reader.result;
  });

  // ページを読み込んだとき、すでに選択されているファイルがあればそれを読み取ります。
  if(file.dom.files[0]) {
    reader.readAsBinaryString(file.dom.files[0]);
  }

  // 一方、ユーザーがファイルを選択したらそれを読み取ります。
  file.dom.addEventListener("change", function () {
    if(reader.readyState === FileReader.LOADING) {
      reader.abort();
    }

    reader.readAsBinaryString(file.dom.files[0]);
  });

  // sendData 関数がメインの関数です。
  function sendData() {
    // 始めに、ファイルが選択されている場合はファイルの読み取りを待たなければなりません。
    // そうでない場合は、関数の実行を遅延させます。
    if(!file.binary &amp;&amp; file.dom.files.length &gt; 0) {
      setTimeout(sendData, 10);
      return;
    }

    // マルチパートのフォームデータリクエストを構築するため、
    // XMLHttpRequest のインスタンスが必要です。
    const XHR      = new XMLHttpRequest();

    // リクエストの各パートを定義するためのセパレータが必要です。
    const boundary = "blob";

    // 文字列としてリクエストのボディを格納します。
    let data     = "";

    // そして、ユーザーがファイルを選択したときに
    if (file.dom.files[0]) {
      // リクエストのボディに新たなパートを作ります
      data += "--" + boundary + "\r\n";

      // フォームデータであることを示します (他のものになる場合もあります)
      data += 'content-disposition: form-data; '
      // フォームデータの名前を定義します
            + 'name="'         + file.dom.name          + '"; '
      // 実際のファイル名を与えます
            + 'filename="'     + file.dom.files[0].name + '"\r\n';
      // ファイルの MIME タイプを与えます
      data += 'Content-Type: ' + file.dom.files[0].type + '\r\n';

      // メタデータとデータの間に空行を置きます
      data += '\r\n';

      // リクエストのボディにバイナリーデータを置きます
      data += file.binary + '\r\n';
    }

    // テキストデータの場合はシンプルです。
    // リクエストのボディに新たなパートを作ります
    data += "--" + boundary + "\r\n";

    // フォームデータであることと、データの名前を示します。
    data += 'content-disposition: form-data; name="' + text.name + '"\r\n';
    // メタデータとデータの間に空行を置きます
    data += '\r\n';

    // リクエストのボディにテキストデータを置きます。
    data += text.value + "\r\n";

    // 完了したら、リクエストのボディを "閉じます"。
    data += "--" + boundary + "--";

    // データが正常に送信された場合に行うことを定義します
    XHR.addEventListener('load', function(event) {
      alert('Yeah! Data sent and response loaded.');
    });

    // エラーが発生した場合に行うことを定義します
    XHR.addEventListener('error', function(event) {
      alert('Oups! Something goes wrong.');
    });

    // リクエストをセットアップします
    XHR.open('POST', 'http://ucommbieber.unl.edu/CORS/cors.php');

    // マルチパートのフォームデータの POST リクエストを扱うために必要な HTTP ヘッダを追加します。
    XHR.setRequestHeader('Content-Type','multipart/form-data; boundary=' + boundary);
    XHR.setRequestHeader('Content-Length', data.length);

    // 最後に、データを送信します
    // Firefox のバグ 416178 により、send() の代わりに sendAsBinary() を使用することが必要です。
    XHR.sendAsBinary(data);
  }

  // 少なくとも、フォームにアクセスしなければなりません。
  const form   = document.getElementById("myForm");

  // submit イベントを乗っ取ります。
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    sendData();
  });
});</pre>

<p>そして、結果は以下のとおりです:</p>

<p>{{EmbedLiveSample("Dealing_with_binary_data", "100%", 150)}}</p>

<h2 id="Conclusion" name="Conclusion">まとめ</h2>

<p>ブラウザーや扱うデータタイプによっては、JavaScript を介してフォームデータを送信するのが簡単な場合と難しい場合があります。{{domxref("FormData")}} オブジェクトが一般的な答えであり、レガシーブラウザーで <a href="https://github.com/jimmywarting/FormData">polyfill</a> を使用することをためらってはいけません。</p>

<h2 id="In_this_module" name="In_this_module">このモジュール</h2>

<h3 id="学習コース">学習コース</h3>

<ul>
 <li><a href="/ja/docs/Learn/HTML/Forms/Your_first_HTML_form">初めての HTML フォーム</a></li>
 <li><a href="/ja/docs/Learn/HTML/Forms/How_to_structure_an_HTML_form">HTML フォームの構築方法</a></li>
 <li><a href="/ja/docs/Learn/HTML/Forms/The_native_form_widgets">ネイティブフォームウィジェット</a></li>
 <li><a href="/ja/docs/Learn/HTML/Forms/Sending_and_retrieving_form_data">フォームデータの送信</a></li>
 <li><a href="/ja/docs/Learn/HTML/Forms/Data_form_validation">フォームデータの検証</a></li>
 <li><a href="/ja/docs/Learn/HTML/Forms/How_to_build_custom_form_widgets">カスタムフォームウィジェットの作成方法</a></li>
 <li><a href="/ja/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript">JavaScript によるフォームの送信</a></li>
 <li><a href="/ja/docs/Learn/HTML/Forms/HTML_forms_in_legacy_browsers">古いブラウザーでの HTML フォーム</a></li>
 <li><a href="/ja/docs/Learn/HTML/Forms/Styling_HTML_forms">HTML フォームへのスタイル設定</a></li>
 <li><a href="/ja/docs/Learn/HTML/Forms/Advanced_styling_for_HTML_forms">HTML フォームへの高度なスタイル設定</a></li>
 <li><a href="/ja/docs/Property_compatibility_table_for_form_widgets">フォームウィジェット向けプロパティ実装状況一覧</a></li>
</ul>

<h3 id="上級トピック">上級トピック</h3>

<ul>
 <li><a href="/ja/docs/Learn/HTML/Forms/Sending_forms_through_JavaScript">Sending forms through JavaScript</a></li>
 <li><a href="/ja/docs/Learn/HTML/Forms/How_to_build_custom_form_widgets">How to build custom form widgets</a></li>
 <li><a href="/ja/docs/Learn/HTML/Forms/HTML_forms_in_legacy_browsers">HTML forms in legacy browsers</a></li>
 <li><a href="/ja/docs/Learn/HTML/Forms/Advanced_styling_for_HTML_forms">Advanced styling for HTML forms</a></li>
 <li><a href="/ja/docs/Learn/HTML/Forms/Property_compatibility_table_for_form_widgets">Property compatibility table for form widgets</a></li>
</ul>
