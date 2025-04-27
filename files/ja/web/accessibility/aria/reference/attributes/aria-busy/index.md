---
title: aria-busy
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-busy
original_slug: Web/Accessibility/ARIA/Attributes/aria-busy
l10n:
  sourceCommit: 134f9a1ab341bf9ad30358e5f3a59bd9204078df
---

{{AccessibilitySidebar}}

[ARIA ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions) で使用されるグローバルな `aria-busy` 状態は、要素が変更中であり、支援技術はその変更が完了するまで待ってからユーザーに更新について通知する必要がある場合があることを示します。

変更をユーザーに通知する前にライブリージョンの複数の部分を読み込む必要がある場合は、読み込みが完了するまで `aria-busy="true"` を設定します。その後 `aria-busy="false"` に設定します。これにより、更新が完了する前に支援技術が変更を通知することがなくなります。

## 解説

コンテンツのセクションが更新される場合を考えます。その更新は重要であり、変更されたときにユーザーに知らせたいので、[`aria-live`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) 属性を使用して [ARIA ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions) にします。そのセクションの複数のコンポーネントを同時に更新したい場合もありますが、すべてが同時に更新されるとは限りません。`aria-live="assertive"` が付与されている非常に重要なライブリージョンであっても、コンテンツの様々な部分が読み込まれるたびにユーザーを何度も中断させたくはありません。ここで `aria-busy` が役立ちます。

`aria-busy` 属性は、ライブリージョンのオプショナルな属性で、値に `true` または `false` を持つことができます。`aria-busy="true"` は現在更新されている、または変更されている要素に追加することができ、支援技術に、修正または変更が完了するまでコンテンツをユーザーに公開しないように、待機することを通知することができます。変更が完了したら、オブジェクトの [`ariaBusy`](/ja/docs/Web/API/Element/ariaBusy) プロパティを使用して値を `false` に変更します。

```js
ariaLiveElement.ariaBusy = "false";
```

[`aria-live`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live) の値は、`aria-busy` の値を `false` に変更するとすぐに変更が通知されるか、または支援技術が、現在のタスクが完了するまで待機してからユーザーを中断するかを決定します。

### `feed` での使用

[`feed`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role) ロールを持つ要素の `aria-busy` が `true` に設定されている場合、ユーザーが開始した変更を除いて、フィード内で発生するレンダリングの変更は通知されません。

### `widget` での使用

レンダリングされたウィジェットに変更を加えると、スクリプト実行中にウィジェットに必要な所有要素が欠落する状態になる場合は、更新プロセス中にウィジェットの `aria-busy` を `true` に設定します。例えば、レンダリングされたツリーグリッドが、必ずしも同時にレンダリングされない複数のブランチを更新する場合、1 回の更新でツリー全体を置き換える代わりに、各ブランチが変更されている間ツリーをビジーとしてマークすることもできます。

## 値

- false (デフォルト):
  - : 要素に対して予想される更新はありません。
- true
  - : 要素が更新されています。

## 関連インターフェイス

- {{domxref("Element.ariaBusy")}}
  - : 各要素のインターフェイスの一部である [`ariaBusy`](/ja/docs/Web/API/Element/ariaBusy) プロパティは、要素が変更されているかどうかを示す属性 `aria-busy` の値を反映します。

```html
<div
  id="clock"
  role="timer"
  aria-live="polite"
  aria-atomic="true"
  aria-busy="false"></div>
```

```js
const el = document.getElementById("clock");
console.log(el.ariaBusy); // false
el.ariaBusy = "true";
console.log(el.ariaBusy); // true
```

## 関連ロール

**すべて**のロールで使用されます。

## 仕様書

{{Specifications}}

## 関連情報

- [ARIA ライブリージョン](/ja/docs/Web/Accessibility/ARIA/Guides/Live_regions)
- [`aria-live`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-live)
- [`aria-relevant`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-atomic`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
