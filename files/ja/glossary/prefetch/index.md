---
title: Prefetch (先読み)
slug: Glossary/Prefetch
l10n:
  sourceCommit: 922c2b0f37e2f13887c50efe47e62bc23d94c3aa
---

{{GlossarySidebar}}

先読み (Prefetching) は、近い将来ユーザーが移動する可能性のあるページに対して、バックグラウンドで文書やサブリソースを投機的に取得するということです。
これによって、ユーザーが先読みされたページを選んだ場合、そのページの読み込む時間を大幅に短縮することができます。
先読みは、例えば、 "Next" ボタンでリンクされたページやそのサブリソース、ユーザーが当てたリンクのポップアップ、検索結果などを取得するために使用する可能性があります。

### リソースの先読み

リソースの先読みは、それが将来のナビゲーションで必要になる可能性の高さに基づいて行うべきです。ブラウザーは、アドレスバーの現在の URL のようないくつかのリソースについて、これを自動的に推測することができます。

これは [`<link rel="prefetch">`](/ja/docs/Web/HTML/Attributes/rel/prefetch) を使用して行う言ことができます（[投機ルール API](/ja/docs/Web/API/Speculation_Rules_API) はナビゲーションのための文書の先読みだけを処理します）。

```html
<link rel="prefetch" href="next.html" />
```

### 文書の先読み

開発者はさまざまな方法で、先読みすべきナビゲーションのヒントをブラウザーに提供することができます。

[`<link rel="prefetch">`](/ja/docs/Web/HTML/Attributes/rel/prefetch) の場合:

```html
<link rel="prefetch" href="next.html" />
```

[投機ルール API](/ja/docs/Web/API/Speculation_Rules_API) の先読みの場合:

```html
<script type="speculationrules">
  {
    "prefetch": [
      {
        "source": "list",
        "urls": ["next.html"]
      }
    ]
  }
</script>
```

投機ルール API は、ナビゲーションのための文書の先読みを `<link rel="prefetch">` よりもうまく扱います。前者はそのために特別に設計されたのに対して、後者は多くの制限があります。詳細は [`<link rel="prefetch">`](/ja/docs/Web/HTML/Attributes/rel/prefetch) を参照してください。

### DNS 先読み

[DNS 先読み](/ja/docs/Web/HTML/Attributes/rel/dns-prefetch)は、事前にドメイン名を解決し、リクエスト時のドメイン検索にかかる時間を短縮することで、読み込む時間を短縮します。

```html
<link rel="dns-prefetch" href="https://example.com/" />
```

## 関連情報

- [投機的読み込み](/ja/docs/Web/Performance/Speculative_loading)
- {{Glossary("prerender")}}
- [投機ルール API](/ja/docs/Web/API/Speculation_Rules_API)
