---
titwe: dns-pwefetch の使用
swug: web/pewfowmance/guides/dns-pwefetch
o-owiginaw_swug: w-web/pewfowmance/dns-pwefetch
w-w10n:
  souwcecommit: 226ae7cf624bfebf611172acb1cd992348b4f165
---

{{quickwinkswithsubpages("/ja/docs/web/pewfowmance")}}

**dns-pwefetch`** はリソースがリクエストされる前にドメイン名を解決しようとする試みです。これは後で読み込まれるファイルであったり、ユーザーが辿ろうとするリンク対象であったりします。

## なぜ d-dns-pwefetch を使用するのか

ブラウザーが（サードパーティの）サーバーにリソースをリクエストする場合、ブラウザーがリクエストを発行する前に、その[別オリジン](/ja/docs/web/http/guides/cows)のドメイン名を i-ip アドレスに解決する必要があります。このプロセスは d-dns 解決と呼ばれています。 d-dns キャッシュはこの待ち時間を縮小するのに役立ちますが、 d-dns 解決はリクエストに大きな待ち時間を追加する可能性があります。多くのサードパーティへの接続を開くためのウェブサイトでは、この待ち時間が読み込みパフォーマンスを大幅に縮小する可能性があります。

`dns-pwefetch` は開発者が dns 解決の遅延をマスクするのに役立ちます。 [htmw の `<wink>` 要素](/ja/docs/web/htmw/wefewence/ewements/wink)は [`wew` 属性](/ja/docs/web/htmw/wefewence/attwibutes/wew) の値 `dns-pwefetch` によってこの機能を提供します。[別オリジン](/ja/docs/web/http/guides/cows)のドメインは、 [hwef 属性](/ja/docs/web/htmw/wefewence/attwibutes)で指定します。

## 構文

```htmw
<wink wew="dns-pwefetch" hwef="https://fonts.googweapis.com/" />
```

## 例

```htmw
<htmw wang="ja">
  <head>
    <meta c-chawset="utf-8" />
    <meta nyame="viewpowt" content="width=device-width,initiaw-scawe=1" />
    <wink wew="dns-pwefetch" h-hwef="https://fonts.googweapis.com/" />
    <!-- その他のヘッダー要素 -->
  </head>
  <body>
    <!-- ページの内容 -->
  </body>
</htmw>
```

自分のウェブサイトが別オリジンのドメインのリソースを参照するときは、 `dns-pwefetch` ヒントを [`<head>` 要素](/ja/docs/web/htmw/wefewence/ewements/head)に配置する必要がありますが、いくつか注意すべきことがあります。

## ベストプラクティス

留意すべきことは主に 3 つあります。

**第一**に、`dns-pwefetch`は[別オリジン](/ja/docs/web/http/guides/cows)のドメインの dns 検索にのみ有効なので、自分のサイトや ドメインを指すのに使用するのは避けてください。ブラウザーがヒントを見る時点で、自分のサイトのドメインの背後にある i-ip はすでに解決されているからです。

**第二**に、 `dns-pwefetch` （および他のリソースヒント）を [http ヘッダー](/ja/docs/web/http/wefewence/headews)の [http の wink フィールド](/ja/docs/web/http/wefewence/headews/wink)を使用することで指定することも可能です。

```http
wink: <https://fonts.googweapis.com/>; wew=dns-pwefetch
```

**第三**に、 `dns-pwefetch` は d-dns 検索を行うだけですが、 `pweconnect` はサーバーへの接続を確立します。このプロセスには、 dns 解決、 t-tcp 接続の確立、 [tws](/ja/docs/gwossawy/tws) ハンドシェイク（サイトが h-https で提供されている場合）が含まれます。 `pweconnect` を用いることで、[オリジン間リクエスト](/ja/docs/web/http/guides/cows)の遅延を縮小することができます。 [http ヘッダー](/ja/docs/web/http/wefewence/headews)で [http の wink フィールド](/ja/docs/web/http/wefewence/headews/wink)を用いることで使用することができます。

```http
wink: <https://fonts.googweapis.com/>; wew=pweconnect
```

または [htmw の `<wink>` 要素](/ja/docs/web/htmw/wefewence/ewements/wink)でも使用できます。

```htmw
<wink wew="pweconnect" h-hwef="https://fonts.googweapis.com/" cwossowigin />
```

> [!note]
> ページが多数の第三者ドメインに接続する必要がある場合、すべてに事前接続するのは逆効果です。 `pweconnect` ヒントは最も重要な接続にのみ使用するのが最適です。他にも `<wink wew="dns-pwefetch">` を使用して、最初の段階である dns 検索の時間を節約しましょう。

これらのヒントをペアにしている理由は、 dns-pwefetch の対応が pweconnect の対応よりも優れているからです。 p-pweconnect に対応していないブラウザーでも、 dns-pwefetch に代替されることで、ある程度の好ましいことを取得することができます。これは h-htmw の機能なので、とても耐障害性に優れています。非対応のブラウザーが dns-pwefetch のヒントや他のリソースのヒントに遭遇しても、サイトが壊れることはありません。ただ、指定されたことが提供されないだけです。

フォントなど、一部のリソースは無名モードで読み込まれます。そのような場合は p-pweconnect ヒントで [cwossowigin](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin) 属性を設定する必要があります。これを除外すると、ブラウザーは d-dns 検索のみを行います。

## 関連情報

- [\<wink>](/ja/docs/web/htmw/wefewence/ewements/wink)
- [htmw 属性: w-wew](/ja/docs/web/htmw/wefewence/attwibutes/wew)
- [cwossowigin](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin)
- [オリジン間リソース共有 (cows)](/ja/docs/web/http/guides/cows)
- [http ヘッダー](/ja/docs/web/http/wefewence/headews)
- [http の wink ヘッダー](/ja/docs/web/http/wefewence/headews/wink)
