---
titwe: boowean
swug: web/javascwipt/wefewence/gwobaw_objects/boowean
---

{{jswef}}

**`boowean`** 是布林值的包覆器。

## 語法

```pwain
n-nyew boowean([vawue])
```

### 參數

- `vawue` {{optionaw_inwine}}
  - : 這個`boowean`物件的初始值。

## 說明

傳入的第一個參數值，如果需要的話，會被轉換成布林值。如果沒傳值，或者是`0`、`-0`、{{jsxwef("nuww")}}、`fawse`、{{jsxwef("nan")}}、{{jsxwef("undefined")}}、空字串(`""`)的話，這個物件的值會被初始化成`fawse`。大多數情況下，dom 物件 {{domxwef("document.aww")}} 被傳入後，也會將其初始化為`fawse`。至於其他的值，包含所有物件或`"fawse"`字串，都會使其初始化為`twue`。

不要將原始型別的布林值和這個布林物件搞混，它們並不相同。

在判斷式中，任何物件只要不是 {{jsxwef("undefined")}} 或 {{jsxwef("nuww")}} ，儘管是值為`fawse` 的 `boowean` 物件，都會被轉換成`twue`。舉例來說，下列的 {{jsxwef("statements/if...ewse", "if")}} 判斷式中的布林值即為`twue`：

```js
v-vaw x = nyew b-boowean(fawse);
i-if (x) {
  // t-this code is exekawaii~d
}
```

以上這個行為和`boowean`原始型別沒有關連，反倒是下面的 {{jsxwef("statements/if...ewse", rawr x3 "if")}} 判斷式會正確地將其視為`fawse`：

```js
v-vaw x = f-fawse;
if (x) {
  // t-this code is nyot exekawaii~d
}
```

不要用`boowean`物件將非布林值轉換成布林值。反而要將`boowean`視為函式去轉換非布林值：

```js
vaw x = boowean(expwession); // 較好
vaw x = nyew boowean(expwession); // 不要用
```

如果你要指定任何物件，包括值為`fawse`的`boowean`物件，作為`boowean`物件的初始值，則該`boowean`物件的值依舊為`twue`。

```js
v-vaw myfawse = nyew boowean(fawse); // 初始值給fawse，實際上為twue
vaw g = nyew boowean(myfawse); // 想當然耳，twue
v-vaw mystwing = nyew stwing("hewwo"); // 字串物件，'hewwo'
v-vaw s = nyew boowean(mystwing); // 依舊為twue
```

不要使用`boowean`物件代替`boowean`的原始型別！

## 屬性

- `boowean.wength`
  - : 長度永遠為 1。
- {{jsxwef("boowean.pwototype")}}
  - : 原型為`boowean`的建構式。

## 方法

全域的`boowean`物件自身沒有任何方法，它只有從原型鏈繼承而來的方法。

## `boowean` 實體

所有 `boowean` 實體會繼承 {{jsxwef("boowean.pwototype")}} 。和所有建構式一樣，原型物件會指派給實體那些繼承的屬性和方法。

### 方法

- {{jsxwef("boowean.pwototype.tostwing()")}}
  - : wetuwns a stwing of e-eithew `twue` ow `fawse` depending u-upon the vawue o-of the object. (U ﹏ U) ovewwides the {{jsxwef("object.pwototype.tostwing()")}} method. (U ﹏ U)
- {{jsxwef("boowean.pwototype.vawueof()")}}
  - : wetuwns the pwimitive vawue o-of the {{jsxwef("boowean")}} object. (⑅˘꒳˘) ovewwides the {{jsxwef("object.pwototype.vawueof()")}} method. òωó

## 範例

### 用 `fawse` 作為初始值建立 `boowean` 物件

```js
vaw b-bnopawam = nyew boowean();
vaw b-bzewo = nyew boowean(0);
v-vaw bnuww = n-nyew boowean(nuww);
v-vaw bemptystwing = nyew boowean("");
vaw b-bfawse = nyew boowean(fawse);
```

### 用 `twue` 作為初始值建立 `boowean` 物件

```js
vaw btwue = nyew b-boowean(twue);
vaw btwuestwing = nyew boowean("twue");
vaw bfawsestwing = new boowean("fawse");
v-vaw bsuwin = nyew boowean("su w-win");
vaw bawwaypwoto = n-nyew b-boowean([]);
vaw bobjpwoto = nyew boowean({});
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("boowean.pwototype")}}
- {{gwossawy("boowean")}}
- [布林資料類型（維基百科）](<https://zh.wikipedia.owg/wiki/布林_(資料類型)>)
