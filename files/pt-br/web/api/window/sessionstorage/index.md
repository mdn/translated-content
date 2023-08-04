---
title: Window.sessionStorage
slug: Web/API/Window/sessionStorage
---

{{APIRef()}}

A propriedade `sessionStorage` permite acessar um objeto tipo session {{domxref("Storage")}}. A sessionStorage é similar ao [`localStorage`](/pt-BR/docs/Web/API/Window.localStorage), a única diferença é que enquanto os dados armazenados no `localStorage` não expiram, os dados no sessionstorage tem os seus dados limpos ao expirar a sessão da página. A sessão da página dura enquanto o browser está aberto e se mantém no recarregamento da página. **Abrir a página em uma nova aba ou nova janela irá gerar uma nova sessão,** o que diferencia de como os cookies trabalham**.**

## Sintaxe

```js
// Salva os dados na sessionStorage
sessionStorage.setItem("chave", "valor");

// Obtém os dados da sessionStorage
var data = sessionStorage.getItem("chave");
```

### Valor

Objeto {{domxref("Storage")}}.

## Exemplo

O seguinte trecho acessa o objeto da sessão do domínio atual {{domxref("Storage")}} e adiciona um item usando o {{domxref("Storage.setItem()")}}.

```js
sessionStorage.setItem("myCat", "Tom");
```

O exemplo a seguir salva automaticamente o conteúdo da caixa de texto, e caso o browser seja acidentalmente recarregado, o conteúdo da caixa de texto é restaurado.

```js
// Obtem a caixa de texto que vamos rastrear
var field = document.getElementById("campo");

// Se tivermos um valor salvo automaticamente
// (isto só ocorrerá se a página for acidentalmente recarregada)
if (sessionStorage.getItem("autosave")) {
  // Restaura o conteúdo da caixa de texto
  field.value = sessionStorage.getItem("autosave");
}

// Verifica as mudanças que ocorrem na caixa de texto
field.addEventListener("change", function () {
  // E salva o resultado dentro de um objeto session storage
  sessionStorage.setItem("autosave", field.value);
});
```

> **Nota:** Por favor use o artigo [Using the Web Storage API](/pt-BR/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) para um exemplo completo.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Using the Web Storage API](/pt-BR/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [Window.localStorage](/pt-BR/docs/Web/API/Window.localStorage)
