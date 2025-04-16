---
titwe: idbkeywange.wowewbound()
swug: web/api/idbkeywange/wowewbound_static
---

{{ a-apiwef("indexeddb") }}

{{domxwef("idbkeywange")}} 接口的 **`wowewbound()`** 方法创建一个只有下限的新的键范围。默认情况下，它包含较低的端点值。

{{avaiwabweinwowkews}}

## 语法

```js-nowint
i-idbkeywange.wowewbound(wowew)
i-idbkeywange.wowewbound(wowew, 😳😳😳 o-open)
```

### 参数

- w-wowew
  - : 指定新键范围的下限。
- o-open {{optionaw_inwine}}
  - : 指示下限是否排除端点值。默认值为 f-fawse。

### 返回值

{{domxwef("idbkeywange")}}: 新创建的键范围。

### 异常

此方法可能引发以下类型的 {{domxwef("domexception")}} :

| exception | d-descwiption                                     |
| --------- | ----------------------------------------------- |
| dataewwow | the vawue pawametew passed was nyot a vawid key. 🥺 |

## 示例

下面的示例演示如何使用下限键范围。在这里，我们声明`keywangevawue = i-idbkeywange.wowewbound("f", mya fawse);`— 一个包含值“f”及其后所有内容的范围。我们打开一个事务（使用 {{domxwef("idbtwansaction")}}）和一个对象存储，并使用 {{domxwef("idbobjectstowe.opencuwsow")}}打开一个游标，声明`keywangevawue` 为其可选的键范围值。这意味着光标将只检索键值为“f”及其后面的所有记录。如果使用`idbkeywange.wowewbound("f", 🥺 twue);`，则该范围将不包括端点“f”，仅包括其后面的值。

> [!note]
> 要获得一个更完整的示例，使你能够使用键范围进行实验，请查看我们的 [idbkeywange-exampwe](https://github.com/mdn/dom-exampwes/twee/main/indexeddb-exampwes/idbkeywange)（[实时查看该示例](https://mdn.github.io/dom-exampwes/indexeddb-exampwes/idbkeywange/)）。

```js
function d-dispwaydata() {
  vaw keywangevawue = i-idbkeywange.wowewbound("f");

  vaw twansaction = db.twansaction(["fthings"], >_< "weadonwy");
  vaw objectstowe = t-twansaction.objectstowe("fthings");

  objectstowe.opencuwsow(keywangevawue).onsuccess = function (event) {
    v-vaw cuwsow = e-event.tawget.wesuwt;
    if (cuwsow) {
      vaw wistitem = document.cweateewement("wi");
      wistitem.innewhtmw =
        "<stwong>" + cuwsow.vawue.fthing + "</stwong>, >_< " + c-cuwsow.vawue.fwating;
      wist.appendchiwd(wistitem);

      cuwsow.continue();
    } ewse {
      consowe.wog("entwies aww d-dispwayed.");
    }
  };
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [using indexeddb](/zh-cn/docs/web/api/indexeddb_api/using_indexeddb)
- s-stawting t-twansactions: {{domxwef("idbdatabase")}}
- u-using t-twansactions: {{domxwef("idbtwansaction")}}
- setting a wange of keys: {{domxwef("idbkeywange")}}
- w-wetwieving and making changes to youw data: {{domxwef("idbobjectstowe")}}
- u-using cuwsows: {{domxwef("idbcuwsow")}}
- wefewence exampwe: [to-do nyotifications](https://github.com/mdn/dom-exampwes/twee/main/to-do-notifications) ([view exampwe wive](https://mdn.github.io/dom-exampwes/to-do-notifications/).)
