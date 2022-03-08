---
title: Commonly-used macros
slug: MDN/Structures/Macros/Commonly-used_macros
translation_of: MDN/Structures/Macros/Commonly-used_macros
---
{{MDNSidebar}}

Cette page présente un grand nombre de macros à usage général créées pour une utilisation avec MDN. Pour avoir des informations sur l'utilisation de ces macros, voir [Utilisation des macros](https://developer.mozilla.org/fr/docs/MDN/Contribute/Structures/Macros "/fr/docs/MDN/Contribute/Content/Macros") et [Utiliser les liens macros](/fr/docs/MDN/Contribute/Editor/Links#Using_link_macros "/fr/docs/MDN/Contribute/Editor/Links#Using_link_macros"). Voir [les autres macros](/fr/docs/MDN/Contribute/Structures/Macros/Other "/fr/docs/MDN/Contribute/Structures/Macros/Other") pour avoir des informations sur les macros qui sont rarement utilisées, ou utilisées dans des contextes spécifiques, ou obsolètes. Il y a aussi une liste complète de [toutes les macros MDN](/fr/docs/templates "/fr/docs/templates").

Voir aussi le [Guide style CSS](/fr/docs/MDN/Contribute/Guidelines/CSS_style_guide "/fr/docs/MDN/Contribute/Guidelines/CSS_style_guide") pour l'utilisation des styles disponibles.

## Linking

### Création d'un lien hypertexte unique

En général, vous ne devez pas utiliser des macros pour créer des liens arbitraires. Utilisez le **Lien** dans l'interface de l'éditeur pour créer des liens.

- La macro {{TemplateLink("Glossary")}} crée un lien vers une entrée du [glossaire](https://developer.mozilla.org/fr/docs/Glossaire) MDN. Cette macro accepte un paramètre obligatoire et deux optionnels:

  1.  Le nom d'un terme (comme "HTML").
  2.  Le texte à afficher dans l'article au lieu du nom du terme (ce qui devrait être rarement utilisé). {{optional_inline}}
  3.  Si ce paramètre est spécifié et est non nul, le style personnalisé normalement appliqué aux liens glossaire n'est pas appliquée. {{optional_inline}}

  Examples:

  - \\{{Glossary("HTML")}} yields {{Glossary("HTML")}}
  - \\{{Glossary("CSS", "Cascading Style Sheets")}} yields {{Glossary("CSS", "Cascading Style Sheets")}}
  - \\{{Glossary("HTML", "", 1)}} yields {{Glossary("HTML", "", 1)}}

### Liens vers des pages avec références

Il existe différentes macros pour des liens vers des pages dans les zones de référence spécifiques MDN.

- {{TemplateLink("cssxref")}} links to a page in the [CSS Reference](/en-US/docs/CSS_Reference "en-US/docs/CSS_Reference"). Example: `\{{cssxref("cursor")}}`, results in: {{ cssxref("cursor") }}.
- {{TemplateLink("domxref")}} links to pages in the DOM reference; if you include parentheses at the end, the template knows to display the link to look like a function name. For example, \\{{domxref("document.getElementsByName()")}} results in {{ domxref("document.getElementsByName()") }} while `\{\{domxref("Node")\}\}` results in {{ domxref("Node") }}.
- {{TemplateLink("event")}} links to pages in the DOM Event reference, for example: \\{{event("change")}} results in {{event("change")}}.
- {{TemplateLink("HTMLElement")}} links to an HTML element in the HTML Reference.
- {{TemplateLink("htmlattrxref")}} links to an HTML attribute, either a global attribute description if you only specify the attribute name or an attribute associated with a specific element if you specify an attribute name and an element name. For example, `\{\{htmlattrxref("lang")\}\}` will create this link: {{htmlattrxref("lang")}}. `\{\{htmlattrxref("type","input")\}\}` will create this link: {{htmlattrxref("type","input")}}.
- {{TemplateLink("jsxref")}} links to a page in the [JavaScript Reference](/en-US/docs/Web/JavaScript/Reference "en-US/docs/Web/JavaScript/Reference").
- {{TemplateLink("SVGAttr")}} links to a specific SVG attribute. For example, `\{\{SVGAttr("d")\}\}` creates this link: {{SVGAttr("d")}}.
- {{TemplateLink("SVGElement")}} links to an SVG element in the SVG Reference.

### Liens vers des bugs et des [IRC](https://fr.wikipedia.org/wiki/Internet_Relay_Chat)

- Bugs

  - {{TemplateLink("bug")}} allows you to link to a bug on bugzilla.mozilla.org easily using this syntax: `\{\{Bug(123456)\}\}`. This gives you: {{ Bug(123456) }}.
  - {{TemplateLink("WebkitBug")}} inserts a link to a bug in the WebKit bug database. For example, `\{\{WebkitBug(31277)\}\}` inserts {{ WebkitBug(31277) }}.

- {{TemplateLink("IRCLink")}} inserts a link to the specified IRC channel, complete with a tooltip that says that's what it does and that an IRC client is needed.

### Aides à la navigation pour les guides multi-pages

{{TemplateLink("Previous")}}, {{TemplateLink("Next")}}, and {{TemplateLink("PreviousNext")}} provide navigation controls for articles which are part of sequences. For the single-way templates, the only parameter needed is the wiki location of the previous or next article in the sequence. For {{TemplateLink("PreviousNext")}}, the two parameters needed are the wiki locations of the appropriate articles. The first parameter is for the previous article and the second is for the next article.

## Exemples de code

### Live samples

- {{TemplateLink("EmbedLiveSample")}} lets you embed the output of a code sample on a page, as described in [Live samples](/en-US/docs/MDN/Contribute/Structures/Live_samples).
- {{TemplateLink("LiveSampleLink")}} creates a link to a page containing the output of a code sample on a page, as described in [Live samples](/en-US/docs/MDN/Contribute/Structures/Live_samples).

### Fichiers exemples attachés

- {{TemplateLink("Embed_text")}} template lets you embed an attached text file into the body of your article. This is helpful if you want to have code snippets that are both downloadable but also displayed within the article's content. You may optionally specify a language for syntax highlighting; if you don't specify one, the text is embedded unformatted. The first parameter is the filename of the attachment to embed; the second, if provided, is the language for the syntax highlighter to apply, such as "javascript", "svg", or "cpp".
- {{TemplateLink("EmbedSVG")}} embeds an attached XML file as an SVG image, in place on the page. Specify the filename of the attached SVG file. You can use this in tandem with {{TemplateLink("Embed_text")}} to show the source and then the rendered output of the same file.

## Génération de sidebar (barre latérale)

Modèles pour presque toutes les grandes collection de pages. Ils permettent généralement de revenir à la page principale de référence/Guide/tutoriel et de mettre l'article dans la catégorie appropriée.

- {{TemplateLink("CSSRef")}} generates the sidebar for CSS reference pages.
- {{TemplateLink("HTMLRef")}} generates the sidebar for HTML reference pages.
- {{TemplateLink("APIRef")}} generates the sidebar for Web API reference pages.

## La mise en forme à usage général

### Inline indicators for API documentation

{{TemplateLink("optional_inline")}} and {{TemplateLink("ReadOnlyInline")}} are used in API documentation, usually when describing the list of properties of an object or parameters of a function.

Usage: `\{{optional_inline()}}` or `\{{ReadOnlyInline()}}`. Example:

- `isCustomObject` {{ReadOnlyInline()}}
  - : Indicates, if `true`, that the object is a custom one.
- parameterX {{ optional_inline() }}
  - : Blah blah blah...

## Status and compatibility indicators

### Inline indicators with no additional parameters

#### Non-standard

{{TemplateLink("non-standard_inline")}} inserts an in-line mark indicating the API has not been standardized and is not on a standards track.

##### **Syntax**

`\{{non-standard_inline}}`

##### Examples

- Icon: {{non-standard_inline}}

#### Experimental

{{TemplateLink("experimental_inline")}} inserts an in-line mark indicating the API is not widely implemented and may change in the future.

##### Syntax

`\{{experimental_inline}}`

##### `Examples`

- Icon: {{experimental_inline}}

### Inline indicators that support specifying the technology

In these macros the parameter (when specified) should be one of the strings "html", "js", "css", or "gecko", followed by the version number.

#### Deprecated

{{TemplateLink("deprecated_inline")}} inserts an in-line deprecated mark to discourage the use of an API that is officially deprecated. **Note:** "Deprecated" means that the item should no longer be used, but still functions. If you mean that it no longer works at all, use the term "obsolete."

Don't use the parameter in any browser-agnostic area (HTML, APIs, JS, CSS, …).

##### Syntax

`\{{deprecated_inline}}` or `\{{deprecated_inline("gecko5")}}`

##### Examples

- Icon: {{deprecated_inline}}
- Badge: {{deprecated_inline("gecko5")}}

#### Obsolete

{{TemplateLink("obsolete_inline")}} inserts an in-line obsolete mark to prevent the use of, for example, a function, method or property which is officially obsolete.

Don't use the parameter in any browser-agnostic area (HTML, APIs, JS, CSS, …).

##### Syntax

`\{{obsolete_inline}}` or `\{{obsolete_inline("js1.8.5")}}`

##### Examples

- Icon: {{obsolete_inline}}
- Badge: {{obsolete_inline("js1.8.5")}}

### Template badges

These macros are mostly used on the [WebAPI](/en-US/docs/WebAPI) page. See {{anch("Creating new badges")}} for information on creating a new badge.

### Page or section header indicators

These templates have the same semantics as their inline counterparts described above. The templates should be placed directly underneath the main page title (or breadcrumb navigation if available) in the reference page. They can also be used to mark up a section on a page.

- {{TemplateLink("non-standard_header")}}: `\{{Non-standard_header()}}` {{ Non-standard_header() }}
- {{TemplateLink("SeeCompatTable")}} should be used on pages that provide a "Browser compatibility" section. Example: `\{{SeeCompatTable()}}` {{ SeeCompatTable() }}
- {{TemplateLink("deprecated_header")}}: `\{{deprecated_header()}}` {{ Deprecated_header() }}
- {{TemplateLink("deprecated_header")}} with parameter: `\{{deprecated_header("gecko5")}}` {{ Deprecated_header("gecko5") }} Don't use the parameter in any browser-agnostic area (HTML, APIs, JS, CSS, …).
- {{TemplateLink("obsolete_header")}}: `\{{obsolete_header()}}` {{ Obsolete_header() }}
- {{TemplateLink("obsolete_header")}} with parameter: `\{{obsolete_header("gecko30")}}` {{ Obsolete_header("gecko30") }} Don't use the parameter in any browser-agnostic area (HTML, APIs, JS, CSS, …).

### Indicating that a feature is available in web workers

The {{TemplateLink("AvailableInWorkers")}} macro inserts a localised note box indicating that a feature is available in a [Web worker](/en-US/docs/Web/API/Web_Workers_API) context.
