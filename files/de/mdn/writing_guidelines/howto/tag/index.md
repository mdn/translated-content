---
title: Leitfaden zum Setzen von Schlagwörtern
slug: MDN/Writing_guidelines/Howto/Tag
tags:
  - Beginner
  - Contribute
  - Guide
  - Howto
  - Intro
  - MDN Meta
  - Tutorial
translation_of: MDN/Contribute/Howto/Tag
original_slug: MDN/Contribute/Howto/Tag
---
{{MDNSidebar}}

**Artikel-Schlagwörter** sind ein wichtiges Hilfsmittel, es Besuchern zu ermöglichen, hilfreichen Inhalt zu finden. Jede Seite sollte im Normalfall mehrere Schlagwörter enthalten. Diese Seite erklärt die beste Art Seiten zu markieren, so dass Leser Informationen finden und wir selbst Ordnung bewahren können.

Um zur Hilfe für die Oberfläche zur Bearbeitung von Schlagwörtern zu gelangen, rufen Sie bitte den Link [tagging section](/de/docs/MDN/Contribute/Editor/Basics#The_tags_box) in unserem Editor-Handbuch auf.

Bitte nutzen Sie die Schlagwörter sachgemäß, wie folgend beschrieben. Wenn Sie dies nicht tun, sind unsere automatischen Werkzeuge nicht in der Lage, Listen des Inhalts, der Einstiegsseiten und querverweisenden Artikel zu generieren.

## Schlagwort-Verwendung im MDN

Auf MDN werden Schlagwörter auf verschiedene Weisen verwendet.

- Dokument-Kategorisierung
  - : Um welchen Dokumenten-Typ handelt es sich? Ist es eine Referenz? Ein Tutorial? Eine Eine Einstiegsseite zu einem Thema? Unsere Besucher können diese Schlagwörter verwenden, um Suchen zu filtern, deshalb sind sie sehr wichtig!
- Topic-Identifizierung
  - : Worum geht es in dem Artikel? Ist er über eine API? Das DOM? Grafik? Auch diese Schlagwörter sind sehr wichtig, weil sie als Suchfilter verwendet werden können.
- API-Identifizierung
  - : Referenzseiten über eine API müssen die spezifische Komponente der API, die auf Ihnen dokumentiert wird, bezeichnen (das heißt: zu welchem Interface sie gehört und welche Eigenschaft oder Methode sie umfasst, falls zutreffend).
- Technologie-Status
  - : Welchen Status hat die beschriebene Technologie? Entspricht sie einem Standard oder nicht? Wird sie nicht mehr verwendet oder ist veraltet? Ist sie experimentell?
- Skill-Level
  - : Für Tutorials und Anleitungen - Wie weit fortgeschritten ist das Material, das im Artikel behandelt wird?
- Dokument-Metadaten
  - : Die Autoren-Gemeinschaft verwendet Schlagwörter, um nachvollziehen zu können, welche Seiten welcher Art von Arbeit bedürfen.

## Handbuch zu Schlagwort-Typen

Hier ist eine Kurzanleitung zu den verschiedenen Schlagwort-Typen und ihre konkreten Werte.

### Kategorie

Wenn Sie einen Artikel mit einem Schlagwörter aus diesen Kategorien versehen, unterstützen sie die automatischen Werkzeuge dabei, genauer Einstiegsseiten, Inhaltsverzeichnise usw. zu generieren.

Wir verwenden die folgenden Kategorien als Standard-Schlagwörter:

- `{{Tag("Intro")}}`
  - : Der Artikel stellt Einführungs-Material zu einem Thema zur Verfügung. Theoretisch sollte jeder Technologie-Bereich nur ein "Intro" haben.
- `{{Tag("Featured")}}`
  - : Dieser Artikel ist ein äußerst wichtiger Artikel, der mittels einer speziellen Methode auf erreichte Seiten hinweist. Bitte achten Sie auf eine äußerst sparsame Anwendung. Es sollten max. drei oder weniger in den Dokumentations-Bereichen existieren _(Dieses Schlagwort wird in der englischen Version dieser Seite nicht mehr beschrieben und ist möglicherweise nicht mehr aktuell)_.
- `{{Tag("Reference")}}`
  - : Der Artikel enthält Referenz-Material über ein API, ein Element, ein Attribut, ein Merkmal oder ähnliches.
- `{{Tag("Landing")}}`
  - : Diese Seite ist eine Einstiegsseite.
- `{{Tag("Guide")}}`
  - : Dieser Artikel ist eine Schritt-für-Schritt Anleitung oder ein Leitfaden.
- `{{Tag("Example")}}`
  - : Dieser Artikel ist eine reine Code-Beispielseite, oder enthält Code-Beispiele (das heißt, tatsächlich nützliche Code-Schnipsel, nicht einzeilige "Syntaxbeispiele").

### Themen

Durch die Angabe des Themenbereiches können Sie helfen, bessere Suchergebnisse zu erzeugen (und damit auch Einstiegsseiten und sonstige Navigations-Hilfen).

Derzeit ist hier noch etwas Raum für Flexibilität, da wir noch neue Themenbereiche identifizieren. Wir versuchen allerdings, uns auf die Namen von APIs oder Technologien zu beschränken. Einige nützliche Bespiele:

- `{{Tag("HTML")}}`
- `{{Tag("CSS")}}`
- `{{Tag("JavaScript")}}` (Beachten Sie dabei den Großbuchstaben "S"!)
- `{{Tag("Document")}}`
- `{{Tag("DOM")}}`
- `{{Tag("API")}}` für jedes Interface, jede Methode und jede Eigenschaft..
- `{{Tag("Method")}}` für jede Methode einer API.
- `{{Tag("Property")}}` für jede Eigenschaft einer API.
- `{{Tag("Graphics")}}`
- `{{Tag("SVG")}}`
- `{{Tag("WebGL")}}`
- `{{Tag("Tools")}}`
- `{{Tag("Web")}}`
- `{{Tag("Element")}}`
- `{{Tag("Node")}}` _(Dieses Schlagwort wird in der englischen Version dieser Seite nicht mehr beschrieben und ist möglicherweise nicht mehr aktuell, s.u.)_
- `{{Tag("Extensions")}}` und `{{Tag("WebExtensions")}}` für die WebExtension-Dokumentation

Generell nützlich ist der Name eines Interfaces, wie auch weitere verwandte Seiten (wie z.B. bei [Node](/de/docs/Web/API/Node), das viele verwandte Seiten für seine verschiedenen Eigenschaften und Methoden hat), oder der Name des übergeordneten Technologie-Typs. Eine Seite über WebGL könnten Sie zum Beispiel mit den Schlagwörtern `Graphics` und `WebGL` versehen, aber eine Seite über {{HTMLElement("canvas")}} könnte mit `HTML`, `Element`, `Canvas`, und `Graphics` gekennzeichnet werden.

#### Mozilla-spezifische Inhalte

Diese Schlagwörter werden nur für Mozilla-spezifische Inhalte verwendet:

- `{{Tag("Mozilla")}}`
- `{{Tag("Firefox")}}`
- `{{Tag("Firefox OS")}}`
- `{{Tag("Gecko")}}`
- `{{Tag("XUL")}}`
- `{{Tag("XPCOM")}}`

### API-Identifikation

In der API-Referenz sollte aus jedem Artikel hervorgehen, welchen Teil der API er abdeckt:

- **`{{Tag("Interface")}}`**
  - : Der Hauptartikel für ein Interface sollte dieses Schlagwort verwenden. Zum Beispiel: RTCPeerConnection.
- `{{Tag("Constructor")}}`
  - : Jedes Interface darf bis zu eine Seite haben, die mit "Constructor" gekennzeichnet ist. Dies ist der Konstruktor des Interface. Die Seite sollte den gleichen Namen haben wie das Interface, wie in RTCPeerConnection.RTCPeerConnection().
- `{{Tag("Property")}}`
  - : Jeder Artikel, der eine Eigenschaft von einem Interface beschreibt, benötigt dieses Schlagwort. Siehe zum Beispiel: RTCPeerConnection.connectionState().
- `{{Tag("Method")}}`
  - : Jeder Artikel, der eine Methode eines Interfaces dokumentiert, benötigt dieses Schlagwort. Siehe zum Beispiel: RTCPeerConnection.createOffer().

Weiterhin müssen Referenzseiten Interface, Eigenschaft und Methodennamen in ihrer Schlagwortliste enthalten. Einige Bespiele:

- Das Interface RTCPeerConnection
  - : Fügen Sie die Schlagwörter `RTCPeerConnection` zusammen mit den anderen relevanten Schlagwörtern ( `Interface`, `WebRTC`, `WebRTC API`, `API`, `Reference`, usw.) hinzu.
- Die Methode RTCPeerConnection.createOffer()
  - : Fügen Sie die Schlagwörter `RTCPeerConnection` und `createOffer` (Beachten Sie hierbei: _keine_ Klammern in Schlagwörtern!) zusammen mit den anderen relevanten Schlagwörtern hinzu, wie `Method`, `WebRTC`, `WebRTC API`, `API`, `Reference`, usw. Erwägen Sie auch die Verwendung von Schlagwörtern wie `Offer` und `SDP`, die hier auch relevant sind.
- Die Eigenschaft RTCPeerConnection.iceConnectionState
  - : Fügen Sie die Schlagwörter `RTCPeerConnection` und `iceConnectionState` zusammen mit anderen relevanten Schlagwörtern hinzu, wie `Property`, `WebRTC`, `WebRTC API`, `API` und `Reference`. Erwägen sie auch, `ICE` hinzuzufügen.

### Technologie-Status

Um dem Leser bei dem Verstehen, wie praktikabel eine Technologie ist, zu unterstützen, verwenden wir Schlagwörter, um Seiten mit dem Stand einer technischen Spezifikation zu markieren. Dies ist zwar nicht so detailliert, wie das erklären der Spezifikation und wie weit der Spezifikations-Prozess fortgeschritten ist (dafür gibt es die Spezifikations-Tabelle), aber es hilft dem Leser, mit einem kurzen Blick einzuschätzen, ob es eine gute Idee ist, die beschriebene Technologie zu verwenden.

Hier sind mögliche Belegungen für diese Schlagwörter:

- `{{Tag("Read-only")}}`
  - : Nutzen Sie dieses Schlagwort für Referenzseiten, die eine Eigenschaft oder ein Attribut beschreiben, das einen Nur-Lese-Status hat.
- `{{Tag("Non-standard")}}`
  - : Weist darauf hin, dass die auf der Seite beschriebene Technologie oder API nicht Teil eines Standards ist, unabhängig davon, ob es in den Browsern, die es implementieren, stabil funktioniert (wenn es nicht stabil sind, sollte die Seite mit Experimental gekennzeichnet werden). Wenn Sie dieses Schlagwort nicht verwenden, werden Ihre Leser davon ausgehen, dass die Technologie ein Standard ist. Die Kompatibilitäts-Tabelle auf der Seite sollte klarstellen, welche/-r Browser diese API oder Technologie unterstützen.
- `{{Tag("Deprecated")}}`
  - : Die Technologie oder die API auf der Seite ist in der Spezifikation als veraltet gekennzeichnet und es ist zu erwarten, dass sie irgendwann entfernt wird, jedoch ist sie im Allgemeinen in den aktuellen Versionen der Browser noch verfügbar.
- `{{Tag("Obsolete")}}`
  - : Die Technologie oder API gilt als veraltet und wurde aus allen, bzw. den meisten aktuellen Browsern entfernt (oder sie wird gerade aktiv entfernt).
- `{{Tag("Experimental")}}`
  - : Die Technologie ist nicht standardisiert und ist noch eine experimentelle Technologie oder API, die möglicherwiese zukünftig ein Standard werden könnte. Sie unterliegt zudem der stetigen Veränderungen in der Browserengine, die sie implementiert (typischerweise ist dies nur eine). Wenn die Technologie nicht Teil einer Spezifikation ist (auch, falls sie Teil eines Entwurfs derselben ist), so sollte sie außerdem das Schlagwort Non-standard bekommen.
- `{{Tag("Needs Privileges")}}`
  - : Die API benötigt privilegierten Zugriff zu dem Gerät, auf dem der Code läuft.
- `{{Tag("Certified Only")}}`
  - : Die API funktioniert ausschließlich mit zertifiziertem Code.

Die Verwendung dieser Schlagwörter ist kein Grund dafür, dass Sie die [Kompatibilitätstabelle](de/docs/MDN/Contribute/Structures/Kompatibilitaets_Tabellen "/en-US/docs/Project:Compatibility_tables") in Ihrem Artikel weglassen können! Die sollte immer vorhanden sein.

### Fertigkeitsstand

Nutzen Sie die Fertigkeitsstand-Schlagwörter nur für Guides und Tutorials (also Seiten, die mit dem Schlagwort: `Guide` gekennzeichnet wurden). Sie sollen den Benutzern dabei helfen, basierend darauf, wie gut sie eine Technologie kennen, das richtige Tutorial auszuwählen. Hierfür gibt es drei Schlagwörter:

- `{{Tag("Beginner")}}`
  - : Artikel für Anfänger mit dem Zweck der Einführung in eine Technologie, die sie noch nie angewendet haben bzw. mit der sie nur wenig vertraut sind.
- `{{Tag("Intermediate")}}`
  - : Artikel für Anwender, die zwar schon begonnen haben, die Technologie zu benutzen, jedoch keine Experten sind.
- `{{Tag("Advanced")}}`
  - : Artikel mit dem Ziel, die Fähigkeiten der Technologien und des Lesers vollständig auszuschöpfen.

### Dokument-Metadaten

Die Autoren-Gemeinschaft verwendet Schlagwörter, um Artikel entsprechend der Art der Arbeit, die gemacht werden muss, zu kennzeichnen. Hier ist eine Liste der Schlagwörter, die wir am häufigsten dafür benutzen:

- `{{Tag("Draft")}}`
  - : Der Artikel ist noch nicht vollständig und wird zumindest theoretisch noch aktiv überarbeitet (auch wenn es möglich ist, dass man ihn vergessen hat). Versuchen Sie, die letzten Beitragenden zu kontaktieren, bevor Sie Veränderungen vornehmen, um mögliche Inhaltskollisionen zu vermeiden.
- **`{{Tag("junk")}}`**
  - : Beitrag enthält wertloses Zeug - sollte entfernt werden _(Dieses Schlagwort wird in der englischen Version dieser Seite nicht mehr beschrieben und ist möglicherweise nicht mehr aktuell)_.
- `{{Tag("NeedsCompatTable")}}`
  - : Der Artikel benötigt eine Tabelle, welche die Kompatibilität eines Features mit verschiedenen Browsern aufzeigt. [Siehe hier](/de/docs/MDN/Contribute/Structures/Kompatibilitaets_Tabellen) für die Anleitung zum Beitragen der Browser-Kompatiblität.
- `{{Tag("NeedsContent")}}`
  - : Der Artikel ist ein Kurzeintrag oder es fehlen auf eine andere Art und Weise Informationen. Das bedeutet, dass jemand den Inhalt überarbeiten, mehr Details hinzufügen und/oder den Artikel zu Ende schreiben sollte.
- `{{Tag("NeedsExample")}}`
  - : Der Artikel benötigt ein oder mehrere Beispiele, um den Inhalt zu illustrieren. Solche Beispiele sollten das [live sample system](/de/docs/Project:MDN/Contributing/How_to_help/Code_samples) benutzen.
- `{{Tag("NeedsLiveSamples")}}`
  - : In diesem Artikel bit es ein oder mehrere Beispiele, die mittels [live sample system](/de/docs/Project:MDN/Contributing/How_to_help/Code_samples) erneuert werden müssen.
- `{{Tag("NeedsSpecTable")}}`
  - : Der Artikel benötigt eine Tabelle, welche das bzw. die Dokument/-e enthält, in dem/denen das Feature definiert wurde.
- `{{Tag("NeedsUpdate")}}`
  - : Der Inhalt ist veraltet und muss aktualisiert werden.
- `{{Tag("l10n:exclude")}}`
  - : Der Inhalt ist es nicht wirklich wert, übersetzt zu werden und wird nicht auf Übersetzungs-Status-Seiten erscheinen.
- `{{Tag("l10n:priority")}}`
  - : Der Inhalt ist wichtig und sollte für MDN-Übersetzer als priorisiert markiert sein. Er wird in einer extra Prioritäts-Tabelle auf Lokalisierungs-Status-Seiten erscheinen.

### Web Literacy Map

_(Dieser Abschnitt ist in der Englischen Version dieser Seite nicht mehr vorhanden und möglicherweise nicht mehr aktuell)_ Das [WebMaker](https://webmaker.org) Projekt, siehe [Web Literacy Map](https://webmaker.org/literacy), hat eine Reihe von Schlagwörtern definiert, um die verschiedenen und empfohlenen Fähigkeiten zu definieren, die ein besseres Lesen, Schreiben und die Teilnahme am Web ermöglichen. Wir benutzen sie auf MDN, um unseren Anwendern die besten Resourcen zu finden, welche ihren Ansprüchen genügen:

- {{Tag("Navigation")}}
  - : Der Beitrag liefert Informationen darüber wie man das Web durchsuchen kann.
- {{Tag("WebMechanics")}}
  - : Der Beitrag liefert Informationen darüber wie das Web organisiert ist und wie es funktioniert.
- {{Tag("Search")}}
  - : Der Beitrag zeigt die Möglichkeiten auf, wo Informationen, Personen und Resourcen mittels des des Webs zu finden sind.
- {{Tag("Credibility")}}
  - : Der Artikel liefert Informationen darüber wie kritisch zu bewertende Informationen sind, die auf dem Web gefunden wurden.
- {{Tag("Security")}}
  - : Der Artikel liefert Informationen wie man Systeme, Identitäten und Inhalt sicher aufbewahrt.
- {{Tag("Composing")}}
  - : Der Artikel liefert Informationen wie Inhalt für das Web kreiert und sichert.
- {{Tag("Remixing")}}
  - : Der Artikel liefert Informationen wie man existierende Web-Resourcen nutzt, um neue Inhalte zu erstellen.
- {{Tag("DesignAccessibility")}}
  - : Der Artikel liefert Informationen darüber, wie eine effektive und universelle Kommunikation mittels Nutzung der Web-Resourcen zustande gebracht werden kann.
- {{Tag("CodingScripting")}}
  - : Der Artikel liefert Informationen wie interaktive Kodierung und/oderErfahrungen auf dem Web erstellt werden können.
- {{Tag("infrastructure")}}
  - : Der Artikel liefert Informationen, die das Verständnis der Internet-Technik aufzeigen.
- {{Tag("Sharing")}}
  - : Der Artikel zeigt auf, wie man zusammen mit anderen Teilnehmern Resourcen kreiert.
- {{Tag("Collaborating")}}
  - : Der Artikel liefert Informationen wie man mit an deren zusammenarbeiten kann.
- {{Tag("Community")}}
  - : Der Artikel liefert Informationen wie man in Web-Communities eingebunden werden kann und zeigt deren Praktiken auf.
- {{Tag("Privacy")}}
  - : Der Artikel liefert Informationen über Konsequenzen, wenn Daten online ausgetauscht werden.
- {{Tag("OpenPracticies")}}
  - : Der Artikel liefert Informationen wie geholfen werden kann, das Web universell zugänglich zu machen.

## Zusammenfassung

Für jede Seite fügen Sie nun verscheidene Schlagwort-Typen hinzu, zum Beispiel:

- Eine Anleitung über WebGL für Anfänger:
  - : {{Tag("WebGL")}}, {{Tag("Graphics")}}, {{Tag("Guide")}}, {{Tag("Beginner")}}
- Referenz-Seite für das {{HTMLElement("canvas")}} Element
  - : {{Tag("Canvas")}}, {{Tag("HTML")}}, {{Tag("Element")}}, {{Tag("Graphics")}}, {{Tag("Reference")}}
- Seite für Firefox OS Entwickler-Werkzeuge
  - : {{Tag("Tools")}}, {{Tag("Firefox OS")}}, {{Tag("Landing")}}

## Schlagwörter und Suchfilter

Suchfilter funktionieren nicht richtig, außer wir verwenden die Schlagwörter der MDN-Seiten korrekt. Hier ist eine Tabelle mit Suchfiltern und den Schlagwörtern, die sie benutzen. _(Diese Tabelle ist möglicherweise nicht aktuell, siehe auch [englische Version](en-US/docs/MDN/Contribute/Howto/Tag#Tagging_and_search_filters))_

> **Note:** Falls mehrere Tags unter "Tag Name" gelistet sind, bedeutet das, dass einer oder mehrere dieser Tags benötigt werden, damit der Artikel gefunden wird.

| Filter-Gruppe | Suchfilter Name      | Schlagwörter                                                                                                          |
| ------------- | -------------------- | --------------------------------------------------------------------------------------------------------------------- |
| Topic         | Open Web Apps        | {{Tag("Apps")}}                                                                                                  |
|               | HTML                 | {{Tag("HTML")}}                                                                                                  |
|               | CSS                  | {{Tag("CSS")}}                                                                                                  |
|               | JavaScript           | {{Tag("JavaScript")}}                                                                                          |
|               | APIs and DOM         | {{Tag("API")}}                                                                                                  |
|               | Canvas               | {{Tag("Canvas")}}                                                                                              |
|               | SVG                  | {{Tag("SVG")}}                                                                                                  |
|               | MathML               | {{Tag("MathML")}}                                                                                              |
|               | WebGL                | {{Tag("WebGL")}}                                                                                                  |
|               | XUL                  | {{Tag("XUL")}}                                                                                                  |
|               | Marketplace          | {{Tag("Marketplace")}}                                                                                          |
|               | Firefox              | {{Tag("Firefox")}}                                                                                              |
|               | Firefox for Android  | {{Tag("Firefox Mobile")}}                                                                                      |
|               | Firefox for Desktop  | {{Tag("Firefox Desktop")}}                                                                                  |
|               | Firefox OS           | {{Tag("Firefox OS")}}                                                                                          |
|               | Mobile               | {{Tag("Mobile")}}                                                                                              |
|               | Web Development      | {{Tag("Web Development")}}                                                                                  |
|               | Add-ons & Extensions | {{Tag("Add-ons ")}}\|\| {{Tag("Extensions")}} \|\| {{Tag("Plugins")}} \|\| {{Tag("Themes")}} |
|               | Games                | {{Tag("Games")}}                                                                                                  |
| Skill level   | I'm an Expert        | {{Tag("Advanced")}}                                                                                              |
|               | Intermediate         | {{Tag("Intermediate")}}                                                                                      |
|               | I'm Learning         | {{Tag("Beginner")}}                                                                                              |
| Document type | Docs                 | _This will restrict the search to docs content, leaving out Hacks and other MDN content._                             |
|               | Demos                | _This will include Demo Studio content in the search results._                                                        |
|               | Tools                | {{Tag("Tools")}}                                                                                                  |
|               | Code Samples         | {{Tag("Example")}}                                                                                              |
|               | How-To & Tutorial    | {{Tag("Guide")}}                                                                                                  |
|               | Developer Profiles   | _This will include developer profiles from the MDN site in the search results._                                       |
|               | External Resources   | _This is something the dev team will need to figure out._                                                             |

## Schlagwörter-Probleme, die Sie beheben können

Es gibt verschiene Typen von Problemen mit Schlagwörtern, die Sie beheben können.

- Keine Schlagwörter
  - : im Allgemeinen sollten alle Artikel _mindestens_ mit einem [category ](/de/docs/Project:MDN/Contributing/Tagging_standards#Category "/en-US/docs/Project:MDN/Contributing/Tagging_standards#Categories")und einem [topic ](/de/docs/Project:MDN/Contributing/Tagging_standards#Topic)Schlagwort versehen sein. Meistens sind auch andere Schlagwörter sinnvoll, aber wenn Sie uns helfen können, diese minimale Kennzeichnung mit Schlagwörtern auf allen Seiten sicherzustellen, sind sie ein Dokumentationsheld!
- Schlagwörter, die nicht unseren Schlagwort-Standards entsprechen
  - : Bitte beseitigen sie in alle Probleme auf Seiten, deren Schlagwörter nicht den Standars auf dieser Seite folgen. Beachten Sie, dass Sie gelegentlich einige lokalisierte Schlagwörter auf Englischen Seiten sehen werden (wie `Référence`). Dies ist aufgrund eines [Bugs in Kuma](https://bugzilla.mozilla.org/show_bug.cgi?id=776048) passiert, was dazu führte, das einige Schlagwörter wieder auftauchten, auch wenn sie bereits gelöscht waren. Dieser Bug wurde [seitdem behoben](https://bugzilla.mozilla.org/show_bug.cgi?id=776048#c37), sodass sämtliche verbliebene lokalisierte Schlagwörter (auf den englischen Seiten) bereinigt werden können, wenn sie gesichtet werden.
- Falsch verwendete Schlagwörter
  - : Wenn Sie sich einen Artikel über HTML ansehen, der mit dem Schlagwort "JavaScript" versehen ist, dann ist das wahrscheinlich falsch! Genauso ist es, wenn ein Artikel Mozilla-interne Dinge beschreibt, aber mit einem "Web" Schlagwort versehen ist. Das ist vermutlich auch falsch. Entfernen Sie diese Schlagwörter und fügen Sie die richtigen hinzu, falls sie noch nicht vorhanden sind. Bitte korrigieren Sie auch falsch geschriebene Schlagwörter (z.B. würde "Javascript" immer noch funktionieren, da Schlagwörter keine Groß- und Kleinschreibung berücksichtigen, aber lassen Sie uns nicht nachlässig sein!).
- Fehlende Schlagwörter
  - : Wenn ein Artikel ein paar, aber noch nicht alle Schlagwörter hat, die er benötigt, fügen Sie ruhig mehr hinzu. Zum Beispiel, wenn eine JavaScript-Referenzseite (korrekterweise) mit dem Schlagwort JavaScript versehen ist, aber keinem sonst, fügen Sie gerne das Schlagwort "Reference" oder einen anderes, passendes Kategorie-Schlagwort hinzu!
- Schlagwort-Spam
  - : Dieses heimtückische Biest ist das abstoßendste aller Schlagwort-Probleme: irgendein Web-Ungeziefer hat seine Häufchen in den Schlagwörtern hinterlassen (wie zum Beispiel "Free warez!" oder "Hey ich war auf deiner Seite unterwegs und wollte fragen ob du mir helfen kannst mein Flashplayer stürzt dauernd ab"). Wir müssen solche Schlagwörter sofort löschen! Sie sind unschön, es wird schwer, sie loszuwerden, wenn wir sie zu lange rumlungern lassen und sie sind schrecklich für {{Glossary("SEO")}}.

Wenn Sie eines (oder mehrere) dieser Probleme bemerken, [melden Sie sich bei MDN an](/de/docs/Project:MDN/Contributing/Getting_started#Logging_into_MDN) und klicken Sie auf "Bearbeiten" oben rechts am MDN-Fenster. Nachdem der Editor geladen ist, scrollen Sie nach unten zum Ende der Seite. Dort finden Sie die Schlagwort-Box. Für mehr Details zur Schlagwort-Oberfläche besuchen Sie bitte "[The tags box](/de/docs/MDN/Contribute/Editoren_Anleitung/Basics#The_tags_box)" im [MDN-Editor-Leitfaden](/de/docs/MDN/Contribute/Editoren_Anleitung).
