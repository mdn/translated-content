---
title: DOMContentLoaded
slug: Web/API/Document/DOMContentLoaded_event
---

O evento `DOMContentLoaded` é acionado quando todo o HTML foi completamente carregado e analisado, sem aguardar pelo CSS, imagens, e subframes para encerrar o carregamento. Um evento muito diferente - [`load`](/pt-BR/docs/Mozilla_event_reference/load) - deve ser usado apenas para detectar uma página completamente carregada. É um engano comum as pessoas usarem [`load`](/pt-BR/docs/Mozilla_event_reference/load) quando `DOMContentLoaded` seria muito mais apropriado.

> **Nota:** Javascript Síncrono pausa a análise do DOM.

## Acelerando

Se você quer que o DOM seja analisado o mais rápido possível após uma requisição do usuário, você deve usar recursos do [javascript assíncrono](/pt-BR/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests) e [otimizar o carregamento de folhas de estilo](https://developers.google.com/speed/docs/insights/OptimizeCSSDelivery) pois, caso contrário, a página será carregada mais lentamente pois muitos itens serão carregados paralelamente, atrasando a visualização da página.

## Informações gerais

- Especificação
  - : [HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/the-end.html#the-end)
- Interface
  - : Event
- Propaga
  - : Sim
- Cancelável
  - : Sim (embora especificado como evento simples não-cancelável)
- Alvo
  - : Document
- Ação Default
  - : Nenhuma.

## Propriedades

| Property                        | Type                       | Description                           |
| ------------------------------- | -------------------------- | ------------------------------------- |
| `target` {{readonlyInline}}     | {{domxref("EventTarget")}} | Alvo do evento (O topo do DOM).       |
| `type` {{readonlyInline}}       | {{domxref("DOMString")}}   | Tipo de evento                        |
| `bubbles` {{readonlyInline}}    | {{jsxref("Boolean")}}      | O evento é por padrão bubbles ou não. |
| `cancelable` {{readonlyInline}} | {{jsxref("Boolean")}}      | O evento pode ser cancelado ou não.   |

## Exemplo

### Básico

```html
<script>
  document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM completamente carregado e analisado");
  });
</script>
```

### Forçando o atraso do DOMContentLoaded

```html
<script>
  document.addEventListener("DOMContentLoaded", function (event) {
    console.log("DOM completamente carregado e analisado");
  });

  for (var i = 0; i < 1000000000; i++) {} // este script síncrono irá o atrasar carregamento do DOM. Então o evento DOMContentLoaded irá ser ativado mais tarde.
</script>
```

### Verificando se o carregamento está completo

`DOMContentLoaded` pode disparar antes do seu script ser carregado, então é importante validar antes de adicionar um listener.

```
function doSomething() {
  console.info("DOM carregado");
}

if (document.readyState === "loading") {  // Ainda carregando
  document.addEventListener("DOMContentLoaded", doSomething);
} else {  // `DOMContentLoaded` foi disparado
  doSomething();
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Eventos Relacionados

- {{event("DOMContentLoaded")}}
- {{event("readystatechange")}}
- {{event("load")}}
- {{event("beforeunload")}}
- {{event("unload")}}
