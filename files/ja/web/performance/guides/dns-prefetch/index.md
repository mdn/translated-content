---
title: dns-prefetch の使用
slug: Web/Performance/Guides/dns-prefetch
l10n:
  sourceCommit: 4c58f4735f986a91bee1b77e336143630df727a2
---

**`DNS-prefetch`** は、リソースがリクエストされる前にドメイン名を解決しようとする試みです。これは、後で読み込まれるファイルや、ユーザーがたどろうとするリンク先などです。

## なぜ dns-prefetch を使用するのか

ブラウザーが（サードパーティの）サーバーにリソースをリクエストする場合、リクエストを送信する前に、リクエスト先の[オリジンをまたぐ](/ja/docs/Web/HTTP/Guides/CORS)ドメイン名を IP アドレスに解決する必要があります。この処理は DNS 解決と呼ばれます。DNS キャッシュはこのレイテンシーを短縮するのに役立ちますが、DNS 解決によってリクエストに大きなレイテンシーが生じることもあります。多くのサードパーティに接続するウェブサイトでは、このレイテンシーによって読み込みパフォーマンスが大幅に低下する可能性があります。

`dns-prefetch` は、開発者が DNS 解決に伴うレイテンシーを目立たなくするのに役立ちます。[HTML の `<link>` 要素](/ja/docs/Web/HTML/Reference/Elements/link)では、[`rel` 属性](/ja/docs/Web/HTML/Reference/Attributes/rel)の値を `dns-prefetch` にすることでこの機能を利用できます。[オリジンをまたぐ](/ja/docs/Web/HTTP/Guides/CORS)ドメインは、[href 属性](/ja/docs/Web/HTML/Reference/Attributes)で指定します。

## 構文

```html
<link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
```

## 例

```html
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
    <!-- その他のヘッダー要素 -->
  </head>
  <body>
    <!-- ページの内容 -->
  </body>
</html>
```

自分のウェブサイトがオリジンをまたぐドメインのリソースを参照するときは、`dns-prefetch` ヒントを [`<head>` 要素](/ja/docs/Web/HTML/Reference/Elements/head)に配置します。ただし、いくつか注意点があります。

## ベストプラクティス

主な注意点は 3 つあります。

**第一**に、`dns-prefetch` は[オリジンをまたぐ](/ja/docs/Web/HTTP/Guides/CORS)ドメインの DNS 検索にのみ有効なので、自分のサイトやドメインを指すために使うのは避けてください。ブラウザーがヒントを見る時点で、自分のサイトのドメインの IP アドレスはすでに解決されているからです。

**第二**に、`dns-prefetch`（およびほかのリソースヒント）は、[HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)の [HTTP の Link フィールド](/ja/docs/Web/HTTP/Reference/Headers/Link)でも指定できます。

```http
Link: <https://fonts.googleapis.com/>; rel=dns-prefetch
```

**第三**に、`dns-prefetch` は DNS 検索のみを行いますが、`preconnect` はサーバーへの接続を確立します。この処理には、DNS 解決、TCP 接続の確立、サイトが HTTPS で提供されている場合は [TLS](/ja/docs/Glossary/TLS) ハンドシェイクが含まれます。`preconnect` を使うと、[オリジンをまたぐリクエスト](/ja/docs/Web/HTTP/Guides/CORS)で感じるレイテンシーをさらに短縮できます。[HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)の [HTTP の Link フィールド](/ja/docs/Web/HTTP/Reference/Headers/Link)で指定できます。

```http
Link: <https://fonts.googleapis.com/>; rel=preconnect
```

または、[HTML の `<link>` 要素](/ja/docs/Web/HTML/Reference/Elements/link)でも指定できます。

```html
<link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
```

> [!NOTE]
> ページが多数のサードパーティドメインに接続する必要がある場合、すべてに事前接続するのは逆効果です。`preconnect` ヒントは、最も重要な接続にのみ使うのが最適です。それ以外には `<link rel="dns-prefetch">` を使い、最初の段階である DNS 検索にかかる時間を節約しましょう。

この 2 つのヒントを組み合わせるのは、`dns-prefetch` のブラウザー対応が `preconnect` より広いためです。`preconnect` に対応していないブラウザーでも、`dns-prefetch` による代替である程度の効果を得られます。これは HTML の機能なので、非常に堅牢です。未対応のブラウザーが `dns-prefetch` ヒントやほかのリソースヒントに遭遇しても、サイトが壊れることはありません。ただし、ヒントによる効果は得られません。

フォントなど、一部のリソースは匿名モードで読み込まれます。その場合は、preconnect ヒントに [crossorigin](/ja/docs/Web/HTML/Reference/Attributes/crossorigin) 属性を設定する必要があります。これを省略すると、ブラウザーは DNS 検索のみを行います。

## 関連情報

- [`<link>`](/ja/docs/Web/HTML/Reference/Elements/link)
- [HTML 属性: rel](/ja/docs/Web/HTML/Reference/Attributes/rel)
- [HTML の rel 属性: preconnect](/ja/docs/Web/HTML/Reference/Attributes/rel/preconnect)
- [crossorigin](/ja/docs/Web/HTML/Reference/Attributes/crossorigin)
- [オリジン間リソース共有 (CORS)](/ja/docs/Web/HTTP/Guides/CORS)
- [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)
- [HTTP の Link ヘッダー](/ja/docs/Web/HTTP/Reference/Headers/Link)
