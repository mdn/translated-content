---
title: dns-prefetch の使用
slug: Web/Performance/Guides/dns-prefetch
l10n:
  sourceCommit: e488eba036b2fee56444fd579c3759ef45ff2ca8
---

**`DNS-prefetch`** はリソースがリクエストされる前にドメイン名を解決しようとする試みです。これは後で読み込まれるファイルであったり、ユーザーが辿ろうとするリンク対象であったりします。

## なぜ dns-prefetch を使用するのか

ブラウザーが（サードパーティの）サーバーにリソースをリクエストする場合、ブラウザーがリクエストを発行する前に、その[別オリジン](/ja/docs/Web/HTTP/Guides/CORS)のドメイン名を IP アドレスに解決する必要があります。このプロセスは DNS 解決と呼ばれています。 DNS キャッシュはこの待ち時間を縮小するのに役立ちますが、 DNS 解決はリクエストに大きな待ち時間を追加する可能性があります。多くのサードパーティへの接続を開くためのウェブサイトでは、この待ち時間が読み込みパフォーマンスを大幅に縮小する可能性があります。

`dns-prefetch` は開発者が DNS 解決の遅延をマスクするのに役立ちます。 [HTML の `<link>` 要素](/ja/docs/Web/HTML/Reference/Elements/link)は [`rel` 属性](/ja/docs/Web/HTML/Reference/Attributes/rel) の値 `dns-prefetch` によってこの機能を提供します。[別オリジン](/ja/docs/Web/HTTP/Guides/CORS)のドメインは、 [href 属性](/ja/docs/Web/HTML/Reference/Attributes)で指定します。

## 構文

```html
<link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
```

## 例

```html
<html lang="ja">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <link rel="dns-prefetch" href="https://fonts.googleapis.com/" />
    <!-- その他のヘッダー要素 -->
  </head>
  <body>
    <!-- ページの内容 -->
  </body>
</html>
```

自分のウェブサイトが別オリジンのドメインのリソースを参照するときは、 `dns-prefetch` ヒントを [`<head>` 要素](/ja/docs/Web/HTML/Reference/Elements/head)に配置する必要がありますが、いくつか注意すべきことがあります。

## ベストプラクティス

留意すべきことは主に 3 つあります。

**第一**に、 `dns-prefetch` は[別オリジン](/ja/docs/Web/HTTP/Guides/CORS)のドメインの DNS 検索にのみ有効なので、自分のサイトやドメインを指すのに使用するのは避けてください。ブラウザーがヒントを見る時点で、自分のサイトのドメインの背後にある IP はすでに解決されているからです。

**第二**に、 `dns-prefetch` （および他のリソースヒント）を [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)の [HTTP の Link フィールド](/ja/docs/Web/HTTP/Reference/Headers/Link)を使用することで指定することも可能です。

```http
Link: <https://fonts.googleapis.com/>; rel=dns-prefetch
```

**第三**に、 `dns-prefetch` は DNS 検索を行うだけですが、 `preconnect` はサーバーへの接続を確立します。このプロセスには、 DNS 解決、 TCP 接続の確立、 [TLS](/ja/docs/Glossary/TLS) ハンドシェイク（サイトが HTTPS で提供されている場合）が含まれます。 `preconnect` を用いることで、[オリジン間リクエスト](/ja/docs/Web/HTTP/Guides/CORS)の遅延を縮小することができます。 [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)で [HTTP の Link フィールド](/ja/docs/Web/HTTP/Reference/Headers/Link)を用いることで使用することができます。

```http
Link: <https://fonts.googleapis.com/>; rel=preconnect
```

または [HTML の `<link>` 要素](/ja/docs/Web/HTML/Reference/Elements/link)でも使用できます。

```html
<link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin />
```

> [!NOTE]
> ページが多数の第三者ドメインに接続する必要がある場合、すべてに事前接続するのは逆効果です。 `preconnect` ヒントは最も重要な接続にのみ使用するのが最適です。他にも `<link rel="dns-prefetch">` を使用して、最初の段階である DNS 検索の時間を節約しましょう。

これらのヒントをペアにしている理由は、 dns-prefetch の対応が preconnect の対応よりも優れているからです。 preconnect に対応していないブラウザーでも、 dns-prefetch に代替されることで、ある程度の好ましいことを取得することができます。これは HTML の機能なので、とても耐障害性に優れています。非対応のブラウザーが dns-prefetch のヒントや他のリソースのヒントに遭遇しても、サイトが壊れることはありません。ただ、指定されたことが提供されないだけです。

フォントなど、一部のリソースは無名モードで読み込まれます。そのような場合は [crossorigin](/ja/docs/Web/HTML/Reference/Attributes/crossorigin) 属性を preconnect ヒントで設定する必要があります。これを除外すると、ブラウザーは DNS 検索のみを行います。

## 関連情報

- [`<link>`](/ja/docs/Web/HTML/Reference/Elements/link)
- [HTML 属性: rel](/ja/docs/Web/HTML/Reference/Attributes/rel)
- [HTML の rel 属性: preconnect](/ja/docs/Web/HTML/Reference/Attributes/rel/preconnect)
- [crossorigin](/ja/docs/Web/HTML/Reference/Attributes/crossorigin)
- [オリジン間リソース共有 (CORS)](/ja/docs/Web/HTTP/Guides/CORS)
- [HTTP ヘッダー](/ja/docs/Web/HTTP/Reference/Headers)
- [HTTP の Link ヘッダー](/ja/docs/Web/HTTP/Reference/Headers/Link)
