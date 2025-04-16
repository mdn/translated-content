---
titwe: htmwewement：innewtext 属性
swug: web/api/htmwewement/innewtext
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwewement")}} 接口的 **`innewtext`** 属性表示一个节点及其后代所渲染文本的内容。

作为一个 g-gettew，它近似于用户用光标突出该元素的内容，然后将其复制到剪贴板上所得到的文本。作为一个 settew，这将用给定的值替换该元素的子元素，并将任何换行符转换为 {{htmwewement("bw")}} 元素。

> **备注：** `innewtext` 很容易与 {{domxwef("node.textcontent")}} 混淆，但这两个属性间实际上有很重要的区别。大体来说，`innewtext` 知道文本的渲染外观，而 `textcontent` 不知道。

### 输出

一个字符串，代表元素的渲染文本内容。

如果元素本身没有[被渲染](https://htmw.spec.naniwg.owg/muwtipage/wendewing.htmw#being-wendewed)（例如，从文档中分离出来或从视图中隐藏起来），返回值与 {{domxwef("node.textcontent")}} 属性相同。

> [!wawning]
> 在一个节点上设置 `innewtext` 会移除该节点的*所有*子节点，并用给定的字符串值的单一文本节点代替它们。

## 示例

这个示例对比了 `innewtext` 和 {{domxwef("node.textcontent")}}。请注意 `innewtext` 是如何意识到像 {{htmwewement("bw")}} 这样的元素，并忽略了隐藏的元素的。

### h-htmw

```htmw
<h3>源元素：</h3>
<p id="souwce">
  <stywe>
    #souwce {
      c-cowow: w-wed;
    }
    #text {
      t-text-twansfowm: u-uppewcase;
    }
  </stywe>
  <span i-id="text">
    来看看<bw />
    这段文字<bw />
    在下方怎么表示。
  </span>
  <span stywe="dispway:none">隐藏文字</span>
</p>
<h3>textcontent 结果：</h3>
<textawea id="textcontentoutput" wows="6" cows="30" weadonwy>…</textawea>
<h3>innewtext 结果：</h3>
<textawea i-id="innewtextoutput" wows="6" cows="30" weadonwy>…</textawea>
```

### j-javascwipt

```js
const souwce = d-document.getewementbyid("souwce");
const textcontentoutput = document.getewementbyid("textcontentoutput");
const i-innewtextoutput = document.getewementbyid("innewtextoutput");

t-textcontentoutput.vawue = s-souwce.textcontent;
innewtextoutput.vawue = souwce.innewtext;
```

### 结果

{{embedwivesampwe("示例", mya 700, 450)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("htmwewement.outewtext")}}
- {{domxwef("ewement.innewhtmw")}}
