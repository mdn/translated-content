---
title: Modèle de page de fonction CSS
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_function_page_template
l10n:
  sourceCommit: 754b68246f4e69e404309fee4a1699e047e43994
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
> title: nameOfTheFunction()
> slug: Web/CSS/Reference/Values/nameOfTheFunction
> page-type: css-function
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.types.nameOfTheFunction
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : La valeur `title` est affichée en haut de la page. Le format du titre est _NameOfTheFunction()_.
>     Par exemple, la fonction [`pow()`](/fr/docs/Web/CSS/Reference/Values/pow) a pour titre _pow()_.
> - **slug**
>   - : La valeur `slug` est la fin du chemin de l'URL après `https://developer.mozilla.org/fr/docs/`. C'est formaté comme `Web/CSS/Reference/Values/nameOfTheFunction`. Notez l'absence de parenthèses dans le slug.
>     Par exemple, le slug pour la fonction [`pow()`](/fr/docs/Web/CSS/Reference/Values/pow) est `Web/CSS/Reference/Values/pow`.
> - **page-type** (pages anglaises uniquement)
>   - : La valeur `page-type` pour les fonctions CSS est `css-function`.
> - **status** (pages anglaises uniquement)
>   - : Indicateurs décrivant le statut de cette fonctionnalité. Un tableau qui peut contenir un ou plusieurs des éléments suivants&nbsp;: `experimental`, `deprecated`, `non-standard`. Cette clé ne doit pas être définie manuellement&nbsp;: elle est définie automatiquement en fonction des valeurs dans les données de compatibilité des navigateurs pour la fonctionnalité. Voir [«&nbsp;Comment les statuts des fonctionnalités sont ajoutés ou mis à jour&nbsp;»](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour).
> - **browser-compat** (pages anglaises uniquement)
>   - : Remplacez la valeur de l'espace réservé `css.types.NameOfTheFunction` par la chaîne de requête pour la fonction dans le [dépôt de données de compatibilité des navigateurs <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data/tree/main/css/types). Consultez la section _Autres macros dans la page_ de ce bloc de notes pour voir comment cette paire clé-valeur est utilisée pour générer le contenu des sections _Spécifications_ et _Compatibilité des navigateurs_.
> - **sidebar** (pages anglaises uniquement)
>   - : Il s'agit de `cssref` pour toutes les pages de guide et de référence CSS.
>     Voir [Structures de page&nbsp;: Barres latérales](/fr/docs/MDN/Writing_guidelines/Page_structures/Sidebars) pour plus de détails.
>
> ---
>
> **Macros en haut de page**
>
> Un certain nombre d'appels de macros apparaissent en haut de la section de contenu (immédiatement sous les métadonnées de la page).
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
> ---
>
> **Autres macros dans la page**
>
> - Section de syntaxe formelle&nbsp;: Le contenu de la section _Syntaxe formelle_ est généré à l'aide de la macro `\{{CSSSyntax}}`. Cette macro récupère les données des spécifications en utilisant le [package npm @webref/css <sup>(angl.)</sup>](https://www.npmjs.com/package/@webref/css).
> - Sections Spécifications et Compatibilité des navigateurs&nbsp;: L'outil de construction utilise automatiquement la paire clé-valeur `browser-compat` des métadonnées de la page pour insérer les données dans les sections _Spécifications_ et _Compatibilité des navigateurs_ (remplaçant respectivement les macros `\{{Specifications}}` et `\{{Compat}}` dans ces sections).
>
>   Notez que vous devez peut-être d'abord créer ou mettre à jour une entrée pour la fonction et sa spécification dans notre <a href="https://github.com/mdn/browser-compat-data">dépôt de données de compatibilité des navigateurs <sup>(angl.)</sup></a>.
>   Consultez notre [guide des tableaux de compatibilité](/fr/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) pour obtenir des informations sur l'ajout ou la modification des entrées.
>
> _Supprimez cette note explicative avant de publier._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Commencez le contenu de la page par un paragraphe introductif, qui nomme la fonction et explique ce qu'elle fait.
Cela doit idéalement être une ou deux phrases courtes.

## Exemple interactif

Cette section est générée par la macro `InteractiveExample`.
Cela inclut le titre de la section «&nbsp;Exemple interactif&nbsp;» et l'éditeur de code.
Voir la section [Exemples interactifs](/fr/docs/MDN/Writing_guidelines/Page_structures/Code_examples#exemples_interactifs) de nos _Règles d'écritures_ pour plus d'informations.

## Syntaxe

Incluez un bloc de code CSS pour montrer les principaux cas d'utilisation de la syntaxe, y compris des exemples de paramètres que la fonction peut accepter. N'incluez que la fonction elle-même, pas une déclaration complète dans laquelle elle apparaît. Par exemple, utilisez `minmax(200px, 1fr)`, pas `grid-template-columns: minmax(min-content, 300px)`.

Ne terminez pas les lignes de syntaxe par des points-virgules&nbsp;: cela doit souligner que nous ne montrons pas un code CSS complet et valide ici, juste l'utilisation de la syntaxe.

Montrez tous les modèles d'invocation que la fonction peut prendre. Avant chacun de ces cas, ajoutez un commentaire pour décrire le cas d'utilisation et un autre commentaire pour nommer les paramètres et mettre en évidence la ponctuation de la syntaxe et l'ordre des paramètres. Les noms des paramètres dans le commentaire doivent correspondre aux paramètres énumérés dans la section «&nbsp;Paramètres&nbsp;».

Le commentaire montrant chaque modèle d'invocation doit être suivi d'une seule ligne vide.

Par exemple&nbsp;:

```css
/* Sans valeur de repli */
/* var( <custom-property-name> ) */
var(--custom-prop)

/* Avec une valeur de repli vide */
/* var( <custom-property-name> , ) */
var(--custom-prop,)

/* Avec une valeur de repli */
/* var( <custom-property-name> , <declaration-value> ) */
var(--custom-prop, initial)
var(--custom-prop, red)
var(--my-background, linear-gradient(transparent, aqua), pink)
var(--custom-prop, var(--default-value))
var(--custom-prop, var(--default-value, red))
```

### Paramètres

Listez les paramètres que la fonction peut accepter en tant que {{HTMLElement("dl")}}. Listez-les dans l'ordre dans lequel ils apparaissent dans la section _Syntaxe formelle_. Indiquez si un paramètre est optionnel en utilisant le badge `optional_inline`.
Incluez un terme et une définition pour chaque paramètre.

- `<custom-property-name>`
  - : Incluez une description du paramètre, son type de données et sa valeur par défaut, le cas échéant.
- `<declaration-value>` {{Optional_Inline}}
  - : Incluez une description du paramètre, son type de données et sa valeur par défaut, le cas échéant.

> [!WARNING]
> Ne pas ajouter de [macros de statut en ligne](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#icônes_de_statut_dans_les_listes_de_définitions) sur les pages CSS.

### Valeur de retour

Décrivez la valeur renvoyée par la fonction. Commencez la description par le mot «&nbsp;Retourne&nbsp;»&nbsp;; par exemple, «&nbsp;Retourne un `<number>` ou un `<dimension>`.&nbsp;»

## Description

Cette section est optionnelle mais recommandée. Elle contient une description de la fonction et explique son fonctionnement. Utilisez cette section pour expliquer les termes associés et ajouter des cas d'utilisation pour la fonction.

## Syntaxe formelle

Toutes les fonctions n'ont pas de syntaxe formelle&nbsp;: si une fonction n'en a pas, omettez cette section entière.

`\{{CSSSyntax}}`

_Pour utiliser cette macro, supprimez les accents inversés et la barre oblique inversée dans le fichier markdown._

## Accessibilité

Cette section est optionnelle. Incluez des directives d'accessibilité, des bonnes pratiques et des préoccupations potentielles dont les développeur·euse·s doivent être conscients lors de l'utilisation de cette propriété. Vous pouvez également inclure des solutions de contournement ou des solutions lorsque c'est applicable.

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
