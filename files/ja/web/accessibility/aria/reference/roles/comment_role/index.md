---
title: "ARIA: comment ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/comment_role
l10n:
  sourceCommit: 22cf84fc5704222a2e2e5ac67b95b02dcfea08ff
---

`comment` ロールは、ページ上のコンテンツまたは以前のコメントに対するコメント/リアクションを意味的に示します。

> [!NOTE]
> comment ロールは WAI-ARIA 1.3（[最新の ARIA ドラフト](https://w3c.github.io/aria/)）で提案されており、まだ草案段階です。

## 例

以下の例では、コメントが付けられたドキュメントセクションがあります。コメントされたセクションは `<span role="mark">` を使ってマークアップされています。

関連するコメントは、`role="comment"` を含む `<div>` でラップされた HTML 構造を使ってマークアップされています。

```html
<p>
  The last half of the song is a slow-rising crescendo that peaks at the
  <span role="mark" aria-details="thread-1">end of the guitar solo</span>,
  before fading away sharply.
</p>

<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris said</h3>
  <p class="comment-text">I really think this moment could use more cowbell.</p>
  <p><time datetime="2019-03-30T19:29">March 30 2019, 19:29</time></p>
</div>
```

コメントとコメントされているテキストを関連付けるには、コメントされているテキストを [`aria-details`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) 属性を含む要素でラップする必要があります。その値はコメントの ID である必要があります。

### 複数のコメント

`aria-details` は複数の ID を受け入れることができるようになったため、以下のように同じ注釈に複数のコメントを関連付けることができます。

```html
<p>
  The last half of the song is a slow-rising crescendo that peaks at the
  <mark aria-details="thread-1 thread-2">end of the guitar solo</mark>, before
  fading away sharply.
</p>

<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris said</h3>
  <p class="comment-text">I really think this moment could use more cowbell.</p>
  <p><time datetime="2019-03-30T19:29">March 30 2019, 19:29</time></p>
</div>

<div role="comment" id="thread-2" data-author="chris">
  <h3>Marcus said</h3>
  <p class="comment-text">
    The guitar solo could do with a touch more chorus, and a slightly lower
    volume.
  </p>
  <p><time datetime="2019-03-29T15:35">March 29 2019, 15:35</time></p>
</div>
```

### ネストしたコメント

以下のように、コメントを別のコメントの中にネストすることができます。

```html
<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris said</h3>
  <p class="comment-text">I really think this moment could use more cowbell.</p>
  <p><time datetime="2021-03-30T19:29">March 30 2021, 19:29</time></p>

  <div role="comment" data-author="marcus">
    <h3>Marcus replied</h3>
    <p class="comment-text">
      I don't know about that. I think the cowbell could distract from the solo.
    </p>
    <p><time datetime="2021-03-30T21:02">March 30 2021, 21:02</time></p>
  </div>
</div>
```

## アクセシビリティの懸念

なし。

## 仕様書

まだ草案段階である WAI-ARIA 1.3 の一部になる予定です。
