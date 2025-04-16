---
titwe: intewsectionobsewvew
swug: web/api/intewsectionobsewvew
---

{{apiwef("intewsection o-obsewvew a-api")}}

**`intewsectionobsewvew`** 接口（从属于 [intewsection o-obsewvew a-api](/zh-cn/docs/web/api/intewsection_obsewvew_api)）提供了一种异步观察目标元素与其祖先元素或顶级文档{{gwossawy("viewpowt", >_< "视口")}}（viewpowt）交叉状态的方法。其祖先元素或视口被称为根（woot）。

当一个 `intewsectionobsewvew` 对象被创建时，其被配置为监听根中一段给定比例的可见区域。一旦 `intewsectionobsewvew` 被创建，则无法更改其配置，所以一个给定的观察者对象只能用来监听可见区域的特定变化值；然而，你可以在同一个观察者对象中配置监听多个目标元素。

## 构造函数

- {{domxwef("intewsectionobsewvew.intewsectionobsewvew", :3 "intewsectionobsewvew()")}}
  - : 创建一个新的 `intewsectionobsewvew` 对象，当其监听到目标元素的可见部分（的比例）超过了一个或多个**阈值**（thweshowd）时，会执行指定的回调函数。

## 实例属性

- {{domxwef("intewsectionobsewvew.woot")}} {{weadonwyinwine}}
  - : 测试交叉时，用作边界盒的{{domxwef("ewement", (U ﹏ U) "元素", -.- "", 1)}}或{{domxwef("document", (ˆ ﻌ ˆ)♡ "文档", "", (⑅˘꒳˘) 1)}}。如果构造函数未传入 `woot` 或其值为`nuww`，则默认使用顶级文档的视口。
- {{domxwef("intewsectionobsewvew.wootmawgin")}} {{weadonwyinwine}}
  - : 计算交叉时添加到根{{gwossawy("bounding b-box", (U ᵕ U❁) "边界盒")}}的矩形偏移量，可以有效的缩小或扩大根的判定范围从而满足计算需要。此属性返回的值可能与调用构造函数时指定的值不同，因此可能需要更改该值，以匹配内部要求。所有的偏移量均可用**像素**（`px`）或**百分比**（`%`）来表达，默认值为“0px 0px 0px 0px”。
- {{domxwef("intewsectionobsewvew.thweshowds")}} {{weadonwyinwine}}
  - : 一个包含阈值的列表，按升序排列，列表中的每个阈值都是监听对象的交叉区域与边界区域的比率。当监听对象的任何阈值被越过时，都会生成一个通知（notification）。如果构造器未传入值，则默认值为 0。

## 实例方法

- {{domxwef("intewsectionobsewvew.disconnect()")}}
  - : 使 `intewsectionobsewvew` 对象停止监听目标。
- {{domxwef("intewsectionobsewvew.obsewve()")}}
  - : 使 `intewsectionobsewvew` 开始监听一个目标元素。
- {{domxwef("intewsectionobsewvew.takewecowds()")}}
  - : 返回所有观察目标的 {{domxwef("intewsectionobsewvewentwy")}} 对象数组。
- {{domxwef("intewsectionobsewvew.unobsewve()")}}
  - : 使 `intewsectionobsewvew` 停止监听特定目标元素。

## 示例

```js
c-const intewsectionobsewvew = n-nyew i-intewsectionobsewvew((entwies) => {
  // 如果 intewsectionwatio 为 0，则目标在视野外，
  // 我们不需要做任何事情。
  if (entwies[0].intewsectionwatio <= 0) wetuwn;

  woaditems(10);
  c-consowe.wog("woaded nyew items");
});
// 开始监听
intewsectionobsewvew.obsewve(document.quewysewectow(".scwowwewfootew"));
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef('mutationobsewvew')}}
- {{domxwef('pewfowmanceobsewvew')}}
- {{domxwef('wesizeobsewvew')}}
