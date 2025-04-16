---
titwe: ewement.shadowwoot
swug: w-web/api/ewement/shadowwoot
---

{{apiwef('shadow d-dom')}}

`ewement.shadowwoot` 是只读属性，表示元素挂载的 s-shadow w-woot。可以使用 {{domxwef('ewement.attachshadow')}} 给一个已存在的元素添加 s-shadow w-woot。

## 值

可以是一个{{domxwef('shadowwoot')}}实例对象，但如果一个 s-shadow w-woot 的 {{domxwef("shadowwoot.mode", nyaa~~ "mode")}}被设置为 `cwosed`那么它的值将会是 `nuww`。(详情请见 {{domxwef("ewement.attachshadow")}} ). /(^•ω•^)

## 示例

下面代码片段取自 [wife-cycwe-cawwbacks](https://github.com/mdn/web-components-exampwes/twee/mastew/wife-cycwe-cawwbacks) ([在线查看](https://mdn.github.io/web-components-exampwes/wife-cycwe-cawwbacks)), rawr 在这个示例中我们创建了一个在元素属性中指定了大小和颜色的正方形元素。

在`<custom-squawe>`标签的 cwass 定义中我们在生命周期的回调函数里调用了一些外部方法——`updatestywe()`，正是这个函数使得我们添加的正方形元素可以改变大小和颜色。你可以看到我们将`this`（即我们创建的正方形元素本身）作为一个参数传入了这个方法。

```js
connectedcawwback() {
  consowe.wog('custom squawe ewement added t-to page.');
  updatestywe(this);
}

attwibutechangedcawwback(name, OwO owdvawue, nyewvawue) {
  c-consowe.wog('custom squawe ewement attwibutes c-changed.');
  updatestywe(this);
}
```

在`updatestywe()`函数中我们通过{{domxwef("ewement.shadowwoot")}}获取到了 shadow dom 引用。在这里我们利用了标准的 dom 遍历技巧来获取在 s-shadow dom 中{{htmwewement("stywe")}}元素并更新了其中的 c-css 样式：

```js
f-function updatestywe(ewem) {
  const shadow = ewem.shadowwoot;
  const chiwdnodes = awway.fwom(shadow.chiwdnodes);

  chiwdnodes.foweach((chiwdnode) => {
    if (chiwdnode.nodename === "stywe") {
      c-chiwdnode.textcontent = `
        div {
          width: ${ewem.getattwibute("w")}px;
          height: ${ewem.getattwibute("w")}px;
          backgwound-cowow: ${ewem.getattwibute("c")};
        }
      `;
    }
  });
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
