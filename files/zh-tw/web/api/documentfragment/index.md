---
title: DocumentFragment
slug: Web/API/DocumentFragment
l10n:
  sourceCommit: fd1081dbbecd338a3ea55b03c187b6a60500408f
---

{{ APIRef("DOM") }}

**`DocumentFragment`** 介面代表一個沒有父節點的最小文件物件。

它被用作 {{domxref("Document")}} 的輕量版本，用來儲存由節點組成的文件結構片段，就像標準文件一樣。關鍵的差別在於文件片段並不是活動文件樹結構的一部分，對其所做的變更不會影響到文件本身。

{{InheritanceDiagram}}

## 建構子

- {{ domxref("DocumentFragment.DocumentFragment()", "DocumentFragment()") }}
  - : 建立並回傳一個新的 `DocumentFragment` 物件。

## 實例屬性

_此介面沒有特定的屬性，但會繼承其父介面 {{domxref("Node")}} 的屬性。_

- {{ domxref("DocumentFragment.childElementCount") }} {{ReadOnlyInline}}
  - : 回傳 `DocumentFragment` 中子 {{domxref("Element")}} 的數量。
- {{ domxref("DocumentFragment.children") }} {{ReadOnlyInline}}
  - : 回傳一個即時的 {{domxref("HTMLCollection")}}，包含 `DocumentFragment` 物件中的所有 {{domxref("Element")}} 類型子節點。
- {{ domxref("DocumentFragment.firstElementChild") }} {{ReadOnlyInline}}
  - : 回傳作為 `DocumentFragment` 第一個子 {{domxref("Element")}}，若無則回傳 `null`。
- {{ domxref("DocumentFragment.lastElementChild") }} {{ReadOnlyInline}}
  - : 回傳作為 `DocumentFragment` 最後一個子 {{domxref("Element")}}，若無則回傳 `null`。

## 實例方法

_此介面繼承其父介面 {{domxref("Node")}} 的方法。_

- {{DOMxRef("DocumentFragment.append()")}}
  - : 將一組 {{domxref("Node")}} 或字串插入至文件片段的最後一個子節點之後。
- {{DOMxRef("DocumentFragment.prepend()")}}
  - : 將一組 {{domxref("Node")}} 或字串插入至文件片段的第一個子節點之前。
- {{domxref("DocumentFragment.querySelector()")}}
  - : 依文件順序回傳第一個符合指定選擇器的 {{domxref("Element")}} 節點。
- {{domxref("DocumentFragment.querySelectorAll()")}}
  - : 回傳一個包含所有符合指定選擇器的 {{domxref("Element")}} 節點的 {{domxref("NodeList")}}。
- {{DOMxRef("DocumentFragment.moveBefore()")}} {{Experimental_Inline}}
  - : 將指定的 {{domxref("Node")}} 移動至呼叫者 `DocumentFragment` 的指定參考節點之前成為其直接子節點，而非先移除再插入。
- {{DOMxRef("DocumentFragment.replaceChildren()")}}
  - : 以一組指定的新子節點取代 `DocumentFragment` 中原有的子節點。
- {{domxref("DocumentFragment.getElementById()")}}
  - : 依文件順序回傳第一個符合指定 ID 的 {{domxref("Element")}} 節點。功能上等同於 {{domxref("Document.getElementById()")}}。

## 使用說明

`DocumentFragment` 的常見用途是先建立一個片段，在其中組裝一棵 DOM 子樹，再透過 {{domxref("Node")}} 介面的方法（如 {{domxref("Node.appendChild", "appendChild()")}}、{{domxref("Element.append", "append()")}} 或 {{domxref("Node.insertBefore", "insertBefore()")}}）將其附加或插入至 DOM。這樣的操作會將片段中的節點移動到 DOM 中，留下空的 `DocumentFragment`。

此介面在 Web 組件中特別有用：{{HTMLElement("template")}} 元素的 {{domxref("HTMLTemplateElement.content")}} 屬性就包含了一個 `DocumentFragment`。

可以使用 {{domxref("document.createDocumentFragment()")}} 方法或建構子來建立一個空的 `DocumentFragment`。

## 效能

`DocumentFragment` 的效能優勢經常被誇大。實際上，在某些引擎中，使用 `DocumentFragment` 甚至比直接用迴圈將元素加入文件還慢，參見[此效能比較](https://jsbench.me/02l63eic9j/1)。然而，這些範例間的效能差異微乎其微，因此建議優先考量可讀性而非效能。

## 範例

### HTML

```html
<ul></ul>
```

### JavaScript

```js
const ul = document.querySelector("ul");
const fruits = ["蘋果", "柳丁", "香蕉", "甜瓜"];

const fragment = new DocumentFragment();

for (const fruit of fruits) {
  const li = document.createElement("li");
  li.textContent = fruit;
  fragment.append(li);
}

ul.append(fragment);
```

### 結果

{{EmbedLiveSample('範例')}}

## 規範

{{Specifications}}

## 瀏覽器相容性

{{Compat}}
