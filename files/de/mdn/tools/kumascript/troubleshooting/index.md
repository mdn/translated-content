---
title: Beheben von KumaScript Fehlern
slug: MDN/Tools/KumaScript/Troubleshooting
translation_of: MDN/Tools/KumaScript/Troubleshooting
original_slug: MDN/Kuma/Beheben_von_KumaScript_Fehlern
---
{{MDNSidebar}}

[KumaScript](/de/docs/MDN/Kuma/Introduction_to_KumaScript) Fehler plaziert in großen roten Kästen wirken auf die Leser abstossend. Zum Glück kann jedoch jeder mit einem MDN Konto solche Fehler beseitigen. Wenn ein Fehler auf einer Seite auftritt, landet die betreffende Seite in der List der [Dokumente mit Fehlern](/docs/with-errors). Seitenauthoren gehen diese Seiten regelmäßig durch um Fehler zu finden und zu beseitigen. Dieser Artikel erläutert vier Typen von KumaScript Fehlern und beschreibt einige Methoden zu ihrer Beseitigung.

## DocumentParsingError

`DocumentParsingError` tritt auf, wenn KumaScript etwas in dem Dokument nicht versteht. Im allgemeinen handelt es sich um einen Syntaxfehler in einem [Makro](/de/docs/MDN/Contribute/Content/Macros).

Beispiele:

- Geschweifte Klammern ohne Aufruf eines Makros.
  - : Falls \\{ in einem Dokument stehen soll ohne ein Makro aufzurufen, kann man einen Schrägstrich \ voranstellen: `\\{`
- Sonderzeichen in einem Makro Parameter.
  - : Wenn " oder \ innerhalb eines Makro Parameters stehen, kann ein Schrägstrich \ vorangestellt werden: `\\` oder `\"`
- Fehlende Kommas zwischen den Makro Parametern.
  - : Makro Parameters sind mit Kommas (,) zu trennen, jedoch sollte am Ende der Parameterliste kein Komma stehen: z. B. `\{\{compat("html.elements.link", 2)}}`.
- HTML Tags innerhalb eines Makro Aufrufs
  - : Makros werden oft durch Textformatiertungen zerstört. `So kann z. B. das Tag </code>` in den Quellcode des Makros geraten. Die Quellcode Ansicht (source view) zeigt die zu beseitigenden Formatierungselemente.

<!---->

## TemplateLoadingError

`TemplateLoadingError` Fehler treten auf, wenn KumaScript nicht weiß, welches [Makro](/de/docs/MDN/Contribute/Content/Macros) in die Seite geladen soll.

Beispiele:

- Typos in der Benennung von Makro oder Namensänderungen von Makros.
  - : Es gibt eine eigene Liste von [Makros für MDN](/de/docs/MDN/Contribute/Content/Custom_macros), die das gesuchte Makro mit korrekter bzw. neuer Schreibweise enthalten kann.

> **Note:** **Tipp:** Ein gesuchtes Makro ist leicht und schnell durch Hinzufügen eines [Suchbegriffs (search keyword)](http://kb.mozillazine.org/Using_keyword_searches) in Firefox zu finden. <<\<MEHR DAZU DEMNÄCHST>>

## TemplateExecutionError

`TemplateExecutionError` Fehler treten auf, wenn KumaScript durch einen Fehler im Makro betroffen wird. Diese Fehler können nur durch Benutzer mit Admin Rechten beseitigt werden, und sollten gemeldet werden (bug report).

Vor dem Schreiben des Fehlerreports sollte man überprüfen, ob der Fehler nicht bereits beseitigt wurde. Folgendermassen zwingt man KumaScript die Seite neu zu laden: <kbd>Shift</kbd> gedrückt halten und zum Neuladen der Seite drücken: <kbd>Shift</kbd> + <kbd>Ctrl</kbd> + <kbd>R</kbd> unter Windows/Linux, sowie <kbd>Shift</kbd> + <kbd>Cmd</kbd> + <kbd>R</kbd> auf einem Mac.

Wenn derselbe Fehler wieder auftritt [sollte ein Fehlerbericht (bug report) erstellte werden](https://bugzilla.mozilla.org/enter_bug.cgi?product=Mozilla_Developer_Network&component=General#h=detail|bug). Dieser Bericht sollte die URL der Seite sowie die Fehlermeldung enthalten.

## Fehler & Unbekannt

In diese Kategory fallen alle anderen Fehler.

Diese Fehler sollten auf die selbe Art wie [TemplateExecutionError](#TemplateExecutionError) untersucht und beseitigt werden.
