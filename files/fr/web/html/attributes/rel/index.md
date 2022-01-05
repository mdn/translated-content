---
title: 'Attribut HTML : rel'
slug: Web/HTML/Attributes/rel
tags:
  - Attribute
  - Attributes
  - Constraint validation
  - Link
  - form
  - rel
translation_of: Web/HTML/Attributes/rel
---
{{HTMLSidebar}}

L'attribut **`rel`** définit la relation entre une ressource liée et le document actuel. Valable sur [`<link>`](/fr/docs/Web/HTML/Element/link), [`<a>`](/fr/docs/Web/HTML/Element/a), [`<area>`](/fr/docs/Web/HTML/Element/area), et [`<form>`](/fr/docs/Web/HTML/Element/Form), les valeurs supportées dépendent de l'élément sur lequel se trouve l'attribut.

Le type de relations est donné par la valeur de l'attribut `rel`, qui, s'il est présent, doit avoir une valeur qui est un ensemble non ordonné de mots-clés uniques séparés par des espaces. À la différence d'un nom de `class`, qui n'exprime pas de sémantique, l'attribut `rel` doit exprimer des mots-clés qui sont sémantiquement valides pour les machines et les humains. Les registres actuels des valeurs possibles de l'attribut `rel` sont le [registre de relations de liens de l'IANA](https://www.iana.org/assignments/link-relations/link-relations.xhtml), le [HTML Living Standard](https://html.spec.whatwg.org/multipage/links.html#linkTypes), et la page [existing-rel-values](https://microformats.org/wiki/existing-rel-values) librement modifiable dans le wiki microformats, [comme suggéré](https://html.spec.whatwg.org/multipage/links.html#other-link-types) par le Living Standard. Si un attribut `rel` non présent dans l'une des trois sources ci-dessus est utilisé, certains validateurs HTML (tels que le [W3C Markup Validation Service](https://validator.w3.org/)) généreront un avertissement.

Le tableau suivant énumère quelques-uns des principaux mots-clés existants. Chaque mot-clé dans une valeur séparée par un espace doit être unique dans cette valeur.

| Valeur pour `rel`                                             | Description                                                                                                                                                                                                                                                                   | [`<link>`](/fr/docs/Web/HTML/Element/link) | [`<a>`](/fr/docs/Web/HTML/Element/a) et [`<area>`](/fr/docs/Web/HTML/Element/area) | [`<form>`](/fr/docs/Web/HTML/Element/Form) |
| ------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------ | ---------------------------------------------------------------------------------- | ------------------------------------------ |
| [`alternate`](#alternate)                                     | Représentations alternatives du document actuel.                                                                                                                                                                                                                              | Lien                                       | Lien                                                                               | Non autorisé                               |
| [`author`](#author)                                           | Auteur du document ou de l'article en cours.                                                                                                                                                                                                                                  | Lien                                       | Lien                                                                               | Non autorisé                               |
| [`bookmark`](#bookmark)                                       | Lien permanent pour la section de l'ancêtre le plus proche.                                                                                                                                                                                                                   | Non autorisé                               | Lien                                                                               | Non autorisé                               |
| [`canonical`](#canonical)                                     | URL préférée pour le document actuel.                                                                                                                                                                                                                                         | Lien                                       | Non autorisé                                                                       | Non autorisé                               |
| [`dns-prefetch`](/fr/docs/Web/HTML/Link_types/dns-prefetch)   | Indique au navigateur d'effectuer de manière préemptive la résolution DNS pour l'origine de la ressource cible.                                                                                                                                                               | Ressource externe                          | Non autorisé                                                                       | Non autorisé                               |
| [`external`](#external)                                       | Le document référencé ne fait pas partie du même site que le document actuel.                                                                                                                                                                                                 | Non autorisé                               | Annotation                                                                         | Annotation                                 |
| [`help`](#help)                                               | Lien vers l'aide contextuelle.                                                                                                                                                                                                                                                | Lien                                       | Lien                                                                               | Lien                                       |
| [`icon`](#icon)                                               | Une icône représentant le document actuel.                                                                                                                                                                                                                                    | Ressource externe                          | Non autorisé                                                                       | Non autorisé                               |
| [`license`](#license)                                         | Indique que le contenu principal du document actuel est couvert par la licence de copyright décrite par le document référencé.                                                                                                                                                | Lien                                       | Lien                                                                               | Lien                                       |
| [`manifest`](/fr/docs/Web/HTML/Link_types/manifest)           | Manifeste de l'application web.                                                                                                                                                                                                                                               | Lien                                       | Non autorisé                                                                       | Non autorisé                               |
| [`modulepreload`](/fr/docs/Web/HTML/Link_types/modulepreload) | Indique au navigateur de récupérer le script de manière préemptive et de le stocker dans la carte des modules du document pour une évaluation ultérieure. En option, les dépendances du module peuvent également être récupérées.                                             | Ressource externe                          | Non autorisé                                                                       | Non autorisé                               |
| [`next`](#next)                                               | Indique que le document actuel fait partie d'une série et que le document suivant dans la série est le document référencé.                                                                                                                                                    | Lien                                       | Lien                                                                               | Lien                                       |
| [`nofollow`](#nofollow)                                       | Indique que l'auteur ou l'éditeur original du document actuel n'approuve pas le document référencé.                                                                                                                                                                           | Non autorisé                               | Annotation                                                                         | Annotation                                 |
| [`noopener`](/fr/docs/Web/HTML/Link_types/noopener)           | Crée un contexte de navigation de haut niveau qui n'est pas un contexte de navigation auxiliaire si l'hyperlien créerait l'un ou l'autre, pour commencer (c'est-à-dire qu'il a une valeur d'attribut `target` appropriée).                                                    | Non autorisé                               | Annotation                                                                         | Annotation                                 |
| [`noreferrer`](#noreferrer)                                   | Aucun en-tête `Referer` ne sera inclus. En outre, a le même effet que `noopener`.                                                                                                                                                                                             | Non autorisé                               | Annotation                                                                         | Annotation                                 |
| [`opener`](#opener)                                           | Crée un contexte de navigation auxiliaire si l'hyperlien créerait autrement un contexte de navigation de premier niveau qui n'est pas un contexte de navigation auxiliaire (c'est-à-dire qui a « `_blank` » comme valeur d'attribut `target`).                                | Non autorisé                               | Annotation                                                                         | Annotation                                 |
| [`pingback`](#pingback)                                       | Donne l'adresse du serveur de retour d'appel qui gère les retours d'appel pour le document actuel.                                                                                                                                                                            | Ressource externe                          | Non autorisé                                                                       | Non autorisé                               |
| [`preconnect`](/fr/docs/Web/HTML/Link_types/preconnect)       | Spécifie que l'agent utilisateur doit se connecter de manière préemptive à l'origine de la ressource cible.                                                                                                                                                                   | Ressource externe                          | Non autorisé                                                                       | Non autorisé                               |
| [`prefetch`](/fr/docs/Web/HTML/Link_types/prefetch)           | Indique que l'agent utilisateur doit récupérer et mettre en cache de manière préemptive la ressource cible, car elle est susceptible d'être requise pour une navigation ultérieure.                                                                                           | Ressource externe                          | Non autorisé                                                                       | Non autorisé                               |
| [`preload`](/fr/docs/Web/HTML/Link_types/preload)             | Spécifie que l'agent utilisateur doit récupérer et mettre en cache de manière préemptive la ressource cible pour la navigation actuelle en fonction de la destination potentielle donnée par l'attribut [`as`](as) (et la priorité associée à la destination correspondante). | Ressource externe                          | Non autorisé                                                                       | Non autorisé                               |
| [`prerender`](/fr/docs/Web/HTML/Link_types/prerender)         | Spécifie que l'agent utilisateur doit récupérer de manière préemptive la ressource cible et la traiter de manière à fournir une réponse plus rapide à l'avenir.                                                                                                               | Ressource externe                          | Non autorisé                                                                       | Non autorisé                               |
| [`prev`](#prev)                                               | Indique que le document actuel fait partie d'une série et que le document précédent dans la série est le document référencé.                                                                                                                                                  | Lien                                       | Lien                                                                               | Lien                                       |
| [`search`](#search)                                           | Donne un lien vers une ressource qui peut être utilisée pour effectuer une recherche dans le document actuel et ses pages connexes.                                                                                                                                           | Lien                                       | Lien                                                                               | Lien                                       |
| [`stylesheet`](#stylesheet)                                   | Importe une feuille de style.                                                                                                                                                                                                                                                 | Ressource externe                          | Non autorisé                                                                       | Non autorisé                               |
| [`tag`](#tag)                                                 | Donne une balise (identifiée par l'adresse donnée) qui s'applique au document actuel.                                                                                                                                                                                         | Non autorisé                               | Lien                                                                               | Non autorisé                               |

L'attribut `rel` concerne les éléments [`<link>`](/fr/docs/Web/HTML/Element/link), [`<a>`](/fr/docs/Web/HTML/Element/a), [`<area>`](/fr/docs/Web/HTML/Element/area) et [`<form>`](/fr/docs/Web/HTML/Element/Form), mais certaines valeurs ne concernent qu'un sous-ensemble de ces éléments. Comme toutes les valeurs d'attributs de mots-clés HTML, ces valeurs sont insensibles à la casse.

L'attribut `rel` n'a pas de valeur par défaut. Si l'attribut est omis ou si aucune des valeurs de l'attribut n'est prise en charge, alors le document n'a pas de relation particulière avec la ressource de destination autre que l'existence d'un lien hypertexte entre les deux. Dans ce cas, sur [`<link>`](/fr/docs/Web/HTML/Element/link) et [`<form>`](/fr/docs/Web/HTML/Element/Form), si l'attribut `rel` est absent, n'a pas de mots-clés, ou s'il ne s'agit pas d'un ou plusieurs des mots-clés séparés par des espaces ci-dessus, alors l'élément ne crée aucun lien. [`<a>`](/fr/docs/Web/HTML/Element/a) et [`<area>`](/fr/docs/Web/HTML/Element/area) créeront quand même des liens, mais sans relation définie.

## Valeurs

S'il existe plusieurs `<link rel="icon">`, le navigateur utilise leur attribut [`media`](media), [`type`](type) et [`sizes`](sizes) pour sélectionner l'icône la plus appropriée. Si plusieurs icônes sont également appropriées, la dernière est utilisée. Si l'icône la plus appropriée s'avère ultérieurement inappropriée, par exemple parce qu'elle utilise un format non pris en charge, le navigateur passe à l'icône suivante la plus appropriée, et ainsi de suite.

**Note :** L'iOS d'Apple n'utilise pas ce type de lien, ni l'attribut [`sizes`](sizes), comme le font d'autres navigateurs mobiles, pour sélectionner une icône de page Web pour Web Clip ou un espace réservé au démarrage. Au lieu de cela, il utilise les attributs non standard [`apple-touch-icon`](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) et [`apple-touch-startup-image`](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) respectivement.

> **Note :** Le type de lien `shortcut` est souvent vu avant `icon`, mais ce type de lien est non conforme, ignoré et **les auteurs web ne doivent plus l'utiliser**.

- `alternate`

  - : Indique une représentation alternative du document actuel. Valable pour [`<link>`](/fr/docs/Web/HTML/Element/link), [`<a>`](/fr/docs/Web/HTML/Element/a), et [`<area>`](/fr/docs/Web/HTML/Element/area), la signification dépend des valeurs des autres attributs.

    - Avec le mot clé [`stylesheet`](#stylesheet) sur un `<link>`, il crée une feuille de style alternative.

      ```html
      <!-- une feuille de style persistante -->
      <link rel="stylesheet" href="default.css">
      <!-- feuilles de style alternativement -->
      <link rel="alternate stylesheet" href="highcontrast.css" title="Contraste élevé">
      ```

    - Avec un attribut [`hreflang`](hreflang) qui diffère de la langue du document, cela indique une traduction.
    - Avec l'attribut [`type`](type), il indique que le document référencé est le même contenu dans un format différent. Par exemple, avec `type="application/rss+xml"`, il crée un lien hypertexte référençant un flux de syndication.

      ```html
      <link rel="alternate" type="application/atom+xml" href="posts.xml" title="Blog">
      ```

    - Les attributs [`hreflang`](hreflang) et [`type`](type) spécifient des liens vers des versions du document dans un format et une langue alternatifs, destinés à d'autres médias :

      ```html
      <link rel="alternate" href="/fr/html/print" hreflang="fr" type="text/html" media="print" title="HTML français (pour l'impression)">
      <link rel="alternate" href="/fr/pdf" hreflang="fr" type=application/pdf title="PDF Français">
      ```

    > **Note :** L'attribut obsolète `rev="made"` est traité comme `rel="alternate"`.

- `author`
  - : Indique l'auteur du document ou de l'article en cours. Pertinent pour les éléments [`<link>`](/fr/docs/Web/HTML/Element/link), [`<a>`](/fr/docs/Web/HTML/Element/a) et [`<area>`](/fr/docs/Web/HTML/Element/area), le mot-clé `author` crée un lien hypertexte. Avec [`<a>`](/fr/docs/Web/HTML/Element/a) et [`<area>`](/fr/docs/Web/HTML/Element/area), il indique que le document lié (ou `mailto:`) fournit des informations sur l'auteur de l'ancêtre le plus proche d'un élément [`<article>`](/fr/docs/Web/HTML/Element/article) s'il en existe un, sinon le document entier. Pour [`<link>`](/fr/docs/Web/HTML/Element/link), il représente l'auteur du document entier.
- `bookmark`
  - : Pertinent comme valeur de l'attribut `rel` pour les éléments [`<a>`](/fr/docs/Web/HTML/Element/a) et [`<area>`](/fr/docs/Web/HTML/Element/area), le signet fournit un permalien pour la section ancêtre, qui est l'ancêtre le plus proche d'un élément [`<article>`](/fr/docs/Web/HTML/Element/article) ou [`<section>`](/fr/docs/Web/HTML/Element/section), s'il y en a au moins un, sinon, le parent le plus proche de l'en-tête ou l'ancêtre descendant, jusqu'au suivant.
- `canonical`
  - : Valable pour [`<link>`](/fr/docs/Web/HTML/Element/link), elle définit l'URL préférée du document actuel, ce qui est utile pour les moteurs de recherche.
- `dns-prefetch`
  - : Pertinent pour l'élément [`<link>`](/fr/docs/Web/HTML/Element/link) à la fois dans les éléments [`<body>`](/fr/docs/Web/HTML/Element/body) et [`<head>`](/fr/docs/Web/HTML/Element/head), il indique au navigateur d'effectuer de manière préemptive la résolution DNS pour l'origine de la ressource cible. Utile pour les ressources dont l'utilisateur aura probablement besoin, elle permet de réduire la latence et donc d'améliorer les performances lorsque l'utilisateur accède effectivement aux ressources car le navigateur a effectué de manière préemptive la résolution DNS pour l'origine de la ressource spécifiée. Voir [dns-prefetch](/fr/docs/Web/Performance/dns-prefetch) décrit dans les conseils.
- `external`
  - : S'appliquant à [`<form>`](/fr/docs/Web/HTML/Element/Form), [`<a>`](/fr/docs/Web/HTML/Element/a) et [`<area>`](/fr/docs/Web/HTML/Element/area), elle indique que le document référencé ne fait pas partie du site actuel. Il peut être utilisé avec des sélecteurs d'attributs pour donner un style aux liens externes d'une manière qui indique à l'utilisateur qu'il va quitter le site actuel.
- `help`
  - : Concerne les éléments [`<form>`](/fr/docs/Web/HTML/Element/Form), [`<link>`](/fr/docs/Web/HTML/Element/link), [`<a>`](/fr/docs/Web/HTML/Element/a) et [`<area>`](/fr/docs/Web/HTML/Element/area), le mot clé `help` indique que le contenu lié fournit une aide contextuelle, fournissant des informations pour le parent de l'élément définissant l'hyperlien, et ses enfants. Lorsqu'il est utilisé dans `<link>`, l'aide concerne l'ensemble du document. Lorsqu'elle est incluse avec [`<a>`](/fr/docs/Web/HTML/Element/a) et [`<area>`](/fr/docs/Web/HTML/Element/area) et qu'elle est prise en charge, le [`cursor`](/fr/docs/Web/CSS/cursor) par défaut sera `help` au lieu de `pointer`.
- `icon`

  - : Valable avec [`<link>`](/fr/docs/Web/HTML/Element/link), la ressource liée représente l'icône, ressource de représentation de la page dans l'interface utilisateur, pour le document courant.

    L'utilisation la plus courante de la valeur `icon` est le favicon :

    ```html
    <link rel="icon" href="favicon.ico">
    ```

    S'il existe plusieurs `<link rel="icon">`, le navigateur utilise leurs attributs [`media`](media), [`type`](type), et [`sizes`](sizes) pour sélectionner l'icône la plus appropriée. Si plusieurs icônes sont également appropriées, la dernière est utilisée. Si l'icône la plus appropriée s'avère ultérieurement inappropriée, par exemple parce qu'elle utilise un format non pris en charge, le navigateur passe à l'icône suivante la plus appropriée, et ainsi de suite.

    > **Note :** Avant Firefox 83, l'attribut [crossorigin](/fr/docs/Web/HTML/Attributes/crossorigin) n'était pas pris en charge pour `rel="icon"` ; il existe également [un problème pour Chrome](https://bugs.chromium.org/p/chromium/issues/detail?id=1121645).
    >
    > L'iOS d'Apple n'utilise pas ce type de lien, ni l'attribut [`sizes`](sizes), comme le font d'autres navigateurs mobiles, pour sélectionner une icône de page Web pour Web Clip ou un espace réservé au démarrage. Au lieu de cela, il utilise respectivement le type non standard [`apple-touch-icon`](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) et [`apple-touch-startup-image`](https://developer.apple.com/library/content/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6).
    >
    > Le type de lien `shortcut` est souvent vu avant `icon`, mais ce type de lien est non conforme, ignoré et **les auteurs web ne doivent plus l'utiliser**.

- `license`

  - : Valable sur les éléments [`<a>`](/fr/docs/Web/HTML/Element/a), [`<area>`](/fr/docs/Web/HTML/Element/area), [`<form>`](/fr/docs/Web/HTML/Element/Form) et [`<link>`](/fr/docs/Web/HTML/Element/link), la valeur `license` indique que l'hyperlien mène à un document décrivant les informations relatives à la licence ; que le contenu principal du document actuel est couvert par la licence de droit d'auteur décrite par le document référencé. Si elle ne se trouve pas à l'intérieur de l'élément [`<head>`](/fr/docs/Web/HTML/Element/head), la norme ne fait pas de distinction entre un hyperlien s'appliquant à une partie spécifique du document ou au document dans son ensemble. Seules les données de la page peuvent l'indiquer.

    ```html
    <link rel="license" href="#license">
    ```

    > **Note :** Bien que reconnu, le synonyme `copyright` est incorrect et doit être évité.

- `manifest`
  - : [Manifeste de l'application Web](/fr/docs/Web/Manifest). Nécessite l'utilisation du protocole CORS pour le « fetching cross-origin ».
- `modulepreload`
  - : Utile pour améliorer les performances, et pertinent pour l'élément [`<link>`](/fr/docs/Web/HTML/Element/link) n'importe où dans le document, la définition de `rel="modulepreload"` indique au navigateur de récupérer de manière préemptive le script (et les dépendances) et de le stocker dans la carte des modules du document pour une évaluation ultérieure. Les liens `modulepreload` peuvent garantir que la récupération du réseau se fait avec le module prêt (mais non évalué) dans la carte des modules avant qu'il ne soit nécessairement nécessaire. Voir aussi [Types de liens : `modulepreload`](/fr/docs/Web/HTML/Link_types/modulepreload).
- `next`
  - : Pertinent pour les éléments [`<form>`](/fr/docs/Web/HTML/Element/Form), [`<link>`](/fr/docs/Web/HTML/Element/link), [`<a>`](/fr/docs/Web/HTML/Element/a) et [`<area>`](/fr/docs/Web/HTML/Element/area), les valeurs `next` indiquent que le document actuel fait partie d'une série, et que le document suivant dans la série est le document référencé. Lorsqu'elles sont incluses dans un `<link>`, les navigateurs peuvent supposer que le document sera récupéré ensuite, et le traiter comme une indication de ressource.
- `nofollow`
  - : Pertinent pour les éléments [`<form>`](/fr/docs/Web/HTML/Element/Form), [`<a>`](/fr/docs/Web/HTML/Element/a) et [`<area>`](/fr/docs/Web/HTML/Element/area), le mot clé `nofollow` indique aux robots des moteurs de recherche d'ignorer la relation de lien. La relation nofollow peut indiquer que le propriétaire du document actuel ne cautionne pas le document référencé. Elle est souvent incluse par les optimiseurs de moteurs de recherche qui prétendent que leurs fermes de liens ne sont pas des pages de spam.
- `noopener`

  - : Cela concerne [`<form>`](/fr/docs/Web/HTML/Element/Form), [`<a>`](/fr/docs/Web/HTML/Element/a) et [`<area>`](/fr/docs/Web/HTML/Element/area), elle crée un contexte de navigation de haut niveau qui n'est pas un contexte de navigation auxiliaire si l'hyperlien créait l'un ou l'autre pour commencer (c.-à-d. a une valeur appropriée de l'attribut `target`). En d'autres termes, il fait en sorte que le lien se comporte comme si [`window.opener`](/fr/docs/Web/API/Window/opener) était nul et que `target="_parent"` était défini.

    C'est le contraire de [opener](#opener).

- `noreferrer`
  - : Pertinent pour [`<form>`](/fr/docs/Web/HTML/Element/Form), [`<a>`](/fr/docs/Web/HTML/Element/a) et [`<area>`](/fr/docs/Web/HTML/Element/area), l'inclusion de cette valeur rend le référent inconnu (aucun en-tête `Referer` ne sera inclus), et crée un contexte de navigation de haut niveau comme si `noopener` était également défini.
- `opener`
  - : Crée un contexte de navigation auxiliaire si l'hyperlien créerait autrement un contexte de navigation de haut niveau qui n'est pas un contexte de navigation auxiliaire (c.-à-d. a « `_blank` » comme valeur d'attribut `target`). Effectivement, c'est le contraire de [noopener](#noopener).
- `pingback`
  - : Donne l'adresse du serveur de retour d'appel qui gère les retours d'appel pour le document actuel.
- `preconnect`
  - : Spécifie que l'agent utilisateur doit se connecter de manière préemptive à l'origine de la ressource cible.
- `prefetch`
  - : Indique que l'agent utilisateur doit récupérer et mettre en cache de manière préemptive la ressource cible, car elle est susceptible d'être requise pour une navigation ultérieure.
- `preload`
  - : Spécifie que l'agent utilisateur doit récupérer et mettre en cache de manière préemptive la ressource cible pour la navigation actuelle en fonction de la destination potentielle donnée par l'attribut [`as`](as) (et la priorité associée à la destination correspondante).
- `prerender`
  - : Spécifie que l'agent utilisateur doit récupérer de manière préemptive la ressource cible et la traiter de manière à fournir une réponse plus rapide à l'avenir.
- `prev`

  - : Similaire au mot-clé [next](#next), pertinent pour les éléments [`<form>`](/fr/docs/Web/HTML/Element/Form), [`<link>`](/fr/docs/Web/HTML/Element/link), [`<a>`](/fr/docs/Web/HTML/Element/a) et [`<area>`](/fr/docs/Web/HTML/Element/area), les valeurs `prev` indiquent que le document actuel fait partie d'une série, et que le lien renvoie à un document précédent de la série est le document référencé.

    > **Note :** Le synonyme `previous` est incorrect et ne doit pas être utilisé.

- `search`

  - : Concerne les éléments [`<form>`](/fr/docs/Web/HTML/Element/Form), [`<link>`](/fr/docs/Web/HTML/Element/link), [`<a>`](/fr/docs/Web/HTML/Element/a) et [`< area>`](/fr/docs/Web/HTML/Element/area), les mots-clés `search` indiquent que l'hyperlien fait référence à un document dont l'interface est spécialement conçue pour effectuer des recherches dans le document actuel, le site et les ressources connexes, en fournissant un lien vers une ressource qui peut être utilisée pour effectuer une recherche.

    Si l'attribut [`type`](type) est défini à `application/opensearchdescription+xml`, la ressource est un [prolongateur OpenSearch](/fr/docs/Web/OpenSearch) qui peut être facilement ajouté à l'interface de certains navigateurs comme Firefox ou Internet Explorer.

- `stylesheet`

  - : Valable pour l'élément [`<link>`](/fr/docs/Web/HTML/Element/link), il importe une ressource externe à utiliser comme feuille de style. L'attribut [`type`](type) n'est pas nécessaire, car il s'agit d'une feuille de style `text/css`, puisque c'est la valeur par défaut. S'il ne s'agit pas d'une feuille de style de type `text/css`, il est préférable de déclarer le type.

    Bien que cet attribut définisse le lien comme étant une feuille de style, l'interaction avec d'autres attributs et d'autres termes clés dans la valeur rel ont un impact sur le téléchargement et/ou l'utilisation de la feuille de style.

    Lorsqu'il est utilisé avec le mot-clé [alternate](#alternate), il définit une feuille de style alternative. Dans ce cas, incluez un [`title`](type) non vide.

    La feuille de style externe ne sera pas utilisée ni même téléchargée si le média ne correspond pas à la valeur de l'attribut [`media`](media).

    Nécessite l'utilisation du protocole CORS pour la récupération inter-origine.

- `tag`
  - : Valable pour les éléments [`<a>`](/fr/docs/Web/HTML/Element/a) et [`<area>`](/fr/docs/Web/HTML/Element/area), il donne une balise (identifiée par l'adresse donnée) qui s'applique au document actuel. La valeur de la balise indique que le lien renvoie à un document, décrivant une balise s'appliquant au document sur lequel il se trouve. Ce type de lien n'est pas destiné aux balises, dans un nuage de balises, car elles s'appliquent à un groupe de pages, alors que la valeur `tag` de l'attribut `rel` concerne un seul document.

### Valeurs non standard

- apple-touch-icon-precomposed

  - : Exemple d'utilisation

    ```html
    <!-- iPad de troisième génération avec écran Retina haute résolution : -->
      <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/static/img/favicon144.e7e21ca263ca.png">
      <!-- iPhone avec écran Retina haute résolution : -->
      <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/static/img/favicon114.d526f38b09c5.png">
      <!-- première et deuxième génération d'iPad: -->
      <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/static/img/favicon72.cc65d1d762a0.png">
      <!-- Appareils iPhone non Retina, iPod Touch et Android 2.1+ : -->
      <link rel="apple-touch-icon-precomposed" href="/static/img/favicon57.de33179910ae.png">
      <!-- favicône de base -->
      <link rel="shortcut icon" href="/static/img/favicon32.7f3da72dcea1.png">
    ```

## Spécifications

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Statut</th>
      <th scope="col">Commentaire</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{SpecName('HTML WHATWG', 'links.html#linkTypes', 'l\'attribut rel')}}
      </td>
      <td>{{Spec2('HTML WHATWG')}}</td>
      <td>
        Ajout de <code>opener</code>. Mise en place de <code>noopener</code> par
        défaut pour <code>target="_blank"</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName('HTML5 W3C', 'links.html#linkTypes', 'l\'attribut rel')}}
      </td>
      <td>{{Spec2('HTML5 W3C')}}</td>
      <td>
        Ajout de <code>tag</code>, <code>search</code>, <code>prefetch</code>,
        <code>noreferrer</code>, <code>nofollow</code>, <code>icon</code> et
        <code>author</code>.<br />Renommage de <code>copyright</code> en
        <code>license</code>.<br />Suppression de <code>start</code>,
        <code>chapitre</code>, <code>section</code>, <code>subsection</code> et
        <code>appendice</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("Preload", "#x2.link-type-preload", "preload")}}
      </td>
      <td>{{Spec2("Preload")}}</td>
      <td>Ajout de <code>preload</code>.</td>
    </tr>
    <tr>
      <td>
        {{SpecName("Resource Hints", "#dfn-preconnect", "preconnect")}}
      </td>
      <td>{{Spec2("Resource Hints")}}</td>
      <td>
        Ajout des valeurs <code>dns-prefetch</code>, <code>preconnect</code> et
        <code>prerender</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("HTML4.01", "types.html#type-links", "link types")}}
      </td>
      <td>{{Spec2("HTML4.01")}}</td>
      <td>
        Ajout de <code>alternate</code>, <code>stylesheet</code>,
        <code>start</code>, <code>chapter</code>, <code>section</code>,
        <code>subsection</code>, <code>appendix</code> et
        <code>bookmark</code>.<br />Renommage de <code>previous</code> par
        <code>prev</code>.<br />Suppression de <code>top</code> et
        <code>search</code>.
      </td>
    </tr>
    <tr>
      <td>{{SpecName("HTML3.2", "#link", "&lt;link&gt;")}}</td>
      <td><p>Obsolète</p></td>
      <td>
        Ajout de <code>top</code>, <code>contents</code>, <code>index</code>,
        <code>glossary</code>, <code>copyright</code>, <code>next</code>,
        <code>previous</code>, <code>help</code> et <code>search</code>.
      </td>
    </tr>
    <tr>
      <td>{{RFC(1866, "HTML 2.0")}}</td>
      <td>Obsolète</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("html.elements.link.rel")}}

## Voir aussi

- La propriété [`HTMLLinkElement.relList`](/fr/docs/Web/API/HTMLLinkElement/relList)
- La propriété [`HTMLAnchorElement.relList`](/fr/docs/Web/API/HTMLAnchorElement/relList)
- La propriété [`HTMLAreaElement.relList`](/fr/docs/Web/API/HTMLAreaElement/relList)
