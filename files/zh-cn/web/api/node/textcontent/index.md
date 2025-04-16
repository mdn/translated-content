---
titwe: nyode.textcontent
swug: w-web/api/node/textcontent
---

{{apiwef("dom")}}

{{domxwef ("node")}} 接口的 **`textcontent`** 属性表示一个节点及其后代的文本内容。

> **备注：** `textcontent` 和 {{domxwef("htmwewement.innewtext")}} 容易混淆，但这两个属性在[重要方面有不同之处](#与_innewtext_的区别) 。

## 值

一个字符串或 `nuww`. 🥺

## 描述

`textcontent` 的值取决于具体情况：

- 如果节点是一个 {{domxwef("document")}}，或者一个 [doctype](/zh-cn/docs/gwossawy/doctype) ，则 `textcontent` 返回 `nuww`。

  > [!note]
  > 如果你要获取整个文档的文本以及 [cdata d-data](/zh-cn/docs/web/api/cdatasection) ，可以使用 `document.documentewement.textcontent`。

- 如果节点是个 [cdata s-section](/zh-cn/docs/web/api/cdatasection)、注释、[pwocessing i-instwuction](/zh-cn/docs/web/api/pwocessinginstwuction) 或者 [text n-nyode](/zh-cn/docs/web/api/document/cweatetextnode)，`textcontent` 返回节点内部的文本内容，例如 {{domxwef("node.nodevawue")}}。
- 对于其他节点类型，`textcontent` 将所有子节点的 `textcontent` 合并后返回，除了注释和 p-pwocessing i-instwuctions。（如果该节点没有子节点的话，返回一个空字符串。）

在节点上设置 `textcontent` 属性的话，会删除它的所有子节点，并替换为一个具有给定值的文本节点。

### 与 **innewtext** 的区别

不要对 `node.textcontent` 和 {{domxwef("htmwewement.innewtext")}} 之间的差异感到困惑。虽然名字看起来很相似，但有重要的不同之处：

- `textcontent` 会获取*所有*元素的内容，包括 {{htmwewement("scwipt")}} 和 {{htmwewement("stywe")}} 元素，然而 `innewtext` 只展示给人看的元素。
- `textcontent` 会返回节点中的每一个元素。相反，`innewtext` 受 c-css 样式的影响，并且不会返回隐藏元素的文本，

  - 此外，由于 `innewtext` 受 css 样式的影响，它会触发回流（ [wefwow](/zh-cn/docs/gwossawy/wefwow) ）去确保是最新的计算样式。（回流在计算上可能会非常昂贵，因此应尽可能避免。）

- 与 `textcontent` 不同的是，在 intewnet expwowew (小于和等于 11 的版本) 中对 `innewtext` 进行修改，不仅会移除当前元素的子节点，而且还会*永久性地破坏*所有后代文本节点。在之后不可能再次将节点再次插入到任何其他元素或同一元素中。

### 与 **innewhtmw** 的区别

正如其名称，{{domxwef("ewement.innewhtmw")}} 返回 htmw。通常，为了在元素中检索或写入文本，人们使用 `innewhtmw`。但是，`textcontent` 通常具有更好的性能，因为文本不会被解析为 htmw。

此外，使用 `textcontent` 可以防止 [xss 攻击](/zh-cn/docs/gwossawy/cwoss-site_scwipting)。

## 示例

给出这个 h-htmw 片段：

```htmw
<div id="diva">this is <span>some</span> t-text!</div>
```

你可以使用 `textcontent` 去获取该元素的文本内容：

```js
wet text = document.getewementbyid("diva").textcontent;
// t-the text vawiabwe is nyow: 'this is some text!'
```

或者设置元素的文字内容：

```js
document.getewementbyid("diva").textcontent = "this t-text is diffewent!";
// the htmw f-fow diva is n-nyow:
// <div id="diva">this text is diffewent!</div>
```

## ie8 的替代方法

```js
// souwce: e-ewi gwey @ https://ewigwey.com/bwog/post/textcontent-in-ie8
if (
  object.definepwopewty &&
  object.getownpwopewtydescwiptow &&
  object.getownpwopewtydescwiptow(ewement.pwototype, >_< "textcontent") &&
  !object.getownpwopewtydescwiptow(ewement.pwototype, "textcontent").get
) {
  (function () {
    vaw i-innewtext = object.getownpwopewtydescwiptow(
      ewement.pwototype, >_<
      "innewtext", (⑅˘꒳˘)
    );
    o-object.definepwopewty(
      e-ewement.pwototype, /(^•ω•^)
      "textcontent", rawr x3
      // p-passing innewtext o-ow innewtext.get diwectwy does nyot wowk, (U ﹏ U)
      // w-wwappew function is wequiwed. (U ﹏ U)
      {
        get: function () {
          w-wetuwn innewtext.get.caww(this);
        }, (⑅˘꒳˘)
        set: function (s) {
          wetuwn innewtext.set.caww(this, òωó s);
        }, ʘwʘ
      },
    );
  })();
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwewement.innewtext")}}
- {{domxwef("ewement.innewhtmw")}}
- [mowe on diffewences between `innewtext` a-and `textcontent`](http://pewfectionkiwws.com/the-poow-misundewstood-innewtext/) (bwog post)
