---
title: <display-box>
slug: Web/CSS/display-box
---

{{CSSRef}}

Essas palavras-chave definem se um elemento gera caixas de exibição.

## Sintaxe

- `contents` {{Experimental_Inline}}

  - : Esses elementos não produzem uma caixa específica por si mesmos. Eles são substituídos por sua pseudo-caixa e suas caixas filho. Observe que a especificação CSS Display Level 3 define como o `contents`

    o valor deve afetar "elementos incomuns" - elementos que não são renderizados apenas pelos conceitos da caixa CSS, como elementos substituídos. Consulte o Apêndice B: Efeitos da exibição: conteúdo em Elementos incomuns para obter mais detalhes.

    Devido a um erro nos navegadores, atualmente isso remove o elemento da árvore de acessibilidade - os leitores de tela não analisam o que está dentro. Consulte a seção Preocupações com acessibilidade abaixo para obter mais detalhes.

- `none`
  - : Desativa a exibição de um elemento para que não tenha efeito no layout (o documento é renderizado como se o elemento não existisse). Todos os elementos descendentes também têm a exibição desativada.
    Para que um elemento ocupe o espaço que normalmente ocuparia, mas sem renderizar nada, use o {{CSSxRef("visibility")}} propriedade em vez disso.

### Sintaxe formal

{{CSSSyntax}}

## Exemplos

Neste primeiro exemplo, o parágrafo com uma classe de segredo é definido como `display: none`; a caixa e qualquer conteúdo agora não são renderizados.

### display: none

#### HTML

```html
<p>Visible text</p>
<p class="secret">Invisible text</p>
```

#### CSS

```css
p.secret {
  display: none;
}
```

#### Resultado

{{EmbedLiveSample("Hide_element", "100%", 60)}}

### display: contents

Neste exemplo, o externo {{htmlelement("div")}} possui uma borda vermelha de 2 pixels e uma largura de 300 px. No entanto, também tem`display: contents` especificado, portanto, este `<div>` não será renderizado, a borda e a largura não serão mais aplicadas e o elemento filho será exibido como se o pai nunca tivesse existido.

#### HTML

```html
<div class="outer">
  <div>Inner div.</div>
</div>
```

#### CSS

```css
.outer {
  border: 2px solid red;
  width: 300px;
  display: contents;
}

.outer > div {
  border: 1px solid green;
}
```

#### Resultado

{{EmbedLiveSample("Display_contents", 300, 60)}}

## Preocupações com acessibilidade

As implementações atuais na maioria dos navegadores removerão da árvore de acessibilidade qualquer elemento com um `display` valor de `contents`. Isso fará com que o elemento - e em algumas versões do navegador, seus elementos descendentes - não sejam mais anunciados pela tecnologia de leitura de tela. Esse é um comportamento incorreto de acordo com a especificação CSSWG.

- [Marcação mais acessível com display: conteúdo | Hidde de Vries](https://hiddedevries.nl/en/blog/2018-04-21-more-accessible-markup-with-display-contents)
- [Exibição: conteúdo não é uma redefinição de CSS | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)

## Compatibilidade com navegadores

### Support of `contents`

{{Compat}}

## Veja também

- {{CSSxRef("display")}}

  - {{CSSxRef("&lt;display-outside&gt;")}}
  - {{CSSxRef("&lt;display-inside&gt;")}}
  - {{CSSxRef("&lt;display-listitem&gt;")}}
  - {{CSSxRef("&lt;display-internal&gt;")}}
  - {{CSSxRef("&lt;display-legacy&gt;")}}

- [Exibição: conteúdo não é uma redefinição de CSS | Adrian Roselli](https://adrianroselli.com/2018/05/display-contents-is-not-a-css-reset.html)
- [Marcação mais acessível com display: contents - hiddedevries.nl](https://hiddedevries.nl/en/blog/2018-04-21-more-accessible-markup-with-display-contents)
