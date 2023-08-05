---
title: contain
slug: Web/CSS/contain
---

{{CSSRef}}{{SeeCompatTable}}

A propriedade **`contain`** permite que um autor indique que elemento e seus conteúdos são, na medida do possível, _independente_ do resto da árvore do documento. Isso permite que o navegador recalcule o layout, estilo, pintura, tamanho ou alguma combinação deles para uma área limitada do DOM e não da página inteira.

```css
/* Sem contenção de layout. */
contain: none;

/* Ativa a contenção para layout, estilo, pintura, e tamanho. */
contain: strict;

/* Ativa a contenção para layout, estilo, e pintura. */
contain: content;

/* Ativa a contenção para um elemento. */
contain: size;

/* Ativa a contenção de layout para um elemento. */
contain: layout;

/* Ativa a contenção de estilo para um elemento. */
contain: style;

/* Ativa a contenção de pintura para um elemento. */
contain: paint;
```

Esta propriedade é útil em páginas que contêm um monte de widgets que são todos independentes, uma vez que pode ser usado para impedir que as regras CSS de um widget mude outras coisas na página.

{{cssinfo}}

## Sintaxe

### Valores

- `none`
  - : Indica que o elemento processa como normal, sem contenção aplicada.
- strict
  - : Indica que todas as regras de contenção são aplicadas ao elemento. Isso equivale a`contain: size layout style paint`.
- content
  - : Indica que todas as regras de contenção, exceto _size_ são aplicadas ao elemento. Isso equivale a `contain: layout style paint`.
- size
  - : Indica que o elemento pode ser dimensionado sem a necessidade de examinar seus dependentes para alterações de tamanho.
- layout
  - : Indica que nada fora do elemento pode afetar seu layout interno e vice-versa.
- style
  - : Indica que, para propriedades que podem ter efeitos em mais do que apenas um elemento e seus descendentes, esses efeitos não escape o elemento que contém.
- paint
  - : Indica que os descendentes do elemento não são exibidos fora de seus limites. Se um elemento estiver fora da tela ou de outra forma não visível, seus descendentes também são garantidos para não ser visível.

### Sintaxe Formal

{{csssyntax}}

## Especificações

| Especificação                   | Status                       | Comentário         |
| ------------------------------- | ---------------------------- | ------------------ |
| {{SpecName('CSS Containment')}} | {{Spec2('CSS Containment')}} | Initial definition |

## Compatibilidade com navegadores

{{Compat("css.properties.contain")}}
