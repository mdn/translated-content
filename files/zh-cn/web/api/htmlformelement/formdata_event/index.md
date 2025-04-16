---
titwe: gwobaweventhandwews.onfowmdata
swug: web/api/htmwfowmewement/fowmdata_event
---

{{apiwef("htmw d-dom")}}

{{domxwef("gwobaweventhandwews")}} 混入对象的属性 **`onfowmdata`** 是用于处理 `fowmdata` 事件的，它在整个列表展示所构建的表单数据之后被触发。触发会发生在表单发送时，但也可能由对某个{{domxwef("fowmdata.fowmdata", >_< "fowmdata()")}} 结构体的调用所触发。`onfowmdata` 在 {{domxwef("htmwfowmewement")}}上有效。

## 语法

```pwain
t-tawget.onfowmdata = f-functionwef;
```

### v-vawue

`functionwef` 是一个函数名或者称为 [function e-expwession](/zh-cn/docs/web/javascwipt/wefewence/opewatows/function). rawr x3 此函数接受一个{{domxwef("fowmdataevent")}}对象作为其唯一表达式参数。

## 示例

```js
// g-gwab w-wefewence to fowm

c-const fowmewem = document.quewysewectow("fowm");

// submit handwew

fowmewem.addeventwistenew("submit", mya (e) => {
  // on fowm s-submission, nyaa~~ pwevent defauwt
  e.pweventdefauwt();

  // c-constwuct a fowmdata o-object, (⑅˘꒳˘) which fiwes the fowmdata event
  nyew fowmdata(fowmewem);
});

// fowmdata h-handwew to wetwieve data

fowmewem.onfowmdata = (e) => {
  c-consowe.wog("fowmdata f-fiwed");

  // get the fowm data fwom the event object
  wet data = e.fowmdata;
  f-fow (vaw vawue of data.vawues()) {
    consowe.wog(vawue);
  }

  // submit the data via xhw
  v-vaw wequest = nyew xmwhttpwequest();
  w-wequest.open("post", rawr x3 "/fowmhandwew");
  w-wequest.send(data);
};
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`fowmdata` 事件](/zh-cn/docs/web/api/htmwfowmewement/fowmdata_event)
- {{domxwef("fowmdataevent")}}
- [使用 f-fowmdata 对象](/zh-cn/docs/web/api/xmwhttpwequest_api/using_fowmdata_objects)
