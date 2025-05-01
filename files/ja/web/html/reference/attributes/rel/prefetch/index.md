---
title: rel=prefetch
slug: Web/HTML/Reference/Attributes/rel/prefetch
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

**`prefetch`** キーワードを {{HTMLElement("link")}} 要素の [`rel`](/ja/docs/Web/HTML/Reference/Elements/link#rel) 属性に設定すると、ユーザーが将来の操作でターゲットリソースを必要とする可能性が高く、したがってブラウザーはリソースを先読みしてキャッシュすることでユーザーの使い勝手を向上させることができる可能性があることをブラウザーに示唆するものです。 `<link rel="prefetch">` は同じサイトのナビゲーションリソース、または同じサイトのページで使用するサブリソースに使用されます。

結果はディスク上の HTTP キャッシュに保存されます。このため、現在のページで使用していないサブリソースを先読みするのに有益です。また、ユーザーがサイト内で次に訪れるであろう文書を先読みするために使用することもできます。ただし、その結果、ヘッダーに注意する必要があります。例えば、 [Cache-Control](/ja/docs/Web/HTTP/Reference/Headers/Cache-Control) ヘッダーは先読みをブロックする可能性があります（`no-cache` や `no-store` など）。

> [!NOTE]
> このような制限があるため、対応している場合には、代わりに[投機ルール API](/ja/docs/Web/API/Speculation_Rules_API) を文書の先読みに使用することをお勧めします。

`<link rel="prefetch">` は、機能的には {{domxref("Window/fetch", "fetch()")}} を `priority: "low"` オプション付きで呼び出すのと同等ですが、前者は一般的に優先度がさらに低く、リクエストに [`Sec-Purpose: prefetch`](/ja/docs/Web/HTTP/Reference/Headers/Sec-Purpose) ヘッダーが設定されます。一般的にブラウザーは、先読みするリソースには事前読み込みリソース（[`<link rel="preload">`](/ja/docs/Web/HTML/Reference/Attributes/rel/preload) でリクエストされたものなど）よりも低い優先度を与えることに注意してください。現在のページは次のページよりも重要です。

`prefetch` 操作の取得リクエストは HTTP ヘッダー [`Sec-Purpose: prefetch`](/ja/docs/Web/HTTP/Reference/Headers/Sec-Purpose) を含む HTTP リクエストになります。サーバーはリソースのキャッシュタイムアウトを変更したり、他にも特別な処理を行うためにこのヘッダーを使用するかもしれません。
リクエストは、 {{HTTPHeader("Sec-Fetch-Dest")}} ヘッダーの値を `empty` に設定したものも含みます。

リクエストの {{HTTPHeader("Accept")}} ヘッダーは通常のナビゲーションリクエストで使用する値と一致します。これにより、ブラウザーは以降のナビゲーションで一致するキャッシュリソースを探すことができます。

## 例

### 基本的な先読み

```js
<link rel="prefetch" href="main.js" />
```

### ナビゲーションとサブリソースの先読み

先読みは、次に進む可能性のある HTML とサブリソースのどちらを取得するためにも使用することができます。一般的な用途としては、単純なウェブサイトのランディングページで、サイトの残りの部分で使用する、より「重い」リソースを取得することです。

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

### キャッシュ分割の効果

多くのブラウザーが何らかの形で[キャッシュ分割](https://developer.chrome.com/blog/http-cache-partitioning) を実装するようになり、異なる最上位のサイトで使用することを意図したリソースでは `<link rel="prefetch">` が役に立たなくなりました。これには、サイト間を移動する際のメイン文書も含まれます。例えば、次の例のような先読みを考えてください。

```html
<link rel="prefetch" href="https://news.example/article" />
```

これは `https://aggregator.example/` からアクセスるすることができません。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [投機的読み込み](/ja/docs/Web/Performance/Guides/Speculative_loading)で、 `<link rel="prefetch">` をはじめとする同様のパフォーマンス向上機能の比較ができます。
