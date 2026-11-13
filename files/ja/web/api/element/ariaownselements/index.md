---
title: "Element: ariaOwnsElements プロパティ"
short-title: ariaOwnsElements
slug: Web/API/Element/ariaOwnsElements
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{APIRef("DOM")}}

**`ariaOwnsElements`** は {{domxref("Element")}} インターフェイスのプロパティであり、適用される親要素とその子要素の間に視覚的、機能的、または文脈的な関係を定義する要素（または要素群）を含む配列です。
これは、DOM 階層で関係を表すことができない場合、または支援技術が利用できない場合に用いられます。

[`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) のトピックには、この属性とプロパティの使用方法に関する詳しい情報が含まれています。

## 値

{{domxref("HTMLElement")}} のサブクラスの配列です。

読み取り時には、返される配列は静的で読み取り専用です。
書き込み時には、代入された配列はコピーされます。その後配列に変更を加えても、プロパティの値には影響しません。

## 解説

このプロパティは、要素のエラーメッセージを設定するための [`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) 属性の柔軟な代替手段です。
`aria-owns` とは異なり、このプロパティに割り当てる要素は [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性を持つ必要がありません。

このプロパティは、定義されている場合に要素の [`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) 属性を反映しますが、有効なスコープ内要素と一致する参照先の `id` 値に対してのみ反映されます。
このプロパティを設定すると、対応する属性がクリアされます。
反映される要素への参照とスコープに関するより詳細な情報については、「属性の反映」ガイドの[要素の参照の反映](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#要素の参照の反映)を参照してください。

## 例

### 所有している要素を取得

この例は、`aria-owns`属性とプロパティの使用方法を示しています。

このコードでは、メニューとその関連付けられたサブメニューを、別個の入れ子になっていない {{htmlelement("div")}} 要素で定義しています。
これらの要素は入れ子になっていないため、メニューとサブメニューの所有関係は DOM によって捕捉されません。
ここでは `aria-owns` 属性を使用してアクセシビリティツールにこの情報を提供していますが、反映プロパティを使用して実現することも可能です。

なお、サブメニューをネストしたメニューを構築することも可能です。この例は、関係性を定義する必要があるケースを説明しやすくするために意図的に簡略化されています。

#### HTML

この HTML では、メニュー用に `id=parentMenu` の `<div>` 要素と、サブメニュー用に `id="subMenu1"` の `<div>` 要素を定義しています。
DOM 内に直接的な所有関係モデルが定義されていないことをより明確に示すため、間に `<div>` を追加しました。

親メニュー `<div>` は、この所有関係を生成するために属性 `aria-owns="subMenu1"` を記載します。

```html
<div class="menu" id="parentMenu" role="menubar" aria-owns="subMenu1">
  最上位メニュー（この上でホバー）
</div>

<div>その他の要素</div>

<div class="submenu" id="subMenu1" role="menu">
  <a href="#" role="menuitem">メニューアイテム 1</a>
  <a href="#" role="menuitem">メニューアイテム 2</a>
  <a href="#" role="menuitem">メニューアイテム 3</a>
</div>
```

#### CSS

CSS はメニューとサブメニューのスタイル設定を行い、ポインターをメニューに当てた際にサブメニューを表示させます。

```css
.menu {
  position: relative;
  display: inline-block;
  color: purple;
}

.submenu {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 6px 14px 0px rgb(0 0 0 / 0.2);
  z-index: 1;
  top: 20px;
  left: 0;
}

.menu:hover ~ .submenu {
  display: block;
}

.submenu a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.submenu a:hover {
  background-color: #f1f1f1;
}
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 80px;
  overflow: scroll;
  padding: 0.5rem;
  margin: 5px;
  border: 1px solid black;
}
```

#### JavaScript

コードはまず、`ariaOwnsElements` が使用できるかどうかを調べます。
使用できる場合、その属性、プロパティ内の要素、およびそれぞれの要素の `id` 値をログ出力します。

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
// ariaOwnsElements の機能検出
if ("ariaOwnsElements" in Element.prototype) {
  const parentMenu = document.querySelector("#parentMenu");
  log(`parentMenu.getAttribute(): ${parentMenu.getAttribute("aria-owns")}`);
  log(`parentMenu.ariaOwnsElements: ${parentMenu.ariaOwnsElements}`);
  parentMenu.ariaOwnsElements?.forEach((elem) => {
    log(`  id: ${elem.id}`);
  });
} else {
  log("element.ariaOwnsElements: ブラウザーが対応していません");
}
```

#### 結果

コードを実行した結果を下記に示します。
ログからは、`aria-owns` 属性を使用して定義された関係が `ariaOwnsElements` プロパティに反映されていることがわかります（配列内の要素は属性要素参照と一致するプロパティを保持します）。

{{EmbedLiveSample("Get the flow-to element","100%","200px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`aria-owns`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) 属性
- {{domxref("ElementInternals.ariaOwnsElements")}}
- [要素の参照の反映](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#要素の参照の反映)（「属性の反映」ガイド）
