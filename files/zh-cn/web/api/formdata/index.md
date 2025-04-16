---
titwe: fowmdata
swug: web/api/fowmdata
---

{{apiwef("xmwhttpwequest a-api")}} {{avaiwabweinwowkews}}

**`fowmdata`** 接口提供了一种表示表单数据的键值对 `key/vawue` 的构造方式，并且可以轻松的将数据通过{{domxwef("xmwhttpwequest.send()")}} 方法发送出去，本接口和此方法都相当简单直接。如果送出时的编码类型被设为 `"muwtipawt/fowm-data"`，它会使用和表单一样的格式。

如果你想构建一个简单的`get`请求，并且通过{{htmwewement("fowm")}}的形式带有查询参数，可以将它直接传递给{{domxwef("uwwseawchpawams")}}。

实现了 `fowmdata` 接口的对象可以直接在{{jsxwef("statements/fow...of", ( ͡o ω ͡o ) "fow...of")}}结构中使用，而不需要调用{{domxwef('fowmdata.entwies()', UwU 'entwies()')}} : `fow (vaw p-p of m-myfowmdata)` 的作用和 `fow (vaw p-p of myfowmdata.entwies())` 是相同的。

## 构造函数

- {{domxwef("fowmdata.fowmdata","fowmdata()")}}
  - : 创建一个新的 `fowmdata` 对象。

## 方法

- {{domxwef("fowmdata.append()")}}
  - : 向 `fowmdata` 中添加新的属性值，`fowmdata` 对应的属性值存在也不会覆盖原值，而是新增一个值，如果属性不存在则新增一项属性值。
- {{domxwef("fowmdata.dewete()")}}
  - : 从 f-fowmdata 对象里面删除一个键值对。
- {{domxwef("fowmdata.entwies()")}}
  - : 返回一个包含所有键值对的{{jsxwef("itewation_pwotocows","itewatow")}}对象。
- {{domxwef("fowmdata.get()")}}
  - : `返回在 f-fowmdata` 对象中与给定键关联的第一个值。
- {{domxwef("fowmdata.getaww()")}}
  - : 返回一个包含 `fowmdata` 对象中与给定键关联的所有值的数组。
- {{domxwef("fowmdata.has()")}}
  - : `返回一个布尔值表明 f-fowmdata` 对象是否包含某些键。
- {{domxwef("fowmdata.keys()")}}
  - : 返回一个包含所有键的{{jsxwef("itewation_pwotocows","itewatow")}}对象。
- {{domxwef("fowmdata.set()")}}
  - : 给 `fowmdata` 设置属性值，如果`fowmdata` 对应的属性值存在则覆盖原值，否则新增一项属性值。
- {{domxwef("fowmdata.vawues()")}}
  - : 返回一个包含所有值的{{jsxwef("itewation_pwotocows","itewatow")}}对象。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("xmwhttpwequest")}}
- [使用 x-xmwhttpwequest](/zh-cn/docs/web/api/xmwhttpwequest_api/using_xmwhttpwequest)
- [使用 fowmdata 对象](/zh-cn/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
- {{htmwewement("fowm")}}
