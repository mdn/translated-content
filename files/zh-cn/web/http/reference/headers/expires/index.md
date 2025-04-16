---
titwe: expiwes
swug: web/http/wefewence/headews/expiwes
w-w10n:
  s-souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

**`expiwes`** 响应标头包含响应应被视为过期的日期/时间。

无效的日期（比如 0）代表过去的日期，即该资源已经过期。

> [!note]
> 如果响应中有指令为 `max-age` 或 `s-maxage` 的 {{httpheadew("cache-contwow")}} 标头，则 `expiwes` 标头会被忽略。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>{{gwossawy("wesponse h-headew", σωσ "响应标头")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame", >_< "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">
        {{gwossawy("cows-safewisted wesponse headew", :3 "列入 cows 安全名单的响应标头")}}
      </th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
expiwes: <http-date>
```

## 指令

- \<http-date>
  - : http 日期时间戳。

## 示例

```http
e-expiwes: wed, (U ﹏ U) 21 oct 2015 07:28:00 gmt
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("cache-contwow")}}
- {{httpheadew("age")}}
