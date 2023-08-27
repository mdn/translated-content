---
title: イベントターゲットの比較
slug: Web/API/Event/Comparison_of_Event_Targets
l10n:
  sourceCommit: 196cc4ff3068a59b962a3fe1cbb960eb72ef542b
---

{{ ApiRef() }}

イベントハンドラーを書くときに、どのイベントターゲットを調べればいいのか迷うことはよくあります。この記事では、ターゲットプロパティの使い方を明確にします。

検討すべきターゲットは 5 つあります。

<table class="no-markdown">
  <thead>
    <tr>
      <th>プロパティ</th>
      <th>定義場所</th>
      <th>目的</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><a href="/ja/docs/Web/API/Event/target">event.target</a></code>
      </td>
      <td>
        <a href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-interface"
          >DOM Event Interface</a
        >
      </td>
      <td>
        このイベントを発行した呼び出しの左側にある DOM 要素。
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ja/docs/Web/API/Event/currentTarget"
            >event.currentTarget</a
          ></code
        >
      </td>
      <td>
        <a href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-interface"
          >DOM Event Interface</a
        >
      </td>
      <td>
        その <a href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-EventListener"><code>EventListeners</code></a> が現在処理されている <a href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-EventTarget"
          ><code>EventTarget</code></a> です。イベントキャプチャとバブリングが発生すると、この値は変化します。
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ja/docs/Web/API/MouseEvent/relatedTarget"
            >event.relatedTarget</a
          ></code
        >
      </td>
      <td>
        <a
          href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-MouseEvent"
          >DOM MouseEvent Interface</a
        >
      </td>
      <td>イベントのセカンダリーターゲットを特定します。</td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ja/docs/Web/API/Event/explicitOriginalTarget"
            >event<code>.explicitOriginalTarget</code></a
          ></code
        >
      </td>
      <td>
        <a href="https://dxr.mozilla.org/mozilla-central/source/dom/webidl/Event.webidl">Event.webidl</a>
      </td>
      <td>
        {{ Non-standard_inline() }} イベントが無名の境界通過以外の理由で再ターゲットされた場合、再ターゲットが発生する前にターゲットに設定されます。例えば、マウスイベントがテキストノードの上で発生した場合、その親ノードに再ターゲットされます（[Firefox バグ 185889](https://bugzil.la/185889)）。その場合、 <code>.target</code> は親ノードを表示し、<code>.explicitOriginalTarget</code> はテキストノードを表示します。
        <code>.originalTarget</code> とは異なり、<code>.explicitOriginalTarget</code> には無名コンテンツが含まれることはありません。
      </td>
    </tr>
    <tr>
      <td>
        <code
          ><a href="/ja/docs/Web/API/Event/originalTarget"
            >event.originalTarget</a
          ></code
        >
      </td>
      <td>
        <a href="https://dxr.mozilla.org/mozilla-central/source/dom/webidl/Event.webidl">Event.webidl</a>
      </td>
      <td>
        {{ Non-standard_inline() }} 再ターゲットされる前の、イベントの本来のターゲットです。詳細は <a href="/ja/docs/XBL/XBL_1.0_Reference/Anonymous_Content#Event_Flow_and_Targeting">Anonymous Content#Event_Flow_and_Targeting</a> を参照してください。
      </td>
    </tr>
    <tr>
      <td>event.composedTarget</td>
      <td>
        <a href="https://dxr.mozilla.org/mozilla-central/source/dom/webidl/Event.webidl">Event.webidl</a>
      </td>
      <td>
        {{ Non-standard_inline() }} Shadow DOM から合成する前の、イベントの元の非ネイティブターゲット。
      </td>
    </tr>
  </tbody>
</table>

### `explicitOriginalTarget` と `originalTarget` の使用

> **メモ:** これらのプロパティは、 Mozilla ベースのブラウザーでのみ利用可能です。

### 例

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <title>Comparison of Event Targets</title>
    <style>
      table {
        border-collapse: collapse;
        height: 150px;
        width: 100%;
      }
      td {
        border: 1px solid #ccc;
        font-weight: bold;
        padding: 5px;
        min-height: 30px;
      }
      .standard {
        background-color: #99ff99;
      }
      .non-standard {
        background-color: #902d37;
      }
    </style>
  </head>
  <body>
    <table>
      <thead>
        <tr>
          <td class="standard">
            Original target dispatching the event <small>event.target</small>
          </td>
          <td class="standard">
            Target who's event listener is being processed
            <small>event.currentTarget</small>
          </td>
          <td class="standard">
            Identify other element (if any) involved in the event
            <small>event.relatedTarget</small>
          </td>
          <td class="non-standard">
            If there was a retargeting of the event for some reason
            <small> event.explicitOriginalTarget</small> contains the target
            before retargeting (never contains anonymous targets)
          </td>
          <td class="non-standard">
            If there was a retargeting of the event for some reason
            <small> event.originalTarget</small> contains the target before
            retargeting (may contain anonymous targets)
          </td>
        </tr>
      </thead>
      <tr>
        <td id="target"></td>
        <td id="currentTarget"></td>
        <td id="relatedTarget"></td>
        <td id="explicitOriginalTarget"></td>
        <td id="originalTarget"></td>
      </tr>
    </table>
    <p>
      Clicking on the text will show the difference between
      explicitOriginalTarget, originalTarget, and target
    </p>
    <script>
      function handleClicks(e) {
        document.getElementById("target").innerHTML = e.target;
        document.getElementById("currentTarget").innerHTML = e.currentTarget;
        document.getElementById("relatedTarget").innerHTML = e.relatedTarget;
        document.getElementById("explicitOriginalTarget").innerHTML =
          e.explicitOriginalTarget;
        document.getElementById("originalTarget").innerHTML = e.originalTarget;
      }

      function handleMouseover(e) {
        document.getElementById("target").innerHTML = e.target;
        document.getElementById("relatedTarget").innerHTML = e.relatedTarget;
      }

      document.addEventListener("click", handleClicks, false);
      document.addEventListener("mouseover", handleMouseover, false);
    </script>
  </body>
</html>
```

### `target` と `relatedTarget` の使用

`mouseover` イベントの `relatedTarget` プロパティは、マウスが以前乗っていたノードを保持します。 `mouseout` イベントでは、マウスが移動した先のノードが保持されます。

| イベント種別 | [event.target](/ja/docs/Web/API/Event/target) | [event.relatedTarget](/ja/docs/Web/API/MouseEvent/relatedTarget) |
| ------------ | --------------------------------------------- | ---------------------------------------------------------------- |
| `mouseover`  | ポインティングデバイスが入った EventTarget    | ポインティングデバイスが出た EventTarget                         |
| `mouseout`   | ポインティングデバイスが出た EventTarget      | ポインティングデバイスが入った EventTarget                       |

#### 例

```xml
<hbox id="outer">
  <hbox id="inner"
        onmouseover="dump('mouseover ' + event.relatedTarget.id + ' > ' + event.target.id + '\n');"
        onmouseout="dump('mouseout  ' + event.target.id + ' > ' + event.relatedTarget.id + '\n');"
        style="margin: 100px; border: 10px solid black; width: 100px; height: 100px;" />
</hbox>
```
