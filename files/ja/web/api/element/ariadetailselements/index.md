---
title: "Element: ariaDetailsElements プロパティ"
short-title: ariaDetailsElements
slug: Web/API/Element/ariaDetailsElements
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

**`ariaDetailsElements`** は {{domxref("Element")}} インターフェイスのプロパティであり、適用対象の要素に対してアクセシブルな詳細情報を提供する要素（単数または複数）を含む配列です。
アクセシブル詳細情報は、アクセシブル説明（{{domxref("Element/ariaDescribedByElements","ariaDescribedByElements")}} を参照）と類似していますが、より詳しい情報を提供します。

[`aria-details`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) のトピックには、この属性とプロパティの使用方法に関する追加情報があります。

## 値

{{domxref("HTMLElement")}} のサブクラスの配列です。
これらの要素の内部テキストは、空白で連結することで、アクセシブル詳細情報になります。

読み取り時には、返される配列は静的で読み取り専用です。
書き込み時には、代入された配列はコピーされます。その後配列に変更を加えても、プロパティの値には影響しません。

## 解説

このプロパティは、アクセシブル詳細情報を設定するための [`aria-details`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) 属性の柔軟な代替手段です。
`aria-details` とは異なり、このプロパティに割り当てる要素は [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性を持つ必要がありません。

このプロパティは、定義されている場合に要素の [`aria-details`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) 属性を反映しますが、有効なスコープ内要素と一致する参照先の `id` 値に対してのみ反映されます。
このプロパティを設定すると、対応する属性がクリアされます。
反映される要素への参照とスコープに関するより詳細な情報については、「属性の反映」ガイドの[要素の参照の反映](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#要素の参照の反映)を参照してください。

## 例

### アクセシブル詳細を取得

この例は、`ariaDetailsElements` が HTML の `aria-details` 属性で定義された情報を取得するために使用できる方法を示します。

#### HTML

この HTML は 2 つの {{htmlelement("span")}} 要素を定義し、それらの ID を {{htmlelement("button")}} の `aria-details` 属性で参照しています。

```html
<button aria-details="details1 details2">ボタンテキスト</button>
…
<span id="details1">要素に関する詳細 1 情報です。</span>
<span id="details2">要素に関する詳細 2 情報です。</span>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 70px;
  overflow-x: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

以下のコードはまず、{{domxref("Element.getAttribute()")}} から取得した `aria-details` 属性の値（参照された要素の `id` 値を列挙した文字列）をログ出力します。
次に `ariaDetailsElements` に対応しているかを確認し、対応している場合はその値をログ出力します。
最後に、返された要素を反復処理し、それらの内部テキストを連結することで、計算されたアクセシブルな文字列を返します。

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const buttonElement = document.querySelector("button");
log(`aria-details: ${buttonElement.getAttribute("aria-details")}`);
// ariaDetailsElements の機能検出
if ("ariaDetailsElements" in Element.prototype) {
  // ariaDetailsElements の取得
  const buttonElements = buttonElement.ariaDetailsElements;
  log(`ariaDetailsElements: ${buttonElements}`);

  // ariaDetailsElements からのアクセシブル詳細
  const text = buttonElements.map((e) => e.textContent.trim()).join(" ");
  log(`アクセシブル詳細: ${text.trim()}`);
} else {
  log("element.ariaDetailsElements: ブラウザーが対応していません");
}
```

#### 結果

下記ログ出力は、元の要素参照、関連付けられた／返された要素、およびアクセス可能な詳細を表示させています。

{{EmbedLiveSample("Get the accessible details","100%","150px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`aria-details`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) 属性
- {{domxref("ElementInternals.ariaDetailsElements")}}
- [要素の参照の反映](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#要素の参照の反映)（「属性の反映」ガイド）
