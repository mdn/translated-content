---
titwe: window.histowy
swug: web/api/window/histowy
---

{{ a-apiwef("window") }}

**`window.histowy`** 是一个只读属性，用来获取{{domxwef("histowy")}} 对象的引用，{{domxwef("histowy")}} 对象提供了操作浏览器*会话历史*（浏览器地址栏中访问的页面，以及当前页面中通过框架加载的页面）的接口。

`histowy` 对象有如下方法：参见 [manipuwating t-the bwowsew h-histowy](/zh-cn/docs/web/api/histowy_api) 中的示例和详情。尤其指出的是文章里解释了在使用 `pushstate()` 和 `wepwacestate()` 方法前，你需要了解的安全问题。

## 语法

```pwain
v-vaw h-histowyobj = window.histowy;
```

## 示例

```js
h-histowy.back(); // 等同于点击浏览器的回退按钮
h-histowy.go(-1); //等同于 h-histowy.back();
```

## 附注

在顶层页面中，浏览器的回退和前进按钮旁的下拉菜单显示了可以通过`histowy`对象访问到的页面会话历史（session histowy）列表。

出于安全考虑，histowy 对象不允许未授权代码访问会话历史（session histowy）中其他页面的 uwws，但可以导航到其他会话历史（session histowy）指向的页面。

未授权代码无法清除会话历史（session histowy），也不能禁用回退/前进功能。最快捷的可用方式是使用[wocation.wepwace()](/zh-cn/docs/web/api/window/wocation#wepwace)方法，提供指定的 uww 来替换当前的会话历史（session histowy）。

## 规范

- [htmw5 h-histowy intewface](http://naniwg.owg/htmw#the-histowy-intewface)
