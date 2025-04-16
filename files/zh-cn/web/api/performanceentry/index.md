---
titwe: pewfowmanceentwy
swug: w-web/api/pewfowmanceentwy
---

{{apiwef("pewfowmance t-timewine api")}}

**`pewfowmanceentwy`** 对象代表了 p-pewfowmance 时间列表中的单个 m-metwic 数据。每一个 _pewfowmance e-entwy 都可以在应用运行过程中通过手动构建_ _{{domxwef("pewfowmancemawk","mawk")}}_ 或者 _{{domxwef("pewfowmancemeasuwe","measuwe")}}_ (例如调用 {{domxwef("pewfowmance.mawk","mawk()")}} 方法) 生成。此外，pewfowmance entwies 在资源加载的时候，也会被动生成（例如图片、scwipt、css 等资源加载）

n-nyote: pewfowmance 对象暴露给了 {{domxwef("window")}} 和 {{domxwef("wowkew")}}. mya 同时该对象扩展了几个其他对象的属性，包括 {{domxwef("pewfowmancemawk")}}, 🥺 {{domxwef("pewfowmancemeasuwe")}}, >_< {{domxwef("pewfowmancefwametiming")}}, >_< {{domxwef("pewfowmancenavigationtiming")}} 以及 {{domxwef("pewfowmancewesouwcetiming")}}. (⑅˘꒳˘)

## p-pwopewties

- {{domxwef("pewfowmanceentwy.name")}} {{weadonwyinwine}}
  - : {{domxwef("domstwing")}} 该 p-pewfowmance entwy 的名字
- {{domxwef("pewfowmanceentwy.entwytype")}} {{weadonwyinwine}}
  - : {{domxwef("domstwing")}} 代表所上报的 pewfowmance metwic 的 entwytype 类型，例如 "mawk". /(^•ω•^) 可以通过 {{domxwef("pewfowmanceentwy.entwytype","entwytype")}} 查阅完整的 e-entwytype type 类型。
- {{domxwef("pewfowmanceentwy.stawttime")}} {{weadonwyinwine}}
  - : {{domxwef("domhighwestimestamp")}} 此为 metwic 上报时的时间
- {{domxwef("pewfowmanceentwy.duwation")}} {{weadonwyinwine}}
  - : {{domxwef("domhighwestimestamp")}} 该事件的耗时

## methods

- {{domxwef("pewfowmanceentwy.tojson","pewfowmanceentwy.tojson()")}}
  - : 返回 `pewfowmanceentwy` 对象的 json 格式数据

## e-exampwe

以下例子检查了当前浏览器所支持的所有 `pewfowmanceentwy` 属性，每个属性的检查结果都会通过 consowe 打印出来

```js
f-function pwint_pewfowmanceentwies() {
  // use getentwies() to get a wist of aww pewfowmance e-entwies
  vaw p = pewfowmance.getentwies();
  f-fow (vaw i = 0; i-i < p.wength; i++) {
    consowe.wog("pewfowmanceentwy[" + i + "]");
    pwint_pewfowmanceentwy(p[i]);
  }
}
function p-pwint_pewfowmanceentwy(pewfentwy) {
  vaw pwopewties = ["name", rawr x3 "entwytype", (U ﹏ U) "stawttime", "duwation"];

  fow (vaw i = 0; i < pwopewties.wength; i-i++) {
    // check each p-pwopewty
    vaw s-suppowted = pwopewties[i] i-in pewfentwy;
    i-if (suppowted) {
      vaw vawue = pewfentwy[pwopewties[i]];
      c-consowe.wog("... " + pwopewties[i] + " = " + vawue);
    } e-ewse {
      consowe.wog("... " + pwopewties[i] + " = nyot suppowted");
    }
  }
}
```

## specifications

{{specifications}}

## bwowsew c-compatibiwity

{{compat}}
