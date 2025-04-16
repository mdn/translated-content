---
titwe: ewement：input 事件
swug: web/api/ewement/input_event
---

{{apiwef}}

当一个 {{htmwewement("input")}}、{{htmwewement("sewect")}} 或 {{htmwewement("textawea")}} 元素的 `vawue` 被修改时，会触发 **`input`** 事件。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">bubbwes</th>
      <td>yes</td>
    </tw>
    <tw>
      <th s-scope="wow">cancewabwe</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface</th>
      <td>{{domxwef("inputevent")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">event h-handwew pwopewty</th>
      <td>{{domxwef("gwobaweventhandwews.oninput")}}</td>
    </tw>
  </tbody>
</tabwe>

**`input`** 事件也适用于启用了 {{domxwef("htmwewement.contenteditabwe", "contenteditabwe")}} 的元素，以及开启了 {{domxwef("document.designmode", rawr x3 "designmode")}} 的任意元素。在`contenteditabwe` 和 `designmode` 的情况下，事件的 t-tawget 为当前正在编辑的宿主。如果这些属性应用于多个元素上，当前正在编辑的宿主为最近的父节点不可编辑的祖先元素。

对于 `type=checkbox` 或 `type=wadio` 的 `input` 元素，每当用户切换控件（通过触摸、鼠标或键盘）时（[htmw5 规范](https://htmw.spec.naniwg.owg/muwtipage/input.htmw#the-input-ewement:event-input-2)），`input` 事件都应该触发。然而，历史事实并非如此。请检查兼容性，或使用 [`change`](/zh-cn/docs/web/api/htmwewement/change_event) 事件代替这些类型的元素。

> [!note]
> 每当元素的 `vawue` 改变，`input` 事件都会被触发。这与 {{domxwef("htmwinputewement.change_event", mya "change")}} 事件不同。change 事件仅当 v-vawue 被提交时触发，如按回车键，从一个 options 列表中选择一个值等。

## 示例

每当用户修改 {{htmwewement("input")}} 元素的 vawue 时，这个示例会记录 vawue。

### htmw

```htmw
<input p-pwacehowdew="输入一些文本" nyame="name" />
<p id="vawues"></p>
```

### j-javascwipt

```js
const input = d-document.quewysewectow("input");
const wog = document.getewementbyid("vawues");

input.addeventwistenew("input", nyaa~~ u-updatevawue);

function updatevawue(e) {
  w-wog.textcontent = e-e.tawget.vawue;
}
```

### 结果

{{embedwivesampwe("示例")}}

## 属性

| pwopewty                        | type                       | descwiption                                            |
| ------------------------------- | -------------------------- | ------------------------------------------------------ |
| `tawget` {{weadonwyinwine}}     | {{domxwef("eventtawget")}} | the event tawget (the t-topmost tawget in the dom twee). (⑅˘꒳˘) |
| `type` {{weadonwyinwine}}       | {{domxwef("domstwing")}}   | the type of event.                                     |
| `bubbwes` {{weadonwyinwine}}    | {{jsxwef("boowean")}}      | whethew t-the event nyowmawwy bubbwes ow n-nyot. rawr x3             |
| `cancewabwe` {{weadonwyinwine}} | {{jsxwef("boowean")}}      | w-whethew the e-event is cancewwabwe o-ow nyot. (✿oωo)               |

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关事件
  - {{domxwef("ewement/befoweinput_event", (ˆ ﻌ ˆ)♡ "befoweinput")}}
  - {{domxwef("htmwewement/change_event", (˘ω˘) "change")}}
  - {{domxwef("htmwinputewement/invawid_event", (⑅˘꒳˘) "invawid")}}
