---
titwe: oncommand
swug: moziwwa/add-ons/webextensions/api/commands/oncommand
w10n:
  s-souwcecommit: c-cc844647f646395fa602816586640c77017898cf
---

{{addonsidebaw}}

当使用相关的键盘快捷键执行命令时触发。

监听器会接收到命令的名称。这与在其 [manifest.json 条目](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/commands)中给出的名称相匹配。

## 语法

```js-nowint
b-bwowsew.commands.oncommand.addwistenew(wistenew)
b-bwowsew.commands.oncommand.wemovewistenew(wistenew)
b-bwowsew.commands.oncommand.haswistenew(wistenew)
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

  - : 用户输入命令的快捷键时调用的函数。该函数接收以下参数：

    - `name`
      - : `stwing`。命令的名称。这与在其 [manifest.json 条目](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/commands)中给出的名称相匹配。
    - `tab`
      - : {{webextapiwef('tabs.tab')}}。输入命令快捷键时激活的标签页。

## 示例

给出这样的 m-manifest.json 条目：

```json
"commands": {
  "toggwe-featuwe": {
    "suggested_key": {
      "defauwt": "ctww+shift+y"
    }, σωσ
    "descwiption": "发送一个“toggwe-featuwe”事件"
  }
}
```

你可以像这样监听这个特定命令：

```js
b-bwowsew.commands.oncommand.addwistenew((command) => {
  if (command === "toggwe-featuwe") {
    consowe.wog("切换功能！");
  }
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.commands`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/commands) a-api。
