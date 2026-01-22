---
title: Attribut booléen (HTML)
slug: Glossary/Boolean/HTML
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **attribut booléen** en {{Glossary("HTML")}} est un {{Glossary("attribute", "attribut")}} qui représente les valeurs `true` ou `false`. Si une balise HTML contient un attribut booléen — quelle que soit la valeur de cet attribut — l'attribut est défini à `true` sur cet élément. Si une balise HTML ne contient pas l'attribut, l'attribut est défini à `false`.

Si l'attribut est présent, il peut avoir l'une des formes suivantes&nbsp;:

- le nom de l'attribut seul&nbsp;; par exemple, `attribute`, ce qui signifie que sa valeur implicite est la chaîne de caractères vide
- l'attribut avec une valeur de chaîne de caractères vide&nbsp;; par exemple, `attribute=""`
- l'attribut avec une valeur égale à son propre nom, sans espace avant ou après et sans tenir compte de la casse&nbsp;; par exemple, `attribute="attribute"`, `attribute="ATTRIBUTE"`

> [!NOTE]
> Les chaînes de caractères "true" et "false" sont des valeurs invalides. Pour définir l'attribut à `false`, il faut simplement omettre l'attribut. Même si les navigateurs modernes traitent _n'importe quelle_ valeur de chaîne de caractères comme `true`, il ne faut pas se fier à ce comportement.

Voici un exemple d'attribut booléen HTML `checked`&nbsp;:

```html
<!-- Les cases à cocher suivantes seront cochées lors de l'affichage initial -->
<input type="checkbox" checked />
<input type="checkbox" checked="" />
<input type="checkbox" checked="true" />
<input type="checkbox" checked="false" />
<input type="checkbox" checked="n'importe quelle valeur" />

<!-- La case à cocher ne sera pas cochée lors de l'affichage initial -->
<input type="checkbox" />
```

## Voir aussi

- [Attributs booléens](/fr/docs/Web/HTML/Reference/Attributes#boolean_attributes)
- [Attributs booléens <sup>(angl.)</sup>](https://html.spec.whatwg.org/#boolean-attributes) dans la spécification HTML
- Termes associés du glossaire&nbsp;:
  - {{Glossary("Attribute", "Attribut")}}
  - {{Glossary("Enumerated", "Attribut à valeur contrainte")}}
