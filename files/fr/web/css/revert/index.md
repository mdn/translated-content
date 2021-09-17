---
title: revert
slug: Web/CSS/revert
tags:
  - CSS
  - Cascade
  - Mot-clé
  - Reference
translation_of: Web/CSS/revert
---
{{CSSRef}}

Le mot-clé **`revert`** permet de _remonter_ la cascade afin que la propriété puisse prendre la valeur qui aurait été utilisée sans mise en forme particulière (la valeur qu'elle aurait eu sans mise en forme appliquée par la feuille de style de l'auteur, de l'utilisateur ou de l'agent utilisateur). Ainsi, si la propriété hérite de son parent, elle prendra la valeur héritée et sinon la valeur par défaut de l'agent utilisateur (ou de la feuille de style utilisateur).

Cette valeur peut être utilisée pour n'importe quelle propriété CSS, y compris la propriété raccourcie {{cssxref("all")}}.

La remontée de la cascade sera plus ou moins prononcée selon l'endroit où est utilisé `revert` :

- Si `revert` est utilisé dans une feuille de style d'un site, ce sera la valeur définie dans la feuille de style de l'utilisateur qui sera utilisée ou celle de l'agent utilisateur par défaut sinon.
- Si `revert` est utilisé dans une feuille de style utilisateur ou si le style a été appliqué par l'utilisateur, `revert` entraînera l'utilisation de la valeur par défaut de l'agent utilisateur.
- Si `revert` est utilisé comme style par défaut de l'agent utilisateur, il aura un comportement équivalent à {{cssxref("unset")}}

Le mot-clé `revert` fonctionne comme `unset` pour de nombreux cas. Les seules différences observables se produisent quand les valeurs sont définies par le navigateur ou dans une feuille de style utilisateur.

`revert` n'aura pas d'effet sur les éléments fils de l'élément ciblé (mais supprimera l'effet d'une règle du parent qui s'appliquerait indirectement aux enfants).

> **Note :** `revert` est une simple valeur, il est toujours possible de la surcharger par une autre avec une règle d'une [spécificité](/fr/docs/Apprendre/CSS/Introduction_à_CSS/La_cascade_et_l_héritage#Spécificité) supérieure.

> **Note :** Le mot-clé `revert` est différent de {{cssxref("initial")}} et ne doit pas être confondu avec ce dernier. {{cssxref("initial")}} utilise [la valeur initiale](/fr/docs/Web/CSS/Valeur_initiale), définie pour chaque propriété par les spécifications CSS. En revanche, les feuilles de style des agents utilisateurs définissent des valeurs par défaut selon les sélecteurs CSS. Par exemple, [la valeur initiale](/fr/docs/Web/CSS/Valeur_initiale) de {{cssxref("display")}} est `inline` mais un agent utilisateur pourra définir les valeurs par défaut suivante dans sa feuille de style : `block` pour {{HTMLElement("div")}}, `table` pour {{HTMLElement("table")}} etc.

## Exemples

### Exemple simple

#### HTML

```html
<section>
  <p>Voici une section !</p>

  <aside class="widget">
    <p>Et un petit widget.</p>
  </aside>
</section>
```

#### CSS

```css
section p {
  color: blue;
  font-family: sans-serif;
  font-weight: bold;
}

.widget p {
  all: revert;
}
```

#### Résultat

{{EmbedLiveSample('Exemple_simple')}}

### `revert` et `unset`

Bien que `revert` et `unset` soient semblables, il y a quelques différences pour certaines propriétés de certains éléments.

Dans l'exemple qui suit, on indique une valeur spécifique pour `font-weight` au niveau de la feuille de style globale sur laquelle on revient avec `unset` et `revert`. `unset` conservera un texte normal car c'est la valeur initiale pour `font-weight` tandis que `revert` rendra le texte en gras car c'est la valeur par défaut pour les titres pour la plupart des navigateurs.

#### CSS

```css
h3 {
  font-weight: normal;
  color: blue;
}
```

#### HTML

```html
<h3 style="font-weight: unset; color: unset;">
  Ceci aura toujours font-weight: normal mais color: black
</h3>
<p>
  Juste un peu de texte
</p>
<h3 style="font-weight: revert; color: revert;">
  Ceci devrait avoir font-weight: bold (la valeur originale)
  et color: black
</h3>
<p>
 Juste un peu de texte
</p>
```

#### Résultat

{{EmbedLiveSample('revert_et_unset')}}

### `all`

Revenir sur toutes les valeurs peut s'avérer utile lorsqu'on veut annuler l'effet de modifications lourdes. Si on poursuit avec l'exemple précédent, plutôt que de revenir séparément sur `font-weight` et `color`, on utilise `all` à la place.

#### CSS

```css
h3 {
  font-weight: normal;
  color: blue;
  border-bottom: 1px solid grey;
}
```

#### HTML

```html
<h3>
  Un style spécifique
</h3>
<p>
  Juste un peu de texte
</p>
<h3 style="all: revert">
  Retour aux réglages par défaut pour toutes les propriétés
</h3>
<p>
  Juste un peu de texte
</p>
```

#### Résultat

{{EmbedLiveSample('all')}}

### Revenir sur une propriété du parent

Utiliser `revert` annule la valeur d'une propriété pour le seul élément ciblé. Pour illustrer ce principe, nous utiliserons une couleur verte pour une section et rouge pour un paragraphe.

#### CSS

```css
section {
  color: darkgreen;
}
p {
  color: red;
}
section.with-revert {
  color: revert;
}
```

#### HTML

```html
<section>
  <h3>Ce texte sera vert foncé</h3>
  <p>Ce texte sera rouge.</p>
  Ce texte sera aussi vert.
</section>
<section class="with-revert">
  <h3>Ce texte sera noir</h3>
  <p>Ce texte sera rouge.</p>
  Ce texte sera aussi noir.
</section>
```

On voit ici que le paragraphe reste en rouge malgré l'utilisation de `revert` pour la section. On voit également que le titre et le nœud texte de la deuxième section sont en noir : comme si `section { color: darkgreen }` n'existait pas pour cette section.

#### Résultat

{{EmbedLiveSample('Revenir_sur_une_propriété_du_parent')}}

## Spécifications

| Spécification                                                        | Statut                           | Commentaires         |
| -------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('CSS4 Cascade', '#default', 'revert')}} | {{Spec2('CSS4 Cascade')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.types.global_keywords.revert")}}

## Voir aussi

- {{cssxref("initial")}}
- {{cssxref("inherit")}}
- {{cssxref("unset")}}
- La propriété {{cssxref("all")}} permet de réinitialiser l'ensemble des propriétés avec leurs valeurs initiales, héritées, annulées ou par défaut.
