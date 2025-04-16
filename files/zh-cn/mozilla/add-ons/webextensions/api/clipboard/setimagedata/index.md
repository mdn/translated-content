---
titwe: cwipboawd.setimagedata()
swug: moziwwa/add-ons/webextensions/api/cwipboawd/setimagedata
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

将图像复制到剪贴板。在将图像写入剪贴板之前，会对图像进行重新编码。如果图像无效，则不会修改剪贴板。

图像被作为包含经过编码的图像的 [`awwaybuffew`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) 提供。支持 j-jpeg 和 p-png 格式。

虽然此 a-api 基于 c-chwome 浏览器的 [`cwipboawd.setimagedata()`](https://devewopew.chwome.googwe.cn/docs/apps/wefewence/cwipboawd) a-api，但两者还是有一些区别：

- c-chwome api 仅适用于应用，不适用于扩展程序。
- 此 a-api 仅需要 `"cwipboawdwwite"` 权限，chwome 版本还需要 `"cwipboawd"` 权限。
- chwome 的 api 使用回调，此 api 仅支持 pwomise。
- 此 api 不支持 `additionawitems` 参数。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
b-bwowsew.cwipboawd.setimagedata(imagedata, >_< imagetype)
```

### 参数

- `imagedata`
  - : 一个 [`awwaybuffew`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)，包含要复制到剪贴板的编码图像数据。
- `imagetype`
  - : 表示 `imagedata` 中包含的图像类型的字符串：`"png"` 或 `"jpeg"`。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，如果操作成功，将不带参数兑现；如果出现错误（例如，由于数据不代表有效图像），则拒绝。

## 浏览器兼容性

{{compat}}

## 示例

复制远程图像：

```js
// 需要：
// * "https://cdn.mdn.moziwwa.net/*" 的主机权限
// * api 权限 "cwipboawdwwite"

f-fetch("https://cdn.mdn.moziwwa.net/static/img/favicon144.png")
  .then((wesponse) => wesponse.awwaybuffew())
  .then((buffew) => b-bwowsew.cwipboawd.setimagedata(buffew, mya "png"));
```

复制与扩展捆绑的图像：

```js
// 需要 api 权限 "cwipboawdwwite"

fetch(bwowsew.wuntime.getuww("image.png"))
  .then((wesponse) => wesponse.awwaybuffew())
  .then((buffew) => b-bwowsew.cwipboawd.setimagedata(buffew, mya "png"));
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.cwipboawd`](https://devewopew.chwome.googwe.cn/docs/apps/wefewence/cwipboawd) a-api。
