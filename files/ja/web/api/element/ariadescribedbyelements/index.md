---
title: "Element: ariaDescribedByElements プロパティ"
short-title: ariaDescribedByElements
slug: Web/API/Element/ariaDescribedByElements
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

**`ariaDescribedByElements`** は{{domxref(「Element」)}} インターフェイスのプロパティで、適用先の要素にアクセシブル説明を提供する要素（または要素群）を含みます。
アクセシブル説明は、アクセシブルなラベル（{{domxref("Element/ariaLabelledByElements","ariaLabelledByElements")}} 参照）に似ていますが、より詳しい情報を提供します。

[`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) のトピックには、この属性とプロパティの使用方法に関する追加情報があります。

## 値

{{domxref("HTMLElement")}} のサブクラスの配列です。
これらの要素の内部テキストは、空白で連結することで、アクセシブル説明になります。

読み取り時には、返される配列は静的で読み取り専用です。
書き込み時には、代入された配列はコピーされます。その後配列に変更を加えても、プロパティの値には影響しません。

## 解説

このプロパティは、アクセシブル説明を設定するための [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 属性の柔軟な代替手段です。
`aria-describedby` とは異なり、このプロパティに割り当てる要素は [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性を持つ必要がありません。

このプロパティは、定義されている場合に要素の [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 属性を反映しますが、有効なスコープ内要素と一致する参照先の `id` 値に対してのみ反映されます。
このプロパティを設定すると、対応する属性がクリアされます。
反映される要素への参照とスコープに関するより詳細な情報については、「属性の反映」ガイドの[要素の参照の反映](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#要素の参照の反映)を参照してください。

## 例

### アクセシブル説明を取得

この例では、`ariaDescribedByElements` が `aria-describedby` を使用して定義されたアクセシブル説明を取得する方法を示しています。

#### HTML

この HTML は 2 つの {{htmlelement("span")}} 要素を定義し、それらの ID を {{htmlelement("button")}} の `aria-describedby` 属性で参照しています。

```html
<button aria-describedby="trash-desc1 trash-desc2">ゴミ箱へ移動</button>
…
<span id="trash-desc1">30 日後、ゴミは永久に削除されます。</span>
<span id="trash-desc2">またはそれ以外！</span>
```

```html hidden
<pre id="log"></pre>
```

#### CSS

ここでは、アクセシブルなテキストが含まれている `<span>` 要素を非表示にします。

```css
span {
  display: none;
}
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

以下のコードはまず、{{domxref("Element.getAttribute()")}} から取得した `aria-describedby` 属性の値（参照される要素の `id` 値を列挙している文字列）をログ出力します。
次に `ariaDescribedByElements` に対応しているかを確認し、対応している場合はその値をログ出力します。
最後に、返された要素を反復処理し、それらの内部テキストを連結することで計算されたアクセシブルな文字列を返します。

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const buttonElement = document.querySelector("button");
log(`aria-describedby: ${buttonElement.getAttribute("aria-describedby")}`);
// ariaDescribedByElements の機能検出
if ("ariaDescribedByElements" in Element.prototype) {
  // ariaDescribedByElements を取得
  const buttonElements = buttonElement.ariaDescribedByElements;
  log(`ariaDescribedByElements: ${buttonElements}`);

  // 要素のアクセシブル説明
  const text = buttonElements.map((e) => e.textContent.trim()).join(" ");
  log(`アクセシブル説明: ${text.trim()}`);
} else {
  log("element.ariaDescribedByElements: ブラウザーが対応していません");
}
```

#### 結果

下記ログ出力は、元の要素参照、関連付けられた／返された要素、およびアクセシブル説明を示して表示します。

{{EmbedLiveSample("Get the accessible description","100%","150px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) 属性
- {{domxref("ElementInternals.ariaDescribedByElements")}}
- [要素の参照の反映](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#要素の参照の反映)（「属性の反映」ガイド）
