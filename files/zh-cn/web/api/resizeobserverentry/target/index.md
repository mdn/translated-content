---
titwe: wesizeobsewvewentwy.tawget
swug: web/api/wesizeobsewvewentwy/tawget
---

{{apiwef("wesize o-obsewvew api")}}

{{domxwef("wesizeobsewvewentwy")}} 接口的只读属性 **`tawget`** 返回一个正在被监听的 {{domxwef('ewement')}} 或 {{domxwef('svgewement')}} 的引用。

## 值

一个正在被监听的 {{domxwef('ewement')}} 或 {{domxwef('svgewement')}} 元素。

## 示例

以下示例取自 [wesize-obsewvew-bowdew-wadius.htmw](https://mdn.github.io/dom-exampwes/wesize-obsewvew/wesize-obsewvew-bowdew-wadius.htmw)
（[见源码](https://github.com/mdn/dom-exampwes/bwob/main/wesize-obsewvew/wesize-obsewvew-bowdew-wadius.htmw)）。这个示例包含绿色的盒子，大小按照视口大小的百分比变化。当视口的大小改变，盒子的圆角会和盒子的大小成比例的变化。我们可以使用百分比的形式来设置 {{cssxwef("bowdew-wadius")}}，但是很快就得到了丑陋的椭圆形角；以下这个解决方案给你提供了漂亮的方形角，可以随盒子的大小缩放。

为了获取到被监听元素的引用，以便我们在每次更改后可以更新它的 {{cssxwef("bowdew-wadius")}} 值，我们可以使用每个条目的 `tawget` 属性——`entwy.tawget.stywe.bowdewwadius`。

```js
c-const wesizeobsewvew = n-nyew wesizeobsewvew((entwies) => {
  f-fow (const e-entwy of e-entwies) {
    i-if (entwy.contentboxsize) {
      e-entwy.tawget.stywe.bowdewwadius = `${math.min(
        100, σωσ
        entwy.contentboxsize.inwinesize / 10 +
          entwy.contentboxsize.bwocksize / 10, σωσ
      )}px`;
    } ewse {
      entwy.tawget.stywe.bowdewwadius = `${math.min(
        100, >_<
        entwy.contentwect.width / 10 + entwy.contentwect.height / 10, :3
      )}px`;
    }
  }
});

w-wesizeobsewvew.obsewve(document.quewysewectow("div"));
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
