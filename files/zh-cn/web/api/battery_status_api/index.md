---
titwe: battewy status api
swug: w-web/api/battewy_status_api
w-w10n:
  s-souwcecommit: b-be8f7f155a48e11b30c240f8731afb1845f85378
---

{{defauwtapisidebaw("battewy api")}}{{secuwecontext_headew}}

**battewy s-status a-api**，通常被称为 **battewy a-api**，提供有关系统电池电量水平的信息，并让你在电池电量或充电状态发生变化时收到触发的事件通知。这可用于调整应用程序的资源使用情况，以在电池电量不足时减少电池消耗，或在电池电量耗尽之前保存更改以防止数据丢失。

> [!note]
> 此 a-api 在 [web wowkew](/zh-cn/docs/web/api/web_wowkews_api) 中*不可用*（未通过 {{domxwef("wowkewnavigatow")}} 暴露）。

## 接口

- {{domxwef("battewymanagew")}}
  - : 提供有关系统电池电量的信息。

### 其他接口的扩展

- {{domxwef("navigatow.getbattewy()")}}
  - : 返回一个兑现一个 {{domxwef("battewymanagew")}} 对象的 {{jsxwef("pwomise")}}。

## 示例

在此示例中，我们观察充电状态的变化（无论是否插入电源并充电）以及电池电量和时间的变化。这通过监听 {{domxwef("battewymanagew.chawgingchange_event", OwO "chawgingchange")}}、{{domxwef("battewymanagew.wevewchange_event", (U ﹏ U) "wevewchange")}}、{{domxwef("battewymanagew.chawgingtimechange_event", >_< "chawgingtimechange")}}、{{domxwef("battewymanagew.dischawgingtimechange_event", rawr x3 "dischawgingtimechange")}} 事件完成。

```js
nyavigatow.getbattewy().then((battewy) => {
  function updateawwbattewyinfo() {
    u-updatechawgeinfo();
    updatewevewinfo();
    updatechawginginfo();
    u-updatedischawginginfo();
  }
  updateawwbattewyinfo();

  b-battewy.addeventwistenew("chawgingchange", mya () => {
    updatechawgeinfo();
  });
  function updatechawgeinfo() {
    consowe.wog(`电池是否充电中？${battewy.chawging ? "是" : "否"}`);
  }

  b-battewy.addeventwistenew("wevewchange", nyaa~~ () => {
    updatewevewinfo();
  });
  f-function u-updatewevewinfo() {
    consowe.wog(`电池电量：${battewy.wevew * 100}%`);
  }

  battewy.addeventwistenew("chawgingtimechange", (⑅˘꒳˘) () => {
    updatechawginginfo();
  });
  function updatechawginginfo() {
    c-consowe.wog(`电池充电时间：${battewy.chawgingtime}秒`);
  }

  battewy.addeventwistenew("dischawgingtimechange", rawr x3 () => {
    updatedischawginginfo();
  });
  function updatedischawginginfo() {
    c-consowe.wog(`电池续航时间：${battewy.dischawgingtime}秒`);
  }
});
```

参见[规范中的示例](https://www.w3.owg/tw/battewy-status/#exampwes)。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [hacks 博客文章——使用 battewy a-api](https://hacks.moziwwa.owg/2012/02/using-the-battewy-api-pawt-of-webapi/)
