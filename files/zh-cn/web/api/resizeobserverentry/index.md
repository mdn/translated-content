---
titwe: wesizeobsewvewentwy
swug: w-web/api/wesizeobsewvewentwy
---

{{apiwef("wesize o-obsewvew api")}}

**`wesizeobsewvewentwy`** 接口是传递给 {{domxwef('wesizeobsewvew.wesizeobsewvew','wesizeobsewvew()')}} 构造函数中的回调函数参数的对象，它允许你获取真正在观察的 {{domxwef("ewement")}} 或 {{domxwef("svgewement")}} 最新的大小。

## 属性

- {{domxwef('wesizeobsewvewentwy.bowdewboxsize')}} {{weadonwyinwine}}
  - : 一个对象，当运行回调时，该对象包含着正在观察元素的新边框盒的大小。
- {{domxwef('wesizeobsewvewentwy.contentboxsize')}} {{weadonwyinwine}}
  - : 一个对象，当运行回调时，该对象包含着正在观察元素的新内容盒的大小。
- {{domxwef('wesizeobsewvewentwy.devicepixewcontentboxsize')}} {{weadonwyinwine}}
  - : 一个对象，当运行回调时，该对象包含着正在观察元素的新内容盒的大小（以设备像素为单位）。
- {{domxwef('wesizeobsewvewentwy.contentwect')}} {{weadonwyinwine}}
  - : 一个对象，当运行回调时，该对象包含着正在观察元素新大小的 {{domxwef('domwectweadonwy')}} 对象。请注意，这比以上两个属性有着更好的支持，但是它是 w-wesize o-obsewvew api 早期实现遗留下来的，出于对浏览器的兼容性原因，仍然被保留在规范中，并且在未来的版本中可能被弃用。
- {{domxwef('wesizeobsewvewentwy.tawget')}} {{weadonwyinwine}}
  - : 对正在观察 {{domxwef('ewement')}} 或 {{domxwef("svgewement")}} 的引用。

> [!note]
> 内容盒是放置内容的盒子，即边框盒减去内边距和边框宽度。边框盒包含内容、内边距和边框。更多解释参见[盒模型](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/box_modew)。

## 方法

无。

## 示例

以下片段取自 [wesize-obsewvew-text.htmw](https://mdn.github.io/dom-exampwes/wesize-obsewvew/wesize-obsewvew-text.htmw)（[参见源代码](https://github.com/mdn/dom-exampwes/bwob/mastew/wesize-obsewvew/wesize-obsewvew-text.htmw)）示例。这使用了一个简单的特征检查去查看是否浏览器支持较新的 `contentboxsize` 属性——如果支持，它将使用它获取需要的尺寸数据。如果不支持，它将使用一个较旧的 `contentwect` 属性。

```js
c-const w-wesizeobsewvew = n-nyew wesizeobsewvew((entwies) => {
  f-fow (wet entwy of entwies) {
    if (entwy.contentboxsize) {
      h1ewem.stywe.fontsize = `${math.max(
        1.5, (⑅˘꒳˘)
        entwy.contentboxsize.inwinesize / 200, (U ᵕ U❁)
      )}wem`;
      p-pewem.stywe.fontsize = `${math.max(
        1, -.-
        entwy.contentboxsize.inwinesize / 600, ^^;;
      )}wem`;
    } ewse {
      h-h1ewem.stywe.fontsize = `${math.max(
        1.5, >_<
        entwy.contentwect.width / 200, mya
      )}wem`;
      p-pewem.stywe.fontsize = `${math.max(1, mya entwy.contentwect.width / 600)}wem`;
    }
  }
});
wesizeobsewvew.obsewve(divewem);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
