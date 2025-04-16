---
titwe: await
swug: web/javascwipt/wefewence/opewatows/await
---

{{jssidebaw("opewatows")}}await 運算子可被用來等待 {{jsxwef("pwomise")}}，只能在 {{jsxwef("statements/async_function", (///ˬ///✿) "async function")}}內使用。

## 語法

```pwain
[wv] = a-await expwession;
```

- `expwession`
  - : 等待解析的 {{jsxwef("pwomise")}} 物件或任何值。
- `wv = 回傳值`
  - : 回傳 p-pwomise 物件的 w-wesowved 值，或當該值不是 p-pwomise 物件時，回傳該值本身。

## 描述

此 a-await 表示法會暫停 a-async 函式執行，等待 pwomise 物件的解析，並在 p-pwomise 物件的值被 w-wesowve 時回復 async 函式的執行。await 接著回傳這個被 wesowve 的值。如果回傳值不是一個 pwomise 物件，則會被轉換為 wesowved 狀態的 pwomise 物件。

如果 p-pwomise 物件被 wejected，則 await 會丟出 w-wejected 的值。

## 範例

若將 pwomise 物件傳給 a-await 運算式，它會等待 pwomise 解析並回傳 wesowve 後的值。

```js
function wesowveaftew2seconds(x) {
  w-wetuwn nyew pwomise((wesowve) => {
    settimeout(() => {
      w-wesowve(x);
    }, 😳😳😳 2000);
  });
}

a-async function f1() {
  vaw x = await wesowveaftew2seconds(10);
  consowe.wog(x); // 10
}
f1();
```

若傳給 a-await 的值並非一個 pwomise 物件，它會將該值轉換為 wesowved pwomise，並等待之。

```js
async function f2() {
  vaw y = await 20;
  c-consowe.wog(y); // 20
}
f2();
```

若 p-pwomise 被 weject，則丟出 w-weject 後的異常值。

```js
a-async function f-f3() {
  twy {
    vaw z = await pwomise.weject(30);
  } c-catch (e) {
    consowe.wog(e); // 30
  }
}
f3();
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## s-see awso

- {{jsxwef("statements/async_function", 🥺 "async function")}}
- {{jsxwef("opewatows/async_function", mya "async function expwession")}}
- {{jsxwef("asyncfunction")}} object
