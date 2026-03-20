---
title: <map>
slug: Web/HTML/Reference/Elements/map
original_slug: Web/HTML/Element/map
---

## Resumo

O **elemento HTML `<map>`** é usado com os elementos {{HTMLElement ("area")}} para definir um mapa de imagem (a área clicável do link).

- _[Categorias de conteúdo](/pt-BR/docs/Web/HTML/Content_categories)_ [Conteúdo de fluxo](/pt-BR/docs/Web/HTML/Content_categories#flow_content), [conteúdo fraseado](/pt-BR/docs/Web/HTML/Content_categories#phrasing_content), conteúdo palpável.
- _Conteúdo permitido_ Qualquer elemento [transparente](/pt-BR/docs/Web/HTML/Content_categories#transparent_content_model).
- \_Omissão da marcação_Nenhuma, tanto a tag inicial quanto a final são obrigatórias.
- _Elementos pai permitidos_ Qualquer elemento que aceita [conteúdo fraseado](/pt-BR/docs/Web/HTML/Content_categories#phrasing_content).
- _Interface DOM_ {{domxref ("HTMLMapElement")}}

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

- `name`
  - : O atributo name dá ao mapa de um nome, de modo que ela possa ser referenciada. O atributo deve estar presente e ter um valor não vazio, sem caracteres de espaço. O valor do atributo name não deve corresponder (independente da caixa) a um valor do atributo name de outro elemento no mesmo documento. Se o id de atributo também for especificado, ambos os atributos devem ter o mesmo valor.

## Exemplos

```html
<map>
  <area shape="circle" coords="200,250,25" href="another.htm" />
  <area shape="default" />
</map>
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{HTMLElement ("a")}}
- {{HTMLElement ("area")}}

{{HTMLSidebar}}
