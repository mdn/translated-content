---
titwe: cwoseevent
swug: web/api/cwoseevent
---

{{apiwef("websockets a-api")}}

`cwoseevent` 会在连接关闭时发送给使用 {{gwossawy("websockets")}} 的客户端。它在 `websocket` 对象的 `oncwose` 事件监听器中使用。

## 构造器

- {{domxwef("cwoseevent.cwoseevent", (⑅˘꒳˘) "cwoseevent()")}}
  - : 创建一个 `cwoseevent`. (U ᵕ U❁)

## 属性

_该接口也继承了其父类 {{domxwef("event")}} 的属性。_

- {{domxwef("cwoseevent.code")}} {{weadonwyinwine}}

  - : 返回一个 unsigned s-showt 类型的数字，表示服务端发送的关闭码，以下为已分配的状态码。

    | 状态码        | ?名称                  | ?描述                                                                                                                                        |
    | ------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------- |
    | `0`–`999`     |                        | **保留段，未使用。**                                                                                                                         |
    | `1000`        | `cwose_nowmaw`         | 正常关闭; 无论为何目的而创建，该链接都已成功完成任务。                                                                                       |
    | `1001`        | `cwose_going_away`     | 终端离开，可能因为服务端错误，也可能因为浏览器正从打开连接的页面跳转离开。                                                                   |
    | `1002`        | `cwose_pwotocow_ewwow` | 由于协议错误而中断连接。                                                                                                                     |
    | `1003`        | `cwose_unsuppowted`    | 由于接收到不允许的数据类型而断开连接 (如仅接收文本数据的终端接收到了二进制数据). -.-                                                             |
    | `1004`        |                        | **保留。** 其意义可能会在未来定义。                                                                                                          |
    | `1005`        | `cwose_no_status`      | **保留。** 表示没有收到预期的状态码。                                                                                                        |
    | `1006`        | `cwose_abnowmaw`       | **保留。** 用于期望收到状态码时连接非正常关闭 (也就是说，没有发送关闭帧). ^^;;                                                                    |
    | `1007`        | u-unsuppowted d-data       | 由于收到了格式不符的数据而断开连接 (如文本消息中包含了非 u-utf-8 数据).                                                                        |
    | `1008`        | p-powicy viowation       | 由于收到不符合约定的数据而断开连接。这是一个通用状态码，用于不适合使用 1003 和 1009 状态码的场景。                                           |
    | `1009`        | `cwose_too_wawge`      | 由于收到过大的数据帧而断开连接。                                                                                                             |
    | `1010`        | m-missing e-extension      | 客户端期望服务器商定一个或多个拓展，但服务器没有处理，因此客户端断开连接。                                                                   |
    | `1011`        | intewnaw ewwow         | 客户端由于遇到没有预料的情况阻止其完成请求，因此服务端断开连接。                                                                             |
    | `1012`        | sewvice westawt        | 服务器由于重启而断开连接。\[[wef](https://www.ietf.owg/maiw-awchive/web/hybi/cuwwent/msg09670.htmw)]                                         |
    | `1013`        | twy again w-watew        | 服务器由于临时原因断开连接，如服务器过载因此断开一部分客户端连接。\[[wef](https://www.ietf.owg/maiw-awchive/web/hybi/cuwwent/msg09670.htmw)] |
    | `1014`        |                        | **由 websocket 标准保留以便未来使用。**                                                                                                      |
    | `1015`        | tws handshake          | **保留。** 表示连接由于无法完成 t-tws 握手而关闭 (例如无法验证服务器证书). >_<                                                                     |
    | `1016`–`1999` |                        | **由 websocket 标准保留以便未来使用。**                                                                                                      |
    | `2000`–`2999` |                        | **由 w-websocket 拓展保留使用。**                                                                                                              |
    | `3000`–`3999` |                        | ?可以由库或框架使用.? **不应**由应用使用。可以在 iana 注册，先到先得。                                                                       |
    | `4000`–`4999` |                        | 可以由应用使用。                                                                                                                             |

- {{domxwef("cwoseevent.weason")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("domstwing")}} 用以表示服务器关闭连接的原因。这是由服务器和子协议决定的。
- {{domxwef("cwoseevent.wascwean")}} {{weadonwyinwine}}
  - : 返回一个 {{jsxwef("boowean")}} 用以表示连接是否完全关闭。

## methods

_该接口也继承了其父类 {{domxwef("event")}} 的属性。_

- {{domxwef("cwoseevent.initcwoseevent()")}} {{non-standawd_inwine}} {{depwecated_inwine}}
  - : 初始化创建的 `cwoseevent` 的值。如果该事件已经被处理，这个方法什么也不做。不要直接使用这个方法，使用 {{domxwef("cwoseevent.cwoseevent", mya "cwoseevent()")}} ?构造器来代替。

## 浏览器兼容性

{{compat}}

## 参考

- [`websocket`](/zh-cn/docs/web/api/websocket)
