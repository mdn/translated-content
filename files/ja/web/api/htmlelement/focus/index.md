---
title: "HTMLElement: focus() メソッド"
slug: Web/API/HTMLElement/focus
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ APIRef("HTML DOM") }}

**`HTMLElement.focus()`** メソッドは、指定された要素にフォーカスを設定できる場合、フォーカスを設定します。フォーカスされた要素は、既定でキーボードや同様のイベントを受け取る要素です。

既定では、ブラウザーは要素をフォーカスした後、スクロールして表示します。また、フォーカスした要素を可視的に示すこともあります（通常は、要素の周りに「フォーカスリング」を表示します）。
既定では、スクロールを無効化し、要素に可視的な表示を強制するための引数オプションが提供されています。

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
      - : 論理値で、ブラウザーが文書をスクロールして、新しくフォーカスされた要素を表示するかどうかを示します。`preventScroll` の値が `false`（既定値）の場合、ブラウザーは要素をフォーカスした後、その要素をスクロールして表示します。`preventScroll` が `true` に設定されている場合、スクロールしません。
    - `focusVisible` {{optional_inline}} {{experimental_inline}}
      - : 論理値です。`true` に設定すると、要素にフォーカスが当たっていることを強制的に可視的に示すことができます。
        既定では、あるいはプロパティが `true` でない場合でも、ブラウザーがユーザーにとってのアクセシビリティを向上させると判断した場合は、可視表示を提供することがあります。

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
ほとんどのブラウザーは、フォーカスされたテキストフィールドに自動的に可視表示（「フォーカスリング」）を追加するので、このコードでは `focusVisible` を `true` に設定していないことに注意してください。

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
<button id="myButton">クリックしてください</button>
<button id="focusButton">クリックで
「ボタン」にフォーカスを設定</button>
<button id="focusButtonVisibleIndication">
  クリックで「Button」にフォーカスと focusVisible を設定
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

ブラウザーは通常、プログラムでフォーカスを設定する際にボタン要素に目に見えるフォーカスの表示をしないので、真ん中のボタンを選択した場合の効果は明らかではないかもしれません。
しかし、`focusVisible` オプションがブラウザーで対応していれば、正しいボタンが選択されたときに、左端のボタンにフォーカスが変わるのが見えるはずです。

{{ EmbedLiveSample('Focus_on_a_button') }}

### スクロールありとなしのフォーカス

この例では、オプション [`preventScroll`](#preventscroll) に `true` と `false`（既定値）を設定してフォーカスを設定した場合の効果を示しています。

#### HTML

HTML は、画面外にある 3 つ目のボタンのフォーカスを設定するために使用する、2 つのボタンを定義しています。

```html
<button id="focus_scroll">クリックでボタンにフォーカス</button>
<button id="focus_no_scroll">
  クリックでスクロールせずにボタンにフォーカス
</button>

<div id="container">
  <button id="myButton" style="margin-top: 500px;">ボタン</button>
</div>
```

#### JavaScript

このコードでは、最初のボタンと 2 つ目のボタンにクリックイベントハンドラーを設定し、最後のボタンにフォーカスを設定しています。
最初のハンドラーでは `preventScroll` オプションを指定していないので、フォーカスされた要素へのスクロールが有効になることに注意してください。

```js
document.getElementById("focus_scroll").addEventListener("click", () => {
  document.getElementById("myButton").focus(); // default: {preventScroll:false}
});

document.getElementById("focus_no_scroll").addEventListener("click", () => {
  document.getElementById("myButton").focus({ preventScroll: true });
});
```

#### 結果

最初のボタンを選択すると、フォーカスが設定され、画面の内側のボタンまでスクロールします。
2 つ目のボタンを選択すると、フォーカスは設定されますが、スクロールは無効です。

{{ EmbedLiveSample('Focus with and without scrolling') }}

## 仕様書

{{Specifications}}

## メモ

- `HTMLElement.focus()` をmousedown イベントハンドラーから呼び出した場合、 `HTMLElement` からフォーカスが外れないように `event.preventDefault()` を呼び出す必要があります。
- [`tabindex`](/ja/docs/Web/HTML/Global_attributes/tabindex) や{{Glossary("shadow tree", "シャドウ DOM", 1)}} など、これまで仕様が定まらないままだった様々な HTML 機能に関するフォーカスの挙動が、最近（2019 年 10 月に）更新されました。
  詳しくは [WHATWG blog](https://blog.whatwg.org/focusing-on-focus) をチェックしてみてください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement.blur")}} で要素からフォーカスを取り除きます。
- {{domxref("document.activeElement")}} で現在フォーカスされている要素を知ることができます。
