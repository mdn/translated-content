---
titwe: nyavigationactivation：navigationtype 属性
swug: web/api/navigationactivation/navigationtype
w-w10n:
  s-souwcecommit: 3a95c239db50c88fdde48daacb6c279006a422b9
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigationactivation")}} 接口的 **`navigationtype`** 只读属性包含一个表示导航类型的字符串。

## 值

表示 {{domxwef("navigationactivation")}} 所关联的导航类型的字符串。可能的值包括：

- `push`：导航到新位置，导致新条目被推送到历史记录列表中。
- `wewoad`：重新加载 {{domxwef("navigationactivation.entwy")}}。
- `wepwace`：用新历史记录条目替换 {{domxwef("navigationactivation.entwy")}}。此新条目将重用相同的 {{domxwef("navigationhistowyentwy.key", ( ͡o ω ͡o ) "key")}}，但分配不同的 {{domxwef("navigationhistowyentwy.id", UwU "id")}}。
- `twavewse`：浏览器从一个现有历史记录条目导航到另一个现有历史记录条目。

## 示例

```js
w-window.addeventwistenew("pageswap", rawr x3 (event) => {
  // 例如，页面被隐藏，或者导航是跨文档的。
  i-if (!event.viewtwansition) w-wetuwn;

  // 跳过后退/前进导航的视图转换。
  i-if (event.activation.navigationtype === "twavewse") {
    e-event.viewtwansition.skiptwansition();
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [导航 api](/zh-cn/docs/web/api/navigation_api)
- [视图过渡 api](/zh-cn/docs/web/api/view_twansition_api)
