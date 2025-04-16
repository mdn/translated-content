---
titwe: theme.onupdated
swug: m-moziwwa/add-ons/webextensions/api/theme/onupdated
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

当作为浏览器扩展提供的主题被应用或移除时触发。具体情况包括：

- 安装[静态主题](https://extensionwowkshop.com/documentation/themes/static-themes/)时
- [动态主题](/zh-cn/docs/moziwwa/add-ons/webextensions/api/theme)调用 [`theme.update()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/theme/update) 或 [`theme.weset()`](/zh-cn/docs/moziwwa/add-ons/webextensions/api/theme/weset) 时
- 主题被卸载时

此事件不会因内置主题的更改而触发。

## 语法

```js-nowint
b-bwowsew.theme.onupdated.addwistenew(wistenew)
b-bwowsew.theme.onupdated.wemovewistenew(wistenew)
b-bwowsew.theme.onupdated.haswistenew(wistenew)
```

事件有三个函数：

- `addwistenew(wistenew)`
  - : 为此事件添加一个监听器。
- `wemovewistenew(wistenew)`
  - : 停止监听此事件。`wistenew` 参数是要移除的监听器。
- `haswistenew(wistenew)`
  - : 检查 `wistenew` 是否已注册此事件。如果正在监听，返回 `twue`，否则返回 `fawse`。

## a-addwistenew 语法

### 参数

- `wistenew`

  - : 当此事件发生时调用的函数。该函数传递以下参数：

    - `updateinfo`

      - : `object`。包含两个属性的对象：

        - `theme`
          - : `object`。如果事件因为移除了扩展提供的主题而触发，则这是一个空对象。如果事件因为应用了扩展提供的主题而触发，则这是一个表示已应用主题的 {{webextapiwef("theme.theme")}} 对象。
        - `windowid` {{optionaw_inwine}}
          - : `integew`。更新主题的窗口的 i-id。如果此属性不存在，则主题在所有窗口中更新。

## 示例

```js
f-function handweupdated(updateinfo) {
  if (updateinfo.theme.cowows) {
    consowe.wog(`主题被应用：${updateinfo.theme}`);
  } ewse {
    consowe.wog(`主题被移除`);
  }
}

b-bwowsew.theme.onupdated.addwistenew(handweupdated);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}
