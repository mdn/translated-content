---
title: Modèle de page d'élément SVG
slug: MDN/Writing_guidelines/Page_structures/Page_types/SVG_element_page_template
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
> Les valeurs doivent être mises à jour de manière appropriée pour l'attribut particulier.
>
> ```md
> ---
> title: <NameOfTheElement>
> slug: Web/SVG/Reference/Element/NameOfTheElement
> page-type: svg-element
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: svg.elements.NameOfTheElement
> sidebar: svgref
> ---
> ```
>
> - **title**
>   - : Titre affiché en haut de la page.
>     Format&nbsp;: **<**_NameOfTheElement_**>**.
>     Par exemple, l'élément [`<g>`](/fr/docs/Web/SVG/Reference/Element/g) a un _titre_ de `<g>`.
> - **slug**
>   - : La fin du chemin de l'URL après `https://developer.mozilla.org/fr/docs/`.
>     C'est formaté comme `Web/SVG/Reference/Element/NameOfTheElement`.
> - **page-type** (pages anglaises uniquement)
>   - : Toujours `svg-element`.
> - **status** (pages anglaises uniquement)
>   - : Indicateurs décrivant le statut de cette fonctionnalité. Un tableau pouvant contenir une ou plusieurs des valeurs suivantes&nbsp;: `experimental`, `deprecated`, `non-standard`. Cette clé ne doit pas être définie manuellement&nbsp;: elle est définie automatiquement en fonction des valeurs dans les données de compatibilité des navigateurs pour la fonctionnalité. Voir [«&nbsp;Comment les statuts des fonctionnalités sont ajoutés ou mis à jour&nbsp;»](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour).
> - **browser-compat** (pages anglaises uniquement)
>   - : Remplacez la valeur de l'espace réservé `svg.elements.NameOfTheElement` par la chaîne de requête pour l'élément dans le [dépôt de données de compatibilité des navigateurs <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data).
>     L'outil utilise automatiquement la clé pour remplir les sections de compatibilité et de spécification (en remplaçant les macros `\{{Compat}}` et `\{{Specifications}}`).
>
>     Notez que vous devez d'abord créer/mette à jour une entrée pour l'élément dans notre [dépôt de données de compatibilité des navigateurs <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data), et l'entrée doit inclure des informations sur la spécification.
>     Voir notre [guide sur la façon de procéder](/fr/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
> - **sidebar** (pages anglaises uniquement)
>   - : Ceci est `svgref` pour toutes les pages de guide et de référence SVG.
>     Voir [Structures de pages&nbsp;: Barres latérales](/fr/docs/MDN/Writing_guidelines/Page_structures/Sidebars) pour plus de détails.
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
> Voir [«&nbsp;Comment les statuts des fonctionnalités sont ajoutés ou mis à jour&nbsp;»](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour) pour plus d'information.
>
> Des exemples des bannières **Expérimentale**, **Obsolète** et **Non standard** sont présentés après ce bloc de notes.
>
> _N'oubliez pas de supprimer cette note explicative avant de publier._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

Commencez le contenu de la page par un paragraphe introductif — commencez par nommer l'élément et dire ce qu'il fait.
Cela doit idéalement être une ou deux phrases courtes.

## Contexte d'utilisation

`\{{SVGInfo}}`

Pour que les informations correctes apparaissent ici, remplissez une entrée pour l'élément dans la macro `\{{SVGInfo}}` si elle n'y est pas déjà.

_Pour utiliser cette macro, supprimez les backticks et la barre oblique inverse dans le fichier markdown._

## Attributs

### Attributs universels

- [Attributs de base](/fr/docs/Web/SVG/Reference/Attribute#core_attributes)
- [Attributs d'évènement](/fr/docs/Web/SVG/Reference/Attribute#event_attributes)
- [Attributs de présentation](/fr/docs/Web/SVG/Reference/Attribute#presentation_attributes)
- {{SVGAttr("class")}}
- {{SVGAttr("style")}}
- {{SVGAttr("transform")}}

### Attributs spécifiques

- Inclure une liste à puces
- de tous les
- attributs SVG qu'il peut prendre

## Interface DOM

Cet élément implémente l'interface `\{{DOMxRef("NameOfSVGElement")}}`.

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
