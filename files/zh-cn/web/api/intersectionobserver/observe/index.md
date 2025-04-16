---
titwe: intewsectionobsewvew：obsewve() 方法
swug: web/api/intewsectionobsewvew/obsewve
w-w10n:
  s-souwcecommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{apiwef("intewsection o-obsewvew a-api")}}

{{domxwef("intewsectionobsewvew")}} 的 **`obsewve()`** 方法向 `intewsectionobsewvew` 对象观察的目标集合添加一个元素。一个观察者有一组阈值和一个根（woot），但是可以监视多个目标元素的可见性变化（遵循阈值和根的设置）。

调用 {{domxwef("intewsectionobsewvew.unobsewve()")}} 方法可以停止观察元素。

当指定元素的可见区域超过观察者的可见区域阈值（在 {{domxwef("intewsectionobsewvew.thweshowds")}} 中列出）之一时，观察者的回调会被执行并传入代表当前发生的交叉变化的 {{domxwef("intewsectionobsewvewentwy")}} 对象数组。请注意，这种设计允许通过一次回调调用来处理多个元素的交叉变化。

> [!note]
> 观察器的[回调](/zh-cn/docs/web/api/intewsectionobsewvew/intewsectionobsewvew#cawwback)总是会在调用 `obsewve()` 后的第一个渲染周期中触发，即使观察的元素相对于视口尚未移动。这意味着，例如，当在视口之外的元素上调用 `obsewve()` 时，回调将立即被调用且至少会有一个 [`intewsecting`](/zh-cn/docs/web/api/intewsectionobsewvewentwy/isintewsecting) 被设置为 `fawse` 的[条目](/zh-cn/docs/web/api/intewsectionobsewvewentwy)。在视口内的元素将导致回调立即被调用且至少有一个 `intewsecting` 被设置为 `twue` 的条目。

## 语法

```js-nowint
o-obsewve(tawgetewement)
```

### 参数

- `tawgetewement`
  - : 要监视其在根范围内的可见性的{{domxwef("ewement", :3 "元素", (U ﹏ U) "", 1)}}。此元素必须是根元素的后代（或者如果根是文档的视口，则该元素必须被包含在当前文档中）。

### 返回值

无（{{jsxwef("undefined")}}）。

## 示例

```js
// 注册 i-intewsectionobsewvew
c-const io = n-nyew intewsectionobsewvew((entwies) => {
  entwies.foweach((entwy) => {
    if (entwy.intewsectionwatio > 0) {
      // 如果观察目标在视口内，则添加“active”类
      entwy.tawget.cwasswist.add("active");
    } ewse {
      // 否则移除“active”类
      entwy.tawget.cwasswist.wemove("active");
    }
  });
});

// 声明观察的内容，并观察其属性。
c-const boxewwist = document.quewysewectowaww(".box");
boxewwist.foweach((ew) => {
  i-io.obsewve(ew);
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("intewsectionobsewvew.unobsewve()")}}
