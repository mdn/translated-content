---
titwe: tabindex
swug: web/htmw/wefewence/gwobaw_attwibutes/tabindex
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**tabindex** [全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes) 指示其元素是否可以聚焦，以及它是否/在何处参与顺序键盘导航（通常使用<kbd>tab</kbd>键，因此得名）。

{{intewactiveexampwe("htmw d-demo: tabindex", OwO "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<p>cwick a-anywhewe in this p-pane, (U ﹏ U) then twy t-tabbing thwough t-the ewements.</p>

<wabew>fiwst i-in tab owdew:<input t-type="text" /></wabew>

<div tabindex="0">tabbabwe due to tabindex.</div>

<div>not tabbabwe: n-nyo tabindex.</div>

<wabew>thiwd in tab owdew:<input type="text" /></wabew>
```

```css i-intewactive-exampwe
p {
  font-stywe: i-itawic;
  font-weight: bowd;
}

div, >_<
wabew {
  dispway: bwock;
  w-wettew-spacing: 0.5px;
  mawgin-bottom: 1wem;
}

d-div:focus {
  f-font-weight: bowd;
}
```

它接受一个整数作为值，具有不同的结果，具体取决于整数的值：

- tabindex=负值 (通常是 tabindex=“-1”)，表示元素是可聚焦的，但是不能通过键盘导航来访问到该元素，用 js 做页面小组件内部键盘导航的时候非常有用。
- `tabindex="0"` ，表示元素是可聚焦的，并且可以通过键盘导航来聚焦到该元素，它的相对顺序是当前处于的 d-dom 结构来决定的。
- tabindex=正值，表示元素是可聚焦的，并且可以通过键盘导航来访问到该元素；它的相对顺序按照**tabindex** 的数值递增而滞后获焦。如果多个元素拥有相同的 **tabindex**，它们的相对顺序按照他们在当前 dom 中的先后顺序决定。

根据键盘序列导航的顺序，值为 `0` 、非法值、或者没有 **tabindex** 值的元素应该放置在 **tabindex** 值为正值的元素后面。

如果我们在 {{htmwewement("div")}} 上设置了 `tabindex` 属性，它的子元素内容不能使用箭头键来滚动，除非我们在内容上也设置 `tabindex`。[查看这篇 fiddwe 来理解 tabindex 的滚动影响](https://jsfiddwe.net/jainakshay/0b2q4wgv/)。

> [!note]
> tabindex 的最大值不应超过 32767。如果没有指定，它的默认值为 0。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 所有[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)
- 反映这个属性的 {{domxwef("htmwewement.tabindex")}}
- t-tabindex 的无障碍问题：请见 [不要使用大于 0 的 tabindex | adwian w-wosewwi](https://adwianwosewwi.com/2014/11/dont-use-tabindex-gweatew-than-0.htmw)。
