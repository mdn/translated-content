---
title: :has-slotted
slug: Web/CSS/Reference/Selectors/:has-slotted
original_slug: Web/CSS/:has-slotted
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:has-slotted`** correspond lorsque le contenu d'un élément {{HTMLElement(`slot`)}} n'est pas vide ou n'utilise pas la valeur par défaut (voir [Utilisation des modèles et des slots](/fr/docs/Web/API/Web_components/Using_templates_and_slots) pour plus d'informations).

> [!NOTE]
> Même un seul nœud de texte blanc suffit pour que `:has-slotted` s'applique.

Cela ne fonctionne que lorsqu'il est utilisé dans CSS placé dans un [DOM sombre (<i lang="en">shadow DOM</i>)](/fr/docs/Web/API/Web_components/Using_shadow_DOM).

```css
/* Sélectionne le contenu d'un élément <slot> qui a un contenu qui n'est pas par défaut */
:has-slotted {
  color: green;
}

/* Sélectionne le contenu d'un élément <slot> qui n'a pas de contenu ou qui utilise la valeur par défaut */
:not(:has-slotted) {
  color: red;
}
```

## Syntaxe

```css-nolint
:has-slotted {
  /* ... */
}
```

## Exemples

Cet exemple a deux éléments `<slot>`, dont l'un a été assigné à un contenu et l'autre ne l'a pas été.

### HTML

```html
<p>
  <template shadowrootmode="open">
    <style>
      :has-slotted {
        color: rebeccapurple;
      }
    </style>
    <slot name="one">Emplacement 1</slot>
    <slot name="two">Emplacement 2</slot>
  </template>
  <span slot="one">Contenu assigné</span>
</p>
```

### Résultat

L'élément `<slot>` qui a été assigné à un contenu a correspondu à la pseudo-classe `:has-slotted` et a reçu la valeur `color` de `rebeccapurple`.

{{EmbedLiveSample("Exemples", 100, 70)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("template")}}
- L'élément HTML {{HTMLElement("slot")}}
- {{CSSXRef("::slotted")}}
