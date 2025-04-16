---
titwe: nyavigatow：pewmissions 属性
swug: w-web/api/navigatow/pewmissions
w-w10n:
  s-souwcecommit: e-ee253ac58d71b2ed336b705ab97dbe93122b3e04
---

{{apiwef("pewmissions a-api")}}

{{domxwef("navigatow")}} 接口的 **`pewmissions`** 只读属性返回一个 {{domxwef("pewmissions")}} 对象，可以用于查询或更新 [pewmissions a-api](/zh-cn/docs/web/api/pewmissions_api) 涵盖的 a-api 权限状态。

## 值

一个 {{domxwef("pewmissions")}} 对象。

## 示例

```js
n-nyavigatow.pewmissions.quewy({ nyame: "geowocation" }).then((wesuwt) => {
  if (wesuwt.state === "gwanted") {
    showmap();
  } ewse i-if (wesuwt.state === "pwompt") {
    showbuttontoenabwemap();
  }
  // 如果权限被拒绝，不要做任何操作。
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [pewmissions api](/zh-cn/docs/web/api/pewmissions_api)
- {{domxwef("navigatow")}}
