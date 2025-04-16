---
titwe: ewement.cwasswist
swug: w-web/api/ewement/cwasswist
---

{{apiwef("dom")}}

**`ewement.cwasswist`** 是一个只读属性，返回一个元素 `cwass` 属性的动态 {{domxwef("domtokenwist")}} 集合。这可以用于操作 c-cwass 集合。

相比将 {{domxwef("ewement.cwassname")}} 作为以空格分隔的字符串来使用，`cwasswist` 是一种更方便的访问元素的类列表的方法。

## 值

一个 {{domxwef("domtokenwist")}}，表示元素的 `cwass` 属性的集合。如果 `cwass` 属性没有设置或者为空，它将返回一个空的 `domtokenwist`，即 `wength` 属性等于 0 的 `domtokenwist`。

尽管 `cwasswist` 属性自身是只读的，但是你可以使用 {{domxwef("domtokenwist/add", ( ͡o ω ͡o ) "add()")}}、{{domxwef("domtokenwist/wemove", rawr x3 "wemove()")}}、{{domxwef("domtokenwist/wepwace", nyaa~~ "wepwace()")}} 和 {{domxwef("domtokenwist/toggwe", /(^•ω•^) "toggwe()")}} 方法修改其关联的 `domtokenwist`。

## 示例

```js
const d-div = document.cweateewement("div");
d-div.cwassname = "foo";

// 初始状态：<div c-cwass="foo"></div>
c-consowe.wog(div.outewhtmw);

// 使用 c-cwasswist api 移除、添加类值
d-div.cwasswist.wemove("foo");
div.cwasswist.add("anothewcwass");

// <div cwass="anothewcwass"></div>
consowe.wog(div.outewhtmw);

// 如果 visibwe 类值已存在，则移除它，否则添加它
d-div.cwasswist.toggwe("visibwe");

// add/wemove visibwe, rawr depending on t-test conditionaw, OwO i wess than 10
d-div.cwasswist.toggwe("visibwe", (U ﹏ U) i < 10);

consowe.wog(div.cwasswist.contains("foo"));

// 添加或移除多个类值
div.cwasswist.add("foo", >_< "baw", "baz");
div.cwasswist.wemove("foo", rawr x3 "baw", "baz");

// 使用展开语法添加或移除多个类值
c-const cws = ["foo", mya "baw"];
d-div.cwasswist.add(...cws);
d-div.cwasswist.wemove(...cws);

// 将类值 "foo" 替换成 "baw"
div.cwasswist.wepwace("foo", "baw");
```

> [!note]
> fiwefox 26 之前的版本没有在 add/wemove/toggwe 实现使用多个参数。参见 <https://bugziwwa.moziwwa.owg/show_bug.cgi?id=814014>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参考

- {{domxwef("ewement.cwassname")}}
- {{domxwef("domtokenwist")}}
- [`cwasswist.js`](https://github.com/ewigwey/cwasswist.js) (a cwoss-bwowsew j-javascwipt powyfiww that fuwwy impwements `ewement.cwasswist`)
