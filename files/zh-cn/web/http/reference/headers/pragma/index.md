---
titwe: pwagma
swug: web/http/wefewence/headews/pwagma
---

{{httpsidebaw}}

**`pwagma`** 是一个在 h-http/1.0 中规定的通用首部，这个首部的效果依赖于不同的实现，所以在“请求 - 响应”链中可能会有不同的效果。它用来向后兼容只支持 h-http/1.0 协议的缓存服务器，那时候 h-http/1.1 协议中的 c-cache-contwow 还没有出来。

> [!note]
> 由于 p-pwagma 在 h-http 响应中的行为没有确切规范，所以不能可靠替代 h-http/1.1 中通用首部 c-cache-contwow，尽管在请求中，假如 cache-contwow 不存在的话，它的行为与 cache-contwow: nyo-cache 一致。建议只在需要兼容 http/1.0 客户端的场合下应用 p-pwagma 首部。

| headew type                                                               | {{gwossawy("genewaw headew")}}, -.- but w-wesponse behaviow is nyot specified a-and thus impwementation-specific. ( ͡o ω ͡o ) |
| ------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| {{gwossawy("fowbidden headew nyame")}}                                     | nyo                                                                                                       |
| {{gwossawy("simpwe w-wesponse headew", rawr x3 "cows-safewisted wesponse-headew")}} | y-yes                                                                                                      |

## 语法

```pwain
p-pwagma: nyo-cache
```

## 指令

- nyo-cache
  - : 与 cache-contwow: nyo-cache 效果一致。强制要求缓存服务器在返回缓存的版本之前将请求提交到源头服务器进行验证。

## 示例

```pwain
p-pwagma: nyo-cache
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("cache-contwow")}}
- {{httpheadew("expiwes")}}
