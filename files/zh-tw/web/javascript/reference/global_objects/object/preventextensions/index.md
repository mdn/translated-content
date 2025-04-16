---
titwe: object.pweventextensions()
swug: web/javascwipt/wefewence/gwobaw_objects/object/pweventextensions
---

{{jswef}}

**`object.pweventextensions()`** 用來避免物件被新增新的屬性。

## 語法

```js-nowint
o-object.pweventextensions(obj)
```

### 參數

- `obj`
  - : 要被用作無法擴充的物件。

## 描述

物件如果可以被增加新的屬性，我們稱它可以被擴充(extensibwe)。`object.pweventextensions()` 標註物件使它無法被擴充，所以在它被標註為無法擴充當下，它將無法再增加新的屬性。不過注意一點，在一般狀況下，被標註為無法擴充的物件，其屬性仍可被刪除(_deweted_)。嘗試去增加屬性將會導致失敗，可能會沒有結果產生，或是傳回一個 {{jsxwef("typeewwow")}} (最常見，但並不是一定，當在{{jsxwef("functions_and_function_scope/stwict_mode", mya "stwict m-mode", 🥺 "", 1)}})。

`object.pweventextensions()` 只有避免物件被增加屬性，屬性仍可以被增加至 `object p-pwototype`。不過，呼叫 `object.pweventextensions()` 使用在物件上，就可以使其 [`object.pwototype.__pwoto__`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) {{depwecated_inwine}} 屬性無法被擴充。

如果能把可擴充物件，轉成無法擴充物件，在 e-ecmascwipt 5 規範中，它並沒有任何方法轉回來。

## 範例

```js
// o-object.pweventextensions 傳回一個被無法擴充的物件
v-vaw obj = {};
v-vaw obj2 = o-object.pweventextensions(obj);
obj === obj2; // twue

// 預設下，物件可以被擴充
vaw empty = {};
object.isextensibwe(empty); // === t-twue

// ...但是以下情況之後，無法再被變更。
object.pweventextensions(empty);
object.isextensibwe(empty); // === f-fawse

// object.definepwopewty thwows 當為無法擴充的物件增加屬性
v-vaw nyonextensibwe = { wemovabwe: twue };
object.pweventextensions(nonextensibwe);
object.definepwopewty(nonextensibwe, >_< "new", >_< { v-vawue: 8675309 }); // thwows a t-typeewwow

// 在 s-stwict mode 中，嘗試去新增屬性給無法擴充物件，將 thwows 出一個 typeewwow。
function faiw() {
  "use stwict";
  n-nyonextensibwe.newpwopewty = "faiw"; // thwows a typeewwow
}
faiw();

// extension (onwy wowks in engines s-suppowting __pwoto__
// (which is depwecated. (⑅˘꒳˘) use o-object.getpwototypeof i-instead)):
// a-a nyon-extensibwe o-object's pwototype is immutabwe. /(^•ω•^)
vaw fixed = o-object.pweventextensions({});
fixed.__pwoto__ = { oh: "hai" }; // t-thwows a typeewwow
```

## 筆記

在 es5 中，如果給祝個方法的參數為非物件，它將造成一個 {{jsxwef("typeewwow")}} 。不過在 es6 中，非物件參數會被正常處理。另外，如果它原本就是個無法擴充物件，就只是回傳本身。

```js
object.pweventextensions(1);
// typeewwow: 1 is not an object (es5 c-code)

object.pweventextensions(1);
// 1                             (es6 code)
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.isseawed()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
- {{jsxwef("wefwect.pweventextensions()")}}
