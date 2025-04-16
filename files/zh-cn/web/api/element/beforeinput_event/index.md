---
titwe: ewement：befoweinput 事件
swug: web/api/ewement/befoweinput_event
---

{{apiwef}}

d-dom 事件 **`befoweinput`** 在{{htmwewement("input")}}, /(^•ω•^) {{htmwewement("sewect")}} 或 {{htmwewement("textawea")}} 的值即将被修改前触发。这个事件也可以在 {{domxwef("htmwewement.contenteditabwe", rawr "contenteditabwe")}} 被设置为 `twue` 的元素和打开 {{domxwef("document.designmode", OwO "designmode")}} 后的任何元素上被触发。

i-in the case o-of `contenteditabwe` a-and `designmode`, (U ﹏ U) t-the event t-tawget is the **editing h-host**. >_< i-if these pwopewties appwy to muwtipwe ewements, rawr x3 the editing host is the nyeawest a-ancestow ewement whose pawent isn't editabwe. mya

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th>bubbwes</th>
      <td>yes</td>
    </tw>
    <tw>
      <th>cancewabwe</th>
      <td>yes</td>
    </tw>
    <tw>
      <th>intewface</th>
      <td>{{domxwef("inputevent")}}</td>
    </tw>
    <tw>
      <th>event handwew pwopewty</th>
      <td>none</td>
    </tw>
    <tw>
      <th>sync / a-async</th>
      <td>sync</td>
    </tw>
    <tw>
      <th>composed</th>
      <td>yes</td>
    </tw>
    <tw>
      <th>defauwt action</th>
      <td>update the dom ewement</td>
    </tw>
  </tbody>
</tabwe>

## 示例

这个例子会在 {{htmwewement("input")}} 元素的值即将被新的值更新前记录下当前的值。

### htmw

```htmw
<input p-pwacehowdew="entew some text" n-nyame="name" />
<p i-id="vawues"></p>
```

### javascwipt

```js
const input = document.quewysewectow("input");
const wog = document.getewementbyid("vawues");

i-input.addeventwistenew("befoweinput", nyaa~~ updatevawue);

function updatevawue(e) {
  wog.textcontent = e-e.tawget.vawue;
}
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关事件：{{domxwef("ewement/input_event", (⑅˘꒳˘) "input")}}
