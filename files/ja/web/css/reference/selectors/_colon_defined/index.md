---
title: :defined
slug: Web/CSS/Reference/Selectors/:defined
original_slug: Web/CSS/:defined
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

**`:defined`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、定義されているすべての要素を表します。これにはブラウザーに組み込まれたすべての標準要素と、 ({{domxref("CustomElementRegistry.define()")}} メソッドを使用して) 定義に成功したカスタム要素が含まれます。

```css
/* 定義されたすべての要素を選択 */
:defined {
  font-style: italic;
}

/* 特定の custom 要素のすべてのインスタンスを選択 */
custom-element:defined {
  display: block;
}
```

## 構文

```css
:defined {
  /* ... */
}
```

## 例

### 定義されるまで要素を非表示にする

このデモでは、 `<custom-element>` という名前付きの基本的なカスタム要素を定義し、 `:not(:defined)` および `:defined` セレクターを使用して、要素が定義される前と定義された後のスタイルを指定します。これは、ページへの読み込みに時間がかかる複雑なカスタム要素がある場合に有益です。定義が完了するまで要素のインスタンスを非表示にして、ページ上にスタイルが設定されていない見苦しい要素が点滅してしまうことを防ぐことができます。

#### HTML

次の HTML コードは、独自の要素を使用していますが、その要素はまだ定義されていません。また、クリックすると独自の要素を定義する {{htmlelement("button")}} も含めています。これにより、定義の前後の状態を確認することができます。

```html-nolint
<custom-element>
  <p>
    読み込まれたコンテンツ: Lorem ipsum tel sed tellus eiusmod tellus.
    Aenean. Semper dolor sit nisi. Elit porttitor nisi sit vivamus.
  </p>
</custom-element>

<button id="btn"><code>&lt;custom-element&gt;</code> を定義</button>
```

#### CSS

```css hidden
custom-element {
  display: block;
  border: 5px dashed grey;
  border-radius: 1rem;
  height: 100px;
  width: 400px;
  padding: 1rem;
  position: relative;
  user-select: none;
}

code {
  background: #ccc;
}

#btn {
  margin-top: 1rem;
  cursor: pointer;
}
```

以下の CSS では、 `custom-element:not(:defined)` セレクターを使用して、定義されていない要素を選択し、これらが定義されていない間は灰色に、定義された後は `custom-element:defined` セレクターを使用して、黒色に着色しています。

```css
custom-element:not(:defined) {
  border-color: grey;
  color: grey;
}

custom-element:defined {
  background-color: wheat;
  border-color: black;
  color: black;
}

/* 読み込み中のメッセージを表示 */
custom-element:not(:defined)::before {
  content: "読み込み中...";
  position: absolute;
  inset: 0 0 0 0;
  align-content: center;
  text-align: center;
  font-size: 2rem;
  background-color: white;
  border-radius: 1rem;
}

/* 読み込み中のメッセージを除去 */
custom-element:defined::before {
  content: "";
}
```

また、 [`::before`](/ja/docs/Web/CSS/Reference/Selectors/::before) 擬似要素を使用して、要素が定義されるまで "読み込み中..." というオーバーレイメッセージを表示しています。定義後、 [`content`](/ja/docs/Web/CSS/Reference/Properties/content) を空文字列に設定することで、このメッセージは除去されます。

独自の要素を定義するために、次の JavaScript を使用しています。定義前後の独自の要素の状態を確認できるように、ボタンがクリックされたときに {{domxref("CustomElementRegistry.define", "define()")}} メソッドを実行しています。

```js
const btn = document.querySelector("#btn");

btn.addEventListener("click", () => {
  customElements.define("custom-element", class extends HTMLElement {});
  btn.remove();
});
```

#### 結果

{{EmbedLiveSample("Hiding elements until they are defined", "100%", "230")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [ウェブコンポーネント](/ja/docs/Web/API/Web_components)
