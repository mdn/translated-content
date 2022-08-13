---
title: ウェブのしくみ
slug: Learn/Getting_started_with_the_web/How_the_Web_works
tags:
  - Beginner
  - Client
  - DNS
  - HTTP
  - IP
  - Infrastructure
  - Learn
  - Server
  - TCP
  - l10n:priority
  - クライアント
  - サーバー
  - 初心者
  - 学習
translation_of: Learn/Getting_started_with_the_web/How_the_Web_works
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenu("Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}</div>

<div class="summary">
<p><em>ウェブのしくみ</em>では、あなたがコンピューターや携帯電話のウェブブラウザーでウェブページを見るときに起こることを簡単に説明します。</p>
</div>

<p>この理論は、ウェブのコードを書く上ですぐにでも必要というわけではありませんが、背景で何が起きているのかを理解しておくと、いずれ役に立つでしょう。</p>

<h2 id="Clients_and_servers">クライアントとサーバー</h2>

<p>ウェブに接続されたコンピューターは<strong>クライアント</strong> (client) と<strong>サーバー</strong> (server) と呼ばれます。これらがどのように相互作用するかを概略図で表すと次のようになります。</p>

<p><img alt="クライアントとサーバーを表す 2 つの円。リクエストと書かれた矢印は、クライアントからサーバーへ、レスポンスと書かれた矢印は、サーバーからクライアントへと向かっている。" src="simple-client-server.png"></p>

<ul>
 <li>クライアントは、一般的なウェブユーザーが使うインターネットに接続された端末 (例えば Wi-Fi に接続されているコンピューターや、モバイルネットワークに接続されているスマートフォン) と、これらの端末で利用できるウェブにアクセスするソフトウェア (ふつうは Firefox や Chrome などのウェブブラウザー) のことです。</li>
 <li>サーバーとは、ウェブページ、サイト、アプリを格納しているコンピューターのことです。クライアント端末がウェブページにアクセスしたいときは、ウェブページのコピーがサーバーからクライアントにダウンロードされ、ユーザーのウェブブラウザーに表示されます。</li>
</ul>

<h2 id="The_other_parts_of_the_toolbox">道具箱の他の部分</h2>

<p>もちろん上で説明したクライアントとサーバーだけでなく、これら二つ以外にも、他に多くのものが関わっています。以下では、それについて説明します。</p>

<p>いま、ウェブが道路であると想像してみましょう。道路の片端にクライアントがあり、そこは例えば、あなたの自宅のようなものです。反対の端はサーバーで、そこは例えば、あなたが何かを買うお店のようなものです。</p>

<p><img alt="" src="road.jpg" style="display: block; margin: 0px auto;"></p>

<p>クライアントとサーバーに加えて、以下のものにも触れなければなりません。</p>

<ul>
 <li><strong>インターネット接続</strong>: ウェブ上でデータの送受信をできるようにします。あなたの自宅とお店との間の通りのようなものです。</li>
 <li><strong>TCP/IP</strong>: Transmission Control Protocol と Internet Protocol は、どのようにウェブ上をデータが動くのか、を定義した通信プロトコルです。これは注文したり、店に行ったり、物を買ったりするための通信手段や交通機関のようなものです。身近な例では、車やバイク (またはその辺りにあるもの) のようなものです。</li>
 <li><strong>DNS</strong>: Domain Name Servers はウェブサイトの住所録のようなものです。ブラウザーにウェブアドレスを入力すると、ブラウザーはウェブサイトを取得する前に DNS を見て、ウェブサイトの本当のアドレスを探します。ブラウザーはウェブサイトがどのサーバーにいるかを探し出す必要があり、それで HTTP のメッセージを正しい場所 (下記参照) に送ることができます。これはお店の所在地を探してからお店に行くようなものです。</li>
 <li><strong>HTTP</strong>: Hypertext Transfer Protocol は、クライアントとサーバーが対話をする方法を定義するアプリケーション{{Glossary("Protocol" , "プロトコル")}}です。これは商品を注文するための言語のようなものです。</li>
 <li><strong>コンポーネントファイル</strong>: ウェブサイトは多くの異なるファイルで構成されます。これはお店で複数の部品を買うようなものです。これらのファイルは主に2種類に当てはまります。
  <ul>
   <li><strong>コードファイル</strong>: ウェブサイトは主に HTML、CSS、JavaScript から作られます。しかし、ちょっと後で他の技術にも出会うことになるでしょう。</li>
   <li><strong>アセット</strong>: これは画像、音楽、動画、Word 文書、PDF といったウェブサイトを構成するコード以外のすべての材料の集合的な名前です。</li>
  </ul>
 </li>
</ul>

<h2 id="So_what_happens_exactly">ならば何が起こるのか</h2>

<p>ブラウザーにウェブアドレスを打ち込んだ時に何が起こっているかというと (お店に歩いていく例えでは)、</p>

<ol>
 <li>ブラウザーは DNS サーバーにアクセスし、ウェブサイトのあるサーバーの実際のアドレスを探します (お店の住所を見つけます)。</li>
 <li>ブラウザーはサーバーに HTTP リクエストメッセージを送信して、ウェブサイトのコピーをクライアントに送るよう求めます (お店に行ってものを注文します)。このメッセージ、およびクライアントとサーバーの間でやりとりされるその他すべてのデータは、TCP/IP を使用してインターネット経由で送信されます</li>
 <li>サーバーがクライアントのリクエストを承認すると、サーバーはクライアントに 「200 OK」 というメッセージを送ります。これは「もちろんそのウェブサイトを見ることができます。どうぞ！」という意味です。そしてウェブサイトのファイルを、データパケットと呼ばれる一連の小さな塊 (chunk) としてブラウザーに送信し始めます (お店は商品を渡し、あなたは自宅に持って帰ります)</li>
 <li>ブラウザーは小さな塊を完全なウェブページに組み立て、表示します (玄関にものが到着しました — 新しいピカピカのものです、すばらしい！)</li>
</ol>

<h2 id="Order_in_which_component_files_are_parsed">コンポーネントファイルが解析される順番</h2>

<p>クライアントのリクエストが承認されると、サーバーはまず HTML (インデックス) ファイルを送り返します。 index.html は一般的に、サーバーによって解析されるウェブサイトの最初のファイルであるため、このような名前になっています。</p>

<p>HTML ファイルは、 <a href="/ja/docs/Learn/CSS">CSS</a> と <a href="/ja/docs/Learn/JavaScript">JavaScript</a> を参照することができます。それぞれ <code>&lt;link&gt;</code> と <code>&lt;script&gt;</code> 要素を使って外部ファイルに記述したり、 <code>&lt;style&gt;</code> と <code>&lt;script&gt;</code> 要素を使ってHTMLページに埋め込んだりすることができます。</p>

<p>サーバーの観点からは、レスポンスが返信される際に、これらのファイルがどのような順序で解析されるかを知ることが重要です。</p>

<ul>
  <li>まず HTML ファイルが解析され、そのファイルの中を見ることで、どの CSS ファイルや JavaScript ファイルが参照されているかをサーバーが認識します。</li>
  <li>HTML が解析され、 DOM ツリー構造が生成された後、リンクされた CSS が解析され、 DOM ツリーの適切な部分にスタイルが適用されます。この時点で、ページの視覚的な表現が画面に描かれ、ユーザーはページを見ることになります。</li>
  <li>JavaScript は通常、 HTML と CSS の後に解析され、ページに適用されます。</li>
</ul>

<h2 id="DNS_explained">DNS の説明</h2>

<p>実際のウェブアドレスは、お気に入りのウェブサイトを見つけるためにアドレスバーに入力するような、すばらしい、覚えやすい文字列ではありません。実際のウェブアドレスは <code>63.245.215.20</code> のような特殊な数字です。</p>

<p>これは、 {{Glossary("IP Address", "IP アドレス")}}と呼ばれ、ウェブ上の一意の場所を表します。しかし、あまり覚えやすくはないですよね。だから、ドメインネームサーバーが発明されたのです。これらは特別なサーバーで、ブラウザーに入力したウェブアドレス ("mozilla.org" など) とウェブサイトの実際の (IP) アドレスを対応させます。</p>

<p>ウェブサイトには、IP アドレスを使用して直接アクセスできます。<a href="https://www.nslookup.io/website-to-ip-lookup/">DNS lookup</a> のようなツールにドメインを打ち込むことで、ウェブサイトの IP アドレスを見つけることができます。</p>

<h2 id="Packets_explained">パケットの説明</h2>

<p>先ほど、データがサーバーからクライアントに送信される形式を説明するために、「パケット」という用語を使用しました。ここではどういう意味なのでしょうか。基本的に、ウェブ上でデータが送信されると、何千もの小さな塊として送信されるため、たくさんの異なるユーザーが同じウェブサイトを同時にダウンロードできます。ウェブサイトが単一の大きな塊として送信されるとすると、一度に 1 人のユーザーしかダウンロードできなくなるため、ウェブはとても効率が悪くなり、楽しんで使えなくなるでしょう。</p>

<h2 id="See_also">関連情報</h2>

<ul>
 <li><a href="/ja/docs/Learn/Common_questions/How_does_the_Internet_work">インターネットはどのように動くのか</a></li>
 <li><a href="https://dev.opera.com/articles/http-basic-introduction/">HTTP — an Application-Level Protocol</a></li>
 <li><a href="https://dev.opera.com/articles/http-lets-get-it-on/">HTTP: Let’s GET It On!</a></li>
 <li><a href="https://dev.opera.com/articles/http-response-codes/">HTTP: Response Codes</a></li>
</ul>

<h2 id="Credit">クレジット表示</h2>

<p>道路の写真: <a href="https://www.flickr.com/photos/kdigga/9110990882/in/photolist-cXrKFs-c1j6hQ-mKrPUT-oRTUK4-7jSQQq-eT7daG-cZEZrh-5xT9L6-bUnkip-9jAbvr-5hVkHn-pMfobT-dm8JuZ-gjwYYM-pREaSM-822JRW-5hhMf9-9RVQNn-bnDMSZ-pL2z3y-k7FRM4-pzd8Y7-822upY-8bFN4Y-kedD87-pzaATg-nrF8ft-5anP2x-mpVky9-ceKc9W-dG75mD-pY62sp-gZmXVZ-7vVJL9-h7r9AQ-gagPYh-jvo5aM-J32rC-ibP2zY-a4JBcH-ndxM5Y-iFHsde-dtJ15p-8nYRgp-93uCB1-o6N5Bh-nBPUny-dNJ66P-9XWmVP-efXhxJ">Street composing</a>, by <a href="https://www.flickr.com/photos/kdigga/">Kevin D</a>.</p>

<p>{{PreviousMenu("Learn/Getting_started_with_the_web/Publishing_your_website", "Learn/Getting_started_with_the_web")}}</p>

<h2 id="In_this_module">このモジュール</h2>

<ul>
 <li id="Installing_basic_software"><a href="/ja/docs/Learn/Getting_started_with_the_web/Installing_basic_software">基本的なソフトウェアのインストール</a></li>
 <li id="What_will_your_website_look_like"><a href="/ja/docs/Learn/Getting_started_with_the_web/What_will_your_website_look_like">ウェブサイトをどんな外見にするか</a></li>
 <li id="Dealing_with_files"><a href="/ja/docs/Learn/Getting_started_with_the_web/Dealing_with_files">ファイルの扱い</a></li>
 <li id="HTML_basics"><a href="/ja/docs/Learn/Getting_started_with_the_web/HTML_basics">HTML の基本</a></li>
 <li id="CSS_basics"><a href="/ja/docs/Learn/Getting_started_with_the_web/CSS_basics">CSS の基本</a></li>
 <li id="JavaScript_basics"><a href="/ja/docs/Learn/Getting_started_with_the_web/JavaScript_basics">JavaScript の基本</a></li>
 <li id="Publishing_your_website"><a href="/ja/docs/Learn/Getting_started_with_the_web/Publishing_your_website">ウェブサイトの公開</a></li>
 <li id="How_the_web_works"><a href="/ja/docs/Learn/Getting_started_with_the_web/How_the_Web_works">ウェブのしくみ</a></li>
</ul>
