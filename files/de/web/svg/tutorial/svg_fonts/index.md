---
title: SVG-Schriftarten
slug: Web/SVG/Tutorial/SVG_fonts
translation_of: Web/SVG/Tutorial/SVG_fonts
original_slug: Web/SVG/Tutorial/SVG_Schriftarten
---
{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}

Als SVG spezifiziert wurde, war die Unterstützung für Web-Schriftarten in Browsern noch nicht sehr verbreitet. Weil ein Zugriff auf die richtige Schriftart für das korrekte Rendern jedoch so wichtig ist, wurde SVG eine Technologie zur Beschreibung von Schriftarten hinzugefügt, um dies zu ermöglichen. Dabei war eine Kompatibilität mit anderen Formaten wie PostScript oder OTF nicht vorgesehen, sondern vielmehr als ein einfaches Mittel, um Informationen über Zeichen fürs Rendern in SVG einbetten zu können.

**SVG-Schriftarten werden gegenwärtig nur durch Safari und Android-Browser unterstützt.**

> **Note:** Im Internet Explorer [wurde eine Implementierung nicht berücksichtigt](http://blogs.msdn.com/b/ie/archive/2010/08/04/html5-modernized-fourth-ie9-platform-preview-available-for-developers.aspx), in [Chrome 38 wurde sie entfernt](https://www.chromestatus.com/feature/5930075908210688) (auch in Opera 25) und Firefox hat es auf [unbestimmte Zeit verschoben](https://bugzilla.mozilla.org/show_bug.cgi?id=119490), um sich auf [WOFF](/en/WOFF "en/About WOFF") konzentrieren zu können. Andere Tools jedoch wie [Adobe SVG Viewer](http://www.adobe.com/svg/viewer/install/)-Plugin, Batik und Teile von Inkscape unterstützen das Einbetten von SVG-Schriftarten.

Das grundlegende Tag zur Definition einer SVG-Schriftart ist {{ SVGElement("font") }}.

## Eine Schriftart definieren

Es sind einige Angaben nötig, um eine Schriftart in SVG einzubetten. Gezeigt wird das Beispiel [aus der Spezifikation](http://www.w3.org/TR/SVG/fonts.html#FontElement) und an ihm werden die Details erklärt.

    <font id="Font1" horiz-adv-x="1000">
      <font-face font-family="Super Sans" font-weight="bold" font-style="normal"
          units-per-em="1000" cap-height="600" x-height="400"
          ascent="700" descent="300"
          alphabetic="0" mathematical="350" ideographic="400" hanging="500">
        <font-face-src>
          <font-face-name name="Super Sans Bold"/>
        </font-face-src>
      </font-face>
      <missing-glyph><path d="M0,0h200v200h-200z"/></missing-glyph>
      <glyph unicode="!" horiz-adv-x="300"><!-- Umrisslinie von ! --></glyph>
      <glyph unicode="@"><!-- Umrisslinie von @ --></glyph>
      <!-- weitere Zeichen -->
    </font>

Am Anfang steht das {{ SVGElement("font") }}-Tag. Es enthält das Attribut `id`, das einen späteren Zugriff (Referenzierung) mittels URI (siehe unten) ermöglicht. Das Attribut `horiz-adv-x` legt fest, wie breit ein Zeichen durchschnittlich verglichen zur path-Definition eines einzelnen Zeichens ist. Der Wert `1000` legt einen vernünftigen Wert fest, um damit zu arbeiten. Es gibt weitere Attribute, die helfen, den Kasten näher zu definieren, in dem das Zeichen erstellt werden soll.

Das {{ SVGElement("font-face") }}-Tag ist das SVG-Gegenstück zu CSS [`@font-face`](/en/CSS/@font-face "en/css/@font-face"). Darin werden Grundeinstellungen der fertigen Schriftart wie Schriftstärke, Stil usw. definiert. Im obigen Beispiel ist das erste und wichtigste Attribut `font-family`, sein Wert (im Beispiel "Super Sans") ermöglicht in CSS und in SVG mittels `font-family` den Zugriff auf die Schriftart. Die Attribute `font-weight` und `font-style` erledigen dieselben Aufgaben wie ihre Gegenstücke in CSS. Alle folgenden Attribute sind Rendering-Anweisungen für die Schriftart-Layout-Maschine, zum Beispiel, wie viele Zeichen Gesamthöhen haben, die über der Höhe des Kleinbuchstabens x liegen.

Das Kind-Tag {{ SVGElement("font-face-src") }} entspricht dem `src`-Descriptor bei `@font-face` in CSS. Mittels der Kinder-Tags {{ SVGElement("font-face-name") }} und {{ SVGElement("font-face-uri") }} können auf externe Quellen verwiesen werden. Am obigen Beispiel gezeigt: Wenn dem Renderer lokal eine Schriftart namens "Super Sans Bold" verfügbar ist, soll er diese stattdessen benutzen.

Das {{ SVGElement("missing-glyph") }}-Tag wird benutzt, um ein Zeichen zu definieren, das angezeigt wird, falls in der Schriftart kein Zeichen an dieser Stelle definiert wurde und auch kein Ausweichmechanismus zur Verfügung steht. Am Beispiel der Definition des Missing-Glyph (im obigen Beispiel) kann gezeigt werden, wie Zeichen gemacht werden: Einfach irgendeine beliebige SVG-Form oder -Pfad einfügen.

Auch andere SVG-Tags können hier benutzt werden, zum Beispiel {{ SVGElement("filter") }}, {{ SVGElement("a") }} oder {{ SVGElement("script") }}. Für einfache Zeichen aber kann ein Attribut `d` hinzugefügt werden. Es definiert den Umriss des Zeichens genau so, wie es beim `path`-Tag geschieht.

Ein beliebiges Zeichen wird schließlich mit {{ SVGElement("glyph") }} definiert. Das wichtigste Attribut dabei ist `unicode`. Es legt den Unicode-Codepoint fest, also ob das definierte Zeichen zum Beispiel anstelle des Buchstabens "F" stehen soll. Wird das Attribut {{htmlattrxref("lang")}} eingesetzt, kann die Verwendung auf eine bestimmte Sprache eingeschränkt werden (abhängig von der Angabe bei `xml:lang`). Und noch mal, es kann beliebiges SVG genutzt werden, um ein Zeichen zu definieren, was den, der die Schriftart nutzt, sehr unstützt.

Die Tags {{ SVGElement("hkern") }} und {{ SVGElement("vkern") }} können in `font` eingesetzt werden. Beide benötigen die Attribute `u1` und `u2` und das Attribut `k`, mit dessen Hilfe der Abstand zwischen u1 und u2 individuell verringert werden kann. Das folgende Beispiel rückt "A" und "V" näher zusammen, als es der Standardabstand eigentlich vorsieht.

    <hkern u1="A" u2="V" k="20" />

## Auf eine Schriftart zugreifen

Wenn die Schriftart fertig ist, kann im {{ SVGElement("text") }}-Tag mit dem Attribut `font-family` auf sie zugegriffen werden:

    <font>
      <font-face font-family="Super Sans" />
      <!-- und so weiter -->
    </font>

    <text font-family="Super Sans">Mein Text benutzt Super Sans</text>

Die Kombination des Attributs mit anderen Tags ermöglicht, die Schriftart an beliebiger Stelle definieren zu können.

### Option: CSS @font-face benutzen

`@font-face` kann benutzt werden, um Zugriff auf externe (und auch nicht-externe) Schriftarten zu bekommen:

    <font id="Super_Sans">
      <!-- und so weiter -->
    </font>

    <style type="text/css">
    @font-face {
      font-family: "Super Sans";
      src: url(#Super_Sans);
    }
    </style>

    <text font-family="Super Sans">Mein Text benutzt Super Sans</text>

### Option: Zugriff auf eine externe Schriftart

Das oben erwähnte `font-face-uri`-Tag ermöglicht den Zugriff auf externe Schriftarten, was eine noch weitere Wiederverwendbarkeit ermöglicht:

    <font>
      <font-face font-family="Super Sans">
        <font-face-src>
          <font-face-uri xlink:href="fonts.svg#Super_Sans" />
        </font-face-src>
      </font-face>
    </font>

{{ PreviousNext("Web/SVG/Tutorial/Filter_effects", "Web/SVG/Tutorial/SVG_Image_Tag") }}
