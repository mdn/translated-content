---
title: "Attribut HTML universel : `translate`"
short-title: translate
slug: Web/HTML/Reference/Global_attributes/translate
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`translate`** est un attribut [énuméré](/fr/docs/Glossary/Enumerated) utilisé pour définir si les valeurs _des attributs traduisibles_ d'un élément et ses nœuds enfants {{DOMxRef("Text")}} doivent être traduits lors de la localisation de la page, ou laissés inchangés.

Il peut prendre les valeurs suivantes&nbsp;:

- Une chaîne de caractères vide ou `yes`, ce qui indique que l'élément doit être traduit lors de la localisation de la page.
- `no`, ce qui indique que l'élément ne doit pas être traduit.

Bien que tous les navigateurs ne reconnaissent pas cet attribut, il est respecté par des systèmes de traduction automatique tels que Google Translate, et peut aussi être pris en compte par des outils utilisés par des traducteur·ice·s humain·e·s. Il est donc important que les auteur·ice·s web utilisent cet attribut pour marquer le contenu qui ne doit pas être traduit.

## Exemples

Dans cet exemple, l'attribut `translate` est utilisé pour demander aux outils de traduction de ne pas traduire le nom de la marque de l'entreprise dans le pied de page.

```html
<footer>
  <small>© 2020 <span translate="no">NomDeMarque</span></small>
</footer>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- La propriété {{DOMxRef("HTMLElement.translate")}} qui reflète cet attribut.
- [Utiliser l'attribut translate de HTML <sup>(angl.)</sup>](https://www.w3.org/International/questions/qa-translate-flag).
- L'attribut HTML universel [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang)
