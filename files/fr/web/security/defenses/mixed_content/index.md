---
title: Contenu mixte (Mixed Content)
short-title: Contenu mixte
slug: Web/Security/Defenses/Mixed_content
l10n:
  sourceCommit: 972c6cc542e271e4c00def9465d7a0cc81011378
---

Lorsqu'une page web est chargée depuis une origine sécurisée, par un canal sécurisé tel que {{Glossary("HTTPS")}}, la connexion avec le serveur web est chiffrée et donc protégée contre l'écoute clandestine et la modification par des attaques de type «&nbsp;homme au milieu&nbsp;».
Si la page web chargée de manière sécurisée ne contient que des images, des scripts et d'autres ressources hébergées également sur des origines sécurisées, les utilisateur·ice·s peuvent être certain·e·s que la page entière est protégée contre ce type d'attaques.

«&nbsp;Contenu mixte&nbsp;» désigne les pages web chargées de manière sécurisée qui récupèrent des ressources avec HTTP ou un autre protocole non sécurisé.
Ce type de page est potentiellement dangereux, car les ressources transmises de manière non sécurisée peuvent être visualisées (révélant éventuellement des informations sensibles) et/ou modifiées par un·e attaquant·e.
Les scripts sont particulièrement dangereux puisqu'ils peuvent modifier n'importe quel aspect de la page, mais tous les types de ressources présentent un risque.
Par exemple, des images peuvent être altérées pour donner à l'utilisateur·ice des informations fausses ou trompeuses, ou pour modifier la fonction apparente d'un bouton.

Les «&nbsp;téléchargements mixtes&nbsp;» désignent des téléchargements de ressources initiés depuis un contexte sécurisé mais récupérés avec une connexion non sécurisée.
Ils présentent les mêmes risques que le contenu mixte&nbsp;: les téléchargements semblent provenir d'une origine sécurisée, mais ils ont pu être modifiés ou interceptés en chemin.

Vous devez éviter d'utiliser du contenu mixte et des téléchargements mixtes sur vos sites web.
Les navigateurs atténuent les risques liés au contenu mixte en passant automatiquement les requêtes de contenu mixte pour les images, vidéos et flux audio de HTTP à HTTPS, et en bloquant les requêtes non sécurisées pour tous les autres types de ressources.
Ils doivent également bloquer les _téléchargements mixtes_ par défaut.

## Types de contenu mixte

Le contenu mixte d'une page web se divise en deux catégories&nbsp;: le «&nbsp;contenu améliorable&nbsp;» et le «&nbsp;contenu pouvant être bloqué&nbsp;».
Les navigateurs doivent automatiquement passer les requêtes pour le contenu améliorable de HTTP à HTTPS, et bloquer les requêtes pour le contenu pouvant être bloqué.

Cette approche garantit que tout le contenu d'un contexte sécurisé est soit chargé avec un canal sécurisé, soit bloqué, ce qui est plus sûr pour les utilisateur·ice·s que d'afficher un mélange de contenu sûr et non sécurisé, et moins perturbant que de casser les pages en bloquant absolument tout contenu non sécurisé.

> [!NOTE]
> Les versions antérieures de la spécification divisaient le contenu mixte en catégories «&nbsp;bloqué&nbsp;» et «&nbsp;optionnellement bloqué&nbsp;»&nbsp;:
>
> - Les types de contenu pouvant être bloqué, également appelés «&nbsp;contenu mixte actif&nbsp;», sont ceux susceptibles de modifier d'autres parties de la page web (par exemple les scripts et les feuilles de style).
>   Le risque potentiel si ces fichiers sont modifiés est très élevé, et les navigateurs doivent les bloquer.
> - Les types de contenu optionnellement bloqué, aussi appelés «&nbsp;contenu mixte passif&nbsp;», sont ceux qui ne peuvent pas modifier le reste du contenu de la page (images, vidéos, fichiers audio).
>   Le risque potentiel étant moindre, les navigateurs peuvent choisir de les bloquer ou de les afficher, ou laisser la décision à l'utilisateur·ice.

L'ensemble des types de ressources qui forment le «&nbsp;contenu améliorable&nbsp;» provient initialement de l'ensemble des contenus «&nbsp;optionnellement bloqués&nbsp;».
L'attente est que tout nouveau type de fichier soit défini comme contenu pouvant être bloqué, et que certains contenus améliorable puissent devenir bloquants à l'avenir.

### Contenu améliorable

Les requêtes de contenu améliorable sont celles pour lesquelles une requête non sécurisée est automatiquement convertie en requête sécurisée en modifiant le schéma d'origine de `http` à `https`.
Le serveur distant répond soit avec la ressource, soit avec un code d'état indiquant qu'elle est introuvable.

Les types de ressources de cette catégorie sont ceux dont le blocage risque de casser une part importante du Web.
Ils correspondent actuellement aux types de contenu mixte auparavant «&nbsp;optionnellement bloqués&nbsp;», car ils sont encore utilisés sur certains sites.

Les éléments suivants sont améliorable (sauf si l'hôte de l'URL est défini comme adresse IP — voir la section suivante)&nbsp;:

- L'élément HTML {{HTMLElement("img")}} lorsque l'origine est définie par l'attribut `src`, y compris les documents SVG (mais pas lors de l'utilisation de `srcset` ou de `<picture>`).
- Les images CSS telles que&nbsp;: `background-image`, `border-image`, etc.
- L'élément HTML {{HTMLElement("audio")}} lorsque l'origine est définie avec l'attribut `src`.
- L'élément HTML {{HTMLElement("video")}} lorsque l'origine est définie avec l'attribut `src`.
- L'élément HTML {{HTMLElement("source")}} lorsque la ressource vidéo ou son origine est définie.

### contenu pouvant être bloqué

Le contenu pouvant être bloqué est défini comme «&nbsp;tout le contenu mixte qui n'est pas améliorable&nbsp;».

Cela inclut les requêtes HTTP résultant des éléments suivants (liste non exhaustive)&nbsp;:

- L'élément HTML {{HTMLElement("script")}} lorsque l'origine est définie par l'attribut `src`.
- L'élément HTML {{HTMLElement("link")}} lorsque l'origine est définie dans l'attribut `href`, y compris les feuilles de style.
- L'élément HTML {{HTMLElement("iframe")}} lorsque l'origine est définie par l'attribut `src`.
- Les requêtes {{DOMxRef("Window/fetch", "fetch()")}}.
- Les requêtes {{DOMxRef("XMLHttpRequest")}}.
- Tous les cas en CSS où une valeur {{CSSxRef("url_value", "&lt;url&gt;")}} est utilisée ({{CSSxRef("@font-face")}}, {{CSSxRef("cursor")}}, {{CSSxRef("background-image")}}, etc.).
- L'élément HTML {{HTMLElement("object")}} (attribut `data`).
- La propriété {{DOMxRef("Navigator.sendBeacon")}} (attribut `url`).
- L'élément HTML {{HTMLElement("img")}} lorsque l'origine est définie avec `srcset` ou `<picture>`.
- Les polices web.

Les requêtes de contenu mixte qui sont autrement améliorées sont bloquées si l'hôte de l'URL est une adresse IP plutôt qu'un nom de domaine.
Ainsi `<img src="http://example.com/image.png">` est amélioré, mais `<img src="http://93.184.215.14/image.png">` est bloqué.

## Exemples de requêtes de contenu mixte

Les requêtes de contenu mixte sont des requêtes non sécurisées pour des ressources provenant d'un [contexte sécurisé](/fr/docs/Web/Security/Defenses/Secure_Contexts)&nbsp;:

Les exemples suivants illustrent des requêtes sécurisées, non sécurisées et mixtes&nbsp;:

- `http://insecure.com` charge `http://also.insecure.com` — ce n'est pas une requête de contenu mixte, car les deux origines sont non sécurisées.
- `https://secure.com` charge `http://insecure.com` — c'est une requête de contenu mixte, car la ressource non sécurisée `http://insecure.com` est chargée dans le contexte sécurisé `https://secure.com`.
- `http://insecure.com` charge `https://secure.com` dans un `<iframe>`, qui à son tour charge `http://also.insecure.com` — charger `https://secure.com` dans `http://insecure.com` n'est pas une requête de contenu mixte (il n'y a pas de restriction pour charger un contexte sécurisé dans un contexte non sécurisé).
  Cependant, charger `http://also.insecure.com` dans le cadre sécurisé `https://secure.com` est une requête de contenu mixte.
- `https://secure.com` affiche une URL `data:`, qui charge `http://insecure.com` — il s'agit d'une requête de contenu mixte, car `https://secure.com` (et donc `data:`) ont été chargés en sécurisé et `http://insecure.com` est non sécurisé.

Les requêtes depuis des contextes sécurisés tels que des plugins ou des workers peuvent également être mixtes, et sont améliorées ou bloquées de la même manière.

Notez toutefois que les requêtes de navigation depuis un contexte sécurisé ciblant des contextes de navigation de niveau supérieur non sécurisés ne sont pas considérées comme du contenu mixte, car elles créent un nouveau contexte qui est soit sécurisé soit non sécurisé indépendamment de l'origine de la requête.

### Chargement de ressources locales mixtes

Les ressources locales sont considérées comme provenant d'origines sécurisées, de la même manière que les origines HTTPS.
Cela inclut les URL `file:` et le contenu accédé par des adresses de loopback telles que `http://127.0.0.1/` ou `http://localhost/`.

Vous pouvez charger ces fichiers depuis des contextes sécurisés, et vous conservez un contexte sécurisé.
Cependant, si un fichier local charge une ressource non sécurisée avec `http:`, il s'agit d'une requête de contenu mixte.

La prise en charge du chargement de contenu local peut être vérifiée dans la section [Compatibilité des navigateurs](#compatibilité_des_navigateurs).

## Téléchargements mixtes

Un téléchargement mixte est un téléchargement de ressource depuis un contexte sécurisé avec une connexion non sécurisée.
Ils posent les mêmes problèmes que le contenu mixte — le contenu peut être intercepté et/ou modifié par un·e attaquant·e, et il n'est pas évident pour les utilisateur·ice·s qu'un tel risque existe sur un site sécurisé.

Par exemple, le code suivant définit un élément HTML `{{HTMLElement("a#download", "&lt;a&gt;")}}` qui peut être utilisé pour télécharger la page d'une origine non sécurisée `http://example.com/`.
Si ce code se trouve dans une page servie avec HTTPS, l'enregistrement du lien entraîne un téléchargement mixte.

```html
<a href="http://example.com/" download>Télécharger</a>
```

Les navigateurs doivent bloquer les téléchargements mixtes, et les sites sécurisés ne doivent pas les proposer.

> [!NOTE]
> Les navigateurs bloquent couramment les téléchargements mixtes par défaut, mais informent l'utilisateur·ice du risque et lui permettent de conserver ou d'abandonner le téléchargement.

## Console de développement

La console de développement affiche des avertissements lorsque du contenu mixte est amélioré ou bloqué.
Ces avertissements permettent de détecter et corriger le contenu mixte sur vos sites.

La capture d'écran ci‑dessous montre l'avertissement de la console lorsque une image est améliorée sur Firefox (Chrome affiche un avertissement similaire).

![Capture d'écran de la console web affichant l'avertissement d'amélioration pour une image de contenu mixte.](mixed_content_console_upgradable.png)

Sur les versions des navigateurs qui affichent encore le contenu «&nbsp;optionnellement bloqué&nbsp;», une icône est utilisée pour signaler la présence de contenu mixte, accompagnée d'un avertissement dans la console.
La capture ci‑dessous montre l'icône et l'avertissement dans Firefox lorsqu'il commence à prendre en charge le contenu mixte améliorable.

![Capture d'écran de la console web affichant l'avertissement d'affichage pour une image de contenu mixte.](mixed_content_console_displayed.png)

## Corriger les problèmes de contenu mixte

La meilleure stratégie pour éviter les problèmes de contenu mixte est de servir l'ensemble du contenu en HTTPS&nbsp;:

- Servez tout le contenu de votre domaine en HTTPS.
- Transformez toutes les références aux ressources hébergées sur votre domaine en liens relatifs ou en liens HTTPS, y compris pour les téléchargements.
- Pour les ressources situées sur d'autres sites, utilisez les versions HTTPS si elles sont disponibles.

La plupart des sites proposent une version HTTPS des ressources partagées.
Souvent, la méthode la plus simple consiste à remplacer tous les liens `http://` par `https://` puis à utiliser des outils tels que [LinkChecker <sup>(angl.)</sup>](https://linkchecker.github.io/linkchecker/) pour vérifier que les liens fonctionnent correctement.

Voici quelques méthodes pour vérifier qu'un site est exempt de contenu mixte&nbsp;:

- Parcourez votre site et consultez la [console de développement](#console_de_développement) de votre navigateur pour détecter les avertissements de contenu mixte.
- Désactivez tout contenu mixte dans votre navigateur et testez que les pages fonctionnent comme prévu.
  C'est le comportement par défaut dans Safari, mais la plupart des navigateurs proposent un mécanisme pour bloquer tout contenu mixte (voir les données de [compatibilité](#compatibilité_des_navigateurs)).
- Utilisez un crawler de bureau comme [HTTPSChecker](https://httpschecker.net/how-it-works) ou un outil CLI comme [mcdetect <sup>(angl.)</sup>](https://github.com/agis/mcdetect) pour analyser récursivement votre site et trouver les liens vers du contenu non sécurisé.
- Utilisez un outil en ligne comme [Mixed Content Checker <sup>(angl.)</sup>](https://www.crawlcenter.com/mixed-content-checker) pour vérifier votre site.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [CSP&nbsp;: `upgrade-insecure-requests`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests) passe toutes les requêtes en HTTPS, y compris le contenu mixte pouvant être bloqué
