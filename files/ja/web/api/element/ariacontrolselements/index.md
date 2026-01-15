---
title: "Element: ariaControlsElements プロパティ"
short-title: ariaControlsElements
slug: Web/API/Element/ariaControlsElements
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("DOM")}}

**`ariaControlsElements`** は {{domxref("Element")}} インターフェイスのプロパティで、適用先の要素によって制御される要素を含む配列です。
例えば、この要素は [combobox](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) に設定され、ポップアップする要素を示す場合や、 [`scrollbar`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) に設定され、制御する要素の ID を示す場合があります。

[`aria-controls`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) のトピックには、この属性とプロパティの使用方法に関する追加情報が含まれています。

## 値

この要素に制御される要素を表す、 {{domxref("HTMLElement")}} のサブクラスの配列です。

読み取り時には、返される配列は静的で読み取り専用です。
書き込み時には、代入された配列はコピーされます。その後配列に変更を加えても、プロパティの値には影響しません。

## 解説

このプロパティは、制御対象の要素を設定するための [`aria-controls`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) 属性の柔軟な代替手段です。
`aria-controls` とは異なり、このプロパティに割り当てる要素は [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性を必ずしも持つ必要はありません。

このプロパティは、定義されている場合に要素の [`aria-controls`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) 属性を反映しますが、有効なスコープ内要素と一致する参照先の `id` 値に対してのみ反映されます。
このプロパティを設定すると、対応する属性がクリアされます。
反映される要素への参照とスコープに関するより詳細な情報については、「属性の反映」ガイドの[要素の参照の反映](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#要素の参照の反映)を参照してください。

## 例

### 制御される要素を取得

この例では、`ariaControlsElements` を使用して、`aria-controls` で設定された制御対象の要素を取得する方法が表示されます。

#### HTML

この HTML はまず、{{htmlelement("button")}} 要素と、それを制御する 2 つの {{htmlelement("div")}} 要素（`panel1` と `panel2`）を定義します。
制御対象のパネルへの参照は、ボタンの `aria-controls` 属性に掲載されています。

```html
<button id="toggleButton" aria-controls="panel1 panel2" aria-expanded="false">
  詳細を表示
</button>

<div class="panel" id="panel1" aria-hidden="true">
  <p>パネル 1 はボタンで開かれ/閉じられます。</p>
</div>

<div class="panel" id="panel2" aria-hidden="true">
  <p>パネル 2 はボタンで開かれ/閉じられます。</p>
</div>
```

```css
.panel {
  display: none; /* 初期状態で非表示 */
  border: 1px solid #cccccc;
  padding: 5px;
  margin-top: 5px;
}
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

このコードはまず、ボタンの [`aria-expanded`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) 属性に基づいて、パネルが開いたり非表示になったりする状態を設定します。

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const toggleButton = document.querySelector("#toggleButton");
const panel1 = document.querySelector("#panel1");
const panel2 = document.querySelector("#panel2");

toggleButton.addEventListener("click", () => {
  const isExpanded = toggleButton.getAttribute("aria-expanded") === "true";

  toggleButton.setAttribute("aria-expanded", !isExpanded);
  panel1.style.display = isExpanded ? "none" : "block";
  panel1.setAttribute("aria-hidden", isExpanded); // 非表示の場合は true、表示の場合は true。

  panel2.style.display = isExpanded ? "none" : "block";
  panel2.setAttribute("aria-hidden", isExpanded); // 非表示の場合は true、表示の場合は true。
});
```

次に、この例では `aria-controls` 属性の値を {{domxref("Element.getAttribute()")}}（参照される要素の `id` 値を並べた文字列）で取得します。
その後、`ariaControlsElements` プロパティに対応してかどうかを確認し、対応している場合はその値をログに記録します。
最後に、制御対象のそれぞれの要素の内部テキストを返してログに記録します。

```js
log(`aria-controls: ${toggleButton.getAttribute("aria-controls")}`);
// ariaControlsElements の機能検出
if ("ariaControlsElements" in Element.prototype) {
  // ariaControlsElements を取得
  const controlledElements = toggleButton.ariaControlsElements;
  log(`ariaControlsElements: ${controlledElements}`);

  // 各 ariaControlsElements の innerText を列挙
  controlledElements.forEach((controlled) => {
    log(` Controlled element text: ${controlled.textContent.trim()}`);
  });
} else {
  log("element.ariaControlsElements: ブラウザーが対応していません");
}
```

#### 結果

下記ボタンをクリックすると、パネルの表示/非表示を切り替えられます。
ログ出力する内容は、元の要素参照、関連付けられた/返された要素、およびそれぞれの要素の内部テキストです。

{{EmbedLiveSample("Get the controlled elements","100%","280px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`aria-controls`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) 属性
- {{domxref("ElementInternals.ariaControlsElements")}}
- [要素の参照の反映](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#要素の参照の反映)（「属性の反映」ガイド）
