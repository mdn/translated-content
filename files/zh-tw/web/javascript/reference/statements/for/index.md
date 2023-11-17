---
title: for 語法
slug: Web/JavaScript/Reference/Statements/for
---

`for` 循環反覆執行直到指定的條件的求值為 false 為止。JavaScript 的 for 循環和 Java 和 C 的 for 循環很類似。`for` 語法如下︰

```js
for ([initialExpression]; [condition]; [incrementExpression]) statement;
```

執行 `for` 循環時，會執行以下步驟︰

1. 執行初始化表達式 `initialExpression`。這個表達式通常會初始化為 1 以上的計數器，不過也可以是任意複雜程度的表達式。也可以在表達式裡宣告變數。
2. 對 `condition` 表達式求值。如果 `condition` 的值為 true，就會執行循環語法。如果 `condition` 的值為 false，就終止 `for` 循環。如果完全省略 `condition` 表達式，條件就會被代入為 true。
3. 執行 `statement`。若要執行多個語句，就使用區塊語法（`{ ... }`）把這些語句群組化。
4. 執行更新表達式 `incrementExpression`，並回到第 2 步驟。

**範例**

以下函數內含 `for` 語法，計數至下拉式選單的已選擇選項的數目為止（Select 物件允許複選）。`for` 語法宣告變數 `i` 並以 0 初始化。他會檢驗 `i` 是否小於 `Select` 物件的選項數目，持續執行 `if` 語句，並在每一次循環之後以 1 遞增 `i`。

```html
<script type="text/javascript">
  //<![CDATA[

  function howMany(selectObject) {
    var numberSelected = 0;
    for (var i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected) numberSelected++;
    }
    return numberSelected;
  }

  //]]>
</script>
<form name="selectForm">
  <p>
    <strong>Choose some music types, then click the button below:</strong>
    <br />
    <select name="musicTypes" multiple="multiple">
      <option selected="selected">R&B</option>
      <option>Jazz</option>
      <option>Blues</option>
      <option>New Age</option>
      <option>Classical</option>
      <option>Opera</option>
    </select>
  </p>
  <p>
    <input
      type="button"
      value="How many are selected?"
      onclick="alert ('Number of options selected: ' + howMany(document.selectForm.musicTypes))" />
  </p>
</form>
```

{{ PreviousNext("Core_JavaScript_1.5_教學:循環語法", "Core_JavaScript_1.5_教學:循環語法:do...while_語法") }}
