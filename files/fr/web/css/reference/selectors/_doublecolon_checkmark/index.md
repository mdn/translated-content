---
title: ::checkmark
slug: Web/CSS/Reference/Selectors/::checkmark
original_slug: Web/CSS/::checkmark
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

{{SeeCompatTable}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::checkmark`** cible la coche (<i lang="en">checkmark</i>) placée à l'intérieur de l'élément {{htmlelement("option")}} actuellement sélectionné d'un [élément de sélection personnalisable](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select). Il peut être utilisé pour fournir une indication visuelle de l'option sélectionnée.

{{InteractiveExample("Démonstration CSS &nbsp;: ::checkmark")}}

```html-nolint interactive-example
<label for="pet-select">
  Sélectionnez un animal&nbsp;:
</label>
<br />
<select id="pet-select">
  <option value="cat">Chat</option>
  <option value="dog">Chien</option>
  <option value="chicken">
    Poule
  </option>
</select>
```

```css interactive-example
option::checkmark {
  color: orange;
  font-size: 1.5rem;
}

select,
::picker(select) {
  appearance: base-select;
  width: 200px;
}

select {
  border: 2px solid #dddddd;
  background: #eeeeee;
  padding: 10px;
}

::picker(select) {
  border: none;
}

option {
  border: 2px solid #dddddd;
  background: #eeeeee;
  padding: 10px;
}

option:first-of-type {
  border-radius: 8px 8px 0 0;
}

option:last-of-type {
  border-radius: 0 0 8px 8px;
}

option:nth-of-type(odd) {
  background: white;
}

option:not(option:last-of-type) {
  border-bottom: none;
}
```

## Syntax

```css-nolint
::checkmark {
  /* ... */
}
```

## Description

Le pseudo-élément `::checkmark` cible la coche placée à l'intérieur de l'élément `<option>` actuellement sélectionné d'un [élément de sélection personnalisable](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select).

Il n'est disponible pour le ciblage que lorsque l'élément d'origine a un sélecteur et a une apparence de base définie sur lui via la propriété {{cssxref("appearance")}} avec la valeur `base-select`. Sa boîte générée apparaît avant toutes les boîtes générées par le pseudo-élément {{cssxref("::before")}}. L'icône peut être personnalisée à l'aide de la propriété {{cssxref("content")}}.

Le sélecteur `::checkmark` est utile par exemple si vous souhaitez masquer la coche, utiliser une icône personnalisée ou ajuster la position de rendu de la coche à l'intérieur des éléments `<option>`.

> [!NOTE]
> Le pseudo-élément `::checkmark` n'est pas inclus dans l'arbre d'accessibilité, donc tout {{cssxref("content")}} généré qui lui est appliqué ne sera pas annoncé par les technologies d'assistance. Vous devez toujours vous assurer que toute nouvelle icône que vous définissez a un sens visuel pour son objectif prévu.

## Exemples

### Personnalisation de la coche

Pour activer la fonctionnalité de sélection personnalisable, l'élément `<select>` et son sélecteur doivent tous deux avoir une valeur {{cssxref("appearance")}} de `base-select` définie sur eux&nbsp;:

```css
select,
::picker(select) {
  appearance: base-select;
}
```

En considérant que [flexbox](/fr/docs/Web/CSS/Guides/Flexible_box_layout) est utilisé pour disposer les éléments `<option>` (ce qui est vrai dans **les implémentations actuelles** des sélections personnalisables), vous pourriez alors déplacer la coche du début de la ligne à la fin en définissant une valeur {{cssxref("order")}} supérieure à `0`, et en l'alignant à la fin de la ligne en utilisant une valeur {{cssxref("margin-left")}} `auto` (voir l'[Alignement et les marges automatiques](/fr/docs/Web/CSS/Guides/Box_alignment/In_flexbox#alignement_et_marges_automatiques)).

La valeur de la propriété {{cssxref("content")}} pourrait également être définie sur un emoji différent pour changer l'icône affichée.

```css
option::checkmark {
  order: 1;
  margin-left: auto;
  content: "☑️";
}
```

Lisez la [Mise en forme de la coche de sélection actuelle](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select#mise_en_forme_de_la_coche_de_sélection_actuelle) pour un exemple complet qui utilise ce code, ainsi qu'un rendu d'exemple en direct.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments HTML {{htmlelement("select")}}, {{htmlelement("option")}}, {{htmlelement("optgroup")}}, {{htmlelement("label")}}, {{htmlelement("button")}}, {{htmlelement("selectedcontent")}}
- La propriété {{cssxref("appearance")}}
- Les pseudos-éléments {{cssxref("::picker()", "::picker(select)")}}, {{cssxref("::picker-icon")}}
- Les pseudo-classes {{cssxref(":open")}}, {{cssxref(":checked")}}
- Les [éléments de sélection personnalisables](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select)
