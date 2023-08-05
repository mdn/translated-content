---
title: ":visited"
slug: Web/CSS/:visited
---

{{ CSSRef }}

O **`:visited`** é uma [Pseudo-classe](/pt-BR/docs/Web/CSS/Pseudo-classes) do [CSS](/pt-BR/docs/Web/CSS) para indicar se o link em questão já foi visitado pelo usuário. Por questões de privacidade, os styles que podem ser modificados usando este seletor são muito limitados.

```css
/* Seleciona qualquer <a> que poderá ser visitado */
a:visited {
  color: green;
}
```

Styles definidos pela pseudo-classe `:visited` vão ser substituidos por qualquer pseudo-classe relacionada ao link subsequente ({{cssxref(":link")}}, {{cssxref(":hover")}}, ou {{cssxref(":active")}}) que tenha ao menos uma especificação igual. Para estilizar links apropriadamente, garantindo assim seu funcionamento adequado, ponha a regra `:visited` depois da regra `:link` mas antes das regras `:hover` e `:active` , Pode-se definir pela ordem _LVHA_: `:link` — `:visited` — `:hover` — `:active`.

## Restrições de Estilo

Por razões de privacidade, navegadores limitam estritamente quais estilos você pode aplicar usando esta pseudo-class, como elas podem ser usadas:

- Propriedades admicíveis no CSS são:

  - {{ cssxref("color") }};
  - {{ cssxref("background-color") }};
  - {{ cssxref("border-color") }};
  - {{ cssxref("border-bottom-color") }};
  - {{ cssxref("border-left-color") }};
  - {{ cssxref("border-right-color") }};
  - {{ cssxref("border-top-color") }};
  - {{ cssxref("column-rule-color") }};
  - {{ cssxref("outline-color") }}.

- Atributos [SVG](/pt-BR/docs/Web/SVG) admissíveis são {{SVGAttr("fill")}} e {{SVGAttr("stroke")}}.
- Os componentes alpha permitidos de estilos seram ignorados. Ao invés disso, o componente alpha do elemento de estado non-`:visited` será usado, exceto quando o componente é `0`, no qual o estilo definido em `:visited` será inteiramente ignorado.
- Embora esses estilos podem mudar como as cores serão mostradas ao usuário, o método {{domxref("window.getComputedStyle")}} vai mentir e sempre retornar o valor da cor em non-`:visited.`

> **Nota:** Para mais informações quanto a essas limitações e as razões por trás delas, veja [Privacy and the :visited selector](/pt-BR/docs/CSS/Privacy_and_the_:visited_selector). Obs: No momento estará apenas disponível em inglês.

## Syntaxe

```css
a {
  background-color: white;
  border: 1px solid white;
}
a:visited {
  background-color: lightblue;
  border-color: cyan;
  color: darkblue;
}
```

## Exemplo

Propriedades que de alguma forma não tenha cor ("color") definida, ou seja transparente, não podem ser modificadas como o `:visited`. Das propriedades que podem ser definidas por essa pseudo-classe, seu navegador provavelmente terá por padão valores para `color` e `column-rule-color` somente. Portanto, se você quiser modificar outras propriedades, você necessitará pré-definir os valores fora do seletor `:visited`.

### HTML

```html
<a href="#">Você já visitou este link?</a>
<br />
<a href="">Você já visitou este link.</a>
```

### CSS

```css
a {
  /* Specifica non-transparent por padrão para algumas
     propriedades, permitindo-os a serem estilizados pelo
     estado :visited */
  background-color: white;
  border: 1px solid white;
}

a:visited {
  background-color: yellow;
  border-color: hotpink;
  color: hotpink;
}
```

### Resultado

{{EmbedLiveSample("Exemplo")}}

## Especificações

| Especificações                                                               | Status                        | Comentário                                                                                                                                                            |
| ---------------------------------------------------------------------------- | ----------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{ SpecName('HTML WHATWG', 'scripting.html#selector-visited', ':visited') }} | {{ Spec2('HTML WHATWG') }}    |                                                                                                                                                                       |
| {{ SpecName('CSS4 Selectors', '#link', ':visited') }}                        | {{ Spec2('CSS4 Selectors') }} | Sem mudança.                                                                                                                                                          |
| {{ SpecName('CSS3 Selectors', '#link', ':visited') }}                        | {{ Spec2('CSS3 Selectors') }} | Sem mudança.                                                                                                                                                          |
| {{ SpecName('CSS2.1', 'selector.html#link-pseudo-classes', ':visited') }}    | {{ Spec2('CSS2.1') }}         | Eleva a restrição para aplicar apenas :visited ao elemento {{HTMLElement ("a")}}. Permite que os navegadores restrinjam seu comportamento por motivos de privacidade. |
| {{ SpecName('CSS1', '#anchor-pseudo-classes', ':visited') }}                 | {{ Spec2('CSS1') }}           | Definição inicial.                                                                                                                                                    |

## Compatibilidade com navegadores

{{Compat("css.selectors.visited")}}

## Veja também (inglês)

- [Privacy and the :visited selector](/pt-BR/docs/CSS/Privacy_and_the_:visited_selector)
- Link-related pseudo-classes: {{cssxref(":link")}}, {{cssxref(":active")}}, {{cssxref(":hover")}}
