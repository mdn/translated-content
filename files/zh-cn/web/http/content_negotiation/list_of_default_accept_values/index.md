---
title: Accept 默认值
slug: Web/HTTP/Content_negotiation/List_of_default_Accept_values
---

{{HTTPSidebar}}

本文介绍了在一些特定输入和浏览器版本下的 HTTP [`Accept`](/zh-CN/docs/Web/HTTP/Headers/Accept) 头的默认值

## 默认值

这些值将在上下文未设置其他信息时被使用。注意：所有的浏览器都会添加 `*/*` MIME 类型以涵盖各种情况。这通常用于通过浏览器的地址栏或 HTML {{HTMLElement("a")}} 标签发起的请求。

| User Agent          | Value                                                                                                                                                                   | Comment                                                                                                                                           |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Firefox             | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                                                       | 这个值可以通过 `network.http.accept.default` 参数来修改。                                                                                         |
| Safari, Chrome      | `application/xml,application/xhtml+xml,text/html;q=0.9, text/plain;q=0.8,image/png,*/*;q=0.5`                                                                           | [source](http://www.newmediacampaigns.com/page/browser-rest-http-accept-headers)                                                                  |
| Safari 5            | `text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8`                                                                                                       | 这是对早期 `Accept` 头的改进，不再把 `image/png` 排在 `text/html` 之前。                                                                          |
| Internet Explorer 8 | `image/jpeg, application/x-ms-application, image/gif, application/xaml+xml, image/pjpeg, application/x-ms-xbap, application/x-shockwave-flash, application/msword, */*` | 请参见 [IE and the Accept Header (IEInternals' MSDN blog)](http://blogs.msdn.com/b/ieinternals/archive/2009/07/01/ie-and-the-accept-header.aspx). |
| Edge                | text/html, application/xhtml+xml, image/jxr, _/_                                                                                                                        |                                                                                                                                                   |
| Opera               | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1`                                     |                                                                                                                                                   |

## image 请求

当请求一张图片时，比如一个 HTML {{HTMLElement("img")}} 元素，用户代理通常会设置一个特定的媒体类型列表。

| User Agent                     | Value                                                                 | Comment                                                                                                                                                                          |
| ------------------------------ | --------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Firefox                        | `*/*` (since Firefox 47) `image/png,image/*;q=0.8,*/*;q=0.5` (before) | 这个值可以通过 `image.http.accept` 参数修改。                                                                                                                                    |
| Safari                         | `*/*`                                                                 |                                                                                                                                                                                  |
| Chrome                         | `image/webp,image/*,*/*;q=0.8`                                        | 在支持 webp 格式之前，是使用的 `*/*`                                                                                                                                             |
| Internet Explorer 8 及更早版本 | `*/*`                                                                 | 请参见 [IE and the Accept Header (IEInternals' MSDN blog)](http://blogs.msdn.com/b/ieinternals/archive/2009/07/01/ie-and-the-accept-header.aspx)                                 |
| Internet Explorer 9            | `image/png,image/svg+xml,image/*;q=0.8, */*;q=0.5`                    | 请参见 [Fiddler is better with Internet Explorer 9 (IEInternals' MSDN blog)](http://blogs.msdn.com/b/fiddler/archive/2011/02/10/fiddler-is-better-with-internet-explorer-9.aspx) |

## video 请求

通过 HTML {{HTMLElement("video")}} 元素请求一个 video 时，大多数浏览器会使用特定值。

| User Agent                       | Value                                                                                              | Comment                                                                 |
| -------------------------------- | -------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| Firefox 3.6 之前的版本           | _不支持 {{HTMLElement("video")}}_                                                                  |                                                                         |
| Firefox 3.6 及以上版本           | `audio/webm, audio/ogg, audio/wav, audio/*;q=0.9, application/ogg;q=0.7, video/*;q=0.6; */*;q=0.5` | 请参见[bug 489071](https://bugzilla.mozilla.org/show_bug.cgi?id=489071) |
| Chrome                           | `*/*`                                                                                              |                                                                         |
| Internet Explorer 8 或更早的版本 | _不支持 {{HTMLElement("video")}}_                                                                  |                                                                         |

## audio 请求

通过 HTML {{HTMLElement("audio")}} 元素请求 audio 资源时，大多数浏览器会使用特定值。

| User Agent                     | Value                                                                                        | Comment                                                               |
| ------------------------------ | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------- |
| Firefox 3.6 及以上版本         | `audio/webm,audio/ogg,audio/wav,audio/*;q=0.9,application/ogg;q=0.7,video/*;q=0.6,*/*;q=0.5` | See [bug 489071](https://bugzilla.mozilla.org/show_bug.cgi?id=489071) |
| Safari, Chrome                 | ?                                                                                            |                                                                       |
| Internet Explorer 8 及更早版本 | _不支持 {{HTMLElement("audio")}}_                                                            |                                                                       |
| Internet Explorer 9            | ?                                                                                            |                                                                       |

## scripts 请求

当通过 {{HTMLElement("script")}} 元素请求 script 时，一些浏览器使用特定值。

| User Agent                     | Value                               | Comment                                                                                                                                                                          |
| ------------------------------ | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Firefox                        | `*/*`                               | 请参见[bug 170789](https://bugzilla.mozilla.org/show_bug.cgi?id=170789)                                                                                                          |
| Safari, Chrome                 | `*/*`                               |                                                                                                                                                                                  |
| Internet Explorer 8 及更早版本 | `*/*`                               | 请参见 [IE and the Accept Header (IEInternals' MSDN blog)](http://blogs.msdn.com/b/ieinternals/archive/2009/07/01/ie-and-the-accept-header.aspx)                                 |
| Internet Explorer 9            | `application/javascript, */*;q=0.8` | 请参见 [Fiddler is better with Internet Explorer 9 (IEInternals' MSDN blog)](http://blogs.msdn.com/b/fiddler/archive/2011/02/10/fiddler-is-better-with-internet-explorer-9.aspx) |

## CSS 请求

当通过 `<link rel="stylesheet">` HTML 元素请求 CSS 样式表时，大多数浏览器使用特定值。

| User Agent                     | Value                                                                                                                               | Comment                                                                                                                                                                          |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Firefox 4                      | `text/css,*/*;q=0.1`                                                                                                                | 请参见[bug 170789](https://bugzilla.mozilla.org/show_bug.cgi?id=170789)                                                                                                          |
| Safari 5                       | `text/css,*/*;q=0.1`                                                                                                                |                                                                                                                                                                                  |
| Internet Explorer 8 及更早版本 | `*/*`                                                                                                                               | 请参见 [IE and the Accept Header (IEInternals' MSDN blog)](http://blogs.msdn.com/b/ieinternals/archive/2009/07/01/ie-and-the-accept-header.aspx)                                 |
| Internet Explorer 9            | `text/css`                                                                                                                          | 请参见 [Fiddler is better with Internet Explorer 9 (IEInternals' MSDN blog)](http://blogs.msdn.com/b/fiddler/archive/2011/02/10/fiddler-is-better-with-internet-explorer-9.aspx) |
| Chrome 12                      | `text/css,*/*;q=0.1`                                                                                                                |                                                                                                                                                                                  |
| Opera 11.10                    | `text/html, application/xml;q=0.9, application/xhtml+xml, image/png, image/webp, image/jpeg, image/gif, image/x-xbitmap, */*;q=0.1` |                                                                                                                                                                                  |
| Konqueror 4.6                  | `text/css,*/*;q=0.1`                                                                                                                |                                                                                                                                                                                  |
