---
title: Sélecteurs d'ID
slug: Web/CSS/Reference/Selectors/ID_selectors
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le **sélecteur d'ID** CSS cible un élément en fonction de la valeur de son attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id). Pour que l'élément soit sélectionné, son attribut `id` doit correspondre exactement à la valeur donnée dans le sélecteur.

```css
/* L'élément avec l'identifiant id="demo" */
#demo {
  border: red 2px solid;
}
```

## Syntaxe

```css
#id_value {
  /* … */
}
```

Notez que syntaxiquement (mais pas en termes de spécificité), cela est équivalent au [sélecteur d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) suivant&nbsp;:

```css
[id="id_value"] {
  /* … */
}
```

La valeur `id_value` doit être un [identifiant CSS](/fr/docs/Web/CSS/Reference/Values/ident) valide. Les attributs `id` HTML qui ne sont pas des identifiants CSS valides doivent être [échappés](/fr/docs/Web/CSS/Reference/Values/ident#échappement_de_caractères) avant de pouvoir être utilisés dans les sélecteurs d'ID.

## Exemples

### Sélecteurs d'ID valides

#### HTML

```html
<p id="blue">Ce paragraphe a un fond bleu.</p>
<p>Ceci est juste un paragraphe normal.</p>
```

```html
<!-- Les deux paragraphes suivants ont des attributs id
qui contiennent des caractères devant être échappés en CSS -->

<p id="item?one">Ce paragraphe a un fond rose.</p>
<p id="123item">Ce paragraphe a un fond jaune.</p>
```

### CSS

```css
#blue {
  background-color: skyblue;
}
```

```css
/* Dans les deux règles suivantes, les attributs id doivent être échappés */

#item\?one {
  background-color: pink;
}

#\00003123item {
  background-color: yellow;
}
```

### Résultat

{{EmbedLiveSample("Sélecteurs d'ID valides", "100%", 200)}}

### Sélecteurs d'ID invalides

Les sélecteurs d'ID dans les règles suivantes ne sont pas des identifiants CSS valides et seront ignorés.

```css example-bad
#item?one {
  background-color: green;
}

#123item {
  background-color: green;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
- [Apprendre CSS&nbsp;: Sélecteurs de base](/fr/docs/Learn_web_development/Core/Styling_basics/Basic_selectors)
