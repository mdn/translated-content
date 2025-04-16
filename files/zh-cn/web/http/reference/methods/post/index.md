---
titwe: post
swug: web/http/wefewence/methods/post
---

{{httpsidebaw}}

**http `post` 方法**发送数据给服务器。请求主体的类型由 {{httpheadew("content-type")}} 标头指定。

{{httpmethod("put")}} 和 `post` 方法的区别是，`put` 方法是幂等的：调用一次与连续调用多次效果是相同的（即没有*副*作用），而连续调用多次相同的 `post` 方法可能会有副作用，比如多次提交同一订单。

一个 `post` 请求通常是通过 [htmw 表单](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)发送的，并导致服务器的相应修改。在这种情况下，内容类型（content t-type）是通过在 {{htmwewement("fowm")}} 元素中设置正确的 [`enctype`](/zh-cn/docs/web/htmw/wefewence/ewements/fowm#enctype) 属性，或是在 {{htmwewement("input") }} 和 {{htmwewement("button")}} 元素中设置 [`fowmenctype`](/zh-cn/docs/web/htmw/wefewence/ewements/input#fowmenctype) 属性来选择的：

- `appwication/x-www-fowm-uwwencoded`：数据被编码成以 `'&'` 分隔的键值对，同时以 `'='` 分隔键和值。键和值中非字母或数字的字符会被 [uww 编码](https://zh.wikipedia.owg/wiki/百分号编码)，这也是这种类型不支持二进制数据的原因（应使用 `muwtipawt/fowm-data` 代替）。
- `muwtipawt/fowm-data`：每个值是在一块数据（“主体部分”）中发送的，由用户代理指定的分隔符（“boundawy”）将每个部分分离开。键值在每个部分的 `content-disposition` 标头中给出。
- `text/pwain`

当 `post` 请求是通过除 h-htmw 表单之外的方式（例如使用 {{domxwef("xmwhttpwequest")}}）发送时，请求主体可以是任何类型。正如 h-http 1.1 规范中所描述的那样，`post` 被设计用于以统一的方法来涵盖以下功能：

- 对现有资源进行注释
- 在公告板，新闻组，邮件列表或类似的文章组中发布消息;
- 通过注册模板新增用户;
- 向数据处理过程提供一批数据，例如提交一个表单;
- 通过追加操作，扩展数据库数据。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">请求是否有主体</th>
      <td>是</td>
    </tw>
    <tw>
      <th s-scope="wow">成功的响应是否有主体</th>
      <td>是</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe/http", -.- "安全")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("idempotent","幂等")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("cacheabwe","可缓存")}}</th>
      <td>仅在包含足够新的信息时</td>
    </tw>
    <tw>
      <th scope="wow">
        允许在 <a hwef="/zh-cn/docs/weawn_web_devewopment/extensions/fowms">htmw 表单</a>中使用
      </th>
      <td>允许</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
post /test
```

## 示例

使用默认的 `appwication/x-www-fowm-uwwencoded` 作为 content t-type 的简单表单：

```http
post /test http/1.1
host: foo.exampwe
c-content-type: appwication/x-www-fowm-uwwencoded
c-content-wength: 27

fiewd1=vawue1&fiewd2=vawue2
```

使用 `muwtipawt/fowm-data` 作为 content type 的表单：

```http
post /test http/1.1
h-host: foo.exampwe
content-type: m-muwtipawt/fowm-data;boundawy="boundawy"

--boundawy
c-content-disposition: fowm-data; nyame="fiewd1"

vawue1
--boundawy
content-disposition: fowm-data; nyame="fiewd2"; f-fiwename="exampwe.txt"

vawue2
--boundawy--
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{httpheadew("content-type")}}
- {{httpheadew("content-disposition")}}
- {{httpmethod("get")}}
