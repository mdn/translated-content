---
title: "ARIA: searchbox ロール"
slug: Web/Accessibility/ARIA/Reference/Roles/searchbox_role
l10n:
  sourceCommit: 50f209459d9e1db35bf0d973d7878ea4600acb8c
---

`searchbox` ロールは、要素が検索条件を指定するための `textbox` の一種であることを示します。

## 説明

`searchbox` は、テキストボックスがロール [`search`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/search_role) を持つ要素内にある場合に、[`textbox`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role) の代わりに使用できます。`searchbox` は、HTML の {{HTMLElement('input')}} 要素の `search` タイプ、つまり [`<input type="search">`](/ja/docs/Web/HTML/Reference/Elements/input/search) と意味的に等価であり、可能であればこちらを使用すべきです。

`searchbox` にはアクセシブル名が必要です。`searchbox` ロールが HTML の {{HTMLElement('input')}} 要素に適用される場合は、関連する {{HTMLElement('label')}} を使用すべきです。
それ以外の場合は、可視ラベルがある場合は [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) を使用し、可視ラベルがない場合は [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) を使用します。

スクリーンリーダーは、「search box」、「search edit」、または「search field」にアクセシブル名を加えて読み上げます。ラベルに「search」が含まれている場合、これは冗長になる可能性があります。

## 例

```html
<div tabindex="0" aria-label="search" role="searchbox" contenteditable></div>
```

上記は有効ですが、スクリーンリーダーユーザーにとってより簡潔で冗長性が少ないのは以下の書き方です：

```html
<input type="search" />
```

以下は、検索ボックスとボタン、ARIA ライブリージョン、検索結果のコンテナーを持つ検索フォームです。

```html
<form role="search">
  <input
    type="search"
    role="searchbox"
    aria-description="search results will appear below"
    id="search"
    value="" />
  <label for="search">Search this site</label>
  <button>Submit search</button>
</form>
<div aria-live="polite" role="region" aria-atomic="true">
  <div class="sr-only"></div>
</div>
<div id="search-results"></div>
```

フォームが `search` で、ラベルが要素が検索であることを示している場合に `role="searchbox"` を含めると、支援技術が「search search this site search box」のようなものを読み上げる可能性があり、これは冗長です。`role="searchbox"` の包含は必要ありません：

```html
<input
  type="search"
  aria-description="search results will appear below"
  id="search"
  value="" />
```

## 仕様書

{{Specifications}}

## 関連情報

- [`<input type="search">`](/ja/docs/Web/HTML/Reference/Elements/input/search)
- [ARIA: `search` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/search_role)
- [ARIA: `textbox` ロール](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role)
