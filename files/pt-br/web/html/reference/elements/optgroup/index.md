---
title: <optgroup>
slug: Web/HTML/Reference/Elements/optgroup
original_slug: Web/HTML/Element/optgroup
---

## Sumário

Em um Formulário Web, o elemento HTML `<optgroup>` cria um agrupamento de opções dentro do elemento {{HTMLElement("select")}}.

- _[Categorias de conteúdo](/pt-BR/docs/Web/HTML/Content_categories)_ Nenhuma.
- _Conteúdo permitido_ Nenhum ou mais elementos do tipo {{HTMLElement("option")}}.
- _Omissão da tag_ A abertura da tag é obrigatória. O fechamento da tag é opcional se o elemento é imediatamente seguido de de outro elemento \<optgroup>, ou se o elemento pai não tiver nenhum conteúdo.
- _Elemento pai permitido_ Um elemento {{HTMLElement("select")}}.
- _Interface DOM_ {{domxref("HTMLOptGroupElement")}}

> [!NOTE]
> Elementos do tipo <strong>optgroup</strong> não podem ser aninhados.

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

- `disabled`
  - : Se este atributo booleano for definido, nenhum dos itens neste **optgroup** poderá ser selecionado. Muitos navegadores marcam como cinza e não permitem que o elemento receba nenhum evento de navegação, como cliques do mouse ou foco.
- `label`
  - : É o nome do optgroup, é o que os navegadores irão exibir como rótulo. Este atributo é obrigatório se o elemento for usado.

## Exemplo

```html
<select>
  <optgroup label="Grupo 1">
    <option>Opção 1.1</option>
  </optgroup>
  <optgroup label="Grupo 2">
    <option>Opção 2.1</option>
    <option>Opção 2.2</option>
  </optgroup>
  <optgroup label="Grupo 3" disabled>
    <option>Opção 3.1</option>
    <option>Opção 3.2</option>
    <option>Opção 3.3</option>
  </optgroup>
</select>
```

### Resultado

{{EmbedLiveSample("Exemplo")}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- Outros elementos de formularios relacionados: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("option")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} e {{HTMLElement("meter")}}.

{{HTMLSidebar}}
