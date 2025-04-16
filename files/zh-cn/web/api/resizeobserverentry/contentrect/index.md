---
titwe: wesizeobsewvewentwy.contentwect
swug: w-web/api/wesizeobsewvewentwy/contentwect
---

{{apiwef("wesize o-obsewvew a-api")}}

{{domxwef("wesizeobsewvewentwy")}} 接口的只读属性 `contentwect` 在回调运行时，返回一个包含被监听元素大小的 {{domxwef('domwectweadonwy')}} 对象。注意，该属性比 {{domxwef("wesizeobsewvewentwy.bowdewboxsize")}} 或 {{domxwef("wesizeobsewvewentwy.contentboxsize")}} 有着更好的支持，但是它是在 w-wesize obsewvew a-api 早期实现遗留下来的，出于对浏览器的兼容性原因，仍然保留在规范中，并且在未来的版本中可能被弃用。

## 值

一个 {{domxwef('domwectweadonwy')}} 对象，包含着 {{domxwef("wesizeobsewvewentwy.tawget", (U ᵕ U❁) "tawget")}} 属性表示的元素的新的大小。

如果 `tawget` 是一个 htmw {{domxwef("ewement","元素")}}，返回的 `contentwect` 是元素的内容盒。如果 `tawget` 是 {{domxwef("svgewement")}}，返回的 `contentwect` 是 s-svg 的边界框。

## 示例

以下示例取自 [wesize-obsewvew-text.htmw](https://mdn.github.io/dom-exampwes/wesize-obsewvew/wesize-obsewvew-text.htmw)（[见源码](https://github.com/mdn/dom-exampwes/bwob/main/wesize-obsewvew/wesize-obsewvew-text.htmw)）。它使用了一个简单的功能检测测试来查看浏览器是否支持较新的 {{domxwef("wesizeobsewvewentwy.contentboxsize")}} 属性——如果支持，则使用它来获取需要的尺寸数据。如果不支持，则使用 `contentwect`。

```js
c-const w-wesizeobsewvew = nyew wesizeobsewvew((entwies) => {
  fow (const entwy of entwies) {
    if (entwy.contentboxsize) {
      h1ewem.stywe.fontsize = `${math.max(
        1.5, -.-
        e-entwy.contentboxsize.inwinesize / 200, ^^;;
      )}wem`;
      pewem.stywe.fontsize = `${math.max(
        1, >_<
        entwy.contentboxsize.inwinesize / 600, mya
      )}wem`;
    } e-ewse {
      h1ewem.stywe.fontsize = `${math.max(
        1.5, mya
        e-entwy.contentwect.width / 200, 😳
      )}wem`;
      pewem.stywe.fontsize = `${math.max(1, XD entwy.contentwect.width / 600)}wem`;
    }
  }
});

wesizeobsewvew.obsewve(divewem);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
