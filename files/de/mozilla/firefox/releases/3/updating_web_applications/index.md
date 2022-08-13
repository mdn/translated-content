---
title: Webanwendungen für Firefox 3 aktualisieren
slug: Mozilla/Firefox/Releases/3/Updating_web_applications
tags:
  - Firefox 3
translation_of: Mozilla/Firefox/Releases/3/Updating_web_applications
original_slug: Updating_web_applications_for_Firefox_3
---
{{FirefoxSidebar}}

In der kommenden Version von Firefox (Firefox 3) gibt es eine nicht geringe Anzahl an Veränderungen, die möglicherweise Ihre Webseite oder Webanwendungen betreffen könnten. Möglicherweise wollen Sie auch von den neuen Funktionen Gebrauch machen. Dieser Artikel kann dazu als Einstiegspunkt dienen.

### DOM Änderungen

Nodes from external documents should be cloned using [`document.importNode()`](/de/docs/Web/API/Document/importNode "Die Document-Methode importNode() erzeugt eine neue Kopie eines konkreten Knotens (Node) oder Dokumenten-Fragments (DocumentFragment) eines anderen Dokuments, so dass diese dann in das aktuelle Dokument eingefügt werden kann. ") (or adopted using [`document.adoptNode()`](/de/docs/Web/API/Document/adoptNode "Überträgt einen Knoten. Der Knoten und sein Unterbaum werden aus dem Dokument, in dem sie sich befinden entfernt (so vorhanden), und sein ownerDocument wird zu dem aktuellen Dokument geändert. Der Knoten kann dann in das aktuelle Dokument eingefügt werden.")) before they
can be inserted into the current document. For more on the [`Node.ownerDocument`](/de/docs/Web/API/Node/ownerDocument "Die Beschreibung hierüber wurde bisher noch nicht geschrieben. Bitte überlege, mitzuwirken!") issues, see the
[W3C DOM FAQ](http://www.w3.org/DOM/faq.html#ownerdoc).

Firefox doesn't currently enforce this rule (it did for a while during the development of Firefox 3, but too many
sites break when this rule is enforced). We encourage Web developers to fix their code to follow this rule for
improved future compatibility.

### HTML Änderungen

#### Veränderung an der Zeichensatz-Vererbung.

Firefox 3 schließt eine Sicherheitsschwachstelle in Frames und iFrames, die einem erlaubten, den Zeichensatz des Elternelementes zu vererben. In bestimmten Fällen war dies eine Problemursache. Nun ist die Zeichensatzvererbung in Frames und iFrames lediglich erlaubt, wenn jenes Element und das Elternelement von dem selben Server stammen. Wenn Sie in ihrer Seite Frames haben, die den selben Zeichensatz von einem fremden Server vererben sollen, sollten Sie den HTML-Code der Frames an die Neuerung anpassen und ihren Zeichensatz explizit angeben.

#### Veränderungen am `<script>`-Element

Das `<script>`-Element in `text/html`-Dokumenten benötigt nun ein schließendes `</script>`-Tag in HTML 4 Dokumenten, auch wenn zwischen ihnen nichts steht.

Früher war es möglich, folgendes zu schreiben:

    <script ... />

Nun wird Konformität zur HTML Spezifikation sichergestellt und es wird folgendes notiert:

    <script ...></script>

Damit wird die Stabilität, Kompatibilität und Sicherheit verbessert.

### CSS Änderungen

#### Veränderungen bei `font-size` basierend auf `em` und `ex` Einheiten

`font-size` Werte in `em` und `ex` Einheiten waren auf die kleinste Schriftgröße des Benutzers bezogen: Wenn die kleinste Schriftgröße größer dargestellt wurde, basierten die `em` und `ex` Einheiten für `font-size` auf die vergrößerte Schriftgröße. Das war widersprüchlich zum Verhalten mit prozentualen Angaben für die Schriftgröße.

`font-size` Werte in `em` und `ex` Einheiten sind nun auf einer »intended font size« basiert, die nicht auf die kleinste Schriftgröße des Benutzers basiert. Mit anderen Worten, werden Schriftgrößen immer mit der Absicht des Designers berechnet und hinterher an die kleinste Schriftgröße angepasst.

Siehe {{ Bug(434718) }}, und speziell im [Anhang von Bug 322943](https://bugzilla.mozilla.org/attachment.cgi?id=322943) für eine Demonstration (muss mit einer minimalen Schriftgröße von >= 6 angesehen werden, um einen Unterschied erkennen zu können).

### Sicherheitsänderungen

#### Chrome Zugang

In vorherigen Versionen von Firefox konnte jede Webseite Scripts über das `chrome://` Protokoll laden. Neben anderen Dingen, waren Webseiten in der Lage herauszufinden, welche Add-ons installiert sind und konnten diese Informationen dann benutzen, um gezielt Sicherheitsmechanismen des Browser zu umgehen.

Firefox 3 erlaubt nur noch Zugang zu [`chrome://browser/`]() und [`chrome://toolkit/`]() Pfaden. Diese Dateien sind dafür bestimmt von Webseiten zugänglich zu sein. Alle weiteren Chrome Inhalten werden nun für den Zugriff von außerhalb blockiert.

Es gibt jedoch einen Weg für Erweiterungen ihre Inhalte zugänglich für das Web zu machen. Sie können ein Kennzeichen in der `chrome.manifest` Datei angeben, das wie folgt lautet:

    content mypackage location/ contentaccessible=yes

Das Setzen dieses Kennzeichens sollte die Ausnahme bleiben, steht aber für die seltenen Fälle zur Verfügung. Beachten Sie, dass Firefox den Benutzer gegebenenfalls benachrichtigt, wenn Ihre Erweiterung `contentaccessible` benutzt und es als potentielles Sicherheitsrisiko angesehen wird.

> **Hinweis:** Weil Firefox 2 die `contentaccessible` Flag nicht versteht (es wird die komplette Zeile ignoriert), sollten zur Kompatibilität zu Firefox 2 und Firefox 3 die folgenden zwei Zeilen notiert werden. content mypackage location/
> content mypackage location/ contentaccessible=yes

#### Datei-upload Felder

In vorherigen Firefox Versionen gab es Fälle in denen der Benutzer ein Formular ausgefüllt hat, um eine Datei hochzuladen, wobei der gesamte Dateipfad der Datei für die Webanwendung verfügbar war. Dieser Eingriff in die Privatsphäre wurde in Firefox 3 behoben und jetzt ist nur noch der Dateiname selbst verfügbar.

#### Änderungen an der »Same-origin policy« für file: URIs

Die »same-origin policy« für Dateien file: URIs wurde in Firefox 3 verändert. Das konnte Ihre Inhalte betreffen. Siehe dazu: [Same-origin policy für file: URIs](/de/Same-origin_policy_für_file:_URIs "de/Same-origin_policy_für_file:_URIs") für weitere Details.

### JavaScript Änderungen

Firefox 3 unterstützt [JavaScript 1.8](/de/Neu_in_JavaScript_1.8 "de/Neu_in_JavaScript_1.8"). Eine wichtige Änderung die eventuell Änderungen nötig machen könnte, ist das das veraltete und nicht-standardisierte `Script` Objekt nicht länger unterstützt wird. Das ist nicht das `<script>` Tag, aber ein JavaScript Objekt, das niemals standardisiert wurde. Wahrscheinlich haben Sie es niemals verwendet.

### Siehe auch

- [Firefox 3 für Entwickler](/de/Firefox_3_für_Entwickler "de/Firefox_3_für_Entwickler")
- [Neu in JavaScript 1.8](/de/Neu_in_JavaScript_1.8 "de/Neu_in_JavaScript_1.8")
- [Erweiterungen für Firefox 3 aktualisieren](/de/Erweiterungen_für_Firefox_3_aktualisieren "de/Erweiterungen_für_Firefox_3_aktualisieren")

{{ languages( {"en": "en/Updating_web_applications_for_Firefox\_3", "es": "es/Actualizar_aplicaciones_web_para_Firefox\_3", "fr": "fr/Mise\_\u00e0\_jour_des_applications_Web_pour_Firefox\_3", "ja": "ja/Updating_web_applications_for_Firefox\_3", "pl": "pl/Aktualizacja_aplikacji_internetowych_dla_Firefoksa\_3" } ) }}
