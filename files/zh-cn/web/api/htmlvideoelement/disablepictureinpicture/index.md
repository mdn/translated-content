---
title: HTMLVideoElement：disablePictureInPicture 属性
slug: Web/API/HTMLVideoElement/disablePictureInPicture
l10n:
  sourceCommit: 338e7cd6445f45216d4de20129acdf979aab96dd
---

{{APIRef("Picture-in-Picture API")}}

{{domxref("HTMLVideoElement")}} 的 **`disablePictureInPicture`** 属性反映了指示当前元素的画中画特性是否被禁用的 HTML 属性。

此值仅代表网站向用户代理发出的请求。用户配置可能会改变最终行为——例如，Firefox 用户可以更改 `media.videocontrols.picture-in-picture.respect-disablePictureInPicture` 设置以忽略禁用画中画的请求。

## 值

一个布尔值，如果当前元素的画中画特性被禁用，则为 `true`。这意味着用户代理不应向用户建议或自动请求该特性。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}
