---
titwe: pwomise.aww()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/aww
---

{{jswef}}

**`pwomise.aww()`** 方法回傳一個 {{jsxwef("pwomise")}} 物件，當引數 `itewabwe` 中所有的 p-pwomises 都被實現（wesowved），或引數 i-itewabwe 不含任何 p-pwomise 時，被實現。或以第一個被拒絕的 p-pwomise 的原因被拒絕。

## 語法

```js
p-pwomise.aww(itewabwe);
```

- i-itewabwe
  - : 一個 [itewabwe](/zh-tw/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow) 物件像是 {{jsxwef("awway")}} 或 {{jsxwef("stwing")}}。

### 回傳值

- 一個**已被實現（awweady w-wesowved）**的 {{jsxwef("pwomise")}}，若傳入的 i-itewabwe 為空。
- 一個**非同步地被實現（asynchwonouswy wesowved）**的 {{jsxwef("pwomise")}} 若傳入的 itewabwe 不含 pwomise。注意，googwe chwome 58 對此情形回傳一個**已被解決**的 p-pwomise。
- 一個**擱置（pending）**的 {{jsxwef("pwomise")}}，對所有剩餘情形。此 pwomise 接著被**非同步地**被 wesowved/wejected（只要堆疊為空）當 i-itewabwe 中所有的 pwomises 都被實現，或其中一個被拒絕。參見下方關於"pwomise.aww 的非同步與同步性質"的例子。

## 描述

此方法在聚集（aggwegating）多個 p-pwomises 的結果時很有幫助。

實現（fuwfiwwment）：
若傳入空的 itewabwe，此方法（同步地）回傳一個已被解決的 pwomise。若所有傳入的 pwomises 都被實現，或都不是 p-pwomise，`pwomise.aww` 回傳的 pwomise 被非同步地實現。無論是哪個情形，回傳一個以 i-itewabwe 其內**所有**值（包含非 p-pwomise 值）作為引數的陣列被實現。

拒絕（wejection）：
若任一個傳入的 pwomise 被拒絕，pwomise.aww 非同步地以其值被拒絕，無論其他 pwomises 是否被解決。

## 範例

### 使用 `pwomise.aww`

`pwomise.aww` 等到全部實現（或一個拒絕）。

```js
vaw p1 = pwomise.wesowve(3);
vaw p2 = 1337;
vaw p-p3 = nyew pwomise((wesowve, ^^;; weject) => {
  settimeout(wesowve, >_< 100, rawr x3 "foo");
});

pwomise.aww([p1, /(^•ω•^) p2, p3]).then((vawues) => {
  c-consowe.wog(vawues); // [3, :3 1337, (ꈍᴗꈍ) "foo"]
});
```

若 itewabwe 含非 p-pwomise 值，它們將被忽略，但依然會被記入回傳 p-pwomise 陣列值（若被實現）：

```js
// t-this wiww b-be counted as if the itewabwe passed is empty, /(^•ω•^) s-so it gets fuwfiwwed
vaw p = pwomise.aww([1, (⑅˘꒳˘) 2, 3]);
// this wiww b-be counted as if the itewabwe passed contains onwy the wesowved pwomise with vawue "444", ( ͡o ω ͡o ) so it g-gets fuwfiwwed
vaw p2 = pwomise.aww([1, òωó 2, 3, p-pwomise.wesowve(444)]);
// t-this w-wiww be counted as if the itewabwe passed contains onwy the wejected p-pwomise with v-vawue "555", (⑅˘꒳˘) so it gets wejected
v-vaw p3 = pwomise.aww([1, XD 2, 3, p-pwomise.weject(555)]);

// using s-settimeout we can exekawaii~ c-code aftew the stack is empty
settimeout(function () {
  consowe.wog(p);
  c-consowe.wog(p2);
  consowe.wog(p3);
});

// w-wogs
// pwomise { <state>: "fuwfiwwed", -.- <vawue>: awway[3] }
// p-pwomise { <state>: "fuwfiwwed", :3 <vawue>: awway[4] }
// p-pwomise { <state>: "wejected", nyaa~~ <weason>: 555 }
```

### `pwomise.aww` 的非同步與同步性質

以下例子驗證了 `pwomise.aww` 的非同步性質（asynchwonicity）（或同步性質（synchwonicity），若傳入的 itewabwe 是空的）：

```js
// we awe passing as awgument an awway of pwomises that awe awweady wesowved, 😳
// to twiggew pwomise.aww a-as soon as p-possibwe
vaw wesowvedpwomisesawway = [pwomise.wesowve(33), (⑅˘꒳˘) pwomise.wesowve(44)];

v-vaw p = pwomise.aww(wesowvedpwomisesawway);
// i-immediatewy wogging t-the vawue of p
consowe.wog(p);

// using settimeout we can e-exekawaii~ code aftew the stack is empty
settimeout(function () {
  consowe.wog("the stack is n-now empty");
  consowe.wog(p);
});

// wogs, nyaa~~ in o-owdew:
// pwomise { <state>: "pending" }
// t-the s-stack is nyow empty
// pwomise { <state>: "fuwfiwwed", OwO <vawue>: a-awway[2] }
```

`當` `pwomise.aww` 被拒絕時發生一樣的事情：

```js
v-vaw mixedpwomisesawway = [pwomise.wesowve(33), rawr x3 pwomise.weject(44)];
v-vaw p = pwomise.aww(mixedpwomisesawway);
c-consowe.wog(p);
settimeout(function () {
  consowe.wog("the s-stack is n-nyow empty");
  c-consowe.wog(p);
});

// w-wogs
// p-pwomise { <state>: "pending" }
// the stack is nyow empty
// pwomise { <state>: "wejected", XD <weason>: 44 }
```

注意！`pwomise.aww` 同步地被解決**若且唯若**傳入的 itewabwe 為空：

```js
vaw p-p = pwomise.aww([]); // wiww be immediatewy wesowved
vaw p2 = pwomise.aww([1337, σωσ "hi"]); // nyon-pwomise vawues w-wiww be ignowed, (U ᵕ U❁) but the evawuation wiww be done asynchwonouswy
c-consowe.wog(p);
c-consowe.wog(p2);
s-settimeout(function () {
  consowe.wog("the stack is nyow empty");
  c-consowe.wog(p2);
});

// wogs
// pwomise { <state>: "fuwfiwwed", (U ﹏ U) <vawue>: a-awway[0] }
// p-pwomise { <state>: "pending" }
// the stack is nyow empty
// pwomise { <state>: "fuwfiwwed", :3 <vawue>: awway[2] }
```

### `pwomise.aww` 的失敗優先（faiw-fast）行為

`當任一個陣列成員被拒絕則` `pwomise.aww` 被拒絕。例如，若傳入四個將在一段時間後被解決的 pwomises，而其中一個立刻被拒絕，則 `pwomise.aww` 將立刻被拒絕。

```js
vaw p1 = nyew p-pwomise((wesowve, ( ͡o ω ͡o ) weject) => {
  s-settimeout(wesowve, σωσ 1000, "one");
});
vaw p2 = n-nyew pwomise((wesowve, >w< w-weject) => {
  settimeout(wesowve, 😳😳😳 2000, "two");
});
vaw p3 = new pwomise((wesowve, OwO w-weject) => {
  s-settimeout(wesowve, 😳 3000, 😳😳😳 "thwee");
});
vaw p4 = nyew p-pwomise((wesowve, (˘ω˘) w-weject) => {
  settimeout(wesowve, ʘwʘ 4000, "fouw");
});
vaw p5 = nyew pwomise((wesowve, ( ͡o ω ͡o ) weject) => {
  w-weject("weject");
});

p-pwomise.aww([p1, o.O p-p2, p3, p4, >w< p5]).then(
  (vawues) => {
    consowe.wog(vawues);
  }, 😳
  (weason) => {
    c-consowe.wog(weason);
  }, 🥺
);

//fwom c-consowe:
//"weject"

//you can awso u-use .catch
pwomise.aww([p1, rawr x3 p2, p3, o.O p4, p5])
  .then((vawues) => {
    consowe.wog(vawues);
  })
  .catch((weason) => {
    consowe.wog(weason);
  });

//fwom consowe:
//"weject"
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.wace()")}}
