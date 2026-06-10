---
title: Modèle de page d'accueil d'API
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_landing_page_template
l10n:
  sourceCommit: 6aca3e5157dbc163fe8209d9bf8cc3f2e8ec3f9d
---

> [!NOTE]
> _Supprimez cette note explicative avant de publier_
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
> title: API NameOfTheAPI
> slug: Web/API/NameOfTheAPI_API
> page-type: web-api-overview
> status:
>   - deprecated
>   - experimental
>   - non-standard
> ---
> ```
>
> - **title**
>   - : Titre affiché en haut de la page.
>     Il s'agit du nom de l'API suivi du texte «&nbsp;API&nbsp;»&nbsp;: **API** _NameOfTheAPI_.
>     Par exemple, [WebXR Device](/fr/docs/Web/API/WebXR_Device_API) a pour titre _API WebXR Device_, [Fetch](/fr/docs/Web/API/Fetch_API) a pour titre _API Fetch_.
> - **slug**
>   - : La fin du chemin de l'URL après `https://developer.mozilla.org/fr/docs/`.
>     C'est formaté comme `Web/API/NameOfTheAPI_API`.
>     Par exemple, [l'API WebXR Device](/fr/docs/Web/API/WebVR_API) a pour slug `Web/API/WebXR_Device_API`.
> - **page-type**
>   - : La clé `page-type` pour les pages d'accueil Web/API est toujours `web-api-overview`.
> - **status**
>   - : Indicateurs décrivant le statut de cette fonctionnalité. Un tableau qui peut contenir un ou plusieurs des éléments suivants&nbsp;: `experimental`, `deprecated`, `non-standard`. Cette clé ne doit pas être définie manuellement&nbsp;: elle est définie automatiquement en fonction des valeurs dans les données de compatibilité des navigateurs pour la fonctionnalité. Voir [«&nbsp;Comment les statuts des fonctionnalités sont ajoutés ou mis à jour&nbsp;»](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour).
>
> ---
>
> **Macros en haut de page**
>
> Un certain nombre d'appels de macros apparaissent en haut de la section de contenu (immédiatement sous les métadonnées de la page).
>
> Ces macros sont ajoutées automatiquement par la chaîne d'outils (il n'est pas nécessaire de les ajouter/supprimer)&nbsp;:
>
> - `\{{SeeCompatTable}}` — cela génère une bannière **Ceci est une technologie expérimentale** qui indique que la technologie est [expérimentale](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#expérimental).
>   Si elle est expérimentale et que la technologie est cachée derrière une préférence dans Firefox, vous devez également remplir une entrée pour elle dans la page [Fonctionnalités expérimentales dans Firefox](/fr/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}` — cela génère une bannière **Obsolète** qui indique que l'utilisation de la technologie est [découragée](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#obsolète).
> - `\{{Non-standard_Header}}` — cela génère une bannière **Non standard** qui indique que la fonctionnalité ne fait partie d'aucune spécification.
>
> Vous devez mettre à jour ou supprimer les macros suivantes selon les conseils ci-dessous&nbsp;:
>
> - `\{{SecureContext_Header}}` — cela génère une bannière **Contexte sécurisé** qui indique que la technologie n'est disponible que dans un [contexte sécurisé](/fr/docs/Web/Security/Defenses/Secure_Contexts).
>   Si ce n'est pas le cas, vous pouvez supprimer l'appel de macro.
>   Si c'est le cas, vous devez également remplir une entrée pour elle dans la page [Fonctionnalités restreintes aux contextes sécurisés](/fr/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts).
> - `\{{AvailableInWorkers}}` — cela génère une note **Disponible dans les workers** qui indique que la technologie est disponible dans le [contexte des workers](/fr/docs/Web/API/Web_Workers_API).
>   Si elle n'est disponible que dans le contexte de la fenêtre, vous pouvez supprimer l'appel de macro.
>   Si elle est également disponible ou uniquement disponible dans le contexte des workers, vous devez également passer un paramètre en raison de sa disponibilité (voir le [code source des macros \\{{AvailableInWorkers}}](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) pour toutes les valeurs disponibles), vous devez également remplir une entrée pour elle dans la page [API Web disponibles dans les workers](/fr/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#les_api_web_disponibles_pour_les_workers).
> - `\{{APIRef("GroupDataName")}}` — cela génère la barre latérale de référence à gauche affichant des liens de référence rapide liés à la page actuelle.
>   Par exemple, chaque page de [l'API WebVR](/fr/docs/Web/API/WebVR_API) a la même barre latérale, qui pointe vers les autres pages de l'API.
>   Pour générer la barre latérale correcte pour votre API, vous devez ajouter une entrée `GroupData` à notre dépôt GitHub, et inclure le nom de l'entrée à l'intérieur de l'appel de macro à la place de _GroupDataName_.
>   Consultez notre guide sur les [barres latérales de référence API](/fr/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) pour obtenir des informations sur la façon de procéder.
>
> Ne fournissez pas manuellement les macros d'en-tête de statut. Reportez-vous à la section [«&nbsp;Comment les statuts des fonctionnalités sont ajoutés ou mis à jour&nbsp;»](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour) pour ajouter ces statuts à la page.
>
> Des exemples des bannières **Contexte sécurisé**, **Disponible dans les workers**, **Expérimental**, **Obsolète** et **Non standard** sont présentés juste après ce bloc de notes.
>
> ---
>
> **Compatibilité des navigateurs**
>
> Les pages de destination des API peuvent éventuellement avoir une section de compatibilité des navigateurs qui affiche des tableaux de compatibilité pour une ou plusieurs des interfaces les plus importantes de l'API. Si la compatibilité est similaire pour la plupart des interfaces de l'API, alors souvent un seul tableau de compatibilité est nécessaire. Si la compatibilité à travers l'API est compliquée/ impossible à capturer dans quelques tableaux, cette section doit être omise.
>
> Pour remplir la section de compatibilité des navigateurs, vous devez peut-être d'abord créer/mettre à jour des entrées pour les interfaces de l'API dans notre [dépôt de données de compatibilité des navigateurs](https://github.com/mdn/browser-compat-data) — voir notre [guide sur la façon de le faire](/fr/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Utilisez la macro `\{{Compat}}` pour ajouter des tableaux pour les informations de compatibilité des navigateurs.
>
> ---
>
> **Spécifications**
>
> Les pages de destination des API peuvent éventuellement avoir une section de spécifications qui répertorie les spécifications pertinentes pour chaque interface. Souvent, il n'y a qu'une seule spécification couvrant toutes les interfaces de l'API.
>
> Pour remplir la section des spécifications, vous devez peut-être d'abord créer/mettre à jour des entrées pour les interfaces dans le [dépôt de données de compatibilité des navigateurs](https://github.com/mdn/browser-compat-data) pour inclure les données de spécification — voir notre [guide sur la façon de le faire](/fr/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> Utilisez la macro `\{{Specifications}}` pour ajouter des tableaux pour les principales spécifications.
>
> ---
>
> _N'oubliez pas de supprimer cette note explicative avant de publier_

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Commencez le contenu de la page par un paragraphe introductif — commencez par nommer l'API et dire ce qu'elle fait. Cela doit idéalement être une ou deux phrases courtes.

## Concepts et utilisation

Dans cette section, décrivez l'objectif de l'API et ses cas d'utilisation de manière un peu plus détaillée — pourquoi un besoin a-t-il été reconnu pour elle&nbsp;?
Quels problèmes résout-elle&nbsp;? Quels concepts implique-t-elle&nbsp;? Comment l'utiliser, d'un point de vue général&nbsp;?

N'entrez pas dans les détails dans cette section et n'incluez pas d'exemples de code.
S'il y a beaucoup de concepts à expliquer autour de cette API, vous deviez les expliquer dans un article séparé «&nbsp;Fondamentaux&nbsp;» ou «&nbsp;Concepts&nbsp;» (par exemple, [Fondamentaux de WebXR](/fr/docs/Web/API/WebXR_Device_API/Fundamentals)).
Pour un guide pratique avec des exemples de code, vous deviez inclure un article «&nbsp;Utilisation…&nbsp;» dans votre documentation API (par exemple, [Utilisation de l'API WebVR](/fr/docs/Web/API/WebVR_API/Using_the_WebVR_API)).

## Guides

Ajoutez une liste des pages de guide sous cette page d'accueil. Chaque DT doit être lié à la page de guide. Cette section est facultative&nbsp;; s'il n'y a qu'un seul guide "Utilisation", ainsi que quelques autres guides conceptuels, vous pouvez trouver plus pratique de les lier sous forme de paragraphe à la fin de la section "Concepts et utilisation". Cette section peut être plus utile s'il y a tellement de guides que le texte devient difficile à parcourir.

- Utiliser l'API ...
  - : Paragraphe d'introduction de cette page de guide
- Guide 2
  - : Paragraphe d'introduction de cette page de guide

## Interfaces

_Pour utiliser la [macro domxref](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#lien_vers_des_pages_de_référence), supprimez les accents inversés et l'antislash dans le fichier markdown._

- `\{{DOMxRef("NameOfTheInterface")}}`
  - : Incluez une brève description de l'interface et de ce qu'elle fait ici.
    Incluez un terme et une définition pour chaque interface ou dictionnaire.

### Extensions à d'autres interfaces

Le _nom de l'interface_ étend les API suivantes, ajoutant les fonctionnalités listées.

#### Interface 1

- `\{{DOMxRef("addition1")}}`
  - : Description de la fonctionnalité de l'Interface#1 qui est ajoutée à cette API par l'API que vous documentez actuellement.
    Un terme et une définition pour chaque fonctionnalité. Si cette API n'étend aucune autre interface, vous pouvez supprimer ces sections.

#### Interface 2

- `\{{DOMxRef("addition1")}}`
  - : Description de la fonctionnalité de l'Interface#2 qui est ajoutée à cette API par l'API que vous documentez actuellement, etc.

## Exemples

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
> N'ajoutez pas de titres H3&nbsp;; ajoutez simplement les liens directement sous le titre H2 "Exemples". Par exemple&nbsp;:
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
