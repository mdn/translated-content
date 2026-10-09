---
title: En-tête X-Robots-Tag
short-title: X-Robots-Tag
slug: Web/HTTP/Reference/Headers/X-Robots-Tag
l10n:
  sourceCommit: 44a853a7fce4ef042b6eeddc96f0a587f25704d3
---

{{Glossary("response Header", "L'en-tête de réponse")}} HTTP **`X-Robots-Tag`** définit comment les {{Glossary("Crawler", "robots d'indexation")}} doivent indexer les URL.
Bien qu'il ne fasse partie d'aucune spécification, il s'agit d'une méthode standard de facto pour communiquer avec les moteurs de recherche, les robots d'indexation et les agents utilisateurs similaires.
Les robots d'indexation liés à la recherche utilisent les règles de l'en-tête `X-Robots-Tag` pour ajuster la manière de présenter les pages web ou autres ressources dans les résultats de recherche.

Les règles d'indexation sont définies dans un en-tête `X-Robots-Tag` ou un élément HTML [`<meta name="robots">`](/fr/docs/Web/HTML/Reference/Elements/meta/name/robots) (souvent appelé «&nbsp;balise robots&nbsp;») et sont découvertes lorsqu'une URL est explorée.
La spécification des règles d'indexation dans un en-tête HTTP est utile pour les documents non HTML tels que les images, les PDF ou autres médias.

> [!NOTE]
> Seuls les robots coopératifs suivent ces règles, et un robot d'indexation doit d'abord accéder à la ressource pour lire les en-têtes et les éléments meta (voir [Interaction avec robots.txt](#interaction_avec_robots.txt)).
> Si vous souhaitez éviter la consommation de bande passante par les robots d'indexation, un fichier {{Glossary("robots.txt")}} restrictif est plus efficace que les règles d'indexation, car il bloque l'exploration des ressources.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
X-Robots-Tag: <indexing-rule>
X-Robots-Tag: <indexing-rule>, …, <indexing-ruleN>
```

Un `<bot-name>:` optionnel définit l'agent utilisateur auquel les règles suivantes doivent s'appliquer&nbsp;:

```http
X-Robots-Tag: <indexing-rule>, <bot-name>: <indexing-rule>
X-Robots-Tag: <bot-name>: <indexing-rule>, …, <indexing-ruleN>
```

Voir [la spécification des agents utilisateurs](#définir_les_agents_utilisateurs) pour un exemple.

## Directives

Au moins une des règles d'indexation suivantes peut être utilisée&nbsp;:

- `all`
  - : Aucune restriction pour l'indexation ou l'affichage dans les résultats de recherche.
    Cette règle est la valeur par défaut et n'a aucun effet si elle est explicitement listée.
- `noindex`
  - : Ne pas afficher cette page, ce média, ou la ressource dans les résultats de la recherche.
    Si cette règle est omise, la page, le média, ou la ressource peut être indexé et affiché dans les résultats de la recherche.
- `nofollow`
  - : Ne pas suivre les liens sur cette page.
    Si cette règle est omise, les moteurs de recherche peuvent utiliser les liens sur la page pour découvrir les pages liées.
- `none`
  - : Équivalent à `noindex, nofollow`.
- `nosnippet`
  - : Ne pas afficher d'extrait de texte ou d'aperçu vidéo dans les résultats de recherche pour cette page.
    Une miniature d'image statique (si disponible) peut toujours être visible.
    Si cette règle est omise, les moteurs de recherche peuvent générer un extrait de texte et un aperçu vidéo basé sur les informations trouvées sur la page.
    Pour exclure certaines sections du contenu des extraits de résultats de recherche, utiliser un [`attribut HTML data-nosnippet` <sup>(angl.)</sup>](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#data-nosnippet-attr).
- `indexifembedded`
  - : Un moteur de recherche est autorisé à indexer le contenu d'une page si elle est intégrée dans une autre page par des cadres intégrés ou des éléments HTML similaires, malgré une règle `noindex`.
    `indexifembedded` n'a d'effet que s'il est accompagné de `noindex`.
- `max-snippet: <number>`
  - : Utiliser un maximum de `<number>` caractères comme extrait textuel pour ce résultat de recherche.
    Ignoré si aucun `<number>` valide n'est défini.
- `max-image-preview: <setting>`
  - : La taille maximale d'un aperçu d'image pour cette page dans les résultats de recherche.
    Si omis, les moteurs de recherche peuvent afficher un aperçu d'image de taille par défaut.
    Si vous ne voulez pas que les moteurs de recherche utilisent des images miniatures plus grandes, définissez une valeur `max-image-preview` de `standard` ou `none`. Les valeurs incluent&nbsp;:
    - `none`
      - : Aucun aperçu d'image ne doit être affiché.
    - `standard`
      - : Un aperçu d'image par défaut peut être affiché.
    - `large`
      - : Un aperçu d'image plus grand, jusqu'à la largeur de la zone d'affichage, peut être affiché.
- `max-video-preview: <number>`
  - : Utiliser un maximum de `<number>` secondes comme extrait vidéo pour les vidéos de cette page dans les résultats de recherche.
    Si cette règle est omise, les moteurs de recherche peuvent afficher un extrait vidéo dans les résultats de recherche, et le moteur de recherche décide de la durée de l'aperçu.
    Ignorée si aucune valeur `<number>` valide n'est définie.
    Les valeurs particulières sont les suivantes&nbsp;:
    - `0`
      - : Une image fixe au maximum peut être utilisée, conformément au paramètre `max-image-preview`.
    - `-1`
      - : Aucune limite de durée vidéo.
- `notranslate`
  - : Ne pas proposer la traduction de cette page dans les résultats de recherche.
    Si cette règle est omise, les moteurs de recherche peuvent traduire le titre et l'extrait du résultat de recherche dans la langue de la requête.
- `noimageindex`
  - : Ne pas indexer les images de cette page.
    Si cette règle est omise, les images de la page peuvent être indexées et affichées dans les résultats de recherche.
- `unavailable_after: <date/time>`
  - : Demander à ne plus afficher cette page dans les résultats de recherche après la date et l'heure `<date/time>` définies.
    Ignorée si aucune valeur `<date/time>` valide n'est définie.
    La date doit être définie dans un format tel que {{RFC("822")}}, {{RFC("850")}} ou ISO 8601.

    Par défaut, le contenu n'a pas de date d'expiration.
    Si cette règle est omise, cette page peut apparaître indéfiniment dans les résultats de recherche.
    Les robots d'indexation sont censés réduire considérablement la fréquence d'exploration de l'URL après la date et l'heure définies.

## Description

Les règles d'indexation définies dans `<meta name="robots">` et `X-Robots-Tag` sont découvertes lorsqu'une URL est explorée.
La plupart des robots d'indexation prennent en charge les règles de l'en-tête HTTP `X-Robots-Tag`, qui peuvent être utilisées dans un élément `<meta name="robots">`.

En cas de règles de robots contradictoires dans `X-Robots-Tag` ou entre l'en-tête HTTP `X-Robots-Tag` et l'élément `<meta name="robots">`, la règle la plus restrictive s'applique.
Par exemple, si une page contient les règles `max-snippet:50` et `nosnippet`, la règle `nosnippet` s'applique.
Les règles d'indexation ne sont pas découvertes ni appliquées si un fichier `robots.txt` bloque l'exploration de chemins.

Certaines valeurs s'excluent mutuellement, comme `index` et `noindex`, ou `follow` et `nofollow`.
Dans ce cas, le comportement du robot d'indexation n'est pas défini et peut varier.

### Interaction avec robots.txt

Si un fichier `robots.txt` empêche l'exploration d'une ressource, les informations sur les règles d'indexation ou de diffusion définies avec `<meta name="robots">` ou l'en-tête HTTP `X-Robots-Tag` ne sont pas détectées et sont donc ignorées.

Une page dont l'exploration est bloquée peut tout de même être indexée si un autre document y fait référence (voir la directive [`nofollow`](#nofollow)).
Pour retirer une page des index de recherche, `X-Robots-Tag: noindex` fonctionne généralement, mais un robot doit d'abord consulter de nouveau la page pour détecter la règle `X-Robots-Tag`.

## Exemples

### Utiliser `X-Robots-Tag`

L'en-tête `X-Robots-Tag` suivant ajoute `noindex` et demande aux robots d'indexation de ne pas afficher cette page, ce média ou cette ressource dans les résultats de recherche&nbsp;:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noindex
```

### Plusieurs en-têtes

La réponse suivante contient deux en-têtes `X-Robots-Tag`, chacun définissant une règle d'indexation&nbsp;:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: noimageindex
X-Robots-Tag: unavailable_after: Wed, 03 Dec 2025 13:09:53 GMT
```

### Définir les agents utilisateurs

Il est possible de définir l'agent utilisateur auquel les règles doivent s'appliquer.
L'exemple suivant contient deux en-têtes `X-Robots-Tag` qui demandent à `googlebot` de ne pas suivre les liens de cette page et à un robot d'indexation fictif `BadBot` de ne pas indexer la page ni suivre ses liens&nbsp;:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow
X-Robots-Tag: googlebot: nofollow
```

Dans la réponse ci-dessous, les mêmes règles d'indexation sont définies, mais dans un seul en-tête.
Chaque règle d'indexation s'applique à l'agent utilisateur défini après elle&nbsp;:

```http
HTTP/1.1 200 OK
Date: Tue, 03 Dec 2024 17:08:49 GMT
X-Robots-Tag: BadBot: noindex, nofollow, googlebot: nofollow
```

Lorsque plusieurs robots d'indexation sont définis avec différentes règles, le moteur de recherche utilise la somme des règles négatives.
Par exemple&nbsp;:

```http
X-Robots-Tag: nofollow
X-Robots-Tag: googlebot: noindex
```

La page contenant ces en-têtes est interprétée comme ayant une règle `noindex, nofollow` lorsqu'elle est explorée par `googlebot`.

## Spécifications

Ne fait partie d'aucune spécification actuelle.

## Voir aussi

- L'entrée du glossaire {{Glossary("robots.txt")}}
- L'entrée du glossaire {{Glossary("Search engine", "Moteur de recherche")}}
- L'élément HTML [`<meta name="robots">`](/fr/docs/Web/HTML/Reference/Elements/meta/name/robots) («&nbsp;balise robots&nbsp;»)
- [Configuration de robots.txt](/fr/docs/Web/Security/Practical_implementation_guides/Robots_txt), guide de sécurité
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [Utiliser l'en-tête HTTP `X-Robots-Tag` <sup>(angl.)</sup>](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#xrobotstag) sur developers.google.com
