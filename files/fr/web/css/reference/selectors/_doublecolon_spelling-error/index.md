---
title: ::spelling-error
slug: Web/CSS/Reference/Selectors/::spelling-error
l10n:
  sourceCommit: c52ed787442db9d65b21f5c2874fa6bfd08a253a
---

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::spelling-error`** représente une portion de texte que l'{{Glossary("user agent", "agent utilisateur")}} signale comme étant mal orthographiée.

Le pseudo-élément `::spelling-error` suit un modèle d'héritage spécial commun à tous les pseudo-éléments de surlignage. Pour plus de détails sur le fonctionnement de cet héritage, consultez la section [Héritage des pseudo-éléments de mise en évidence](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements#héritage_des_pseudo-éléments_de_mise_en_évidence).

## Propriétés autoriséees

Seul un sous-ensemble restreint de propriétés CSS peut être utilisé dans une règle dont le sélecteur contient `::spelling-error`&nbsp;:

- {{CSSxRef("color")}}
- {{CSSxRef("background-color")}}
- {{CSSxRef("cursor")}}
- {{CSSxRef("caret-color")}}
- {{CSSxRef("outline")}} et les propriétés détaillées correspondantes.
- {{CSSxRef("text-decoration")}} et les propriétés détaillées correspondantes.
- {{CSSxRef("text-emphasis-color")}}
- {{CSSxRef("text-shadow")}}

## Syntaxe

```css
::spelling-error {
  /* ... */
}
```

## Exemples

### Vérification orthographique de base

Dans cet exemple, les navigateurs éventuellement compatibles devraient mettre en évidence toute erreur d'orthographe signalée avec les styles affichés.

#### HTML

```html
<p contenteditable spellcheck="true">
  Alice devina tout de suite qu'il cherch l'éventail et la paire de gants.
</p>
```

#### CSS

```css
::spelling-error {
  text-decoration: wavy red underline;
}
```

#### Résultat

{{EmbedLiveSample("vérification_orthographique_de_base", '100%', 60)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le pseudo-élément {{CSSxRef("::grammar-error")}}
- La propriété {{CSSxRef("text-decoration-line")}}
