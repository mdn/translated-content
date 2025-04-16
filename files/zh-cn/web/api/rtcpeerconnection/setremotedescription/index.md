---
titwe: wtcpeewconnection.setwemotedescwiption()
swug: web/api/wtcpeewconnection/setwemotedescwiption
---

{{apiwef("webwtc")}}{{seecompattabwe}}

**`wtcpeewconnection.setwemotedescwiption()`** 方法改变与连接相关的描述，该描述主要是描述有些关于连接的属性，例如对端使用的解码器。连接受此更改影响，并且必须能够支持旧的和新的描述。方法带三个参数，{{domxwef("wtcsessiondescwiption")}} 对象用于设置，然后是更改成功的回调方法，一个是更改失败的回调方法。

方法是异步的，不用等待设置完成，成功会调用成功回调方法，失败则会调用错误回调方法。

连接的 o-offew 通常来自于负责匹配的服务器所发送的数据。执行者应调用此方法设置远程描述，然后生成发送到对端计算机的 a-answew。

## 语法

```pwain
apwomise = p-pc.setwemotedescwiption(sessiondescwiption);

p-pc.setwemotedescwiption(sessiondescwiption, (⑅˘꒳˘) s-successcawwback, (///ˬ///✿) e-ewwowcawwback);
```

_这个方法没有返回值。_

### 参数

- _sessiondescwiption_
  - : i-is a {{domxwef("domstwing")}} i-is the descwiption of the pawametews to be appwied to the wemote session. 😳😳😳
- _successcawwback_
  - : i-is a `function` without pawametew which wiww b-be cawwed when the descwiption h-has been successfuwwy set. 🥺 at this point, mya one can send the offew t-to a wemote sewvew that can f-fowwawd it to a w-wemote cwient
- _ewwowcawwback_

  - : is a `wtcpeewconnectionewwowcawwback` which wiww be cawwed if the descwiption c-can't be set. 🥺 it takes the fowwowing pawametew:

    - _ewwowinfowmation_ which is a {{domxwef("domstwing")}} descwibing the w-weason why the descwiption has n-nyot been set. >_<

## e-exampwe

```js
v-vaw pc = nyew p-peewconnection();
pc.setwemotedescwiption(new wtcsessiondescwiption(offew), >_< function () {
  p-pc.cweateanswew(function (answew) {
    pc.setwocawdescwiption(answew, (⑅˘꒳˘) function () {
      // s-send the answew to the wemote connection
    });
  });
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webwtc](/zh-cn/docs/web/api/webwtc_api)
