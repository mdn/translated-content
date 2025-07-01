---
title: "HTMLElement: autocapitalize プロパティ"
short-title: autocapitalize
slug: Web/API/HTMLElement/autocapitalize
l10n:
  sourceCommit: f58b59a00199bb177beefa245f104ecbd86dae5c
---

{{APIRef("HTML DOM")}}

**`autocapitalize`** は {{domxref("HTMLElement")}} インターフェイスのプロパティで、ユーザー入力に対する要素の大文字化動作を表します。すべての HTML 要素で利用可能ですが、すべての要素に影響するわけでははなく、次の要素でに影響します。

- {{htmlelement("input")}} および {{htmlelement("textarea")}} 要素。
- [`contenteditable`](/ja/docs/Web/HTML/Reference/Global_attributes/contenteditable) が設定された任意の要素。

`autocapitalize` は物理的なキーボードで入力するときの動作には影響しません。モバイル端末の仮想キーボードや音声入力など、他の入力メカニズムの動作に影響します。例えば、各文の最初の文字を自動的に大文字にすることで、データ入力を素早く簡単にすることができます。

これは、HTML の [`autocapitalize`](/ja/docs/Web/HTML/Reference/Global_attributes/autocapitalize) グローバル属性の値を反映します。

## 値

文字列で、この要素のユーザー入力に対する大文字小文字の動作を表します。有効な値は以下の通りです：

- `none` または `off`
  - : 自動大文字化を適用せず、すべての文字を既定で小文字にします。
- `sentences` または `on`
  - : 各文の先頭の文字は既定で大文字にし、それ以外の文字は小文字にします。
- `words`
  - : 各単語の最初の文字を既定で大文字にし、それ以外の文字を小文字にします。
- `characters`
  - : すべての文字は既定で大文字になります。

## 例

次の例は、スクリプトを使ってユーザー入力の大文字小文字を制御する方法を示します。

```html
<div>現在の大文字化の動作は <span id="ac-label"></span> です。</div>
<div id="ac-element" contenteditable="true" autocapitalize="default">
  input here
</div>
<select id="ac-controller" type="checkbox" checked>
  <option value="default">既定値</option>
  <option value="none">なし</option>
  <option value="sentences">文</option>
  <option value="words">単語</option>
  <option value="characters">文字</option></select
>大文字化の動作を選択してください。
```

```js
const label = document.getElementById("ac-label");
const element = document.getElementById("ac-element");
const controller = document.getElementById("ac-controller");

controller.addEventListener("input", (e) => {
  const behavior = e.target.value;
  label.textContent = behavior;
  element.autocapitalize = behavior;
});
```

{{EmbedLiveSample('Examples', 600, 200)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- HTML の [`autocapitalize`](/ja/docs/Web/HTML/Reference/Global_attributes/autocapitalize) グローバル属性
