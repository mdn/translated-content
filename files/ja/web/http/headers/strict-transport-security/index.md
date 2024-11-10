---
title: Strict-Transport-Security
slug: Web/HTTP/Headers/Strict-Transport-Security
---

{{HTTPSidebar}}

HTTP の **`Strict-Transport-Security`** レスポンスヘッダー (しばしば {{Glossary("HSTS")}} と略されます) は、ウェブサイトがブラウザーに HTTP の代わりに HTTPS を用いて通信を行うよう指示するためのものです。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">ヘッダー種別</th>
      <td>
        {{Glossary("Response header", "レスポンスヘッダー")}}
      </td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Forbidden header name", "禁止ヘッダー名")}}
      </th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

## 構文

```
Strict-Transport-Security: max-age=<expire-time>
Strict-Transport-Security: max-age=<expire-time>; includeSubDomains
Strict-Transport-Security: max-age=<expire-time>; preload
```

## ディレクティブ

- `max-age=<expire-time>`
  - : 秒単位で、そのサイトに HTTPS だけで接続することをブラウザーが記憶する時間です。
- `includeSubDomains` {{optional_inline}}
  - : 省略可能で、この引数が指定されると、この規則がサイトのすべてのサブドメインにも適用されます。
- `preload` {{optional_inline}}
  - : 詳しくは [Strict Transport Security のプリロード](#preloading_strict_transport_security) を参照してください。仕様書で定義されているものではありません。

## 解説

もし、訪問者が `http://www.foo.com/` または単に foo.com と入力したとき、ウェブサイトが接続を HTTP で受け付け、 HTTPS にリダイレクトするようになっていると、訪問者はリダイレクトされる前にまず、暗号化されないバージョンのサイトと通信する可能性があります。これは中間者攻撃の機会を作ってしまいます。リダイレクトは訪問者を、本来のサイトの安全なバージョンではなく、悪意のあるサイトに導くために利用される可能性があるからです。

HTTP の Strict Transport Security ヘッダーは、ブラウザーに対してサイトを HTTP を使用して読み込まず、サイトへのすべてのアクセスを、自動的に HTTP から HTTPS リクエストに変換するよう指示することができます。

> [!NOTE]
> サイトに HTTP を使用してアクセスしたとき、ブラウザーは `Strict-Transport-Security` ヘッダーを無視します。これは攻撃者が HTTP 接続に介入して、ヘッダーを挿入したり削除したりするかもしれないからです。ウェブサイトに HTTPS でアクセスして、証明書のエラーがない場合、ブラウザーはサイトが HTTPS でアクセスできることを知り、 `Strict-Transport-Security` ヘッダーを信用します。

### 事例

あなたが、空港で無料の Wi-Fi アクセスポイントにログインしてウェブの利用を開始し、オンラインバンキングサービスで残高の確認や取引を行ったとします。しかし不運にも、あなたが使用したアクセスポイントはハッカーのノートパソコンであり、そのハッカーはあなたの HTTP リクエストを傍受して、本物の銀行のサイトではなく偽のサイトへリダイレクトしたとします。こうなると、あなたの個人情報はハッカーにさらされてしまいます。

Strict Transport Security はこの問題を解決します。いったん銀行のウェブサイトへ HTTPS でアクセスすれば、そして銀行のウェブサイトが Strict Transport Security を利用していれば、ブラウザーは自動的に HTTPS のみを用いるよう理解して、ハッカーによるこの種の中間者攻撃の実行を防ぎます。

### ブラウザーでの扱い

最初にサイトに HTTPS でアクセスして `Strict-Transport-Security` ヘッダーが返されると、ブラウザーはこの情報を記録し、以降は HTTP を使用してサイトを読み込みもうとすると、自動的に HTTPS を使用するようになります。

Strict-Transport-Security ヘッダーで指定された有効期限が経過すると、次回は自動的に HTTPS を使用するのではなく、通常通りに HTTP でサイトを読み込もうとします。

なお、 Strict-Transport-Security ヘッダーがブラウザーへ送られるたびに、そのウェブサイトに対する有効期限が更新されるので、サイトはこの情報を更新して期限切れを防ぐことができます。 Strict-Transport-Security を無効にする必要がある場合は、 HTTPS 通信時に max-age の値を 0 に設定することで `Strict-Transport-Security` ヘッダーが失効し、ブラウザーからの HTTP 接続が許されるようになります。

## Strict Transport Security のプリロード

Google は [HSTS 先読みサービス](https://hstspreload.org/) を行っています。ガイドラインに従ってドメインを登録すれば、ブラウザーはドメインに安全ではない接続を行わないようになります。サービスは Google によって運営されており、すべてのブラウザーが先読みリストを使用する意志を示しています (または既に使用を始めています)。但し、これは HSTS 仕様書にあるものではなく、公式なものとして扱うべきではありません。

- Chrome が実装している HSTS 先読みリストに関する情報 : <https://www.chromium.org/hsts>
- Firefox が実装している HSTS 先読みリストに関する参照 : [nsSTSPreloadList.inc](https://hg.mozilla.org/mozilla-central/raw-file/tip/security/manager/ssl/nsSTSPreloadList.inc)

## 例

既存および将来のすべてのサブドメインで、1 年間を期限として HTTPS を使用する設定です。これは HTTP のみで提供できるページやサブドメインへのアクセスをブロックします。

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

以下の例では、 `max-age` は前回の 1 年間を期限とする `max-age` を延長して 2 年間に設定します。なお、1 年間はブラウザーの HSTS 先読みリストに含まれるドメインで有効です。しかし、2 年間は <https://hstspreload.org> で説明されているとおり、ウェブサイトの最終的な HSTS 設定のゴールとして推奨されています。また、最後の `preload` は Chromium, Edge, Firefox などの主要なブラウザーの HSTS 先読みリストで必要です。

```
Strict-Transport-Security: max-age=63072000; includeSubDomains; preload
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- ブログ記事: [HTTP Strict Transport Security has landed!](http://blog.sidstamm.com/2010/08/http-strict-transport-security-has.html)
- ブログ記事: [HTTP Strict Transport Security (force HTTPS)](http://hacks.mozilla.org/2010/08/firefox-4-http-strict-transport-security-force-https/)
- OWASP の記事: [HTTP Strict Transport Security](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
- Wikipedia: [HTTP Strict Transport Security](https://ja.wikipedia.org/wiki/HTTP_Strict_Transport_Security)
- ブラウザー試験サイト: [HSTS and HPKP test](https://projects.dm.id.lv/Public-Key-Pins_test)
- [安全なコンテキストに制限されている機能](/ja/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)
