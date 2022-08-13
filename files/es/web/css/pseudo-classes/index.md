---
title: Pseudo-classes
slug: Web/CSS/Pseudo-classes
tags:
  - CSS
  - Referencia CSS
  - Selectores
  - pseudo-clases
translation_of: Web/CSS/Pseudo-classes
---
{{ CSSRef() }}

Una **pseudoclase CSS** es una palabra clave que se añade a los selectores y que especifica un estado especial del elemento seleccionado. Por ejemplo, {{ Cssxref(":hover") }} aplicará un estilo cuando el usuario haga hover sobre el elemento especificado por el selector.

    div:hover {
      background-color: #F89B4D;
    }

Las pseudoclases, junto con los pseudoelementos, permiten aplicar un estilo a un elemento no sólo en relación con el contenido del árbol de documento, sino también en relación a factores externos como el historial del navegador ({{ cssxref(":visited") }}, por ejemplo), el estado de su contenido (como {{ cssxref(":checked") }} en algunos elementos de formulario), o la posición del ratón (como {{ cssxref(":hover") }} que permite saber si el ratón está encima de un elemento o no).

> **Nota:** En lugar de usar pseudoclases, {{cssxref("pseudo-elements")}} puede usarse para dar estilo a una _parte específica_ de un elemento.

## Sintaxis

    selector:pseudoclase { propiedad: valor; }

Al igual que las clases, se pueden concatenar la cantidad de pseudoclases que se deseen en un selector.

## Indice de las pseudo-clases estándar

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

## Especificaciones

| Especificación                           | Estado                               | Comentario                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------- | ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{ SpecName('Fullscreen') }}     | {{ Spec2('Fullscreen') }}     | Definido `:fullscreen`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| {{ SpecName('HTML WHATWG') }} | {{ Spec2('HTML WHATWG') }} | Ningún cambio desde {{ SpecName('HTML5 W3C') }}.                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| {{SpecName('CSS4 Selectors')}} | {{Spec2('CSS4 Selectors')}} | Definido `:any-link`, `:local-link`, `:scope`, `:active-drop-target`, `:valid-drop-target`, `:invalid-drop-target`, `:current`, `:past`, `:future`, `:placeholder-shown`, `:user-error`, `:blank`, `:nth-match()`, `:nth-last-match()`, `:nth-column()`, `:nth-last-column()`, and `:matches()`. Ningún cambio significativo para las pseudo-clases difinidas en {{SpecName('CSS3 Selectors')}} y en {{SpecName('HTML5 W3C')}} (Aunque el significado semántico no fuera absorbido). |
| {{ SpecName('HTML5 W3C') }}     | {{ Spec2('HTML5 W3C') }}     | Define el significado semántico en el contexto HTML de `:link`, `:visited`, `:active`, `:enabled`, `:disabled`, `:checked`, and `:indeterminate`. Definido `:default`, `:valid`, `:invalid`, `:in-range`, `:out-of-range`, `:required`, `:optional`, `:read-only`, `:read-write`, y `:dir()`.                                                                                                                                                                                                         |
| {{ SpecName('CSS3 Basic UI') }} | {{ Spec2('CSS3 Basic UI') }} | Definido `:default`, `:valid`, `:invalid`, `:in-range`, `:out-of-range`, `:required`, `:optional`, `:read-only`, y `:read-write`, pero sin el significado semántico asociado.                                                                                                                                                                                                                                                                                                                         |
| {{SpecName('CSS3 Selectors')}} | {{Spec2('CSS3 Selectors')}} | Definido `:target`, `:root`, `:nth-child()`, `:nth-last-of-child()`, `:nth-of-type()`, `:nth-last-of-type()`, `:last-child`, `:first-of-type`, `:last-of-type`, `:only-child`, `:only-of-type`, `:empty`, y `:not()`. Define la sintaxis de `:enabled`, `:disabled`, `:checked`, y `:indeterminate`, pero sin el significado semántico asociado. Ningún cambio significativo para las pseudo-clases difinidas en {{SpecName('CSS2.1')}}.                                                        |
| {{SpecName('CSS2.1')}}             | {{Spec2('CSS2.1')}}             | Definido `:lang()`, `:first-child`, `:hover`, y `:focus`. Ningún cambio significativo para las pseudo-clases difinidas en {{SpecName('CSS1')}}.                                                                                                                                                                                                                                                                                                                                               |
| {{SpecName('CSS1')}}             | {{Spec2('CSS1')}}             | Definido `:link`, `:visited`, y `:active`, pero sin el significado semántico asociado.                                                                                                                                                                                                                                                                                                                                                                                                                |
