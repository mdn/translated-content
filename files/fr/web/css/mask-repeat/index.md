---
title: mask-repeat
slug: Web/CSS/mask-repeat
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/mask-repeat
---
{{CSSRef}}

La propriété **`mask-repeat`** définit la façon dont les images de masque sont répétées. Une image de masque peut être répétée horizontalement, verticalement, dans les deux directions ou pas du tout.

```css
/* Syntaxe avec une valeur */
mask-repeat: repeat-x;
mask-repeat: repeat-y;
mask-repeat: repeat;
mask-repeat: space;
mask-repeat: round;
mask-repeat: no-repeat;

/* Syntaxe avec deux valeurs */
/* Première valeur : répétition horizontale */
/* Seconde valeur : répétition verticale */
mask-repeat: repeat space;
mask-repeat: repeat repeat;
mask-repeat: round space;
mask-repeat: no-repeat round;

/* Valeurs globales */
mask-repeat: inherit;
mask-repeat: initial;
mask-repeat: unset;
```

Par défaut, les images répétées sont rognées aux limites de l'élément mais on peut également les adapter pour qu'elles soient également réparties sur l'élément : en les redimensionnant si nécessaire (`round`) ou en les espaçant (`space`).

## Syntaxe

Une ou plusieurs valeurs `<repeat-style>`, séparées par des virgules.

### Valeurs

- `<repeat-style>`

  - : La notation utilisant une seule valeur est une notation raccourcie qui possède un équivalent avec deux valeurs :

    <table class="standard-table">
      <tbody>
        <tr>
          <td><strong>Valeur unique</strong></td>
          <td><strong>Équivalent sur deux valeurs</strong></td>
        </tr>
        <tr>
          <td><code>repeat-x</code></td>
          <td><code>repeat no-repeat</code></td>
        </tr>
        <tr>
          <td><code>repeat-y</code></td>
          <td><code>no-repeat repeat</code></td>
        </tr>
        <tr>
          <td><code>repeat</code></td>
          <td><code>repeat repeat</code></td>
        </tr>
        <tr>
          <td><code>space</code></td>
          <td><code>space space</code></td>
        </tr>
        <tr>
          <td><code>round</code></td>
          <td><code>round round</code></td>
        </tr>
        <tr>
          <td><code>no-repeat</code></td>
          <td><code>no-repeat no-repeat</code></td>
        </tr>
      </tbody>
    </table>

    Lorsqu'on utilise deux valeurs, la première indique le motif de répétition sur l'axe horizontal et la deuxième sur l'axe vertical. Voici une définition de chacun des mots-clés :

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>repeat</code></td>
          <td>
            L'image est répétée autant de fois que nécessaire pour recouvrir la zone
            dédiée au masque. La dernière image sera rognée si nécessaire.
          </td>
        </tr>
        <tr>
          <td><code>space</code></td>
          <td>
            L'image est répétée autant que possible sans rognage. La première et la
            dernière image sont accolées aux bords de l'élément et des espaces sont
            repartis de façon égale entre les images. La propriété
            {{cssxref("mask-position")}} est ignorée sauf s'il n'y a qu'une
            seule image qui puisse être affichée sans être rognée. Le seul cas où
            <code>space</code> est utilisé et qu'une image est rognée se produit
            lorsque l'image est trop grande pour être affichée.
          </td>
        </tr>
        <tr>
          <td><code>round</code></td>
          <td>
            L'image est répétée autant que possible et est étirée si nécessaire afin
            qu'il n'y ait ni rognage ni espace restant.
          </td>
        </tr>
        <tr>
          <td><code>no-repeat</code></td>
          <td>
            Il n'y a aucune répétition de l'image (dès lors, il est possible que
            toute la zone ne soit pas recouverte par cette image). La position de
            l'image est définie grâce à la propriété
            {{cssxref("mask-position")}}.
          </td>
        </tr>
      </tbody>
    </table>

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.exemple {
  height: 100px;
  width: 100px;
  background-color: rgb(128,128,128);
  border: solid black 1px;

  /* Pour voir la bordure */
  -webkit-mask-clip: content;
  mask-clip: content;

  -webkit-mask-image: url('https://developer.mozilla.org/static/img/favicon32.png');
  mask-image: url('https://developer.mozilla.org/static/img/favicon32.png');

  -webkit-mask-repeat: repeat-x;
  mask-repeat: repeat-x;

}
```

### HTML

```html
<div class="exemple"></div>
```

### Résultat

{{EmbedLiveSample("Exemples","200","200")}}

## Spécifications

| Spécification                                                                    | État                         | Commentaires         |
| -------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName("CSS Masks", "#the-mask-repeat", "mask-repeat")}} | {{Spec2("CSS Masks")}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.mask-repeat")}}
