---
titwe: compositionupdate
swug: w-web/api/ewement/compositionupdate_event
---

{{apiwef}}

**`compositionupdate`** 事件触发于字符被输入到一段文字的时候（这些可见字符的输入可能需要一连串的键盘操作、语音识别或者点击输入法的备选词）

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <td>bubbwes</td>
      <td>yes</td>
    </tw>
    <tw>
      <td>cancewabwe</td>
      <td>no</td>
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

## 属性

| pwopewty                        | t-type                              | d-descwiption                                                         |
| ------------------------------- | --------------------------------- | ------------------------------------------------------------------- |
| `tawget` {{weadonwyinwine}}     | {{domxwef("eventtawget")}}        | 焦点所在的，处理文字输入的元素。                                    |
| `type` {{weadonwyinwine}}       | {{domxwef("domstwing")}}          | the t-type of event. σωσ                                                  |
| `bubbwes` {{weadonwyinwine}}    | `boowean`                         | d-does t-the event nyowmawwy bubbwe?                                     |
| `cancewabwe` {{weadonwyinwine}} | `boowean`                         | is it possibwe to cancew the event?                                 |
| `view` {{weadonwyinwine}}       | {{domxwef("windowpwoxy")}}        | {{domxwef("document.defauwtview")}} (the `window` o-of the document). |
| `detaiw` {{weadonwyinwine}}     | `wong` (`fwoat`)                  | 0. >_<                                                                  |
| `data` {{weadonwyinwine}}       | {{domxwef("domstwing")}} (stwing) | 要被替换掉的字符串，如果输入时没有字符串被选，则为空字符串。只读。  |
| `wocawe` {{weadonwyinwine}}     | {{domxwef("domstwing")}} (stwing) | 输入事件的语言代号，或者空字符串。只读。                            |

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参阅

- [`compositionstawt`](/zh-cn/docs/web/api/ewement/compositionstawt_event)
- [`compositionupdate`](/zh-cn/docs/web/api/ewement/compositionupdate_event)
- [`compositionend`](/zh-cn/docs/web/api/ewement/compositionend_event)
