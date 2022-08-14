---
title: accesskey
slug: Web/HTML/Global_attributes/accesskey
tags:
  - Globale Attribute
  - HTML
  - Referenz
translation_of: Web/HTML/Global_attributes/accesskey
original_slug: Web/HTML/Globale_Attribute/accesskey
---
{{HTMLSidebar("Global_attributes")}}

Das [globale Attribut](/de/docs/Web/HTML/Globale_Attribute) **accesskey** definiert ein Tastaturkürzel für das aktuelle Element. Der Attributwert muss aus einem einzelnen, druckbarem Zeichen bestehen (dies beinhaltet Zeichen mit Umlauten und andere Zeichen, die über die Tastatur eingegeben werden können).

> **Note:** **Hinweis**: Die WHATWG-Spezifikation besagt, dass mehrere mit Leerzeichen voneinander getrennte Zeichen angegeben werden können und der Browser davon das erste unterstützte verwenden wird. Das funktioniert jedoch in den meisten Browsern nicht. In Internet Explorer und Edge wird das erste unterstützte Zeichen jedoch ohne Probleme verwendet, sofern es keine Konflikte mit anderen Befehlen gibt.

Je nach Browser und Betriebssystem unterscheidet sich die Tastaturkombination zur Ansteuerung des **accesskey**.

<table class="standard-table">
  <tbody>
    <tr>
      <th></th>
      <th>Windows</th>
      <th>Linux</th>
      <th>Mac</th>
    </tr>
    <tr>
      <th>Firefox</th>
      <td colspan="2" rowspan="1" style="text-align: center">
        <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        Firefox 57+: <kbd>Control</kbd> + <kbd>Option</kbd> +
        <kbd><em>key</em></kbd> -ODER- <kbd>Control</kbd> + <kbd>Alt</kbd> +
        <kbd><em>key</em></kbd
        ><br />Firefox 14–56: <kbd>Control</kbd> + <kbd>Alt</kbd> +
        <kbd><em>key</em></kbd
        ><br />Firefox &#x3C; 14, <kbd>Control</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Internet Explorer</th>
      <td>
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td colspan="2">N/V</td>
    </tr>
    <tr>
      <th>Google Chrome</th>
      <td colspan="2" rowspan="1" style="text-align: center">
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        <kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Safari</th>
      <td>
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>N/V</td>
      <td>
        <kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Opera 15+</th>
      <td colspan="2" rowspan="1" style="text-align: center">
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        <kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Opera 12</th>
      <td colspan="3" rowspan="1">
        <p>
          <kbd>Shift</kbd> + <kbd>Esc</kbd> öffnet zunächst eine Liste der
          Inhalte, die über <strong>accesskey</strong> erreichbar sind und
          erlaubt eine Ansteuerung über <kbd><em>key</em></kbd>
        </p>
      </td>
    </tr>
  </tbody>
</table>

Beachte, dass die Tastaturkombination in Firefox über die Einstellungen angepasst werden kann.

## Spezifikation

| Spezifikation                                                                                                    | Status                           | Kommentar                                                                                                                                                                                                                                                                              |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML5.2', "editing.html#the-accesskey-attribute", "accesskey")}}             | {{Spec2('HTML5.2')}}     | Beschreibt ein realistischeres Verhalten der tatsächlichen Implementierungen.                                                                                                                                                                                                          |
| {{SpecName('HTML WHATWG', "interaction.html#the-accesskey-attribute", "accesskey")}} | {{Spec2('HTML WHATWG')}} | Keine Änderung gegenüber {{SpecName('HTML5.1')}}.                                                                                                                                                                                                                             |
| {{SpecName('HTML5.1', "editing.html#the-accesskey-attribute", "accesskey")}}             | {{Spec2('HTML5.1')}}     | Keine Änderung gegenüber {{SpecName('HTML5 W3C')}}.                                                                                                                                                                                                                             |
| {{SpecName('HTML5 W3C', "editing.html#the-accesskey-attribute", "accesskey")}}         | {{Spec2('HTML5 W3C')}}     | Ab {{SpecName('HTML4.01')}} können mehrere Zeichen als `accesskey` gesetzt werden. Zudem kann ein `accesskey` an jedem Element gesetzt werden.                                                                                                                                 |
| {{SpecName('HTML4.01', "interact/forms.html#h-17.11.2", "accesskey")}}                     | {{Spec2('HTML4.01')}}     | Nur unterstützt an {{ HTMLElement("a") }}, {{ HTMLElement("area") }}, {{ HTMLElement("button") }}, {{ HTMLElement("input") }}, {{ HTMLElement("label") }}, {{ HTMLElement("legend") }} und {{ HTMLElement("textarea") }} |

## Browserkompatibilität

{{Compat("html.global_attributes.accesskey")}}

## Siehe auch

- {{domxref("Element.accessKey")}}
- {{domxref("HTMLElement.accessKeyLabel")}}
- [Globale Attribute](/de/docs/Web/HTML/Globale_Attribute).
