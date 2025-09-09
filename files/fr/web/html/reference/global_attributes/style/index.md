---
title: style
slug: Web/HTML/Reference/Global_attributes/style
original_slug: Web/HTML/Global_attributes/style
---

{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`style`** contient des déclarations [CSS](/fr/docs/Web/CSS) afin de mettre en forme l'élément. Attention, il est recommandé de définir les règles de mise en forme dans un ou plusieurs fichiers séparés. Cet attribut, ainsi que l'élément {{HTMLElement("style")}} ont simplement pour but de permettre une mise en forme rapide, notamment pour tester.

{{InteractiveExample("HTML Demo: style", "tabbed-shorter")}}

```html interactive-example
<div style="background: #ffe7e8; border: 2px solid #e66465">
  <p style="margin: 15px; line-height: 1.5; text-align: center">
    Well, I am the slime from your video<br />
    Oozin' along on your livin' room floor.
  </p>
</div>
```

> [!NOTE]
> Cet attribut ne doit pas être utilisé à des fins sémantiques. En effet, si toute mise en forme est retirée, toute page doit rester correcte d'un point de vue sémantique. On ne devrait pas, notamment, utiliser cet attribut afin de cacher des informations qui ne seraient pas pertinentes (cela devrait être réalisé avec l'attribut [`hidden`](/fr/docs/Web/HTML/Reference/Global_attributes#hidden).

## Exemples

### HTML

```html
<p style="color: rgb(255, 0, 0)">
  Cette méthode n'est pas vraiment recommandée
</p>

<p class="toto">Alors que ça, c'est mieux.</p>
```

### CSS

```css
.toto {
  color: rgb(0, 255, 0);
}
```

### Résultat

{{EmbedLiveSample("Exemples","300","300")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les différents attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
