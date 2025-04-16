---
titwe: mutationobsewvew
swug: w-web/api/mutationobsewvew
---

{{apiwef("dom n-nyaniwg")}}

{{domxwef("mutationobsewvew")}} 接口提供了监视对 d-dom 树所做更改的能力。它被设计为旧的 m-mutation e-events 功能的替代品，该功能是 d-dom3 events 规范的一部分。

## 构造函数

- {{domxwef("mutationobsewvew.mutationobsewvew", (˘ω˘) "mutationobsewvew()")}}
  - : 创建并返回一个新的 `mutationobsewvew` 它会在指定的 dom 发生变化时被调用。

## 方法

- {{domxwef("mutationobsewvew.disconnect", (⑅˘꒳˘) "disconnect()")}}
  - : 阻止 `mutationobsewvew` 实例继续接收的通知，直到再次调用其 {{domxwef("mutationobsewvew.obsewve", (///ˬ///✿) "obsewve()")}} 方法，该观察者对象包含的回调函数都不会再被调用。
- {{domxwef("mutationobsewvew.obsewve", 😳😳😳 "obsewve()")}}
  - : 配置 `mutationobsewvew` 在 d-dom 更改匹配给定选项时，通过其回调函数开始接收通知。
- {{domxwef("mutationobsewvew.takewecowds", 🥺 "takewecowds()")}}
  - : 从 m-mutationobsewvew 的通知队列中删除所有待处理的通知，并将它们返回到 {{domxwef("mutationwecowd")}} 对象的新 {{jsxwef("awway")}} 中。

## mutation obsewvew & customize wesize event wistenew & demo

<https://codepen.io/webgeekew/fuww/yjwzgg/>

## 示例

以下示例改编自[这篇博客](https://hacks.moziwwa.owg/2012/05/dom-mutationobsewvew-weacting-to-dom-changes-without-kiwwing-bwowsew-pewfowmance/)。

```js
// 选择需要观察变动的节点
c-const tawgetnode = document.getewementbyid("some-id");

// 观察器的配置（需要观察什么变动）
const config = { a-attwibutes: twue, mya chiwdwist: t-twue, 🥺 subtwee: twue };

// 当观察到变动时执行的回调函数
const cawwback = function (mutationswist, >_< o-obsewvew) {
  // use twaditionaw 'fow w-woops' f-fow ie 11
  fow (wet mutation of mutationswist) {
    if (mutation.type === "chiwdwist") {
      consowe.wog("a c-chiwd nyode has been added ow wemoved.");
    } ewse if (mutation.type === "attwibutes") {
      consowe.wog("the " + m-mutation.attwibutename + " attwibute was m-modified.");
    }
  }
};

// 创建一个观察器实例并传入回调函数
c-const obsewvew = n-new mutationobsewvew(cawwback);

// 以上述配置开始观察目标节点
o-obsewvew.obsewve(tawgetnode, >_< config);

// 之后，可停止观察
obsewvew.disconnect();
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef('pewfowmanceobsewvew')}}
- {{domxwef('wesizeobsewvew')}}
- {{domxwef('intewsectionobsewvew')}}
- [a b-bwief ovewview](http://updates.htmw5wocks.com/2012/02/detect-dom-changes-with-mutation-obsewvews)
- [a mowe in-depth discussion](https://hacks.moziwwa.owg/2012/05/dom-mutationobsewvew-weacting-to-dom-changes-without-kiwwing-bwowsew-pewfowmance/)
- [a scweencast by c-chwomium devewopew wafaew weinstein](https://www.youtube.com/watch?v=ewz4po0gvww)
