---
title: "<fencedframe> : l'élément de cadre protégé"
slug: Web/HTML/Reference/Elements/fencedframe
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

{{SeeCompatTable}}

L'élément [HTML](/fr/docs/Web/HTML) **`<fencedframe>`** (ou «&nbsp;cadre protégé&nbsp;») représente un {{Glossary("browsing context", "contexte de navigation")}} imbriqué, intégrant une autre page HTML dans la page courante. Les `<fencedframe>` sont très similaires aux éléments {{htmlelement("iframe")}} dans leur forme et leur fonction, à ceci près&nbsp;:

- La communication est restreinte entre le contenu du `<fencedframe>` et le site qui l'intègre.
- Un `<fencedframe>` peut accéder à des données intersites, mais uniquement dans un ensemble très spécifique de circonstances contrôlées qui préservent la vie privée de l'utilisateur·ice.
- Un `<fencedframe>` ne peut pas être manipulé ni voir ses données accessibles via des scripts classiques (par exemple, lecture ou modification de l'URL source). Le contenu d'un `<fencedframe>` ne peut être intégré que via des [API spécifiques](/fr/docs/Web/API/Fenced_frame_API#cas_dutilisations).
- Un `<fencedframe>` ne peut pas accéder au DOM du contexte parent, et le contexte parent ne peut pas accéder au DOM du `<fencedframe>`.

L'élément `<fencedframe>` est un type d'élément `<iframe>` doté de fonctionnalités de confidentialité natives supplémentaires. Il répond aux limites des `<iframe>`, comme la dépendance aux cookies tiers et d'autres risques pour la vie privée. Voir l'[API Fenced frame](/fr/docs/Web/API/Fenced_frame_API) pour plus de détails.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `allow` {{experimental_inline}}
  - : Définit une [politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy) pour l'élément `<fencedframe>`, qui précise quelles fonctionnalités sont disponibles pour le `<fencedframe>` selon l'origine de la requête. Voir [Politiques d'autorisations disponibles pour les cadres protégés](#politiques_dautorisations_disponibles_pour_les_cadres_proteges) pour plus de détails sur les fonctionnalités contrôlables via une politique appliquée à un cadre protégé.

- `height` {{experimental_inline}}
  - : Un entier sans unité représentant la hauteur du cadre protégé en pixels CSS. La valeur par défaut est `150`.

- `width` {{experimental_inline}}
  - : Un entier sans unité représentant la largeur du cadre protégé en pixels CSS. La valeur par défaut est `300`.

## Politiques d'autorisations disponibles pour les cadres protégés

Les autorisations déléguées du contexte principal à un cadre protégé pour autoriser ou refuser des fonctionnalités pourraient servir de canal de communication, ce qui constituerait une menace pour la vie privée. Par conséquent, les fonctionnalités web standards dont la disponibilité peut être contrôlée via une [politique d'autorisations](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy) (par exemple, [`camera`](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy/camera) ou [`geolocation`](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy/geolocation)) sont **indisponibles** dans les cadres protégés.

Les seules fonctionnalités pouvant être activées par une politique à l'intérieur des cadres protégés sont celles spécifiquement conçues pour être utilisées dans ce contexte&nbsp;:

- L'[API Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr)
  - `attribution-reporting`
  - `private-aggregation`
  - `shared-storage`
  - `shared-storage-select-url`
- L'[API Shared Storage](/fr/docs/Web/API/Shared_Storage_API)
  - `attribution-reporting`
  - `private-aggregation`
  - `shared-storage`
  - `shared-storage-select-url`

Actuellement, ces fonctionnalités sont toujours activées dans les cadres protégés. À l'avenir, celles qui sont activées pourront être contrôlées via l'attribut `allow` de `<fencedframe>`. Bloquer les fonctionnalités du privacy sandbox de cette manière empêchera également le chargement du cadre protégé&nbsp;: il n'y aura alors aucun canal de communication.

## Sélection à travers les frontières d'un cadre protégé

La possibilité de déplacer la sélection active du document à travers les frontières d'un cadre protégé (c'est-à-dire d'un élément extérieur vers l'intérieur du cadre protégé, ou inversement) est limitée. Les actions initiées par l'utilisateur·ice, comme un clic ou la touche <kbd>Tab</kbd>, le permettent, car il n'y a alors aucun risque d'empreinte numérique.

En revanche, tenter de franchir la frontière via un appel d'API comme {{domxref("HTMLElement.focus()")}} est interdit&nbsp;: un script malveillant pourrait utiliser une série de tels appels pour faire fuiter des informations déduites à travers la frontière.

## Positionnement et mise à l'échelle

En tant qu'{{glossary("replaced elements", "élément remplacé")}}, le `<fencedframe>` permet d'ajuster la position du document intégré dans sa boîte à l'aide de la propriété {{cssxref("object-position")}}.

> [!NOTE]
> La propriété {{cssxref("object-fit")}} n'a aucun effet sur les éléments `<fencedframe>`.

La taille du contenu intégré peut être définie par les propriétés internes `contentWidth` et `contentHeight` de l'objet {{domxref("HTMLFencedFrameElement.config", "config")}} du `<fencedframe>`. Dans ce cas, modifier la `width` ou la `height` du `<fencedframe>` changera la taille du conteneur intégré sur la page, mais le document à l'intérieur du conteneur sera visuellement mis à l'échelle pour s'adapter. La largeur et la hauteur rapportées du document intégré (c'est-à-dire {{domxref("Window.innerWidth")}} et {{domxref("Window.innerHeight")}}) resteront inchangées.

## Accessibilité

Les personnes naviguant avec des technologies d'assistance, comme un lecteur d'écran, peuvent utiliser l'attribut [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title) sur un `<fencedframe>` pour étiqueter son contenu. La valeur du titre doit décrire de façon concise le contenu intégré&nbsp;:

```html
<fencedframe
  title="Publicité pour le nouveau Log. Par Blammo&nbsp;!"
  width="640"
  height="320"></fencedframe>
```

Sans ce titre, cela les obliges à naviguer à l'intérieur du `<fencedframe>` pour déterminer quel est le contenu intégré. Ce changement de contexte peut être déroutant et chronophage, en particulier pour les pages comportant plusieurs `<fencedframe>` ou si les contenus intégrés sont interactifs (vidéo, audio, etc.).

## Exemples

Pour définir le contenu affiché dans un `<fencedframe>`, une API d'utilisation (comme [Protected Audience](https://privacysandbox.google.com/private-advertising/protected-audience?hl=fr) ou [Shared Storage](https://privacysandbox.google.com/private-advertising/shared-storage?hl=fr)) génère un objet {{domxref("FencedFrameConfig")}}, qui est ensuite affecté à la propriété `config` du `<fencedframe>`.

L'exemple suivant récupère un `FencedFrameConfig` depuis une enchère publicitaire de l'API Protected Audience, qui est ensuite utilisé pour afficher la publicité gagnante dans un `<fencedframe>`&nbsp;:

```html
<fencedframe width="640" height="320"></fencedframe>
```

```js
const frameConfig = await navigator.runAdAuction({
  // … configuration de l'enchère
  resolveToConfig: true,
});

const frame = document.querySelector("fencedframe");
frame.config = frameConfig;
```

> [!NOTE]
> Il faut passer `resolveToConfig: true` à l'appel de `runAdAuction()` pour obtenir un objet `FencedFrameConfig`. Si ce n'est pas le cas, la promesse ({{jsxref("Promise")}}) résultante renverra un URN qui ne peut être utilisé que dans un élément {{htmlelement("iframe")}}.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a>,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a>, contenu intégré, contenu interactif, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise ouvrante et la balise fermante sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tous les éléments acceptant du contenu intégré.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Aucun rôle correspondant <sup>(angl.)</sup></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"><code>document</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"><code>img</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLFencedFrameElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'[API Fenced Frame](/fr/docs/Web/API/Fenced_frame_API)
- [Les cadres protégés](https://privacysandbox.google.com/private-advertising/fenced-frame?hl=fr) sur privacysandbox.google.com
- [Le bac à sable de la vie privée](https://privacysandbox.google.com/?hl=fr) sur privacysandbox.google.com
