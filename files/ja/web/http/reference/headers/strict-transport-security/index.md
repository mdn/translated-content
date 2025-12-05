---
title: Strict-Transport-Security ヘッダー
short-title: Strict-Transport-Security
slug: Web/HTTP/Reference/Headers/Strict-Transport-Security
l10n:
  sourceCommit: 886f2641ae90a70858c5e7d0d20959c70ee44d9d
---

HTTP の **`Strict-Transport-Security`** は{{Glossary("response header", "レスポンスヘッダー")}}で（しばしば {{Glossary("HSTS")}} と略されます）、ブラウザーに、その{{Glossary("host", "ホスト")}}は HTTPS のみを使用してアクセスすべきであり、今後 HTTP を使用してアクセスしようとした場合は自動的に HTTPS にアップグレードされるべきであるという情報を通知します。
さらに、このホストへの今後の接続において、ブラウザーはユーザーが無効な証明書などの保護された接続エラーをバイパスすることを許可しません。
HSTS はホストをドメイン名のみで識別します。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>{{Glossary("Response header", "レスポンスヘッダー")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "禁止リクエストヘッダー")}}</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```http
Strict-Transport-Security: max-age=<expire-time>
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains; preload
```

## ディレクティブ

- `max-age=<expire-time>`
  - : 秒単位で、そのサイトに HTTPS だけで接続することをブラウザーが記憶する時間です。
- `includeSubDomains` {{optional_inline}}
  - : このディレクティブが指定されると、この規則がサイトのすべてのサブドメインにも適用されます。
- `preload` {{optional_inline}} {{non-standard_inline}}
  - : 詳しくは[厳格トランスポートセキュリティの事前読み込み](#厳格トランスポートセキュリティの事前読み込み)を参照してください。 `preload` を使用している場合、 `max-age` ディレクティブは `31536000` （1 年）以上でなければならず、 `includeSubDomains` ディレクティブが存在している必要があります。

## 解説

`Strict-Transport-Security` ヘッダーは、ホストへのすべての接続が HTTPS を使用しなければならないことをブラウザーに通知します。
これはレスポンスヘッダーですが、ブラウザが現在のレスポンスを処理する方法には影響せず、将来のリクエストの生成方法に影響を与えます。

HTTPS レスポンスに `Strict-Transport-Security` ヘッダーが含まれている場合、ブラウザーはそのホストのドメイン名を HSTS ホストの永続リストに追加します。
ドメイン名が既にリストにある場合、有効期限と `includeSubDomains` ディレクティブが更新されます。
ホストはドメイン名のみで識別されます。IP アドレスは HSTS ホストにはなりません。
HSTS は、リクエストに使用されたポートに関係なく、ホストの全ポートに適用されます。

`http` の URL を読み込む前に、ブラウザーはドメイン名を HSTS ホストリストと照合します。
ドメイン名が HSTS ホストと大文字小文字を区別しない一致をする場合、または `includeSubDomains` を指定したホストのサブドメインである場合、ブラウザーは URL スキームを `https` に置換します。
URL がポート 80 を指定している場合、ブラウザーはこれを 443 に変更します。
その他の明示的なポート番号は変更されず、ブラウザーは HTTPS を使用してそのポートに接続します。

TLS の警告やエラー（無効な証明書など）が HSTS ホストへの接続時に発生した場合、ブラウザーはユーザーにエラーメッセージを「クリックして進む」方法を提供しません。これは厳格なセキュリティの意図を損なうことになります。

> [!NOTE]
> ホストは、`Strict-Transport-Security` ヘッダーを HTTPS のみで送信しなければならず、安全でない HTTP では送信してはなりません。
> ブラウザーは、HTTP 経由で送信された場合、このヘッダーを無視します。これは、[中間者攻撃 (MITM)](/ja/docs/Web/Security/Attacks/MITM) によってヘッダーが改ざんされ、早期に期限切れとなったり、HTTPS に対応していないホスト向けにヘッダーが追加されたりするのを防ぐためです。

### 期限

ブラウザーが `Strict-Transport-Security` ヘッダーを受信するたびに、現在の時刻に `max-age` を加算することでホストの HSTS 有効期限を更新します。
`max-age` に固定値を設定すると、以降のレスポンスごとに有効期限が先延ばしされるため、HSTS が期限切れになるのを防げます。

以前に送信していたホストからのレスポンスで `Strict-Transport-Security` ヘッダーが欠落している場合、以前のヘッダーは有効期限まで有効なままとなります。

HSTS を無効化するには、`max-age=0` を設定します。
これは、ブラウザーが保護されたリクエストを行い、レスポンスヘッダーを受信した時点で初めて有効になります。
設計上、保護されていない HTTP 上で HSTS を無効化することはできません。

### サブドメイン

`includeSubDomains` ディレクティブは、ブラウザーに対し、ドメインの HSTS ポリシーをそのサブドメインにも適用するよう指示します。
`secure.example.com` の HSTS ポリシーは `includeSubDomains` がある場合、`login.secure.example.com` や `admin.login.secure.example.com` にも適用されます。ただし、`example.com` や `insecure.example.com` には適用されません。

それぞれのサブドメインホストは、親ドメインが `includeSubDomains` を使用している場合でも、レスポンスに `Strict-Transport-Security` ヘッダーを含めるべきです。なぜなら、ブラウザーは親ドメインよりも先にサブドメインホストにアクセスする可能性があるからです。
たとえば、`example.com` が `includeSubDomains` を含む HSTS ヘッダーを含んでいるが、既存のリンクがすべて `www.example.com` に直接リンクしている場合、ブラウザーは `example.com` の HSTS ヘッダーを認識することはありません。
したがって、`www.example.com` も HSTS ヘッダーを送信する必要があります。

ブラウザーは、`includeSubDomains` ディレクティブの有無にかかわらず、各ドメインおよびサブドメインごとに HSTS ポリシーを個別に保存します。
`example.com` と `login.example.com` の両方が HSTS ヘッダーを送信する場合、ブラウザーは 2 つの別々の HSTS ポリシーを保存し、それらは独立して期限切れになる可能性があります。`example.com` が `includeSubDomains` を使用していた場合、いずれかのポリシーが期限切れになっても `login.example.com` は引き続き保護されます。

`max-age=0` の場合、`includeSubDomains` は効果を持ちません。これは、`includeSubDomains` を指定したドメインが HSTS ホストリストから直ちに削除されるためです。ただし、各サブドメインの個別の HSTS ポリシーは削除されません。

### 保護されていない HTTP リクエスト

ホストが保護されていない HTTP リクエストを受け付けた場合、恒久リダイレクト（ステータスコード {{HTTPStatus("301")}} など）で、`https` の URL を {{HTTPHeader("Location")}} ヘッダーに設定して応答すべきです。
リダイレクトには `Strict-Transport-Security` ヘッダーを含めてはなりません。これは、リクエストが安全でない HTTP を使用しているためですが、このヘッダーは HTTPS 経由でのみ送信しなければなりません。
ブラウザーがリダイレクトに従い HTTPS を使用して新たなリクエストを行った後、レスポンスには `Strict-Transport-Security` ヘッダーを含める必要があります。これにより、将来 `http` URL を読み込もうとしたときに、リダイレクトをすることなく即座に HTTPS を使用するように保証されます。

HSTS の弱点の一つは、ブラウザーがホストに対して少なくとも1回の保護された接続を確立して `Strict-Transport-Security` ヘッダーを受信するまで有効にならない点です。
ブラウザーがホストが HSTS ホストであることを認識する前に、保護されていない `http` URL を読み込んだ場合、最初のリクエストはネットワーク攻撃に対して脆弱です。
[事前読み込み](#厳格トランスポートセキュリティの事前読み込み)は、この問題を軽減します。

### 厳格トランスポートセキュリティのシナリオの例

1. 自宅で、ユーザーは初めて `http://example.com/` を訪問します。
2. URL スキームが `http` であり、ブラウザーの HSTS ホストリストの中にこれがないため、この接続は保護されていない HTTP を使用します。
3. サーバーは `301 Moved Permanently` リダイレクトで `https://example.com/` にリダイレクトします。
4. ブラウザーは新しいリクエストを作成し、この時は HTTPS を使用します。
5. レスポンスは HTTPS 経由で返され、次のヘッダーを含みます。

   ```http
   Strict-Transport-Security: max-age=31536000; includeSubDomains
   ```

   ブラウザーは `example.com` を HSTS ホストとして記憶し、`includeSubDomains` が指定されたことを認識します。

6. 数週間後、ユーザーは空港で無料 Wi-Fi を利用することにします。しかし知らずに、攻撃者のノートパソコン上で動作する不正アクセスポイントに接続してしまいます。
7. ユーザーが `http://login.example.com/` を開きます。ブラウザーは `example.com` を HSTS ホストとして記憶しており、`includeSubDomains` ディレクティブが使用されているため、ブラウザーは HTTPS を使用します。
8. 攻撃者は偽の HTTPS サーバーでリクエストを傍受しますが、そのドメインに対する有効な証明書を所有していません。
9. ブラウザーは不正な証明書エラーを表示し、ユーザーがこれを回避することを許可しないため、攻撃者にパスワードを教えることを防ぎます。

### 厳格トランスポートセキュリティの事前読み込み

Google は [HSTS 事前読み込みサービス](https://hstspreload.org/)を行っています。
ガイドラインに従ってドメインを登録すれば、ブラウザーはドメインに安全ではない接続を行わないようになります。
サービスは Google によって運営されており、すべてのブラウザーが事前読み込みリストを使用する意志を示しています（または既に使用を始めています）。
但し、これは HSTS 仕様書にあるものではなく、公式なものとして扱うべきではありません。

- Chrome の HSTS 事前読み込みリストに関する情報: https://www.chromium.org/hsts/
- Firefox の HSTS 事前読み込みリストに関する参照: [nsSTSPreloadList.inc](https://searchfox.org/firefox-main/source/security/manager/ssl/nsSTSPreloadList.inc)

## 例

### Strict-Transport-Security の使用

現在および将来のすべてのサブドメインは、`max-age` により 1 年間、HTTPS で提供されます。
これにより、HTTP 経由でのみ提供可能なページやサブドメインへのアクセスがブロックされます。

```http
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

ドメインに対して `max-age` を 1 年に設定することは許容されますが、 https://hstspreload.org で説明されているように、推奨値は 2 年です。

以下の例では、`max-age` を 2 年に設定し、`preload` を付加しています。これは Chromium、Edge、Firefox などの主要なウェブブラウザーの HSTS 事前読み込みリストに含めるために必要です。

```http
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [保護されたコンテキストに制限されている機能](/ja/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts)
- [HTTP Strict Transport Security has landed!](http://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html) (blog.sidstamm.com, 2010)
- [HTTP 厳格トランスポートセキュリティ(force HTTPS)](https://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/) (hacks.mozilla.org, 2010)
- [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html) 早見表 (owasp.org)
- [HTTP Strict Transport Security](https://ja.wikipedia.org/wiki/HTTP_Strict_Transport_Security) （ウィキペディア）
- [HSTS preload service](https://hstspreload.org/)
