---
title: "<embed> : l'élément de contenu externe embarqué"
slug: Web/HTML/Element/embed
---

{{HTMLSidebar}}

L'élément HTML **`<embed>`** permet d'intégrer du contenu externe à cet endroit dans le document. Le contenu peut être fourni par une application externe ou une autre source telle qu'un _plugin_ du navigateur.

{{EmbedInteractiveExample("pages/tabbed/embed.html", "tabbed-standard")}}

> **Note :** Cet article ne traite que de l'élément faisant partie du HTML5. Il ne concerne pas la version précédente et non normalisée de cet élément.

Il faut garder à l'esprit que la plupart des navigateurs ont déprécié voire retiré la prise en charge des plugins. Aussi, mieux vaut ne pas utiliser sur `<embed>` si on souhaite qu'un site ou une application soit fonctionnelle sur un navigateur moyen.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a
          href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a
          href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >,
        <a
          href="/fr/docs/Web/Guide/HTML/Content_categories#phrasing_content"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#embedded_content"
          >contenu intégré</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#interactive_content"
          >contenu interactif</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content"
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
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="https://w3c.github.io/aria/#application"
          ><code>application</code></a
        >,
        <a href="https://w3c.github.io/aria/#document"><code>document</code></a
        >, <a href="https://w3c.github.io/aria/#img"><code>img</code></a
        >, <a href="https://w3c.github.io/aria/#none"><code>none</code></a
        >,
        <a href="https://w3c.github.io/aria/#presentation"
          ><code>presentation</code></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLEmbedElement"
          ><code>HTMLEmbedElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément possède [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

- `height`
  - : La hauteur utilisée pour l'affichage de la ressource, exprimée en [pixels CSS](https://drafts.csswg.org/css-values/#px). La valeur est absolue, les pourcentages ne sont pas autorisés.
- `src`
  - : L'URL de la ressource à intégrer.
- `type`
  - : Le type MIME à utiliser pour sélectionner le plugin à instancier.
- `width`
  - : La largeur utilisée pour l'affichage de la ressource, exprimée en [pixels CSS](https://drafts.csswg.org/css-values/#px). La valeur est absolue, les pourcentages ne sont pas autorisés.

## Notes d'utilisation

Il est possible d'utiliser la propriété CSS [`object-position`](/fr/docs/Web/CSS/object-position) afin d'ajuster la position de l'objet embarqué au sein de la _frame_ et la propriété CSS [`object-fit`](/fr/docs/Web/CSS/object-fit) afin de contrôler la façon dont la taille de l'objet est ajustée par rapport à celle de la _frame_.

## Exemples

```html
<embed
  type="video/quicktime"
  src="film.mov"
  width="640"
  height="480"
  title="Titre de ma vidéo" />
```

## Accessibilité

Utilisez l'attribut [`title`](/fr/docs/Web/HTML/Global_attributes/title) sur un élément `embed` pour étiqueter son contenu afin que les personnes naviguant avec une technologie d'assistance telle qu'un lecteur d'écran puissent comprendre ce qu'il contient. La valeur du titre doit décrire de manière concise le contenu intégré. Sans titre, il se peut qu'elles ne soient pas en mesure de déterminer quel est son contenu intégré. Ce changement de contexte peut être source de confusion et de perte de temps, en particulier si l'élément `embed` contient du contenu interactif comme de la vidéo ou de l'audio.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- D'autres éléments sont utilisés pour intégrer du contenu de différents types, notamment [`<audio>`](/fr/docs/Web/HTML/Element/audio), [`<canvas>`](/fr/docs/Web/HTML/Element/canvas), [`<iframe>`](/fr/docs/Web/HTML/Element/iframe), [`<img>`](/fr/docs/Web/HTML/Element/Img), [`<math>`](/fr/docs/Web/MathML/Element/math), [`<object>`](/fr/docs/Web/HTML/Element/object), [`<svg>`](/fr/docs/Web/SVG/Element/svg), and [`<video>`](/fr/docs/Web/HTML/Element/video).
- Positionnement et dimensionnement du contenu intégré dans son cadre : [`object-position`](/fr/docs/Web/CSS/object-position) and [`object-fit`](/fr/docs/Web/CSS/object-fit)
