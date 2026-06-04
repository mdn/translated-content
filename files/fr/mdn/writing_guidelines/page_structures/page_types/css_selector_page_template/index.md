---
title: Modèle de page de sélecteur CSS
slug: MDN/Writing_guidelines/Page_structures/Page_types/CSS_selector_page_template
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
> title: :nom-du-sélecteur
> slug: Web/CSS/Reference/Selectors/:name-of-the-selector
> page-type: css-selector OU css-pseudo-class OU css-pseudo-element OU css-combinator
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: css.selectors.name-of-the-selector
> sidebar: cssref
> ---
> ```
>
> - **title**
>   - : Titre affiché en haut de la page. Format&nbsp;: _:NomDuSélecteur_.
>     Par exemple, le sélecteur {{CSSxRef(":hover")}} a pour titre _:hover_.
> - **slug**
>   - : La fin du chemin de l'URL après `https://developer.mozilla.org/fr/docs/`). C'est formaté comme `Web/CSS/Reference/Selectors/:name-of-the-selector`.
>     Par exemple, le slug du sélecteur {{CSSxRef(":hover")}} est `Web/CSS/Reference/Selectors/:hover`.
> - **page-type** (pages anglaises uniquement)
>   - : La clé `page-type` pour les propriétés CSS est l'une des suivantes&nbsp;: `css-selector`, `css-pseudo-class` ou `css-pseudo-element`, selon que le sélecteur est une [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes), un [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements), un [combinateur](/fr/docs/Web/CSS/Guides/Selectors/Selectors_and_combinators#combinators), ou un [sélecteur simple](/fr/docs/Web/CSS/Guides/Selectors/Selector_structure#simple_selector).
> - **status** (pages anglaises uniquement)
>   - : Indique le statut de cette fonctionnalité. Un tableau qui peut contenir une ou plusieurs des valeurs suivantes&nbsp;: `experimental`, `deprecated`, `non-standard`. Cette clé ne doit pas être définie manuellement&nbsp;: elle est définie automatiquement en fonction des valeurs dans les données de compatibilité des navigateurs pour la fonctionnalité. Voir [«&nbsp;Comment les statuts des fonctionnalités sont ajoutés ou mis à jour&nbsp;»](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour).
> - **browser-compat** (pages anglaises uniquement)
>   - : Remplacez la valeur de l'espace réservé <code>css.selectors.NameOfTheSelector</code> par la chaîne de requête pour le sélecteur dans le [dépôt de données de compatibilité des navigateurs <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data).
>     L'outil utilise automatiquement la clé pour remplir les sections de compatibilité et de spécifications (en remplaçant les macros `\{{Compat}}` et `\{{Specifications}}` dans ces sections, respectivement).
>
>     Notez que vous devez d'abord créer ou mettre à jour une entrée pour le sélecteur et sa spécification dans notre <a href="https://github.com/mdn/browser-compat-data">dépôt de données de compatibilité des navigateurs <sup>(angl.)</sup></a>.
>     Consultez notre [guide sur la façon de procéder](/fr/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
> - **sidebar** (pages anglaises uniquement)
>   - : Ceci est `cssref` pour toutes les pages de guide et de référence CSS.
>     Voir [Structures de page&nbsp;: Barres latérales](/fr/docs/MDN/Writing_guidelines/Page_structures/Sidebars) pour plus de détails.
>
> ---
>
> **Macros en haut de page**
>
> Un certain nombre de macros apparaissent en haut de la section de contenu immédiatement après les métadonnées de la page.
> Ces macros sont ajoutées automatiquement par les outils, il est donc conseillé de ne pas les ajouter ou les supprimer&nbsp;:
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
> **Section de syntaxe (`\{{CSSSyntax}}`)**
>
> Le contenu de la section Syntaxe est généré à l'aide de la macro `\{{CSSSyntax}}`.
> Pour que ces informations soient remplies, vous devez vous assurer qu'une entrée appropriée a été remplie pour le sélecteur dans notre fichier de données [selectors.json <sup>(angl.)</sup>](https://github.com/mdn/data/blob/main/css/selectors.json).
> Voir [selectors.md <sup>(angl.)</sup>](https://github.com/mdn/data/blob/main/css/selectors.md) pour plus d'informations.
>
> _Supprimez cette note explicative avant de publier_

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Le paragraphe de résumé — commencez par nommer le sélecteur et expliquer ce qu'il fait. Idéalement, cela doit être une ou deux phrases courtes.

```css
/* Insérez un bloc de code montrant les cas d'utilisation courants */
```

## Syntaxe

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
