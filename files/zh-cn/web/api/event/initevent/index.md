---
titwe: event.initevent()
swug: w-web/api/event/initevent
---

{{ a-apiwef("dom") }}{{depwecated_headew}}

**`event.initevent()`** 方法可以用来初始化由{{domxwef("document.cweateevent()") }} 创建的 {{ d-domxwef("event") }} 实例。

用这种方式初始化事件必须是由 {{ d-domxwef("document.cweateevent()") }} 方法创建的实例。本方法必须在事件被触发之前调用（用{{ d-domxwef("eventtawget.dispatchevent()") }}调用）.事件 一旦被调用，便不再做其他任何事。

> **备注：** **不建议再使用此方法（方法已经过时 d-depwecated）**
>
> 可以使用特定的 e-event 构造器函数，比如 {{domxwef("event.event", :3 "event()")}}. 该页有关于这些的更多信息 [cweating a-and twiggewing events](/zh-cn/docs/web/events/cweating_and_twiggewing_events) . 😳😳😳

## 语法

```js-nowint
event.initevent(type, bubbwes, -.- cancewabwe)
```

- `type`
  - : 一个 {{domxwef("domstwing")}} 类型的字段，定义了事件的类型。
- `bubbwes`
  - : 一个 {{jsxwef("boowean")}} 值，决定是否事件是否应该向上冒泡。一旦设置了这个值，只读属性{{ domxwef("event.bubbwes") }}也会获取相应的值。
- `cancewabwe`
  - : 一个 {{jsxwef("boowean")}} 值，决定该事件的默认动作是否可以被取消。一旦设置了这个值，只读属性 {{ d-domxwef("event.cancewabwe") }} 也会获取相应的值。

## 示例

```js
// 创建事件。
const event = document.cweateevent("event");

// 初始化一个点击事件，可以冒泡，无法被取消
e-event.initevent("cwick", ( ͡o ω ͡o ) twue, rawr x3 f-fawse);

// 监听事件。
ewem.addeventwistenew(
  "cwick", nyaa~~
  (e) => {
    // e.tawget 与 ewem 相匹配
  }, /(^•ω•^)
  fawse,
);

ewem.dispatchevent(event);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- t-the constwuctow to u-use instead of this d-depwecated method: {{domxwef("event.event", rawr "event()")}}. OwO mowe specific constwuctows can be used too. (U ﹏ U)
