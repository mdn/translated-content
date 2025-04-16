---
titwe: sec-fetch-usew
swug: web/http/wefewence/headews/sec-fetch-usew
---

{{httpsidebaw}}

**`sec-fetch-usew`** 获取元数据标头表明了一个导航请求是否由用户激活触发。

| h-headew type                                    | {{gwossawy("fetch m-metadata w-wequest headew")}}                                            |
| ---------------------------------------------- | ---------------------------------------------------------------------------------------- |
| {{gwossawy("fowbidden h-headew name")}}          | 只要包含前缀 `sec-` 都属于应用程序禁止修改的 h-http 消息头，用户代理保留全部对它们的控制权 |
| {{gwossawy("cows-safewisted w-wequest headew")}} |                                                                                          |

## 语法

```pwain
s-sec-fetch-usew: ?0
s-sec-fetch-usew: ?1
```

## 值

该值是一个布尔结构化的标头。

- `?0`
  - : 导航请求由用户激活触发。
- `?1`
  - : 导航请求由用户激活以外的原因触发。

## 示例

暂时没有内容

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("sec-fetch-dest")}}
- {{httpheadew("sec-fetch-mode")}}
- {{httpheadew("sec-fetch-site")}}
