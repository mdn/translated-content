---
title: Selektoren
slug: Learn/CSS/Building_blocks/Selectors
translation_of: Learn/CSS/Building_blocks/Selectors
translation_of_original: Web/Guide/CSS/Getting_started/Selectors
original_slug: Web/Guide/CSS/Getting_started/Selektoren
---
{{LearnSidebar}}

{{ previousPage("/de/docs/Web/Guide/CSS/Getting_Started/Kaskadierung_und_vererbung", "Kaskadierung &amp; Vererbung")}}Das ist der fünfte Abschnitt des [CSS Getting Started](/de/docs/Web/Guide/CSS/Getting_Started) Tutorials. Er erklärt wie sie Styles selektiv anwenden können und wie verschiedene Arten von Selektoren verschiedene Prioritäten haben können. Sie fügen einige Attribute zu den Tags in Ihrem Beispiel-Dokument hinzu und Sie verwenden diese Attribute in Ihrem Beispielstylesheet.

## Information: Selektoren

CSS hat eine eigene Terminologie, die die CSS Sprache beschreibt. Früher in diesem Tutorial haben Sie eine Zeile wie die folgende geschrieben:

```css
strong {
  color: red;
}
```

In der CSS Terminologie ist die gesamte Zeile eine _Regel_. Diese Regel beginnt mit `strong`, welches ein _Selektor_ ist. Sie wählt aus, auf welche Elemente im DOM die Regel angewandt wird.

Mehr Details

Der Teil innerhalb der geschwungenen Klammern ist die _Deklaration_.

Das Schlüsselwort `color` ist eine _Eigenschaft (Property)_ und `red` is ein _Wert (value)_.

Das Semicolon nach dem Property-Value Pair trennt es von anderen Property-Value Pairs in derselben Deklaration.

Dieser Tutorial bezeichnet einen Selektor wie `strong` als einen _Tag_-Selektor. Die CSS Spezifikation bezeichnet es als _Type_-Selector.

Diese Seite vom Tutorial geht detaillierter auf die Selektoren ein, die in CSS Regeln verwendet werden können.

Zusätzlich zu Tagnamen können Werte von Attributen in Selektoren verwendet werden. Damit können Regeln spezifischer gemacht werden.

Zwei Attribute haben einen speziellen Status in CSS. Diese sind [`class`](/de/docs/Web/HTML/Global_attributes#attr-class) und [`id`](/de/docs/Web/HTML/Global_attributes#id).

### Class Selektoren

Verwenden Sie das [`class`](/de/docs/Web/HTML/Global_attributes#attr-class) Attribut in einem Element, um das Element einer Klasse zuzuordnen. Der Name der Klasse ist frei wählbar. Mehrere Elemente in einem Dokument können denselben Wert für die Klasse haben.

Tippen Sie einen Punkt direkt vor dem Klassennamen im Stylesheet, um die Klasse im Selektor zu verwenden.

### ID Selektoren

Verwenden Sie das [`id`](/de/docs/Web/HTML/Global_attributes#id) Attribut in einem Element, um dem Elemente eine ID zuzuweisen. Der Name der ID ist frei wählbar. Die ID muss innerhalb vom Dokument eindeutig sein.

Tippen Sie eine Raute (Hash) direkt vor der ID im Styleshet, um die ID im Selektor zu verwenden.

BeispielDieser HTML Tag hat ein `class` Attribut und ein `id` Attribute:

```html
<p class="key" id="principal">
```

Der **id** Wert, `principal`, muss innerhalb vom Dokument eindeutig, aber andere Tags Dokument dürfen denselben K**lassennamen**, `key`, haben.

In einem CSS Stylesheet macht diese Regel alle Elemente mit der class `key` grün. (Sie müssen dazu kein {{ HTMLElement("p") }} sein.)

```css
.key {
  color: green;
}
```

Diese Regel macht das eine Element mit der **id** `principal` fettgedruckt:

```css
#principal {
  font-weight: bolder;
}
```

Wenn mehr als eine Regel auf ein Element zutreffen und dieselbe Eigenschaft spezifiziert wird, gibt CSS der Regel mit dem spezifischeren Selektor Priorität. Ein ID Selektor ist spezifischer als ein class Selektor, welcher wiederum spezifischer als ein tag Selektor ist.

Mehr Details

Sie können Selektoren kombinieren, um einen selektiveren Selektor zu erstellen.

Der Selektor `.key` zum Beispiel selektier alle Elements mit der Klasse `key`. Der Selektor `p.key` selektiert nur {{ HTMLElement("p") }} Elemente, die die Klasse `key` haben.

Sie sind nicht auf die zwei speziellen Attribute `class` und `id` eingeschränkt. Mit eckigen Klammern können Sie auch andere Attribute spezifizieren. Der Selektor `[type='button']` zum Beispiel selektiert alle Elemente, die ein `type` Attribut mit dem Wert `button` haben.

Wenn ein Stylesheet Regeln mit einem Konflikt hat und und diese gleich spezifisch sind, dann gibt CSS der Regel, die später im Stylesheet ist, Priorität.

Wenn Sie Probleme mit konfliktierenden Regeln haben, versuchen Sie eine Regel spezifischer zu machen, damit sie Priorität hat. Wenn Sie das nicht können, verschieben Sie eine der Regeln ans Ende des Stylesheet, damit sie Priorität bekommt.

### Pseudo-classes Selektoren

Eine CSS [pseudo-class](/de/docs/Web/CSS/Pseudo-classes) ist ein Schlüsselwort, welches einem Selektor hinzugefügt wird. Damit kann ein bestimmter Zustand des selektierten Elements spezifiziert werden. {{ Cssxref(":hover") }} zum Beispiel wenden seinen Style an, wenn der Benutzer mit dem Mauszeiger über das selektierte Element fährt.

Pseudo-classes zusammen mit pseudo-elements lassen Sie eine Style für ein Element nicht nur in Relation zum Inhalt vom Document Tree sondern auch in Relation zu externen Faktoren wie den Verlauf der Navigation ({{ cssxref(":visited") }}, zum Beispiel), dem Zustand seines Inhalt (wie {{ cssxref(":checked") }} auf manchen form Elementen) oder der Position des Mauszeigers (wie {{ cssxref(":hover") }} das angibt, ob sich der Mauszeiger über dem Element befindet) anwenden. Eine vollständige Liste der Selektoren ist unter [CSS3 Selectors working spec](http://www.w3.org/TR/selectors/#selectors "CSS3 Selectors working spec") zu finden.

Syntax

```css
selector:pseudo-class {
  property: value;
}
```

#### Liste von pseudo-classes

- {{ Cssxref(":link") }}
- {{ Cssxref(":visited") }}
- {{ Cssxref(":active") }}
- {{ Cssxref(":hover") }}
- {{ Cssxref(":focus") }}
- {{ Cssxref(":first-child") }}
- {{ Cssxref(":nth-child") }}
- {{ Cssxref(":nth-last-child") }}
- {{ Cssxref(":nth-of-type") }}
- {{ Cssxref(":first-of-type") }}
- {{ Cssxref(":last-of-type") }}
- {{ Cssxref(":empty") }}
- {{ Cssxref(":target") }}
- {{ Cssxref(":checked") }}
- {{ Cssxref(":enabled") }}
- {{ Cssxref(":disabled") }}

## Information: Selektoren basieren auf Beziehungen

CSS hat einige Wege um Elemente basieren auf ihrer Bezieung zu anderen Eementen zu selektieren. Damit können Selektoren spezifischer gemacht werden.

| **Selektor**    | **Selektiert**                                                                                                      |
| --------------- | ------------------------------------------------------------------------------------------------------------------- |
| `A E`           | Jedes E Element, das ein _Nachfolger_ eines A Elements ist (das heißt: ein Kind oder ein Kind eines Kindes, _etc_.) |
| `A > E`         | Jedes E Element, das ein Kind eines A Elements ist                                                                  |
| `E:first-child` | Jedes E Element, das das erste Kind seines Parent ist                                                               |
| `B + E`         | Jedes E Element, das das nächste S*ibling* eines B Elements ist (das heißt: das nächste Kind von demselben Parent)  |

Über eine Kombination der selektoren können komplexe Beziehungen ausgedrückt werden.

Sie können auch das Symbol `*` (asterisk) verwenden, welches "jedes Element" bedeutet.

Beispiel

Eine HTML Tabelle hat ein `id` Attribute aber die Zeilen und Zellen haben keinen eigenen Identifier:

```html
<table id="data-table-1">
...
<tr>
<td>Prefix</td>
<td>0001</td>
<td>default</td>
</tr>
...
```

Diese Regeln machen die erste Zelle jeder Zeile fettgedruckt und die zweite Zelle jeweils monospaced. Sie betreffen nur eine bestimmte Tabelle im Dokument:

```css
#data-table-1 td:first-child {
  font-weight: bolder;
}

#data-table-1 td:first-child + td {
  font-family: monospace;
}
```

Das Ergebnis sieht so aus:

<table
  style="background-color: white; border: 2px outset #3366bb; padding: 1em"
>
  <tbody>
    <tr>
      <td>
        <table style="margin-right: 2em; width: 18em">
          <tbody>
            <tr>
              <td><strong>Prefix</strong></td>
              <td><code>0001</code></td>
              <td>default</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </tbody>
</table>

Mehr Details

Wenn Sie einen Selektor spezifischer machen, erhöhen Sie normalerweise seine Priorität.

Wenn Sie diese Technik anwenden, können Sie es vermeiden vielen Tags in ihrem Dokument ein `class` oder ein `id` Attribut zu geben. Stattdessen erledigt CSS die Arbeit.

In umfassenden Designs, bei denen Geschwindigkeit wichtig ist, können Sie ihre Stylesheets effizienter machen, indem Sie komplexe Regeln mit Beziehungen zu anderen Elementen vermeiden.

Mehr Beispiele zu [Tabellen](/de/docs/Web/Guide/CSS/Getting_Started/Tables) finden Sie auf der CSS Referenzseite.

## Aktion: class und ID Selektoren verwenden

1. Bearbeiten Sie Ihre HTML Datei und duplizieren Sie den Absatz mit copy and paste.
2. Danach setzen Sie ein **id** und **class** Attribut auf den ersten Absatz und ein **id** Attribut auf dem zweiten wie unten dargestellt. Alternativ können Sie die gesamte Datei kopieren und einfügen:

    ```html
    <!doctype html>
    <html>
      <head>
      <meta charset="UTF-8">
      <title>Sample document</title>
      <link rel="stylesheet" href="style1.css">
      </head>
      <body>
        <p id="first">
          <strong class="carrot">C</strong>ascading
          <strong class="spinach">S</strong>tyle
          <strong class="spinach">S</strong>heets
        </p>
        <p id="second">
          <strong>C</strong>ascading
          <strong>S</strong>tyle
          <strong>S</strong>heets
        </p>
      </body>
    </html>
    ```

3. Bearbeiten Sie jetzt Ihre CSS Datei. Ersetzen Sie den gesamten Inhalt mit:

    ```css
    strong {
      color: red;
    }

    .carrot {
      color: orange;
    }

    .spinach {
      color: green;
    }

    #first {
      font-style: italic;
    }
    ```

4. Speichern Sie die Dateien und aktualisieren Sie den Webbrowser, um das Ergebnis zu sehen:

    | **C**ascading **S**tyle **S**heets |
    | ---------------------------------- |
    | **C**ascading **S**tyle **S**heets |

    Sie können die Zeilen in Ihrer CSS Datei neu anordnen, um zu sehen, dass die Reihenfolge keine Auswirkungen hat.

    Die class Selektoren `.carrot` und `.spinach` haben Priorität gegenüber dem tag Selektor `strong`.

    Der ID Selektor `#first` hat Priorität gegenüber den class und den tag Selektoren.

Herausforderungen

1. Ohne die HTML Datei zu verändern, fügen sie eine einzige Regel in Ihrer CSS Datei hinzu, die die Farbe aller Anfangsbuchstaben wie jetzt beibehält aber alle anderen Buchstaben im zweiten Absatz blau macht:

    | **C**ascading **S**tyle **S**heets |
    | ---------------------------------- |
    | **C**ascading **S**tyle **S**heets |

2. Ändern sie jetzt die neue Regel (ohne etwas anderes zu ändern), um den ersten Absatz auch blau zu machen:

    | **C**ascading **S**tyle **S**heets |
    | ---------------------------------- |
    | **C**ascading **S**tyle **S**heets |

Mögliche Lösung

1. Fügen Sie eine Regel mit dem ID Selektor `#second` und einer Deklaration `color: blue;` wie unten dargestellt hinzu:

    ```css
    #second {
      color: blue;
    }
    ```

    Ein noch spezifischerer Selektor `p#second` funktioniert auch.

2. Ändern Sie den Selektor der neuen Regel auf `p`, damit er ein Tag-Selektor ist:

    ```css
    p {
      color: blue;
    }
    ```

[Lösung ausblenden](#challenge)[Sehen Sie sich die Lösung an.](#tutochallenge "Eine mögliche Lösung für die Herausforderung darstellen")

## Aktion: pseudo-classes Selektoren verwenden

1. Erstellen Sie eine HTML Datei wie folgt:

    ```html
    <!doctype html>
    <html>
      <head>
      <meta charset="UTF-8">
      <title>Sample document</title>
      <link rel="stylesheet" href="style1.css">
      </head>
      <body>
        <p>Go to our <a class="homepage" href="http://www.example.com/" title="Home page">Home page</a>.</p>
      </body>
    </html>
    ```

2. Bearbeiten Sie jetzt Ihre CSS Datei. Ersetzen Sie den gesamten Inhalt mit:

    ```css
    a.homepage:link, a.homepage:visited {
      padding: 1px 10px 1px 10px;
      color: #fff;
      background: #555;
      border-radius: 3px;
      border: 1px outset rgba(50,50,50,.5);
      font-family: georgia, serif;
      font-size: 14px;
      font-style: italic;
      text-decoration: none;
    }

    a.homepage:hover, a.homepage:focus, a.homepage:active {
      background-color: #666;
    }
    ```

3. Speichern Sie die Dateien und aktualisieren Sie den Webbrowser, um das Ergebnis zu sehen (fahren sie mit dem Mauszeiger über den folgenden Link, um den Effekt zu sehen):

    | Go to our Home page |

    | ------------------- |

## Aktion: Selektoren basierend auf Beziehungen und pseudo-classes verwenden

Mit Selektoren basierung auf Beziehungen und pseudo-classes können Sie komplexe Algorithmen mit Kaskadierung erstellen. Das ist eine gängige Technik, um zum Beispiel **reine CSS Dropdown Menüs** zu erstellen (die nur aus CSS ohne [JavaScript](/de/docs/Web/JavaScript "de/docs/Web/JavaScript") bestehen). Die Essenz dieser Technik ist die Erstellung einer Regel wie die folgende:

```css
div.menu-bar ul ul {
  display: none;
}

div.menu-bar li:hover > ul {
  display: block;
}
```

Angewendet auf eine HTML Struktur wie die folgende:

```html
<div class="menu-bar">
  <ul>
    <li>
      <a href="example.html">Menu</a>
      <ul>
        <li>
          <a href="example.html">Link</a>
        </li>
        <li>
          <a class="menu-nav" href="example.html">Submenu</a>
          <ul>
            <li>
              <a class="menu-nav" href="example.html">Submenu</a>
              <ul>
                <li><a href="example.html">Link</a></li>
                <li><a href="example.html">Link</a></li>
                <li><a href="example.html">Link</a></li>
                <li><a href="example.html">Link</a></li>
              </ul>
            </li>
            <li><a href="example.html">Link</a></li>
          </ul>
        </li>
      </ul>
    </li>
  </ul>
</div>
```

Sehen sie in das komplette [CSS-basierte Dropdown Menü Beispiel](https://mdn.mozillademos.org/files/3700/css_dropdown_menu.html "css_dropdown_menu.html") für mögliche Hinweise.

## Was kommt als Nächstes?

Ihr Beispiel-Stylesheet sieht langsam kompakt und kompliziert aus. Der nächste Anschnit beschreibt die Wege, um [CSS leichter lesbar](/de/docs/Web/Guide/CSS/Getting_Started/Lesbares_CSS) zu machen.{{nextPage("/de/docs/Web/Guide/CSS/Getting_Started/Lesbares_CSS", "Lesbares CSS")}}
