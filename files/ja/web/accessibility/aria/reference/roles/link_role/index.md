---
title: "ARIA: link ロール"
short-title: link
slug: Web/Accessibility/ARIA/Reference/Roles/link_role
l10n:
  sourceCommit: b5437b737639d6952d18b95ebd1045ed73e4bfa7
---

`link` ウィジェットは、リソースへの操作可能な参照を提供します。対象となるリソースは、外部でも内部でもかまいません。つまり、現在のページやアプリケーションの外側でも、内側でも構いません。

> [!NOTE]
> 可能であれば、`link` ロールではなくネイティブの {{HTMLElement("a")}} 要素を使用することをお勧めします。ネイティブ要素は古いユーザーエージェントや支援技術によって広くサポートされているためです。ネイティブの {{HTMLElement("a")}} 要素は、追加のカスタマイズを必要とせずに、デフォルトでキーボードとフォーカスの要件にも対応しています。

## 解説

`link` ロールは、アプリケーション内または外部にあるリソースへのハイパーリンクを生成する要素を識別するために使用されます。

意味的 HTM Lを本来の目的通りに使用しない場合、対話機能は再実装する必要があります。例えば、要素に `role="link"` が追加されている場合、<kbd>tab</kbd> キーを押すとそのリンクにフォーカスが移動し、<kbd>enter</kbd> キーを押すと、フォーカスが当たったリンクが実行されるようにする必要があります。

[`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) 属性を `0` の値で使用し、このリンクが正しいタブフォーカス順に確実に含まれるようにしてください。

> [!WARNING]
> 要素に `link` ロールを適用しても、ブラウザーはその要素に、下線、フォーカスリング、リンク先への移動、コンテキストメニューの操作といった、標準的なリンクの外観や動作を行うことはありません。これらは開発者の責任となります。

## 例

{{HTMLElement('a')}} ではない要素に対して `link` ロールを使用してアクセシブルなリンクを再現するには、そのリンクが正しいタブ順序でフォーカスを受け取ることを確実にし、要素がリンクのように見えることを実現し、そしてその「リンク」がリンクとして機能することを実現する必要があります。

```html
<span data-href="https://mozilla.org" tabindex="0" role="link">
  span 要素を使用して作成された偽のアクセシブルなリンク
</span>
```

### CSS

```css
span[role="link"] {
  color: blue;
  text-decoration: underline;
  cursor: pointer;
}
span[role="link"]:hover,
span[role="link"]:active,
span[role="link"]:focus {
  color: purple;
}

span[role="link"]:focus {
  background-color: palegoldenrod;
  outline: 1px dotted;
}
```

### JavaScript

```js
const fakeLinks = document.querySelectorAll('[role="link"]');

for (const link of fakeLinks) {
  link.addEventListener("click", navigateLink);
  link.addEventListener("keydown", navigateLink);
}

// リンクの click および keydown イベントを処理
function navigateLink(e) {
  if (e.type === "click" || e.key === "Enter") {
    const ref = e.target ?? e.srcElement;
    if (ref) {
      window.open(ref.getAttribute("data-href"), "_blank");
    }
  }
}
```

`role="link"` が設定された要素が <kbd>Enter</kbd> キーイベントを受け取った場合、そのリンクが実行され、リンク先のページに移動するか、ページ内のターゲットにフォーカスが移動されます。

オプションで、<kbd>Shift</kbd> + <kbd>F10</kbd> を押すと、そのリンクのコンテキストメニューが開きます。

## ベストプラクティス

さまざまなウィジェットロールが、一般的な対話パターン を定義するために使用されます。文書構造ロールと同様に、`link` ロールを含むこれらのロールの一部は、十分に対応されて いるネイティブの HTML 要素の意味づけと重複しているため、使用すべきではありません。

完全性を期すために `link` を含めましたが、使用することは避けてください。アクセシビリティに配慮した対話的機能を備えた、意味的に同等の {{HTMLElement('a')}} が利用可能であり、対応しています。

### 推奨される HTML

代わりに {{HTMLElement('a')}} を使用してください。

> [!NOTE]
> HTML のリンクに `role="link"` を記載する必要はありません。なぜなら、`<a>` にはデフォルトでそのロールがすでに設定されているからです。

## 仕様書

{{Specifications}}

### その他のリソース

- {{HTMLElement('a')}} 要素
- {{HTMLElement('button')}} 要素
- [`aria-label`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
- [ARIA practices `link` role examples](https://www.w3.org/WAI/ARIA/apg/patterns/link/examples/link/)
