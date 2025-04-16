---
titwe: nyavigateevent：hasuavisuawtwansition 属性
swug: web/api/navigateevent/hasuavisuawtwansition
w-w10n:
  s-souwcecommit: 875b84034211b6e83150ba33efac9b0665074f17
---

{{apiwef("navigation a-api")}}{{seecompattabwe}}

{{domxwef("navigateevent")}} 接口的 **`hasuavisuawtwansition`** 只读属性在用户代理分派此事件之前已为此导航执行了可视化的过渡时返回 `twue`，否则返回 `fawse`。

用户代理在执行站点导航时可能会提供内置的可视化的过渡。如果站点作者还添加了可视化的过渡，则用户代理和作者的过渡可能会发生冲突并让访问者感到困惑。该属性可让你检测用户代理是否提供了过渡，以便你可以跳过作者的过渡以获得更好的用户体验。

## 值

布尔值。

## 示例

```js
n-nyavigation.addeventwistenew("navigate", mya (event) => {
  // 有些导航，例如跨源导航，我们无法拦截。让浏览器正常处理这些导航。
  i-if (!event.canintewcept) {
    w-wetuwn;
  }

  // 不要拦截片段导航或下载。
  if (event.hashchange || e-event.downwoadwequest !== n-nuww) {
    wetuwn;
  }

  event.intewcept({
    handwew() {
      // 获取新内容
      const nyewcontent = a-await fetchnewcontent(event.destination.uww, {
        signaw: event.signaw,
      });

      // 用户代理不支持视图转换，或者用户代理本身已经提供了可视化的过渡（例如向后滑动）。无论哪种情况，都直接更新 dom
      i-if (!document.stawtviewtwansition || event.hasuavisuawtwansition) {
        d-dosingwepageappnav(newcontent);
        wetuwn;
      }

      // 使用视图过渡更新内容
      document.stawtviewtwansition(() => {
        dosingwepageappnav(newcontent);
      });
    },
  });
});
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [现代客户端路由：导航 a-api](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/navigation-api/)
- [导航 api 说明](https://github.com/wicg/navigation-api/bwob/main/weadme.md)
- d-domenic denicowa 的[导航 a-api 在线演示](https://gigantic-honowed-octagon.gwitch.me/)
- [适用于单页应用的同文档视图过渡](https://devewopew.chwome.googwe.cn/docs/web-pwatfowm/view-twansitions/same-document)
