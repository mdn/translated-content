---
title: Seletores de ID
slug: Web/CSS/ID_selectors
---

{{CSSRef("Selectors")}}

Em um documento HTML, os seletores de ID do CSS selecionam um elemento baseado no conteúdo de seu atributo [`ID`](/pt-BR/docs/Web/HTML/Global_attributes#ID), o qual deve ser exatamente igual ao valor dado ao seletor.

## Sintaxe

```
#valor_id { propriedades de estilo }
```

Note que isso é equivalente aos seguintes {{Cssxref("Attribute_selectors", "seletores de atributo")}}:

```
[id=valor_id] { propriedades de estilo }
```

## Exemplo

```css
span#identificado {
  background-color: DodgerBlue;
}
```

```html
<span id="identificado">Aqui um span com um pouco de texto.</span>
<span>Aqui outro.</span>
```

{{EmbedLiveSample("Exemplo", 200, 50)}}

## Especificações

| Especificação                                                        | Status                      | Comentário        |
| -------------------------------------------------------------------- | --------------------------- | ----------------- |
| {{SpecName("CSS4 Selectors", "#id-selectors", "ID selectors")}}      | {{Spec2("CSS4 Selectors")}} |                   |
| {{SpecName("CSS3 Selectors", "#id-selectors", "ID selectors")}}      | {{Spec2("CSS3 Selectors")}} |                   |
| {{SpecName("CSS2.1", "selector.html#id-selectors", "ID selectors")}} | {{Spec2("CSS2.1")}}         |                   |
| {{SpecName("CSS1", "#id-as-selector", "ID selectors")}}              | {{Spec2("CSS1")}}           | Definição inicial |

## Compatibilidade com navegadores

{{Compat("css.selectors.id")}}
