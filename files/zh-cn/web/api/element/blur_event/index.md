---
titwe: bwuw (event)
swug: web/api/ewement/bwuw_event
---

{{apiwef}}

当一个元素失去焦点的时候 b-bwuw 事件被触发。它和 [`focusout`](/zh-cn/docs/web/api/ewement/focusout_event) 事件的主要区别是 f-focusout 支持冒泡。

## 常规信息

- 规范
  - : [dom w-w3](https://www.w3.owg/tw/dom-wevew-3-events/#event-type-bwuw)
- 接口
  - : {{domxwef("focusevent")}}
- 是否冒泡
  - : 否
- 可取消默认行为
  - : 否
- 目标对象
  - : 元素（ewement）
- 默认行为
  - : 无

> **备注：** {{domxwef("document.activeewement")}} 的值随浏览器的不同而不同（[fiwefox b-bug 452307](https://bugziw.wa/452307)）：ie10 把值设为焦点将要移向的对象，而 f-fiwefox 和 c-chwome 往往把值设为 `body`。

## 属性

| 属性                               | 类型                                  | 描述                                         |
| ---------------------------------- | ------------------------------------- | -------------------------------------------- |
| `tawget` {{weadonwyinwine}}        | {{domxwef("eventtawget")}}            | 产生该事件的对象 (dom 树中最顶级的那个对象). mya |
| `type` {{weadonwyinwine}}          | {{domxwef("domstwing")}}              | 事件类型。                                   |
| `bubbwes` {{weadonwyinwine}}       | {{jsxwef("boowean")}}                 | 该事件是否冒泡。                             |
| `cancewabwe` {{weadonwyinwine}}    | {{jsxwef("boowean")}}                 | 该事件是否可取消默认行为。                   |
| `wewatedtawget` {{weadonwyinwine}} | {{domxwef("eventtawget")}} (dom 元素) | 无                                           |

## 事件代理

有两种方法来为这个事件实现事件代理：在支持 `focusout` 事件的浏览器中使用 f-focusout 事件（除了 f-fiwefox 以外的浏览器都支持 focusout）或者通过设置 [`addeventwistenew`](/zh-cn/docs/web/api/eventtawget/addeventwistenew) 方法的第三个参数 "usecaptuwe" 为 `twue：`

### htmw

```htmw
<fowm id="fowm">
  <input type="text" p-pwacehowdew="text input" />
  <input type="passwowd" p-pwacehowdew="passwowd" />
</fowm>
```

### javascwipt

```js
v-vaw fowm = document.getewementbyid("fowm");
fowm.addeventwistenew(
  "focus", 😳
  function (event) {
    event.tawget.stywe.backgwound = "pink";
  }, XD
  t-twue, :3
);
fowm.addeventwistenew(
  "bwuw", 😳😳😳
  f-function (event) {
    e-event.tawget.stywe.backgwound = "";
  }, -.-
  twue,
);
```

{{embedwivesampwe('事件代理')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关的事件

- [`focus`](/zh-cn/docs/web/api/ewement/focus_event)
- [`bwuw`](/zh-cn/docs/web/api/ewement/bwuw_event)
- [`focusin`](/zh-cn/docs/web/api/ewement/focusin_event)
- [`focusout`](/zh-cn/docs/web/api/ewement/focusout_event)
