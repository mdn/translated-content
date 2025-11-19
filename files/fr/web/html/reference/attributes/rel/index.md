---
title: "Attribut HTML : rel"
short-title: rel
slug: Web/HTML/Reference/Attributes/rel
original_slug: Web/HTML/Attributes/rel
l10n:
  sourceCommit: 4a1d696e78d9aa0a3ca571cbc0aab9ba90258235
---

L'attribut **`rel`** définit la relation entre une ressource liée et le document courant. Il est valide sur {{HTMLElement('link')}}, {{HTMLElement('a')}}, {{HTMLElement('area')}} et {{HTMLElement('form')}}. Les valeurs acceptées dépendent de l'élément sur lequel l'attribut est utilisé.

Le type de relation est donné par la valeur de l'attribut `rel`, qui, si elle est présente, doit avoir une valeur qui est un ensemble non ordonné de mots-clés uniques séparés par des espaces. Contrairement à un nom de `class`, qui n'exprime pas de sémantique, l'attribut `rel` doit exprimer des jetons qui sont sémantiquement valides à la fois pour les machines et les humain·e·s. Les registres actuels pour les valeurs possibles de l'attribut `rel` sont [registre IANA des relations de liens <sup>(angl.)</sup>](https://www.iana.org/assignments/link-relations/link-relations.xhtml), [Standard vivant HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/links.html#linkTypes), et la page librement modifiable [existing-rel-values <sup>(angl.)</sup>](https://microformats.org/wiki/existing-rel-values) du wiki microformats, comme [suggéré <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/links.html#other-link-types) par le Standard vivant. Si une valeur d'attribut `rel` qui n'est présente dans aucune des trois sources ci-dessus est utilisée, certains validateurs HTML (comme [Service de validation du balisage W3C <sup>(angl.)</sup>](https://validator.w3.org/)) généreront un avertissement.

Le tableau suivant présente quelques-uns des mots-clés existants les plus importants. Chaque mot-clé dans une valeur séparée par des espaces doit être unique dans cette valeur.

| Valeur pour `rel`                                                                             | Description                                                                                                                                                                                                                                                                                                            | {{HTMLElement('link')}} | {{HTMLElement('a')}} and {{HTMLElement('area')}} | {{HTMLElement('form')}} |
| --------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------- | ------------------------------------------------ | ----------------------- |
| [`alternate`](#alternate)                                                                     | Représentations alternatives du document actuel.                                                                                                                                                                                                                                                                       | Lien                    | Lien                                             | Non autorisé            |
| [`author`](#author)                                                                           | Auteur du document ou de l'article en cours.                                                                                                                                                                                                                                                                           | Lien                    | Lien                                             | Non autorisé            |
| [`bookmark`](#bookmark)                                                                       | Lien permanent pour la section de l'ancêtre le plus proche.                                                                                                                                                                                                                                                            | Non autorisé            | Lien                                             | Non autorisé            |
| [`canonical`](#canonical)                                                                     | URL préférée pour le document actuel.                                                                                                                                                                                                                                                                                  | Lien                    | Non autorisé                                     | Non autorisé            |
| [`compression-dictionary`](/fr/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary) | Lien vers un {{Glossary("Compression dictionary transport", "dictionnaire de compression")}} qui peut être utilisé pour compresser les téléchargements futurs des ressources de ce site.                                                                                                                               | Lien                    | Non autorisé                                     | Non autorisé            |
| [`dns-prefetch`](/fr/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch)                     | Indique au navigateur d'effectuer de manière préemptive la résolution DNS pour l'origine de la ressource cible.                                                                                                                                                                                                        | Ressource externe       | Non autorisé                                     | Non autorisé            |
| [`external`](#external)                                                                       | Le document référencé ne fait pas partie du même site que le document actuel.                                                                                                                                                                                                                                          | Non autorisé            | Annotation                                       | Annotation              |
| [`expect`](#expect)                                                                           | Lorsqu'il est utilisé avec [`blocking="render"`](/fr/docs/Web/HTML/Reference/Elements/link#blocking), permet à la page d'être {{Glossary("Render_blocking", "bloquante pour le rendu")}} jusqu'à ce que les parties essentielles du document soient analysées pour que la page s'affiche de façon cohérente.           | Lien                    | Non autorisé                                     | Non autorisé            |
| [`help`](#help)                                                                               | Lien vers l'aide contextuelle.                                                                                                                                                                                                                                                                                         | Lien                    | Lien                                             | Lien                    |
| [`icon`](#icon)                                                                               | Une icône représentant le document actuel.                                                                                                                                                                                                                                                                             | Ressource externe       | Non autorisé                                     | Non autorisé            |
| [`license`](#license)                                                                         | Indique que le contenu principal du document actuel est couvert par la licence de copyright décrite par le document référencé.                                                                                                                                                                                         | Lien                    | Lien                                             | Lien                    |
| [`manifest`](/fr/docs/Web/HTML/Reference/Attributes/rel/manifest)                             | Manifeste de l'application web.                                                                                                                                                                                                                                                                                        | Lien                    | Non autorisé                                     | Non autorisé            |
| [`me`](/fr/docs/Web/HTML/Reference/Attributes/rel/me)                                         | Indique que le document actuel représente la personne qui possède le contenu lié.                                                                                                                                                                                                                                      | Lien                    | Lien                                             | Non autorisé            |
| [`modulepreload`](/fr/docs/Web/HTML/Reference/Attributes/rel/modulepreload)                   | Indique au navigateur de récupérer le script de manière préemptive et de le stocker dans la carte des modules du document pour une évaluation ultérieure. En option, les dépendances du module peuvent également être récupérées.                                                                                      | Ressource externe       | Non autorisé                                     | Non autorisé            |
| [`next`](#next)                                                                               | Indique que le document actuel fait partie d'une série et que le document suivant dans la série est le document référencé.                                                                                                                                                                                             | Lien                    | Lien                                             | Lien                    |
| [`nofollow`](#nofollow)                                                                       | Indique que l'auteur ou l'éditeur original du document actuel n'approuve pas le document référencé.                                                                                                                                                                                                                    | Non autorisé            | Annotation                                       | Annotation              |
| [`noopener`](/fr/docs/Web/HTML/Reference/Attributes/rel/noopener)                             | Crée un contexte de navigation de haut niveau qui n'est pas un contexte de navigation auxiliaire si l'hyperlien créerait l'un ou l'autre, pour commencer (c'est-à-dire qu'il a une valeur d'attribut `target` appropriée).                                                                                             | Non autorisé            | Annotation                                       | Annotation              |
| [`noreferrer`](/fr/docs/Web/HTML/Reference/Attributes/rel/noreferrer)                         | Aucun en-tête `Referer` ne sera inclus. En outre, a le même effet que `noopener`.                                                                                                                                                                                                                                      | Non autorisé            | Annotation                                       | Annotation              |
| [`opener`](#opener)                                                                           | Crée un contexte de navigation auxiliaire si l'hyperlien créerait autrement un contexte de navigation de premier niveau qui n'est pas un contexte de navigation auxiliaire (c'est-à-dire qui a «&nbsp;`_blank`&nbsp;» comme valeur d'attribut `target`).                                                               | Non autorisé            | Annotation                                       | Annotation              |
| [`pingback`](#pingback)                                                                       | Donne l'adresse du serveur de retour d'appel qui gère les retours d'appel pour le document actuel.                                                                                                                                                                                                                     | Ressource externe       | Non autorisé                                     | Non autorisé            |
| [`preconnect`](/fr/docs/Web/HTML/Reference/Attributes/rel/preconnect)                         | Définit que l'agent utilisateur doit se connecter de manière préemptive à l'origine de la ressource cible.                                                                                                                                                                                                             | Ressource externe       | Non autorisé                                     | Non autorisé            |
| [`prefetch`](/fr/docs/Web/HTML/Reference/Attributes/rel/prefetch)                             | Définit que l'agent utilisateur doit récupérer et mettre en cache de manière préemptive la ressource cible, car elle est susceptible d'être requise pour une navigation ultérieure.                                                                                                                                    | Ressource externe       | Non autorisé                                     | Non autorisé            |
| [`preload`](/fr/docs/Web/HTML/Reference/Attributes/rel/preload)                               | Définit que l'agent utilisateur doit récupérer et mettre en cache de manière préemptive la ressource cible pour la navigation actuelle en fonction de la destination potentielle donnée par l'attribut [`as`](/fr/docs/Web/HTML/Reference/Elements/link#as) (et la priorité associée à la destination correspondante). | Ressource externe       | Non autorisé                                     | Non autorisé            |
| [`prerender`](/fr/docs/Web/HTML/Reference/Attributes/rel/prerender) {{Deprecated_Inline}}     | Définit que l'agent utilisateur doit récupérer de manière préemptive la ressource cible et la traiter de manière à fournir une réponse plus rapide à l'avenir.                                                                                                                                                         | Ressource externe       | Non autorisé                                     | Non autorisé            |
| [`prev`](#prev)                                                                               | Indique que le document actuel fait partie d'une série et que le document précédent dans la série est le document référencé.                                                                                                                                                                                           | Lien                    | Lien                                             | Lien                    |
| [`privacy-policy`](#privacy-policy)                                                           | Donne un lien vers une information sur les pratiques de collecte et d'utilisation des données qui s'appliquent au document actuel.                                                                                                                                                                                     | Lien                    | Lien                                             | Non autorisé            |
| [`search`](#search)                                                                           | Donne un lien vers une ressource qui peut être utilisée pour effectuer une recherche dans le document actuel et ses pages connexes.                                                                                                                                                                                    | Lien                    | Lien                                             | Lien                    |
| [`stylesheet`](#stylesheet)                                                                   | Importe une feuille de style.                                                                                                                                                                                                                                                                                          | Ressource externe       | Non autorisé                                     | Non autorisé            |
| [`tag`](#tag)                                                                                 | Donne une balise (identifiée par l'adresse donnée) qui s'applique au document actuel.                                                                                                                                                                                                                                  | Non autorisé            | Lien                                             | Non autorisé            |
| [`terms-of-service`](#terms-of-service)                                                       | Lien vers l'accord, ou les conditions d'utilisation, entre le fournisseur du document et les utilisateur·ice·s qui souhaitent utiliser le document.                                                                                                                                                                    | Lien                    | Lien                                             | Non autorisé            |

L'attribut `rel` est pertinent pour les éléments HTML {{HTMLElement('link')}}, {{HTMLElement('a')}}, {{HTMLElement('area')}} et {{HTMLElement('form')}}, mais certaines valeurs ne concernent qu'un sous-ensemble de ces éléments. Comme toutes les valeurs d'attribut de mot-clé HTML, ces valeurs ne sont pas sensibles à la casse.

L'attribut `rel` n'a pas de valeur par défaut. Si l'attribut est omis ou si aucune des valeurs de l'attribut n'est prise en charge, alors le document n'a pas de relation particulière avec la ressource de destination, à part le fait qu'il existe un lien hypertexte entre les deux. Dans ce cas, sur {{HTMLElement('link')}} et {{HTMLElement('form')}}, si l'attribut `rel` est absent, ne contient aucun mot-clé, ou si aucun des mots-clés séparés par des espaces ci-dessus n'est présent, alors l'élément ne crée aucun lien. {{HTMLElement('a')}} et {{HTMLElement('area')}} créeront tout de même des liens, mais sans relation définie.

## Valeurs

- `alternate`
  - : Indique une représentation alternative du document actuel. Valide pour {{HTMLElement('link')}}, {{HTMLElement('a')}} et {{HTMLElement('area')}}, la signification dépend des autres attributs présents.
    - Avec le mot-clé [`stylesheet`](#stylesheet) sur un `<link>`, cela crée une [feuille de style alternative](/fr/docs/Web/HTML/Reference/Attributes/rel/alternate_stylesheet).

      ```html
      <!-- feuille de style persistante -->
      <link rel="stylesheet" href="default.css" />
      <!-- feuilles de style alternatives -->
      <link
        rel="alternate stylesheet"
        href="highcontrast.css"
        title="Contraste élevé" />
      ```

    - Avec un attribut [`hreflang`](/fr/docs/Web/HTML/Reference/Elements/link#hreflang) différent de la langue du document, cela indique une traduction.
    - Avec l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/link#type) ayant la valeur `"application/rss+xml"` ou `"application/atom+xml"`, cela crée un lien vers un flux de syndication.

      ```html
      <link
        rel="alternate"
        type="application/atom+xml"
        href="posts.xml"
        title="Blog" />
      ```

    - Sinon, cela crée un lien vers une représentation alternative du document actuel, dont la nature est donnée par les attributs [`hreflang`](/fr/docs/Web/HTML/Reference/Elements/link#hreflang) et [`type`](/fr/docs/Web/HTML/Reference/Elements/link#type).
      - Si `hreflang` est présent avec `alternate` et que la valeur de `hreflang` est différente de la langue du document, cela indique que le document référencé est une traduction.
      - Si `type` est présent avec `alternate`, cela indique que le document référencé est dans un format alternatif (comme un PDF).
      - Les attributs `hreflang` et `type` peuvent être présents ensemble avec `alternate`.

      ```html
      <link
        rel="alternate"
        href="/fr/html/print"
        hreflang="fr"
        type="text/html"
        media="print"
        title="HTML français (pour impression)" />
      <link
        rel="alternate"
        href="/fr/pdf"
        hreflang="fr"
        type="application/pdf"
        title="PDF français" />
      ```

- `author`
  - : Indique que le document référencé fournit des informations supplémentaires sur l'auteur·ice du document ou de l'article en cours. Pertinent pour {{HTMLElement('link')}}, {{HTMLElement('a')}} et {{HTMLElement('area')}}.

    Avec {{HTMLElement('a')}} et {{HTMLElement('area')}}, cela indique que le document lié (ou `mailto:`) fournit des informations sur l'auteur·ice de l'ancêtre {{HTMLElement('article')}} le plus proche s'il existe, sinon sur l'ensemble du document.

    Avec {{HTMLElement('link')}}, cela représente l'auteur·ice de l'ensemble du document.

    > [!NOTE]
    > Pour des raisons historiques, la valeur d'attribut obsolète `rev="made"` est traitée comme `rel="author"`.

- `bookmark`
  - : Pertinent comme valeur de l'attribut `rel` pour les éléments {{HTMLElement('a')}} et {{HTMLElement('area')}}. Donne un lien permanent pour l'élément parent {{HTMLElement('article')}} le plus proche, s'il existe. S'il n'y a pas d'élément `<article>` parent, donne un lien permanent pour la section à laquelle l'élément de liaison est le plus associé.
- `canonical`
  - : Valide pour {{HTMLElement('link')}}, définit l'URL préférée pour le document actuel, ce qui aide les moteurs de recherche à réduire le contenu dupliqué.
- `compression-dictionary` {{Experimental_Inline}}
  - : Valide pour {{HTMLElement('link')}}, définit un {{Glossary("Compression dictionary transport", "dictionnaire de compression")}} qui peut être utilisé pour compresser les téléchargements futurs des ressources de ce site afin que la taille des téléchargements soit plus petite qu'avec une compression standard.
- `dns-prefetch`
  - : Pertinent pour l'élément {{HTMLElement('link')}} aussi bien dans le {{HTMLElement('body')}} que dans le {{HTMLElement('head')}}, indique au navigateur d'effectuer de manière préemptive la résolution DNS pour l'origine de la ressource cible. Utile pour les ressources dont l'utilisateur·ice aura probablement besoin, cela permet de réduire la latence et d'améliorer les performances lorsque l'utilisateur·ice accède effectivement à la ressource, car le navigateur aura déjà effectué la résolution DNS pour l'origine de la ressource spécifiée. Voir [dns-prefetch](/fr/docs/Web/Performance/Guides/dns-prefetch) décrit dans [resource hints <sup>(angl.)</sup>](https://w3c.github.io/resource-hints/).
- `external`
  - : Pertinent pour {{HTMLElement('form')}}, {{HTMLElement('a')}} et {{HTMLElement('area')}}, indique que le document référencé ne fait pas partie du site actuel. Cela peut être utilisé avec des sélecteurs d'attributs pour mettre en forme les liens externes afin d'indiquer à l'utilisateur·ice qu'il·elle va quitter le site actuel.
- `expect` {{Experimental_Inline}}
  - : Permet à la page d'être [bloquante pour le rendu](/fr/docs/Glossary/Render_blocking) jusqu'à ce que les parties essentielles du document soient analysées pour qu'elle s'affiche de façon cohérente. À noter que le blocage du rendu n'a lieu que si l'attribut [`blocking="render"`](/fr/docs/Web/HTML/Reference/Elements/link#blocking) est également utilisé.

    > [!NOTE]
    > Voir [Stabiliser l'état de la page pour rendre les transitions inter-documents cohérentes](/fr/docs/Web/API/View_Transition_API/Using#stabiliser_létat_de_la_page_pour_rendre_les_transitions_inter-documents_cohérentes) pour plus d'informations sur son utilisation.

- `help`
  - : Pertinent pour {{HTMLElement('form')}}, {{HTMLElement('link')}}, {{HTMLElement('a')}} et {{HTMLElement('area')}}, le mot-clé `help` indique que le contenu lié fournit une aide contextuelle, donnant des informations pour le parent de l'élément définissant l'hyperlien et ses enfants. Lorsqu'il est utilisé dans un `<link>`, l'aide concerne l'ensemble du document. Lorsqu'il est inclus avec {{HTMLElement('a')}} et {{HTMLElement('area')}} et pris en charge, le curseur ({{CSSxRef('cursor')}}) par défaut sera `help` au lieu de `pointer`.
- `icon`
  - : Valide avec {{HTMLElement('link')}}, la ressource liée représente l'icône, une ressource pour représenter la page dans l'interface utilisateur, pour le document actuel.

    L'utilisation la plus courante de la valeur `icon` est le favicon&nbsp;:

    ```html
    <link rel="icon" href="favicon.ico" />
    ```

    S'il y a plusieurs `<link rel="icon">`, le navigateur utilise leurs attributs [`media`](/fr/docs/Web/HTML/Reference/Elements/link#media), [`type`](/fr/docs/Web/HTML/Reference/Elements/link#type) et [`sizes`](/fr/docs/Web/HTML/Reference/Elements/link#sizes) pour sélectionner l'icône la plus appropriée. Si plusieurs icônes sont également appropriées, la dernière est utilisée. Si l'icône la plus appropriée s'avère inappropriée, par exemple parce qu'elle utilise un format non pris en charge, le navigateur passe à la suivante la plus appropriée, et ainsi de suite.

    > [!NOTE]
    > L'attribut [`crossorigin`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin) n'est pas pris en charge pour `rel="icon"` dans les navigateurs basés sur Chromium. Voir le [problème ouvert pour Chromium <sup>(angl.)</sup>](https://crbug.com/1121645).

    > [!NOTE]
    > iOS d'Apple n'utilise pas ce type de lien, ni l'attribut [`sizes`](/fr/docs/Web/HTML/Reference/Elements/link#sizes), comme le font d'autres navigateurs mobiles, pour sélectionner une icône de page Web pour Web Clip ou un écran de démarrage. À la place, il utilise les liens non standard [`apple-touch-icon` <sup>(angl.)</sup>](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4) et [`apple-touch-startup-image` <sup>(angl.)</sup>](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW6) respectivement.

    > [!NOTE]
    > Le type de lien `shortcut` est souvent vu avant `icon`, mais ce type de lien n'est pas conforme, ignoré et **les auteur·ice·s web ne doivent plus l'utiliser**.

- `license`
  - : Valide sur les éléments HTML {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("form")}}, {{HTMLElement("link")}}, la valeur `license` indique que le lien mène à un document décrivant les informations de licence&nbsp;; le contenu principal du document actuel est couvert par la licence de copyright décrite par le document référencé. Si l'élément n'est pas dans le {{HTMLElement("head")}}, la norme ne distingue pas si le lien s'applique à une partie spécifique du document ou à l'ensemble du document. Seules les données de la page peuvent l'indiquer.

    ```html
    <link rel="license" href="#license" />
    ```

    > [!NOTE]
    > Bien que reconnu, le synonyme `copyright` est incorrect et doit être évité.

- `manifest`
  - : [Manifeste d'application web](/fr/docs/Web/Progressive_web_apps/Manifest). Nécessite l'utilisation du protocole CORS pour la récupération inter-origine.
- `modulepreload`
  - : Utile pour améliorer les performances, et pertinent pour {{HTMLElement('link')}} n'importe où dans le document, définir `rel="modulepreload"` indique au navigateur de récupérer de manière préemptive le script (et ses dépendances) et de le stocker dans la carte des modules du document pour une évaluation ultérieure. Les liens `modulepreload` permettent de s'assurer que le chargement réseau est effectué avec le module prêt (mais non évalué) dans la carte des modules avant qu'il ne soit nécessaire. Voir aussi [`modulepreload`](/fr/docs/Web/HTML/Reference/Attributes/rel/modulepreload).
- `next`
  - : Pertinent pour {{HTMLElement('form')}}, {{HTMLElement('link')}}, {{HTMLElement('a')}} et {{HTMLElement('area')}}, la valeur `next` indique que le document actuel fait partie d'une série et que le document suivant dans la série est le document référencé. Lorsqu'il est inclus dans un `<link>`, les navigateurs peuvent supposer que le document sera récupéré ensuite et le traiter comme une indication de ressource.
- `nofollow`
  - : Pertinent pour {{HTMLElement('form')}}, {{HTMLElement('a')}} et {{HTMLElement('area')}}, le mot-clé `nofollow` indique aux robots des moteurs de recherche d'ignorer la relation du lien. La relation nofollow peut indiquer que le propriétaire du document actuel ne cautionne pas le document référencé. Il est souvent inclus par les spécialistes du référencement qui prétendent que leurs fermes de liens ne sont pas des pages de spam.
- `noopener`
  - : Pertinent pour {{HTMLElement('form')}}, {{HTMLElement('a')}} et {{HTMLElement('area')}}, crée un contexte de navigation de haut niveau qui n'est pas un contexte de navigation auxiliaire si l'hyperlien créerait l'un ou l'autre au départ (c'est-à-dire qu'il a une valeur d'attribut `target` appropriée). Autrement dit, cela fait que le lien se comporte comme si [`window.opener`](/fr/docs/Web/API/Window/opener) était nul et que `target="_parent"` était défini.

    Ceci est l'opposé de [`opener`](#opener).

- `noreferrer`
  - : Pertinent pour {{HTMLElement('form')}}, {{HTMLElement('a')}} et {{HTMLElement('area')}}, inclure cette valeur rend le référent inconnu (aucun en-tête `Referer` ne sera inclus), et crée un contexte de navigation de haut niveau comme si `noopener` était également défini.
- `opener`
  - : Crée un contexte de navigation auxiliaire si l'hyperlien créerait autrement un contexte de navigation de premier niveau qui n'est pas un contexte de navigation auxiliaire (c'est-à-dire qui a `"_blank"` comme valeur d'attribut `target`). Effectivement, c'est l'opposé de [noopener](#noopener).
- `pingback`
  - : Donne l'adresse du serveur de retour d'appel (pingback) qui gère les retours d'appel pour le document actuel. Voir la [spécification Pingback <sup>(angl.)</sup>](https://www.hixie.ch/specs/pingback/pingback).
- `preconnect`
  - : Fournit une indication au navigateur suggérant d'ouvrir une connexion au site web lié à l'avance, sans divulguer d'information privée ni télécharger de contenu, afin que lorsque le lien est suivi, le contenu lié puisse être récupéré plus rapidement.
- `prefetch`
  - : Définit que l'agent utilisateur doit récupérer et mettre en cache de manière préemptive la ressource cible, car elle est susceptible d'être requise pour une navigation ultérieure.
    Voir {{Glossary("prefetch")}} pour plus d'informations.
- `preload`
  - : Définit que l'agent utilisateur doit récupérer et mettre en cache de manière préemptive la ressource cible pour la navigation actuelle en fonction de la destination potentielle donnée par l'attribut [`as`](/fr/docs/Web/HTML/Reference/Elements/link#as) (et la priorité associée à la destination correspondante). Voir la page pour la valeur [`preload`](/fr/docs/Web/HTML/Reference/Attributes/rel/preload).
- `prerender` {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Définit que l'agent utilisateur doit récupérer de manière préemptive la ressource cible et la traiter de façon à fournir une réponse plus rapide à l'avenir, par exemple en récupérant ses sous-ressources ou en effectuant un rendu. Cette fonctionnalité est remplacée par la [Speculation Rules API <sup>(angl.)</sup>](/fr/docs/Web/API/Speculation_Rules_API).
- `prev`
  - : Semblable au mot-clé [`next`](#next), pertinent pour {{HTMLElement('form')}}, {{HTMLElement('link')}}, {{HTMLElement('a')}} et {{HTMLElement('area')}}, la valeur `prev` indique que le document actuel fait partie d'une série et que le lien référence un document précédent dans la série.

    Remarque&nbsp;: Le synonyme `previous` est incorrect et ne doit pas être utilisé.

- `privacy-policy`
  - : Valide pour les éléments HTML {{HTMLElement('a')}}, {{HTMLElement('area')}} et {{HTMLElement('link')}}, la valeur `privacy-policy` indique que le document référencé est la politique de confidentialité qui décrit les pratiques de collecte et d'utilisation des données du document actuel.

- `search`
  - : Pertinent pour les éléments HTML {{HTMLElement('form')}}, {{HTMLElement('link')}}, {{HTMLElement('a')}} et {{HTMLElement('area')}}, le mot-clé `search` indique que l'hyperlien référence un document dont l'interface est spécialement conçue pour effectuer des recherches dans le document actuel, le site et les ressources associées, fournissant un lien vers une ressource qui peut être utilisée pour la recherche.

    Si l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/link#type) est défini sur `application/opensearchdescription+xml`, la ressource est un plugin [OpenSearch <sup>(angl.)</sup>](/fr/docs/Web/XML/Guides/OpenSearch) qui peut être facilement ajouté à l'interface de Firefox.

- `stylesheet`
  - : Valide pour l'élément HTML {{HTMLElement('link')}}, il importe une ressource externe à utiliser comme feuille de style. L'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/link#type) n'est pas nécessaire s'il s'agit d'une feuille de style `text/css`, car c'est la valeur par défaut. Si ce n'est pas une feuille de style de type `text/css`, il est préférable de déclarer le type.

    Bien que cet attribut définisse le lien comme étant une feuille de style, l'interaction avec d'autres attributs et autres termes clés dans la valeur de `rel` influence si la feuille de style est téléchargée et/ou utilisée.

    Lorsqu'il est utilisé avec le mot-clé [`alternate`](#alternate), il définit une feuille de style alternative. Dans ce cas, inclure un attribut [`title`](/fr/docs/Web/HTML/Reference/Elements/link#title) non vide.

    La feuille de style externe ne sera pas utilisée ni même téléchargée si le média ne correspond pas à la valeur de l'attribut [`media`](/fr/docs/Web/HTML/Reference/Elements/link#media).

    Nécessite l'utilisation du protocole CORS pour la récupération inter-origine.

- `tag`
  - : Valide pour les éléments HTML {{HTMLElement('a')}} et {{HTMLElement('area')}}, il donne une balise (identifiée par l'adresse donnée) qui s'applique au document actuel. La valeur de balise indique que le lien fait référence à un document décrivant une balise s'appliquant au document sur lequel il se trouve. Ce type de lien n'est pas destiné aux balises dans un nuage de tags, car ces balises s'appliquent à un groupe de pages, tandis que la valeur `tag` de l'attribut `rel` concerne un seul document.

- `terms-of-service`
  - : Valide pour les éléments HTML {{HTMLElement('a')}}, {{HTMLElement('area')}} et {{HTMLElement('link')}}, la valeur `terms-of-service` indique que le document référencé est les conditions d'utilisation qui décrivent les accords entre le fournisseur du document actuel et les utilisateur·ice·s qui souhaitent utiliser le document fourni.

### Non-standard values

- [`apple-touch-icon` <sup>(angl.)</sup>](https://developer.apple.com/library/archive/documentation/AppleApplications/Reference/SafariWebContent/ConfiguringWebApplications/ConfiguringWebApplications.html#//apple_ref/doc/uid/TP40002051-CH3-SW4)
  - : Spécifie l'icône pour une application web sur un appareil iOS.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété JavaScript {{DOMxRef("HTMLLinkElement.relList")}}
- La propriété JavaScript {{DOMxRef("HTMLAnchorElement.relList")}}
- La propriété JavaScript {{DOMxRef("HTMLAreaElement.relList")}}
