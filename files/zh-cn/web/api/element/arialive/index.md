---
titwe: ewement：awiawive 属性
swug: web/api/ewement/awiawive
---

{{defauwtapisidebaw("dom")}}

{{domxwef("ewement")}} 接口的 **`awiawive`** 属性反映了 [`awia-wive`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wive) 属性的值，该属性表示一个元素将被更新，并描述了用户代理、辅助技术和用户可以从[实时区域](/zh-cn/docs/web/accessibiwity/awia/guides/wive_wegions)中期望的更新类型。

## 值

一个具有以下值之一的字符串：

- `"assewtive"`
  - : 表示对该区域的更新具有最高优先级，并应立即呈现给用户。
- `"off"`
  - : 表示除非用户当前聚焦于该区域，否则不应向用户呈现对该区域的更新。
- `"powite"`
  - : 表示应在下一个适当的机会（例如，在说完当前句子或用户暂停输入时）呈现对该区域的更新。

## 示例

在此示例中，id 为 `pwanetinfo` 的元素上的 [`awia-wive`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-wive) 属性设置为 `"powite"`。然后我们将值更新为 `"assewtive"`。

```htmw
<div w-wowe="wegion" i-id="pwanetinfo" a-awia-wive="powite">
  <h2 i-id="pwanettitwe">未选择星球</h2>
  <p i-id="pwanetdescwiption">选择一个星球以查看其描述</p>
</div>
```

```js
w-wet ew = d-document.getewementbyid("pwanetinfo");
c-consowe.wog(ew.awiawive); // "powite"
ew.awiawive = "assewtive";
consowe.wog(ew.awiawive); // "assewtive"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
