---
title: CSS Selectors
slug: Web/CSS/CSS_Selectors
tags:
  - CSS
  - CSS Selektoren
  - Referenz
  - Selectors
  - Selektoren
  - Übersicht
translation_of: Web/CSS/CSS_Selectors
---
{{CSSRef}}

**Selektoren** definieren, auf welche Elemente eine Reihe von CSS Regeln angewendet wird.

## Grundlegende Selektoren

- [Typselektoren](/de/docs/Web/CSS/Type_selectors)
  - : Dieser grundlegende Selektor wählt alle Elemente aus, die den angegebenen _Namen_ matchen.
    **Syntax:** `eltname`
    **Beispiel:** `input` matcht jedes {{HTMLElement('input')}} Element.
- [Klassenselektoren](/de/docs/Web/CSS/Class_selectors)
  - : Dieser grundlegende Selektor wählt Elemente anhand ihres `class` Attributs aus.
    **Syntax:** `.classname`
    **Beispiel:** `.index` matcht jedes Element, das die Klasse `index` besitzt (wahrscheinlich definiert durch ein `class="index"` Attribut oder ähnliches).
- [ID-Selektoren](/de/docs/Web/CSS/ID_selectors)
  - : Dieser grundlegende Selektor wählt Knoten anhand des Wertes ihres `id` Attributs aus. Es sollte nur ein Element mit der angegebenen ID in einem Dokument geben.
    **Syntax:** `#idname`
    **Beispiel:** `#toc` matcht das Element, das die ID `toc` hat (wahrscheinlich definiert durch ein `id="toc"` Attribut oder ähnliches).
- [Universalselektoren](/de/docs/Web/CSS/Universal_selectors)
  - : Dieser grundlegende Selektor wählt alle Knoten aus. Er existiert auch in einer Ein-Namensraum- und einer Alle-Namensräume-Variante.
    **Syntax:** `* ns|* *|*`
    **Beispiel:** `*` matcht alle Elemente des Dokuments.
- [Attributselektoren](/de/docs/Web/CSS/Attributselektoren)
  - : Dieser grundlegende Selektor wählt Knoten anhand des Wertes eines ihrer Attribute aus.
    **Syntax:** `[attr] [attr=value] [attr~=value] [attr|=value] [attr^=value] [attr$=value] [attr*=value]`
    **Beispiel:** `[autoplay]` matcht alle Elemente, deren `autoplay` Attribut (auf einen beliebigen Wert) gesetzt ist.

## Kombinatoren

- [Angrenzende Geschwisterselektoren](/de/docs/Web/CSS/Adjacent_sibling_selectors)
  - : Der `'+'`-Kombinator wählt Knoten aus, die direkt dem davor angegebenen Element folgen.
    **Syntax:** `A + B`
    **Beispiel:** `h2 + p` matcht jedes {{HTMLElement('p')}}, das direkt einem {{HTMLElement('h2')}} folgt.
- [Allgemeine Geschwisterselektoren](/de/docs/Web/CSS/General_sibling_selectors)
  - : Der `'~'`-Kombinator wählt Knoten aus, die dem davor angegeben Element (nicht zwingend direkt) folgen, falls sie sich dasselbe Elternelement teilen.
    **Syntax:** `A ~ B`
    **Beispiel:** `p ~ span` matcht alle {{HTMLElement('span')}} Elemente, die einem {{HTMLElement('p')}} Element innerhalb desselben Elements folgen.
- [Kindselektoren](/de/docs/Web/CSS/Child_selectors)
  - : Der `'>'`-Kombinator wählt Knoten aus, die direkte Kinder des davor angegebenen Elements sind.
    **Syntax:** `A > B`
    **Beispiel:** `ul > li` matcht alle {{HTMLElement('li')}} Elemente, die innerhalb eines {{HTMLElement('ul')}} Element sind.
- [Nachfahrenselektoren](/de/docs/Web/CSS/Descendant_selectors)
  - : Der `' '`-Kombinator wählt Knoten aus, die (nicht zwangsweise direkte) Kinder des davor angegebenen Elements sind.
    **Syntax:** `A B`
    **Beispiel:** `div span` matcht jedes {{HTMLElement('span')}} Element, das innerhalb eines {{HTMLElement('div')}} Elements ist.

## Pseudoelemente

[Pseudoelemente](/de/docs/Web/CSS/Pseudo-elements) sind Abstraktionen des Baums, die Elemente außerhalb von dem, was HTML macht, repräsentieren. Zum Beispiel hat HTML kein Element, das den ersten Buchstaben oder die erste Zeile eines Absatzes beschreibt, oder die Markierung in einer Liste. Pseudoelemente repräsentieren diese Elemente und erlauben es, ihnen CSS Regeln zuzuweisen: dadurch können diese Elemente unabhängig gestylt werden.

## Pseudoklassen

[Pseudoklassen](/de/docs/Web/CSS/Pseudo-classes) erlauben es, Elemente anhand von Informationen auszuwählen, die nicht im Dokumentbaum hinterlegt sind, wie ein Status, oder die schwer zu extrahieren sind. Z. B. ob ein Link zuvor bereits besucht wurde oder nicht.

## Spezifikationen

| Spezifikation                                        | Status                               | Kommentar                |
| ---------------------------------------------------- | ------------------------------------ | ------------------------ |
| {{SpecName('CSS4 Selectors')}}             | {{Spec2('CSS4 Selectors')}} |                          |
| {{SpecName('CSS3 Selectors')}}             | {{Spec2('CSS3 Selectors')}} |                          |
| {{SpecName('CSS2.1', 'selector.html')}} | {{Spec2('CSS2.1')}}             |                          |
| {{SpecName('CSS1')}}                         | {{Spec2('CSS1')}}             | Ursprüngliche Definition |

## Browser Kompatibilität

{{Compat}}
