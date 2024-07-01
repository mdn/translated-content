---
title: Event.preventDefault()
slug: Web/API/Event/preventDefault
---

{{ ApiRef("DOM") }}

## Resumo

Cancela o evento se for cancelável, sem parar a propagação do mesmo.

## Sintaxe

```
event.preventDefault();
```

## Exemplo

Alternar é a ação padrão de clicar em uma caixa de seleção. Este exemplo demonstra como impedir que isso aconteça:

```html
<!doctype html>
<html>
  <head>
    <title>preventDefault example</title>

    <script>
      function stopDefAction(evt) {
        evt.preventDefault();
      }

      document
        .getElementById("my-checkbox")
        .addEventListener("click", stopDefAction, false);
    </script>
  </head>

  <body>
    <p>Please click on the checkbox control.</p>

    <form>
      <input type="checkbox" id="my-checkbox" />
      <label for="my-checkbox">Checkbox</label>
    </form>
  </body>
</html>
```

Você pode ver o `preventDefault` em ação [aqui](/samples/domref/dispatchEvent.html).

O exemplo a seguir demonstra como um input com texto inválido pode ser parado ao chegar ao campo de entrada com o preventDefault().

```html
<!DOCTYPE html>
<html>
<head>
<title>preventDefault example</title>

<script>
```

```js
function Init() {
  var myTextbox = document.getElementById("my-textbox");
  myTextbox.addEventListener("keypress", checkName, false);
}

function checkName(evt) {
  var charCode = evt.charCode;
  if (charCode != 0) {
    if (charCode < 97 || charCode > 122) {
      evt.preventDefault();
      alert(
        "Please use lowercase letters only." +
          "\n" +
          "charCode: " +
          charCode +
          "\n",
      );
    }
  }
}
```

```html
</script>
</head>
<body onload="Init ()">
    <p>Please enter your name using lowercase letters only.</p>
    <form>
        <input type="text" id="my-textbox" />
    </form>
</body>
</html>
```

Aqui está o resultado do código anterior:

{{ EmbedLiveSample('preventDefault_invalid_text', '', '', '') }}

## Notas

Chamar preventDefault durante qualquer fase do fluxo de eventos cancela o evento, o que significa que qualquer ação padrão normalmente feita pela aplicação como um resultado do evento não ocorrerá.

> **Nota:** A partir do Gecko 6.0, chamar o `preventDefault()` faz com que o {{ domxref("event.defaultPrevented") }} se torne true.

Você pode usar o [event.cancelable](/pt-BR/docs/Web/API/event.cancelable) para checar se o evento é cancelável. Chamar o `preventDefault` para um evento não cancelável não fará efeito.

`Se o preventDefault não parar a propagação do evento através do DOM. event.stopPropagation deve ser usada para isso.`

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
