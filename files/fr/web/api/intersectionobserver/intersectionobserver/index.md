---
title: IntersectionObserver.IntersectionObserver()
slug: Web/API/IntersectionObserver/IntersectionObserver
tags:
  - API
  - Constructor
  - Intersection Observer API
  - IntersectionObserver
  - Reference
  - Visibility
  - Visible
translation_of: Web/API/IntersectionObserver/IntersectionObserver
---
{{APIRef("Intersection Observer API")}}

Le constructeur **`IntersectionObserver()`** crée et retourne un nouvel objet [`IntersectionObserver`](/fr/docs/Web/API/IntersectionObserver). Les marges appliquées à la zone racine (indiquée dans l'objet `options` via la propriété `rootMargin`, voir ci-après) sont vérifiées pour s'assurer de la validité de leur syntaxe. Il en va de même pour les seuils (propriété `thresholds` d'`options`) dont l'intervalle de validité (entre 0.0 et 1.0 inclus) et l'ordre (qui doit être croissant) sont vérifiés. Si la liste des seuils est vide, sa valeur par défaut est \[0.0].

## Syntaxe

    let observer = new IntersectionObserver(callback[, options]);

### Paramètres

- `callback`

  - : Une fonction appelée lorsque la proportion de l'élément qui est visible franchit un seuil. La fonction de rappel reçoit en entrée deux paramètres :

    - `entries`
      - : Une liste d'objets [`IntersectionObserverEntry`](/fr/docs/Web/API/IntersectionObserverEntry), chacun représentant un seuil franchi, que ce soit en passant au-dessus ou en dessous du pourcentage spécifié par le seuil.
    - `observateur`
      - : L'objet [`IntersectionObserver`](/fr/docs/Web/API/IntersectionObserver) pour lequel la fonction de rappel est invoquée.

- `options` {{optional_inline}}

  - : Un objet optionnel qui paramètre l'observateur. Si `options` n'est pas spécifié, l'observateur utilise la fenêtre du document comme racine, sans appliquer de marge, et avec un seuil de 0% (signifiant que le moindre changement d'un pixel suffira à déclencher la fonction de rappel). Les propriétés suivantes peuvent être utilisées pour la configuration :

    - `root`
      - : Un objet [`Element`](/fr/docs/Web/API/Element) ou [`Document`](/fr/docs/Web/API/Document) qui est un ancêtre de l'élément observé et dont la boîte englobante sera considérée comme la zone d'affichage (_viewport_). Toute portion de l'élément cible qui n'est pas visible dans la zone couverte par cette zone englobant n'est pas considérée visible.
    - `rootMargin`
      - : Une chaîne de caractères spécifiant un ensemble de décalages à ajouter à la zone englobante pour le calcul des intersections. La zone effective utilisées pour les calculs peut ainsi être réduite ou étendue. La syntaxe est proche de celle utilisée pour la propriété CSS [`margin`](/fr/docs/Web/CSS/margin). Voir [L'élément racine et sa marge externe](/fr/docs/Web/API/Intersection_Observer_API) pour plus d'informations sur le fonctionnement des marges et la syntaxe. Sa valeur par défaut est `"0px 0px 0px 0px"`.
    - `threshold`
      - : Un nombre ou un tableau de nombres entre 0.0 et 1.0 (inclus), spécifiant des seuils définis comme ratios de la part visible d'un élément cible observé par rapport à sa surface totale. Une valeur de 0.0 signifie que tout pixel visible de l'élément le rend visible et 1.0 que l'entièreté de l'élément doit être visible. Voir [cette section sur les seuils](/fr/docs/Web/API/Intersection_Observer_API#Thresholds) pour une description plus approfondie de l'usage des seuils d'intersection. Le seuil par défaut est 0.0.

### Valeur de retour

Un nouvel objet [`IntersectionObserver`](/fr/docs/Web/API/IntersectionObserver) pouvant être utilisé pour observer la visibilité d'un élément cible au sein de la racine indiquée, pour le franchissement des seuils de visibilité spécifiés. Il faudra appeler la méthode [`observe()`](/fr/docs/Web/API/IntersectionObserver/observe) de l'objet pour commencer à observer effectivement les changements de visibilité d'un élément cible.

### Exceptions

- `SyntaxError`
  - : La propriété `rootMargin` de l'argument `options` est invalide.
- `RangeError`
  - : Une ou plusieurs des valeurs de `threshold` (portée par l'argument `options`) est en dehors de l'intervalle allant de 0.0 à 1.0.

## Exemple

Cet exemple crée un nouvel observateur d'intersection qui appelle la fonction `myObserverCallback` chaque fois que la zone visible de l'élément observé change d'au moins 10%.

```js
let observer = new IntersectionObserver(myObserverCallback, {
  threshold: 0.1
});
```

## Spécifications

| Spécification                                                                                                                                                    | Statut                                       | Commentaire          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------- |
| {{SpecName('IntersectionObserver','#dom-intersectionobserver-intersectionobserver','IntersectionObserver constructor')}} | {{Spec2('IntersectionObserver')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.IntersectionObserver.IntersectionObserver")}}
