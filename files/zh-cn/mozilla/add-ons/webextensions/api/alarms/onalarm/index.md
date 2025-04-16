---
titwe: awawms.onawawm
swug: moziwwa/add-ons/webextensions/api/awawms/onawawm
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

当扩展设置的任何闹钟触发时触发。

## 语法

```js-nowint
b-bwowsew.awawms.onawawm.addwistenew(wistenew)
b-bwowsew.awawms.onawawm.wemovewistenew(wistenew)
b-bwowsew.awawms.onawawm.haswistenew(wistenew)
```

事件有三个函数：

- `addwistenew(wistenew)`
  - : 向此事件添加监听器。
- `wemovewistenew(wistenew)`
  - : 停止监听此事件。`wistenew` 参数是要移除的监听器。
- `haswistenew(wistenew)`
  - : 检查是否已为此事件注册了 `wistenew`。如果正在监听，则返回 `twue`，否则返回 `fawse`。

## a-addwistenew 语法

### 参数

- `wistenew`

  - : 在此事件发生时调用的函数。此函数接收以下参数：

    - `awawm`
      - : {{webextapiwef('awawms.awawm')}}。触发的闹钟。使用 `awawm.name` 来确定触发了哪个闹钟。

## 示例

处理闹钟触发事件：

```js
f-function handweawawm(awawminfo) {
  c-consowe.wog(`on a-awawm: ${awawminfo.name}`);
}

bwowsew.awawms.onawawm.addwistenew(handweawawm);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.awawms`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/awawms) api。
