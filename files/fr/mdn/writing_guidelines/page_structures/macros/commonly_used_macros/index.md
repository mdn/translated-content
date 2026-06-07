---
title: Macros couramment utilisées
slug: MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros
l10n:
  sourceCommit: 078deef4b52f337f2ef69e037ee80d1feae0d96a
---

Cette page liste de nombreuses macros générales que le système de compilation de MDN, [rari <sup>(angl.)</sup>](https://github.com/mdn/rari), fournit pour être utilisées sur MDN.
Pour des informations pratiques sur leur utilisation dans le contenu MDN, voir [Utiliser les macros](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros).

## Liens

MDN propose plusieurs macros de lien pour faciliter la création de liens vers des entrées de glossaire, des pages de référence et d'autres sujets.

Les macros de lien sont recommandées à la place des liens Markdown classiques, car elles sont concises et adaptées à la traduction.
Par exemple, un lien de glossaire ou de référence créé avec une macro n'a pas besoin d'être traduit&nbsp;: dans d'autres langues, il pointe automatiquement vers la bonne version du fichier.

Ces macros sont également couvertes plus en détail sur la page [Macros de lien](/fr/docs/MDN/Writing_guidelines/Page_structures/Links).

### Lien vers le glossaire

La macro [`Glossary` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossary.rs) crée un lien vers l'entrée d'un terme dans le [glossaire](/fr/docs/Glossary) MDN.
Cette macro accepte un paramètre obligatoire et un paramètre optionnel&nbsp;:

- Le terme est un paramètre obligatoire. Par exemple, pour créer un lien vers la page du glossaire pour "HTML", la macro est `\{{Glossary("HTML")}}`, et cela produit le lien {{Glossary("HTML")}}.
- Le texte affiché est un paramètre optionnel. Par exemple, vous pouvez écrire le lien dans l'exemple précédent comme `\{{Glossary("HTML", "HyperText Markup Language")}}`, ce qui produit le lien {{Glossary("HTML", "HyperText Markup Language")}}.

### Lien vers les pages de référence

Il existe des macros pour créer des liens indépendants de la langue vers des pages dans des domaines de référence spécifiques de MDN, y compris HTML, CSS, JavaScript, SVG et HTTP.

Ces macros sont faciles à utiliser.
Il vous suffit de définir le nom de l'élément à lier dans le premier paramètre.
Comme pour la macro de glossaire, la plupart des macros de référence acceptent également un second paramètre pour vous permettre de modifier le texte affiché.

Voir les fichiers source liés dans la première colonne du tableau suivant pour plus de détails.

<table class="standard-table">
  <thead>
    <tr>
      <th>Macro</th>
      <th>Liens vers les pages sous-jacente</th>
      <th>Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/cssxref.rs">CSSxRef <sup>(angl.)</sup></a>
      </td>
      <td>
        <a href="/fr/docs/Web/CSS/Reference">Référence CSS</a> (/Web/CSS/Reference)
      </td>
      <td>
        <code>\{{CSSxRef("cursor")}}</code> donne {{CSSxRef("cursor")}}.<br />
        <code>\{{CSSxRef(":hover")}}</code> donne {{CSSxRef(":hover")}}.<br />
        <code>\{{CSSxRef("@media")}}</code> donne {{CSSxRef("@media")}}.<br />
        <code>\{{CSSxRef("pow")}}</code> donne {{CSSxRef("pow")}}.<br /><br />
        Voir les détails dans <a href="/fr/docs/MDN/Writing_guidelines/Page_structures/Links#utiliser_cssxref_avec_la_référence_css">Utiliser <code>cssxref</code> avec la référence CSS</a>
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/domxref.rs">DOMxRef <sup>(angl.)</sup></a>
      </td>
      <td><a href="/fr/docs/Web/API">Référence DOM</a> (/Web/API)</td>
      <td>
        <code>\{{DOMxRef("document")}}</code> donne {{DOMxRef("Document")}}.<br />
        <code>\{{DOMxRef("document.getElementsByName()")}}</code> donne {{DOMxRef("document.getElementsByName()")}}.<br />
        <code>\{{DOMxRef("Node")}}</code> donne {{DOMxRef("Node")}}.<br />
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs">HTMLElement <sup>(angl.)</sup></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Reference/Elements">Référence des éléments HTML</a> (/Web/HTML/Reference/Elements).
      </td>
      <td>
        <code>\{{HTMLElement("select")}}</code> donne {{HTMLElement("select")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/jsxref.rs">JSxRef <sup>(angl.)</sup></a>
      </td>
      <td>
        <a href="/fr/docs/Web/JavaScript/Reference">Référence JavaScript</a> (/Web/JavaScript/Reference).
      </td>
      <td>
        <code>\{{JSxRef("Promise")}}</code> donne {{JSxRef("Promise")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgattr.rs">SVGAttr <sup>(angl.)</sup></a>
      </td>
      <td>
        <a href="/fr/docs/Web/SVG/Reference/Attribute">Référence des attributs SVG</a> (/Web/SVG/Reference/Attribute).
      </td>
      <td>
        <code>\{{SVGAttr("d")}}</code> donne {{SVGAttr("d")}}
      </td>
    </tr>
    <tr>
      <td>
        <a
          href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgxref.rs">SVGElement <sup>(angl.)</sup></a>
      </td>
      <td>
        <a href="/fr/docs/Web/SVG/Reference/Element">Référence des éléments SVG</a> (/Web/SVG/Reference/Element).
      </td>
      <td>
        <code>\{{SVGElement("view")}}</code> donne {{SVGElement("view")}}
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPHeader <sup>(angl.)</sup></a></code>
      </td>
      <td>
        <a href="/fr/docs/Web/HTTP/Reference/Headers">En-têtes HTTP</a> (/Web/HTTP/Reference/Headers).
      </td>
      <td>
        <code>\{{HTTPHeader("ACCEPT")}}</code> donne {{HTTPHeader("ACCEPT")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPMethod <sup>(angl.)</sup></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTTP/Reference/Methods">Méthodes de requête HTTP</a> (/Web/HTTP/Reference/Methods).
      </td>
      <td>
        <code>\{{HTTPMethod("HEAD")}}</code> donne {{HTTPMethod("HEAD")}}
      </td>
    </tr>
    <tr>
      <td>
        <a href="https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs">HTTPStatus <sup>(angl.)</sup></a>
      </td>
      <td>
        <a href="/fr/docs/Web/HTTP/Reference/Status">Codes d'état de réponse HTTP</a> (/Web/HTTP/Reference/Status).
      </td>
      <td>
        <code>\{{HTTPStatus("404")}}</code> donne {{HTTPStatus("404")}}
      </td>
    </tr>
  </tbody>
</table>

### Ajouter des aides à la navigation pour les guides à pages multiples

Les macros [`Previous` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs), [`Next` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) et [`PreviousNext` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs) fournissent des contrôles de navigation pour les articles faisant partie d'une séquence.
Pour les modèles à sens unique, il suffit d'indiquer l'emplacement wiki de l'article précédent ou suivant.
Pour [`PreviousNext` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/previous_menu_next.rs), il faut deux paramètres&nbsp;: l'emplacement wiki de l'article précédent puis celui de l'article suivant.

## Générer des exemples de code

### Exemples interactifs

- [`EmbedLiveSample` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_live_sample.rs) permet d'intégrer le résultat d'un exemple de code sur une page, comme expliqué dans [Exemples interactifs](/fr/docs/MDN/Writing_guidelines/Page_structures/Live_samples).
- [`LiveSampleLink` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/live_sample_link.rs) crée un lien vers une page contenant le résultat d'un exemple de code, comme expliqué dans [Exemples interactifs](/fr/docs/MDN/Writing_guidelines/Page_structures/Live_samples).
- [`EmbedGHLiveSample` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/embeds/embed_gh_live_sample.rs) permet d'intégrer des exemples interactifs depuis des pages GitHub.
  Plus d'informations dans [Exemples interactifs GitHub](/fr/docs/MDN/Writing_guidelines/Page_structures/Code_examples#github_live_samples).

## Ajouter une mise en forme générale

### Ajouter des indicateurs en ligne pour la documentation API

[`Optional_Inline` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) et [`ReadOnlyInline` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) sont utilisés dans la documentation API, généralement pour décrire la liste des propriétés d'un objet ou les paramètres d'une fonction.

Utilisation&nbsp;: `\{{Optional_Inline}}` ou `\{{ReadOnlyInline}}`.
Exemple&nbsp;:

- `isCustomObject` {{ReadOnlyInline}}
  - : Indique, si `true`, que l'objet est personnalisé.
- `parameterX` {{Optional_Inline}}
  - : Bla bla bla…

## Ajouter des indicateurs de statut et de compatibilité

### Ajouter des indicateurs en ligne sans paramètre supplémentaire

#### Non standard

[`Non-standard_Inline` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) insère une marque en ligne indiquant que l'API n'est pas standardisée et n'est pas en cours de normalisation.

##### Syntaxe

`\{{Non-standard_Inline}}`

##### Exemple

- Icône&nbsp;: {{Non-standard_Inline}}

#### Expérimental

[`Experimental_Inline` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) insère une marque en ligne indiquant que l'API n'est pas largement implémentée et peut évoluer à l'avenir.
Pour plus d'informations sur la définition **expérimental**, voir la documentation [Expérimental, déprécié et obsolète](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

##### Syntaxe

`\{{Experimental_Inline}}`

##### Exemple

- Icône&nbsp;: {{Experimental_Inline}}

### Ajouter des indicateurs en ligne avec technologie précisée

#### Obsolète

[`Deprecated_Inline` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/badges.rs) insère une marque en ligne de dépréciation ({{Deprecated_Inline}}) pour déconseiller l'utilisation d'une API officiellement dépréciée (ou supprimée).
Pour plus d'informations sur la définition **déprécié**, voir la documentation [Expérimental, déprécié et obsolète](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

##### Syntaxe

`\{{Deprecated_Inline}}`

##### Exemple

- Icône&nbsp;: {{Deprecated_Inline}}

### Indicateurs d'en-tête de page ou de section

Ces modèles ont la même signification que leurs équivalents en ligne ci-dessus.
Ils doivent être placés juste sous le titre principal de la page (ou le fil d'Ariane si présent) dans une page de référence.
Ils peuvent aussi servir à marquer une section d'une page.

- [`Non-standard_Header` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs)&nbsp;: `\{{Non-standard_Header}}` {{Non-standard_Header}}
- [`SeeCompatTable` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) utilisé sur les pages documentant des [fonctionnalités expérimentales](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete#expérimental).
  Exemple&nbsp;: `\{{SeeCompatTable}}` {{SeeCompatTable}}
- [`Deprecated_Header` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs)&nbsp;: `\{{Deprecated_Header}}` {{Deprecated_Header}}
- [`SecureContext_Header` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs).
  À utiliser sur les pages principales comme les pages d'interface, d'API ou d'entrée d'API (ex.&nbsp;: `navigator.xyz`), mais généralement pas sur les sous-pages de méthodes ou propriétés.
  Exemple&nbsp;: `\{{SecureContext_Header}}` {{SecureContext_Header}}

#### Indiquer qu'une fonctionnalité est disponible dans les web workers

La macro [`AvailableInWorkers`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/banners.rs) insère un encadré localisé indiquant qu'une fonctionnalité est disponible dans un [contexte worker](/fr/docs/Web/API/Web_Workers_API).
Vous pouvez aussi passer des arguments pour indiquer qu'une fonctionnalité fonctionne dans un contexte worker spécifique.

##### Syntaxe

```plain
\{{AvailableInWorkers}}
\{{AvailableInWorkers("window_and_worker_except_service")}}
```

##### Exemples

{{AvailableInWorkers}}

{{AvailableInWorkers("window_and_worker_except_service")}}

## Lier à la compatibilité navigateur et à la spécification

Les macros suivantes sont incluses sur toutes les pages de référence, mais sont aussi utilisables sur tous les types de pages&nbsp;:

- `\{{Compat}}`
  - : Génère un [tableau de compatibilité](/fr/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) pour la ou les fonctionnalités définies par `browser-compat` dans le front-matter.
- `\{{Specifications}}`
  - : Ajoute un [tableau de spécifications](/fr/docs/MDN/Writing_guidelines/Page_structures/Specification_tables) pour la ou les fonctionnalités définies par `spec-urls` dans le front-matter, si présent, ou à partir de la spécification listée dans les données de compatibilité définies par `browser-compat` dans le front-matter.

## Voir aussi

- [Macros de lien](/fr/docs/MDN/Writing_guidelines/Page_structures/Links)
- [Macros de barre latérale](/fr/docs/MDN/Writing_guidelines/Page_structures/Sidebars)
- [Macros de statut de fonctionnalité](/fr/docs/MDN/Writing_guidelines/Page_structures/Feature_status)
- [Autres macros](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros/Other)&nbsp;: macros rarement utilisées ou obsolètes
- [Modèles de page](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types#page_templates)
- [Composants de page](/fr/docs/MDN/Writing_guidelines/Writing_style_guide#page_components)
