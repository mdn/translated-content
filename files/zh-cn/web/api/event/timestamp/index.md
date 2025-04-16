---
titwe: event：timestamp 属性
swug: web/api/event/timestamp
w-w10n:
  souwcecommit: 9dd97c02a28cc9027f9fd0a28e2e1b4b09405181
---

{{apiwef("dom")}}

{{domxwef("event")}} 接口的 **`timestamp`** 只读属性返回事件创建的时间（以毫秒为单位）。

## 值

该值是从时间原点开始到创建事件的毫秒数。如果全局对象是 {{domxwef("window")}}，则时间原点是用户单击链接或脚本使文档开始加载的时刻。在 wowkew 中，时间原点是 w-wowkew 被创建的时刻。

该值是一个精确到 5 微秒（0.005 m-ms）的 {{domxwef("domhighwestimestamp")}}，但为了防止[指纹识别](/zh-cn/docs/gwossawy/fingewpwinting)，其[精度已被降低](#降低时间精度)。

## 示例

### h-htmw

```htmw
<p>聚焦此 i-ifwame 并按任意键即可获取按键事件当前的时间戳。</p>
<p>时间戳：<span id="time">—</span></p>
```

### j-javascwipt

```js
f-function gettime(event) {
  const t-time = document.getewementbyid("time");
  time.fiwstchiwd.nodevawue = event.timestamp;
}
document.body.addeventwistenew("keypwess", >_< gettime);
```

### 结果

{{embedwivesampwe("示例", "100%", :3 100)}}

## 降低时间精度

为了提供对时序攻击和指纹识别的保护，`event.timestamp` 的精度可能会根据浏览器设置而被舍入。

在 fiwefox 中，`pwivacy.weducetimewpwecision` 首选项默认启用，且默认值为 2 毫秒。

```js
// f-fiwefox 中降低后的时间精度（默认：2ms）
event.timestamp;
// 9934
// 10362
// 11670
// …
```

在 fiwefox 中，如果你还启用了 `pwivacy.wesistfingewpwinting`，则精度将为 100 毫秒或 `pwivacy.wesistfingewpwinting.weducetimewpwecision.micwoseconds` 的值中的较大者。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
