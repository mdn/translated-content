---
title: <meta name="robots">
short-title: robots
slug: Web/HTML/Reference/Elements/meta/name/robots
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

La valeur **`robots`** pour l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/meta/name) de l'élément HTML {{HTMLElement("meta")}} (souvent appelée «&nbsp;balise robots&nbsp;») définit le comportement d'exploration et d'indexation que les {{Glossary("Crawler", "robots d'exploration")}} web doivent utiliser avec la page.
Si elle est spécifiée, vous définissez les instructions pour les robots dans l'attribut [`content`](/fr/docs/Web/HTML/Reference/Elements/meta#content) de l'élément `<meta>` sous forme de liste de règles séparées par des virgules.

Par exemple, pour indiquer aux robots qu'une page doit être exclue de leurs index de recherche, on peut utiliser la valeur `noindex`&nbsp;:

```html
<meta name="robots" content="noindex" />
```

> [!NOTE]
> Seuls les robots coopératifs suivent ces règles.
> Un robot doit tout de même accéder à la ressource pour lire les en-têtes et les éléments meta (voir [X-Robots-Tag&nbsp;: Interaction avec robots.txt](/fr/docs/Web/HTTP/Reference/Headers/X-Robots-Tag#interaction_avec_robots.txt)).
> Si vous souhaitez éviter la consommation de bande passante par les robots, un fichier {{Glossary("robots.txt")}} restrictif est plus efficace que des règles d'indexation car il bloque totalement l'exploration des ressources.

## Notes d'utilisation

Un élément `<meta name="robots">` peut avoir les attributs supplémentaires suivants&nbsp;:

- [`content`](/fr/docs/Web/HTML/Reference/Elements/meta#content)
  - : L'attribut `content` doit être défini, et sa valeur définit le comportement d'indexation et d'exploration pour les robots des moteurs de recherche coopératifs.
    Accepte un ou plusieurs des mots-clés suivants, séparés par des virgules&nbsp;:
    - `index`
      - : Autorise le robot à indexer la page. Il s'agit du comportement par défaut.
        Utilisé par tous les principaux robots.
    - `noindex`
      - : Demande au robot de ne pas indexer la page.
        Utilisé par tous les principaux robots.
    - `follow`
      - : Autorise le robot à suivre les liens de la page. Il s'agit du comportement par défaut.
        Utilisé par tous les principaux robots.
    - `nofollow`
      - : Demande au robot de ne pas suivre les liens de la page.
        Utilisé par tous les principaux robots.
    - `all`
      - : Équivalent à `index, follow`.
        Utilisé par&nbsp;: [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965067987211-415685194&rd=1&hl=fr).
    - `none`
      - : Équivalent à `noindex, nofollow`.
        Utilisé par&nbsp;: [Google](https://developers.google.com/search/docs/crawling-indexing/special-tags?visit_id=637855965074074862-574753619&rd=1&hl=fr).
    - `noarchive`
      - : Demande au moteur de recherche de ne pas mettre en cache le contenu de la page.
        Utilisé par&nbsp;: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag), [Yahoo <sup>(angl.)</sup>](https://help.yahoo.com/kb/search-for-desktop/SLN2213.html), [Bing <sup>(angl.)</sup>](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).
    - `nosnippet`
      - : Empêche l'affichage d'une description de la page dans les résultats des moteurs de recherche.
        Utilisé par&nbsp;: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=fr), [Bing <sup>(angl.)</sup>](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).
    - `noimageindex`
      - : Demande que cette page n'apparaisse pas comme page référente d'une image indexée.
        Utilisé par&nbsp;: [Google](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag?hl=fr).
    - `nocache`
      - : Synonyme de `noarchive`.
        Utilisé par&nbsp;: [Bing <sup>(angl.)</sup>](https://www.bing.com/webmasters/help/which-robots-metatags-does-bing-support-5198d240).

## Description

Il y a plusieurs points importants à noter lors de la définition d'une valeur meta `robots`&nbsp;:

- Seuls les robots coopératifs suivent ces règles. Elles n'empêchent pas les acteurs malveillants comme les collecteurs d'adresses e-mail d'ignorer les directives.
- Si elles sont définies dans une balise `<meta>`, les robots doivent tout de même accéder à la page pour lire ces règles. Pour réduire la bande passante, envisagez d'utiliser un [fichier robots.txt](/fr/docs/Web/Security/Practical_implementation_guides/Robots_txt) à la place.
- La balise `<meta name="robots">` et le fichier `robots.txt` ont des rôles différents&nbsp;: `robots.txt` contrôle l'exploration, tandis que la balise meta `robots` influence l'indexation et d'autres comportements.
- Une page bloquée par `robots.txt` peut tout de même être indexée si elle est liée depuis d'autres sources.
- La directive `noindex` ne prendra effet qu'après que le robot aura revisité la page, donc assurez-vous que `robots.txt` ne l'empêche pas.
- Certaines valeurs, comme `index` vs. `noindex` ou `follow` vs. `nofollow`, sont mutuellement exclusives. Le comportement est indéfini en cas de valeurs contradictoires.
- Des robots comme Google, Yahoo et Bing prennent aussi en charge ces directives dans l'en-tête HTTP {{HTTPHeader("X-Robots-Tag")}}, ce qui est utile pour les contenus non-HTML comme les PDF ou les images.

## Exemples

### Utilisation d'un mot-clé robots

L'exemple suivant utilise `nofollow` pour demander à un robot de ne pas suivre les liens d'une page et `noindex` pour demander que la page soit exclue de l'indexation&nbsp;:

```html
<meta name="robots" content="nofollow, noindex" />
```

## Spécifications

Bien que ne faisant partie d'aucune spécification, il s'agit d'une méthode de facto pour communiquer avec les robots d'indexation, les robots d'exploration web et des agents utilisateur·ice·s similaires.

## Compatibilité des navigateurs

Cette fonctionnalité est destinée à être observée par les robots d'exploration, donc la compatibilité «&nbsp;navigateur&nbsp;» ne s'applique pas.

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("X-Robots-Tag")}}
- [Guide de configuration robots.txt](/fr/docs/Web/Security/Practical_implementation_guides/Robots_txt)
- L'entrée de glossaire {{Glossary("robots.txt")}}
- L'entrée de glossaire {{Glossary("Search engine", "moteur de recherche")}}
- {{RFC("9309", "Robots Exclusion Protocol")}}
- [MetaExtensions du wiki WHATWG <sup>(angl.)</sup>](https://wiki.whatwg.org/wiki/MetaExtensions)
- [Utiliser la balise meta robots <sup>(angl.)</sup>](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag#robotsmeta) sur developers.google.com
