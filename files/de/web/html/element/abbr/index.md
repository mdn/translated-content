---
title: '<abbr>: Das Abkürzungselement'
slug: Web/HTML/Element/abbr
tags:
  - Element
  - HTML
  - HTML Textlevel Semantik
  - Referenz
  - Web
translation_of: Web/HTML/Element/abbr
---
{{HTMLRef}}

Das **HTML-Abkürzungselement** (**`<abbr>`**) steht für eine Abkürzung oder ein Akronym. Das optionale Attribut {{htmlattrxref("title")}} kann eine Erweiterung oder Beschreibung für die Abkürzung bereitstellen. Wenn vorhanden, `title` diese vollständige Beschreibung und nichts anderes enthalten.

{{EmbedInteractiveExample("pages/tabbed/abbr.html", "tabbed-shorter")}}

Der Artikel _[Wie Abkürzungen markiert und verständlich gemacht werden](/de/Learn/HTML/Howto/Mark_abbreviations_and_make_them_understandable)_, ist ein Leitfaden zur Verwendung von `<abbr>` und verwandten Elementen.

| [Inhaltskategorien](/de/docs/Web/HTML/Content_categories) | [Fließender Inhalt](/de/docs/Web/HTML/Content_categories#Flow_content), [Formulierungsinhalt](/de/docs/Web/HTML/Content_categories#Phrasing_content), fühlbarer Inhalt |
| --------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                          | [Formulierungsinhalt](/de/docs/Web/HTML/Content_categories#Phrasing_content)                                                                                           |
| Tag Wegfall                                               | {{no_tag_omission}}                                                                                                                                               |
| Erlaubte Elternelemente                                   | Jedes Element, das Formulierungsinhalt akzeptiert                                                                                                                      |
| Erlaubte ARIA Rollen                                      | Alle                                                                                                                                                                   |
| DOM-Schnittstelle                                         | {{domxref("HTMLElement")}}                                                                                                                                   |

## Attribute

Dieses Element unterstützt nur die [globalen Attribute](/de/docs/Web/HTML/Global_attributes). Das Attribut {{htmlattrxref("title")}} hat bei Verwendung mit dem `<abbr>`-Element eine bestimmte semantische Bedeutung. Es _muss_ eine vollständige von Menschen lesbare Beschreibung oder Erweiterung der Abkürzung enthalten. Dieser Text wird von Browsern häufig als Tooltip dargestellt, wenn der Mauszeiger über das Element bewegt wird.

Jedes `<abbr>`-Element, das Sie verwenden, ist unabhängig von allen anderen; wenn Sie `title` für eines angeben, wird derselbe Erweiterungstext nicht automatisch an ein anderes mit demselben Inhaltstext angehängt.

## Nutzungshinweise

### Typische Anwendungsfälle

Es ist sicherlich nicht erforderlich, dass alle Abkürzungen mit `<abbr>` markiert werden. Es gibt jedoch einige Fälle, in denen es hilfreich ist, dies zu tun:

- Wenn eine Abkürzung verwendet wird und Sie eine Erweiterung oder Definition außerhalb des Dokumentenflusses bereitstellen möchten, verwenden Sie `<abbr>` mit einer entsprechenden {{htmlattrxref("title")}}.
- Um eine Abkürzung zu definieren, die dem Leser möglicherweise nicht vertraut ist, legen Sie den Begriff mit `<abbr>` und entweder einem `title`-Attribut oder einem Inline-Text vor, der die Definition bereitstellt.
- Wenn die Anwesenheit einer Abkürzung im Text semantisch notiert werden muss, ist das `<abbr>`-Element hilfreich. Dies kann wiederum für Styling- oder Scripting-Zwecke verwendet werden.
- Sie können `<abbr>` zusammen mit {{HTMLElement("dfn")}} verwenden, um Definitionen für Begriffe festzulegen, die Abkürzungen oder Akronyme sind. Siehe das Beispiel [Eine Abkürzung definieren](#eine_abkürzung_definieren) unten.

### Überlegungen zur Grammatik

Verwenden Sie in Sprachen mit {{interwiki ("wikipedia", "Numerus")}} (d. h. Sprachen, in denen die Anzahl der Elemente die Grammatik eines Satzes beeinflusst) die gleiche grammatikalische Nummer in Ihrem `title`-Attribut wie in Ihrem `<abbr>`-Element. Dies ist besonders wichtig bei Sprachen mit mehr als zwei Numeri, wie z. B. Arabisch, ist aber auch in Englisch relevant.

## Standarddarstellung

Der Zweck dieses Elements ist ausschließlich für den Autor gedacht und wird von allen Browsern standardmäßig inline ({{cssxref('display')}}`: inline`) angezeigt. Die Standardeinstellung ist jedoch von Browser zu Browser unterschiedlich:

- Manche Browser, wie der Internet Explorer, stellen es nicht anders als das {{HTMLElement("span")}}-Element dar.
- Opera, Firefox, Chrome und einige andere fügen dem Inhalt des Elements eine gepunktete Unterstreichung hinzu.
- Einige Browser fügen nicht nur eine gepunktete Unterstreichung hinzu, sondern setzen sie auch in Kapitälchen ein. Um dies zu vermeiden, fügen Sie Ihrem CSS etwas wie [`font-variant`](/de/docs/Web/CSS/font-variant "The CSS Eigenschaft font-variant property selects a normal, or small-caps face from a font family. Setting font-variant is also possible by using the font shorthand.")`: none` hinzu.

## Beispiele

### Eine Abkürzung semantisch markieren

Um eine Abkürzung zu markieren, ohne eine Erweiterung oder Beschreibung anzugeben, verwenden Sie einfach `<abbr>` ohne Attribute, wie in diesem Beispiel dargestellt.

#### HTML

```html
<p>Using <abbr>HTML</abbr> is fun and easy!</p>
```

#### Ergebnis

{{EmbedLiveSample("Marking_up_an_abbreviation_semantically")}}

### Abkürzungen formatieren

Sie können CSS verwenden, um einen benutzerdefinierten Stil festzulegen, der für Abkürzungen verwendet wird, wie in diesem einfachen Beispiel gezeigt.

#### HTML

```html
<p>Using <abbr>CSS</abbr>, you can style your abbreviations!</p>
```

#### CSS

```css
abbr {
  font-variant: all-small-caps;
}
```

#### Ergebnis

{{EmbedLiveSample("Styling_abbreviations")}}

### Eine Erweiterung bereitstellen

Durch das Hinzufügen eines Attributs {{htmlattrxref("title")}} können Sie eine Erweiterung oder Definition für die Abkürzung oder das Akronym angeben.

#### HTML

```html
<p>Ashok's joke made me <abbr title="Laugh Out Loud">LOL</abbr> big
time.</p>
```

#### Ergebnis

{{EmbedLiveSample("Providing_an_expansion")}}

### Eine Abkürzung definieren

Sie können `<abbr>` zusammen mit {{HTMLElement("dfn")}} verwenden, um eine Abkürzung formal zu definieren, wie hier gezeigt.

#### HTML

```html
<p><dfn id="html"><abbr title="HyperText Markup Language">HTML</abbr>
</dfn> is a markup language used to create the semantics and structure
of a web page.</p>

<p>A <dfn id="spec">Specification</dfn>
(<abbr title="Specification">spec</abbr>) is a document that outlines
in detail how a technology or API is intended to function and how it is
accessed.</p>
```

#### Ergebnis

{{EmbedLiveSample("Defining_an_abbreviation", 600, 120)}}

Ausführlichere Beispiele finden Sie im Artikel _[Wie Abkürzungen markiert und verständlich gemacht werden](/de/Learn/HTML/Howto/Mark_abbreviations_and_make_them_understandable)_.

## Barrierefreiheit

Wenn Sie das Akronym oder die Abkürzung bei der ersten Verwendung auf einer Seite vollständig ausschreiben, hilft dies den Menschen, sie zu verstehen, insbesondere wenn es sich um technische Inhalte oder um Fachjargon handelt.

#### Beispiel

```html
<p>JavaScript Object Notation (<abbr>JSON</abbr>) is a lightweight data-interchange format.</p>
```

Dies ist besonders hilfreich für Personen, die mit der Terminologie oder den inhaltlichen Begriffen nicht vertraut sind, Personen, die sich mit der Sprache noch nicht auskennen, und Menschen mit kognitiven Hürden.

## Spezifikationen

| Specification                                                                                                        | Status                           | Comment |
| -------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-abbr-element', '&lt;abbr&gt;')}}             | {{Spec2('HTML WHATWG')}} |         |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-abbr-element', '&lt;abbr&gt;')}} | {{Spec2('HTML5 W3C')}}     |         |
| {{SpecName('HTML4.01', 'struct/text.html#edef-ABBR', '&lt;abbr&gt;')}}                         | {{Spec2('HTML4.01')}}     |         |

## Browserkompatibilität

{{Compat("html.elements.abbr")}}

## Siehe auch

- [Benutzung des `<abbr>`-Elements](/de/Learn/HTML/Element/abbr)
- Andere Elemente, die [Semantik auf Textebene](/de/docs/Web/HTML/Text_level_semantics_conveying_elements) vermitteln: {{HTMLElement("a")}}, {{HTMLElement("em")}}, {{HTMLElement("strong")}}, {{HTMLElement("small")}}, {{HTMLElement("cite")}}, {{HTMLElement("q")}}, {{HTMLElement("dfn")}}, {{HTMLElement("time")}}, {{HTMLElement("code")}}, {{HTMLElement("var")}}, {{HTMLElement("samp")}}, {{HTMLElement("kbd")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("b")}}, {{HTMLElement("i")}}, {{HTMLElement("mark")}}, {{HTMLElement("ruby")}}, {{HTMLElement("rp")}}, {{HTMLElement("rt")}}, {{HTMLElement("bdo")}}, {{HTMLElement("span")}}, {{HTMLElement("br")}}, {{HTMLElement("wbr")}}.
- Das veraltete Element {{HTMLElement("acronym")}}, dessen Verantwortlichkeiten in `<abbr>` zusammengefasst wurden
