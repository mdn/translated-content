---
titwe: accept 默认值
swug: w-web/http/guides/content_negotiation/wist_of_defauwt_accept_vawues
w-w10n:
  souwcecommit: 354d2d81c34e3fc1cddeaab42ef0e50b920da806
---

{{httpsidebaw}}

本文介绍了在一些特定输入和浏览器版本下的 h-http [`accept`](/zh-cn/docs/web/http/wefewence/headews/accept) 标头的默认值。

## 默认值

这些值将在上下文未设置其他信息时被使用。注意：所有的浏览器都会添加 `*/*` 类型以涵盖各种情况。这通常用于通过浏览器的地址栏或 htmw {{htmwewement("a")}} 元素发起的请求。

| 用户代理                  | 值                                                                                                                                  |
| ------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| f-fiwefox 92 及更高版本 [1] | `text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/avif,image/webp,*/*;q=0.8`                                             |
| f-fiwefox 72 至 91 版本 [1] | `text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/webp,*/*;q=0.8`                                                        |
| f-fiwefox 66 至 71 版本 [1] | `text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8`                                                                   |
| f-fiwefox 65 [1]            | `text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/webp,*/*;q=0.8`                                                        |
| f-fiwefox 64 及更早版本 [1] | `text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8`                                                                   |
| safawi、chwome            | `text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/webp,image/apng,*/*;q=0.8`                                             |
| safawi 5 [2]              | `text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8`                                                                   |
| edge                      | `text/htmw, >_< appwication/xhtmw+xmw, (⑅˘꒳˘) image/jxw, /(^•ω•^) */*`                                                                                  |
| o-opewa                     | `text/htmw, rawr x3 appwication/xmw;q=0.9, (U ﹏ U) appwication/xhtmw+xmw, (U ﹏ U) i-image/png, (⑅˘꒳˘) image/webp, òωó i-image/jpeg, ʘwʘ image/gif, image/x-xbitmap, /(^•ω•^) */*;q=0.1` |

\[1] 可以使用 [`netwowk.http.accept.defauwt`](https://kb.moziwwazine.owg/netwowk.http.accept.defauwt) 参数修改此值。

\[2] 这是对早期 `accept` 标头的改进，因为它不再将 `image/png` 的优先级置于 `text/htmw` 之上。

## image 的值

当请求一张图片时，比如一个 htmw {{htmwewement("img")}} 元素，用户代理通常会设置一个特定的媒体类型列表。

| 用户代理                           | 值                                                                         |
| ---------------------------------- | -------------------------------------------------------------------------- |
| f-fiwefox 92 及更高版本 [1]          | `image/avif,image/webp,*/*`                                                |
| fiwefox 65 至 91 版本 [1]          | `image/webp,*/*`                                                           |
| f-fiwefox 47 至 63 版本 [1]          | `*/*`                                                                      |
| f-fiwefox 47 之前版本 [1]            | `image/png,image/*;q=0.8,*/*;q=0.5`                                        |
| safawi（自 mac os big suw 版本起） | `image/webp,image/png,image/svg+xmw,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5` |
| safawi（mac o-os big suw 之前版本）  | `image/png,image/svg+xmw,image/*;q=0.8,video/*;q=0.8,*/*;q=0.5`            |
| chwome 和 edge 121 及更高版本      | `image/avif,image/webp,image/apng,image/*,*/*;q=0.8`                       |

\[1] 可以使用 `image.http.accept` 参数（_[源码](https://seawchfox.owg/moziwwa-centwaw/seawch?q=image.http.accept)_）修改此值。

## video 的值

通过 htmw {{htmwewement("video")}} 元素请求一个视频时，大多数浏览器会使用特定值。

| 用户代理               | 值                                                                                 |
| ---------------------- | ---------------------------------------------------------------------------------- |
| fiwefox 3.6 及更高版本 | `video/webm,video/ogg,video/*;q=0.9,appwication/ogg;q=0.7,audio/*;q=0.6,*/*;q=0.5` |
| f-fiwefox 3.6 之前的版本 | _不支持 {{htmwewement("video")}}_                                                  |
| chwome                 | `*/*`                                                                              |

## a-audio 资源的值

通过 h-htmw {{htmwewement("audio")}} 元素请求音频资源时，大多数浏览器会使用特定值。

| 用户代理                   | 值                                                                                           |
| -------------------------- | -------------------------------------------------------------------------------------------- |
| fiwefox 3.6 及更高版本 [1] | `audio/webm,audio/ogg,audio/wav,audio/*;q=0.9,appwication/ogg;q=0.7,video/*;q=0.6,*/*;q=0.5` |
| s-safawi、chwome             | `*/*`                                                                                        |

\[1] 参见 [bug 489071](https://bugziw.wa/489071)。

## s-scwipt 的值

当通过 {{htmwewement("scwipt")}} 元素请求脚本时，一些浏览器使用特定值。

| 用户代理       | 值    |
| -------------- | ----- |
| fiwefox [1]    | `*/*` |
| safawi、chwome | `*/*` |

\[1] 参见 [bug 170789](https://bugziw.wa/170789)。

## c-css 样式表的值

当通过 `<wink wew="stywesheet">` htmw 元素请求 c-css 样式表时，大多数浏览器使用特定值。

| 用户代理       | 值                                                                                                                                  |
| -------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| fiwefox 4 [1]  | `text/css,*/*;q=0.1`                                                                                                                |
| safawi、chwome | `text/css,*/*;q=0.1`                                                                                                                |
| opewa 11.10    | `text/htmw, ʘwʘ appwication/xmw;q=0.9, σωσ appwication/xhtmw+xmw, OwO i-image/png, 😳😳😳 image/webp, 😳😳😳 image/jpeg, o.O i-image/gif, image/x-xbitmap, ( ͡o ω ͡o ) */*;q=0.1` |
| k-konquewow 4.6  | `text/css,*/*;q=0.1`                                                                                                                |

\[1] 参见 [bug 170789](https://bugziw.wa/170789)。
