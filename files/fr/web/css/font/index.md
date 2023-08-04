---
title: font
slug: Web/CSS/font
---

{{CSSRef}}

La propriété **`font`** est :

- une propriété raccourcie permettant de définir rapidement {{cssxref("font-style")}}, {{cssxref("font-variant")}}, {{cssxref("font-weight")}}, {{cssxref("font-stretch")}}, {{cssxref("font-size")}}, {{cssxref("line-height")}} et {{cssxref("font-family")}}
- ou une propriété permettant d'utiliser une police système pour la police de caractères d'un élément grâce à certains mots-clés spécifiques.

{{EmbedInteractiveExample("pages/css/font.html")}}

Comme pour les autres propriétés CSS, les valeurs qui ne sont pas définies avec la propriété raccourcie sont définies avec leur valeur initiale, ce qui peut surcharger les valeurs définies précédemment avec les propriétés « détaillées ». Bien qu'elles ne puissent pas directement être paramétrées avec `font`, les propriétés détaillées, {{cssxref("font-size-adjust")}}, et {{cssxref("font-kerning")}} sont également réinitialisées avec leurs valeurs initiales.

## Syntaxe

```css
/* size | family */
font:
  2em "Open Sans",
  sans-serif;

/* style | size | family */
font:
  italic 2em "Open Sans",
  sans-serif;

/* style | variant | weight | size/line-height | family */
font: italic small-caps bolder 16px/3 cursive;

/* style | variant | weight | stretch | size/line-height | family */
font: italic small-caps bolder condensed 16px/3 cursive;

/* Mots-clés indiquant la police à utiliser */
/* pour les boîtes de dialogue système      */
font: message-box;
font: icon;

/* Valeurs globales */
font: inherit;
font: initial;
font: unset;
```

La propriété `font` peut être définie avec un seul mot-clé (qui sélectionnera la police système à utiliser) ou comme propriété raccourcie pour paramétrer les différentes propriétés relatives aux polices.

Si `font` est définie grâce à un mot-clé, ce mot-clé doit être : [`caption`, `icon`, `menu`, `message-box`, `small-caption` ou `status-bar`](#keyword).

Si `font` est définie comme une propriété raccourcie :

- La déclaration devra inclure des valeurs pour :

  - {{cssxref("&lt;font-size&gt;")}}
  - {{cssxref("&lt;font-family&gt;")}}

- La déclaration pourra éventuellement inclure des valeurs pour :

  - {{cssxref("&lt;font-style&gt;")}}
  - {{cssxref("&lt;font-variant&gt;")}}
  - {{cssxref("&lt;font-weight&gt;")}}
  - {{cssxref("&lt;font-stretch&gt;")}}
  - {{cssxref("&lt;line-height&gt;")}}

- Les valeurs pour `font-style`, `font-variant` et `font-weight` doivent précéder la valeur pour `font-size`
- La valeur de `font-variant` ne peut utiliser que les valeurs définies en CSS 2.1 : `normal` et `small-caps`
- La valeur de `font-stretch` ne peut être qu'un mot-clé.
- La valeur pour `line-height` doit immédiatement suivre la valeur pour `font-size`, séparée par une barre oblique (par exemple "`16px/3`")
- La valeur pour `font-family` doit être la dernière fournie.

### Valeurs

- `<'font-style'>`
  - : Voir la propriété {{cssxref("font-style")}}.
- `<'font-variant'>`
  - : Voir la propriété {{cssxref("font-variant")}}.
- `<'font-weight'>`
  - : Voir la propriété {{cssxref("font-weight")}}.
- `<'font-stretch'>`
  - : Voir la propriété {{cssxref("font-stretch")}}.
- `<'font-size'>`
  - : Voir la propriété {{cssxref("font-size")}}.
- `<'line-height'>`
  - : Voir la propriété {{cssxref("line-height")}}.
- `<'font-family'>`
  - : Voir la propriété {{cssxref("font-family")}}.
- Polices système : `caption` `icon` `menu` `message-box` `small-caption` `status-bar`

  - : Un mot-clé peut être utilisé pour indiquer une police système spécifique :

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>caption</code></td>
          <td>
            La police système utilisée pour les libellés des contrôles (par exemples
            les boutons, listes déroulantes, etc.).
          </td>
        </tr>
        <tr>
          <td><code>icon</code></td>
          <td>
            La police système utilisée pour les textes accompagnant les icônes.
          </td>
        </tr>
        <tr>
          <td><code>menu</code></td>
          <td>La police système utilisée pour les menus.</td>
        </tr>
        <tr>
          <td><code>message-box</code></td>
          <td>La police système utilisée dans les boîtes de dialogue.</td>
        </tr>
        <tr>
          <td><code>small-caption</code></td>
          <td>
            La police système utilisée pour les libellés des contrôles de petite
            taille.
          </td>
        </tr>
        <tr>
          <td><code>status-bar</code></td>
          <td>
            La police système utilisée dans les barres de statut de la fenêtre.
          </td>
        </tr>
      </tbody>
    </table>

    La plupart du temps, les navigateurs implémentent d'autres valeurs, préfixées. Par exemple, Gecko implémente `-moz-window`, `-moz-document`, `-moz-desktop`, `-moz-info`, `-moz-dialog`, `-moz-button`, `-moz-pull-down-menu`, `-moz-list` and `-moz-field`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
/* La corps de la police sera 12px */
/* La hauteur de ligne 14px et la   */
/* famille de polices sans-serif    */

.exemple1 {
  font: 12px/14px sans-serif;
}

/* La taille de la police mesurera   */
/* 80% de celle de l'élément parent  */
/* ou la valeur par défaut et la     */
/* famille de police sera sans-serif */

.exemple2 {
  font: 80% sans-serif;
}

/* La graisse est activée, le style    */
/* est italique, la taille est grande  */
/* et la famille est serif.            */

.gras_italique_serif {
  font: bold italic large serif;
}

/* On utilise la même police que pour */
/* la barre de statut de la fenêtre.  */
.statut {
  font: status-bar;
}
```

### HTML

```html
<p class="exemple1">
  « Toujours aussi mouillée, » dit Alice tristement. « Je ne sèche que d’ennui.
  »
</p>

<p class="exemple2">
  « Dans ce cas, » dit le Dodo avec emphase, se dressant sur ses pattes, « je
  propose l’ajournement, et l’adoption immédiate de mesures énergiques. »
</p>

<p class="gras_italique_serif">
  « Parlez français, » dit l’Aiglon ; « je ne comprends pas la moitié de ces
  grands mots, et, qui plus est, je ne crois pas que vous les compreniez
  vous-même. » L’Aiglon baissa la tête pour cacher un sourire, et quelques-uns
  des autres oiseaux ricanèrent tout haut.
</p>

<p class="statut">
  « J’allais proposer, » dit le Dodo d’un ton vexé, « une course cocasse ; c’est
  ce que nous pouvons faire de mieux pour nous sécher. »
</p>
```

### Résultat

{{EmbedLiveSample("Exemples","300","500")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
