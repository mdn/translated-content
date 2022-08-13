---
title: Organizing your CSS
slug: Learn/CSS/Building_blocks/Organizing
tags:
  - Anfänger
  - CSS
  - Formatierung
  - Kommentare
  - Lernen
  - Methoden
  - Organisieren
  - Stlyeguide
  - post-processor
  - pre-processor
translation_of: Learn/CSS/Building_blocks/Organizing
---
{{LearnSidebar}}{{PreviousMenu("Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}

Wenn Sie anfangen an größeren Stylesheets und großen Projekten zu arbeiten, werden Sie herausfinden, dass es eine echte Herausforderung sein kann, eine sehr umfangreiche CSS-Datei instand zu halten. In diesem Artikel werden wir einen kurzen Blick werfen auf einige bewährte Methoden, CSS so zu schreiben, dass es leicht zu pflegen ist. Einige der Lösungen werden Sie auch bei anderen finden, die damit die Wartbarkeit verbessern.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Voraussetzungen:</th>
      <td>
        <p>
          Grundlegende Computerkenntnisse,
          <a
            href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Installing_basic_software"
            >installierte Basissoftware</a
          >, Grundkenntnisse im
          <a
            href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Dealing_with_files"
            >Umgang mit Dateien</a
          >, HTML-Grundlagen (lesen Sie
          <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML"
            >Einführung in HTML</a
          >) und eine Vorstellung davon, wie CSS funktioniert (lesen Sie
          <a href="/en-US/docs/Learn/CSS/First_steps">erste Schritte mit CSS</a
          >).
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Ziel:</th>
      <td>
        Hier finden Sie einige Tipps und bewährte Verfahren für die Organisation
        von Stylesheets sowie einige allgemein gebräuchliche Namenskonventionen
        und Tools, die bei der Organisation von CSS und der Teamarbeit helfen.
      </td>
    </tr>
  </tbody>
</table>

## Tipps, um Ihr CSS übersichtlich zu halten

Hier finden Sie einige allgemeine Vorschläge, wie Sie Ihre Stylsheet organisiert und übersichtlich halten können.

### Gibt es einen Coding Style Guide in Ihrem Projekt?

Wenn Sie im Team an einem bestehenden Projekt arbeiten, sollten Sie als erstes abklären, ob das Projekt einen Style Guide für CSS hat. Der Style Guide des Teams sollte immer Priorität vor Ihren persönlichen Vorlieben haben. Oft gibt es nicht den einen richtigen Weg etwas umzusetzen, wichtig aber ist Konsistenz.

Sehen Sie sich beispielsweise die [CSS-Richtlinien für MDN Codebeispiele](/de/docs/MDN/Contribute/Guidelines/Code_guidelines/CSS) an.

### Bleiben Sie konsistent

Wenn Sie die Regeln für das Projekt festlegen oder alleine arbeiten, dann ist es am wichtigsten, die Dinge konsistent zu halten. Konsistenz kann auf alle möglichen Arten angewendet werden, wie z.B. die Verwendung derselben Namenskonventionen für Klassen, die Wahl einer Methode zur Beschreibung von Farbe oder die Beibehaltung einer konsistenten Formatierung (werden Sie z.B. Tabulatoren oder Leerzeichen verwenden, um Ihren Code einzurücken? Wenn Leerzeichen, wie viele Leerzeichen?)

Ein Regelsystem, das Sie immer befolgen, reduziert den mentalen Aufwand beim Schreiben von CSS, da einige der Entscheidungen bereits getroffen sind.

### CSS lesbar formatieren

Es gibt unterschiedliche Arten CSS zu formatieren. Einige Entwickler\*innen schreiben alle Regeln in eine einzige Zeile, wie hier:

```css
.box { background-color: #567895; }
h2 { background-color: black; color: white; }
```

Andere Entwickler\*innen schreiben lieber jede Regel in eine neue Zeile:

```css
.box {
  background-color: #567895;
}

h2 {
  background-color: black;
  color: white;
}
```

Dem CSS ist es egal, welche dieser Arten Sie nutzen. Wir persönlich finden, dass es besser lesbar ist, jede Eigenschaft und jedes Wertepaar in einer neuen Zeile.

### CSS kommentieren

Kommentare in Stylesheets zu schreiben hilft jeder\*m künftigen\*m Entwickler\*in mit Ihrem Stylesheet zu arbeiten. Aber es wird auch Ihnen helfen, wenn Sie nach einer Pause wieder an dem Projekt arbeiten.

```css
/* This is a CSS comment
It can be broken onto multiple lines. */
```

Ein guter Tipp ist es, auch zwischen logischen Abschnitten in Ihrem Stylesheet einen Block von Kommentaren einzufügen, um verschiedene Abschnitte beim Durchsuchen schnell zu finden, oder um Ihnen sogar etwas zum Suchen zu geben, damit Sie direkt in diesen Teil des CSS springen können. Wenn Sie eine Zeichenfolge verwenden, die nicht im Code erscheint, können Sie von Abschnitt zu Abschnitt springen, indem Sie danach suchen - unten haben wir `||` verwendet.

```css
/* || General styles */

...

/* || Typography */

...

/* || Header and Main Navigation */

...
```

Sie müssen nicht jede einzelne Regel in Ihrem CSS kommentieren, da vieles davon selbsterklärend sein wird. Was Sie kommentieren sollten, sind die Dinge, bei denen Sie aus einem bestimmten Grund eine bestimmte Entscheidung getroffen haben.

Möglicherweise haben Sie eine CSS-Eigenschaft auf eine bestimmte Art und Weise verwendet, um z.B. Inkompatibilitäten älterer Browser zu umgehen:

```css
.box {
  background-color: red; /* Fallback für ältere Browser, die keine Gradients unterstützen. */
  background-image: linear-gradient(to right, #ff0000, #aa0000);
}
```

Vielleicht haben Sie ein Tutorial befolgt, um etwas zu erreichen, und das CSS ist ein nicht selbsterklärend. In diesem Fall könnten Sie die URL des Tutorials zu den Kommentaren hinzufügen. Sie werden sich freuen, wenn Sie in einem Jahr oder so zu diesem Projekt zurückkehren und sich vage daran erinnern können, dass es ein großartiges Tutorial zu diesem Ding gab, aber wo ist es?

### Logische Abschnitte im Stylesheet schaffen

Es ist eine gute Idee, alle häufig verwendeten Stile zuerst im Stylesheet zu haben. Das bedeutet alle Stile, die im Allgemeinen gelten, es sei denn, Sie machen etwas Besonderes mit diesem Element. In der Regel werden Sie Regeln dafür aufgestellt haben:

- `body`
- `p`
- `h1`, `h2`, `h3`, `h4`, `h5`
- `ul` and `ol`
- The `table` properties
- Links

In diesem Abschnitt des Stylesheets stellen wir das Standard-Styling für den Schrifttyp auf der Site zur Verfügung, richten ein Standard-Styling für Datentabellen und Listen ein und so weiter.

```css
/* || ALLGEMEINE STYLES */

body { ... }

h1, h2, h3, h4 { ... }

ul { ... }

blockquote { ... }
```

Nach diesem Abschnitt könnten wir einige Hilfsklassen definieren, z.B. eine Klasse, die den Standardlistenstil für Listen entfernt, die wir als Flex Items oder auf andere Weise anzeigen wollen. Wenn Sie ein paar Dinge haben, von denen Sie wissen, dass Sie sie auf viele verschiedene Elemente anwenden wollen, können sie in diesem Abschnitt behandelt werden.

```css
/* || HILFSKLASSEN */

.nobullets {
  list-style: none;
  margin: 0;
  padding: 0;
}

...
```

Dann können wir alles hinzufügen, was überall auf der Website verwendet wird. Das können Dinge wie das grundlegende Seitenlayout, die Kopfzeile, die Gestaltung der Navigation und so weiter sein.

```css
/* || STILE, DIE AUF DER GANZEN SEITE VERWENDET WERDEN */

.main-nav { ... }

.logo { ... }
```

Schließlich werden wir CSS für bestimmte Dinge aufnehmen, aufgeschlüsselt nach dem Kontext, der Seite oder sogar der Komponente, in der sie verwendet werden.

```css
/* || SHOP SEITEN */

.product-listing { ... }

.product-box { ... }
```

Indem wir die Dinge auf diese Weise anordnen, haben wir zumindest eine Vorstellung davon, in welchem Teil des Stylesheets wir nach etwas suchen werden, das wir ändern wollen.

### Allzu spezifische Selektoren vermeiden

Wenn Sie sehr spezifische Selektoren erstellen, werden Sie oft feststellen, dass Sie Teile Ihres CSS duplizieren müssen, um die gleichen Regeln auf ein anderes Element anzuwenden. Zum Beispiel könnten Sie etwas wie den unten stehenden Selektor haben, der die Regel auf ein `<p>` mit der Klasse `box` innerhalb eines `<article>` mit der Klasse `main` anwendet.

```css
article.main p.box {
  border: 1px solid #ccc;
}
```

Wenn Sie nun die gleiche Regel außerhalb von `main` oder bei etwas anderem als `<p>` anwenden möchten, müssten Sie einen weiteren Selektor zu dieser Regel hinzufügen oder ein ganz neues Regelset erstellen. Stattdessen sollten Sie den Selektor `.box` verwenden, damit die Regel auf alle Elemente mit der Klasse `box` angewendet wird:

```css
.box {
  border: 1px solid #ccc;
}
```

In einigen Fällen kann es sinnvoll sein, eine höhere Spezifizität zu verwenden. Das wird aber eher die Ausnahme als die übliche Praxis sein.

### Große Stylesheets in mehrere kleine aufteilen

Insbesondere in Fällen, in denen Sie sehr unterschiedliche Stile für verschiedene Teile der Website haben, sollten Sie vielleicht ein Stylesheet haben, das alle globalen Regeln enthält, und dann kleinere, die die spezifischen Regeln enthalten, die für diese Abschnitte benötigt werden. Sie können von einer Seite aus auf mehrere Stylesheets verweisen, und es gelten die normalen Regeln der Kaskade, wobei Regeln in später verknüpften Stylesheets auf Regeln in früher verknüpften Stylesheets folgen.

Zum Beispiel könnten wir einen Online-Shop als Teil der Website haben, wobei viel CSS nur für das Styling der Produktauflistungen und Formulare verwendet wird, die für den Shop benötigt werden. Es wäre sinnvoll, diese Dinge in einem anderen Stylesheet zu haben, auf das nur auf den Shop-Seiten verwiesen wird.

Dies kann die Organisation Ihres CSS erleichtern und bedeutet auch, dass Sie weniger Situationen haben werden, in denen zwei Personen gleichzeitig am selben Stylesheet arbeiten müssen, was zu Konflikten bei der Quellcodekontrolle führt, wenn mehrere Personen an dem CSS arbeiten.

## Andere hilfreiche Tools

CSS an sich hat nicht viel an eingebauter Struktur zu bieten, daher müssen Sie die Arbeit erledigen, um Konsistenz und Regeln für die Erstellung von CSS zu schaffen. Die Web-Community hat auch verschiedene Tools und Ansätze entwickelt, die Ihnen bei der Verwaltung größerer CSS-Projekte helfen können. Da sie für Sie bei der Untersuchung hilfreich sein können und Sie bei der Arbeit mit anderen Personen wahrscheinlich auf diese Dinge stoßen werden, haben wir einen kurzen Leitfaden zu einigen davon beigefügt.

### CSS Verfahren

Anstatt sich eigene Regeln für die Erstellung von CSS ausdenken zu müssen, können Sie einen der Ansätze zu übernehmen, die bereits von der Community entworfen und in vielen Projekten getestet wurden. Bei diesen Methoden handelt es sich im Wesentlichen um CSS-Codierungsleitfäden, die einen sehr strukturierten Ansatz zum Schreiben und Organisieren von CSS verfolgen. In der Regel führen sie zu einer umfassenderen Verwendung von CSS, als wenn Sie jeden Selektor nach einem eigenen Regelsatz für dieses Projekt schreiben und optimieren würden.

Da viele dieser Systeme sehr weit verbreitet sind, ist es wahrscheinlicher, dass andere Entwickler\*innen den von Ihnen verwendeten Ansatz verstehen und ihr CSS auf die gleiche Art und Weise schreiben können, anstatt Ihre persönliche Methodik von Grund auf neu erarbeiten zu müssen.

#### OOCSS

Die meisten Ansätze, denen Sie begegnen werden, beruhen auf dem Konzept des objektorientierten CSS (Object Oriented CSS, OOCSS), ein Ansatz, der populär wurde durch [die Arbeiten von Nicole Sullivan](https://github.com/stubbornella/oocss/wiki). Die Grundidee von OOCSS besteht darin, Ihr CSS in wiederverwendbare Objekte zu zerlegen, die überall auf Ihrer Website verwendet werden können. Das Standardbeispiel für OOCSS ist das als [The Media Object](/de/docs/Web/CSS/Layout_cookbook/Media_objects) beschriebene Modell. Dabei handelt es sich um ein Modell mit einem Bild, einem Video oder einem anderen Element fester Größe auf der einen Seite und flexiblem Inhalt auf der anderen Seite. Es ist ein Modell, das wir überall auf Websites für Kommentare, Auflistungen und so weiter sehen.

Wenn Sie keinen OOCSS-Ansatz verfolgen, können Sie für die verschiedenen Stellen, an denen dieses Modell verwendet wird, benutzerdefiniertes CSS erstellen, z.B. eine Klasse namens `comment` mit einem Bündel von Regeln für die Komponententeile, dann eine Klasse namens `list-item` mit fast denselben Regeln wie die Klasse `comment`, abgesehen von einigen winzigen Unterschieden. Der Unterschied zwischen diesen beiden Komponenten besteht darin, dass das Listenelement einen unteren Rand hat und Bilder in Kommentaren einen Rand haben, während Bilder von Listenelementen keinen Rand haben.

```css
.comment {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.comment img {
  border: 1px solid grey;
}

.comment .content {
  font-size: .8rem;
}

.list-item {
  display: grid;
  grid-template-columns: 1fr 3fr;
  border-bottom: 1px solid grey;
}

.list-item .content {
  font-size: .8rem;
}
```

In OOCSS würden Sie ein Schema namens `media` erstellen, das das gesamte gemeinsame CSS für beide Schemata hat - eine Basisklasse für Dinge, die im Allgemeinen die Form des Medienobjekts darstellen. Dann fügen wir eine zusätzliche Klasse hinzu, die sich mit diesen winzigen Unterschieden befasst und so dieses Styling auf spezifische Weise erweitert.

```css
.media {
  display: grid;
  grid-template-columns: 1fr 3fr;
}

.media .content {
  font-size: .8rem;
}

.comment img {
  border: 1px solid grey;
}

.list-item {
  border-bottom: 1px solid grey;
}
```

In Ihrem HTML-Code müsste für den Kommentar sowohl die Medien- als auch die Kommentarklasse `(media` und `comment`) verwendet werden:

```html
<div class="media comment">
  <img />
  <div class="content"></div>
</div>
```

Auf das Listenelement würde man die Klassen `media` und `list-item` anwenden:

```html
<ul>
  <li class="media list-item">
    <img />
    <div class="content"></div>
  </li>
</ul>
```

Die Arbeit, die Nicole Sullivan geleistet hat, um diesen Ansatz zu beschreiben und zu fördern, bedeutet, dass selbst Personen, die heute nicht strikt einem OOCSS-Ansatz folgen, CSS im Allgemeinen auf diese Weise wiederverwenden werden - es hat sich in unserem Verständnis als eine gute Vorgehensweise im Allgemeinen etabliert.

#### BEM

BEM stands for Block Element Modifier. In BEM a block is a standalone entity such as a button, menu, or logo. An element is something like a list item or a title that is tied to the block it is in. A modifier is a flag on a block or element that changes the styling or behavior. You will be able to recognise code that uses BEM due to the extensive use of dashes and underscores in the CSS classes. For example, look at the classes applied to this HTML from the page about [BEM Naming conventions](http://getbem.com/naming/):

```html
<form class="form form--theme-xmas form--simple">
  <input class="form__input" type="text" />
  <input
    class="form__submit form__submit--disabled"
    type="submit" />
</form>
```

The additional classes are similar to those used in the OOCSS example, however they use the strict naming conventions of BEM.

BEM is widely used in larger web projects and many people write their CSS in this way. It is likely that you will come across examples, even in tutorials, that use BEM syntax, without mentioning why the CSS is structured in such a way.

To read more about the system read [BEM 101](https://css-tricks.com/bem-101/) on CSS Tricks.

#### Other common systems

There are a large number of these systems in use. Other popular approaches include [Scalable and Modular Architecture for CSS (SMACSS)](http://smacss.com/), created by Jonathan Snook, [ITCSS](https://itcss.io/) from Harry Roberts, and [Atomic CSS (ACSS)](https://acss.io/), originally created by Yahoo!. If you come across a project that uses one of these approaches then the advantage is that you will be able to search and find many articles and guides to help you understand how to code in the same style.

The disadvantage of using such a system is that they can seem overly complex, especially for smaller projects.

### Build systems for CSS

Another way to organise CSS is to take advantage of some of the tooling that is available for front-end developers, which allows you to take a slightly more programmatic approach to writing CSS. There are a number of tools which we refer to as _pre-processors_ and _post-processors_. A pre-processor runs over your raw files and turns them into a stylesheet, whereas a post-processor takes your finished stylesheet and does something to it — perhaps to optimize it in order that it will load faster.

Using any of these tools will require that your development environment can run the scripts that do the pre and post-processing. Many code editors can do this for you, or you can install command line tools to help.

The most popular pre-processor is [Sass](https://sass-lang.com/). This is not a Sass tutorial, so I will briefly explain a couple of the things that Sass can do, which are really helpful in terms of organisation, even if you don't use any of the other Sass features. If you want to learn a lot more about Sass, start with the [Sass basics](https://sass-lang.com/guide) article, then move on to their other documentation.

#### Defining variables

CSS now has native [custom properties](/de/docs/Web/CSS/Using_CSS_custom_properties), making this feature increasingly less important, however one of the reasons you might use Sass is to be able to define all of the colors and fonts used in a project as settings, then use that variable around the project. This means that if you realise you have used the wrong shade of blue, you only need change it in one place.

If we created a variable called `$base-color` as in the first line below, we could then use it through the stylesheet anywhere that required that color.

```css
$base-color: #c6538c;

.alert {
  border: 1px solid $base-color;
}
```

Once compiled to CSS, you would end up with the following CSS in the final stylesheet.

```css
.alert {
  border: 1px solid #c6538c;
}
```

#### Compiling component stylesheets

I mentioned above that one way to organise CSS is to break down stylesheets into smaller stylesheets. When using Sass you can take this to another level and have lots of very small stylesheets — even going as far as having a separate stylesheet for each component. By using the include functionality in Sass (partials) these can then all be compiled together into one, or a small number of stylesheets to actually link into your website.

So for example, with [partials](https://sass-lang.com/documentation/at-rules/use#partials), you could have several style files inside a directory, say `foundation/_code.scss`, `foundation/_lists.scss`, `foundation/_footer.scss`, `foundation/_links.scss`, etc., then use the Sass `@use` role to load them into other stylesheets:

```css
// foundation/_index.sass
@use 'code'
@use 'lists'
@use 'footer'
@use 'links'
```

If the partials are all loaded into an index file, as implied above, you can then load that entire directory into another stylesheet in one go:

```css
// style.sass
@use 'foundation'
```

> **Note:** A simple way to try out Sass is to use [CodePen](https://codepen.io) — you can enable Sass for your CSS in the Settings for a Pen, and CodePen will then run the Sass parser for you, in order that you can see the resulting webpage with regular CSS applied. Sometimes you will find that CSS tutorials have used Sass rather than plain CSS in their CodePen demos, so it is handy to know a little bit about it.

#### Post-processing for optimization

If you are concerned about adding size to your stylesheets by adding a lot of additional comments and whitespace for example, then a post-processing step could be to optimize the CSS by stripping out anything unnecessary in the production version. An example of a post-processor solution for doing this would be [cssnano](https://cssnano.co/).

## Wrapping up

This is the final part of our Learning CSS Guide, and as you can see there are many ways in which your exploration of CSS can continue from this point.

To learn more about layout in CSS, see the [Learn CSS Layout](/de/docs/Learn/CSS/CSS_layout) section.

You should also now have the skills to explore the rest of the [MDN CSS](/de/docs/Web/CSS) material. You can look up properties and values, explore our [CSS Cookbook](/de/docs/Web/CSS/Layout_cookbook) for patterns to use, and read more in some of the specific guides such as our [Guide to CSS Grid Layout](/de/docs/Web/CSS/CSS_Grid_Layout).

{{PreviousMenu("Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}

## In this module

1. [Cascade and inheritance](/de/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
2. [CSS selectors](/de/docs/Learn/CSS/Building_blocks/Selectors)

    - [Type, class, and ID selectors](/de/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - [Attribute selectors](/de/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
    - [Pseudo-classes and pseudo-elements](/de/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [Combinators](/de/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

3. [The box model](/de/docs/Learn/CSS/Building_blocks/The_box_model)
4. [Backgrounds and borders](/de/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
5. [Handling different text directions](/de/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
6. [Overflowing content](/de/docs/Learn/CSS/Building_blocks/Overflowing_content)
7. [Values and units](/de/docs/Learn/CSS/Building_blocks/Values_and_units)
8. [Sizing items in CSS](/de/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
9. [Images, media, and form elements](/de/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
10. [Styling tables](/de/docs/Learn/CSS/Building_blocks/Styling_tables)
11. [Debugging CSS](/de/docs/Learn/CSS/Building_blocks/Debugging_CSS)
12. [Organizing your CSS](/de/docs/Learn/CSS/Building_blocks/Organizing)
