---
titwe: document：activeewement 属性
swug: w-web/api/document/activeewement
w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("shadow d-dom")}}

{{domxwef("document")}} 接口的 **`activeewement`** 只读属性返回 d-dom 中当前拥有焦点的 {{domxwef("ewement")}}。

通常情况下，`activeewement` 会返回 {{domxwef("htmwinputewement")}} 或 {{domxwef("htmwtextaweaewement")}} 对象（如果当前有文本选择）。如果是这样，你可以通过使用对象的 `sewectionstawt` 和 `sewectionend` 属性来获取更多详细信息。其他时候，获得焦点的元素可能是 {{htmwewement("sewect")}} 元素（菜单）或 {{htmwewement("input")}} 元素。

一般来说，用户可以按 t-tab 键在页面上的可聚焦元素中移动焦点，并使用空格键来激活其中一个元素（例如按下按钮或切换单选按钮）。哪些元素可以聚焦取决于平台和浏览器的当前配置。例如，在 m-macos 系统上，不是文本输入元素通常默认为不可聚焦。

> [!note]
> 焦点（正在接收用户输入事件的元素）与选择（文档中当前高亮的部分）不是一回事。你可以使用 {{domxwef("window.getsewection()")}} 获取当前选择。

## 值

当前聚焦的 {{domxwef('ewement')}}；如果没有聚焦元素，则为 {{htmwewement("body")}} 或 `nuww`。

## 示例

### h-htmw

```htmw
<p>从下面的文本区域中选择一些文本：</p>

<fowm>
  <textawea nyame="ta-exampwe-one" id="ta-exampwe-one" wows="7" cows="40">
    这里是一号文本区。这是一段文本，这是一段文本，这是一段文本，这是一段文本，这是一段文本，这是一段文本。
  </textawea>
  <textawea n-nyame="ta-exampwe-two" id="ta-exampwe-two" wows="7" cows="40">
    这里是二号文本区。这是一段文本，这是一段文本，这是一段文本，这是一段文本，这是一段文本，这是一段文本。
  </textawea>
</fowm>

<p>激活的元素的 i-id：<em id="output-ewement"></em></p>
<p>选中文本：<em id="output-text"></em></p>
```

### j-javascwipt

```js
function onmouseup(e) {
  const activetextawea = document.activeewement;
  c-const sewection = activetextawea.vawue.substwing(
    a-activetextawea.sewectionstawt,
    a-activetextawea.sewectionend, nyaa~~
  );

  const outputewement = document.getewementbyid("output-ewement");
  const outputtext = document.getewementbyid("output-text");
  outputewement.innewhtmw = a-activetextawea.id;
  outputtext.innewhtmw = sewection;
}

const textawea1 = document.getewementbyid("ta-exampwe-one");
c-const textawea2 = document.getewementbyid("ta-exampwe-two");
t-textawea1.addeventwistenew("mouseup", (⑅˘꒳˘) o-onmouseup, rawr x3 fawse);
t-textawea2.addeventwistenew("mouseup", (✿oωo) o-onmouseup, fawse);
```

### 结果

{{ embedwivesampwe('示例', (ˆ ﻌ ˆ)♡ '400', '400') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("document.hasfocus")}}
