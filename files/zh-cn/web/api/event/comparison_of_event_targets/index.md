---
title: Comparison of Event Targets
slug: Web/API/Event/Comparison_of_Event_Targets
---

{{ ApiRef() }}

### Event targets

It's easy to get confused about which target to examine when writing an event handler. This article should clarify the use of the target properties.

There are 5 targets to consider:

<table>
  <tbody>
    <tr>
      <th>Property</th>
      <th>Defined in</th>
      <th>Purpose</th>
    </tr>
    <tr>
      <td><a href="/en/DOM/event.target">event.target</a></td>
      <td>
        <a
          href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-interface"
          >DOM Event Interface</a
        >
      </td>
      <td>
        <p>
          The DOM element on the lefthand side of the call that triggered this
          event, eg:
        </p>
        <pre class="eval"><em>element</em>.dispatchEvent(<em>event</em>)
</pre>
      </td>
    </tr>
    <tr>
      <td><a href="/en/DOM/event.currentTarget">event.currentTarget</a></td>
      <td>
        <a
          href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-interface"
          >DOM Event Interface</a
        >
      </td>
      <td>
        The
        <a
          href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventTarget"
          ><code>EventTarget</code></a
        >
        whose
        <a
          href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventListener"
          ><code>EventListeners</code></a
        >
        are currently being processed. As the event capturing and bubbling
        occurs this value changes.
      </td>
    </tr>
    <tr>
      <td><a href="/en/DOM/event.relatedTarget">event.relatedTarget</a></td>
      <td>
        <a
          href="http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-MouseEvent"
          >DOM MouseEvent Interface</a
        >
      </td>
      <td>Identifies a secondary target for the event.</td>
    </tr>
    <tr>
      <td>
        <a href="/en/DOM/event.explicitOriginalTarget"
          >event.explicitOriginalTarget</a
        >
      </td>
      <td>
        <a
          href="https://dxr.mozilla.org/mozilla-central/source/dom/webidl/Event.webidl"
          >Event.webidl</a
        >
      </td>
      <td>
        {{ Non-standard_inline() }} If the event was retargeted for
        some reason other than an anonymous boundary crossing, this will be set
        to the target before the retargeting occurs. For example, mouse events
        are retargeted to their parent node when they happen over text nodes
        ([Firefox bug 185889](https://bugzil.la/185889)), and in that case <code>.target</code> will
        show the parent and <code>.explicitOriginalTarget</code> will show the
        text node.<br />Unlike <code>.originalTarget</code>,
        <code>.explicitOriginalTarget</code> will never contain anonymous
        content.
      </td>
    </tr>
    <tr>
      <td><a href="/en/DOM/event.originalTarget">event.originalTarget</a></td>
      <td>
        <a
          href="https://dxr.mozilla.org/mozilla-central/source/dom/webidl/Event.webidl"
          >Event.webidl</a
        >
      </td>
      <td>
        {{ Non-standard_inline() }} The original target of the event,
        before any retargetings. See
        <a
          href="/zh-CN/docs/XBL/XBL_1.0_Reference/Anonymous_Content#Event_Flow_and_Targeting"
          >Anonymous Content#Event_Flow_and_Targeting</a
        >
        for details.
      </td>
    </tr>
  </tbody>
</table>

### Use of `explicitOriginalTarget` and `originalTarget`

TODO: Only available in a Mozilla-based browser? TODO: Only suitable for extension-developers?

### Examples

```
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
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
            background-color: #902D37;
        }
    </style>
</head>
<body>
    <table>
    <thead>
        <tr>
            <td class="standard">Original target dispatching the event <small>event.target</small></td>
            <td class="standard">Target who's event listener is being processed <small>event.currentTarget</small></td>
            <td class="standard">Identify other element (if any) involved in the event <small>event.relatedTarget</small></td>
            <td class="non-standard">If there was a retargetting of the event for some reason <small> event.explicitOriginalTarget</small> contains the target before retargetting (never contains anonymous targets)</td>
            <td class="non-standard">If there was a retargetting of the event for some reason <small> event.originalTarget</small> contains the target before retargetting (may contain anonymous targets)</td>
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
<p>Clicking on the text will show the difference between explicitOriginalTarget, originalTarget and target</p>
<script>
    function handleClicks(e) {
        document.getElementById('target').innerHTML = e.target;
        document.getElementById('currentTarget').innerHTML = e.currentTarget;
        document.getElementById('relatedTarget').innerHTML = e.relatedTarget;
        document.getElementById('explicitOriginalTarget').innerHTML = e.explicitOriginalTarget;
        document.getElementById('originalTarget').innerHTML = e.originalTarget;
    }

    function handleMouseover(e) {
        document.getElementById('target').innerHTML = e.target;
        document.getElementById('relatedTarget').innerHTML = e.relatedTarget;
    }

    document.addEventListener('click', handleClicks, false);
    document.addEventListener('mouseover', handleMouseover, false);
</script>
</body>
</html>
```

### Use of `target` and `relatedTarget`

The `relatedTarget` property for the `mouseover` event holds the node that the mouse was previously over. For the `mouseout` event, it holds the node that the mouse moved to.

| Event type  | [event.target](/zh-CN/DOM/event.target)           | [event.relatedTarget](/zh-CN/DOM/event.relatedTarget) |
| ----------- | ------------------------------------------------- | ----------------------------------------------------- |
| `mouseover` | the EventTarget which the pointing device entered | the EventTarget which the pointing device exited      |
| `mouseout`  | the EventTarget which the pointing device exited  | the EventTarget which the pointing device entered     |

TODO: Also needs descriptions about `dragenter` and `dragexit` events.

#### Example

```
<hbox id="outer">
  <hbox id="inner"
        onmouseover="dump('mouseover ' + event.relatedTarget.id + ' > ' + event.target.id + '\n');"
        onmouseout="dump('mouseout  ' + event.target.id + ' > ' + event.relatedTarget.id + '\n');"
        style="margin: 100px; border: 10px solid black; width: 100px; height: 100px;" />
</hbox>
```
