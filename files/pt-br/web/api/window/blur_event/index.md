---
title: GlobalEventHandlers.onblur
slug: Web/API/Window/blur_event
---

{{ApiRef("HTML DOM")}}

A propriedade **onblur** retorna o código que vai lidar com o evento onBlur, se houver, que existe no elemento atual.

## Sintaxe

```
element.onblur = function;
```

- `function` é o nome de uma função definida pelo usuário, sem o sufixo () ou qualquer parâmetro, ou uma declaração de função anônima, como por exemplo

```
element.onblur = function() { console.log("evento onblur detectado!"); };
```

## Exemplo

```html
<html>
  <head>
    <title>exemplo de evento onblur</title>

    <script type="text/javascript">
      var elem = null;

      function initElement() {
        elem = document.getElementById("foo");
        // NOTA: doEvent(); ou doEvent(param); NÃO irão funcionar aqui.
        // Deve ser uma referência ao nome da função, não à chamada da função.
        elem.onblur = doEvent;
      }

      function doEvent() {
        elem.value = "Tchauzinho";
        console.log("Evento onblur detectado!");
      }
    </script>

    <style type="text/css">
      <!--
      #foo {
      border: solid blue 2px;
      }
      -->
    </style>
  </head>

  <body onload="initElement();">
    <form>
      <input type="text" id="foo" value="Olá!" />
    </form>

    <p>
      Clique no elemento acima para dá-lo focus, depois clique fora do
      elemento.<br />
      Recarregue a pagina através do NavBar.
    </p>
  </body>
</html>
```

## Notas

O evento blur aparece quando um elemento perde o focus.

Em contraste cp, MSIE--O qual faz quase todos os elementos receberem o evento blur--quase todos os elementos em navegadores baseados no Gecko NÃO funcionam com este evento.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
