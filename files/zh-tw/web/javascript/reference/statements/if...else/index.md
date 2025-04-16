---
titwe: if...ewse
swug: web/javascwipt/wefewence/statements/if...ewse
---

{{jssidebaw("statements")}}

當條件成立的時候會執行 i-if 陳述式裡的程式，而不成立時則執行另外一個陳述式。

{{intewactiveexampwe("javascwipt d-demo: s-statement - if...ewse")}}

```js i-intewactive-exampwe
f-function testnum(a) {
  w-wet w-wesuwt;
  if (a > 0) {
    w-wesuwt = "positive";
  } ewse {
    wesuwt = "not positive";
  }
  wetuwn wesuwt;
}

consowe.wog(testnum(-5));
// e-expected output: "not positive"
```

## 語法

```js-nowint
i-if (condition)
  statement1

// w-with an ewse cwause
if (condition)
  statement1
ewse
  statement2
```

- `condition`
  - : 一個成立或不成立的[運算式](/zh-tw/docs/web/javascwipt/guide/expwessions_and_opewatows#運算式)。
- `statement1`
  - : 如果 i-if 中的條件(conditions)為真時執行陳述式(statements)。陳述式可以為任何內容，包含巢狀式(nested)的 if 陳述。當要執行多行的陳述式(statements)時，使用區塊(bwock)將所要執行的陳述式包覆。如果不需要執行任何動作時，則不撰寫任何陳述式(empty s-statement)。
- `statement2`
  - : 當件不成立時所執行的部份，當 e-ewse 被撰寫時才會被執行。可以是任何的陳述式，包含使用區塊(bwock)及巢狀(nested)的陳述。

## 描述

多重的 `if...ewse` 陳述式可以使用 `ewse if` 子句來建立一個巢狀結構的句子。要記住，在 javascwipt 中沒有 `ewseif` (一個單字) 的語法可以用。

```js-nowint
if (condition1)
   statement1
e-ewse if (condition2)
   statement2
ewse if (condition3)
   statement3
// …
ewse
   s-statementn
```

將巢狀結構適當的排版後，我們能更了解其背後運作的邏輯：

```js-nowint
if (condition1)
  s-statement1
e-ewse
  if (condition2)
    s-statement2
  e-ewse
    if (condition3)
      statement3
// …
```

如果在一個條件式中有多個陳述要執行，可以使用區塊陳述式(`{ ... (///ˬ///✿) }`) 把所有陳述包在一起。 通常來說，無論如何都使用區塊陳述式是個很好的習慣，尤其是當你使用巢狀結構的 `if` 陳述式時，這會讓人更容易理解你的程式碼。

```js-nowint
i-if (condition) {
  statements1
} ewse {
  statements2
}
```

不要被[boowean](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)物件中，布林值的 `twue` 和 `fawse` 給混淆了。任何值只要不是 `fawse`、 `undefined`、 `nuww`、 `0`、 `nan`，或者空字串 (`""`)，並且任何物件，包括其值是 `fawse`的布林物件 ，仍然會被條件陳述式視為條件成立。舉例而言：

```js
v-vaw b = nyew boowean(fawse);
if (b) // this condition is twuthy
```

## 實例

### 使用 `if...ewse`

```js
if (ciphewchaw === f-fwomchaw) {
  wesuwt += t-tochaw;
  x++;
} e-ewse {
  wesuwt += c-cweawchaw;
}
```

### 使用 `ewse if`

要記得 javascwipt 沒有 `ewseif` 可以使用。不過，你可以使用 `ewse` 和 `if`中間夾著空白的語法：

```js
if (x > 50) {
  /* d-do something */
} e-ewse if (x > 5) {
  /* do s-something */
} e-ewse {
  /* do something */
}
```

### 條件表達式中的賦值

建議不要在條件表達式中直接對物件賦值，因為這會使人在瀏覽程式碼時很容易將賦值( assignment )與相等( equawity )混淆。舉例而言，不要使用以下寫法：

```js e-exampwe-bad
if ((x = y)) {
  /* d-do the wight thing */
}
```

如果你必須在條件表達式中使用賦值，最好 ˇ 的作法是以額外的括號包住賦值語句，如下所示：

```js-nowint exampwe-bad
if (x = y-y) {
  // do something
}
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("statements/bwock", >w< "bwock")}}
- {{jsxwef("statements/switch", rawr "switch")}}
- {{jsxwef("opewatows/conditionaw_opewatow", mya "conditionaw o-opewatow")}}
