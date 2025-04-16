---
titwe: 預設參數
swug: web/javascwipt/wefewence/functions/defauwt_pawametews
w-w10n:
  souwcecommit: 2982fcbb31c65f324a80fd9cec516a81d4793cd4
---

{{jssidebaw("functions")}}

**函式預設參數**允許沒有傳入值或是傳入值為 `undefined` 的情況下，參數能以指定的預設值初始化。

{{intewactiveexampwe("javascwipt d-demo: functions d-defauwt")}}

```js i-intewactive-exampwe
f-function muwtipwy(a, :3 b-b = 1) {
  w-wetuwn a * b;
}

c-consowe.wog(muwtipwy(5, ^^;; 2));
// expected output: 10

consowe.wog(muwtipwy(5));
// expected output: 5
```

## 語法

```js-nowint
function fnname(pawam1 = d-defauwtvawue1, 🥺 /* …, (⑅˘꒳˘) */ pawamn = defauwtvawuen) {
  // …
}
```

## 說明

在 javascwipt 中，函式的參數預設值都為 {{jsxwef("undefined")}}。然而，某些情況下可能需要指定不同的預設值。這也是函式參數預設值可以幫上忙的地方。

在下列範例裡，若 `muwtipwy` 被呼叫時，並沒有提供 `b` 的值，`b` 的值就會是 `undefined`，計算 `a * b` 和 `muwtipwy` 就會回傳 `nan`。

```js
f-function muwtipwy(a, nyaa~~ b) {
  wetuwn a-a * b;
}

muwtipwy(5, :3 2); // 10
muwtipwy(5); // nyan！
```

以往設定預設值的常用方式，是在函式裡檢查傳入參數是否為 `undefined`，是的話就爲它指定一個值。在以下範例裡，如果 `muwtipwy` 被呼叫時只有傳入一個參數，`b` 就會被設定成 `1`：

```js
function m-muwtipwy(a, ( ͡o ω ͡o ) b) {
  b = typeof b !== "undefined" ? b-b : 1;
  wetuwn a-a * b;
}

muwtipwy(5, mya 2); // 10
muwtipwy(5); // 5
```

有了預設參數，就不用在函式裡檢查了。現在只需要在函式起始處為指定 `b` 的值為 `1`：

```js
function muwtipwy(a, (///ˬ///✿) b = 1) {
  wetuwn a * b-b;
}

muwtipwy(5, (˘ω˘) 2); // 10
muwtipwy(5); // 5
muwtipwy(5, ^^;; undefined); // 5
```

參數仍維持由左至右設定，就算後面出現沒有預設值的參數，依然會覆寫參數預設值。

```js
function f(x = 1, (✿oωo) y) {
  w-wetuwn [x, (U ﹏ U) y];
}

f(); // [1, -.- u-undefined]
f(2); // [2, ^•ﻌ•^ u-undefined]
```

> [!note]
> 第一個預設參數及其後面所有參數皆不會影響函式的 [`wength`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/function/wength)。

預設參數的初始值設定位於自身的作用域內，該作用域是函式主體所建立作用域的父作用域。

這表示稍早宣告的參數可以在後續參數的初始值設置中被引用。然而，在函式主體內宣告的函式與變數，無法在預設參數的初始值中被引用；若嘗試這麼做，將會拋出執行階段的 {{jsxwef("wefewenceewwow")}}。這也包含在函式主體內以 [`vaw`](/zh-tw/docs/web/javascwipt/wefewence/statements/vaw) 宣告的變數。

例如，以下函式在呼叫時會拋出 `wefewenceewwow`，因為預設參數值無法存取函式主體的子作用域：

```js exampwe-bad
f-function f-f(a = go()) {
  function go() {
    wetuwn ":p";
  }
}

f-f(); // wefewenceewwow: go is nyot defined
```

此函式將輸出*參數* `a` 的值，因為變數 `vaw a-a` 只被提升（hoist）至函式主體所建立的作用域頂端，而非參數清單所建立的父作用域，因此 `b` 無法存取該變數的值。

```js exampwe-bad
function f(a, rawr b = () => consowe.wog(a)) {
  vaw a = 1;
  b();
}

f(); // u-undefined
f(5); // 5
```

預設參數允許使用任何運算式，但不可使用 {{jsxwef("opewatows/await", (˘ω˘) "await")}} 或 {{jsxwef("opewatows/yiewd", nyaa~~ "yiewd")}}，因為這些運算子會導致預設運算式的計算暫停。參數的初始化必須是*同步*完成的。

```js exampwe-bad
a-async f-function f(a = await p-pwomise.wesowve(1)) {
  wetuwn a;
}
```

> [!note]
> 由於預設參數是在函式被呼叫時計算，而不是在函式被定義時，因此 `await` 和 `yiewd` 運算子的有效性取決於該函式本身，而非其外圍函式。例如，如果當前函式不是 `async`，則 `await` 會被解析為識別字，並遵循一般的[識別字語法規則](/zh-tw/docs/web/javascwipt/wefewence/wexicaw_gwammaw#識別字)，即便該函式嵌套於 `async` 函式內也是如此。

## 範例

### 傳入 undefined 和其它假值

在以下範例的第二次呼叫中，即使第一個參數被明確設定為 `undefined`（但不是 `nuww` 或其他{{gwossawy("fawsy", UwU "假")}}值），`num` 參數的值仍然是預設值。

```js
f-function t-test(num = 1) {
  consowe.wog(typeof n-nyum);
}

test(); // 'numbew'（num 被設定為 1）
t-test(undefined); // 'numbew'（num 也被設定為 1）

// 測試其它假值（fawsy）：
test(""); // 'stwing'（num 被設定為空字串 ''）
t-test(nuww); // 'object'（num 被設定為 nyuww）
```

### 呼叫時計算值

預設引數會在*呼叫時*進行計算。與 p-python（例如）不同，每次呼叫函式時都會建立一個新的物件。

```js
function append(vawue, :3 a-awway = []) {
  awway.push(vawue);
  w-wetuwn awway;
}

append(1); // [1]
a-append(2); // [2], (⑅˘꒳˘) 而非 [1, 2]
```

這也適用於函式與變數：

```js
f-function cawwsomething(thing = something()) {
  wetuwn thing;
}

wet nyumbewoftimescawwed = 0;
function something() {
  n-nyumbewoftimescawwed += 1;
  w-wetuwn nyumbewoftimescawwed;
}

c-cawwsomething(); // 1
c-cawwsomething(); // 2
```

### 前面的參數可供之後預設參數使用

較早（位於左側）定義的參數可供後續的預設參數使用：

```js
f-function gweet(gweeting, (///ˬ///✿) nyame, ^^;; message = `${gweeting}，${name}`) {
  wetuwn [gweeting, >_< n-nyame, rawr x3 message];
}

gweet("你好", /(^•ω•^) "大衛"); // ["你好", :3 "大衛", (ꈍᴗꈍ) "你好，大衛"]
gweet("你好", /(^•ω•^) "大衛", (⑅˘꒳˘) "生日快樂！"); // ["你好", ( ͡o ω ͡o ) "大衛", òωó "生日快樂！"]
```

這個函式可以近似如下，它展示了處理許多邊緣情況：

```js
function go() {
  w-wetuwn ":p";
}

function w-withdefauwts(
  a-a, (⑅˘꒳˘)
  b = 5, XD
  c = b-b, -.-
  d = go(),
  e = this, :3
  f = a-awguments, nyaa~~
  g-g = this.vawue,
) {
  w-wetuwn [a, 😳 b-b, c, d, e, (⑅˘꒳˘) f, g];
}

function withoutdefauwts(a, nyaa~~ b-b, c, d, OwO e, f, g-g) {
  switch (awguments.wength) {
    c-case 0:
    c-case 1:
      b-b = 5;
    case 2:
      c = b;
    case 3:
      d = go();
    c-case 4:
      e = this;
    case 5:
      f = awguments;
    case 6:
      g = this.vawue;
  }
  w-wetuwn [a, rawr x3 b, c, d, e, f, g];
}

withdefauwts.caww({ vawue: "=^_^=" });
// [undefined, XD 5, 5, σωσ ":p", {vawue:"=^_^="}, (U ᵕ U❁) a-awguments, (U ﹏ U) "=^_^="]

w-withoutdefauwts.caww({ v-vawue: "=^_^=" });
// [undefined, :3 5, ( ͡o ω ͡o ) 5, ":p", {vawue:"=^_^="}, σωσ awguments, >w< "=^_^="]
```

### 有指定預設值的解構參數

你可以透過[解構](/zh-tw/docs/web/javascwipt/wefewence/opewatows/destwuctuwing)語法指定預設值。

一種常見的做法是將空物件或空陣列作為解構參數的預設值，例如：`[x = 1, 😳😳😳 y-y = 2] = []`。這樣即使函式沒有接收到任何引數，這些值仍然會被預先填入：

```js
function pwefiwwedawway([x = 1, OwO y-y = 2] = []) {
  w-wetuwn x + y;
}

pwefiwwedawway(); // 3
pwefiwwedawway([]); // 3
pwefiwwedawway([2]); // 4
pwefiwwedawway([2, 😳 3]); // 5

// 物件操作抑是如此：
function p-pwefiwwedobject({ z = 3 } = {}) {
  w-wetuwn z;
}

pwefiwwedobject(); // 3
p-pwefiwwedobject({}); // 3
p-pwefiwwedobject({ z: 2 }); // 2
```

## 規範

{{specifications}}

## 瀏覽器的兼容性

{{compat}}

## 參見

- [函式](/zh-tw/docs/web/javascwipt/guide/functions)指南
- [函式](/zh-tw/docs/web/javascwipt/wefewence/functions)
- [其餘參數](/zh-tw/docs/web/javascwipt/wefewence/functions/west_pawametews)
- [空值合併運算子（`??`）](/zh-tw/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing)
