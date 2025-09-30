---
title: Statut des fonctionnalités
slug: MDN/Writing_guidelines/Page_structures/Feature_status
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

Le statut d'une fonctionnalité indique globalement l'état d'implémentation entre les navigateurs et de standardisation d'une fonctionnalité de la plateforme web, comme une méthode d'API Web ou une propriété CSS.

Il s'agit de l'un des statuts suivants&nbsp;:

- [`déprécié` <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#setting-deprecated)
- [`expérimental` <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#setting-experimental)
- [`non standardisé` <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data/blob/main/schemas/compat-data-schema.md#status-information)

> [!WARNING]
> Ne mettez pas à jour manuellement les statuts des fonctionnalités dans les dépôts `mdn/content` et `mdn/translated-content`.
> La source de la documentation est [mise à jour automatiquement](#comment_les_statuts_sont_ajoutés_ou_mis_à_jour) à partir des informations du dépôt GitHub `mdn/browser-compat-data`.

Si aucun des statuts ci-dessus ne s'applique, la fonctionnalité est considérée comme _stable et standard_.
Pour plus d'informations sur ces termes, voir la page [«&nbsp;Expérimental, déprécié et obsolète&nbsp;»](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

Pour savoir comment le statut d'une fonctionnalité est déterminé, voir la section [choisir les propriétés de statut <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data/tree/main/docs/data-guidelines#choosing-status-properties) dans le dépôt `@mdn/browser-compat-data` (BCD).

## Comment les statuts sont-ils ajoutés ou mis à jour ?

Les statuts de toutes les fonctionnalités documentées sur MDN sont suivis dans le dépôt [@mdn/browser-compat-data <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data) (BCD). Une automatisation _met à jour automatiquement_ les statuts dans le dépôt `mdn/content` (et s'applique sur `mdn/translated-content` par héritage) à chaque [nouvelle version de BCD](https://github.com/mdn/browser-compat-data/releases).

L'automatisation utilise la clé [`browser-compat`](/fr/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables#utiliser_les_données_bcd_dans_les_pages_mdn) dans le front-matter. Cette clé contient la requête BCD permettant de localiser la fonctionnalité dans les données de compatibilité. Si la clé `browser-compat` a plusieurs valeurs, seule la première est utilisée pour afficher les macros de statut.

> [!NOTE]
> Pour mettre à jour le statut d'une fonctionnalité dans le contenu MDN, vous devez [soumettre une requête de tirage <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data/blob/main/docs/contributing.md#updating-the-compat-data) dans le dépôt BCD. Après validation et fusion de vos modifications dans BCD, elles sont publiées lors d'une version hebdomadaire, puis une pull request automatisée met à jour les statuts dans le dépôt `mdn/content` à chaque publication.

## Comment les statuts sont-ils spécifiés dans le contenu ?

Les sections suivantes documentent les mécanismes utilisés pour insérer et afficher les informations de statut dans les documents MDN. Comme indiqué, ces éléments sont en lecture seule, car leur ajout est automatisé.

### Icônes de statut dans les barres latérales

La propriété `status` dans le front-matter de la page permet de générer les icônes de statut des fonctionnalités affichées dans les barres latérales.

```yaml
---
title: Nom de la fonctionnalité
status:
  - deprecated
  - experimental
  - non-standard
browser-compat: api.feature
---
```

### Bannières de statut en haut de page

Les macros suivantes servent à afficher les bannières de statut en haut des pages&nbsp;:

- `\{{Deprecated_Header}}`
  - : Pour le statut `deprecated`. Affiche une bannière **Statut déprécié**&nbsp;:
    {{deprecated_header}}

- `\{{SeeCompatTable}}`
  - : Pour le statut `experimental`. Affiche une bannière **Statut expérimental**&nbsp;:
    {{SeeCompatTable}}

- `\{{Non-standard_Header}}`
  - : Pour le statut `non-standard`. Affiche une bannière **Statut non standard**&nbsp;:
    {{Non-standard_Header}}

### Icônes de statut dans les listes de définitions

Les macros suivantes servent à afficher les icônes de statut en ligne à côté des éléments de liste de définitions&nbsp;:

- [`\{{Experimental_Inline}}` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) icône&nbsp;: {{Experimental_Inline}}
- [`\{{Non-standard_Inline}}` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) icône&nbsp;: {{Non-standard_Inline}}
- [`\{{Deprecated_Inline}}` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) icône&nbsp;: {{Deprecated_Inline}}

Si une page de fonctionnalité web possède une bannière de statut, alors les macros en ligne du même statut sont utilisées explicitement pour chaque membre ou valeur de la fonctionnalité dans la liste de définitions.
Par exemple, si une page est marquée expérimentale avec `\{{SeeCompatTable}}`, chaque membre ou valeur de la fonctionnalité est explicitement marqué expérimental avec la macro `\{{Experimental_Inline}}` dans la liste de définitions.

## Voir aussi

- [Macros de barre latérale](/fr/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Macros de lien](/fr/docs/MDN/Writing_guidelines/Page_structures/Links)
