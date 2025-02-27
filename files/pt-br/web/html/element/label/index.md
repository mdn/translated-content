---
title: <label>
slug: Web/HTML/Element/label
---

## Resumo

Um **elemento** **HTML `<label>` **representa uma legenda para um item em uma interface de usuário. Ele pode estar associado com um elemento de controle, colocando este dentro do elemento `label`, ou usando o atributo `for`. Tal controle é chamado o _controle etiquetado_ do elemento etiqueta. Um input pode ser associado a diversas etiquetas (\<label>s).

- _[As categorias de conteúdo](/pt-BR/docs/Web/HTML/Content_categories)_ [Flow content](/pt-BR/docs/Web/HTML/Content_categories#flow_content), [phrasing content](/pt-BR/docs/Web/HTML/Content_categories#phrasing_content), [interactive content](/pt-BR/docs/Web/HTML/Content_categories#interactive_content), [form-associated element](/pt-BR/docs/Web/HTML/Content_categories#form-associated_content), palpable content.
- _conteúdo permitido_ [Phrasing content](/pt-BR/docs/Web/HTML/Content_categories#phrasing_content), mas há elementos do rótulo descendente. Nenhum outro do que o controle rotulado elementos labelable são permitidos.
- _Omissão de tag_ Nenhuma, tanto a tag inicial quanto a final são obrigatórias.
- _Elementos pai permitidas_ Qualquer elemento que aceita [phrasing content](/pt-BR/docs/Web/HTML/Content_categories#phrasing_content).
- _DOM interface_ {{domxref("HTMLLabelElement")}}

## Atributos

A tecla de atalho para acessar este elemento a partir do teclado.

- `accesskey`
  - : A tecla de atalho para acessar este elemento a partir do teclado.
- `for`

  - : O ID de um elemento de formulário relacionados com labelable no mesmo documento como o elemento label. O primeiro elemento tal no documento com uma ID correspondente ao valor do atributo é o controle marcado for este elemento etiqueta.

    > [!NOTE]
    > Um elemento etiqueta pode ter tanto um for o atributo e um elemento de controlo continham, enquanto os pontos de atributo para o elemento de controlo contido.

- `form`
  - : O elemento de forma que o elemento label está associado a (seu proprietário formulário). O valor do atributo deve ser uma identificação de um {{HTMLElement ("form")}} elemento no mesmo documento. Se este atributo não for especificado, este elemento \<label> deve ser um descendente de uma {{HTMLElement ("form")}} elemento. Este atributo permite que você coloque elementos do rótulo em qualquer lugar dentro de um documento, e não apenas como descendentes de seus elementos de formulário.

## Exemplo

### Exemplo simples de label

```html
<label>Click me <input type="text" id="User" name="Name" /></label>
```

{{ EmbedLiveSample('Simple_label_example', '200', '50', '') }}

### Usando o atributo "for"

```html
<label for="User">Click me</label> <input type="text" id="User" name="Name" />
```

{{EmbedLiveSample('Using_the_.22for.22_attribute', '200', '50', '')}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- Other form-related elements: {{HTMLElement("form")}}, {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("legend")}}, {{HTMLElement("select")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("textarea")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} and {{HTMLElement("meter")}}.

{{HTMLSidebar}}
