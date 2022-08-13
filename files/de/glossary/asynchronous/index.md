---
title: Asynchron
slug: Glossary/Asynchronous
translation_of: Glossary/Asynchronous
original_slug: Glossary/Asynchron
---
Der Ausdruck **Asynchron** bezieht sich auf das Konzept, dass mehrere Dinge zeitgleich passieren oder mehre, verbundene Dinge geschehen ohne aufeinander zu warten. In der Informatik wird das Wort Asynchron meist in zwei Fällen unterschieden.

- Netzwerk und Kommunikation
  - : Die asynchrone Kommunikation ist eine Methode zum Austausch von Nachrichten zwischen zwei oder mehr Teilnehmern, bei welcher jeder Teilnehmer Nachrichten empfängt und verarbeitet, wann immer dies zweckmäßig oder möglich ist, und nicht sofort nach dem Empfang. Darüber hinaus können Nachrichten gesendet werden, ohne auf eine Bestätigung zu warten, wobei zu beachten ist, dass der Empfänger bei Auftreten eines Problems Korrekturen anfordern oder die Situation auf andere Weise behandeln wird.Auf den Menschen übertragen sind Emails eine asynchrone Kommunikations-Methode; Der Absender sendet eine E-Mail, und der Empfänger liest und beantwortet die Nachricht, wenn er es möchte, und nicht sofort. Beide Seiten können weiterhin Nachrichten senden und empfangen, wann immer sie möchten, anstatt sich aufeinander abstimmen zu müssen.Wenn Software asynchron kommuniziert, fordert ein Programm beispielsweise Informationen von einer anderen Software (z. B. einem Server) an und führt andere Aktionen aus, während auf eine Antwort gewartet wird. Zum Beispiel die Programmiertechnik [AJAX](/de/docs/Web/Guide/AJAX) (Asynchronous JavaScript and {{Glossary ("XML")}}) - heute meist einfach "Ajax", obwohl {{Glossary ("JSON")}} in modernen Anwendungen eher als XML verwendet wird - ist ein Mechanismus, der mit {{Glossary ("HTTP")}} relativ kleine Datenmengen vom Server anfordert. Das Ergebnis wird dann zurückgegeben, wenn es verfügbar ist, und nicht sofort.
- Software Design
  - : Asynchrones Softwaredesign erweitert das Konzept, indem Code erstellt wird, mit dem ein Programm die Ausführung einer Aufgabe neben der ursprünglichen Aufgabe (oder den ursprünglichen Aufgaben) beginnt, ohne anzuhalten, bis diese Aufgabe abgeschlossen ist. Wenn die sekundäre Aufgabe erledigt ist, wird die ursprüngliche Aufgabe mithilfe eines vereinbarten Mechanismus benachrichtigt, damit sie weiß, dass die Arbeit erledigt ist und dass das Ergebnis, falls vorhanden, verfügbar ist.Es gibt eine Reihe von Programmiertechniken zum Implementieren von asynchroner Software. Eine Einführung dazu finden Sie im Artikel [Asynchronous JavaScript](/de/docs/Learn/JavaScript/Asynchronous).

## Learn more

### Technical reference

- [Fetching data from the server](/de/docs/Learn/JavaScript/Client-side_web_APIs/Fetching_data) (Learning Area)
- {{glossary("Synchronous")}}

{{IncludeSubnav("/en-US/docs/Glossary")}}
