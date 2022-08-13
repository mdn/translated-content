---
title: foreignObject
slug: Web/SVG/Element/foreignObject
translation_of: Web/SVG/Element/foreignObject
---
{{SVGRef}}

Das `foreignObject`-Element ermöglicht die Einbindung eines fremden XML-Namespace, dessen graphischer Inhalt von einem anderen User-Agent dargestellt wird. Der eingebundene fremde graphische Inhalt ist Subjekt der SVG-Transformationen und des Compositing.

Der Inhalt des `foreignObject` wird in einem anderen Namespace vermutet. Jedes SVG-Element innerhalb eines `foreignObject` wird nicht gezeichnet, es sei denn, ein korrekt definiertes SVG-Subdokument mit einer sauberen `xmlns`-Attribut-Spezifikation ist rekursiv eingebettet. Eine Situation, in der dies geschehen kann, ist, wenn ein SVG-Dokumentenfragment in einem Nicht-SVG-Dokumentenfragment eingebettet ist, welche wiederum in einem SVG-Dokumentenfragment eingebettet ist (z.B. ein SVG-Dokumentenfragment beinhaltet ein XHTML-Dokumentenfragment, welches seinerseits ein anderes SVG-Dokumentenfragment beinhaltet).

Üblicherweise wird ein `foreignObject` in Verbindung mit dem {{ SVGElement("switch") }}-Element und dem {{ SVGAttr("requiredExtensions") }}-Attribut verwendet, um eine saubere Prüfung der entsprechenden User-Agent-Unterstützung zu ermöglichen und eine alternative Rendermethode zu liefern, wenn der User-Agent nicht unterstütz wird.

## Anwendungskontext

{{svginfo}}

## Beispiel

```xml
<svg width="400px" height="300px" viewBox="0 0 400 300"
     xmlns="http://www.w3.org/2000/svg">
  <desc>Dieses Beispiel benutzt das 'switch'-Element, um eine
        Ausweichmöglichkeit der graphischen Darstellung zu liefern,
        falls XHTML nicht unterstützt werden sollte.</desc>

  <!-- Das 'switch'Element wird das erste Kindelement auswählen,
       dessen Testergebnisse auf true zurückliefern. -->
  <switch>

    <!-- Verarbeite das eingebettete XHTML, falls das requiredExtensions-Attribut
         true zurückliefert (z.B. wenn der User-Agent XHTML
         in SVG eingebettet unterstützt). -->
    <foreignObject width="100" height="50"
                   requiredExtensions="http://www.w3.org/1999/xhtml">
      <!-- XHTML-Inhalt steht hier -->
      <body xmlns="http://www.w3.org/1999/xhtml">
        <p>Hier ist ein Absatz, welcher einen Zeilenumbruch benötigt.</p>
      </body>
    </foreignObject>

    <!-- Ansonsten verarbeite das folgende alternative SVG.
         Beachte, dass das 'text'-Element keine Test-Attribute besitzt.
         Wenn keine Test-Attribute angegeben werden, wird das Element so
         behandelt, als hätte es keine Test-Attribute und liefert true zurück. -->
    <text font-size="10" font-family="Verdana">
      <tspan x="10" y="10">Hier ist ein Absatz, welcher</tspan>
      <tspan x="10" y="20">einen Zeilenumbruch benötigt.</tspan>
    </text>
  </switch>
</svg>
```

## Attribute

### Globale Attribute

- [Conditional processing attributes](/de/docs/SVG/Attribute#ConditionalProccessing "en/SVG/Attribute#ConditionalProccessing") »
- [Core attributes](/de/docs/SVG/Attribute#Core "en/SVG/Attribute#Core") »
- [Graphical event attributes](/de/docs/SVG/Attribute#GraphicalEvent "en/SVG/Attribute#GraphicalEvent") »
- [Presentation attributes](/de/docs/SVG/Attribute#Presentation "en/SVG/Attribute#Presentation ") »
- {{ SVGAttr("class") }}
- {{ SVGAttr("style") }}
- {{ SVGAttr("externalResourcesRequired") }}
- {{ SVGAttr("transform") }}

### Spezifische Attribute

- {{ SVGAttr("x") }}
- {{ SVGAttr("y") }}
- {{ SVGAttr("width") }}
- {{ SVGAttr("height") }}

## DOM-Interface

Dieses Element implementiert das [`SVGForeignObjectElement`](/en-US/docs/DOM/SVGForeignObjectElement "en/DOM/SVGForeignObjectElement")-Interface.

## Browserkompatibilität

{{Compat}}

Diese Tabelle basiert auf [diesen Quellen](/de/docs/SVG/Compatibility_sources "en/SVG/Compatibility sources").
