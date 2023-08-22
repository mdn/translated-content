---
title: Utilizando data attributes
slug: Learn/HTML/Howto/Use_data_attributes
---

O [HTML5](/pt-BR/docs/Web/Guide/HTML/HTML5) foi criado pensando na extensibilidade dos dados que precisam ser associados a um determinado elemento mas não necessariamente tem um significado definido. [Atributos data-\*](/pt-BR/docs/Web/HTML/Global_attributes#attr-dataset) nos permite armazenar informações extras em elementos HTML padrões e semânticos, sem a necessidades de hacks como [classList](/pt-BR/docs/Web/API/Element.classList), atributos fora do padrão, propriedades extras no DOM ou o método depreciado [setUserData](/pt-BR/docs/Web/API/Node.setUserData).

## Sintaxe HTML

A sintaxe é simples. Qualquer atributo de qualquer elemento no qual o nome do atributo inicia com `data-` é um atributo data. Digamos que você possui um article e quer armazenar informações extras que não possuem nenhuma representação visual. Use atributos data para isso:

```html
<article
  id="electriccars"
  data-columns="3"
  data-index-number="12314"
  data-parent="cars">
  ...
</article>
```

## Acesso no JavaScript

Ler os valores destes atributos via [JavaScript](/pt-BR/docs/Web/JavaScript) é muito simples também. Você pode lê-los usando {{domxref("Element.getAttribute", "getAttribute()")}} com o nome html completo, mas a forma padrão provê uma alternativa mais simples: um {{domxref("DOMStringMap")}} pode ser lido através da propriedade {{domxref("HTMLElement.dataset", "dataset")}}.

Para obter o atributo data através do objeto `dataset`, acesse a propriedade utilizando a parte do nome do atributo após o prefixo `data-` (note que o hífen é convertido para camelCase).

```js
var article = document.getElementById("electriccars");

article.dataset.columns; // "3"
article.dataset.indexNumber; // "12314"
article.dataset.parent; // "cars"
```

Cada propriedade é uma String e pode ser lida e escrita. No exemplo acima a atribuição `article.dataset.columns = 5` iria alterar esse atributo para "5".

## Acesso no CSS

Note que os atributos data são atributos em HTML puro, e você pode inclusive acessá-los via [CSS](/pt-BR/docs/Web/CSS). Por exemplo, para mostrar o elemento pai em um artigo, você pode usar [conteúdo gerado](/pt-BR/docs/Web/CSS/content) em CSS com a função {{cssxref("attr")}}:

```css
article::before {
  content: attr(data-parent);
}
```

Pode-se também usar os [seletores de atributos](/pt-BR/docs/Web/CSS/Attribute_selectors) em CSS para alterar estilos de acordo com o atributo data:

```css
article[data-columns="3"] {
  width: 400px;
}
article[data-columns="4"] {
  width: 600px;
}
```

Pode-se tudo isso em funcionamento neste [exemplo JSBin](http://jsbin.com/ujiday/2/edit).

Atributos data também podem ser utilizados para conter informações que mudam constantemente, como a pontuação em um jogo. Usando seletores CSS e acesso com JavaScript permite que se construa efeitos excelentes sem ter que escrever suas próprias rotinas de display. Veja [esta tela](http://www.youtube.com/watch?v=On_WyUB1gOk) para um exemplo utilizando conteúdo gerado e transições CSS ([exemplo JSBin](http://jsbin.com/atawaz/3/edit)).

Uma vez que valores data são strings, todos os valores devem estar entre aspas ou então a estilização não fará efeito.

## Issues

Não armazene conteúdo que deve estar visível e acessível nos atributos data porque tecnologias assistivas podem não acessá-los. Além disso, motores de busca podem não indexar os valores dos atributos data.

Os principais issues a serem considerados são com suporte e performance no Internet Explorer. O Internet Explorer 11+ provê suporte para o padrão, mas todas as versões anteriores [não suportam `dataset`](http://caniuse.com/#feat=dataset). Para suporte ao IE 10 e anteriores, deve-se acessar atributos data através de {{domxref("Element.getAttribute", "getAttribute()")}} . E ainda, a [performance de leitura dos atributos data](http://jsperf.com/data-dataset) é ruim, comparada com o armazenamento em um data warehouse JS. O uso de `dataset` é até pior que a leitura dos dados com `getAttribute()`.

Apesar do que foi colocado, para metadados customizados associados a elementos, eles são uma ótima solução.

No Firefox 49.0.2 (e talvez em versões anteriores/posteriores), os atributos data que excederem 1022 caracteres não serão lidos pelo Javascript (EcmaScript 4).

## Veja também

- Este artigo é uma adaptação de [Usando atributos data em JavaScript e CSS no hacks.mozilla.org](https://hacks.mozilla.org/2012/10/using-data-attributes-in-javascript-and-css/).
- [Como usar atributos data em HTML5](http://www.sitepoint.com/use-html5-data-attributes/) (Sitepoint)
