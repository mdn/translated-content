---
title: HTTP の進化
slug: Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP
tags:
  - Guide
  - HTTP
  - NeedsUpdate
  - NeedsUpdate(HTTP/3)
translation_of: Web/HTTP/Basics_of_HTTP/Evolution_of_HTTP
---
<div>{{HTTPSidebar}}</div>

<p class="summary"><span class="seoSummary"><strong>HTTP</strong> は World Wide Web を支えるプロトコルです。</span> Tim Berners-Lee によって 1989-1991 年に開発されれてから、HTTP にはシンプルさのほとんどを維持しながら柔軟性をさらに形作る、多くの変更がみられます。 <span class="seoSummary">HTTP は初期のいくぶん信頼された研究所の環境内でファイルを交換するプロトコルから、現代のインターネットの迷宮で高解像度や 3D の画像や動画を運ぶプロトコルに進化しました。</span></p>

<h2 id="Invention_of_the_World_Wide_Web" name="Invention_of_the_World_Wide_Web">World Wide Web の発明</h2>

<p>1989 年、 CERN で働いていた Tim Berners-Lee は、インターネット上のハイパーテキストシステムを構築するための提案書を執筆しました。当初 <em>Mesh</em> と呼ばれていたそのシステムは、1990 年に実装されている間に <em>World Wide Web</em> へ改名されました。 World Wide Web は既存の TCP および IP プロトコル上に構築され、4 つの要素から構成されました:</p>

<ul>
 <li>ハイパーテキスト文書を表現するテキスト形式である <em><a href="/ja/docs/Web/HTML">HyperText Markup Language</a></em> (HTML)。</li>
 <li>それらの文書を交換するシンプルなプロトコルである <em>HypertText Transfer Protocol </em>(HTTP)。</li>
 <li>それらの文書を表示 (および付随的に編集) するクライアントである、<em>WorldWideWeb</em> と呼ばれた最初のウェブブラウザー。</li>
 <li>文書へのアクセス機能を提供するサーバーである、<em>httpd</em> の初期バージョン。</li>
</ul>

<p>これら 4 つの構成要素は 1990 年の末に完成して、最初のサーバーが早くも 1991 年の初期に CERN の外部で稼働しました。1991 年 8 月 6 日の、 Tim Berners-Lee による <em>alt.hypertext</em> 公開ニュースグループへの <a href="https://www.w3.org/People/Berners-Lee/1991/08/art-6484.txt">投稿</a> が、公開プロジェクトとしての World Wide Web の公式な開始日と考えられています。</p>

<p>初期段階で使用された HTTP プロトコルはとてもシンプルであり、後に HTTP/0.9 と名付けられ、また時にはワンラインプロトコルとも呼ばれました。</p>

<h2 id="HTTP0.9_–_The_one-line_protocol" name="HTTP0.9_–_The_one-line_protocol">HTTP/0.9 – ワンラインプロトコル</h2>

<p>初期バージョンの HTTP にはバージョン番号がありませんでした。以降のバージョンと区別するため、後に 0.9 と呼ばれるようになりました。HTTP/0.9 はとても単純です。リクエストは唯一使用可能なメソッドである {{HTTPMethod("GET")}} で始まって、リソースへのパス (サーバーに接続すればプロトコル、サーバー名、ポートが必要ではなくなるため、 URL ではありません) が後に続く 1 行で構成されます。</p>

<pre class="notranslate">GET /mypage.html</pre>

<p>レスポンスも、とても単純です。こちらはファイル自身だけで構成されます。</p>

<pre class="notranslate">&lt;HTML&gt;
A very simple HTML page
&lt;/HTML&gt;</pre>

<p>以降の進化形とは異なり、HTTP ヘッダーがなく HTML ファイルだけが転送可能であり、他の種類の文書は転送できません。また、ステータスやエラーのコードはありません。問題が発生すると、人間が使用するために問題の説明を収めた専用の HTML ファイルを返送します。</p>

<h2 id="HTTP1.0_–_Building_extensibility" name="HTTP1.0_–_Building_extensibility">HTTP/1.0 – 拡張性を築く</h2>

<p>HTTP/0.9 は制約がとても多いため、多目的に使用できるようにブラウザーやサーバーがいち早く拡張しました。</p>

<ul>
 <li>各リクエストでバージョン情報を送信するようになりました (<code>HTTP/1.0</code> が <code>GET</code> の行に追加されました)。</li>
 <li>レスポンスの始めにステータスコードの行を送信し、ブラウザー自体がリクエストの成功または失敗を理解して、その結果に応じて動作を順応できる (特定の方法でローカルのキャッシュを更新または使用するなど) ようになりました</li>
 <li>リクエストとレスポンスの両方で HTTP ヘッダーの概念を導入して、メタデータの送信を可能にするとともにプロトコルを極めて柔軟かつ拡張可能にしました。</li>
 <li>新たな HTTP ヘッダーの助けを借りて、プレーン HTML ファイル以外の文書を転送する機能を追加する ({{HTTPHeader("Content-Type")}} ヘッダーのおかげ)。</li>
</ul>

<p>この時点で、一般的なリクエストとレスポンスはこのようになりました。</p>

<pre class="notranslate">GET /mypage.html HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:31 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/html
&lt;HTML&gt;
A page with an image
  &lt;IMG SRC="/myimage.gif"&gt;
&lt;/HTML&gt;</pre>

<p>次のコネクションが続いて、画像の読み込みをリクエストします (前のリクエストのレスポンスに続きます)。</p>

<pre class="notranslate">GET /myimage.gif HTTP/1.0
User-Agent: NCSA_Mosaic/2.0 (Windows 3.1)

200 OK
Date: Tue, 15 Nov 1994 08:12:32 GMT
Server: CERN/3.0 libwww/2.17
Content-Type: text/gif
<em>(画像コンテンツ)</em></pre>

<p>これらの新機能は協調作業によらず、1991 年から 1995 年の間に試行錯誤によって導入されました。サーバーとブラウザーにある機能を追加して、効果があるかを確認していました。多くの相互運用性の問題が日常茶飯事でした。1996 年 11 月にこれらの問題を解消するため、共通の慣行を説明する情報文書である {{RFC(1945)}} が発行されました。これは HTTP/1.0 の定義であり、狭義の意味で公式の標準ではないことは注目に値します。</p>

<h2 id="HTTP1.1_–_The_standardized_protocol" name="HTTP1.1_–_The_standardized_protocol">HTTP/1.1 – 標準化されたプロトコル</h2>

<p>さまざまな HTTP/1.0 の使用によるやや混沌した状況と並行して、HTTP/1.0 の文書の公開を翌年に控えた 1995 年から、正式な標準化が進められました。HTTP で最初に標準化されたバージョンである HTTP/1.1 が、HTTP/1.0 から数か月後である 1997 年初頭に公開されました。</p>

<p>HTTP/1.1 ではあいまいな部分を明確にするとともに、いくつもの改良を施しました:</p>

<ul>
 <li>コネクションの再利用が可能になりました。最初に取り込んだひとつの文書内に埋め込まれているリソースを表示するために、コネクションを何度も開く時間を節約します。</li>
 <li>パイプライン機能を追加しました。最初のリクエストへの回答が完全に転送される前に次のリクエストを送信でき、通信のレイテンシーを削減します。</li>
 <li>Chunked 形式のレスポンスをサポートしました。</li>
 <li>新たなキャッシュ制御の仕組みを追加しました。</li>
 <li>言語、エンコーディング、タイプのコンテンツネゴシエーションを導入しました。クライアントとサーバーが、もっとも適切なコンテンツを交換するよう同意することができます。</li>
 <li>同じ IP アドレスで異なるドメインを提供できる {{HTTPHeader("Host")}} ヘッダーのおかげで、サーバーのコロケーションが可能になりました。</li>
</ul>

<p>ひとつのコネクションで行われる典型的なリクエストのフローは、以下のようになりました。</p>

<pre class="notranslate">GET /en-US/docs/Glossary/Simple_header HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/en-US/docs/Glossary/Simple_header

200 OK
Connection: Keep-Alive
Content-Encoding: gzip
Content-Type: text/html; charset=utf-8
Date: Wed, 20 Jul 2016 10:55:30 GMT
Etag: "547fa7e369ef56031dd3bff2ace9fc0832eb251a"
Keep-Alive: timeout=5, max=1000
Last-Modified: Tue, 19 Jul 2016 00:59:33 GMT
Server: Apache
Transfer-Encoding: chunked
Vary: Cookie, Accept-Encoding

<em>(コンテンツ)</em>


GET /static/img/header-background.png HTTP/1.1
Host: developer.mozilla.org
User-Agent: Mozilla/5.0 (Macintosh; Intel Mac OS X 10.9; rv:50.0) Gecko/20100101 Firefox/50.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate, br
Referer: https://developer.mozilla.org/en-US/docs/Glossary/Simple_header

200 OK
Age: 9578461
Cache-Control: public, max-age=315360000
Connection: keep-alive
Content-Length: 3077
Content-Type: image/png
Date: Thu, 31 Mar 2016 13:34:46 GMT
Last-Modified: Wed, 21 Oct 2015 18:27:50 GMT
Server: Apache

<em>(3077 バイトの画像コンテンツ)</em></pre>

<p>HTTP/1.1 は、1997 年 1 月に {{rfc(2068)}} として初版が発行されました。</p>

<h2 id="More_than_15_years_of_extensions" name="More_than_15_years_of_extensions">15 年以上にわたる拡張</h2>

<p>HTTP の拡張性 (新たなヘッダーやメソッドを容易に追加できる) のおかげで、HTTP/2 が公開される前に 1999 年 1 月に発行された {{RFC("2616")}} や 2014 年 6 月に発行された {{RFC("7230")}}-{{RFC("7235")}} によって HTTP/1.1 プロトコルが 2 度改版されても、このプロトコルは 15 年以上にわたって極めて安定していました。</p>

<h3 id="Using_HTTP_for_secure_transmissions" name="Using_HTTP_for_secure_transmissions">安全な転送のために HTTP を使用する</h3>

<p>HTTP でもっとも大きな変化が、早くも 1994 年の末に発生しました。基本的な TCP/IP スタック上で HTTP を送信するかわりに、TCP/IP の上層に追加する暗号化された転送レイヤーである SSL を Netscape Communications が開発しました。SSL 1.0 は社外に公開されませんでしたが、SSL 2.0 とその後継である SSL 3.0 は、サーバーとクライアントの間で交換されるメッセージの暗号化および信頼性の保証によって、電子商取引のウェブサイトの作成を可能にしました。 SSL は標準化の過程に乗せられて最終的に TLS になり、バージョン 1.0、1.1、1.2、1.3 が脆弱性を抑えることに成功しました。</p>

<p>それと同時に、暗号化されたトランスポート層の必要性が発生しました。ウェブが主に学術用ネットワークにある比較的信頼された状況を失って、広告者やさまざまな個人や犯罪者が人々の個人情報を多く得ようと競い合い、なりすましや改変されたデータによる置き換えを図るようになりました。HTTP 上に構築されたアプリケーションがさらに強力になるのに従ってアドレス帳、電子メール、ユーザーの位置情報といったさらに個人的な情報へアクセスするようになり、TLS の必要性は電子商取引を越えていたるところに存在します。</p>

<h3 id="Using_HTTP_for_complex_applications" name="Using_HTTP_for_complex_applications">複雑なアプリケーションのために HTTP を使用する</h3>

<p>Tim Berners-Lee による当初のウェブのビジョンは、読み取り専用の手段ではありませんでした。彼はウェブについて、人々が遠隔操作で文書を追加や移動することができる開かれたファイルシステムを描いていました。1996 年頃に HTTP はオーサリングができるように拡張され、WebDAV という名前の標準仕様が作られました。これはアドレス帳の項目を扱う CardDAV やカレンダーを扱う CalDAV など、特定のアプリケーション向けにさらに拡張されました。しかしこれらの *DAV 拡張には、それが使用するサーバーに実装されている必要があり、またとても複雑であったという欠点があります。ウェブの領域でこれらは、内輪で使用されているままです。</p>

<p>2000 年に、HTTP を使用する新たなパターンである {{glossary("REST", "representational state transfer")}} (REST) が考案されました。API が発したアクションは新たな HTTP メソッドによって伝達されず、基本的な HTTP/1.1 メソッドによって特定の URI にアクセスする場合に限られます。これによりウェブアプリケーションは、ブラウザーやサーバーを更新することなくデータの取り出しや変更ができる API の提供が可能になります。必要なものはすべて、標準の HTTP/1.1 によってウェブサイトから提供されるファイルに埋め込まれています。それぞれのウェブサイトが独自の非標準な RESTful API を定義して、それらがウェブサイトを制御するという事実に REST モデルの欠点があります。*DAV 拡張との違いは、クライアントとサーバーが相互使用可能ではないことです。RESTful API は、2010 年代にはとても一般的になりました。</p>

<p>2005 年よりウェブページを格段に向上させる API セットが利用可能になりました。またこれらのいくつかは特定用途向けに、主に新たな固有の HTTP ヘッダーを作成して HTTP プロトコルを拡張しました:</p>

<ul>
 <li><a href="/ja/docs/Web/API/Server-sent_events">Server-sent events</a>。サーバーがクライアントに対して、特別なメッセージを送信できます。</li>
 <li><a href="/ja/docs/Web/API/WebSocket_API">WebSocket</a>。既存の HTTP コネクションを更新することでセットアップできる、新たなプロトコルです。</li>
</ul>

<h3 id="Relaxing_the_security-model_of_the_Web" name="Relaxing_the_security-model_of_the_Web">ウェブのセキュリティモデルを緩和する</h3>

<p>HTTP はウェブのセキュリティモデルである <a href="/ja/docs/Web/Security/Same-origin_policy">同一オリジンポリシー</a> とは独立した存在です。実は、現在のウェブのセキュリティモデルは HTTP を作成した後に開発されたのです!長年かけて、一定の条件の下でこのポリシーの制限の一部を解除できるようにすることにより、より寛大にできることが有効であると立証されました。いつどのようにしてこれらの制限を解除するかは、新たな HTTP ヘッダー群を使用してサーバーからクライアントに送信されます。これは <a href="/ja/docs/Glossary/CORS">Cross-Origin Resource Sharing</a> (CORS) や <a href="/ja/docs/Web/Security/CSP">Content Security Policy</a> (CSP) といった仕様で定義されています。</p>

<p>これらの大きな拡張に加えて、ほかにも実験用に限るものを含めて多くのヘッダーが追加されました。主なヘッダーとしてプライバシーを制御するための Do Not Track ({{HTTPHeader("DNT")}}) ヘッダー、{{HTTPHeader("X-Frame-Options")}}、{{HTTPHeader('Upgrade-Insecure-Request')}} がありますが、さらに多くのヘッダーが存在します。</p>

<h2 id="HTTP2_–_A_protocol_for_greater_performance" name="HTTP2_–_A_protocol_for_greater_performance">HTTP/2 – 高パフォーマンスなプロトコル</h2>

<p>長年かけてウェブページはより複雑になり、アプリケーション自体も同様に複雑化しました。表示する視覚メディアの量や、対話機能を追加するスクリプトの規模やサイズも増加しました。著しく多くの HTTP リクエストによって、より多くのデータが転送されます。HTTP/1.1 のコネクションは、正しい順序でリクエストを送信しなければなりません。理論上は並行していくつかのコネクションを使用できます (通常 5 から 8 の間) が、かなりのオーバーヘッドや複雑性をもたらします。たとえば HTTP パイプラインは、ウェブ開発でリソースの負荷になることが明らかになりました。</p>

<p>2010 年代の前半に Google は実験的なプロトコルである SPDY を実装して、クライアントとサーバーの間でデータを交換するための代替手段を示しました。これは、ブラウザーやサーバーの両方の開発者から多くの関心を集めました。応答性の向上を明確にするとともに、転送するデータの重複による問題を解決することで、SPDY は HTTP/2 プロトコルの基礎を務めました。</p>

<p>HTTP/2 プロトコルには、HTTP/1.1 との大きな違いがいくつかあります:</p>

<ul>
 <li>テキスト形式ではなく、バイナリ形式のプロトコルです。このハードルにより内容を読んだり手作業で作成したりすることができなくなりましたが、改良された最適化技術を実装できるようになりました。</li>
 <li>多重化されたプロトコルです。同じコネクションでリクエストを並行して扱うことができ、HTTP/1.x プロトコルの順序やブロッキングの制約を排除しています。</li>
 <li>ヘッダーを圧縮します。一式のリクエスト内で似たものが存在することが多いため、これはデータ転送の重複やオーバーヘッドを削減します。</li>
 <li>サーバープッシュと呼ばれる仕組みによって、リクエストより先にサーバーがクライアントのキャッシュにデータを加えることができます。</li>
</ul>

<p>HTTP/2 は 2015 年 5 月に正式に標準化され、多くの成功例がありました。2016 年 7 月には、すべてのウェブサイトの 8.7% <sup><a href="https://w3techs.com/technologies/details/ce-http2/all/all">[1]</a></sup> ですでに使用されており、すべてのリクエストの 68% 以上を占めています<sup><a href="https://www.keycdn.com/blog/http2-statistics/">[2]</a></sup>。トラフィックが多いウェブサイトでもっとも早く採用されており、データ転送のオーバーヘッドやそれによる経費をかなり削減しています。</p>

<p>HTTP/2 はウェブサイトやアプリケーションの改造が不要 (これらにとって HTTP/1.1 を使用するか HTTP/2 を使用するかは透過的です) ですので、このすばやい採用のペースはもっともです。最近のブラウザーと通信する最新のサーバーがあれば、HTTP/2 を有効化するのに十分です。限られたグループだけが採用のきっかけとして必要であり、古いブラウザーやサーバーが更新されるのに従って、ウェブ開発者の努力なしに使用個所が自然に増えていきます。</p>

<h2 id="Post-HTTP2_evolution" name="Post-HTTP2_evolution">HTTP/2 以降の進化</h2>

<p>HTTP/2 の公開によって HTTP の進化が止まったわけではありません。過去の HTTP/1.x と同様に、新しい機能を追加するために HTTP の拡張性が今でも活用されています。特に、2016 年に現れた新たな HTTP の拡張を挙げることができます:</p>

<ul>
 <li>{{HTTPHeader("Alt-Svc")}} に対応することで、指定されたリソースの場所と同一性を分離することができ、よりスマートな {{Glossary("CDN")}} のキャッシュ機構を可能にします。</li>
 <li>{{HTTPHeader("Client-Hints")}} の導入によりブラウザーやクライアントがサーバーに対して、クライアントの要件やハードウェアの制約に関する情報を率先して伝えることができます。</li>
 <li>{{HTTPHeader("Cookie")}} ヘッダーに導入されたセキュリティ関連の接頭辞は、安全な Cookie が改変されていないことを保証する助けになります。</li>
</ul>

<p>これらの HTTP の進化はプロトコルの拡張性やシンプルさを実証しており、多くのアプリケーションの作成やプロトコルの採用を促しています。今日の HTTP が使用される環境は、1990 年代初頭にみられた環境とは大きく異なっています。 HTTP の本来の設計は傑作であることを実証しており、四半世紀にわたって抵抗されることなくウェブを進化させることができました。 HTTP を成功させた柔軟性や拡張性を維持ししながら欠点を直した HTTP/2 の採用は、プロトコルの明るい未来を暗示しています。</p>

<h2 id="HTTP3_-_HTTP_over_QUIC">HTTP/3 - HTTP over QUIC</h2>

<p>{{SeeCompatTable}}</p>

<p>次のメジャーバージョンの HTTP である HTTP/3 は、トランスポート層に TCP/TLS の代わりに QUIC を使用する予定です。</p>

<p>Firefox での実装状況については {{bug(1158011)}} を参照してください。</p>
