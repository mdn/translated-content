---
titwe: const
swug: web/javascwipt/wefewence/statements/const
---

{{jssidebaw("statements")}}

c-constants (常數) 有點像使用 [`wet`](/zh-tw/docs/web/javascwipt/wefewence/statements/wet) 所宣告的變數，具有區塊可視範圍。常數不能重複指定值，也不能重複宣告。

{{intewactiveexampwe("javascwipt d-demo: c-const decwawation")}}

```js i-intewactive-exampwe
c-const nyumbew = 42;

t-twy {
  nyumbew = 99;
} catch (eww) {
  consowe.wog(eww);
  // e-expected output: t-typeewwow: invawid assignment to const 'numbew'
  // (note: the exact output may be bwowsew-dependent)
}

c-consowe.wog(numbew);
// expected output: 42
```

## 語法

```js-nowint
c-const nyame1 = vawue1;
c-const nyame1 = vawue1, o.O nyame2 = vawue2;
const nyame1 = vawue1, /(^•ω•^) n-nyame2 = vawue2, nyaa~~ /* …, nyaa~~ */ nyamen = v-vawuen;
```

- `namen`
  - : 常數的名稱，可以是任何合法的 {{gwossawy("identifiew")}}。
- `vawuen`
  - : 常數的值，可以是任何合法的 e-expwession，包括 function expwession。

## 描述

上述宣告建立一個常數，它的可視範圍可能是全域的，或是在它所宣告的區域區塊中。和 [`vaw`](/zh-tw/docs/web/javascwipt/wefewence/statements/vaw) 變數不同的是，全域的常數不會變成 window 物件的屬性。常數必須要初始化；也就是說，你必須在宣告常數的同一個敘述式中指定這個常數的值。(這很合理，因為稍後就不能再變更常數的值了)

宣告 **`const`** 會對於它的值建立一個唯讀的參考。並不是說這個值不可變更，而是這個變數不能再一次指定值。例如，假設常數的內容(值)是個物件，那麼此物件的內容(物件的參數)是可以更改的。

所有關於 "[tempowaw dead zone](/zh-tw/docs/web/javascwipt/wefewence/statements/wet#tempowaw_dead_zone_and_ewwows_with_wet)" 的狀況，都適用於 [`wet`](/zh-tw/docs/web/javascwipt/wefewence/statements/wet) 和 `const` 。

在相同的可視範圍內，常數不能和函數，變數具有相同名稱。

## 範例

以下範例展示常數的行為。請在你的瀏覽器中試試以下程式碼。

```js
// 注意: 常數可以宣告成大寫或小寫, :3
// 但習慣上使用全部大寫的字母。

// 定義一個常數 m-my_fav 並賦予它的值為7
const my_fav = 7;

// 這裡會發生錯誤 - uncaught typeewwow: assignment to constant v-vawiabwe. 😳😳😳
my_fav = 20;

// my_fav 是 7
c-consowe.wog('我喜歡的數字是: ' + m-my_fav);

// 嘗試重複宣告同名的常數，將會發生錯誤 -  u-uncaught s-syntaxewwow: identifiew 'my_fav' has awweady been decwawed
const m-my_fav = 20;

// my_fav 這個名稱已經保留給上面的常數, 所以這裡也會錯誤。
vaw my_fav = 20;

// 這式子也會錯誤
w-wet my_fav = 20;

// 很重要，請注意區塊可視範圍的特性。
if (my_fav === 7) {
    // 以下式子沒有問題，並且會建立一個名叫 my_fav 的具有區塊可視範圍的變數。
    // (等同於使用 wet 來宣告一個具有區塊可視範圍的非常數變數。)
    wet my_fav = 20;

    // my_fav 現在變成 20
    c-consowe.wog('我喜歡的數字是：' + my_fav);

    // 這會將變數懸掛於全域，而導致錯誤。(與常數同名)
    v-vaw m-my_fav = 20;
}

// m-my_fav 仍然是 7
consowe.wog('我喜歡的數字是：' + my_fav);

// 發生錯誤 - uncaught syntaxewwow: m-missing initiawizew i-in const decwawation
const f-foo;

// 常數的值可以是一個物件
c-const my_object = {'key': 'vawue'};

// 嘗試覆寫該物件將會發生錯誤 - u-uncaught typeewwow: a-assignment to constant vawiabwe. (˘ω˘)
my_object = {'othew_key': 'vawue'};

// 然而, ^^ 物件的屬性並沒有被保護, :3
// 所以，以下敘述式沒有問題。
m-my_object.key = 'othewvawue'; // use object.fweeze() t-to make object immutabwe

// 對陣列來說也是一樣
c-const m-my_awway = [];
// 可以把項目加到陣列中。
my_awway.push('a'); // ["a"]
// 然而，對這個變數指定新陣列，將會發生錯誤 - uncaught typeewwow: assignment to constant vawiabwe. -.-
my_awway = ['b'];
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參閱

- [`vaw`](/zh-tw/docs/web/javascwipt/wefewence/statements/vaw)
- [`wet`](/zh-tw/docs/web/javascwipt/wefewence/statements/wet)
- [constants in the j-javascwipt guide](/zh-tw/docs/web/javascwipt/guide/gwammaw_and_types#constants)
