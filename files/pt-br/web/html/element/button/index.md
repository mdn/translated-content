---
title: <button>
slug: Web/HTML/Element/button
---

## Sumário

O **Elemento HTML _`<button>`_** representa um botão clicável.

- _[Categorias de conteúdo](/pt-BR/docs/HTML/Content_categories)_ [Conteúdo de fluxo](/pt-BR/docs/HTML/Content_categories#Flow_content), [conteúdo fraseado](/pt-BR/docs/HTML/Content_categories#Phrasing_content), [Conteúdo iterativo](/pt-BR/docs/HTML/Content_categories#Interactive_content), [listado](/pt-BR/docs/HTML/Content_categories#Form_listed), [rotulável](/pt-BR/docs/HTML/Content_categories#Form_labelable), e elemento [enviável](/pt-BR/docs/HTML/Content_categories#Form_submittable) [associado a formulário](/pt-BR/docs/HTML/Content_categories#Form-associated_), conteúdo palpável.
- _Conteúdo permitido_ [Conteúdo fraseado](/pt-BR/docs/HTML/Content_categories#Phrasing_content).
- _Omissão de Tag_ Nenhuma, as tags de abertura e fechamento são obrigatórias.
- _Elementos pai permitidos_ Qualquer elemento que aceite [conteúdo fraseado](/pt-BR/docs/HTML/Content_categories#Phrasing_content).
- _Interface DOM_ {{domxref("HTMLButtonElement")}}
- _Tipo de elemento_ Inline
-

## Atributos

Esse elemento inclui os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

- {{htmlattrdef("autofocus")}}
  - : Esse atributo booleano permite-o especificar que o botão possuirá o foco de entrada assim que a página carrega, a menos que o usuário sobrecreva esse comportamento digitanto um controle diferente. Apenas um elemento de um documento associado a um formulário pode ter esse atributo específico.
- {{htmlattrdef("autocomplete")}} {{non-standard_inline}}
  - : O uso desse atributo em um {{HTMLElement("button")}} não está padronizado nem dentro das especificações do Firefox. Por padrão, diferente de outros navegadores, o [Firefox persiste com o estado dinâmico desativado](http://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) de um {{HTMLElement("button")}} nas páginas carregadas. Definir o valor desse atributo para `off` (ex: `autocomplete="off"`) desabilita esse recurso. Veja [Erro do Firefox 654072](https://bugzil.la/654072).
- {{htmlattrdef("disabled")}}

  - : Esse atributo booleano indica que o usuário não poderá interagir com o botão. Se esse atributo não for especificado, o botão herdará a configuração do elemento que o contém, por exemplo {{HTMLElement("fieldset")}}, se não existir nenhum elemento com o atributo **disabled** definido, então o botão estará habilitado.

    Firefox irá, diferente de outros navegadores, por padrão, [persiste com o estado dinâmico desativado](http://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) de um {{HTMLElement("button")}} sob as páginas carregadas. Use o atributo [`autocomplete`](/pt-BR/docs/Web/HTML/Element/button#autocomplete) para controlar esse recurso.

- {{htmlattrdef("form")}}
  - : O elemento de formulário que o botão está associado (é o _formulário proprietário_). O valor do atributo deve ser o atributo **id** de um elemento {{HTMLElement("form")}} no mesmo documento. Se esse atributo não for especificado, o elemento `<button>` deve ser descendente de um elemento de formulário. Esse atributo permite que você coloque elementos `<button>` em qualquer lugar do documento, não apenas como descendente de seus elementos {{HTMLElement("form")}}.
- {{htmlattrdef("formaction")}}
  - : A URI de um programa que processa a informação submetida pelo botão. Se especificado, ele sobrescreve o atributo [`action`](/pt-BR/docs/Web/HTML/Element/form#action) do formulário proprietário do botão.
- {{htmlattrdef("formenctype")}}

  - : Se o botão é um botão de envio, esse atributo especifica o tipo de conteúdo que é usado para enviar o formulário para o servidor; Possíveis valores são:

    - `application/x-www-form-urlencoded`: O valor padrão se o atributo não está especificado.
    - `multipart/form-data`: Use esse valor se você está usando um elemento {{HTMLElement("input")}} com o atributo [`type`](/pt-BR/docs/Web/HTML/Element/input#type) definido para o `arquivo`.
    - `text/plain`

    Se esse atributo fro especificado, ele sobrescreve o atributo [`enctype`](/pt-BR/docs/Web/HTML/Element/form#enctype) do formulário proprietário do botão.

- {{htmlattrdef("formmethod")}}

  - : Se o botão for um botão de envio, esse atributo especifica o método HTTP que o navegador usará para enviar o formulário. Possíveis valores são:

    - `post`: Os dados obtidos do formulário são incluídos em seu corpo e enviados para o servidor.
    - `get`: Os dados obtidos do formulário são anexados aos atributos URI do **formulário**, com uma '?' como separador, e o resultado URI é enviado para o servidor. Use esse método quando o formulário não possui efeitos colaterais e contém apenas caracteres ASCII.

    Se especificado, esse atributo sobrescreve o atributo [`method`](/pt-BR/docs/Web/HTML/Element/form#method) do formulário proprietário do botão.

- {{htmlattrdef("formnovalidate")}}
  - : Se o botão é um botão de envio, esse atributo Booleano especifica que o formulário não é para ser validado quando submetido. Se esse atributo for especificado, ele sobrescreve o atributo [`novalidate`](/pt-BR/docs/Web/HTML/Element/form#novalidate) do formulário proprietário do botão.
- {{htmlattrdef("formtarget")}}

  - : Se o botão é um botão de envio, esse atributo é um nome ou palavra-chave indicando onde exibir a resposta que é recebida após o envio do formulário. Esse é um nome de, ou palavra-chave para, um _contexto de navegação_ (por exemplo, uma aba, janela ou quadro embutido). Se esse atributo é especificado, ele sobrescreve o atributo [`target`](/pt-BR/docs/Web/HTML/Element/form#target) do formulário proprietário do botão. As seguintes palavras-chaves possuem significados especiais:

    - `_self`: Carrega a resposta no mesmo contexto navegação como o atual. Esse valor é o padrão se o atributo não é especificado.
    - `_blank`: Carrega a resposta em um contexto de navegação sem nome.
    - `_parent`: Carrega a resposta no contexto de navegação pai do atual. Se não há nenhum pai, essa opção passa a ser o mesmo que `_self`.
    - `_top`: Carrega a resposta para o contexto de navegação no nível superior (ou seja, o contexto de navegação é um ancestral do atual e não possui nenhum pai). Se não possui nenhum pai, essa opção passa a agir da mesma forma que `_self`.

- {{htmlattrdef("name")}}
  - : O nome do botão que é enviado com os dados do formulário.
- {{htmlattrdef("type")}}

  - : O tipo de botão. O possíveis valores são:

    - `submit`: O botão envia os dados do formulário para o servidor. Esse é o padrão se o atributo não for especifidado, ou se o atributo é dinamicamente mudado para um valor vazio ou inválido.
    - `reset`: O botão restaura todos os controles para seus valores iniciais.
    - `button`: O botão não possui comportamento padrão. Ele pode ter scripts do lado do cliente associado com os eventos do elemento, no qual são acionados quando o evento ocorrer.

- {{htmlattrdef("value")}}
  - : O valor inicial do botão.

## Notas

É muito mais fácil estilizar elementos `<button>` do que elementos {{HTMLElement("input")}}. Você pode adicionar conteúdo HTML (como `<em>`, `<strong>`, ou até `<img>`), e usar pseudo-elementos {{Cssxref("::after")}} e {{Cssxref("::before")}} para executar composições complexas, enquanto {{HTMLElement("input")}} aceita apenas um atributo `value` do tipo texto.

## Exemplo

```html
<button name="button">Click me</button>
```

{{ EmbedLiveSample('Example', 200, 64) }}

Note que esse botão possui CSS aplicado.

## Especificações

| Especificações                                                                              | Status                   | Comentário |
| ------------------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'the-button-element.html#the-button-element', '&lt;button&gt;')}} | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'forms.html#the-button-element', '&lt;button&gt;')}}                | {{Spec2('HTML5 W3C')}}   |            |
| {{SpecName('HTML4.01', 'interact/forms.html#h-17.5', '&lt;button&gt;')}}                    | {{Spec2('HTML4.01')}}    |            |

## Compatibilidade com navegadores

{{Compat("html.elements.button")}}

## Notas

Elementos `<button>` são muito mais fáceis estilizá-los do que elementos {{HTMLElement("input")}}. Você pode adicionar dentro do conteúdo do HTML (imagine em `<em>`, `<strong>` ou mesmo `<img>`), e fazer uso do pseudo-elemento {{Cssxref(":after")}} e {{Cssxref(":before")}} para realizar renderizações complexas enquanto {{HTMLElement("input")}} apenas aceita um atributo com valor textual.

IE7 possui um bug ao enviar um formulário com `<button type="submit" name="myButton" value="foo">Click me</button>`, os dados POST enviados terá como resultado em `myButton=Click me` em vez de `myButton=foo`.
IE6 possui um bug ainda pior quando enviado um formulário através de um botão por enviar TODOS os botões do formulário com o mesmo bug do IE7.
Esse bug foi corrigido no IE8.

Firefox adicionará, com propósitos de acessibilidade, uma pequena borda pontinhada e um botão focado. Essa borda será declarada por meio de CSS, no estilo do navegador, mas você pode sobrescreve-lo se necessário para adicionar seu próprio estilo de foco usando `button{{cssxref("::-moz-focus-inner")}} { }`

Firefox irá, diferente de outros navegadores, por padrão, [persistir o estado dinâmico desativado](http://stackoverflow.com/questions/5985839/bug-with-firefox-disabled-attribute-of-input-not-resetting-when-refreshing) de um {{HTMLElement("button")}} sob o carregamento das páginas. Definindo o valor do atributo [`autocomplete`](/pt-BR/docs/Web/HTML/Element/button#autocomplete) para `off` desabilita esse recurso. See [Erro do Firefox 654072](https://bugzil.la/654072).

Firefox <35 para Android define um padrão {{ cssxref("background-image") }} gradiente em todos os botões (see [Erro do Firefox 763671](https://bugzil.la/763671)). Isso pode ser desabilitado usando `background-image: none`.

## Veja também

Outros elementos que são usados para criar formulários: {{HTMLElement("form")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}},{{HTMLElement("keygen")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.

{{HTMLSidebar}}
