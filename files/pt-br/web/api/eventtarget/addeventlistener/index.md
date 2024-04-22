---
title: Element.addEventListener()
slug: Web/API/EventTarget/addEventListener
---

{{apiref("DOM Events")}}

`addEventListener()` registra uma única espera de evento em um único alvo. O [alvo do evento](/pt-BR/docs/DOM/EventTarget) pode ser um único [elemento](/pt-BR/docs/DOM/element) em um documento, o [`documento`](/pt-BR/docs/DOM/document) em si, uma [`janela`](/pt-BR/docs/DOM/window), ou um [`XMLHttpRequest`](/pt-BR/docs/DOM/XMLHttpRequest).

Para registrar mais de uma espera de evento como alvo, chame `addEventListener()` para o mesmo alvo mas com diferentes tipos de evento ou captura de parâmetros.

## Sintaxe

```
alvo.addEventListener(type,listener[, options]);
alvo.addEventListener(type,listener[, useCapture, wantUntrusted {{ Non-standard_inline() }}]); // Gecko/Mozilla only
```

- `type`
  - : Uma linha de texto que representa o [tipo de evento](/pt-BR/docs/DOM/event.type) a ser esperado.
- listener
  - : O objeto que recebe uma notificação quando um evento do tipo especificado ocorre. Esse objeto precisa implementar a interface do [`EventListener`](https://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-EventListener), ou simplesmente executar uma [função](/pt-BR/docs/JavaScript/Guide/Functions) JavaScript.
- `useCapture` {{ optional_inline() }}
  - : Se `true`, `useCapture` indica que o usuário deseja iniciar uma captura. Depois de iniciada a captura, todos os eventos do tipo especificado serão enviados à `listener` registrada antes de serem enviados à qualquer `EventTarget` abaixo dela na hierarquia de DOMs. Eventos que borbulharem para cima na hierarquia não acionarão a escuta designada a usar a captura. Veja [Eventos DOM Nível 3](https://www.w3.org/TR/DOM-Level-3-Events/#event-flow) para uma explicação detalhada. Perceba que esse parâmetro não é opcional em todos os navegadores. Se não for especificado, `useCapture` é `false`.
- `wantsUntrusted` {{ Non-standard_inline() }}
  - : Se `true`, o evento pode ser acionado por conteúdo não-confiável. Veja [Interação entre páginas com e sem privilégios](/pt-BR/docs/Code_snippets/Interaction_between_privileged_and_non-privileged_pages).

> **Nota:** `useCapture` tornou-se opcional somente nas versões mais recentes dos principais navegadores; não era opcional antes do Firefox 6, por exemplo. Você deve especificar esse parâmetro para obter uma maior compatibilidade.

## Exemplo

```html
<!doctype html>
<html>
  <head>
    <title>Exemplo de Evento DOM</title>

    <style>
      #t {
        border: 1px solid red;
      }
      #t1 {
        background-color: pink;
      }
    </style>

    <script>
      // Função para mudar o conteúdo de t2
      function modifyText() {
        var t2 = document.getElementById("t2");
        t2.firstChild.nodeValue = "three";
      }

      // Função para adicionar uma espera de evento em t
      function load() {
        var el = document.getElementById("t");
        el.addEventListener("click", modifyText, false);
      }

      document.addEventListener("DOMContentLoaded", load, false);
    </script>
  </head>
  <body>
    <table id="t">
      <tr>
        <td id="t1">one</td>
      </tr>
      <tr>
        <td id="t2">two</td>
      </tr>
    </table>
  </body>
</html>
```

[View on JSFiddle](https://jsfiddle.net/madBYK/UumUP)

No exemplo acima, `modifyText()` é uma escuta para eventos de `click` registrados usando `addEventListener()`. Um clique em qualquer lugar da tabela irá borbulhar para cima até o manipulador e executar `modifyText()`.

Se você deseja passar parâmetros para a função de escuta, você deve usar uma função anônima.

```html
<!doctype html>
<html>
  <head>
    <title>Exemplo de Evento DOM</title>

    <style>
      #t {
        border: 1px solid red;
      }
      #t1 {
        background-color: pink;
      }
    </style>

    <script>
      // Função para mudar o conteúdo de t2
      function modifyText(new_text) {
        var t2 = document.getElementById("t2");
        t2.firstChild.nodeValue = new_text;
      }

      // Função para adicionar uma espera de evento em t
      function load() {
        var el = document.getElementById("t");
        el.addEventListener(
          "click",
          function () {
            modifyText("four");
          },
          false,
        );
      }
    </script>
  </head>
  <body onload="load();">
    <table id="t">
      <tr>
        <td id="t1">one</td>
      </tr>
      <tr>
        <td id="t2">two</td>
      </tr>
    </table>
  </body>
</html>
```

## Notas

### Por que usar `addEventListener`?

`addEventListener` é a maneira de registrar uma espera de evento como especificada no W3C DOM. Seus benefícios são os seguintes:

- Permite mais de um manipulador por evento. Isso é particularmente útil em bibliotecas [DHTML](/pt-BR/docs/DHTML) ou em [extensões Mozilla](/pt-BR/docs/Extensions) que precisam trabalhar bem mesmo com outras bibliotecas/extensões sendo usadas.
- Te dá um pente-fino do estágio em que a espera de evento é ativada (captura ou borbulha).
- Funciona em qualquer elemento DOM, não só para elementos HTML.

Existe outra alternativa, [uma maneira ultrapassada de registrar esperas de evento](#Older_way_to_register_event_listeners).

### Adicionando uma espera de evento durante um disparo de evento

Se um EventListener for somado a um EventTarget enquanto está processando um evento, ele não será ativado pelas ações atuais, mas poderá ser ativado em um período posterior no fluxo de eventos, como na fase de borbulha.

### Múltiplas esperas de evento idênticas

Se múltiplas esperas de evento idênticas forem registradas no mesmo EventTarget com os mesmos parâmetros, as versões duplicadas serão descartadas. Elas não fazem o EventListener ser disparado mais de uma vez, e, como as duplicatas são descartadas, elas não precisam ser removidas manualmente com o método [removeEventListener](/pt-BR/docs/DOM/element.removeEventListener).

### **O valor de** **this** **no manipulador**

É preferível referenciar o elemento do qual a espera de evento foi disparada, como quando é usado um manipulador genérico para uma série de elementos similares. Quando anexar uma função usando addEventListener(), o valor de this é mudado — perceba que o valor de this é passado para uma função a partir do disparador.

Nos exemplos acima, o valor de this em modifyText(), quando disparado pelo evento de clique, é uma referência à tabela 't'. Isso é um contraste do comportamento que acontece se o manipulador é adicionado ao HTML fonte:

```html
<table id="t" onclick="modifyText();">
  . . .
</table>
```

O valor de this em modifyText(), quando disparado pelo evento de clique no HTML, será uma referência ao objeto global (no caso, a janela).

> **Nota:** JavaScript 1.8.5 introduz o método [`Function.prototype.bind()`](/pt-BR/docs/JavaScript/Reference/Global_Objects/Function/bind), que permite especificar o valor que deve ser usado como `this` para todas as chamadas à uma determinada função. Isso evita problemas quando não é claro o que `this` será, dependendo do contexto do qual a sua função for chamada. Perceba, entretanto, que é preciso manter uma referência da escuta à mão, para que depois você possa removê-la.

Este é um exemplo com e sem `bind`:

```js
var Algo = function (elemento) {
  this.nome = "Algo bom";
  this.onclick1 = function (evento) {
    console.log(this.nome); // indefinido, porque this é a função de escuta do clique
  };
  this.onclick2 = function (evento) {
    console.log(this.nome); // 'Algo bom', porque this está como objeto Algo através do bind
  };
  elemento.addEventListener("click", this.onclick1, false);
  elemento.addEventListener("click", this.onclick2.bind(this), false); // Truque de bind
};
```

Outra solução é usar uma função especial chamada `handleEvent` para capturar quaisquer eventos:

```js
var Algo = function (elemento) {
  this.nome = "Algo bom";
  this.handleEvent = function (evento) {
    console.log(this.nome); // 'Algo bom', porque this é o objeto Algo
    switch (evento.type) {
      case "click":
        // seu codigo aqui...
        break;
      case "dblclick":
        // seu codigo aqui...
        break;
    }
  };
  elemento.addEventListener("click", this, false); // Não this.handleEvent, só this
  elemento.addEventListener("dblclick", this, false); // Não this.handleEvent, só this
};
```

### Internet Explorer antigos e attachEvent

Em versões do Internet Explorer anteriores ao IE9, você precisa usar [`attachEvent`](<http://msdn.microsoft.com/pt-BR/library/ms536343(VS.85).aspx>) em vez do padrão `addEventListener`. Para dar suporte ao IE, o exemplo acima pode ser modificado para:

```js
if (el.addEventListener) {
  el.addEventListener("click", modifyText, false);
} else if (el.attachEvent) {
  el.attachEvent("onclick", modifyText);
}
```

Existe um porém com `attachEvent` o valor de `this` será a referência ao objeto `window` em vez do elemento do qual foi disparado.

### Uma maneira ultrapassada de registrar esperas de evento

`addEventListener()` foi introduzido com as especificações de [Eventos](https://www.w3.org/TR/DOM-Level-2-Events) DOM 2. Antes disso, esperas de evento eram registradas assim:

```js
// Passe uma função de referência — não adicione '()' depois dela, o que chamaria a função!
el.onclick = modifyText;

// Usando uma expressão de função
element.onclick = function () {
  // ... lógica da função ...
};
```

Esse método substitui as esperar de evento de `click` no elemento, se houve alguma. Igualmente para outros outros eventos e manipuladores de evento associados, como `blur` (`onblur`), `keypress` (`onkeypress`), e assim por diante.

Porque era essencialmente uma parte do DOM 0, esse método era largamente suportado e não necessitava de códigos entre-navegadores especiais; logo é normalmente usado para registrar esperas de evento dinâmicamente, a menos que atributos extras do `addEventListener()` sejam necessários.

### Problemas de memória

```js
var i;
var els = document.getElementsByTagName('*');

// Caso 1
for(i=0 ; i<els.length ; i++){
  els[i].addEventListener("click", function(e){/*fazer algo*/}, false});
}

// Caso 2
function processarEvento(e){
  /*fazer algo*/
}

for(i=0 ; i<els.length ; i++){
  els[i].addEventListener("click", processarEvento, false});
}
```

No primeiro caso, uma nova função (anônima) é criada em cada turno do loop. No segundo caso, a mesma função previamente declarada é usada como um manipulador de evento. Isso resulta em um consumo menor de memória. Além do mais, no primeiro caso, já que nenhuma referência à função anônima é mantida, não é possível chamar [`element.removeEventListener`](/pt-BR/docs/DOM/element.removeEventListener) porque não há uma referência ao manipulador, enquanto no segundo caso é possível fazer `myElement.removeEventListener("click", processEvent, false)`.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [elemento.removeEventListener()](/pt-BR/docs/DOM/element.removeEventListener)
- [Criando e disparando eventos customizáveis](/pt-BR/docs/DOM/Creating_and_triggering_events)
- [Mais detalhes no uso de `this` nos manipuladores de eventos](http://www.quirksmode.org/js/this.html)
