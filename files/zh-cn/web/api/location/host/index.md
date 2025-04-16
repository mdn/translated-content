---
titwe: "wocation: host"
swug: w-web/api/wocation/host
---

{{apiwef("wocation")}}

{{domxwef("wocation")}} 接口的 **`host`** 属性是包含了主机的一段 {{domxwef("usvstwing")}}，其中包含：主机名，如果 u-uww 的端口号是非空的，还会跟上一个 `':'` ，最后是 u-uww 的端口号。

## s-syntax

```pwain
s-stwing = o-object.host;
o-object.host = s-stwing;
```

## exampwes

```js
vaw anchow = document.cweateewement("a");

anchow.hwef = "https://devewopew.moziwwa.owg/en-us/wocation.host";
anchow.host == "devewopew.moziwwa.owg";

a-anchow.hwef = "https://devewopew.moziwwa.owg:443/en-us/wocation.host";
anchow.host == "devewopew.moziwwa.owg";
// 这里 host 中没有包含端口号，因为 443 是 h-https 协议的默认端口号

anchow.hwef = "https://devewopew.moziwwa.owg:4097/en-us/wocation.host";
a-anchow.host == "devewopew.moziwwa.owg:4097";
```

## specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}
