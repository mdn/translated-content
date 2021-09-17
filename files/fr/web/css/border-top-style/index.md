---
title: border-top-style
slug: Web/CSS/border-top-style
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/border-top-style
---
{{CSSRef}}

La propriété** `border-top-style`** définit le style de ligne utilisé pour mettre en forme la bordure en haut d'une boîte.

{{EmbedInteractiveExample("pages/css/border-top-style.html")}}

> **Note :** La spécification ne définit pas la façon dont les bordures de différents styles se rejoignent dans les coins.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
border-top-style: none;
border-top-style: hidden;
border-top-style: dotted;
border-top-style: dashed;
border-top-style: solid;
border-top-style: double;
border-top-style: groove;
border-top-style: ridge;
border-top-style: inset;
border-top-style: outset;

/* Valeurs globales */
border-top-style: inherit;
border-top-style: inherit;
border-top-style: inherit;
```

### Valeurs

- `<br-style>`

  - : Un mot-clé décrivant la forme qu'on souhaite avoir pour la bordure du côté haut. Il peut prendre l'une des valeurs suivantes :

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>none</code></td>
          <td>
            L'effet obtenu est le même qu'avec <code>hidden</code> : aucune bordure
            n'est affichée. Dans ce cas, sauf si une image d'arrière-plan est
            définie, la valeur calculée de {{cssxref("border-top-width")}}
            sera <code>0</code>, même si cette dernière indique une autre valeur.
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
            définie, la valeur calculée de {{cssxref("border-top-width")}}
            sera <code>0</code>, même si cette dernière indique une autre valeur.
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
            {{cssxref("border-top-width")}}.
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
            correspond à la valeur fournie par {{cssxref("border-width")}}
            ou {{cssxref("border-top-width")}}.
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

- `inherit`
  - : Ce mot-clé représente le style de la bordure utilisé pour l'élément parent.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
/* On applique un style sur le tableau */
table {
  border-width: 2px;
  background-color: #52E385;
}
tr, td {
  padding: 3px;
}

/* Des exemples pour border-top-style */
.b1 {border-top-style:none;}
.b2 {border-top-style:hidden;}
.b3 {border-top-style:dotted;}
.b4 {border-top-style:dashed;}
.b5 {border-top-style:solid;}
.b6 {border-top-style:double;}
.b7 {border-top-style:groove;}
.b8 {border-top-style:ridge;}
.b9 {border-top-style:inset;}
.b10 {border-top-style:outset;}
```

### HTML

```html
<table>
  <tr>
    <td class="b1">none</td>
    <td class="b2">hidden</td>
    <td class="b3">petits points</td>
    <td class="b4">tirets</td>
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

## Spécifications

| Spécification                                                                                            | État                                     | Commentaires                       |
| -------------------------------------------------------------------------------------------------------- | ---------------------------------------- | ---------------------------------- |
| {{SpecName('CSS3 Backgrounds', '#the-border-style', 'border-top-style')}}         | {{Spec2('CSS3 Backgrounds')}} | Aucune modification significative. |
| {{SpecName('CSS2.1', 'box.html#border-style-properties', 'border-top-style')}} | {{Spec2('CSS2.1')}}                 | Définition initiale.               |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-top-style")}}

## Voir aussi

- Les autres propriétés liées au style des bordures :

  - {{cssxref("border-left-style")}}
  - {{cssxref("border-right-style")}}
  - {{cssxref("border-bottom-style")}}
  - {{cssxref("border-style")}}.

- Les autres propriétés liées à la bordure haute :

  - {{cssxref("border-top")}}
  - {{cssxref("border-top-color")}}
  - {{cssxref("border-top-width")}}.
