---
title: Prerender (事前レンダリング)
slug: Glossary/Prerender
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

事前レンダリングとは、ユーザーが近い将来に移動する可能性の高いページを、投機的に{{Glossary("Prefetch", "先読み")}}してレンダリングすることです。ブラウザーは、ページを別の非表示タブでレンダリングするのと実質的に同じように、バックグラウンドでレンダリングします。事前レンダリングには、文書のサブリソースのダウンロードと、それに関連する JavaScript の実行も含まれます。

ユーザーがそのページに移動すると、そのコンテンツをほぼ瞬時に表示できます。

例えば、「次へ」ボタンのリンク先ページや、ユーザーがポインターを合わせたリンクのポップアップ先ページなどのリソースを取得するために、事前レンダリングを使用できます。アドレスバーに入力中の URL の移動先として可能性の高いページも対象にできます。次の[投機ルール](/ja/docs/Web/API/Speculation_Rules_API)を文書の `<head>` に含めると、次のナビゲーション先となる可能性がある `next.html` と `next2.html` を事前レンダリングするよう、ブラウザーにヒントを与えられます。

```html
<script type="speculationrules">
  {
    "prerender": [
      {
        "source": "list",
        "urls": ["next.html", "next2.html"]
      }
    ]
  }
</script>
```

事前レンダリングは先読みよりもページを速く表示できるため、ユーザー体験を向上させますが、より多くのリソースを消費します。

## 関連情報

- [投機的読み込み](/ja/docs/Web/Performance/Guides/Speculative_loading)
- 関連する用語集項目:
  - {{Glossary("Prefetch", "先読み")}}
- [Chrome でページを事前レンダリングしてナビゲーションを瞬時に行う](https://developer.chrome.com/docs/web-platform/prerender-pages#prerendering-from-the-address-bar)<sup>(英語)</sup> - developer.chrome.com
- [投機ルール API](/ja/docs/Web/API/Speculation_Rules_API)
