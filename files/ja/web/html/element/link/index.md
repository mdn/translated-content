---
title: '<link>: 外部リソースへのリンク要素'
slug: Web/HTML/Element/link
tags:
  - Element
  - HTML
  - HTML document metadata
  - Link
  - Reference
  - Web
  - Web Performance
  - metadata
translation_of: Web/HTML/Element/link
---
<div>{{HTMLRef}}</div>

<p><strong>HTML 外部リソースへのリンク要素 (<code>&lt;link&gt;</code>)</strong> は、現在の文書と外部のリソースとの関係を指定します。この要素は{{Glossary("CSS", "スタイルシート")}}へのリンクに最もよく使用されますが、サイトのアイコン ("favicon" スタイルのアイコンと、モバイル端末のホーム画面やアプリのアイコンの両方) の確立や、その他のことにも使用されます。</p>

<div>{{EmbedInteractiveExample("pages/tabbed/link.html")}}</div>

<div class="hidden">このデモのソースファイルは GitHub リポジトリに格納されています。デモプロジェクトに協力したい場合は、 <a href="https://github.com/mdn/interactive-examples">https://github.com/mdn/interactive-examples</a> をクローンしてプルリクエストを送信してください。</div>

<p>外部スタイルシートへリンクするには、 {{HTMLElement("head")}} の中に次のような <code>&lt;link&gt;</code> 要素を入れてください。</p>

<pre class="brush: html no-line-numbers notranslate">&lt;link href="main.css" rel="stylesheet"&gt;</pre>

<p>この単純な例では、 <code>href</code> 属性内にスタイルシートへのパスを提供し、 <code>rel</code> 属性の値を <code>stylesheet</code> にしています。 <code>rel</code> は "relationship" を意味し、おそらく <code>&lt;link&gt;</code> 要素の重要な機能の一つです。 — 値はこれを含んでいる文書にどのように関係するかを示します。<a href="/ja/docs/Web/HTML/Link_types">リンク種別</a>で見られるように、様々な種類の関係があります。</p>

<p>他にも見かけるであろう他の一般的な種別はたくさんあります。例えば、サイトのファビコンへのリンクがあります。</p>

<pre class="brush: html no-line-numbers notranslate">&lt;link rel="icon" href="favicon.ico"&gt;</pre>

<p>他にもアイコンの <code>rel</code> 値はいくつもあり、以下のように主に様々なモバイルプラットフォーム上で特殊なアイコンの種別を示すために使用されます。</p>

<pre class="brush: html no-line-numbers notranslate">&lt;link rel="apple-touch-icon-precomposed" sizes="114x114"
      href="apple-icon-114.png" type="image/png"&gt;</pre>

<p><code>sizes</code> 属性はアイコンの寸法を表し、 <code>type</code> はリンクされようとしているリソースの MIME タイプが入ります。これらはブラウザーが利用できる最も適切なアイコンを選択するための有益なヒントを提供します。</p>

<p><code>media</code> 属性でメディア種別やクエリを指定することもできます。このリソースはメディアの条件が真になった場合のみ読み込まれます。</p>

<pre class="brush: html no-line-numbers notranslate">&lt;link href="print.css" rel="stylesheet" media="print"&gt;
&lt;link href="mobile.css" rel="stylesheet" media="screen and (max-width: 600px)"&gt;</pre>

<p><code>&lt;link&gt;</code> 要素には、興味深いパフォーマンスやセキュリティの機能もいくつか追加されています。以下の例を見てみましょう。</p>

<pre class="brush: html no-line-numbers notranslate">&lt;link rel="preload" href="myFont.woff2" as="font"
      type="font/woff2" crossorigin="anonymous"&gt;</pre>

<p><code>rel</code> が <code>preload</code> の値であることは、ブラウザーがこのリソースを先読みすることを指示しており (詳しくは <a href="/ja/docs/Web/HTML/Preloading_content">rel="preload" によるコンテンツの先読み</a>を参照)、 <code>as</code> 属性がコンテンツが読み込まれるされる特定のクラスを示します。 <code>crossorigin</code> 属性はリソースが {{Glossary("CORS")}} リクエストによって読み込まれるかどうかを示します。</p>

<p>その他の有用なメモです。</p>

<ul>
 <li><code>&lt;link&gt;</code> 要素は<a href="https://html.spec.whatwg.org/multipage/links.html#body-ok">リンク種別</a>が <strong>body-ok</strong> であるかどうかによって、 {{HTMLElement("head")}} 要素または {{HTMLElement("body")}} 要素のどちらかに置くことができます。例えば <code>stylesheet</code> リンク種別は body-ok であり、<code>&lt;link rel="stylesheet"&gt;</code> を body 要素内に置くことができます。しかし、これは従うべき良い方法ではありません。 <code>&lt;link&gt;</code> 要素は <code>&lt;head&gt;</code> に入れて本文から離した方が分かりやすくなります。</li>
 <li>サイトにファビコンを設定するために <code>&lt;link&gt;</code> を使用する場合で、サイトがセキュリティの強化のためにコンテンツセキュリティポリシー (CSP) を使用している場合、ファビコンにポリシーが適用されます。ファビコンが読み込まれないという問題が発生したら、 {{HTTPHeader("Content-Security-Policy")}} ヘッダーの <a href="/ja/docs/Web/HTTP/Headers/Content-Security-Policy/img-src"><code>img-src</code> ディレクティブ</a>がアクセスを禁止していないかどうか確認してください。</li>
 <li>HTML および XHTML の仕様では <code>&lt;link&gt;</code> 要素向けのイベントハンドラーを定義していますが、それらがどのように使用されるかは不明確です。</li>
 <li>XHTML 1.0 では <code>&lt;link&gt;</code> のような空要素では、 <code>&lt;link /&gt;</code> のように末尾のスラッシュが必要です。</li>
 <li>WebTV は <code>rel</code> に <code>next</code> の値を使用して、一連の文書の次のページを先読みすることに対応しています。</li>
</ul>

<h2 id="Attributes" name="Attributes">属性</h2>

<p>この要素には<a href="/ja/docs/Web/HTML/Global_attributes">グローバル属性</a>があります。</p>

<dl>
 <dt>{{HTMLAttrDef("as")}}</dt>
 <dd>この属性は、 <code>rel="preload"</code> または <code>rel="prefetch"</code> を <code>&lt;link&gt;</code> 要素に設定した場合に限り使用されます。これは <code>&lt;link&gt;</code> によって読み込まれるコンテンツのタイプを指定する属性であり、リクエストのマッチング、正しい<a href="/ja/docs/Web/HTTP/CSP">コンテンツセキュリティポリシー</a>の適用、正しい {{HTTPHeader("Accept")}} リクエストヘッダーの設定のために必要です。さらに、 <code>rel="preload"</code> はこれをリクエストの優先度付の信号として使用します。下記の表はこの属性に有効な値と、適用先の要素またはリソースの一覧です。</dd>
 <dd>
 <table class="standard-table">
  <thead>
   <tr>
    <th scope="col">値</th>
    <th scope="col">適用先</th>
   </tr>
  </thead>
  <tbody>
   <tr>
    <td>audio</td>
    <td><code>&lt;audio&gt;</code> 要素</td>
   </tr>
   <tr>
    <td>document</td>
    <td><code>&lt;iframe&gt;</code> および <code>&lt;frame&gt;</code> 要素</td>
   </tr>
   <tr>
    <td>embed</td>
    <td><code>&lt;embed&gt;</code> 要素</td>
   </tr>
   <tr>
    <td>fetch</td>
    <td>
     <p>fetch, XHR</p>

     <div class="blockIndicator note">
     <p>この値では <code>&lt;link&gt;</code> に crossorigin 属性が必要です。</p>
     </div>
    </td>
   </tr>
   <tr>
    <td>font</td>
    <td>CSS @font-face</td>
   </tr>
   <tr>
    <td>image</td>
    <td><code>&lt;img&gt;</code> および <code>&lt;picture&gt;</code> 要素で srcset または imageset 属性が付いているもの、 SVG の <code>&lt;image&gt;</code> 属性、 CSS の <code>*-image</code> 規則</td>
   </tr>
   <tr>
    <td>object</td>
    <td><code>&lt;object&gt;</code> 要素</td>
   </tr>
   <tr>
    <td>script</td>
    <td><code>&lt;script&gt;</code> 要素、ワーカーの <code>importScripts</code></td>
   </tr>
   <tr>
    <td>style</td>
    <td><code>&lt;link rel=stylesheet&gt;</code> 要素、 CSS の <code>@import</code></td>
   </tr>
   <tr>
    <td>track</td>
    <td><code>&lt;track&gt;</code> 要素</td>
   </tr>
   <tr>
    <td>video</td>
    <td><code>&lt;video&gt;</code> 要素</td>
   </tr>
   <tr>
    <td>worker</td>
    <td>ワーカー、共有ワーカー</td>
   </tr>
  </tbody>
 </table>
 </dd>
 <dt>{{HTMLAttrDef("crossorigin")}}</dt>
 <dd>この列挙型の属性は、関連リソースを取得する際に {{Glossary("CORS")}} を使用しなければならないかを示します。 <a href="/ja/docs/Web/HTML/CORS_Enabled_Image">CORS が有効な画像</a>は、<em>汚染</em>されることなく {{HTMLElement("canvas")}} 要素で再利用できます。次の値が使用できます。
 <dl>
  <dt><code>anonymous</code></dt>
  <dd>オリジン間リクエスト (つまり、 HTTP の {{HTTPHeader("Origin")}} ヘッダーを持つリクエスト) が実行されます。ただし、信用情報は送信されません (Cookie、X.509 証明書、 HTTP ベーシック認証は利用されません)。サーバーが元のサイトに信用情報を付与しない (HTTP の {{HTTPHeader("Access-Control-Allow-Origin")}} ヘッダーの設定がない) 場合、リソースが汚染され、その使用も制限されます。</dd>
  <dt><code>use-credentials</code></dt>
  <dd>オリジン間リクエスト (つまり、 HTTP の <code>Origin</code> ヘッダーを持つリクエスト) が実行され、信用情報が送信されます (Cookie、証明書、HTTP ベーシック認証が利用されます)。サーバーが元のサイトに信用情報を付与しない場合 (HTTP の {{HTTPHeader("Access-Control-Allow-Credentials")}} ヘッダーに関わらず)、画像が<em>汚染</em>され、その使用も制限されます。</dd>
 </dl>
 この属性が存在しない場合、リソースは {{Glossary("CORS")}} リクエストなしで (<code>Origin</code> HTTP ヘッダーを送信せずに) 取得され、汚染されない使用が妨げられます。これが無効な場合、列挙型のキーワード <strong>anonymous</strong> が指定されたものとして扱われます。それ以上の情報は <a href="/ja/docs/Web/HTML/CORS_settings_attributes">CORS 設定属性</a> を参照してください。</dd>
 <dt>{{HTMLAttrDef("disabled")}}</dt>
 <dd>
 <p><code>rel="stylesheet"</code> の場合のみ、 <code>disabled</code> は論理属性であり、指定されたスタイルシートを読み込んで文書に適用するかどうかを示します。 <code>disabled</code> が HTML に読み込み時点で指定されていた場合、そのスタイルシートはページ読み込み処理の間に読み込まれません。代わりに、そのスタイルシートは <code>disabled</code> 属性が <code>false</code> に変更されたか削除された場合にオンデマンドで読み込まれます。</p>

 <p>DOM から <code>disabled</code> プロパティの値を変更すると、そのスタイルシートを文書の {{domxref("StyleSheet.disabled")}} のプロパティから削除します。</p>
 </dd>
 <dt>{{HTMLAttrDef("href")}}</dt>
 <dd>この属性は、リンクしたリソースの {{glossary("URL")}} を指定します。URL は絶対・相対のどちらでもかまいません。</dd>
 <dt>{{HTMLAttrDef("hreflang")}}</dt>
 <dd>この属性は、リンク先のリソースの言語を示します。これは単なる助言です。許容される値は <a href="https://www.ietf.org/rfc/bcp/bcp47.txt">BCP47</a> で定めています。この属性は、 {{HTMLAttrxRef("href", "link")}} 属性が提供されている場合にのみ使用します。</dd>
 <dt>{{HTMLAttrDef("imagesizes")}}</dt>
 <dd><code>rel="preload"</code> および <code>as="image"</code> において、 <code>imagesizes</code> 属性は、 <code>img</code> 要素によって使用される適切なリソースを、その <code>srcset</code> および <code>sizes</code> 属性に対応する値で先読みすることを示す <a href="https://html.spec.whatwg.org/multipage/images.html#sizes-attribute">sizes 属性</a>です。</dd>
 <dt>{{HTMLAttrDef("imagesrcset")}}</dt>
 <dd><code>rel="preload"</code> および <code>as="image"</code> において、 <code>imagesrcset</code> 属性は <code>img</code> 要素によって使用される適切なリソースを、その <code>srcset</code> および <code>sizes</code> 属性に対応する値で先読みすることを示す <a href="https://html.spec.whatwg.org/multipage/images.html#srcset-attribute">sourceset 属性</a>です。</dd>
 <dt>{{HTMLAttrDef("integrity")}} {{Experimental_Inline}}</dt>
 <dd>この属性は、取得したリソースが予期せぬ改ざんを受けずに提供されたかを、ユーザーエージェントが検証するために使用できるメタデータである、ブラウザーに取得させたリソース (ファイル) の暗号学的ハッシュを BASE64 でエンコードしたデータを含みます。<a href="/ja/docs/Web/Security/Subresource_Integrity">Subresource Integrity</a> をご覧ください。</dd>
 <dt>{{HTMLAttrDef("media")}}</dt>
 <dd>この属性は、リンク先のリソースが適用されるメディアを指定します。この値は<a href="/ja/docs/Web/CSS/Media_queries">メディアクエリー</a>でなければなりません。この属性は主に外部のスタイルシートから、実行中のデバイスに最適なものをユーザーエージェントが選択できるようにリンクするときに役立ちます。
 <div class="blockIndicator note">
 <p><strong>注:</strong></p>

 <ul>
  <li>HTML 4 では、単純なホワイトスペースで区切られたメディアリテラルのリストのみ記述できます。これは<a href="/ja/docs/Web/CSS/@media">メディア種別とグループ</a> で、<code>print</code>, <code>screen</code>, <code>aural</code>, <code>braille</code> などの使用可能な値が定義されています。 HTML5 ではこれがあらゆる<a href="/ja/docs/Web/CSS/Media_queries">メディアクエリ</a>に拡張され、 HTML 4 で使用できる値の上位互換となっています。</li>
  <li><a href="/ja/docs/Web/CSS/Media_queries">CSS3 メディアクエリ</a>に対応していないブラウザーは、リンクを適切に理解するとは限りません。 HTML 4 で定義されたメディアクエリーのセットに制限されるので、フォールバックリンクを設定することを忘れないでください。</li>
 </ul>
 </div>
 </dd>
 <dt>{{HTMLAttrDef("prefetch")}} {{Non-standard_Inline}} {{secureContext_inline}}</dt>
 <dd>この属性は、おそらく次のナビゲーション先で必要でありユーザーエージェントが取得すべきであるリソースを特定します。これは将来リソースがリクエストされたときに、ユーザーエージェントが早く応答することを可能にします。</dd>
 <dt>{{HTMLAttrDef("referrerpolicy")}} {{Experimental_Inline}}</dt>
 <dd>リソースを読み込む際にどのリファラーを使用するかを示す文字列です。
 <ul>
  <li><code>no-referrer</code> は、{{HTTPHeader("Referer")}} ヘッダーを送信しないことを表します。</li>
  <li><code>no-referrer-when-downgrade</code> は、TLS (HTTPS) を使用せずに生成元へナビゲートする場合は {{HTTPHeader("Referer")}} ヘッダーを送信しないことを表します。これは他にポリシーが定められていない場合の、ユーザーエージェントの既定の動作です。</li>
  <li><code>origin</code> は、ページの生成元 (大まかにいえばスキーム、ホスト、ポート) をリファラーとすることを表します。</li>
  <li><code>origin-when-cross-origin</code> は、異なるオリジンへの移動ではリファラーをスキーム、ホスト、ポートに制限します。同一オリジンへの移動では、リファラーのパスも含めます。</li>
  <li><code>unsafe-url</code> は、リファラーに生成元とパスを含めることを表します (ただし、フラグメント、パスワード、ユーザー名は含めません)。これは生成元やパスの情報が TLS で保護されたリソースからセキュアでない生成元へ漏えいしますので、安全ではありません。</li>
 </ul>
 </dd>
 <dt>{{HTMLAttrDef("rel")}}</dt>
 <dd>この属性は現在の文書に対する、リンクされた文書の関係を示します。属性値は、空白で区切られた<a href="/ja/docs/Web/HTML/Link_types">リンク種別の値</a>のリストでなければなりません。</dd>
 <dt>{{HTMLAttrDef("sizes")}}</dt>
 <dd>この属性は、リソースに含まれる映像メディア向けのアイコンのサイズを定義します。これは、 {{HTMLAttrxRef("rel","link")}} の値が <code>icon</code> 又は Apple の <code>apple-touch-icon</code> のような標準外の種別が含まれている場合にのみ指定することができます。以下の値を指定できます。
 <ul>
  <li><code>any</code>: <code>image/svg+xml</code> のようなベクター画像であるため、どのようなサイズにも調整可能であることを示します。</li>
  <li>ホワイトスペースで区切られたサイズのリスト。サイズはそれぞれ <code><em>&lt;幅のピクセル値&gt;</em>x<em>&lt;高さのピクセル値&gt;</em></code> または <code><em>&lt;幅のピクセル値&gt;</em>X<em>&lt;高さのピクセル値&gt;</em></code> という形式です。それぞれのサイズがリソースに含まれていることが必要です。</li>
 </ul>

 <div class="blockIndicator note">
 <p><strong>注:</strong> ほとんどのアイコン形式は1個のアイコンのみ保存可能です。よってほとんどの場合、 {{HTMLAttrxRef("sizes")}} 属性はエントリーが1個だけになります。アップルの ICN はもちろん、マイクロソフトの ICO 形式も使用できます。 ICO の方が一般的であり、複数ブラウザーの対応 (特に IE の古いバージョン) が重要である場合はこの形式を使用してください。</p>
 </div>
 </dd>
 <dt>{{HTMLAttrDef("title")}}</dt>
 <dd><code>title</code> 属性は、<code>&lt;link&gt;</code> 要素では特別な意味があります。<code>&lt;link rel="stylesheet"&gt;</code> で使用すると、<a href="/ja/docs/Web/CSS/Alternative_style_sheets">優先スタイルシートか代替スタイルシートか</a> を定義します。間違って使用すると <a href="/ja/docs/Correctly_Using_Titles_With_External_Stylesheets">スタイルシートが無視されます</a>。</dd>
 <dt>{{HTMLAttrDef("type")}}</dt>
 <dd>この属性は、リンク先コンテンツの種類を定義します。この属性の値は <strong>text/html</strong> や <strong>text/css</strong> などの MIME タイプにします。この属性の一般的な使用法は、参照されるスタイルシートのタイプ (<strong>text/css</strong> など) の定義ですが、 CSS はウェブ上の唯一のスタイルシート言語であるため、 <code>type</code> 属性を省略できるばかりでなく、それが実際に推奨される習慣になっています。また <code>rel="preload"</code> リンク種別で、ブラウザーが対応するファイルタイプのみダウンロードさせるためにも使用します。</dd>
</dl>

<h3 id="Non-standard_attributes" name="Non-standard_attributes">標準外の属性</h3>

<dl>
 <dt>{{HTMLAttrDef("methods")}} {{Non-standard_Inline}}</dt>
 <dd>この属性の値は、オブジェクト上で動作する関数についての情報を提供します。この値は基本的に HTTP プロトコルが利用されたときに与えられますが、(<strong>title</strong> 属性と同じような理由で) リンク先の情報を前もって含めるときに役立ちます。例えば定義されたメソッドの機能によって、異なるリンクの描画をブラウザーが選択します。検索可能なリンクで異なるアイコンを取得したり、外部リンクには現在のサイトから去ることを示す描画にしたりできます。この属性は、定義された Internet Explorer 4 ですら、あまり理解されておらず対応もされていません。<a href="https://msdn.microsoft.com/en-us/library/ms534168%28VS.85%29.aspx" rel="external nofollow">Methods プロパティ (MSDN)</a> をご覧ください。</dd>
 <dt>{{HTMLAttrDef("target")}} {{Non-standard_Inline}}</dt>
 <dd>定義されたリンク関係を持つ、またはリンクしたリソースを表示するフレームまたはウィンドウの名前を定義します。</dd>
</dl>

<h3 id="Obsolete_attributes" name="Obsolete_attributes">廃止された属性</h3>

<dl>
 <dt>{{HTMLAttrDef("charset")}} {{Obsolete_Inline}}</dt>
 <dd>この属性は、リンク先のリソースの文字エンコーディングを定義します。この値は {{rfc(2045)}} で定義されている文字セットの、スペースまたはカンマで区切られたリストです。既定値は <code>iso-8859-1</code> です。
 <div class="note"><strong>使用上のメモ:</strong> この廃止された属性と同じ効果を生み出すためには、リンク先のリソースで HTTP の {{HTTPHeader("Content-Type")}} ヘッダーを使用してください。</div>
 </dd>
 <dt>{{HTMLAttrDef("rev")}} {{Obsolete_Inline}}</dt>
 <dd>この属性の値は、{{HTMLAttrxRef("href", "link")}} 属性で定義したリンク先文書に対する、現在の文書の関係を示します。従って、この属性は <code>rel</code> 属性の値と比べたときに逆向きの関係を定義します。この属性向けの<a href="/ja/docs/Web/HTML/Link_types">リンク種別の値</a>は、{{HTMLAttrxRef("rel", "link")}} 向けの値と似ています。</dd>
 <dd>
 <div class="blockIndicator note">
 <p><strong>注:</strong> この属性は WHATWG HTML living standard (MDN が正式とみなしている仕様書) で廃止とみなされています。しかし、 <code>rev</code> は W3C 仕様書では廃止とみなされて<em>いない</em>ことは注目に値します。とはいうものの、不確実性を考えると、 <code>rev</code> に頼ることは賢明ではありません。</p>

 <p>代わりに、逆の意味の<a href="/ja/docs/Web/HTML/Link_types">リンク種別の値</a>を与えた {{HTMLAttrxRef("rel", "link")}} 属性を使用してください。例えば <code>made</code> は <code>author</code> に置き換えます。また、この属性は<ruby>リビジョン<rp> (</rp><rt>revision</rt><rp>) </rp></ruby>を表すものではなく、バージョン番号を指定してはいけませんが、残念ながらいくつものサイトでそのように使用されています。</p>
 </div>
 </dd>
</dl>

<h2 id="Examples" name="Examples">例</h2>

<h3 id="Including_a_stylesheet" name="Including_a_stylesheet">スタイルシートの読み込み</h3>

<p>ページにスタイルシートを読み込むには、以下の構文を使用します。</p>

<pre class="brush: html no-line-numbers notranslate">&lt;link href="style.css" rel="stylesheet"&gt;
</pre>

<h3 id="Providing_alternative_stylesheets" name="Providing_alternative_stylesheets">代替スタイルシートの提供</h3>

<p><a href="/ja/docs/Web/CSS/Alternative_style_sheets">代替スタイルシート</a>も提示できます。</p>

<p>ユーザーはメニューの 表示 &gt; スタイルシート で、使用するスタイルシートを選択できます。これは、ユーザーがページをさまざまなバージョンで閲覧する手段を提供します。</p>

<pre class="brush: html no-line-numbers notranslate">&lt;link href="default.css" rel="stylesheet" title="Default Style"&gt;
&lt;link href="fancy.css" rel="alternate stylesheet" title="Fancy"&gt;
&lt;link href="basic.css" rel="alternate stylesheet" title="Basic"&gt;
</pre>

<h3 id="異なる利用場面のアイコンの提供">異なる利用場面のアイコンの提供</h3>

<p>同じページにいくつかの異なるアイコンへのリンクを含めて、ブラウザーが <code>rel</code> や <code>sizes</code> の値をヒントとして使用し、特定の場面で最適に動作する一つを選択するようにすることができます。</p>

<pre class="brush: html no-line-numbers notranslate">&lt;!-- 高解像度ディスプレイの第三世代 iPad --&gt;
&lt;link rel="apple-touch-icon-precomposed" sizes="144x144" href="favicon144.png"&gt;
&lt;!-- 高解像度ディスプレイの iPhone --&gt;
&lt;link rel="apple-touch-icon-precomposed" sizes="114x114" href="favicon114.png"&gt;
&lt;!-- 第一、第二世代の iPad: --&gt;
&lt;link rel="apple-touch-icon-precomposed" sizes="72x72" href="favicon72.png"&gt;
&lt;!-- 高解像度でない iPhone, iPod Touch, Android 2.1 以降の端末 --&gt;
&lt;link rel="apple-touch-icon-precomposed" href="favicon57.png"&gt;
&lt;!-- 基本的なファビコン --&gt;
&lt;link rel="icon" href="favicon32.png"&gt;</pre>

<h3 id="メディアクエリのついた条件付きのリソース読み込み">メディアクエリのついた条件付きのリソース読み込み</h3>

<p>以下のように、メディア種別やクエリを <code>media</code> 属性で指定することができます。このリソースはメディア条件が真の場合にのみ読み込まれます。</p>

<pre class="brush: html no-line-numbers notranslate">&lt;link href="print.css" rel="stylesheet" media="print"&gt;
&lt;link href="mobile.css" rel="stylesheet" media="all"&gt;
&lt;link href="desktop.css" rel="stylesheet" media="screen and (min-width: 600px)"&gt;
&lt;link href="highres.css" rel="stylesheet" media="screen and (min-resolution: 300dpi)"&gt;
</pre>

<h3 id="Stylesheet_load_events" name="Stylesheet_load_events">スタイルシートの load イベント</h3>

<p><code>load</code> イベントの発生を確認することで、スタイルシートが読み込まれた時を判断できます。同様に <code>error</code> イベントを確認することで、スタイルシートを処理する際のエラー発生を検出できます。</p>

<pre class="brush: html notranslate">&lt;script&gt;
var myStylesheet = document.querySelector('#my-stylesheet');

myStylesheet.onload = function() {
  // Do something interesting; the sheet has been loaded
}

myStylesheet.onerror = function() {
  console.log("An error occurred loading the stylesheet!");
}
&lt;/script&gt;

&lt;link rel="stylesheet" href="mystylesheet.css" id="my-stylesheet"&gt;
</pre>

<div class="blockIndicator note">
<p><strong>注:</strong> <code>load</code> イベントはスタイルシートとスタイルシートがインポートするすべてのコンテンツの読み込みと解析が行われた後、スタイルシートがコンテンツに適用される直前に発生します。</p>
</div>

<h3 id="Preload_examples" name="Preload_examples">Preload の例</h3>

<p><a href="/ja/docs/Web/HTML/Preloading_content"><code>rel="preload"</code> によるコンテンツの先読み</a>に、&lt;link rel="preload"&gt; の例がいくつかあります。</p>

<h2 id="Technical_summary" name="Technical_summary">技術的概要</h2>

<table class="properties">
 <tbody>
  <tr>
   <th><a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a></th>
   <td>メタデータコンテンツ。 <a href="/ja/docs/Web/HTML/Global_attributes/itemprop">itemprop</a> 属性がある場合は<a href="/ja/docs/Web/HTML/Content_categories#Flow_content">フローコンテンツ</a>、<a href="/ja/docs/Web/HTML/Content_categories#Phrasing_content">記述コンテンツ</a></td>
  </tr>
  <tr>
   <th>許可されている内容</th>
   <td>なし。これは{{Glossary("empty element", "空要素")}}です。</td>
  </tr>
  <tr>
   <th>タグの省略</th>
   <td>空要素であるため開始タグは必須であり、終了タグは置いてはいけません。</td>
  </tr>
  <tr>
   <th>許可されている親要素</th>
   <td>メタデータ要素を受け入れるすべての要素。 <a href="/ja/docs/Web/HTML/Global_attributes/itemprop">itemprop</a> 属性がある場合は<a href="/ja/docs/Web/HTML/Content_categories#Phrasing_content">記述コンテンツ</a>を受け入れるすべての要素。</td>
  </tr>
  <tr>
   <th scope="row">暗黙の ARIA ロール</th>
   <td><code>href</code> 属性つきの {{ARIARole("link")}}</td>
  </tr>
  <tr>
   <th scope="row">許可されている ARIA ロール</th>
   <td>許可されている <code>role</code> なし</td>
  </tr>
  <tr>
   <th>DOM インターフェイス</th>
   <td>{{DOMxRef("HTMLLinkElement")}}</td>
  </tr>
 </tbody>
</table>

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
   <td>{{SpecName("HTML WHATWG", "semantics.html#the-link-element", "&lt;link&gt;")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>最新のスナップショットから変更なし。</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML5 W3C", "document-metadata.html#the-link-element", "&lt;link&gt;")}}</td>
   <td>{{Spec2("HTML5 W3C")}}</td>
   <td><code>crossorigin</code> 属性および <code>sizes</code> 属性を追加。<code>media</code> の値をすべてのメディアクエリーに拡張。<code>rel</code> に多くの新たな値を追加。</td>
  </tr>
  <tr>
   <td>{{SpecName("HTML4.01", "struct/links.html#h-12.3", "&lt;link&gt;")}}</td>
   <td>{{Spec2('HTML4.01')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Browser_compatibility" name="Browser_compatibility">ブラウザーの互換性</h2>

<p>{{Compat("html.elements.link", 3)}}</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>HTTP の {{HTTPHeader("Link")}} ヘッダー</li>
</ul>
