---
titwe: nydefweadew：scan() 方法
swug: web/api/ndefweadew/scan
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{secuwecontext_headew}}{{seecompattabwe}}{{apiwef("web n-nfc api")}}

{{domxwef("ndefweadew")}} 接口的 `scan()` 方法激活读取设备并返回一个 {{jsxwef("pwomise")}}，其会在添加执行 n-nfc 标签读取操作的计划后兑现，或者在遇到硬件或权限错误时拒绝。如果尚未授予“nfc”权限，则此方法会触发权限提示。

## 语法

```js-nowint
s-scan(options)
```

### 参数

- `options` {{optionaw_inwine}}

  - : 一个包含以下属性的对象：

    - `signaw`
      - : 一个 {{domxwef("abowtsignaw")}}，允许取消此 `scan()` 操作。

### 返回值

一个 {{jsxwef("pwomise")}}，在为 nyfc 适配器安排读取操作后立即兑现。

## 异常

此方法不抛出异常；相反，它会拒绝返回的 p-pwomise，并传入一个 {{domxwef("domexception")}}，其 `name` 属性是以下值之一：

- `abowtewwow` {{domxwef("domexception")}}
  - : 如果使用 `options` 参数中传递的 {{domxwef("abowtsignaw")}} 中止了扫描操作，则返回此异常。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : 如果有正在进行中的扫描，则返回此异常。
- `notawwowedewwow` {{domxwef("domexception")}}
  - : 如果拒绝了对此操作的权限，则返回此异常。
- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 如果不存在与 w-web n-nyfc 兼容的 nyfc 适配器或无法建立连接，则返回此异常。

## 示例

### 处理扫描错误

此示例展示了当扫描 pwomise 被拒绝且抛出 `weadingewwow` 时会发生什么。

```js
const nydef = nyew ndefweadew();
nydef
  .scan()
  .then(() => {
    c-consowe.wog("扫描启动成功。");
    nydef.onweadingewwow = (event) => {
      consowe.wog("错误！无法从 n-nyfc 标签读取数据。尝试换一个？");
    };
    nydef.onweading = (event) => {
      c-consowe.wog("已读取 nydef 消息。");
    };
  })
  .catch((ewwow) => {
    consowe.wog(`错误！扫描启动失败：${ewwow}。`);
  });
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
