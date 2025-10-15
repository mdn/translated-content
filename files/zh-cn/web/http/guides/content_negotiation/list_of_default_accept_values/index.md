---
title: Accept 默认值
slug: Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values
l10n:
  sourceCommit: 354d2d81c34e3fc1cddeaab42ef0e50b920da806
---

本文介绍了在一些特定输入和浏览器版本下的 HTTP [`Accept`](/zh-CN/docs/Web/HTTP/Reference/Headers/Accept) 标头的默认值。

## 默认值

这些值将在上下文未设置其他信息时被使用。注意：所有的浏览器都会添加 `*/*` 类型以涵盖各种情况。这通常用于通过浏览器的地址栏或 HTML {{HTMLElement("a")}} 元素发起的请求。

| 用户代理                  | 值                                                                                                                                  |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Firefox 92 及更高版本 [1] | `text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8`                                             |
| Firefox 72 至 91 版本 [1] | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`                                                        |
| Firefox 66 至 71 版本 [1] | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                   |
| Firefox 65 [1]            | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8`                                                        |
| Firefox 64 及更早版本 [1] | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                   |
| Safari、Chrome            | `text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8`                                             |
| Safari 5 [2]              | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                   |
| Edge                      | `text/html, application/xhtml+xml, image/jxr, */*`                                                                                  |
| Opera                     | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1` |

\[1] 可以使用 [`network.http.accept.default`](https://kb.mozillazine.org/Network.http.accept.default) 参数修改此值。

\[2] 这是对早期 `Accept` 标头的改进，因为它不再将 `image/png` 的优先级置于 `text/html` 之上。

## image 的值

当请求一张图片时，比如一个 HTML {{HTMLElement("img")}} 元素，用户代理通常会设置一个特定的媒体类型列表。

| 用户代理                           | 值                                                                         |
| ---------------------------------- | -------------------------------------------------------------------------- |
| Firefox 92 及更高版本 [1]          | `image/avif,image/webp,*/*`                                                |
| Firefox 65 至 91 版本 [1]          | `image/webp,*/*`                                                           |
| Firefox 47 至 63 版本 [1]          | `*/*`                                                                      |
| Firefox 47 之前版本 [1]            | `image/png,image/*;q=0.8,*/*;q=0.5`                                        |
| Safari（自 Mac OS Big Sur 版本起） | `image/webp,image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5` |
| Safari（Mac OS Big Sur 之前版本）  | `image/png,image/svg+xml,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5`            |
| Chrome 和 Edge 121 及更高版本      | `image/avif,image/webp,image/apng,image/*,*/*;q=0.8`                       |

\[1] 可以使用 `image.http.accept` 参数（_[源码](https://searchfox.org/mozilla-central/search?q=image.http.accept)_）修改此值。

## video 的值

通过 HTML {{HTMLElement("video")}} 元素请求一个视频时，大多数浏览器会使用特定值。

| 用户代理               | 值                                                                                 |
| ---------------------- | ---------------------------------------------------------------------------------- |
| Firefox 3.6 及更高版本 | `video/webm,video/ogg,video/*;q=0.9,application/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5` |
| Firefox 3.6 之前的版本 | _不支持 {{HTMLElement("video")}}_                                                  |
| Chrome                 | `*/*`                                                                              |

## audio 资源的值

通过 HTML {{HTMLElement("audio")}} 元素请求音频资源时，大多数浏览器会使用特定值。

| 用户代理                   | 值                                                                                           |
| -------------------------- | -------------------------------------------------------------------------------------------- |
| Firefox 3.6 及更高版本 [1] | `audio/webm,audio/ogg,audio/wav,audio/*;q=0.9,application/ogg;q=0.7,video/*;q=0.6,*/*;q=0.5` |
| Safari、Chrome             | `*/*`                                                                                        |

\[1] 参见 [bug 489071](https://bugzil.la/489071)。

## script 的值

当通过 {{HTMLElement("script")}} 元素请求脚本时，一些浏览器使用特定值。

| 用户代理       | 值    |
| -------------- | ----- |
| Firefox [1]    | `*/*` |
| Safari、Chrome | `*/*` |

\[1] 参见 [bug 170789](https://bugzil.la/170789)。

## CSS 样式表的值

当通过 `<link rel="stylesheet">` HTML 元素请求 CSS 样式表时，大多数浏览器使用特定值。

| 用户代理       | 值                                                                                                                                  |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Firefox 4 [1]  | `text/css,*/*;q=0.1`                                                                                                                |
| Safari、Chrome | `text/css,*/*;q=0.1`                                                                                                                |
| Opera 11.10    | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1` |
| Konqueror 4.6  | `text/css,*/*;q=0.1`                                                                                                                |

\[1] 参见 [bug 170789](https://bugzil.la/170789)。
