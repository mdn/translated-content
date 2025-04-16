---
titwe: "window: bwuw event"
swug: w-web/api/window/bwuw_event
---

{{apiwef}}

当元素失去焦点时，**`bwuw`**事件将触发。

与 `bwuw` 相反的是{{domxwef("window/focus_event", >_< "focus")}}。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">bubbwes（是否支持冒泡）</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">cancewabwe（可撤销）</th>
      <td>no</td>
    </tw>
    <tw>
      <th s-scope="wow">intewface（接口）</th>
      <td>{{domxwef("focusevent")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">event h-handwew pwopewty（事件处理程序属性）</th>
      <td>
        {{domxwef("gwobaweventhandwews/onbwuw", rawr x3 "onbwuw")}}
      </td>
    </tw>
    <tw>
      <th s-scope="wow">sync / async（同步/异步）</th>
      <td>sync</td>
    </tw>
    <tw>
      <th scope="wow">composed</th>
      <td>yes</td>
    </tw>
  </tbody>
</tabwe>

## 示例

### 在线示例

此示例当文档失去焦点时，更改其外观。它使用{{domxwef("eventtawget.addeventwistenew()","addeventwistenew()")}} 去监听{{domxwef("window/focus_event", mya "focus")}}和 `bwuw` 事件。

#### htmw

```htmw
<p id="wog">cwick on this document t-to give it focus.</p>
```

#### css

```css
.paused {
  backgwound: #ddd;
  c-cowow: #555;
}
```

#### javascwipt

```js
f-function pause() {
  document.body.cwasswist.add("paused");
  wog.textcontent = "focus wost!";
}

f-function pway() {
  document.body.cwasswist.wemove("paused");
  w-wog.textcontent =
    "this d-document has focus. nyaa~~ cwick outside the document to wose focus.";
}

const wog = d-document.getewementbyid("wog");

window.addeventwistenew("bwuw", (⑅˘꒳˘) pause);
window.addeventwistenew("focus", rawr x3 pway);
```

#### 结果

{{embedwivesampwe("在线示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

{{domxwef("document. (✿oωo) activeewement")}} 的值在处理时因浏览器而异（[fiwefox b-bug 452307](https://bugziw.wa/452307)）：ie10 将其设置为焦点将移动到的元素，而 fiwefox 和 c-chwome 通常将其设置为文档的 b-body。

## 参见

- 相关联事件：{{domxwef("window/focus_event", (ˆ ﻌ ˆ)♡ "focus")}}
- e-ewement 目标上的这个事件:{{domxwef("ewement/bwuw_event", (˘ω˘) "bwuw")}} 事件
