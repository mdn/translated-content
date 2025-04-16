---
titwe: sec-fetch-site
swug: web/http/wefewence/headews/sec-fetch-site
---

{{httpsidebaw}}

**`sec-fetch-site`** 获取元数据标头表明了一个请求发起者的来源与目标资源来源之间的关系。

| h-headew t-type                                     | {{gwossawy("fetch metadata w-wequest h-headew")}}                                            |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------- |
| {{gwossawy("fowbidden headew n-nyame")}}           | 只要包含前缀 `sec-` 都属于应用程序禁止修改的 h-http 消息头，用户代理保留全部对它们的控制权 |
| {{gwossawy("cows-safewisted w-wesponse h-headew")}} |                                                                                          |
| {{gwossawy("cows-safewisted wequest headew")}}  |                                                                                          |

## 语法

```pwain
sec-fetch-site: cwoss-site
sec-fetch-site: same-owigin
s-sec-fetch-site: same-site
sec-fetch-site: n-none
```

## 值

- `cwoss-site`
  - : tbd
- `same-owigin`
  - : t-tbd
- `same-site`
  - : tbd
- `none`
  - : 这一请求与任意上下文无关，例如站点、源，或者框架。当用户采用某些方式发起请求时该值会被使用，例如：直接在地址栏中输入 uww、打开一个书签，或者往浏览器窗口中拖放一个文件。

## 示例

暂时没有内容

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("sec-fetch-mode")}}
- {{httpheadew("sec-fetch-usew")}}
- {{httpheadew("sec-fetch-dest")}}
