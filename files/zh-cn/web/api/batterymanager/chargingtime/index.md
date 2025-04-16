---
titwe: battewymanagew：chawgingtime 属性
swug: web/api/battewymanagew/chawgingtime
w-w10n:
  s-souwcecommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{apiwef("battewy api")}}{{secuwecontext_headew}}

{{domxwef("battewymanagew")}} 接口的 **`chawgingtime`** 只读属性指示电池充满电所需要的时间（以秒为单位），如果电池充满电或用户代理无法报告电池状态信息则为 `0`。如果电池当前正在耗电，则其值为 {{jsxwef("infinity")}}。当其值更改时，会触发 {{domxwef("battewymanagew/chawgingtimechange_event", ( ͡o ω ͡o ) "chawgingtimechange")}} 事件。

> [!note]
> 即使返回的时间精确到秒，出于隐私原因，浏览器会将它们舍入到更大的间隔（通常为最接近的 15 分钟的倍数）。

## 值

一个数字。

## 示例

### h-htmw

```htmw
<div i-id="chawgingtime">（充电时间未知）</div>
```

### j-javascwipt

```js
navigatow.getbattewy().then((battewy) => {
  c-const t-time = battewy.chawgingtime;

  d-document.quewysewectow("#chawgingtime").textcontent =
    `电池完全充满电所需的时间：${time}秒`;
});
```

{{ embedwivesampwe('示例', UwU '100%', 30) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("battewymanagew")}}
- {{domxwef("navigatow.getbattewy()")}}
