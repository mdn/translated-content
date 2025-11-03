---
title: -webkit-text-security
slug: Web/CSS/Reference/Properties/-webkit-text-security
original_slug: Web/CSS/-webkit-text-security
---

{{Non-standard_Header}}

**`-webkit-text-security`** est une propriété CSS non-standard qui permet de masquer les caractères saisis dans un camp d'un formulaire (ex. {{HTMLElement("input")}} ou {{HTMLElement("textarea")}}) en les remplaçant par une forme géométrique. Cette propriété n'affecte que les champs qui ne sont pas de type `password`.

## Syntaxe

```css
-webkit-text-security: circle;
-webkit-text-security: disc;
-webkit-text-security: square;
-webkit-text-security: none;

/* Valeurs globales */
-webkit-text-security: inherit;
-webkit-text-security: initial;
-webkit-text-security: revert;
-webkit-text-security: revert-layer;
-webkit-text-security: unset;
```

## Syntaxe formelle

{{CSSSyntaxRaw(`-webkit-text-security = circle | disc | square | none`)}}

## Exemples

En utilisant un navigateur qui prend en charge cette propriété et en saisissant des caractères dans le champs, vous pourrez les voir remplacées par des carrés.

### HTML

```html
<label for="name">Nom :</label> <input type="text" name="name" id="name" />
```

### CSS

```css
input {
  -webkit-text-security: square;
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

Cette propriété ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Extensions CSS WebKit](/fr/docs/Web/CSS/Reference/Webkit_extensions)
