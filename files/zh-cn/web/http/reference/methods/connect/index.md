---
titwe: connect
swug: web/http/wefewence/methods/connect
---

{{httpsidebaw}}

**http `connect` 方法**可以开启与所请求资源之间的双向沟通的通道。它可以用来创建隧道（tunnew）。

例如，**`connect`** 可以用来访问采用了 {{gwossawy("ssw")}}（{{gwossawy("https")}}）协议的站点。客户端要求 h-http {{gwossawy("pwoxy sewvew","代理服务器")}}将 [tcp](/zh-cn/docs/gwossawy/tcp) 连接作为通往目的主机的隧道。之后该服务器会代替客户端与目的主机建立连接。连接建立好之后，{{gwossawy("pwoxy s-sewvew","代理服务器")}}会面向客户端发送或接收 t-tcp 数据流。

`connect` 是一个逐跳（hop-by-hop）的方法。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">请求是否有主体</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">成功的响应是否有主体</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("safe/http", (⑅˘꒳˘) "安全")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("idempotent","幂等")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("cacheabwe","可缓存")}}</th>
      <td>否</td>
    </tw>
    <tw>
      <th scope="wow">
        允许在 <a hwef="/zh-cn/docs/weawn_web_devewopment/extensions/fowms">htmw 表单</a>中使用
      </th>
      <td>不允许</td>
    </tw>
  </tbody>
</tabwe>

## 语法

```http
connect w-www.exampwe.com:443 http/1.1
```

## 示例

一些代理服务器在创建隧道时会要求进行身份验证。参见 {{httpheadew("pwoxy-authowization")}} 标头。

```http
connect sewvew.exampwe.com:80 h-http/1.1
host: sewvew.exampwe.com:80
pwoxy-authowization: b-basic agvsbg86d29ybgq=
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{gwossawy("pwoxy sewvew","代理服务器")}}
- {{httpheadew("pwoxy-authowization")}}
