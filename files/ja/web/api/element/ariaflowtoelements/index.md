---
title: "Element: ariaFlowToElements プロパティ"
short-title: ariaFlowToElements
slug: Web/API/Element/ariaFlowToElements
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

**`ariaFlowToElements`** は {{domxref("Element")}} インターフェイスのプロパティであり、コンテンツの読む代替順序のある要素（単数または複数）を配列で保持します。これにより、ユーザーの判断で一般的な既定の読む順序を上書きできます。
要素が1つだけ提供されている場合、この要素は読み順における次の要素となります。
複数の要素が提供されている場合、それぞれの要素はユーザーに選択を提示すべき可能な経路を表します。

[`aria-flowto`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) のトピックには、この属性とプロパティの使用方法に関する詳しい情報が含まれています。

## 値

{{domxref("HTMLElement")}} のサブクラスの配列です。

読み取り時には、返される配列は静的で読み取り専用です。
書き込み時には、代入された配列はコピーされます。その後配列に変更を加えても、プロパティの値には影響しません。

## 解説

このプロパティは、読む代替順序を設定するために [`aria-flowto`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) 属性を使用することの柔軟な代替手段です。
`aria-flowto` とは異なり、このプロパティに割り当てる要素は [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性を持つ必要がありません。

このプロパティは、定義されている場合に要素の [`aria-flowto`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) 属性を反映しますが、有効なスコープ内要素と一致する参照先の `id` 値に対してのみ反映されます。
このプロパティを設定すると、対応する属性がクリアされます。
反映される要素への参照とスコープに関するより詳細な情報については、「属性の反映」ガイドの[要素の参照の反映](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#要素の参照の反映)を参照してください。

## 例

### flow-to 要素を取得

この例は、3つの要素`section1`、`section2`、`section3`を順にたどる通常フローと、`section1`から`section3`へ飛び、再び戻る代替順序を示しています。
アクセシビリティツールを実行していない限り、この例は説明用であることに注意してください：実際にはこの代替順序をたどりません。

#### HTML

この HTML には、セクションを定義する 3 つの {{htmlelement("div")}} 要素があり、 `"section"` クラスが付いています。 `id` の値はそれぞれ `section1`、`section2`、`section3` です。
それぞれのセクションには順序によって定義される通常フローがあり、 `section1` で始まり `section3` で終わります。
代替フローは、 `aria-flowto` 属性を使用してセクション 1 および 3 で定義しています。

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 200px;
  overflow: scroll;
  padding: 0.5rem;
  margin: 5px;
  border: 1px solid black;
}
```

```html-nolint
<div id="section1" class="section" aria-flowto="section3">
  <h2>セクション 1</h2>
  <p>通常フローの最初のセクション。セクション 3 は代替フローです。</p>
  <a href="#section2">セクション 2 へジャンプ（通常フロー）</a>
</div>

<div id="section2" class="section">
  <h2>セクション 2</h2>
  <p>通常フローの 2 番目のセクション。</p>
  <a href="#section3">セクション 3 へジャンプ（通常フロー）</a>
</div>

<div id="section3" class="section" aria-flowto="section1">
  <h2>セクション 3</h2>
  <p>
    通常フローの 3 番目のセクション。セクション 1 は代替フローです。
  </p>
</div>
```

#### JavaScript

コードはまず `ariaFlowToElements` に対応しているかどうかを調べ、対応している場合はその値をログに記録します。
その後、セクションを順に反復処理し、セクションの `id`、`aria-flowto` 属性の値、および `ariaFlowToElements` プロパティの値をログに記録します。

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

```js
// ariaFlowToElements の機能検出
if ("ariaFlowToElements" in Element.prototype) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((sectionDivElement) => {
    log(`${sectionDivElement.id}`);
    log(` aria-flowto: ${sectionDivElement.getAttribute("aria-flowto")}`);
    log(" ariaFlowToElements:");
    // 配列のそれぞれの要素の ID を取得
    sectionDivElement.ariaFlowToElements?.forEach((elem) => {
      log(`  id: ${elem.id}`);
    });
  });
} else {
  log("element.ariaFlowToElements: ブラウザーが対応していません");
}
```

#### 結果

下記のログ出力するものは、それぞれのセクション（`id` で識別）と、アクセシビリティツールによって選択される可能性のある対応するフロー先要素IDを表示させています。
ここで注意すべき点は、属性とプロパティが同一のフロー先要素を識別していることです。

{{EmbedLiveSample("Get the flow-to element","100%","570px")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`aria-flowto`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) 属性
- {{domxref("ElementInternals.ariaFlowToElements")}}
- [要素の参照の反映](/ja/docs/Web/API/Document_Object_Model/Reflected_attributes#要素の参照の反映)（「属性の反映」ガイド）
