---
title: <script>
slug: Web/HTML/Element/script
---

O **elemento HTML `<script>`** é usado para incluir ou referenciar um script executável.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/Web/HTML/Content_categories"
          >Categorias de conteúdo</a
        >
      </th>
      <td>
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Metadata_content"
          >Conteúdo de metadados</a
        >,
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Flow_content"
          >Fluxo de conteúdo</a
        >,
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Phrasing_content"
          >Conteúdo fraseado</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Conteúdo Permitido</th>
      <td>Script dinâmico, como <code>text/javascript</code>.</td>
    </tr>
    <tr>
      <th scope="row">Omissão de tag</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Pais permitidos</th>
      <td>
        Qualquer elemento que aceite
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Metadata_content"
          >conteúdo de metadados</a
        >, ou qualquer elemento que aceite
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Phrasing_content"
          >conteúdo fraseado</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Regras ARIA permitidas</th>
      <td>Nenhuma</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLScriptElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Esse elemento inclui os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("async")}}

  - : Um atributo booleano indicando que o navegador deve, se possível, executar o script assíncronamente.

    > **Warning:** Esse atributo não deve ser utilizado se o atributo `src` estiver ausente (ex. scripts embutidos). Se incluído, nesse caso, ele não terá nenhum efeito.

    Scripts inseridos dinamicamente (usando `document.createElement`) são executados assincronamente por padrão, então para torná-lo uma execução síncrona (ex. executar scripts na ordem que eles foram carregados) atribua `async=false`.

    Veja [Browser compatibility](#browser_compatibility) para notas no suporte do navegador. Veja também [Scripts assíncronos para asm.js](/pt-BR/docs/Games/Techniques/Async_scripts).

- {{htmlattrdef("crossorigin")}}
  - : Elementos `script` passam o mínimo de informação para {{domxref('GlobalEventHandlers.onerror', 'window.onerror')}} em scripts que não passem na checagem do [CORS](/pt-BR/docs/HTTP_access_control). Para permitir logs de erro para sites que usam domínios diferentes para arquivos estáticos, use esse atributo. Veja [CORS settings attributes](/pt-BR/docs/Web/HTML/CORS_settings_attributes) para uma explicação mais detalhada dos argumentos válidos.
- {{htmlattrdef("defer")}}

  - : Esse atributo Boleano é usado para indicar ao navegador que o script deve ser executado depois que o documento tenha sido parseado, mas antes de disparar o evento {{event("DOMContentLoaded")}}

    Scripts com o atributo `defer` vão impedir que o evento DOMContentLoaded seja disparado até que o script seja carregado e tenha terminado de ser _avaliado_.

    > **Warning:** Esse atributo não deve ser usado se o atibuto `src` estiver ausente (ex. scripts inline), nesse caso ele não vai ter efeito.

    Para conseguir um efeito similar para scripts inseridos dinamicamente use `async=false`. Scripts com o atributo `defer` vão ser executados na ordem em que aparecem no `document`.

- {{htmlattrdef("integrity")}}
  - : Contains inline metadata that a user agent can use to verify that a fetched resource has been delivered free of unexpected manipulation. See [Subresource Integrity](/pt-BR/docs/Web/Security/Subresource_Integrity).
- {{htmlattrdef("nomodule")}} {{experimental_inline}}
  - : This Boolean attribute is set to indicate that the script should not be executed in browsers that support [ES6 modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) — in effect, this can be used to serve fallback scripts to older browsers that do not support modular JavaScript code.
- {{htmlattrdef("src")}}
  - : This attribute specifies the URI of an external script; this can be used as an alternative to embedding a script directly within a document. If a `script` element has a `src` attribute specified, it should not have a script embedded inside its tags.
- {{htmlattrdef("text")}}
  - : Like the `textContent`attribute, this attribute sets the text content of the element. Unlike the `textContent` attribute, however, this attribute is evaluated as executable code after the node is inserted into the DOM.
- {{htmlattrdef("type")}}

  - : Indicates the type of script represented. The value of this attribute will be in one of the following categories:

    - **Omitted or a JavaScript MIME type:** For HTML5-complient browsers this indicates the script is JavaScript. HTML5 spec urges authors to omit the attribute rather than provided a redundant MIME type. In earlier browsers, this identified the scripting language of the embedded or imported (via the `src` attribute) code. JavaScript MIME types are [listed in the specification](/pt-BR/docs/Web/HTTP/Basics_of_HTTP/MIME_types).
    - **`module`:** For HTML5-complient browsers the code is treated as a JavaScript module. Processing of the script contents are not affected by the `charset` and `defer` attributes. For information on using `module`, see [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/). {{experimental_inline}}
    - **Any other value or MIME type:** Embedded content is treated as a data block which won't be processed by the browser. The `src` attribute will be ignored.

    Note that in Firefox you can use advanced features such as let statements and other features in later JS versions, by using `type=application/javascript;version=1.8` {{Non-standard_inline}}. Beware, however, that as this is a non-standard feature, this will most likely break support for other browsers, in particular Chromium-based browsers.

    For how to include _exotic programming languages_, read about [Rosetta](/pt-BR/Add-ons/Code_snippets/Rosetta).

### Atributos obsoletos

- {{htmlattrdef("charset")}} {{Deprecated_inline}}
  - : If present, its value must be an ASCII case-insensitive match for "`utf-8`". Both it's unnecessary to specify the `charset` attribute, because documents must use UTF-8, and the `script` element inherits its character encoding from the document.
- {{htmlattrdef("language")}} {{Deprecated_inline}}
  - : Like the `type` attribute, this attribute identifies the scripting language in use. Unlike the `type` attribute, however, this attribute's possible values were never standardized. The `type` attribute should be used instead.

## Notas

Scripts without `async` or `defer` attributes, as well as inline scripts, are fetched and executed immediately, before the browser continues to parse the page.

The script should be served with the `text/javascript` MIME type, but browsers are lenient and only block them if the script is served with an image type (`image/*`), a video type (`video/*`), an audio (`audio/*`) type, or `text/csv`. If the script is blocked, an {{event("error")}} is sent to the element, if not a {{event("success")}} event is sent.

## Exemplos

```html
<!-- HTML4 and (x)HTML -->
<script type="text/javascript" src="javascript.js"></script>

<!-- HTML5 -->
<script src="javascript.js"></script>
```

## Specifications

| Specification                                                                      | Status                             | Comments                      |
| ---------------------------------------------------------------------------------- | ---------------------------------- | ----------------------------- |
| {{SpecName('HTML WHATWG', "scripting.html#the-script-element", "&lt;script&gt;")}} | {{Spec2('HTML WHATWG')}}           | Adds the module type          |
| {{SpecName('HTML5 W3C', 'scripting-1.html#script', '&lt;script&gt;')}}             | {{Spec2('HTML5 W3C')}}             |                               |
| {{SpecName('HTML4.01', 'interact/scripts.html#h-18.2.1', '&lt;script&gt;')}}       | {{Spec2('HTML4.01')}}              |                               |
| {{SpecName('Subresource Integrity', '#htmlscriptelement', '&lt;script&gt;')}}      | {{Spec2('Subresource Integrity')}} | Adds the integrity attribute. |

## Compatibilidade com navegadores

{{Compat("html.elements.script")}}

## See also

- {{domxref("document.currentScript")}}
- [Ryan Grove's \<script> and \<link> node event compatibility chart](https://pie.gd/test/script-link-events/)

{{HTMLSidebar}}
