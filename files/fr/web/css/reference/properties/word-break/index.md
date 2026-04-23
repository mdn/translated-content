---
title: Propriété CSS `word-break`
short-title: word-break
slug: Web/CSS/Reference/Properties/word-break
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`word-break`** est utilisée pour définir la façon dont la césure s'applique pour les endroits où le texte dépasserait de sa boîte de contenu.

{{InteractiveExample("Démonstration CSS&nbsp;: word-break")}}

```css interactive-example-choice
word-break: normal;
```

```css interactive-example-choice
word-break: break-all;
```

```css interactive-example-choice
word-break: keep-all;
```

```css interactive-example-choice
word-break: break-word;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Honorificabilitudinitatibus califragilisticexpialidocious
    Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
    グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
  </div>
</section>
```

```css interactive-example
#example-element {
  width: 80%;
  padding: 20px;
  text-align: start;
  border: solid 1px darkgray;
}
```

## Syntaxe

```css
/* Avec un mot-clé */
word-break: normal;
word-break: break-all;
word-break: keep-all;
word-break: auto-phrase; /* expérimental */
word-break: break-word; /* obsolète */

/* Valeurs globales */
word-break: inherit;
word-break: initial;
word-break: revert;
word-break: revert-layer;
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
- `auto-phrase` {{Experimental_Inline}}
  - : A le même effet que `word-break: normal`, sauf qu'une analyse spécifique à la langue est effectuée pour améliorer les césures en évitant de les placer au milieu des phrases naturelles.
- `break-word` {{Deprecated_Inline}}
  - : Aura le même effet que `word-break: normal` et que `overflow-wrap: anywhere` quelle que soit la valeur de la propriété [`overflow-wrap`](/fr/docs/Web/CSS/Reference/Properties/overflow-wrap).

> [!NOTE]
> Contrairement à `word-break: break-word` et à `overflow-wrap: break-word` (cf. [`overflow-wrap`](/fr/docs/Web/CSS/Reference/Properties/overflow-wrap)), `word-break: break-all` créera une césure à l'endroit exact où le mot aurait dépassé du conteneur (même si placer le mot entier sur sa propre ligne aurait pu éviter la césure).

La spécification répertorie également une valeur supplémentaire, `manual`, qui n'est actuellement prise en charge par aucun navigateur. Lorsqu'elle sera implémentée, `manual` aura le même effet que `word-break: normal`, sauf que les césures ne seront pas automatiquement insérées dans les langues d'Asie du Sud-Est. Cela est nécessaire car, dans ces langues, les agents utilisateurs placent fréquemment des césures à des positions sous-optimales. `manual` permettra d'insérer manuellement des césures aux positions optimales.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<p>1. <code>word-break: normal</code></p>
<p class="normal etroit">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>2. <code>word-break: break-all</code></p>
<p class="breakAll etroit">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>3. <code>word-break: keep-all</code></p>
<p class="keepAll etroit">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>4. <code>word-break: manual</code></p>
<p class="manual etroit">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>5. <code>word-break: auto-phrase</code></p>
<p class="autoPhrase etroit">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>

<p>6. <code>word-break: break-word</code></p>
<p class="breakWord etroit">
  This is a long and Honorificabilitudinitatibus califragilisticexpialidocious
  Taumatawhakatangihangakoauauotamateaturipukakapikimaungahoronukupokaiwhenuakitanatahu
  グレートブリテンおよび北アイルランド連合王国という言葉は本当に長い言葉
</p>
```

### CSS

```css
.etroit {
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

.keepAll {
  word-break: keep-all;
}

.manual {
  word-break: manual;
}

.autoPhrase {
  word-break: auto-phrase;
}

.breakWord {
  word-break: break-word;
}
```

{{EmbedLiveSample("Exemples", "100%", 600)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("overflow-wrap")}}
- La propriété {{CSSxRef("white-space")}}
- La propriété {{CSSxRef("hyphens")}}
- La propriété {{CSSxRef("line-break")}}
- [Guide sur le retour à la ligne et la césure dans le texte](/fr/docs/Web/CSS/Guides/Text/Wrapping_breaking_text)
