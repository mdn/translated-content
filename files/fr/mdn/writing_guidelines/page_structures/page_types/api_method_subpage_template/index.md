---
title: Modèle de sous-page de méthode d'API
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
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
> title: "NameOfTheParentInterface : méthode NameOfTheMethod()"
> slug: Web/API/NameOfTheParentInterface/NameOfTheMethod
> page-type: web-api-instance-method OR web-api-static-method
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheMethod
> ---
> ```
>
> - **title**
>   - : Titre affiché en haut de la page.
>     Format : `"NameOfTheParentInterface : méthode NameOfTheMethod()"`.
>     Par exemple, la méthode [`count()`](/fr/docs/Web/API/IDBIndex/count) de l'interface [IDBIndex](/fr/docs/Web/API/IDBIndex) a un _titre_ de `IDBIndex : méthode count()`.
> - **slug**
>   - : La fin du chemin URL après `https://developer.mozilla.org/fr/docs/`.
>     C'est formaté comme `Web/API/NameOfTheParentInterface/NameOfTheMethod`.
>
>     Si la méthode est statique, le slug doit avoir un suffixe `_static`, comme&nbsp;: `Web/API/NameOfTheParentInterface/NameOfTheMethod_static`. Cela nous permet de prendre en charge les méthodes d'instance et les méthodes statiques qui ont le même nom.
>
>     Notez que le nom de la méthode dans le slug omet les parenthèses (il se termine par `NameOfTheMethod` et non `NameOfTheMethod()`).
>
> - **page-type**
>   - : La clé `page-type` pour les méthodes Web/API est soit `web-api-instance-method` (pour les méthodes d'instance) soit `web-api-static-method` (pour les méthodes statiques).
> - **status**
>   - : Indicateurs décrivant le statut de cette fonctionnalité. Un tableau qui peut contenir un ou plusieurs des éléments suivants&nbsp;: `experimental`, `deprecated`, `non-standard`. Cette clé ne doit pas être définie manuellement&nbsp;: elle est définie automatiquement en fonction des valeurs dans les données de compatibilité des navigateurs pour la fonctionnalité. Voir [«&nbsp;Comment les statuts des fonctionnalités sont ajoutés ou mis à jour&nbsp;»](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour).
> - **browser-compat**
>   - : Remplacez la valeur de l'espace réservé `path.to.feature.NameOfTheMethod` par la chaîne de requête pour la méthode dans le [dépôt de données de compatibilité des navigateurs <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data).
>     La chaîne de l'outil utilise automatiquement la clé pour remplir les sections de compatibilité et de spécification (en remplaçant les macros `\{{Compat}}` et `\{{Specifications}}`).
>
>     Notez que vous devez d'abord créer/met à jour une entrée pour la méthode API dans notre [dépôt de données de compatibilité des navigateurs <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data), et l'entrée pour l'API doit inclure des informations sur la spécification.
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
> - `\{{SeeCompatTable}}` — cela génère une bannière **Ceci est une technologie expérimentale** qui indique que la technologie est [expérimentale](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#expérimental).
>   Si elle est expérimentale et que la technologie est cachée derrière une préférence dans Firefox, vous devez également remplir une entrée pour elle dans la page [Fonctionnalités expérimentales dans Firefox](/fr/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}` — cela génère une bannière **Obsolète** qui indique que l'utilisation de la technologie est [découragée](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#obsolète).
> - `\{{Non-standard_Header}}` — cela génère une bannière **Non standard** qui indique que la fonctionnalité ne fait partie d'aucune spécification.
>
> Vous devez mettre à jour ou supprimer les macros suivantes selon les conseils ci-dessous&nbsp;:
>
> - `\{{SecureContext_Header}}` — cela génère une bannière **Contexte sécurisé** qui indique que la technologie n'est disponible que dans un [contexte sécurisé](/fr/docs/Web/Security/Defenses/Secure_Contexts).
>   Si ce n'est pas le cas, vous pouvez supprimer l'appel de la macro.
>   Si c'est le cas, vous devez également remplir une entrée pour elle dans la page [Fonctionnalités restreintes aux contextes sécurisés](/fr/docs/Web/Security/Defenses/Secure_Contexts/features_restricted_to_secure_contexts).
> - `\{{AvailableInWorkers}}` — cela génère une note **Disponible dans les workers** qui indique que la technologie est disponible dans un [contexte worker](/fr/docs/Web/API/Web_Workers_API).
>   Si elle n'est disponible que dans le contexte window, vous pouvez supprimer l'appel de la macro.
>   Si elle est également disponible ou uniquement disponible dans le contexte worker, vous devez passer un paramètre en raison de sa disponibilité (voir le [code source des macros \\{{AvailableInWorkers}} <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) pour toutes les valeurs disponibles), vous devez également remplir une entrée pour elle dans la page [APIs Web disponibles dans les workers](/fr/docs/Web/API/Web_Workers_API/Functions_and_classes_available_to_workers#les_api_web_disponibles_pour_les_workers).
> - `\{{APIRef("GroupDataName")}}` — cela génère la barre latérale de référence à gauche affichant des liens de référence rapide liés à la page actuelle.
>   Par exemple, chaque page de [l'API WebVR](/fr/docs/Web/API/WebVR_API) a la même barre latérale, qui pointe vers les autres pages de l'API.
>   Pour générer la barre latérale correcte pour votre API, vous devez ajouter une entrée `GroupData` à notre dépôt GitHub, et inclure le nom de l'entrée dans l'appel de la macro à la place de _GroupDataName_.
>   Consultez notre guide sur les [barres latérales de référence API](/fr/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Sidebars) pour plus d'informations.
>   Ne fournissez pas manuellement les macros d'en-tête de statut. Reportez-vous à la section Voir [«&nbsp;Comment les statuts des fonctionnalités sont ajoutés ou mis à jour&nbsp;»](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour) pour ajouter ces statuts à la page.
>
> Des exemples des bannières **Contexte sécurisé**, **Disponible dans les workers**, **Expérimental**, **Obsolète** et **Non standard** sont présentés juste après ce bloc de notes.
>
> _N'oubliez pas de supprimer cette note explicative avant de publier._

{{SecureContext_Header}}{{AvailableInWorkers}}{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Commencez le contenu de la page par un paragraphe introductif — commencez par nommer la méthode, en indiquant à quelle interface elle appartient et ce qu'elle fait.
Cela doit idéalement être une ou deux phrases courtes. Vous pouvez copier la plupart de ces informations à partir du résumé de la méthode sur la page de référence API correspondante.

## Syntaxe

Remplissez une boîte de syntaxe, conformément aux directives de notre article sur les [sections de syntaxe](/fr/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).

### Paramètres

- `parameter1` {{Optional_Inline}}
  - : Incluez une brève description du paramètre et de ce qu'il fait ici. Incluez un terme et une définition pour chaque paramètre. Si le paramètre n'est pas optionnel, supprimez l'appel de la macro \\{{Optional_Inline}}.
- `parameter2`
  - : etc.

> [!NOTE]
> Cette section est obligatoire. S'il n'y a pas de paramètres, mettez `None.` à la place de la liste de définitions.

### Valeur de retour

Incluez une description de la valeur de retour de la méthode, y compris le type de données et ce qu'elle représente.

Si la méthode ne retourne rien, mettez simplement «&nbsp;Aucune ({{JSxRef("undefined")}}).&nbsp;».

### Exceptions

Incluez une liste de toutes les exceptions que la méthode peut lever. Incluez un terme et une définition pour chaque exception.

- `Exception1`
  - : Incluez des descriptions de la manière dont l'exception est levée.
- `Exception2`
  - : Incluez des descriptions de la manière dont l'exception est levée.

Notez que nous avons deux types d'exceptions&nbsp;: les objets {{DOMxRef("DOMException")}} et les exceptions JavaScript classiques, comme {{JSxRef("TypeError")}} et {{JSxRef("RangeError")}}. Un·e développeur·euse web doit savoir&nbsp;:

- quel objet est levé
- pour les exceptions qui sont des objets `DOMException`, le `name` de l'exception.

Voici un exemple où une méthode peut lever un `DOMException` avec un nom de `IndexSizeError`, un second `DOMException` avec un nom de `InvalidNodeTypeError` et une exception JavaScript de type `TypeError`&nbsp;:

- `IndexSizeError` {{DOMxRef("DOMException")}}
  - : Levée …
- `InvalidNodeTypeError` {{DOMxRef("DOMException")}}
  - : Levée …
- {{JSxRef("TypeError")}}
  - : Levée …

## Description

_Une description détaillée de la manière dont la méthode se comporte_
_Section omise si un ou deux paragraphes introductifs en haut de la page sont suffisants._

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
