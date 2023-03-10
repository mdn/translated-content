---
title: SameSite cookies
slug: Web/HTTP/Headers/Set-Cookie/SameSite
---

{{HTTPSidebar}}

{{HTTPHeader("Set-Cookie")}} HTTP レスポンスヘッダーの **`SameSite`** 属性を使用すると、Cookie をファーストパーティまたは同じサイトのコンテキストに制限するかどうかを宣言できます。

## 値

`SameSite` 属性は 3 つの値をとります。

### `Lax`

Cookie はトップレベルナビゲーションで送信することが許可されており、サードパーティの Web サイトによって開始された GET リクエストとともに送信されます。これは、モダンブラウザーのデフォルト値です。

### `Strict`

Cookie はファーストパーティのコンテキストでのみ送信され、サードパーティの Web サイトによって開始されたリクエストと一緒に送信されることはありません。

### `None`

Cookie はすべてのコンテキストで送信されます。つまり、クロスオリジンの送信が許可されます。

`None` はデフォルト値でしたが、最近のブラウザーバージョンでは、`Lax` をデフォルト値にして、クロスサイトリクエストフォージェリ ({{Glossary("CSRF")}}) 攻撃のクラスに対して適度に堅牢な防御を提供しました。

`None` では、最新バージョンのブラウザーで [`Secure`](#Secure) 属性が必要です。詳細については、以下を参照してください。

## 一般的な警告の修正

### `SameSite=None` requires `Secure`

次の警告がコンソールに表示される場合があります。

> Some cookies are misusing the “sameSite“ attribute, so it won’t work as expected.
> Cookie “_myCookie_” rejected because it has the “sameSite=none” attribute but is missing the “secure” attribute.

`SameSite=None` を要求するが `Secure` とマークされていない Cookie は拒否されるため、警告が表示されます。

```plain example-bad
Set-Cookie: flavor=choco; SameSite=None
```

これを修正するには、`SameSite=None` Cookie に `Secure` 属性を追加する必要があります。

```plain example-good
Set-Cookie: flavor=choco; SameSite=None; Secure
```

[`Secure`](#Secure) Cookie は、HTTPS プロトコルを介した暗号化されたリクエストでのみサーバーに送信されます。安全でないサイト (`http:`) は `Secure` ディレクティブで Cookie を設定できないことに注意してください。

### Cookies without `SameSite` default to `SameSite=Lax`

モダンブラウザーの最近のバージョンでは、デフォルトで `SameSite` がより安全に Cookie に提供されているため、次のメッセージがコンソールに表示される場合があります。

> Some cookies are misusing the “sameSite“ attribute, so it won’t work as expected.
> Cookie “_myCookie_” has “sameSite” policy set to “lax” because it is missing a “sameSite” attribute, and “sameSite=lax” is the default value for this attribute.

Cookie の `SameSite` ポリシーが明示的に指定されていないため、警告が表示されます。

```plain example-bad
Set-Cookie: flavor=choco
```

モダンブラウザーを使用して `SameSite=Lax` を自動的に適用することもできますが、明示的に指定して、Cookie に適用される `SameSite` ポリシーの意図を明確に伝える必要があります。すべてのブラウザーのデフォルトがまだ `Lax` であるわけではないため、これによりブラウザー全体のエクスペリエンスも向上します。

```plain example-good
Set-Cookie: flavor=choco; SameSite=Lax
```

## 例:

```
RewriteEngine on
RewriteBase "/"
RewriteCond "%{HTTP_HOST}"       "^example\.org$" [NC]
RewriteRule "^(.*)"              "https://www.example.org/index.html" [R=301,L,QSA]
RewriteRule "^(.*)\.ht$"         "index.php?nav=$1 [NC,L,QSA,CO=RewriteRule:01:https://www.example.org:30/:SameSite=None:Secure]
RewriteRule "^(.*)\.htm$"        "index.php?nav=$1 [NC,L,QSA,CO=RewriteRule:02:https://www.example.org:30/:SameSite=None:Secure]
RewriteRule "^(.*)\.html$"       "index.php?nav=$1 [NC,L,QSA,CO=RewriteRule:03:https://www.example.org:30/:SameSite=None:Secure]
[...]
RewriteRule "^admin/(.*)\.html$" "admin/index.php?nav=$1 [NC,L,QSA,CO=RewriteRule:09:https://www.example.org:30/:SameSite=Strict:Secure]
```

## 仕様

| 仕様書                                                                                           | タイトル                                                              |
| ------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------- |
| {{RFC("6265", "Set-Cookie", "4.1")}}                                                 | HTTP 状態管理メカニズム                                               |
| [draft-ietf-httpbis-rfc6265bis-05](https://tools.ietf.org/html/draft-ietf-httpbis-rfc6265bis-05) | Cookie プレフィックス、同一サイト Cookie、および厳格なセキュア Cookie |

## ブラウザーの互換性

{{Compat("http.headers.Set-Cookie", 5)}}

## あわせて参照

- [HTTP cookies](/ja/docs/Web/HTTP/Cookies)
- {{HTTPHeader("Cookie")}}
- {{domxref("Document.cookie")}}
