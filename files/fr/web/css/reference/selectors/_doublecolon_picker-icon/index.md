---
title: ::picker-icon
slug: Web/CSS/Reference/Selectors/::picker-icon
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

{{SeeCompatTable}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::picker-icon`** cible l'icône de sélection à l'intérieur des contrôles de formulaire qui ont une icône associée. Dans le cas d'un [élément `<select>` personnalisable](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select), il sélectionne l'icône de flèche affichée sur l'élément `<select>` qui pointe vers le bas lorsqu'il est fermé.

## Syntaxe

```css-nolint
::picker-icon {
  /* ... */
}
```

## Description

Le pseudo-élément `::picker-icon` cible l'icône de sélection des contrôles de formulaire, c'est-à-dire l'icône affichée sur le bouton du contrôle. Il n'est disponible que si l'élément d'origine possède un sélecteur et que l'apparence de base lui est appliquée via la propriété {{CSSxRef("appearance")}} avec la valeur `base-select`. Sa boîte générée apparaît après celles générées par le pseudo-élément {{CSSxRef("::after")}}, avec l'icône définie dans la feuille de style par défaut du navigateur. Vous pouvez la personnaliser à l'aide de la propriété {{CSSxRef("content")}}.

Le sélecteur `::picker-icon` peut être utilisé pour cibler la flèche orientée vers le bas du côté en ligne de fin d'un [élément select personnalisable](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select). Cela est utile, par exemple, si vous souhaitez personnaliser la couleur ou la taille de l'icône, utiliser une autre icône (en utilisant {{CSSxRef("content")}} ou [SVG](/fr/docs/Web/SVG)), ou l'animer à l'ouverture et à la fermeture du sélecteur.

La sélection des icônes de sélecteur des éléments `<select>` personnalisables est actuellement le seul cas d'utilisation de `::picker-icon`, mais d'autres pourraient être ajoutés à l'avenir.

> [!NOTE]
> Le pseudo-élément `::picker-icon` n'est pas inclus dans l'arbre d'accessibilité, de sorte que tout {{CSSxRef("content")}} généré qui lui est appliqué ne sera pas annoncé par les technologies d'assistance. Vous devez néanmoins vous assurer que toute nouvelle icône définie a un sens visuel par rapport à l'objectif prévu.

## Exemples

### Animer l'icône du sélecteur

Pour activer la fonctionnalité de `<select>` personnalisable, l'élément `<select>` et son sélecteur doivent tous deux avoir une valeur {{CSSxRef("appearance")}} de `base-select` appliquée&nbsp;:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

Vous pouvez ensuite cibler le `::picker-icon` et lui appliquer une {{CSSxRef("color")}} personnalisée et une {{CSSxRef("transition")}} afin que les changements de sa propriété {{CSSxRef("rotate")}} soient animés en douceur&nbsp;:

```css
select::picker-icon {
  color: #999999;
  transition: 0.4s rotate;
}
```

Dans la règle suivante, `::picker-icon` est combiné avec la pseudo-classe {{CSSxRef(":open")}} — qui cible l'icône uniquement lorsque le sélecteur est ouvert — pour la faire pivoter à une valeur de `180deg` lorsque l'élément `<select>` est ouvert.

```css
select:open::picker-icon {
  rotate: 180deg;
}
```

Voir [Mettre en forme l'icône du sélecteur](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select#mettre_en_forme_licone_du_selecteur) pour un exemple complet utilisant ce code, accompagné d'un exemple interactif.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}}, {{HTMLElement("label")}}, {{HTMLElement("button")}} et {{HTMLElement("selectedcontent")}}
- La propriété {{CSSxRef("appearance")}}
- Les pseudo-éléments {{CSSxRef("::picker()", "::picker(select)")}}, {{CSSxRef("::checkmark")}}
- Les pseudo-classes {{CSSxRef(":open")}}, {{CSSxRef(":checked")}}
- [Éléments `<select>` personnalisables](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select)
