---
title: <iframe>
slug: Web/HTML/Element/iframe
---

O **elemento** **HTML** **\<iframe>** (ou _elemento HTML_ _inline frame_) representa um contexto de navegação aninhado, efetivamente incorporando outra página HTML para a página atual. Em HTML 4.01, um documento pode conter uma cabeça e um corpo ou uma cabeça e um conjunto de quadros, mas não tanto um corpo e um conjunto de quadros. No entanto, um \<iframe> pode ser usado dentro de um corpo de documento normal. Cada contexto de navegação tem sua própria história de sessão e o documento ativo. O contexto de navegação que contém o conteúdo incorporado é chamado o pai de contexto de navegação. O contexto de navegação de nível superior (que não tem um pai) normalmente é a janela do navegador.

- _[Content categories](/pt-BR/docs/HTML/Content_categories)_ [Flow content](/pt-BR/docs/HTML/Content_categories#Flow_content), [phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content), embedded content, interactive content, palpable content.
- _Permitted content_ Special, see prose
- _Tag omission_ {{no_tag_omission}}
- _Permitted parent elements_ Any element that accepts embedded content.
- _DOM interface_ {{domxref("HTMLIFrameElement")}}

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

- {{htmlattrdef("align")}} {{deprecated_inline}}
  - : O alinhamento deste elemento em relação ao contexto.
- {{htmlattrdef("allowfullscreen")}}
  - : Esse atributo pode ser definido como true se o quadro é permitido para ser colocado em modo de tela cheia, chamando seu método de {{domxref("element.mozRequestFullScreen()")}}. Se isto não estiver definido, o elemento não pode ser colocado em modo de tela cheia.
- {{htmlattrdef("frameborder")}}
  - : O valor 1 (o padrão) pede ao navegador para desenhar uma borda entre este quadro e todos os outros quadros. O valor 0 informa ao navegador para não traçar uma fronteira entre este quadro e outros quadros.
- {{htmlattrdef("height")}}
  - : Indica a altura do quadro HTML 5 em pixels CSS, ou HTML 4 em pixels ou porcentagem.
- {{htmlattrdef("longdesc")}}
  - : Uma URI de uma longa descrição do quadro. Devido à má utilização generalizada, isto não é útil para navegadores não-visuais.
- {{htmlattrdef("marginheight")}}
  - : A quantidade de espaço em pixels entre o conteúdo do quadro e suas margens superior e inferior.
- {{htmlattrdef("marginwidth")}}
  - : A quantidade de espaço em pixels entre o conteúdo dos quadros e suas margens direita e esquerda.
- {{htmlattrdef("mozallowfullscreen")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Use **`allowfullscreen`** ao invés. Em Gecko 9.0 or later, this attribute can be set to `true` if the frame is allowed to be placed into full screen mode by calling its {{domxref("element.mozRequestFullScreen()")}} method. If this isn't set, the element can't be placed into full screen mode.
- {{htmlattrdef("webkitallowfullscreen")}} {{non-standard_inline}} {{deprecated_inline}}
  - : Use **`allowfullscreen`** ao invés. No Chrome 17 ou mais novo (e talvez mais antigo), this attribute can be set to `true` if the frame is allowed to be placed into full screen mode by calling its {{domxref("element.webkitRequestFullScreen()")}} method. If this isn't set, the element can't be placed into full screen mode.
- {{htmlattrdef("mozapp")}} {{non-standard_inline}}
  - : For frames hosting an [open web app](/pt-BR/docs/Apps), this specifies the URL of the [app manifest](/pt-BR/docs/Apps/Manifest). This ensures that the app is loaded with the right permissions. See [Using the Browser API](/pt-BR/docs/DOM/Using_the_Browser_API) for details. Available in Gecko 13.0 and later.
- {{htmlattrdef("mozbrowser")}} {{non-standard_inline}}
  - : Indicates that the frame is to appear like a top-level browser window to the embedded content. This means that {{domxref("window.top")}}, {{domxref("window.parent")}}, {{domxref("window.frameElement")}}, etc. will _not_ reflect the frame hierarchy. This allows for a web browser UI to be implemented entirely with web technology, given the right permissions. See [Using the Browser API](/pt-BR/docs/DOM/Using_the_Browser_API) for details. Available in Gecko 13.0 and later.
- {{htmlattrdef("name")}}
  - : A name for the embedded browsing context (or frame). This can be used as the value of the **`target`** attribute of an {{HTMLElement("a")}} or {{HTMLElement("form")}} element, or the formtarget attribute of an {{HTMLElement("input")}} or {{HTMLElement("button")}} element.
- {{htmlattrdef("remote")}} {{non-standard_inline}}
  - : Carrega a página do _frame_ em um processo separado.
- {{htmlattrdef("scrolling")}}

  - : Enumerated attribute indicating when the browser should provide a scroll bar (or other scrolling device) for the frame:

    - `auto`: Só quando necessário.
    - `yes`: Sempre mostrar uma barra de rolagem.
    - `no`: Nunca mostrar uma barra de rolagem.

- {{htmlattrdef("sandbox")}}

  - : If specified as an empty string, this attribute enables extra restrictions on the content that can appear in the inline frame. The value of the attribute can either be an empty string (all the restrictions are applied), or a space-separated list of tokens that lift particular restrictions. Valid tokens are:

    - `allow-same-origin`: Allows the content to be treated as being from its normal origin. If this keyword is not used, the embedded content is treated as being from a unique origin.
    - `allow-top-navigation`: Allows the embedded browsing context to navigate (load) content to the top-level browsing context. If this keyword is not used, this operation is not allowed.
    - `allow-forms`: Allows the embedded browsing context to submit forms. If this keyword is not used, this operation is not allowed.
    - `allow-popups`: Allows popups (like from window\.open).
    - `allow-scripts`: Allows the embedded browsing context to run scripts (but not create pop-up windows). If this keyword is not used, this operation is not allowed.
    - `allow-pointer-lock`: Allows the embedded browsing context to use the [Pointer Lock API](/pt-BR/docs/WebAPI/Pointer_Lock).

    > **Note:**
    >
    > - When the embedded document has the same origin as the main page, it is strongly discouraged to use both `allow-scripts` and `allow-same-origin` at the same time, as that allows the embedded document to programmatically remove the `sandbox` attribute. Although it is accepted, this case is no more secure than not using the `sandbox` attribute.
    > - Sandboxing in general is only of minimal help if the attacker can arrange for the potentially hostile content to be displayed in the user's browser outside a sandboxed `iframe`. It is recommended that such content should be served from a _separate dedicated domain_, to limit the potential damage.
    > - The `sandbox` attribute is not supported in Internet Explorer 9 and earlier versions, or in Opera.

- {{htmlattrdef("seamless")}}
  - : This **Boolean attribute** indicates that the browser should render the inline frame in a way that makes it appear to be part of the containing document, for example by applying CSS styles that apply to the `<iframe>` to the contained document before styles specified in that document, and by opening links in the contained documents in the parent browsing context (unless another setting prevents this). In XHTML, attribute minimization is forbidden, and the seamless attribute must be defined as `<iframe seamless="seamless">`.
- {{htmlattrdef("src")}}
  - : The URL of the page to embed.
- {{htmlattrdef("srcdoc")}}
  - : The content of the page that the embedded context is to contain. This attribute is expected to be used together with the sandbox and seamless attributes. If a browser supports the `srcdoc` attribute, it will override the content specified in the `src` attribute (if present). If a browser does NOT support the `srcdoc` attribute, it will show the file specified in the `src` attribute instead (if present).
- {{htmlattrdef("width")}}
  - : Indicates the width of the frame HTML 5 in CSS pixels, or HTML 4 in pixels or as a percentage.

## Scripting

Inline frames, like {{HTMLElement("frame")}} elements, enter the {{domxref("window.frames")}} pseudo-array.

From the DOM `iframe` element, scripts can get access to the {{domxref("window")}} object of the included HTML page via the `contentWindow` property. The `contentDocument` property refers to the document element inside the `iframe` (this is equivalent to `contentWindow.document`), but is not supported by Internet Explorer versions before IE8.

From the inside of a frame, a script can get a reference to the parent window via {{domxref("window.parent")}}.

Scripts trying to access a frame's content are subject to the [same-origin policy](/pt-BR/docs/Same_origin_policy_for_JavaScript), and cannot access most of the properties in the other window object if it was loaded from a different domain. This also applies to a script inside a frame trying to access its parent window. Cross-domain communication can still be achieved with {{domxref("window.postMessage")}}.

## Exemplo 1

```html
<script>
  var iframe = window.getElementsByTagName("iframe")[0];
  alert("Frame title: " + iframe.contentWindow.title);
</script>

<iframe src="page.html" width="300" height="300">
  <p>Your browser does not support iframes.</p>
</iframe>
```

## Exemplo 2: Open link inside iframe in another tab

```html
<base target="_blank" />
<iframe
  width="400"
  height="215"
  frameborder="0"
  scrolling="no"
  marginheight="0"
  marginwidth="0"
  src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=es-419&amp;geocode=&amp;q=buenos+aires&amp;sll=37.0625,-95.677068&amp;sspn=38.638819,80.859375&amp;t=h&amp;ie=UTF8&amp;hq=&amp;hnear=Buenos+Aires,+Argentina&amp;z=11&amp;ll=-34.603723,-58.381593&amp;output=embed">
</iframe
><br />
<small>
  <a
    href="https://maps.google.com/maps?f=q&amp;source=embed&amp;hl=es-419&amp;geocode=&amp;q=buenos+aires&amp;sll=37.0625,-95.677068&amp;sspn=38.638819,80.859375&amp;t=h&amp;ie=UTF8&amp;hq=&amp;hnear=Buenos+Aires,+Argentina&amp;z=11&amp;ll=-34.603723,-58.381593"
    style="color:#0000FF;text-align:left">
    See bigger map
  </a>
</small>
```

## Resultado

[Live example](http://jsfiddle.net/pablofiumara/mCfAe/)

## Notas

> **Note:** Starting in Gecko 6.0, rendering of inline frames correctly respects the borders of their containing element when they're rounded using {{cssxref("border-radius")}}.

## Especificações

| Especificação                                                                               | Status                   | Comment |
| ------------------------------------------------------------------------------------------- | ------------------------ | ------- |
| {{SpecName('HTML WHATWG', 'the-iframe-element.html#the-iframe-element', '&lt;iframe&gt;')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'embedded-content-0.html#the-iframe-element', '&lt;iframe&gt;')}}   | {{Spec2('HTML5 W3C')}}   |         |
| {{SpecName('HTML4.01', 'present/frames.html#h-16.5', '&lt;iframe&gt;')}}                    | {{Spec2('HTML4.01')}}    |         |

## Compatibilidade dos navegadores

{{Compat("html.elements.iframe", 3)}}

{{HTMLSidebar}}
