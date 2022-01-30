---
title: コンテントネゴシエーション
slug: Web/HTTP/Content_negotiation
tags:
  - Content Negotiation
  - Content Negotiation Reference
  - HTTP
  - Reference
  - コンテントネゴシエーション
translation_of: Web/HTTP/Content_negotiation
---
<div>{{HTTPSidebar}}</div>

<p class="summary"><a href="/ja/docs/Glossary/HTTP">HTTP</a> において<ruby><em><strong>コンテントネゴシエーション</strong></em><rp> (</rp><rt>content negotiation</rt><rp>) </rp></ruby>は、同じ URL におけるさまざまな表現のリソースを提供するために使用する仕組みであり、ユーザーエージェントはどのリソースがユーザーにもっとも適しているか (例えばどの文書の言語か、どの画像形式か、どのコンテンツエンコード方式か) を指定することができます。</p>

<h2 id="Principles_of_content_negotiation" name="Principles_of_content_negotiation">コンテントネゴシエーションの原理</h2>

<p>特定の文書は<ruby><em>リソース</em><rp> (</rp><rt>resource</rt><rp>) </rp></ruby>と呼ばれます。クライアントがリソースを取得したいときは、 URL を使用してリクエストします。サーバーはこの URL を、提供するものを複数の変化形からひとつ選択するために使用し – それぞれの変化形は<ruby><em>表現</em><rp> (</rp><rt>representation</rt><rp>) </rp></ruby>と呼ばれます – 特定の表現をクライアントに返します。それぞれの表現を含むリソース全体が一つの特定の URL を持ちます。リソースが呼び出されたときに特定の表現を選択する方法は<em>コンテントネゴシエーション</em>によって決められ、クライアントサーバーの間で交渉する方法がいくつかあります。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13789/HTTPNego.png" style="height: 311px; width: 767px;"></p>

<p>最適な表現の決定は、以下の 2 つの仕組みのいずれかによって行われます。</p>

<ul>
 <li>クライアントによる特定の <a href="/ja/docs/Web/HTTP/Headers">HTTP ヘッダー</a> (<em>サーバー駆動型ネゴシエーション</em> または <em>プロアクティブネゴシエーション</em>)。これは、特定の種類のリソースで交渉を行う標準的な方法です。</li>
 <li>サーバーによる {{HTTPStatus("300")}} (Multiple Choices) または {{HTTPStatus("406")}} (Not Acceptable) <a href="/ja/docs/Web/HTTP/Status">HTTP レスポンスコード</a> (<em>エージェント駆動型ネゴシエーション</em> または <em>リアクティブネゴシエーション</em>)。これはフォールバック機構として使用します。</li>
</ul>

<p>数年来、<a href="https://tools.ietf.org/html/rfc2295">透過的コンテントネゴシエーション (transparent content negotiation)</a> や <code>Alternates</code> ヘッダーといった他のコンテントネゴシエーションが提案されてきました。これらは支持を得られず、破棄されました。</p>

<h2 id="Server-driven_content_negotiation" name="Server-driven_content_negotiation">サーバー駆動型コンテントネゴシエーション</h2>

<p><em>サーバー駆動型コンテントネゴシエーション</em> またはプロアクティブコンテントネゴシエーションでは、ブラウザー (または他のユーザーエージェント) が URI と共にいくつかの HTTP ヘッダーを送信します。これらのヘッダーは、ユーザーにとって好ましいものを表します。サーバーではそれらを手がかりとして使用して内部アルゴリズムが、クライアントに提供する最善のコンテンツを選択します。そのアルゴリズムはサーバーによって異なり、標準化されていません。例として、<a href="http://httpd.apache.org/docs/current/ja/content-negotiation.html#algorithm">Apache ネゴシエーションアルゴリズム</a> をご覧ください。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13791/HTTPNegoServer.png" style="height: 380px; width: 767px;"></p>

<p>HTTP/1.1 標準では、サーバー駆動型ネゴシエーションを開始する標準ヘッダーの一覧 ({{HTTPHeader("Accept")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}) を定義しています。厳密に言えば {{HTTPHeader("User-Agent")}} はこの一覧に含まれていませんが、要求したリソースの特定の表現を送信するために使用されることがあります。ただし、これはよい慣習ではないと考えられています。サーバーはどのヘッダーを実際にコンテントネゴシエーションで使用したかを示すために {{HTTPHeader("Vary")}} ヘッダー (あるいは、より的確な関係があるレスポンスヘッダー) を使用します。これにより、<a href="/ja/docs/Web/HTTP/Caching">キャッシュ</a> が適切に機能します。</p>

<p>さらに、ネゴシエーションに使用できるヘッダーを追加する実験的な提案があり、<em>client hints</em> と呼ばれています。 client hints は、ユーザーエージェントを実行しているデバイスがどのようなものか (例えば、デスクトップコンピューターかモバイル端末か) を伝えます。</p>

<p>サーバー駆動型コンテントネゴシエーションはリソースの特定の表現を決定するためのもっとも一般的な方法ですが、いくつか欠点があります:</p>

<ul>
 <li>サーバーは、ブラウザーのことをすべて知っているわけではありません。Client Hints 拡張を加えても、ブラウザーの機能を完全には把握できません。クライアントが選択するリアクティブコンテントネゴシエーションとは異なり、サーバーの選択はすべて若干独断的です。</li>
 <li>クライアントが提供する情報はかなり冗長であり (HTTP/2 のヘッダー圧縮は、この問題を緩和します)、またプライバシーのリスク (HTTP フィンガープリンティング) もあります。</li>
 <li>指定されたリソースの複数の表現を送信すると、共有キャッシュの効率が下がります。また、サーバーの実装はより複雑になります。</li>
</ul>

<h3 id="The_Accept_header" name="The_Accept_header">Accept ヘッダー</h3>

<p>{{HTTPHeader("Accept")}} ヘッダーは、エージェントが処理することを望むメディアリソースの MIME タイプを羅列します。これはカンマ区切りで MIME タイプで並べており、それぞれの MIME タイプは、別の MIME タイプとの相対的な優先度を示すパラメータであるクオリティファクターと結びつけられています。</p>

<p>{{HTTPHeader("Accept")}} ヘッダーはブラウザーまたは他のユーザーエージェントによって定義され、それは HTML ページ・画像・動画・スクリプトなど取得するものによって変わる場合があります。アドレスバーで指定したドキュメントを取得するときと {{ HTMLElement("img") }}, {{ HTMLElement("video") }}, {{ HTMLElement("audio") }} 要素でリンクしたものを取得するときで、このヘッダーは異なります。ブラウザーはこのヘッダーで、最適と思われる値を自由に使用できます。<a href="/ja/docs/Web/HTTP/Content_negotiation/List_of_default_Accept_values">一般的なブラウザーの既定値</a> の包括的な一覧があります。</p>

<h3 id="The_Accept-CH_header_experimental_inline" name="The_Accept-CH_header_experimental_inline">Accept-CH ヘッダー {{experimental_inline}}</h3>

<div class="note">
<p>これは<em>クライアントヒント (Client Hints)</em> と呼ばれる<strong>実験的</strong>な技術の一部であり、現在は Chrome 46 以降が実装しています。 Device-Memory の値は Chrome 61 以降が実装しています。</p>
</div>

<p>実験的な {{HTTPHeader("Accept-CH")}} は、サーバーが適切なリソースを選択するために使用できる設定データを羅列します。有効な値は以下のとおりです:</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">値</th>
   <th scope="col">意味</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>Device-Memory</code></td>
   <td>端末に搭載されている RAM のおおよその量を示します。この値は、2の整数乗を1024で割った近似値です。たとえば、512メガバイトは <code>0.5</code> として報告されます。</td>
  </tr>
  <tr>
   <td><code>DPR</code></td>
   <td>クライアントのデバイスピクセル比を示します。</td>
  </tr>
  <tr>
   <td><code>Viewport-Width</code></td>
   <td>レイアウトビューポートの幅を CSS ピクセルで示します。</td>
  </tr>
  <tr>
   <td><code>Width</code></td>
   <td>リソースの幅を物理ピクセルで示します (言い換えると、画像の本来の幅です)。</td>
  </tr>
 </tbody>
</table>

<h3 id="The_Accept-Charset_header" name="The_Accept-Charset_header">Accept-Charset ヘッダー</h3>

<p>{{HTTPHeader("Accept-Charset")}} ヘッダーは、ユーザーエージェントが理解する文字エンコーディングが何かを、サーバーに示します。伝統的に、例えば西ヨーロッパロケールでは <code>ISO-8859-1,utf-8;q=0.7,*;q=0.7</code> のように、ブラウザーのために各ロケールへさまざまな値を設定していました。</p>

<p>UTF-8 が良好にサポートされるようになり、文字をエンコードする方法として推奨されるようになっています。また、<a href="https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy">設定に基づくエントロピーを減らしてプライバシーを保護するため</a>に、ブラウザーは <code>Accept-Charset</code> ヘッダーを省略するようになっています。 Internet Explorer 8, Safari 5, Opera 11, Firefox 10, Chrome 27 はこのヘッダーの使用を取りやめました。</p>

<h3 id="The_Accept-CH-Lifetime_header" name="The_Accept-CH-Lifetime_header">Accept-CH-Lifetime ヘッダー</h3>

<div class="note">
<p>これは、<strong>実験的</strong>な<em>クライアントヒント</em>と呼ばれる技術の一部であり、 Chrome 61 以降でしか利用できません。</p>
</div>

<p>{{HTTPHeader("Accept-CH-Lifetime")}} ヘッダーは、 <code>Accept-CH</code> ヘッダーの <code>Device-Memory</code> 値と共に使用され、端末がメモリの量をサーバーと共有することを許可すべき時間を示します。値はミリ秒単位で与えられ、使用は任意です。</p>

<h3 id="The_Accept-Encoding_header" name="The_Accept-Encoding_header">Accept-Encoding ヘッダー</h3>

<p>{{HTTPHeader("Accept-Encoding")}} ヘッダーは、受け入れ可能な content-encoding (サポートする圧縮方式) を定義します。この値は、エンコーディングの優先度を示す Q 値のリスト (例: <code>br, gzip;q=0.8</code>) です。既定値 <code>identity</code> は (ほかに宣言されていなければ) 優先度が最低です。</p>

<p>HTTP メッセージの圧縮はウェブサイトのパフォーマンスを向上させるためにもっとも有力な手段のひとつであり、転送するデータのサイズを削減して利用可能な帯域を有効活用します。ブラウザーは常にこのヘッダーを送信します。またサーバーはこのヘッダーを受け入れるように設定して、圧縮を行うべきです。</p>

<h3 id="The_Accept-Language_header" name="The_Accept-Language_header">Accept-Language ヘッダー</h3>

<p>{{HTTPHeader("Accept-Language")}} ヘッダーは、ユーザーの言語設定を示すために使用します。これは、quality factor を伴う値のリストです (例: <code>"de, en;q=0.7</code>")。既定値はたいてい、ユーザーエージェントのグラフィカルインターフェイスの言語に従いますが、ほとんどのブラウザーでは異なる言語設定を適用できます。</p>

<p>変更された値はユーザーのフィンガープリントとして使用できることから <a href="https://www.eff.org/deeplinks/2010/01/primer-information-theory-and-privacy">設定に基づくエントロピー</a> が高まるため、値を変更することは推奨されていません。またウェブサイトは、この値がユーザーの本当の希望を反映していると信じてはいけません。ユーザー体験を低下させる可能性があるため、サイトデザイナーはこのヘッダーで言語を検出することに熱心になってはいけません:</p>

<ul>
 <li>サイトデザイナーは、サーバーが選択した言語を変える手段を常に提供するべきです。例えば、サイトで言語メニューを提供します。例えばインターネットカフェでは、多くのユーザーエージェントは <code>Accept-Language</code> ヘッダーに、ユーザーインターフェイスの言語に適合する既定値を設定しており、またユーザーはたいていその設定を変更しません。これは変更方法を知らない、あるいは変更できないためです。</li>
 <li>サーバーが選択した言語をユーザーが上書きしたら、サイトは言語検出を使用せず、明示的に指定された言語に従うべきです。言い換えると、サイトの入り口のページだけがこのヘッダーを使用して適切な言語を選択するべきです。</li>
</ul>

<h3 id="The_User-Agent_header" name="The_User-Agent_header">User-Agent ヘッダー</h3>

<div class="note">
<p>このヘッダーをコンテンツの選択に使用することは理にかなっていますが、ユーザーエージェントがどの機能をサポートしているかを判断するためにこのヘッダーを頼ることは <a href="/ja/docs/Web/HTTP/Browser_detection_using_the_user_agent">悪い習慣であると考えられています</a>。</p>
</div>

<p>{{HTTPHeader("User-Agent")}} ヘッダーは、リクエストを送信するブラウザーを明らかにします。この文字列には、空白区切りで<em>プロダクトトークン</em>や<em>コメント</em>のリストが含まれるでしょう。</p>

<p><em>プロダクトトークン</em>は <code>Firefox/4.0.1</code> のように、名称、スラッシュ '<code>/</code>'、バージョン番号で構成されます。これはユーザーエージェントの必要性に応じて、複数存在することがあります。<em>コメント</em> は、括弧で囲まれた自由な文字列です。当然ながら、その文字列内で括弧を使用することはできません。コメントの内部形式は標準化されておらず、従って各ブラウザがさまざまなトークンをセミコロン '<code>;</code>' 区切りで入れています。</p>

<h3 id="The_Vary_response_header" name="The_Vary_response_header">Vary レスポンスヘッダー</h3>

<p>クライアントが送信する前出の <code>Accept-*</code> ヘッダーとは対照的に、 {{HTTPHeader("Vary")}} HTTP ヘッダーはウェブサーバーがレスポンスで送信します。これは、サーバーがサーバー駆動型コンテントネゴシエーションで使用したヘッダーのリストを示します。このヘッダーはネゴシエーションを再現できるように、判断基準のキャッシュを知らせるために必要であり、キャッシュが機能を果たすようにするとともに、ユーザーに誤ったコンテンツを提供することを防ぎます。</p>

<p>特別な値 '<code>*</code>' は、サーバー駆動型コンテントネゴシエーションで適切なコンテンツを選ぶために、ヘッダーで与えられていない情報も使用することを表します。</p>

<p><code>Vary</code> ヘッダーは HTTP バージョン 1.1 で追加され、キャッシュが適切に働くようにするために必要です。サーバー駆動型コンテントネゴシエーションが機能するには、転送されたコンテンツを選択するためにサーバーが使用した基準を知るためのキャッシュが必要です。この方法で、キャッシュはコンテンツ選択のアルゴリズムを再生することを可能にして、サーバーへさらにリクエストを行うことなく適切なコンテンツを直接提供できるでしょう。当然ながらワイルドカード '<code>*</code>' は、背後にある要素をキャッシュで知ることができないため、キャッシュの生成を妨げます。</p>

<h2 id="Agent-driven_negotiation" name="Agent-driven_negotiation">エージェント駆動型ネゴシエーション</h2>

<p>サーバー駆動型ネゴシエーションには少々弱点があり、うまくスケーリングできません。ネゴシエーションでは、ひとつの機能に対してひとつのヘッダーを使用します。例えばスクリーンサイズ、解像度、または他の寸法を使用したい場合は、新たな HTTP ヘッダーを作成しなければなりません。またヘッダーは、すべてのリクエストで送信しなければなりません。ヘッダーが少ない場合は問題になりにくいのですが、それらを掛け合わせた結果メッセージサイズがパフォーマンス低下の原因になるかもしれません。多くの詳細なヘッダーを送信するとエントロピーも多く送信されますので、HTTP フィンガープリンティングの可能性やそれに伴うプライバシーの懸念が増大します。</p>

<p>HTTP は初期のうちから、もうひとつのネゴシエーション方法である<em>エージェント駆動型ネゴシエーション</em>または<em>リアクティブネゴシエーション</em>を使用できます。このネゴシエーションではあいまいなリクエストが発生したときに、サーバーは使用可能なリソースへのリンクを含むページを返します。ユーザーにはそれらのリソースが差し出されて、そこから使用するものを選択します。</p>

<p><img alt="" src="https://mdn.mozillademos.org/files/13795/HTTPNego3.png"></p>

<p>残念ながら HTTP 標準では使用可能なリソースを選択できるページの様式を定めておらず、このプロセスを容易に自動化できない状況です。<em>サーバー駆動型ネゴシエーション</em>のフォールバックのほかにも、この方法はほとんどの場合スクリプト、特に JavaScript のリダイレクトともに使用します。ネゴシエーション基準を確認した後、スクリプトがリダイレクトを実行します。第二の問題点は、実際のリソースを取り出すために複数のリクエストが必要であるため、ユーザーがリソースを利用可能になるのが遅れることです。</p>
