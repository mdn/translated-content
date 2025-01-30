---
title: autocorrect
slug: Web/HTML/Global_attributes/autocorrect
l10n:
  sourceCommit: 6b278eb98d94ec8d85f03f77aef7c5d08edcd88f
---

{{HTMLSidebar("Global_attributes")}}{{SeeCompatTable}}

**`autocorrect`** は[グローバル属性](/ja/docs/Web/HTML/Global_attributes)で、[列挙型](/ja/docs/Glossary/Enumerated)属性であり、編集可能なテキストの綴りや句読点の誤りを自動修正するかどうかを制御します。

どの単語が自動修正されるかを含め、特定の自動修正の動作はユーザーエージェントと基盤となる端末で指定されたサービスに依存します。
例えば、 macOS ではユーザーエージェントが[登録済みの置き換えテキストや句読点](https://support.apple.com/ja-jp/guide/mac-help/mh35735/mac)に頼っている場合があります。
他にも、端末やブラウザーによって、使用されているさまざまな手法があります。

自動修正は編集可能なテキスト要素に関連しています。

- {{htmlelement("input")}} 要素、ただし [`password`](/ja/docs/Web/HTML/Element/input/password)、[`email`](/ja/docs/Web/HTML/Element/input/email)、[`url`](/ja/docs/Web/HTML/Element/input/url) は自動修正に対応していません。
- {{htmlelement("textarea")}} 要素。
- 任意の要素に [`contenteditable`](/ja/docs/Web/HTML/Global_attributes/contenteditable) 属性が設定されているもの。

編集可能な要素には既定では自動修正機能が有効になっていますが、 {{htmlelement("form")}} 要素内では、既定値がフォームから継承されることがあります。
属性を明示的に設定するには、既定値を上書きします。

## 値

取りうる値は次の通りです。

- `on` または `""` （空文字列）

  - : 綴りや句読点の誤りを自動修正する機能を有効にします。

- `off`

  - : 編集可能なテキストの自動修正を無効にします。

{{htmlelement("input")}} 要素型のうち、自動修正に対応していないものは、常に `off` の状態になります。[`password`](/ja/docs/Web/HTML/Element/input/password)、[`email`](/ja/docs/Web/HTML/Element/input/email)、[`url`](/ja/docs/Web/HTML/Element/input/url) です。

編集可能なその他の要素については、上記以外の値を設定しても、常に `on` として扱われます。
`<form>` 内に含まれていない要素の既定値は `on` です。

`<form>` に含まれている場合、そのフォームに `autocorrect` の既定値が設定されている場合は、{{htmlelement("button")}}、{{htmlelement("fieldset")}}、{{htmlelement("input")}}、{{htmlelement("output")}}、{{htmlelement("select")}}、{{htmlelement("textarea")}} の各要素はその値を継承します。

## 例

### 基本的な例

この例は、基本的な `autocorrect` 属性の使用方法を示しています。

#### HTML

`autocorrect` 属性に異なる値を持つ 2 つの `<input>` 要素を記載しています。

```html
<label for="vegetable">野菜: </label>
<input id="vegetable" name="vegetable" type="text" autocorrect="on" />

<label for="fruit">果物: </label>
<input id="fruit" name="fruit" type="text" autocorrect="off" />
```

#### 結果

{{EmbedLiveSample("Basic example", "100%", "75")}}

上記にある果物と野菜のテキスト入力項目に不正なテキストを入力してください。
お使いのブラウザーが自動修正に対応しており、端末で適切な修正が指定されている場合、野菜名の入力でタイプミスを自動修正できます。
果物の名前の項目では、タイプミスを修正しません。

### 自動修正の有効化と無効化

この例では、 `autocorrect` 属性を使用して自動修正を無効または有効にする方法を示しています。

#### HTML

HTML マークアップは、{{htmlelement("button")}}、「名前」の {{htmlelement("input")}} 要素（[`type="text"`](/ja/docs/Web/HTML/Element/input/text)）、「経歴」の {{htmlelement("textarea")}} 要素、および 2 つの {{htmlelement("label")}} 要素を定義しています。

"username" の要素には `autocorrect="off"` が設定されています。名前の自動修正は煩わしいからです。
bio には `autocorrect` の値が指定されていません。つまり、有効になっているということです（`off` 以外の任意の要素を設定することもできます）。

```html
<button id="reset">リセット</button>
<label for="username">名前: </label>
<input id="username" name="username" type="text" autocorrect="off" />
<label for="bio">経歴: </label>
<textarea id="bio" name="bio"></textarea>
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 75px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}

button,
input,
textarea {
  display: block;
}
```

```js hidden
const logElement = document.querySelector("#log");
function log(text) {
  logElement.innerText = `${logElement.innerText}${text}\n`;
  logElement.scrollTop = logElement.scrollHeight;
}
```

#### JavaScript

このコードは、プロトタイプに `autocorrect` が存在するかどうかをチェックすることで、それが対応しているかどうかを確認します。
存在しない場合は、その事実が記録されます。
存在する場合は、各テキスト入力要素の `autocorrect` プロパティの値が記録されます。

ボタンにクリックハンドラーを追加し、入力テキストとログ出力をリセットできるようにします。

```js
const resetButton = document.querySelector("#reset");
const userNameElement = document.querySelector("#username");
const bioElement = document.querySelector("#bio");

if (!("autocorrect" in HTMLElement.prototype)) {
  log("自動修正に対応していません");
} else {
  log(`userNameElement.autocorrect: ${userNameElement.autocorrect}`);
  log(`bioElement.autocorrect: ${bioElement.autocorrect}`);
}

resetButton.addEventListener("click", (e) => {
  userNameElement.value = "";
  bioElement.value = "";
});
```

#### 結果

自動修正機能がブラウザーに対応している場合、「経歴」と「名前」の入力欄の下記にあるログ出力領域に、「経歴」の入力欄には有効であるが、「名前」の入力欄には有効ではないことを示すメッセージが表示されます。

{{EmbedLiveSample("Enabling and disabling autocorrection", "100%", "250")}}

名前と経歴のテキスト入力項目に不正なテキストを入力します。
端末に指定された単語の代替が存在する場合、この単語が「経歴」入力項目（のみ）のテキストの自動修正に使用されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
