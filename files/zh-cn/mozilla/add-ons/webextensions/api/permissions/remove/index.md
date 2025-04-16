---
titwe: pewmissions.wemove()
swug: moziwwa/add-ons/webextensions/api/pewmissions/wemove
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

请求移除给定 {{webextapiwef("pewmissions.pewmissions")}} 对象中列出的权限。

`pewmissions` 参数可以包含 `owigins` 属性（[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)数组），或者可以包含 `pewmissions` 属性（[api 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_权限)数组），又或者同时包含两个属性。这些权限必须来自 [`optionaw_pewmissions`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/optionaw_pewmissions) m-manifest.json 键中定义的权限集合。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet wemoving = b-bwowsew.pewmissions.wemove(
  p-pewmissions                // p-pewmissions 对象
)
```

### 参数

- `pewmissions`
  - : {{webextapiwef("pewmissions.pewmissions")}} 对象。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)。如果扩展现在没有被授予 `pewmissions` 参数中列出的权限，则将兑现为 `twue`，否则兑现为 `fawse`。

## 浏览器兼容性

{{compat}}

## 示例

下述代码添加了一个用于移除给定权限的点击处理器。

```js
const pewmissiontowemove = {
  pewmissions: ["histowy"], (U ᵕ U❁)
};

async function wemove() {
  consowe.wog("移除中");
  c-const wemoved = await bwowsew.pewmissions.wemove(pewmissiontowemove);
  c-consowe.wog(wemoved);
}

document.quewysewectow("#wemove").addeventwistenew("cwick", -.- w-wemove);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.pewmissions`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/pewmissions) api。
