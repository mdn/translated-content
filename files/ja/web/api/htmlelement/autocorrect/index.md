---
title: "HTMLElement: autocorrect プロパティ"
short-title: autocorrect
slug: Web/API/HTMLElement/autocorrect
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

**`autocorrect`** は {{domxref("HTMLElement")}} インターフェイスのプロパティで、編集可能なテキストの綴りや句読点の誤りを自動修正するかどうかを制御します。

どの単語が置き換えられるかなど、具体的な自動修正の動作は、ユーザーエージェントと端末が提供するサービスによって異なります。
例えば、macOS では、ユーザーエージェントは[登録済みの置き換えテキストや句読点](https://support.apple.com/ja-jp/guide/mac-help/mh35735/mac)を使用することがあります。
他の端末やブラウザーでは、異なる手法が使用される場合があります。

このプロパティは、HTML のグローバル属性である [`autocorrect`](/ja/docs/Web/HTML/Reference/Global_attributes/autocorrect) の値を反映します。

## 値

この要素で自動修正が有効であれば `true`、そうでなければ `false` です。

## 例

### 自動修正を有効化または無効化

この例では、自動修正を有効または無効にする方法を示しています。

#### HTML

HTML マークアップは、トグルボタンと {{htmlelement("input")}} 要素の [`type="search"`](/ja/docs/Web/HTML/Reference/Elements/input/search) 型を定義します。
自動修正に対応している場合は、デフォルトで有効になることに注意してください。

```html
<button id="toggleAutocorrect">不明</button>
<input type="search" id="searchinput" />
```

```html hidden
<pre id="log"></pre>
```

```css hidden
#log {
  height: 100px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
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

コードの最初のチェックでは、 `autocorrect` が `HTMLElement` プロトタイプに存在するかどうかを確認することで、対応しているかどうかをチェックします。
存在する場合は、クリックハンドラーを追加し、値の切り替えが可能になります。
存在しない場合は、 UI の対話要素が非表示になり、 `autocorrect` が対応していないことがログ出力されます。

```js
const toggleButton = document.querySelector("button");
const searchInput = document.querySelector("#searchinput");

function setButtonText() {
  toggleButton.textContent = searchInput.autocorrect ? "有効" : "無効";
  log(`自動修正: ${searchInput.autocorrect}`);
}

if (`autocorrect` in HTMLElement.prototype) {
  setButtonText();

  toggleButton.addEventListener("click", (e) => {
    searchInput.autocorrect = !searchInput.autocorrect;
    setButtonText();
  });
} else {
  toggleButton.hidden = true;
  searchInput.hidden = true;
  log("自動修正には対応していません");
}
```

#### 結果

<!-- cSpell:ignore Carot -->

ボタンをクリックして、自動修正の有効・無効を切り替えます。
テキストボックスに "Carot" のような誤字を入力します。
自動修正が有効で、実装が "carrot" を適切な置き換え語として扱う場合、テキストは自動的に修正されるはずです。

{{EmbedLiveSample("Enable and disable autocorrection", "100%", "200")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`autocapitalize`](/ja/docs/Web/HTML/Reference/Global_attributes/autocapitalize) HTML グローバル属性
