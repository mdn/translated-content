---
title: ウェブ上のリソースの識別
slug: Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web
tags:
  - Domain
  - HTTP
  - Path
  - Scheme
  - Syntax
  - URI
  - URL
  - URL Syntax
  - Web
  - fragment
  - port
  - query
  - resources
translation_of: Web/HTTP/Basics_of_HTTP/Identifying_resources_on_the_Web
---
<div>{{HTTPSidebar}}</div>

<p class="summary">HTTP 要求の対象は「リソース」と呼ばれ、その本質は細かく定義されていません。ドキュメント、写真、その他の何にでもなりえます。それぞれのリソースは、リソースを特定するために HTTP の至るところで使用される Uniform Resource Identifier ({{Glossary("URI")}}) で特定されます。</p>

<p>ウェブ上にあるリソースの身元や場所は、たいていひとつの URL (Uniform Resource Locator、 一種の URI) によって与えられます。時々、同一の URI によって身元や場所が与えられない理由が存在します。要求されたリソースについて、クライアントに別の場所へアクセスしてほしい場合に、HTTP では {{HTTPHeader("Alt-Svc")}} ヘッダーを使用します。</p>

<h2 id="URLs_and_URNs" name="URLs_and_URNs">URL と URN</h2>

<h3 id="URLs" name="URLs">URL</h3>

<p>もっとも一般的な URI の形式は Uniform Resource Locator ({{Glossary("URL")}}) であり、<em>ウェブアドレス</em>として知られています。</p>

<pre class="notranslate">https://developer.mozilla.org
https://developer.mozilla.org/en-US/docs/Learn/
https://developer.mozilla.org/en-US/search?q=URL</pre>

<p>ブラウザーのアドレスバーに URL を入力して、URL に関連付けられているページ (リソース) を読み込むように指示できます。</p>

<p>URL はさまざまな部品で構成されており、必須のものと省略可能なものがあります。より複雑な URL の例は、以下のようになります:</p>

<pre class="notranslate">http://www.example.com:80/path/to/myfile.html?key1=value1&amp;key2=value2#SomewhereInTheDocument</pre>

<h3 id="URNs" name="URNs">URN</h3>

<p>Uniform Resource Name (URN) は、特定の名前空間内の名前によってリソースを特定する URI です。</p>

<pre class="notranslate">urn:isbn:9780141036144
urn:ietf:rfc:7230
</pre>

<p>2 つの URN は以下のものに対応します:</p>

<ul>
 <li>George Orwell の書籍 Nineteen Eighty-Four</li>
 <li>IETF 仕様書 7230、 Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing</li>
</ul>

<h2 id="Syntax_of_Uniform_Resource_Identifiers_URIs" name="Syntax_of_Uniform_Resource_Identifiers_(URIs)">Uniform Resource Identifiers (URI) の構文</h2>

<h3 id="Scheme_or_protocol" name="Scheme_or_protocol">スキームまたはプロトコル</h3>

<dl>
 <dt><img alt="Protocol" src="https://mdn.mozillademos.org/files/8013/mdn-url-protocol@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd><code>http://</code> はプロトコルです。これは、ブラウザーが使用すべきプロトコルを示します。通常、 HTTP プロトコルまたは安全なバージョンである HTTPS になります。ウェブではこれら2つのうちひとつを必要としますが、ブラウザーは <code>mailto:</code> (メールクライアントを開く) やファイル転送を扱う <code>ftp:</code> といったほかのプロトコルの扱い方も知っていますので、このようなプロトコルが現れても驚かないでください。主なスキームは以下のとおりです:</dd>
</dl>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">スキーム</th>
   <th scope="col">説明</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>data</td>
   <td><a href="/ja/docs/Web/HTTP/Basics_of_HTTP/Data_URIs">Data URI</a></td>
  </tr>
  <tr>
   <td>file</td>
   <td>ホスト固有のファイル名</td>
  </tr>
  <tr>
   <td>ftp</td>
   <td><a href="/ja/docs/Glossary/FTP">File Transfer Protocol</a></td>
  </tr>
  <tr>
   <td>http/https</td>
   <td><a href="/ja/docs/Glossary/HTTP">Hyper text transfer protocol (安全)</a></td>
  </tr>
  <tr>
   <td>javascript</td>
   <td>URL に埋め込まれた JavaScript のコード</td>
  </tr>
  <tr>
   <td>mailto</td>
   <td>電子メールアドレス</td>
  </tr>
  <tr>
   <td>ssh</td>
   <td>Secure shell</td>
  </tr>
  <tr>
   <td>tel</td>
   <td>電話</td>
  </tr>
  <tr>
   <td>urn</td>
   <td>Uniform Resource Names</td>
  </tr>
  <tr>
   <td>view-source</td>
   <td>リソースのソースコード</td>
  </tr>
  <tr>
   <td>ws/wss</td>
   <td>(暗号化された) <a href="/ja/docs/Web/API/WebSockets_API">WebSocket</a> 接続</td>
  </tr>
 </tbody>
</table>

<h3 id="Authority" name="Authority">オーソリティ</h3>

<dl>
 <dt><img alt="Domaine Name" src="https://mdn.mozillademos.org/files/8015/mdn-url-domain@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd><code>www.example.com</code> は、名前空間を統制するドメイン名またはオーソリティです。これは、どのウェブサーバーが要求されているかを示します。代わりに {{Glossary("IP address","IP アドレス")}} を直接使用することもできますが、利便性が低いためウェブではあまり使用されません。</dd>
</dl>

<h3 id="Port" name="Port">ポート</h3>

<dl>
 <dt><img alt="Port" src="https://mdn.mozillademos.org/files/8017/mdn-url-port@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd>ここで <code>:80</code> はポートです。これはウェブサーバー内のリソースへアクセスするために使用する、技術上の "出入口" です。ウェブサーバーがリソースへのアクセスを受け入れるために HTTP プロトコルの標準ポート (HTTP では 80、HTTPS では 443) を使用している場合、通常はポートを省略します。それ以外の場合は、ポートが必須です。</dd>
</dl>

<h3 id="Path" name="Path">パス</h3>

<dl>
 <dt><img alt="Path to the file" src="https://mdn.mozillademos.org/files/8019/mdn-url-path@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd><code>/path/to/myfile.html</code> は、ウェブサーバー内にあるリソースのパスです。初期のウェブではこのようなパスが、ウェブサーバー内の物理的なファイルの場所を表していました。現代のパスはたいてい物理的な実情と関係がない、ウェブサーバーによって制御される抽象的なものになっています。</dd>
</dl>

<h3 id="Query" name="Query">クエリ</h3>

<dl>
 <dt><img alt="Parameters" src="https://mdn.mozillademos.org/files/8021/mdn-url-parameters@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd><code>?key1=value1&amp;key2=value2</code> は、ウェブサーバーに提供する追加パラメーターです。このパラメーターは <code>&amp;</code> 記号で区切られた、キーと値のペアのリストです。ウェブサーバーは、ユーザーへリソースを返す前に追加の処理を行うために、このパラメーターを使用できます。それぞれのウェブサーバーはパラメーターについて独自の規則を持っており、特定のウェブサーバーがパラメーターを扱う方法を知るために唯一信頼できる方法は、ウェブサーバーの所有者に尋ねることです。</dd>
</dl>

<h3 id="Fragment" name="Fragment">フラグメント</h3>

<dl>
 <dt><img alt="Anchor" src="https://mdn.mozillademos.org/files/8023/mdn-url-anchor@x2.png" style="height: 70px; width: 440px;"></dt>
 <dd><code>#SomewhereInTheDocument</code> は、リソース自体の別の場所へのアンカーです。アンカーはリソース内の一種の "ブックマーク" を表しており、 "ブックマーク" 地点にあるコンテンツを表示するようにブラウザーへ指示を与えます。例えば HTML ドキュメントでは、ブラウザーはアンカーが定義されている位置にスクロールします。動画や音声のドキュメントでは、ブラウザーはアンカーが示す位置への移動を試みます。 # より後の部分はフラグメント識別としても知られており、要求でサーバーには送信されないことは注目に値します。</dd>
</dl>

<h2 id="使用上のメモ">使用上のメモ</h2>

<p>{{Glossary("HTML")}} コンテンツの中で URL を使用するとき、一般に使うことができる URL スキームはわずかです。サブリソースを参照する場合 — つまり、最初は巨大な文書の一部だけを使用する場合 — は、 HTTP 及び HTTPS スキームしか使用することができません。加えて、ブラウザーはセキュリティ上の理由から、 FTP を使用したサブリソースの読み込みの対応を削除しつつあります。</p>

<p>FTP は最上位では利用できますが (ブラウザーの URL バーに直接入力したり、リンクの対象とした理)、ブラウザーによっては FTP コンテンツの読み込みを他のアプリケーションに委譲するかもしれません。</p>

<h2 id="Examples" name="Examples">例</h2>

<pre class="notranslate">https://developer.mozilla.org/en-US/docs/Learn
tel:+1-816-555-1212
git@github.com:mdn/browser-compat-data.git
ftp://example.org/resource.txt
urn:isbn:9780141036144
mailto:help@supercyberhelpdesk.info
</pre>

<h2 id="Specifications" name="Specifications">仕様書</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">仕様書</th>
   <th scope="col">題名</th>
  </tr>
  <tr>
   <td>{{RFC("7230", "Uniform Resource Identifiers", "2.7")}}</td>
   <td>Hypertext Transfer Protocol (HTTP/1.1): Message Syntax and Routing</td>
  </tr>
 </tbody>
</table>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Learn/Common_questions/What_is_a_URL">URL とは何か</a></li>
 <li><a href="http://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml">IANA list of URI schemes</a></li>
</ul>
