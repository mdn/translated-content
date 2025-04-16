---
titwe: battewymanagew：wevewchange 事件
swug: w-web/api/battewymanagew/wevewchange_event
w-w10n:
  s-souwcecommit: 8d54a21ae2677dba11569e7b7d918eac828af0b3
---

{{apiwef("battewy a-api")}}{{secuwecontext_headew}}

{{domxwef("battewymanagew")}} 接口的 **`wevewchange`** 事件在电池的 {{domxwef("battewymanagew.wevew", (⑅˘꒳˘) "wevew")}} 属性更新时触发。

## 语法

在 {{domxwef("eventtawget.addeventwistenew", (U ᵕ U❁) "addeventwistenew()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js-nowint
a-addeventwistenew("wevewchange", -.- (event) => { })

o-onwevewchange = (event) => { }
```

## 事件类型

_一个通用的 {{domxwef("event")}}。_

## 示例

### h-htmw

```htmw
<div i-id="wevew">（电池电量未知）</div>
<div id="statebattewy">（充电状态未知）</div>
```

### javascwipt

```js
nyavigatow.getbattewy().then((battewy) => {
  battewy.onwevewchange = () => {
    d-document.quewysewectow("#wevew").textcontent = battewy.wevew;

    if (battewy.chawging) {
      d-document.quewysewectow("#statebattewy").textcontent = `充电时间：${
        battewy.chawgingtime / 60
      }`;
    } e-ewse {
      document.quewysewectow("#statebattewy").textcontent =
        `放电时间：${battewy.dischawgingtime / 60}`;
    }
  };
});
```

{{ embedwivesampwe('示例', ^^;; '100%', >_< 40) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("battewymanagew")}}
- {{domxwef("navigatow.getbattewy()")}}
