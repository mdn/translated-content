---
title: Tastaturgesteuerte JavaScript-Komponenten
slug: Web/Accessibility/Keyboard-navigable_JavaScript_widgets
translation_of: Web/Accessibility/Keyboard-navigable_JavaScript_widgets
original_slug: Web/Barrierefreiheit/Tastaturgesteuerte_JavaScript_Komponenten
---
Tastaturgesteuerte JavaScript-Komponenten

### Übersicht

Bei der Erstellung von Desktopkomponenten für Web-Applikationen, wie z.B. Menüs, Baumansichten, Richtext-Felder und Tab-Panels kommt in der Regel JavaScript zum Einsatz. Die Komponenten bestehen üblicherweise aus {{ HTMLElement("div") }}- und {{ HTMLElement("span") }}-Elementen, die von Haus aus nicht die gleiche Funktionalität wie echte Desktopkomponenten besitzen. Dieses Dokument beschreibt Techniken, die eingesetzt werden können, um JavaScript-Komponenten über die Tastatur zugänglich zu machen.

### Benutzung von tabindex

Das tabindex-Attribut wurde zu Beginn als Teil von HTML 4 eingeführt, um Entwicklern zu ermöglichen, die Reihenfolge für die Fokussierung von Elementen festzulegen, die vom Benutzer mit der Tastatur angesteuert werden. Das genaue Verhalten von tabindex wurde später etwas abgeändert. Diese Änderungen sind in der HTML 5-Spezifikation beschrieben. Alle bekannten Browser implementieren fortan das neue Design.

Die folgende Tabelle beschreibt das Verhalten von `tabindex` in modernen Browsern:

| `tabindex`-Attribut            | Fokussierbar mit der Maus oder JavaScript über `element.focus()`                                    | Tab-navigierbar                                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------ | --------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Nicht vorhanden                | Folgt der Festlegung für das Element für die Plattform ("Ja" bei Formularsteuerungen, Links, etc.). | Folgt der Festlegung für das Element für die Plattform.                                                                                                                                                                                                                                                                                                                              |
| Negativ (z.B. `tabindex="-1"`) | Ja                                                                                                  | Nein; Entwickler muss auf Tasteneingaben reagieren und das Element über [`focus()`](../../../../En/DOM/Element.focus "https://developer.mozilla.org/En/DOM/Element.focus") fokussieren.                                                                                                                                                                                              |
| Null (z.B. `tabindex="0"`)     | Ja                                                                                                  | In der Tab-Ordnung relativ zur Position des Elements im Dokument.                                                                                                                                                                                                                                                                                                                    |
| Positiv (z.B. `tabindex="33"`) | Ja                                                                                                  | Wert von `tabindex` bestimmt die Position des Elements in der Tab-Ordnung: Im Allgemeinen werden Elemente vor solchen positioniert, bei denen `tabindex="0"` gesetzt ist oder die von Natur aus per Tab steuerbar sind; Elemente mit kleinere Werten werden vor solchen mit größeren Werten positioniert (ein Element mit `tabindex="7"` wird z.B. vor `tabindex="11" `positioniert) |

#### Einfache Steuerungen

Damit z.B. eine einfache Tab-Komponente über die Tastatur bedient werden kann, wird dem entsprechenden {{ HTMLElement("div") }}- oder {{ HTMLElement("span") }}-Element das tabindex-Attribut hinzugefügt. Beim folgenden Beispiel wird diese Technik für eine Checkbox angewendet, die auf einem span-Element basiert.

_Beispiel 1: Eine einfache Checkbox-Komponente mit einem Bild, welche um das tabindex="0" erweitert wurde und so auch über die Tastatur gesteuert werden kann._

```html
<!-- Ohne die tabindex-Attribute könnten die <span>-Elemente nicht mit der Tastatur fokussiert werden -->
<div>
    <span role="checkbox" aria-checked="true" tabindex="0">
        <img src="checked.gif" role="presentation" alt="" />
        Include decorative fruit basket
    </span>
</div>
<div>
    <span role="checkbox" aria-checked="true" tabindex="0">
        <img src="checked.gif" role="presentation" alt="" />
        Include singing telegram
    </span>
</div>
<div>
    <span role="checkbox" aria-checked="false" tabindex="0">
        <img src="unchecked.gif" role="presentation" alt="" />
        Require payment before delivery
    </span>
</div>
```

#### Gruppieren von Steuerungselementen

Für die Gruppierung von Komponenten, wie z.B. Menüs, Tableisten, Grids oder Baumansichten, sollte das Elternelement in die Tab-Ordnung aufgenommen werden (`tabindex="0"`). Außerdem sollte jede(s) untergeordnete Auswahl/Tab/Zelle/Reihe aus der Tabordnung entfernt werden (`tabindex="-1"`). Die untergeordneten Elemente sollten vom Benutzer über die Pfeiltasten angesteuert werden können (Eine ausführliche Beschreibung der Tastaturunterstützung, die im Allgemeinen für bestimmte Komponenten erwartet wird, finden Sie im [DHTML Style Guide](http://access.aol.com/dhtml-style-guide-working-group/)).

Beim nächsten Beispiel wird diese Technik bei einer Menüsteuerung eingesetzt. Sobald der Fokus der Tastatur das \<ul>-Element erreicht, muss der JavaScript-Entwickler den Fokus programmatisch steuern und auf das Drücken der Pfeiltasten reagieren. Techniken für die Steuerung des Fokus innerhalb von Komponenten, sind im Abschnitt "Steuerung des Fokus innerhalb von Gruppen" weiter unten beschrieben.

_Beispiel 2: Eine Menüsteuerung bei der mit tabindex die Tastaturnavigation gesteuert wird_.

```html
<ul id="mb1" tabindex="0">
  <li id="mb1_menu1" tabindex="-1"> Font
    <ul id="fontMenu" title="Font" tabindex="-1">
      <li id="sans-serif" tabindex="-1">Sans-serif</li>
      <li id="serif" tabindex="-1">Serif</li>
      <li id="monospace" tabindex="-1">Monospace</li>
      <li id="fantasy" tabindex="-1">Fantasy</li>
    </ul>
  </li>
  <li id="mb1_menu2" tabindex="-1"> Style
    <ul id="styleMenu" title="Style" tabindex="-1">
      <li id="italic" tabindex="-1">Italics</li>
      <li id="bold" tabindex="-1">Bold</li>
      <li id="underline" tabindex="-1">Underlined</li>
    </ul>
  </li>
  <li id="mb1_menu3" tabindex="-1"> Justification
    <ul id="justificationMenu" title="Justication" tabindex="-1">
      <li id="left" tabindex="-1">Left</li>
      <li id="center" tabindex="-1">Centered</li>
      <li id="right" tabindex="-1">Right</li>
      <li id="justify" tabindex="-1">Justify</li>
    </ul>
  </li>
</ul>
```

#### Deaktivierte Steuerungen

Wenn Sie ein Steuerelement deaktivieren, sollte dieses aus der Tab-Ordnung entfernt werden, indem `tabindex="-1"` gesetzt wird. Elemente, die Teil einer Komponentengruppe (wie z.B. Menüpunkte in einem Menü) sind, sollten über die Tastatur ansprechbar bleiben.

### Steuerung des Fokus innerhalb von Gruppen

Wenn ein Benutzer den Fokus per Tab von einem Element wegbewegt, sollte der Fokus zu dem Element, das zuvor fokussiert war - z.B. einer Baumkomponente oder Gridzelle - zurückkehren. Es existieren zwei verschiedene Techniken, um dies zu bewirken:

1.  Verschiebung von `tabindex`: Programmatische Bewegung des Fokus
2.  `aria-activedescendent`: Verwaltung eines "virtuellen" Fokus

#### Technik 1: Verschiebung von tabindex

Setzt man tabindex für das fokussierte Element auf "0", wird das ausgewählte Element innerhalb der Gruppe erneut fokussiert, wenn der Benutzer den Fokus per Tab fortbewegt und dann zu diesem Element zurückkehrt. Beachten Sie, dass bei der Aktualisierung von tabindex auf 0 für des zuvor selektierte Element `tabindex="-1"` gesetzt werden muss. Diese Technik wird auch verwendet, wenn auf Tastendrücke reagiert und der Fokus programmatisch weiterbewegt wird. Der tabindex wird dann entspechend aktualisiert, um das aktuell fokussierte Element anzuzeigen. Dies lässt sich wie folgt umsetzen:

Jeweils ein keydown-Hander wird mit einem Element der Gruppe verknüpft. Wenn der Benutzer eine Pfeiltaste drückt, um ein anderes Element anzusteuern, passiert Folgendes:

1.  Das neue Element wird codegesteuert fokussiert.
2.  Der `tabindex` des fokussierten Elements wird auf "0" gesetzt.
3.  Der `tabindex` des zuvor fokussierte Elements wird auf "-1" gesetzt.

##### Tipps

###### Mit element.focus() den Fokus setzen

Benutzen Sie nicht die Funktionen `createEvent()`, `initEvent()` und `dispatchEvent()` um ein Element zu fokussieren. DOM-Focus-Events arbeiten nur informell: Sie werden vom System erzeugt, wenn ein Element fokussiert wird, aber nicht verwendet, um den Fokus zu setzen. Greifen Sie stattdessen auf `element.focus()` zurück.

###### Mit onfocus den Fokus überprüfen

Gehen Sie nicht davon aus, dass Fokusänderungen allein über die Tastatur oder Maus initiiert werden: Assistierende Technologien, wie z.B. Screenreader, sind in der Lage den Fokus für jedes fokussierbare Element zu setzen. Benutzen Sie daher `onfocus` und `onblur` um Fokusänderungen zu verfolgen.

`onfocus` und `onblur` können nun mit jedem beliebigen Element verwendet werden. Es existiert jedoch kein Standard-DOM-Interface, um den aktuellen Fokus im Dokument abzufragen. Wenn man den Fokus verfolgen möchte, muss der aktuelle Zustand in einer JavaScript-Variablen hinterlegt werden.

#### Technik 2: aria-activedescendant

Bei dieser Technik wird ein einzelner Event-Handler mit der Container-Komponente verknüpft und `aria-activedescendant` dazu benutzt, um einen "virtuellen" Fokus zu verwalten. ([Mehr Informationen über ARIA finden Sie indieser Übersicht](../../../../An_Overview_of_Accessible_Web_Applications_and_Widgets "https://developer.mozilla.org/An_Overview_of_Accessible_Web_Applications_and_Widgets")).

The `aria-activedescendant` property identifies the ID of the descendent element that currently has the virtual focus. The event handler on the container must respond to key and mouse events by updating the value of `aria-activedescendant` and ensuring that the current item is styled appropriately (for example, with a border or background color).

Die Eigenschaft `aria-activedescendent` enthält die ID des untergeordneten Elements, das aktuell fokussiert ist. Der Event-Handler des Containers muss auf Tastatur- und Mauseingaben reagieren, den Wert von `aria-activedescendent` aktualisieren und sicherstellen, dass die Darstellung des Elements entsprechend angepasst wird (z.B. Rahmen oder Hintergrundfarbe).

##### Tipps

###### scrollIntoView

Note that the use of this pattern requires the author to ensure that the current _focused_ widget is scrolled into view. You should be able to use the {{ domxref("element.scrollIntoView()") }} function, but we recommend confirming this works for you in your target browsers using the [quirksmode test](http://www.quirksmode.org/dom/tests/scrollintoview.html).Bei der Benutzung dieses Musters muss der Entwickler sicherstellen, dass das aktuell _fokussierte_ Element in Sichtweite gescrollt wird. Für diesen Zweck kann die Funktion `element.scrollIntoView()` eingesetzt werden. Überprüfen Sie jedoch unbedingt mit dem [Quirksmode-Test](http://www.quirksmode.org/dom/tests/scrollintoview.html), ob dies für ihre Browser, die unterstützt werden sollen, fehlerfrei funktioniert.

###### Probleme

- [quirksmode meldet Pobleme bei Opera und Konqueror](http://www.quirksmode.org/dom/w3c_cssom.html)
- [Bug ab Firefox 3.0.1](https://bugzilla.mozilla.org/show_bug.cgi?id=450405)

### Allgemeine Richtlinien

#### Benutzung von onkeydown, um auf Tastendrücke zu reagieren (nicht onkeypress)

Der Internet Explorer führt `keypress`-Events für nicht-alpahnumerische Zeichen nicht aus. Benutzen Sie stattdessen das `onkeydown`-Event.

#### Tastatur- und Mausbedienung sollte konsistent sein

Um sicherzustellen, dass Benutzereingaben unabhängig vom Eingabegerät konstistent sind, sollten Tastatur- und Maus-Eventhandler denselben Code verwenden. Zum Beispiel sollte der Code, womit der `tabindex` oder das Aussehen festgelegt wird, wenn die Pfeiltasten benutzt werden, auch für die Mausklick-Handler verwendet werden, damit dieselben Änderungen stattfinden.

#### Aktivierung von Elementen per Tastatur

Damit die Tastatur für die Aktivierung von Elementen benutzt werden kann, sollte alle Handler, die mit der Mausevents verknüpft sind, auch mit Tastaturevents verknüpft werden. Soll z.B. mit der Enter-Taste ein Element aktiviert werden können, welches über einen Maushandler `onclick="doSomething()"` mit der Maus verknüpft ist, dann sollte die Funktion `doSomething()` auch über ein `keydown`-Event mit der Tastatur verknüpft werden: `onkeydown="return event.keyCode != 13 || doSomething();"`.

#### Verwenden Sie nicht :focus für das Styling (falls Kompatibilität mit IE 7 und ältereren Browsern notwendig)

Der Internet Explorer 7 und ältere Versionen unterstützen den Pseudoselektor `:focus` nicht. Aus diesem Grund sollte er für die Gestaltung von fokussierten Elementen nicht verwendet werden. Stattdessen kann die Darstellung über einen `onfucus`-Eventhander verändert werden, z.B. indem ein CSS-Style Name dem `class`-Attribut hinzugefügt wird.

#### Kontinuierliches Anzeigen des Fokus für Elemente mit tabindex="-1", die programmatisch fokussiert werden

Der Internet Explorer zeigt die Fokusumrandung für Elemente nicht automatisch an. Die Hervorhebung des fokussierten Elementes muss daher per JavaScript, entweder durch die Änderung der Hintergrundfarbe (z.B. `this.style.backgroundColor = "gray"`) oder Anzeige eines gepunkteten Rahmen (z.B. `this.style.border = "1px dotted invert"`) erfolgen. Entscheiden Sie sich für die zweite Vorgehensweise, sollten die Elementen von Anfang an einen unsichtbaren 1px-Rahmen besitzen, damit sie nicht größer werden, wenn der Rahmen angezeigt wird (Rahmen nehmen Platz in Anspruch und beim IE sind CSS-Outlines nicht implementiert).

#### Verwendete Tastendrücke sollten keine Browserfunktionen auslösen

Wenn eine Komponente auf Tastendrücke reagiert, sollte verhindert werden, dass der Browser diese Tastendrücke verarbeitet (z.B. Scrollen mit den Pfeiltasten), indem bei Event-Handlern ein Return-Code angegeben wird. Der Rückgabewert `false` verhindert, dass das Event an den Browser weitergereicht wird.

Hierzu ein Beispiel:

    <span tabindex="-1" onkeydown="return handleKeyDown();">

Gibt die Funktion `handleKeyDown()` den Wert `false` zurück, wird das Event übernommen und der Browser so davon abgehalten auf den Tastendruck zu reagieren.

#### Abweichendes Verhalten bei wiederholten Tastendrücken

Je nach Betriebssystem kann es leider vorkommen, dass bei wiederholten Tastendrücken `onkeydown`-Events wiederholt ausgeführt werden oder auch nicht.
