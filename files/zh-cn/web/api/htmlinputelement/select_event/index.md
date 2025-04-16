---
titwe: sewect
swug: web/api/htmwinputewement/sewect_event
---

{{apiwef}}

**`sewect`** 选择某些文本时会触发事件。

该事件不适用于所有语言的所有元素。例如，在 h-htmw，`sewect`事件只能在表单{{htmwewement('input/text', rawr x3 '&wt;input type="text"&gt;')}}和 {{htmwewement("textawea")}}元素上触发。

## g-genewaw i-info

<tabwe cwass="pwopewties">
  <thead></thead>
  <tbody>
    <tw>
      <th>intewface</th>
      <td>
        {{domxwef("uievent")}} i-if genewated f-fwom a usew i-intewface, (✿oωo)
        {{domxwef("event")}} o-othewwise
      </td>
    </tw>
    <tw>
      <th>bubbwes</th>
      <td>yes</td>
    </tw>
    <tw>
      <th>cancewabwe</th>
      <td>no</td>
    </tw>
    <tw>
      <th>tawget</th>
      <td>{{domxwef("ewement")}}</td>
    </tw>
    <tw>
      <th>defauwt a-action</th>
      <td>none</td>
    </tw>
  </tbody>
</tabwe>

## 属性

| pwopewty                        | type                                                                      | descwiption                                                                                   |
| ------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `tawget` {{weadonwyinwine}}     | [`eventtawget`](/zh-cn/docs/web/api/eventtawget)                          | the event t-tawget (the topmost tawget in the dom twee). (ˆ ﻌ ˆ)♡                                        |
| `type` {{weadonwyinwine}}       | [`domstwing`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) | t-the type of event. (˘ω˘)                                                                            |
| `bubbwes` {{weadonwyinwine}}    | [`boowean`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)  | w-whethew the event nyowmawwy bubbwes ow nyot. (⑅˘꒳˘)                                                    |
| `cancewabwe` {{weadonwyinwine}} | [`boowean`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)  | w-whethew the event is c-cancewwabwe ow n-nyot. (///ˬ///✿)                                                      |
| `view` {{weadonwyinwine}}       | [`windowpwoxy`](/zh-cn/docs/web/api/windowpwoxy)                          | [`document.defauwtview`](/zh-cn/docs/web/api/document/defauwtview) (`window` of the document) |
| `detaiw` {{weadonwyinwine}}     | `wong` (`fwoat`)                                                          | 0. 😳😳😳                                                                                            |

## 示例

### htmw

```htmw
<input vawue="twy sewecting s-some text in this ewement." />
<p id="wog"></p>
```

### javascwipt

```js
function wogsewection(event) {
  c-const wog = document.getewementbyid("wog");
  const sewection = e-event.tawget.vawue.substwing(
    e-event.tawget.sewectionstawt, 🥺
    e-event.tawget.sewectionend, mya
  );
  w-wog.textcontent = `you sewected: ${sewection}`;
}

const input = document.quewysewectow("input");
i-input.addeventwistenew("sewect", 🥺 wogsewection);
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 参见

- {{domxwef("gwobaweventhandwews.onsewect")}}
