---
title: Attribut <meta> name
short-title: <meta> name
slug: Web/HTML/Reference/Elements/meta/name
original_slug: Web/HTML/Element/meta/name
l10n:
  sourceCommit: c7a8b2584452bcd5d2c135b637f4ec659ff74b99
---

L'attribut **`name`** de l'élément {{HTMLElement("meta")}} fournit des métadonnées sous forme de paires nom-valeur.
Lorsqu'un élément `<meta>` possède un attribut `name`, un attribut [`content`](/fr/docs/Web/HTML/Reference/Attributes/content) définit la valeur correspondante.
Les métadonnées sont des _métadonnées au niveau du document_ qui s'appliquent à toute la page.

Par exemple, la balise `<meta>` suivante fournit une `description` comme métadonnée pour un document&nbsp;:

```html
<meta
  name="description"
  content="La référence HTML décrit tous les éléments et attributs HTML, y compris les attributs globaux qui s'appliquent à tous les éléments." />
```

## Valeur

### Noms de méta définis dans la spécification HTML

La spécification HTML définit l'ensemble suivant de noms de métadonnées standard&nbsp;:

- `application-name`
  - : Les navigateurs peuvent utiliser cette valeur pour identifier l'application exécutée dans la page web.
    Elle diffère de l'élément {{HTMLElement("title")}}, qui peut contenir un nom d'application (ou de site web), mais `<title>` peut aussi ajouter des informations contextuelles comme un nom de document ou un statut.
    Les pages individuelles ne doivent pas définir leur propre `application-name` unique.
    Pour fournir des traductions, utilisez plusieurs balises `<meta>` avec l'attribut `lang` pour chaque langue&nbsp;:

    ```html
    <meta name="application-name" content="Weather Wizard" lang="en" />
    <meta name="application-name" content="Mago del Clima" lang="es" />
    ```

- `author`
  - : Le nom de l'auteur·ice du document.
- [`color-scheme`](/fr/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)
  - : Spécifie un ou plusieurs schémas de couleurs avec lesquels le document est compatible.
    Le navigateur utilisera cette information avec les paramètres du navigateur ou de l'appareil de l'utilisateur·ice pour déterminer les couleurs à utiliser pour l'arrière-plan, le texte, les contrôles de formulaire et les barres de défilement.
    L'usage principal de `<meta name="color-scheme">` est d'indiquer la compatibilité et l'ordre de préférence pour les modes clair et sombre.
- `description`
  - : Un résumé court et précis du contenu de la page, généralement appelé «&nbsp;méta description&nbsp;».
    Les moteurs de recherche comme Google utilisent cette métadonnée pour ajuster [l'apparence d'une page dans les résultats de recherche](https://developers.google.com/search/docs/appearance/snippet#meta-descriptions).
- `generator`
  - : L'identifiant du logiciel ayant généré la page.
- `keywords`
  - : Mots-clés pertinents pour le contenu de la page, séparés par des virgules.
- [`referrer`](/fr/docs/Web/HTML/Reference/Elements/meta/name/referrer)
  - : Contrôle l'en-tête HTTP {{HTTPHeader("Referer")}} des requêtes envoyées depuis le document.
- [`theme-color`](/fr/docs/Web/HTML/Reference/Elements/meta/name/theme-color)
  - : Indique une couleur suggérée que les agents utilisateur·ice·s peuvent utiliser pour personnaliser l'affichage de la page ou de l'interface utilisateur environnante.
    L'attribut [`content`](/fr/docs/Web/HTML/Reference/Attributes/content) contient une valeur CSS {{CSSxRef("&lt;color&gt;")}} valide.
    L'attribut [`media`](/fr/docs/Web/HTML/Reference/Elements/meta#media) avec une liste de requêtes média valide peut être inclus pour définir le média auquel la couleur de thème s'applique.

### Noms de méta définis dans d'autres spécifications

La spécification CSS Device Adaptation définit le nom de métadonnée suivant&nbsp;:

- [`viewport`](/fr/docs/Web/HTML/Reference/Elements/meta/name/viewport)
  - : Donne des indications sur la taille initiale de la {{Glossary("viewport", "zone d'affichage")}}.

### Noms de méta définis dans le wiki WHATWG MetaExtensions

La page [MetaExtensions du wiki WHATWG <sup>(angl.)</sup>](https://wiki.whatwg.org/wiki/MetaExtensions) contient un grand nombre de noms de métadonnées non standard.
Certains de ces noms sont couramment utilisés en pratique, notamment&nbsp;:

- `creator`
  - : Le nom du ou de la créateur·ice du document, comme une organisation ou une institution.
    S'il y en a plusieurs, utilisez plusieurs éléments {{HTMLElement("meta")}}.
- `googlebot`
  - : Synonyme de `robots`, suivi uniquement par Googlebot (le robot d'indexation de Google).
- `publisher`
  - : Le nom de l'éditeur·ice du document.
- [`robots`](/fr/docs/Web/HTML/Reference/Elements/meta/name/robots)
  - : Liste de valeurs séparées par des virgules définissant le comportement d'exploration que les robots coopératifs doivent utiliser avec la page.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Métadonnées&nbsp;: l'élément `<meta>`](/fr/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata#métadonnées_lélément_meta)
