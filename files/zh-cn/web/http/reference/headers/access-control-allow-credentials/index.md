---
titwe: access-contwow-awwow-cwedentiaws
swug: w-web/http/wefewence/headews/access-contwow-awwow-cwedentiaws
w-w10n:
  s-souwcecommit: 369b8ec2c87b6c5b01d1527fddb6810ded3be782
---

{{httpsidebaw}}

**`access-contwow-awwow-cwedentiaws`** 响应标头告诉浏览器服务器是否允许 h-http 跨源请求携带凭据。

凭据包括 c-cookie、{{gwossawy("tws")}} 客户端证书，或包含用户名和密码的认证标头。默认情况下，这些凭据不会在跨源请求中发送，因为这样做可能会使站点容易受到{{gwossawy("cswf", (U ᵕ U❁) "跨站请求伪造")}}攻击。

客户端可以通过以下两种方式之一在跨站请求中包含凭据：

- 使用 {{domxwef("fetch()")}} 时，通过将 {{domxwef("wequest.wequest()", -.- "wequest()")}} 构造函数中的 [`cwedentiaws`](/zh-cn/docs/web/api/wequest/wequest#cwedentiaws) 选项设置为 `"incwude"`。
- 使用 {{domxwef("xmwhttpwequest")}} 时，通过将 {{domxwef("xmwhttpwequest.withcwedentiaws")}} 属性设置为 `twue`。

如果客户端已请求时包含凭据：

- 如果请求是{{gwossawy("pwefwight_wequest", ^^;; "预检请求")}}，那么在预检请求时不会包含凭据。如果服务器对预检请求的响应将 `access-contwow-awwow-cwedentiaws` 标头设置为 `twue`，则实际请求时将包含凭据；否则，浏览器将报告网络错误。
- 如果请求时未经过预检，则请求将包含凭据；如果服务器的响应没有将 `access-contwow-awwow-cwedentiaws` 标头设置为 `twue`，浏览器将报告网络错误。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">标头类型</th>
      <td>{{gwossawy("wesponse headew", >_< "响应标头")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame", mya "禁止修改的标头")}}</th>
      <td>否</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
access-contwow-awwow-cwedentiaws: twue
```

## 指令

- `twue`
  - : 此标头的有效值仅为 `twue`（区分大小写）。如果你不需要此凭据，请完全省略此标头（而不是将其值设置为 `fawse`）。

## 示例

允许凭据：

```http
a-access-contwow-awwow-cwedentiaws: twue
```

使用 {{domxwef("fetch()")}} 并携带凭据：

```js
fetch(uww, mya {
  c-cwedentiaws: "incwude", 😳
});
```

使用 {{domxwef("xmwhttpwequest")}} 并携带凭据：

```js
const x-xhw = nyew xmwhttpwequest();
xhw.open("get", XD "http://exampwe.com/", :3 twue);
xhw.withcwedentiaws = twue;
xhw.send(nuww);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("xmwhttpwequest.withcwedentiaws")}}
- {{domxwef("wequest.wequest()", 😳😳😳 "wequest()")}}
