---
title: CSS - Perguntas frequentes
slug: Learn/CSS/Howto/CSS_FAQ
---

## Por que meu CSS, que é válido, não é renderizado corretamente?

Navegadores usam a declaração de `DOCTYPE` para decidir se devem exibir o documento usando um modo compatível com os padrões da web ou com padrões de navegadores antigos. Usar corretamente a declaração de um `DOCTYPE` moderno no início do seu documento HTML melhorará a forma como o navegador trata os padrões utilizados no documento.

Navegadores modernos possuem dois principais modos de renderização:

- _Modo de peculiaridades (Quirks Mode)_: Também chamado de modo retrocompatível, permite que páginas antigas sejam renderizadas como seus autores pretendiam, seguindo regras de renderização não-padronizadas geralmente encontradas em navegadores antigos. Documentos com uma declaração `DOCTYPE` incompleta, incorreta, que não tenham uma declaração `DOCTYPE` ou não tenham uma declaração comumente utilizada antes de 2001 serão renderizados deste modo.
- _Modo de padrões (Standards Mode)_: Neste modo o navegador tenta seguir os padrões W3C estritamente, ignorando peculiaridades encontradas em documentos designados a navegadores antigos. Espera-se que novas páginas HTML sejam desenvolvidas para navegadores que seguem os padrões da W3C, e como resultado disso, páginas com uma declaração de `DOCTYPE` moderna serão renderizadas deste modo.

Navegadores baseados na engine Gecko possuem um terceiro modo de renderização; _[Modo de "quase padrões" (Almost Standards Mode)](/pt-BR/docs/Gecko's)_, que renderiza as páginas seguindo regras do _Modo de padrões_, porém considerando algumas poucas peculiaridades encontradas em páginas para navegadores antigos.

Esta é uma lista das declarações de `DOCTYPE` mais usadas e que acionarão o modo de padrões ou de "quase padrões":

```
<!DOCTYPE html> /* Este é o doctype HTML5. Levando em consideração que
                   navegadores modernos possuem um parser de HTML5, o
                   uso desta declaração é recomendada */

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.0 Transitional//EN"
"https://www.w3.org/TR/html4/loose.dtd">

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
"https://www.w3.org/TR/html4/strict.dtd">

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
"https://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">

<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
"https://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
```

Sempre que possível, use a declaração de `DOCTYPE` HTML5.

## Por que meu CSS, que é válido, não é renderizado?

Abaixo temos algumas das possíveis causas:

- O caminho para o arquivo CSS está incorreto.
- Para ser aplicado, uma folha de estilos CSS deve ser servido ao navegador com o tipo MIME `text/css`. Caso o servidor não sirva a folha de estilos com este tipo, as regras CSS não serão interpretadas e aplicadas aos elementos no documento.

## Qual a diferença entre `id` e `class`?

Elementos HTML podem ter um atributo `id` e/ou um atributo `class`. O atributo `id` designa um nome ao elemento ao qual este é aplicado, e para que a marcação seja válida, deverá haver no documento apenas um elemento com o nome designado (Por exemplo: Caso você designe o nome _janela_ a um elemento, nenhum outro elemento poderá ter o nome _janela_).

O atributo `class` designa um ou vários nomes de classes as quais um elemento pertence. Diferentemente do valor designado no atributo `id`, os nomes designados em `class` podem ser reutilizados em outros elementos no documento. De qualquer forma, CSS permite que você aplique estilos tanto para uma `id` particular quanto para `classes`.

Algumas dicas de quando usar `id` e quando usar `class:`

- Utilize classes para estilizar elementos quando você pretender atribuir as mesmas regras de estilização a diversos elementos num documento. Mesmo que você tenha apenas um elemento no momento, utilize classes para sua estilização caso você pretenda reutilizar as mesmas regras em elementos criados futuramente.
- Utilize ids quando você precisar restringir regras de estilização a um determinado bloco ou elemento. Como ids não devem sepetidas num documento, as regras de estilo designadas a uma `id` serão aplicadas apenas àquele elemento.

Geralmente é recomendável que se utilize classes sempre que possível, utilizando ids apenas quando absolutamente necessário para usos específicos (como conectar um `label` a um elemento de formulário, ou para estilizar elementos que necessicam ser semanticamente únicos). Abaixo estão descritas algumas vantagens em utilizar classes como forma principal de estilização:

- Usar classes torna seu código extensível — Mesmo que você tenha apenas um elemento a ser estilizado agora, você pode querer adicionar as mesmas regras a outros elementos futuramente.
- Classes permitem que você estilize diversos elementos. Sendo assim, classes podem ajudar a desenvolver folhas de estilo menores; mais enchutas, já que regras podem ser facilmente reutilizadas entre elementos. Isso não só ajuda na manutenção da folha de estilo, como também agiliza a renderização de páginas, principalmente em conexões lentas.
- Seletores de classes tem menor [especificidade](/pt-BR/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance#Specificity) do que seletores de id, o que torna as regras de estilização mais fáceis de serem sobrepostas.

> **Nota:** Veja [Seletores](/pt-BR/docs/Learn/CSS/Introduction_to_CSS/Selectors) para mais informações.

## Como eu redefino o valor padrão de uma propriedade?

Inicialmente CSS não propiciava a diretiva "default" e a única forma de redefinir o valor padrão de uma propriedade era expliciatamente redeclarando aquela propriedade. Por exemplo:

```css
/* A cor padrão do cabeçalho é preta */
h1 {
  color: red;
}
h1 {
  color: black;
}
```

Isso mudou com CSS 2; a diretiva [initial](/es/CSS/initial) agora é um valor válido para uma propriedade CSS. Ela redefine tal propriedade para seu valor padrão, o qual é definido nas especificações CSS para tal propriedade.

```css
/* A cor padrão do cabeçalho é preta */
h1 {
  color: red;
}
h1 {
  color: initial;
}
```

## Como eu derivo um estilo de outro?

CSS não exatamente permite que um estilo seja definido com os termos de outro. (Veja [as notas de Eric Meyer sobre a posição do grupo de trabalho a respeito do assunto](http://archivist.incutio.com/viewlist/css-discuss/2685)). Entretanto, é possível atingir o mesmo efeito designando diversas classes a um elemento, e [Variáveis CSS](/pt-BR/docs/Web/CSS/Using_CSS_variables) agora providenciam uma forma de definir informações sobre um estilo em um lugar e reutilizar estas informações em diversos outros lugares.

## Como eu aplico diversas classes a um elemento?

Elementos HTML podem ter diversas classes designadas a si, com as classes sendo listadas no atributo `class`, tendo um espaço em branco separando cada uma.

```html
<style type="text/css">
  .news {
    background: black;
    color: white;
  }
  .today {
    font-weight: bold;
  }
</style>

<div class="news today">... content of today's news ...</div>
```

Caso a mesma propriedade seja declara em mais de uma regra, o conflito é resolvido primeiro pela ordem de especificidade e depois através da ordem das declarações CSS, com o último valor definido da propriedade sendo considerado. A ordem em que o nome das classes aparece no atributo `class` é irrelevante.

## Por que minhas regras de estilização não funcionam corretamente?

Regras de estilização, mesmo que sejam semanticamente corretas, podem não ser aplicadas em determinadas situações. Você pode utilizar o visualizador de regras CSS do [Inspetor de DOM](/pt-BR/docs/DOM_Inspector) para resolver problemas deste tipo, mas as ocasiões mais frequentes onde regras de estilização são ignoradas estão listadas abaixo.

### Hierarquia dos elementos HTML

A forma como estilos CSS são aplicados a elementos HTML depende também da hierarquia dos elementos HTML. É importante lembrar que a regra aplicada a um descendente sobrepõe a regra do pai, independente de qualquer especificidade ou prioridade das regras CSS.

```html
<style type="text/css">
  .news {
    color: black;
  }
  .corpName {
    font-weight: bold;
    color: red;
  }
</style>

<!-- O texto do item news é preto, mas o nome da corporação é vermelho e em negrito -->
<div class="news">
  (Reuters) <span class="corpName">General Electric</span> (GE.NYS) announced on
  Thursday...
</div>
```

No caso de hierarquias HTML complexas, se uma regra parece ser ignorada, verifique se o elemento está dentro de outro elemento com um estilo diferente.

### Regra de estilização explicitamente redefinida

Em folhas de estilo CSS, a ordem **é** importante. Se você definir uma propriedade e logo depois redefinir a mesma propriedade, a última regra definida será considerada.

```html
<style>
  #stockTicker {
    font-weight: bold;
  }
  .stockSymbol {
    color: red;
  }
  /*  outras regras             */
  /*  outras regras             */
  /*  outras regras             */
  .stockSymbol {
    font-weight: normal;
  }
</style>

<!-- Boa parte do texto está em negrito, exceto "GE", que é vermelho e não está em negrito -->
<div id="stockTicker">NYS: <span class="stockSymbol">GE</span> +1.0 ...</div>
```

Para evitar que este tipo de problema, tente definir regras apenas uma vez para um determinado seletor e agrupe as regras para aquele seletor.

### Uso de uma propriedade reduzida

Utilizar propriedades reduzidas para definir regra de estilização é interessante pois permite definir diversas propriedade de uma regra em uma sintaxe compacta e que permite otimizar o tamanho da folha de estilos. Utilizar propriedades reduzidas para definir apenas uma propriedade é permitido, mas deve ser lembrado que atributos da propriedade não definidos são redefinidos para seu valor padrão. Ou seja, isso pode acabar sobrepondo regras anteriormente definidas implicitamente..

```html
<style>
  #stockTicker {
    font-size: 12px;
    font-family: Verdana;
    font-weight: bold;
  }
  .stockSymbol {
    font: 14px Arial;
    color: red;
  }
</style>

<div id="stockTicker">NYS: <span class="stockSymbol">GE</span> +1.0 ...</div>
```

No exemplo anterior o problema ocorre em regras pertencentes a diferentes elementos. Mas também poderia acontecer para o mesmo elemento, pois a ordem das regras **é** importante.

```css
#stockTicker {
  font-weight: bold;
  font: 12px Verdana; /* font-weight agora está definido como "normal" */
}
```

### Uso do seletor `*`

O seletor curinga `*` faz referência a qualquer elemento, e deve ser usado com cuidado.

```html
<style>
  body * {
    font-weight: normal;
  }
  #stockTicker {
    font: 12px Verdana;
  }
  .corpName {
    font-weight: bold;
  }
  .stockUp {
    color: red;
  }
</style>

<div id="section">
  NYS: <span class="corpName"><span class="stockUp">GE</span></span> +1.0 ...
</div>
```

No exemplo acima, o seletor \* aplica a regra para todos os elementos dentro de `body`, em qualquer nível hierarquico, incluindo a classe `.stockUp`. Sendo assim a regra `font-weight: bold;` aplicada à classe `.corpName` é sobreposta por `font-weight: normal;` aplicada a todos os elementos dentro de `body`.

O uso do seletor \* também deve ser minimizado por ser um seletor lento, especialmente quando não utilizado como o primeiro elemento de um seletor. Este seletor deve ser evitado o máximo possível.

### Especificidade em CSS

Quando multiplas regras são aplicadas a um elemento, a regra a ser renderizada depende de sua [especificidade](/pt-BR/docs/Learn/CSS/Introduction_to_CSS/Cascade_and_inheritance#Specificity). O estilo _inline_ (regras de estilo definidas no atributo `style` de um elemento HTML) tem a mais alta especificidade e irá sobrepor qualquer seletor. Seletores de ID tem a segunda mais alta especificidade, com seletores de classes vindo logo após e, eventualmente, seletores de elementos (tags). Tendo isso em mente, a cor do texto da {{htmlelement("div")}} abaixo terá a cor vermelha.

```html
<style>
  div {
    color: black;
  }
  #orange {
    color: orange;
  }
  .green {
    color: green;
  }
</style>

<div id="orange" class="green" style="color: red;">Isso é vermelho</div>
```

As regras se tornam mais complicadas quando o seletor tem diversas partes. Informações mais detalhadas sobre como a especificidade de seletores é calculada podem ser encontradas nas [Especificações CSS 2.1, capítulo 6.4.3](https://www.w3.org/TR/CSS21/cascade.html#specificity).

## O que as propriedades -moz-\*, -ms-\*, -webkit-\*, -o-\* e -khtml-\* fazem?

Estas propriedades, chamadas _propriedades prefixadas_, são extenções ao padrão CSS. Elas permitem o uso de recursos experimentais e fora dos padrões em navegadores sem poluir o namespace convencional, prevenindo que incompatibilidades entre implementações experimentais e fora dos padrões surjam quando os padrões CSS forem expandidos.

Apesar do vasto uso na web, o uso de propriedades prefixadas não é recomendado em ambiente de produção. O uso indiscriminado de funcionalidades experimentais ou não-padrão pode causar problemas de compatibilidade futuros (como uma funcionalidade experimental mudando de nome, ou tendo o mesmo nome de uma outro funcionalidade que no passado tinha uma finalidade completamente diferente) e não renderizar páginas de forma correta em diferentes navegadores. Outro problema muito comum encontrado pelo uso indiscriminado de propriedades prefixadas é a declaração de regras que acabam se tornando exclusivas para determinadas engines, quebrando a renderização em outros navegadores, mesmo estes navegadores dando suporte à propriedade padrão não-prefixada (Por exemplo, apenas a propriedade `-webkit-border-radius` sendo usada em uma regra ao invés de `border-radius`, que é suportada por todos os navegadores, inclusive os baseados em webkit).

Para amenizar os problemas de incompatibilidade gerados pelo uso de propriedades prefixadas (principalmente `-webkit-`), foi estabelecido o [Compatibility Living Standard](https://compat.spec.whatwg.org/), o qual sugere um conjunto de propriedades `-webkit-` que navegadores (mesmo não utilizando a engine webkit) devem suportar. Outra medida que vem sendo tomada por desenvolvedores de navegadores é abandonar o suporte a propriedades prefixadas em versões estáveis dos navegadores, mantendo suporte a tais propriedades apenas em*Nightly Builds* e similares, desencorajando o uso em ambiente de produção.

Caso você precise usar propriedades prefixadas em seu trabalho, você deve declarar primeiramente as propriedades prefixadas e, por último, declarar a versão padrão não-prefixada da propriedade anteriormente declara, garantindo que o navegador utilize a versão especificada nos padrões assim que suportado. Por exemplo:

```css
-ms-transform: rotate(90deg);
-webkit-transform: rotate(90deg);
transform: rotate(90deg);
```

> **Nota:** Para mais informações em como lhe dar com propriedades prefixadas, veja [Lidando com problemas comuns em HTML e CSS — Lidando com prefixos CSS](/pt-BR/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS#Handling_CSS_prefixes) do nosso módulo [Teste Cross-browsing](/pt-BR/docs/Learn/Tools_and_testing/Cross_browser_testing).

> **Nota:** Veja a página [Extenções CSS Mozilla](/pt-BR/docs/CSS/CSS_Reference/Mozilla_Extensions) para mais informações sobre propriedades CSS prefixadas da Mozilla.

## Como `z-index` está relacionado a posicionamento?

A propriedade `z-index` especifica a ordem dos elementos da pilha.

Um elemento com z-index/ordem na pilha maior sempre será renderizado à frente de um elemento com um z-index/ordem de pilha menor. `z-index` funcionará apenas em elementos que tenham uma posição especificada (Ou seja, só funcionará caso o elemento tenha `position:absolute`, `position:relative` ou `position:fixed`).

> **Nota:** Para mais informações, veja nosso artigo de aprendizado sobre [Posicionamento](/pt-BR/docs/Learn/CSS/CSS_layout/Positioning), e em particular a seção [Introduzindo z-index](/pt-BR/docs/Learn/CSS/CSS_layout/Positioning#Introducing_z-index).
