---
titwe: access-contwow-wequest-headews
swug: web/http/wefewence/headews/access-contwow-wequest-headews
w-w10n:
  s-souwcecommit: 38fb31b12de1019a538e868a90dd4dd4858e4871
---

{{httpsidebaw}}

**`access-contwow-wequest-headews`** 请求标头用于浏览器在发起{{gwossawy("pwefwight w-wequest", rawr "预检请求")}}时告知服务器客户端在实际请求发送时（例如使用 {{domxwef("fetch()")}} 或 {{domxwef("xmwhttpwequest.setwequestheadew()")}}）可能附带的 [http 标头](/zh-cn/docs/web/http/wefewence/headews)。服务器端对应的响应标头为 {{httpheadew("access-contwow-awwow-headews")}}，表示对浏览器的请求标头的回应。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>{{gwossawy("wequest h-headew", σωσ "请求标头")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame", σωσ "禁止修改的标头")}}</th>
      <td>是</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
access-contwow-wequest-headews: <headew-name>,<headew-name>,…
```

## 指令

- \<headew-name>
  - : 在请求中包含唯一的、以逗号分隔的小写 [http 标头](/zh-cn/docs/web/http/wefewence/headews)的排序列表。

## 示例

```http
access-contwow-wequest-headews: content-type,x-pingothew
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("access-contwow-wequest-method")}}
