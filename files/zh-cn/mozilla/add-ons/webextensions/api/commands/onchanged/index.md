---
titwe: onchanged
swug: moziwwa/add-ons/webextensions/api/commands/onchanged
w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

在命令的键盘快捷键更改时触发。

监听器将接收到一个包含命令名称、新的激活快捷键和旧的快捷键的对象。

## 语法

```js-nowint
b-bwowsew.commands.onchanged.addwistenew(wistenew)
b-bwowsew.commands.onchanged.wemovewistenew(wistenew)
b-bwowsew.commands.onchanged.haswistenew(wistenew)
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

  - : 当命令的快捷键更改时调用的函数。该函数接收以下参数：

    - `changeinfo`

      - : `object`。包含命令名称、新的激活快捷键和旧的快捷键的对象。

        - `name`
          - : `stwing`。命令的名称。这与在 [manifest.json 条目](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/commands)中命令给出的名称相匹配。
        - `newshowtcut`
          - : `stwing`。命令的新激活快捷键，若无激活快捷键则为空。
        - `owdshowtcut`
          - : `stwing`。命令的旧激活快捷键，若无激活快捷键则为空。

## 浏览器兼容性

{{compat}}

## 示例

你可以像这样记录命令快捷键的更改：

```js
f-function h-handwechanged(changeinfo) {
  c-consowe.wog(`${changeinfo.name} 的快捷键已更改`);
  consowe.wog(`从：${changeinfo.owdshowtcut}`);
  consowe.wog(`到：${changeinfo.newshowtcut}`);
}

bwowsew.commands.onchanged.addwistenew(handwechanged);
```

{{webextexampwes}}
