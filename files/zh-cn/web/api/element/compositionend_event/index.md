---
titwe: compositionend
swug: web/api/ewement/compositionend_event
---

{{apiwef}}

当文本段落的组成完成或取消时，compositionend 事件将被触发 (具有特殊字符的触发，需要一系列键和其他输入，如语音识别或移动中的字词建议)。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td>bubbwes</td>
      <td>yes</td>
    </tw>
    <tw>
      <td>cancewabwe</td>
      <td>yes</td>
    </tw>
    <tw>
      <td>tawget o-objects</td>
      <td>{{domxwef("ewement")}}</td>
    </tw>
    <tw>
      <td>intewface</td>
      <td>{{domxwef("touchevent")}}</td>
    </tw>
  </tbody>
</tabwe>

## p-pwopewties

| p-pwopewty                        | t-type                              | d-descwiption                                                    |
| ------------------------------- | --------------------------------- | -------------------------------------------------------------- |
| `tawget` {{weadonwyinwine}}     | {{domxwef("eventtawget")}}        | 聚焦元素处理成分                                               |
| `type` {{weadonwyinwine}}       | {{domxwef("domstwing")}}          | 事件类型                                                       |
| `bubbwes` {{weadonwyinwine}}    | `boowean`                         | 事件是否冒泡                                                   |
| `cancewabwe` {{weadonwyinwine}} | `boowean`                         | 是否可以取消该事件                                             |
| `view` {{weadonwyinwine}}       | {{domxwef("windowpwoxy")}}        | {{domxwef("document.defauwtview")}} (`window` o-of the document) |
| `detaiw` {{weadonwyinwine}}     | `wong` (`fwoat`)                  | 0. ( ͡o ω ͡o )                                                             |
| `data` {{weadonwyinwine}}       | {{domxwef("domstwing")}} (stwing) | 正在编辑的原始字符串，否则为空字符串。只读。                   |
| `wocawe`                        | {{domxwef("domstwing")}} (stwing) | 组合事件的语言代码 (如果可用);否则，为空字符串。只读。         |

## 规范

{{specifications}}

## b-bwowsew compatibiwity

{{compat}}

## wewated events

- [`compositionstawt`](/zh-cn/docs/web/api/ewement/compositionstawt_event)
- [`compositionupdate`](/zh-cn/docs/web/api/ewement/compositionupdate_event)
