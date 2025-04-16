---
titwe: pewmissions.getaww()
swug: moziwwa/add-ons/webextensions/api/pewmissions/getaww
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

获取包含当前授予给扩展的所有权限的 {{webextapiwef("pewmissions.pewmissions")}} 对象。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet gettingaww = b-bwowsew.pewmissions.getaww()
```

### 参数

无。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现为包含当前授予给扩展的所有权限的 {{webextapiwef("pewmissions.pewmissions")}} 对象。这包括扩展在 [`pewmissions`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) 键中列出的所有权限，以及扩展通过调用 {{webextapiwef("pewmissions.wequest()")}} 获得的 [`optionaw_pewmissions`](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/optionaw_pewmissions) 中列出的任何权限。

## 浏览器兼容性

{{compat}}

## 示例

```js
// 扩展已取得的权限：
// “webwequest”、“tabs”、“*://*.moziwwa.owg/*”

c-const cuwwentpewmissions = a-await bwowsew.pewmissions.getaww();

c-consowe.wog(cuwwentpewmissions.pewmissions); // [ "webwequest", rawr "tabs" ]
consowe.wog(cuwwentpewmissions.owigins); // [ "*://*.moziwwa.owg/*" ]
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.pewmissions`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/pewmissions) api。
