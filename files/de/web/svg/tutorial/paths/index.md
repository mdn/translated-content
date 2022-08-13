---
title: Pfade
slug: Web/SVG/Tutorial/Paths
tags:
  - Fortgeschritten
  - HilfeBenötigt
  - InhaltBenötigt
  - SVG
  - SVG:Tutorial
translation_of: Web/SVG/Tutorial/Paths
original_slug: Web/SVG/Tutorial/Pfade
---
{{ PreviousNext("Web/SVG/Tutorial/Basic_Shapes", "Web/SVG/Tutorial/Fills_and_Strokes") }}

Das [`<path>`](/en-US/Web/SVG/Element/path) Element ist das mächtigste Element in der SVG Sammlung der [grundlegenden Elemente](/de/docs/Web/SVG/Tutorial/Basic_Shapes). Man kann es zur Erstellung von Linien, Kurven, Bögen und weiterem verwenden.

Pfade bilden komplexe Formen beim Kombinieren mehrerer gerader Linien oder Kurven. Komplexe Formen, die nur aus geraden Linien bestehen, können als [Polylines](/de/docs/Web/SVG/Tutorial/Basic_Shapes#Polyline) erstellt werden. Während Polylines und Pfade ähnlich aussehende Formen bilden können benötigen Polylines viele kleine geraden Linien um Kurven zu simulieren und werden nicht gut auf grössere Grössen skaliert. Ein gutes Verständnis der Pfade ist wichtig beim zeichen von SVGs. Während das Erstellen komplexer Pfade mit einem XML Editor oder Texteditor nicht empfohlen wird, hilft das Verständnis derer Funktionsweise Anzeigeprobleme in SVGs zu identifizieren und zu beheben.

Die Form eines Pfad-Elements wird durch ein Attribut definiert: {{ SVGAttr("d") }} (weiteres in [grundlegende Formen](/de/docs/Web/SVG/Tutorial/Basic_Shapes)). Das `"d"` Attribut beinhaltet eine Folge an Befehlen und deren benötigten Parametern.

Jeder dieser Befehle wird instanziert (z.B. das Erstellen einer Klasse, deren Benennung oder deren Lokalisierung) mit einem bestimmten Buchstaben. Beispielsweise: Verschiebe zur x- und y-Koordinate (10, 10). Der "Move to" Befehl wird mit dem Buchstaben M aufgerufen. Wenn der Parser zu diesem Buchstaben kommt, weiss er, dass eine Verschiebung zu einem Punkt erwünscht ist. Um nun also eine Verschiebung zu (10, 10) vorzunehmen, würde man den Befehl "M 10 10" benutzen. Danach liest der Parser der nächsten Befehl aus.

Alle dieser Befehle gibt es in zwei Varianten. Ein **Grossbuchstabe** gibt absolute Koordinaten auf der Seite an und ein **Kleinbuchstabe** gibt relative Koordinaten (z.B. _verschiebe vom vorherigen Punkt 10px nach oben und 7px nach links_).

Koordinaten im `"d"` Attribute sind **immer einheitslos** und somit im Benutzerkoordinatensystem. Später wird erläutert, wie Pfade transformiert werden können um anderen Bedürfnissen gerecht zu werden.

## Linienbefehle

Es gibt fünf Linienbefehle für `<path>` Elemente. Der erste Befehl ist der "Move To" Befehl oder M, welcher oben beschrieben wurde. Er benötigt zwei Argumente, eine Koordinate 'x' und eine Koordinate 'y' zu denen verschoben werden soll. Falls sich der Cursor bereits irgendwo auf der Seite befindet, wird keine Linie gezeichnet, um diese beiden Punkte zu verbinden. Der "Move To" Befehl erscheint am Anfang von Pfaddefinitionen, um festzulegen, wo mit der Zeichnung begonnen werden soll. z.B. :

    M x y

oder

    m dx dy

Im folgenden Beispiel habe wir nur einen Punkt bei (10,10). Beachten Sie allerdings, dass er nicht angezeigt würde, falls sie den Pfad normal zeichnen. Zum Beispiel:![](/@api/deki/files/45/=Blank_Path_Area.png)

```xml
<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">

  <path d="M10 10"/>

  <!-- Punkte -->
  <circle cx="10" cy="10" r="2" fill="red"/>

</svg>
```

Es gibt drei Befehle, mit denen Linien gezeichnet werden können. Am typischsten ist der "Line To" Befehl, aufgerufen mit `L`. `L` benötigt zwei Parameter – x und y Koordinaten – und zeichnet eine Linie von der aktuellen Position zu einer neuen Position.

     L x y (oder l dx dy)

Es gibt zwei abgekürzte Formen um horizontale und vertikale Linien zu zeichnen. `H` zeichnet eine horizontale Line und `V` zeichnet eine vertikale Linie. Beide Befehle benötigen nur ein Argument, da sie nur in eine Richtung verschieben.

     H x (oder h dx)
     V y (oder v dy)

Eine einfache Anwendung ist das Zeichnen einer Form. Wir werden mit einem Rechteck beginnen (die Art, die auch einfacher mit dem `<rect>` Element erstellt werden könnte). Es wird nur aus horizontalen und vertikalen Linien zusammengestellt:

![](/@api/deki/files/292/=Path_Line_Commands.png)

```xml
<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg">

  <path d="M10 10 H 90 V 90 H 10 L 10 10"/>

  <!-- Punkte -->
  <circle cx="10" cy="10" r="2" fill="red"/>
  <circle cx="90" cy="90" r="2" fill="red"/>
  <circle cx="90" cy="10" r="2" fill="red"/>
  <circle cx="10" cy="90" r="2" fill="red"/>

</svg>
```

Wir können die obige Pfaddefinition ein wenig kürzen, indem wir den "Close Path" Befehl verwenden, welcher mit `Z` aufgerufen wird. Dieser Befehl zeichnet eine gerade Linie von der aktuellen Position zum ersten Punkt des Pfades. Er wird oft am Ende eines Pfad Elements verwendet, allerdings nicht immer. Es gibt keinen unterschied zwischen dem gross oder klein geschriebenen Befehl.

     Z (oder z)

Unser Pfad könnte also zu folgendem abgekürzt werden:

```xml
 <path d="M10 10 H 90 V 90 H 10 Z" fill="transparent" stroke="black"/>
```

Sie können auch die relative Form dieser Befehle verwenden, um das gleiche Bild zu zeichnen. Relative Befehle werden mit Kleinbuchstaben aufgerufen und anstatt den Cursor auf eine genaue Koordinate zu bewegen, bewegen sie ihn relativ zu seiner letzten Position. Da unsere Box beispielsweise 80 x 80 ist, hätte das Pfad-Element so geschrieben werden können:

```xml
 <path d="M10 10 h 80 v 80 h -80 Z" fill="transparent" stroke="black"/>
```

Der Pfad bewegt sich zu Punkt (10,10) und bewegt sich dann horizontal um 80 Punkte nach rechts, dann um 80 Punkte nach unten, dann um 80 Punkte nach links und dann zurück zum Anfang.

In diesen Beispielen wäre es wahrscheinlich einfacher, die Elemente \<polygon> oder \<polyline> zu verwenden. Allerdings werden Pfade beim Zeichnen von SVG so oft verwendet, dass Entwickler es stattdessen bequemer finden, diese zu verwenden. Es gibt keine wirkliche Leistungseinbußen oder -verbesserungen für die Nutzung des einen oder anderen.

## Kurvenbefehle

Es gibt drei verschiedene Befehle, mit denen Sie gleichmäßige Kurven erstellen können. Zwei dieser Kurven sind Bezier-Kurven, und die dritte ist ein "Bogen" oder Teil eines Kreises. Möglicherweise haben Sie bereits praktische Erfahrungen mit Bezier-Kurven mit Pfadwerkzeugen in Inkscape, Illustrator oder Photoshop gesammelt. Eine vollständige Beschreibung der Mathematik hinter Bezier-Kurven finden Sie in einer Referenz wie der auf Wikipedia. Es gibt eine unendliche Anzahl von Bezier-Kurven, aber nur zwei einfache sind in Pfadelementen verfügbar: eine kubische, die mit C aufgerufen wird, und eine quadratische, die mit Q aufgerufen wird.

### Bezier-Kurven

Die kubische Kurve C, ist die etwas komplexere Kurve. Kubische Beziers nehmen zwei Kontrollpunkte für jeden Punkt in Anspruch. Um einen kubischen Bezier zu erstellen, müssen Sie daher drei Koordinatenpaare angeben.

     C x1 y1, x2 y2, x y (oder c dx1 dy1, dx2 dy2, dx dy)

Das letzte Koordinatenpaar hier (x,y) ist der Punkt, an welchem die Linie enden soll. Die anderen beiden sind Kontrollpunkte. (x1,y1) ist der Kontrollpunkt für die Anfangsposition Ihrer Kurve, und (x2,y2) ist der Kontrollpunkt der Endposition. Die Kontrollpunkte beschreiben im Wesentlichen die Neigung Ihrer Linie ab den jeweiligen Punkten. Die Bezier-Funktion erstellt dann eine gleichmäßige Kurve, die Sie von der Neigung, die Sie am Anfang Ihrer Linie festgelegt haben, auf die Neigung am anderen Ende verschiebt.

![Cubic Bézier Curves with grid](https://mdn.mozillademos.org/files/10401/Cubic_Bezier_Curves_with_grid.png)

    <svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">

      <path d="M10 10 C 20 20, 40 20, 50 10" stroke="black" fill="transparent"/>
      <path d="M70 10 C 70 20, 120 20, 120 10" stroke="black" fill="transparent"/>
      <path d="M130 10 C 120 20, 180 20, 170 10" stroke="black" fill="transparent"/>
      <path d="M10 60 C 20 80, 40 80, 50 60" stroke="black" fill="transparent"/>
      <path d="M70 60 C 70 80, 110 80, 110 60" stroke="black" fill="transparent"/>
      <path d="M130 60 C 120 80, 180 80, 170 60" stroke="black" fill="transparent"/>
      <path d="M10 110 C 20 140, 40 140, 50 110" stroke="black" fill="transparent"/>
      <path d="M70 110 C 70 140, 110 140, 110 110" stroke="black" fill="transparent"/>
      <path d="M130 110 C 120 140, 180 140, 170 110" stroke="black" fill="transparent"/>

    </svg>

Das obige Beispiel erstellt neun kubische Bezier-Kurven. Wenn sich die Kurven nach rechts bewegen, werden die Kontrollpunkte horizontal gespreizt. Wenn sich die Kurven nach unten bewegen, werden sie weiter von den Endpunkten getrennt. Zu beachten ist hier, dass die Kurve in Richtung des ersten Kontrollpunktes beginnt und sich dann so biegt, dass sie in Richtung des zweiten Kontrollpunktes verläuft.

Es ist möglich, mehrere Bezier-Kurven aneinander zu reihen, um erweiterte, gleichmäßige Formen zu erzeugen. Häufig ist der Kontrollpunkt auf der einen Seite eines Punktes eine Reflexion des Kontrollpunktes auf der anderen Seite, um die Steigung konstant zu halten. In diesem Fall können Sie eine abgekürzte Version des kubischen Bezier verwenden, die durch den Befehl `S` (oder `s`) definiert wird.

     S x2 y2, x y (oder s dx2 dy2, dx dy)

`S` erstellt den selben Kurventyp wie zuvor. Wenn er aber einem anderen `S`- oder `C`-Befehl folgt, wird angenommen, dass der erste Kontrollpunkt eine Reflexion des zuvor verwendeten ist. Folgt der Befehl `S` nicht einem anderen `S`- oder `C`-Befehl, so wird die aktuelle Position des Cursors als erster Kontrollpunkt verwendet. In diesem Fall ist das Ergebnis das gleiche wie das, was der `Q`-Befehl mit den gleichen Parametern ergeben hätte. Ein Beispiel für diese Syntax ist unten dargestellt, und in der Abbildung links sind die angegebenen Kontrollpunkte rot und der daraus abgeleitete Kontrollpunkt blau dargestellt.

![ShortCut_Cubic_Bezier_with_grid.png](https://mdn.mozillademos.org/files/10405/ShortCut_Cubic_Bezier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80" stroke="black" fill="transparent"/>
</svg>
```

Die andere Art von Bezierkurve, die quadratische Kurve, die mit Q aufgerufen wird, ist eigentlich eine einfachere Kurve als die kubische. Sie benötigt einen Kontrollpunkt, der die Neigung der Kurve sowohl am Startpunkt als auch am Endpunkt bestimmt. Es werden zwei Argumente benötigt: der Kontrollpunkt und der Endpunkt der Kurve. Beachten Sie, dass die Koordinatendeltas für q beide relativ zum vorherigen Punkt sind (d.h. `dx` und `dy` sind nicht relativ zu `dx1` und `dx2`).

     Q x1 y1, x y (oder q dx1 dy1, dx dy)

![Quadratic Bézier with grid](https://mdn.mozillademos.org/files/10403/Quadratic_Bezier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 80 Q 95 10 180 80" stroke="black" fill="transparent"/>
</svg>
```

Genau wie bei der kubischen Bezierkurve gibt es eine Abkürzung zum Aneinanderreihen mehrerer quadratischer Beziers, die mit T aufgerufen wird.

     T x y (oder t dx dy)

Diese Abkürzung betrachtet den vorherigen Kontrollpunkt, den Sie verwendet haben, und leitet daraus einen neuen ab. Das bedeutet, dass Sie nach Ihrem ersten Kontrollpunkt ziemlich komplexe Formen erstellen können, indem Sie nur Endpunkte angeben.

> **Note:** Das funktioniert nur, wenn der vorherige Befehl ein Q- oder T-Befehl war. Wenn dies nicht der Fall ist, wird davon ausgegangen, dass der Kontrollpunkt derselbe wie der vorherige Punkt ist, und Sie zeichnen nur Linien.

![Shortcut_Quadratic_Bezier_with_grid.png](https://mdn.mozillademos.org/files/10407/Shortcut_Quadratic_Bezier_with_grid.png)

```xml
<svg width="190" height="160" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 80 Q 52.5 10, 95 80 T 180 80" stroke="black" fill="transparent"/>
</svg>
```

Beide Kurven liefern ähnliche Ergebnisse, obwohl die kubische Form Ihnen mehr Freiheit bei der Gestaltung Ihrer Kurve gibt. Die Entscheidung, welche Kurve Sie verwenden möchten, hängt von der Symmetrie ab, die Ihre Linie hat.

### Bögen

Die andere Art von Kurvenlinie, die Sie mit SVG erstellen können, ist der Bogen, der mit A aufgerufen wird. Bogen sind Kreis- oder Ellipsenabschnitte. Bei einem gegebenen x-Radius und y-Radius gibt es zwei Ellipsen, die zwei beliebige Punkte verbinden können (sofern sie sich im Kreisradius befinden). Entlang einer dieser Kreise gibt es zwei mögliche Pfade, die Sie wählen können, um die Punkte zu verbinden, so dass in jeder Situation vier mögliche Bögen zur Verfügung stehen. Aus diesem Grund sind bei Bögen eine ganze Reihe von Argumenten erforderlich:

     A rx ry x-Achsen-Drehung Bogen-Flag Ausschwenkungs-Flag x y
     a rx ry x-Achsen-Drehung Bogen-Flag Ausschwenkungs-Flag dx dy

An seinem Anfang nimmt das Bogenelement zwei Argumente für den x-Radius und den y-Radius auf. Falls benötigt, schlagen sie [Ellipsen](/en-US/Web/SVG/Element/ellipse) nach, um deren Verhaltensweisen zu verstehen. Die letzten beiden Argumente bezeichnen die x- und y-Koordinaten um den Konturverlauf zu beenden. Zusammen bilden diese vier Werte die Grundstruktur des Bogens.

Der dritte Parameter beschreibt die Drehung des Bogens. Dies lässt sich am besten an einem Beispiel erklären:

![SVGArcs_XAxisRotation_with_grid](https://mdn.mozillademos.org/files/10409/SVGArcs_XAxisRotation_with_grid.png)

```xml
<svg width="320" height="320" xmlns="http://www.w3.org/2000/svg">
  <path d="M10 315
           L 110 215
           A 30 50 0 0 1 162.55 162.45
           L 172.55 152.45
           A 30 50 -45 0 1 215.1 109.9
           L 315 10" stroke="black" fill="green" stroke-width="2" fill-opacity="0.5"/>
</svg>
```

Dieses Beispiel zeigt ein Pfad-Element, welches diagonal über die Seite verläuft. In dessen Mitte wurden zwei elliptische Bögen (x-Radius = 30, y-Radius = 50) ausgeschnitten. Im ersten Bogen wurde die x-Achsen-Rotation bei 0 gelassen, damit die Ellipse, um die der Bogen verläuft (in grau abgebildet) gerade nach oben und unten ausgerichtet wird. Im zweiten Bogen wurde die x-Achsen-Rotation allerdings auf -45 Grad gesetzt. Das dreht die Ellipse, damit sie mit der kürzeren Achse der Pfadrichtung ausgerichtet wird, wie im Beispielbild durch die zweite Ellipse dargestellt.

Für die ungedrehte Ellipse im obigen Bild gibt es zwei verschiedene Bögen, zwischen denen gewählt werden kann, nicht vier, da die Linie, die vom Anfang bis zum Ende des Bogens durch die Mitte der Ellipse verläuft. In einem leicht veränderten Beispiel können Sie die zwei Ellipsen sehen, die die vier verschiedenen Bögen bilden.

![Show the 4 arcs on the Ellipse example](https://mdn.mozillademos.org/files/15822/SVGArcs_XAxisRotation_with_grid_ellipses.png)

    <svg xmlns="http://www.w3.org/2000/svg" width="320" height="320">
      <path d="M10 315
               L 110 215
               A 36 60 0 0 1 150.71 170.29
               L 172.55 152.45
               A 30 50 -45 0 1 215.1 109.9
               L 315 10" stroke="black" fill="green" stroke-width="2" fill-opacity="0.5"/>
      <circle cx="150.71" cy="170.29" r="2" fill="red"/>
      <circle cx="110" cy="215" r="2" fill="red"/>
      <ellipse cx="144.931" cy="229.512" rx="36" ry="60" fill="transparent" stroke="blue"/>
      <ellipse cx="115.779" cy="155.778" rx="36" ry="60" fill="transparent" stroke="blue"/>
    </svg>

Beachten Sie, dass jede der blauen Ellipsen aus zwei Bögen besteht, je nachdem, ob Sie im oder gegen den Uhrzeigersinn verfahren. Jede Ellipse hat einen kurzen und einen langen Bogen. Die beiden Ellipsen sind nur Spiegelungen voneinander. Sie werden entlang der Linie gespiegelt, die sich aus den Start->Endpunkten ergibt.

Wenn die Start->Endpunkte weiter entfernt sind, als der x- und y-Radius der Ellipse reicht, werden die Radien der Ellipse minimal erweitert, so dass sie die Start->Endpunkte erreichen können. Der interaktive Codepen am Ende dieser Seite zeigt dies exemplarisch. Um festzustellen, ob die Radien Ihrer Ellipse groß genug sind, um erweitert werden zu müssen, müssen Sie ein Gleichungssystem wie dieses auf Wolfram Alpha lösen. Diese Berechnung gilt für die nicht rotierende Ellipse mit Start->Ende (110, 215)->(150.71, 170.29). Die Lösung, (x, y), ist das Zentrum der Ellipse(n). Die Lösung wird imaginär sein, falls Ihre Ellipsenradien zu klein sind. Diese zweite Berechnung bezieht sich auf die nicht rotierende Ellipse mit Start->Ende (110, 215)->(162.55, 162.45). Die Lösung hat eine kleine Imaginärkomponente, da die Ellipse nur knapp erweitert wurde.

Die vier verschiedenen oben genannten Pfade werden durch die nächsten beiden Argument-Flags bestimmt. Wie bereits erwähnt, gibt es immer noch zwei mögliche Ellipsen für den Pfad, um sich zu bewegen, und zwei verschiedene mögliche Pfade auf beiden Ellipsen, was vier mögliche Pfade ergibt. Das erste Argument ist das Bogen-Flag. Es bestimmt einfach, ob der Bogen größer oder kleiner als 180 Grad sein soll; am Ende bestimmt dieses Flag, in welche Richtung sich der Bogen um einen gegebenen Kreis bewegt. Das zweite Argument ist das Ausschwenkungs-Flag. Es legt fest, ob sich der Bogen in positiven oder negativen Winkeln bewegen soll, was im Wesentlichen bestimmt, um welchen der beiden Kreise Sie sich bewegen werden. Das folgende Beispiel zeigt alle vier möglichen Kombinationen sowie die beiden Kreise für die einzelnen Fälle.

![](/@api/deki/files/345/=SVGArcs_Flags.png)

```xml
<svg width="325" height="325" xmlns="http://www.w3.org/2000/svg">
  <path d="M80 80
           A 45 45, 0, 0, 0, 125 125
           L 125 80 Z" fill="green"/>
  <path d="M230 80
           A 45 45, 0, 1, 0, 275 125
           L 275 80 Z" fill="red"/>
  <path d="M80 230
           A 45 45, 0, 0, 1, 125 275
           L 125 230 Z" fill="purple"/>
  <path d="M230 230
           A 45 45, 0, 1, 1, 275 275
           L 275 230 Z" fill="blue"/>
</svg>
```

Bögen sind eine einfache Möglichkeit, Kreise oder Ellipsen in Ihren Zeichnungen zu erstellen. Zum Beispiel würde ein Kreisdiagramm für jedes Stück einen anderen Bogen erfordern.

Falls sie SVG aus [Canvas](/de/HTML/Canvas) herleiten können Bögen die meisten Verständnisprobleme verursachen, allerdings sind sie auch viel mächtiger. Vollständige Kreise und Ellipsen sind eigentlich die einzigen Formen, bei denen SVG-Bögen Probleme beim Zeichnen haben. Da der Start- und Endpunkt für jeden Pfad, der um einen Kreis verläuft, der gleiche Punkt ist, gibt es eine unendliche Anzahl von Kreisen, die ausgewählt werden können, und der tatsächliche Pfad ist undefiniert. Es ist möglich, sie anzunähern, indem man den Start- und Endpunkt des Pfades leicht schräg stellt und ihn dann mit einem anderen Pfadsegment verbindet. Beispielsweise können Sie für jeden Halbkreis einen Kreis mit einem Bogen erstellen. An diesem Punkt ist es oft einfacher, ein Kreis- oder Ellipsen-Element zu verwenden. Diese interaktive Codepen könnte ihnen vieleicht beim Verständnis der Konzepte hinter SVG Bögen zu verstehen: <http://codepen.io/lingtalfi/pen/yaLWJG> (nur in Chrome und Firefox getestet, funktioniert möglicherweise nicht in Ihrem Browser)

{{ PreviousNext("Web/SVG/Tutorial/Basic_Shapes", "Web/SVG/Tutorial/Fills_and_Strokes") }}
