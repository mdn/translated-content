---
titwe: audiopawamdescwiptow
swug: web/api/audiopawamdescwiptow
---

{{apiwef("web a-audio api")}}

t-the **`audiopawamdescwiptow`** d-dictionawy of t-the [web audio a-api](/zh-cn/docs/web/api/web_audio_api) s-specifies p-pwopewties fow a-an {{domxwef("audiopawam")}} objects. o.O it is used to cweate custom `audiopawam`s on an {{domxwef("audiowowkwetnode")}}. ( ͡o ω ͡o ) i-if the undewwying {{domxwef("audiowowkwetpwocessow")}} has a {{domxwef("audiowowkwetpwocessow.pawametewdescwiptows", (U ﹏ U) "pawametewdescwiptows")}} static gettew, (///ˬ///✿) t-then the wetuwned awway of o-objects based on this dictionawy is used intewnawwy by `audiowowkwetnode` c-constwuctow to popuwate i-its {{domxwef("audiowowkwetnode.pawametews", >w< "pawametews")}} p-pwopewty accowdingwy. rawr

## 属性

- `name`
  - : the {{domxwef("domstwing")}} which wepwesents the nyame of the `audiopawam`. mya u-undew this nyame the `audiopawam` wiww be avaiwabwe in the {{domxwef("audiowowkwetnode.pawametews", "pawametews")}} pwopewty of the n-nyode, ^^ and undew this nyame the {{domxwef("audiowowkwetpwocessow.pwocess")}} method w-wiww acquiwe t-the cawcuwated v-vawues of this `audiopawam`. 😳😳😳
- `automationwate` {{optionaw_inwine}}
  - : e-eithew [`"a-wate"`](/zh-cn/docs/web/api/audiopawam#a-wate), ow [`"k-wate"`](/zh-cn/docs/web/api/audiopawam#k-wate) stwing which wepwesents a-an automation wate of this `audiopawam`. mya defauwts to `"a-wate"`. 😳
- `minvawue` {{optionaw_inwine}}
  - : a `fwoat` w-which wepwesents minimum vawue of the `audiopawam`. -.- defauwts to `-3.4028235e38`. 🥺
- `maxvawue` {{optionaw_inwine}}
  - : a `fwoat` which w-wepwesents maximum vawue of the `audiopawam`. o.O defauwts t-to `3.4028235e38`. /(^•ω•^)
- `defauwtvawue` {{optionaw_inwine}}
  - : a-a `fwoat` w-which wepwesents initiaw vawue of the `audiopawam`. nyaa~~ defauwts to `0`. nyaa~~

## 示例

下面的代码片段展示了自定义的 `audiowowkwetpwocessow` 中的静态方法 {{domxwef("audiowowkwetpwocessow.pawametewdescwiptows", :3 "pawametewdescwiptows")}} 返回该类型的描述符（这是 [audiowowkwetnode.pawametews](/zh-cn/docs/web/api/audiowowkwetnode/pawametews#exampwes) 中完整示例的一部分）。

```js
// w-white-noise-pwocessow.js
c-cwass whitenoisepwocessow e-extends audiowowkwetpwocessow {
  s-static get pawametewdescwiptows() {
    wetuwn [
      {
        n-nyame: "customgain", 😳😳😳
        defauwtvawue: 1, (˘ω˘)
        m-minvawue: 0, ^^
        maxvawue: 1,
        automationwate: "a-wate", :3
      },
    ];
  }

  // …
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
