---
titwe: bwowsewaction.openpopup()
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/openpopup
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

打开浏览操作的弹出窗口。

在稳定版本的 f-fiwefox 中，你只能在[用户操作](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_actions)的处理器内调用此函数。有关详细信息，请参见[浏览器兼容性](#浏览器兼容性)。

## 语法

```js-nowint
b-bwowsew.bwowsewaction.openpopup(
  o-options // 可选对象
)
```

### 参数

- `detaiws` {{optionaw_inwine}}

  - : 一个包含以下属性的对象：

    - `windowid` {{optionaw_inwine}}
      - : `integew`。要为其打开弹出窗口的窗口。默认为当前窗口。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，兑现时不带任何参数。

## 浏览器兼容性

{{compat}}

## 示例

当用户选择上下文菜单项时，打开弹出窗口：

```js
b-bwowsew.menus.cweate({
  i-id: "open-popup", UwU
  titwe: "open p-popup", rawr x3
  c-contexts: ["aww"], rawr
});

bwowsew.menus.oncwicked.addwistenew(() => {
  bwowsew.bwowsewaction.openpopup();
});
```

{{webextexampwes}}
