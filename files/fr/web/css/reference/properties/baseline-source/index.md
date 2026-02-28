---
title: baseline-source
slug: Web/CSS/Reference/Properties/baseline-source
l10n:
  sourceCommit: 5ebca2edd6095fb3f61d442ed3146fa37fffbf7d
---

La propriété [CSS](/fr/docs/Web/CSS) **`baseline-source`** définit la [ligne de base](/fr/docs/Web/CSS/Reference/Values/baseline-position) à utiliser lorsque les boîtes de niveau en ligne ont plusieurs lignes de base possibles, comme les [blocs en ligne](/fr/docs/Web/CSS/Guides/Display/Block_and_inline_layout) multi-lignes ou les [conteneurs flexibles en ligne](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts#le_conteneur_flexible).
Les valeurs permettent de choisir entre l'alignement sur la première ligne de base, la dernière ligne de base de la boîte, ou de laisser le navigateur décider automatiquement selon le type de boîte.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
baseline-source: auto;
baseline-source: first;
baseline-source: last;

/* Valeurs globales */
baseline-source: inherit;
baseline-source: initial;
baseline-source: revert;
baseline-source: revert-layer;
baseline-source: unset;
```

### Valeurs

- `auto`
  - : Définit l'alignement sur [`last baseline`](/fr/docs/Web/CSS/Reference/Values/baseline-position#last_baseline) pour les blocs en ligne, et sur [`first baseline`](/fr/docs/Web/CSS/Reference/Values/baseline-position#first_baseline) pour tout le reste.
- `first`
  - : Définit l'alignement sur `first baseline`.
- `last`
  - : Définit l'alignement sur `last baseline`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Sélection de la ligne de base dans les conteneurs flexibles en ligne

Cet exemple montre comment utiliser la propriété `baseline-source` pour contrôler l'alignement sur la ligne de base des conteneurs flexibles en ligne.

#### HTML

Notre HTML comprend plusieurs éléments HTML {{HTMLElement("span")}}, qui sont des conteneurs en ligne génériques pour le contenu phrastique.
Trois des éléments `<span>` contiennent des enfants `<span>` imbriqués.

```html
<span>Ligne de base ___</span>

<span class="box first">
  <span>First</span>
  <span>A</span>
  <span>B</span>
  <span>C</span>
</span>

<span class="box auto">
  <span>Auto</span>
  <span>A</span>
  <span>B</span>
  <span>C</span>
</span>

<span class="box last">
  <span>A</span>
  <span>B</span>
  <span>C</span>
  <span>Last</span>
</span>
```

#### CSS

```css hidden
body {
  font-family: sans-serif;
}

.box {
  border: 2px solid #888888;
  width: 50px;
}

span {
  padding: 0.4rem;
}
```

Nous définissons toutes les boîtes comme des conteneurs flexibles en ligne.
Nous configurons la boîte `.first` pour utiliser la première ligne de base, la boîte `.auto` utilise la ligne de base par défaut (qui est `first` pour les conteneurs flexibles en ligne), et la boîte `.last` utilise la dernière ligne de base.

```css
.box {
  display: inline-flex;
  flex-direction: column;
}

.first {
  baseline-source: first;
}

.auto {
  baseline-source: auto;
}

.last {
  baseline-source: last;
}
```

#### Résultat

{{EmbedLiveSample("Sélection de la ligne de base dans les conteneurs flexibles en ligne", "100%", 260)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("vertical-align")}}
- [Aperçu de l'alignement des boîtes CSS](/fr/docs/Web/CSS/Guides/Box_alignment/Overview)
