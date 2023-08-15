---
title: <img>
slug: Web/HTML/Element/img
---

## Resumo

O **elemento** **HTML `<img>` **(or _HTML Image Element_) representa a inserção de imagem no documento, sendo implementado também pelo HTML5 para uma melhor experiência com o elemento {{HTMLElement("figure")}} e {{HTMLElement("figcaption")}}.

## Exemplo da implementação do HTML5

```
<figure>
  <img src="imagem.jpg" alt="Minha Figura">
  <figcaption>Informações da Figura</figcaption>
</figure>
```

> **Note:** **Usage note:**
> Navegadores nem sempre exibem a imagem referenciada pelo elemento. Este é o caso para navegadores não gráficos (incluindo aqueles usados por pessoas com deficiência de visão), ou se o usuário optar por não exibir imagens ou se o navegador não conseguir exibir a imagem porque é inválido ou um tipo não suportado. Nesses casos, o navegador pode substituir a imagem pelo texto definido no atributo **alt** deste elemento.

- _[Content categories](/pt-BR/docs/HTML/Content_categories)_ [Flow content](/pt-BR/docs/HTML/Content_categories#Flow_content), [phrasing content](/pt-BR/docs/HTML/Content_categories#Phrasing_content), embedded content, palpable content. If the element has a [`usemap`](/pt-BR/docs/Web/HTML/Element/img#usemap) attribute, it also is a part of the interactive content category.
- _Permitted content_ None, it is an {{Glossary("empty element")}}.
- _Tag omission_ Must have a start tag and must not have an end tag.
- _Permitted parent elements_ Any element that accepts embedded content.
- _DOM interface_ {{domxref("HTMLImageElement")}}

## Atributos

Este Elemeto inlcui o [atributo global](/pt-BR/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("align")}} {{deprecated_inline}}
  - : The alignment of the image with respect to its surrounding context. Use the {{cssxref('vertical-align')}} CSS property.
- {{htmlattrdef("alt")}}

  - : Este atributo define um texto alternativo que descreve a imagem. Os Usuários irão ver o texto se a URL da imagem estiver errado, a imagem não está em um dos [formatos suportados](#supported_image_formats) ou até a imagem ser baixada .

    > **Note:** **Usage note:** Omitting this attribute indicates that the image _is_ a key part of the content, but no textual equivalent is available. Setting this attribute to the empty string indicates that this image is _not_ a key part of the content; non-visual browsers may omit it from rendering.

- {{htmlattrdef("border")}} {{deprecated_inline}}
  - : The width of a border around the image.
- {{htmlattrdef("crossorigin")}}

  - : This enumerated attribute indicates if the fetching of the related image must be done using CORS or not. [CORS-enabled images](/pt-BR/docs/CORS_Enabled_Image) can be reused in the {{HTMLElement("canvas")}} element without being _tainted_. The allowed values are:

    - anonymous
      - : A cross-origin request (i.e. with `Origin:` HTTP header) is performed. But no credential is sent (i.e. no cookie, no X.509 certificate and no HTTP Basic authentication is sent). If the server does not give credentials to the origin site (by not setting the `Access-Control-Allow-Origin:` HTTP header), the image will be _tainted_ and its usage restricted..
    - use-credentials
      - : A cross-origin request (i.e. with `Origin:` HTTP header) performed with credential is sent (i.e. a cookie, a certificate and HTTP Basic authentication is performed). If the server does not give credentials to the origin site (through `Access-Control-Allow-Credentials:` HTTP header), the image will be _tainted_ and its usage restricted.

    When not present, the resource is fetched without a CORS request (i.e. without sending the `Origin:` HTTP header), preventing its non-tainted usage in {{HTMLElement('canvas')}} elements. If invalid, it is handled as if the enumerated keyword **anonymous** was used. See [CORS settings attributes](/pt-BR/docs/HTML/CORS_settings_attributes) for additional information.

- {{htmlattrdef("height")}}
  - : The height of the image in HTML 5 CSS pixels, or HTML 4 in pixels or as a percentage.
- {{htmlattrdef("hspace")}} {{deprecated_inline}}
  - : The number of pixels of white space to insert to the left and right of the image.
- {{htmlattrdef("ismap")}}

  - : This Boolean attribute indicates that the image is part of a server-side map. If so, the precise coordinates of a click are sent to the server.

    > **Note:** **Usage note:** This attribute is allowed only if the `<img>` element is a descendant of an {{htmlelement("a")}} element with a valid [`href`](/pt-BR/docs/Web/HTML/Element/a#href) attribute.

- {{htmlattrdef("longdesc")}} {{deprecated_inline}}
  - : A link to a more detailed description of the image. Possible values are a {{glossary("URL")}} or an element [`id`](/pt-BR/docs/Web/HTML/Global_attributes#id).
- {{htmlattrdef("name")}} {{deprecated_inline}}
  - : A name for the element. Use the [`id`](/pt-BR/docs/Web/HTML/Global_attributes#id) attribute instead.
- {{htmlattrdef("src")}}
  - : Image URL, this attribute is obligatory for the `<img>` element. On browsers supporting **srcset**, **src** is ignored if this one is provided.
- {{htmlattrdef("srcset")}}

  - : A list of one or more strings separated by commas indicating a set of possible images for the user agent to use. Each string is composed of:

    1. one URL to an image,
    2. a width descriptor, that is a positive integer directly followed by `'w'`. The default value, if missing, is the infinity.
    3. a pixel density descriptor, that is a positive floating number directly followed by `'x'`. The default value, if missing, is `1x`.

    Each string in the list must have at least a width descriptor or a pixel density descriptor to be valid. Among the list, there must be only one string containing the same tuple of width descriptor and pixel density descriptor.
    The browser chooses the most adequate image to display at a given point of time.

- {{htmlattrdef("width")}}
  - : The width of the image in pixels or percent.
- {{htmlattrdef("usemap")}}

  - : The partial URL (starting with '#') of an [image map](/pt-BR/docs/HTML/Element/map) associated with the element.

    > **Note:** **Usage note:** You cannot use this attribute if the `<img>` element is a descendant of an {{htmlelement("a")}} or {{HTMLElement("button")}} element.

- {{htmlattrdef("vspace")}} {{deprecated_inline}}
  - : The number of pixels of white space to insert above and below the image.

## Formato de imagens suportadas

O padrão HTML não fornece uma lista de formatos de imagem que devem ser suportados, portanto, cada agente de usuário oferece suporte a um conjunto diferente de formatos. [Gecko](/pt-BR/docs/Mozilla/Gecko) suporta:

- [JPEG](http://en.wikipedia.org/wiki/JPEG)
- [GIF](http://en.wikipedia.org/wiki/Graphics_Interchange_Format), incluindo GIFs animados
- [PNG](http://en.wikipedia.org/wiki/Portable_Network_Graphics)
- [APNG](/pt-BR/docs/Animated_PNG_graphics)
- [SVG](/pt-BR/docs/SVG)
- [BMP](http://en.wikipedia.org/wiki/BMP_file_format)
- [BMP ICO](http://en.wikipedia.org/wiki/ICO_%28file_format%29)
- [PNG ICO](http://en.wikipedia.org/wiki/ICO_%28file_format%29)

## Interação com CSS

Em relação ao CSS, uma `<img>` é um [elemento substituído](/pt-BR/docs/Web/CSS/Replaced_element). Ele não tem linha de base, ou seja, quando usado em um contexto de formatação em linha (inline) com {{cssxref("vertical-align")}}: baseline, a base inferior da imagem será colocada na linha de base do contêiner.

Depending of its type, an _image_ may have an intrinsic dimension, but this is not a necessary condition: a SVG image has no intrinsic dimension, a raster image has one.

## Exemplos

### Usando o texto alternativo

O exemplo a seguir insere uma imagem na página e inclui o texto alternativo para acessibilidade, de forma que ele possa ser lido por programas leitores de tela ou exibido caso a imagem não carregue.

```html
<img
  src="https://developer.mozilla.org/static/img/favicon144.png"
  alt="MDN logo" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### Link em imagem

Esse exemplo mostra como transformar uma imagem em um link. Para isso, insira a tag `<img>` dentro da tag do link {{HTMLElement("a")}}. Nesse caso, é interessante fazer o texto alternativo descrever o site para o qual o link aponta, como se fosse o texto usado dentro da tag `<a>`.

```html
<a href="https://developer.mozilla.org">
  <img
    src="https://developer.mozilla.org/static/img/favicon144.png"
    alt="Visit the MDN site" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### Usando o atributo `srcset`

Nesse exemplo, o atributo `srcset` inclui uma versão do logotipo com maior resolução, a qual vai ser carregada no lugar de `src` em aparelhos de alta resolução e cujo navegador tenha suporte à `srcset`.

A imagem presente no atributo `src` conta como um candidato `1x` em navegadores com suporte à `srcset`.

As imagens exibidas dependerão do tipo de tela.

**`srcset`** define o conjunto de imagens que nós iremos permitir ao navegador escolher, e qual tamanho cada imagem tem.

```html
<img
  src="mdn-logo-sm.png"
  alt="MD Logo"
  srcset="mdn-logo-HD.png 2x, mdn-logo-small.png 15w, mdn-banner-HD.png 100w 2x" />
```

Antes de cada vírgula nós escrevemos:

1. Um **nome do arquivo da imagem** (`mdn-logo-HD.png`).
2. Um espaço.
3. A **largura da imagem** ou **sua densidade de pixels**.

## Acessibilidade

### Utilizando textos alternativos relevantes

O valor do atributo `alt` deve descrever de maneira clara e concisa o conteúdo da imagem. Evite descrever a própria presença da imagem ou o nome de seu arquivo. Se o atributo `alt` for propositalmente deixado vazio porque a imagem não possui nenhum equivalente em texto, considere métodos alternativos para indicar o que a imagem deseja comunicar.

#### Evite

```html example-bad
<img alt="imagem" src="penguin.jpg" />
```

#### Prefira

```html example-good
<img alt="Um pinguim-saltador-da-rocha em pé numa praia." src="penguin.jpg" />
```

Quando o atributo `alt` não estiver presente em uma imagem, alguns programas leitores de tela vão narrar o nome do arquivo da imagem em seu lugar, o que pode ser confuso caso o nome do arquivo não seja representativo do conteúdo da imagem.

- [An alt Decision Tree • Images • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-texts: The Ultimate Guide — Axess Lab](https://axesslab.com/alt-texts/)
- [How to Design Great Alt Text: An Introduction | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN Understanding WCAG, Guideline 1.1 explanations](/pt-BR/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.1_—_Providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### O atributo title

O atributo [`title`](/pt-BR/docs/Web/HTML/Global_attributes#title) não é um substituto aceitável para o atributo `alt`. Além disso, evite duplicar o valor do atributo `alt` no atributo `title` para uma mesma imagem. Isso pode fazer com que alguns programas leitores de tela narrem duas vezes a descrição, o que pode criar uma experiência confusa para usuários.

Evite usar o atributo `title` como uma forma suplementar de legenda para a descrição do `alt`. Caso a imagem precise de uma legenda, prefisa os elementos [`figure`](/pt-BR/docs/Web/HTML/Element/figure) e [`figcaption`](/pt-BR/docs/Web/HTML/Element/figcaption).

O valor do atributo `title` é geralmente mostrado ao usuário como uma dica, que aparece após o usuário parar o cursor sobre a imagem. Apesar de _poder_ _prover_ informações adicionais ao usuário, não se deve assumir todos os usuários vão vê-lo, pois o mesmo pode possuir apenas um teclado ou uma tela de toque (touchscreen). Se você considera a informação particularmente importante para o usuário, prefira o uso de elementos inline.

- [Using the HTML title attribute – updated | The Paciello Group](https://developer.paciellogroup.com/blog/2013/01/using-the-html-title-attribute-updated/)

## Especificações

| Specification                                                                         | Status                   | Comment |
| ------------------------------------------------------------------------------------- | ------------------------ | ------- |
| {{SpecName('HTML WHATWG', 'embedded-content-1.html#the-img-element', '&lt;img&gt;')}} | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'embedded-content-0.html#the-img-element', '&lt;img&gt;')}}   | {{Spec2('HTML5 W3C')}}   |         |
| {{SpecName('HTML4.01', 'struct/objects.html#h-13.2', '&lt;img&gt;')}}                 | {{Spec2('HTML4.01')}}    |         |

## Compatibilidade dos navegadores

{{Compat("html.elements.img")}}

## Veja também

- {{HTMLElement("object")}} and {{HTMLElement("embed")}} elements

{{HTMLSidebar}}
