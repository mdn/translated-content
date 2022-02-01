---
title: font-family
slug: Web/CSS/font-family
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/font-family
---
{{CSSRef}}

La propriété **`font-family`** permet de définir une liste, ordonnée par priorité, de polices à utiliser pour mettre en forme le texte de l'élément ciblé.

{{EmbedInteractiveExample("pages/css/font-family.html")}}

Les valeurs sont séparées par des virgules, indiquant chacune une police alternative. Le moteur choisira la première valeur pour laquelle la police correspondante est installée sur l'ordinateur ou qui peut être téléchargée via la règle @ {{cssxref("@font-face")}} définie.

Pour fixer `font-family` et d'autres propriétés liées aux polices de caractères, on pourra utiliser la propriété raccourcie {{cssxref("font")}}.

Les auteurs doivent toujours inclure une famille de police générique dans cette liste car il n'y a aucune certitude qu'une police donnée aura été installée sur l'ordinateur ni qu'elle pourra être téléchargée grâce à {{cssxref("@font-face")}}. L'utilisation d'une famille de police générique permet au navigateur d'utiliser une police acceptable en recours si besoin.

> **Note :** La propriété `font-family` définit une liste de police, ordonnée par priorité, de la plus haute à la plus basse. La sélection de la police ne se fait pas pour l'ensemble du texte mais **caractère par caractère**. Ainsi si une police ne dispose pas du caractère à représenter, ce sera la police suivante qui sera utilisée pour représenter le caractère. Pour Internet Explorer, cela ne fonctionne pas avec la version 6 et les version antérieures.
>
> Les propriétés {{cssxref("font-style")}}, {{cssxref("font-variant")}} et {{cssxref("font-size")}} permettront d'influencer le choix en fonction du style, de la variante ou de la taille disponible parmi les polices de la liste.

## Syntaxe

```css
/* Un nom de police suivi d'un nom de famille générique */
font-family: "Gill Sans Extrabold", sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;

/* Un nom de famille de polices générique */
font-family: serif;
font-family: sans-serif;
font-family: monospace;
font-family: cursive;
font-family: fantasy;
font-family: system-ui;
font-family: emoji;
font-family: math;
font-family: fangsong;

/* Valeurs globales */
font-family: inherit;
font-family: initial;
font-family: unset;
```

La propriété `font-family` permet de lister différentes familles de police, séparées par des virgules. Chaque nom de famille est une valeur [`<family-name>`](#family-name) ou [`<generic-name>`](#generic-name).

Dans l'exemple suivant, on liste deux familles de police, la première utilise une valeur `<family-name>` et la seconde utilise une valeur `<generic-name>` :

```css
font-family: Gill Sans Extrabold, sans-serif;
```

### Valeurs

- `<family-name>`
  - : Le nom d'une famille de polices ; par exemple « Times » ou « Helvetica » sont des noms de famille de polices. Les noms de familles qui comportent des blancs doivent être encadrées par des doubles quotes (").
- `<generic-name>`

  - : Les noms de famille génériques sont utilisés comme mécanisme de secours pour conserver l'intention de mise en forme de l'auteur lorsqu'aucune des polices indiquées n'est disponible. Les noms de famille génériques sont des mots-clés et ne doivent pas être encadrés par des doubles quotes. Un nom de famille générique devrait être utilisé comme dernier élément de la liste des noms. Les mots-clés suivants sont définis :

    - `serif`
      - : Les caractères possèdent des [empattements](<https://fr.wikipedia.org/wiki/Empattement_(typographie)>).
        Voici des exemples de polices avec empattement : Lucida Bright, Lucida Fax, Palatino, "Palatino Linotype", Palladio, "URW Palladio", serif.
    - `sans-serif`
      - : Les caractères n'ont pas d'empattement, leurs extrémités sont anguleuses.
        Voici des exemples de polices correspondantes : "Open Sans", "Fira Sans", "Lucida Sans", "Lucida Sans Unicode", "Trebuchet MS", "Liberation Sans", "Nimbus Sans L", sans-serif.
    - `monospace`
      - : Tous les caractères mesurent la même largeur, on dit que la police est à [chasse](<https://fr.wikipedia.org/wiki/Chasse_(typographie)>) fixe.
        Les polices "Fira Mono", "DejaVu Sans Mono", Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console", monospace sont à chasse fixe.
    - `cursive`
      - : Les caractères des polices cursives possèdent des extrémités permettant de les joindre les uns aux autres, partiellement ou complètement. Cela donne un résultat semblable à l'écriture manuelle au crayon plutôt qu'à des caractères d'imprimerie.
        Voici quelques exemples de polices cursives : "Brush Script MT", "Brush Script Std", "Lucida Calligraphy", "Lucida Handwriting", "Apple Chancery", cursive.
    - `fantasy`
      - : Les polices fantaisie sont des polices décoratives pour lesquelles les caractères sont représentées de façon légère.
        Les polices suivantes sont des exemples de cette famille : Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy.
    - `system-ui`
      - : Les glyphes utilisés sont ceux de l'interface utilisateur par défaut pour le système d'exploitation de la plateforme. Les variantes typographiques différant grandement d'une région à l'autre, cette famille générique est utilisée pour les polices qui ne correspondent pas aux autres familles génériques.
    - `math`
      - : Une police utilisée pour les mise en forme relatives aux mathématiques comme les indices, les exposants, les accolades sur plusieurs lignes, etc.
    - `emoji`
      - : Une police conçue spécifiquement pour l'affichage des emoji.
    - `fangsong`
      - : Un style de caractères chinois particulier se situant entre le style serif Song et la forme cursive Kai. Ce style est généralement utilisé pour les documents officiels du gouvernement.

### Validité des noms de famille

Les noms de famille de polices doivent être encadrés par des doubles ou doivent former une série d'un ou plusieurs identifiants valides. Cela signifie que les signes de ponctuation et les chiffres débutant chaque fragment doivent être échappés pour les noms de famille qui ne sont pas encadrés par des quotes.

Les déclarations suivantes sont valides :

```css
font-family: "Gill Sans Extrabold", sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;
```

Et ces déclarations sont **invalides** :

```css example-bad
font-family: Goudy Bookletter 1911, sans-serif;
font-family: Red/Black, sans-serif;
font-family: "Lucida" Grande, sans-serif;
font-family: Ahem!, sans-serif;
font-family: test@foo, sans-serif;
font-family: #POUND, sans-serif;
font-family: Hawaii 5-0, sans-serif;
```

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.exempleserif {
  font-family: Times, "Times New Roman", Georgia, serif;
}

.exemplesansserif {
  font-family: Verdana, Arial, Helvetica, sans-serif;
}

.exemplemonospace {
  font-family: "Lucida Console", Courier, monospace;
}

.exemplecursive {
  font-family: cursive;
}

.exemplefantasy {
  font-family: fantasy;
}

.exempleemoji {
  font-family: emoji;
}

.exemplemath {
  font-family: math;
}

.exemplefangsong {
  font-family: fangsong;
}
```

### HTML

```html
<div class="exempleserif">
Voici un exemple de police avec empattement (serif).
</div>

<div class="exemplesansserif">
Voici un exemple de police sans empattement (sans-serif).
</div>

<div class="exemplemonospace">
Voici un exemple de police à chasse fixe (monospace).
</div>

<div class="exemplecursive">
Voici un exemple de police cursive.
</div>

<div class="exemplefantasy">
Voici un exemple de police fantaisie.
</div>

<div class="exemplemath">
Voici un exemple de police mathématique.
</div>

<div class="exempleemoji">
Voici un exemple de police emoji.
</div>

<div class="exemplefangsong">
Voici un exemple de police fangsong.
</div>
```

### Résultat

{{EmbedLiveSample('Exemples',600,120)}}

## Spécifications

| Spécification                                                                                            | État                             | Commentaires                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------- |
| {{SpecName('CSS4 Fonts', '#generic-font-families', 'generic font families')}} | {{Spec2('CSS4 Fonts')}} | Ajout de nouvelles familles génériques dont : `system-ui`, `emoji`, `math` et `fangsong`. |
| {{SpecName('CSS3 Fonts', '#font-family-prop', 'font-family')}}                     | {{Spec2('CSS3 Fonts')}} | Aucune modification significative.                                                        |
| {{SpecName('CSS2.1', 'fonts.html#propdef-font-family', 'font-family')}}         | {{Spec2('CSS2.1')}}         | Aucune modification significative.                                                        |
| {{SpecName('CSS1', '#font-family', 'font-family')}}                                     | {{Spec2('CSS1')}}         | Définition initiale.                                                                      |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.font-family")}}
