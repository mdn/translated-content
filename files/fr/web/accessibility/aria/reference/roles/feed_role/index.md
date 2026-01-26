---
title: "ARIA : rôle feed"
short-title: feed
slug: Web/Accessibility/ARIA/Reference/Roles/feed_role
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Le rôle `feed` est une liste dynamique et défilante d'`articles` dans laquelle les articles sont ajoutés ou supprimés de chaque extrémité de la liste au fur et à mesure que l'utilisateur·ice fait défiler. Un `feed` permet aux lecteurs d'écran d'utiliser le curseur de lecture en mode de navigation pour à la fois lire et faire défiler un flux de contenu riche qui peut continuer à défiler indéfiniment en chargeant plus de contenu au fur et à mesure que l'utilisateur·ice lit.

```html
<section role="feed" aria-busy="false">
  …
  <article aria-posinset="427" aria-setsize="-1">…</article>
  <article aria-posinset="428" aria-setsize="-1">…</article>
  <article aria-posinset="429" aria-setsize="-1">…</article>
  …
</section>
```

## Description

Un `feed` est un type de [`list`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/list_role), le rôle conteneur pour les [`articles`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/article_role) défilables où le défilement peut entraîner l'ajout d'articles en haut ou en bas de la liste. Le rôle permet aux technologies d'assistance d'utiliser le curseur de lecture en mode de navigation pour à la fois lire et faire défiler un flux de contenu riche qui peut continuer à défiler indéfiniment en chargeant plus de contenu au fur et à mesure que l'utilisateur·ice lit. Les exemples incluent un flux RSS, des flux d'actualités, des flux de médias sociaux comme Facebook, Instagram ou Mastodon, ou même une liste de produits connexes sur une page de commerce électronique. Ces flux peuvent être limités ou infinis, chargeant plus de contenu au fur et à mesure que l'utilisateur·ice fait défiler. La mise en œuvre du modèle `feed` permet à un lecteur d'écran de lire de manière fiable et de déclencher le chargement du contenu du flux tout en étant en mode lecture.

Contrairement aux éléments de structure de document qui représentent des éléments HTML statiques, le rôle `feed` nécessite des interactions spécifiques et la mise en œuvre de la navigation au clavier. Le `feed` est un élément conteneur dont les enfants sont des {{HTMLElement('article')}} ou ont le rôle `article`. Chaque article au sein d'un flux doit être sélectionnable, avec un tabindex de 0 ou -1. Un article doit être défilé dans la vue lorsqu'il, ou un élément descendant, reçoit la sélection. Si l'ajout d'articles occupe le thread principal du navigateur, assurez-vous de définir `aria-busy="true"` sur le flux lui-même, et assurez-vous de le définir à nouveau sur `false` lorsque le traitement se termine, sinon l'utilisateur·ice risque de ne pas voir les mises à jour.

Si le nombre d'articles est connu, définissez [`aria-setsize`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) sur les articles eux-mêmes. Cependant, si le nombre total est extrêmement grand, indéfini ou change souvent, définissez `aria-setsize="-1"` pour indiquer que la taille du flux n'est pas connue.

Une autre fonctionnalité du modèle de flux est la lecture en diagonale : les articles d'un flux peuvent contenir à la fois un nom accessible avec le [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) et une description avec un `aria-describedby`, suggérant aux lecteurs d'écran quels éléments lire après l'étiquette lors de la navigation par article. En identifiant les éléments à l'intérieur d'un article qui fournissent le titre et le contenu principal, les technologies d'assistance peuvent fournir des fonctions qui permettent aux utilisateur·ice·s de passer d'un article à l'autre et de discerner efficacement quels articles ils souhaitent lire.

Le modèle de flux permet une interaction fiable en mode de lecture des technologies d'assistance en établissant le suivant accord d'interopérabilité entre la page Web et les technologies d'assistance&nbsp;:

Dans le contexte d'un flux, le code de la page Web est responsable de&nbsp;:

- Le défilement visuel approprié du contenu en fonction de l'article qui contient la sélection du DOM.
- Le chargement ou la suppression des articles du flux en fonction de l'article qui contient la sélection du DOM.

### Interactions au clavier

Il est recommandé de prendre en charge l'interface suivante, ou une interface similaire, lorsque la sélection est à l'intérieur du flux&nbsp;:

- <kbd>Page bas</kbd>&nbsp;: Déplacer la sélection vers l'article suivant.
- <kbd>Page haut</kbd>&nbsp;: Déplacer la sélection vers l'article précédent.
- <kbd>Contrôle + Fin</kbd>&nbsp;: Déplacer la sélection vers le premier élément sélectionnable après le flux.
- <kbd>Contrôle + Début</kbd>&nbsp;: Déplacer la sélection vers le premier élément sélectionnable avant le flux.

Si un flux est imbriqué dans un flux, comme un flux de commentaires dans un flux d'articles de blog, la convention consiste à tabuler dans le flux imbriqué avec la touche <kbd>Tab</kbd> et à fournir une autre touche, comme <kbd>Alt + Page bas</kbd>, pour naviguer d'un article "extérieur" vers le premier élément du flux imbriqué de cet article. Naviguez entre le flux imbriqué et le flux principal avec <kbd>Contrôle + Fin</kbd>, déplaçant la sélection du flux intérieur vers le prochain article du flux extérieur.

### Propriétés, états et rôles WAI-ARIA associés

- [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label)
  - : Si le flux n'a pas de titre visible, l'élément `feed` a une étiquette spécifiée avec `aria-label`. Si c'est le cas, voir `aria-labelledby`.

- [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Si le flux a un titre visible, l'élément `feed` a `aria-labelledby` faisant référence à l'élément contenant le titre. Si ce n'est pas le cas, ajoutez un `aria-label`.

- [`aria-busy`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
  - : Lorsque le flux est occupé, par exemple lorsque des articles sont ajoutés ou supprimés, définissez `aria-busy="true"` pendant l'opération de mise à jour. Assurez-vous de le réinitialiser à `false` lorsque l'opération est terminée, sinon les modifications peuvent ne pas devenir visibles.

- article
  - : Chaque section de contenu dans un flux doit être contenue dans un `<article>` ou un élément avec le rôle [`article`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/article_role). Chaque `article` doit avoir un `aria-labelledby` faisant référence au titre de l'article ou à un autre enfant pouvant servir d'étiquette distinctive. Chaque article doit de préférence avoir un `aria-describedby` faisant référence à un ou plusieurs éléments à l'intérieur de l'article qui servent de contenu principal de l'article. Chaque élément `article` a [`aria-posinset`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-posinset) défini sur une valeur représentant sa position dans le flux et un [`aria-setsize`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-setsize) défini sur une valeur représentant soit le nombre total d'articles qui ont été chargés, soit le nombre total dans le flux, selon la valeur qui est la plus utile pour les utilisateur·ice·s. Si le nombre total dans le flux n'est pas connu, définissez `aria-setsize="-1"`.

### Fonctionnalités JavaScript requises

Aucune, sauf si nécessaire par des attributs. Par exemple, définir [`aria-busy`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy) sur `true` pendant l'opération de mise à jour si nécessaire, puis sur `false` à l'achèvement.

Remarque&nbsp;: Il incombe à l'auteur d'appliquer le comportement clavier "ci-dessus".

## Exemples

[Exemple d'implémentation du modèle de flux <sup>(angl.)</sup>](https://www.w3.org/WAI/ARIA/apg/patterns/feed/examples/feed/)

## Bonnes pratiques

Pour garantir une bonne expérience utilisateur, évitez d'insérer ou de supprimer des articles au milieu d'un `feed`, chargez de nouveaux articles avant que l'utilisateur·ice n'atteigne la fin du flux, et fournissez des commandes clavier pour déplacer la sélection entre les articles afin que les utilisateur·ice·s de clavier puissent naviguer dans votre flux. Voir [Interactions au clavier](#interactions_au_clavier).

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('article')}}
- L'élément {{HTMLElement('ul')}} de liste non ordonnée
- [ARIA&nbsp;: rôle `article`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/article_role)
- [ARIA&nbsp;: rôle `list`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/list_role)
