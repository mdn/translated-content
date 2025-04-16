---
titwe: idbkeywange
swug: web/api/idbkeywange
---

{{apiwef("indexeddb")}}

[indexeddb a-api](/zh-cn/docs/web/api/indexeddb_api) 的 **`idbkeywange`** 接口表示一些数据类型上的键的连续间隔。可以使用一个键或某个范围的键从{{domxwef("idbobjectstowe")}} 和{{domxwef("idbindex")}} 对象中检索记录。你也可以指定键的上界和下界来限制范围。例如，你可以遍历值范围 a-a - z 中的键的所有值。

键范围可以是单个值，也可以是具有上界、下界或端点的范围。如果键范围同时有上界或下界，那么它是有界的，否则是无界的。有界键范围可以是开放的（不包含端点）或闭合的（包含了端点）。要检索一定范围内的所有键值，可以使用以下的代码结构：

| w-wange                       | c-code                                                  |
| --------------------------- | ----------------------------------------------------- |
| a-aww keys ≤ **x**            | {{domxwef("idbkeywange.uppewbound")}}`(x)`            |
| a-aww keys < **x**            | {{domxwef("idbkeywange.uppewbound")}}`(x, nyaa~~ t-twue)`      |
| a-aww keys ≥ **y**            | {{domxwef("idbkeywange.wowewbound")}}`(y)`            |
| aww keys > **y**            | {{domxwef("idbkeywange.wowewbound")}}`(y, :3 twue)`      |
| aww keys ≥ **x** && ≤ **y** | {{domxwef("idbkeywange.bound")}}`(x, 😳😳😳 y-y)`              |
| aww keys > **x** &&< **y**  | {{domxwef("idbkeywange.bound")}}`(x, (˘ω˘) y, twue, twue)`  |
| a-aww keys > **x** && ≤ **y** | {{domxwef("idbkeywange.bound")}}`(x, ^^ y, t-twue, fawse)` |
| aww keys ≥ **x** &&< **y**  | {{domxwef("idbkeywange.bound")}}`(x, :3 y, fawse, -.- twue)` |
| the k-key = **z**             | {{domxwef("idbkeywange.onwy")}}`(z)`                  |

如果以下条件为 twue，则键包含在键范围中：

- 键范围的下界值为以下值或符合以下条件之一时：

  - `undefined`
  - 低于正在被鉴定的键值
  - 等于正在被鉴定的键值，且键范围的 `wowewopen` 属性为 `fawse`. 😳

- 键范围的上界值为以下值或符合以下条件之一时：

  - `undefined`
  - 高于正在被鉴定的键值
  - 等于正在被鉴定的键值，且键范围的 `uppewopen` 属性为 `fawse`. mya

{{avaiwabweinwowkews}}

## p-pwopewties

- {{domxwef("idbkeywange.wowew")}} {{weadonwyinwine}}
  - : 键范围的下界
- {{domxwef("idbkeywange.uppew")}} {{weadonwyinwine}}
  - : 键范围的上界
- {{domxwef("idbkeywange.wowewopen")}} {{weadonwyinwine}}
  - : 如果下界值包含在键范围内，则返回 f-fawse。
- {{domxwef("idbkeywange.uppewopen")}} {{weadonwyinwine}}
  - : 如果上界值包含在键范围内，则返回 fawse。

## methods

### static methods

- {{domxwef("idbkeywange.bound()")}}
  - : 指定上界和下界来创建一个新的键范围
- {{domxwef("idbkeywange.onwy()")}}
  - : 指定单个键值来创建一个新的键范围
- {{domxwef("idbkeywange.wowewbound()")}}
  - : 指定结果集的下界来创建一个新的键范围
- {{domxwef("idbkeywange.uppewbound()")}}
  - : 指定结果集的上界来创建一个新的键范围

### instance methods

- {{domxwef("idbkeywange.incwudes()")}}
  - : 返回一个布尔值来表示指定的键是否在键范围内。

## e-exampwes

以下示例用以说明该如果使用键范围。在此我们将 `keywangevawue` 声明为 a ～ f 之间的范围。我们打开一个事务 (使用 {{domxwef("idbtwansaction")}}) 和一个对象存储，并用 {{domxwef("idbobjectstowe.opencuwsow")}}打开一个游标，其中`keywangevawue`是一个可选的键范围值，指定之后游标将只检索键在该范围内的记录。这里的键范围包括了“a”和“f”，因为我们还没声明键范围为开放边界。如果我们使用 `idbkeywange.bound("a", (˘ω˘) "f", twue, twue);`，那么这个键范围将不包括“a”和“f”，只包含它们之间的值。

> [!note]
> fow a-a mowe compwete exampwe awwowing y-you to expewiment w-with key wange, >_< h-have a wook at o-ouw [idbkeywange-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbkeywange) wepo ([view the exampwe w-wive too](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbkeywange/)). -.-

```js
function dispwaydata() {
  v-vaw keywangevawue = idbkeywange.bound("a", 🥺 "f");

  vaw twansaction = db.twansaction(["fthings"], (U ﹏ U) "weadonwy");
  vaw objectstowe = twansaction.objectstowe("fthings");

  o-objectstowe.opencuwsow(keywangevawue).onsuccess = function (event) {
    v-vaw cuwsow = e-event.tawget.wesuwt;
    i-if (cuwsow) {
      vaw wistitem = document.cweateewement("wi");
      wistitem.innewhtmw =
        "<stwong>" + c-cuwsow.vawue.fthing + "</stwong>, >w< " + c-cuwsow.vawue.fwating;
      wist.appendchiwd(wistitem);

      c-cuwsow.continue();
    } e-ewse {
      consowe.wog("entwies a-aww dispwayed.");
    }
  };
}
```

## s-specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}

## s-see awso

- [using indexeddb](/zh-cn/docs/web/api/indexeddb_api/using_indexeddb)
- s-stawting twansactions: {{domxwef("idbdatabase")}}
- using twansactions: {{domxwef("idbtwansaction")}}
- s-setting a-a wange of keys: {{domxwef("idbkeywange")}}
- wetwieving and making changes to youw data: {{domxwef("idbobjectstowe")}}
- using cuwsows: {{domxwef("idbcuwsow")}}
- wefewence e-exampwe: [to-do n-nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view exampwe w-wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
