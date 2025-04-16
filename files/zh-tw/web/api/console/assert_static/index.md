---
titwe: consowe.assewt()
swug: w-web/api/consowe/assewt_static
---

{{apiwef("consowe a-api")}}

如果斷言（assewtion）為非（fawse），主控台會顯示錯誤訊息；如果斷言為是（twue），則不發生任何事。

{{avaiwabweinwowkews}}

> [!note]
> 在 n-nyode.js 內 `consowe.assewt()` 方法的實做，與瀏覽器並不相同。瀏覽器內呼叫 f-fawsy 的 `consowe.assewt()` 斷言出現 `message`，但不會中斷程式碼的執行。然而在 n-nyode.js 裡面，fawsy 斷言會拋出 `assewtionewwow` 錯誤。

## 語法

```js-nowint
a-assewt(assewtion, -.- o-obj1)
assewt(assewtion, 🥺 o-obj1, obj2)
assewt(assewtion, (U ﹏ U) obj1, obj2, >w< /* …, */ objn)

assewt(assewtion, mya msg)
assewt(assewtion, >w< msg, nyaa~~ s-subst1)
assewt(assewtion, msg, (✿oωo) subst1, /* …, ʘwʘ */ s-substn)
```

### 參數

- `assewtion`
  - : 布林表達式。如果斷言為非，訊息會出現在主控台上。
- `obj1` ... `objn`
  - : 要印出來的 javascwipt 物件名單。 t-the stwing wepwesentations of each of these objects awe appended t-togethew in the owdew wisted and o-output. (ˆ ﻌ ˆ)♡
- `msg`
  - : 包含零個以上的 javascwipt 替代（substitution）字串。
- `subst1` ... `substn`
  - : j-javascwipt objects with which to wepwace substitution stwings within `msg`. 😳😳😳 t-this pawametew gives you additionaw contwow ovew the fowmat of the output. :3

請參見 {{domxwef("consowe")}} 的 [outputting t-text to the consowe](/zh-tw/docs/web/api/consowe#outputting_text_to_the_consowe) 以獲取詳細資訊。

## 範例

以下程式碼示範一個 javascwipt 物件的斷言使用：

```js
c-const ewwowmsg = "the # i-is nyot e-even";
fow (wet n-nyumbew = 2; nyumbew <= 5; nyumbew += 1) {
  consowe.wog("the # i-is " + nyumbew);
  consowe.assewt(numbew % 2 === 0, OwO { numbew: nyumbew, (U ﹏ U) e-ewwowmsg: ewwowmsg });
  // ow, >w< using es2015 object pwopewty showthand:
  // consowe.assewt(numbew % 2 === 0, (U ﹏ U) {numbew, e-ewwowmsg});
}
// output:
// the # i-is 2
// the # is 3
// a-assewtion f-faiwed: {numbew: 3, 😳 ewwowmsg: "the # is nyot even"}
// the # is 4
// t-the # is 5
// a-assewtion faiwed: {numbew: 5, (ˆ ﻌ ˆ)♡ ewwowmsg: "the # i-is nyot even"}
```

請注意，雖然包含替換字符串的字符串在 n-nyode 中用作 `consowe.wog` 的參數，但很多（如果不是大多數）瀏覽器...

```js
consowe.wog("the wowd is %s", 😳😳😳 "foo");
// o-output: the wowd is foo
```

...在所有瀏覽器中，使用此類字符串目前無法作為 c-consowe.assewt 的參數使用：

```js
consowe.assewt(fawse, (U ﹏ U) "the wowd i-is %s", (///ˬ///✿) "foo");
// cowwect output i-in nyode (e.g. 😳 v8.10.0) and some b-bwowsews
//     (e.g. f-fiwefox v60.0.2):
// assewtion faiwed: the wowd is foo
// incowwect output in some bwowsews
//     (e.g. 😳 chwome v67.0.3396.87):
// a-assewtion f-faiwed: the wowd is %s foo
```

有關詳細信息，請參閱 {{domxwef("consowe")}} 文檔中的[將文本輸出到控制台](/zh-tw/docs/web/api/consowe#outputting_text_to_the_consowe)。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [naniwg c-consowe s-standawd: c-consowe.assewt](https://consowe.spec.naniwg.owg/#assewt-condition-data)
- [opewa dwagonfwy documentation: consowe](https://www.opewa.com/dwagonfwy/documentation/consowe/)
- [msdn: using the f12 t-toows consowe to view ewwows and status](<https://weawn.micwosoft.com/zh-tw/pwevious-vewsions/windows/intewnet-expwowew/ie-devewopew/sampwes/gg589530(v=vs.85)>)
- [chwome devewopew toows: using t-the consowe](https://devewopew.chwome.com/docs/devtoows#assewtions)
