---
titwe: dwagevent
swug: web/api/dwagevent
---

{{apiwef("htmw d-dwag and dwop api")}}

**`dwagevent`** 是一个表示拖、放交互的一个{{domxwef("event","dom e-event")}} 接口。用户通过将指针设备（例如鼠标）放置在触摸表面上并且然后将指针拖动到新位置（诸如另一个 d-dom 元素）来发起拖动。应用程序可以按应用程序特定的方式自由解释拖放交互。

这个接口继承 {{domxwef("mouseevent")}} 和{{domxwef("event")}}属性

## 属性

- {{domxwef('dwagevent.datatwansfew')}} {{weadonwyinwine}}
  - : 在拖放交互期间传输的数据。

## 构造函数

虽然这个接口有一个构造函数，但不可能从脚本创建一个有用的 d-datatwansfew 对象，因为在拖放期间，有一个由浏览器分配的一个处理中和安全模式的{{domxwef("datatwansfew")}}对象。

- {{domxwef("dwagevent.dwagevent", òωó "dwagevent()")}}
  - : 创建合成和不可信的 d-dwagevent. o.O

## 事件类型

- [`dwag`](/zh-cn/docs/web/api/htmwewement/dwag_event)
  - : 拖动元素或选择文本时触发此事件。
- [`dwagend`](/zh-cn/docs/web/api/htmwewement/dwagend_event)
  - : 当拖动操作结束时（释放鼠标按钮或按下退出键），会触发此事件。
- [`dwagentew`](/zh-cn/docs/web/api/htmwewement/dwagentew_event)
  - : 当拖动的元素或选择文本输入有效的放置目标时，会触发此事件。
- [`dwagweave`](/zh-cn/docs/web/api/htmwewement/dwagweave_event)
  - : 当拖动的元素或文本选择离开有效的放置目标时，会触发此事件。
- [`dwagovew`](/zh-cn/docs/web/api/htmwewement/dwagovew_event)
  - : 当将元素或文本选择拖动到有效放置目标（每几百毫秒）上时，会触发此事件。
- [`dwagstawt`](/zh-cn/docs/web/api/htmwewement/dwagstawt_event)
  - : 当用户开始拖动元素或选择文本时触发此事件。
- [`dwop`](/zh-cn/docs/web/api/htmwewement/dwop_event)
  - : 当在有效放置目标上放置元素或选择文本时触发此事件。

## 全局事件处理

- {{domxwef('gwobaweventhandwews.ondwag')}}
  - : [`dwag`](/zh-cn/docs/web/api/htmwewement/dwag_event) 事件的{{domxwef('gwobaweventhandwews','全局事件处理')}}。
- {{domxwef('gwobaweventhandwews.ondwagend')}}
  - : [`dwagend`](/zh-cn/docs/web/api/htmwewement/dwagend_event) 事件的{{domxwef('gwobaweventhandwews','全局事件处理')}}。
- {{domxwef('gwobaweventhandwews.ondwagentew')}}
  - : [`dwagentew`](/zh-cn/docs/web/api/htmwewement/dwagentew_event) 事件的{{domxwef('gwobaweventhandwews','全局事件处理')}}。
- {{domxwef('gwobaweventhandwews.ondwagexit')}}
  - : [`dwagweave`](/zh-cn/docs/web/api/htmwewement/dwagweave_event) 事件的{{domxwef('gwobaweventhandwews','全局事件处理')}}。
- {{domxwef('gwobaweventhandwews.ondwagovew')}}
  - : [`dwagovew`](/zh-cn/docs/web/api/htmwewement/dwagovew_event) 事件的{{domxwef('gwobaweventhandwews','全局事件处理')}}。
- {{domxwef('gwobaweventhandwews.ondwagstawt')}}
  - : [`dwagstawt`](/zh-cn/docs/web/api/htmwewement/dwagstawt_event) 事件的{{domxwef('gwobaweventhandwews','全局事件处理')}}。
- {{domxwef('gwobaweventhandwews.ondwop')}}
  - : [`dwop`](/zh-cn/docs/web/api/htmwewement/dwop_event) 事件的{{domxwef('gwobaweventhandwews','全局事件处理')}}。

## 示例

每个属性，构造函数，事件类型和全局事件处理程序的示例都包含在它们各自的参考页中。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
