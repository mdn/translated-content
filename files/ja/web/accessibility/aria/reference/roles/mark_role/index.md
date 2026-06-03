---
title: "ARIA: mark ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/mark_role
l10n:
  sourceCommit: 22cf84fc5704222a2e2e5ac67b95b02dcfea08ff
---

`mark` ロールは、囲んでいるコンテキストにおいて関連性があるため、参照や注釈の目的でマークまたはハイライトされたコンテンツを示します。

## 説明

`mark` ロールは、参照目的でマーク/ハイライトされたテキストを含む HTML 要素を意味的に示します。これは、HTML の {{HTMLElement('mark')}} 要素と意味的に同等です。可能であれば、この要素を代わりに使用するべきです。

`mark` の使用例は `<mark>` 要素と全く同じです。これには、引用文内で特別な関心があるがオリジナルのソース資料ではマークされていないテキストのハイライト（印刷記事の文章をハイライトペンでマークするのと同等）、検索機能で見つかったテキストマッチのハイライトなど、ユーザーの現在の活動に関連するコンテンツの部分を示すことが含まれます。

構文ハイライトなどの純粋に装飾的なスタイリングには `mark` を使用しないでください。

`mark` 要素にはアクセシブル名を与えるべきではありません。[`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) と [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) 属性の両方が `mark` では禁止されています。

## 例

以下の例では、コメントが付けられたドキュメントセクションがあります。コメントされたセクションは `<span role="mark">` を使ってマークアップされています。

```html
<p>
  The last half of the song is a slow-rising crescendo that peaks at the
  <span role="mark" aria-details="thread-1">end of the guitar solo</span>,
  before fading away sharply.
</p>

<div role="comment" id="thread-1" data-author="chris">
  <h3>Chris said</h3>
  <p class="comment-text">I really think this moment could use more cowbell.</p>
  <p><time datetime="2022-03-30T19:29">March 30 2022, 19:29</time></p>
</div>
```

関連するコメントは、[`role="comment"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/comment_role) を含む {{HTMLElement('div')}} でラップされた HTML 構造を使ってマークアップされています。

コメントとコメントされているテキストを関連付けるには、コメントされているテキストを [`aria-details`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) 属性を含む要素でラップする必要があります。その値はコメントの ID である必要があります。

## ベストプラクティス

### 好ましい HTML

{{HTMLElement('mark')}} 要素を使用すると、ノードが `mark` ロールを持つことが自動的に伝わります。可能な限り、代わりにそれを使用することを推奨します。

## 仕様書

まだ草案段階である [WAI-ARIA 1.3](https://w3c.github.io/aria/#mark) の一部になる予定です。

## 関連情報

- HTML {{HTMLElement('mark')}} 要素
