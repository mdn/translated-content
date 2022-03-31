---
title: scroll-behavior
slug: Web/CSS/scroll-behavior
translation_of: Web/CSS/scroll-behavior
browser-compat: css.properties.scroll-behavior
---
{{CSSRef}}

La propriété **`scroll-behavior`** définit le comportement du défilement pour une boîte de défilement lorsque celui-ci provient de la navigation ou des API CSSOM.

{{EmbedInteractiveExample("pages/css/scroll-behavior.html")}}

Pour les autres défilements, tels que ceux appliqués par l'utilisateur, cette propriété n'a aucun impact. Lorsque cette propriété est définie sur l'élément racine, elle s'applique à la zone d'affichage (<i lang="en">viewport</i>). Lorsque cette propriété est indiquée sur l'élément `body`, elle *ne se propage pas* à la zone d'affichage (<i lang="en">viewport</i>).

Les agents utilisateur peuvent choisir d'ignorer cette propriété.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
scroll-behavior: auto;
scroll-behavior: smooth;

/* Valeurs globales */
scroll-behavior: inherit;
scroll-behavior: initial;
scroll-behavior: revert;
scroll-behavior: unset;
```

La propriété `scroll-behavior` est définie avec l'un des mots-clés suivants.

### Valeurs

- `auto`
  - : La boîte de défilement progresse de façon instantanée.
- `smooth`
  - : Le défilement est doux et utilise une fonction de minutage définie par l'agent utilisateur pendant une période définie par l'agent utilisateur. Les agents utilisateur doivent respecter les conventions de la plateforme s'il y en a.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Définition d'un défilement doux

#### HTML

```html
<nav>
  <a href="#page-1">1</a>
  <a href="#page-2">2</a>
  <a href="#page-3">3</a>
</nav>
<div class="scroll-container">
  <div class="scroll-page" id="page-1">1</div>
  <div class="scroll-page" id="page-2">2</div>
  <div class="scroll-page" id="page-3">3</div>
</div>
```

#### CSS
```css
a {
  display: inline-block;
  width: 50px;
  text-decoration: none;
}

nav, .scroll-container {
  display: block;
  margin: 0 auto;
  text-align: center;
}

nav {
  width: 339px;
  padding: 5px;
  border: 1px solid black;
}

.scroll-container {
  width: 350px;
  height: 200px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}

.scroll-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 5em;
}
```

#### Résultat

{{EmbedLiveSample("", "100%", 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
