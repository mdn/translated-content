---
title: <a>
slug: Web/HTML/Element/a
---

{{HTMLSidebar}}

O **elemento** **`<a>`** em **HTML** (ou elemento âncora), com o atributo [`href`](#href) cria-se um hiperligação nas páginas web, arquivos, endereços de emails, ligações na mesma página ou endereços na URL. O conteúdo dentro de cada `<a>` **precisará** indicar o destino do link.

{{EmbedInteractiveExample("pages/tabbed/a.html")}}

## Atributos

Os atributos do elemento incluem os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

- {{HTMLAttrDef("download")}}

  - : Leva o usuário a salvar a URL em vez de navegar até ela. Pode ser usado com ou sem um valor:

    - Sem um valor, o _browser_ irá sugerir um nome de arquivo/extensão, gerado a partir de diversas origens:

      - O cabeçalho HTTP {{HTTPHeader("Content-Disposition")}}
      - O segmento final no [path](/pt-BR/docs/Web/API/URL/pathname) (caminho) da URL
      - The {{Glossary("MIME_type", "media type")}} (from the ({{HTTPHeader("Content-Type")}} header, the start of a [`data:` URL](/pt-BR/docs/Web/HTTP/Basics_of_HTTP/Data_URIs), or {{domxref("Blob.type")}} for a [`blob:` URL](/pt-BR/docs/Web/API/URL/createObjectURL))

    - A definição de um valor o sugere como o nome do arquivo. Caracteres `/` e `\` são convertidos para _underscores_ (`_`).Arquivos de sistema talvez proibam alguns caracteres em nomes de arquivos, então o navegador irá ajustar o nome sugerido caso necessário.

    > **Note:** **Notes:**- `download` somente funciona para [URLs de mesma origem](/pt-BR/docs/Web/Security/Same-origin_policy), ou os esquemas `blob:` e `data:`
    >
    > - Se `Content-Disposition` tiver um diferente `filename` (nome do arquivo) que `download`, o cabeçalho tem prioridade. (Se `Content-Disposition: inline`, Firefox prioriza o cabeçalho enquanto o Chrome escolhe `download`.)

- {{HTMLAttrDef("href")}}

  - : A URL para a qual o hiperlink aponta. Links não se restrigem a URLs baseadas no protocolo HTTP — eles podem utilizar qualquer tipo de URL suportado pelos browsers:

    - Sections of a page with fragment URLs(Seções de página com fragmentos URL)
    - Pieces of media files with media fragments (Pedaços de arquivos de mídia com fragmentos da própria mídia)
    - Números de telefone com `tel:` URLs
    - Email addresses with(Endereço de email com) `mailto:` URLs
    - Alguns navegadores talvez não aguentem certos arranjos em URL, para isso os websites fazem uso do [`registerProtocolHandler()`](/pt-BR/docs/Web/API/Navigator/registerProtocolHandler)

- {{HTMLAttrDef("hreflang")}}
  - : Hints at the human language of the linked URL. No built-in functionality. Allowed values are the same as [the global `lang` attribute](/pt-BR/docs/Web/HTML/Global_attributes/lang).
- {{HTMLAttrDef("ping")}}
  - : Uma lista de URLs separadas por espaços. Quando o link é seguido, o brrowser enviará requisições {{HTTPMethod("POST")}} com o corpo `PING` para as URLs. Typically for tracking.
- {{HTMLAttrDef("referrerpolicy")}}{{Experimental_Inline}}
  - : Quanto do [referrer](/pt-BR/docs/Web/HTTP/Headers/Referer) para ser enviado quando acessar o link. Acesse [`Referrer-Policy`](/pt-BR/docs/Web/HTTP/Headers/Referrer-Policy) para possíveis valores e seus efeitos.
- {{HTMLAttrDef("rel")}}
  - : The relationship of the linked URL as space-separated [link types](/pt-BR/docs/Web/HTML/Link_types).
- {{HTMLAttrDef("target")}}

  - : Where to display the linked URL, as the name for a _browsing context_ (a tab, window, or `<iframe>`). The following keywords have special meanings for where to load the URL:

    - `_self`: No atual contexto de pesquisa. (Default)
    - `_blank`: Normalmente uma nova aba, porém usuários podem configurar seus navegadores para abrir em uma nova janela.
    - `_parent`: the parent browsing context of the current one. If no parent, behaves as `_self`.
    - `_top`: the topmost browsing context (the "highest" context that's an ancestor of the current one). If no ancestors, behaves as `_self`.

    > **Note:** Quando usando `target`, adicione `rel="noreferrer noopener"` para evitar "exploit" para `window.opener` API;

    > **Warning:** **Note:** Linking to another page with `target="_blank"` will run the new page in the same process as your page. If the new page executes JavaScript, your page's performance may suffer. This can also be avoided by using `rel="noreferrer noopener"`.

- {{HTMLAttrDef("type")}}
  - : Hints at the linked URL's format with a {{Glossary("MIME type")}}. No built-in functionality.

### Obsolete attributes

- {{HTMLAttrDef("charset")}}

  - : Hinted at the {{Glossary("character encoding")}} of the linked URL.

    > **Note:** This attribute is obsolete and **should not be used by authors**. Use the HTTP {{HTTPHeader("Content-Type")}} header on the linked URL.

- {{HTMLAttrDef("coords")}}
  - : Used with [the `shape` attribute](#shape). A comma-separated list of coordinates.
- {{HTMLAttrDef("name")}}

  - : Was required to define a possible target location in a page. In HTML 4.01, `id` and `name` could both be used on `<a>`, as long as they had identical values.

    > **Note:** Use the global attribute [`id`](/pt-BR/docs/Web/HTML/Global_attributes#id) instead.

- {{HTMLAttrDef("rev")}}
  - : Specified a reverse link; the opposite of [the `rel` attribute](#rel). Deprecated for being very confusing.
- {{HTMLAttrDef("shape")}}

  - : The shape of the hyperlink's region in an image map.

    > **Note:** Use the {{HTMLElement("area")}} element for image maps instead.

## Properties

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/Web/HTML/Content_categories">Content categories</a>
      </th>
      <td>
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Flow_content"
          >Flow content</a
        >,
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Phrasing_content"
          >phrasing content</a
        >,
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Interactive_content"
          >interactive content</a
        >, palpable content.
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted content</th>
      <td>
        <a
          href="/pt-BR/docs/Web/HTML/Content_categories#Transparent_content_model"
          >Transparent</a
        >, containing either
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Flow_content"
          >flow content</a
        >
        (excluding
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Interactive_content"
          >interactive content</a
        >) or
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Phrasing_content"
          >phrasing content</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Tag omission</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Permitted parents</th>
      <td>
        Any element that accepts
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Phrasing_content"
          >phrasing content</a
        >, or any element that accepts
        <a href="/pt-BR/docs/Web/HTML/Content_categories#Flow_content"
          >flow content</a
        >, but not other <code>&#x3C;a></code> elements.
      </td>
    </tr>
    <tr>
      <th scope="row">Implicit ARIA role</th>
      <td>
        <code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/link_role">link</a></code> when <code>href</code> attribute is
        present, otherwise
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >no corresponding role</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>
        <p>When <code>href</code> attribute is present:</p>
        <ul>
          <li><code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/button_role">button</a></code></li>
          <li><code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/checkbox_role">checkbox</a></code></li>
          <li><code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/menuitem_role">menuitem</a></code></li>
          <li><code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role">menuitemcheckbox</a></code></li>
          <li><code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role">menuitemradio</a></code></li>
          <li><code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/option_role">option</a></code></li>
          <li><code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/radio_role">radio</a></code></li>
          <li><code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/switch_role">switch</a></code></li>
          <li><code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/tab_role">tab</a></code></li>
          <li><code><a href="/pt-br/docs/Web/Accessibility/ARIA/Roles/treeitem_role">treeitem</a></code></li>
        </ul>
        <p>When <code>href</code> attribute is not present:</p>
        <ul>
          <li>any</li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{DOMxRef("HTMLAnchorElement")}}</td>
    </tr>
  </tbody>
</table>

## Examples

### Linking to an absolute URL

#### HTML

```html
<a href="https://www.mozilla.com"> Mozilla </a>
```

#### Result

{{EmbedLiveSample('Linking_to_an_absolute_URL')}}

### Linking to relative URLs

#### HTML

```html
<a href="//example.com">Scheme-relative URL</a>
<a href="/pt-BR/docs/Web/HTML">Origin-relative URL</a>
<a href="./p">Directory-relative URL</a>
```

```css hidden
a {
  display: block;
  margin-bottom: 0.5em;
}
```

#### Result

{{EmbedLiveSample('Linking_to_relative_URLs')}}

### Linking to an element on the same page

```html
<!-- <a> element links to the section below -->
<p><a href="#Section_further_down"> Jump to the heading below </a></p>

<!-- Heading to link to -->
<h2 id="Section_further_down">Section further down</h2>
```

> **Note:** You can use `href="#top"` or the empty fragment (`href="#"`) to link to the top of the current page, [as defined in the HTML specification](https://html.spec.whatwg.org/multipage/browsing-the-web.html#scroll-to-the-fragment-identifier).

### Linking to an email address

To create links that open in the user's email program to let them send a new message, use the `mailto:` scheme:

```html
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
```

For details about `mailto:` URLs, such as including a subject or body, see [Email links](/pt-BR/docs/Web/Guide/HTML/Email_links) or {{RFC(6068)}}.

### Linking to telephone numbers

```html
<a href="tel:+49.157.0156">+49 157 0156</a>
<a href="tel:+1(555)5309">(555) 5309</a>
```

`tel:` link behavior varies with device capabilities:

- Cellular devices autodial the number.
- Most operating systems have programs that can make calls, like Skype or FaceTime.
- Websites can make phone calls with {{domxref("Navigator/registerProtocolHandler", "registerProtocolHandler")}}, such as `web.skype.com`.
- Other behaviors include saving the number to contacts, or sending the number to another device.

See {{RFC(3966)}} for syntax, additional features, and other details about the `tel:` URL scheme.

### Using the download attribute to save a \<canvas> as a PNG

To save a {{HTMLElement("canvas")}} element's contents as an image, you can create a link with a `download` attribute and the canvas data as a `data:` URL:

#### Example painting app with save link

##### HTML

```html
<p>
  Paint by holding down the mouse button and moving it.
  <a href="" download="my_painting.png">Download my painting</a>
</p>

<canvas width="300" height="300"></canvas>
```

##### CSS

```css
html {
  font-family: sans-serif;
}
canvas {
  background: #fff;
  border: 1px dashed;
}
a {
  display: inline-block;
  background: #69c;
  color: #fff;
  padding: 5px 10px;
}
```

##### JavaScript

```js
var canvas = document.querySelector("canvas"),
  c = canvas.getContext("2d");
c.fillStyle = "hotpink";

function draw(x, y) {
  if (isDrawing) {
    c.beginPath();
    c.arc(x, y, 10, 0, Math.PI * 2);
    c.closePath();
    c.fill();
  }
}

canvas.addEventListener("mousemove", (event) =>
  draw(event.offsetX, event.offsetY),
);
canvas.addEventListener("mousedown", () => (isDrawing = true));
canvas.addEventListener("mouseup", () => (isDrawing = false));

document
  .querySelector("a")
  .addEventListener(
    "click",
    (event) => (event.target.href = canvas.toDataURL()),
  );
```

##### Result

{{EmbedLiveSample('Example_painting_app_with_save_link', '100%', '400')}}

## Security and privacy

`<a>` elements can have consequences for users' security and privacy. See [`Referer` header: privacy and security concerns](/pt-BR/docs/Web/Security/Referer_header:_privacy_and_security_concerns) for information.

Using `target="_blank"` without `rel="noreferrer"` and `rel="noopener"` makes the website vulnerable to {{domxref("window.opener")}} API exploitation attacks ([vulnerability description](https://www.jitbit.com/alexblog/256-targetblank---the-most-underestimated-vulnerability-ever/)).

## Accessibility

### Strong link text

**The content inside a link should indicate where the link goes**, even out of context.

#### Inaccessible, weak link text

A sadly common mistake is to only link the words "click here" or "here":

```html example-bad
<p>Learn more about our products <a href="/products">here</a>.</p>
```

#### Strong link text

Luckily, this is an easy fix, and it's actually shorter than the inaccessible version!

```html example-good
<p>Learn more <a href="/products">about our products</a>.</p>
```

Assistive software have shortcuts to list all links on a page. However, strong link text benefits all users — the "list all links" shortcut emulates how sighted users quickly scan pages.

### onclick events

Anchor elements are often abused as fake buttons by setting their `href` to `#` or `javascript:void(0)` to prevent the page from refreshing, then listening for their `click` events .

These bogus `href` values cause unexpected behavior when copying/dragging links, opening links in a new tab/window, bookmarking, or when JavaScript is loading, errors, or is disabled. They also convey incorrect semantics to assistive technologies, like screen readers.

Use a {{HTMLElement("button")}} instead. In general, **you should only use a hyperlink for navigation to a real URL**.

### External links and linking to non-HTML resources

Links that open in a new tab/window via `target="_blank"`, or links that point to a download file should indicate what will happen when the link is followed.

People experiencing low vision conditions, navigating with the aid of screen reading technology, or with cognitive concerns may be confused when a new tab, window, or application opens unexpectedly. Older screen-reading software may not even announce the behavior.

#### Link that opens a new tab/window

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia (opens in new tab)
</a>
```

#### Link to a non-HTML resource

```html
<a href="2017-annual-report.ppt"> 2017 Annual Report (PowerPoint) </a>
```

If an icon is used to signify link behavior, make sure it has [alt text](/pt-BR/docs/Web/HTML/Element/img#alt):

```html
<a target="_blank" href="https://www.wikipedia.org">
  Wikipedia
  <img alt="(opens in new tab)" src="newtab.svg" />
</a>

<a href="2017-annual-report.ppt">
  2017 Annual Report
  <img alt="(PowerPoint file)" src="ppt-icon.svg" />
</a>
```

- [WebAIM: Links and Hypertext - Hypertext Links](https://webaim.org/techniques/hypertext/hypertext_links)
- [MDN / Understanding WCAG, Guideline 3.2](/pt-BR/docs/Web/Accessibility/Understanding_WCAG/Understandable#Guideline_3.2_—_Predictable_Make_Web_pages_appear_and_operate_in_predictable_ways)
- [G200: Opening new windows and tabs from a link only when necessary](https://www.w3.org/TR/WCAG20-TECHS/G200.html)
- [G201: Giving users advanced warning when opening a new window](https://www.w3.org/TR/WCAG20-TECHS/G201.html)

### Skip links

A **skip link** is a link placed as early as possible in {{HTMLElement("body")}} content that points to the beginning of the page's main content. Usually, CSS hides a skip link offscreen until focused.

```
<body>
  <a href="#content">Skip to main content</a>

  <header>
    …
  </header>

  <main id="content"> <!-- The skip link jumps to here -->
```

```css
.skip-link {
  position: absolute;
  top: -3em;
  background: #fff;
}
.skip-link:focus {
  top: 0;
}
```

Skip links let keyboard users bypass content repeated throughout multiple pages, such as header navigation.

Skip links are especially useful for people who navigate with the aid of assistive technology such as switch control, voice command, or mouth sticks/head wands, where the act of moving through repetitive links can be laborious.

- [WebAIM: "Skip Navigation" Links](https://webaim.org/techniques/skipnav/)
- [How-to: Use Skip Navigation links](https://a11yproject.com/posts/skip-nav-links/)
- [MDN / Understanding WCAG, Guideline 2.4 explanations](/pt-BR/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.4_%E2%80%94_Navigable_Provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-skip.html)

### Size and proximity

#### Size

Interactive elements, like links, should provide an area large enough that it is easy to activate them. This helps a variety of people, including those with motor control issues and those using imprecise inputs such as a touchscreen. A minimum size of 44×44 [CSS pixels](https://www.w3.org/TR/WCAG21/#dfn-css-pixels) is recommended.

Text-only links in prose content are exempt from this requirement, but it's still a good idea to make sure enough text is hyperlinked to be easily activated.

- [Understanding Success Criterion 2.5.5: Target Size](https://www.w3.org/WAI/WCAG21/Understanding/target-size.html)
- [Target Size and 2.5.5](http://adrianroselli.com/2019/06/target-size-and-2-5-5.html)
- [Quick test: Large touch targets](https://a11yproject.com/posts/large-touch-targets/)

#### Proximity

Interactive elements, like links, placed in close visual proximity should have space separating them. Spacing helps people with motor control issues, who may otherwise accidentally activate the wrong interactive content.

Spacing may be created using CSS properties like {{CSSxRef("margin")}}.

- [Hand tremors and the giant-button-problem](https://axesslab.com/hand-tremors/)

## Specifications

| Specification                                                                                         | Status                       | Comment                               |
| ----------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------------------------- |
| {{SpecName("Referrer Policy", "#referrer-policy-delivery-referrer-attribute", "referrer attribute")}} | {{Spec2("Referrer Policy")}} | Added the `referrerpolicy` attribute. |
| {{SpecName("HTML WHATWG", "textlevel-semantics.html#the-a-element", "&lt;a&gt;")}}                    | {{Spec2("HTML WHATWG")}}     |                                       |
| {{SpecName("HTML5 W3C", "textlevel-semantics.html#the-a-element", "&lt;a&gt;")}}                      | {{Spec2("HTML5 W3C")}}       |                                       |
| {{SpecName("HTML4.01", "struct/links.html#h-12.2", "&lt;a&gt;")}}                                     | {{Spec2("HTML4.01")}}        |                                       |

## Compatibilidade com navegadores

{{Compat("html.elements.a")}}

## See also

- {{HTMLElement("link")}} is similar to `<a>`, but for metadata hyperlinks that are invisible to users.
- {{CSSxRef(":link")}} is a CSS pseudo-class that will match `<a>` elements with valid `href` attributes.
