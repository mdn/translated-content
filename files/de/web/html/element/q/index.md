---
title: <q>
slug: Web/HTML/Element/q
tags:
  - Element
  - HTML
  - HTML Text-Level Semantik
  - Referenz
  - Web
translation_of: Web/HTML/Element/q
---
{{HTMLRef}}

## Übersicht

Das **HTML `<q>` Element** (oder _HTML Quote Element_) indiziert, dass es sich bei dem eingeschlossenen Text um ein kurzes Zitat handelt. Dieses Element ist speziell für kurze Zitate gedacht, die keinen Umbruch benötigen; für längere Zitate sollte das {{HTMLElement("blockquote")}} Element verwendet werden.

| [Inhaltskategorien](/de/docs/HTML/Content_categories "HTML/Content_categories") | [Fließender Inhalt](/de/docs/HTML/Content_categories#Flow_content "HTML/Content categories#Flow content"), [Formulierungsinhalt](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content categories#Phrasing content"), greifbarer Inhalt. |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Erlaubter Inhalt                                                                | [Formulierungsinhalt](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content_categories#Phrasing_content").                                                                                                                               |
| Tag Auslassung                                                                  | {{no_tag_omission}}                                                                                                                                                                                                                           |
| Erlaubte Elternelemente                                                         | Jedes Element, dass [Formulierungsinhalt](/de/docs/HTML/Content_categories#Phrasing_content "HTML/Content_categories#Phrasing_content") erlaubt.                                                                                                   |
| DOM Schnittstelle                                                               | {{domxref("HTMLQuoteElement")}}                                                                                                                                                                                                           |

## Attribute

Dieses Element schließt nur [globale Attribute](/de/docs/HTML/Global_attributes "HTML/Global attributes") ein.

- {{htmlattrdef("cite")}}
  - : Der Wert des Attributs ist eine URL, die zu dem Quelldokument oder der Quellnachricht der Information führt. Dieses Attribut zielt darauf ab, auf Informationen zu zeigen, die den Kontext oder die Referenz des Zitats näher erläutern.

## Beispiel

```html
<p>Jedes mal, wenn Kenny stirbt, sagt Stan
   <q cite="http://en.wikipedia.org/wiki/Kenny_McCormick#Cultural_impact">
     Oh mein Gott, sie haben Kenny getötet!
   </q>.
</p>
```

Dieser HTML Code liefert folgendes Ergebnis:

Jedes mal, wenn Kenny stirbt, sagt Stan "Oh mein Gott, sie haben Kenny getötet!".

## Spezifikationen

| Spezifikation                                                                                                    | Status                           | Kommentar |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------- |
| {{SpecName('HTML WHATWG', 'text-level-semantics.html#the-q-element', '&lt;q&gt;')}} | {{Spec2('HTML WHATWG')}} |           |
| {{SpecName('HTML5 W3C', 'text-level-semantics.html#the-q-element', '&lt;q&gt;')}}     | {{Spec2('HTML5 W3C')}}     |           |
| {{SpecName('HTML4.01', 'struct/text.html#h-9.2.2', '&lt;q&gt;')}}                         | {{Spec2('HTML4.01')}}     |           |

## Browser Kompatibilität

{{Compat}}

### Anmerkungen

Die meisten modernen Standard-basierten Browser, wie Mozilla Firefox, Opera, und Safari sollten Anführungszeichen um das `<q>` Element hinzufügen.

Manche Browser, wie der Internet Explorer, ändern die Darstellung nicht, ermöglichen jedoch eine Darstellungsregel für Zitate festzulegen.

## Siehe auch

- Das {{HTMLElement("blockquote")}} Element für lange Zitate.
- Das {{HTMLElement("cite")}} Element für Quellangaben.
