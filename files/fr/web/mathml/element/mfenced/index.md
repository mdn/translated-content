---
title: mfenced
slug: Web/MathML/Element/mfenced
tags:
  - MathML
  - MathML:Element
  - MathML:Format General Schema
  - MathML:Référence
  - Obsolete
translation_of: Web/MathML/Element/mfenced
---
{{MathMLRef}}

{{deprecated_header}} L'élément MathML `<mfenced>` offre la possibilité d'ajouter des parenthèses ouvrantes et fermantes personnalisées ainsi que des séparateurs (comme les virgules ou points-virgules) à une expression.

> **Attention :** Il a été supprimé de la dernière norme MathML et les navigateurs modernes ne le prennent plus en charge. Utilisez les éléments {{MathMLElement("mrow")}} et {{MathMLElement("mo")}} à la place.

## Attributs

- class, id, style
  - : Afin d'être utilisés avec les [feuilles de styles](/fr/docs/CSS).
- close
  - : Une chaîne de caractère pour le délimiteur fermant. La valeur par défaut est «&nbsp;`)`&nbsp;» et tous les blancs sont tronqués.
- href {{Deprecated_Inline()}}
  - : Un hyperlien pointant vers un URI donné.
- mathbackground {{Deprecated_Inline()}}
  - : La couleur de fond. Il est possible d'utiliser les codes au format `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s).
- mathcolor {{Deprecated_Inline()}}
  - : La couleur du texte. Il est possible d'utiliser les codes au format `#rgb`, `#rrggbb` et les [noms de couleurs HTML](/fr/docs/CSS/valeur_de_couleur#Mots-cl.C3.A9s).

<!---->

- open
  - : Une chaîne de caractère pour le délimiteur ouvrant. La valeur par défaut est « `(` » et tous les blancs sont tronqués.
- separators
  - : Une séquence de plusieurs caractères (zéro ou plus) à utiliser pour les séparateurs, éventuellement séparés par des blancs qui seront ignorés. La valeur par défaut est  « , ». En définissant plus d'un caractère, il est possible d'utiliser différents séparateurs pour chaque argument de l'expression. Si jamais il y a trop de séparateurs, le surplus est ignoré. S'il n'y en a pas assez, le dernier séparateur est répété.

## Exemples

Exemple 1 : Le dernier séparateur est répété (`,`).

Exemple d'affichage: ![{a;b;c,d,e}](mfenced01.png)

Affichage dans votre navigateur: <math><mfenced close="}" open separators=";;,"><mi>a</mi> <mi>b</mi> <mi>c</mi> <mi>d</mi> <mi>e</mi></mfenced></math>

```html
<math>
  <mfenced open="{" close="}" separators=";;,">
    <mi>a</mi>
    <mi>b</mi>
    <mi>c</mi>
    <mi>d</mi>
    <mi>e</mi>
  </mfenced>
</math>
```

Exemple 2 : Le séparateur en excès est ignoré (`,`).

Exemple d'affichage: ![[a|b|c|d|e]](mfenced02.png)

Affichage dans votre navigateur: <math><mfenced close="]" open separators="||||,"><mi>a</mi> <mi>b</mi> <mi>c</mi> <mi>d</mi> <mi>e</mi></mfenced></math>

```html
<math>
  <mfenced open="[" close="]" separators="||||,">
    <mi>a</mi>
    <mi>b</mi>
    <mi>c</mi>
    <mi>d</mi>
    <mi>e</mi>
  </mfenced>
</math>
```

## Spécifications

| Spécification                                                                            | Statut                       | Commentaires           |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ---------------------- |
| {{ SpecName('MathML3', 'chapter3.html#presm.mfenced', 'mfenced') }} | {{ Spec2('MathML3') }} | Spécification actuelle |
| {{ SpecName('MathML2', 'chapter3.html#presm.mfenced', 'mfenced') }} | {{ Spec2('MathML2') }} | Spécification initiale |

## Compatibilité des navigateurs

{{Compat("mathml.elements.mfenced")}}
