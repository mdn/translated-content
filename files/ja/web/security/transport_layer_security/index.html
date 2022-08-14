---
title: Transport Layer Security
slug: Web/Security/Transport_Layer_Security
tags:
  - Cryptography
  - Guide
  - SSL
  - Security
  - TLS
  - セキュリティ
  - 暗号化
  - 認証
translation_of: Web/Security/Transport_Layer_Security
---
<p><span class="seoSummary">Transport Layer Security (TLS) を使用した接続のセキュリティは、選択されている暗号スイートとセキュリティ引数に強く依存します。この記事の目的は、クライアントとサーバの間の機密性と完全性の通信を確実にするために、選択の参考になることです。</span> Mozilla Operations Security (OpSec) チームは、サーバの設定項目のリファレンスが付いた<a href="https://wiki.mozilla.org/Security/Server_Side_TLS">ウィキ記事を管理しています</a>。</p>

<p class="summary">Transport Layer Security (TLS) プロトコルは、ネットワークで結ばれた二つのアプリケーションや端末が、私的にかつ強固に情報交換するための標準です。 TLS を使用するアプリケーションは、セキュリティ引数を選択することができ、これは、データのセキュリティと信頼性に大きな影響を与える可能性があります。この記事では、 TLS の概要と、コンテンツを保護するために必要な決定の種類について説明します。</p>

<h2 id="History" name="History">歴史</h2>

<p>HTTPS が導入されたときは Secure Sockets Layer (SSL) 2.0 という、 Netscape がもたらした技術に基づいていました。その後で間もなく SSL 3.0 に更新され、用途が拡大し、Web ブラウザーとサーバの間の相互運用性を保証するために、共通で標準化された暗号化技術を規定することが必要になりました。 <a href="https://www.ietf.org/">Internet Engineering Task Force</a> (IETF) は TLS 1.0 を {{RFC(2246)}} で1999年1月に規定しました。 TLS の現在のバージョンは 1.3 ({{RFC(8446)}}) です。</p>

<div class="note">
<p>Web では暗号化に TLS を使用するようになったという事実に関わらず、多くの人々はまだ習慣的に "SSL" と呼んでいます。</p>
</div>

<p>TLS はどのような低水準のトランスポートプロトコルの上でも使用することができますが、このプロトコルの本来の目標は HTTP トラフィックを暗号化することでした。 HTTP を TLS で暗号化することは、一般に {{Glossary("HTTPS")}} と呼ばれています。暗号化されていない HTTP が既定で80番ポートを使用するのに対し、 TLS で暗号化されたWeb トラフィックは、慣習として既定で443番ポートで交わされます。 HTTPS は引き続き、 TLS の重要な用途です。</p>

<h2 id="HTTP_over_TLS">HTTP over TLS</h2>

<p>TLS は、それと交換されるデータの安全性とセキュリティを確保するための3つの主要なサービスを提供しています。</p>

<dl>
 <dt>認証</dt>
 <dd>認証は、通信の各当事者が相手が自分の主張する人物であることを確認することを可能にします。</dd>
 <dt>暗号化</dt>
 <dd>データは、ユーザーエージェントとサーバの間で送信されている間は暗号化されており、権限のない者によって読み取られたり解釈されたりすることを防ぐことができます。</dd>
 <dt>完全性</dt>
 <dd>TLS は、データの暗号化から送信、復号化までの間に、情報の紛失、破損、改ざん、偽造がないことを保証します。</dd>
</dl>

<p>TLS 接続は、クライアントとサーバが共有シークレットに合意し、暗号スイートのような重要なパラメータがネゴシエートされるハンドシェイクフェーズから始まります。一旦、パラメータと HTTP などのアプリケーションデータが交換されるデータ交換モードになります。</p>

<h3 id="Cipher_suites" name="Cipher_suites">暗号スイート</h3>

<p>TLS のハンドシェイクがネゴシエートする主なパラメータは {{interwiki("wikipedia", "cipher suite")}} です。</p>

<p>TLS 1.2 およびそれ以前のバージョンでは、ネゴシエートされた暗号スイートには、共有秘密のネゴシエート、サーバの認証手段、データの暗号化に使用される方法を提供する一連の暗号アルゴリズムが含まれています。</p>

<p>TLS 1.3 の暗号化スイートは主にデータの暗号化を管理し、鍵の合意と認証には個別のネゴシエーション方法が使用されます。</p>

<p>異なるソフトウェアでは、同じ暗号スイートに対して異なる名前を使用している場合があります。例えば、OpenSSL や GnuTLS で使われている名前は TLS 標準のものとは異なります。Mozilla OpSec チームの TLS 設定に関する記事の<a href="https://wiki.mozilla.org/Security/Server_Side_TLS#Cipher_names_correspondence_table">暗号名対応表</a>には、これらの名前と互換性やセキュリティレベルに関する情報が記載されています。</p>

<h3 id="Configuring_your_server" name="Configuring_your_server">サーバの構築</h3>

<p>サーバを正しく設定することは非常に重要です。一般的には、サイトに接続できるようにしたいブラウザと互換性のある、可能な限り最新の暗号をサポートするようにしてください。<a href="https://wiki.mozilla.org/Security/Server_Side_TLS">Mozilla OpSec ガイドの TLS 設定</a>では、推奨される設定についての詳細な情報を提供しています。</p>

<p>サイトの設定を支援するために、Mozilla は以下の Web サーバ用の設定ファイルを生成する便利な <a href="https://mozilla.github.io/server-side-tls/ssl-config-generator/">TLS 設定ジェネレータ</a>を提供しています。</p>

<ul>
 <li>Apache</li>
 <li>Nginx</li>
 <li>Lighttpd</li>
 <li>HAProxy</li>
 <li>Amazon Web Services CloudFormation Elastic Load Balancer</li>
</ul>

<p>必要に応じて設定を作成するには、<a href="https://mozilla.github.io/server-side-tls/ssl-config-generator/">コンフィグレータ</a>を使用することをお勧めします。設定ファイルをコピーしてサーバ上の適切なファイルに貼り付け、サーバを再起動して変更を反映させます。設定ファイルにはカスタム設定を含めるための調整が必要な場合がありますので、使用する前に生成された設定を確認してください。ドメイン名などの参照が正しいことを確認せずに設定ファイルをインストールすると、サーバが動作しなくなります。</p>

<h2 id="TLS_1.3">TLS 1.3</h2>

<p>{{RFC("8446", "TLS 1.3")}} は、TLS のメジャーリビジョンです。TLS 1.3 には、セキュリティとパフォーマンスを向上させる多数の変更が含まれています。TLS 1.3 の目標は以下の通りです。</p>

<ul>
 <li>TLS 1.2 の未使用で安全でない機能を削除します</li>
 <li>強力なセキュリティ分析を設計に含めます</li>
 <li>プロトコルをより多く暗号化することで、プライバシーを向上させます</li>
 <li>ハンドシェイクを完了するまでの時間を短縮します</li>
</ul>

<p>TLS 1.3 はプロトコルの基本的な部分の多くを変更していますが、以前のバージョンの TLS と同様に基本的な機能のほとんどすべてを保持しています。Web では、TLS 1.3 はいくつかのまれな例外を除いて、互換性に影響を与えることなく有効にすることができます (以下を参照)。</p>

<p>TLS 1.3 の主な変更点は以下の通りです。</p>

<ul>
 <li>TLS 1.3 のハンドシェイクは、ほとんどの場合 1 回のラウンドトリップで完了し、ハンドシェイクの待ち時間を短縮します</li>
 <li>サーバーは 0-RTT (ゼロラウンドトリップタイム) ハンドシェイクを有効にすることができます。サーバに再接続したクライアントはすぐにリクエストを送ることができ、TLS ハンドシェイクの待ち時間を完全に排除できます。0-RTT によるパフォーマンスの向上は大きなものですが、リプレイ攻撃のリスクもありますので、この機能を有効にする前には注意が必要です</li>
 <li>TLS 1.3 は、接続が再開されるか、事前に共有された鍵を使用しない限り、フォワードセキュアモードのみをサポートしています</li>
 <li>TLS 1.3 は、TLS 1.3 専用の新しい暗号スイートを定義しています。これらの暗号化スイートはすべて最新の Authenticated Encryption with Associated Data (AEAD) アルゴリズムを使用しています</li>
 <li>TLS 1.3 のハンドシェイクは、共有シークレットを確立するために必要なメッセージを除き、暗号化されています。特に、これはサーバ証明書とクライアント証明書が暗号化されていることを意味します。ただし、クライアントがサーバに送信するサーバ ID (サーバ名または SNI 拡張子) は暗号化されないことに注意してください</li>
 <li>数多くのメカニズムが無効化されています: リネゴシエーション、一般的なデータ圧縮、{{interwiki("wikipedia", "デジタル署名アルゴリズム")}}。(DSA) 証明書、静的 RSA 鍵交換、カスタム Diffie-Hellman (DH) グループとの鍵交換</li>
</ul>

<p>TLS 1.3 のドラフト版の実装が公開されています。TLS 1.3  は 0-RTT モードを含むいくつかのブラウザで有効になっています。TLS 1.3 を有効にしている Web サーバでは、TLS 1.3 が正常に動作するように設定を調整する必要があるかもしれません。</p>

<p>TLS 1.3 では、重要な新しいユースケースが 1 つだけ追加されました。0-RTT ハンドシェイクは、Web のようなレイテンシに敏感なアプリケーションに大きなパフォーマンスの向上をもたらします。0-RTT を有効にするには、導入を確実に成功させ、リプレイ攻撃のリスクを管理するための追加のステップが必要です。</p>

<p>TLS 1.3 でリネゴシエーションが削除されたことは、証明書を使ったクライアント認証に依存する一部の Web サーバに影響を与える可能性があります。一部の Web サーバは、クライアント証明書が暗号化されていることを確実にするため、あるいは特定のリソースが要求されたときにのみクライアント証明書を要求するために、リネゴシエーションを使用しています。クライアント証明書のプライバシーを守るために、TLS 1.3 ハンドシェイクの暗号化によってクライアント証明書の暗号化が確実に行われますが、これにはソフトウェアの変更が必要になるかもしれません。証明書を使ったリアクティブなクライアント認証は TLS 1.3 でサポートされていますが、広くは実装されていません。代替のメカニズムは現在開発中で、HTTP/2 もサポートする予定です。</p>

<h2 id="Retiring_old_TLS_versions" name="Retiring_old_TLS_versions">古いバージョンの TLS の引退</h2>

<p>よりモダンで安全な Web に向けての取り組みにより、2020 年第 1 四半期に TLS 1.0 および 1.1 のサポートがすべての主要ブラウザーから削除されます。 Web サーバが今後 TLS 1.2 または 1.3 をサポートすることを確認する必要があります。</p>

<p>Firefox はバージョン 74 以降、古い TLS バージョンを使用してサーバに接続すると <a href="https://support.mozilla.org/en-US/kb/secure-connection-failed-firefox-did-not-connect">Secure Connection Failed</a> エラーを返します ({{bug(1606734)}}) 。</p>

<h2 id="TLS_handshake_timeout_values" name="TLS_handshake_timeout_values">TLS ハンドシェイクタイムアウト値</h2>

<p>何らかの理由で TLS ハンドシェイクが遅くなったり、反応しなくなったりすると、ユーザーの体験に大きな影響を与える可能性があります。この問題を軽減するために、最近のブラウザはハンドシェイクのタイムアウトを実装しています。</p>

<ul>
 <li>バージョン 58 以降、Firefox は TLS ハンドシェイクのタイムアウトをデフォルト値の 30 秒で実装しています。タイムアウトの値は、about:config の <code>network.http.tls-handshake-timeout</code> 設定値を編集することで変更できます</li>
</ul>

<h2 id="See_also" name="See_also">関連情報</h2>

<ul>
 <li><a href="https://ssl-config.mozilla.org">Mozilla SSL Configuration Generator</a> および <a href="https://cipherli.st/">Cipherli.st</a> は、サーバがサイトの安全を確保するための構成ファイルを生成するのに役立つかもしれません。</li>
 <li>Mozilla Operations Security (OpSec) チームは、 <a href="https://wiki.mozilla.org/Security/Server_Side_TLS">reference TLS configurations</a> の wiki ページを保守しています。</li>
 <li><a href="https://observatory.mozilla.org/">Mozilla Observatory</a>, <a href="https://www.ssllabs.com/ssltest/">SSL Labs</a>, <a href="https://github.com/mozilla/cipherscan">Cipherscan</a> はサイトの TLS 構成がどれだけア年かを確認するテストに役立ちます。</li>
 <li><a href="/ja/docs/Web/Security/Secure_Contexts">安全なコンテキスト</a></li>
 <li><a href="/ja/docs/Web/HTTP/Headers/Strict-Transport-Security">Strict-Transport-Security</a> HTTP ヘッダー</li>
</ul>

<p>{{QuickLinksWithSubpages("/ja/docs/Web/Security")}}</p>
