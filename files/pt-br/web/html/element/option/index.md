---
title: <option>
slug: Web/HTML/Element/option
---

## Sumário

Em um formulário Web, o **elemento HTML** `<option>` é usado para criar um controle que representa um item dentro de um elemento HTML5 {{HTMLElement("select")}}, {{HTMLElement("optgroup")}} ou {{HTMLElement("datalist")}}.

- _[Categorias de conteúdo](/pt-BR/docs/Web/HTML/Categorias_de_conteúdo)_ Nenhuma.
- _Conteúdo permitido_ Texto com caracteres escapados (como `&eacute;`) ocasionalmente.
- _Omissão de tags_ A tag de abertura é obrigatória. A tag de fechamento é opcional se este elemento é imediatamente seguido por um outro elemento `<option>` ou um {{HTMLElement("optgroup")}}, ou se o elemento pai não tem mais nenhum conteúdo.
- _Elementos pai permitidos_ {{HTMLElement("select")}}, {{HTMLElement("optgroup")}} ou {{HTMLElement("datalist")}}.
- _Interface DOM_ {{domxref("HTMLOptionElement")}}

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/Web/HTML/Atributos_globais).

- {{htmlattrdef("disabled")}}
  - : Se este atributo booleano estiver definido, esta opção não é selecionável. Frequentemente navegadores acinzentam este tipo de controle, e ele deixa de receber quaisquer eventos de navegação, como cliques do mouse ou eventos relacionados a foco. Se este atributo não estiver definido, o elemento ainda pode ser desabilitado se um de seus ancestrais é um elemento {{HTMLElement("optgroup")}} desabilitado.
- {{htmlattrdef("label")}}

  - : Este atributo é o texto para o rótulo indicando o significado da opção. Se o atributo **label** não estiver definido, seu valor é o conteúdo de texto do elemento.

    > **Note:** O atributo **label** é projetado para conter um rótulo curto tipicamente usado num menu hierárquico. O atributo **value** descreve descreve um rótulo maior, designado para ser usado perto de um botão de escolha, por exemplo.

- {{htmlattrdef("selected")}}
  - : Se presente, este atributo booleano indica que a opção está selecionada inicialmente. Se o elemento `<option>` for descendente de um elemento {{HTMLElement("select")}} cujo atributo [`multiple`](/pt-BR/docs/Web/HTML/Element/select#multiple) não está definido, apenas um único `<option>` deste elemento {{HTMLElement("select")}} pode ter o atributo **selected**.
- {{htmlattrdef("value")}}

  - : O conteúdo textual deste atributo representa o rótulo que explica a opção. Se ele não estiver definido, seu valor padrão é o texto contido no elemento.

    > **Note:** O atributo **label** é projetado para conter um rótulo curto tipicamente usado num menu hierárquico. O atributo **value** descreve descreve um rótulo maior, designado para ser usado perto de um botão de escolha, por exemplo.

## Exemplos

Veja os exemplos do elemento {{HTMLElement("select")}}.

## Especificações

| Especificação                                                                               | Estado                   | Comentário |
| ------------------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'the-button-element.html#the-option-element', '&lt;option&gt;')}} | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'forms.html#the-option-element', '&lt;option&gt;')}}                | {{Spec2('HTML5 W3C')}}   |            |
| {{SpecName('HTML4.01', 'interact/forms.html#h-17.6', '&lt;option&gt;')}}                    | {{Spec2('HTML4.01')}}    |            |

## Compatibilidade com navegadores

{{Compat("html.elements.option")}}

## Veja também

- Outros elementos relacionados a formulários: {{HTMLElement("form")}}, {{HTMLElement("legend")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}}, {{HTMLElement("select")}}, {{HTMLElement("datalist")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("textarea")}}, {{HTMLElement("keygen")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}} e {{HTMLElement("meter")}}.

{{HTMLSidebar}}
