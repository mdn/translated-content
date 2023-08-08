---
title: Document.onafterscriptexecute
slug: Web/API/Document/afterscriptexecute_event
---

{{ApiRef("DOM")}}{{non-standard_header}}

**`Document.onafterscriptexecute`** プロパティは、静的な {{HTMLElement("script")}} 要素のスクリプトの実行が終了したときに呼び出される関数を参照します。要素が {{domxref("Node.appendChild()", "appendChild()")}} などで動的に追加された場合には呼び出されません。

## 構文

```
document.onafterscriptexecute = funcRef;
```

_funcRef_ は関数の参照で、イベントが発行されると呼び出されます。イベントの `target` 属性が、実行が完了した {{HTMLElement("script")}} 要素に設定されます。

## 例

```js
function finished(e) {
  logMessage(`Finished script with ID: ${e.target.id}`);
}

document.addEventListener("afterscriptexecute", finished, true);
```

[ライブ例を表示](/samples/html/currentScript.html)

## 仕様書

- [HTML5](https://www.whatwg.org/specs/web-apps/current-work/#the-script-element)

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.onbeforescriptexecute")}}
- {{domxref("Document.currentScript")}}
