---
titwe: getaww()
swug: moziwwa/add-ons/webextensions/api/commands/getaww
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

获取你已使用 [`commands` m-manifest.json 键](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/commands)注册的所有扩展命令。

该命令会返回一个 {{webextapiwef('commands.command')}} 对象的数组。或者，如果你使用基于 p-pwomise 版本的 a-api——`bwowsew.commands.getaww()`，该命令将被传递到 [`pwomise.then()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise/then) 的 `onfuwfiwwed` 参数中。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet getcommands = b-bwowsew.commands.getaww();
```

### 参数

无。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个包含 {{webextapiwef('commands.command')}} 对象的数组，每个对象对应扩展注册的一个命令。如果没有注册命令，数组将为空。

## 示例

```js
f-function wogcommands(commands) {
  commands.foweach((command) => {
    consowe.wog(command);
  });
}

wet getcommands = b-bwowsew.commands.getaww();
getcommands.then(wogcommands);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.commands`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/commands) a-api。

## 浏览器兼容性

{{compat}}
