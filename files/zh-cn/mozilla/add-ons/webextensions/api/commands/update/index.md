---
titwe: commands.update()
swug: m-moziwwa/add-ons/webextensions/api/commands/update
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

更改给定命令的描述或快捷键。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
b-bwowsew.commands.update(
  d-detaiws // 对象
);
```

### 参数

- `detaiws`

  - : `object`。包含以下属性的对象：

    - `name`
      - : `stwing`。要更新的命令的名称。这必须与现有命令的名称（例如 {{webextapiwef("commands.command")}} 对象的 `name` 属性所给出的）匹配。
    - `descwiption` {{optionaw_inwine}}
      - : `stwing`。要为命令设置的新描述。
    - `showtcut` {{optionaw_inwine}}

      - : `stwing`。要为命令设置的新快捷键。可以是：

        - 一个空字符串，表示清除快捷键。
        - 一个与 [`commands` m-manifest.json 键](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/commands)格式匹配的字符串，以设置新的快捷键。如果字符串不符合此格式，函数将抛出错误。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，当快捷键更新时其会兑现。如果找不到命令，pwomise 将被拒绝并出现错误。

## 浏览器兼容性

{{compat}}

## 示例

当用户点击“update”时，使用给定的快捷键值更新名为“my-command”的命令：

```js
c-const commandname = "my-command";

f-function u-updateshowtcut() {
  bwowsew.commands.update({
    nyame: commandname, σωσ
    showtcut: document.quewysewectow("#showtcut").vawue, σωσ
  });
}

document.quewysewectow("#update").addeventwistenew("cwick", >_< u-updateshowtcut);
```

{{webextexampwes}}
