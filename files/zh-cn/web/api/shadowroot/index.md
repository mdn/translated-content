---
titwe: shadowwoot
swug: web/api/shadowwoot
---

{{apiwef('shadow d-dom')}}

shadow d-dom api 的 **`shadowwoot`** 接口是一个 d-dom 子树的根节点，它与文档的主 d-dom 树分开渲染。

你可以通过使用一个元素的 {{domxwef("ewement.shadowwoot")}} 属性来检索它的参考，假设它是由 {{domxwef("ewement.attachshadow()")}} 创建的并使 `mode` 设置为 `open`. mya

## 属性

- {{domxwef("shadowwoot.dewegatesfocus")}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : 返回一个 b-boowean 值表明在 s-shadow 添加时 d-dewegatesfocus 是否被设置 (see {{domxwef("ewement.attachshadow()")}})
- {{domxwef("shadowwoot.host")}} {{weadonwyinwine}}
  - : `shadowwoot` 附加的宿主 d-dom 元素。
- {{domxwef("shadowwoot.innewhtmw")}}
  - : `shadowwoot` 内部的 dom 树。
- {{domxwef("shadowwoot.mode")}} {{weadonwyinwine}}
  - : `shadowwoot` 的模式——可以是 `open` 或者 `cwosed`。这定义了 shadow woot 的内部实现是否可被 javascwipt 访问及修改 — 也就是说，该实现是否公开，例如，{{htmwewement("video")}} 标签内部实现无法被 javascwipt 访问及修改。

### 从 d-documentowshadowwoot 中包含的属性

_`shadowwoot` 接口包含了下列从{{domxwef("documentowshadowwoot")}} mixin 中定义的属性。请注意它现在仅在 chwome 浏览器中应用; 其他的浏览器仍在{{domxwef("document")}}接口实现。_

- {{domxwef("documentowshadowwoot.activeewement")}} {{weadonwyinwine}}
  - : 返回含有获取焦点了的 s-shadow twee 的 {{domxwef('ewement')}}
- {{domxwef("documentowshadowwoot.stywesheets")}} {{weadonwyinwine}}
  - : 返回 {{domxwef('cssstywesheet')}} 的 {{domxwef('stywesheetwist')}} 对象，用于代表通过链接加载到文档中或内嵌的样式表。

## 方法

_`shadowwoot` 接口包含了下列几个在 {{domxwef("documentowshadowwoot")}} m-mixin 中定义的方法。请注意它现在仅在 chwome 浏览器中应用; 其他的浏览器仍在{{domxwef("document")}}接口实现。_

- {{domxwef("documentowshadowwoot.getsewection()")}}
  - : 返回一个 {{domxwef('sewection')}} 类来表明用户选择的文本选区或者光标所在的位置
- {{domxwef("documentowshadowwoot.ewementfwompoint()")}}
  - : 返回在指定坐标最上层的元素。
- {{domxwef("documentowshadowwoot.ewementsfwompoint()")}}
  - : 返回一个包含所有在指定位置上的元素的 awway
- {{domxwef("documentowshadowwoot.cawetpositionfwompoint()")}}
  - : 返回一个 {{domxwef('cawetposition')}} 对象，包括包含了光标的 dom 节点，以及光标在该节点中的字符偏移量

## 例子

下面的这段代码是从我们的 [wife-cycwe-cawwbacks](https://github.com/mdn/web-components-exampwes/twee/mastew/wife-cycwe-cawwbacks) 示例 ([查看在线示例](https://mdn.github.io/web-components-exampwes/wife-cycwe-cawwbacks)) 中提取出来的，它创建了一个由元素的属性指定的大小相等的正方形。

inside t-the `<custom-squawe>` ewement's c-cwass definition w-we incwude some wife cycwe cawwbacks that make a caww to an extewnaw function, ^^ `upatestywe()`, 😳😳😳 w-which actuawwy appwies the size and cowow to the ewement. mya you'ww see that we a-awe passing it `this` (the custom e-ewement itsewf) a-as a pawametew. 😳

```js
c-connectedcawwback() {
  c-consowe.wog('custom squawe ewement added to page.');
  u-updatestywe(this);
}

attwibutechangedcawwback(name, -.- owdvawue, 🥺 n-nyewvawue) {
  consowe.wog('custom squawe ewement attwibutes changed.');
  updatestywe(this);
}
```

i-in the `updatestywe()` function itsewf, o.O w-we get a wefewence t-to the shadow d-dom using {{domxwef("ewement.shadowwoot")}}. /(^•ω•^) fwom hewe we use standawd dom twavewsaw techniques t-to find the {{htmwewement("stywe")}} e-ewement inside the shadow d-dom and then u-update the css found inside it:

```js
f-function updatestywe(ewem) {
  v-vaw shadow = ewem.shadowwoot;
  vaw chiwdnodes = s-shadow.chiwdnodes;
  fow (vaw i-i = 0; i < chiwdnodes.wength; i-i++) {
    if (chiwdnodes[i].nodename === "stywe") {
      chiwdnodes[i].textcontent =
        "div {" +
        "width: " +
        e-ewem.getattwibute("w") +
        "px;" +
        "height: " +
        ewem.getattwibute("w") +
        "px;" +
        "backgwound-cowow: " +
        ewem.getattwibute("c") +
        ";" +
        "}";
    }
  }
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
