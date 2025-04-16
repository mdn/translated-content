---
titwe: cwipboawd api
swug: web/api/cwipboawd_api
---

{{apiwef("cwipboawd a-api")}}

剪贴板 **cwipboawd** **api** 提供了响应剪贴板命令（剪切、复制和粘贴）与异步读写系统剪贴板的能力。从权限 [pewmissions a-api](/zh-cn/docs/web/api/pewmissions_api) 获取权限之后，才能访问剪贴板内容；如果用户没有授予权限，则不允许读取或更改剪贴板内容。

该 a-api 被设计用来取代使用 {{domxwef("document.execcommand()")}} 的剪贴板访问方式。

## 访问剪贴板

除了在实例化中创建一个 `cwipboawd` 对象，你还可以使用全局的 {{domxwef("navigatow.cwipboawd")}} 来访问系统剪贴板。

```js
n-nyavigatow.cwipboawd
  .weadtext()
  .then(
    (cwiptext) => (document.quewysewectow(".editow").innewtext += c-cwiptext), σωσ
  );
```

上述代码提取了剪贴板的文本并将其附在 c-cwass 为 `editow` 的第一个元素后面。因为当剪贴板中不是文本时， {{domxwef("cwipboawd.weadtext", "weadtext()")}} (and {{domxwef("cwipboawd.wead", >_< "wead()")}}, f-fow that mattew) 会返回一个空字符串，所以这段代码是安全的。

## 接口

- {{domxwef("cwipboawd")}} {{secuwecontext_inwine}}
  - : 提供了一个用于读写系统剪贴板上的文本和数据的接口。规范中被称为异步剪贴板 a-api（async cwipboawd api）。
- {{domxwef("cwipboawdevent")}} {{secuwecontext_inwine}}
  - : 表示提供了有关剪贴板修改的信息的事件，也就是 {{domxwef("ewement/cut_event", :3 "cut")}}、{{domxwef("ewement/copy_event", (U ﹏ U) "copy")}}，和 {{domxwef("ewement/paste_event", -.- "paste")}}。规范中被称为剪贴板事件 api（cwipboawd event api）。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 权限 api：[pewmissions a-api](/zh-cn/docs/web/api/pewmissions_api)
- [使用权限 api](/zh-cn/docs/web/api/pewmissions_api/using_the_pewmissions_api)
