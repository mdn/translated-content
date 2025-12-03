---
title: ::grammar-error
slug: Web/CSS/Reference/Selectors/::grammar-error
original_slug: Web/CSS/::grammar-error
l10n:
  sourceCommit: 37482c6bb0894d047a225c24f102352f89788523
---

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::grammar-error`** représente une portion de texte que le navigateur signale comme contenant une ou plusieurs erreurs de grammaire.

Le pseudo-élément `::grammar-error` suit un modèle d'héritage spécial commun à tous les pseudo-éléments de mise en évidence. Pour plus de détails sur le fonctionnement de cet héritage, consultez la section [Héritage des pseudo-éléments mise en évidence](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements#héritage_des_pseudo-éléments_de_mise_en_évidence).

## Propriétés autorisées

Seul un sous-ensemble restreint de propriétés CSS peut être utilisé dans une règle contenant `::grammar-error`&nbsp;:

- {{cssxref("background-color")}},
- {{cssxref("caret-color")}},
- {{cssxref("color")}},
- {{cssxref("cursor")}},
- {{cssxref("outline")}} et les propriétés détaillées associées,
- {{cssxref("text-decoration")}} et les propriétés détaillées associées.
- {{cssxref("text-emphasis-color")}},
- {{cssxref("text-shadow")}}

## Syntaxe

```css
::grammar-error {
  /* ... */
}
```

## Exemples

### Vérification grammaticale de base des documents

Dans cet exemple, les navigateurs prenant en charge cette fonctionnalité devraient mettre en évidence toute erreur grammaticale signalée avec les styles indiqués.

#### HTML

```html
<p contenteditable spellcheck="true">Mes amis vienent à la fête ce soir.</p>
```

#### CSS

```css
::grammar-error {
  text-decoration: underline red;
  color: red;
}
```

#### Résultat

{{EmbedLiveSample('vérification_grammaticale_de_base_des_documents', '100%', 60)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("::spelling-error")}}
- {{cssxref("text-decoration-line")}}
