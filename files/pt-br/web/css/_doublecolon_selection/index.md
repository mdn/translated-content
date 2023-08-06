---
title: "::selection"
slug: Web/CSS/::selection
---

{{CSSRef}}

O [pseudo-elemento](/pt-BR/docs/Web/CSS/Pseudo-elementos) CSS **`::selection`** aplica estilos para partes do documento que foram selecionadas pelo usuário (tal como clicar e arrastar o ponteiro do mouse através de um texto.

```css
::selection {
  background-color: cyan;
}
```

## Propriedades permitidas

Apenas certas propriedades podem ser usadas com o `::selection`:

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("cursor")}}
- {{CSSxRef("caret-color")}}
- {{CSSxRef("outline")}} and its longhands
- {{CSSxRef("text-decoration")}} and its associated properties
- {{CSSxRef("text-emphasis-color")}}
- {{CSSxRef("text-shadow")}}

> **Warning:** Em particular, {{CSSxRef("background-image")}} é ignorada.

## Sintaxe

```
/* Sintaxe legado do Firefox (até a versão 61) */
::-moz-selection

{{CSSSyntax}}
```

## Exemplo

### HTML

```html
Esse texto tem estilos especiais quando selecionado.
<p>Tente selecionando também o texto nesse parágrafo.</p>
```

### CSS

```css hidden
::-moz-selection {
  color: gold;
  background-color: red;
}

p::-moz-selection {
  color: white;
  background-color: blue;
}
```

```css
/* Texto selecionado dourado com o fundo vermelho */
::selection {
  color: gold;
  background-color: red;
}

/* Texto selecionado branco com o fundo azul */
p::selection {
  color: white;
  background-color: blue;
}
```

### Resultado

{{EmbedLiveSample('Exemplo')}}

## Preocupações com acessibilidade

**Não substitua os estilos de texto selecionados por razões puramente estéticas** — os usuários podem personalizá-los para atender às suas necessidades. Para pessoas com problemas cognitivos ou com menos conhecimento tecnológico, alterações inesperadas nos estilos de seleção podem prejudicar sua compreensão da funcionalidade.

Se substituído, é importante garantir que a **taxa de contraste** entre o texto e as cores de plano de fundo da seleção seja alta o suficiente para que pessoas com condições de baixa visão possam lê-lo.

A taxa de contraste da cor é encontrada comparando a luminosidade do texto selecionado e as cores de fundo do texto selecionado. Para atender às atuais [Diretrizes de acessibilidade de conteúdo da Web (WCAG)](https://www.w3.org/WAI/intro/wcag), o conteúdo de texto deve ter uma taxa de contraste de 4.5:1 ou 3:1 para texto maior, como títulos. (WCAG define texto grande entre 18,66 px e 24 px e negrito, ou 24 px ou maior.)

Facilite para os usuários ver e ouvir o conteúdo, incluindo a separação do primeiro plano do segundo plano

- [WebAIM: Verificador de Constraste de Cor](https://webaim.org/resources/contrastchecker/)
- [MDN Understanding WCAG,1.4: Facilite para os usuários vizualizarem o conteúdo, incluindo a separação do primeiro plano do segundo plano (em inglês).](/pt-BR/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.3 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Especificações

| Especificações                                                                | Status                            | Comentário         |
| ----------------------------------------------------------------------------- | --------------------------------- | ------------------ |
| {{SpecName('CSS4 Pseudo-Elements', '#selectordef-selection', '::selection')}} | {{Spec2('CSS4 Pseudo-Elements')}} | Definição inicial. |

> **Nota:** `::selection` estava nos rascunhos do Nível 3 dos Seletores de CSS, mas foi removido na fase Recomendação do Candidato porque estava subespecificado (especialmente com elementos aninhados) e a interoperabilidade não foi alcançada ([com base na lista de discussão de estilos W3C](http://lists.w3.org/Archives/Public/www-style/2008Oct/0268.html)). Ele retornou no [Nível 4 dos Pseudo-Elementos](http://dev.w3.org/csswg/css-pseudo-4/).

## Compatibilidade com navegadores

{{Compat("css.selectors.selection")}}

## Veja também

- {{cssxref("pointer-events")}} - permite autores controlarem sob qualquer circustancia(se houver) um elemento gráfico particular podendo ser o alvo do evento do mouse.
