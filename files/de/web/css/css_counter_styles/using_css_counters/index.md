---
title: CSS Zähler verwenden
slug: Web/CSS/CSS_Counter_Styles/Using_CSS_counters
tags:
  - Anleitung
  - CSS
  - CSS Listen
  - CSS Wert
  - Fortgeschrittene
  - Layout
  - Referenz
  - Web
translation_of: Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters
original_slug: Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters
---
{{CSSRef}}

CSS Zähler sind im Grunde von CSS verwaltete Variablen, deren Werte mittels CSS Regeln inkrementiert werden können, um nachzuvollziehen, wie oft sie verwendet wurden. Dies ermöglicht es, die Darstellung von Inhalten anhand der Positionierung innerhalb des Dokuments anzupassen. CSS Zähler sind eine Implementierung von [Automatic counters and numbering](http://www.w3.org/TR/CSS21/generate.html#counters) in CSS 2.1.

Der Wert eines Zählers wird durch die Verwendung von {{cssxref("counter-reset")}} geändert. {{cssxref("counter-increment")}} kann auf einer Seite durch verwenden der `counter()` oder `counters()` Funktion der {{cssxref("content")}} Eigenschaft dargestellt werden.

## Zähler verwenden

Um einen CSS Zähler zu verwenden, muss er zunächst auf einen Wert zurückgesetzt werden (standardmäßig 0). Um den Wert eines Zählers zu einem Element hinzuzufügen, kann die `counter()` Funktion verwendet werden. Das folgende CSS fügt am Anfang jedes h3 Elements "Abschnitt \<der Wert des Zählers>:" ein.

```css
body {
  counter-reset: section;                      /* Setzt den Abschnittszähler auf 0 */
}

h3::before {
  counter-increment: section;                  /* Erhöht den Abschnittszähler */
  content: "Abschnitt " counter(section) ": "; /* Zeigt den Zähler an */
}
```

Beispiel:

```html
<h3>Einführung</h3>
<h3>Inhalt</h3>
<h3>Zusammenfassung</h3>
```

{{EmbedLiveSample("Zähler_verwenden", 280, 150)}}

## Zähler verschachteln

Ein CSS Zähler ist besonders nützlich, um kontinuierte Listen zu erstellen, da in Kindelementen automatisch eine neue Instanz eines CSS Zählers erzeugt wird. Wird die `counters()` Funktion verwendet, kann ein String zwischen verschiedenen Leveln von verschachtelten Zählern eingefügt werden. Beispielsweise dieses CSS:

```css
ol {
  counter-reset: section;                /* Erstellt mit jedem ol Element
                                            eine neue Instanz des
                                            Abschnittszählers. */
  list-style-type: none;
}

li::before {
  counter-increment: section;            /* Inkrementiert nur diese Instanz
                                            des Abschnittszählers. */
  content: counters(section,".") " ";    /* Fügt den Wert aller Instanzen
                                            des Abschnittszählers durch "."
                                            getrennt hinzu. */
                                         /* Falls < IE8 unterstützt werden soll,
                                            sollte sichergestellt werden, dass
                                            kein Leerzeichen nach dem ',' steht. */
}
```

Kombiniert mit dem folgenden HTML:

```html
<ol>
  <li>Eintrag</li>          <!-- 1     -->
  <li>Eintrag               <!-- 2     -->
    <ol>
      <li>Eintrag</li>      <!-- 2.1   -->
      <li>Eintrag</li>      <!-- 2.2   -->
      <li>Eintrag           <!-- 2.3   -->
        <ol>
          <li>Eintrag</li>  <!-- 2.3.1 -->
          <li>Eintrag</li>  <!-- 2.3.2 -->
        </ol>
        <ol>
          <li>Eintrag</li>  <!-- 2.3.1 -->
          <li>Eintrag</li>  <!-- 2.3.2 -->
          <li>Eintrag</li>  <!-- 2.3.3 -->
        </ol>
      </li>
      <li>Eintrag</li>      <!-- 2.4   -->
    </ol>
  </li>
  <li>Eintrag</li>          <!-- 3     -->
  <li>Eintrag</li>          <!-- 4     -->
</ol>
<ol>
  <li>Eintrag</li>          <!-- 1     -->
  <li>Eintrag</li>          <!-- 2     -->
</ol>
```

Erzeugt dieses Ergebnis:

{{EmbedLiveSample("Zähler_verschachteln", 250, 350)}}

## Spezifikationen

| Spezifikation                                                                                            | Status                   | Kommentar                |
| -------------------------------------------------------------------------------------------------------- | ------------------------ | ------------------------ |
| {{SpecName("CSS2.1", "generate.html#generate.html#counters", "counter-reset")}} | {{Spec2("CSS2.1")}} | Ursprüngliche Definition |

## Siehe auch

- {{cssxref("counter-reset")}}
- {{cssxref("counter-increment")}}

_Es gibt ein zusätzliches Beispiel unter [http://www.mezzoblue.com/archives/20.../counter_intu/](http://www.mezzoblue.com/archives/2006/11/01/counter_intu/). Dieser Blogeintrag wurde am 01.11.2006 veröffentlicht, sollte jedoch noch zutreffen._
