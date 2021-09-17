---
title: border-right-style
slug: Web/CSS/border-right-style
tags:
  - CSS
  - Propriété
  - Reference
translation_of: Web/CSS/border-right-style
---
{{CSSRef}}

La propriété** `border-right-style`** définit le style de ligne utilisé pour mettre en forme la bordure sur le côté droit d'une boîte.

{{EmbedInteractiveExample("pages/css/border-right-style.html")}}

> **Note :** La spécification ne définit pas la façon dont les bordures de différents styles se rejoignent dans les coins.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
border-right-style: none;
border-right-style: hidden;
border-right-style: dotted;
border-right-style: dashed;
border-right-style: solid;
border-right-style: double;
border-right-style: groove;
border-right-style: ridge;
border-right-style: inset;
border-right-style: outset;

/* Valeurs globales */
border-right-style: inherit;
border-right-style: initial;
border-right-style: unset;
```

### Valeurs

- `<br-style>`

  - : Un mot-clé décrivant la forme qu'on souhaite avoir pour la bordure du côté droit. Il peut prendre l'une des valeurs suivantes :

    <table class="standard-table">
      <tbody>
        <tr>
          <td><code>none</code></td>
          <td>
            L'effet obtenu est le même qu'avec <code>hidden</code> : aucune bordure
            n'est affichée. Dans ce cas, sauf si une image d'arrière-plan est
            définie, la valeur calculée de
            {{cssxref("border-right-width")}} sera <code>0</code>, même
            si cette dernière indique une autre valeur. Lorsqu'utilisée sur une
            cellule d'un tableau avec la fusion des bordures, <code>none</code> a la
            priorité la plus basse donc si une autre bordure est définie et fusionne
            avec celle-ci, elle sera  affichée.
          </td>
        </tr>
        <tr>
          <td><code>hidden</code></td>
          <td>
            L'effet obtenu est le même qu'avec <code>none</code> : aucune bordure
            n'est affichée. Dans ce cas, sauf si une image d'arrière-plan est
            définie, la valeur calculée de
            {{cssxref("border-right-width")}} sera <code>0</code>, même
            si cette dernière indique une autre valeur. Lorsqu'utilisée sur une
            cellule d'un tableau avec la fusion des bordures, <code>hidden</code> a
            la plus haute priorité et donc si une autre bordure est définie et
            fusionne avec celle-ci, aucune ne sera  affichée.
          </td>
        </tr>
        <tr>
          <td><code>dotted</code></td>
          <td>
            Affiche une série de points ronds. L'espace entre ces points n'est pas
            défini par la spécification et est donc laissé à l'implémentation. Le
            rayon des points correspond à la moitié de
            {{cssxref("border-right-width")}}.
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
            ou {{cssxref("border-right-width")}}.
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

/* Des exemples pour border-right-style */
.b1 {border-right-style:none;}
.b2 {border-right-style:hidden;}
.b3 {border-right-style:dotted;}
.b4 {border-right-style:dashed;}
.b5 {border-right-style:solid;}
.b6 {border-right-style:double;}
.b7 {border-right-style:groove;}
.b8 {border-right-style:ridge;}
.b9 {border-right-style:inset;}
.b10 {border-right-style:outset;}
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

| Spécification                                                                                                | État                                     | Commentaires                       |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ---------------------------------- |
| {{SpecName('CSS3 Backgrounds', '#the-border-style', 'border-right-style')}}         | {{Spec2('CSS3 Backgrounds')}} | Aucune modification significative. |
| {{SpecName('CSS2.1', 'box.html#border-style-properties', 'border-right-style')}} | {{Spec2('CSS2.1')}}                 | Définition initiale.               |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.border-right-style")}}

## Voir aussi

- Les autres propriétés liées au style des bordures :

  - {{cssxref("border-left-style")}}
  - {{cssxref("border-top-style")}}
  - {{cssxref("border-bottom-style")}}
  - {{cssxref("border-style")}}.

- Les autres propriétés liées à la bordure droite :

  - {{cssxref("border-right")}}
  - {{cssxref("border-right-color")}}
  - {{cssxref("border-right-width")}}.
