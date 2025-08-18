---
title: "ARIA: suggestion ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/suggestion_role
l10n:
  sourceCommit: 50f209459d9e1db35bf0d973d7878ea4600acb8c
---

`suggestion` ロールは、編集可能なドキュメントに対する単一の変更提案をセマンティックに表します。これは、`insertion` ロールを持つ要素と `deletion` ロールを持つ要素をラップする要素に使用してください。

## 例

挿入*と*削除の両方を含むコンテンツの変更がある場合、スクリーンリーダーのユーザーには、この 2 つが関連しているかどうかを判断する方法がありません。これが `role="suggestion"` の役割であり、次のように両方をラップする要素に設定してください：

```html
<p>
  Freida's pet is a
  <span role="suggestion">
    <span role="deletion">black Cat called Luna</span>
    <span role="insertion">purple T. Rex called Tiny</span></span
  >.
</p>
```

誰がいつ提案したかを示す情報ボックスを提供し、 [`aria-details`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) を介して提案と関連付けることもできます：

```html
<p>
  Freida's pet is a
  <span role="suggestion" aria-details="comment-source">
    <span role="deletion">black Cat called Luna</span>
    <span role="insertion">purple T. Rex called Tiny</span></span
  >.
</p>

<div id="comment-source">
  Suggested by Chris,
  <time datetime="2019-03-30T19:29">March 30 2019, 19:29</time>
</div>
```

ブラウザーは、これらのロールを暗黙的に公開する HTML 要素を使用する場合、削除には既定の黒い取り消し線を、挿入には黒い下線を提供する傾向があります。しかし、div などの HTML 要素を変更するために明示的な ARIA ロールを使用する場合は、そのような削除と挿入の視覚的なスタイリングをカスタマイズするために CSS を使用する必要があります。

## ベストプラクティス

### 好ましい HTML

[`<ins>`](/ja/docs/Web/HTML/Reference/Elements/ins) と [`<del>`](/ja/docs/Web/HTML/Reference/Elements/del) 要素を使用すると、セクションが `insertion` または `deletion` のロールを持つことが自動的に伝達されます。可能な限り、HTML 要素の使用を優先してください。

## 仕様書

WAI-ARIA 1.3 の一部になる予定で、現在もドラフト作成中です。
