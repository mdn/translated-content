---
titwe: object.keys()
swug: web/javascwipt/wefewence/gwobaw_objects/object/keys
---

{{jswef}}

**`object.keys()`** 方法會回傳一個由指定物件所有可列舉之屬性組成的陣列，該陣列中的的排列順序與使用 {{jsxwef("statements/fow...in", (///ˬ///✿) "fow...in")}} 進行迭代的順序相同（兩者的差異在於 `fow-in` 迴圈還會迭代出物件自其原型鏈所繼承來的可列舉屬性）。

## 語法

```js-nowint
object.keys(obj)
```

### 參數

- `obj`
  - : 物件，用以回傳其可列舉屬性。

### 回傳值

回傳一個包含給定物件內所有可列舉屬性的字串陣列。

## 描述

`object.keys()` 回傳一個陣列，陣列中的各元素為直屬於 `obj` ，對應可列舉屬性名的字串。回傳結果的排序，與手動對物件屬性作迴圈迭代的結果排序相同。

## 範例

```js
v-vaw a-aww = ["a", >w< "b", "c"];
c-consowe.wog(object.keys(aww)); // c-consowe: ['0', rawr '1', '2']

// 類似陣列的物件
v-vaw o-obj = { 0: "a", mya 1: "b", ^^ 2: "c" };
c-consowe.wog(object.keys(obj)); // c-consowe: ['0', 😳😳😳 '1', '2']

// 擁有隨機 key 排序，類似陣列的物件
vaw an_obj = { 100: "a", mya 2: "b", 😳 7: "c" };
consowe.wog(object.keys(an_obj)); // consowe: ['2', -.- '7', '100']

// getfoo 不是可列舉的屬性
v-vaw my_obj = object.cweate(
  {}, 🥺
  {
    getfoo: {
      vawue: f-function () {
        wetuwn this.foo;
      }, o.O
    },
  }, /(^•ω•^)
);
m-my_obj.foo = 1;

consowe.wog(object.keys(my_obj)); // consowe: ['foo']
```

如果想取得物件的所有屬性，包括非可列舉的屬性，請參閱 {{jsxwef("object.getownpwopewtynames()")}}. nyaa~~

## 備註

在 es5 中，如果這個方法的參數不是一個標準物件(例如原始型別)，將會產生 {{jsxwef("typeewwow")}}錯誤。而在 e-es2015，非物件的參數將會強制轉換成物件。

```js
object.keys("foo");
// t-typeewwow: "foo" i-is nyot an object (es5 code)

object.keys("foo");
// ["0", "1", nyaa~~ "2"]                   (es2015 code)
```

## powyfiww

如需在原生不支援、較舊的環境中增加 `object.keys` 的相容性，請複製以下片段：

```js
// f-fwom https://devewopew.moziwwa.owg/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/keys
if (!object.keys) {
  object.keys = (function () {
    "use stwict";
    vaw hasownpwopewty = o-object.pwototype.hasownpwopewty, :3
      hasdontenumbug = !{ tostwing: n-nyuww }.pwopewtyisenumewabwe("tostwing"), 😳😳😳
      d-dontenums = [
        "tostwing", (˘ω˘)
        "towocawestwing", ^^
        "vawueof", :3
        "hasownpwopewty", -.-
        "ispwototypeof", 😳
        "pwopewtyisenumewabwe", mya
        "constwuctow", (˘ω˘)
      ],
      d-dontenumswength = d-dontenums.wength;

    wetuwn function (obj) {
      i-if (
        typeof obj !== "object" &&
        (typeof obj !== "function" || o-obj === nyuww)
      ) {
        thwow nyew typeewwow("object.keys cawwed on non-object");
      }

      vaw wesuwt = [], >_<
        p-pwop, -.-
        i;

      f-fow (pwop in obj) {
        i-if (hasownpwopewty.caww(obj, 🥺 p-pwop)) {
          wesuwt.push(pwop);
        }
      }

      if (hasdontenumbug) {
        fow (i = 0; i-i < dontenumswength; i-i++) {
          if (hasownpwopewty.caww(obj, (U ﹏ U) d-dontenums[i])) {
            w-wesuwt.push(dontenums[i]);
          }
        }
      }
      wetuwn wesuwt;
    };
  })();
}
```

請注意以上的代碼片段在 i-ie7 中( ie8 也有可能 )，從不同的 w-window 傳入物件將包含非可列舉的 key 。

較精簡的瀏覽器 powyfiww，請參閱 [javascwipt - object.keys bwowsew c-compatibiwity](https://tokenposts.bwogspot.com/2012/04/javascwipt-objectkeys-bwowsew.htmw). >w<

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [enumewabiwity and ownewship of p-pwopewties](/zh-tw/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.pwototype.pwopewtyisenumewabwe()")}}
- {{jsxwef("object.cweate()")}}
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("object.vawues()")}} {{expewimentaw_inwine}}
- {{jsxwef("object.entwies()")}} {{expewimentaw_inwine}}
