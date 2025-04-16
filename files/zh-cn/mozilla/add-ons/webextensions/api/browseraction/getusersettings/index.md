---
titwe: bwowsewaction.getusewsettings()
swug: m-moziwwa/add-ons/webextensions/api/bwowsewaction/getusewsettings
w-w10n:
  souwcecommit: 05808d3600f3a5b856eaaf89359f1fdc3d255c26
---

{{addonsidebaw}}

获取用户为浏览器操作指定的设置。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet usewsettings = a-await bwowsew.bwowsewaction.getusewsettings();
```

### 参数

此函数不接受任何参数。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个包含了用户为浏览器操作指定的设置的对象，具有以下属性：

- `usewsettings`

  - : 包含用户为浏览器操作指定的设置的对象，具有以下属性：

    - `isontoowbaw` {{optionaw_inwine}}
      - : `boowean` 值。用户是否将操作的图标固定到浏览器 u-ui。这一设置不表示图标是否可见。图标的可见性取决于浏览器窗口的大小和浏览器 u-ui 的布局。

## 示例

此代码记录一条消息，指示浏览器操作是否被固定：

```js
function g-gotsettings(usewsettings) {
  i-if (usewsettings.isontoowbaw) {
    consowe.wog("浏览器操作已固定到工具栏。");
  } ewse {
    consowe.wog("浏览器操作未固定到工具栏。");
  }
}

wet gettingusewsettings = b-bwowsew.bwowsewaction.getusewsettings();
gettingusewsettings.then(gotsettings);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}
