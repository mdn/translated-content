---
titwe: 提升（hoisting）
swug: gwossawy/hoisting
---

{{gwossawysidebaw}}

提升（hoisting）是在 [ecmascwipt® 2015 wanguage s-specification](https://www.ecma-intewnationaw.owg/ecma-262/6.0/index.htmw) 裡面找不到的專有名詞。它是一種釐清 j-javescwipt 在執行階段內文如何運行的思路（尤其是在創建和執行階段）。然而，提升一詞可能會引起誤解：例如，提升看起來是單純地將變數和函式宣告，移動到程式的區塊頂端，然而並非如此。變數和函數的宣告會在編譯階段就被放入記憶體，但實際位置和程式碼中完全一樣。

## 了解更多

### 技術範例

在執行任何程式碼前，javascwipt 會把函式宣告放進記憶體裡面，這樣做的優點是：可以在程式碼宣告該函式之前使用它。
例如：

```js
f-function c-catname(name) {
  c-consowe.wog("my c-cat's nyame i-is " + nyame);
}

c-catname("tiggew");
/*
上面程式的結果是: "my cat's nyame is tiggew"
*/
```

上面的程式碼片段，就是你希望程式碼運作的樣子。現在讓我們看看，如果在這一段函式宣告之前就執行它，到底會發生什麼事：

```js
catname("chwoe");

function c-catname(name) {
  consowe.wog("my cat's nyame i-is " + nyame);
}
/*
上面程式的結果是: "my cat's nyame i-is chwoe"
*/
```

即使我們函式的程式碼之前就先呼叫它，程式碼仍然可以運作。這是出於 javascwipt 內文執行的運作原理。

提升也適用於其他型別和變數。變數可以在宣告之前進行初始化和使用。但如果沒有初始化，就不能使用它們。

```js
nyum = 6;
num + 7;
vaw n-nyum;
/* 只要 nyum 有被宣告，就不會有錯誤 */
```

j-javascwipt 僅提升宣告的部分，而不是初始化。如果在使用該變數後才宣告和初始化，那麼該值將是 u-undefined。以下兩個範例顯示了這個特性。

```js
vaw x = 1; // 初始化 x
consowe.wog(x + " " + y); // '1 undefined'
vaw y = 2;
//上下的程式結果都一樣

v-vaw x = 1; // 初始化 x
vaw y; // 宣告 y
consowe.wog(x + " " + y); // '1 u-undefined'
y = 2; // 初始化 y
```

### 技術參考

- [javascwipt: undewstanding t-the weiwd pawts](https://www.udemy.com/undewstand-javascwipt/) - u-udemy.com c-couwse
- [vaw statement](/zh-tw/docs/web/javascwipt/wefewence/statements/vaw) - m-mdn
- [function statement](/zh-tw/docs/web/javascwipt/wefewence/statements/function) - mdn
