---
title: クッキーを保護する構成
slug: Web/Security/Practical_implementation_guides/Cookies
l10n:
  sourceCommit: c8b9fe22c3f68116dd3aaf4ae9e7b88709c7830d
---

クッキーへのアクセスは、可能な限り制限してください。

## 問題

クッキーには、セッション ID やその他の機密情報が含まれていることが多くの場合あります。したがって、クッキーへの不正アクセスは、[プライバシー](/ja/docs/Web/Privacy)に関する課題、[クリックジャッキング](/ja/docs/Web/Security/Attacks/Clickjacking)攻撃、[サイト間リクエストフォージェリー (CSRF)](/ja/docs/Web/Security/Attacks/CSRF) 攻撃など、さまざまな課題を発生させる可能性があります。

## 解決策

サイト上のクッキーに関する脆弱性のリスクを最小限に抑えるため、[`Set-Cookie`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie) レスポンスヘッダーを送信する際に、以下のクッキー属性を指定することで、クッキーへのアクセスを可能な限り制限してください。

- `Name`
  - : クッキー名に `__Secure-` または `__Host-` を接頭辞としてつけることで、セキュリティが確保されていないソースによるクッキーの上書きを防ぎます。
    - 特定のドメイン（サブドメインを除く）でのみ必要で、`Path` が `/` に設定されているクッキーには、すべて `__Host-` を使用してください。
    - その他のクッキーには、すべて `__Secure-` を使用してください。
- `Secure`
  - : 常に `Secure` 属性を設定し、そのクッキーが HTTPS 経由でのみ送信されることを示してください。
- `HttpOnly`
  - : JavaScript からのアクセス（例えば {{domxref("Document.cookie")}} 経由）が要求されないすべてのクッキーに対して、`HttpOnly` 属性を設定してください。

    特に、セッション識別子が含まれているクッキーには、JavaScript からアクセスできないようにこれにより、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) 攻撃によってセッション識別子が盗み出されるのを防ぐことができます。

- `Expires` および `Max-Age`
  - : クッキーは、必要性がなくなった時点で速やかに有効期限が切れるようにすべきです。特にセッション ID については、すばやく有効期限が切れるようにすべきです。
    - `Expires`: 指定されたクッキーの絶対的な有効期限を設定します。
    - `Max-Age`: 指定されたクッキーの相対的な有効期限を設定します。

      > [!NOTE]
      > `Expires` は `Max-Age` よりも以前から利用できますが、`Max-Age` の方がエラーの可能性が低く、両方が設定されている場合は `Max-Age` が優先されます。その理由は、`Expires` の日時を設定する際、クッキーが設定されるクライアントを基準とした日時となるためです。サーバーの時刻が異なる場合は、エラーが発生する可能性があります。

      `Expires` も `Max-Age` も設定されていない場合、クッキーはユーザーがブラウザーを閉じるまで保持され、その後破棄されます。

- `Domain`
  - : `Domain` 属性は、クッキーを他のドメインからもアクセス可能にする必要がある場合にのみ設定してください。その場合は、可能な限り狭いドメインに設定してください。
- `Path`
  - : 可能な限り厳格な `Path` を設定してください。
- `SameSite`
  - : [`SameSite`](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) 属性を `Strict` または `Lax` に設定することで、異なる{{glossary("site", "サイト")}}から発信されるリクエストにおけるクッキーの送信を制限します。

    この方法は、[CSRF](/ja/docs/Web/Security/Attacks/CSRF#多層防御_samesite_クッキー)、[クリックジャッキング](/ja/docs/Web/Security/Attacks/Clickjacking#clickjacking_defenses)、および一部の[クロスサイトリーク](/ja/docs/Web/Security/Attacks/XS-Leaks#samesite_cookies)攻撃に対する部分的な防御策です。

## 例

現在のホストでのみアクセス可能で、ユーザーがブラウザーを閉じると無効になるセッション識別子のクッキーを設定します。

```http
Set-Cookie: MOZSESSIONID=980e5da39d4b472b9f504cac9; Path=/; Secure; HttpOnly
```

`__Secure-` 接頭辞を使用して、すべての `example.org` サイトに対して、30 日後に期限切れになるセッション識別子を設定します。このクッキーは、ほとんどのサイト間リクエストには含まれませんが、リンクをクリックするなどして他のサイトから自サイトへ移動する際には含まれます。

```http
Set-Cookie: __Secure-MOZSESSIONID=7307d70a86bd4ab5a00499762; Max-Age=2592000; Domain=example.org; Path=/; Secure; HttpOnly; SameSite=Lax
```

ユーザーが利用規約を受け入れた際、現在のホストに対して、JavaScript からアクセス可能な長期有効なクッキーを設定します。このクッキーは、ほとんどのサイト間リクエストには記載されませんが、リンクをクリックするなどして他のサイトから自サイトへ移動する際には記載されます。

```http
Set-Cookie: __Host-ACCEPTEDTOS=true; Expires=Fri, 31 Dec 9999 23:59:59 GMT; Path=/; Secure; SameSite=Lax
```

セッション識別子を含むクッキーを設定します。このクッキーは、他のサイトから自サイトへ移動する場合を含め、サイト間リクエストで送信されることはありません。

```http
Set-Cookie: __Host-BMOSESSIONID=YnVnemlsbGE=; Max-Age=2592000; Path=/; Secure; HttpOnly; SameSite=Strict
```

## 関連情報

- [HTTP クッキーの使用](/ja/docs/Web/HTTP/Guides/Cookies)
- [サードパーティクッキー](/ja/docs/Web/Privacy/Guides/Third-party_cookies)
- [`Document.cookie`: セキュリティ](/ja/docs/Web/API/Document/cookie#セキュリティ)
- [RFC 6265 (HTTP Cookies)](https://datatracker.ietf.org/doc/html/rfc6265) (2011)
