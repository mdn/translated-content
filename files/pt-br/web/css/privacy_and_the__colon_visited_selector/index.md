---
title: Privacidade e o seletor :visited
slug: Web/CSS/Privacy_and_the_:visited_selector
---

{{cssref}}

Antes de 2010, o seletor [CSS](/pt-BR/docs/Web/CSS) {{ cssxref(":visited") }} permitia que websites descobrissem o histórico de navegação dos usuários e quais sites estes haviam visitado. Isto foi feito por meio do {{domxref("window.getComputedStyle")}} e outras tecnicas. Este processo era fácil de ser feito, e tornou possível não somente determinar onde os usuários estiveram na internet, mas também poderia ser usado para descobrir um monte de informação sobre a identidade destes.

Para contornar este problema, Gecko 2 implementou atualizações de privacidade para limitar a quantidade de informações que poderiam ser obtidas através dos links visitados. Outros navegadores também fizeram mudanças similares.

## Pequenas mentiras brancas

Para preservar a privacidade dos usuários, Firefox e outros navegadores irão mentir para aplicações webs sob certas circustâncias:

- O método `window.getComputedStyle`, e funções similares tal como {{ domxref("element.querySelector") }}, sempre retornarão valores indicando que os usuários nunca visitaram quaisquer links em uma página.
- Se você usa seletores como **seletores de irmãos** como `:visited + span`, o elemento imediato (`span` neste exemplo) será estilizado como se o link não houvesse sido visitado.
- Em raros casos, se você está utilizando elementos de links aninhados e o elemento que está sendo correspondido é diferente do link cuja presença no histórico está sendo testado, o elemento também será renderizado como se o link não houvesse sido visitado.

## Limites para estilos de links visitados

Você pode estilizar links visitados, porém existem limites de quais estilos você pode usar. Somente os seguintes estilos podem ser aplicados para links visitados:

- {{ cssxref("color") }}
- {{ cssxref("background-color") }}
- {{ cssxref("border-color") }} (e suas subpropriedades)
- {{ cssxref("column-rule-color") }}
- {{ cssxref("outline-color") }}
- As partes de cor dos atributos {{SVGAttr("fill")}} e {{SVGAttr("stroke")}}

Em adição, mesmo para os estilos acima, você não poderá alterar a transparência entre links visitados e não visitados, ou de outra maneira você seria capaz de usar [`rgba()`](</pt-BR/docs/Web/CSS/color_value#rgba()>), [`hsla()`](</pt-BR/docs/Web/CSS/color_value#hsla()>), ou a palavra chave [`transparent`](/pt-BR/docs/Web/CSS/color_value#transparent).

Aqui está um exemplo de como estilizar com as restrições acima mencionadas:

```css
:link {
  outline: 1px dotted blue;
  background-color: white;
  /* O valor padrão de background-color é `transparent`. Você precisa
     especificar um valor diferente, caso contrário as mudanças
     feitas em :visited não se aplicam. */
}

:visited {
  outline-color: orange; /* Links visitados tem contornos laranja */
  background-color: green; /* Links visitados tem um fundo verde */
  color: yellow; /* Links visitados tem texto amarelo */
}
```

## Impacto nos desenvolvedores web

No geral, essas restrições estas restrições não deveriam afetar desenvolvedores web tão significamente. Eles poderiam, como sempre, They may, no entanto, requerer essas seguintes mudanças nos sites existentes:

- Usar imagens de fundo para estilizar links baseados se eles foram visitados não irá funcionar, desde que apenas cores podem ser usadas para estilizar links visitados.
- As cores que são transparentes deixarão de aparecer se estilizados em seletores `:visited`.

## Veja também

- [privacy-related changes coming to CSS :visited](http://hacks.mozilla.org/2010/03/privacy-related-changes-coming-to-css-vistited/) em Mozilla Hacks (em inglês)
- [Plugging the CSS History Leak](http://blog.mozilla.com/security/2010/03/31/plugging-the-css-history-leak/) em the Mozilla Security Blog (em inglês)
- [Preventing attacks on a user's history through CSS :visited selectors](http://dbaron.org/mozilla/visited-privacy) (em inglês)
