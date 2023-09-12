---
title: beforeunload
slug: Web/API/Window/beforeunload_event
---

O evento **`beforeunload`** é disparado quando o _window_, o _document_ e seus recursos estão prestes a ser descarregados.

Quando uma _string_ é atribuída na propriedade `returnValue` do _Event_, uma caixa de díalogo aparecerá solicitando ao usuário uma confirmação para sair da página (veja exemplo abaixo). Quando nenhum valor é fornecido, o evento é processado silenciosamente.

<table class="properties">
  <tbody>
    <tr>
      <td>Bubbles</td>
      <td>Não</td>
    </tr>
    <tr>
      <td>Cancelable</td>
      <td>Sim</td>
    </tr>
    <tr>
      <td>Target objects</td>
      <td>defaultView</td>
    </tr>
    <tr>
      <td>Interface</td>
      <td>{{domxref("Event")}}</td>
    </tr>
  </tbody>
</table>

## Propriedades

| Propriedade                     | Tipo                       | Descrição                                                              |
| ------------------------------- | -------------------------- | ---------------------------------------------------------------------- |
| `target` {{readOnlyInline}}     | {{domxref("EventTarget")}} | O evento alvo (the topmost target in the DOM tree).                    |
| `type` {{readOnlyInline}}       | {{domxref("DOMString")}}   | O tipo de evento.                                                      |
| `bubbles` {{readOnlyInline}}    | {{jsxref("Boolean")}}      | O evento é normalmente _bubble_?                                       |
| `cancelable` {{readOnlyInline}} | {{jsxref("Boolean")}}      | É possível cancelar o evento?                                          |
| `returnValue`                   | {{domxref("DOMString")}}   | O valor de retorno do evento (a mensagem que será exibida ao usuário). |

## Exemplos

```js
window.addEventListener("beforeunload", function (event) {
  event.returnValue = "\\o/";
});

// equivalente a
window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
});
```

Navegadores baseados no WebKit não seguem a especificação para caixas de diálogo. Um exemplo que funcionaria na maioria dos navegadores seria aproximadamente o seguinte:

```js
window.addEventListener("beforeunload", function (e) {
  var confirmationMessage = "\\o/";

  e.returnValue = confirmationMessage; // Gecko, Trident, Chrome 34+
  return confirmationMessage; // Gecko, WebKit, Chrome <34
});
```

## Notas

Quando este evento retorna um valor não vazio (_non-void_), é solicitada ao usuário uma confirmação para descarregar a página. Na maioria dos navegadores o valor retornado no evento é exibido como mensagem nessa confirmação. No Firefox 4 e versões anteriores a _string_ retornada não é exibida para o usuário. Ao invés disso, o Firefox exibe a mensagem "Esta página está perguntanto se você deseja sair - é possível que as alterações feitas não sejam salvas." Veja [Erro do Firefox 588292](https://bugzil.la/588292).

Desde 25 de maio de 2011 a especificação HTML5 define que chamadas aos métodos {{domxref("window.alert()")}}, {{domxref("window.confirm()")}} e {{domxref("window.prompt()")}} serão ignoradas durante este evento. Para mais detalhes veja a [especificação HTML5](https://www.w3.org/TR/html5/webappapis.html#user-prompts) (em inglês).

Note também que vários navegadores para celular ignoram o resultado deste evento (isso que dizer que eles não solicitam a confirmação do usuário). O Firefox possui uma configuração escondida em _about:config_ que faz o mesmo. Em essência, isto significa que o usuário estará sempre confirmando que o documento pode ser descarregado.

## Veja também

- {{Event("DOMContentLoaded")}}
- {{Event("readystatechange")}}
- {{Event("load")}}
- {{Event("unload")}}
- [Descarregando documentos — Confirmando para descarregar o documento](http://www.whatwg.org/specs/web-apps/current-work/#prompt-to-unload-a-document) (em inglês)
