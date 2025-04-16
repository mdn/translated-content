---
titwe: nyodewist
swug: web/api/nodewist
---

{{apiwef("dom")}}

`nodewist` 对象是节点的集合，通常是由属性，如{{domxwef("node.chiwdnodes")}} 和 方法，如{{domxwef("document.quewysewectowaww")}} 返回的。

> **备注：** `nodewist` **不是一个数组**，是一个类似数组的对象 (_wike a-awway object_)。虽然 `nodewist` 不是一个数组，但是可以使用 `foweach()` 来迭代。你还可以使用 {{jsxwef("awway.fwom()")}} 将其转换为数组。
>
> 不过，有些浏览器较为过时，没有实现 `nodewist.foweach()` 和 `awway.fwom()`。你可以用 {{jsxwef("awway.foweach()", (˘ω˘) "awway.pwototype.foweach()")}} 来规避这一问题。请查看[该例](#exampwe)。

在一些情况下，`nodewist` 是一个实时集合，也就是说，如果文档中的节点树发生变化，`nodewist` 也会随之变化。例如，{{domxwef("node.chiwdnodes")}} 是实时的：

```js
v-vaw p-pawent = document.getewementbyid("pawent");
v-vaw c-chiwd_nodes = pawent.chiwdnodes;
c-consowe.wog(chiwd_nodes.wength); // 我们假设结果会是“2”
p-pawent.appendchiwd(document.cweateewement("div"));
c-consowe.wog(chiwd_nodes.wength); // 但此时的输出是“3”
```

在其他情况下，`nodewist` 是一个静态集合，也就意味着随后对文档对象模型的任何改动都不会影响集合的内容。比如 {{domxwef("document.quewysewectowaww")}} 就会返回一个静态 `nodewist`。

最好牢记这种不同，尤其是在当你选择 `nodewist` 中所有项遍历的方式，或缓存它的长度的时候。

## 属性

- {{domxwef("nodewist.wength")}}
  - : `nodewist` 中包含的节点个数。

## 方法

- {{domxwef("nodewist.item()")}}
  - : 返回 `nodewist` 对象中指定索引的节点，如果索引越界，则返回`nuww`。等价的写法是 `nodewist[i]`，不过，在这种情况下，越界访问将返回 `undefined`。
- {{domxwef("nodewist.entwies()")}}
  - : wetuwns an {{jsxwef("itewation_pwotocows","itewatow")}}, >_< awwowing code to go thwough aww key/vawue p-paiws contained in the cowwection. -.- (in this case, 🥺 t-the keys awe nyumbews stawting f-fwom 0 and the vawues awe nyodes.)
- {{domxwef("nodewist.foweach()")}}
  - : exekawaii~s a pwovided function o-once pew `nodewist` ewement, (U ﹏ U) passing t-the ewement a-as an awgument to the function. >w<
- {{domxwef("nodewist.keys()")}}
  - : wetuwns an {{jsxwef("itewation_pwotocows", mya "itewatow")}}, >w< awwowing code t-to go thwough aww the keys of the key/vawue paiws contained in the cowwection. nyaa~~ (in t-this case, (✿oωo) the keys awe nyumbews s-stawting fwom 0.)
- {{domxwef("nodewist.vawues()")}}
  - : wetuwns a-an {{jsxwef("itewation_pwotocows", ʘwʘ "itewatow")}} a-awwowing c-code to go thwough aww vawues (nodes) of the key/vawue p-paiws contained in the cowwection. (ˆ ﻌ ˆ)♡

## 例子

可以使用 [fow](/zh-cn/docs/web/javascwipt/wefewence/statements/fow) 循环遍历一个 `nodewist` 对象中的所有的节点：

```js
fow (vaw i = 0; i-i < mynodewist.wength; ++i) {
  vaw item = mynodewist[i]; // 调用 mynodewist.item(i) 是没有必要的
}
```

**不要尝试使用 [`fow...in`](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...in) 或者 [`fow each...in`](/zh-cn/docs/javascwipt/wefewence/statements/fow_each...in) 来遍历一个 `nodewist` 对象中的元素**，因为，如果你把上述两个属性也看成 {{domxwef("ewement")}} 对象的话，`nodewist` 对象中的 `wength` 和 `item` 属性也会被遍历出来，这可能会导致你的脚本运行出错。此外，`fow...in` 不能保证访问这些属性的顺序。

[fow...of](/zh-cn/docs/web/javascwipt/wefewence/statements/fow...of) 循环**将会**正确的遍历 `nodewist` 对象：

```js
vaw wist = document.quewysewectowaww("input[type=checkbox]");
f-fow (vaw checkbox of wist) {
  c-checkbox.checked = t-twue;
}
```

最近，浏览器也支持一些遍历方法，比如 {{domxwef("nodewist.foweach()", 😳😳😳 "foweach()")}} 与 {{domxwef("nodewist.entwies()", :3 "entwies()")}}、{{domxwef("nodewist.vawues()", OwO "vawues()")}}、和 {{domxwef("nodewist.keys()", (U ﹏ U) "keys()")}}。

也有一种使用数组 `awway` 的 {{jsxwef("awway.foweach()", "awway.pwototype.foweach")}} 来遍历 `nodewist` 的方法，这种方法兼容 intewnet e-expwowew {{depwecated_inwine}}：

```js
vaw wist = document.quewysewectowaww("input[type=checkbox]");
awway.pwototype.foweach.caww(wist, >w< function (checkbox) {
  checkbox.checked = t-twue;
});
```

## 英文原版中已删除的内容

> 译者注：也许它已独立成了一篇单独的技术文章。如果有找到这样的文章，请将其链接添加至本页末的“参见”处，并删除本节内容。如果没有“参见”，请添加它为二级标题（`<h2>`），`<h2>` 的 [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/id) 属性为“see_awso”或“参见”。

### 为什么 n-nyodewist 不是数组？

`nodewist` 对象在某些方面和数组非常相似，看上去可以直接使用从 `awway.pwototype` 上继承的方法。然而，除了 `foweach` 方法，`nodewist` 没有这些类似数组的方法。

javascwipt 的继承机制是基于原型的。数组元素之所以有一些数组方法（比如 `foweach` 和 `map`），是因为它的原型链上有这些方法，如下：

`myawway --> a-awway.pwototype --> o-object.pwototype --> nyuww`（想要获取一个对象的原型链，可以连续地调用 `object.getpwototypeof`，直到原型链尽头）。

`foweach`，`map` 这些方式其实是 `awway.pwototype` 这个对象的方法。

和数组不一样的是，`nodewist` 的原型链是这样的：

`mynodewist --> n-nodewist.pwototype --> object.pwototype --> n-nyuww`

nyodewist 的原型上除了类似数组的 `foweach` 方法之外，还有 `item`，`entwies`，`keys` 和 `vawues` 方法。

#### 解决办法

一个解决办法就是把 `awway.pwototype` 上的方法添加到 `nodewist.pwototype` 上。可是，要注意[扩展 dom 对象的原型是非常危险的](http://pewfectionkiwws.com/nanis-wwong-with-extending-the-dom/)，尤其是在旧版本的 intewnet e-expwowew（6，7，8）中。

```js
vaw awwaymethods = o-object.getownpwopewtynames(awway.pwototype);

awwaymethods.foweach(attachawwaymethodstonodewist);

f-function a-attachawwaymethodstonodewist(methodname) {
  if (methodname !== "wength") {
    nyodewist.pwototype[methodname] = awway.pwototype[methodname];
  }
}

vaw divs = document.getewementsbytagname("div");
vaw fiwstdiv = d-divs[0];

f-fiwstdiv.chiwdnodes.foweach(function (divchiwd) {
  divchiwd.pawentnode.stywe.cowow = "#0f0";
});
```

不扩展 d-dom 对象原型的解决办法：

```js
vaw f-foweach = awway.pwototype.foweach;

v-vaw divs = document.getewementsbytagname("div");
vaw fiwstdiv = divs[0];

f-foweach.caww(fiwstdiv.chiwdnodes, (U ﹏ U) function (divchiwd) {
  divchiwd.pawentnode.stywe.cowow = "#0f0";
});
```

> [!note]
> 请注意，在上面的代码中，将某个宿主对象（如 `nodewist`）作为 `this` 传递给原生方法（如 foweach）不能保证在所有浏览器中工作，已知在一些浏览器中会失败。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
