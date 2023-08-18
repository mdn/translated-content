---
title: <form>
slug: Web/HTML/Element/form
---

## Resumo

O **elemento HTML `<form>` **representa uma seção de um documento que contém controles interativos que permitem ao usuário submeter informação a um determinado servidor web.

É possível utilizar as pseudo-classes de CSS {{cssxref(':valid')}} e{{cssxref(':invalid')}} para aplicar estilo a um elemento `<form>`.

- _[Content categories](/pt-BR/docs/HTML/Content_categories)_ [Flow content](/pt-BR/docs/HTML/Content_categories#Flow_content), palpable content.
- _Permitted content_ [Flow content](/pt-BR/docs/HTML/Content_categories#Flow_content), but with no contained `<form>` elements.
- _Tag omission_ {{no_tag_omission}}
- _Permitted parent elements_ Any element that accepts [flow content](/pt-BR/docs/HTML/Content_categories#Flow_content).
- _DOM interface_ {{domxref("HTMLFormElement")}}

## Atributos

Este elemento inclue os [Atributos global](/pt-BR/docs/HTML/Global_attributes).

- {{htmlattrdef("accept")}}

  - : A comma-separated list of content types that the server accepts.

    > **Note:** **Usage note:** This attribute has been removed in HTML5 and should no longer be used. Instead, use the [`accept`](/pt-BR/docs/Web/HTML/Element/input#accept) attribute of the specific {{HTMLElement("input")}} element.

- {{htmlattrdef("accept-charset")}}
  - : A list of character encodings that the server accepts. The list can be delimited by spaces or commas. The browser uses in the order in which they are listed. The default value is the reserved string "UNKNOWN", in which case the encoding corresponds to the encoding of the document containing the form element.
    HTML 4: In previous versions of HTML, the different character encodings could be delimited by spaces or commas. This is no longer the case in HTML5, where only spaces are correct.
- {{htmlattrdef("action")}}
  - : The URI of a program that processes the information submitted via the form. This value can be overridden by a [`formaction`](/pt-BR/docs/Web/HTML/Element/button#formaction) attribute on a {{HTMLElement("button")}} or {{HTMLElement("input")}} element.
- {{htmlattrdef("autocomplete")}}

  - : Indicates whether controls in this form can by default have their values automatically completed by the browser. This setting can be overridden by an `autocomplete` attribute on an element belonging to the form. Possible values are:

    - `off`: The user must explicitly enter a value into each field for every use, or the document provides its own auto-completion method; the browser does not automatically complete entries.
    - `on`: The browser can automatically complete values based on values that the user has entered during previous uses of the form.

    > **Note:**If you set `autocomplete` to `off` in a form because the document provides its own auto-completion, then you should also set `autocomplete` to `off` for each of the form's `input` elements that the document can auto-complete. For details, see [Google Chrome notes](#google_chrome_notes).

- {{htmlattrdef("enctype")}}

  - : When the value of the `method` attribute is `post`, this attribute is the [MIME type](http://en.wikipedia.org/wiki/Mime_type) of content that is used to submit the form to the server. Possible values are:

    - `application/x-www-form-urlencoded`: The default value if the attribute is not specified.
    - `multipart/form-data`: Use this value if you are using an {{HTMLElement("input")}} element with the `type` attribute set to "file".
    - `text/plain (HTML5)`

    This value can be overridden by a [`formenctype`](/pt-BR/docs/Web/HTML/Element/button#formenctype) attribute on a {{HTMLElement("button")}} or {{HTMLElement("input")}} element.

- {{htmlattrdef("method")}}

  - : O [HTTP](/pt-BR/docs/HTTP) method that the browser uses to submit the form. Possible values are:

    - `post`: Corresponds to the HTTP [POST method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.5) ; the data from the form is included in the body of the form and is sent to the server.
    - `get`: Corresponds to the HTTP [GET method](https://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9.3); the data from the form are appended to the `action` attribute URI, with a '?' as a separator, and the resulting URI is sent to the server. Use this method when the form has no side-effects and contains only ASCII characters.

    This value can be overridden by a [`formmethod`](/pt-BR/docs/Web/HTML/Element/button#formmethod) attribute on a {{HTMLElement("button")}} or {{HTMLElement("input")}} element.

- {{htmlattrdef("name")}}
  - : The name of the form. In HTML 4 its use is deprecated (`id` should be used instead). It must be unique among the forms in a document and not the empty string in HTML 5.
- {{htmlattrdef("novalidate")}}
  - : This Boolean attribute indicates that the form is not to be validated when it is submitted. If this attribute is missing (and therefore the form is validated), this default setting can be overridden by a [`formnovalidate`](/pt-BR/docs/Web/HTML/Element/button#formnovalidate) attribute on a {{HTMLElement("button")}} or {{HTMLElement("input")}} element belonging to the form.
- {{htmlattrdef("target")}}

  - : A name or keyword indicating where to display the response that is received after submitting the form. In HTML 4, this is the name of, or a keyword for, a frame. In HTML5, it is a name of, or keyword for, a _browsing context_ (for example, tab, window, or inline frame). The following keywords have special meanings:

    - `_self`: Load the response into the same HTML 4 frame (or HTML5 browsing context) as the current one. This value is the default if the attribute is not specified.
    - `_blank`: Load the response into a new unnamed HTML 4 window or HTML5 browsing context.
    - `_parent`: Load the response into the HTML 4 frameset parent of the current frame or HTML5 parent browsing context of the current one. If there is no parent, this option behaves the same way as `_self`.
    - `_top`: HTML 4: Load the response into the full, original window, canceling all other frames. HTML5: Load the response into the top-level browsing context (that is, the browsing context that is an ancestor of the current one, and has no parent). If there is no parent, this option behaves the same way as `_self`.
    - _iframename_: The response is displayed in a named {{HTMLElement("iframe")}}.

    HTML5: This value can be overridden by a [`formtarget`](/pt-BR/docs/Web/HTML/Element/button#formtarget) attribute on a {{HTMLElement("button")}} or {{HTMLElement("input")}} element.

## Exemplos

```html
<!-- Form que envia uma requisição GET -->
<form action="" method="get">
  <label for="GET-name">Name:</label>
  <input id="GET-name" type="text" name="name" />
  <input type="submit" value="Save" />
</form>

<!-- Simple form which will send a POST request -->
<form action="" method="post">
  <label for="POST-name">Name:</label>
  <input id="POST-name" type="text" name="name" />
  <input type="submit" value="Save" />
</form>

<!-- Form with fieldset, legend, and label -->
<form action="" method="post">
  <fieldset>
    <legend>Title</legend>
    <input type="radio" name="radio" id="radio" />
    <label for="radio">Click me</label>
  </fieldset>
</form>
```

## Especificações

| Especificação                                                              | Status                   | Comment |
| -------------------------------------------------------------------------- | ------------------------ | ------- |
| {{SpecName('HTML WHATWG', 'forms.html#the-form-element', '&lt;form&gt;')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'forms.html#the-form-element', '&lt;form&gt;')}}   | {{Spec2('HTML5 W3C')}}   |         |
| {{SpecName('HTML4.01', 'interact/forms.html#h-17.3', '&lt;form&gt;')}}     | {{Spec2('HTML4.01')}}    |         |

## Compatibilidade do navegador

{{Compat("html.elements.form")}}

## Veja também

- [HTML forms guide](/pt-BR/docs/Web/Guide/HTML/Forms)
- Other elements that are used for creating forms: {{HTMLElement("button")}}, {{HTMLElement("datalist")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}},{{HTMLElement("keygen")}}, {{HTMLElement("label")}}, {{HTMLElement("legend")}}, {{HTMLElement("meter")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("option")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}.

{{HTMLSidebar}}
