---
title: <link>
slug: Web/HTML/Element/link
---

## Resumo

O **Elemento HTML _\<link>_** especifica as relações entre o documento atual e um recurso externo. Possíveis usos para este elemento incluem a definição de uma estrutura relacional para navegação. Este elemento é mais usado para vincular as folhas de estilo.

- _[Categorias de conteúdo](/pt-BR/docs/Web/HTML/Content_categories)_ Metadata content. If [`itemprop`](/pt-BR/docs/Web/HTML/Element/link#itemprop) is present: [flow content](/pt-BR/docs/Web/HTML/Content_categories#Flow_content) [phrasing content](/pt-BR/docs/Web/HTML/Content_categories#Phrasing_content)
- _Conteúdo permitido_ None, it is an {{Glossary("empty element")}}.
- _Omissão de tag_ As it is a void element, the start tag must be present and the end tag must not be present
- _Elementos pai permitidos_ Any element that accepts metadata elements. If [`itemprop`](/pt-BR/docs/Web/HTML/Element/link#itemprop) is present: any element that accepts [phrasing content](/pt-BR/docs/Web/HTML/Content_categories#Phrasing_content).
- _Interface de DOM_ {{domxref("HTMLLinkElement")}}

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("as")}}
  - : Esse atributo é usado apenas quando `rel="preload"` foi enviado no elemento `<link>`. Especifica o tipo de conteúdo carregado pelo `<link>`, que é necessário para a priorização do conteúdo, solicitação de correspondência, aplicação de [política de segurança de conteúdo](/pt-BR/docs/Web/HTTP/CSP) correta, e configuração do cabeçalho de pedido {{httpheader("Accept")}} correta.
- {{htmlattrdef("charset")}}

  - : Este atributo define a codificação de caracteres do recurso vinculado. O valor é umespaço e/ou lista delimitada por vírgulas de conjuntos de caracteres, conformedefinido na RFC 2045. O valor padrão é ISO-8859-1.

    > **Nota:** Este atributo é obsoleto em HTML5 e **não deve ser usada por autores**. Para atingir seu efeito, use o cabeçalho HTTP Content-Type sobre o recurso vinculado.

- {{htmlattrdef("crossorigin")}}

  - : Este atributo enumerado indica se a busca da imagem relacionada deve ser feita usando CORS ou não. I-magens de CORS habilitado podem ser reutilizadas no elemento {{HTMLElement("canvas")}} sem ser conta-minado. Os valores permitidos são:

    - "anonymous"
      - : A cross-origin request (i.e. with `Origin:` HTTP header) is performed. But no credential is sent (i.e. no cookie, no X.509 certificate and no HTTP Basic authentication is sent). If the server does not give credentials to the origin site (by not setting the `Access-Control-Allow-Origin:` HTTP header), the image will be _tainted_ and its usage restricted.
    - use-credentials
      - : A cross-origin request (i.e. with `Origin:` HTTP header) is performed with credential is sent (i.e. a cookie, a certificate and HTTP Basic authentication is performed). If the server does not give credentials to the origin site (through `Access-Control-Allow-Credentials:` HTTP header), the image will be _tainted_ and its usage restricted.

    When not present, the resource is fetched without a CORS request (i.e. without sending the `Origin:` HTTP header), preventing its non-tainted used in {{HTMLElement('canvas')}} elements. If invalid, it is handled as if the enumerated keyword **anonymous** was used. See [CORS settings attributes](/pt-BR/docs/Web/HTML/CORS_settings_attributes) for additional information.

- {{htmlattrdef("disabled")}} {{Non-standard_inline}}

  - : Este atributo é usado para desativa uma relação com o link. Em conjunto com o script, esse atributo poderia ser usado para ligar e desligar várias relações com stylesheets.

    > **Nota:** Embora, não haja nenhum atributo desativado no padrão HTML, há um atributo desabilitado no `HTMLLinkElement` DOM object.
    >
    > The use of `disabled` as an HTML attribute is non-standard and only used by some browsers ([W3 #27677](https://www.w3.org/Bugs/Public/show_bug.cgi?id=27677)). **Do not use it**. To achieve a similar effect, use one of the following techniques:
    >
    > - If the `disabled` attribute has been added directly to the element on the page, do not include the {{HTMLElement("link")}} element instead;
    > - Set the `disabled` **property** of the `StyleSheet` DOM object via scripting.

- {{htmlattrdef("href")}}
  - : Esse atributo especifica a [URL](/pt-BR/docs/URIs_and_URLs) do recurso vinculado. Uma URL pode ser absolute or relative.
- {{htmlattrdef("hreflang")}}
  - : Esse atributo indica o idioma do recurso vinculado. É meramente consultivo. Os valores permitidos são determindaos por [BCP47](http://www.ietf.org/rfc/bcp/bcp47.txt) para HTML5 e por [RFC1766](http://www.ietf.org/rfc/rfc1766.txt) para HTML 4. Use esse atributo se apenas os atributos [`href`](/pt-BR/docs/Web/HTML/Element/a#href) estiverem presentes.
- {{htmlattrdef("media")}}

  - : This attribute specifies the media which the linked resource applies to. Its value must be a [media query](/pt-BR/docs/CSS/Media_queries). This attribute is mainly useful when linking to external stylesheets by allowing the user agent to pick the best adapted one for the device it runs on.

    > **Nota:** In HTML 4, this can only be a simple white-space-separated list of media description literals, i.e., [media types and groups](/pt-BR/docs/CSS/@media), where defined and allowed as values for this attribute, such as `print`, `screen`, `aural`, `braille`. HTML5 extended this to any kind of [media queries](/pt-BR/docs/CSS/Media_queries), which are a superset of the allowed values of HTML 4.
    >
    > - Browsers not supporting the [CSS3 Media Queries](/pt-BR/docs/CSS/Media_queries) won't necessarily recognize the adequate link; do not forget to set fallback links, the restricted set of media queries defined in HTML 4.

- {{htmlattrdef("methods")}} {{Non-standard_inline}}
  - : The value of this attribute provides information about the functions that might be performed on an object. The values generally are given by the HTTP protocol when it is used, but it might (for similar reasons as for the **title** attribute) be useful to include advisory information in advance in the link. For example, the browser might choose a different rendering of a link as a function of the methods specified; something that is searchable might get a different icon, or an outside link might render with an indication of leaving the current site. This attribute is not well understood nor supported, even by the defining browser, Internet Explorer 4. See [Methods Property (MSDN)](http://msdn.microsoft.com/en-us/library/ms534168%28VS.85%29.aspx).
- {{htmlattrdef("rel")}}
  - : This attribute names a relationship of the linked document to the current document. The attribute must be a space-separated list of the [link types values](/pt-BR/docs/Web/HTML/Link_types). The most common use of this attribute is to specify a link to an external style sheet: the **rel** attribute is set to `stylesheet`, and the **href** attribute is set to the URL of an external style sheet to format the page. WebTV also supports the use of the value `next` for **rel** to preload the next page in a document series.
- {{htmlattrdef("rev")}}

  - : The value of this attribute shows the relationship of the current document to the linked document, as defined by the [`href`](/pt-BR/docs/Web/HTML/Element/link#href) attribute. The attribute thus defines the reverse relationship compared to the value of the **rel** attribute. [Link types values](/pt-BR/docs/Web/HTML/Link_types) for the attribute are similar to the possible values for [`rel`](/pt-BR/docs/Web/HTML/Element/link#rel).

    > **Nota:** This attribute is obsolete in HTML5. **Do not use it**. To achieve its effect, use the [`rel`](/pt-BR/docs/Web/HTML/Element/link#rel) attribute with the opposite [link types values](/pt-BR/docs/Web/HTML/Link_types), e.g. made should be replaced by author. Also this attribute doesn't mean _revision_ and must not be used with a version number, which is unfortunately the case on numerous sites.

- {{htmlattrdef("sizes")}}

  - : This attribute defines the sizes of the icons for visual media contained in the resource. It must be present only if the [`rel`](/pt-BR/docs/Web/HTML/Element/link#rel) contains the icon [link types value](/pt-BR/docs/Web/HTML/Link_types). It may have the following values:

    - `any`, meaning that the icon can be scaled to any size as it is in a vector format, like `image/svg+xml`.
    - a white-space separated list of sizes, each in the format `<width in pixels>x<height in pixels>` or `<width in pixels>X<height in pixels>`. Each of these sizes must be contained in the resource.

    > **Nota:** Most icon formats are only able to store one single icon; therefore most of the time the [`sizes`](/pt-BR/docs/Web/HTML/Global_attributes#sizes) attribute contains only one entry.
    > MS's ICO format does, as well as Apple's ICNS. ICO is more ubiquitous, so you should use this format if cross-browser support is a concern (especially for old IE versions).

- {{htmlattrdef("target")}}{{Non-standard_inline}}
  - : Defines the frame or window name that has the defined linking relationship or that will show the rendering of any linked resource.
- {{htmlattrdef("type")}}
  - : This attribute is used to define the type of the content linked to. The value of the attribute should be a MIME type such as **text/html**, **text/css**, and so on. The common use of this attribute is to define the type of style sheet linked and the most common current value is **text/css**, which indicates a Cascading Style Sheet format.

## Exemplos

### Incluindo um stylesheet

Para incluir um stylesheet em uma página, use a seguinte syntax:

```html
<link href="style.css" rel="stylesheet" />
```

### Fornecimento de stylesheets alternativas

Você também pode especificar [stylesheet alternativas](/pt-BR/docs/Web/CSS/Alternative_style_sheets).

O usuário pode escolher qual stylesheet usar, escolhendo no View>Page Style menu. Isso fornece uma maneira para os usuários verem várias versões de uma página.

```html
<link href="default.css" rel="stylesheet" title="Default Style" />
<link href="fancy.css" rel="alternate stylesheet" title="Fancy" />
<link href="basic.css" rel="alternate stylesheet" title="Basic" />
```

### Stylesheet eventos carregados

Você pode determinar quando um stylesheet foi carregado observando um `load` event em ação; Da mesma forma, você pode detectar se ocorreu algum erro ao processar uma stylesheet, observando um `error` event:

```html
<script>
  function sheetLoaded() {
    // Do something interesting; the sheet has been loaded
  }

  function sheetError() {
    alert("An error occurred loading the stylesheet!");
  }
</script>

<link
  rel="stylesheet"
  href="mystylesheet.css"
  onload="sheetLoaded()"
  onerror="sheetError()" />
```

> **Nota:** O `load` event é carregado quando a stylesheet e quando todo o conteúdo importado foi carregado e analisado, e imediatamente antes que styles comecem a ser aplicados ao conteúdo.

## Notas

- Uma tag `<link>` pode ocorrer apenas no elemento head; No entanto, pode haver várias ocorrências de `<link>`.
- HTML 3.2 define apenas os atributos **href**, **rel**, **rev**, e **title** para o elemento link.
- HTML 2 define os atributos **href**, **methods**, **rel**, **rev**, **title**, e **urn** para o elemento `<link>`. O **methods** e **urn** foram atributos posteriormente removidos das especificações.
- As especificações HTML e XHTML definem manipulações de eventos para o elemento `<link>`, mas não está claro como eles seriam usados.
- Sob XHTML 1.0, elementos vazios como `<link>` requerem uma barra diagonal: `<link />`.

## Especificações

| Specification                                                                        | Status                   | Comment |
| ------------------------------------------------------------------------------------ | ------------------------ | ------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-link-element', '&lt;link&gt;')}}       | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'document-metadata.html#the-link-element', '&lt;link&gt;')}} | {{Spec2('HTML5 W3C')}}   |         |
| {{SpecName('HTML4.01', 'struct/links.html#h-12.3', '&lt;link&gt;')}}                 | {{Spec2('HTML4.01')}}    |         |

## Compatibilidade com navegadores

{{Compat("html.elements.link")}}

## Veja também

- [Ryan Grove's \<script> and \<link> node event compatibility chart](http://pieisgood.org/test/script-link-events/)

{{HTMLSidebar}}
