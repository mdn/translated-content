---
title: Konsistente Listeneinrückung
slug: Web/CSS/CSS_Lists_and_Counters/Consistent_list_indentation
tags:
  - Anleitung
  - CSS
  - Intermediate
  - NeedsUpdate
translation_of: Web/CSS/CSS_Lists_and_Counters/Consistent_list_indentation
original_slug: Web/CSS/CSS_Lists_and_Counters/Konsistente_Listeneinrückung
---
{{CSSRef}}

Eine der häufigsten Stiländerungen, die auf Listen angewendet werden, ist eine Änderung der Einrückungsweite — d. h. wie weit die Listeneinträge nach rechts verschoben sind. Dies führt oft zu Frustration, da das, was in einem Browser funktioniert, in einem anderen oft nicht denselben Effekt hat. Wenn zum Beispiel angegeben wird, dass Listen keinen linken Außenabstand haben, verschieben sie sich im Internet Explorer, bleiben jedoch hartnäckig am selben Platz in Gecko-basierten Browsern. Dieser Artikel hilft, die Probleme zu verstehen, die auftreten können, und wie man diese verhindert.

Um zu verstehen, warum dies der Fall ist, und noch wichtiger, wie das Problem generell vermieden werden kann, ist es notwendig, die Details der Listenerstellung zu untersuchen.

## Eine Liste erstellen

Zunächst betrachten wir einen einzelnen Listeneintrag. Dieser Listeneintrag hat kein Aufzählungszeichen (auch bekannt als "Bullet") und ist noch nicht Teil einer Liste. Er hängt allein in der Leere, schlicht und einfach, wie in Abbildung 1 gezeigt.

![Abbildung 1](/@api/deki/files/619/=Consistent-list-indentation-figure1.gif)

Der gepunktete rote Rahmen repräsentiert die äußeren Ränder des Inhaltsbereichs des Listeneintrags. Erinnere dich, dass der Listeneintrag zu diesem Zeitpunkt weder einen Innenabstand noch Ränder besitzt. Falls wir zwei oder mehr Listeneinträge hinzufügen, erhalten wir als Ergebnis etwas wie in Abbildung 2.

![Abbildung 2](/@api/deki/files/620/=Consistent-list-indentation-figure2.gif)

Jetzt umschließen wir diese durch ein Elternelement; in diesem Fall, umschließen wir sie durch eine ungeordnete Liste (d. h. `<ul>`). Laut dem CSS Boxmodell müssen die Boxen von Listeneinträgen innerhalb des Inhaltsbereichs des Elternelements dargestellt werden. Da das Elternelement aktuell weder Innen- noch Außenabstände hat, erhalten wir als Ergebnis das in Abbildung 3 Gezeigte.

![Abbildung 3](/@api/deki/files/621/=Consistent-list-indentation-figure3.gif)

Hier zeigt uns der gepunktete blaue Rahmen die Ränder des Inhaltsbereichs des `<ul>` Elements. Da wir keinen Innenabstand für das `<ul>` Element haben, umschließt sein Inhalt die drei Listeneinträge passend.

Nun fügen wir Listenaufzählungszeichen hinzu. Da es sich hierbei um eine ungeordnete Liste handelt, fügen wir gewöhnliche gefüllte Kreis-"Bullets" hinzu, wie in Abbildung 4 dargestellt.

![Abbildung 4](/@api/deki/files/622/=Consistent-list-indentation-figure4.gif)

Visuell sind die Aufzählungszeichen _außerhalb_ des Inhaltsbereichs des `<ul>`, jedoch spielt dies hier keine Rolle. Der Hauptpunkt ist, dass die Aufzählungszeichen außerhalb der "Hauptbox" des `<li>` Elements platziert sind, nicht des `<ul>`. Sie sind sozusagen Anhängsel der Listeneinträge, die außerhalb des Inhaltsbereichs des `<li>` liegen, jedoch trotzdem am `<li>` hängen.

Dies ist der Grund, warum in allen Browsern außer dem Internet Explorer für Windows die Aufzählungszeichen außerhalb der Rahmen eines `<li>` Elements liegen, vorausgesetzt, der Wert von `list-style-position` ist `outside`. Falls er zu `inside` geändert wird, werden die Aufzählungszeichen innerhalb des Inhalts des `<li>`s gezogen, obwohl sie eine Inlinebox sind, die am Anfang des `<li>` platziert ist.

## Doppelt einrücken

Wie wird all dies nun im Dokument dargestellt? Im Moment haben wir eine Situation analog zu diesen Stilen:

```css
ul, li {margin-left: 0; padding-left: 0;}
```

Falls diese Liste so wie sie ist in ein Dokument eingebunden würde, gäbe es keine sichtbare Einrückung und die Aufzählungszeichen liefen Gefahr, am linken Rand des Browserfensters herauszufallen.

Um dies zu vermeiden und eine Einrückung zu erhalten, gibt es nur drei Möglichkeiten für Browserhersteller.

1.  Gib jedem `<li>` Element einen linken Außenabstand.
2.  Gib dem `<ul>` Element einen linken Außenabstand.
3.  Gib dem `<ul>` Element einen linken Innenabstand.

Wie sich herausstellt, hat niemand auf die erste Option zurückgegriffen. Die zweite Option wurde von Internet Explorer für Windows und Macintosh und Opera gewählt. Die dritte wird von Gecko und allen darauf basierenden Browsern verwendet.

Lass uns die beiden Herangehensweisen genauer betrachten. Im Internet Explorer und Opera werden die Listen durch das Setzen eines linken Außenabstands von 40 Pixeln für das `<ul>` Element gesetzt. Falls wir dem `<ul>` Element eine Hintergrundfarbe zuweisen und die Rahmen der Listeneinträge und `<ul>` unverändert lassen, erhalten wir das Ergebnis, das in Abbildung 5 gezeigt wird.

![Abbildung 5](/@api/deki/files/623/=Consistent-list-indentation-figure5.gif)

Im Gegensatz dazu setzt Gecko einen linken _Innenabstand_ von 40 Pixeln für das `<ul>` Element. Werden die exakt gleichen Stile benutzt, die zur Erzeugung von Abbildung 5 verwendet wurden, erhalten wir beim Laden des Beispiels in Gecko-basierten Browsern Abbildung 6.

![Abbildung 6](/@api/deki/files/624/=Consistent-list-indentation-figure6.gif)

Wie wir sehen können, bleiben die Aufzählungszeichen an den `<li>` Elementen hängen, unabhängig davon, wo sie sind. Der Unterschied liegt ausschließlich in der Darstellung des `<ul>`. Wir können den Unterschied nur sehen, wenn wir versuchen, einen Hintergrund oder einen Rahmen für das `<ul>` Element zu setzen.

## Konsistenz finden

Zusammenfassend kann man sagen: Falls eine konsistente Darstellung von Listen zwischen Gecko, Internet Explorer und Opera gewünscht ist, müssen **beide** linken Abstände des `<ul>` Elements gesetzt werden, Innen- und Außenabstand. Wir können `<li>` für diesen Zweck komplett ignorieren. Zur Erstellung der Standardanzeige in Netscape 6.x schreibt man folgendes:

```css
ul {margin-left: 0; padding-left: 40px;}
```

Falls lieber das Internet Explorer/Opera Modell gewünscht ist, dann:

```css
ul {margin-left: 40px; padding-left: 0;}
```

Natürlich können die eigenen bevorzugten Werte angegeben werden. Wenn gewünscht, können beide auf `1.25em` gesetzt werden -- es gibt keinen Grund, bei pixelbasierter Einrückung zu bleiben. Falls Listen zurückgesetzt werden sollen, sodass sie keine Einrückung haben, müssen sowohl Innen- als auch Außenabstand auf null gesetzt werden:

```css
ul {margin-left: 0; padding-left: 0;}
```

Beachte hierbei jedoch, dass dadurch die Bullets außerhalb der Liste und deren Elternelement hängen. Falls das Elternelement das `body` Element ist, sind die Bullets höchstwahrscheinlich außerhalb des Browserfensters, und sind daher nicht sichtbar.

## Zusammenfassung

Am Ende sehen wir, dass keiner der in diesem Artikel genannten Browser Listen richtig oder falsch darstellt. Sie verwenden verschiedene Standardstile und dadurch entstehen die Probleme. Wenn sichergestellt wird, dass sowohl linker Innen- als auch Außenabstand gesetzt sind, kann wesentlich größere browserübergreifende Konsistenz bei der Einrückung von Listen erzielt werden.

## Empfehlungen

- Wenn die Einrückung von Listen geändert werden soll, stelle sicher, dass Innen- und Außenabstand gesetzt sind.

## Originaldokumentinformation

- Autor(en): Eric A. Meyer, Netscape Communications
- Zuletzt aktualisiert: Published 30 Aug 2002
- Copyright Information: Copyright © 2001-2003 Netscape. Alle Rechte vorbehalten.
- Hinweis: Dieser nachgedruckte Artikel war ursprünglich Teil der DevEdge Seite.
