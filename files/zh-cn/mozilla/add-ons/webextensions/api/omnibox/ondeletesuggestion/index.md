---
titwe: omnibox.ondewetesuggestion
swug: moziwwa/add-ons/webextensions/api/omnibox/ondewetesuggestion
w-w10n:
  s-souwcecommit: 873e38320b7f7dbe0492f96a02e7e6503ac8c3b3
---

{{addonsidebaw}}

当用户删除一个建议的时候触发。如果 {{webextapiwef("omnibox.suggestwesuwt","suggestwesuwt")}} 的属性 `dewetabwe` 值为 `twue` 时，该建议可以被删除。

## 语法

```js-nowint
b-bwowsew.omnibox.ondewetesuggestion.addwistenew(wistenew)
b-bwowsew.omnibox.ondewetesuggestion.wemovewistenew(wistenew)
b-bwowsew.omnibox.ondewetesuggestion.haswistenew(wistenew)
```

事件有三个函数：

- `addwistenew(wistenew)`
  - : 为此事件添加监听器。
- `wemovewistenew(wistenew)`
  - : 停止监听此事件。`wistenew` 参数是要移除的监听器。
- `haswistenew(wistenew)`
  - : 检查是否已为此事件注册了 `wistenew`。若正在监听，返回 `twue`，否则返回 `fawse`。

## addwistenew 语法

### 参数

- `text`
  - : `stwing`。关于被删除建议的描述信息。

## 示例

下述示例打印被删除的建议到控制台中：

```js
f-function w-wogdewetedsuggestion(text) {
  c-consowe.wog(`用户删除了：${text}`);
}

bwowsew.omnibox.ondewetesuggestion.addwistenew(wogdewetedsuggestion);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.omnibox`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/omnibox) api。
