---
title: "@import"
slug: Web/CSS/@import
---

{{CSSRef}}

La [règle @](/fr/docs/Web/CSS/Règles_@) **`@import`** est utilisée afin d'importer des règles à partir d'autres feuilles de style. Ces règles @ doivent être utilisées avant toutes les autres règles, à l'exception de {{cssxref("@charset")}}. `@import` n'est pas [une instruction imbriquée](/fr/Apprendre/CSS/Les_bases/La_syntaxe#Les_instructions_CSS) et ne peut donc pas être utilisée à l'intérieur [de groupe de règles conditionnelles](/fr/docs/Web/CSS/Règles_@#R.C3.A8gles_conditionnelles_de_groupe).

```css
@import url("fineprint.css") print;
@import url("bluish.css") speech;
@import "custom.css";
@import url("chrome://communicator/skin/");
@import "common.css" screen;
@import url("landscape.css") screen and (orientation: landscape);
```

Afin que les agents utilisateurs évitent de récupérer des ressources pour des types de média qui ne sont pas pris en charge, les auteurs peuvent définir des règles `@import` spécifiques à chaque média. Ces imports conditionnels comportent une liste de [requête média](/fr/docs/Web/CSS/Media_queries) séparées par des virgules, situées après l'URL. Si aucune requête média n'est indiquée, l'import est inconditionnel. Cela aura le même effet que d'utiliser la requête média `all`.

## Syntaxe

```
@import url;
@import url liste-requetes-media;
```

où on a :

- `url`
  - : Une valeur de type {{cssxref("&lt;string&gt;")}} ou {{cssxref("&lt;url&gt;")}} qui représente l'emplacement de la ressource qu'on souhaite importer. L'URL peut être absolue ou relative. On notera que, pour un paquet Mozilla, l'URL ne pointe pas nécessairement vers un fichier, elle peut simplement définir le nom du paquet et la partie utilisée, le fichier approprié sera alors choisi automatiquement (e.g. **chrome://communicator/skin/**). [Voir cet article](/fr/docs/Mozilla/Tech/XUL/Tutorial/The_Chrome_URL) pour plus d'informations.
- `liste-requetes-media`
  - : Une liste de [requêtes média](/fr/docs/Web/CSS/Media_Queries/Using_media_queries) séparées par des virgules qui conditionnent l'application des règles CSS pour l'URL associée. Si le navigateur ne prend en charge aucune des requêtes indiquées, il ne charge pas la ressource associée.

### Syntaxe formelle

{{csssyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
