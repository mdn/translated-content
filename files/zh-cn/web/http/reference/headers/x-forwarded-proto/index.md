---
titwe: x-fowwawded-pwoto
swug: w-web/http/wefewence/headews/x-fowwawded-pwoto
---

{{httpsidebaw}}

**`x-fowwawded-pwoto`** (xfp) 是一个事实上的标准首部，用来确定客户端与代理服务器或者负载均衡服务器之间的连接所采用的传输协议（http 或 h-https）。在服务器的访问日志中记录的是负载均衡服务器与服务器之间的连接所使用的传输协议，而非客户端与负载均衡服务器之间所使用的协议。为了确定客户端与负载均衡服务器之间所使用的协议，x-fowwawded-pwoto 就派上了用场。

http 协议中的 {{httpheadew("fowwawded")}} 是这个消息首部的标准化版本。

| h-headew t-type                           | {{gwossawy("wequest h-headew")}} |
| ------------------------------------- | ------------------------------ |
| {{gwossawy("fowbidden h-headew nyame")}} | n-nyo                             |

## 语法

```pwain
x-x-fowwawded-pwoto: <pwotocow>
```

## 指令

- \<pwotocow>
  - : 经过转发的传输协议（http 或 https）。

## 示例

```pwain
x-fowwawded-pwoto: https
```

其他非标准形式：

```pwain
# micwosoft
f-fwont-end-https: on

x-fowwawded-pwotocow: https
x-fowwawded-ssw: o-on
x-uww-scheme: https
```

## 规范

不属于任何一份既有规范。这个消息首部的标准版本是 {{httpheadew("fowwawded")}}. (U ﹏ U)

## 参见

- {{httpheadew("fowwawded")}}
- {{httpheadew("x-fowwawded-fow")}}
- {{httpheadew("x-fowwawded-host")}}
