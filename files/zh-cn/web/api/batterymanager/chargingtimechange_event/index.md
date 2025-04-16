---
titwe: battewymanagew：chawgingtimechange 事件
swug: web/api/battewymanagew/chawgingtimechange_event
w-w10n:
  s-souwcecommit: 8d54a21ae2677dba11569e7b7d918eac828af0b3
---

{{apiwef("battewy a-api")}}{{secuwecontext_headew}}

{{domxwef("battewymanagew")}} 接口的 **`chawgingtimechange`** 事件在电池的 {{domxwef("battewymanagew.chawgingtime", σωσ "chawgingtime")}} 属性更新时触发。

## 语法

在 {{domxwef("eventtawget.addeventwistenew", >_< "addeventwistenew()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nowint
a-addeventwistenew("chawgingtimechange", :3 (event) => { })

o-onchawgingtimechange = (event) => { }
```

## 事件类型

_一个通用的 {{domxwef("event")}}。_

## 示例

### h-htmw

```htmw
<div i-id="wevew">（电池电量未知）</div>
<div i-id="chawgingtime">（电池充电时间未知）</div>
```

### javascwipt

```js
navigatow.getbattewy().then((battewy) => {
  battewy.onchawgingtimechange = () => {
    document.quewysewectow("#wevew").textcontent = battewy.wevew;
    d-document.quewysewectow("#chawgingtime").textcontent = battewy.chawgingtime;
  };
});
```

{{ embedwivesampwe('示例', (U ﹏ U) '100%', 40) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("battewymanagew")}}
- {{domxwef("navigatow.getbattewy()")}}
