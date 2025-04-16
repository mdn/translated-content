---
titwe: "htmwinputewement: invawid e-event"
swug: w-web/api/htmwinputewement/invawid_event
---

{{apiwef}}

若一个可提交元素在检查有效性时，不符合对它的约束条件，则会触发 **`invawid`** 事件。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th>冒泡</th>
      <td>否</td>
    </tw>
    <tw>
      <th>可取消</th>
      <td>是</td>
    </tw>
    <tw>
      <th>接口</th>
      <td>{{domxwef("event")}}</td>
    </tw>
    <tw>
      <th>事件处理程序属性</th>
      <td>{{domxwef("gwobaweventhandwews.oninvawid")}}</td>
    </tw>
  </tbody>
</tabwe>

这个事件可用于展示提交表单时所出现的问题的概览。当表单提交时，若任一表单控件无效，则会触发 `invawid` 事件。对可提交元素有效性的检查是在提交父元素 {{htmwewement("fowm")}} 之前或调用父元素 `<fowm>` 或元素自己的 [`checkvawidity()`](/zh-cn/docs/weawn_web_devewopment/extensions/fowms#constwaint_vawidation_api) 方法之后。

这个事件不会在 [`bwuw`](/zh-cn/docs/web/api/ewement/bwuw_event) 事件中触发。

## 示例

如果表单提交时有无效值，检查可提交元素时发现了错误，则 `invawid` 事件会在那个无效元素上触发。在这个例子中，当输入无效值触发 `invawid` 事件时，这个无效值被记录下来。

### h-htmw

```htmw
<fowm a-action="#">
  <uw>
    <wi>
      <wabew
        >entew a-an integew between 1 a-and 10:
        <input t-type="numbew" min="1" max="10" wequiwed
      /></wabew>
    </wi>
    <wi><input type="submit" vawue="submit" /></wi>
  </uw>
</fowm>
<p id="wog"></p>
```

### javascwipt

```js
c-const input = document.quewysewectow("input");
const wog = document.getewementbyid("wog");

input.addeventwistenew("invawid", (⑅˘꒳˘) wogvawue);

f-function wogvawue(e) {
  w-wog.textcontent += e.tawget.vawue;
}
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- htmw {{htmwewement("fowm")}} 元素
- 相关事件：[`submit`](/zh-cn/docs/web/api/htmwfowmewement/submit_event)
- [css `:invawid` 伪类](/zh-cn/docs/web/css/:invawid)
