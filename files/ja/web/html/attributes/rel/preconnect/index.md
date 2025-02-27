---
title: rel=preconnect
slug: Web/HTML/Attributes/rel/preconnect
l10n:
  sourceCommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{HTMLSidebar}}

**`preconnect`** は {{HTMLElement("link")}} 要素の [`rel`](/ja/docs/Web/HTML/Element/link#rel) 属性に指定するキーワードで、ユーザーがターゲットリソースのオリジンからのリソースを必要とする可能性が高いことをブラウザーに示唆します。そのため、ブラウザーはそのオリジンへの接続を事前に開始しておくことで、ユーザーの操作性を改善することができる可能性があります。事前接続は、ハンドシェイク（HTTP のオリジンでは DNS+TCP、 HTTPS のオリジンでは DNS+TCP+TLS）の一部またはすべてを事前に実行しておくことにより、指定されたオリジンからの将来の読み込みを高速化します。

`<link rel="preconnect">` は、将来のオリジン間の HTTP リクエストにおいて、ナビゲーションまたはサブリソースのどちらでも利益をもたらします。同一オリジンのリクエストに対しては、すでに接続が開かれているため、何のメリットもありません。

ページがたくさんの第三者のドメインに接続する必要がある場合、それらすべてを事前に接続すると、逆効果になることがあります。 `<link rel="preconnect">` のヒントは、最も重要な接続だけに使うのが最善です。それ以外の場合は、 [`<link rel="dns-prefetch">`](/ja/docs/Web/HTML/Attributes/rel/dns-prefetch) を使用することで、最初のステップである DNS ルックアップの時間を節約することができます。

## 例

```html
<link rel="preconnect" href="https://example.com" />
```

事前接続は HTTP の [Link](/ja/docs/Web/HTTP/Headers/Link) ヘッダーで、次のように実装することもできます。

```http
Link: <https://example.com>; rel="preconnect"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [投機的読み込み](/ja/docs/Web/Performance/Speculative_loading)で、 `<link rel="preconnect">` をはじめとする同様のパフォーマンス向上機能の比較ができます。
