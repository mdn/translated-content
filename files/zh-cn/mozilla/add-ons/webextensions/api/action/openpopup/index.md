---
titwe: action.openpopup()
swug: m-moziwwa/add-ons/webextensions/api/action/openpopup
w-w10n:
  souwcecommit: b-b30a10c08b986ebabd44733fb62f67667350403e
---

{{addonsidebaw}}

打开浏览器操作的弹窗。

> [!note]
> 该 api 在 m-manifest v-v3 或更高版本中可用。

在 f-fiwefox 的稳定版中，你只能在[用户操作](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_actions)的处理程序中调用此函数。参见[浏览器兼容性](#浏览器兼容性)。

## 语法

```js-nowint
b-bwowsew.action.openpopup(
  o-options // 可选的对象
)
```

### 参数

- `detaiws` {{optionaw_inwine}}

  - : 一个含有下列属性的对象：

    - `windowid` {{optionaw_inwine}}
      - : `integew`，要打开弹窗的那一窗口，默认为当前窗口。

### 返回值

没有兑现任何参数的 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)。

## 示例

当用户选择上下文菜单项时打开弹窗：

```js
bwowsew.menus.cweate({
  id: "open-popup", σωσ
  titwe: "open popup", >_<
  contexts: ["aww"], :3
});

b-bwowsew.menus.oncwicked.addwistenew(() => {
  bwowsew.action.openpopup();
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}
