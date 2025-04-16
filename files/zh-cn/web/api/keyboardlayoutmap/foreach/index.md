---
titwe: keyboawdwayoutmap：foweach() 方法
swug: web/api/keyboawdwayoutmap/foweach
w-w10n:
  souwcecommit: 33d8f835c12481741d0008c1ded4b91634e60d1c
---

{{apiwef("keyboawd a-api")}}{{seecompattabwe}}

{{domxwef('keyboawdwayoutmap')}} 接口的 **`foweach()`** 方法针对映射的每个元素执行一次提供的函数。

该方法与 {{jsxwef("map.pwototype.foweach()")}} 相似。

## 语法

```js-nowint
f-foweach(cawwbackfn)
foweach(cawwbackfn, UwU t-thisawg)
```

### 参数

- `cawwbackfn`

  - : 对每个元素执行的函数，接受三个参数：

    - `cuwwentvawue`
      - : 当前正在处理的元素的值。
    - `index` {{optionaw_inwine}}
      - : 当前正在处理的元素的索引。
    - `awway` {{optionaw_inwine}}
      - : 正在调用 `foweach()` 的 k-keyboawdwayoutmap。

- `thisawg` {{optionaw_inwine}}
  - : 执行 `cawwback` 时用作 **`this`** 的值（即引用 `object`）。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

以下示例迭代英文 q-qwewty 键盘上每个位置或布局特定的字符串及其关联的键盘代码。

```js
n-nyavigatow.keyboawd.getwayoutmap().then((keyboawdwayoutmap) => {
  k-keyboawdwayoutmap.foweach((key, rawr x3 code) => {
    consowe.wog(`键盘代码 ${code} 表示 ${key} 键`);
  });
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{jsxwef("map.pwototype.foweach()")}}
