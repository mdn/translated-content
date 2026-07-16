---
title: Tableaux de spécifications
slug: MDN/Writing_guidelines/Page_structures/Specification_tables
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

Chaque page de référence sur MDN doit fournir des informations sur la ou les spécifications dans lesquelles cette API ou technologie a été définie. Cet article montre à quoi ressemblent ces tableaux et explique comment les ajouter.

La définition de la section des spécifications est similaire à celle du [tableau de compatibilité](/fr/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables), est généralement générée à partir de la même source de données, et apparaît typiquement juste avant celui-ci dans une page.

## Tableaux de spécifications standards

La section de spécifications standard doit ressembler à ceci&nbsp;:

```md
## Spécifications

\{{Specifications}}
```

La macro `\{{Specifications}}` génère le tableau des spécifications à partir de la ou des valeurs présentes dans le front-matter de la page.

Par défaut, la ou les valeurs de la clé `browser-compat` sont utilisées.
Chaque valeur fait référence à une fonctionnalité particulière et à ses informations de compatibilité et de spécification dans le dépôt [browser-compat-data <sup>(angl.)</sup>](https://github.com/mdn/browser-compat-data).
Par exemple, la page {{CSSxRef("text-align")}} possède la clé suivante, qui lui permet d'obtenir les informations de spécification associées&nbsp;:

> [!WARNING]
> Cela ne concerne que les pages anglaises.

```yaml
browser-compat: css.property.text-align
```

Certaines fonctionnalités ne sont pas maintenues dans le dépôt ci-dessus.
Dans ces cas, les informations de spécification peuvent être ajoutées au front-matter de la page via la clé `spec-urls`.
Par exemple, l'attribut [`aria-atomic`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic) possède la clé front-matter&nbsp;:

> [!WARNING]
> Cela ne concerne que les pages anglaises.

```yaml
spec-urls: https://w3c.github.io/aria/#aria-atomic
```

Le tableau des spécifications pour la clé `css.property.text-align` ci-dessus est affiché ainsi&nbsp;:

### Spécifications

{{Specifications}}

## Fonctionnalités non standard

Lors de la documentation d'une fonctionnalité non standard, en particulier si elle a été retirée d'un processus de standardisation, n'utilisez pas la macro `\{{Specifications}}`.

Essayez plutôt de fournir des informations sur le statut de la fonctionnalité et d'éventuelles alternatives. Exemples&nbsp;:

- Cette méthode n'est plus sur une voie de standardisation. Elle est conservée pour des raisons de compatibilité. Utilisez plutôt _cette autre méthode_.
- Cette méthode faisait initialement partie de [DOM Level 2 Traversal and Range <sup>(angl.)</sup>](https://www.w3.org/TR/DOM-Level-2-Traversal-Range/), mais est absente de la spécification DOM actuelle. Cette fonctionnalité n'est plus destinée à devenir un standard.
- Ce gestionnaire d'événement faisait partie de l'ancienne [API WebVR <sup>(angl.)</sup>](https://immersive-web.github.io/webvr/spec/1.1/) qui a été remplacée par la [WebXR Device API <sup>(angl.)</sup>](https://immersive-web.github.io/webxr/). Elle n'est plus destinée à devenir un standard.
