---
title: Event.eventPhase
slug: Web/API/Event/eventPhase
tags:
  - API
  - DOM
  - Gecko
  - Gecko DOM Reference
  - Property
  - Reference
translation_of: Web/API/Event/eventPhase
---
<p>{{ ApiRef("DOM") }}</p>

<h3 id="Summary">Общая информация</h3>

<p>Отображает текущую фазу процесса обработки события.</p>

<h3 id="Syntax">Синтаксис</h3>

<pre class="eval"><em>var phase</em> = event.eventPhase;
</pre>

<p>Возвращает целое число, соответствующее одной из 4 констант:</p>

<ul>
 <li><code>Event.NONE = 0</code></li>
 <li><code>Event.CAPTURING_PHASE = 1</code></li>
 <li><code>Event.AT_TARGET = 2</code></li>
 <li><code>Event.BUBBLING_PHASE = 3</code></li>
</ul>

<p>Смысл констант смотри в <a class="external" href="http://www.w3.org/TR/DOM-Level-3-Events/#event-flow">section 3.1, Event dispatch and DOM event flow</a>, спецификации DOM Level 3.</p>

<h3 id="Пример">Пример</h3>

<pre>&lt;!DOCTYPE html&gt;
&lt;html&gt;
&lt;head&gt; &lt;title&gt;Event Propagation&lt;/title&gt;
  &lt;style type="text/css"&gt;
    body { font-family:'Trebuchet MS'; }
    div { margin: 20px; padding: 4px; border: thin black solid; }
    #divInfo { margin: 18px; padding: 8px; background-color:white; font-size:80%; }
  &lt;/style&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h4&gt;Event Propagation Chain&lt;/h4&gt;
  &lt;ul&gt;
    &lt;li&gt;Click 'd1'&lt;/li&gt;
    &lt;li&gt;Analyse event propagation chain&lt;/li&gt;
    &lt;li&gt;Click next div and repeat the experience&lt;/li&gt;
    &lt;li&gt;Change Capturing mode&lt;/li&gt;
    &lt;li&gt;Repeat the experience&lt;/li&gt;
  &lt;/ul&gt;
  &lt;input type="checkbox" id="chCapture" /&gt; Use Capturing
  &lt;div id="d1"&gt;d1
    &lt;div id="d2"&gt;d2
      &lt;div id="d3"&gt;d3
        &lt;div id="d4"&gt;d4&lt;/div&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  &lt;/div&gt;
  &lt;div id="divInfo"&gt;&lt;/div&gt;
  &lt;script&gt;
    var
      clear = false,
      divInfo = null,
      divs = null,
      useCapture = false;
  window.onload = function ()
  {
    divInfo = document.getElementById("divInfo");
    divs = document.getElementsByTagName('div');
    chCapture = document.getElementById("chCapture");
    chCapture.onclick = function ()
    {
      RemoveListeners();
      AddListeners();
    }
    Clear();
    AddListeners();
  }
  function RemoveListeners()
  {
    for (var i = 0; i &lt; divs.length; i++)
    {
      var d = divs[i];
      if (d.id != "divInfo")
      {
        d.removeEventListener("click", OnDivClick, true);
        d.removeEventListener("click", OnDivClick, false);
      }
    }
  }
  function AddListeners()
  {
    for (var i = 0; i &lt; divs.length; i++)
    {
      var d = divs[i];
      if (d.id != "divInfo")
      {
        d.addEventListener("click", OnDivClick, false);
        if (chCapture.checked)
          d.addEventListener("click", OnDivClick, true);
        d.onmousemove = function () { clear = true; };
      }
    }
  }
  function OnDivClick(e)
  {
    if (clear)
    {
      Clear();
      clear = false;
    }

    if (e.eventPhase == 2)
      e.currentTarget.style.backgroundColor = 'red';

    var level =
        e.eventPhase == 0 ? "none" :
        e.eventPhase == 1 ? "capturing" :
        e.eventPhase == 2 ? "target" :
        e.eventPhase == 3 ? "bubbling" : "error";
    divInfo.innerHTML += e.currentTarget.id + "; eventPhase: " + level + "&lt;br/&gt;";
  }
  function Clear()
  {
    for (var i = 0; i &lt; divs.length; i++)
    {
      if (divs[i].id != "divInfo")
        divs[i].style.backgroundColor = (i &amp; 1) ? "#f6eedb" : "#cceeff";
    }
    divInfo.innerHTML = '';
  }
  &lt;/script&gt;
&lt;/body&gt;
&lt;/html&gt;</pre>

<h3 id="Specification">Спецификация</h3>

<p><a class="external" href="http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-Event-eventPhase">DOM Level 2 Events: Event.eventPhase </a></p>

<p>{{ languages( { "pl": "pl/DOM/event.eventPhase" } ) }}</p>
