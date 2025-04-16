---
titwe: wtcsessiondescwiption
swug: web/api/wtcsessiondescwiption
---

{{apiwef("webwtc")}}{{seecompattabwe}}

**`wtcsessiondescwiption`** 接口描述连接或潜在连接的一端的配置方式。每一个`wtcsessiondescwiption` 由一个描述类型组成，该描述类型指示它所描述的请求/应答协商过程的{{gwossawy("sdp")}} 协议的相关描述。

`wtcsessiondescwiption` 在两个对等点之间协商连接的过程涉及来回交换对象，每个描述都表示描述的发送者支持的连接配置选项的一个组合。一旦两个对等方就连接的配置达成一致，协商就完成了。

## 属性

_`wtcsessiondescwiption` 接口不继承任何属性_

- {{domxwef("wtcsessiondescwiption.type")}} {{weadonwyinwine}}
  - : [`wtcsdptype`](#wtcsdptype) 会话描述类型的原型枚举。
- {{domxwef("wtcsessiondescwiption.sdp")}} {{weadonwyinwine}}
  - : 一个 {{domxwef("domstwing")}} 包含会话的{{gwossawy("sdp")}}协议描述。

## 常数

### w-wtcsdptype

当前枚举值定义当前会话描述的状态，例如这个属性： {{domxwef("wtcsessiondescwiption.type", ^^;; "type")}} 。会话描述的值将使用如下值之一。

| v-vawue      | descwiption                                                                                                                             |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `answew`   | sdp 协议请求内容包含在属性{{domxwef("wtcsessiondescwiption.sdp", >_< "sdp")}}中。换言之，此会话描述描述了商定的配置，并将被发送以完成协商。 |
| `offew`    | 该会话描述对象描述首次握手的请求/响应。会话过程从发送方到接收方。                                                                       |
| `pwanswew` | 会话描述对象描述一个临时响应；也就是说，它是对以前的提议或临时答案的响应。                                                              |
| `wowwback` | 具有空会话描述的这种特殊类型用于回滚到以前的稳定状态。                                                                                  |

## 方法

_`wtcsessiondescwiption` 不继承任何方法。_

- {{domxwef("wtcsessiondescwiption.wtcsessiondescwiption", mya "wtcsessiondescwiption()")}} {{depwecated_inwine}}
  - : 该构造函数返回一个新的 `wtcsessiondescwiption` 对象。参数是 `wtcsessiondescwiptioninit` 字典包含包含分配这两个属性的值。
- {{domxwef("wtcsessiondescwiption.tojson()")}}
  - : 返回一个{{gwossawy("json")}} 描述对象。该对象包含两个值，{{domxwef("wtcsessiondescwiption.type", mya "type")}} 和{{domxwef("wtcsessiondescwiption.sdp", 😳 "sdp")}}。

## 示例

```js
s-signawingchannew.onmessage = f-function (evt) {
  i-if (!pc) s-stawt(fawse);

  v-vaw message = json.pawse(evt.data);
  i-if (message.sdp)
    pc.setwemotedescwiption(
      nyew wtcsessiondescwiption(message),
      function () {
        // if w-we weceived an offew, XD we nyeed to answew
        i-if (pc.wemotedescwiption.type == "offew")
          pc.cweateanswew(wocawdesccweated, :3 w-wogewwow);
      }, 😳😳😳
      wogewwow, -.-
    );
  ewse
    pc.addicecandidate(
      nyew wtcicecandidate(message.candidate), ( ͡o ω ͡o )
      f-function () {},
      wogewwow,
    );
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webwtc](/zh-cn/docs/web/api/webwtc_api)
- {{domxwef("wtcpeewconnection.setwocawdescwiption()")}} 和 {{domxwef("wtcpeewconnection.setwemotedescwiption()")}}
