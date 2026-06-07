---
title: "Attribut HTML universel : `style`"
short-title: style
slug: Web/HTML/Reference/Global_attributes/style
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`style`** contient des déclarations [CSS](/fr/docs/Web/CSS) afin de mettre en forme l'élément. Notez qu'il est recommandé de définir les règles de mise en forme dans un ou plusieurs fichiers séparés. Cet attribut, ainsi que l'élément {{HTMLElement("style")}} ont simplement pour but de permettre une mise en forme rapide, notamment pour tester.

{{InteractiveExample("Démonstration HTML&nbsp;: style", "tabbed-shorter")}}

```html interactive-example
<div style="background: #ffe7e8; border: 2px solid #e66465">
  <p style="margin: 15px; line-height: 1.5; text-align: center">
    Bien, je suis la limace de votre vidéo<br />
    Glissant le long de votre sol de salon.
  </p>
</div>
```

> [!NOTE]
> Cet attribut ne doit pas être utilisé pour transmettre des informations sémantiques. Même si tous les styles sont supprimés, une page doit rester sémantiquement correcte. En règle générale, il ne doit pas être utilisé pour masquer des informations non pertinentes&nbsp;; cela doit être fait à l'aide de l'attribut [`hidden`](/fr/docs/Web/HTML/Reference/Global_attributes/hidden).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- La propriété API {{DOMxRef("HTMLElement.style")}}
