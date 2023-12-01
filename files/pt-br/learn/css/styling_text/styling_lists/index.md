---
title: Manipulando Listas
slug: Learn/CSS/Styling_text/Styling_lists
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Fundamentals", "Learn/CSS/Styling_text/Styling_links", "Learn/CSS/Styling_text")}}

Este é o 10º seção do [CSS Introdução](/pt-BR/docs/Web/Guide/CSS/Getting_Started) tutorial; ele descreve como você pode usar CSS para especificar o aparecimento de listas. Você cria um novo documento de amostra contendo listas, e um novo estilo que os estilos das listas.

## Informação: Lists

Se você aceitou o desafio na [última](/pt-BR/docs/Web/Guide/CSS/Getting_Started/Content) seção, em seguida, você viu como você pode adicionar conteúdo antes de qualquer elemento para exibi-lo como um item da lista.

CSS proporciona propriedades especiais que são projetados para listas. Geralmente é mais conveniente usar estas propriedades sempre que puder.

Para especificar o estilo para uma lista, use o {{cssxref ("list-style")}} propriedade para especificar o tipo de marcador.

O seletor na sua regra de CSS pode selecionar os elementos de item de lista (por exemplo, {{HTMLElement ("li")}}), ou pode selecionar o elemento primário da lista (por exemplo, {{HTMLElement ("ul")}}) de modo a que os elementos da lista herdam o modelo.

### Listas não ordenadas

Em uma lista _desordenada_, cada item da lista é marcado da mesma forma.

CSS tem três tipos de marcadores, e aqui está como seu navegador exibe-os:

- `disc`
- `circle`
- `square`

none

Alternativamente, você pode especificar o URL de uma imagem.

Exemplo

Essas regras especificam diferentes marcadores para diferentes classes de item da lista:

```css
li.open {
  list-style: circle;
}
li.closed {
  list-style: disc;
}
```

Quando estas classes são usadas em uma lista, que distinguir entre os itens abertos e fechados (por exemplo, em uma lista de tarefas):

```html
<ul>
  <li class="open">Lorem ipsum</li>
  <li class="closed">dolor sit</li>
  <li class="closed">Amet consectetuer</li>
  <li class="open">Magna aliquam</li>
  <li class="closed">Autem veleum</li>
</ul>
```

O resultado pode parecer:

{{EmbedLiveSample ('Listas_não_ordenadas', '', '', '')}}

### Listas ordenadas

Em uma lista*ordenada* , cada item da lista é marcado diferentemente para mostrar a sua posição na sequência.

Use a propriedade {{cssxref ("list-style")}} para especificar o tipo de marcador:

- `decimal`
- `lower-roman`
- `upper-roman`
- `lower-latin`
- `upper-latin`

Exemplo

Esta regra especifica que em {{HTMLElement ("OL")}} elementos com a classe `informações, os itens são identificados com letras maiúsculas.`

```
<ol class="info">
  <li>Lorem ipsum</li>
  <li>Dolor sit</li>
  <li>Amet consectetuer</li>
  <li>Magna aliquam</li>
  <li>Autem veleum</li>
</ol>
```

```css
ol.info {
  list-style: upper-latin;
}
```

O {{HTMLElement ("LI")}} elementos da lista herdam esse estilo:

{{EmbedLiveSample ('Listas_ordenadas', '', '', '')}}

Mais detalhes

O {{cssxref ("list-style")}} propriedade é uma propriedade taquigrafia. Em folhas de estilo complexas você pode preferir usar propriedades separadas para definir valores separados. Para obter links para essas propriedades separadas, e mais detalhes de como CSS especifica listas, consulte o {{cssxref ("list-style")}} página de referência.

Se você estiver usando uma linguagem de marcação como HTML que fornece etiquetas convencionais para não-ordenada ({{HTMLElement ("ul")}}) e ordenou ({{HTMLElement ("ol")}}) listas, então é uma boa prática para usar as marcas na forma como eles se destinam. No entanto, você pode usar CSS para fazer {{HTMLElement ("ul")}} exibição ordenada e {{HTMLElement ("ol")}} visualização não ordenada, se desejar.

Browsers diferem na maneira de implementar os estilos para listas. Não espere que sua folha de estilo dê resultados idênticos em todos os navegadores.

### Contadores

**Nota:** Alguns navegadores não suportam contadores. O [conteúdo CSS e compatibilidade do navegador](http://www.quirksmode.org/css/contents.html) página no [site de modo Quirks](http://www.quirksmode.org/) contém um gráfico detalhado de compatibilidade do navegador para este e outros recursos CSS. Páginas individuais na [referência CSS](/pt-BR/docs/Web/CSS/Reference) neste local também têm tabelas de compatibilidade do navegador.

Você pode usar contadores para numerar quaisquer elementos, não somente itens da lista. Por exemplo, em alguns documentos você pode querer numerar cabeçalhos ou parágrafos.

Para especificar a numeração, você precisa de um _contador_ com um nome que você especificar.

Em alguns elementos antes da contagem é começar, reinicie o contador com a propriedade {{cssxref ("counter-reset")}} eo nome do seu contador. O pai dos elementos que você estiver contando é um bom lugar para fazer isso, mas você pode usar qualquer elemento que vem antes os itens da lista.

Em cada elemento que o contador é incrementado, use a propriedade {{cssxref ("contra-incremento")}} eo nome do seu contador.

Para mostrar seu contador, adicione {{cssxref (":: before")}} ou {{cssxref (":: after")}} para o selector e usar o `conteúdo` da propriedade (como você fez na página anterior, Conteúdo) .

No valor do `conteúdo` de propriedade, especifique `counter ()` com o nome de seu contador. Opcionalmente especifique um tipo. Os tipos são os mesmos que na **lista ordenada** secção acima.

Normalmente, o elemento que apresenta o contador também incrementa-lo.

Exemplo

Esta regra inicializa um contador para cada {{HTMLElement ("h3")}} elemento com a classe numeradas:

```css
h3.numbered {
  counter-reset: mynum;
}
```

Esta regra mostra e incrementa o contador para cada {{HTMLElement ("p")}} elemento com a classe numeradas:

```html
<p class="numbered">Lorem ipsum</p>
<p class="numbered">dolor sit</p>
<p class="numbered">Amet consectetuer</p>
<p class="numbered">Magna aliquam</p>
<p class="numbered">Autem veleum</p>
```

```css
body {
  counter-reset: mynum;
}
p.numbered:before {
  content: counter(mynum) ": ";
  counter-increment: mynum;
  font-weight: bold;
}
```

O resultado se parece com isso:

{{ EmbedLiveSample("Contadores", '300', '200', '') }}

Mais detalhes

Você não pode usar os contadores a menos que você sabe que todo mundo que lê o documento tem um navegador que os suporta.

Se você é capaz de usar contadores, eles têm a vantagem de que você pode estilizar os contadores separadamente dos itens da lista. No exemplo acima, os contadores estão em negrito mas os itens da lista não são.

Você também pode usar contadores em formas mais complexas, por exemplo, para numerar seções, títulos, subtítulos e parágrafos em documentos formais. Para mais detalhes, consulte [contadores automáticos e numeração](https://www.w3.org/TR/CSS21/generate.html#counters) em CSS Specification.

## Listas denominadas: Ação

Crie um novo documento HTML, doc2.html. Copie e cole o conteúdo daqui:

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Sample document 2</title>
    <link rel="stylesheet" href="style2.css" />
  </head>
  <body>
    <h3 id="oceans">The oceans</h3>
    <ul>
      <li>Arctic</li>
      <li>Atlantic</li>
      <li>Pacific</li>
      <li>Indian</li>
      <li>Southern</li>
    </ul>

    <h3 class="numbered">Numbered paragraphs</h3>
    <p class="numbered">Lorem ipsum</p>
    <p class="numbered">Dolor sit</p>
    <p class="numbered">Amet consectetuer</p>
    <p class="numbered">Magna aliquam</p>
    <p class="numbered">Autem veleum</p>
  </body>
</html>
```

Faça uma nova folha de estilo, style2.css. Copie e cole o conteúdo daqui:

```css
/* numbered paragraphs */
h3.numbered {
  counter-reset: mynum;
}

p.numbered:before {
  content: counter(mynum) ": ";
  counter-increment: mynum;
  font-weight: bold;
}
```

Se o layout e comentário não são a seu gosto, alterá-los.

Abra o documento no seu browser. Se o seu navegador suporta contadores, você verá algo parecido com o exemplo abaixo. Se seu navegador não suporta contadores, então você não ver os números (e provavelmente nem mesmo os dois pontos):

{{EmbedLiveSample ('Listas_denominadas_Ação', '300', '400', '')}}

Desafios

Adicione uma regra à sua folha de estilo, para numerar os oceanos usando numerais romanos de I a V:

<table
  style="
    background-color: white;
    border: 2px outset #3366bb;
    padding: 0 6em 1em 1em;
  "
>
  <tbody>
    <tr>
      <td>
        <p><strong>The oceans</strong></p>
        <ul>
          <li>Arctic</li>
          <li>Atlantic</li>
          <li>Pacific</li>
          <li>Indian</li>
          <li>Southern</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Mude sua folha de estilo para identificar os títulos com letras maiúsculas em parênteses como este:

| **(A) The oceans**. . .**(B) Numbered paragraphs**. . . |
| ------------------------------------------------------- |

[Ver soluções para esses desafios.](/pt-BR/docs/Web/Guide/CSS/Getting_Started/Challenge_solutions#Lists)

## Qual o proximo?

Quando seu navegador exibe seu documento de amostra, ele cria espaço ao redor dos elementos quando ele coloca-los na página. A próxima página descreve como você pode usar CSS para trabalhar com as formas subjacentes de elementos, caixas.
