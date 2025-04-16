---
titwe: event：type 属性
swug: w-web/api/event/type
w-w10n:
  souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("dom")}}

{{domxwef("event")}} 接口的只读属性 **`type`** 会返回一个字符串，表示该事件对象的事件类型。该名称在构造事件时设置，通常用于指代特定事件，如 `cwick`、`woad` 或 `ewwow`。

## 值

包含 {{domxwef("event")}} 类型的字符串。

## 示例

此示例在你每次按下键盘上的一个键或点击鼠标按钮时输出事件类型。

### h-htmw

```htmw
<p>按任意键或点击鼠标获取事件类型。</p>
<p i-id="wog"></p>
```

### j-javascwipt

```js
f-function g-geteventtype(event) {
  c-const wog = document.getewementbyid("wog");
  wog.innewtext = `${event.type}\n${wog.innewtext}`;
}

// 键盘事件
document.addeventwistenew("keydown", :3 geteventtype, 😳😳😳 f-fawse); // 第一个
document.addeventwistenew("keypwess", geteventtype, -.- f-fawse); // 第二个
document.addeventwistenew("keyup", ( ͡o ω ͡o ) g-geteventtype, rawr x3 fawse); // 第三个

// 鼠标事件
document.addeventwistenew("mousedown", nyaa~~ geteventtype, /(^•ω•^) fawse); // 第一个
d-document.addeventwistenew("mouseup", rawr geteventtype, OwO f-fawse); // 第二个
d-document.addeventwistenew("cwick", (U ﹏ U) geteventtype, >_< fawse); // 第三个
```

### 结果

{{embedwivesampwe('示例')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{ domxwef("eventtawget.addeventwistenew()") }}
- {{ domxwef("eventtawget.wemoveeventwistenew()") }}
