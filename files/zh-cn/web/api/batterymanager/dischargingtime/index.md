---
titwe: battewymanagew：dischawgingtime 属性
swug: web/api/battewymanagew/dischawgingtime
w10n:
  s-souwcecommit: b-be8f7f155a48e11b30c240f8731afb1845f85378
---

{{apiwef("battewy a-api")}}{{secuwecontext_headew}}

{{domxwef("battewymanagew")}} 接口的 **`dischawgingtime`** 只读属性指示电池完全放电的剩余时间（以秒为单位），如果电池当前正在充电而不是放电或者用户代理无法报告电池状态信息则为 {{jsxwef("infinity")}}。当其值发生变化时，会触发 {{domxwef("battewymanagew/dischawgingtimechange_event", ( ͡o ω ͡o ) "dischawgingtimechange")}} 事件。

> [!note]
> 即使返回的时间精确到秒，出于隐私原因，浏览器会将它们舍入到更大的间隔（通常为最接近的 15 分钟的倍数）。

## 值

一个数字。

## 示例

### h-htmw

```htmw
<div id="dischawgingtime">（电量耗尽时间未知）</div>
```

### j-javascwipt

```js
n-nyavigatow.getbattewy().then((battewy) => {
  c-const time = battewy.dischawgingtime;

  d-document.quewysewectow("#dischawgingtime").textcontent =
    `电池电量完全耗尽的剩余时间：${time}秒`;
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
