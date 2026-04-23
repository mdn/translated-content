---
title: Barres de navigation latérales
slug: MDN/Writing_guidelines/Page_structures/Sidebars
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Toutes les pages MDN doivent avoir une barre de navigation latérale.
La plupart sont créées à l'aide d'un système qui définit des structures de données dans des fichiers YAML, et inclut les barres latérales dans les pages via le front-matter ou une macro.

Dans ce guide, vous apprendrez comment fonctionnent ces barres latérales afin de pouvoir modifier les barres existantes et en créer de nouvelles selon les besoins.

> [!NOTE]
> Si vous modifiez des barres latérales, vous pouvez utiliser les commandes `yarn tool` pour le formatage et la synchronisation avec les redirections.
> Voir la documentation de [l'outil CLI de Yari <sup>(angl.)</sup>](https://github.com/mdn/yari/blob/main/docs/cli-tool.md) pour plus d'informations.

## Fonctionnement des barres latérales

Chaque barre latérale possède un fichier YAML correspondant dans le dossier [`files/sidebars` <sup>(angl.)</sup>](https://github.com/mdn/content/tree/main/files/sidebars) du dépôt `content` de MDN. Ce fichier définit la structure hiérarchique des liens de la barre latérale, les URL vers lesquelles chaque lien doit pointer, et éventuellement des titres ou textes de lien personnalisés, qui peuvent être localisés dans différentes langues si besoin.

La page que vous lisez actuellement a une barre latérale définie dans le fichier [`mdnsidebar.yaml` <sup>(angl.)</sup>](https://github.com/mdn/content/blob/main/files/sidebars/mdnsidebar.yaml).

La barre latérale est affichée sur la page courante (et toutes les autres de l'arborescence) en incluant une entrée `sidebar` dans le front-matter de la [source du document <sup>(angl.)</sup>](https://raw.githubusercontent.com/mdn/content/refs/heads/main/files/en-us/mdn/writing_guidelines/page_structures/sidebars/index.md)&nbsp;:

> [!WARNING]
> Cela ne concerne que les pages anglaises.

```md
---
title: Barres de navigation latérales
slug: MDN/Writing_guidelines/Page_structures/Sidebars
page-type: mdn-writing-guide
sidebar: mdnsidebar
---

Toutes les pages MDN doivent avoir une barre de navigation latérale.
```

Le front-matter correspond au contenu entre les tirets. L'ajout de `sidebar: mdnsidebar` dans le front-matter indique au système de chercher un fichier YAML du même nom dans le dossier `files/sidebars`. S'il en trouve un, il s'occupe automatiquement d'afficher la barre latérale et de la placer sur la page sous forme d'une ou plusieurs listes ordonnées (éléments {{HTMLElement("ol")}}).

Essayez de naviguer dans la barre latérale, puis revenez sur cette page. Vous remarquerez qu'en général, lors de la navigation, la liste de liens de la section dans laquelle vous vous trouvez est développée, tandis que les autres sont repliées, et la page active est surlignée.

## Syntaxe YAML des barres latérales expliquée

Cette section explique les différentes fonctionnalités que peuvent inclure les barres latérales MDN, et la syntaxe YAML utilisée pour chacune. Pendant votre lecture, comparez les fonctionnalités avec les [fichiers YAML de barres latérales existants <sup>(angl.)</sup>](https://github.com/mdn/content/tree/main/files/sidebars).

### Début d'une définition de barre latérale

Le début de chaque définition de données de barre latérale YAML est une clé `sidebar`, dont la valeur est une liste définissant la barre latérale&nbsp;:

```yaml
sidebar:
  # définition de la barre latérale ici
```

### Liens simples

Pour créer un lien simple dans une barre latérale, ajoutez un élément de liste YAML contenant une URL relative&nbsp;:

```yaml
sidebar:
  - /MDN/Writing_guidelines/Page_structures/Sidebars
```

L'URL est relative au dossier `docs` dans la structure d'URL MDN, donc par exemple `/MDN/Writing_guidelines/Page_structures/Sidebars` génère un lien vers la page courante. Le système utilise automatiquement le titre du document lié comme texte du lien.
Si la page possède une clé `short-title` dans le front-matter, celle-ci sera utilisée comme texte du lien dans la barre latérale.

Si vous souhaitez utiliser un texte de lien personnalisé qui n'est ni le `title` ni le `short-title` du document, il faut inclure deux clés dans l'élément de liste&nbsp;: `title`, qui contient le texte personnalisé, et `link`, qui contient l'URL relative comme précédemment. L'exemple suivant crée un lien vers la page courante, mais avec le texte personnalisé «&nbsp;Rédiger des barres latérales&nbsp;»&nbsp;:

```yaml
sidebar:
  - title: Rédiger des barres latérales
    link: /MDN/Writing_guidelines/Page_structures/Sidebars
```

### Titres de section

Un titre de section est un élément de barre latérale affiché dans une police plus grande que les autres éléments. Il est souvent utilisé comme titre en haut d'une barre latérale qui pointe vers la page d'accueil de la section, ou comme séparateur dans le cas de barres latérales volumineuses (comme dans la [section Apprendre le développement web](/fr/docs/Learn_web_development)).

Un titre de section se définit en incluant une clé `type` avec la valeur `section` dans l'élément de liste. Exemple&nbsp;:

```yaml
sidebar:
  - type: section
    link: /MDN
```

Un titre de section peut avoir un texte de lien personnalisé&nbsp;:

```yaml
sidebar:
  - type: section
    title: Vive MDN&nbsp;!
    link: /MDN
```

Ou vous pouvez omettre la clé `link` pour afficher simplement un texte sans lien&nbsp;:

```yaml
sidebar:
  - type: section
    title: Vive MDN&nbsp;!
```

### Créer des listes de liens repliables/dépliables

Pour créer une liste de liens repliable/dépliable, créez un élément de liste comme précédemment, mais ajoutez une clé `children` dont la valeur est une liste contenant les liens enfants à afficher sous l'élément parent. Chaque enfant a la même syntaxe que le parent. Un enfant peut lui-même avoir des `children`, permettant de créer plusieurs niveaux de hiérarchie. Exemple&nbsp;:

```yaml
sidebar:
  - title: règles_communautaires
    details: closed
    children:
      - /MDN/Community
      - title: contribuer_à_mdn_web_docs
        details: closed
        children:
          - /MDN/Community
          - /MDN/Community/Getting_started
      - /MDN/Community/Open_source_etiquette
      - /MDN/Community/Communication_channels
      - /MDN/Community/Discussions
# etc.
```

Notez aussi la clé `details` — elle contrôle si la liste des enfants est affichée repliée ou dépliée au chargement de la page. Les valeurs possibles sont&nbsp;:

- `closed`&nbsp;: Les enfants sont repliés, sauf si la page courante est liée par un des enfants, auquel cas ils sont dépliés.
- `open`&nbsp;: Les enfants sont toujours dépliés.

Quand un élément a `children` et `details`, il est affiché avec une structure {{HTMLElement("details")}}/{{HTMLElement("summary")}} contenant la liste enfant, qui peut être repliée/dépliée en cliquant sur le triangle ou en sélectionnant le résumé et en appuyant sur <kbd>Entrée</kbd>/<kbd>Retour arrière</kbd>.

### Générer automatiquement une liste de sous-pages

Pour générer une liste de liens vers les sous-pages d'une page, ajoutez un élément avec une clé `type` valant `listSubPages`, et une clé `path` contenant le chemin de la page dont vous voulez lister les sous-pages. Par exemple, la définition complète de la barre latérale du [Glossaire](/fr/docs/Glossary) (voir [`glossarysidebar.yaml` <sup>(angl.)</sup>](https://github.com/mdn/content/blob/main/files/sidebars/glossarysidebar.yaml)) ressemble à&nbsp;:

```yaml
sidebar:
  - type: section
    link: /Glossary
    title: Glossaire
  - type: listSubPages
    path: /Glossary
```

Cela affiche une barre latérale avec un titre de section qui pointe vers la page d'accueil du glossaire, et une liste de liens vers toutes les sous-pages du glossaire.

Si vous souhaitez afficher cela comme un élément parent avec les sous-pages dans une liste repliable/dépliable, ajoutez une clé `title` pour le texte du parent, et une clé `details` pour le comportement ouvert/fermé de la structure `<details>`/`<summary>`.

```yaml
sidebar:
  - type: listSubPages
    path: /Glossary
    title: Glossaire
    details: closed
```

#### Regrouper les sous-pages

Il existe aussi une valeur `type` de `listSubPagesGrouped`. Cela regroupe les sous-pages dont le titre commence par la même sous-chaîne suivie d'un tiret (par exemple `item-`) dans une liste enfant sous un élément parent nommé par la sous-chaîne, plus un tiret et une étoile (par exemple `item-*`).

Par exemple, au moment de la rédaction, le glossaire MDN contient trois pages liées à CORS&nbsp;:

- CORS
- CORS-en-tête de requête autorisé
- CORS-en-tête de réponse autorisé

Si on met à jour la barre latérale du glossaire ainsi&nbsp;:

```yaml
sidebar:
  - type: listSubPagesGrouped
    path: /Glossary
    title: Glossaire
    details: closed
```

Les liens vers ces pages seront regroupés ainsi&nbsp;:

- CORS-\*
  - CORS
  - CORS-en-tête de requête autorisé
  - CORS-en-tête de réponse autorisé

Des exemples plus réalistes se trouvent dans la barre latérale [CSS](/fr/docs/Web/CSS) (voir [`cssref.yaml` <sup>(angl.)</sup>](https://github.com/mdn/content/blob/main/files/sidebars/cssref.yaml)), où `listSubPagesGrouped` sert à regrouper les liens des propriétés raccourcies et longues. L'élément qui génère le menu des propriétés ressemble à&nbsp;:

```yaml
- type: listSubPagesGrouped
  path: /Web/CSS
  title: Propriétés
  tags:
    - css-property
    - css-shorthand-property
  details: closed
```

Cet élément contient aussi `tags`, sujet de la section suivante.

#### Filtrer les sous-pages

Si vous avez plusieurs types de pages dans un même dossier (définis par la clé `page-type` du front-matter), vous pouvez filtrer les éléments générés par `listSubPages` et `listSubPagesGrouped` par type de page. Pour cela, ajoutez une clé `tags` dans l'élément, avec comme valeur un type de page ou une liste de types à inclure. La barre latérale CSS contient plusieurs exemples&nbsp;:

```yaml
- type: listSubPages
  path: /Web/CSS
  title: Modules
  tags: css-module
  details: closed
- type: listSubPagesGrouped
  path: /Web/CSS
  title: Propriétés
  tags:
    - css-property
    - css-shorthand-property
  details: closed
- type: listSubPages
  path: /Web/CSS
  title: Sélecteurs
  tags: css-selector
  details: closed
# etc.
```

### Localiser les chaînes de texte

Comme expliqué plus haut, vous pouvez inclure du texte personnalisé pour vos liens ou titres de section via la clé `title`. Pour localiser ce texte dans plusieurs langues, utilisez un espace réservé dans `title`, puis définissez les valeurs de cet espace réservé pour chaque langue dans un dictionnaire `l10n` en bas du fichier YAML.

Voici un exemple. Dans la barre latérale [HTML](/fr/docs/Web/HTML) (voir [`htmlsidebar.yaml` <sup>(angl.)</sup>](https://github.com/mdn/content/blob/main/files/sidebars/htmlsidebar.yaml)), on définit un élément qui génère une liste de liens vers toutes les pages de référence des types {{HTMLElement("input")}}. Le texte parent est défini dans `title` comme espace réservé `Input_types`&nbsp;:

```yaml
- type: listSubPages
  path: /Web/HTML/Reference/Elements/input
  title: Input_types
  details: closed
  code: true
```

En bas du fichier, on définit le dictionnaire `l10n`. Chaque clé de `l10n` est une locale — `en-US`, `fr`, `ja`, etc. La valeur de chaque clé est un sous-dictionnaire, dont les clés sont les espaces réservés définis plus haut. Chaque valeur est la traduction dans la langue correspondante.

Exemple&nbsp;:

```yaml
l10n:
  en-US:
    Input_types: <code>&lt;input&gt;</code> types
  fr:
    Input_types: Types <code>&lt;input&gt;</code>
  ja:
    Input_types: <code>&lt;input&gt;</code> 型
  ko:
    Input_types: <code>&lt;input&gt;</code> types
  pt-BR:
    Input_types: Tipos de <code>&lt;input&gt;</code>
  ru:
    Input_types: Типы <code>&lt;input&gt;</code>
  zh-CN:
    Input_types: <code>&lt;input&gt;</code> 类型
```

Ici, seules les valeurs de `Input_types` sont montrées pour chaque langue.

Lors de l'affichage, le système remplace le texte `Input_types` par la valeur définie dans la locale du site consulté. Comparez par exemple&nbsp;:

- https://developer.mozilla.org/en-US/docs/Web/HTML
- https://developer.mozilla.org/fr/docs/Web/HTML
- https://developer.mozilla.org/ja/docs/Web/HTML

Si une locale MDN n'a pas de valeur définie pour un espace réservé, la version `en-US` est utilisée par défaut. Si aucune version `en-US` n'est définie, le texte littéral de l'espace réservé est affiché (ici `Input_types`).

## Barres latérales uniques

Certaines barres latérales sur MDN n'utilisent pas le système standard décrit ci-dessus. Ce sont des macros plus complexes nécessitant un traitement particulier&nbsp;:

- `{{APIRef("<API>")}}`
  - : La barre latérale API affichée sur les [pages de référence d'API](/fr/docs/Web/API#interfaces). Pour chaque interface, la macro génère automatiquement des liens vers les membres définis sur l'interface — propriétés, méthodes, événements, etc. Le paramètre unique est le nom du groupe d'API défini dans le fichier [`GroupData.json` <sup>(angl.)</sup>](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json). Pour modifier les pages associées affichées en bas de la barre latérale, modifiez l'entrée GroupData de cette API.
- `{{DefaultAPISidebar("<API>")}}`
  - : La barre latérale API affichée sur les [pages d'accueil d'API](/fr/docs/Web/API#spécifications). Le paramètre unique est le nom du groupe d'API défini dans le fichier [`GroupData.json` <sup>(angl.)</sup>](https://github.com/mdn/content/blob/main/files/jsondata/GroupData.json). Pour modifier les guides, interfaces, etc. liés dans la barre latérale d'une API, modifiez l'entrée GroupData de cette API.
- `sidebar: jsref`
  - : La barre latérale sur les [pages de référence JavaScript](/fr/docs/Web/JavaScript/Reference) incluse via le front-matter.
    Le contenu de `jsref` est défini dans rari dans [`jsref.rs` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/sidebars/jsref.rs).

Si vous pensez qu'une de ces barres doit être mise à jour, contactez-nous via les [canaux habituels](/fr/docs/MDN/Community/Communication_channels).

## Voir aussi

- [Utiliser les macros](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Macros de liens de contenu](/fr/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Macros de sections de page](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros)
- [Macros de bannières et d'avis](/fr/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
