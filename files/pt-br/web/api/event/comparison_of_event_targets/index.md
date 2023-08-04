---
title: Comparativo entre Event Targets
slug: Web/API/Event/Comparison_of_Event_Targets
---

{{ ApiRef() }}

### Event targets

É facil se confundir sobre o tipo de alvo (_target_) que deseja-se examinar ao criar um manipulador de eventos (_event handler_). Este artigo se propõe a esclarecer o uso da propriedade _target_.

Há 5 tipos de _targets_ a se considerar:

<table class="standard-table">
  <tbody>
    <tr>
      <th>Propriedade</th>
      <th>Definido em</th>
      <th>Objetivo</th>
    </tr>
    <tr>
      <td>
        <a href="/en/DOM/event.target"
          >event.target</a
        >
      </td>
      <td>
        <a
          class="external"
          href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-interface"
          >DOM Event Interface</a
        >
      </td>
      <td>
        <p>
          O elemento do DOM à esquerda da chamada que disparou este evento, por
          exemplo:
        </p>
        <pre class="eval"><em>element</em>.dispatchEvent(<em>event</em>)
</pre>
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en/DOM/event.currentTarget"
          >event.currentTarget</a
        >
      </td>
      <td>
        <a
          class="external"
          href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-interface"
          >DOM Event Interface</a
        >
      </td>
      <td>
        O
        <a
          class="external"
          href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-EventTarget"
          ><code>EventTarget</code></a
        >
        do qual o
        <a
          class="external"
          href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-EventListener"
          ><code>EventListeners</code></a
        >
        está sendo atualmente processado. Logo que a captura e a subida do
        evento ocorre a mudança deste valor.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/en/DOM/event.relatedTarget"
          >event.relatedTarget</a
        >
      </td>
      <td>
        <a
          class="external"
          href="https://www.w3.org/TR/DOM-Level-2/events.html#Events-MouseEvent"
          >DOM MouseEvent Interface</a
        >
      </td>
      <td>Identifica um alvo secundário para o evento.</td>
    </tr>
    <tr>
      <td>
        <a
          href="/en/DOM/event.explicitOriginalTarget"
          >event.explicitOriginalTarget</a
        >
      </td>
      <td>
        <a href="https://dxr.mozilla.org/mozilla-central/source/dom/webidl/Event.webidl">Event.webidl</a>
      </td>
      <td>
        {{ Non-standard_inline() }} Se o evento foi redirecionado por
        alguma outra razão senão o cruzamento de uma fronteira anônima, este
        evento será colocado no alvo antes que o redirecionamento ocorra. por
        exemplo, eventos do mouse são redirecionados à seus elementos pais
        quando acontecem sobre nós de texto ({{ Bug("185889") }}), e neste
        caso .target mostrará o nó pai e
        <code>.explicitOriginalTarget</code> mostrará o nó texto. Diferente de
        <code>.originalTarget</code>, <code>.explicitOriginalTarget</code> nunca
        irá conter um conteúdo anônimo.
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="/en/DOM/event.originalTarget"
          >event.originalTarget</a
        >
      </td>
      <td>
        <a href="https://dxr.mozilla.org/mozilla-central/source/dom/webidl/Event.webidl">Event.webidl</a>
      </td>
      <td>
        {{ Non-standard_inline() }} O alvo original do evento, antes de
        qualquer redirecionamento. Veja
        <a
          href="/pt-BR/docs/XBL/XBL_1.0_Reference/Anonymous_Content#Event_Flow_and_Targeting"
          >Anonymous Content#Event_Flow_and_Targeting</a
        >
        para mais detalhes.
      </td>
    </tr>
  </tbody>
</table>

### Uso de `explicitOriginalTarget` e `originalTarget`

TODO: Disponível apensas em navegadores Mozilla-based?

TODO: Adequado apenas para desenvolvedores de extensões?

### Exemplos

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

### Uso de `target` e `relatedTarget`

A propriedade `relatedTarget` do evento de `mouseover` mantém o nó de onde o mouse estava sobre anteriormente. Para o evento de `mouseout`, mantém o nó para onde o mouse se moveu.

| Tipo de Evento | [event.target](/pt-BR/DOM/event.target)               | [event.relatedTarget](/pt-BR/DOM/event.relatedTarget) |
| -------------- | ----------------------------------------------------- | ----------------------------------------------------- |
| `mouseover`    | O EventTarget do qual o dispositivo apontador entrou. | O EventTarget do qual o dispositivo apontador saiu.   |
| `mouseout`     | O EventTarget do qual o dispositivo apontador saiu.   | O EventTarget do qual o dispositivo apontador entrou. |

TODO: Necessário descrição complemento sobre eventos de `dragenter` e `dragexit`.

#### Exemplo

```
<hbox id="outer">
  <hbox id="inner"
        onmouseover="dump('mouseover ' + event.relatedTarget.id + ' > ' + event.target.id + '\n');"
        onmouseout="dump('mouseout  ' + event.target.id + ' > ' + event.relatedTarget.id + '\n');"
        style="margin: 100px; border: 10px solid black; width: 100px; height: 100px;" />
</hbox>
```
