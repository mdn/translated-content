---
title: Modèle de page d'en-tête HTTP
slug: MDN/Writing_guidelines/Page_structures/Page_types/HTTP_header_page_template
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
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
> title: En-tête NomDeLen-tête
> short-title: NomDeLen-tête
> slug: Web/HTTP/Reference/Headers/NameOfTheHeader
> page-type: http-header
> status:
>   - deprecated
>   - experimental
>   - non-standard
> browser-compat: path.to.feature.NameOfTheHeader
> sidebar: http
> ---
> ```
>
> - **title**
>   - : Titre affiché en haut de la page. Formaté comme _En-tête NomDeLen-tête_. Par exemple, l'en-tête [Cache-Control](/fr/docs/Web/HTTP/Reference/Headers/Cache-Control) a un _titre_ de `En-tête Cache-Control`.
> - **short-title**
>   - : Un titre court utilisé dans les fil d'Ariane et les barres latérales. Formaté comme _NomDeLen-tête_. Par exemple, l'en-tête [Cache-Control](/fr/docs/Web/HTTP/Reference/Headers/Cache-Control) a un _titre court_ de `Cache-Control`.
> - **slug**
>   - : La fin du chemin URL après `https://developer.mozilla.org/fr/docs/`. C'est formaté comme `Web/HTTP/Reference/Headers/NomDeLen-tête`. Par exemple, l'en-tête [Cache-Control](/fr/docs/Web/HTTP/Reference/Headers/Cache-Control) a un _chemin_ de `Web/HTTP/Reference/Headers/Cache-Control`.
> - **page-type** (pages anglaises uniquement)
>   - : Pour les en-têtes HTTP, doit être `http-header`. Pour d'autres valeurs de `page-type` HTTP, voir la [section HTTP](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types/Page_type_key#http_page_types) de la documentation pour la clé de page de garde `page-type`.
> - **status** (pages anglaises uniquement)
>   - : Indique l'état de cette fonctionnalité. Un tableau qui peut contenir une ou plusieurs des valeurs suivantes&nbsp;: `experimental`, `deprecated`, `non-standard`. Cette clé ne doit pas être définie manuellement&nbsp;: elle est définie automatiquement en fonction des valeurs dans les données de compatibilité des navigateurs pour la fonctionnalité. Voir [«&nbsp;Comment les statuts des fonctionnalités sont ajoutés ou mis à jour&nbsp;»](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour).
> - **browser-compat** (pages anglaises uniquement)
>   - : Remplacez la valeur de l'espace réservé `path.to.feature.NameOfTheHeader` par la chaîne de requête pour l'en-tête dans le [dépôt de données de compatibilité des navigateurs <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data).
>     La chaîne d'outils utilise automatiquement la clé pour remplir la section de compatibilité (en remplaçant la macro `\{{Compat}}`).
>
>     Notez que vous devez d'abord créer ou mettre à jour une entrée pour l'en-tête HTTP dans notre <a href="https://github.com/mdn/browser-compat-data">dépôt de données de compatibilité des navigateurs <sup>(angl.)</sup></a>, et l'entrée pour l'en-tête doit inclure des informations sur la spécification.
>     Consultez notre [guide sur la façon de procéder](/fr/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables).
>
>     La compatibilité des navigateurs ne s'applique pas aux en-têtes HTTP pour lesquels aucune implémentation spécifique n'est fournie (comme l'ajout automatique d'un en-tête de requête à certaines requêtes ou la modification du comportement en fonction des données d'un en-tête de réponse).
>     Dans ces cas, supprimez la clé et la valeur `browser-compat`.
>
> - **sidebar**
>   - : Conservez toujours `http`.
>     Voir [Structures de page&nbsp;: Barres latérales](/fr/docs/MDN/Writing_guidelines/Page_structures/Sidebars) pour plus de détails.
>
> ---
>
> **Macros en haut de page**
>
> Un certain nombre de macros apparaissent en haut de la section de contenu immédiatement après les métadonnées de la page.
> Ces macros sont ajoutées automatiquement par la chaîne d'outils, il est donc recommandé de ne pas les ajouter ou les supprimer.
>
> - `\{{SeeCompatTable}}` — cela génère une bannière **Ceci est une technologie expérimentale** qui indique que l'en-tête est [expérimental](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#expérimental).
>   Si elle est expérimentale et que la technologie est cachée derrière une préférence dans Firefox, vous devez également remplir une entrée pour elle dans la page [Fonctionnalités expérimentales dans Firefox](/fr/docs/Mozilla/Firefox/Experimental_features).
> - `\{{Deprecated_Header}}` — cela génère une bannière **Obsolète** qui indique que l'utilisation de l'en-tête est [découragée](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#obsolète).
> - `\{{Non-standard_Header}}` — cela génère une bannière **Non standard** qui indique que la fonctionnalité ne fait partie d'aucune spécification.
>
> Ne fournissez pas manuellement les macros de statut des en-têtes. Consultez la section [«&nbsp;Comment les statuts des fonctionnalités sont ajoutés ou mis à jour&nbsp;»](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status#comment_les_statuts_sont-ils_ajoutés_ou_mis_à_jour) pour ajouter ces statuts à la page.
>
> Des exemples des bannières **Expérimentale**, **Obsolète** et **Non standard** sont présentés juste après ce bloc de notes.
>
> _N'oubliez pas de supprimer cette note explicative avant de publier._

{{SeeCompatTable}}{{Deprecated_Header}}{{Non-standard_Header}}

La première phrase de la page doit suivre ce format&nbsp;:

> Le (type d'en-tête) HTTP **`header-name`** est utilisé pour X dans les circonstances Y.

Le «&nbsp;type d'en-tête&nbsp;» doit indiquer s'il s'agit d'un {{Glossary("request header", "en-tête de requête")}}, d'un {{Glossary("response header", "en-tête de réponse")}}, ou s'il peut être l'un ou l'autre.
Le paragraphe de résumé doit idéalement être composé d'une ou deux phrases courtes.

Vous pouvez mentionner des pièges notables ou des erreurs courantes dans cette section, en créant des liens vers des exemples ou une documentation plus détaillée (guides, etc.) dans cette section.
Deux ou trois paragraphes dans cette section sont appropriés, et s'il y a des notes d'utilisation substantielles à inclure, utilisez une section "Description" après "Directives" ci-dessous.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        Inclure la catégorie (ou les catégories) de l'en-tête, par exemple
        {{Glossary("Request header", "En-tête de requête")}},
        {{Glossary("Response header", "En-tête de réponse")}},
        <a href="/fr/docs/Web/HTTP/Guides/Client_hints">Indice client</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>«&nbsp;Oui&nbsp;» ou «&nbsp;Non&nbsp;»</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "En-tête de réponse CORS autorisé")}}
      </th>
      <td>«&nbsp;Oui&nbsp;» ou «&nbsp;Non&nbsp;»</td>
    </tr>
  </tbody>
</table>

## Syntaxe

Remplissez une boîte de syntaxe, comme celle ci-dessous, conformément aux directives de notre article sur les [sections de syntaxe](/fr/docs/MDN/Writing_guidelines/Page_structures/Syntax_sections).

```http
NameOfTheHeader: <directive1>
NameOfTheHeader: <directive1>, <directive2>, …
```

Si l'en-tête dispose de nombreuses directives disponibles, n'hésitez pas à inclure plusieurs boîtes de syntaxe, sous-sections et explications selon les besoins&nbsp;:

```http
NameOfTheHeader: <directive3>, …, <directiveN>
```

Les directives ne sont pas sensibles à la casse et peuvent avoir un argument optionnel, qui peut utiliser à la fois la syntaxe token et la syntaxe quoted-string.
Les directives multiples sont séparées par des virgules (supprimez les informations si nécessaire).

## Directives

- `directive1`
  - : Inclure une brève description de la directive et de ce qu'elle fait ici.
    Inclure un terme et une définition pour chaque directive.
- `directive2`
  - : etc.

Si l'en-tête dispose de nombreuses directives disponibles, n'hésitez pas à inclure plusieurs listes de définitions, sous-sections et explications selon les besoins.

## Description

Si le contenu est trop volumineux pour être inclus dans les paragraphes d'ouverture, fournissez autant de détails que nécessaire ici, tels que des informations contextuelles, des conseils d'utilisation et des liens vers la documentation.
C'est un bon endroit pour noter si les modèles réels diffèrent de ce qui est défini si les implémentations largement déployées s'écartent de ce qui est décrit dans les spécifications.

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
