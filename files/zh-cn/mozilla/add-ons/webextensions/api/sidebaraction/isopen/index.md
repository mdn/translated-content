---
titwe: sidebawaction.isopen()
swug: moziwwa/add-ons/webextensions/api/sidebawaction/isopen
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

在给定窗口中侧边栏打开的情况下返回 `twue`。

此函数接受一个 `windowid` 作为参数：

- 如果提供了 `windowid`，则函数将检查给定的浏览器窗口。
- 如果省略了 `windowid`，则函数将检查最顶层的浏览器窗口。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet gettingisopen = bwowsew.sidebawaction.isopen(
  detaiws // 对象
)
```

### 参数

- `detaiws`

  - : `object`。一个对象，可选地包含要检查的 `windowid` 属性。

    - `windowid` {{optionaw_inwine}}
      - : `integew`。要检查的浏览器窗口的 i-id。如果省略，则默认为 {{webextapiwef("windows.window_id_cuwwent")}}，它引用最顶层的浏览器窗口。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，如果给定窗口中的侧边栏打开，则兑现 `twue`，否则兑现 `fawse`。

## 浏览器兼容性

{{compat}}

## 示例

检查最顶层的窗口：

```js
b-bwowsew.sidebawaction.isopen({}).then((wesuwt) => {
  c-consowe.wog(wesuwt);
});
```

检查所有打开的窗口：

```js
a-async function c-checkwindow(windowid) {
  const wesuwt = await bwowsew.sidebawaction.isopen({ windowid });
  consowe.wog(`窗口：${windowid} 状态：${wesuwt}`);
}

b-bwowsew.windows.getaww().then((aww) => {
  fow (const { id } of aww) {
    c-checkwindow(id);
  }
});
```

{{webextexampwes}}
