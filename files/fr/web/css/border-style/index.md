---
title: border-style
slug: Web/CSS/border-style
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/border-style
---
{{CSSRef}}

La propriété CSS **`border-style`** est une [propriété raccourcie](/fr/docs/Web/CSS/Propri%C3%A9t%C3%A9s_raccourcies) qui permet de définir le style des lignes utilisées pour les bordures des quatre côtés de la boîte d'un élément.

{{EmbedInteractiveExample("pages/css/border-style.html")}}Syntaxe

```css
/* Valeurs avec un mot-clé */
border-style: none;
border-style: hidden;
border-style: dotted;
border-style: dashed;
border-style: solid;
border-style: double;
border-style: groove;
border-style: ridge;
border-style: inset;
border-style: outset;

/*  côtés horizontaux | côtés verticaux */
border-style: dotted solid;

/* haut | côtés verticaux | bas */
border-style: hidden double dashed;

/* haut | droite | bas | gauche */
border-style: none solid dotted dashed;

/* Valeurs globales */
border-style: inherit;
border-style: initial;
border-style: unset;
```

> **Note :** La valeur par défaut de `border-style` est `none`. Cela signifie que si on modifie {{cssxref("border-width")}} et {{cssxref("border-color")}}, on ne verra pas la bordure tant que cette propriété n'est pas différente de `none` ou de `hidden`.

La propriété `border-style` peut être définie avec une, deux, trois ou quatre valeurs :

- **Avec une valeur**, celle-ci s'applique aux quatre côté
- **Avec deux valeurs**, la première s'applique aux côté haut et bas et la seconde aux côtés gauche et droit
- **Avec trois valeurs**, la première s'applique au côté haut, la deuxième aux côtés gauche et droit puis la troisième au côté bas
- **Avec quatre valeurs**, les valeurs s'applique dans le sens des aiguilles d'une montre (la première sur le côté haut, la deuxième sur le côté droit, la troisième sur le côté bas et la quatrième sur le côté gauche).

Chacune des valeurs peut être un des mots-clés parmi la liste suivante.

### Valeurs

- `<line-style>`

  - : Un mot-clé qui décrit le style utilisé pour la bordure sur les côtés de la boîte. Ce mot-clé peut prendre l'une des valeurs suivantes :

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>none</code></td>
          <td>
            <div
              style="
                border-width: 3px;
                margin: 0.5em;
                width: 3em;
                height: 3em;
                background-color: palegreen;
              "
            >
               
            </div>
          </td>
          <td>
            L'effet obtenu est le même qu'avec <code>hidden</code> : aucune bordure
            n'est affichée. Dans ce cas, sauf si une image d'arrière-plan est
            définie, la valeur calculée de {{cssxref("border-width")}} sera
            <code>0</code>, même si cette dernière indique une autre valeur.
            Lorsqu'utilisée sur une cellule d'un tableau avec la fusion des
            bordures, <code>none</code> a la priorité la plus basse donc si une
            autre bordure est définie et fusionne avec celle-ci, elle sera 
            affichée.
          </td>
        </tr>
        <tr>
          <td><code>hidden</code></td>
          <td>
            L'effet obtenu est le même qu'avec <code>none</code> : aucune bordure
            n'est affichée. Dans ce cas, sauf si une image d'arrière-plan est
            définie, la valeur calculée de {{cssxref("border-width")}} sera
            <code>0</code>, même si cette dernière indique une autre valeur.
            Lorsqu'utilisée sur une cellule d'un tableau avec la fusion des
            bordures, <code>hidden</code> a la plus haute priorité et donc si une
            autre bordure est définie et fusionne avec celle-ci, aucune ne sera 
            affichée.
          </td>
        </tr>
        <tr>
          <td><code>dotted</code></td>
          <td>
            Affiche une série de points ronds. L'espace entre ces points n'est pas
            défini par la spécification et est donc laissé à l'implémentation. Le
            rayon des points correspond à la moitié de
            {{cssxref("border-width")}}.
          </td>
        </tr>
        <tr>
          <td><code>dashed</code></td>
          <td>
            Affiche une série de tirets. La taille de ces tirets n'est pas définie
            par la spécification et est laissée à l'implémentation.
          </td>
        </tr>
        <tr>
          <td><code>solid</code></td>
          <td>Affiche une ligne droite continue.</td>
        </tr>
        <tr>
          <td><code>double</code></td>
          <td>
            Deux lignes droites sont affichées dont la somme des épaisseurs
            correspond à la valeur fournie par {{cssxref("border-width")}}.
          </td>
        </tr>
        <tr>
          <td><code>groove</code></td>
          <td>
            La bordure crée un effet 3D donnant l'impression qu'elle a été gravée
            dans le document. On obtient un effet opposé à <code>ridge</code>.
          </td>
        </tr>
        <tr>
          <td><code>ridge</code></td>
          <td>
            La bordure crée un effet 3D donnant l'impression que la bordure ressort
            du document. L'effet obtenu est opposé à celui obtenu avec
            <code>groove</code>.
          </td>
        </tr>
        <tr>
          <td><code>inset</code></td>
          <td>
            La bordure crée un effet 3D qui donne l'impression que la boîte est
            renfoncée dans le document (l'effet obtenu est opposé à celui obtenu
            avec <code>outset</code>). Lorsqu'elle est appliquée sur une cellule de
            tableau et que {{cssxref("border-collapse")}} vaut
            <code>collapsed</code>, cette valeur se comporte comme
            <code>groove</code>.
          </td>
        </tr>
        <tr>
          <td><code>outset</code></td>
          <td>
            <p>
              La bordure crée un effet 3D qui fait ressortir la boîte (l'effet est
              opposé à <code>inset</code>). Lorsqu'elle est utilisé sur une cellule
              de tableau avec {{cssxref("border-collapse")}} qui vaut
              <code>collapsed</code>, cette valeur se comporte comme
              <code>ridge</code>.
            </p>
          </td>
        </tr>
      </tbody>
    </table>

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
/* On définit la mise en forme */
/* du tableau.                 */
table {
    border-width: 3px;
    background-color: #52E396;
}
tr, td {
    padding: 2px;
}

/* voici des classes pour les exemples */
.b1 {border-style:none;}
.b2 {border-style:hidden;}
.b3 {border-style:dotted;}
.b4 {border-style:dashed;}
.b5 {border-style:solid;}
.b6 {border-style:double;}
.b7 {border-style:groove;}
.b8 {border-style:ridge;}
.b9 {border-style:inset;}
.b10 {border-style:outset;}
```

### HTML

```html
<table>
    <tr>
        <td class="b1">none</td>
        <td class="b2">hidden</td>
        <td class="b3">dotted</td>
        <td class="b4">dashed</td>
    </tr>
    <tr>
        <td class="b5">solid</td>
        <td class="b6">double</td>
        <td class="b7">groove</td>
        <td class="b8">ridge</td>
    </tr>
    <tr>
        <td class="b9">inset</td>
        <td class="b10">outset</td>
    </tr>
</table>
```

### Résultat

{{EmbedLiveSample('Exemples', 300, 200)}}

## Spécific​ations

| Spécification                                                                                    | État                                     | Commentaires               |
| ------------------------------------------------------------------------------------------------ | ---------------------------------------- | -------------------------- |
| {{SpecName('CSS3 Backgrounds', '#border-style', 'border-style')}}         | {{Spec2('CSS3 Backgrounds')}} | Aucune modification.       |
| {{SpecName('CSS2.1', 'box.html#propdef-border-style', 'border-style')}} | {{Spec2('CSS2.1')}}                 | Ajout du mot-clé `hidden`. |
| {{SpecName('CSS1', '#border-style', 'border-style')}}                         | {{Spec2('CSS1')}}                 | Définition initiale.       |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-style")}}

## Voir aussi

- Les autres propriétés raccourcies liées aux bordures :

  - {{cssxref("border")}},
  - {{cssxref("border-width")}},
  - {{cssxref("border-color")}},
  - {{cssxref("border-radius")}}.
