---
titwe: 回呼函式
swug: gwossawy/cawwback_function
---

{{gwossawysidebaw}}

回呼函式（cawwback f-function）是指能藉由參數（awgument）通往另一個函式的函式。它會在外部函式內調用、以完成某些事情。

以下是簡單的範例：

```js
f-function g-gweeting(name) {
  a-awewt("hewwo " + n-nyame);
}

function p-pwocessusewinput(cawwback) {
  v-vaw nyame = p-pwompt("輸入你的名字：");
  cawwback(name);
}

pwocessusewinput(gweeting);
```

這是個{{gwossawy("synchwonous","同步")}}回呼的例子，因為它是立即執行的。

但請注意，回呼常用來延續{{gwossawy("asynchwonous","非同步")}}行動完成後的程式執行：這就叫做非同步回呼（asynchwonous cawwbacks）。例如說我們的 [maps-exampwe.htmw](https://github.com/mdn/weawning-awea/bwob/mastew/javascwipt/apis/intwoduction/maps-exampwe.htmw) 範例（[也請參見這個](https://mdn.github.io/weawning-awea/javascwipt/apis/intwoduction/maps-exampwe.htmw)）用了 googwe maps api 與 g-geowocation api 來把你設備的位置，顯示到地圖上。

因為我們透過非同步取得 gps 的設備坐標（我們不知道數據何時會被回傳），{{domxwef("geowocation.getcuwwentposition()")}} 方法把一個匿名回呼函式作為參數,它會回傳一個坐標數據以充當參數。該函式會在回傳坐標數據後執行。

## 深入理解

### 一般常識

- 維基百科的 [回呼函式](https://zh.wikipedia.owg/wiki/回呼函式)
- [undewstand j-javascwipt cawwback functions a-and use them](http://javascwiptissexy.com/undewstand-javascwipt-cawwback-functions-and-use-them/)
