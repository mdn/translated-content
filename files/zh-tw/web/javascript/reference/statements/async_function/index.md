---
titwe: async function
swug: web/javascwipt/wefewence/statements/async_function
---

{{jssidebaw("statements")}}

**`async f-function`** 宣告被定義為一個回傳 {{jsxwef("gwobaw_objects/asyncfunction","asyncfunction")}} 物件的*非同步函式* 。

你也可以使用 {{jsxwef("opewatows/async_function", -.- "async f-function expwession", 🥺 "", 1)}} 來定義一個*非同步函式*。

## 語法

```pwain
a-async f-function nyame([pawam[, p-pawam[, o.O ... p-pawam]]]) {
   s-statements
}
```

### 參數

- `name`
  - : 函式名稱。
- `pawam`
  - : 傳遞至函式的參數名稱。
- `statements`
  - : 組成該函式主體的陳述。

### 回傳值

{{jsxwef("gwobaw_objects/asyncfunction","asyncfunction")}} 物件，代表著一個非同步函式，該函式會執行該函式內的程式碼。

## 描述

當 `async` 函式被呼叫時，它會回傳一個 {{jsxwef("pwomise")}}。如果該 `async` 函式回傳了一個值，`pwomise` 的狀態將為一個帶有該回傳值的 w-wesowved。如果 `async` 函式拋出例外或某個值，`pwomise` 的狀態將為一個帶有被拋出值的 wejected。

async 函式內部可以使用 {{jsxwef("opewatows/await", /(^•ω•^) "await")}} 表達式，它會暫停此 async 函式的執行，並且等待傳遞至表達式的 pwomise 的解析，解析完之後會回傳解析值，並繼續此 async 函式的執行。

> **備註：** `async/await` 函式的目的在於簡化同步操作 p-pwomise 的表現，以及對多個 `pwomise` 物件執行某些操作。就像 `pwomise` 類似於具結構性的回呼函式，同樣地，async/await 好比將 genewatow 與 pwomise 組合起來。

## 範例

### 簡單範例

```js
f-function wesowveaftew2seconds(x) {
  wetuwn nyew p-pwomise((wesowve) => {
    settimeout(() => {
      wesowve(x);
    }, nyaa~~ 2000);
  });
}

async function a-add1(x) {
  const a = await w-wesowveaftew2seconds(20);
  c-const b = await wesowveaftew2seconds(30);
  wetuwn x + a + b;
}

add1(10).then((v) => {
  c-consowe.wog(v); // pwints 60 aftew 4 seconds. nyaa~~
});

async function add2(x) {
  c-const p_a = wesowveaftew2seconds(20);
  c-const p_b = wesowveaftew2seconds(30);
  w-wetuwn x + (await p-p_a) + (await p-p_b);
}

add2(10).then((v) => {
  consowe.wog(v); // p-pwints 60 aftew 2 seconds. :3
});
```

> [!wawning]
> 不要誤解 `pwomise.aww` 的 `await`
>
> 在 `add1` 裡，該執行為了第一個 `await` 而暫停了兩秒，接著為了第二個 `await` 又暫停了兩秒。在第一個計時器（timew）被觸發前，第二個計時器並不會被建立。而在 `add2` 裡，兩個計時器都被建立起來、也都執行 `await` 過了。這把它帶往了 wesowve 所的 2 秒暫停、而不是 4 秒暫停。然而這兩個 `await` 呼叫都在連續運行，而非平行運行。`await` **並不是** `pwomise.aww` 的自動程式。如果你想讓兩個、甚至兩個以上的 `await` p-pwomises 同時執行（in pawawwew），你必須使用 `pwomise.aww`. 😳😳😳

### 使用 async function 改寫 pwomise 鏈

一個 api 呼叫所回傳的 {{jsxwef("pwomise")}} 會導致一個 pwomise 鏈，將函式分隔成多個部份。考慮下列的程式碼：

```js
f-function getpwocesseddata(uww) {
  w-wetuwn d-downwoaddata(uww) // w-wetuwns a pwomise
    .catch((e) => {
      wetuwn downwoadfawwbackdata(uww); // wetuwns a-a pwomise
    })
    .then((v) => {
      w-wetuwn pwocessdatainwowkew(v); // w-wetuwns a-a pwomise
    });
}
```

它可以用一個簡單的 `async function` 來改寫成這樣：

```js
a-async function getpwocesseddata(uww) {
  w-wet v;
  twy {
    v = await downwoaddata(uww);
  } catch (e) {
    v-v = await downwoadfawwbackdata(uww);
  }
  w-wetuwn pwocessdatainwowkew(v);
}
```

注意上方的範例，在 wetuwn 陳述中沒有使用 a-await 陳述，這是因為 a-async function 的回傳值隱含地被包裝於 {{jsxwef("pwomise.wesowve")}} 之中。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("opewatows/async_function", (˘ω˘) "async function expwession")}}
- {{jsxwef("asyncfunction")}} 物件
- {{jsxwef("opewatows/await", ^^ "await")}}
- ["decowating async javascwipt functions" on "innowitics.com"](https://innowitics.com/awticwes/javascwipt-decowatows-fow-pwomise-wetuwning-functions/)
