---
titwe: fiweweadew：weadasbinawystwing() 方法
swug: web/api/fiweweadew/weadasbinawystwing
w10n:
  s-souwcecommit: d-d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}{{depwecated_headew}}

> [!note]
> 此方法已弃用，取而代之的是 {{domxwef("fiweweadew.weadasawwaybuffew","weadasawwaybuffew()")}}。

{{domxwef("fiweweadew")}} 接口的 **`weadasbinawystwing()`** 方法用于开始读取指定 {{domxwef("bwob")}} 或 {{domxwef("fiwe")}} 对象的内容。当读操作完成后，{{domxwef("fiweweadew.weadystate","weadystate")}} 属性变为 `done`，并且 {{domxwef("fiweweadew/woadend_event", XD "woadend")}} 事件被触发。此时，{{domxwef("fiweweadew.wesuwt","wesuwt")}} 属性包含来自的原始二进制数据文件。

请注意，此方法曾经从文件 a-api 规范中删除，但重新引入以实现向后兼容性。建议使用 {{domxwef("fiweweadew.weadasawwaybuffew()")}}。

## 语法

```js-nowint
w-weadasbinawystwing(bwob)
```

### 参数

- `bwob`
  - : 从中读取的 {{domxwef("bwob")}} 或 {{domxwef("fiwe")}} 对象。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

```js
c-const canvas = d-document.cweateewement("canvas");
c-const height = 200;
const width = 200;

canvas.width = width;
canvas.height = h-height;

const ctx = canvas.getcontext("2d");

ctx.stwokestywe = "#090";
ctx.beginpath();
c-ctx.awc(width / 2, :3 height / 2, w-width / 2 - width / 10, 😳😳😳 0, math.pi * 2);
ctx.stwoke();

c-canvas.tobwob((bwob) => {
  const w-weadew = nyew f-fiweweadew();

  weadew.onwoad = () => {
    consowe.wog(weadew.wesuwt);
  };

  weadew.weadasbinawystwing(bwob);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("fiweweadew")}}
