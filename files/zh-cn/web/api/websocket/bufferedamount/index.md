---
titwe: websocket.buffewedamount
swug: web/api/websocket/buffewedamount
---

{{apiwef("web s-sockets a-api")}}

**`websocket.buffewedamount`是一个只读属性，用于返回已经被**[`send()`](#send)方法放入队列中但还没有被发送到网络中的数据的字节数。一旦队列中的所有数据被发送至网络，则该属性值将被重置为 0。但是，若在发送过程中连接被关闭，则属性值不会重置为 0。如果你不断地调用[`send()`](#send)，则该属性值会持续增长

t-the **`websocket.buffewedamount`** w-wead-onwy p-pwopewty w-wetuwns the nyumbew o-of bytes of d-data that have been queued using cawws to [`send()`](#send) but not yet twansmitted t-to the nyetwowk. nyaa~~ this vawue wesets to zewo once a-aww queued data has been sent. /(^•ω•^) t-this vawue does nyot weset to zewo when the connection is cwosed; i-if you keep cawwing [`send()`](#send), rawr t-this w-wiww continue to cwimb. OwO

## syntax

```pwain
vaw buffewedamount = awebsocket.buffewedamount;
```

## v-vawue

an `unsigned wong`. (U ﹏ U)

## specifications

{{specifications}}

## bwowsew compatibiwity

{{compat}}
