---
title: contenteditable
slug: Web/HTML/Global_attributes/contenteditable
---

{{HTMLSidebar("Global_attributes")}}

O [atributo global](/pt-BR/docs/Web/HTML/Global_attributes) **`contenteditable`** é um atributo enumerado indicando se o elemento deve ser editável pelo usuário. Se assim for, o navegador modifica seu widget para permitir a edição.

{{EmbedInteractiveExample("pages/tabbed/attribute-contenteditable.html","tabbed-shorter")}}

O atributo deve ter um dos seguintes valores:

- `true` ou uma [string](/pt-BR/docs/Glossario/String) vazia, o que indica que o elemento é editável.
- `false`, o que indica que o elemento não é editável.

Se o atributo for aplicado sem um valor, como `<label contenteditable>Rótulo de Exemplo</label>`, seu valor é tratado como uma _string_ vazia.

Se esse atributo estiver faltando ou seu valor for inválido, seu valor é herdado de seu elemento pai: para que o elemento seja editável se seu pai for editável.

Observe que, embora seus valores permitidos incluam _true_ e _false_, este atributo é um enumerado e não um _[Booleano](/pt-BR/docs/Glossario/Booleano)_.

Você pode definir a cor usada para desenhar a inserção de texto {{Glossary("caret")}} com a propriedade {{cssxref("caret-color")}} do CSS.

## Especificações

| Especificação                                                                                                                     | Status                   | Comentário                                                                            |
| --------------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------------------------------------------------------------------------------------- |
| {{SpecName("HTML WHATWG", "editing.html#attr-contenteditable", "contenteditable")}}                                               | {{Spec2("HTML WHATWG")}} | Nenhuma mudança na última instância, {{SpecName("HTML5.2")}}                          |
| {{SpecName("HTML5.2", "editing.html#making-document-regions-editable-the-contenteditable-content-attribute", "contenteditable")}} | {{Spec2("HTML5.2")}}     | Instância de {{SpecName("HTML WHATWG")}}, sem mudanças para {{SpecName("HTML5.1")}}   |
| {{SpecName("HTML5.1", "editing.html#making-document-regions-editable-the-contenteditable-content-attribute", "contenteditable")}} | {{Spec2("HTML5.1")}}     | Instância de {{SpecName("HTML WHATWG")}}, sem mudanças para {{SpecName("HTML5 W3C")}} |
| {{SpecName("HTML5 W3C", "editing.html#attr-contenteditable", "contenteditable")}}                                                 | {{Spec2("HTML5 W3C")}}   | Instância de {{SpecName("HTML WHATWG")}}, definição inicial.                          |

## Compatibilidade com navegadores

{{Compat("html.global_attributes.contenteditable")}}

## Veja também

- [Tornando o conteúdo editável](/pt-BR/docs/Web/Guide/HTML/Editable_content)
- Todos os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes)
- {{domxref("HTMLElement.contentEditable")}} e {{domxref("HTMLElement.isContentEditable")}}
- A propriedade {{cssxref("caret-color")}} do CSS.
- [Evento de `input` - `HTMLElement`](/pt-BR/docs/Web/Events/input)
