---
title: Storage
slug: Web/API/Storage
tags:
  - API
  - Interface
  - NeedsTranslation
  - Reference
  - Storage
  - TopicStub
  - Web Storage
  - data
translation_of: Web/API/Storage
---
{{APIRef("Web Storage API")}}

A interface de Armazenamento da Web Storage API fornece acesso ao armazenamento de sessão ou armazenamento local para um domínio específico, permitindo que você, por exemplo, adicione, modifique ou exclua itens de dados armazenados.

Se você quiser manipular o armazenamento de sessão para um domínio, você chama o método {{domxref ("Window.sessionStorage")}}; Se você quiser manipular o armazenamento local para um domínio, você chama {{domxref ("Window.localStorage")}}.

## Propriedades

- {{domxref("Storage.length")}} {{readonlyInline}}
  - : Retorna um número inteiro que representa o número de itens de dados armazenados no objeto Storage.

## Métodos

- {{domxref("Storage.key()")}}
  - : Quando passado um número n, este método retornará o nome da n-ésima chave no armazenamento..
- {{domxref("Storage.getItem()")}}
  - : Quando passado um nome de chave, retornará o valor dessa chave.
- {{domxref("Storage.setItem()")}}
  - : Quando passado um nome de chave e valor, irá adicionar essa chave para o armazenamento, ou atualizar o valor dessa chave, se já existir.
- {{domxref("Storage.removeItem()")}}
  - : Quando passado um nome de chave, irá remover essa chave do armazenamento.
- {{domxref("Storage.clear()")}}
  - : Quando chamado, irá esvaziar todas as chaves fora do armazenamento.

## Exemplos

Aqui acessamos um objeto Storage chamando localStorage. Primeiro testamos se o armazenamento local contém itens de dados usando! localStorage.getItem ('bgcolor'). Se isso acontecer, executaremos uma função chamada setStyles () que agarra os itens de dados usando {{domxref("localStorage.getItem()")}} E usa esses valores para atualizar estilos de página. Se não, executamos outra função, populateStorage (), que usa {{domxref("localStorage.setItem()")}} Para definir os valores do item, em seguida, executa setStyles ().

```js
if(!localStorage.getItem('bgcolor')) {
  populateStorage();
} else {
  setStyles();
}

function populateStorage() {
  localStorage.setItem('bgcolor', document.getElementById('bgcolor').value);
  localStorage.setItem('font', document.getElementById('font').value);
  localStorage.setItem('image', document.getElementById('image').value);

  setStyles();
}

function setStyles() {
  var currentColor = localStorage.getItem('bgcolor');
  var currentFont = localStorage.getItem('font');
  var currentImage = localStorage.getItem('image');

  document.getElementById('bgcolor').value = currentColor;
  document.getElementById('font').value = currentFont;
  document.getElementById('image').value = currentImage;

  htmlElem.style.backgroundColor = '#' + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute('src', currentImage);
}
```

> **Nota:** Para ver isso funcionando como um exemplo completo de trabalho, consulte nossa [Demonstração de armazenamento na Web](https://github.com/mdn/web-storage-demo).

## Especificações

| Especificação                                                                        | Estado                           | Comentário |
| ------------------------------------------------------------------------------------ | -------------------------------- | ---------- |
| {{SpecName('Web Storage', '#the-storage-interface', 'Storage')}} | {{Spec2('Web Storage')}} |            |

## Compatibilidade com navegadores

{{Compat("api.Storage")}}

\[1] Desde o iOS 5.1, o Safari Mobile armazena os dados localStorage na pasta de cache, que está sujeita a limpeza ocasional a pedido do sistema operacional, normalmente se o espaço for curto.

Todos os navegadores têm diferentes níveis de capacidade para o localStorage e sessionStorage. [Aqui está um resumo detalhado de todas as capacidades de armazenamento para vários navegadores](http://dev-test.nemikor.com/web-storage/support-test/).

## Veja também

[Using the Web Storage API](/pt-BR/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
