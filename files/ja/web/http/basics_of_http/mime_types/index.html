---
title: MIME タイプ (IANA メディアタイプ)
slug: Web/HTTP/Basics_of_HTTP/MIME_types
tags:
  - Content-Type
  - Guide
  - HTTP
  - MIME タイプ
  - application/javascript
  - application/json
  - application/xml
  - エンティティヘッダー
translation_of: Web/HTTP/Basics_of_HTTP/MIME_types
---
<div>{{HTTPSidebar}}</div>

<p><span class="seoSummary"><strong>メディアタイプ</strong> (別名 <strong>Multipurpose Internet Mail Extensions または MIME タイプ</strong>) は、文書、ファイル、またはバイト列の性質や形式を示す標準です。</span> IETF の {{RFC(6838)}} で定義され、標準化されています。</p>

<p><a href="https://www.iana.org/">Internet Assigned Numbers Authority (IANA)</a> はすべての公式の MIME タイプを管理しており、<a href="https://www.iana.org/assignments/media-types/media-types.xhtml">Media Types</a> ページで最新の完全なリストを見つけることができます。</p>

<div class="warning">
<p><strong>重要:</strong>ブラウザーは URL を処理する方法を決定するために、<em>ファイル拡張子ではなく</em> MIME タイプを使用しますので、ウェブサーバーは正しい MIME タイプをレスポンスの {{HTTPHeader("Content-Type")}} ヘッダーで送信することが重要です。これが正しく構成されていないと、ブラウザーはファイルの中身を誤って解釈し、サイトが正しく動作しなかったり、ダウンロードファイルが誤って扱われたりすることがあります。</p>
</div>

<h2 id="Structure_of_a_MIME_type" name="Structure_of_a_MIME_type">MIME タイプの構造</h2>

<p>もっとも単純な MIME タイプは<var>タイプ</var>と<var>サブタイプ</var>で構成されます。これらはどちらも文字列で、その間をスラッシュ (<code>/</code>) で接続し、 MIME タイプを構成します。{{Glossary("Whitespace", "ホワイトスペース")}}は MIME タイプでは許可されていません。</p>

<pre class="syntaxbox notranslate"><var>タイプ</var>/<var>サブタイプ</var></pre>

<p><var>タイプ</var>はデータ型が当てはまる全般的なカテゴリ、すなわち <code>video</code> や <code>text</code> などを表します。<var>サブタイプ</var>は、その MIME タイプが表す正確なデータの種類を識別します。例えば、 MIME タイプが <code>text</code> の場合、サブタイプは <code>plain</code> (プレインテキスト)、 <code>html</code> ({{Glossary("HTML")}} ソースコード)、 <code>calendar</code> (iCalendar/<code>.ics</code>) ファイルなどです。</p>

<p>すべてのタイプは利用可能なサブタイプを持っており、 MIME タイプは常にタイプとサブタイプの両方を持ち、一方だけで使われることはありません。</p>

<p>任意で<strong>引数</strong>を追加して、追加の詳細情報を提供することができます。</p>

<pre class="syntaxbox notranslate"><var>タイプ</var>/<var>サブタイプ</var>;<var>引数</var>=<var>値</var></pre>

<p>例えば、 MIME タイプのうちメインタイプが <code>text</code> であるものでは、任意で <code>charset</code> 引数を使用して、データ内の文字の文字コードを指定することができます。 <code>charset</code> が指定されない場合は、既定では {{Glossary("ASCII")}} (<code>US-ASCII</code>) が、{{Glossary("user agent", "ユーザーエージェント")}}の設定で上書きされない限り使われます。 UTF-8 のテキストファイルを指定するには、 MIME タイプとして <code>text/plain;charset=UTF-8</code> が使用されます。</p>

<p>MIME タイプは大文字・小文字が区別されませんが、大文字・小文字の区別が特定の意味を持つ可能性がある引数の値を除いて、伝統的に小文字で記述されます。</p>

<h3 id="Types" name="Types">タイプ</h3>

<p>タイプには <ruby><strong>個別型</strong><rp> (</rp><rt>discrete</rt></ruby> と<ruby><strong>マルチパート型</strong><rp> (</rp><rt>multipart</rt></ruby> の二種類があります。個別型は単一のファイルまたはメディアを表すタイプで、単一のテキストファイルや音楽ファイル、単一の映像などです。マルチパート型は複数のコンポーネント部品によって構成される文書を表すもので、それぞれの部分が固有の MIME タイプを持ちます。また、マルチパート型は一度のトランザクションで一緒に送信される複数のファイルをまとめることもできます。例えば、マルチパート MIME タイプは複数のファイルを電子メールに添付するときに使用されます。</p>

<h4 id="Discrete_types" name="Discrete_types">個別型</h4>

<p>現在 IANA に登録されている個別型は以下のとおりです。</p>

<dl>
 <dt><code>application</code><a href="https://www.iana.org/assignments/media-types/media-types.xhtml#application" style="float: right;">IANA での一覧</a></dt>
 <dd>他のタイプに明確に当てはまらない、あらゆる種類のバイナリデータです。何らかの方法で実行されたり解釈されたりするデータ、または利用するのに特定のアプリケーションや特定の種類のアプリケーションを必要とするバイナリデータのどちらかです。汎用的なバイナリデータ (または本当のタイプが不明なバイナリデータ) は <code>application/octet-stream</code> です。他のよくある例として、 <code>application/pdf</code>, <code>application/pkcs8</code>, <code>application/zip</code> があります。</dd>
 <dt><code>audio</code> <a href="https://www.iana.org/assignments/media-types/media-types.xhtml#audio" style="float: right;">IANA での一覧</a></dt>
 <dd>音声または音楽データです。例えば、 <code>audio/mpeg</code>, <code>audio/vorbis</code> などがあります。</dd>
 <dt><code>example</code></dt>
 <dd>MIME タイプの使用方法を例示する際のプレイスホルダーとして使用するために予約されています。これらはサンプルコードのリストや文書の外で使用してはいけません。 <code>example</code> はサブタイプとして使用することもできます。例えば、ウェブ上で音声として動作する例として、 MIME タイプの <code>audio/example</code> を使用してタイプがプレイスホルダーであり、実世界で使用されるコードでは適切なもので置き換えられることを表します。</dd>
 <dt><code>font</code> <a href="https://www.iana.org/assignments/media-types/media-types.xhtml#font" style="float: right;">IANA での一覧</a></dt>
 <dd>フォントやタイプフェイスのデータです。よく使われるものとしては <code>font/woff</code>, <code>font/ttf</code>, <code>font/otf</code> などがあります。</dd>
 <dt><code>image</code> <a href="https://www.iana.org/assignments/media-types/media-types.xhtml#image" style="float: right;">IANA での一覧</a></dt>
 <dd>画像またはグラフィックデータで、ビットマップとベクター静止画像の両方を含み、さらに静止画像形式のアニメーション版であるアニメーション {{Glossary("GIF")}} や APNG なども含みます。よく使われるものとしては、 <code>image/jpeg</code>, <code>image/png</code>, <code>image/svg+xml</code> などがあります。</dd>
 <dt><code>model</code> <a href="https://www.iana.org/assignments/media-types/media-types.xhtml#model" style="float: right;">IANA での一覧</a></dt>
 <dd>三次元のオブジェクトやシーンなどのモデルデータです。例えば、 <code>model/3mf</code> や <code>model/vml</code> などがあります。</dd>
 <dt><code>text</code> <a href="https://www.iana.org/assignments/media-types/media-types.xhtml#text" style="float: right;">IANA での一覧</a></dt>
 <dd>テキストのみのデータで、人間が読むことができるあらゆるコンテンツ、ソースコード、コンマ区切り値 (CSV) 形式のデータのようなテキストデータを含みます。例えば、 <code>text/plain</code>, <code>text/csv</code>, <code>text/html</code> などがあります。</dd>
 <dt><code>video</code> <a href="https://www.iana.org/assignments/media-types/media-types.xhtml#video" style="float: right;">IANA での一覧</a></dt>
 <dd>動画のデータまたはファイルで、 MP4 movies (<code>video/mp4</code>) などがあります。</dd>
</dl>

<p>特定のサブタイプを持たないテキスト形式の文書には、 <code>text/plain</code> を使用してください。同様に、特定のサブタイプまたは既知のサブタイプを持たないバイナリ形式の文書には、 <code>application/octet-stream</code> を使用してください。</p>

<h4 id="Multipart_types" name="Multipart_types">マルチパート型</h4>

<p id="sect1"><strong>マルチパート</strong>型は、ふつうそれぞれ異なる MIME タイプを持つ複数の部品に分割される文書のカテゴリを示します。これらは、特に電子メールにおいて、同じトランザクションの一部である複数の別々のファイルを表すためにも使用されます。これらは<strong>複合文書</strong>を表します。</p>

<p>HTTP は <code>multipart/form-data</code> が <a href="/ja/docs/Web/Guide/HTML/Forms">HTML フォーム</a>の {{HTTPMethod("POST")}} メソッドで使用されたり、 <code>multipart/byteranges</code> が文書の一部を送信するために {{HTTPStatus("206")}} <code>Partial Content</code> で使用されたりする例外を除いて、 HTTP はマルチパート文書を特定の方法で扱いません。メッセージは (おそらく文書をインラインで表示する方法がわからず、「名前を付けて保存」をすることを提案されるでしょうが) ブラウザーへ送信されます。</p>

<p>マルチパート型は二種類があります。</p>

<dl>
 <dt><code>message</code> <a href="https://www.iana.org/assignments/media-types/media-types.xhtml#message" style="float: right;">IANA での一覧</a></dt>
 <dd>A message that encapsulates other messages. This can be used, for instance, to represent an email that includes a forwarded message as part of its data, or to allow sending very large messages in chunks as if it were multiple messages. Examples include <code>message/rfc822</code> (for forwarded or replied-to message quoting) and <code>message/partial</code> to allow breaking a large message into smaller ones automatically to be reassembled by the recipient.</dd>
 <dt><code>multipart</code> <a href="https://www.iana.org/assignments/media-types/media-types.xhtml#multipart" style="float: right;">IANA での一覧</a></dt>
 <dd>Data that is comprised of multiple components which may individually have different MIME types. Examples include <code>multipart/form-data</code> (for data produced using the {{domxref("FormData")}} API) and <code>multipart/byteranges</code> (defined in {{RFC(7233, "5.4.1")}} and used with {{Glossary("HTTP")}}'s {{HTTPStatus(206)}} "Partial Content" response returned when the fetched data is only part of the content, such as is delivered using the {{HTTPHeader("Range")}} header).</dd>
</dl>

<h2 id="Important_MIME_types_for_Web_developers" name="Important_MIME_types_for_Web_developers">ウェブ開発者向けの重要な MIME タイプ</h2>

<h3 id="applicationoctet-stream">application/octet-stream</h3>

<p>これは、バイナリファイルでは既定です。これは<em>未知のバイナリ形式</em>のファイルを表すものであり、ブラウザーはふつう実行したり、実行するべきか確認したりしません。これらは {{HTTPHeader("Content-Disposition")}} ヘッダーの値に <code>attachment</code> が設定されたかのように扱い、「名前を付けて保存」ダイアログを提案します。</p>

<h3 id="textplain">text/plain</h3>

<p>これは、テキスト形式のファイルの既定です。実際には「未知のテキスト形式」のファイルを表すものではありますが、ブラウザーは表示可能であると推測します。</p>

<div class="blockIndicator note">
<p><code>text/plain</code> は「任意のテキスト形式データ」を表すものではありませんので注意してください。特定の種類のテキスト形式のデータを想定している場合は、おそらくそのとおりに判断されないでしょう。特に、CSS ファイルを宣言する {{HTMLElement("link")}} 要素から <code>text/plain</code> 形式のファイルをダウンロードすると、 <code>text/plain</code> で示されたファイルは正しい CSS ファイルであると認識されません。 CSS の MIME タイプである <code>text/css</code> を使用しなければなりません。</p>
</div>

<h3 id="textcss">text/css</h3>

<p>ウェブページをスタイル付けするための CSS ファイルは <code>text/css</code> で送信することが<strong>必要</strong>です。サーバーが CSS ファイルについて <code>.css</code> の接尾辞を認識しない場合、 <code>text/plain</code> や <code>application/octet-stream</code> の MIME タイプで送信することがあります。その場合、多くのブラウザーから CSS として認識されず、無視されることになります。</p>

<h3 id="texthtml">text/html</h3>

<p>すべての HTML コンテンツは、このタイプで提供するべきです。 XHTML 向けの新たな MIME タイプ (<code>application/xhtml+xml</code> など) は、現在ではほぼ無用です。</p>

<div class="blockIndicator note">
<p><strong>メモ:</strong> XML の厳密な解釈ルールや、 <code><a href="/ja/docs/Web/API/CDATASection">&lt;![CDATA[…]]&gt;</a></code> セクション、 HTML/SVG/MathML の名前空間に含まれない要素を使用したい場合は、 <code>application/xml</code> または <code>application/xhtml+xml</code> を使用してください。</p>
</div>

<h3 id="textjavascript"><span id="JavaScript_types">text/javascript</span></h3>

<p>HTML 仕様書では、 JavaScript ファイルは MIME タイプとして常に <code>text/javascript</code> を使用することになっています。他の値は妥当であると見なされず、これらを使用するとスクリプトが読み込まれなかったり、実行されなかったりする結果になる可能性があります。</p>

<p>歴史的な理由で、 <a href="https://mimesniff.spec.whatwg.org/">MIME スニッフィング標準</a> (ブラウザーがメディアタイプをどのように解釈し、有効なタイプを持たないコンテンツをどう処理するかを定義する方法の定義) は、 JavaScript を以下のいずれかと基本的に一致する MIME タイプを使用して提供することを許可しています。</p>

<ul>
 <li><code>application/javascript</code></li>
 <li><code>application/ecmascript</code></li>
 <li><code>application/x-ecmascript</code> {{Non-standard_Inline}}</li>
 <li><code>application/x-javascript</code> {{Non-standard_Inline}}</li>
 <li><code>text/javascript</code></li>
 <li><code>text/ecmascript</code></li>
 <li><code>text/javascript1.0</code> {{Non-standard_Inline}}</li>
 <li><code>text/javascript1.1</code> {{Non-standard_Inline}}</li>
 <li><code>text/javascript1.2</code> {{Non-standard_Inline}}</li>
 <li><code>text/javascript1.3</code> {{Non-standard_Inline}}</li>
 <li><code>text/javascript1.4</code> {{Non-standard_Inline}}</li>
 <li><code>text/javascript1.5</code> {{Non-standard_Inline}}</li>
 <li><code>text/jscript</code> {{Non-standard_Inline}}</li>
 <li><code>text/livescript</code> {{Non-standard_Inline}}</li>
 <li><code>text/x-ecmascript</code> {{Non-standard_Inline}}</li>
 <li><code>text/x-javascript</code> {{Non-standard_Inline}}</li>
</ul>

<div class="blockIndicator note">
<p><strong>Note:</strong> Even though any given {{Glossary("user agent")}} may support any or all of these, you should only use <code>text/javascript</code>. It's the only MIME type guaranteed to work now and into the future.</p>
</div>

<p>Some content you find may have a <code>charset</code> parameter at the end of the <code>text/javascript</code> media type, to specify the character set used to represent the code's content. This is not valid, and in most cases will result in a script not being loaded.</p>

<h3 id="Image_types" name="Image_types">画像タイプ</h3>

<p>Files whose MIME type is <code>image</code> contain image data. The subtype specifies which specific image file format the data represents. Only a few image types are used commonly enough to be considered safe for use on web pages:</p>

<p>{{page("/ja/docs/Web/Media/Formats/Image_types", "table-of-image-file-types")}}</p>

<h3 id="Audio_and_video_types" name="Audio_and_video_types">音声と動画のタイプ</h3>

<p>画像と同じく、 HTML は {{HTMLElement("audio")}} や {{HTMLElement("video")}} 要素で対応している型を定義していないので、ウェブで使用することができるのは一部のみです。 <a href="/ja/docs/Web/HTML/Supported_media_formats">HTML5 の audio と video 要素で対応しているメディア形式</a>で、使用可能なコーデックやコンテナーを説明しています。</p>

<p>Our <a href="/ja/docs/Web/Media/Formats/Containers">media container formats guide</a> provides a list of the file types that are commonly supported by web browsers, including information about what their special use cases may be, any drawbacks they have, and compatibility information, along with other details.</p>

<p>The <a href="/ja/docs/Web/Media/Formats/Audio_codecs">audio codec</a> and <a href="/ja/docs/Web/Media/Formats/Video_codecs">video codec</a> guides list the various codecs that web browsers often support, providing compatibility details along with technical information such as how many audio channels they support, what sort of compression is used, and what bit rates and so forth they're useful at. The <a href="/ja/docs/Web/Media/Formats/WebRTC_codecs">codecs used by WebRTC</a> guide expands upon this by specifically covering the codecs supported by the major web browsers, so you can choose the codecs that best cover the range of browsers you wish to support.</p>

<p>As for MIME types of audio or video files, they typically specify the container format (file type). The optional <a href="/ja/docs/Web/Media/Formats/codecs_parameter">codecs parameter</a> can be added to the MIME type to further specify which codecs to use and what options were used to encode the media, such as codec profile, level, or other such information.</p>

<p>The most commonly used MIME types used for web content are listed below. This isn't a complete list of all the types that may be available, however. See the <a href="/ja/docs/Web/Media/Formats/Containers">media container formats</a> guide for that.</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">MIME タイプ</th>
   <th scope="col">音声または動画のタイプ</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>audio/wave</code><br>
    <code>audio/wav</code><br>
    <code>audio/x-wav</code><br>
    <code>audio/x-pn-wav</code></td>
   <td>WAVE コンテナー形式の音声ファイル。 PCM オーディオコーデック (WAVE コーデック "1") はたいていサポートされていますが、他のコーデックのサポートは (あるとしても) 限定的です。</td>
  </tr>
  <tr>
   <td><code>audio/webm</code></td>
   <td>WebM コンテナー形式の音声ファイル。 Vorbis や Opus が WebM 仕様書で公式に対応しているコーデックです。</td>
  </tr>
  <tr>
   <td><code>video/webm</code></td>
   <td>WebM コンテナー形式の、おそらく音声も含む動画ファイル。VP8 や VP9 がもっとも一般的に使用される動画コーデックです。 Vorbis や Opus がもっとも一般的な音声コーデックです。</td>
  </tr>
  <tr>
   <td><code>audio/ogg</code></td>
   <td>Ogg コンテナー形式の音声ファイル。 Vorbis が、このコンテナーでもっとも一般的に使用される音声コーデックです。しかし、 Opus も同様に Ogg で対応しました。</td>
  </tr>
  <tr>
   <td><code>video/ogg</code></td>
   <td>Ogg コンテナー形式の、おそらく音声も含む動画ファイル。通常の動画コーデックは Theora、音声コーデックは Vorbis ですが、 Opus がもっと有名になってきています。</td>
  </tr>
  <tr>
   <td><code>application/ogg</code></td>
   <td>OGG コンテナー形式を使用する音声または動画のファイル。通常の動画コーデックは Theora、音声コーデックは Vorbis です。</td>
  </tr>
 </tbody>
</table>

<h3 id="multipartform-data">multipart/form-data</h3>

<p><code>multipart/form-data</code> タイプは、入力済みの <a href="/ja/docs/Web/Guide/HTML/Forms">HTML フォーム</a> の内容をブラウザーからサーバーに送信するときに使用することができます。</p>

<p>これはマルチパート文書形式として複数の部分から成り、境界 (二重ダッシュ <code>--</code> で始まる文字列) によって区切られます。それぞれの部分は固有のエンティティであり、固有の HTTP ヘッダーとして {{HTTPHeader("Content-Disposition")}} やファイルアップロードのフィールドには {{HTTPHeader("Content-Type")}} を持ちます。</p>

<pre class="syntaxbox notranslate">Content-Type: multipart/form-data; boundary=aBoundaryString
(マルチパート文書全体に関連付けられる、他のヘッダー)

--aBoundaryString
Content-Disposition: form-data; name="myFile"; filename="img.jpg"
Content-Type: image/jpeg

(データ)
--aBoundaryString
Content-Disposition: form-data; name="myField"

(データ)
--aBoundaryString
(サブパート)
--aBoundaryString--

</pre>

<p>以下の <code>&lt;form&gt;</code> があるとします。</p>

<pre class="brush: html notranslate">&lt;form action="http://localhost:8000/" method="post" enctype="multipart/form-data"&gt;
  &lt;label&gt;Name: &lt;input name="myTextField" value="Test"&gt;&lt;/label&gt;
  &lt;label&gt;&lt;input type="checkbox" name="myCheckBox"&gt; Check&lt;/label&gt;
  &lt;label&gt;Upload file: &lt;input type="file" name="myFile" value="test.txt"&gt;&lt;/label&gt;
  &lt;button&gt;Send the file&lt;/button&gt;
&lt;/form&gt;</pre>

<p>これは以下のメッセージを送信します。</p>

<pre class="notranslate">POST / HTTP/1.1
Host: localhost:8000
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Connection: keep-alive
Upgrade-Insecure-Requests: 1
Content-Type: multipart/form-data; boundary=---------------------------8721656041911415653955004498
Content-Length: 465

-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myTextField"

Test
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myCheckBox"

on
-----------------------------8721656041911415653955004498
Content-Disposition: form-data; name="myFile"; filename="test.txt"
Content-Type: text/plain

Simple file.
-----------------------------8721656041911415653955004498--

</pre>

<h3 id="multipartbyteranges">multipart/byteranges</h3>

<p><code>multipart/byteranges</code> MIME タイプは、部分的なレスポンスをブラウザーへ返すために使用されます。</p>

<p>{{HTTPStatus("206")}}<code> Partial Content</code> ステータスコードを送信するとき、この MIME タイプは文書がいくつかの部分で構成されていることを示しており、それぞれのリクエストされた範囲のひとつになります。ほかのマルチパート型と同様に、 {{HTTPHeader("Content-Type")}} で <code>boundary</code> を使用してそれぞれの部分を区切ります。それぞれの部分は実際のタイプを表す {{HTTPHeader("Content-Type")}} ヘッダーと、表現している範囲を表す {{HTTPHeader("Content-Range")}} ヘッダーを持ちます。</p>

<pre class="notranslate"><code>HTTP/1.1 206 Partial Content
Accept-Ranges: bytes
Content-Type: multipart/byteranges; boundary=3d6b6a416f9b5
Content-Length: 385

--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 100-200/1270

eta http-equiv="Content-type" content="text/html; charset=utf-8" /&gt;
    &lt;meta name="vieport" content
--3d6b6a416f9b5
Content-Type: text/html
Content-Range: bytes 300-400/1270

-color: #f0f0f2;
        margin: 0;
        padding: 0;
        font-family: "Open Sans", "Helvetica
--3d6b6a416f9b5--</code></pre>

<h2 id="Importance_of_setting_the_correct_MIME_type" name="Importance_of_setting_the_correct_MIME_type">正しい MIME タイプを設定することの重要性</h2>

<p>多くのウェブサーバーは未知の種類のリソースについて、既定の <code>application/octet-stream</code> MIME タイプを送ります。セキュリティ上の理由で、多くのブラウザーはこのようなリソースに既定のアクションを定義することを許可せず、リソースを使用するためにディスクへ保存することをユーザーに強制します。</p>

<p>以下のような誤ったサーバー設定がよく見られます。</p>

<ul>
 <li>
  <p>RAR で圧縮されたファイル。この場合、元ファイルの実際の種類であることが理想です。これは、 .RAR ファイルがさまざまな種類の複数のリソースを含むことができるため、たいていは不可能です。この場合、サーバーが <code>application/x-rar-compressed</code> を送信するように設定してください。</p>
 </li>
 <li>
  <p>音声および動画。正しい MIME タイプを持つリソースだけが、 {{HTMLElement("video")}} または {{HTMLElement("audio")}} 要素で再生されます。<a href="/ja/docs/Web/Media/Formats">音声および動画に対して正しい MIME タイプを使用する</a>よう注意してください。</p>
 </li>
 <li>
  <p>プロプライエタリーなファイルタイプ。特別な操作ができなくなるため、<code>application/octet-stream</code> の使用は避けてください。ほとんどのブラウザーは、この汎用的な MIME タイプに既定の動作 (「Word で開く」など) を定義することができません。 <code>application/vnd.mspowerpoint</code> のような特定の型ならば、ユーザーがそのようなファイルを自動的に選択したプレゼンテーションソフトウェアで開くことができます。</p>
 </li>
</ul>

<h2 id="MIME_sniffing" name="MIME_sniffing">MIME スニッフィング</h2>

<p>MIME タイプが欠落している、あるいは MIME タイプが誤って設定されているとクライアントが考えている場合に、ブラウザーは MIME スニッフィングを行います。これは、リソースを確認して正しい MIME タイプを推測します。</p>

<p>MIME スニッフィングはブラウザーによって異なる方法で、異なる状況下で行います。 (例えば、 Safari は受信した MIME タイプが合わない場合は、 URL のファイルの拡張子を見ます。) 実行可能なコンテンツを表す MIME タイプの一部には、セキュリティ上の懸念があります。サーバーは {{HTTPHeader("X-Content-Type-Options")}} を送信することで、MIME スニッフィングを抑制できます。</p>

<h2 id="Other_methods_of_conveying_document_type" name="Other_methods_of_conveying_document_type">文書形式を伝える他の方法</h2>

<p>MIME タイプは、文書の種類の情報を伝える唯一の方法ではありません。</p>

<ul>
 <li>特に Microsoft Windows では、ファイル名の拡張子を使用することがあります。拡張子に意味があるとは考えないオペレーティングシステムもありますし (Linux や Mac OS など)、正しいという保証はありません。</li>
 <li>マジックナンバー。バイト構造を見ることで、様々な形式の構文によりファイルタイプを推測することができます。例えば GIF ファイルは16進数の値 <code>47 49 46 38 39</code> (<code>GIF89</code>)、 PNG ファイルは <code>89 50 4E 47</code> (<code>.PNG</code>) で始まります。マジックナンバーを持たない種類のファイルもありますので、100%信頼できるシステムではありません。</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Web/Media">ウェブメディア技術</a></li>
 <li><a href="/ja/docs/Web/Media/Formats">ウェブ上で使用されるメディア形式のガイド</a></li>
 <li><a href="/ja/docs/Web/Security/Securing_your_site/Configuring_server_MIME_types">サーバーの MIME タイプの正しい構成</a></li>
</ul>
