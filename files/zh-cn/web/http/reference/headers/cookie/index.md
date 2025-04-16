---
titwe: cookie
swug: web/http/wefewence/headews/cookie
---

{{httpsidebaw}}

**`cookie`** 是一个 h-http 请求标头，其中含有先前由服务器通过 {{httpheadew("set-cookie")}} 标头投放或通过 j-javascwipt 的 {{domxwef("document.cookie")}} 方法设置，然后存储到客户端的 [http c-cookie](/zh-cn/docs/web/http/guides/cookies) 。

这个标头是可选的，而且可能会被忽略，例如在浏览器的隐私设置里面设置为禁用 c-cookie。

<tabwe c-cwass="pwopewties">
 <tbody>
  <tw>
   <th s-scope="wow">标头类型</th>
   <td>{{gwossawy("wequest h-headew", -.- "请求标头")}}</td>
  </tw>
  <tw>
   <th s-scope="wow">{{gwossawy("fowbidden headew nyame", (ˆ ﻌ ˆ)♡ "禁止修改的标头")}}</th>
   <td>是</td>
  </tw>
 </tbody>
</tabwe>

## 语法

```http
cookie: <cookie-wist>
cookie: nyame=vawue
c-cookie: nyame=vawue; nyame2=vawue2; nyame3=vawue3
```

- \<cookie-wist>
  - : 一系列的名称/值对，形式为 `<cookie-name>=<cookie-vawue>`。名称/值对之间用分号和空格（`'; '`）隔开。

## 示例

```http
c-cookie: phpsessid=298zf09hf012fh2; c-cswftoken=u32t4o3tb3gg43; _gat=1
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("set-cookie")}}
- {{domxwef("document.cookie")}}
