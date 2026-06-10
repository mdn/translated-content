---
title: Modèle de sous-page d'évènement d'API
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template
l10n:
  sourceCommit: 1d08cee771feea858e4fdb594bac036b9cd210a6
---

> [!NOTE]
> _Supprimez cette note explicative avant la publication_
>
> ---
>
> **Page de garde&nbsp;:**
>
> Les métadonnées en haut de la page sont utilisées pour définir les «&nbsp;métadonnées de la page&nbsp;».
> Les valeurs doivent être mises à jour de manière appropriée pour l'évènement particulier.
>
> ```md
> ---
> title: "NameOfTheParentInterface : évènement NameOfTheEvent"
> slug: Web/API/NameOfTheParentInterface/NameOfTheEvent_event
> page-type: web-api-event
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheEvent_event
> ---
> ```
>
> - **title**
>   - : Titre affiché en haut de la page.
>     Format&nbsp;: `NameOfTheParentInterface : évènement NameOfTheEvent`.
>     Par exemple, l'évènement [`animationcancel`](/fr/docs/Web/API/Element/animationcancel_event) de l'interface [`Window`](/fr/docs/Web/API/Window) a un _titre_ de `Window : évènement animationcancel`.
> - **slug**
>   - : La fin du chemin URL après `https://developer.mozilla.org/fr/docs/`.
>     C'est formaté comme `Web/API/NameOfTheParentInterface/NameOfTheEvent_event`.
> - **page-type**
>   - : La clé `page-type` pour les évènements Web/API est toujours `web-api-event`.
> - **status**
>   - : Indicateurs décrivant le statut de cette fonctionnalité. Un tableau pouvant contenir un ou plusieurs des éléments suivants&nbsp;: `experimental`, `deprecated`, `non-standard`. Cette clé ne doit pas être définie manuellement&nbsp;: elle est définie automatiquement en fonction des valeurs dans les données de compatibilité des navigateurs pour la fonctionnalité. Voir ["Comment les statuts des fonctionnalités sont ajoutés ou mis à jour"](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour).
> - **browser-compat**
>   - : Remplacez la valeur de l'espace réservé `path.to.feature.NameOfTheEvent_event` par la chaîne de caractères de requête pour l'évènement dans le [dépôt de données de compatibilité des navigateurs](https://github.com/mdn/browser-compat-data).
>     L'outil utilise automatiquement la clé pour remplir les sections de compatibilité et de spécification (en remplaçant les macros `\{{Compat}}` et `\{{Specifications}}`).
>
>     Notez que vous devez peut-être d'abord créer/met à jour une entrée pour l'évènement dans notre [dépôt de données de compatibilité des navigateurs](https://github.com/mdn/browser-compat-data), et cette entrée doit inclure des informations sur la spécification.
>     Consultez notre [guide sur la façon de procéder](/fr/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
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
> Vous devez mettre à jour ou supprimer les macros suivantes selon les conseils ci-dessous :
>
> - `\{{SecureContext_Header}}` — cela génère une bannière **Contexte sécurisé** qui indique que la technologie n'est disponible que dans un [contexte sécurisé](/fr/docs/Web/Security/Defenses/Secure_Contexts).
>   Si ce n'est pas le cas, vous pouvez supprimer l'appel de macro.
>   Si c'est le cas, vous devez également remplir une entrée pour elle dans la page [Fonctionnalités restreintes aux contextes sécurisés](/fr/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts).
> - `\{{AvailableInWorkers}}` — cela génère une note **Disponible dans les workers** qui indique que la technologie est disponible dans le [contexte des workers](/fr/docs/Web/API/Web_Workers_API).
>   Si elle n'est disponible que dans le contexte de la fenêtre, vous pouvez supprimer l'appel de macro.
>   Si elle est également disponible ou uniquement disponible dans le contexte des workers, vous devez peut-être passer un paramètre en raison de sa disponibilité (voir le [code source des macros \\{{AvailableInWorkers}}](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) pour toutes les valeurs disponibles), vous devez peut-être également remplir une entrée pour elle dans la page [API Web disponibles dans les workers](/fr/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#les_api_web_disponibles_pour_les_workers).
> - `\{{APIRef("GroupDataName")}}` — cela génère la barre latérale de référence à gauche affichant des liens de référence rapide liés à la page actuelle.
>   Par exemple, chaque page de [l'API WebVR](/fr/docs/Web/API/WebVR_API) a la même barre latérale, qui pointe vers les autres pages de l'API.
>   Pour générer la barre latérale correcte pour votre API, vous devez ajouter une entrée `GroupData` à notre dépôt GitHub, et inclure le nom de l'entrée à l'intérieur de l'appel de macro à la place de _GroupDataName_.
>   Consultez notre guide sur les [barres latérales de référence API](/fr/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) pour obtenir des informations sur la façon de procéder.
>
> Ne fournissez pas manuellement les macros d'en-tête de statut. Reportez-vous à la section [«&nbsp;Comment les statuts des fonctionnalités sont ajoutés ou mis à jour&nbsp;»](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour) pour ajouter ces statuts à la page.
>
> Des exemples des bannières **Contexte sécurisé**, **Disponible dans les workers**, **Expérimental**, **Obsolète** et **Non standard** sont affichés juste après ce bloc de notes.
>
> ---
>
> **Lien vers l'objet parent**
>
> Ajoutez un lien vers cette nouvelle page depuis la section _Évènements_ de l'objet parent.
> Par exemple, [Element&nbsp;: évènement wheel](/fr/docs/Web/API/Element/wheel_event) est lié depuis [Évènements `Element`](/fr/docs/Web/API/Element#events).
>
> Si l'objet parent n'a pas de section _Évènements_, ajoutez-en une.
> Si c'est une nouvelle «&nbsp;classe&nbsp;» d'évènement, vous devez ajouter un lien vers cette section du parent depuis le guide [Évènements DOM](/fr/docs/Web/API/Document_Object_Model/Events#event_index).
>
> _N'oubliez pas de supprimer cette note explicative avant de publier._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Commencez le contenu de la page par un paragraphe introductif — commencez par nommer l'évènement, indiquez à quelle interface il appartient et expliquez ce qu'il fait.
Idéalement, cela doit être une ou deux phrases courtes.
Vous pouvez copier la plupart de ces informations à partir du résumé de la propriété sur la page de référence API correspondante.

## Syntax

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("NameOfTheEvent", (event) => { })

onNameOfTheEvent = (event) => { }
```

## Type d'évènement

Si l'évènement a un type spécial, mentionnez-le ainsi que son héritage. Sinon, indiquez qu'il s'agit d'un évènement générique&nbsp;:

_Un {{DOMxRef("Event")}} générique._

Ou, par exemple&nbsp;:

_Un {{DOMxRef("XRSessionEvent")}}. Hérite de {{DOMxRef("Event")}}._

{{InheritanceDiagram("XRSessionEvent")}}

## Description

Si vous souhaitez fournir un texte supplémentaire (trop long pour le résumé), ajoutez une section Description.
Elle peut contenir les titres

### Déclenchement

et

### Cas d'utilisation

qui peuvent fournir plus d'informations.

## Exemples

Notez que nous utilisons le pluriel «&nbsp;Exemples&nbsp;» même si la page ne contient qu'un seul exemple.

### Un titre descriptif

Chaque exemple doit avoir un titre H3 (`###`) nommant l'exemple. Le titre doit être descriptif de ce que fait l'exemple. Par exemple, «&nbsp;Un exemple simple&nbsp;» ne dit rien sur l'exemple et n'est donc pas un bon titre. Le titre doit être concis. Pour une description plus longue, utilisez le paragraphe après le titre.

Voir notre guide sur la façon d'ajouter des [exemples de code](/fr/docs/MDN/Writing_guidelines/Page_structures/Code_examples) pour plus d'informations.

> [!NOTE]
> Parfois, vous pouvez vouloir créer un lien vers des exemples donnés sur une autre page.
>
> **Scénario 1&nbsp;:** Si vous avez des exemples sur cette page et d'autres exemples sur une autre page&nbsp;:
>
> Incluez un titre H3 (`###`) pour chaque exemple sur cette page, puis un dernier titre H3 (`###`) avec le texte "Plus d'exemples", sous lequel vous pouvez créer des liens vers les exemples sur d'autres pages. Par exemple&nbsp;:
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

_Pour utiliser cette macro, supprimez les accents inversés et la barre oblique inverse dans le fichier markdown._

## Compatibilité des navigateurs

`\{{Compat}}`

_Pour utiliser cette macro, supprimez les accents inversés et la barre oblique inverse dans le fichier markdown._

## Voir aussi

Incluez des liens vers des pages de référence et des guides liés à l'API actuelle. Pour plus de directives, consultez la section [Voir aussi](/fr/docs/MDN/Writing_guidelines/Writing_style_guide#section_«_voir_aussi_») du _Guide de style d'écriture_.

- lien1
- lien2
- lien_externe (année)
