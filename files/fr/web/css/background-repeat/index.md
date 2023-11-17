---
title: background-repeat
slug: Web/CSS/background-repeat
---

{{CSSRef}}

La propriété [CSS](/fr/docs/Web/CSS) **`background-repeat`** définit la façon dont les images utilisées en arrière-plan sont répétées. Une image d'arrière-plan pourra ainsi être répétée sur l'axe horizontal, l'axe vertical ou bien ne pas être répétée.

{{EmbedInteractiveExample("pages/css/background-repeat.html")}}

Par défaut, les images répétées sont rognées à la taille de l'élément, mais elles peuvent être redimensionnées pour occuper l'espace avec un nombre entier de répétitions (`round`) voire être distribuées avec des espaces entre les motifs pour remplir la zone (`space`).

## Syntaxe

```css
/* Valeurs avec un mot-clé */
background-repeat: repeat-x;
background-repeat: repeat-y;
background-repeat: repeat;
background-repeat: space;
background-repeat: round;
background-repeat: no-repeat;

/* Syntaxe avec deux valeurs        */
/* axe horizontal | vertical */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;

/* Valeurs globales */
background-repeat: inherit;
background-repeat: initial;
background-repeat: revert;
background-repeat: unset;
```

### Valeurs

- `<repeat-style>`

  - : Un mot-clé qui peut être utilisé dans la syntaxe à une valeur ou à deux valeurs. La syntaxe utilisant une valeur est une notation raccourcie dont voici le tableau de correspondance&nbsp;:

    <table class="standard-table">
      <tbody>
        <tr>
          <td><strong>Une seule valeur</strong></td>
          <td><strong>Équivalent avec deux valeurs</strong></td>
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

    Lorsqu'on utilise la syntaxe à deux valeurs, la première indique la méthode de répétition pour l'axe horizontal et la seconde celle pour l'axe vertical. Voici une définition des différentes options&nbsp;:

    - `repeat`
      - : L'image est répétée autant de fois que nécessaire pour recouvrir la zone dédiée à l'arrière-plan. La dernière image sera rognée si nécessaire.
    - `space`
      - : L'image est répétée autant que possible sans rognage. La première et la dernière image sont accolées aux bords de l'élément et des espaces sont repartis de façon égale entre les images. La propriété [`background-position`](/fr/docs/Web/CSS/background-position) est ignorée sauf s'il n'y a qu'une seule image qui puisse être affichée sans être rognée. Le seul cas où `space` est utilisé et qu'une image est rognée se produit lorsque l'image est trop grande pour être affichée.
    - `round`
      - : L'image est répétée autant que possible et est étirée si nécessaire afin qu'il n'y ait ni rognage ni espace restant. Dès qu'il y a la place d'ajouter une image, les autres sont compressées pour lui laisser la place. Ainsi, une image avec une largeur originale de 260px, répétée trois fois, pourra être étirée pour que chaque exemplaire mesure 300 pixels de large, lorsqu'une autre image sera ajoutée, elles seront compressées sur 225 pixels.
    - `no-repeat`
      - : Il n'y a aucune répétition de l'image (dès lors, il est possible que toute la zone ne soit pas recouverte par cette image). La position de l'image est définie grâce à la propriété [`background-position`](/fr/docs/Web/CSS/background-position).

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<ol>
  <li>
    no-repeat
    <div class="un"></div>
  </li>
  <li>
    repeat
    <div class="deux"></div>
  </li>
  <li>
    repeat-x
    <div class="trois"></div>
  </li>
  <li>
    repeat-y
    <div class="quatre"></div>
  </li>
  <li>
    space
    <div class="cinq"></div>
  </li>
  <li>
    round
    <div class="six"></div>
  </li>
  <li>
    repeat-x, repeat-y (plusieurs images)
    <div class="sept"></div>
  </li>
</ol>
```

### CSS

```css
/* Commun à tous les DIVS */
ol,
li {
  margin: 0;
  padding: 0;
}
li {
  margin-bottom: 12px;
}
div {
  background-image: url(starsolid.gif);
  width: 160px;
  height: 70px;
}

/* background-repeat CSS */
.un {
  background-repeat: no-repeat;
}
.deux {
  background-repeat: repeat;
}
.trois {
  background-repeat: repeat-x;
}
.quatre {
  background-repeat: repeat-y;
}
.cinq {
  background-repeat: space;
}
.six {
  background-repeat: round;
}

/* Plusieurs images */
.sept {
  background-image: url(starsolid.gif), url(favicon.png);
  background-repeat: repeat-x, repeat-y;
  height: 144px;
}
```

### Résultat

Dans cet exemple, chaque élément de la liste illustre une valeur différente de `background-repeat`.

{{EmbedLiveSample('', 240, 560)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser plusieurs arrière-plans en CSS](/fr/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
