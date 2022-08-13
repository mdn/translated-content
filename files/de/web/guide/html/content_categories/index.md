---
title: Inhaltskategorien
slug: Web/Guide/HTML/Content_categories
tags:
  - Anleitung
  - HTML
  - HTML5
  - NeedsTranslation
  - Web
  - erweitert
translation_of: Web/Guide/HTML/Content_categories
original_slug: Web/Guide/HTML/Inhaltskategorien
---
Für jedes HTML-Element gibt es Regeln, welche definieren, welchen Inhalt es hat. Diese Regeln sind zu Inhaltsmodellen gruppiert, welche für mehrere Elemente gelten. Jedes HTML-Element gehört zu null oder einem oder mehreren Inhaltsmodellen, von welchen jedes die Regeln bestimmt, welche der Inhalt des Elementes in einem gültigen HTML-Document befolgen muss.

Es gibt drei Typen von Inhaltskategorien:

- Hauptinhaltskategorien(engl. `main content categories`), welche Inhaltsregeln beschreiben, welche bei vielen Elementen gültig sind;
- Formzusammenhängende Inhaltskategorien(engl. `form-related content categories`), welche Inhaltsregeln beschreiben, welche für formzusammenhängende Elemente gelten;
- Spezifische Inhaltskategorien(engl.`specific content categories`), welche seltene Kategorien beschreiben, welche nur für wenige Elemente gelten, manchmal nur in einem spezifischen Context.

[![Content_categories_venn.png](/@api/deki/files/6244/=Content_categories_venn.png?size=webview)](/@api/deki/files/6244/=Content_categories_venn.png "Content_categories_venn.png")

## Hauptinhaltskategorien

### Metadateninhalt

Elemente, welche zu der _Metadata_inhaltscategorie(engl.\_metadata content category_) gehören, verändern die Präsentation oder das Verhalten des Restes des Documentes, stellen Links zu anderen Documenten ein, oder enthalten andere _out-of-band_-Information.

Elemente, die zu dieser Kategorie gehören, sind {{HTMLElement("base")}}, {{HTMLElement("command")}}, {{HTMLElement("link")}}, {{HTMLElement("meta")}}, {{HTMLElement("noscript")}}, {{HTMLElement("script")}}, {{HTMLElement("style")}} und {{HTMLElement("title")}}.

### Fließender Inhalt

Elemente, die zu der Kategorie des fließenden Inhaltes(engl._flow content category_ gehören, enthalten typischerweise Text oder eingebetteten Inhalt. Sie sind: {{HTMLElement("a")}}, {{HTMLElement("abbr")}}, {{HTMLElement("address")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("b")}},{{HTMLElement("bdo")}}, {{HTMLElement("bdi")}}, {{HTMLElement("blockquote")}}, {{HTMLElement("br")}}, {{HTMLElement("button")}}, {{HTMLElement("canvas")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("command")}}, {{HTMLElement("data")}}, {{HTMLElement("datalist")}}, {{HTMLElement("del")}}, {{HTMLElement("details")}}, {{HTMLElement("dfn")}}, {{HTMLElement("div")}}, {{HTMLElement("dl")}}, {{HTMLElement("em")}}, {{HTMLElement("embed")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("figure")}}, {{HTMLElement("footer")}}, {{HTMLElement("form")}}, {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}}, {{HTMLElement("header")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("hr")}}, {{HTMLElement("i")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("input")}}, {{HTMLElement("ins")}}, {{HTMLElement("kbd")}}, {{HTMLElement("keygen")}}, {{HTMLElement("label")}}, {{HTMLElement("main")}}, {{HTMLElement("map")}}, {{HTMLElement("mark")}}, {{MathMLElement("math")}}, {{HTMLElement("menu")}}, {{HTMLElement("meter")}}, {{HTMLElement("nav")}}, {{HTMLElement("noscript")}}, {{HTMLElement("object")}}, {{HTMLElement("ol")}}, {{HTMLElement("output")}}, {{HTMLElement("p")}}, {{HTMLElement("pre")}}, {{HTMLElement("progress")}}, {{HTMLElement("q")}}, {{HTMLElement("ruby")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("script")}}, {{HTMLElement("section")}}, {{HTMLElement("select")}}, {{HTMLElement("small")}}, {{HTMLElement("span")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{SVGElement("svg")}}, {{HTMLElement("table")}}, {{HTMLElement("template")}}, {{HTMLElement("textarea")}}, {{HTMLElement("time")}}, {{HTMLElement("ul")}}, {{HTMLElement("var")}}, {{HTMLElement("video")}}, {{HTMLElement("wbr")}} und Text.

Einige wenige Elemente gehören zu dieser Kategorie, aber nur, wenn eine specifische Bedingung erfüllt ist:

- {{HTMLElement("area")}}, falls es ein Nachfolger eines {{HTMLElement("map")}}-Elementes ist
- {{HTMLElement("link")}}, falls das [**itemprop**](/de/docs/HTML/Global_attributes#attr-itemprop "HTML/Global attributes#itemprop")-Attribut geschrieben ist
- {{HTMLElement("meta")}}, falls das [**itemprop**](/de/docs/HTML/Global_attributes#attr-itemprop "HTML/Global attributes#itemprop")-Attribut geschrieben ist
- {{HTMLElement("style")}}, falls das {{htmlattrxref("scoped","style")}}-Attribut geschrieben ist

### Unterteilender Inhalt

Elemente, die zu dem _sectioninig-content_-Modell gehören, erstellen eine [Section in der laufenden Outline](/de/docs/Sections_and_Outlines_of_an_HTML5_document "Sections and Outlines of an HTML5 document"), welche das Aussehen eines {{HTMLElement("header")}}-Elementes , {{HTMLElement("footer")}}-Elementes, und [Überschrifteninhaltes](#Heading_content "#heading content") definiert.

Elemente, die zu dieser Categorie gehören, sind {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("nav")}} und {{HTMLElement("section")}}.

> **Note:** _Notiz:_ Nicht dieses Modell mit der [Sectionierende-Wurzel](/de/docs/Sections_and_Outlines_of_an_HTML5_document#sectioning_root "Sections and Outlines of an HTML5 document#sectioning root")-Kategorie(engl._sectioning root category_, welche ihren Inhalt von der regularen Outline isoliert, verwechseln.

### Überschrifteninhalt

Überschrifteninhalt definiert den Titel einer Section, dabei gibt es keinen Unterschied, ob es mit einem expliciten [sectionierenden Inhalt](#Sectionierender_Inhalt "#Sectionierender Inhalt") gekennzeichnet oder implicite durch den Überschrifteninhalt selbst definiert ist.

Elemente, die zu dieser Categorie gehören, sind {{HTMLElement("h1")}}, {{HTMLElement("h2")}}, {{HTMLElement("h3")}}, {{HTMLElement("h4")}}, {{HTMLElement("h5")}}, {{HTMLElement("h6")}} und {{HTMLElement("hgroup")}}.

> **Note:** _Notiz:_ Obwohl es meistens Überschrifteninhalt enthält, ist {{HTMLElement("header")}} selbst kein Überschrifteninhalt.

### Gestaltender Inhalt

Gestaltender Inhalt definiert den Text und das Markup, welche er enthält. Folgen von phrasierendem Inhalt sind Paragraphen.

Elemente, die zu dieser Categorie gehören, sind {{HTMLElement("abbr")}}, {{HTMLElement("audio")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("br")}}, {{HTMLElement("button")}}, {{HTMLElement("canvas")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("command")}}, {{HTMLElement("datalist")}}, {{HTMLElement("dfn")}}, {{HTMLElement("em")}}, {{HTMLElement("embed")}}, {{HTMLElement("i")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{HTMLElement("input")}}, {{HTMLElement("kbd")}}, {{HTMLElement("keygen")}}, {{HTMLElement("label")}}, {{HTMLElement("mark")}}, {{MathMLElement("math")}}, {{HTMLElement("meter")}}, {{HTMLElement("noscript")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("q")}}, {{HTMLElement("ruby")}}, {{HTMLElement("samp")}}, {{HTMLElement("script")}}, {{HTMLElement("select")}}, {{HTMLElement("small")}}, {{HTMLElement("span")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{SVGElement("svg")}}, {{HTMLElement("textarea")}}, {{HTMLElement("time")}}, {{HTMLElement("var")}}, {{HTMLElement("video")}}, {{HTMLElement("wbr")}} und einfacher Text (welcher nicht nur aus Leerzeichen-Zeichen besteht).

Einige andere Elemente, die zu dieser Categorie gehören, aber nur, falls eine bestimmte Condition erfüllt ist:

- {{HTMLElement("a")}}, falls es nur phrasierenden Inhalt enthält
- {{HTMLElement("area")}}, falls es das Descendens eines {{HTMLElement("map")}}-Elementes ist
- {{HTMLElement("del")}}, falls es nur phrasierenden Inhalt enthält
- {{HTMLElement("ins")}}, falls es nur phrasierenden Inhalt enthält
- {{HTMLElement("link")}}, falls das [**itemprop**](/de/docs/HTML/Globale_Attribute#itemprop "HTML/Globale Attribute#itemprop")-Attribut geschrieben ist
- {{HTMLElement("map")}}, falls es nur phrasierenden Inhalt enthält
- {{HTMLElement("meta")}}, falls das [**itemprop**](/de/docs/HTML/Globale_Attribute#itemprop "HTML/Globale Attributes#itemprop")-Attribut geschrieben ist.

### Eingebetter Inhalt

Eingebetteter Inhalt importiert eine andere Ressource oder gibt Inhalt einer anderen Markup-Sprache oder Namensraumes in das Document ein. Elemente in dieser Categorie sind: {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{MathMLElement("math")}}, {{HTMLElement("object")}}, {{SVGElement("svg")}}, {{HTMLElement("video")}}.

### Interaktiver Inhalt

Interaktiver Inhalt enthält Elemente, die speziell für Interaktionen mit dem Benutzer gedacht sind. Folgende Elemente geöhren zu dieser Kategorie: {{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("iframe")}}, {{HTMLElement("keygen")}}, {{HTMLElement("label")}}, {{HTMLElement("select")}}, and {{HTMLElement("textarea")}}.
Einige Elemente sind nur unter spezifischen Conditionen in dieser Categorie:

- {{HTMLElement("audio")}}, falls das {{htmlattrxref("controls", "audio")}}-Attribut geschrieben ist
- {{HTMLElement("img")}}, falls das {{htmlattrxref("usemap", "img")}}-Attribut geschrieben ist
- {{HTMLElement("input")}}, falls das {{htmlattrxref("type", "input")}}-Attribut nicht im versteckten Status ist.
- {{HTMLElement("menu")}}, falls das {{htmlattrxref("type", "menu")}}-Attribut im Toolbar-Status ist
- {{HTMLElement("object")}}, falls das {{htmlattrxref("usemap", "object")}}-Attribut geschrieben ist
- {{HTMLElement("video")}}, falls das {{htmlattrxref("controls", "video")}}-Attribut geschrieben ist.

### Fühlbarer Inhalt

A content is palpable when it's neither empty nor hidden. Elements whose model is flow content or phrasing content should have at least one node which is palpable.

### Formularbezogener Inhalt

Formularassoziierter Inhalt umfasst Elemente mit einem Formularbezeichner, welcher durch ein Formularattribut verfügbar gemacht wird. Ein Formularbezeichner ist entweder das enthaltende {{HTMLElement ("form")}} Element oder das Element, dessen ID im Formularattribut angegeben ist.

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}}
- {{HTMLElement("keygen")}}
- {{HTMLElement("label")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

This category contains several sub-categories:

- gelistet
  - : Elements that are listed in the [form.elements](/de/docs/DOM/form.elements "DOM/form.elements") and fieldset.elements IDL collections. Contains {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("keygen")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, and {{HTMLElement("textarea")}}.
- bezeichenbar
  - : Elements that can be associated with {{HTMLElement("label")}} elements. Contains {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("keygen")}}, {{HTMLElement("meter")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}}, and {{HTMLElement("textarea")}}.
- abschickbar
  - : Elements that can be used for constructing the form data set when the form is submitted. Contains {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("keygen")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, and {{HTMLElement("textarea")}}.
- zurücksetzbar
  - : Elements that can be affected when a form is reset. Contains {{HTMLElement("input")}}, {{HTMLElement("keygen")}}, {{HTMLElement("output")}},{{HTMLElement("select")}}, and {{HTMLElement("textarea")}}.

## Transparentes Inhaltsmodell

If an element has a transparent content model, then its contents must be structured such that they would be valid HTML 5, even if the transparent element were removed and replaced by the child elements.

For example, the {{HTMLElement("del")}} and {{HTMLELement("ins")}} elements are transparent:

    <p>We hold these truths to be <del><em>sacred &amp; undeniable</em></del> <ins>self-evident</ins>.</p>

If those elements were removed, this fragment would still be valid HTML (if not correct English).

    <p>We hold these truths to be <em>sacred &amp; undeniable</em> self-evident.</p>

## Andere Inhaltsmodelle

Sectioning root.
