---
title: CSS Display
slug: Web/CSS/CSS_display
---

{{CSSRef}}

**CSS Display** É um módulo de CSS que define como a árvore da caixa de formatação CSS é gerada a partir da árvore de elementos do documento e define as propriedades que a controlam.

## Referência

### CSS Propriedades

- {{CSSxRef("display")}}

### CSS tipos de dados

- {{CSSxRef("&lt;display-outside&gt;")}}
- {{CSSxRef("&lt;display-inside&gt;")}}
- {{CSSxRef("&lt;display-listitem&gt;")}}
- {{CSSxRef("&lt;display-box&gt;")}}
- {{CSSxRef("&lt;display-internal&gt;")}}
- {{CSSxRef("&lt;display-legacy&gt;")}}

## Guias

### CSS Fluxo Layout (`display: block`, `display: inline`)

- [Layout de bloco e embutido no fluxo normal](/pt-BR/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow)
- [Layout de fluxo e Overflow](/pt-BR/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Overflow)
- [Layout de fluxo e modos de gravação](/pt-BR/docs/Web/CSS/CSS_Flow_Layout/Flow_Layout_and_Writing_Modes)
- [Contextos de formatação explicados](/pt-BR/docs/Web/CSS/CSS_Flow_Layout/Formatting_Contexts_Explained)
- [No fluxo e fora do fluxo](/pt-BR/docs/Web/CSS/CSS_Flow_Layout/In_Flow_and_Out_of_Flow)

### `display: flex`

- [Conceitos básicos de flexbox](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox)
- [Alinhando itens em um container Flex](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container)
- [Relações de controle de itens flexíveis ao longo do eixo principal](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax)
- [Combinações Flexbox entre navegadores](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Mixins)
- [Dominando o agrupamento de itens flexíveis](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Mastering_Wrapping_of_Flex_Items)
- [Pedido de itens flexíveis](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items)
- [Relação do flexbox com outros métodos de layout](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods)
- [Compatibilidade com versões anteriores do Flexbox](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Backwards_Compatibility_of_Flexbox)
- [Casos de uso típicos do Flexbox](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout/Typical_Use_Cases_of_Flexbox)

### `display: grid`

- [Conceitos básicos de layout de grade](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- [Relação com outros métodos de layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
- [Posicionamento baseado em linha](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
- [Áreas de modelo de grade](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
- [Layout usando linhas de grade nomeadas](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
- [Posicionamento automático no layout da grade](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
- [Alinhamento de caixa no layout da grade](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
- [Grades, valores lógicos e modos de escrita](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
- [Layout e acessibilidade da grade CSS](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
- [Layout de grade CSS e aprimoramento progressivo](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
- [Realizando layouts comuns usando grades](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

## Especificações

| Specification                                                      | Status                    | Comment                                                                                  |
| ------------------------------------------------------------------ | ------------------------- | ---------------------------------------------------------------------------------------- |
| {{SpecName("CSS3 Display", "#the-display-properties", "display")}} | {{Spec2("CSS3 Display")}} | Adicionado `run-in`, `flow`, `flow-root`, `contents` e valores de várias palavras-chave. |
| {{SpecName("CSS2.1", "visuren.html#display-prop", "display")}}     | {{Spec2("CSS2.1")}}       | Adicionados os valores do modelo de tabela e `inline-block`.                             |
| {{SpecName("CSS1", "#display", "display")}}                        | {{Spec2("CSS1")}}         | Definição inicial. Valores básicos: `none`, `block`, `inline` e `list-item`.             |

Além do nível de especificação de exibição CSS 3, outras especificações definem o comportamento de vários valores da exibição.

## Compatibilidade com navegadores

{{Compat("css.properties.display", 10)}}
