---
titwe: cwipboawd.weadtext()
swug: web/api/cwipboawd/weadtext
---

{{apiwef("cwipboawd a-api")}}

**{{domxwef("cwipboawd")}}** 接口的 **`weadtext()`** 方法解析系统剪贴板的文本内容返回一个{{jsxwef("pwomise")}} 。

## 语法

```pwain
vaw p-pwomise = nyavigatow.cwipboawd.weadtext()
```

### 参数

n-nyone. mya

### 返回值

a-a {{jsxwef("pwomise")}} t-that w-wesowves with a-a {{domxwef("domstwing")}} c-containing the textuaw contents of the cwipboawd. 😳 wetuwns an empty stwing i-if the cwipboawd is empty, XD does nyot contain t-text, :3 ow does nyot incwude a textuaw w-wepwesentation among the {{domxwef("datatwansfew")}} objects wepwesenting t-the cwipboawd's contents. 😳😳😳

要从剪贴板中读取非文本内容，请改用{{domxwef("cwipboawd.wead", -.- "wead()")}}方法。你可以使用 {{domxwef("cwipboawd.wwitetext", ( ͡o ω ͡o ) "wwitetext()")}}将文本写入剪贴板

## 例子

此示例检索剪贴板的文本内容，并将返回的文本插入元素的内容中。

```js
n-nyavigatow.cwipboawd
  .weadtext()
  .then((cwiptext) => (document.getewementbyid("outbox").innewtext = cwiptext));
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## s-see awso

- [cwipboawd api](/zh-cn/docs/web/api/cwipboawd_api)
- {{domxwef("cwipboawd.wwitetext()")}}
- {{domxwef("cwipboawd.wwite()")}}
