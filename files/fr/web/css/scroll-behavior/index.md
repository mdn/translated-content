---
title: scroll-behavior
slug: Web/CSS/scroll-behavior
tags:
  - CSS
  - CSSOM
  - Propriété
  - Reference
translation_of: Web/CSS/scroll-behavior
---
{{CSSRef}}

La propriété** `scroll-behavior`** définit le comportement du défilement pour une boîte de défilement lorsque celui-ci provient de la navigation ou des API CSSOM.

Pour les autres défilements, appliqués par l'utilisateur, cette propriété n'a aucun impact. Lorsque cette propriété est définie sur l'élément racine, elle s'applique à la zone d'affichage (_viewport_).

{{EmbedInteractiveExample("pages/css/scroll-behavior.html")}}

Les agents utilisateur peuvent choisir d'ignorer cette propriété. Lorsque cette propriété est indiquée sur l'élément `body`, elle ne se propage pas à la zone d'affichage (_viewport_).

## Syntaxe

```css
/* Valeurs avec un mot-clé */
scroll-behavior: auto;
scroll-behavior: smooth;

/* Valeurs globales */
scroll-behavior: inherit;
scroll-behavior: initial;
scroll-behavior: unset;
```

La propriété `scroll-behavior` est définie avec l'un des mots-clés suivants.

### Valeurs

- `auto`
  - : La boîte de défilement progresse de façon instantanée.
- `smooth`
  - : Le défilement est doux et utilise une fonction de minutage définie par l'agent utilisateur pendant une période définie par l'agent utilisateur. Les agents utilisateur doivent respecter les conventions de la plate-forme s'il y en a.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
a {
  display: inline-block;
  width: 50px;
  text-decoration: none;
}
nav, scroll-container {
  display: block;
  margin: 0 auto;
  text-align: center;
}
nav {
  width: 339px;
  padding: 5px;
  border: 1px solid black;
}
scroll-container {
  display: block;
  width: 350px;
  height: 200px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
scroll-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 5em;
}
```

### HTML

```html
<nav>
  <a href="#page-1">1</a>
  <a href="#page-2">2</a>
  <a href="#page-3">3</a>
</nav>
<scroll-container>
  <scroll-page id="page-1">1</scroll-page>
  <scroll-page id="page-2">2</scroll-page>
  <scroll-page id="page-3">3</scroll-page>
</scroll-container>
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 250)}}

## Accessibilité

[Les troubles du système vestibulaires](https://fr.wikipedia.org/wiki/Syst%C3%A8me_vestibulaire) peuvent être causés par la maladie, l'âge ou des blessures. Ces troubles entraînent des vertiges, fatigues et nausées suite aux mouvements.

En utilisant la caractéristique média `prefers-reduced-motion`, on peut désactiver le défilement instantanné pour les utilisateurs qui ont paramétré leur système/navigateur afin de réduire les animations et mouvements :

```css
html {
  scroll-behavior: smooth;
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }
}
```

## Spécifications

| Spécification                                                                                    | État                             | Commentaires         |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('CSSOM View', "#propdef-scroll-behavior", 'scroll-behavior')}} | {{Spec2('CSSOM View')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.scroll-behavior")}}
