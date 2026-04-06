---
title: text-combine-upright
slug: Web/CSS/Reference/Properties/text-combine-upright
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-combine-upright`** définit comment intégrer une combinaison de plusieurs caractères dans l'espace normalement alloué à un seul caractère. Si la combinaison obtenue est plus large que `1em`, l'agent utilisateur devra compresser le contenu afin qu'il tienne sur `1em`. La combinaison est ensuite manipulée comme un seul glyphe pour la disposition et pour la décoration. Enfin, cette propriété n'a d'effet que sur les modes d'écriture verticaux.

C'est utilisé pour produire un effet connu sous le nom de tate-chū-yoko <q lang="ja">縦中横</q> en japonais, ou sous le nom de <q lang="zh-Hant">橫向文字</q> en chinois.

{{InteractiveExample("Démonstration CSS&nbsp;: text-combine-upright")}}

```css interactive-example-choice
text-combine-upright: none;
```

```css interactive-example-choice
text-combine-upright: all;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div>
    <p>
      <span class="transition-all" id="example-element"
        >2022<span>年</span>12<span>月</span>8</span
      >日から楽しい
    </p>
  </div>
</section>
```

```css interactive-example
p {
  writing-mode: vertical-rl;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
text-combine-upright: none;
text-combine-upright: all;

/* Valeurs globales */
text-combine-upright: inherit;
text-combine-upright: initial;
text-combine-upright: revert;
text-combine-upright: revert-layer;
text-combine-upright: unset;
```

### Valeurs

- `none`
  - : Aucun traitement particulier n'est appliqué.
- `all`
  - : L'agent utilisateur tente de compresser tous les caractères consécutifs dans une même boîte afin qu'ils occupent l'espace d'un seul caractère sur l'axe vertical de la boîte.

> [!NOTE]
> Le module [modes d'écriture CSS](/fr/docs/Web/CSS/Guides/Writing_modes) définit une valeur `digits <integer>` pour la propriété `text-combine-upright` afin d'afficher deux à quatre chiffres {{Glossary("ASCII")}} consécutifs (U+0030-U+0039) de sorte qu'ils occupent l'espace d'un seul caractère dans la boîte de ligne verticale, cependant, cela n'est pris en charge par aucun navigateur.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser `all` avec du texte horizontal

La valeur `all` nécessite un balisage autour de chaque fragment de texte horizontal, mais elle est actuellement prise en charge par plus de navigateurs que la valeur `digits`.

#### HTML

```html
<p lang="zh-Hant">
  民國<span class="num">105</span>年<span class="num">4</span>月<span
    class="num"
    >29</span
  >日
</p>
```

#### CSS

```css
html {
  writing-mode: vertical-rl;
  font: 24px serif;
}
.num {
  text-combine-upright: all;
}
```

#### Résultats

{{EmbedLiveSample("Utiliser `all` avec du texte horizontal", 250, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("text-orientation")}}
