---
title: "@view-transition"
slug: Web/CSS/Reference/At-rules/@view-transition
l10n:
  sourceCommit: baf0cb6bfe8bf2418122300d3f93e3aa94f72dca
---

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@view-transition`** est utilisée pour choisir les documents actuels et de destination qui subiront [une transition d'affichage](/fr/docs/Web/API/View_Transition_API), dans le cas d'une navigation entre plusieurs documents.

Pour qu'une transition d'affichage inter-document fonctionne, les documents actuel et de destination de la navigation doivent être sur la même origine.

## Syntaxe

```css
@view-transition {
  navigation: auto | none;
  types: none | <custom-ident>#;
}
```

### Descripteurs

- `navigation`
  - : Un mot-clé définissant l'effet que cette règle @ aura sur le comportement de transition d'affichage du document. Les valeurs possibles sont&nbsp;:
    - `auto`
      - : Le document subira une transition d'affichage lorsqu'il prendra part à une navigation, à condition que celle-ci soit [de même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy), sans redirections inter-origines, et que son {{DOMxRef("NavigateEvent.navigationType", "navigationType")}} soit `traverse`, `push`, ou `replace`. Dans le cas de `push` ou `replace`, la navigation doit être initiée par un·e utilisateur·ice interagissant avec le contenu de la page, et non par une fonctionnalité de l'interface utilisateur du navigateur.
    - `none`
      - : Le document ne subira pas de transition d'affichage.

- `types`
  - : Définit les [types](/fr/docs/Web/API/View_Transition_API/Using_types) de transition d'affichage à définir pour la transition d'affichage active des documents actuel et de destination. Les valeurs possibles sont&nbsp;:
    - `<custom-ident>#`
      - : Une ou plusieurs valeurs {{CSSxRef("&lt;custom-ident>")}} séparées par des virgules représentant les types à définir.
    - `none`
      - : Aucun type n'est défini.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Affichage de la page de transition

Les extraits de code suivants affichent des concepts clés utilisés dans une démo de transition de page.
La démo utilise des transitions de vue transversale&nbsp;; une demi-deuxième transition qui se produit lors de la navigation entre deux pages d'un site.
Pour la démo complète, voir le [Afficher la démonstration de l'application multipages avec transitions](https://mdn.github.io/dom-examples/view-transitions/mpa/).

La règle `@view-transition` est spécifiée dans le CSS pour vos documents actuels et de destination d'une navigation afin de les inclure tous les deux dans la transition d'affichage&nbsp;:

```css
@view-transition {
  navigation: auto;
}
```

En plus de `@view-transition`, nous utilisons la règle {{CSSxRef("@keyframes")}} pour définir deux animations d'images clés et utilisons la propriété abrégée {{CSSxRef("animation")}} pour appliquer ces animations d'images clés aux éléments des pages sortantes ({{CSSxRef("::view-transition-old()")}}) et entrantes ({{CSSxRef("::view-transition-new()")}}) que nous voulons animer.

```css
/* Créer une animation personnalisée */
@keyframes move-out {
  from {
    transform: translateY(0%);
  }

  to {
    transform: translateY(-100%);
  }
}

@keyframes move-in {
  from {
    transform: translateY(100%);
  }

  to {
    transform: translateY(0%);
  }
}

/* Appliquer l'animation personnalisée aux anciens et nouveaux états de page */
::view-transition-old(root) {
  animation: 0.4s ease-in both move-out;
}

::view-transition-new(root) {
  animation: 0.4s ease-in both move-in;
}
```

Voir la démonstration de [l'application multipages avec transitions](https://mdn.github.io/dom-examples/view-transitions/mpa/).

### Utiliser les types de transition de vue

Notre [exemple de types de transition MPA <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/view-transitions/mpa-chapter-nav-transition-types/) ([code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/view-transitions/mpa-chapter-nav-transition-types)) montre comment utiliser `types` via `@view-transition`&nbsp;:

```css
@view-transition {
  navigation: auto;
  types: slide;
}
```

Voir [Utiliser les types avec les transitions d'affichage inter-documents via `@view-transition`](/fr/docs/Web/API/View_Transition_API/Using_types#utilisation_de_types_avec_des_transitions_de_vue_entre_documents_via_view-transition) pour un guide pas à pas de l'exemple référencé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le pseudo-élément {{CSSxRef("::view-transition")}}
- Le pseudo-élément {{CSSxRef("::view-transition-new()")}}
- Le pseudo-élément {{CSSxRef("::view-transition-old()")}}
- Le pseudo-élément {{CSSxRef("::view-transition-group()")}}
- Le pseudo-élément {{CSSxRef("::view-transition-image-pair()")}}
- L'[API View Transition](/fr/docs/Web/API/View_Transition_API)
- [Utiliser les types de transition de vue](/fr/docs/Web/API/View_Transition_API/Using_types)
- [Les règles @ CSS](/fr/docs/Web/CSS/Guides/Syntax/At-rules)
- [Fonctions des règles @ CSS](/fr/docs/Web/CSS/CSS_syntax/At-rule_functions)
