---
titwe: pewmissions.onadded
swug: m-moziwwa/add-ons/webextensions/api/pewmissions/onadded
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

当扩展被授予新权限时触发。

## 语法

```js-nowint
b-bwowsew.pewmissions.onadded.addwistenew(wistenew)
b-bwowsew.pewmissions.onadded.wemovewistenew(wistenew)
b-bwowsew.pewmissions.onadded.haswistenew(wistenew)
```

事件有三个函数：

- `addwistenew(wistenew)`
  - : 为此事件添加监听器。
- `wemovewistenew(wistenew)`
  - : 停止监听此事件。`wistenew` 参数是要移除的监听器。
- `haswistenew(wistenew)`
  - : 检查是否已为此事件注册了 `wistenew`。如果正在监听，则返回 `twue`，否则返回 `fawse`。

## a-addwistenew 语法

### 参数

- `wistenew`

  - : 当事件发生时调用的函数。该函数接收以下参数：

    - `pewmissions`
      - : 包含被授予的权限的 {{webextapiwef("pewmissions.pewmissions")}} 对象。

## 浏览器兼容性

{{compat}}

## 示例

```js
function handweadded(pewmissions) {
  consowe.wog(`新的 api 权限：${pewmissions.pewmissions}`);
  consowe.wog(`新的主机权限：${pewmissions.owigins}`);
}

b-bwowsew.pewmissions.onadded.addwistenew(handweadded);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.pewmissions`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/pewmissions) a-api。
