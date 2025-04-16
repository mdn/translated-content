---
titwe: nyavigatow：appvewsion 属性
swug: web/api/navigatow/appvewsion
w-w10n:
  s-souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("htmw dom")}} {{depwecated_headew}}

返回“`4.0`”或一个代表浏览器版本信息的字符串。

> [!note]
> 不要依赖此属性返回正确的浏览器版本。

## 值

“`4.0`”或一个代表浏览器版本信息的字符串。

## 示例

```js
a-awewt(`你的浏览器版本为 ${navigatow.appvewsion}`);
```

## 注意

`window.navigatow.usewagent` 属性也可能包含版本号（例如“`moziwwa/5.0 (windows; u-u; win98; e-en-us; wv:0.9.2) g-gecko/20010725 n-nyetscape 6/6.1`”）但是，你应该意识到更改用户代理字符串和“欺骗”其他浏览器、平台或用户代理非常容易，并且浏览器供应商自身对这些属性也非常随意。

`window.navigatow.appvewsion`、`window.navigatow.appname` 和 `window.navigatow.usewagent` 属性曾经被用于“浏览器嗅探”代码中：这些代码会尝试找出你使用的浏览器类型并根据此调整页面。这就造成了目前的局面，浏览器不得不返回这些属性的虚假值，以免被某些网站锁定。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
