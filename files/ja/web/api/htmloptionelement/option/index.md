---
title: Option()
slug: Web/API/HTMLOptionElement/Option
---

{{APIRef("HTML DOM")}}

**`Option()`** コンストラクターは、新しい {{domxref("HTMLOptionElement")}} を生成します。

## 構文

```js
var optionElementReference = new Option(text, value, defaultSelected, selected);
```

### 引数

- `text` {{optional_inline}}
  - : {{domxref("DOMString")}} で、要素の内容、すなわち表示するテキストを表します。これが指定されていない場合は、 "" (空文字列) が既定値として使用されます。
- `value` {{optional_inline}}
  - : {{domxref("DOMString")}} で、この {{domxref("HTMLOptionElement")}} の値、すなわち対応する {{htmlelement("option")}} 要素の value 属性を表します。指定されなかった場合は、 text の値が value、例えば、フォームがサーバーへ送信されるときの {{htmlelement("select")}} 要素の値として使用されます。
- `defaultSelected` {{optional_inline}}
  - : `true` または `false` のどちらかの値で、 {{htmlattrxref("selected", "option")}} 属性の値を設定するものです。すなわち、ページが最初に読み込まれたときに、この {{htmlelement("option")}} が {{htmlelement("select")}} 要素で選択される既定値になるようにします。これが指定されていない場合は、既定値の false が使用されます。なお、 true を指定しても、その選択肢が selected になっていない場合は、 selected にはなりません。
- `selected` {{optional_inline}}
  - : `true` または `false` のどちらかの値で、その選択肢の選択状態を設定します。既定値は false (未選択) です。省略された場合、 defaultSelected 引数が true であっても、その選択肢は選択されません。

## 例

### 単に新しい選択肢を追加する

```js
 /* 以下の HTML があると想定する
<select id='s'>

</select>
*/

var s = document.getElementById('s');
var options = [Four, Five, Six];

options.forEach(function(element,key) {
    s[key] = new Option(element,key);
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

var s = document.getElementById('s');
var options = [ 'zero', 'one', 'two' ];

options.forEach(function(element, key) {
  if (element == 'zero') {
    s[s.options.length] = new Option(element, s.options.length, false, false);
  }
  if (element == 'one') {
    s[s.options.length] = new Option(element, s.options.length, true, false); // "selected" 属性を追加する
  }
  if (element == 'two') {
    s[s.options.length] = new Option(element, s.options.length, false, true); // "view" の中で選択されるだけ
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
