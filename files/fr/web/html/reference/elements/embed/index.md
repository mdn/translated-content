---
title: "<embed> : l'élément de contenu externe embarqué"
slug: Web/HTML/Reference/Elements/embed
l10n:
  sourceCommit: 5dc9a1731aec0c04cebb4fdfa436b01cd30a20ae
---

L'élément [HTML](/fr/docs/Web/HTML) **`<embed>`** intègre du contenu externe au point défini dans le document. Ce contenu est fourni par une application externe ou une autre source de contenu interactif, comme un plugin de navigateur.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;embed&gt;", "tabbed-standard")}}

```html interactive-example
<embed
  type="video/mp4"
  src="/shared-assets/videos/flower.mp4"
  width="250"
  height="200" />
```

> [!NOTE]
> Ce sujet documente uniquement l'élément tel qu'il est défini dans la [HTML Living Standard <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/iframe-embed-object.html#the-embed-element). Il n'aborde pas les implémentations antérieures non standardisées de cet élément.

Il faut garder à l'esprit que la plupart des navigateurs ont déprécié voire retiré la prise en charge des plugins. Aussi, mieux vaut ne pas utiliser sur `<embed>` si on souhaite qu'un site ou une application soit fonctionnelle sur un navigateur moyen.

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `height`
  - : La hauteur utilisée pour l'affichage de la ressource, exprimée en [pixels CSS <sup>(angl.)</sup>](https://drafts.csswg.org/css-values/#px). La valeur est absolue&nbsp;; les pourcentages _ne sont pas_ autorisés.
- `src`
  - : L'URL de la ressource à intégrer.
- `type`
  - : Le {{Glossary("MIME type", "type MIME")}} à utiliser pour sélectionner le plugin à instancier.
- `width`
  - : La largeur utilisée pour l'affichage de la ressource, exprimée en [pixels CSS <sup>(angl.)</sup>](https://drafts.csswg.org/css-values/#px). La valeur est absolue&nbsp;; les pourcentages _ne sont pas_ autorisés.

## Notes d'utilisation

Il est possible d'utiliser la propriété CSS {{CSSxRef("object-position")}} afin d'ajuster la position de l'objet embarqué au sein de la _frame_ et la propriété CSS [`object-fit`](/fr/docs/Web/CSS/Reference/Properties/object-fit) afin de contrôler la façon dont la taille de l'objet est ajustée par rapport à celle de la _frame_.

> [!NOTE]
> La propriété {{CSSxRef("object-fit")}} n'a aucun effet sur les éléments `<embed>`.

## Accessibilité

Utilisez l'attribut [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title) sur un élément `embed` pour étiqueter son contenu afin que les personnes naviguant avec une technologie d'assistance telle qu'un lecteur d'écran puissent comprendre ce qu'il contient. La valeur du titre doit décrire de manière concise le contenu intégré. Sans titre, il se peut qu'elles ne soient pas en mesure de déterminer quel est son contenu intégré. Ce changement de contexte peut être source de confusion et de perte de temps, en particulier si l'élément `embed` contient du contenu interactif comme de la vidéo ou de l'audio.

## Exemples

```html
<embed
  type="video/quicktime"
  src="film.mov"
  width="640"
  height="480"
  title="Titre de ma vidéo" />
```

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_intégré"
          >contenu intégré</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_interactif"
          >contenu interactif</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Aucun, cet élément est un élément vide.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Cet élément doit avoir une balise ouvrante mais ne doit pas avoir de
        balise fermante.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>Tout élément qui accepte du contenu intégré.</td>
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
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"><code>document</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"><code>img</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLEmbedElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- D'autres éléments sont utilisés pour intégrer du contenu de différents types, notamment {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}}, {{MathMLElement("math")}}, {{HTMLElement("object")}}, {{SVGElement("svg")}} et {{HTMLElement("video")}}.
- Positionnement et dimensionnement du contenu intégré dans son cadre&nbsp;: {{CSSxRef("object-position")}} et {{CSSxRef("object-fit")}}
