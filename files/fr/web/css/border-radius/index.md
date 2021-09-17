---
title: border-radius
slug: Web/CSS/border-radius
tags:
  - CSS
  - Propriété
  - Reference
  - Web
translation_of: Web/CSS/border-radius
---
{{CSSRef}}

La propriété **`border-radius`** permet de définir des coins arrondis pour la bordure d'un élément. La courbure de chaque coin est définie avec un ou deux rayons de courbures qui permettent de définir un arc de cercle ou un arc d'ellipse.

{{EmbedInteractiveExample("pages/css/border-radius.html")}}

La courbure s'applique à l'arrière-plan (défini avec la propriété {{cssxref("background")}}) même si l'élément n'a aucune bordure. Le rognage de l'arrière plan s'applique sur la boîte définie par {{cssxref("background-clip")}}.

Cette propriété est une [propriété raccourcie](/fr/docs/Web/CSS/Shorthand_properties) qui permet de définir :

- {{cssxref("border-top-left-radius")}},
- {{cssxref("border-top-right-radius")}},
- {{cssxref("border-bottom-right-radius")}},
- {{cssxref("border-bottom-left-radius")}}.

La propriété `border-radius` ne s'applique pas aux tableaux lorsque {{cssxref("border-collapse")}} vaut `collapse`.

> **Note :** Comme pour les autres propriétés raccourcies, il n'est pas possible d'hériter de valeurs individuelles (par exemple (`border-radius:0 0 inherit inherit` pour surcharger les définitions existantes). Si on souhaite avoir un comportement de ce type, on devra utiliser les propriétés détaillées.

## Syntaxe

```css
/* Quand on utilise un seul rayon, on peut avoir jusqu'à quatre valeurs */
/* On utilise le même rayon pour les quatre angles */
border-radius: 10px;

/* 1. coin en haut à gauche et en bas à droite      */
/* 2. puis coin en haut à droite et en bas à gauche */
border-radius: 10px 5%;

/* 1. coin en haut à gauche                    */
/* 2. coin en haut à droite et en bas à gauche */
/* 3. coin en bas à droite                     */
border-radius: 2px 4px 2px;

/* 1. coin en haut à gauche */
/* 2. coin en haut à droite */
/* 3. coin en bas à droite  */
/* 4. coin en bas à gauche  */
border-radius: 1px 0 3px 4px;

/* En utilisant deux rayons, on peut avoir jusqu'à quatre valeurs          */
/* On sépare les rayons horizontaux des verticaux par une barre oblique    */
/* rayons horizontaux (cf. ci-avant) / rayon vertical pour tous les angles */
border-radius: 10px 5% / 20px;

/* rayons horizontaux puis / puis rayons verticaux */
/* 1. coin en haut à gauche et en bas à droite      */
/* 2. puis coin en haut à droite et en bas à gauche */
border-radius: 10px 5% / 20px 30px;

/* rayons horizontaux puis / puis rayons verticaux */
/* 1. coin en haut à gauche                        */
/* 2. coin en haut à droite et en bas à gauche     */
/* 3. coin en bas à droite                         */
border-radius: 10px 5px 2em / 20px 25px 30%;

/* rayons horizontaux puis / puis rayons verticaux */
/* 1. coin en haut à gauche                        */
/* 2. coin en haut à droite                        */
/* 3. coin en bas à droite                         */
/* 4. coin en bas à gauche                         */
border-radius: 10px 5% / 20px 25em 30px 35em;

/* Valeurs globales */
border-radius: inherit;
border-radius: initial;
border-radius: unset;
```

La propriété `border-radius` peut être définie avec :

- une, deux, trois voire quatre valeurs de longueur ([`<length>`](#length)) ou de pourcentages ([`<percentage>`](#percentage)). Ces valeurs sont utilisées pour désigner un rayon de courbure pour chaque angle.
- puis éventuellement une barre oblique (/) suivie d'une, deux, trois ou quatre valeurs de longueur ou de pourcentage qui permettent de définir un rayon de courbure supplémentaire pour créer des coins elliptiques.

### Valeurs

<table>
  <tbody>
    <tr>
      <td style="vertical-align: top">Une seule valeur</td>
      <td><img src="all-corner.png" /></td>
      <td style="vertical-align: top">
        Une valeur de longueur (type {{cssxref("&lt;length&gt;")}})
        ou un pourcentage (type {{cssxref("&lt;percentage&gt;")}})
        qui indique le rayon à utiliser pour chaque coin lorsqu'on utilise une
        seule valeur dans la déclaration.
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">
        Deux valeurs (coin en haut à gauche et en bas à droite)
      </td>
      <td><img src="top-left-bottom-right.png" /></td>
      <td style="vertical-align: top">
        Une valeur de longueur (type {{cssxref("&lt;length&gt;")}})
        ou un pourcentage (type {{cssxref("&lt;percentage&gt;")}})
        qui indique le rayon de courbure à utiliser pour le coin en haut à
        gauche et le coin en bas à droite de la boîte de bordure lorsqu'on
        utilise deux valeurs dans la déclaration.
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">
        Coin en haut à droite et en bas à gauche (syntaxe à deux et trois
        valeurs)
      </td>
      <td><img src="top-right-bottom-left.png" /></td>
      <td style="vertical-align: top">
        Une valeur de longueur (type {{cssxref("&lt;length&gt;")}})
        ou un pourcentage (type {{cssxref("&lt;percentage&gt;")}})
        qui indique le rayon de courbure à utiliser pour le coin en haut à
        droite et le coin en bas à gauche de la boîte de bordure lorsqu'on
        utilise deux ou trois valeurs dans la déclaration.
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">Coin en haut à gauche</td>
      <td><img src="top-left.png" /></td>
      <td style="vertical-align: top">
        Une valeur de longueur (type {{cssxref("&lt;length&gt;")}})
        ou un pourcentage (type {{cssxref("&lt;percentage&gt;")}})
        qui indique le rayon de courbure à utiliser pour le coin en haut à
        gauche de l'élément. Cette valeur est utilisée lorsqu'on utilise la
        syntaxe avec trois ou quatre valeurs.
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">Coin en haut à droite</td>
      <td style="margin-left: 2px"><img src="top-right.png" /></td>
      <td style="vertical-align: top">
        Une valeur de longueur (type {{cssxref("&lt;length&gt;")}})
        ou un pourcentage (type {{cssxref("&lt;percentage&gt;")}})
        qui indique le rayon de courbure à utiliser pour le coin en haut à
        droite de l'élément. Cette valeur est utilisée lorsqu'on utilise la
        syntaxe avec quatre valeurs.
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">Coin en bas à droite</td>
      <td style="margin-left: 2px"><img src="bottom-rigth.png" /></td>
      <td style="vertical-align: top">
        Une valeur de longueur (type {{cssxref("&lt;length&gt;")}})
        ou un pourcentage (type {{cssxref("&lt;percentage&gt;")}})
        qui indique le rayon de courbure à utiliser pour le coin en bas à droite
        de l'élément. Cette valeur est utilisée lorsqu'on utilise la syntaxe
        avec trois ou quatre valeurs.
      </td>
    </tr>
    <tr>
      <td style="vertical-align: top">Coin en bas à gauche</td>
      <td><img src="bottom-left.png" /></td>
      <td style="vertical-align: top">
        Une valeur de longueur (type {{cssxref("&lt;length&gt;")}})
        ou un pourcentage (type {{cssxref("&lt;percentage&gt;")}})
        qui indique le rayon de courbure à utiliser pour le coin en bas à gauche
        de l'élément. Cette valeur est utilisée lorsqu'on utilise la syntaxe
        avec quatre valeurs.
      </td>
    </tr>
  </tbody>
</table>

- `<length>`
  - : Cette valeur indique la mesure du rayon de courbure du cercle ou la mesure du demi grand axe ou du demi petit axe de l'ellipse traduisant la courbure. Cette valeur peut être exprimée avec les différentes unités de {{cssxref("&lt;length&gt;")}}. Les valeurs négatives sont considérées comme invalides.
- `<percentage>`
  - : Cette valeur traduit la mesure du rayon de courbure (elliptique ou circulaire) exprimée en pourcentages par rapport à la taille de la boîte. Les rayons verticaux sont donc proportionnels à la hauteur de la boîte et les rayons horizontaux proportionnels à la largeur de la boîte. Les valeurs négatives sont considérées comme invalides. Voir {{cssxref("&lt;percentage&gt;")}} pour plus de détails.

Ainsi :

```css
border-radius: 1em/5em;

/* est équivalent à */

border-top-left-radius:     1em 5em;
border-top-right-radius:    1em 5em;
border-bottom-right-radius: 1em 5em;
border-bottom-left-radius:  1em 5em;
```

```css
border-radius: 4px 3px 6px / 2px 4px;

/* est équivalent à : */

border-top-left-radius:     4px 2px;
border-top-right-radius:    3px 4px;
border-bottom-right-radius: 6px 2px;
border-bottom-left-radius:  3px 4px;
```

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
div {
  height: 100px;
  width: 200px;
  border-style: solid;
  border-color: black;
  background-color: palegreen;
}

.arrondi_droit {
  border-radius: 10px 40px 40px 10px;
}

.ellipse {
  border-radius: 50%;
}

.pointille {
  border: dotted;
  border-width: 10px 4px;
  border-radius: 10px 40px;
}

.tirets {
  border: dashed;
  border-width: 2px 4px;
  border-radius: 40px;

}

.slash {
  border-radius: 13em/3em;
}
```

### HTML

```html
<div class="arrondi_droit"></div>

<div class="ellipse"></div>

<div class="tirets"></div>

<div class="pointille"></div>
```

### Résultat

{{EmbedLiveSample("Exemples","300","400")}}

## Spécifications

| Spécification                                                                            | État                                     | Commentaires         |
| ---------------------------------------------------------------------------------------- | ---------------------------------------- | -------------------- |
| {{SpecName('CSS3 Backgrounds', '#border-radius', 'border-radius')}} | {{Spec2('CSS3 Backgrounds')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-radius")}}

## Voir aussi

- Les propriétés liées à la courbure de la bordure

  - {{cssxref("border-top-left-radius")}},
  - {{cssxref("border-top-right-radius")}},
  - {{cssxref("border-bottom-right-radius")}},
  - {{cssxref("border-bottom-left-radius")}}.
