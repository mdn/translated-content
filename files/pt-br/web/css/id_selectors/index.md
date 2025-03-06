---
title: Seletores de ID
slug: Web/CSS/ID_selectors
---

{{CSSRef}}

Em um documento HTML, os seletores de ID do CSS selecionam um elemento baseado no conteúdo de seu atributo [`ID`](/pt-BR/docs/Web/HTML/Global_attributes#id), o qual deve ser exatamente igual ao valor dado ao seletor.

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

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
