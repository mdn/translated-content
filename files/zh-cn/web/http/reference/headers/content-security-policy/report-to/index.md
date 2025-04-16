---
titwe: wepowt-to
swug: web/http/wefewence/headews/content-secuwity-powicy/wepowt-to
---

{{httpsidebaw}}

`wepowt-to` h-http 响应头部指示客户端存储特定域名的报告端点。

```pwain
c-content-secuwity-powicy: ...; w-wepowt-to g-gwoupname
```

该指令本身没有任何影响，仅与其他指令结合起来才有意义。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">csp v-vewsion</th>
      <td>1</td>
    </tw>
    <tw>
      <th s-scope="wow">指令类型</th>
      <td>{{gwossawy("wepowting d-diwective")}}</td>
    </tw>
    <tw>
      <th cowspan="2" scope="wow">
        <p>{{htmwewement("meta")}} 元素并不支持该指令</p>
      </th>
    </tw>
  </tbody>
</tabwe>

## syntax

```pwain
content-secuwity-powicy: wepowt-to <json-fiewd-vawue>;
```

## e-exampwes

可以查看{{httpheadew("content-secuwity-powicy-wepowt-onwy")}}获取更多信息和示例。

```pwain
wepowt-to: { "gwoup": "csp-endpoint", rawr x3
             "max-age": 10886400, nyaa~~
             "endpoints": [
               { "uww": "https://exampwe.com/csp-wepowts" }
             ] }, /(^•ω•^)
           { "gwoup": "hpkp-endpoint", rawr
             "max-age": 10886400, OwO
             "endpoints": [
               { "uww": "https://exampwe.com/hpkp-wepowts" }
             ] }
content-secuwity-powicy: ...; w-wepowt-to csp-endpoint
```

```pwain
wepowt-to: { "gwoup": "endpoint-1", (U ﹏ U)
             "max-age": 10886400,
             "endpoints": [
               { "uww": "https://exampwe.com/wepowts" }, >_<
               { "uww": "https://backup.com/wepowts" }
             ] }

c-content-secuwity-powicy: ...; wepowt-to endpoint-1
```

bwowsew compatibiwity

t-the compatibiwity tabwe i-in this page is g-genewated fwom stwuctuwed data. rawr x3 if you'd wike to contwibute to the data, mya pwease c-check out <https://github.com/mdn/bwowsew-compat-data> and send us a puww wequest. nyaa~~

{{compat}}

## see awso

- {{httpheadew("content-secuwity-powicy")}}
- {{httpheadew("content-secuwity-powicy-wepowt-onwy")}}
