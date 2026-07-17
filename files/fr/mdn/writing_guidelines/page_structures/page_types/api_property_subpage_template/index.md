---
title: Modèle de sous-page de propriété d'API
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template
l10n:
  sourceCommit: 8d9cda4e9080e9c324a521f40c7e0704ef94ce07
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
> title: "NameOfTheParentInterface : propriété NameOfTheProperty"
> short-title: NameOfTheProperty
> slug: Web/API/NameOfTheParentInterface/NameOfTheProperty
> page-type: web-api-instance-property OR web-api-static-property
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheProperty
> ---
> ```
>
> - **title**
>   - : Titre affiché en haut de la page.
>     Formaté comme "NameOfTheParentInterface : propriété NameOfTheProperty".
>     Par exemple, la propriété [`capabilities`](/fr/docs/Web/API/VRDisplay/capabilities) de l'interface [`VRDisplay`](/fr/docs/Web/API/VRDisplay) a un `title` de `VRDisplay : propriété capabilities`.
> - **short-title**
>   - : Le nom de la propriété (utilisé dans la barre latérale).
> - **slug**
>   - : La fin du chemin de l'URL après `https://developer.mozilla.org/fr/docs/`.
>     C'est formaté comme `Web/API/NameOfTheParentInterface/NameOfTheProperty`.
>
>     Si la propriété est statique, le slug doit avoir un suffixe `_static`, comme&nbsp;: `Web/API/NameOfTheParentInterface/NameOfTheProperty_static`. Cela nous permet de prendre en charge les propriétés d'instance et statiques qui ont le même nom.
> - **page-type**
>   - : La clé `page-type` pour les propriétés Web/API est soit `web-api-instance-property` (pour les propriétés d'instance) soit `web-api-static-property` (pour les propriétés statiques).
> - **status**
>   - : Indicateurs décrivant le statut de cette fonctionnalité. Un tableau qui peut contenir un ou plusieurs des éléments suivants&nbsp;: `experimental`, `deprecated`, `non-standard`. Cette clé ne doit pas être définie manuellement&nbsp;: elle est définie automatiquement en fonction des valeurs dans les données de compatibilité des navigateurs pour la fonctionnalité. Voir [«&nbsp;Comment les statuts des fonctionnalités sont ajoutés ou mis à jour&nbsp;»](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour).
> - **browser-compat**
>   - : Remplacez la valeur de l'espace réservé `path.to.feature.NameOfTheProperty` par la chaîne de requête pour la propriété dans le [dépôt de données de compatibilité des navigateurs <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data).
>     La chaîne d'outils utilise automatiquement la clé pour remplir les sections de compatibilité et de spécification (en remplaçant les macros `\{{Compat}}` et `\{{Specifications}}`).
>
>     Notez que vous devez d'abord créer/mette à jour une entrée pour la propriété API dans notre [dépôt de données de compatibilité des navigateurs <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data), et l'entrée pour l'API doit inclure des informations sur la spécification.
>     Consultez notre [guide sur la façon de le faire](/fr/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Macros en haut de page**
>
> Un certain nombre d'appels de macros apparaissent en haut de la section de contenu (immédiatement sous les métadonnées de la page).
>
> Ces macros sont ajoutées automatiquement par la chaîne d'outils (il n'est pas nécessaire de les ajouter/supprimer)&nbsp;:
>
> - `\{{SeeCompatTable}}` — génère une bannière **Ceci est une technologie expérimentale** qui indique que la technologie est [expérimentale](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#expérimental).
>   Si elle est expérimentale et que la technologie est cachée derrière une préférence dans Firefox, vous devez également remplir une entrée pour elle dans la page [Fonctionnalités expérimentales dans Firefox](/fr/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}` — génère une bannière **Obsolète** qui indique que l'utilisation de la technologie est [découragée](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#obsolète).
> - `\{{Non-standard_Header}}` — génère une bannière **Non standard** qui indique que la fonctionnalité ne fait partie d'aucune spécification.
>
> Vous devez mettre à jour ou supprimer les macros suivantes selon les conseils ci-dessous&nbsp;:
>
> - `\{{SecureContext_Header}}` — génère une bannière **Contexte sécurisé** qui indique que la technologie n'est disponible que dans un [contexte sécurisé](/fr/docs/Web/Security/Defenses/Secure_Contexts).
>   Si ce n'est pas le cas, vous pouvez supprimer l'appel de la macro.
>   Si c'est le cas, vous devez également remplir une entrée pour elle dans la page [Fonctionnalités restreintes aux contextes sécurisés](/fr/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts).
> - `\{{AvailableInWorkers}}` — génère une note **Disponible dans les workers** qui indique que la technologie est disponible dans un [contexte worker](/fr/docs/Web/API/Web_Workers_API).
>   Si elle n'est disponible que dans le contexte window, vous pouvez supprimer l'appel de la macro.
>   Si elle est également disponible ou uniquement disponible dans le contexte worker, vous devez passer un paramètre en raison de sa disponibilité (voir le [code source des macros \\{{AvailableInWorkers}} <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) pour toutes les valeurs disponibles), vous devez également remplir une entrée pour elle dans la page [API Web disponibles dans les workers](/fr/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#les_api_web_disponibles_pour_les_workers).
> - `\{{APIRef("GroupDataName")}}` — génère la barre latérale de référence à gauche affichant des liens de référence rapide liés à la page actuelle.
>   Par exemple, chaque page de [l'API WebVR](/fr/docs/Web/API/WebVR_API) a la même barre latérale, qui pointe vers les autres pages de l'API.
>   Pour générer la barre latérale correcte pour votre API, vous devez ajouter une entrée `GroupData` à notre dépôt GitHub, et inclure le nom de l'entrée dans l'appel de la macro à la place de _GroupDataName_.
>   Consultez notre guide sur les [barres latérales de référence API](/fr/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) pour plus d'informations.
>   Ne fournissez pas manuellement les macros d'en-tête de statut. Reportez-vous à la section Voir [«&nbsp;Comment les statuts des fonctionnalités sont ajoutés ou mis à jour&nbsp;»](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour) pour ajouter ces statuts à la page.
>
> Des exemples des bannières **Contexte sécurisé**, **Disponible dans les workers**, **Expérimental**, **Obsolète** et **Non standard** sont présentés juste après ce bloc de notes.
>
> _N'oubliez pas de supprimer cette note explicative avant de publier._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

La propriété [en lecture seule] **`NameOfTheProperty`** de l'interface \{{DOMxRef("NameOfTheParentInterface")}} _\<fournir un résumé concis du comportement\>_.

_Commencez par nommer la propriété (en indiquant si elle est en lecture seule ou non) et l'interface à laquelle elle appartient, puis indiquez ce qu'elle fait._

_Cela doit idéalement être une ou deux phrases courtes._
_Si vous avez besoin de plus de quelques paragraphes, cela doit être ajouté dans une section «&nbsp;Description&nbsp;» placée avant la section «&nbsp;Exemples&nbsp;»._

## Valeurs

Un \{{DOMxRef("TypeDeDonnée")}}.

_Normalement, il s'agit simplement du type de données, et des valeurs autorisées pour ce type de données si pertinent._
_Si la propriété a un comportement différent pour le mutateur et l'accesseur, ceux-ci doivent normalement être couverts dans des phrases séparées._

_Dans certains cas, vous pouvez vouloir en dire plus sur ce que représente le type de données._
_Cela est acceptable, mais ne doit pas dupliquer les informations de la section «&nbsp;Description&nbsp;» (vous devez inclure des informations sur ce que signifie la valeur dans cette section)._

_Notez que certaines pages de propriétés sont rédigées sous la forme "Retourne un [nom du type de propriété] représentant...", mais ce n'est pas la forme recommandée.
De plus, certains attributs étendus WebIDL avec des significations spécifiques peuvent être associés au type. Il existe des moyens standard de les documenter&nbsp;; consultez [Informations contenues dans un fichier WebIDL](/fr/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file#type_de_la_propriété) pour plus d'informations._

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
