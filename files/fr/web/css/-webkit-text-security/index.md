---
title: '-webkit-text-security'
slug: Web/CSS/-webkit-text-security
translation_of: Web/CSS/-webkit-text-security
---
{{CSSRef}} {{Non-standard_header}}

**`-webkit-text-security`** est une propriété CSS non-standard qui permet de masquer les caractères saisis dans un camp d'un formulaire (ex. {{HTMLElement("input")}} ou {{HTMLElement("textarea")}}) en les remplaçant par une forme géométrique. Cette propriété n'affecte que les champs qui ne sont pas de type `password`.

## Syntaxe

```css
-webkit-text-security: circle;
-webkit-text-security: disc;
-webkit-text-security: square;
-webkit-text-security: none;
```

## Exemples

En utilisant un navigateur qui prend en charge cette propriété et en saisissant des caractères dans le champs, vous pourrez les voir remplacées par des carrés.

### HTML

```html
<label for="name">Nom :</label>
<input type="text" name="name" id="name" />
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

Cette propriété WebKit est spécifique à ce moteur et ne fait partie d'aucune spécification*.*

## Compatibilité des navigateurs

Cette propriété est prise en charge par les navigateurs basés sur WebKit ou Blink.

## Voir aussi

- [Les extensions CSS spécifiques à WebKit](/en-US/docs/Web/CSS/WebKit_Extensions)
