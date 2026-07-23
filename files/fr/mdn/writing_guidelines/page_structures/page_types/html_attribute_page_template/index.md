---
title: Modèle de page d'attribut HTML
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTML_attribute_page_template
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
---

Les attributs HTML se divisent en deux catégories&nbsp;: les **attributs spécifiques à un élément**, qui ne s'appliquent qu'à certains éléments (par exemple, l'attribut `accept` sur `<input type="file">`), et les **attributs universels**, qui peuvent être utilisés pour n'importe quel élément HTML (par exemple, `class`, `id`). Les premiers doivent être placés sous `HTML/Reference/Attributes`, tandis que les seconds doivent être placés sous `HTML/Reference/Global_attributes`.

Notez que la plupart des attributs spécifiques à un élément n'ont pas besoin d'articles autonomes si la liste des attributs dans la référence de l'élément est suffisante pour décrire leur comportement.
Ajoutez un article uniquement si l'attribut a suffisamment de nuances pour mériter ses propres exemples, ou s'il s'agit d'un attribut global.

> [!NOTE]
> _Supprimez cette note explicative avant de publier._
>
> ---
>
> **Page de garde&nbsp;:**
>
> Les métadonnées en haut de la page sont utilisées pour définir les «&nbsp;métadonnées de la page&nbsp;».
> Les valeurs doivent être mises à jour de manière appropriée pour l'attribut particulier.
>
> ```md
> ---
> title: nom-de-lattribut
> slug: Web/HTML/Reference/Global_attributes/name-of-the-attribute
> page-type: html-attribute
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: html.global_attributes.name-of-the-attribute
> sidebar: htmlsidebar
> ---
> ```
>
> - **title**
>   - : Titre affiché en haut de la page.
>     Format&nbsp;: `nom-de-lattribut` (juste le nom de l'attribut lui-même).
>     Par exemple, l'attribut [`class`](/fr/docs/Web/HTML/Reference/Global_attributes/class) a pour _titre_ `class`.
> - **slug**
>   - : La fin du chemin de l'URL après `https://developer.mozilla.org/fr/docs/`.
>     C'est formaté comme `Web/HTML/Reference/Global_attributes/nom-de-l-attribut` ou `Web/HTML/Reference/Attributes/nom-de-l-attribut`, où le nom de l'attribut est en _minuscules_.
>     Par exemple, l'attribut [`class`](/fr/docs/Web/HTML/Reference/Global_attributes/class) a pour _slug_ `Web/HTML/Reference/Global_attributes/class`.
> - **page-type** (pages anglaises uniquement)
>   - : Toujours `html-attribute`.
> - **status** (pages anglaises uniquement)
>   - : Indique le statut de cette fonctionnalité. Un tableau qui peut contenir une ou plusieurs des valeurs suivantes&nbsp;: `experimental`, `deprecated`, `non-standard`. Cette clé ne doit pas être définie manuellement&nbsp;: elle est définie automatiquement en fonction des valeurs dans les données de compatibilité des navigateurs pour la fonctionnalité. Voir [«&nbsp;Comment les statuts des fonctionnalités sont ajoutés ou mis à jour&nbsp;»](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour).
> - **browser-compat** (pages anglaises uniquement)
>   - : Remplacez la valeur de l'espace réservé `html.global_attributes.name-of-the-attribute` par la chaîne de requête pour l'attribut global dans le [dépôt de données de compatibilité des navigateurs <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data).
>     Pour les attributs spécifiques aux éléments, utilisez le format `html.elements.name-of-the-element.name-of-the-attribute`, avec chaque chaîne de requête sur sa propre ligne, précédée d'un tiret. Par exemple&nbsp;:
>
>     ```yaml
>     browser-compat:
>       - html.elements.form.autocomplete
>       - html.elements.input.autocomplete
>       - html.elements.select.autocomplete
>       - html.elements.textarea.autocomplete
>     ```
>
>     L'outil utilise automatiquement la clé pour remplir les sections de compatibilité et de spécifications (en remplaçant les macros `\{{Compat}}` et `\{{Specifications}}` dans ces sections, respectivement).
>     Notez que vous devez d'abord créer ou mettre à jour une entrée pour l'attribut dans notre [dépôt de données de compatibilité des navigateurs <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data), et l'entrée doit inclure des informations sur la spécification.
>     Consultez notre [guide sur la façon de procéder](/fr/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar**
>   - : Conservez `htmlsidebar` (toutes les pages sous `/web/html/` utilisent cette barre latérale).
>     Voir [Structures de page&nbsp;: Barres latérales](/fr/docs/MDN/Writing_guidelines/Page_structures/Sidebars) pour plus de détails.
>
> ---
>
> **Macros en haut de page**
>
> Un certain nombre de macros apparaissent en haut de la section de contenu (immédiatement sous les métadonnées de la page).
> Ces macros sont ajoutées automatiquement par la chaîne d'outils (il n'est pas nécessaire de les ajouter/supprimer)&nbsp;:
>
> - `\{{SeeCompatTable}}` — cela génère une bannière **Ceci est une technologie expérimentale** qui indique que la technologie est [expérimentale](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#expérimental).
>   Si elle est expérimentale et que la technologie est cachée derrière une préférence dans Firefox, vous devez également remplir une entrée pour elle dans la page [Fonctionnalités expérimentales dans Firefox](/fr/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}` — cela génère une bannière **Obsolète** qui indique que l'utilisation de la technologie est [découragée](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#obsolète).
> - `\{{Non-standard_Header}}` — cela génère une bannière **Non standard** qui indique que la fonctionnalité ne fait partie d'aucune spécification.
>
> Ne fournissez pas manuellement les macros d'en-tête de statut. Reportez-vous à la section [«&nbsp;Comment les statuts des fonctionnalités sont ajoutés ou mis à jour&nbsp;»](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour) pour ajouter ces statuts à la page.
>
> Des exemples des bannières **Expérimentale**, **Obsolète** et **Non standard** sont présentés juste après ce bloc de notes.
>
> _N'oubliez pas de supprimer cette note explicative avant de publier_
>
> {{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}
>
> Commencez par présenter l'attribut au lecteur·ice et son utilisation.
> Par exemple&nbsp;: [L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`nom-de-lattribut`** décrit ou manipule [insérer la description de l'utilisation].

## Exemple interactif

Cette section est générée par la macro `InteractiveExample`.
Cela inclut le titre de la section «&nbsp;Exemple interactif&nbsp;» et l'éditeur de code.
Voir la section [Exemples interactifs](/fr/docs/MDN/Writing_guidelines/Page_structures/Code_examples#exemples_interactifs) de nos _Règles d'écritures_ pour plus d'informations.
Si inclus, suivez-le avec 1 à 2 courts paragraphes expliquant le comportement implémenté, et éventuellement en mettant en évidence toute interaction avec JavaScript, CSS ou d'autres attributs. Restez concis et évitez de dupliquer la documentation complète — créez des liens vers ce qui est nécessaire. Voir également la page de l'attribut `class`.

## Valeurs

Fournissez une liste des valeurs possibles pour l'attribut, le cas échéant (supprimez si non applicable). Incluez la valeur par défaut s'il y en a une, et une brève description pour chaque valeur.

- `"value1"`
  - : Description de la valeur 1. C'est la valeur par défaut.
- `"value2"`
  - : Description de la valeur 2.
- `"value3"`
  - : Description de la valeur 3.

## Accessibilité

Signalez toute préoccupation potentielle en matière d'accessibilité pouvant exister lors de l'utilisation de cet attribut, et comment y remédier. Supprimez cette section s'il n'y en a aucune à répertorier.

## Exemples

Montrez des exemples pertinents pour cet attribut, et comment utiliser cet attribut dans des contextes HTML pratiques.
Notez que nous utilisons le pluriel «&nbsp;Exemples&nbsp;» même si la page ne contient qu'un seul exemple.

### Un titre descriptif

Chaque exemple doit avoir un titre H3 nommant l'exemple. Le titre doit être descriptif de ce que fait l'exemple. Par exemple, «&nbsp;Un exemple simple&nbsp;» ne dit rien sur l'exemple et n'est donc pas un bon titre. Le titre doit être concis. Pour une description plus longue, utilisez le paragraphe après le titre.

Consultez notre guide sur la façon d'ajouter des [exemples de code](/fr/docs/MDN/Writing_guidelines/Page_structures/Code_examples) pour plus d'informations.

> [!NOTE]
> Parfois, vous pouvez vouloir créer un lien vers des exemples donnés sur une autre page.
>
> **Scénario 1&nbsp;:** Si vous avez des exemples sur cette page et d'autres exemples sur une autre page&nbsp;:
>
> Incluez un titre H3 (`###`) pour chaque exemple sur cette page, puis un dernier titre H3 (`###`) avec le texte «&nbsp;Plus d'exemples&nbsp;», sous lequel vous pouvez créer des liens vers les exemples sur d'autres pages. Par exemple&nbsp;:
>
> ```md
> ## Exemples
>
> ### Utiliser l'API fetch
>
> Exemple de Fetch
>
> ### Plus d'exemples
>
> Liens vers plus d'exemples sur d'autres pages
> ```
>
> **Scénario 2&nbsp;:** Si vous n'avez des exemples que sur une autre page et aucun sur cette page&nbsp;:
>
> N'ajoutez pas de titres H3&nbsp;; ajoutez simplement les liens directement sous le titre H2 «&nbsp;Exemples&nbsp;». Par exemple&nbsp;:
>
> ```md
> ## Exemples
>
> Pour des exemples de cette API, voir [la page sur `fetch()`](https://example.org/).
> ```

## Spécifications

`\{{Specifications}}`

_Pour utiliser cette macro, supprimez les accents inversés et l'antislash dans le fichier markdown._

## Compatibilité des navigateurs

`\{{Compat}}`

_Pour utiliser cette macro, supprimez les accents inversés et l'antislash dans le fichier markdown._

## Voir aussi

Incluez des liens vers des pages de référence et des guides liés à l'API actuelle. Pour plus de directives, consultez la [section Voir aussi](/fr/docs/MDN/Writing_guidelines/Writing_style_guide#section_«_voir_aussi_») dans le _Guide de style d'écriture_.

- lien1
- lien2
- lien_externe (année)
