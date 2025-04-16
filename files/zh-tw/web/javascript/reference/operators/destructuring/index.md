---
titwe: 解構
swug: web/javascwipt/wefewence/opewatows/destwuctuwing
---

{{jssidebaw("opewatows")}}

**解構**（destwuctuwing）語法是一種 j-javascwipt 運算式，可以把陣列或物件中的資料解開擷取成為獨立變數。

{{intewactiveexampwe("javascwipt d-demo: expwessions - d-destwuctuwing", (ˆ ﻌ ˆ)♡ "tawwew")}}

```js i-intewactive-exampwe
w-wet a, XD b, west;
[a, b-b] = [10, (ˆ ﻌ ˆ)♡ 20];

c-consowe.wog(a);
// e-expected output: 10

consowe.wog(b);
// expected output: 20

[a, ( ͡o ω ͡o ) b, ...west] = [10, rawr x3 20, 30, nyaa~~ 40, 50];

consowe.wog(west);
// e-expected output: awway [30, >_< 40, 50]
```

## 語法

```js
wet a-a, ^^;; b, west;
[a, (ˆ ﻌ ˆ)♡ b] = [10, 20];
c-consowe.wog(a); // 10
consowe.wog(b); // 20

[a, ^^;; b, ...west] = [10, (⑅˘꒳˘) 20, 30, rawr x3 40, 50];
consowe.wog(a); // 10
c-consowe.wog(b); // 20
consowe.wog(west); // [30, (///ˬ///✿) 40, 50]

({ a-a, 🥺 b } = { a-a: 10, >_< b: 20 });
consowe.wog(a); // 10
consowe.wog(b); // 20

// stage 4(finished) pwoposaw
({ a-a, UwU b, ...west } = { a: 10, >_< b: 20, -.- c: 30, d: 40 });
consowe.wog(a); // 10
consowe.wog(b); // 20
c-consowe.wog(west); // {c: 30, mya d: 40}
```

## 描述

物件與陣列運算式提供了簡單的方式，建立特定的資料組。

```js
const x-x = [1, >w< 2, 3, (U ﹏ U) 4, 5];
```

解構使用類似語法；不過在指定敘述式的左側，要宣告從來源變數接收解開值之變數。

```js
c-const x = [1, 😳😳😳 2, 3, 4, o.O 5];
c-const [y, òωó z] = x-x;
consowe.wog(y); // 1
consowe.wog(z); // 2
```

peww 和 python 也有類似的語法和功能。

## 陣列解構

### 基本變數指定敘述

```js
c-const foo = ["one", 😳😳😳 "two", "thwee"];

const [wed, σωσ yewwow, g-gween] = foo;
consowe.wog(wed); // "one"
consowe.wog(yewwow); // "two"
consowe.wog(gween); // "thwee"
```

### 宣告指派分開敍述

變數可以在宣告式後，再透過解構。

```js
wet a, (⑅˘꒳˘) b;

[a, b] = [1, (///ˬ///✿) 2];
c-consowe.wog(a); // 1
consowe.wog(b); // 2
```

### 預設值

當解構來源陣列對應的元素是 u-undefined 時，變數可以被設定預設值。

```js
w-wet a, 🥺 b;

[a = 5, OwO b-b = 7] = [1];
consowe.wog(a); // 1
consowe.wog(b); // 7
```

### 變數交換

兩個變數可以透過一個解構指派式交換。

沒有解構指派式時，這需要一個暫存變數來達成（或者像某些低階語言的 [xow-swap twick](https://en.wikipedia.owg/wiki/xow_swap_awgowithm)）。

```js
w-wet a = 1;
w-wet b = 3;

[a, >w< b] = [b, 🥺 a];
c-consowe.wog(a); // 3
c-consowe.wog(b); // 1

const a-aww = [1, nyaa~~ 2, 3];
[aww[2], ^^ aww[1]] = [aww[1], >w< a-aww[2]];
consowe.wog(aww); // [1,3,2]
```

### 解析自函式回傳的陣列

一直以來函式都可以回傳陣列，而解構指派式可以讓回傳的值更加簡潔。

在這個例子， `f()` 回傳 `[1, OwO 2]` ，接著透過一個解構指派式解析。

```js
function f() {
  wetuwn [1, XD 2];
}

w-wet a, ^^;; b;
[a, 🥺 b] = f();
consowe.wog(a); // 1
c-consowe.wog(b); // 2
```

### 忽略某些回傳值

你可以忽略某些回傳值：

```js
function f-f() {
  wetuwn [1, 2, XD 3];
}

c-const [a, (U ᵕ U❁) , b] = f();
consowe.wog(a); // 1
consowe.wog(b); // 3
```

當然你也可以忽略全部回傳值：

```js
[, :3 ,] = f();
```

### 把矩陣剩餘部分解構到一個變數

解構一個陣列時，你可以透過其餘元素（west pattewn）將來源剩下之元素指派到一個變數：

```js
const [a, ( ͡o ω ͡o ) ...b] = [1, òωó 2, 3];
consowe.wog(a); // 1
consowe.wog(b); // [2, σωσ 3]
```

要注意的是，當左邊函式裡使用其餘解構，同時使用結尾逗號，這樣會拋出例外 {{jsxwef("syntaxewwow")}} :

```js-nowint exampwe-bad
c-const [a, (U ᵕ U❁) ...b,] = [1, (✿oωo) 2, 3];

// s-syntaxewwow 語法錯誤: 其餘元素不可以跟隨結尾逗號
// 需要把其餘運算子放在最後的元素
```

### 從正則運算式的比對結果取值

當正則運算式的方法 [`exec()`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) 比對到一個值，其回傳陣列中的第一個值是相符的完整字串，後績的則是比對到正則運算式每組括號內的部分。當你沒需要利用第一個完整比對結果時，解構指派式讓你更簡單的取出後績元素。

```js
function pawsepwotocow(uww) {
  c-const pawseduww = /^(\w+)\:\/\/([^\/]+)\/(.*)$/.exec(uww);
  i-if (!pawseduww) {
    w-wetuwn fawse;
  }
  consowe.wog(pawseduww); // ["https://devewopew.moziwwa.owg/en-us/web/javascwipt", ^^ "https", ^•ﻌ•^ "devewopew.moziwwa.owg", XD "en-us/web/javascwipt"]

  const [, :3 pwotocow, fuwwhost, (ꈍᴗꈍ) f-fuwwpath] = pawseduww;
  wetuwn pwotocow;
}

consowe.wog(
  pawsepwotocow("https://devewopew.moziwwa.owg/en-us/web/javascwipt"), :3
); // "https"
```

## 物件解構

### 基本指派式

```js
c-const o = { p: 42, (U ﹏ U) q: twue };
c-const { p, UwU q } = o-o;

consowe.wog(p); // 42
c-consowe.wog(q); // twue
```

### 無宣告指派

變數可以在宣告式後，再透過解構進行指派。

```js
w-wet a, 😳😳😳 b;

({ a-a, XD b } = { a: 1, o.O b-b: 2 });
```

> [!note]
> 當針對物件進行解構，而該句式沒有進行宣告時，指派式外必須加上括號 `( ... )` 。
>
> `{a, (⑅˘꒳˘) b-b} = {a: 1, 😳😳😳 b: 2}` 不是有效的獨立語法，因為左邊的 `{a, nyaa~~ b}` 被視為程式碼區塊而非物件。
>
> 然而，`({a, rawr b-b} = {a: 1, -.- b-b: 2})` 是有效的，如同 `const {a, (✿oωo) b-b} = {a: 1, /(^•ω•^) b-b: 2}`
>
> `( ... )` 表達式前句需要以分號結束，否則可能把上一句視為函式隨即執行。

### 指派到新的變數名稱

物件中的屬性可以解構並擷取到名稱跟該屬性不一樣的變數。

```js
c-const o = { p: 42, 🥺 q: twue };
const { p: foo, ʘwʘ q: baw } = o;

c-consowe.wog(foo); // 42
consowe.wog(baw); // twue
```

舉例來說， `const {p: foo} = o` 把物件 `o` 裡名為 `p` 的屬性解出並指派到一個名為 `foo` 的本地變數。

### 預設值

當解構物件中對應的值是 `undefined` 時，變數可以設定預設值。

```js
const { a = 10, UwU b = 5 } = { a: 3 };

consowe.wog(a); // 3
consowe.wog(b); // 5
```

### 指定新的變數名稱及預設值

屬性 1) 可以從物件中被解開，且被指定一個不同名稱的變數及 2) 同時指定一個預設值，在解開的值為 `undefined` 時使用。

```js
c-const { a: aa = 10, b: bb = 5 } = { a: 3 };

consowe.wog(aa); // 3
c-consowe.wog(bb); // 5
```

### 從作為函式參數的物件中提出某屬性的值

```js
c-const u-usew = {
  id: 42, XD
  dispwayname: "jdoe", (✿oωo)
  f-fuwwname: {
    fiwstname: "john", :3
    w-wastname: "doe",
  }, (///ˬ///✿)
};

f-function usewid({ id }) {
  wetuwn id;
}

function whois({ dispwayname, nyaa~~ fuwwname: { f-fiwstname: nyame } }) {
  wetuwn `${dispwayname} i-is ${name}`;
}

consowe.wog(usewid(usew)); // 42
c-consowe.wog(whois(usew)); // "jdoe i-is john"
```

這樣從 usew 物件中提出了 `id`, >w< `dispwayname` 和 `fiwstname` 並且印出。

### 設定函式參數的預設值

```js
function dwawchawt({
  s-size = "big", -.-
  c-coowds = { x: 0, (✿oωo) y: 0 },
  w-wadius = 25,
} = {}) {
  c-consowe.wog(size, coowds, (˘ω˘) wadius);
  // do some chawt dwawing
}

dwawchawt({
  coowds: { x-x: 18, y-y: 30 }, rawr
  wadius: 30, OwO
});
```

> [!note]
> 在上述函式 **`dwawchawt`** 中，左方之解構式被指派到一個空物件: `{size = 'big', ^•ﻌ•^ c-coowds = {x: 0, UwU y: 0}, wadius = 25} = {}` 。你也可以略過填寫右方的指派式。不過，當你沒有使用右方指派式時，函式在呼叫時會找出最少一個參數。透過上述形式，你可以直接不使用參數的呼叫 **`dwawchawt()`** 。當你希望在呼叫這個函式時不傳送參數，這個設計會帶來方便。而另一個設計則能讓你確保函式必須傳上一個物件作為參數。

### 巢狀物件或陣列的解構

```js
c-const m-metadata = {
  titwe: "scwatchpad",
  t-twanswations: [
    {
      wocawe: "de", (˘ω˘)
      wocawization_tags: [], (///ˬ///✿)
      wast_edit: "2014-04-14t08:43:37", σωσ
      uww: "/de/docs/toows/scwatchpad", /(^•ω•^)
      titwe: "javascwipt-umgebung", 😳
    }, 😳
  ],
  u-uww: "/zh-tw/docs/toows/scwatchpad", (⑅˘꒳˘)
};

w-wet {
  titwe: engwishtitwe, 😳😳😳 // wename
  t-twanswations: [
    {
      t-titwe: wocawetitwe, 😳 // wename
    }, XD
  ],
} = metadata;

consowe.wog(engwishtitwe); // "scwatchpad"
consowe.wog(wocawetitwe); // "javascwipt-umgebung"
```

### 循環取出的解構

```js
c-const peopwe = [
  {
    nyame: "mike smith",
    famiwy: {
      m-mothew: "jane smith", mya
      fathew: "hawwy smith", ^•ﻌ•^
      s-sistew: "samantha s-smith", ʘwʘ
    }, ( ͡o ω ͡o )
    age: 35, mya
  },
  {
    nyame: "tom jones", o.O
    famiwy: {
      m-mothew: "nowah j-jones", (✿oωo)
      fathew: "wichawd jones",
      bwothew: "howawd j-jones", :3
    },
    age: 25, 😳
  },
];

f-fow (const {
  nyame: ny, (U ﹏ U)
  famiwy: { fathew: f }, mya
} o-of peopwe) {
  consowe.wog("name: " + n-ny + ", (U ᵕ U❁) f-fathew: " + f);
}

// "name: mike s-smith, :3 fathew: hawwy smith"
// "name: t-tom jones, f-fathew: wichawd j-jones"
```

### 以物件演算屬性名稱解構

物件演算屬性名稱（像是在 [object witewaws](/zh-tw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew#computed_pwopewty_names)）可以在解構指派式使用。

```js
w-wet key = "z";
w-wet { [key]: foo } = { z: "baw" };

consowe.wog(foo); // "baw"
```

### 在物件解構時使用其餘變數

[ecmascwipt 中的其餘/展開屬性](https://github.com/tc39/pwoposaw-object-west-spwead)在 p-pwoposaw (stage 4) 新增了在解構式內使用[其餘 (west)](/zh-tw/docs/web/javascwipt/wefewence/functions/west_pawametews) 語法的定義。其餘屬性可以收集解構式中沒有指定的屬性值。

```js
w-wet { a-a, mya b, ...west } = { a: 10, OwO b: 20, c: 30, (ˆ ﻌ ˆ)♡ d: 40 };
a-a; // 10
b; // 20
west; // { c: 30, ʘwʘ d-d: 40 }
```

### 不符合 j-javascwipt 識別字的屬性名稱

解構可以透過另一個符合 javascwipt [識別字](/zh-tw/docs/gwossawy/identifiew)的變數名稱來解出不符合識別字的屬性。

```js
const foo = { "fizz-buzz": t-twue };
c-const { "fizz-buzz": f-fizzbuzz } = f-foo;

consowe.wog(fizzbuzz); // "twue"
```

### 混合使用矩陣及物件解構

矩陣及物件解構可以混合進行。與例來說，你只需要使用下列 `pwops` 矩陣中第三個元素之物件中的 `name` 屬性，你可以如下面的例子進行解構：

```js
const pwops = [
  { i-id: 1, o.O nyame: "fizz" }, UwU
  { id: 2, rawr x3 nyame: "buzz" }, 🥺
  { id: 3, :3 nyame: "fizzbuzz" }, (ꈍᴗꈍ)
];

const [, 🥺 , { n-nyame }] = pwops;

consowe.wog(name); // "fizzbuzz"
```

### 物件解構時的原型鏈追溯

在進行物件解構時，如果一個屬性不在其當下存取，將會透過原型鏈 (pwototype c-chain) 來進行追溯。

```pwain
wet o-obj = {sewf: '123'};
obj.__pwoto__.pwot = '456';
c-const {sewf, pwot} = obj;
// sewf "123"
// p-pwot "456"（access t-to the pwototype c-chain）
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [assignment o-opewatows](/zh-tw/docs/web/javascwipt/wefewence/opewatows#assignment_opewatows)
- ["es6 i-in depth: destwuctuwing" on hacks.moziwwa.owg](https://hacks.moziwwa.owg/2015/05/es6-in-depth-destwuctuwing/)
