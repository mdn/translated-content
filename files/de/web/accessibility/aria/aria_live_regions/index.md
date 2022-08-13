---
title: ARIA Live-Regionen
slug: Web/Accessibility/ARIA/ARIA_Live_Regions
translation_of: Web/Accessibility/ARIA/ARIA_Live_Regions
original_slug: Web/Barrierefreiheit/ARIA/ARIA_Live_Regionen
---
## Einführung

In der Vergangenheit konnten Änderungen bei Webseiten nur so von einem Screenreader kommuniziert werden, dass der komplette Inhalt vorgelesen oder nur sehr wenig bis gar nichts über die Inhaltsänderungen berichtet wurde. Dies führte dazu, dass einige oder sogar alle Informationen unzugänglich waren. Bisher waren Screenreader nicht in der Lage, diese Situation zu verbessern, weil es keine standardisierte Methode gab, um Screenreader per Markup über Veränderungen zu informieren. ARIA-Live-Regionen sollen diese Lücke schließen. Über Live-Regionen erhalten Screenreader Anweisungen, wonach entschieden werden kann, ob und wann Benutzer unterbrochen werden sollen, um sie über Veränderungen des Inhalts in Kenntnis zu setzen.

## Einfache Live-Regionen

Dynamische Inhalte, die ohne das Neuladen einer Webseite nachgeladen werden, sind im Allgemeinen entweder eine Region oder eine Komponente. Einfache Inhaltsänderungen, die nicht interaktiv sind, sollten als Live-Regionen gekennzeichnet werden. In der folgenden Liste werden die unterschiedlichen Eigenschaften für ARIA-Live-Regionen mit einer Beschreibung aufgeführt.

1. **aria-live:** Mit aria-live=POLITENESS_SETTING wird die Priorität für die Behandlung von Aktualisierungen von Live-Regionen festgelegt - die möglichen Werte für diese Einstellung sind: off/polite/assertive, wobei "off" der Default-Wert ist. Diese Eigenschaft ist mit Abstand die Wichtigste.
2. **aria-controls**: Mit aria-controls=\[IDLIST] wird ein Steuerungselement mit der Region verknüpft, die es kontrollieren soll. Regionen werden ähnlich wie div-Elemente anhand einer ID identifiziert. Wenn mehrere Regionen mit einer Steuerung verknüpft werden sollen, können diese einfach getrennt durch ein Leerzeichen angegeben werden, z.B. aria-controls="myRegionID1 myRegionsID2".

    > **Warning:** Not known if the aria-controls aspect of live regions is implemented in current ATs, or which. Needs research.

In der Regel wird ausschließlich aria-live="polite" verwendet. Alle Regionen, die mit Informationen aktualisiert werden, die zwar wichtig sind, jedoch nicht so dringend, dass der Benutzer sofort unterbrochen und darüber informiert werden sollte, sollten dieses Attribut erhalten. Der Screenreader setzt den Benutzer dann über die Änderungen in Kenntnis, sobald er nicht mehr beschäftigt ist.

Regionen, die unrelevant sind oder z.B. wegen ständiger Aktualisierungen störend wirken könnten, sollten mit aria-live="off" stillgeschaltet werden.

### Einfaches Einsatzszenario: Eine Combobox aktualisiert nützliche On-Screen-Informationen

Angenommen eine Website, die Informationen über Vogelarten bereitstellt, bietet ein Dropdown-Menü zur Auswahl einer der Vogelarten an und bei der Auswahl werden in einer Region Informationen über diese Vogelart angezeigt.

`<select size="1" id="bird-selector" aria-controls="bird-info"><option> .... </select>`

`<div role="region" id="bird-info" aria-live="polite">`

Sobald der Benutzer eine Vogelart selektiert, wird die Information vorgelesen. Da für die Region "polite" eingestellt ist, wartet der Screenreader, bis der Benutzer nicht mehr beschäftigt ist. Folglich wird bei der Bewegung nach unten in der Liste nicht jede Vogelart vorgelesen, sondern nur die ausgewählte.

## Bevorzugung von spezialisierten Live-Region-Rollen

Für die folgenden bekannten vordefinierten Situationen sollte bevorzugt eine entsprechende "Live-Region-Rolle" eingesetzt werden:

| Rolle       | Beschreibung                                                                                                                                                                                                                   | Hinweise zur Kompatibilität                                                                                                                                                                                    |
| ----------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| log         | Chat, Fehler, Spiel oder andere Logs                                                                                                                                                                                           | Zur Maximierung der Kompatiblität sollte ein redundantes aria-live="polite" hinzugefügt werden, wenn diese Rolle verwendet wird.                                                                               |
| status      | Eine Statusleiste oder Bildschirmbereich, der einen aktualisierbaren Status anzeigt. Screenreader-Benutzer können mit einem speziellen Befehl den aktuellen Status abfragen.                                                   | Zur Maximierung der Kompatiblität sollte ein redundantes aria-live="polite" hinzugefügt werden, wenn diese Rolle verwendet wird.                                                                               |
| alert       | Eine Fehler- oder Warnungmeldung, die auf dem Bildschirm eingeblendet wird. Alarmmeldungen sind insbesondere bei der clentseitige Validierungsmeldungen für Benutzer wichtig. (TBD: link to ARIA form tutorial with aria info) | Zur Maximierung der Kompatiblität sollte ein redundantes aria-live="assertive" hinzugefügt werden, wenn diese Rolle verwendet wird. (TBD: check to see if this is necessary or causes double speaking issues.) |
| progressbar | Eine Kombination aus einer Komponente und einer Live-Region. Verwenden Sie diese Rolle mit aria-valuemin, aria-valuenow und aria-valuemax. (TBD: add more info here).                                                          |                                                                                                                                                                                                                |
| marquee     | Für scrollenden Text, wie z.B. ein Börsenticker.                                                                                                                                                                               |                                                                                                                                                                                                                |
| timer       | Jede Art von Zeitschaltung oder Uhr, wie z.B. ein Countdown-Timer oder eine Stoppuhr.                                                                                                                                          |                                                                                                                                                                                                                |

## Fortgeschrittene Live-Regionen

(TBD: what is supported where?)

1. **aria-atomic:** Das Attribut aria-atomic=BOOLEAN wird eingesetzt, um festzulegen, ob der Screenreader die Live-Regionen als Ganzes präsentieren soll, auch wenn sich nur ein Teil dieser Region ändert. Die möglichen Werte sind false oder true, wobei false der Default-Wert ist.
2. **aria-relevant:** Mit aria-relevant=\[LIST_OF_CHANGES] wird bestimmt, welche Art von Veränderungen relevant für eine Live-Region sind - die möglichen Werte sind additions/removals/text/all. Der Default-Wert ist "additions text".
3. **aria-labelledby**: Mit aria-labelledby=\[IDLIST] wird eine Region mit seinen Labels verknüpft. Die Technik ist dieselbe wie bei aria-controls, nur dass hier Labels statt Steuerungselemente mit der Region verknüpft werden. Mehrere Bezeichner können durch Leerzeichen getrennt angegeben werden.
4. **aria-describedby:** Das Attribut aria-describedby=\[IDLIST] wird verwendet, um eine Region mit einer Beschreibung zu verknüpfen. Auch hier ist die Technik dieselbe, wie bei aria-controls, nur dass eine Beschreibung statt einer Steuerung verknüpft wird. Mehrere Bezeichner für Beschreibungen können durch Leerzeichen getrennt angegeben werden.

### Fortgeschrittenes Einsatzszenario: Roster

Auf einer Chat-Webseite soll eine Liste von Benutzern angezeigt werden, die zum aktuellen Zeitpunkt eingeloggt sind. Der Status der Benutzer soll dabei dynamisch (ohne Aktualisierung der Webseite) auf dem neusten Stand gehalten werden.

    <ul id="roster" aria-live="polite" aria-relevant="additions removals">
     <!-- Hier wird JavaScript zum Hinzufügen und Entfernen von Benutzern eingesetzt -->
    </ul>

Zusammenfassende Beschreibung von ARIA-Live-Eigenschaften:

- aria-live="polite" legt fest, dass der Screenreader warten soll, bis der Benutzer nicht mehr beschäftigt ist, bevor die Aktualisierungen ausgegeben werden. Dieser Wert wird am häufigsten verwendet, da das Setzen des Werts "assertive" dafür sorgt, dass der Benutzer während er noch aktiv ist unterbrochen wird, was für den Benutzer störend sein kann.
- Die Eigeschaft aria-atomic wurde nicht gesetzt (Default-Wert: "false"), sodass nur hinzugekommene und den Chat verlassende Benutzer genannt werden und nicht die gesamte Liste vorgelesen wird.
- Mit aria-relevant="additions removals" wird sichergestellt, dass sowohl die hinzugekommenen als auch die den Chat verlassenden Benutzer genannt werden.

TBD: Realistic use case for aria-atomic="true"
