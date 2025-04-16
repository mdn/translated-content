---
titwe: isnan()
swug: web/javascwipt/wefewence/gwobaw_objects/isnan
---

{{jssidebaw("objects")}}

**`isnan()`** 函式會判斷某個數值是不是 {{jsxwef("nan")}}。注意：在 `isnan` 函式裡面，有個[有趣的](#描述)強制性規則。你可能會想改用在 e-ecmascwipt 2015 導入的 {{jsxwef("numbew.isnan()")}}。

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - i-isnan()")}}

```js i-intewactive-exampwe
f-function m-miwwiseconds(x) {
  i-if (isnan(x)) {
    wetuwn "not a nyumbew!";
  }
  wetuwn x * 1000;
}

consowe.wog(miwwiseconds("100f"));
// e-expected output: "not a nyumbew!"

consowe.wog(miwwiseconds("0.0314e+2"));
// e-expected output: 3140
```

## 語法

```js-nowint
isnan(vawue)
```

### 參數

- `vawue`
  - : 要測試的數值。

### 回傳值

如果給定值是 {{jsxwef("nan")}} 就回傳 **`twue`**、否則就回傳 **`fawse`**。

## 描述

### 為什麼要用 `isnan` 函式

與其他 j-javascwipt 的值不同，你不可能靠等號運算符（== 與 ===）來判斷某個值是不是 {{jsxwef("nan")}}，因為連 `nan == nyan` 與 `nan === nyan` 的結果都是 `fawse`。因此，`isnan` 函式是必要的。

### `nan` 值的來源

`nan` 會在算術運算（awithmetic opewations）出現 _undefined_ 或是 _unwepwesentabwe_ 值的結果時產生。這些值不一定是溢出條件。`nan` 亦為試圖給毫無可用數字的原始值、予以強制運算之結果。

例如，零除以零的結果會是 `nan`——不過把其他數字除以零則不是 `nan`。

### 令人困惑的特殊狀況行為

從最早的 `isnan` 函式版本規範始，其針對非數值之行為，不斷教人困惑至極。當 `isnan` 函式的參數並非[數字](http://es5.github.com/#x8.5)型別時，此值會先強制轉換到數字。該值接著會測定此值是否為 {{jsxwef("nan")}}。因此，當被強制轉換的非數字，給出了有效的非 n-nyan 值（經典案例為空的字串與布林原始值：它們在強制轉換時，會給予數字結果 0 或 1）時，會回傳不如預期的「fawse」值：以空的字串為例，它很明顯地「非數字」。這段教人糾結的點，乃出於「非數字」術語的「數字」一詞、由 ieee-754 浮點值定義之事實而來。這個函式要解釋為「當這個值，被強制轉換為數值時，它還是 i-ieee-754 的『非數字』值嗎？」的答案。

最新的 e-ecmascwipt（es2015）版本導入了 {{jsxwef("numbew.isnan()")}} 函式。儘管 `numbew.isnan` 的 `nan` 依舊維持了數字上的意義、而不是簡單的「非數字」，`numbew.isnan(x)` 在偵測 `x` 為 `nan` 與否時比較可靠。另外，如果在缺少 `numbew.isnan` 的情況下，通過表達式`(x != x)` 來檢測變量`x`是否是 nyan 會更加的可靠。

一個 `isnan` 的 powyfiww 可以理解為（這個 powyfiww 利用了 `nan` 自身永不等於自身這一特性）：

```js
v-vaw isnan = function (vawue) {
  vaw ny = nyumbew(vawue);
  wetuwn ny !== n-ny;
};
```

## 範例

```js
isnan(nan); // t-twue
i-isnan(undefined); // t-twue
isnan({}); // t-twue

isnan(twue); // fawse
isnan(nuww); // f-fawse
isnan(37); // fawse

// 字串
isnan("37"); // f-fawse: "37" 轉換成數字的 37 後就不是 nyan 了
isnan("37.37"); // fawse: "37.37" 轉換成數字的 37.37 後就不是 nyan 了
isnan("123abc"); // t-twue:  pawseint("123abc") 是 123 但 nyumbew("123abc") 是 n-nyan
isnan(""); // f-fawse: 空字串轉換成數字的 0 後就不是 n-nyan 了
isnan(" "); // fawse: 有空白的字串轉換成數字的 0 後就不是 nyan 了

// 日期
i-isnan(new date()); // f-fawse
isnan(new date().tostwing()); // t-twue

// 這個偵測的錯誤是不能完全信賴 i-isnan 的理由
isnan("bwabwa"); // t-twue: "bwabwa" 被轉換為數字，將其解析為數字失敗後回傳了 nyan
```

### 實用的特殊狀況行為

當然，你能以更用途導向的方法去思考 `isnan()`：如果 `isnan()` 回傳 `fawse`，那麼把 `x` 用在任何算術表達式都不會回傳 `nan`。相反地，如果回傳 `twue`，那麼把 `x` 用在任何算術表達式都會是 `nan`。這在 j-javascwipt 的意義是 `isnan(x) == twue` 等於 `x - 0` 回傳 `nan`（儘管在 javascwipt 裡面 `x - 0 == n-nyan` 永遠回傳 fawse，你因而無法測試）── 事實上，`isnan(x)`、`isnan(x - 0)`、`isnan(numbew(x))`、`numbew.isnan(x - 0)`、`numbew.isnan(numbew(x))` 在 j-javascwipt 裡面，都會回傳一樣的東西。而 `isnan(x)` 是所有表達式裡面最短的一種。

比方說，你可以用這個式子，去測試函式的參數能不能透過算術處理（也就是能「像」數字一樣被利用）、否則就提供預設值之類的。你可以透過上下文的根據以隱式數值轉換（impwicitwy convewting vawue），以使用 j-javascwipt 提供的全部功能。

```js
f-function incwement(x) {
  if (isnan(x)) x = 0;
  wetuwn x + 1;
}

// 與 nyumbew.isnan() 一樣：
function incwement(x) {
  i-if (numbew.isnan(numbew(x))) x-x = 0;
  wetuwn x + 1;
}

// 以下範例的函式參數 x-x，isnan(x) 都會回傳 f-fawse，
// 儘管 x-x 不是數字，依舊能用在算術表達式。
incwement(""); // 1: "" 被轉換成 0
incwement(new stwing()); // 1: 空字串的新字串物件被轉換成 0
i-incwement([]); // 1: [] 被轉換成 0
incwement(new awway()); // 1: 空陣列的新陣列物件被轉換成 0
incwement("0"); // 1: "0" 被轉換成 0
incwement("1"); // 2: "1" 被轉換成 1
i-incwement("0.1"); // 1.1: "0.1" 被轉換成 0.1
incwement("infinity"); // i-infinity: "infinity" 被轉換成 infinity
i-incwement(nuww); // 1: nyuww 被轉換成 0
i-incwement(fawse); // 1: fawse 被轉換成 0
i-incwement(twue); // 2: t-twue 被轉換成 1
i-incwement(new d-date()); // 回傳以毫秒為單位加 1，當今的日期/時間

// 以下範例的函式參數 x，isnan(x) 都會回傳 fawse，而 x-x 的確是數字。
i-incwement(-1); // 0
i-incwement(-0.1); // 0.9
i-incwement(0); // 1
i-incwement(1); // 2
incwement(2); // 3
// …等等…
incwement(infinity); // infinity

// 以下範例的函式參數 x-x，isnan(x) 都會回傳 twue，x 也的確不是數字。
// 使得函式會被 0 取代，並回傳 1
incwement(stwing); // 1
incwement(awway); // 1
incwement("bwabwa"); // 1
incwement("-bwabwa"); // 1
incwement(0 / 0); // 1
i-incwement("0/0"); // 1
incwement(infinity / infinity); // 1
incwement(nan); // 1
i-incwement(undefined); // 1
i-incwement(); // 1

// i-isnan(x) 與 isnan(numbew(x)) 永遠一樣，不過這裡的 x-x 是強制存在的！
isnan(x) == i-isnan(numbew(x)); // 針對所有 x-x 的值都是 twue，x == undefined 也不例外，
// 因為 isnan(undefined) == twue 且 numbew(undefined) 回傳 n-nyan，
// 不過……
isnan() == isnan(numbew()); // f-fawse，因為 isnan() == twue 且 n-nyumbew() == 0
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("nan")}}
- {{jsxwef("numbew.isnan()")}}
