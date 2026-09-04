---
title: Modèle de page d'élément HTML
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTML_element_page_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
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
> title: "<NameOfTheElement> : élément NomDeLélément"
> slug: Web/HTML/Reference/Elements/NameOfTheElement
> page-type: html-element
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: html.elements.NameOfTheElement
> sidebar: htmlsidebar
> ---
> ```
>
> - **title**
>   - : Titre affiché en haut de la page.
>     Format&nbsp;: `'<NameOfTheElement>: Description de l'objectif de l'élément'`.
>     Par exemple, l'élément [`<video>`](/fr/docs/Web/HTML/Reference/Elements/video) a un _titre_ de&nbsp;: **«&nbsp;\<video>: L'élément d'intégration vidéo&nbsp;»**.
> - **slug**
>   - : La fin du chemin de l'URL après `https://developer.mozilla.org/fr/docs/`.
>     C'est formaté comme `Web/HTML/Reference/Elements/NameOfTheElement`, où le nom de l'élément est en _minuscules_.
>     Par exemple, l'élément [`<video>`](/fr/docs/Web/HTML/Reference/Elements/video) a un _slug_ de `Web/HTML/Reference/Elements/video`.
> - **page-type** (pages anglaises uniquement)
>   - : Toujours `html-element`.
> - **status** (pages anglaises uniquement)
>   - : Indique l'état de cette fonctionnalité. Un tableau qui peut contenir une ou plusieurs des valeurs suivantes&nbsp;: `experimental`, `deprecated`, `non-standard`. Cette clé ne doit pas être définie manuellement&nbsp;: elle est définie automatiquement en fonction des valeurs dans les données de compatibilité des navigateurs pour la fonctionnalité. Voir [«&nbsp;Comment les statuts des fonctionnalités sont ajoutés ou mis à jour&nbsp;»](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour).
> - **browser-compat** (pages anglaises uniquement)
>   - : Remplacez la valeur de l'espace réservé `html.elements.NameOfTheElement` par la chaîne de requête pour l'élément dans le [dépôt de données de compatibilité des navigateurs <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data).
>     La chaîne d'outils utilise automatiquement la clé pour remplir les sections de compatibilité et de spécifications (en remplaçant les macros `\{{Compat}}` et `\{{Specifications}}`).
>     Notez que vous devez d'abord créer ou mettre à jour une entrée pour l'élément dans notre [dépôt de données de compatibilité des navigateurs <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data), et l'entrée doit inclure des informations sur la spécification.
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
> Voir [«&nbsp;Comment les statuts des fonctionnalités sont ajoutés ou mis à jour&nbsp;»](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour) pour plus d'information.
>
> Des exemples des bannières **Expérimentale**, **Obsolète** et **Non standard** sont présentés après ce bloc de notes.
>
> _N'oubliez pas de supprimer cette note explicative avant de publier._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

L'élément [HTML](/fr/docs/Web/HTML) **`<insert_the_element_name>`** fait _(insérer un paragraphe résumant le nom de l'élément et ce qu'il fait, idéalement une ou deux phrases courtes)_.

## Exemple interactif

Cette section est générée par la macro `InteractiveExample`.
Cela inclut le titre de la section «&nbsp;Exemple interactif&nbsp;» et l'éditeur de code.
Voir la section [Exemples interactifs](/fr/docs/MDN/Writing_guidelines/Page_structures/Code_examples#exemples_interactifs) de nos _Règles d'écritures_ pour plus d'informations.

Informations supplémentaires — à ce stade, incluez quelques paragraphes supplémentaires expliquant les points les plus importants à connaître sur l'utilisation de l'élément et ses principales fonctionnalités. Il est utile d'expliquer brièvement ce qui se passe dans l'exemple interactif si ce n'est pas immédiatement évident. Vous pouvez également expliquer les points clés sur la façon dont cet élément interagit avec les fonctionnalités JavaScript ou CSS importantes. Pas trop de détails — vous ne voulez pas répéter la documentation sur plusieurs pages — mais un point clé avec un lien vers la page de cette fonctionnalité est utile. Encore une fois, voir la page `<video>` pour un exemple.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `attribute1` {{Deprecated_Inline}} {{Experimental_Inline}}
  - : Inclure ici la description de ce que fait l'attribut. Inclure un terme et une définition pour chaque attribut. Si l'attribut n'est pas expérimental/obsolète, supprimez les appels de macro pertinents.
- `attribute2`
  - : etc.

## Évènements

Incluez un tableau des évènements déclenchés par ce type d'élément, le cas échéant.

| Nom de l'évènement | Déclenché lorsque                           |
| ------------------ | ------------------------------------------- |
| évènement 1        | Expliquez brièvement quand il est déclenché |
| évènement 2        | Expliquez brièvement quand il est déclenché |
| etc.               |                                             |

## Accessibilité

Signalez tout problème potentiel d'accessibilité lié à l'utilisation de cet élément et comment y remédier. Supprimez cette section s'il n'y a aucun problème à signaler.

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

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        Remplissez une liste des catégories de contenu auxquelles l'élément HTML appartient.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Quel contenu l'élément est-il autorisé à contenir&nbsp;?</td>
    </tr>
    <tr>
      <th scope="row">Omission de balise</th>
      <td>
        La balise de fin peut-elle être omise, ou doit-elle être présente&nbsp;? Doit-elle être omise&nbsp;?
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Quels éléments parents l'élément peut-il avoir&nbsp;? Par exemple «&nbsp;Tout
        élément qui accepte
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >.&nbsp;»
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        Remplissez une liste des rôles ARIA qui peuvent être définis sur l'élément&nbsp;; par exemple
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role"><code>directory</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        Quelle interface DOM représente l'élément en JavaScript&nbsp;? Par exemple
        {{DOMxRef("HTMLOListElement")}} dans le cas de ol.
      </td>
    </tr>
  </tbody>
</table>

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
