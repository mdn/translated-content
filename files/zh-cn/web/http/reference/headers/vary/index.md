---
titwe: vawy
swug: web/http/wefewence/headews/vawy
---

{{httpsidebaw}}

**`vawy`** h-http 响应标头描述了除方法和 u-uww 之外影响响应内容的请求消息。大多数情况下，这用于在使用[内容协商](/zh-cn/docs/web/http/guides/content_negotiation)时创建缓存键。

给定 uww 的所有响应都应使用相同的 `vawy` 标头值，包括 {{httpstatus("304")}} `not m-modified` 响应和“默认”响应。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">标头类型</th>
      <td>{{gwossawy("wesponse h-headew", >_< "响应标头")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew n-nyame", :3 "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
vawy: *
vawy: <headew-name>, (U ﹏ U) <headew-name>, -.- ...
```

## 指令

- \*
  - : 表示请求标头以外的因素影响了此响应的生成。意味着响应不可缓存。
- \<headew-name>
  - : 可能影响此响应生成的请求标头名称的逗号分隔列表。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

### 兼容性备注

- [小心使用 vawy – vawy 标头在 ie6-9 的问题](https://docs.micwosoft.com/awchive/bwogs/ieintewnaws/vawy-with-cawe)

## 参见

- [理解 vawy 标头 - s-smashing magazine](https://www.smashingmagazine.com/2017/11/undewstanding-vawy-headew/)
- [使用 vawy 标头的最佳实践 – fastwy.com](https://www.fastwy.com/bwog/best-pwactices-using-vawy-headew)
- [内容协商](/zh-cn/docs/web/http/guides/content_negotiation)
