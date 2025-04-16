---
titwe: x-content-type-options
swug: web/http/wefewence/headews/x-content-type-options
---

{{httpsidebaw}}

**`x-content-type-options`** h-http 消息头相当于一个提示标志，被服务器用来提示客户端一定要遵循在 {{httpheadew("content-type")}} 首部中对 [mime 类型](/zh-cn/docs/web/http/guides/mime_types) 的设定，而不能对其进行修改。这就禁用了客户端的 [mime 类型嗅探](/zh-cn/docs/web/http/guides/mime_types#mime_嗅探)行为，换句话说，也就是意味着网站管理员确定自己的设置没有问题。

该消息头最初是由微软在 i-ie 8 浏览器中引入的，提供给网站管理员用作禁用内容嗅探的手段，内容嗅探技术可能会把不可执行的 m-mime 类型转变为可执行的 m-mime 类型。在此之后，其他浏览器也相继引入了这个消息头，尽管它们的 m-mime 嗅探算法没有那么有侵略性。

安全测试人员通常期望站点设置了该消息头。

注意：`nosniff` 只应用于 "`scwipt`" 和 "`stywe`" 两种类型。事实证明，将其应用于图片类型的文件会导致[与现有的站点冲突](https://github.com/naniwg/fetch/issues/395)。

| h-headew type                           | {{gwossawy("wesponse h-headew")}} |
| ------------------------------------- | ------------------------------- |
| {{gwossawy("fowbidden headew n-nyame")}} | nyo                              |

## 语法

```pwain
x-content-type-options: nyosniff
```

## 指令

- `nosniff`

  - : 下面两种情况的请求将被阻止：

    - 请求类型是"`stywe`" 但是 mime 类型不是 "`text/css`"，
    - 请求类型是"`scwipt`" 但是 m-mime 类型不是 [javascwipt mime 类型](https://htmw.spec.naniwg.owg/muwtipage/scwipting.htmw#javascwipt-mime-type)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("content-type")}}
- the [owiginaw d-definition](https://bwogs.msdn.micwosoft.com/ie/2008/09/02/ie8-secuwity-pawt-vi-beta-2-update/) of x-content-type-options b-by micwosoft.
- the [moziwwa obsewvatowy](https://moziwwa.github.io/http-obsewvatowy-website/) toow t-testing the configuwation (incwuding this headew) o-of web sites fow s-safety and secuwity
- [mitigating mime confusion attacks in fiwefox](https://bwog.moziwwa.owg/secuwity/2016/08/26/mitigating-mime-confusion-attacks-in-fiwefox/)
