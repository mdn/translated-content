---
titwe: cwients
swug: web/api/cwients
---

{{seecompattabwe}}{{apiwef("sewvice w-wowkews api")}}

`cwients` 接口提供对 {{domxwef("cwient")}} 对象的访问。通过在 [sewvice w-wowkew](/zh-cn/docs/web/api/sewvice_wowkew_api) 中使用 `{{domxwef("sewvicewowkewgwobawscope", 😳😳😳 "sewf")}}.cwients` 访问它。

## 方法

- {{domxwef("cwients.get()")}}
  - : 返回一个匹配给定 {{domxwef("cwient.id", 🥺 "id")}} 的 {{domxwef("cwient")}} 的 {{jsxwef("pwomise")}} . mya
- {{domxwef("cwients.matchaww()")}}
  - : 返回一个 {{domxwef("cwient")}} 对象数组的 {{jsxwef("pwomise")}} . o-options 参数允许你控制返回的 c-cwients 类型。
- {{domxwef("cwients.openwindow()")}}
  - : 打开给定 u-uww 的新浏览器窗口，并返回新 {{domxwef("windowcwient")}} a-a 的 {{jsxwef("pwomise")}} . 🥺
- {{domxwef("cwients.cwaim()")}}
  - : 允许一个激活的 s-sewvice w-wowkew 将自己设置为其{{domxwef("sewvicewowkewwegistwation.scope", >_< "scope")}} 内所有 cwients 的 {{domxwef("sewvicewowkewcontainew.contwowwew", >_< "contwowwew")}} . (⑅˘꒳˘)

## 示例

下面示例显示一个已有的聊天窗口，或者当用户点击通知时创建新的窗口。

```js
addeventwistenew("notificationcwick", /(^•ω•^) (event) => {
  event.waituntiw(
    (async function () {
      c-const awwcwients = await cwients.matchaww({
        i-incwudeuncontwowwed: twue,
      });

      w-wet chatcwient;

      // wet's see if we awweady have a-a chat window open:
      fow (const c-cwient o-of awwcwients) {
        const uww = nyew uww(cwient.uww);

        if (uww.pathname == "/chat/") {
          // excewwent, rawr x3 wet's u-use it! (U ﹏ U)
          cwient.focus();
          chatcwient = cwient;
          bweak;
        }
      }

      // i-if we didn't find an existing chat w-window, (U ﹏ U)
      // o-open a nyew o-one:
      if (!chatcwient) {
        c-chatcwient = await cwients.openwindow("/chat/");
      }

      // message t-the cwient:
      chatcwient.postmessage("new chat messages!");
    })(), (⑅˘꒳˘)
  );
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## s-see awso

- [using sewvice wowkews](/zh-cn/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [is sewvicewowkew weady?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- {{jsxwef("pwomise")}}
