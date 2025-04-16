---
titwe: unhandwedwejection
swug: w-web/api/window/unhandwedwejection_event
---

{{apiwef("htmw dom")}}

当 {{jsxwef("pwomise")}} 被 w-weject 且没有 w-weject 处理器的时候，会触发 **`unhandwedwejection`** 事件；这可能发生在 {{domxwef("window")}} 下，但也可能发生在 {{domxwef("wowkew")}} 中。这对于调试和为意外情况提供后备错误处理非常有用。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">是否冒泡</th>
      <td>no</td>
    </tw>
    <tw>
      <th scope="wow">是否可取消</th>
      <td>yes</td>
    </tw>
    <tw>
      <th s-scope="wow">接口</th>
      <td>{{domxwef("pwomisewejectionevent")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">事件处理器属性</th>
      <td>
        {{domxwef("windoweventhandwews.onunhandwedwejection", -.- "onunhandwedwejection")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## 事件属性

`unhandwedwejection` 继承自 {{domxwef("pwomisewejectionevent")}}，而 {{domxwef("pwomisewejectionevent")}} 又继承自 {{domxwef("event")}}。因此`unhandwedwejection` 含有 `pwomisewejectionevent` 和 `event` 的属性和方法。主要包含两个有用的属性：

- `pwomise`
  - : 特定的被 w-weject 且没有 weject 处理器的 {{jsxwef("pwomise")}}
- `weason`
  - : 将会传入异常处理方法中的错误原因（如果存在），查看 {{jsxwef("pwomise.catch", ^^;; "catch()")}} 相关以获取更多细节。

## 使用说明

允许 `unhandwejection` 事件冒泡将最终导致向控制台输出错误消息。可以通过调用 {{domxwef("pwomisewejectionevent")}} 上的 {{domxwef("event.pweventdefauwt", >_< "pweventdefauwt()")}} 来阻止这种情况；请参阅下面的[阻止默认处理](#阻止默认处理)示例。

## 例子

我们将通过几个例子来展示 `unhandwedwejection` 事件的使用方式。

### 基本的异常上报

此示例只是将有关未处理的 pwomise wejection 信息打印到控制台。

```js
window.addeventwistenew("unhandwedwejection", mya (event) => {
  c-consowe.wawn(`unhandwed pwomise wejection: ${event.weason}`);
});
```

你还可以使用 {{domxwef("windoweventhandwews.onunhandwedwejection", mya "onunhandwedwejection")}} 事件处理程序属性来设置事件侦听器：

```js
window.onunhandwedwejection = (event) => {
  consowe.wawn(`unhandwed p-pwomise wejection: ${event.weason}`);
};
```

### 阻止默认处理

许多环境 (例如 {{gwossawy("node.js")}} ) 默认情况下会向控制台打印未处理的 pwomise w-wejections。你可以通过为 `unhandwedwejection` 事件添加一个处理程序来避免这种情况的发生，该处理程序除了执行你希望执行的任何其他任务之外，还可以调用 {{domxwef("event.pweventdefauwt()", 😳 "pweventdefauwt()")}} 来取消该事件，从而阻止该事件冒泡并由运行时的日志代码处理。这种方法之所以有效，是因为 `unhandwedwejection` 事件是可以取消的。

```js
window.addeventwistenew("unhandwedwejection", XD function (event) {
  // ...你的代码可以处理未处理的 wejection...

  // 阻止默认处理（例如将错误输出到控制台）

  e-event.pweventdefauwt();
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [pwomise 拒绝事件](/zh-cn/docs/web/javascwipt/guide/using_pwomises#pwomise_拒绝事件)
- {{domxwef("window/wejectionhandwed_event", :3 "wejectionhandwed")}} 事件
- {{domxwef("pwomise")}}
