---
title: "HTMLOptionElement: Option() コンストラクター"
short-title: Option()
slug: Web/API/HTMLOptionElement/Option
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`Option()`** コンストラクターは、新しい {{domxref("HTMLOptionElement")}} を生成します。

## 構文

```js-nolint
new Option()
new Option(text)
new Option(text, value)
new Option(text, value, defaultSelected)
new Option(text, value, defaultSelected, selected)
```

### 引数

- `text` {{optional_inline}}
  - : 文字列で、要素の内容、すなわち表示するテキストを表します。これが指定されていない場合は、 ""（空文字列）が既定値として使用されます。
- `value` {{optional_inline}}
  - : 文字列で、この {{domxref("HTMLOptionElement")}} の値、すなわち対応する {{htmlelement("option")}} 要素の value 属性を表します。指定されなかった場合は text の値が value として、例えば、フォームがサーバーへ送信されるときには {{htmlelement("select")}} 要素の値として使用されます。
- `defaultSelected` {{optional_inline}}
  - : `true` または `false` のどちらかの値で、[`selected`](/ja/docs/Web/HTML/Element/option#selected) 属性の値を設定するものです。すなわち、ページが最初に読み込まれたときに、この {{htmlelement("option")}} が {{htmlelement("select")}} 要素で選択される既定値になるようにします。これが指定されていない場合は、既定値の false が使用されます。なお、 true を指定しても、その選択肢が selected でない場合は選択状態にはなりません。
- `selected` {{optional_inline}}
  - : `true` または `false` のどちらかの値で、その選択肢の選択状態を設定します。既定値は false（未選択）です。省略された場合、defaultSelected 引数が true であっても、その選択肢は選択されません。

## 例

### 単に新しい選択肢を追加する

```js
/* 以下の HTML があるとする
<select id='s'>

</select>
*/

const s = document.getElementById("s");
const options = [Four, Five, Six];

options.forEach((element, key) => {
  s[key] = new Option(element, key);
});
```

### 様々な引数で選択肢を追加する

```js
/* 以下の HTML があると想定する
<select id="s">
    <option>First</option>
    <option>Second</option>
    <option>Third</option>
</select>
*/

const s = document.getElementById("s");
const options = ["zero", "one", "two"];

options.forEach((element, key) => {
  if (element === "zero") {
    s[key] = new Option(element, s.options.length, false, false);
  }
  if (element === "one") {
    s[key] = new Option(element, s.options.length, true, false); // "selected" 属性を追加
  }
  if (element === "two") {
    s[key] = new Option(element, s.options.length, false, true); // "view" の中で選択状態になる
  }
});

/* 結果
<select id="s">
  <option value="0">zero</option>
  <option value="1" selected="">one</option>
  <option value="2">two</option> // ユーザーにはこれが 'selected' に見える
</select>
*/
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
