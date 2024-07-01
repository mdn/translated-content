---
title: Window.localStorage
slug: Web/API/Window/localStorage
---

{{APIRef()}}

A propriedade `localStorage` permite acessar um objeto {{domxref("Storage")}} local. A `localStorage` é similar ao [`sessionStorage`](/pt-BR/docs/Web/API/Window.sessionStorage). A única diferença é que enquanto os dados armazenados no localStorage não expiram, os dados no sessionStorage tem os seus dados limpos ao expirar a sessão da página — ou seja, quando a página (aba ou janela) é fechada.

## Sintaxe

```js
meuStorage = localStorage;
```

### Valor

Objeto {{domxref("Storage")}}.

## Exemplo

O seguinte trecho acessa o objeto {{domxref("Storage")}} local do domínio atual e adiciona um item usando o {{domxref("Storage.setItem()")}}.

```js
localStorage.setItem("meuGato", "Tom");
```

> **Nota:** **Nota: Por favor veja o artigo** [Using the Web Storage API](/pt-BR/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) **para um exemplo completo.**

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Using the Web Storage API](/pt-BR/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- {{domxref("LocalStorage")}}
- {{domxref("SessionStorage")}}
- {{domxref("Window.sessionStorage")}}
