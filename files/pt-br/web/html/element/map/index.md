---
title: <map>
slug: Web/HTML/Element/map
---

## Resumo

O **elemento HTML `<map>`** é usado com os elementos {{HTMLElement ("area")}} para definir um mapa de imagem (a área clicável do link).

- _[Categorias de conteúdo](/pt-BR/docs/HTML/Content_categories)_ [Conteúdo de fluxo](/pt-BR/docs/HTML/Content_categories#Flow_content), [conteúdo fraseado](/pt-BR/docs/HTML/Content_categories#Phrasing_content), conteúdo palpável.
- _Conteúdo permitido_ Qualquer elemento [transparente](/pt-BR/docs/HTML/Content_categories#Transparent_content_model).
- _Omissão da marcação_{{no_tag_omission}}
- _Elementos pai permitidos_ Qualquer elemento que aceita [conteúdo fraseado](/pt-BR/docs/HTML/Content_categories#Phrasing_content).
- _Interface DOM_ {{domxref ("HTMLMapElement")}}

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

- {{Htmlattrdef ("name")}}
  - : O atributo name dá ao mapa de um nome, de modo que ela possa ser referenciada. O atributo deve estar presente e ter um valor não vazio, sem caracteres de espaço. O valor do atributo name não deve corresponder (independente da caixa) a um valor do atributo name de outro elemento no mesmo documento. Se o id de atributo também for especificado, ambos os atributos devem ter o mesmo valor.

## Exemplos

```html
<map>
  <area shape="circle" coords="200,250,25" href="another.htm" />
  <area shape="default" />
</map>
```

## Especificações

| Especificação                                                                              | Estado                    | Comentário |
| ------------------------------------------------------------------------------------------ | ------------------------- | ---------- |
| {{SpecName ('HTML WHATWG', 'a-map-element.html # the-map-elemento', '&lt;map&gt;')}}       | {{Spec2 ('HTML WHATWG')}} |            |
| {{SpecName ('HTML5 W3C', 'incorporado-content-0.html # the-map-elemento', '&lt;map&gt;')}} | {{Spec2 ('HTML5 W3C')}}   |            |
| {{SpecName ('HTML4.01', 'struct / objects.html # h-13.6.1', '&lt;map&gt;')}}               | {{Spec2 ('HTML4.01')}}    |            |

## Compatibilidade com navegadores

{{Compat("html.elements.map")}}

## Veja também

- {{HTMLElement ("a")}}
- {{HTMLElement ("area")}}

{{HTMLSidebar}}
