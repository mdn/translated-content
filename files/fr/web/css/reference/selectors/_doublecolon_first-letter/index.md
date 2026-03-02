---
title: ::first-letter
slug: Web/CSS/Reference/Selectors/::first-letter
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::first-letter`** sélectionne la première lettre de la première ligne d'un bloc, si elle n'est pas précédée par un quelconque autre contenu (comme une image ou un tableau en ligne) sur sa ligne.

{{InteractiveExample("Démonstration CSS&nbsp;: ::first-letter", "tabbed-shorter")}}

```css interactive-example
p::first-letter {
  font-size: 1.5rem;
  font-weight: bold;
  color: brown;
}
```

```html interactive-example
<p>
  Des scientifiques explorant les profondeurs de la baie de Monterey ont fait la
  découverte inattendue d'une espèce rare et unique de poisson dragon. Cette
  espèce est la plus rare de son genre.
</p>

<p>
  Lorsque Robison et une équipe de chercheurs ont découvert ce poisson, ils
  participaient à une expédition d'une semaine.
</p>
```

La première lettre d'un élément n'est pas toujours triviale à identifier&nbsp;:

- La ponctuation qui précède ou suit immédiatement la première lettre est incluse dans la correspondance. La ponctuation comprend tout caractère Unicode défini dans les classes _open_ (Ps), _close_ (Pe), _initial quote_ (Pi), _final quote_ (Pf) et _other punctuation_ (Po).
- Certaines langues ont des digraphes qui sont toujours capitalisés ensemble, comme le `IJ` en néerlandais. Dans ces cas, les deux lettres du digraphe doivent être correspondantes par le pseudo-élément `::first-letter`.
- Une combinaison du pseudo-élément {{CSSxRef("::before")}} et de la propriété {{CSSxRef("content")}} peut injecter du texte au début de l'élément. Dans ce cas, `::first-letter` correspondra à la première lettre de ce contenu généré.

> [!NOTE]
> CSS a introduit la notation `::first-letter` (avec deux deux-points) pour distinguer [pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) des [pseudo-elements](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements). Pour des raisons de compatibilité, les navigateurs acceptent également `:first-letter`, introduit plus tôt.
>
> La prise en charge des digraphes tels que `IJ` en néerlandais est faible. Consultez le tableau de compatibilité ci-dessous pour voir l'état actuel de la prise en charge.

## Propriétés autorisées

Seul un petit sous-ensemble de propriétés CSS peut être utilisé avec le pseudo-élément `::first-letter`&nbsp;:

- Toutes les propriétés de police&nbsp;: {{CSSxRef("font")}}, {{CSSxRef("font-style")}}, {{CSSxRef("font-feature-settings")}}, {{CSSxRef("font-kerning")}}, {{CSSxRef("font-language-override")}}, {{CSSxRef("font-stretch")}}, {{CSSxRef("font-synthesis")}}, {{CSSxRef("font-variant")}}, {{CSSxRef("font-variant-alternates")}}, {{CSSxRef("font-variant-caps")}}, {{CSSxRef("font-variant-east-asian")}}, {{CSSxRef("font-variant-ligatures")}}, {{CSSxRef("font-variant-numeric")}}, {{CSSxRef("font-variant-position")}}, {{CSSxRef("font-weight")}}, {{CSSxRef("font-size")}}, {{CSSxRef("font-size-adjust")}}, {{CSSxRef("line-height")}} et {{CSSxRef("font-family")}}
- Toutes les propriétés d'arrière-plan&nbsp;: {{CSSxRef("background")}}, {{CSSxRef("background-color")}}, {{CSSxRef("background-image")}}, {{CSSxRef("background-clip")}}, {{CSSxRef("background-origin")}}, {{CSSxRef("background-position")}}, {{CSSxRef("background-repeat")}}, {{CSSxRef("background-size")}}, {{CSSxRef("background-attachment")}} et {{CSSxRef("background-blend-mode")}}
- Toutes les propriétés de marge&nbsp;: {{CSSxRef("margin")}}, {{CSSxRef("margin-top")}}, {{CSSxRef("margin-right")}}, {{CSSxRef("margin-bottom")}}, {{CSSxRef("margin-left")}}
- Toutes les propriétés de remplissage&nbsp;: {{CSSxRef("padding")}}, {{CSSxRef("padding-top")}}, {{CSSxRef("padding-right")}}, {{CSSxRef("padding-bottom")}}, {{CSSxRef("padding-left")}}
- Toutes les propriétés de bordure&nbsp;: les raccourcis {{CSSxRef("border")}}, {{CSSxRef("border-style")}}, {{CSSxRef("border-color")}}, {{CSSxRef("border-width")}}, {{CSSxRef("border-radius")}}, {{CSSxRef("border-image")}} et les propriétés longues
- La propriété {{CSSxRef("color")}}
- Les propriétés CSS {{CSSxRef("text-decoration")}}, {{CSSxRef("text-shadow")}}, {{CSSxRef("text-transform")}}, {{CSSxRef("letter-spacing")}}, {{CSSxRef("word-spacing")}} (le cas échéant), {{CSSxRef("line-height")}}, {{CSSxRef("text-decoration-color")}}, {{CSSxRef("text-decoration-line")}}, {{CSSxRef("text-decoration-style")}}, {{CSSxRef("box-shadow")}}, {{CSSxRef("float")}}, {{CSSxRef("vertical-align")}} (uniquement si la valeur de `float` est `none`)

## Syntaxe

```css
::first-letter {
  /* ... */
}
```

## Exemples

### Lettre en tête de ligne

Dans cet exemple, nous allons utiliser le pseudo-élément `::first-letter` pour créer un effet de lettrine sur la première lettre du paragraphe qui suit immédiatement le `<h2>`.

#### HTML

```html
<h2>Mon titre</h2>
<p>
  Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
  voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
  kasd gubergren, no sea takimata sanctus est.
</p>
<p>
  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
  consequat.
</p>
```

#### CSS

```css
p {
  width: 500px;
  line-height: 1.5;
}

h2 + p::first-letter {
  color: white;
  background-color: black;
  border-radius: 2px;
  box-shadow: 3px 3px 0 red;
  font-size: 250%;
  padding: 6px 3px;
  margin-right: 6px;
  float: left;
}
```

#### Résultat

{{EmbedLiveSample('lettre_en_tête_de_ligne', '100%', 350)}}

### Effet sur la ponctuation spéciale et les caractères non latins

Cet exemple illustre l'effet de `::first-letter` sur la ponctuation spéciale et les caractères non latins.

#### HTML

```html
<p>
  Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie
  consequat.
</p>
<p>-The beginning of a special punctuation mark.</p>
<p>_The beginning of a special punctuation mark.</p>
<p>"The beginning of a special punctuation mark.</p>
<p>'The beginning of a special punctuation mark.</p>
<p>*The beginning of a special punctuation mark.</p>
<p>#The beginning of a special punctuation mark.</p>
<p>「特殊的汉字标点符号开头。</p>
<p>《特殊的汉字标点符号开头。</p>
<p>"特殊的汉字标点符号开头。</p>
```

#### CSS

```css
p::first-letter {
  color: red;
  font-size: 150%;
}
```

#### Résultat

{{EmbedLiveSample('effet_sur_la_ponctuation_spéciale_et_les_caractères_non_latins', '100%', 350)}}

### Mise en forme de la première lettre dans un élément de texte SVG

Dans cet exemple, nous utilisons le pseudo-élément `::first-letter` pour styliser la première lettre d'un élément SVG {{SVGElement("text")}}.

> [!NOTE]
> Au moment de la rédaction, cette fonctionnalité a un [support limité](#compatibilité_des_navigateurs).

#### HTML

```html
<svg viewBox="0 0 300 40">
  <text y="30">Première lettre dans un &lt;text&gt; SVG</text>
</svg>
```

#### CSS

```css
text {
  font-family: sans-serif;
}

text::first-letter {
  font-family: serif;
  font-size: 2rem;
  font-weight: 600;
  fill: tomato;
  stroke: indigo;
}
```

#### Résultat

{{EmbedLiveSample("mise_en_forme_de_la_première_lettre_dans_un_élément_de_texte_SVG", "100%", "100")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le pseudo-élément {{CSSxRef("::first-line")}}
