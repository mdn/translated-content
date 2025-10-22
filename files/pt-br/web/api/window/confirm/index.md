--- 
title: "Window: método confirm()"
short-title: confirm()
slug: Web/API/Window/confirm
---

{{ApiRef("Window")}} 

O método `window.confirm()` instrui o navegador a exibir uma caixa de diálogo com uma mensagem opcional e a aguardar até que o usuário confirme ou cancele a caixa de diálogo.

Sob algumas condições — por exemplo, quando o usuário troca de abas — o navegador pode não exibir uma caixa de diálogo, ou pode não esperar que o usuário confirme ou cancele a caixa de diálogo.

## Sintaxe

```js-nolint
confirm()
confirm(mensagem)
```

### Parâmetros

- `mensagem` {{optional_inline}}
  - : Uma string que você deseja exibir na caixa de diálogo de confirmação.

### Valor de retorno

Um booleano que indica se OK (`true`) ou Cancelar (`false`) foi selecionado.
Se um navegador estiver ignorando as caixas de diálogo na página, o valor retornado será sempre `false`.

## Exemplos

### Confirmando antes de uma ação

O exemplo a seguir demonstra como verificar o valor de retorno de uma caixa de diálogo de confirmação.
Quando o usuário clica no botão OK, chamamos {{domxref("window.open()")}}, e se o usuário clica em Cancelar, imprimimos um texto em um elemento {{htmlelement("pre")}}. 

```html live-sample___confirm
<button id="windowButton">Abrir nova aba</button>
<pre id="log"></pre>
```

```js live-sample___confirm
const windowButton = document.querySelector("#windowButton");
const log = document.querySelector("#log");

windowButton.addEventListener("click", () => {
  if (window.confirm("Você quer abrir uma nova aba?")) {
    window.open("https://developer.mozilla.org/en-US/docs/Web/API/Window/open", "_blank");
  } else {
    log.innerText = "Que bom que você ficou!";
  }
});
```

{{EmbedLiveSample("confirmar", "100%", "80px", "allow-modals allow-popups")}} 

## Notas

As caixas de diálogo são janelas modais, impedindo a interação do usuário com o resto da interface do programa até que sejam fechadas.
Por esse motivo, você não deve usar excessivamente nenhuma função que crie uma caixa de diálogo ou uma janela modal.
Como alternativa, o elemento {{HTMLElement("dialog")}} pode ser usado para confirmações.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- Elemento {{HTMLElement("dialog")}}
- {{domxref("window.alert()")}}
- {{domxref("window.prompt()")}}
- [Nunca Use um Aviso Quando Você Quer Dizer Desfazer](https://alistapart.com/article/neveruseawarning/) em A List Apart (2017)
