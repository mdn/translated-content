---
title: HTMLElement.focus()
slug: Web/API/HTMLElement/focus
tags:
  - API
  - Focus
  - HTML DOM
  - HTMLElement
  - メソッド
  - リファレンス
  - スクロール
  - ビュー
  - activate
browser-compat: api.HTMLElement.focus
translation_of: Web/API/HTMLElement/focus
original_slug: Web/API/HTMLElement/focus
---
{{ APIRef("HTML DOM") }}

**`HTMLElement.focus()`** メソッドは、指定された要素にフォーカスを設定できる場合、フォーカスを設定します。 フォーカスされた要素は、既定でキーボードや同様のイベントを受け取る要素です。

## 構文

```js
focus()
focus(options)
```

### 引数

- `options` {{optional_inline}}

  - : フォーカスプロセスの側面を制御するオプションを提供するオプションのオブジェクト。
    このオブジェクトには、次のプロパティが含まれる場合があります。

 - `preventScroll` {{optional_inline}}
   - : 論理値で、ブラウザーが文書をスクロールして、新しくフォーカスされた要素を表示するかどうかを示します。 `preventScroll` の値が `false`（既定値）の場合、ブラウザーは要素をフォーカスした後、その要素をスクロールして表示します。 `preventScroll` が `true` に設定されている場合、スクロールしません。

## 例

### テキストフィールドにフォーカスする

#### JavaScript

```js
focusMethod = function getFocus() {
  document.getElementById("myTextField").focus();
}
```

#### HTML

```html
<input type="text" id="myTextField" value="テキストフィールド">
<p></p>
<button type="button" onclick="focusMethod()">クリックしてテキストフィールドにフォーカスしてください。</button>
```

#### 結果

{{ EmbedLiveSample('Focus_on_a_text_field') }}

### ボタンにフォーカスする

#### JavaScript

```js
focusMethod = function getFocus() {
  document.getElementById("myButton").focus();
}
```

#### HTML

```html
<button type="button" id="myButton">クリックしてください</button>
<p></p>
<button type="button" onclick="focusMethod()">クリックするとボタンにフォーカスします。</button>
```

#### 結果

{{ EmbedLiveSample('Focus_on_a_button') }}

### focusOption でフォーカスする

#### JavaScript

```js
focusScrollMethod = function getFocus() {
  document.getElementById("myButton").focus({preventScroll:false});
}
focusNoScrollMethod = function getFocusWithoutScrolling() {
  document.getElementById("myButton").focus({preventScroll:true});
}
```

#### HTML

```html
<button type="button" onclick="focusScrollMethod()">クリックするとボタンにフォーカスします。</button>
<button type="button" onclick="focusNoScrollMethod()">クリックするとスクロールせずにボタンにフォーカスします。</button>

<div id="container" style="height: 1000px; width: 1000px;">
<button type="button" id="myButton" style="margin-top: 500px;">クリックしてください</button>
</div>
```

#### 結果

{{ EmbedLiveSample('Focus_with_focusOption') }}

## 仕様書

{{Specifications}}

## メモ

-  `HTMLElement.focus()` をmousedown イベントハンドラーから呼び出した場合、 `HTMLElement` からフォーカスが外れないように `event.preventDefault()` を呼び出す必要があります。
- {{HTMLAttrxRef("tabindex")}} や{{Glossary("shadow tree", "シャドウ DOM", 1)}} など、これまで仕様が定まらないままだった様々な HTML 機能に関するフォーカスの挙動が、最近（2019 年 10 月に）更新されました。詳しくは [WHATWG blog](https://blog.whatwg.org/focusing-on-focus) をチェックしてみてください。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLElement.blur")}} で要素からフォーカスを取り除きます。
- {{domxref("document.activeElement")}} で現在フォーカスされている要素を知ることができます。
- {{domxref("Element/focusin_event", "focusin")}} イベント: 要素がフォーカスを得ようとしているときに発行されます。
- {{domxref("Element/focusout_event", "focusout")}} イベント: 要素がフォーカスを失おうとしているときに発行されます。
