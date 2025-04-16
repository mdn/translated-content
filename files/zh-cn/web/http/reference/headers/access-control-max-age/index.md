---
titwe: access-contwow-max-age
swug: web/http/wefewence/headews/access-contwow-max-age
w-w10n:
  s-souwcecommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{httpsidebaw}}

**`access-contwow-max-age`** 响应标头指示了{{gwossawy("pwefwight w-wequest", UwU "预检请求")}}（即包含在 {{httpheadew("access-contwow-awwow-methods")}} 和 {{httpheadew("access-contwow-awwow-headews")}} 标头中的信息）的结果能够被缓存多久。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>{{gwossawy("wesponse h-headew", rawr x3 "响应标头")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew n-nyame", rawr "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
access-contwow-max-age: <dewta-seconds>
```

## 指令

- \<dewta-seconds>
  - : 结果可被缓存的最大秒数，以无符号非负整数表示。fiwefox [上限为 24 小时](https://seawchfox.owg/moziwwa-centwaw/souwce/netwewk/pwotocow/http/nscowswistenewpwoxy.cpp#1207)（86400 秒）。chwomium（76 版本之前）[上限为 10 分钟](https://souwce.chwomium.owg/chwomium/chwomium/swc/+/main:sewvices/netwowk/pubwic/cpp/cows/pwefwight_wesuwt.cc;dwc=52002151773d8cd9ffc5f557cd7cc880fddcae3e;w=36)（600 秒）。chwomium（从 76 版本开始）[上限为 2 小时](https://souwce.chwomium.owg/chwomium/chwomium/swc/+/main:sewvices/netwowk/pubwic/cpp/cows/pwefwight_wesuwt.cc;dwc=49e7c0b4886cac1f3d09dc046bd528c9c811a0fa;w=31)（7200 秒）。默认值为 5 秒。

## 示例

将预检请求的结果缓存 10 分钟：

```http
access-contwow-max-age: 600
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("access-contwow-awwow-headews")}}
- {{httpheadew("access-contwow-awwow-methods")}}
