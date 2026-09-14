---
title: "Element: ariaLabelledByElements プロパティ"
short-title: ariaLabelledByElements
slug: Web/API/Element/ariaLabelledByElements
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

**`ariaLabelledByElements`** は {{domxref("Element")}} インターフェイスのプロパティで、適用先の要素に対してアクセシブル名を提供する要素（または要素群）が含む配列です。

このプロパティは主に、アクセシブル名を定義する標準的な方法を持たない要素にラベルを提供するためのものです。
例えば、{{htmlelement("div")}} や {{htmlelement("span")}} のような汎用コンテナー要素、あるいは不透明度を変更できるスライダー付き画像のような要素のグループに名前を付けるために使用できます。
このプロパティは、要素にアクセシブル名を提供する他のメカニズムよりも優先されるため、通常は内部コンテンツやラベルなどの関連付けられた要素から名前を取得する要素に対しても、同時に名前を付与するために使用できます。

[`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) のトピックには、この属性とプロパティの使用方法に関する詳しい情報が含まれています。

## 値

要素の配列です。
これらの要素の内部テキストは、空白で連結することで、アクセシブル名になります。

読み取り時には、返される配列は静的で読み取り専用です。
書き込み時には、代入された配列はコピーされます。その後配列に変更を加えても、プロパティの値には影響しません。

## 解説

このプロパティは、アクセシブル名を設定するための [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) 属性の柔軟な代替手段です。
`aria-labelledby` とは異なり、このプロパティに割り当てる要素は [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性を持つ必要がありません。

このプロパティは、定義されている場合に要素の [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) 属性を反映しますが、有効なスコープ内要素と一致する参照先の `id` 値に対してのみ反映されます。
このプロパティを設定すると、対応する属性がクリアされます。
反映される要素への参照とスコープに関するより詳細な情報については、「属性の反映」ガイドの[要素の参照の反映](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#要素の参照の反映)を参照してください。

## 例

### アクセシブル名の取得

この例は、`ariaLabelledByElements` が `aria-labelledby` を使用して定義された ARIA ラベルを取得するために使用できることを示してしています。

#### HTML

この HTML は 2 つの {{htmlelement("span")}} 要素を定義し、それらの ID を {{htmlelement("input")}} の `aria-labelledby` 属性で参照しています。
`<input>` のアクセシブル名は、参照された 2 つの要素の内部テキストを空白で区切って連結したものです。

```html
<span id="label_1">Street name</span>
<input aria-labelledby="label_1 label_2" />
<span id="label_2">(just the name, no "Street" or "Road" or "Place")</span>
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

以下のコードはまず、{{domxref("Element.getAttribute()")}} から取得した `aria-labelledby` 属性の値（参照される要素の `id` 値を列挙した文字列）をログ出力します。
次に `ariaLabelledByElements` に対応しているかどうかを確認し、対応している場合はその値をログ出力します。
最後に、要素を反復処理して内部テキストを連結することで計算されたアクセシブルな文字列を返します。

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
const inputElement = document.querySelector("input");
log(`aria-labelledby: ${inputElement.getAttribute("aria-labelledby")}`);
// ariaLabelledByElements の機能検出
if ("ariaLabelledByElements" in Element.prototype) {
  // ariaLabelledByElements を取得
  const labelElements = inputElement.ariaLabelledByElements;
  log(`ariaLabelledByElements: ${labelElements}`);

  // 要素の内部テキストをアクセシブル名として取得
  const text = labelElements.map((e) => e.textContent.trim()).join(" ");
  log(`アクセシブル名: ${text.trim()}`);
} else {
  log("element.ariaLabelledByElements: ブラウザーが対応していません");
}
```

#### 結果

下記のログは、元の要素への参照、関連付けられた／返された要素、およびアクセシブル名を示しています。
なお、この例では、通り名の `<input>` に入力されたテキストは一切処理されません。

{{EmbedLiveSample("Get the accessible name","100%","150px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) 属性
- {{domxref("ElementInternals.ariaLabelledByElements")}}
- [要素の参照の反映](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#要素の参照の反映)（「属性の反映」ガイド）
