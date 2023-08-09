---
title: word-break
slug: Web/CSS/word-break
---

{{CSSRef}}

La propriété **`word-break`** est utilisée pour définir la façon dont la césure s'applique pour les endroits où le texte dépasserait de sa boîte de contenu.

{{EmbedInteractiveExample("pages/css/word-break.html")}}

## Syntaxe

```css
/* Avec un mot-clé */
word-break: normal;
word-break: break-all;
word-break: keep-all;
word-break: break-word; /* dépréciée */

/* Valeurs globales */
word-break: inherit;
word-break: initial;
word-break: unset;
```

La propriété `word-break` est définie avec un mot-clé parmi ceux décrits ci-après.

### Valeurs

- `normal`
  - : Le passage à la ligne classique est utilisé.
- `break-all`
  - : La césure peut être insérée après n'importe quel caractère (ne s'applique pas pour les textes en chinois, japonais et coréen).
- `keep-all`
  - : La césure est interdite pour les textes en chinois, japonais et coréen. Pour les autres types de texte, le comportement est le même que `normal`.
- `break-word`{{deprecated_inline}}
  - : Aura le même effet que `word-break: normal` et que `overflow-wrap: anywhere` quelle que soit la valeur de la propriété [`overflow-wrap`](/fr/docs/Web/CSS/overflow-wrap).

> **Note :** Contrairement à `word-break: break-word` et à `overflow-wrap: break-word` (cf. [`overflow-wrap`](/fr/docs/Web/CSS/overflow-wrap)), `word-break: break-all` créera une césure à l'endroit exact où le mot aurait dépassé du conteneur (même si placer le mot entier sur sa propre ligne aurait pu éviter la césure).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### HTML

```html
<p>1. <code>word-break: normal</code></p>
<p class="normal étroit">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>2. <code>word-break: break-all</code></p>
<p class="breakAll étroit">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>3. <code>word-break: keep-all</code></p>
<p class="keepAll étroit">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>4. <code>word-break: break-word</code></p>
<p class="breakWord étroit">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>
```

### CSS

```css
.étroit {
  padding: 10px;
  border: 1px solid;
  width: 500px;
  margin: 0 auto;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 1px;
}

.normal {
  word-break: normal;
}

.breakAll {
  word-break: break-all;
}

.keep {
  word-break: keep-all;
}

.breakWord {
  word-break: break-word;
}
```

### Résultat

{{EmbedLiveSample('Exemples','100%',1100)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`overflow-wrap`](/fr/docs/Web/CSS/overflow-wrap)
- [`hyphens`](/fr/docs/Web/CSS/hyphens)
- [Guide sur le retour à la ligne et la césure dans le texte](/fr/docs/Web/CSS/CSS_Text/Wrapping_text)
