---
title: user-modify
slug: Web/CSS/user-modify
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/user-modify
---
{{Non-standard_header}}{{CSSRef}}{{deprecated_header}}

La propriété **`user-modify`** n'a aucun effet. Elle était initialement conçue pour déterminer si le contenu d'un élément peut être édité ou non par l'utilisateur.

```css
/* Valeurs avec un mot-clé */
user-modify: read-only;
user-modify: read-write;
user-modify: write-only;

/* Valeurs globales */
user-modify: inherit;
user-modify: initial;
user-modify: unset;
```

> **Attention :** Cette propriété a été remplacée par l'attribut {{HTMLAttrxref("contenteditable")}}.

Cette propriété est similaire à l'attribut HTML {{htmlattrxref("contenteditable")}}. Une propriété similaire : `user-focus` a été proposée [pour des brouillons de la spécification CSS3 pour les interfaces utilisateur](https://www.w3.org/TR/2000/WD-css3-userint-20000216) mais fut rejetée par le groupe de travail. **Elle a été désactivée de Firefox et n'a donc pas d'effet.**

## Syntaxe

La propriété `user-modify` est définie grâce à un mot-clé parmi ceux de la liste ci-après.

### Valeurs

- `read-only`
  - : La valeur par défaut, le contenu ne peut pas être modifié.
- `read-write`
  - : L'utilisateur peut lire et modifier le contenu.
- `read-write-plaintext-only` {{Non-standard_inline}}
  - : Identique à `read-write` mais la mise en forme du texte sera perdue.
- `write-only`
  - : L'utilisateur peut éditer le contenu mais ne peut pas le lire.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
.readwrite {
  -moz-user-modify: read-write;
  -webkit-user-modify: read-write;
}
```

### HTML

```html
<div class="readwrite">L'utilisateur est capable de modifier ce texte.</div>
```

### Résultat

{{EmbedLiveSample("Exemples", 300, 30)}}

## Spécifications

`user-modify` a [été proposée pour la spécification CSS 3 sur les interfaces utilisateurs](https://www.w3.org/TR/2000/WD-css3-userint-20000216#user-modify) (le brouillon de travail de février 2000 qui est désormais remplacé par le module _Basic User Interface_ de _CSS 3_).

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.user-modify")}}

## Voir aussi

- {{cssxref("-moz-user-focus")}}
- {{cssxref("-moz-user-input")}}
- {{cssxref("-moz-user-select")}}
