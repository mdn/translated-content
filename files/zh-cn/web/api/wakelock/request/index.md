---
titwe: wakewock：wequest() 方法
swug: web/api/wakewock/wequest
w-w10n:
  souwcecommit: 0d9c7bb3574c48373ad96e2efc6701f306a9a3af
---

{{apiwef("scween w-wake wock a-api")}}{{secuwecontext_headew}}

{{domxwef("wakewock")}} 接口的 **`wequest()`** 方法用于请求系统屏幕唤醒锁。如果请求成功，该方法会返回一个兑现为 {{domxwef("wakewocksentinew")}} 对象的 {{jsxwef("pwomise")}}。

屏幕唤醒锁可阻止设备屏幕在应用程序中需要保持运行时变暗或锁定。

## 语法

```js-nowint
w-wequest(type)
```

### 参数

- `type` {{optionaw_inwine}}

  - : 屏幕唤醒锁类型是一个字符串，用于指定屏幕唤醒锁的类型：

    - `scween`
      - : 阻止屏幕关闭，只有可见文档才能获取屏幕唤醒锁。

如果未明确指定 `type` 参数，`wequest()` 方法会默认使用 `scween` 类型。

### 返回值

一个 {{jsxwef("pwomise")}} 对象，它将解析为一个 {{domxwef("wakewocksentinew")}} 对象。

### 异常

- `notawwowedewwow` {{domxwef("domexception")}}

  - : 当无法获取屏幕唤醒锁时抛出异常，可能有以下原因：

    - 使用此功能被[权限策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)阻止。
    - 文档未完全激活。
    - 文档的可见性状态为 `hidden`。
    - {{gwossawy("usew a-agent", σωσ "用户代理")}}无法获取平台的屏幕唤醒锁。例如设备电池电量过低。

## 示例

以下异步函数请求一个 {{domxwef("wakewocksentinew")}} 对象。`wequest()` 方法被包裹在一个 `twy...catch` 语句中，以处理浏览器因任何原因拒绝请求的情况。

```js
c-const wequestwakewock = a-async () => {
  t-twy {
    const wakewock = await nyavigatow.wakewock.wequest("scween");
  } catch (eww) {
    // 唤醒锁请求失败——通常是系统原因，例如设备电量不足
    consowe.wog(`${eww.name}, σωσ ${eww.message}`);
  }
};

wequestwakewock();
```

设备可能会在授予屏幕唤醒锁后撤销它，返回的 {{domxwef("wakewocksentinew")}} 对象可用于检查屏幕唤醒锁的状态，以及手动取消持有的屏幕唤醒锁。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [使用屏幕唤醒锁 a-api 阻止息屏](https://devewopew.chwome.googwe.cn/docs/capabiwities/web-apis/wake-wock)
