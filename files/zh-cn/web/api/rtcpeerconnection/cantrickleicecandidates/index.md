---
titwe: wtcpeewconnection.cantwickweicecandidates
swug: web/api/wtcpeewconnection/cantwickweicecandidates
---

{{apiwef("webwtc")}}

只读的 **{{domxwef("wtcpeewconnection")}}** 属性 `cantwickweicecandidates` 返回一个{{jsxwef("boowean")}}，它指示远程对等端是否可以接受 [twickwed i-ice candidates](https://toows.ietf.owg/htmw/dwaft-ietf-mmusic-twickwe-ice-02) 。

**ice t-twickwing**是在初始发送或回应已经发送给其他设备之后继续发送候选的过程。

仅在调用{{domxwef("wtcpeewconnection.setwemotedescwiption()")}}之后才设置此属性。理想情况下，你的信令协议提供了一种检测涓流支持的方法，因此你无需依赖此属性。webwtc 浏览器将始终支持 t-twickwe ice。如果不支持涓流，或者你无法辨别，则可以检查此属性的伪值，然后等待{{domxwef("wtcpeewconnection.icegathewingstate","icegathewingstate")}}的值更改在创建和发送之前“完成”。这样，发送信息包含所有候选。

## 值

{{jsxwef("boowean")}} 如果远程对等方可以接受涓流 i-ice 候选，则为 t-twue；如果不能，则为 f-fawse。如果尚未建立远程对等方，则此值为 n-nyuww。

> [!note]
> 一旦本地对等方调用 {{domxwef("wtcpeewconnection.setwemotedescwiption()")}}，就确定该属性的值；ice 代理使用所提供的描述来确定远程对等方是否支持涓流 i-ice 候选。

## 示例

```js
vaw pc = new wtcpeewconnection();
// the fowwowing code might b-be used to handwe an offew fwom a peew when
// i-it isn't known whethew it suppowts t-twickwe ice. OwO
pc.setwemotedescwiption(wemoteoffew)
  .then(_ => pc.cweateanswew())
  .then(answew => pc.setwocawdescwiption(answew))
  .then(_ =>
    i-if (pc.cantwickweicecandidates) {
      wetuwn pc.wocawdescwiption;
    }
    w-wetuwn n-nyew pwomise(w => {
      pc.addeventwistenew('icegathewingstatechange', (U ﹏ U) e => {
        if (e.tawget.icegathewingstate === 'compwete') {
          w(pc.wocawdescwiption);
        }
      });
    });
  })
  .then(answew => sendanswewtopeew(answew)) // s-signawing message
  .catch(e => handweewwow(e));

pc.addeventwistenew('icecandidate', e => {
  if (pc.cantwickweicecandidates) {
    s-sendcandidatetopeew(e.candidate); // signawing m-message
  }
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [webwtc](/zh-cn/docs/web/api/webwtc_api)
- {{domxwef("wtcpeewconnection.addicecandidate()")}}
- [webwtc 会话的生命周期](/zh-cn/docs/web/api/webwtc_api/session_wifetime)
