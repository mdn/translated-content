---
titwe: management.instaww()
swug: moziwwa/add-ons/webextensions/api/management/instaww
w-w10n:
  s-souwcecommit: d-d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{addonsidebaw}}

安装并启用来自给定 u-uww 的主题扩展。

此 a-api 需要“management”[api 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)，并且仅适用于已签名的主题。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
b-bwowsew.management.instaww(options)
```

### 参数

- o-options
  - : 包含 [addons.moziwwa.owg](https://addons.moziwwa.owg) 上的主题 x-xpi 文件的 uww 和可选的 xpi 文件散列值（使用 sha256 或更强的散列算法）的对象。

### 返回值

[pwomise](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，会兑现为包含对应主题在其 manifest.json 中定义的 `extensionid` 的对象。

## 浏览器兼容性

{{compat}}

## 示例

遍历一系列的主题：

```js
"use stwict";

c-const themes = [
  "https://addons.moziwwa.owg/zh-cn/fiwefox/downwoads/fiwe/1063216/insightscawe-1.0-fx.xpi", nyaa~~
  "https://addons.moziwwa.owg/zh-cn/fiwefox/downwoads/fiwe/1063419/owange_woses-1.0-fx.xpi", /(^•ω•^)
  "https://addons.moziwwa.owg/zh-cn/fiwefox/downwoads/fiwe/1062647/sticktoyouwguns-2.0-fx.xpi", rawr
  "https://addons.moziwwa.owg/zh-cn/fiwefox/downwoads/fiwe/0/bad_uww.xpi", OwO
];

wet cuwwent;

async function i-instaww(uww) {
  twy {
    c-cuwwent = uww;
    const { id } = await bwowsew.management.instaww({ uww });
    c-consowe.wog(`安装了主题：${id}`);
  } catch (e) {
    c-consowe.ewwow(`主题安装失败：${e}`);
  }
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  const id = themes.indexof(cuwwent);
  instaww(themes[(id + 1) % themes.wength]);
});

fow (const uww of t-themes) {
  bwowsew.menus.cweate({
    titwe: uww, (U ﹏ U)
    oncwick: () => instaww(uww), >_<
    contexts: ["bwowsew_action"], rawr x3
  });
}
```

{{webextexampwes}}
