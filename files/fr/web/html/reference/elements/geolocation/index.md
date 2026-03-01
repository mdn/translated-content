---
title: "<geolocation> : l'élément de géolocalisation"
slug: Web/HTML/Reference/Elements/geolocation
l10n:
  sourceCommit: 483ce811e1ea52cb2d9d2a5af0c4d1c4d591ea4a
---

{{SeeCompatTable}}

L'élément [HTML](/fr/docs/Web/HTML) **`<geolocation>`** crée un contrôle interactif permettant à l'utilisateur·ice de partager ses données de localisation avec la page.

Il fournit&nbsp;:

- Une interface utilisateur intuitive définie par le navigateur.
- Un processus pour gérer les autorisations nécessaires à la fonctionnalité `geolocation`.
- Des fonctionnalités d'API pour accéder aux données de localisation et réagir à la réception des données de localisation et aux changements d'autorisation.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `autolocate` {{Experimental_Inline}}
  - : Un attribut booléen qui, lorsqu'il est défini sur `true`, définit que le navigateur doit immédiatement récupérer les données de localisation lorsque l'élément `<geolocation>` est rendu, à condition que l'autorisation ait été accordée précédemment. Si défini sur `false`, les données de localisation ne sont pas récupérées tant que l'utilisateur·ice n'active pas le contrôle. Valeur par défaut `false`.

    Si l'autorisation n'a pas été accordée précédemment, cet attribut n'a aucun effet.

- `watch` {{Experimental_Inline}}
  - : Un attribut booléen qui, lorsqu'il est défini sur `true`, définit que le navigateur doit récupérer les données de localisation chaque fois que la position de l'appareil de l'utilisateur·ice change. Si défini sur `false`, les données de localisation ne sont récupérées qu'une seule fois. Valeur par défaut `false`.

## Description

Le élément `<geolocation>` fournit un contrôle déclaratif défini par le navigateur pour partager les données de localisation. Dans Chrome, par exemple, le bouton affiche une icône «&nbsp;épingle de carte&nbsp;» et un texte intuitif («&nbsp;Use location&nbsp;» dans le contenu en anglais).

Il permet également une gestion intuitive des autorisations de l'utilisateur·ice.
Par exemple, dans Chrome, si l'utilisateur·ice a précédemment refusé l'autorisation d'accéder aux données de localisation, ou a fermé la boîte de dialogue d'autorisation sans faire de choix, il·elle peut appuyer de nouveau sur le bouton pour mettre à jour son choix.
Dans les cas où l'utilisateur·ice a précédemment refusé l'autorisation, les dialogues ultérieurs l'informeront qu'il·elle n'avait pas autorisé le partage des données de localisation, et lui demanderont s'il·elle souhaite continuer à refuser ou à autoriser.

Un aspect clé de l'élément `<geolocation>` est qu'il reflète le choix conscient de l'utilisateur·ice, et empêche les usages qui pourraient tromper l'utilisateur·ice pour qu'il·elle fournisse involontairement ses données de localisation (voir [blocage de `<geolocation>`](#blocage_de_geolocation) pour plus d'informations).

L'interface API DOM de l'élément, {{DOMxRef("HTMLGeolocationElement")}}, fournit des fonctionnalités pour accéder aux données de position retournées, au statut d'autorisation actuel et aux erreurs si la récupération des données a échoué, réduisant la quantité de logique JavaScript à écrire. Elle propose également des évènements permettant d'exécuter du code en réponse à la réception de données de localisation, aux changements du statut d'autorisation et aux interactions de l'utilisateur·ice avec la boîte de dialogue d'autorisation.

> [!NOTE]
> Pour des raisons de performance, un maximum de trois éléments `<geolocation>` est autorisé sur une même page. Si ce quota est dépassé, toutes les instances `<geolocation>` ont leur fonctionnalité désactivée.

### Relation avec l'API de géolocalisation

[L'API Geolocation](/fr/docs/Web/API/Geolocation_API) propose une alternative plus ancienne pour la gestion des données de localisation. Cette API présente certaines limites que l'élément `<geolocation>` vise à résoudre, notamment le fait que l'interface utilisateur et la logique sous-jacente pour demander les données doivent être implémentées depuis zéro à chaque fois, et que la gestion des autorisations peut être peu intuitive.

L'élément `<geolocation>` utilise en arrière-plan des fonctionnalités de l'API de géolocalisation. Par défaut, le navigateur demande les données de localisation une fois, comme si la méthode {{DOMxRef("Geolocation.getCurrentPosition()")}} avait été appelée. Cependant, si l'attribut `watch` est défini sur `true`, le navigateur met à jour les données chaque fois que la position de l'appareil change, comme si {{DOMxRef("Geolocation.watchPosition()")}} avait été appelée.

Si les données sont récupérées avec succès, elles sont disponibles dans la propriété {{DOMxRef("HTMLGeolocationElement.position")}}, qui contient un objet {{DOMxRef("GeolocationPosition")}}. Si la récupération échoue, les informations d'erreur sont disponibles dans la propriété {{DOMxRef("HTMLGeolocationElement.error")}}, qui contient un objet {{DOMxRef("GeolocationPositionError")}}.

### Définir la langue du bouton

L'attribut universel [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang) est utilisé par l'élément `<geolocation>` pour sélectionner une langue pour son texte rendu. Cela signifie que vous pouvez définir un attribut `lang` directement sur l'élément `<geolocation>` ou sur l'un de ses ancêtres pour définir la langue que doit utiliser le navigateur pour le libellé du bouton.

Si aucun attribut `lang` approprié n'est défini, les paramètres de langue préférée du navigateur sont utilisés.

### Inclure du contenu de repli

Vous pouvez inclure du contenu de repli entre les balises d'ouverture et de fermeture de l'élément `<geolocation>` qui sera affiché s'il n'est pas pris en charge. Par exemple, vous pouvez inclure un message «&nbsp;Non pris en charge&nbsp;»&nbsp;:

```html
<geolocation>
  <p>Votre navigateur ne prend pas en charge l'élément Geolocation.</p>
</geolocation>
```

Cependant, une meilleure solution en pratique peut consister à inclure un élément {{HTMLElement("button")}} classique qui utilise l'API de géolocalisation pour récupérer les données de localisation&nbsp;:

```html
<geolocation>
  <button id="fallback">Utiliser la localisation</button>
</geolocation>
```

### Blocage de `<geolocation>`

Une idée clé de la conception de l'élément `<geolocation>` est qu'il doit refléter le choix conscient de l'utilisateur·ice d'exposer les informations de position, et empêcher les acteurs malveillants de tromper l'utilisateur·ice pour qu'il·elle active l'élément, par exemple par [détournement de clic](/fr/docs/Web/Security/Attacks/Clickjacking). Pour cette raison, le navigateur conserve un enregistrement des soi‑disant **raisons de blocage** pour chaque élément rendu.

Lorsqu'un bloqueur est actif sur un élément `<geolocation>`, celui‑ci est empêché de fonctionner (bloqué), temporairement ou définitivement, selon la raison. Lorsqu'un élément `<geolocation>` est bloqué, on dit qu'il est invalide. Vous pouvez vérifier s'il est invalide en interrogeant la propriété {{DOMxRef("HTMLGeolocationElement.isValid")}}. Vous pouvez également obtenir la raison pour laquelle il est invalide via la propriété {{DOMxRef("HTMLGeolocationElement.invalidReason")}} — consultez cette page pour la liste complète des raisons possibles.

### Restreindre la mise en forme

L'élément `<geolocation>` est soumis à plusieurs contraintes concernant les styles CSS qui peuvent lui être appliqués. Certaines de ces contraintes visent à faire respecter des règles d'accessibilité fondamentales et entraîneront la désactivation du bouton si elles ne sont pas respectées. D'autres imposent des valeurs spécifiques ou des plages de valeurs pour certaines propriétés.

Toutes les propriétés qui ne sont pas listées dans les sous‑sections suivantes, ou qui sont logiquement équivalentes à une propriété physique listée dans les sous‑sections suivantes, sont ignorées lorsqu'elles sont définies sur l'élément `<geolocation>`.

#### Contraintes d'accessibilité

Le bouton `<geolocation>` rendu est désactivé (ce qui signifie qu'appuyer dessus n'a aucun effet) si les contraintes suivantes ne sont pas respectées&nbsp;:

- Le ratio de contraste entre [le contraste des couleurs](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) des propriétés CSS {{CSSxRef("color")}} et {{CSSxRef("background-color")}} doit être d'au moins 3:1.
- La propriété CSS {{CSSxRef("font-size")}} ne doit pas être inférieure à la valeur `small` (dans le cas des mots‑clés), ni à sa valeur calculée (dans le cas des autres types de valeurs).

#### Définir les contraintes de valeur

Les contraintes suivantes de valeurs de propriétés CSS s'appliquent à l'élément `<geolocation>`. Si vous tentez de définir ces propriétés en dehors des contraintes listées pour l'élément `<geolocation>`, la valeur est ajustée pour respecter la contrainte (dans le cas d'une contrainte de valeur exacte) ou pour correspondre à la valeur calculée la plus proche, supérieure ou inférieure (dans le cas d'une contrainte de plage).

- {{CSSxRef("opacity")}}
  - : `1.0`
- {{CSSxRef("line-height")}}
  - : `normal`
- {{CSSxRef("white-space")}}
  - : `nowrap`
- {{CSSxRef("user-select")}}
  - : `none`
- {{CSSxRef("appearance")}}
  - : `auto`
- {{CSSxRef("box-sizing")}}
  - : `content-box`
- {{CSSxRef("vertical-align")}}
  - : `middle`
- {{CSSxRef("text-emphasis")}}
  - : `initial`
- {{CSSxRef("text-shadow")}}
  - : `initial`
- {{CSSxRef("outline-offset")}}
  - : `0` ou supérieur.
- {{CSSxRef("font-weight")}}
  - : `200` ou supérieur.
- {{CSSxRef("word-spacing")}}
  - : Entre `0` et `0.5em`, inclus.
- {{CSSxRef("letter-spacing")}}
  - : Entre `-0.05em` et `0.2em`, inclus.
- {{CSSxRef("letter-spacing")}}
  - : Entre `-0.05em` et `0.2em`, inclus.
- {{CSSxRef("min-height")}}
  - : `1em` ou supérieur.
- {{CSSxRef("max-height")}}
  - : `3em` ou moins. `none` est une valeur acceptée.
- {{CSSxRef("min-width")}}
  - : La valeur calculée de `fit-content` ou moins.
- {{CSSxRef("border-width")}}
  - : `1em` ou moins.

#### Contraintes complexes

Les contraintes suivantes sont plus complexes que de simples contraintes de valeur&nbsp;:

- Rembourrage en direction bloc
  - : Si la taille de bloc ({{CSSxRef("block-size")}}) est définie sur `auto`, les marges internes {{CSSxRef("padding-block-start")}} et {{CSSxRef("padding-block-end")}} (et les propriétés physiques équivalentes pour le [mode d'écriture](/fr/docs/Web/CSS/Reference/Properties/writing-mode) courant) sont limitées à `1em` au maximum et doivent être égales.
- Rembourrage en direction en ligne
  - : Si la {{CSSxRef("inline-size")}} est définie sur `auto`, les {{CSSxRef("padding-inline-start")}} et {{CSSxRef("padding-inline-end")}} (et les propriétés physiques équivalentes pour le [mode d'écriture](/fr/docs/Web/CSS/Reference/Properties/writing-mode) courant) sont limitées à `5em` au maximum et doivent être égales.

#### Propriétés pouvant être définies normalement

Les propriétés CSS suivantes peuvent être utilisées normalement&nbsp;:

- {{CSSxRef("font-kerning")}}
- {{CSSxRef("font-optical-sizing")}}
- {{CSSxRef("font-stretch")}}
- {{CSSxRef("font-synthesis-weight")}}
- {{CSSxRef("font-synthesis-style")}}
- {{CSSxRef("font-synthesis-small-caps")}}
- {{CSSxRef("font-feature-settings")}}
- {{CSSxRef("forced-color-adjust")}}
- {{CSSxRef("text-rendering")}}
- {{CSSxRef("align-self")}}
- {{CSSxRef("anchor-name")}}
- {{CSSxRef("aspect-ratio")}}
- {{CSSxRef("border")}}, {{CSSxRef("border-top")}}, {{CSSxRef("border-right")}}, {{CSSxRef("border-bottom")}} et {{CSSxRef("border-left")}}
- {{CSSxRef("clear")}}
- {{CSSxRef("color-scheme")}}
- {{CSSxRef("contain-intrinsic-width")}}
- {{CSSxRef("contain-intrinsic-height")}}
- {{CSSxRef("container-name")}}
- {{CSSxRef("container-type")}}
- {{CSSxRef("counter-reset")}}, {{CSSxRef("counter-increment")}} et {{CSSxRef("counter-set")}}
- {{CSSxRef("flex")}}, {{CSSxRef("flex-grow")}}, {{CSSxRef("flex-shrink")}} et {{CSSxRef("flex-basis")}}
- {{CSSxRef("float")}}
- {{CSSxRef("height")}}
- {{CSSxRef("isolation")}}
- {{CSSxRef("justify-self")}}
- {{CSSxRef("left")}}
- {{CSSxRef("order")}}
- {{CSSxRef("orphans")}}
- {{CSSxRef("outline")}}, {{CSSxRef("outline-color")}} et {{CSSxRef("outline-style")}}
- {{CSSxRef("overflow-anchor")}}
- {{CSSxRef("overscroll-behavior")}}, {{CSSxRef("overscroll-behavior-inline")}}, {{CSSxRef("overscroll-behavior-block")}}, {{CSSxRef("overscroll-behavior-x")}} et {{CSSxRef("overscroll-behavior-y")}}
- {{CSSxRef("page")}}
- {{CSSxRef("position")}}
- {{CSSxRef("position-anchor")}}
- {{CSSxRef("right")}}
- {{CSSxRef("scroll-margin")}}, {{CSSxRef("scroll-margin-top")}}, {{CSSxRef("scroll-margin-right")}}, {{CSSxRef("scroll-margin-bottom")}} et {{CSSxRef("scroll-margin-left")}}
- {{CSSxRef("scroll-padding")}}, {{CSSxRef("scroll-padding-top")}}, {{CSSxRef("scroll-padding-right")}}, {{CSSxRef("scroll-padding-bottom")}}, {{CSSxRef("scroll-padding-left")}}, {{CSSxRef("scroll-padding-inline-start")}}, {{CSSxRef("scroll-padding-block-start")}}, {{CSSxRef("scroll-padding-block-start")}}, {{CSSxRef("scroll-padding-inline-end")}} et {{CSSxRef("scroll-padding-block-end")}}
- {{CSSxRef("text-spacing-trim")}}
- {{CSSxRef("text-transform")}}
- {{CSSxRef("top")}}
- {{CSSxRef("visibility")}}
- {{CSSxRef("x")}}
- {{CSSxRef("y")}}
- {{CSSxRef("ruby-position")}}
- {{CSSxRef("user-select")}}
- {{CSSxRef("width")}}
- {{CSSxRef("will-change")}}
- {{CSSxRef("z-index")}}

## Accessibilité

L'élément `<geolocation>` possède un nom accessible rédigé dans [la langue définie](#définir_la_langue_du_bouton). Il possède également un [`role`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles) de [`button`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role) afin d'être reconnu comme un bouton par les lecteurs d'écran.

De plus, l'élément `<geolocation>` a une valeur [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex) par défaut de `0`, ce qui lui permet de se comporter comme un véritable `<button>` en ce qui concerne la sélection clavier.

Enfin, reportez‑vous à la section [Contraintes d'accessibilité](#contraintes_daccessibilité) pour obtenir des informations sur les contraintes de mise en forme appliquées à l'élément `<geolocation>` afin de garantir le respect des exigences d'accessibilité fondamentales.

## Exemples

### Exemple simple d'utilisation

Cet exemple utilise l'élément `<geolocation>` pour récupérer votre position actuelle, qui est affichée sous le bouton dans un élément {{HTMLElement("p")}}. L'exemple utilise également un bouton `<button>` classique comme solution de repli pour récupérer les données de localisation dans les navigateurs qui ne prennent pas en charge `<geolocation>`.

#### HTML

Nous incluons un élément `<geolocation>` avec un bouton `<button>` de repli imbriqué à l'intérieur, qui sera affiché dans les navigateurs ne prenant pas en charge `<geolocation>`. Nous incluons également un élément `<p>` pour afficher les données de localisation et les erreurs.

```html
<geolocation>
  <button id="fallback">Utiliser la localisation</button>
</geolocation>
<p id="output"></p>
```

#### JavaScript

Dans notre script, nous commençons par récupérer une référence à l'élément `<p>` de sortie. Nous détectons ensuite si l'élément `<geolocation>` est pris en charge en testant `typeof HTMLGeolocationElement === "function"`&nbsp;:

- Si l'élément est pris en charge, nous récupérons d'abord une référence à l'élément `<geolocation>` puis nous ajoutons un écouteur d'évènement {{DOMxRef("HTMLGeolocationElement.location_event", "location")}}.
  Lorsque le bouton est pressé et que les données sont récupérées, l'écouteur affiche les coordonnées (latitude, longitude) dans l'élément `<p>` de sortie (récupérées via la propriété {{DOMxRef("HTMLGeolocationElement.position", "position")}}), ou un message d'erreur si la récupération des données a échoué (récupéré via la propriété {{DOMxRef("HTMLGeolocationElement.error", "error")}}).
- Si l'élément n'est pas pris en charge, nous récupérons une référence au bouton `<button>` de repli et nous récupérons et affichons les mêmes données, sauf que cette fois nous utilisons un écouteur d'évènement `click` sur le bouton, et un appel à {{DOMxRef("Geolocation.getCurrentPosition()")}} pour récupérer les données.

```js
const outputElem = document.querySelector("#output");

if (typeof HTMLGeolocationElement === "function") {
  const geo = document.querySelector("geolocation");
  geo.addEventListener("location", () => {
    if (geo.position) {
      outputElem.textContent += `(${geo.position.coords.latitude},${geo.position.coords.longitude}), `;
    } else if (geo.error) {
      outputElem.textContent += `${geo.error.message}, `;
    }
  });
} else {
  const fallback = document.querySelector("#fallback");
  fallback.addEventListener("click", () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        outputElem.textContent += `(${position.coords.latitude}, ${position.coords.longitude}), `;
      },
      (error) => {
        outputElem.textContent += `${error.message}, `;
      },
    );
  });
}
```

#### Résultat

Voir ce code [en fonctionnement <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/geolocation-element/basic-example/) ([code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-example)). Vous pouvez aussi trouver une version de cet exemple qui inclut l'attribut `watch` sur l'élément `<geolocation>` et qui récupère donc les données de localisation à chaque changement de position de l'appareil de l'utilisateur·ice (voir [en fonctionnement <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/geolocation-element/basic-watch-example/), et le [code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-watch-example)).

Essayez d'afficher les démonstrations dans un navigateur pris en charge et dans un navigateur non pris en charge si possible, et notez la différence dans le flux du dialogue d'autorisation lorsque vous choisissez d'autoriser ou de refuser la permission d'utiliser `geolocation`.

Pour un guide détaillé d'un exemple plus complet qui utilise les données de localisation pour créer une carte de votre zone locale, consultez la page de référence {{DOMxRef("HTMLGeolocationElement")}}.

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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >Contenu phrasé</a
        >, contenu interactif, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Tout contenu de repli transparent approprié.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, les balises d'ouverture et de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément qui accepte du contenu phrasé.</td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant <sup>(angl.)</sup></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"><code>button</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLGeolocationElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface API {{DOMxRef("HTMLGeolocationElement")}}
- La [politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy) {{HTTPHeader("Permissions-Policy/geolocation", "geolocation")}}
- [L'API Geolocation](/fr/docs/Web/API/Geolocation_API)
- [L'API Permissions](/fr/docs/Web/API/Permissions_API)
- [Présentation de l'élément HTML `<geolocation>` <sup>(angl.)</sup>](https://developer.chrome.com/blog/geolocation-html-element) sur developer.chrome.com (2026)
