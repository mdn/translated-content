---
title: "HTMLElement: focus() メソッド"
short-title: focus()
slug: Web/API/HTMLElement/focus
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.focus()`** メソッドは、指定された要素にフォーカスを設定できる場合、フォーカスを設定します。フォーカスされた要素は、デフォルトでキーボードや同様のイベントを受け取る要素です。

デフォルトでは、ブラウザーは要素にフォーカスした後、その要素が見えるようにスクロールします。また、フォーカスされた要素を視覚的に示すこともあります（通常は、要素の周りに「フォーカスリング」を表示します）。
デフォルトのスクロール動作を無効にしたり、要素のフォーカス状態を視覚的に示すよう強制したりするオプションもあります。

## 構文

```js-nolint
focus()
focus(options)
```

### 引数

- `options` {{optional_inline}}
  - : フォーカス処理の制御の側面のためのオプションのオブジェクト。
    このオブジェクトには、次のプロパティが含まれる場合があります。
    - `preventScroll` {{optional_inline}}
      - : 論理値で、ブラウザーが文書をスクロールして、新しくフォーカスされた要素を表示するかどうかを示します。`preventScroll` の値が `false`（デフォルト）の場合、ブラウザーは要素にフォーカスした後、その要素が見えるようにスクロールします。`preventScroll` が `true` に設定されている場合、スクロールしません。
    - `focusVisible` {{optional_inline}} {{experimental_inline}}
      - : 論理値です。`true` に設定すると、要素にフォーカスが当たっていることを視覚的に示すよう強制でき、`false` に設定すると、その表示を抑止できます。
        このプロパティが指定されていない場合は、ブラウザーがユーザーのアクセシビリティ向上につながると判断したときに、視覚的な表示を行うことがあります。

### 返値

なし ({{jsxref("undefined")}})。

## 例

### テキストフィールドにフォーカス

この例は、ボタンを使用してテキストフィールドにフォーカスを設定します。

#### HTML

```html
<input id="myTextField" value="テキストフィールド" />
<button id="focusButton">クリックでテキストフィールドにフォーカスを設定</button>
```

#### JavaScript

次のコードは、ボタンが押されたときにテキストフィールドにフォーカスを設定するイベントハンドラーを追加しています。
ほとんどのブラウザーは、フォーカスされたテキストフィールドに自動的に視覚的な表示（「フォーカスリング」）を追加するので、このコードでは `focusVisible` を `true` に設定していないことに注意してください。

```js
document.getElementById("focusButton").addEventListener("click", () => {
  document.getElementById("myTextField").focus();
});
```

#### 結果

ボタンを選択すると、テキストフィールドにフォーカスを設定します。

{{ EmbedLiveSample('Focus_on_a_text_field') }}

### ボタンにフォーカス

#### HTML

まず、3 つのボタンを定義します。
中と右のボタンは、どちらも一番左のボタンにフォーカスを設定します。
一番右のボタンは `focusVisible` を指定します。

```html
<button id="myButton">ボタン</button>
<button id="focusButton">クリックで「ボタン」にフォーカスを設定</button>
<button id="focusButtonVisibleIndication">
  クリックで「ボタン」にフォーカスと focusVisible を設定
</button>
```

#### JavaScript

下記コードでは、中ボタンと右ボタンのクリックイベントのハンドラーを設定しています。

```js
document.getElementById("focusButton").addEventListener("click", () => {
  document.getElementById("myButton").focus();
});

document
  .getElementById("focusButtonVisibleIndication")
  .addEventListener("click", () => {
    document.getElementById("myButton").focus({ focusVisible: true });
  });
```

#### 結果

一番左のボタンにフォーカスを設定するには、中央のボタンか一番右のボタンのいずれかを選択します。

ブラウザーは通常、プログラムでフォーカスを設定する際にボタン要素に視覚的なフォーカス表示をしないので、真ん中のボタンを選択した場合の効果は明らかではないかもしれません。
しかし、ブラウザーが `focusVisible` オプションに対応していれば、一番右のボタンを選択したときに、一番左のボタンにフォーカスが移るのが見えるはずです。

{{ EmbedLiveSample('Focus_on_a_button') }}

### スクロールありとなしのフォーカス

この例では、オプション [`preventScroll`](#preventscroll) に `true` と `false`（デフォルト）を設定してフォーカスを設定した場合の効果を示しています。

#### HTML

HTML は、画面外にある 3 つ目のボタンのフォーカスを設定するために使用する、2 つのボタンを定義しています。

```html
<button id="focus_scroll">クリックでボタンにフォーカス</button>
<button id="focus_no_scroll">
  クリックでスクロールせずにボタンにフォーカス
</button>

<div id="container">
  <button id="myButton">ボタン</button>
</div>
```

```css hidden
#myButton {
  margin-top: 500px; /* ボタンを画面外に移動 */
}
```

#### JavaScript

このコードでは、最初のボタンと 2 つ目のボタンにクリックイベントハンドラーを設定し、最後のボタンにフォーカスを設定しています。
最初のハンドラーでは `preventScroll` オプションを指定していないので、フォーカスされた要素へのスクロールが有効になることに注意してください。

```js
document.getElementById("focus_scroll").addEventListener("click", () => {
  document.getElementById("myButton").focus(); // デフォルト: {preventScroll:false}
});

document.getElementById("focus_no_scroll").addEventListener("click", () => {
  document.getElementById("myButton").focus({ preventScroll: true });
});
```

#### 結果

最初のボタンを選択すると、フォーカスが設定され、画面外のボタンまでスクロールします。
2 つ目のボタンを選択すると、フォーカスは設定されますが、スクロールは無効です。

{{ EmbedLiveSample('Focus with and without scrolling') }}

## 仕様書

{{Specifications}}

## メモ

- `HTMLElement.focus()` をmousedown イベントハンドラーから呼び出した場合、 `HTMLElement` からフォーカスが外れないように `event.preventDefault()` を呼び出す必要があります。
- [`tabindex`](/ja/docs/Web/HTML/Reference/Global_attributes/tabindex) や{{Glossary("shadow tree", "シャドウ DOM", 1)}} など、これまで仕様が定まらないままだった様々な HTML 機能に関するフォーカスの挙動が、最近（2019 年 10 月に）更新されました。
  詳しくは [WHATWG blog](https://blog.whatwg.org/focusing-on-focus)<sup>(英語)</sup> をチェックしてみてください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement.blur")}} で要素からフォーカスを取り除きます。
- {{domxref("document.activeElement")}} で現在フォーカスされている要素を知ることができます。
