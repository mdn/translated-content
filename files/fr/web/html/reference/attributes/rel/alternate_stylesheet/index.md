---
title: rel="alternate stylesheet"
slug: Web/HTML/Reference/Attributes/rel/alternate_stylesheet
original_slug: Web/CSS/Alternative_style_sheets
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

La paire de mots-clés **`alternate stylesheet`**, lorsqu'elle est utilisée comme valeur pour l'attribut [`rel`](/fr/docs/Web/HTML/Reference/Elements/link#rel) de l'élément {{HTMLElement("link")}}, indique que la ressource cible est une _feuille de style alternative_. Définir des **feuilles de style alternatives** dans une page web permet aux utilisateur·ice·s de voir plusieurs versions d'une page selon leurs besoins ou préférences.

> [!NOTE]
> Cette fonctionnalité n'est pas bien prise en charge dans les navigateurs sans extension. Pour proposer des présentations alternatives qui fonctionnent avec les préférences existantes de l'utilisateur·ice, voir les [fonctions média CSS](/fr/docs/Web/CSS/Reference/At-rules/@media#fonctions_média) {{CSSxRef("@media/prefers-color-scheme","prefers-color-scheme")}} et {{CSSxRef("@media/prefers-contrast","prefers-contrast")}}.

Firefox permet aux utilisateur·ice·s de sélectionner des {{Glossary("stylesheet", "feuilles de style")}} alternatives via le sous-menu _Affichage &gt; Style de la page_, qui affiche les valeurs des attributs [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title). Les autres navigateurs nécessitent une extension pour activer cette fonctionnalité. La page web peut aussi fournir sa propre interface utilisateur pour permettre de changer de style.

## Exemples

### Définir des feuilles de style alternatives

Les feuilles de style alternatives sont spécifiées à l'aide d'éléments {{HTMLElement("link")}} avec les attributs `rel="alternate stylesheet"` et `title="…"`. Par exemple&nbsp;:

```html
<link href="reset.css" rel="stylesheet" />

<link href="default.css" rel="stylesheet" title="Style par défaut" />
<link href="fancy.css" rel="alternate stylesheet" title="Fantaisie" />
<link href="basic.css" rel="alternate stylesheet" title="Basique" />
```

Dans cet exemple, les styles «&nbsp;Style par défaut&nbsp;», «&nbsp;Fantaisie&nbsp;» et «&nbsp;Basique&nbsp;» seront listés dans le sous-menu _Style de la page_ de Firefox, avec «&nbsp;Style par défaut&nbsp;» pré-sélectionné. Lorsque l'utilisateur·ice sélectionne un autre style, la page est immédiatement re-rendue avec cette feuille de style.

Quel que soit le style sélectionné, les règles de la feuille de style `reset.css` seront toujours appliquées.

### Exemple interactif

[Essayez un exemple fonctionnel ici <sup>(angl.)</sup>](https://mdn.github.io/css-examples/alt-style-sheets/).

## Détails

Toute feuille de style dans un document appartient à l'une des catégories suivantes&nbsp;:

- **Persistante** (a `rel="stylesheet"`, pas de `title=""`)&nbsp;: toujours appliquée au document.
- **Préférée** (a `rel="stylesheet"` avec un attribut `title="…"` spécifié)&nbsp;: appliquée par défaut, mais {{DOMxRef("StyleSheet.disabled", "désactivée", "", 1)}} si une feuille de style alternative est sélectionnée. **Il ne peut y avoir qu'une seule feuille de style préférée**, donc fournir des feuilles de style avec des attributs title différents fera que certaines seront ignorées.
- **Alternative** (`rel="alternate stylesheet"` avec un attribut `title="…"` spécifié)&nbsp;: désactivée par défaut, peut être sélectionnée.

Dans les cas où un menu de feuilles de style existe, lorsque les feuilles de style sont référencées avec un attribut `title` sur l'élément `{{HTMLElement("link", "&lt;link rel=\"stylesheet\"&gt;")}}` ou {{HTMLElement("style")}}, le titre devient l'un des choix proposés à l'utilisateur·ice. Les feuilles de style liées avec le même [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title) font partie du même choix. Les feuilles de style liées sans attribut `title` sont toujours appliquées.

Utilisez `rel="stylesheet"` pour lier le style par défaut, et `rel="alternate stylesheet"` pour lier des feuilles de style alternatives. Cela indique au navigateur quel titre de feuille de style doit être sélectionné par défaut, et fait que cette sélection par défaut s'applique dans les navigateurs qui ne prennent pas en charge les feuilles de style alternatives.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [CSS](/fr/docs/Web/CSS)
- [Utiliser des informations de style dynamiques](/fr/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
