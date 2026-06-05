---
title: Modèle de page de propriété CSS
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_property_page_template
l10n:
  sourceCommit: d2fb8cdc9422dd2b68ff23f616d70811729f1fbd
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
> title: nom-de-la-propriété
> slug: Web/CSS/Reference/Properties/name-of-the-property
> page-type: css-property OR css-shorthand-property
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.properties.name-of-the-property
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : La valeur `title` est affichée en haut de la page. Le format du titre est _nom-de-la-propriété_.
>     Par exemple, la propriété {{CSSxRef("background-color")}} a pour titre _background-color_.
> - **slug**
>   - : La valeur `slug` est la fin du chemin URL après `https://developer.mozilla.org/fr/docs/`. C'est formaté comme `Web/CSS/Reference/Properties/nom-de-la-propriété`.
>     Par exemple, le slug pour la propriété {{CSSxRef("background-color")}} est `Web/CSS/Reference/Properties/background-color`. Pour un composant multi-mots tel que `Getting_started` dans un slug, le slug doit utiliser un underscore comme dans `/fr/docs/Learn_web_development/Core/Structuring_content`.
> - **page-type** (pages anglaises uniquement)
>   - : La valeur `page-type` pour les propriétés CSS est `css-property`. Pour une propriété CSS abrégée, la valeur est `css-shorthand-property`. Par exemple, la valeur `page-type` pour la propriété {{CSSxRef("animation")}} est `css-shorthand-property`, car c'est une propriété abrégée, tandis que la valeur `page-type` pour la propriété {{CSSxRef("animation-delay")}} est `css-property`.
> - **status** (pages anglaises uniquement)
>   - : Indique l'état de cette fonctionnalité. Un tableau pouvant contenir une ou plusieurs des valeurs suivantes&nbsp;: `experimental`, `deprecated`, `non-standard`. Cette clé ne doit pas être définie manuellement&nbsp;: elle est définie automatiquement en fonction des valeurs dans les données de compatibilité des navigateurs pour la fonctionnalité. Voir [«&nbsp;Comment les statuts des fonctionnalités sont ajoutés ou mis à jour&nbsp;»](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour).
> - **browser-compat** (pages anglaises uniquement)
>   - : Remplacez la valeur de l'espace réservé <code>css.properties.NameOfTheProperty</code> par la chaîne de requête pour la propriété dans le [dépôt de données de compatibilité des navigateurs <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data/tree/main/css/properties). Consultez la section _Autres macros dans la page_ de ce bloc de notes pour voir comment cette clé-valeur est utilisée pour générer le contenu des sections _Spécifications_ et _Compatibilité des navigateurs_.
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
> - `\{{SeeCompatTable}}` — Cette macro génère une bannière **Expérimentale**, qui indique que la technologie est [expérimentale](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#expérimental).
>   Si la technologie est expérimentale et est cachée derrière une préférence dans Firefox, vous devez également remplir une entrée pour elle dans la page [Fonctionnalités expérimentales dans Firefox](/fr/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}` — Cette macro génère une bannière **Obsolète**, qui indique que l'utilisation de la technologie est [déconseillée](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#obsolète).
> - `\{{Non-standard_Header}}` — Cette macro génère une bannière **Non standard** qui indique que la fonctionnalité ne fait partie d'aucune spécification.
>
> Ne fournissez pas manuellement les macros d'en-tête de statut&nbsp;:
>
> Reportez-vous à la section [«&nbsp;Comment les statuts des fonctionnalités sont ajoutés ou mis à jour&nbsp;»](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour) pour ajouter ces statuts à la page.
>
> Des exemples des bannières **Expérimentale**, **Obsolète** et **Non standard** sont présentés juste après ce bloc de notes.
>
> ---
>
> **Autres macros dans la page**
>
> - Section de syntaxe formelle&nbsp;: Le contenu de la section _Syntaxe formelle_ est généré à l'aide de la macro `\{{CSSSyntax}}`. Cette macro récupère les données à partir des spécifications en utilisant le [package npm @webref/css <sup>(angl.)</sup>](https://www.npmjs.com/package/@webref/css).
> - Section de définition formelle&nbsp;: Le contenu de la section _Définition formelle_ est généré à l'aide de la macro `\{{CSSInfo}}`. Pour que cette section contienne des données, vous devez vous assurer qu'une entrée appropriée a été remplie pour la propriété correspondante dans le fichier de données [properties.json <sup>(angl.)</sup>](https://github.com/mdn/data/blob/main/css/properties.json) du dépôt `mdn/data`. Voir la page [Properties <sup>(angl.)</sup>](https://github.com/mdn/data/blob/main/css/properties.md) pour plus d'informations.
> - Sections Spécifications et Compatibilité des navigateurs&nbsp;: L'outil de construction utilise automatiquement la paire clé-valeur `browser-compat` à partir des métadonnées de la page pour insérer des données dans les sections _Spécifications_ et _Compatibilité des navigateurs_ (remplaçant les macros `\{{Specifications}}` et `\{{Compat}}` dans ces sections, respectivement).
>
>   Notez que vous devez d'abord créer/met à jour une entrée pour la propriété et sa spécification dans notre <a href="https://github.com/mdn/browser-compat-data">dépôt de données de compatibilité des navigateurs <sup>(angl.)</sup></a>.
>   Consultez notre [guide des tableaux de compatibilité](/fr/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) pour des informations sur l'ajout ou la modification des entrées.
>
> _Supprimez cette note explicative avant de publier._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Commencez le contenu de la page par un paragraphe introductif, qui nomme la propriété et explique ce qu'elle fait.
Cela doit idéalement être une ou deux phrases courtes.

## Exemple interactif

Cette section est générée par la macro `InteractiveExample`.
Cela inclut le titre de la section «&nbsp;Exemple interactif&nbsp;» et l'éditeur de code.
Voir la section [Exemples interactifs](/fr/docs/MDN/Writing_guidelines/Page_structures/Code_examples#exemples_interactifs) de nos _Règles d'écritures_ pour plus d'informations.

## Propriétés constitutives

Ajoutez cette section uniquement pour les propriétés abrégées, telles que [animation](/fr/docs/Web/CSS/Reference/Properties/animation), afin de lister toutes les propriétés longues associées.

## Syntaxe

Incluez les cas d'utilisation courants sous forme de bloc de code et décrivez les sous-valeurs qui composent une valeur complète.

```css
/* Insérez un bloc de code montrant les cas d'utilisation courants */
/* ou les catégories de valeurs */
```

### Valeurs

Incluez un terme et une définition pour chaque sous-valeur.

- `subvalue1`
  - : Incluez une description de la sous-valeur, son type de données et ce qu'elle représente.
- `subvalue2`
  - : Incluez une description de la sous-valeur, son type de données et ce qu'elle représente.

> [!WARNING]
> Ne pas ajouter de [macros de statut en ligne](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#icônes_de_statut_dans_les_listes_de_définitions) sur les pages CSS.

## Description

Cette section est optionnelle et permet d'inclure une description de la propriété et d'expliquer son fonctionnement. Utilisez cette section pour expliquer les termes associés et ajouter des cas d'utilisation pour la propriété.

## Définition formelle

`\{{CSSInfo}}`

_Pour utiliser cette macro, supprimez les accents inversés et la barre oblique inversée dans le fichier markdown._

## Syntaxe formelle

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
