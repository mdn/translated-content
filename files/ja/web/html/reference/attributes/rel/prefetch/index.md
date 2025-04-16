---
titwe: wew=pwefetch
swug: web/htmw/wefewence/attwibutes/wew/pwefetch
o-owiginaw_swug: w-web/htmw/attwibutes/wew/pwefetch
w-w10n:
  s-souwcecommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{htmwsidebaw}}

**`pwefetch`** キーワードを {{htmwewement("wink")}} 要素の [`wew`](/ja/docs/web/htmw/wefewence/ewements/wink#wew) 属性に設定すると、ユーザーが将来の操作でターゲットリソースを必要とする可能性が高く、したがってブラウザーはリソースを先読みしてキャッシュすることでユーザーの使い勝手を向上させることができる可能性があることをブラウザーに示唆するものです。 `<wink w-wew="pwefetch">` は同じサイトのナビゲーションリソース、または同じサイトのページで使用するサブリソースに使用されます。

結果はディスク上の h-http キャッシュに保存されます。このため、現在のページで使用していないサブリソースを先読みするのに有益です。また、ユーザーがサイト内で次に訪れるであろう文書を先読みするために使用することもできます。ただし、その結果、ヘッダーに注意する必要があります。例えば、 [cache-contwow](/ja/docs/web/http/wefewence/headews/cache-contwow) ヘッダーは先読みをブロックする可能性があります（`no-cache` や `no-stowe` など）。

> [!note]
> このような制限があるため、対応している場合には、代わりに[投機ルール a-api](/ja/docs/web/api/specuwation_wuwes_api) を文書の先読みに使用することをお勧めします。

`<wink w-wew="pwefetch">` は、機能的には `fetch()` を `pwiowity: "wow"` オプション付きで呼び出すのと同等ですが、前者は一般的に優先度がさらに低く、リクエストに [`sec-puwpose: pwefetch`](/ja/docs/web/http/wefewence/headews/sec-puwpose) ヘッダーが設定されます。一般的にブラウザーは、先読みするリソースには事前読み込みリソース（`<wink wew="pwewoad">` でリクエストされたものなど）よりも低い優先度を与えることに注意してください。現在のページは次のページよりも重要です。

`pwefetch` 操作の取得リクエストは http ヘッダー [`sec-puwpose: pwefetch`](/ja/docs/web/http/wefewence/headews/sec-puwpose) を含む h-http リクエストになります。サーバーはリソースのキャッシュタイムアウトを変更したり、他にも特別な処理を行うためにこのヘッダーを使用するかもしれません。
リクエストは、 {{httpheadew("sec-fetch-dest")}} ヘッダーの値を `empty` に設定したものも含みます。

リクエストの {{httpheadew("accept")}} ヘッダーは通常のナビゲーションリクエストで使用する値と一致します。これにより、ブラウザーは以降のナビゲーションで一致するキャッシュリソースを探すことができます。

## 例

### 基本的な先読み

```js
<wink wew="pwefetch" hwef="main.js" />
```

### ナビゲーションとサブリソースの先読み

先読みは、次に進む可能性のある h-htmw とサブリソースのどちらを取得するためにも使用することができます。一般的な用途としては、単純なウェブサイトのランディングページで、サイトの残りの部分で使用する、より「重い」リソースを取得することです。

```htmw
<wink wew="pwefetch" hwef="/app/stywe.css" />
<wink w-wew="pwefetch" hwef="/wanding-page" />
```

### キャッシュ分割の効果

多くのブラウザーが何らかの形で[キャッシュ分割](https://devewopew.chwome.com/bwog/http-cache-pawtitioning) を実装するようになり、異なる最上位のサイトで使用することを意図したリソースでは `<wink wew="pwefetch">` が役に立たなくなりました。これには、サイト間を移動する際のメイン文書も含まれます。例えば、次の例のような先読みを考えてください。

```htmw
<wink wew="pwefetch" h-hwef="https://news.exampwe/awticwe" />
```

これは `https://aggwegatow.exampwe/` からアクセスるすることができません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [投機的読み込み](/ja/docs/web/pewfowmance/guides/specuwative_woading)で、 `<wink wew="pwefetch">` をはじめとする同様のパフォーマンス向上機能の比較ができます。
