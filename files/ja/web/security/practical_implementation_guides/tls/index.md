---
title: トランスポート層セキュリティ (TLS) の構成
short-title: トランスポート層セキュリティ (TLS)
slug: Web/Security/Practical_implementation_guides/TLS
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

[トランスポート層セキュリティ (TLS)](/ja/docs/Glossary/TLS) は、すべての通信の機密性、真正性、完全性を保証するものであり、そのため、ウェブサイトのすべての送受信通信において使用すべきものです。

## TLS の構成

### 課題

データが暗号化されずにウェブ経由で送信されると、第三者に傍受され、その第三者がデータにアクセスしたり改ざんしたりする可能性があります。これは、しばしば[中間者攻撃](/ja/docs/Glossary/MitM) (MiTM) と呼ばれます。MiTM 攻撃は、システムのセキュリティに深刻な影響を及ぼします。

したがって、すべてのリクエストとレスポンスは、TLS を使用してデータを暗号化する HTTPS 経由で送信する必要があります。現代のウェブでは、これが事実上義務付けられています。すべてのブラウザがデフォルトで [HTTPS](/ja/docs/Glossary/HTTPS) を必須とする方向に進んでおり、多くのウェブ機能が[保護されたコンテキスト](/ja/docs/Web/Security/Defenses/Secure_Contexts)でのみ利用可能です。

### 解決策

サーバーソフトウェアは、安全な TLS 設定で HTTPS の使用を強制する、安全な構成になるよう設定する必要があります。この設定を支援する TLS 設定ジェネレーターがいくつか利用可能です。例えば、Mozilla の [SSL 設定ジェネレーター](https://ssl-config.mozilla.org/) などがあります。このツールは、Mozilla の [TLS ガイドライン](https://wiki.mozilla.org/Security/Server_Side_TLS) に基づいて、いくつかのオプションを提供しています。

## リソースの読み込み

### 課題

すべてのリソースは、その発信元にかかわらず、保護された通信経路を介して読み込まれる必要があります。
保護された (HTTPS) ウェブサイトが、保護されていない接続 (HTTP) 経由で JavaScript などのアクティブなリソースを読み込もうとすると、ブラウザーによってブロックされます。その結果、ユーザーは UI の動作が低下したり、[混在コンテンツ](/ja/docs/Web/Security/Defenses/Mixed_content)の警告が表示されたりすることになります。たとえば、以下のコードでは、JavaScript ライブラリーを読み込む際に HTTP が誤って使用されています。

```html example-bad
<script src="http://code.jquery.com/jquery-1.12.0.min.js"></script>
```

同様に、画像などの受動的コンテンツを保護されてない状態で読み込もうとすると、リスクは低いとはいえ、UI の品質が低下したり、混在コンテンツの警告が表示されたりするほか、悪意のある攻撃者がウェブサイトを改ざんしたり、ユーザーをフィッシング攻撃にさらしたりする可能性もあります。例を示します。

```html example-bad
<img src="http://very.badssl.com/image.jpg" />
```

最新のブラウザーでは、ウェブサイトがリソースを保護されていない方法で読み込んでいることを明示していますが、こうしたエラーは、なおウェブ上で頻繁に発生しています。

### 解決策

本番環境へ展開する前に、すべてのリソースが HTTPS 経由で読み込まれていることを確認してください。

### 例

この例では、JavaScript ライブラリーを読み込むために HTTPS が正しく使用されています。

```html example-good
<script src="https://code.jquery.com/jquery-1.12.0.min.js"></script>
```

## HTTP リダイレクト

### 課題

ウェブサイトは、ユーザーがアドレスバーに URL を入力した際の接続エラーを防ぐため、ポート 80 (HTTP) での待ち受けを継続する場合があります。これは、ブラウザーの初期接続が多くの場合 HTTP 経由で行われるためです。このため、サイトへの最初の接続時には、その接続が TLS によって保護されていないことから、初期段階でのセキュリティリスクが生じます。

また、あるホストの HTTP から別のホストの HTTPS へのリダイレクトは避けるべきです。これは、最初のホストに対して `Strict-Transport-Security` が設定されなくなるためです（[HTTP Strict Transport Security](#http_strict_transport_security_の実装) を参照）。

### 解決策

ポート 80 でリクエストを待機しているサイトは、HTTPS 上の同じリソースにのみリダイレクトする必要があります。リダイレクトが行われた後は、`Strict-Transport-Security` によって、今後 HTTP 経由でサイトへのアクセスが試みられた場合、すべて自動的に保護されたサイトへリダイレクトされるようにする必要があります。

一般公開を目的としない API やウェブサイトでは、HTTP の使用を完全に無効にする必要があります。

「ホストが異なる」という問題を解決するには、

1. まず、http\://example.com/ から https\://example.com/ へリダイレクトします。
2. 次に、https\://example.com/ から https\://example.org/ へリダイレクトします。

### 例

NGINX を使用して、すべての着信 HTTP リクエストを HTTPS 上の同じサイトおよび URI にリダイレクトするには、次のようにします。

```nginx
server {
  listen 80;

  return 301 https://$host$request_uri;
}
```

Apache を使用して `site.example.org` を HTTP から HTTPS にリダイレクトするには、次のようにします。

```apacheconf
<VirtualHost *:80>
  ServerName site.example.org
  Redirect permanent / https://site.example.org/
</VirtualHost>
```

## HTTP Strict Transport Security の実装

### 課題

[中間者攻撃](/ja/docs/Glossary/MitM) (MiTM) を防ぐため、ブラウザはHTTPS経由でのみサイトに接続すべきです。

### 解決策

HTTP の [`Strict-Transport-Security`](/ja/docs/Web/HTTP/Reference/Headers/Strict-Transport-Security) (HSTS) は、当初指定されたスキームが HTTP であった場合でも、指定されたサイトへの接続を HTTPS 経由でのみ行うようブラウザーに通知する HTTP ヘッダーです。特定のサイトに対して HSTS が設定されている場合、ブラウザはそのサイトへのすべてのリクエストを自動的に HTTPS にアップグレードします。また、HSTS は、証明書エラーページをバイパスする機能を無効化することで、TLS および証明書関連のエラーをより厳格に扱うようブラウザーに指示します。

`Strict-Transport-Security` は以下のディレクティブに対応しています。

- `max-age`
  - : ブラウザーが HTTPS にリダイレクトするまでの時間を秒単位で設定します。
- `includeSubDomains` {{optional_inline}}
  - : ブラウザーがすべてのサブドメインへのリクエストをHTTPSにアップグレードすべきかどうかを指定します。例えば、`domain.example.com` で `includeSubDomains` を設定すると、`domain.example.com` へのリクエストに加え、`host1.domain.example.com` および `host2.domain.example.com` へのリクエストも確実にアップグレードされます。
- `preload` {{optional_inline}}
  - : サイトを事前読み込みするかどうかを指定します。このディレクティブを指定すると、サイトが [HSTS 事前読み込みリスト](https://hstspreload.org/)に追加されることになります。

ウェブサイトに HSTS を正しく実装するには、以下の手順に従ってください。

1. `max-age` の値を 6 か月 (`15768000`) 以上に設定してください。2 年 ()`63072000`) など、より長い期間を設定することをお勧めします。この値を設定すると、有効期限が到達するまで、サイトは HTTPS を続けなければなりません。
2. 可能であれば、すべてのサブドメインのセキュリティを改善するために、`includeSubDomains` を設定してください。このディレクティブを設定した際、HTTPS がまだ有効になっていないサブドメイン上のサイトが無効になる可能性があるため、慎重なテストが必要です。
3. 可能であれば、`preload` を設定して、ウェブサイトを HSTS 先読みリストに追加できるようにしましょう。リストに追加するには、https://hstspreload.org/ にアクセスし、ページ上部のフォームにサイトの URL を入力し、表示された課題を修正してください。ブラウザーは、最初の `Strict-Transport-Security` ヘッダーを受信する前に、先読みされたサイトに対して HTTPS へのアップグレードを実行します。これにより、初回利用時の[ダウングレード攻撃](https://en.wikipedia.org/wiki/Downgrade_attack)を防止できるため、リスクの高いすべてのウェブサイトに対して推奨されます。なお、HSTS 先読みリストに登録されるには、`includeSubDomains` が設定されていること、および `max-age` が 1 年 (`31536000`) 以上に設定されている必要もあります。

`Strict-Transport-Security` と同時に、{{httpheader("Content-Security-Policy")}} 内で [`upgrade-insecure-requests`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) ディレクティブも設定する必要があります。これにより、ブラウザーはサイト内のすべての保護されていない URL（HTTP 経由で提供されるもの）を、あたかも HTTPS 経由で提供されているかのように扱うようになります。`upgrade-insecure-requests` は、書き換えが必要である保護されていない古い URL が多数存在するウェブサイト向けに設計されています。

### 例

今後 2 年間、サイトへの接続には HTTPS を利用することを推奨します。

```http
Strict-Transport-Security: max-age=63072000
```

可能であれば、サブドメインへのリクエストも HTTPS にアップグレードし、そのサイトをプリロードリストに含めます。

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

また、`upgrade-insecure-requests` の CSP を設定します。

```http
Content-Security-Policy: upgrade-insecure-requests;
```

## 関連情報

- [トランスポート層セキュリティ (TLS)](/ja/docs/Web/Security/Defenses/Transport_Layer_Security)
- [証明書の透明性](/ja/docs/Web/Security/Defenses/Certificate_Transparency)
- [混在コンテンツ](/ja/docs/Web/Security/Defenses/Mixed_content)
