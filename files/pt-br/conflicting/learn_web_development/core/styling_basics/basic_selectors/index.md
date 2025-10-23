---
title: Seletores de tipo, classe e ID
slug: conflicting/Learn_web_development/Core/Styling_basics/Basic_selectors
original_slug: Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}

Nesta lição, vamos analisar alguns dos seletores simples, o qual provavelmente serão os mais frequentemente usados no seu trabalho.

<table>
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>Familiaridade básica com uso de computadores,
        <a
          href="/pt-BR/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Instalando software básico</a
        >, conhecimento básico em
        <a
          href="/pt-BR/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >como trabalhar com arquivos</a
        >, HTML básico (estude
        <a href="/pt-BR/docs/Learn/HTML/Introduction_to_HTML"
          >Introdução ao HTML</a
        >), e uma ideia de como o CSS funciona (estude
        <a href="/pt-BR/docs/Learn/CSS/First_steps">CSS primeiros passos</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender sobre os diferentes seletores CSS, que podemos usar para aplicar em um documento CSS.
      </td>
    </tr>
  </tbody>
</table>

## Seletores de tipo

Às vezes, um **seletor de tipo** é chamado de _seletor de nome de tag_ ou _seletor de elemento_ porque seleciona uma tag/elemento HTML em seu documento. No exemplo abaixo, usamos os seletores `span`, `em` e `strong`.

**Tente adicionar uma regra CSS para selecionar o elemento `<h1>` e mudar sua cor para azul.**

{{EmbedGHLiveSample("css-examples/learn/selectors/type.html", '100%', 1100)}}

## O seletor universal

O seletor universal é indicado por um asterisco (`*`). Ele seleciona tudo no documento (ou dentro do elemento pai se estiver sendo encadeado com outro elemento e um combinador descendente). No exemplo a seguir, usamos o seletor universal para remover as margens de todos os elementos. Em vez do estilo padrão adicionado pelo navegador – que separa títulos e parágrafos com margens – tudo está próximo.

{{EmbedGHLiveSample("css-examples/learn/selectors/universal.html", '100%', 750)}}

Às vezes, esse tipo de comportamento pode ser visto em "redefinir folhas de estilo", que remove todo o estilo do navegador. Como o seletor universal faz alterações globais, nós o utilizamos para situações muito específicas, como a descrita a seguir.

### Usando o seletor universal para facilitar a leitura de seus seletores

Um uso do seletor universal é tornar os seletores mais fáceis de ler e mais óbvios em termos do que estão fazendo. Por exemplo, se quisermos selecionar qualquer elemento descendente de um elemento `<article>` que seja o primeiro filho de seu pai, incluindo filhos diretos, e torná-los em negrito, poderíamos usar o método {{cssxref(":first-child")}} pseudo-class. Aprenderemos mais sobre isso na lição sobre [pseudo-classes e pseudo-elementos](/pt-BR/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements), como um seletor descendente junto com o seletor de elemento `<article>`:

```css
article :first-child {
  font-weight: bold;
}
```

No entanto, este seletor pode ser confundido com `article:first-child`, que selecionará qualquer elemento `<article>` que seja o primeiro filho de outro elemento.

Para evitar essa confusão, podemos adicionar o seletor universal à pseudoclasse `:first-child`, para que fique mais óbvio o que o seletor está fazendo. Está selecionando _any_ elemento que é o primeiro filho de um elemento `<article>`, ou o primeiro filho de qualquer elemento descendente de `<article>`:

```css
article *:first-child {
  font-weight: bold;
}
```

Embora ambos façam a mesma coisa, a legibilidade é significativamente melhorada.

## Seletores de classe

O seletor de classe começa com um caractere de ponto (`.`). Ele selecionará tudo no documento com essa classe aplicada a ele. No exemplo ao vivo abaixo, criamos uma classe chamada `highlight` e a aplicamos a vários lugares no meu documento. Todos os elementos que possuem a classe aplicada são realçados.

{{EmbedGHLiveSample("css-examples/learn/selectors/class.html", '100%', 750)}}

### Segmentação de classes em elementos específicos

Você pode criar um seletor que terá como alvo elementos específicos com a classe aplicada. Neste próximo exemplo, vamos destacar um `<span>` com uma classe de `highlight` diferentemente de um cabeçalho `<h1>` com uma classe de `highlight`. Fazemos isso usando o seletor de tipo para o elemento que queremos direcionar, com a classe anexada usando um ponto, sem espaço em branco entre eles.

{{EmbedGHLiveSample("css-examples/learn/selectors/class-type.html", '100%', 750)}}

Essa abordagem reduz o escopo de uma regra. A regra se aplicará apenas a esse elemento específico e à combinação de classe. Você precisaria adicionar outro seletor se decidisse que a regra deveria se aplicar a outros elementos também.

### Segmente um elemento se ele tiver mais de uma classe aplicada

Você pode aplicar várias classes a um elemento e direcioná-las individualmente ou apenas selecionar o elemento quando todas as classes no seletor estiverem presentes. Isso pode ser útil ao criar componentes que podem ser combinados de diferentes maneiras em seu site.

No exemplo abaixo, temos um `<div>` que contém uma nota. A borda cinza é aplicada quando a caixa tem uma classe `notebox`. Se também tiver uma classe de `warning` ou `danger`, alteramos o {{cssxref("border-color")}}.

Podemos dizer ao navegador que só queremos corresponder ao elemento se ele tiver duas classes aplicadas, encadeando-as sem espaço em branco entre elas. Você verá que o último `<div>` não recebe nenhum estilo aplicado, pois possui apenas a classe `danger`; ele também precisa do `notebox` para aplicar qualquer coisa.

{{EmbedGHLiveSample("css-examples/learn/selectors/class-many.html", '100%', 900)}}

## seletores de ID

Um seletor de ID começa com um `#` em vez de um caractere de ponto, mas é usado da mesma forma que um seletor de classe. No entanto, um ID pode ser usado apenas uma vez por página e os elementos podem ter apenas um único valor `id` aplicado a eles. Ele pode selecionar um elemento que tenha o `id` definido nele, e você pode preceder o ID com um seletor de tipo para direcionar o elemento apenas se o elemento e o ID corresponderem. Você pode ver esses dois usos no exemplo a seguir:

{{EmbedGHLiveSample("css-examples/learn/selectors/id.html", '100%', 750)}}

> [!WARNING]
> usar o mesmo ID várias vezes em um documento pode parecer funcionar para fins de estilo, mas não faça isso. Isso resulta em código inválido e causará um comportamento estranho em muitos lugares.

> [!NOTE]
> Como aprendemos na lição sobre especificidade, um ID tem alta especificidade. Ele anulará a maioria dos outros seletores. Na maioria dos casos, é preferível adicionar uma classe a um elemento em vez de um ID. No entanto, se usar o ID for a única maneira de segmentar o elemento — talvez porque você não tenha acesso à marcação e não possa editá-la — isso funcionará.

## Resumo

Isso encerra os seletores de tipo, classe e ID. Continuaremos explorando seletores observando [seletores de atributos](/pt-BR/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors", "Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks")}}
