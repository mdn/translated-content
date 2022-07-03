---
title: display-mode
slug: Web/CSS/@media/display-mode
tags:
  - CSS
  - Caractéristique média
  - Reference
translation_of: Web/CSS/@media/display-mode
---
{{CSSRef}}

**`display-mode`** est une caractéristique média CSS (cf. {{cssxref("@media")}}) qui permet d'appliquer différentes règles CSS selon le mode d'affichage de l'application. On pourra utiliser cette caractéristique afin qu'un utilisateur ait une expérience similaire selon qu'il lance le site depuis une URL ou depuis une icône sur un bureau.

Cette caractéristique correspond à la propriété [`display`](/fr/docs/Web/Manifest#display) du manifeste de l'application web. Les deux s'appliquent au contexte de navigation de plus haut niveau ainsi qu'aux contextes fils. Cette requête s'appliquera dans tous les cas (qu'un manifeste d'application soit présent ou non).

## Syntaxe

La caractéristique `display-mode` est définie avec un mot-clé parmi ceux du tableau ci-après.

| Valeur (mode d'affichage) | Description                                                                                                                                                                                                                                                                                                                            | Mode d'affichage utilisé en recours |
| ------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `fullscreen`              | Toute la zone d'affichage est utilisée et aucun autre élément d'interface utilisateur (_chrome_) n'est affiché.                                                                                                                                                                                                                        | `standalone`                        |
| `standalone`              | L'application se comportera comme une application indépendante avec une fenêtre différente, une icône distincte dans les barres d'application. Dans ce mode, l'agent utilisateur supprimera les éléments d'interface utilisateur liés au contrôle de la navigation mais pourra conserver les autres éléments tels que la barre d'état. | `minimal-ui`                        |
| `minimal-ui`              | L'application se comportera comme une application indépendante mais son interface utilisateur sera restreinte aux contrôles de navigation. Les éléments affichés peuvent varier selon les navigateurs.                                                                                                                                 | `browser`                           |
| `browser`                 | L'application ouvre un nouvel onglet dans le navigateur ou une nouvelle fenêtre selon le navigateur et la plateforme utilisés.                                                                                                                                                                                                         | Aucun                               |

## Exemples

```css
@media all and (display-mode: fullscreen) {
  body {
    margin: 0;
    border: 5px solid black;
  }
}
```

## Spécifications

| Spécification                                                                                        | État                         | Commentaires         |
| ---------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('Manifest', '#the-display-mode-media-feature', 'display-mode')}} | {{Spec2('Manifest')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("css.at-rules.media.display-mode")}}
