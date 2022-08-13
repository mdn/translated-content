---
title: Pseudo-Klassen
slug: Web/CSS/Pseudo-classes
translation_of: Web/CSS/Pseudo-classes
---
{{CSSRef}}

Eine ****Pseudoklasse**** in CSS ist ein Schlüsselbegriff, welcher hinter einen Selektor gestellt wird, um einen besonderen Zustand abzufragen. So steht beispielsweise {{ Cssxref(":hover") }} für Elemente, die gerade mit dem Mauszeiger berührt werden.

Mit Pseudoklassen und Pseudoelementen lässt sich eine Seite nicht nur in Bezug auf die Struktur des Inhalts gestalten, sondern auch im Bezug auf andere Faktoren wie zum Beispiel den Browserverlauf ({{ cssxref(":visited") }}), eingegebene Formulardaten ({{ cssxref(":checked") }}) oder die Position des Mauszeigers ({{ cssxref(":hover") }}).

## Syntax

    selector:pseudo-class {
      property: value;
    }

## Übersicht der standardisierten Pseudoklassen

- {{ Cssxref(":active") }}
- {{ Cssxref(":checked") }}
- {{ Cssxref(":default") }}
- {{ Cssxref(":dir", ":dir()")}}
- {{ Cssxref(":disabled") }}
- {{ Cssxref(":empty") }}
- {{ Cssxref(":enabled") }}
- {{ Cssxref(":first") }}
- {{ Cssxref(":first-child") }}
- {{ Cssxref(":first-of-type") }}
- {{ Cssxref(":fullscreen") }}
- {{ Cssxref(":focus") }}
- {{ Cssxref(":hover") }}
- {{ Cssxref(":indeterminate") }}
- {{ Cssxref(":in-range") }}
- {{ Cssxref(":invalid") }}
- {{ Cssxref(":lang", ":lang()") }}
- {{ Cssxref(":last-child") }}
- {{ Cssxref(":last-of-type") }}
- {{ Cssxref(":left") }}
- {{ Cssxref(":link") }}
- {{ Cssxref(":not", ":not()") }}
- {{ Cssxref(":nth-child", ":nth-child()") }}
- {{ Cssxref(":nth-last-child", ":nth-last-child()") }}
- {{ Cssxref(":nth-last-of-type", ":nth-last-of-type()") }}
- {{ Cssxref(":nth-of-type", ":nth-of-type()") }}
- {{ Cssxref(":only-child") }}
- {{ Cssxref(":only-of-type") }}
- {{ Cssxref(":optional") }}
- {{ Cssxref(":out-of-range") }}
- {{ Cssxref(":read-only") }}
- {{ Cssxref(":read-write") }}
- {{ Cssxref(":required") }}
- {{ Cssxref(":right") }}
- {{ Cssxref(":root") }}
- {{ Cssxref(":scope") }}
- {{ Cssxref(":target") }}
- {{ Cssxref(":valid") }}
- {{ Cssxref(":visited") }}

## Spezifikation

| Spezifikation                            | Status                               | Anmerkung                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{ SpecName('Fullscreen') }}     | {{ Spec2('Fullscreen') }}     | `:fullscreen` hinzugefügt                                                                                                                                                                                                                                                                                                                                                                                                          |
| {{ SpecName('HTML WHATWG') }} | {{ Spec2('HTML WHATWG') }} | Keine Änderungen seit {{ SpecName('HTML5 W3C') }}.                                                                                                                                                                                                                                                                                                                                                                        |
| {{SpecName('CSS4 Selectors')}} | {{Spec2('CSS4 Selectors')}} | `:any-link`, `:local-link`, `:scope`, `:active-drop-target`, `:valid-drop-target`, `:invalid-drop-target`, `:current`, `:past`, `:future`, `:placeholder-shown`, `:user-error`, `:blank`, `:nth-match()`, `:nth-last-match()`, `:nth-column()`, `:nth-last-column()`und `:matches()` hinzugefügt. Keine Änderungen der bisherigen Pseudoklassen aus {{SpecName('CSS3 Selectors')}} und {{SpecName('HTML5 W3C')}}. |
| {{ SpecName('HTML5 W3C') }}     | {{ Spec2('HTML5 W3C') }}     | `:link`, `:visited`, `:active`, `:enabled`, `:disabled`, `:checked` und `:indeterminate` geändert `:default`, `:valid`, `:invalid`, `:in-range`, `:out-of-range`, `:required`, `:optional`, `:read-only`, `:read-write` und `:dir()` hinzugefügt                                                                                                                                                                                   |
| {{ SpecName('CSS3 Basic UI') }} | {{ Spec2('CSS3 Basic UI') }} | `:default`, `:valid`, `:invalid`, `:in-range`, `:out-of-range`, `:required`, `:optional`, `:read-only` und `:read-write` hinzugefügt                                                                                                                                                                                                                                                                                               |
| {{SpecName('CSS3 Selectors')}} | {{Spec2('CSS3 Selectors')}} | `:target`, `:root`, `:nth-child()`, `:nth-last-of-child()`, `:nth-of-type()`, `:nth-last-of-type()`, `:last-child`, `:first-of-type`, `:last-of-type`, `:only-child`, `:only-of-type`, `:empty` und `:not()` Defined the syntax of `:enabled`, `:disabled`, `:checked` und `:indeterminate`, hinzugefügt. Keine Änderungen der bisherigen Pseudoklassen aus {{SpecName('CSS2.1')}}.                                          |
| {{SpecName('CSS2.1')}}             | {{Spec2('CSS2.1')}}             | `:lang()`, `:first-child`, `:hover` und `:focus` hinzugefügt. Keine Änderungen der bisherigen Pseudoklassen aus {{SpecName('CSS1')}}.                                                                                                                                                                                                                                                                                      |
| {{SpecName('CSS1')}}             | {{Spec2('CSS1')}}             | `:link`, `:visited` und `:active` hinzugefügt                                                                                                                                                                                                                                                                                                                                                                                      |
