---
title: Pseudoelemente
slug: Web/CSS/Pseudo-elements
translation_of: Web/CSS/Pseudo-elements
---
{{ CSSRef() }}

## Summary

Wie auch {{ Cssxref("pseudo-classes") }} können Pseudoelemente einem Selektor hinzugefügt werden, aber statt einzelen Zustände ermöglichen Sie das gestalten eines einzelnen Teils von einem Element. Das Pseudoelement {{ Cssxref("::first-line") }} richtet sich bspw. nur an die erste Zeile eines Elements.

## Syntax

    selector::pseudo-element {
      property: value;
    }

## Pseudoelemente

- {{ Cssxref("::after") }}
- {{ Cssxref("::before") }}
- {{ Cssxref("::first-letter") }}
- {{ Cssxref("::first-line") }}
- {{ Cssxref("::selection") }}

## Hinweis

Pseudoelemente sind sowohl mit zwei Doppelpunkten (::), als auch mit nur einem (:) anzutreffen. In der CSS3 Spezifikation wurde darin der Unterschied zwischen Pseudoelement und Pseudoklasse festgelegt. Die meisten Browser unterstützten aber beide Varianten.

> **Hinweis:** `::selection` muss zwingend mit zwei Doppelpunkten (::) geschrieben werden.

> **Note:** Es ist immer nur ein Pseudoelement pro Selektor möglich.

<table class="standard-table">
  <tbody>
    <tr>
      <th>Browser</th>
      <th>Lowest Version</th>
      <th>Support of</th>
    </tr>
    <tr>
      <td rowspan="2">Internet Explorer</td>
      <td>8.0</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>9.0</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td rowspan="2">Firefox (Gecko)</td>
      <td>1.0 (1.0)</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>1.0 (1.5)</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td rowspan="2">Opera</td>
      <td>4.0</td>
      <td><code>:pseudo-element</code></td>
    </tr>
    <tr>
      <td>7.0</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
    <tr>
      <td>Safari (WebKit)</td>
      <td>1.0 (85)</td>
      <td><code>:pseudo-element ::pseudo-element</code></td>
    </tr>
  </tbody>
</table>
