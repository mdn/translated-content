---
title: CSS selectors
slug: Learn/CSS/Building_blocks/Selectors
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}

Em {{Glossary("CSS")}}, os seletores são usados para direcionar os elementos {{glossary("HTML")}} em nossas páginas da web que queremos estilizar. Há uma grande variedade de seletores CSS disponíveis, permitindo uma precisão refinada ao selecionar os elementos a serem estilizados. Neste artigo e seus sub-artigos, examinaremos os diferentes tipos em grande detalhe, vendo como eles funcionam.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Conhecimento básico de informática,
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Installing_basic_software"
          >software básico instalado</a
        > , conhecimento básico de como
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Dealing_with_files"
          >trabalhar com arquivos</a
        > , conceitos básicos de HTML (estude
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML"
          >Introdução ao HTML</a
        >
        ) e uma ideia de como o CSS funciona (estude os
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Learn/CSS/First_steps"
          >primeiros passos do CSS</a
        > ).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Para saber como os seletores CSS funcionam em detalhes.</td>
    </tr>
  </tbody>
</table>

## O que é um seletor?

Você já conheceu os seletores. Um seletor CSS é a primeira parte de uma regra CSS. É um padrão de elementos e outros termos que informam ao navegador quais elementos HTML devem ser selecionados para que os valores de propriedade CSS dentro da regra sejam aplicados a eles. O elemento ou elementos que são selecionados pelo seletor são referidos como o _assunto do seletor_ .

![Some code with the h1 highlighted.](selector.png)

Em artigos anteriores, você conheceu alguns seletores diferentes e aprendeu que existem seletores que direcionam o documento de maneiras diferentes - por exemplo, selecionando um elemento como `h1`, ou uma classe como `.special`.

Em CSS, os seletores são definidos na especificação dos seletores CSS; como qualquer outra parte do CSS, eles precisam ter suporte em navegadores para funcionarem. A maioria dos seletores que você encontrará são definidos na [especificação de Seletores de nível 3](https://www.w3.org/TR/selectors-3/) , que é uma especificação madura, portanto, você encontrará um excelente suporte de navegador para esses seletores.

## Listas de seleção

Se você tiver mais de um item que usa o mesmo CSS, os seletores individuais podem ser combinados em uma _lista de seletores_ para que a regra seja aplicada a todos os seletores individuais. Por exemplo, se eu tiver o mesmo CSS para um `h1`e também para uma classe de `.special`, poderia escrever isso como duas regras separadas.

```css
h1 {
  color: blue;
}

.special {
  color: blue;
}
```

Eu também poderia combiná-los em uma lista de seletores, adicionando uma vírgula entre eles.

```css-nolint
h1, .special {
  color: blue;
}
```

O espaço em branco é válido antes ou depois da vírgula. Você também pode achar os seletores mais legíveis se cada um estiver em uma nova linha.

```css
h1,
.special {
  color: blue;
}
```

No exemplo ao vivo abaixo, tente combinar os dois seletores que têm declarações idênticas. A exibição visual deve ser a mesma após combiná-los.

{{EmbedGHLiveSample("css-examples/learn/selectors/selector-list.html", '100%', 1000)}}

Ao agrupar seletores dessa forma, se algum seletor for inválido, a regra inteira será ignorada.

No exemplo a seguir, a regra do seletor de classe inválida será ignorada, enquanto o `h1` ainda seria estilizado.

```css
h1 {
  color: blue;
}

..special {
  color: blue;
}
```

Quando combinados, no entanto, nem o `h1` nem a classe terão o estilo, pois a regra inteira é considerada inválida.

```css
h1,
..special {
  color: blue;
}
```

## Tipos de seletores

Existem alguns agrupamentos diferentes de seletores e saber qual tipo de seletor você pode precisar o ajudará a encontrar a ferramenta certa para o trabalho. Nos subartículos deste artigo, examinaremos os diferentes grupos de seletores com mais detalhes.

### Seletores de tipo, classe e ID

Este grupo inclui seletores que têm como alvo um elemento HTML, como um `<h1>`.

```css
h1 {
}
```

Também inclui seletores que direcionam uma classe:

```css
.box {
}
```

ou um ID:

```css
#unique {
}
```

### Seletores de atributos

Este grupo de seletores oferece diferentes maneiras de selecionar elementos com base na presença de um determinado atributo em um elemento:

```css
a[title] {
}
```

Ou até mesmo faça uma seleção com base na presença de um atributo com um valor específico:

```css
a[href="https://example.com"]
{
}
```

### Pseudo classes e pseudo-elementos

Este grupo de seletores inclui pseudo classes, que definem o estilo de certos estados de um elemento. A `:hover`pseudoclasse, por exemplo, seleciona um elemento apenas quando ele está sendo passado pelo ponteiro do mouse:

```css
a:hover {
}
```

Também inclui pseudoelementos, que selecionam uma determinada parte de um elemento em vez do próprio elemento. Por exemplo, `::first-line`sempre seleciona a primeira linha de texto dentro de um elemento (a `<p>`no caso abaixo), agindo como se a tivesse `<span>`sido colocado em volta da primeira linha formatada e então selecionado.

```css
p::first-line {
}
```

### Combinadores

O grupo final de seletores combina outros seletores para direcionar os elementos em nossos documentos. O seguinte, por exemplo, seleciona parágrafos que são filhos diretos de `<article>`elementos usando o combinador filho ( `>`):

```css
article > p {
}
```

## Próximos passos

Você pode dar uma olhada na tabela de referência de seletores abaixo para obter links diretos para os vários tipos de seletores nesta seção Aprender ou no MDN em geral, ou continuar para iniciar sua jornada descobrindo sobre [seletores de tipo, classe e ID](/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors) .

{{PreviousMenuNext("Learn/CSS/Building_blocks/Cascade_and_inheritance", "Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors", "Learn/CSS/Building_blocks")}}

## Tabela de referência de seletores

A tabela a seguir fornece uma visão geral dos seletores disponíveis para uso, juntamente com links para as páginas deste guia que mostram como usar cada tipo de seletor. Também incluí um link para a página MDN de cada seletor, onde você pode verificar as informações de suporte do navegador. Você pode usar isso como uma referência para voltar quando precisar consultar os seletores mais tarde no material, ou quando você experimentar CSS em geral.

| Selector                                                                       | Example             | Learn CSS tutorial                                                                                                             |
| ------------------------------------------------------------------------------ | ------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| [Type selector](/pt-BR/docs/Web/CSS/Type_selectors)                            | `h1 { }`            | [Type selectors](/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#Type_selectors)                   |
| [Universal selector](/pt-BR/docs/Web/CSS/Universal_selectors)                  | `* { }`             | [The universal selector](/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#The_universal_selector)   |
| [Class selector](/pt-BR/docs/Web/CSS/Class_selectors)                          | `.box { }`          | [Class selectors](/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#Class_selectors)                 |
| [id selector](/pt-BR/docs/Web/CSS/ID_selectors)                                | `#unique { }`       | [ID selectors](/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors#ID_Selectors)                       |
| [Attribute selector](/pt-BR/docs/Web/CSS/Attribute_selectors)                  | `a[title] { }`      | [Attribute selectors](/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)                                     |
| [Pseudo-class selectors](/pt-BR/docs/Web/CSS/Pseudo-classes)                   | `p:first-child { }` | [Pseudo-classes](/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-class)    |
| [Pseudo-element selectors](/pt-BR/docs/Web/CSS/Pseudo-elements)                | `p::first-line { }` | [Pseudo-elements](/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Pseuso-classes_and_Pseudo-elements#What_is_a_pseudo-element) |
| [Descendant combinator](/pt-BR/docs/Web/CSS/Descendant_combinator)             | `article p`         | [Descendant combinator](/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Combinators#Descendant_Selector)                       |
| [Child combinator](/pt-BR/docs/Web/CSS/Child_combinator)                       | `article > p`       | [Child combinator](/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Combinators#Child_combinator)                               |
| [Adjacent sibling combinator](/pt-BR/docs/Web/CSS/Adjacent_sibling_combinator) | `h1 + p`            | [Adjacent sibling](/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Combinators#Adjacent_sibling)                               |
| [General sibling combinator](/pt-BR/docs/Web/CSS/General_sibling_combinator)   | `h1 ~ p`            | [General sibling](/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Combinators#General_sibling)                                 |
