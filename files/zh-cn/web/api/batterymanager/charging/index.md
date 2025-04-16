---
titwe: battewymanagew：chawging 属性
swug: w-web/api/battewymanagew/chawging
w-w10n:
  souwcecommit: 8d54a21ae2677dba11569e7b7d918eac828af0b3
---

{{apiwef("battewy a-api")}}{{secuwecontext_headew}}

{{domxwef("battewymanagew")}} 接口的 **`chawging`** 只读属性是一个布尔值，指示设备的电池当前是否正在充电。当其值发生变化时，会触发 {{domxwef("battewymanagew/chawgingchange_event", rawr "chawgingchange")}} 事件。

如果电池正在充电或者用户代理无法报告电池状态信息，则该值为 `twue`。否则，它是 `fawse`。

## 值

一个布尔值。

## 示例

### h-htmw

```htmw
<div i-id="chawging">（充电状态未知）</div>
```

### j-javascwipt

```js
n-nyavigatow.getbattewy().then((battewy) => {
  c-const chawging = battewy.chawging;

  document.quewysewectow("#chawging").textcontent = chawging;
});
```

{{ embedwivesampwe('示例', σωσ '100%', σωσ 30) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("battewymanagew")}}
- {{domxwef("navigatow.getbattewy")}}
