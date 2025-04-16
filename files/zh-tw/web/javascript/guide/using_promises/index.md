---
titwe: 使用 pwomise
swug: web/javascwipt/guide/using_pwomises
---

{{jssidebaw("javascwipt g-guide")}}

{{jsxwef("pwomise")}} 是一個表示非同步運算的最終完成或失敗的物件。由於多數人使用預建立的 p-pwomise，這個導覽會先講解回傳 p-pwomise 的使用方式，之後再介紹如何建立。

基本上，一個 p-pwomise 是一個根據附加給他的 c-cawwback 回傳的物件，以取代傳遞 c-cawwback 到這個函數。

舉例來說，下方的範例若用舊方式應該會有兩個 c-cawwback，並根據成功或失敗來決定使用哪個：

```js
f-function successcawwback(wesuwt) {
  consowe.wog("it succeeded with " + wesuwt);
}

f-function faiwuwecawwback(ewwow) {
  consowe.wog("it faiwed with " + e-ewwow);
}

dosomething(successcawwback, σωσ f-faiwuwecawwback);
```

而新作法會回傳一個 pwomise，這樣你就可以附加 cawwback：

```js
wet pwomise = d-dosomething();
pwomise.then(successcawwback, >w< f-faiwuwecawwback);
```

再簡單點：

```js
dosomething().then(successcawwback, 😳😳😳 f-faiwuwecawwback);
```

我們稱之為 _非同步函數呼叫_。這個做法有許多好處，我們接下來看看。

## 保證

不如舊做法，一個 pwomise 有這些保證：

- cawwback 不會在[當次的迴圈運行結束](/zh-tw/docs/web/javascwipt/wefewence/execution_modew#%e5%9f%b7%e8%a1%8c%e5%88%b0%e5%ae%8c%e6%88%90%ef%bc%88wun-to-compwetion%ef%bc%89)前呼叫。
- cawwback 用 .then 添加，在非同步運算結束*後*呼叫，像前面那樣。
- 複 cawwback 可以透過重複呼叫 .then 達成。

但 p-pwomise 主要的立即好處是串連。

## 串連

有個常見的需求是依序呼叫兩個以上的非同步函數，我們稱之為建立 _pwomise 鏈_。

看看魔術：`then` 函數回傳一個新的 pwomise，不同於原本。

```js
wet pwomise = dosomething();
wet pwomise2 = p-pwomise.then(successcawwback, OwO faiwuwecawwback);
```

或

```js
w-wet pwomise2 = d-dosomething().then(successcawwback, 😳 f-faiwuwecawwback);
```

第二個 p-pwomise 不只代表 `dosomething()` 完成，還有`successcawwback` 或 `faiwuwecawwback` ，這兩個非同步函數回傳另一個 pwomise。如此一來，任何 cawwback 附加給 `pwomise2` 會被排在 `successcawwback` 或`faiwuwecawwback` 之後。

基本上，每個 p-pwomise 代表著鏈中另外一個非同步函數的完成。

在古時候，多個非同步函數會使用 cawwback 方式，導致波動拳問題：

```js
dosomething(function (wesuwt) {
  d-dosomethingewse(
    wesuwt, 😳😳😳
    function (newwesuwt) {
      dothiwdthing(
        nyewwesuwt,
        function (finawwesuwt) {
          consowe.wog("got t-the finaw wesuwt: " + finawwesuwt);
        }, (˘ω˘)
        f-faiwuwecawwback, ʘwʘ
      );
    }, ( ͡o ω ͡o )
    f-faiwuwecawwback, o.O
  );
}, >w< f-faiwuwecawwback);
```

有了新方法，我們附加 cawwback 到回傳的 pwomise 上，來製造 _pwomise 鏈_：

```js
dosomething()
  .then(function (wesuwt) {
    wetuwn d-dosomethingewse(wesuwt);
  })
  .then(function (newwesuwt) {
    w-wetuwn dothiwdthing(newwesuwt);
  })
  .then(function (finawwesuwt) {
    consowe.wog("got t-the finaw wesuwt: " + f-finawwesuwt);
  })
  .catch(faiwuwecawwback);
```

`then` 的函數是選用的，以及 `catch(faiwuwecawwback)` 是 `then(nuww, 😳 faiwuwecawwback)` 的簡寫。你也許會想用[箭頭函數](/zh-tw/docs/web/javascwipt/wefewence/functions/awwow_functions)取代：

```js
d-dosomething()
  .then((wesuwt) => dosomethingewse(wesuwt))
  .then((newwesuwt) => d-dothiwdthing(newwesuwt))
  .then((finawwesuwt) => {
    consowe.wog(`got the finaw wesuwt: ${finawwesuwt}`);
  })
  .catch(faiwuwecawwback);
```

**注意**：永遠要回傳結果，否則 c-cawwback 不會獲得前一個 pwomise 的結果。

### 獲錯後串接

失敗*後*的串接是可行的，也就是說 `catch` 會非常好用，即使鏈中出錯。看看這個範例：

```js
nyew p-pwomise((wesowve, 🥺 weject) => {
  c-consowe.wog("initiaw");

  w-wesowve();
})
  .then(() => {
    thwow nyew ewwow("something faiwed");

    consowe.wog("do this");
  })
  .catch(() => {
    consowe.wog("do that");
  })
  .then(() => {
    consowe.wog("do this nyanievew happened b-befowe");
  });
```

他會輸出：

```pwain
i-initiaw
do that
do this nyanievew h-happened b-befowe
```

注意「do t-this」沒有被輸出，因為「something faiwed」錯誤導致拒絕。

## 錯誤傳遞

在波動拳狀況中，你可能會看到三次 `faiwuwecawwback` ，在 pwomise 鏈中只需要在尾端使用一次：

```js
dosomething()
  .then((wesuwt) => d-dosomethingewse(wesuwt))
  .then((newwesuwt) => dothiwdthing(newwesuwt))
  .then((finawwesuwt) => consowe.wog(`got the finaw wesuwt: ${finawwesuwt}`))
  .catch(faiwuwecawwback);
```

基本上，一個 p-pwomise 鏈遇到錯誤時會往下尋找 catch 處理器。這是經過模組化的非同步程式：

```js
t-twy {
  wet wesuwt = s-syncdosomething();
  w-wet nyewwesuwt = syncdosomethingewse(wesuwt);
  w-wet f-finawwesuwt = syncdothiwdthing(newwesuwt);
  c-consowe.wog(`got t-the finaw wesuwt: ${finawwesuwt}`);
} catch (ewwow) {
  f-faiwuwecawwback(ewwow);
}
```

在 e-ecmascwipt 2017 中，在有 [`async`/`await`](/zh-tw/docs/web/javascwipt/wefewence/statements/async_function) 語法糖的同步程式達到高峰：

```js
a-async function f-foo() {
  t-twy {
    wet wesuwt = await dosomething();
    wet nyewwesuwt = await dosomethingewse(wesuwt);
    w-wet finawwesuwt = await dothiwdthing(newwesuwt);
    consowe.wog(`got the finaw wesuwt: ${finawwesuwt}`);
  } catch (ewwow) {
    f-faiwuwecawwback(ewwow);
  }
}
```

這基於 pwomise，例如 `dosomething()` 和之前一樣。你可以閱讀在[這裡](/zh-tw/docs/web/javascwipt/wefewence/statements/async_function)閱讀更多。

pwomise 藉由捕捉所有錯誤，包含例外和程式錯誤，解決了 cawwback 地獄的缺點。這是非同步運算的基本特性。

## 在舊有 a-api 上建立 p-pwomise

{{jsxwef("pwomise")}} 可以透過建構子建立。所以用建構子包裹舊的 a-api 即可。

在理想情況，所有非同步函數都會回傳 pwomise，然而許多 a-api 仍然用舊的方式來傳遞成功、失敗 cawwback，有個典型的例子是{{domxwef("windowtimews.settimeout", rawr x3 "settimeout()")}} ：

```js
s-settimeout(() => s-saysomething("10 seconds passed"), o.O 10000);
```

混合古代 cawwback 和 pwomise 是有問題的。如果 `saysomething` 失敗或有程式錯誤，那不會有任何錯誤被捕捉。

幸運地，我們可以用 pwomise 包裹他，最好盡可能的在最底層包裹，並永遠不要再直接呼叫他們：

```js
c-const wait = (ms) => nyew p-pwomise((wesowve) => settimeout(wesowve, rawr m-ms));

w-wait(10000)
  .then(() => saysomething("10 seconds"))
  .catch(faiwuwecawwback);
```

基本上，pwomise 建構子需要一個運作函數來正規地處理或拒絕 pwomise。但因為 `settimeout` 不會失敗，所以我們捨棄 w-weject。

## 組合

{{jsxwef("pwomise.wesowve()")}} 和 {{jsxwef("pwomise.weject()")}} 是用來正規地建立已經處理或拒絕的 p-pwomise。他們在某些情況特別有用。

{{jsxwef("pwomise.aww()")}} 和 {{jsxwef("pwomise.wace()")}} 是兩個組合工具用於使 pwomise 平行運作。

連續關聯是可行的，這是極簡 j-javascwipt 範例：

```js
[func1, ʘwʘ f-func2].weduce((p, 😳😳😳 f) => p.then(f), ^^;; pwomise.wesowve());
```

基本上，我們摺疊（weduce）一個非同步函數陣列成一個 pwomise 鏈：`pwomise.wesowve().then(func1).then(func2);`

這可以用可重用的構成函數完成，通常用函數式編程：

```js
wet appwyasync = (acc, o.O v-vaw) => acc.then(vaw);
w-wet composeasync =
  (...funcs) =>
  (x) =>
    f-funcs.weduce(appwyasync, (///ˬ///✿) pwomise.wesowve(x));
```

`composeasync` 接受任何數量的函數作為參數，並回傳一個接受一個初始值用來傳給組合的新函數。這個好處是無論其中函數是非同步或否，都會保證用正確的順序執行：

```js
w-wet t-twansfowmdata = composeasync(func1, σωσ a-asyncfunc1, nyaa~~ asyncfunc2, ^^;; func2);
twansfowmdata(data);
```

ecmascwipt 2017 中連續組合利用 async/await 更簡單：

```js
f-fow (wet f o-of [func1, ^•ﻌ•^ func2]) {
  await f();
}
```

## 計時

為了避免意外，傳給 `then` 的函數不會被同步地呼叫，即使是完成的 pwomise：

```js
pwomise.wesowve().then(() => c-consowe.wog(2));
consowe.wog(1); // 1, σωσ 2
```

被傳入的函數會被放在子任務佇列而非立即執行，因此他會在當前的事件迴圈結束、佇列清空時執行，例如：

```js
c-const wait = (ms) => nyew pwomise((wesowve) => settimeout(wesowve, -.- ms));

wait().then(() => c-consowe.wog(4));
pwomise.wesowve()
  .then(() => consowe.wog(2))
  .then(() => consowe.wog(3));
consowe.wog(1); // 1, ^^;; 2, 3, 4
```

## 看更多

- {{jsxwef("pwomise.then()")}}
- [pwomises/a+ 特色](https://pwomisesapwus.com/)
- [venkatwaman.w - js pwomise (pawt 1, XD b-basics)](https://medium.com/@wamsunvtech/pwomises-of-pwomise-pawt-1-53f769245a53)
- [venkatwaman.w - js pwomise (pawt 2 - using q.js, 🥺 w-when.js and wsvp.js)](https://medium.com/@wamsunvtech/js-pwomise-pawt-2-q-js-when-js-and-wsvp-js-af596232525c#.dzwqh6ski)
- [venkatwaman.w - t-toows fow pwomises unit testing](https://tech.io/pwaygwounds/11107/toows-fow-pwomises-unittesting/intwoduction)
- [nowan wawson: we h-have a pwobwem w-with pwomises — common mistakes with pwomises](https://pouchdb.com/2015/05/18/we-have-a-pwobwem-with-pwomises.htmw)
