---
title: 属性の反映
slug: Web/API/Document_Object_Model/Reflected_attributes
l10n:
  sourceCommit: bdb97b3e01499ce52f02caa3f51d6dd245a48782
---

{{DefaultAPISidebar("DOM")}}

{{glossary("attribute", "属性")}}は、{{glossary("HTML")}}、{{glossary("XML")}}、{{glossary("SVG")}}、その他の{{glossary("element", "要素")}}を拡張し、その動作を変更したり、メタデータを提供したりします。

多くの属性は、対応する [DOM](/ja/docs/Web/API/Document_Object_Model) インターフェイスに反映されます。
これは、属性の値は、対応するインターフェイスのプロパティを通じて JavaScript で直接読み書きできるということであり、その逆も同様です。
反映されたプロパティは、 {{domxref("Element")}} インターフェイスの {{domxref("Element.getAttribute()","getAttribute()")}} および {{domxref("Element.setAttribute()","setAttribute()")}} メソッドを使用して属性値を取得および設定するよりも、より自然なプログラミング手法を提供します。

このガイドでは、反映される属性の概要と、それらの使用方法について説明します。

## 属性のゲッター/セッター

まず、属性が反映されているかどうかに関係なく使用できる、属性の取得および設定の既定の仕組みを見てみましょう。
属性を取得するには、{{domxref("Element")}} インターフェイスの {{domxref("Element.getAttribute()","getAttribute()")}} メソッドを呼び出し、属性名を指定します。
属性を設定するには、属性名と新しい値を指定して、{{domxref("Element.setAttribute()","setAttribute()")}} メソッドを呼び出します。

次の HTML を考えてみましょう。

```html
<input placeholder="Original placeholder" />
```

[`placeholder`](/ja/docs/Web/HTML/Reference/Attributes/placeholder) 属性を取得および設定するには、次のようにします。

```js
const input = document.querySelector("input");

// placeholder 属性を取得
let attr = input.getAttribute("placeholder");

// placeholder 属性を設定
input.setAttribute("placeholder", "Modified placeholder");
```

## 属性の反映

{{htmlelement("input")}} の場合、`placeholder` 属性は {{domxref("HTMLInputElement.placeholder")}} プロパティによって反映されます。
前の例と同じ HTML を指定したとします。

```html
<input placeholder="Original placeholder" />
```

同じ操作は、`placeholder` プロパティを使用するとより自然に実行できます。

```js
const input = document.querySelector("input");

// placeholder 属性を取得
let attr = input.placeholder;

// placeholder 属性を設定
input.placeholder = "Modified placeholder";
```

反映される属性とプロパティの名前は同じ `placeholder` であることに注意してください。
これは常に当てはまるわけではありません。プロパティは通常、{{glossary("Camel case","キャメルケース")}}の規則に従って名前が付けられます。
これは、プロパティ名に使用できない文字（ハイフンなど）を含む、複数の単語からなる属性名の場合に特に当てはまります。
例えば、[aria-checked](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-checked) 属性は、[`ariaChecked`](/ja/docs/Web/API/Element/ariaChecked) プロパティによって反映されます。

### 論理属性の反映

{{Glossary("Boolean/HTML", "論理属性")}}は、名前と値で宣言する必要がないという点で、他の属性とは少し異なります。
例えば、下記のチェックボックスの {{htmlelement("input")}} 要素は `checked` 属性を持っており、表示時にはチェックされます。

```html
<input type="checkbox" checked />
```

{{domxref("Element.getAttribute()")}} は、 input がチェックされている場合は `""` を、そうでない場合は `null` を返します。
対応する {{domxref("HTMLInputElement.checked")}} プロパティは、チェック状態に応じて `true` または `false` を返します。
それ以外の場合、論理値が反映される属性は、他の反映される属性と同じです。

### 列挙型属性の反映

HTML では、[列挙属性](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) は、あらかじめ定義された限定的なテキスト値のセットに対応する属性です。例えば、 HTML の [`dir`](/ja/docs/Web/HTML/Reference/Global_attributes/dir) グローバル属性には、`ltr`、`rtl`、`auto` の 3 つの有効な値があります。

```html
<p dir="rtl">Right to left</p>
```

HTML タグ名と同様に、HTML の列挙属性とその値は、大文字と小文字を区別しないため、`LTR`、`RTL`、および `AUTO` も動作します。

```html
<p dir="RTL">Right to left</p>
```

IDL に反映されたプロパティ {{domxref("HTMLElement.dir")}} は、仕様で指定された正規値（この例では小文字の値）を常に返します。値を設定すると、その値も正規形式にシリアル化されます。

```js
const pElement = document.querySelector("p");
console.log(pElement.dir); // "rtl"
pElement.dir = "RTL";
console.log(pElement.dir); // "rtl"
```

あるいは、 {{domxref("Element")}} インターフェイスの {{domxref("Element.getAttribute()","getAttribute()")}} メソッドを使用することができます。これは、変更を加えることなく HTML から属性値を取得します。

```js
const pElement = document.querySelector("p");
console.log(pElement.getAttribute("dir")); // "RTL"
```

## 要素の参照の反映

> [!NOTE]
> この節は、[要素の参照が含まれている反映された ARIA 属性](/ja/docs/Web/API/Element#instance_properties_reflected_from_aria_element_references)に適用されます。
> 要素の参照を反映する他の属性や将来の属性についても、同様の考慮事項が適用される可能性があります。

一部の属性は、要素の参照を値として受け取ります。要素の参照とは、要素`id`の値、または要素`id`の値を空白で区切った文字列です。
これらの `id` 値は、その属性に関連付けられている、またはその属性に必要な情報を含む他の要素を参照します。
これらの属性は、`id` 値と一致する {{domxref("HTMLElement")}} の派生オブジェクトインスタンスの配列として、対応するプロパティに反映されますが、いくつかの注意点があります。

例えば、[`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) 属性は、その内部テキストに要素のアクセシブル名を含む要素の `id` 値を列挙します。
以下の HTML では、 {{htmlelement("input")}} に対して、`id` 値が `label_1`、`label_2`、`label_3` である {{htmlelement("span")}} 要素でラベルを定義しています。

```html
<span id="label_1">（ラベル 1 テキスト）</span>
<span id="label_2">（ラベル 2 テキスト）</span>
<input aria-labelledby="label_1 label_2 label_3" />
```

この属性は、対応する `id` 値を持つ要素の配列を返す {{domxref("Element.ariaLabelledByElements")}} プロパティによって反映されます。
属性および対応するプロパティは、次のように返すことができます。

```js
const inputElement = document.querySelector("input");

console.log(inputElement.getAttribute("aria-labelledby"));
// "label_1 label_2 label_3"

console.log(inputElement.ariaLabelledByElements);
// [HTMLSpanElement, HTMLSpanElement]
```

上記のコードで最初に注意すべきことは、属性とプロパティに含まれている要素の数が異なることです。参照 `label_3` には対応する要素がないため、プロパティは属性を直接反映していません。
また、 `id` が[要素のスコープ外](#要素_id_の参照スコープ)にあるため、参照が一致しない場合もあります。
これは、参照される要素が要素と同じ DOM またはシャドウ DOM にない場合に現れます。ID は、宣言されたスコープ内でのみ有効だからです。

プロパティ配列の要素を反復処理して、この場合はその内部テキストからアクセシブル名を取得することができます（これは、属性を使用する場合よりも自然です。なぜなら、最初に要素の参照を取得してからそれを使用して要素を検索する必要がなく、現在のスコープで利用可能であることがわかっている要素のみを取り扱うだけで済むからです）。

```js
const inputElement = document.querySelector("input");
const accessibleName = inputElement.ariaLabelledByElements
  .map((e) => e.textContent.trim())
  .join(" ");
console.log(accessibleName);
// （ラベル 1 テキスト） （ラベル 2 テキスト）
```

### プロパティと属性の設定

通常の反映プロパティの場合、プロパティの更新は対応する属性に反映され、その逆も同様です。
しかし、要素の参照を反映するプロパティの場合はそうではありません。
代わりに、プロパティを設定すると属性がクリア（設定が解除）されるため、プロパティと属性は互いに反映されなくなります。
例えば、次のような HTML を指定した場合を考えてみましょう。

```html
<span id="label_1">（ラベル 1 テキスト）</span>
<span id="label_2">（ラベル 2 テキスト）</span>
<input aria-labelledby="label_1 label_2" />
```

`aria-labelledby` の初期値は `"label_1 label_2"` ですが、DOM API から設定すると、属性は `""` にリセットされます。

```js
const inputElement = document.querySelector("input");

let attributeValue = inputElement.getAttribute("aria-labelledby");
console.log(attributeValue);
// "label_1 label_2"

// 反映プロパティを使用して属性を設定
inputElement.ariaLabelledByElements = document.querySelectorAll("span");

attributeValue = inputElement.getAttribute("aria-labelledby");
console.log(attributeValue);
// ""
```

これには意味が あります。そうしないと、`id` 参照を持たない要素をプロパティに割り当ててしまい、その結果、その要素を属性で表せなくなってしまうからです。

属性の値を 設定すると、属性とプロパティの関係が復元されます。
上記の例を続けます。

```js
inputElement.setAttribute("aria-labelledby", "input1");

attributeValue = inputElement.getAttribute("aria-labelledby");
console.log(attributeValue);
// "label_1"

// 反映プロパティを使用して属性を設定
console.log(inputElement.ariaLabelledByElements);
// [HTMLSpanElement] - for `label_1`
```

プロパティによって返される配列は静的であるため、返された配列を変更して対応する属性を変更することはできません。
プロパティに配列が代入されると、その配列はコピーされるため、属性に変更を加えても、前回返されたプロパティの配列には反映されません。

### 要素 id の参照スコープ

属性要素の参照は、同じ DOM または[シャドウ DOM](/ja/docs/Web/API/Web_components#シャドウ_dom) にある他の要素のみを参照できます。これは、要素 ID は宣言されたスコープ内でのみ有効であるためです。

これは次のコードで確認できます。
{{htmlelement("input")}} 要素の [`aria-labelledby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) 属性は、ID `label_1`、`label_2`、`label_3` に対応する要素を参照しています。
ただし、この場合、`label_3` は、 {{htmlelement("input")}} 要素と同じスコープで定義されていないため、有効な ID ではありません。
その結果、ラベルは ID が `label_1` および `label_2` の要素からのみ決まります。

```html
<div id="in_dom">
  <span id="label_3">（ラベル 3 テキスト）</span>
</div>
<div id="host">
  <template shadowrootmode="open">
    <span id="label_1">（ラベル 1 テキスト）</span>
    <input aria-labelledby="label_1 label_2 label_3" />
    <span id="label_2">（ラベル 2 テキスト）</span>
  </template>
</div>
```

### 要素の反映の参照スコープ

[ARIA 要素の参照を反映するインスタンスプロパティ](/ja/docs/Web/API/Element#instance_properties_reflected_from_aria_element_references)、例えば `aria-labelledby` を羽根井する {{domxref("Element.ariaLabelledByElements")}} の場合、スコープのルールは少し異なります。
対象要素がスコープ内にあるためには、参照する要素と同じ DOM または親 DOM にある必要があります。
他の DOM 内の要素は、参照する DOM の子または同等のシャドウ DOM を含め、この範囲外です。

下記の例は、親 DOM (`label_3`) 内の要素を、同じシャドウルートで宣言された id である `label_1` および `label_2` を持つ要素とともに、対象として設定する場合を示しています。
これは、すべての対象要素が参照要素のスコープ内にあるため、うまく動作します。

```html
<div id="in_dom">
  <span id="label_3">（ラベル 3 テキスト）</span>
</div>
<div id="host">
  <template shadowrootmode="open">
    <span id="label_1">（ラベル 1 テキスト）</span>
    <input id="input" />
    <span id="label_2">（ラベル 2 テキスト）</span>
  </template>
</div>
```

```js
const host = document.getElementById("host");
const input = host.shadowRoot.getElementById("input");
input.ariaLabelledByElements = [
  host.shadowRoot.getElementById("label_1"),
  host.shadowRoot.getElementById("label_2"),
  document.getElementById("label_3"),
];
```

シャドウ DOM 内の要素を参照する DOM 内の要素に対応するコードは、入れ子になったシャドウ DOM 内の対象要素はスコープ内にないため、動作しません。

```html
<div id="in_dom">
  <span id="label_1">（ラベル 1 テキスト）</span>
  <input id="input" />
  <span id="label_2">（ラベル 2 テキスト）</span>
</div>
<div id="host">
  <template shadowrootmode="open">
    <span id="label_3">（ラベル 3 テキスト）</span>
  </template>
</div>
```

```js
const host = document.getElementById("host");
const input = document.getElementById("input");
input.ariaLabelledByElements = [
  host.shadowRoot.getElementById("label_3"),
  document.getElementById("label_1"),
  document.getElementById("label_2"),
];
```

要素は、最初は「スコープ内」にあり、その後、入れ子になったシャドウルートにスコープ外に移動される場合があることに注意してください。
この場合、参照されている要素は属性には引き続き掲載されますが、プロパティには返されません。
ただし、要素が再びスコープ内に移動された場合、その要素は反映されたプロパティに再び存在することになります。

### 属性/プロパティの関係のまとめ

要素参照を含む属性と、それに対応するプロパティとの関係は次のとおりです。

- 属性の要素 `id` の参照は、その要素と同じ DOM またはシャドウ DOM で宣言された対象要素に対してのみ[スコープ内](#要素_id_の参照スコープ)になります。
- ARIA 要素の参照を反映するプロパティは、同じスコープまたは親スコープ内の要素を対象とすることができます。入れ子になったスコープ内の要素にはアクセスできません。
- プロパティを設定すると、属性はクリアされ、プロパティと属性は互いに参照し合うことができなくなりました。
  属性が読み込まれる場合、対応する {{domxref("Element.getAttribute()")}} の値は `""` です。
- {{domxref("Element.setAttribute()")}} に対応する属性を設定すると、プロパティも設定され、「反映関係」が復元されます。
- その後スコープ外に移動される値参照で属性を設定すると、プロパティ配列から対応する要素が削除されます。
  ただし、属性には参照が引き続き含まれているため、要素がスコープ内に移動されると、プロパティには再びその要素が含まれます（つまり、関係が復元されます）。
