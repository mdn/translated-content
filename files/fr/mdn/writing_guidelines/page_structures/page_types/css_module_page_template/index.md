---
title: Modèle de page de module CSS
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_module_page_template
l10n:
  sourceCommit: d35e3fd4bc6b80049899b45d74ed71dc996adfc7
---

> [!NOTE]
> _Supprimez cette note explicative avant de publier._
>
> ---
>
> **Page de garde&nbsp;:**
>
> Les métadonnées en haut de la page sont utilisées pour définir les «&nbsp;métadonnées de la page&nbsp;».
> Les valeurs doivent être mises à jour de manière appropriée pour l'interface particulière.
>
> ```md
> ---
> title: NomDuModule CSS
> slug: Web/CSS/Guides/NameOfTheModule
> page-type: css-module
> spec-urls:
>   - url1
>   - url2
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : La valeur `title` est affichée en haut de la page.
>     Il s'agit du texte «&nbsp;CSS&nbsp;» suivi du nom du module.
>     Par exemple, le titre de la page du module [de modèle de grille](/fr/docs/Web/CSS/Guides/Grid_layout) est _Modèle de grille CSS_.
> - **slug**
>   - : La valeur `slug` est la fin du chemin de l'URL après `https://developer.mozilla.org/fr/docs/`.
>     C'est formaté comme `Web/CSS/Guides/NameOfTheModule`.
>     Par exemple, le slug pour la page du module [de modèle de grille](/fr/docs/Web/CSS/Guides/Grid_layout) est `Web/CSS/Guides/Grid_layout`.
> - **page-type** (pages anglaises uniquement)
>   - : La valeur `page-type` pour les pages de module CSS est toujours `css-module`.
> - **spec-urls** (pages anglaises uniquement)
>   - : La valeur `spec-urls` est une URL de la spécification ou une liste à puces des URL de plusieurs niveaux de la même spécification dans les cas où il existe plusieurs versions d'une spécification, comme les niveaux 1, 2 et 3. Incluez uniquement les modules qui sont des révisions d'une seule spécification, par ordre décroissant. Par exemple, la clé `spec-urls` pour la page du module [effets de filtre](/fr/docs/Web/CSS/Guides/Filter_effects) est la suivante&nbsp;:
>
> ```plain
> spec-urls:
>     - https://drafts.csswg.org/filter-effects-2/
>     - https://drafts.csswg.org/filter-effects-1/
> ```
>
> - **sidebar** (pages anglaises uniquement)
>   - : Il s'agit de `cssref` pour toutes les pages de guide et de référence CSS.
>     Voir [Structures de page&nbsp;: Barres latérales](/fr/docs/MDN/Writing_guidelines/Page_structures/Sidebars) pour plus de détails.
>
> ---
>
> _N'oubliez pas de supprimer ce bloc de notes avant de publier._

Commencez le contenu de la page par un paragraphe introductif qui nomme le module et explique ce qu'il fait. Fournissez brièvement un aperçu des fonctionnalités définies dans la spécification et, le cas échéant, décrivez comment elles interagissent avec les fonctionnalités des spécifications connexes. Cette description est un aperçu rapide, PAS un tutoriel ou un guide, donc restez concis.

## NomDuModule en action

Dans cette section, incluez un exemple utilisant `\{{EmbedLiveSample}}` (voir [Exemples interactifs](/fr/docs/MDN/Writing_guidelines/Page_structures/Live_samples) pour plus d'informations) qui aide à démontrer l'utilité et la puissance des différentes propriétés fournies par ce module.
L'objectif de cette section est de montrer des cas d'utilisation et de susciter l'intérêt et la curiosité des lecteur·ice·s découvrant ce module. Gardez le code caché sauf s'il est essentiel à la compréhension des cas d'utilisation (par exemple, la gestion des espaces de noms ou l'imbrication).

Si pertinent, fournissez une brève description de la manière dont les lecteur·ice·s peuvent interagir avec l'exemple.

## Référence

Créez les sous-sections pertinentes pour répertorier les propriétés, fonctions, types de données, etc. La section de référence doit inclure uniquement les fonctionnalités introduites dans la spécification unique. Si une fonctionnalité est dans la spécification mais n'est pas prise en charge, mentionnez-la dans un paragraphe sous le titre approprié. Les fonctionnalités liées définies dans d'autres spécifications vont sous «&nbsp;concepts liés&nbsp;», et NON dans cette section.

### Propriétés

Une liste de toutes les propriétés abrégées et longues fournies par le module et prises en charge dans au moins un navigateur majeur.

Ajoutez un paragraphe indiquant les propriétés introduites par le module qui ne sont pas encore prises en charge par un navigateur, le cas échéant.

Omettez cette section si le module ne définit aucune propriété.

### Règles @

Une liste de toutes les règles @ CSS fournies par le module et prises en charge dans au moins un navigateur majeur.

Ajoutez un paragraphe indiquant les règles @ introduites par le module qui ne sont pas encore prises en charge par un navigateur, le cas échéant.

Omettez cette section si le module ne définit aucune règle @.

### Fonctions

Une liste de toutes les fonctions CSS fournies par le module et prises en charge dans au moins un navigateur majeur.

Ajoutez un paragraphe indiquant les fonctions introduites par le module qui ne sont pas encore prises en charge par un navigateur, le cas échéant.

Omettez cette section si le module ne définit aucune fonction CSS.

### Types de données

Une liste de tous les types de données CSS fournis par le module et pris en charge dans au moins un navigateur majeur.

Ajoutez un paragraphe indiquant les types de données introduits par le module qui ne sont pas encore pris en charge par un navigateur, le cas échéant.

Omettez cette section si le module ne définit aucun type de données.

### Évènements

Une liste de tous les évènements API fournis par le module et pris en charge dans au moins un navigateur majeur.

Ajoutez un paragraphe indiquant les évènements introduits par le module qui ne sont pas encore pris en charge par un navigateur, le cas échéant.

Omettez cette section si le module ne définit aucun évènement.

### Interfaces

Une liste des interfaces API liées fournies par le module et prises en charge dans au moins un navigateur majeur.

Ajoutez un paragraphe indiquant les interfaces introduites par le module qui ne sont pas encore prises en charge par un navigateur, le cas échéant.

Omettez cette section si le module ne définit aucune interface API.

### Termes et définitions du glossaire

Liste des termes du glossaire et autres termes définis dans les pages de référence listées ci-dessus. Omettez cette section s'il n'y a rien de pertinent à inclure.

## Guides

Une liste définissant les guides liés à la structure du module, par ordre de complexité croissante, suivie des guides liés provenant d'autres modules. Incluez uniquement les guides MDN.

- LinkToGuide1
  - : One-sentence description of the guide.
- LinkToGuide2
  - : One-sentence description of the guide.

## Concepts associés

Liste de toutes les autres propriétés, types de données, termes du glossaire, etc. qui sont liés à ce module.

## Spécifications

`\{{Specifications}}`

_Pour utiliser cette macro, supprimez les accents inversés et la barre oblique inverse dans le fichier markdown._

## Voir aussi

Incluez des liens vers d'autres pages de référence et d'autres contenus pertinents qui ne correspondent pas aux autres sections. S'il existe des guides externes pertinents à inclure, placez-les à la fin de la liste (pas sous la section «&nbsp;Guides&nbsp;», qui est limitée aux guides MDN). Consultez la section [Voir aussi](/fr/docs/MDN/Writing_guidelines/Writing_style_guide#section_«_voir_aussi_») de notre _Guide de style d'écriture_ pour plus d'indices et de directives.

- lien1
- lien2
- lien_externe (année)
