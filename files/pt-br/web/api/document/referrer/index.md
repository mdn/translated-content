---
title: Document.referrer
slug: Web/API/Document/referrer
---

{{APIRef("DOM")}}

Retorna o [URI](https://www.w3.org/Addressing/#background) da página que continha o _link_ para a página atual.

## Sintaxe

```
string = document.referrer;
```

## Notas

O valor retornado será uma _string_ vazia se o usuário tiver chegado na página diretamente (digitando o endereço no navegador ou como um item "Favorito"). Como essa propriedade retorna apenas uma _string_, ela não dá acesso DOM à página que fez a referência.

## Especificação

- [DOM Level 2: referrer](https://www.w3.org/TR/DOM-Level-2-HTML/html.html#ID-95229140)
