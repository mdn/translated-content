---
title: <base>
slug: Web/HTML/Element/base
---

## Resumo

O _elemento HTML Base_ (**\<base>**) especifica o endereço (URL) utilizada por todos os endereços relativos contidos dentro de um documento. Há um número máximo de 1 (um) elemento _Base_ \<base> do documento.

> **Note:** Se multiplos elementos `<base>` forem especificados, apenas o primeiro valor de **href** e **target** serão utilizados, os demais serão ignorados.

- _[Content categories](/pt-BR/docs/HTML/Content_categories)_ Metadata content.
- _Permitted content_ None, it is an {{Glossary("empty element")}}.
- _Tag omission_ There must be no closing tag.
- _Permitted parent elements_ Any {{HTMLElement("head")}} that doesn't contain any other {{HTMLElement("base")}} element
- _DOM interface_ {{domxref("HTMLBaseElement")}}

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

- {{htmlattrdef("href")}}
  - : O URL de base para ser usado em todo o documento para endereços URL relativos.Se este atributo for especificado, este elemento deve vir antes de quaisquer outros elementos com atributos cujos valores são URLs.Endereços (URLs) absolutos e relativos são permitidos (mas ver seção nota abaixo).
- {{htmlattrdef("target")}}
  - : Esse elemento é uma palavra-chave que indica o local padrão para exibir o resultado quando os hiperlinks causarem navegações, por elementos que não têm referência alvo explícita. Em HTML5, é um nome ou palavra-chave para um contexto de navegação. (por exemplo, guia, janela, ou frame incorporada). As seguintes formas têm significados específicos:
- \_self: Coloca i resultado no mesmo quadro HTML4 ou contexto de navegação, caso HTML5, como o atual. Este valor é o padrão se o atributo não for especificado.
- \_blank: Coloca o resultado em uma nova janela HTML4 ou janela no contexto de navegação HTML5.
- \_parent: Coloca o resultado no conjunto de quadros pai do quadro atual no caso de HTML4 ou contexto de navegação pai no atual HTML5. Se não houver nenhum pai, esta opção se comporta como a forma \_self.
- \_top: Em HTML4: Coloca o resultado na janela completa, original, cancelando todos os outros quadros. Em HTML5: Coloca o resultado no contexto de navegação de nível superior (ou seja, o contexto de navegação em que é um antepassado do atual, e não o pai). Se não houver nenhum pai, este opção se comporta da mesma forma que \_self.

## Exemplos

```html
<base href="http://www.example.com/" />
<base target="_blank" href="http://www.example.com/" />
```

## Especificações

| Especificações                                                                  | Estado                   | Comentários |
| ------------------------------------------------------------------------------- | ------------------------ | ----------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-base-element', '&lt;base&gt;')}}  | {{Spec2('HTML WHATWG')}} |             |
| {{SpecName('HTML5 W3C', 'document-metadata#the-base-element', '&lt;base&gt;')}} | {{Spec2('HTML5 W3C')}}   |             |
| {{SpecName('HTML4.01', 'struct/links.html#h-12.4', '&lt;base&gt;')}}            | {{Spec2('HTML4.01')}}    |             |

## Navegadores Compatíveis

{{Compat("html.elements.base")}}

## Notas

- A URL base de um documento pode ser consultada utilizando o seguinte script {{domxref('document.baseURI')}}.
- Support of relative URIs for `href` was added in Gecko 2.0 (Firefox 4.0)
- HTML 2.0 and 3.2 define only the `href` attribute
- XHTML requires a trailing slash: `<base />`

{{HTMLSidebar}}
