---
title: Modèle de sous-page de référence d'API
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template
l10n:
  sourceCommit: 6aca3e5157dbc163fe8209d9bf8cc3f2e8ec3f9d
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
> title: NameOfTheInterface
> slug: Web/API/NameOfTheInterface
> page-type: web-api-interface
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheInterface
> ---
> ```
>
> - **title**
>   - : Titre affiché en haut de la page. Il s'agit simplement du nom de l'interface. Par exemple, la page de l'interface [`Request`](/fr/docs/Web/API/Request) a un _titre_ de _Request_.
> - **slug**
>   - : La fin du chemin de l'URL après `https://developer.mozilla.org/fr/docs/`. C'est formaté comme `Web/API/NameOfTheParentInterface`. Par exemple, le slug de [Request](/fr/docs/Web/API/Request) est `Web/API/Request`.
> - **page-type**
>   - : La clé `page-type` pour les interfaces Web/API est toujours `web-api-interface`.
> - **status**
>   - : Indique l'état de cette fonctionnalité. Il s'agit d'un tableau pouvant contenir une ou plusieurs des valeurs suivantes&nbsp;: `experimental`, `deprecated`, `non-standard`. Cette clé ne doit pas être définie manuellement&nbsp;: elle est définie automatiquement en fonction des valeurs dans les données de compatibilité des navigateurs pour la fonctionnalité. Voir ["Comment les statuts des fonctionnalités sont ajoutés ou mis à jour"](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour).
> - **browser-compat**
>   - : Remplacez la valeur de l'espace réservé `path.to.feature.NameOfTheMethod` par la chaîne de requête pour la méthode dans le [dépôt de données de compatibilité des navigateurs <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data). La chaîne d'outils utilise automatiquement la clé pour remplir les sections de compatibilité et de spécification (en remplaçant les macros `\{{Compat}}` et `\{{Specifications}}`).
>
> Notez que vous devez d'abord créer/met à jour une entrée pour la méthode API dans notre [dépôt de données de compatibilité des navigateurs <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data), et l'entrée pour l'API doit inclure des informations sur la spécification.
>
> Consultez notre [guide sur la façon de procéder](/fr/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> ---
>
> **Macros en haut de page**
>
> Un certain nombre d'appels de macros apparaissent en haut de la section de contenu (immédiatement sous les métadonnées de la page).
>
> Ces macros sont ajoutées automatiquement par la chaîne d'outils (il n'est pas nécessaire de les ajouter/supprimer)&nbsp;:
>
> - `\{{SeeCompatTable}}` — cela génère une bannière **Ceci est une technologie expérimentale** qui indique que la technologie est [expérimentale](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#expérimental). Si elle est expérimentale et que la technologie est cachée derrière une préférence dans Firefox, vous devez également remplir une entrée pour elle dans la page [Fonctionnalités expérimentales dans Firefox](/fr/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}` — cela génère une bannière **Obsolète** qui indique que la technologie est [obsolète](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#obsolète).
> - `\{{Non-standard_Header}}` — cela génère une bannière **Non standard** qui indique que la fonctionnalité ne fait partie d'aucune spécification.
>
> Vous devez mettre à jour ou supprimer les macros suivantes selon les conseils ci-dessous&nbsp;:
>
> - `\{{SecureContext_Header}}` — cela génère une bannière **Contexte sécurisé** qui indique que la technologie n'est disponible que dans un [contexte sécurisé](/fr/docs/Web/Security/Defenses/Secure_Contexts). Si ce n'est pas le cas, vous pouvez supprimer l'appel de macro. Si c'est le cas, vous devez également remplir une entrée pour elle dans la page [Fonctionnalités restreintes aux contextes sécurisés](/fr/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts).
> - `\{{AvailableInWorkers}}` — cela génère une note **Disponible dans les workers** qui indique que la technologie est disponible dans un [contexte worker](/fr/docs/Web/API/Web_Workers_API).
>   Si elle n'est disponible que dans le contexte window, vous pouvez supprimer l'appel de macro.
>   Si elle est également disponible ou uniquement disponible dans le contexte worker, vous devez passer un paramètre en raison de sa disponibilité (voir le [code source des macros \\{{AvailableInWorkers}} <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) pour toutes les valeurs disponibles), vous devez également remplir une entrée pour elle dans la page [API Web disponibles dans les workers](/fr/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#les_api_web_disponibles_pour_les_workers).
> - `\{{APIRef("GroupDataName")}}` — cela génère la barre latérale de référence à gauche affichant des liens de référence rapide liés à la page actuelle. Par exemple, chaque page de [l'API WebVR](/fr/docs/Web/API/WebVR_API) a la même barre latérale, qui pointe vers les autres pages de l'API. Pour générer la barre latérale correcte pour votre API, vous devez ajouter une entrée GroupData et inclure le nom de l'entrée dans l'appel de macro à la place de _GroupDataName_. Consultez notre guide sur les [barres latérales de référence API](/fr/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) pour plus d'informations.
>
> Ne fournissez pas manuellement les macros d'en-tête de statut. Reportez-vous à la section ["Comment les statuts des fonctionnalités sont ajoutés ou mis à jour"](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour) pour ajouter ces statuts à la page.
>
> Des exemples des bannières **Contexte sécurisé**, **Disponible dans les workers**, **Expérimental**, **Obsolète** et **Non standard** sont présentés juste après ce bloc de notes.
>
> _N'oubliez pas de supprimer cette note explicative avant de publier._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Le paragraphe de résumé — commencez par nommer l'interface, en indiquant à quelle API elle appartient et ce qu'elle fait. Idéalement, cela doit être une ou deux phrases courtes. Vous pouvez copier la plupart de ces informations à partir du résumé de l'interface sur la page de destination correspondante de l'API.

`\{{InheritanceDiagram}}`

_Pour utiliser la [macro domxref](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros#lien_vers_des_pages_de_référence) dans les sections ci-dessous, supprimez les accents inversés et l'antislash dans le fichier markdown._

## Constructeurs

- `\{{DOMxRef("NameOfTheInterface.NameOfTheInterface", "NameOfTheInterface()")}}`
  - : Crée une nouvelle instance de l'objet `NameOfTheInterface`.

## Propriétés statiques

_Hérite également des propriétés de son interface parente, `\{{DOMxRef("NameOfParentInterface")}}`._ (Remarque&nbsp;: si l'interface n'hérite pas d'une autre interface, supprimez cette ligne entière.)

Incluez un terme et une définition pour chaque propriété.

- `\{{DOMxRef("NameOfTheInterface.staticProperty1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Incluez une brève description de la propriété et de ce qu'elle fait ici. Si la propriété n'est pas en lecture seule/expérimentale/obsolète/non standard, supprimez les appels de macro correspondants.
- `\{{DOMxRef("NameOfTheInterface.staticProperty2")}}`
  - : Incluez une brève description de la propriété et de ce qu'elle fait ici. Si la propriété n'est pas en lecture seule/expérimentale/obsolète/non standard, supprimez les appels de macro correspondants.

## Propriétés d'instance

_Hérite également des propriétés de son interface parente, `\{{DOMxRef("NameOfParentInterface")}}`._ (Remarque&nbsp;: si l'interface n'hérite pas d'une autre interface, supprimez cette ligne entière.)

Incluez un terme et une définition pour chaque propriété.

- `\{{DOMxRef("NameOfTheInterface.property1")}}` {{ReadOnlyInline}} {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Incluez une brève description de la propriété et de ce qu'elle fait ici. Si la propriété n'est pas en lecture seule/expérimentale/obsolète/non standard, supprimez les appels de macro correspondants.
- `\{{DOMxRef("NameOfTheInterface.property2")}}`
  - : Incluez une brève description de la propriété et de ce qu'elle fait ici. Si la propriété n'est pas en lecture seule/expérimentale/obsolète/non standard, supprimez les appels de macro correspondants.

## Méthodes statiques

_Hérite également des méthodes de son interface parente, `\{{DOMxRef("NameOfParentInterface")}}`._ (Remarque&nbsp;: si l'interface n'hérite pas d'une autre interface, supprimez cette ligne entière.)

Incluez un terme et une définition pour chaque méthode.

- `\{{DOMxRef("NameOfTheInterface.staticMethod1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Incluez une brève description de la méthode et de ce qu'elle fait ici. Si la méthode n'est pas expérimentale/obsolète/non standard, supprimez les appels de macro correspondants.
- `\{{DOMxRef("NameOfTheInterface.staticMethod2()")}}`
  - : Incluez une brève description de la méthode et de ce qu'elle fait ici. Si la méthode n'est pas expérimentale/obsolète/non standard, supprimez les appels de macro correspondants.

## Méthodes d'instance

_Hérite également des méthodes de son interface parente, `\{{DOMxRef("NameOfParentInterface")}}`._ (Remarque&nbsp;: si l'interface n'hérite pas d'une autre interface, supprimez cette ligne entière.)

Incluez un terme et une définition pour chaque méthode.

- `\{{DOMxRef("NameOfTheInterface.method1()")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Incluez une brève description de la méthode et de ce qu'elle fait ici. Si la méthode n'est pas expérimentale/obsolète/non standard, supprimez les appels de macro correspondants.
- `\{{DOMxRef("NameOfTheInterface.method2()")}}`
  - : Incluez une brève description de la méthode et de ce qu'elle fait ici. Si la méthode n'est pas expérimentale/obsolète/non standard, supprimez les appels de macro correspondants.

## Évènements

_Hérite également des évènements de son interface parente, `\{{DOMxRef("NameOfParentInterface")}}`._ (Remarque&nbsp;: si l'interface n'hérite pas d'une autre interface, supprimez cette ligne entière.)

Écoutez ces évènements en utilisant {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} ou en assignant un écouteur d'évènements à la propriété `oneventname` de cette interface.

- `\{{DOMxRef("NameOfTheInterface.event1", "event1")}}` {{Experimental_Inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Déclenché lorsque (incluez la description de l'évènement).
    Disponible également avec la propriété `oneventname1`.
    Si l'évènement n'est pas expérimental/obsolète/non standard, supprimez les appels de macro correspondants.
- `\{{DOMxRef("NameOfTheInterface.event2", "event2")}}`
  - : Déclenché lorsque (incluez la description de l'évènement).
    Disponible également avec la propriété `oneventname2`.
    Si l'évènement n'est pas expérimental/obsolète/non standard, supprimez les appels de macro correspondants.

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
