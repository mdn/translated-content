---
title: <keygen>
slug: Web/HTML/Element/keygen
tags:
  - Deprecated
  - Element
  - HTML
  - HTML5
  - Obsolete
  - Reference
  - Web
translation_of: Web/HTML/Element/keygen
---
<p>{{HTMLRef}}{{Obsolete_Header}}</p>

<p>HTML の <code>&lt;keygen&gt;</code> 要素は、鍵の材料の生成を容易にするため、および <a href="/ja/docs/Web/Guide/HTML/Forms">HTML フォーム</a>の一部として公開鍵を送信するための要素です。この仕組みは、ウェブベースの証明書管理システムと合わせて使用するものとして設計されています。証明書の要求に必要な他の情報を伴う HTML フォームで <code>&lt;keygen&gt;</code> 要素を使用して、その処理結果が署名済み証明書になることを想定しています。</p>

<table class="properties">
 <tbody>
  <tr>
   <th scope="row"><a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a></th>
   <td><a href="/ja/docs/Web/HTML/Content_categories#Flow_content">フローコンテンツ</a>, <a href="/ja/docs/Web/HTML/Content_categories#Phrasing_content">記述コンテンツ</a>, 対話型コンテンツ, <a href="/ja/docs/Web/HTML/Content_categories#Form_listed">リスト化</a>, <a href="/ja/docs/Web/HTML/Content_categories#Form_labelable">ラベル付け可能</a>, <a href="/ja/docs/Web/HTML/Content_categories#Form_submittable">サブミット可能</a>, <a href="/ja/docs/Web/HTML/Content_categories#Form_resettable">リセット可能</a>な<a href="/ja/docs/Web/HTML/Content_categories#Form-associated_content">フォーム関連要素</a>, 知覚可能コンテンツ</td>
  </tr>
  <tr>
   <th scope="row">許可されている内容</th>
   <td>なし。これは{{Glossary("empty element", "空要素")}}です。</td>
  </tr>
  <tr>
   <th scope="row">タグの省略</th>
   <td>開始タグは必須。終了タグを記述してはならない。</td>
  </tr>
  <tr>
   <th scope="row">許可されている親要素</th>
   <td><a href="/ja/docs/Web/HTML/Content_categories#Phrasing_content">記述コンテンツ</a>を受け入れるすべての要素</td>
  </tr>
  <tr>
   <th scope="row">許可されている ARIA ロール</th>
   <td>なし</td>
  </tr>
  <tr>
   <th scope="row">DOM インターフェイス</th>
   <td>{{DOMxRef("HTMLKeygenElement")}}</td>
  </tr>
 </tbody>
</table>

<h2 id="Attributes" name="Attributes">属性</h2>

<p>この要素は<a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>を持ちます。</p>

<dl>
 <dt>{{HTMLAttrDef("autofocus")}}</dt>
 <dd>この論理属性で、ユーザーが別のコントロールに入力するなどして変更しない限り、ページ読み込み時にこのコントロールがフォーカスを持つべきであることを指定できます。ドキュメント内のフォーム要素でひとつだけが <code>autofocus</code> 属性を持つことができ、これは真偽値です。</dd>
 <dt>{{HTMLAttrDef("challenge")}}</dt>
 <dd>公開鍵とともに送信するチャレンジ文字列です。指定しない場合の既定値は空文字列です。</dd>
 <dt>{{HTMLAttrDef("disabled")}}</dt>
 <dd>この論理属性は、フォームコントロールと対話できないことを示します。</dd>
 <dt>{{HTMLAttrDef("form")}}</dt>
 <dd>この要素が関連づけられた form 要素 (<em>フォームオーナー</em>)。属性の値は同一文書内の {{HTMLElement("form")}} 要素の <code>id</code> 属性の値でなければなりません。この属性を指定しない場合、この要素は {{HTMLElement("form")}} 要素の子孫要素として配置しなければなりません。この属性は <code>&lt;keygen&gt;</code> 要素を form 要素の子孫としてだけでなく、文書内のどこにでも配置することを可能にします。</dd>
 <dt>{{HTMLAttrDef("keytype")}}</dt>
 <dd>生成する鍵の種類。既定値は <code>RSA</code> です。</dd>
 <dt>{{HTMLAttrDef("name")}}</dt>
 <dd>コントロールの名前であり、フォームデータとともに送信されます。</dd>
</dl>

<p>この要素は以下のように記述します。</p>

<pre class="brush: html notranslate">&lt;keygen name="<var>name</var>" challenge="<var>challenge string</var>" keytype="<var>type</var>"
        keyparams="<var>pqg-params</var>"&gt;</pre>

<p><code>keytype</code> 引数は、生成する鍵の種類を指定します。有効な値は "<code>RSA</code>" (既定値)、"<code>DSA</code>"、"<code>EC</code>" です。<code>name</code> 属性と <code>challenge</code> 属性はすべての場合で必要です。<code>keytype</code> 属性は RSA 鍵の生成では省略可、DSA 鍵および EC 鍵の生成では必須です。<code>keyparams</code> 属性は DSA 鍵および EC 鍵の生成では必須、RSA 鍵の生成では無視されます。<code>PQG</code> は、<code>keyparams</code> の同意語です。つまり、<code>keyparams="pqg-params"</code> または <code>pqg="pqg-params"</code> と指定できます。</p>

<p>RSA 鍵では、<code>keyparams</code> 引数を使用しません (指定しても無視されます)。ユーザーは RSA 鍵の強度を選択できます。現在、ユーザーは "高" 強度 (2048 ビット) または "中" 強度 (1024 ビット) を選択できます。</p>

<p>DSA 鍵では <code>keyparams</code> 引数で、鍵の生成処理で使用する DSA PQG 引数を指定します。<code>pqg</code> 引数の値は、IETF <a class="link-ftp" href="ftp://ftp.rfc-editor.org/in-notes/rfc3279.txt">RFC 3279</a> で定めている DSS 引数を DER で符号化したものを、BASE64 で符号化したものです。ユーザーは DSA 鍵のサイズを、DSA 標準で定義されているサイズから1つ選択できます。</p>

<p>EC 鍵では <code>keyparams</code> 引数で、鍵が生成される楕円曲線の名前を指定します。これは通常、<a class="external" href="http://mxr.mozilla.org/mozilla-central/source/security/manager/ssl/src/nsKeygenHandler.cpp?mark=179-185,187-206,208-227,229-256#177">nsKeygenHandler.cpp</a> 内のテーブル由来の文字列です。(ここに名前がある曲線の一部だけが、実際に個々のブラウザーでサポートされている可能性がある点に注意してください) <code>keyparams</code> 引数文字列が認識できない曲線名である場合は、ユーザーが選択した鍵強度 (低、中、高) に基づいて曲線が選択されます。高強度は "<code>secp384r1</code>"、中強度は "<code>secp256r1</code>" です。(注記: 鍵強度の種類数の選択、各強度の既定値、ユーザーに選択肢を提示する UI は仕様の範囲外です)</p>

<p><code>&lt;keygen&gt;</code> 要素は、HTML フォーム内のみで有効です。この要素は、ユーザーが鍵のサイズを選択するために提示するいくつかの選択肢をもたらします。選択の UI はメニュー、ラジオボタン、あるいは他に利用可能な何かになるでしょう。ブラウザーは、使用可能な鍵強度をいくつか提示します。現在は、強と中の 2 種類の強度を提供しています。ユーザーのブラウザーが暗号処理ハードウェア (例えば "スマートカード") をサポートするように設定されている場合は、どこへ鍵を生成するか (例えばスマートカードに、あるいはソフトウェアで生成してディスクへ保存) の選択肢も与えられるかもしれません。</p>

<p>送信ボタンが押下されると、選択したサイズの鍵ペアを生成します。秘密鍵は暗号化されて、ローカルの鍵データベースに保管されます。</p>

<pre class="notranslate">PublicKeyAndChallenge ::= SEQUENCE {
    spki SubjectPublicKeyInfo,
    challenge IA5STRING
}
SignedPublicKeyAndChallenge ::= SEQUENCE {
    publicKeyAndChallenge PublicKeyAndChallenge,
    signatureAlgorithm AlgorithmIdentifier,
    signature BIT STRING
}</pre>

<p>公開鍵とチャレンジ文字列は DER で <code>PublicKeyAndChallenge</code> として符号化され、<code>SignedPublicKeyAndChallenge</code> を生成するために秘密鍵でデジタル署名が施されます。<code>SignedPublicKeyAndChallenge</code> は {{Glossary("Base64")}} で符号化され、最終的に ASCII データがフォームの name/value のペアとしてサーバーに送信されます。name は、<code>keygen</code> 要素の <code>name</code> 属性で指定した<var>名前</var>です。チャレンジ文字列が提供されない場合は、長さが 0 の <code>IA5STRING</code> として符号化されます。</p>

<p>以下は、HTTP サーバーから CGI プログラムに提供されるフォーム送信内容の例です。</p>

<pre class="notranslate">   commonname=John+Doe&amp;email=doe@foo.com&amp;org=Foobar+Computing+Corp.&amp;
   orgunit=Bureau+of+Bureaucracy&amp;locality=Anytown&amp;state=California&amp;country=US&amp;
   key=MIHFMHEwXDANBgkqhkiG9w0BAQEFAANLADBIAkEAnX0TILJrOMUue%2BPtwBRE6XfV%0AWtKQbsshxk5ZhcUwcwyvcnIq9b82QhJdoACdD34rqfCAIND46fXKQUnb0mvKzQID%0AAQABFhFNb3ppbGxhSXNNeUZyaWVuZDANBgkqhkiG9w0BAQQFAANBAAKv2Eex2n%2FS%0Ar%2F7iJNroWlSzSMtTiQTEB%2BADWHGj9u1xrUrOilq%2Fo2cuQxIfZcNZkYAkWP4DubqW%0Ai0%2F%2FrgBvmco%3D</pre>

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
   <td>{{SpecName("HTML5.1", "sec-forms.html#the-keygen-element", 'the <code>&lt;keygen&gt;</code> element')}}</td>
   <td>{{Spec2("HTML5.1")}}</td>
   <td>初回定義</td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.elements.keygen")}}</p>
