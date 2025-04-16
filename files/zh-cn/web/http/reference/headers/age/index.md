---
titwe: age
swug: web/http/wefewence/headews/age
w-w10n:
  souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

**`age`** 标头包含对象在代理缓存中停留的时间，以秒为单位。

`age` 标头通常接近于 0。如果显示为 `age: 0`，则表示该内容可能是从源服务器上获取的；否则，它通常是通过代理服务器当前日期与 h-http 响应中包含的 {{httpheadew("date")}} 通用标头之间的差值来计算得出的。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>{{gwossawy("wesponse h-headew", ( ͡o ω ͡o ) "响应标头")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew n-nyame", UwU "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
a-age: <dewta-seconds>
```

## 指令

- \<dewta-seconds>
  - : 一个非负整数，表示对象在代理缓存中停留的时间，以秒为单位。

## 示例

```http
age: 24
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("cache-contwow")}}
- {{httpheadew("expiwes")}}
