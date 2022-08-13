---
title: Web Components
slug: Web/Web_Components
tags:
  - Benutzerdefinierte Elemente
  - Components
  - JavaScript
  - Landing
  - Overview
  - Schatten-DOM
  - Template
  - Web Components
  - Webkomponenten
  - custom elements
  - shadow dom
  - slot
  - Überblick
translation_of: Web/Web_Components
---
{{DefaultAPISidebar("Webkomponenten")}}

Webkomponenten sind eine Gruppe von Web-Technologien, die es ermöglichen, benutzerdefinierte, wiederverwendbare HTML Elemente zu erstellen, deren Funktionalität gekapselt ist und damit vollständig getrennt von anderem Code.

## Konzept und Anwendung

Unter Softwareentwicklern ist allgemein anerkannt, Code weitestgehend wiederzuverwenden. Für benutzerdefinierte Markup-Strukturen war dies bekanntermaßen nicht ganz so einfach. Denken Sie nur an das komplexe HTML- (sowie CSS- und Skript-)Konglomerat, das teilweise notwendig war, um benutzerdefinierte UI-Steuerelemente zu erstellen; und wie die mehrfache Verwendung derartiger benutzerdefinierter Elemente auf einer Seite zu einem völlig undurchsichtigen Wirrwar führen kann, wenn man nicht äußerst sorgfältig vorgeht.

Webkomponenten zielen darauf ab, diese Probleme zu lösen. Bestehend aus drei Haupttechnologien, die gemeinsam eingesetzt werden können, um unterschiedliche und vielseitige benutzerdefinierte Elemente mit in sich gekapselter Funktionalität zu erstellen, die beliebig oft wiederverwendet werden können, ohne befürchten zu müssen, dass unterschiedlicher Code sich gegenseitig beeinflusst oder stört:

- **Benutzerdefinierte Elemente**: Ein Satz von JavaScript APIs, die es ermöglichen, benutzerdefinierte Elemente sowie deren Verhalten zu definieren, die dann anschließend beliebig auf Ihrer Benutzeroberfläche verwendet werden können.
- **Shadow DOM**: Ein Satz von JavaScript APIs, um einen Baum aus darin gekapselten "Schatten"-DOM-Elementen an ein Element anzufügen, der unabhängig vom DOM des Hauptdokuments gerendert wird, sowie um die dazugehörige Funktionalität zu steuern. Mit Hilfe dieser Technologie verbleiben die Ausprägungen solcher Elemente privat, sodass Skripte und Styles auf sie angewendet werden können, ohne dass sie mit anderen Teilen des Dokuments kollidieren.
- **HTML-Vorlagen**: Die {{HTMLElement("template")}}- und {{HTMLElement("slot")}}-Elemente gestatten es, Markup-Vorlagen zu schreiben, die nicht auf der dargestellten Seite abgebildet werden. Diese können dann als Grundlage für benutzerdefinierte Elemente mehrere Male wiederverwendet werden.

Die grundsätzliche Herangehensweise für das Implementieren einer Webkomponente sieht im Allgemeinen so aus:

1. Erstellen einer Klasse oder einer Funktion, in der die Funktionalität der Webkomponente festgelegt wird. Falls Sie hierzu eine Klasse einsetzen, dann verwenden Sie die ECMAScript 2015-Syntax (siehe auch [Klassen](/de/docs/Web/JavaScript/Reference/Classes)).
2. Registrieren des neuen benutzerdefinierten Elements mithilfe der {{domxref("CustomElementRegistry.define()")}}-Methode. Dieser Methode werden der zu definierende Elementname, die Klasse bzw. Funktion, in der die Funktionalität definiert ist, sowie optional das Element, von dem das neue benutzerdefinierte Element erbt, übergeben.
3. Falls erforderlich: Anfügen eines Schatten-DOMs zum benutzerdefinierten Element mithilfe der {{domxref("Element.attachShadow()")}}-Methode. Kindelemente, Ereignisbehandlungsroutinen usw. werden dem Schatten-DOM unter Verwendung der üblichen DOM-Methoden hinzugefügt.
4. Falls erforderlich: Definieren einer HTML-Vorlage mithilfe von {{htmlelement("template")}} und {{htmlelement("slot")}}. Auch hier werden die üblichen DOM-Methoden verwendet, um die HTML-Vorlage anschließend zu kopieren und zum Schatten-DOM hinzuzufügen.
5. Das so geschaffene benutzerdefinierte Element kann überall auf der Seite eingefügt werden — ebenso wie ein normales HTML-Element.

## Übungen

- [Benutzerdefinierte Elemente](/de/docs/Web/Web_Components/Using_custom_elements)
  - : Zeigt, wie benutzerdefinierte Elemente eingesetzt werden können, um einfache Webkomponenten zu erzeugen, die Rückruffunktionen (Callbacks) innerhalb des Lebenszyklus' einer Webkomponente, sowie einige weitere, fortgeschrittene Bestandteile benutzerdefinierter Elemente.
- [Schatten-DOM](/de/docs/Web/Web_Components/Using_shadow_DOM)
  - : Wirft einen Blick auf die Grundlagen des Schatten-DOMs: Wie ein Schatten-DOM an ein Element angefügt wird, wie Elemente zum Baum des Schatten-DOMs hinzugefügt werden, wie Stile auf sie angewendet werden, und weiteres mehr.
- [Vorlagen und Einschübe](/de/docs/Web/Web_Components/Using_templates_and_slots)
  - : Zeigt, wie eine wiederverwendbare HTML-Struktur mithilfe der {{htmlelement("template")}} und {{htmlelement("slot")}}-Elemente definiert und diese Struktur anschließend innerhalb von Webkomponenten eingesetzt wird.

## Referenz

### Benutzerdefinierte Elemente

- {{domxref("CustomElementRegistry")}}
  - : Beinhaltet Methoden in Bezug auf benutzerdefinierte Elemente, insbesondere die {{domxref("CustomElementRegistry.define()")}}-Methode, die zum Registrieren neuer benutzerdefinierter Elemente verwendet wird, damit sie in einem Dokument verwendet werden können.
- {{domxref("Window.customElements")}}
  - : Liefert eine Referenz auf ein `CustomElementRegistry`-Objekt.
- [Rückruffunktionen innerhalb des Lebenszyklus](/de/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks)
  - : Spezielle Callback-Funktionen, die innerhalb der Klasse des benutzerdefinierten Steuerelements definiert sind und dessen Verhalten steuern:\* `connectedCallback`: Wird aufgerufen, wenn das benutzerdefinierte Element mit dem DOM des Dokuments verbunden ist.
    - `disconnectedCallback`: Wird aufgerufen, wenn das benutzerdefinierte Element vom DOM des Dokuments abgetrennt wird.
    - `adoptedCallback`: Wird aufgerufen, wenn das benutzerdefinierte Element zu einem neuen Dokument verschoben wird.
    - `attributeChangedCallback`: Wird aufgerufen, wenn eines der Attribute des benutzerdefinierten Elements hinzugefügt, gelöscht oder verändert wird.
- Erweiterungen, um benutzerdefinierte eingebaute Elemente zu erzeugen
  - : \* Das globale {{htmlattrxref("is")}}-Attribut dient dazu, ein Standard-HTML-Element anzugeben, das sich wie ein benutzerdefiniertes Element verhalten soll.
    - Die "is"-Option der {{domxref("Document.createElement()")}}-Methode dient dazu, eine Instanz eines zuvor registrierten benutzerdefinierten Standard-HTML-Elements zu erzeugen.
- CSS Pseudoklassen
  - : Pseudoklassen, die sich speziell auf benutzerdefinierte Elemente beziehen:\* {{cssxref(":defined")}}: Trifft auf jedes definierte Element zu, einschließlich eingebauter und benutzerdefinierter Elemente, die mithilfe von `CustomElementRegistry.define()` definiert sind.
    - {{cssxref(":host")}}: Wählt das jeweilige Container-Element des [Schatten-DOMs](/de/docs/Web/Web_Components/Using_shadow_DOM), auf das die jeweilige CSS-Regel angewendet wird.
    - {{cssxref(":host()")}}: Wählt das Container-Element des [Schatten-DOMs](/de/docs/Web/Web_Components/Using_shadow_DOM), auf das die jeweilige CSS-Regel angewendet wird — aber nur dann, wenn der Selektor, der als Funktionsargument übergeben wird, auf das jeweilige Container-Element passt.
    - {{cssxref(":host-context()")}}: Wählt das Container-Element des [Schatten-DOMs](/de/docs/Web/Web_Components/Using_shadow_DOM), auf das die jeweilige CSS-Regel angewendet wird — aber nur dann, wenn der Selektor, der als Funktionsargument übergeben wird, auf die dem jeweiligen Container-Element übergeordnete Hierarchie innerhalb des DOMs passt.

### Schatten-DOM

- {{domxref("ShadowRoot")}}
  - : Repräsentiert die Wurzel-Node eines [Schatten-DOM](/de/docs/Web/Web_Components/Using_shadow_DOM)-Baums.
- {{domxref("DocumentOrShadowRoot")}}
  - : Ein Mixin, das diejenigen Merkmale definiert, die sowohl in einem Dokument als auch in der Wurzel-Node eines [Schatten-DOM](/de/docs/Web/Web_Components/Using_shadow_DOM)-Baums verfügbar sind.
- {{domxref("Element")}}-Erweiterungen
  - : Erweiterungen zur `Element`-Schnittstelle, die sich auf das [Schatten-DOM](/de/docs/Web/Web_Components/Using_shadow_DOM) beziehen:\* Die {{domxref("Element.attachShadow()")}}-Methode fügt einen [Schatten-DOM](/de/docs/Web/Web_Components/Using_shadow_DOM)-Baum an das angegebene Element an.
    - Die {{domxref("Element.shadowRoot")}}-Eigenschaft liefert die Wurzel-Node des [Schatten-DOM](/de/docs/Web/Web_Components/Using_shadow_DOM)-Baums des angegebenen Elements; oder `null`, falls kein [Schatten-DOM](/de/docs/Web/Web_Components/Using_shadow_DOM)-Baum angefügt wurde.
- Wichtige {{domxref("Node")}}-Erweiterungen
  - : Erweiterung zur `Node`-Schnittstelle, die sich auf das [Schatten-DOM](/de/docs/Web/Web_Components/Using_shadow_DOM) beziehen:\* Die {{domxref("Node.getRootNode()")}}-Methode liefert die Wurzel-Node des Kontextobjekts, die optional auch die Wurzel-Node des [Schatten-DOM](/de/docs/Web/Web_Components/Using_shadow_DOM)-Baums enthält, sofern verfügbar.
    - Die {{domxref("Node.isConnected")}}-Eigenschaft liefert einen booleschen Wert, der angibt, ob eine Node (direkt oder indirekt) mit dem Kontextobjekt verbunden ist oder nicht. Dies ist beispielsweise das {{domxref("Document")}}-Objekt im Falle eines normalen DOMs bzw. das {{domxref("ShadowRoot")}}-Objekt im Falle eines [Schatten-DOMs](/de/docs/Web/Web_Components/Using_shadow_DOM).
- {{domxref("Event")}}-Erweiterungen
  - : Erweiterungen der `Event`-Schnittstelle, die sich auf das [Schatten-DOM](/de/docs/Web/Web_Components/Using_shadow_DOM) beziehen:\* {{domxref("Event.composed")}}: Liefert einen booleschen Wert, der angibt, ob ein Ereignis sich vom [Schatten-DOM](/de/docs/Web/Web_Components/Using_shadow_DOM) in das normale DOM fortsetzt (`true`), oder nicht (`false`).
    - {{domxref("Event.composedPath")}}: Liefert den Pfad des Ereignisses (Objekte, deren Ereignisbehandlungsroutinen aufgerufen werden). Ausgeschlossen hiervon sind Nodes in [Schatten-DOM](/de/docs/Web/Web_Components/Using_shadow_DOM)-Bäumen, wenn die Wurzel-Node des [Schatten-DOM](/de/docs/Web/Web_Components/Using_shadow_DOM)-Baums mit `{{domxref("ShadowRoot.mode")}} = "closed"` erstellt wurde.

### HTML-Vorlagen

- {{htmlelement("template")}}
  - : Beinhaltet ein HTML-Fragment, das nicht dargestellt wird, wenn das beinhaltende Dokument geladen wird. Es kann aber zur Laufzeit mit Hilfe von JavaScript angezeigt werden. Es wird hauptsächlich als Grundstruktur für benutzerdefinierte Elemente verwendet. Die dazugehörige DOM-Schnittstelle lautet: {{domxref("HTMLTemplateElement")}}.
- {{htmlelement("slot")}}
  - : Ein Platzhalter innerhalb einer Webkomponente, die mit benutzerdefiniertem Markup gefüllt werden kann. Auf diese Weise lassen sich unterschiedliche DOM-Fragmente mit der gleichen HTML-Vorlage erstellen, die alle gemeinsam dargestellt werden können. Die dazugehörige DOM-Schnittstelle lautet: {{domxref("HTMLSlotElement")}}.
- Das globale [`slot`](/de-DE/docs/Web/HTML/Global_attributes/slot) HTML-Attribut
  - : Weist einem Element einen Einschub innerhalb eines [Schatten-DOM](/de/docs/Web/Web_Components/Using_shadow_DOM)-Baums zu.
- {{domxref("Slotable")}}
  - : Ein Mixin, das sowohl von {{domxref("Element")}}- als auch {{domxref("Text")}}-Nodes implementiert wird. Es definiert Methoden, die es den jeweiligen Nodes erlauben, Inhalt eines {{htmlelement("slot")}}-Elements zu werden. Das Mixin definiert ein Attribute: {{domxref("Slotable.assignedSlot")}}, das eine Referenz auf den Einschub liefert, in den die Node eingefügt wurde.

- {{domxref("Element")}}-Erweiterungen
  - : Erweiterungen der `Element`-Schnittstelle, die sich auf Einschübe beziehen:\* {{domxref("Element.slot")}}: Liefert den Namen des Einschubs, der dem Element hinzugefügt wurde.
- CSS Pseudoelemente
  - : Pseudoelemente, die sich speziell auf Einschübe beziehen:\* {{cssxref("::slotted")}}: Trifft auf jeden Inhalt zu, der einem Einschub hinzugefügt wurde.
- Das {{event("slotchange")}}-Ereignis
  - : Wird auf einer {{domxref("HTMLSlotElement")}}-Instanz ({{htmlelement("slot")}}-Element) ausgelöst, wenn die Node(s), die sich im Einschub befinden, verändern.

## Beispiele

Sie finden eine Reihe von Beispielen in unserem [web-components-examples](https://github.com/mdn/web-components-examples) GitHub-Repository. Diesem Repository werden über die Zeit weitere Beispiele hinzugefügt.

## Spezifikationen

| Spezifikation                                                                                                                | Status                           | Kommentar                                                                                               |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------- |
| {{SpecName("HTML WHATWG","scripting.html#the-template-element","&lt;template&gt; element")}} | {{Spec2("HTML WHATWG")}} | Definition von {{HTMLElement("template")}}.                                                    |
| {{SpecName("HTML WHATWG","scripting.html#the-slot-element","&lt;slot&gt; element")}}             | {{Spec2("HTML WHATWG")}} | Definition von {{HTMLElement("slot")}}.                                                        |
| {{SpecName("HTML WHATWG","custom-elements.html#custom-elements","custom elements")}}             | {{Spec2("HTML WHATWG")}} | Definition von [benutzerdefinierten HTML Elementen](/de/docs/Web/Web_Components/Using_custom_elements). |
| {{SpecName("DOM WHATWG","#shadow-trees","shadow trees")}}                                                 | {{Spec2("DOM WHATWG")}} | Definition des [Schatten-DOMs](/de/docs/Web/Web_Components/Using_shadow_DOM).                           |
| {{SpecName("HTML Imports", "", "")}}                                                                             | {{Spec2("HTML Imports")}} | Erste [HTML Importe](/de/docs/Web/Web_Components/HTML_Imports)-Definition.                              |
| {{SpecName("Shadow DOM", "", "")}}                                                                                 | {{Spec2("Shadow DOM")}} | Erste [Schatten-DOM](/de/docs/Web/Web_Components/Using_shadow_DOM)-Definition.                          |

## Browserkompatibilität

Grundsätzlich:

- Webkomponenten werden standardmäßig von Firefox (ab Version 63), Chrome, und Opera unterstützt.
- Safari unterstützts eine Reihe von Merkmalen von Webkomponenten, aber weniger als die oben genannten Browser.
- Edge arbeitet an einer Implementation.

Um detaillierte Informationen zur Unterstützung spezifischer Merkmale einzelner Browser zu erhalten, ziehen sie bitte die oben genannten Referenzdokumente zu Rate.

## Siehe auch

- [webcomponents.org](https://www.webcomponents.org/) — Website, die Beispiele, Übungen und weiterführende Informationen zu Webkomponenten bietet.
- [Hybrids](https://github.com/hybridsjs/hybrids) — Open-Source Webkomponenten-Bibliothek, die simple Objekte und reine Funktionen der `class` und this Syntax vorzieht. Die Bibliothek bietet eine einfache, funktionale API, um benutzerdefinierte Elemente zu erzeugen.
- [Polymer](https://www.polymer-project.org/) — Googles Webkomponenten-Framework — eine Sammlung von Polyfills, Erweiterungen und Beispielen. Dieses Framework ist aktuell der einfachste Weg, Webkomponenten browserübergreifend einzusetzen.
- [Snuggsi.es](https://github.com/devpunks/snuggsi#readme) — Einfacher Zugriff auf Webkomponenten in \~1kB, _inklusive Polyfill_ — Alles, was Sie benötigen, ist ein Browser und ein grundsätzliches Verständnis von HTML, CSS und JavaScript Klassen, um zu starten.
- [Slim.js](https://github.com/slimjs/slim.js) — Open-Source Webkomponenten-Bibliothek — eine hochperformante Bibliothek, um schnell und einfach Komponenten zu erstellen. Durch Plug-ins erweiterbar und Cross-Framework-kompatibel.
- [Smart.js](https://www.htmlelements.com/) — Webkomponenten-Bibliothek mit einer einfachen API, um browserübergreifend benutzerdefinierte Elemente zu erstellen.
