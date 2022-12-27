---
title: Event.type
slug: Web/API/Event/type
translation_of: Web/API/Event/type
---
{{APIRef("DOM")}}

## Sumário

Retorna uma string contendo o tipo de evento.

O argumento do evento {{ domxref("EventTarget.addEventListener()") }} e {{ domxref("EventTarget.removeEventListener()") }} é caso insensível(case insensitive).

Veja [Mozilla event reference](/pt-BR/docs/Mozilla_event_reference) para obter a lista de tipos de evento disponíveis

## Sintaxe

```
event.type
```

## Exemplos

```
var string = event.type;
```

```html
<!DOCTYPE html>
<html lang="pt-br">
<head>

<title>exemplo de tipo</title>

<script>
var currEvent = null;

function getEvtType(evt) {
  currEvent = evt.type;
  document.getElementById("Etype").firstChild.nodeValue = currEvent;
}

</script>
</head>

<body
  onkeydown="getEvtType(event)"
  onkeyup="getEvtType(event)"
  onmousedown="getEvtType(event)"
  onmouseup="getEvtType(event)">

<p>Pressione uma tecla ou clique com o mouse para obter o tipo de evento.</p>
<p>Tipo de evento: <span id="Etype">-</span></p>

</body>
</html>
```

## Especificação

- [type](http://www.w3.org/TR/2000/REC-DOM-Level-2-Events-20001113/events.html#Events-Event-type)
