---
title: プロキシサーバーとトンネリング
slug: Web/HTTP/Proxy_servers_and_tunneling
tags:
  - HTTP
  - HTTP Tunneling
  - Proxies
  - Proxy
translation_of: Web/HTTP/Proxy_servers_and_tunneling
---
<div>{{HTTPSidebar}}</div>

<p class="summary">インターネットのさまざまなネットワークを移動するときに、プロキシサーバーと HTTP トンネルは、 World Wide Web 上のコンテンツへのアクセスを容易にしています。プロキシはユーザーのローカルコンピュータ、またはユーザーのコンピュータとインターネット上の送信先サーバーの間の任意の場所に配置できます。このページではプロキシに関するいくつかの基本を概説し、いくつかの設定オプションを紹介します。</p>

<p>プロキシには、<strong>フォワードプロキシ</strong> (またはトンネルまたはゲートウェイ) と<strong>リバースプロキシ</strong> (負荷分散、認証、復号化またはキャッシュ用のサーバーへのアクセスを制御および保護するために使用される) の2種類があります。</p>

<h2 id="Forward_proxies" name="Forward_proxies">フォワードプロキシ</h2>

<p>フォワードプロキシ、またはゲートウェイ、または単に「プロキシ」は、クライアントまたはクライアントグループにプロキシサービスを提供します。インターネットには数十万もの公開プロキシが存在する可能性があります。グループによって使用される帯域幅を減らして制御するために、インターネットサービス (DNS や Web ページなど) を格納して転送します。</p>

<p>フォワードプロキシは匿名プロキシにすることもでき、ユーザーは Web をブラウズしたり他のインターネットサービスを使用している間に自分の IP アドレスを隠すことができます。<a href="https://www.torproject.org/">TOR</a> (The Onion Router) は、匿名性のために複数のプロキシを介してインターネットトラフィックをルーティングします。</p>

<h2 id="Reverse_proxies" name="Reverse_proxies">リバースプロキシ</h2>

<p>その名前が示すように、リバースプロキシはフォワードプロキシとは逆の動作を行います。フォワードプロキシはクライアント (またはリクエストホスト) に代わって動作し、リバースプロキシはサーバーに代わって動作します。フォワードプロキシはクライアントの ID を隠すことができますが、リバースプロキシはサーバの ID を隠すことができます。リバースプロキシにはいくつかの利用法がありますが、一部を紹介します。</p>

<ul>
 <li>ロードバランシング: 複数のウェブサーバーに負荷を分散すること</li>
 <li>静的なコンテンツのキャッシュ: 写真のような静的コンテンツをキャッシュすることによってウェブサーバーの負荷を軽減すること</li>
 <li>圧縮: コンテンツを圧縮して最適化し、読み込み時間を短縮すること</li>
</ul>

<h2 id="Forwarding_client_information_through_proxies" name="Forwarding_client_information_through_proxies">プロキシを介してクライアント情報を転送する</h2>

<p>プロキシは、プロキシの IP アドレスから発信されたようにリクエストを表示させることができます。 これはクライアントの匿名性を提供するためにプロキシを使用する場合に便利ですが、それ以外の場合は元のリクエストの情報が失われます。 元のクライアントの IP アドレスは、デバッグ、統計、またはロケーション依存のコンテンツの生成によく使用されます。 この情報を公開する一般的な方法は、次の HTTP ヘッダーを使用することです。</p>

<p>標準化されたヘッダー:</p>

<dl>
 <dt>{{HTTPHeader("Forwarded")}}</dt>
 <dd>プロキシがリクエストのパスに含まれているときに、変更または失われたクライアント側のプロキシサーバー側からの情報が含まれます。</dd>
</dl>

<p>あるいは事実上の標準バージョン:</p>

<dl>
 <dt>{{HTTPHeader("X-Forwarded-For")}} {{non-standard_inline}}</dt>
 <dd>HTTP プロキシまたはロードバランサーを介してウェブサーバーに接続しているクライアントの発信元 IP アドレスを識別します。</dd>
 <dt>{{HTTPHeader("X-Forwarded-Host")}} {{non-standard_inline}}</dt>
 <dd>クライアントがプロキシまたはロードバランサーへの接続に使用した元のホストを識別します。</dd>
 <dt>{{HTTPHeader("X-Forwarded-Proto")}} {{non-standard_inline}}</dt>
 <dd>クライアントがプロキシまたはロードバランサーへの接続に使用したプロトコル (HTTP または HTTPS) を識別します。</dd>
</dl>

<p>(クライアントへの接続ではなく) プロキシ自体に関する情報を提供するには、<code>Via</code> ヘッダーを使用できます。</p>

<dl>
 <dt>{{HTTPHeader("Via")}}</dt>
 <dd>プロキシによって、フォワードとリバースの両方のプロキシが追加され、リクエストヘッダーとレスポンスヘッダーに表示されます。</dd>
</dl>

<h2 id="HTTP_tunneling" name="HTTP_tunneling">HTTP トンネリング</h2>

<p>トンネリングはデータをカプセル化することによって、パブリックネットワークを介してプライベートネットワークデータおよびプロトコル情報を送信します。 HTTP トンネリングは、より低いレベルのプロトコル (TCP) を伝送するために、より高いレベル (HTTP) のプロトコルを使用しています。</p>

<p>HTTP プロトコルは {{HTTPMethod("CONNECT")}} と呼ばれるリクエストメソッドを指定します。リクエストされたリソースとの双方向通信を開始し、トンネルを開くために使用することができます。これは、HTTP プロキシの背後にあるクライアントが SSL (つまり HTTPS、443番ポート) を使用してウェブサイトにアクセスする方法です。ただし、すべてのプロキシサーバーが <code>CONNECT</code> メソッドに対応していたり、443番ポートのみに限定したりしているわけではないことに注意してください。</p>

<p><a href="https://en.wikipedia.org/wiki/HTTP_tunnel">Wikipedia の HTTP トンネルの記事</a>も参照してください。</p>

<h2 id="Proxy_Auto-Configuration_PAC" name="Proxy_Auto-Configuration_PAC">プロキシの自動設定 (PAC)</h2>

<p><a href="/ja/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file">プロキシ自動設定 (PAC) ファイル</a>は、ウェブブラウザーのリクエスト (HTTP、HTTPS、および FTP) を直接宛先に送信するか、ウェブプロキシサーバーに転送するかを決定する <a href="/ja/docs/Web/JavaScript">JavaScript</a> 関数です。PAC ファイルに含まれる JavaScript 関数は、次の関数を定義します。</p>

<p id="Saving_the_Auto-Config_File_Setting_the_MIME_Type">auto-configファイルは拡張子が <code>.pac</code> のファイルに保存する必要があります。</p>

<pre class="syntaxbox notranslate">proxy.pac</pre>

<p>MIME タイプは次のように設定されています。</p>

<pre class="syntaxbox notranslate">application/x-ns-proxy-autoconfig</pre>

<p>このファイルは <code>FindProxyForURL</code> という関数で構成されています。以下の例は、内部 DNS サーバーが内部ホスト名のみを解決できるように設定されている環境で動作し、解決できないホストに対してのみプロキシを使用することを目標としています。</p>

<pre class="brush: js notranslate">function FindProxyForURL(url, host) {
  if (isResolvable(host))
    return "DIRECT";
  else
    return "PROXY proxy.mydomain.com:8080";
}</pre>

<p>他の例については<a href="/ja/docs/Web/HTTP/Proxy_servers_and_tunneling/Proxy_Auto-Configuration_(PAC)_file">プロキシ自動設定 (PAC)</a> を参照してください。</p>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li>{{HTTPMethod("CONNECT")}}</li>
 <li><a href="https://en.wikipedia.org/wiki/Proxy_server">Proxy server on Wikipedia</a></li>
</ul>
