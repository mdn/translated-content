---
title: background-repeat
slug: Web/CSS/background-repeat
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/background-repeat
---
{{CSSRef}}

La propriété **`background-repeat`** définit la façon dont les images utilisées en arrière-plan sont répétées. Une image d'arrière-plan pourra ainsi être répétée sur l'axe horizontal, l'axe vertical ou bien ne pas être répétée.

{{EmbedInteractiveExample("pages/css/background-repeat.html")}}

Par défaut, les images répétées sont rognées à la taille de l'élément mais elles peuvent être redimensionnées pour occuper l'espace avec un nombre entier de répétitions (`round`) voire être distribuées avec des espaces entre les motifs pour remplir la zone (`space`).

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
/* Première valeur : axe horizontal */
/* Seconde valeur : axe vertical    */
background-repeat: repeat space;
background-repeat: repeat repeat;
background-repeat: round space;
background-repeat: no-repeat round;

/* Valeurs globales */
background-repeat: inherit;
background-repeat: initial;
background-repeat: unset;
```

### Valeurs

- `<repeat-style>`

  - : Un mot-clé qui peut être utilisé dans la syntaxe à une valeur ou à deux valeurs. La syntaxe utilisant une valeur est une notation raccourcie dont voici le tableau de correspondance :

    <table class="standard-table">
      <tbody>
        <tr>
          <td><strong>Une seule valeur</strong></td>
          <td><strong>Équivalent avec deux-valeurs</strong></td>
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

    Lorsqu'on utilise la syntaxe à deux valeurs, la première indique la méthode de répétition pour l'axe horizontal et la seconde celle pour l'axe vertical. Voici un tableau décrivant chacune des options :

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>repeat</code></td>
          <td>
            L'image est répétée autant de fois que nécessaire pour recouvrir la zone
            dédiée à l'arrière-plan. La dernière image sera rognée si nécessaire.
          </td>
        </tr>
        <tr>
          <td><code>space</code></td>
          <td>
            L'image est répétée autant que possible sans rognage. La première et la
            dernière image sont accolées aux bords de l'élément et des espaces sont
            repartis de façon égale entre les images. La propriété
            {{cssxref("background-position")}} est ignorée sauf s'il n'y a
            qu'une seule image qui puisse être affichée sans être rognée. Le seul
            cas où <code>space</code> est utilisé et qu'une image est rognée se
            produit lorsque l'image est trop grande pour être affichée.
          </td>
        </tr>
        <tr>
          <td><code>round</code></td>
          <td>
            L'image est répétée autant que possible et est étirée si nécessaire afin
            qu'il n'y ait ni rognage ni espace restant. Dès qu'il y a la place
            d'ajouter une image, les autres sont compressées pour lui laisser la
            place. Ainsi, une image avec une largeur originale de 260px, répétée
            trois fois, pourra être étirée pour que chaque exemplaire mesure 300
            pixels de large, lorsqu'une autre image sera ajoutée, elles seront
            compressées sur 225 pixels.
          </td>
        </tr>
        <tr>
          <td><code>no-repeat</code></td>
          <td>
            Il n'y a aucune répétition de l'image (dès lors, il est possible que
            toute la zone ne soit pas recouverte par cette image). La position de
            l'image est définie grâce à la propriété
            {{cssxref("background-position")}}.
          </td>
        </tr>
      </tbody>
    </table>

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
/* Commun à tous les DIVS */
ol, li {
  margin: 0;
  padding: 0;
}
li {
  margin-bottom: 12px;
}
div {
    background-image: url(https://mdn.mozillademos.org/files/12005/starsolid.gif);
    width: 160px;
    height: 70px;
}

/* background repeat CSS */
.one {
    background-repeat: no-repeat;
}
.two {
    background-repeat: repeat;
}
.three {
    background-repeat: repeat-x;
}
.four {
    background-repeat: repeat-y;
}

.five {
   background-repeat: space;
}

.six {
   background-repeat: round;
}

/* Plusieurs images */
.seven {
    background-image:  url(https://mdn.mozillademos.org/files/12005/starsolid.gif),
                       url(https://developer.mozilla.org/static/img/favicon32.png);
    background-repeat: repeat-x,
                       repeat-y;
    height: 144px;
}
```

### HTML

```html
<ol>
    <li>no-repeat
        <div class="one"></div>
    </li>
    <li>repeat
        <div class="two"></div>
    </li>
    <li>repeat-x
        <div class="three"></div>
    </li>
    <li>repeat-y
        <div class="four"></div>
    </li>
    <li>space
        <div class="five"></div>
    </li>
    <li>round
        <div class="six"></div>
    </li>
    <li>repeat-x, repeat-y (plusieurs images)
        <div class="seven"></div>
    </li>
</ol>
```

### Résultat

Dans cet exemple, chaque élément de la liste illustre une valeur différente de `background-repeat`.

{{EmbedLiveSample('Exemples', 240, 560)}}

## Spécifications

| Spécification                                                                                                    | État                                     | Commentaires                                                                                                                                                                                                                                                                                                            |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Backgrounds', '#the-background-repeat', 'background-repeat')}}         | {{Spec2('CSS3 Backgrounds')}} | Ajout de la prise en charge de plusieurs images d'arrière-plan. La syntaxe avec deux valeurs permet d'avoir des motifs de répétition différents pour les deux axes. Les mots-clés `space` et `round` sont ajoutés. La définition de la zone de dessin pour l'arrière-plan est mieux définie pour les éléments en ligne. |
| {{SpecName('CSS2.1', 'colors.html#propdef-background-repeat', 'background-repeat')}} | {{Spec2('CSS2.1')}}                 | Aucune modification significative.                                                                                                                                                                                                                                                                                      |
| {{SpecName('CSS1', '#background-repeat', 'background-repeat')}}                             | {{Spec2('CSS1')}}                 | Définition initiale.                                                                                                                                                                                                                                                                                                    |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.background-repeat")}}

## Voir aussi

- [Utiliser plusieurs arrières-plans en CSS](/fr/docs/Web/CSS/CSS_Backgrounds_and_Borders/Using_multiple_backgrounds)
