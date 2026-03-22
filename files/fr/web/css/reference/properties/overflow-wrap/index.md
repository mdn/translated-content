---
title: overflow-wrap
slug: Web/CSS/Reference/Properties/overflow-wrap
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`overflow-wrap`** s'applique au texte, définissant si le navigateur doit insérer des sauts de ligne à l'intérieur d'une chaîne autrement insécable pour éviter que le texte ne dépasse de sa boîte de ligne.

> [!NOTE]
> La propriété était à l'origine une extension non standard et non préfixée de Microsoft appelée `word-wrap`, et a été implémentée par la plupart des navigateurs sous le même nom. Elle a depuis été renommée en `overflow-wrap`, `word-wrap` étant devenu un alias.

{{InteractiveExample("Démonstration CSS&nbsp;: overflow-wrap")}}

```css interactive-example-choice
overflow-wrap: normal;
```

```css interactive-example-choice
overflow-wrap: anywhere;
```

```css interactive-example-choice
overflow-wrap: break-word;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    La plupart des mots courts &amp; n'ont pas besoin d'être coupés. Mais
    <strong class="transition-all" id="example-element"
      >Antidisestablishmentarianism</strong
    >
    est long. La largeur est définie sur min-content, avec une largeur maximale
    de 11em.
  </div>
</section>
```

```css interactive-example
.example-container {
  background-color: rgb(255 0 200 / 0.2);
  border: 3px solid rebeccapurple;
  padding: 0.75em;
  width: min-content;
  max-width: 11em;
  height: 200px;
}
```

> [!NOTE]
> Contrairement à {{CSSxRef("word-break")}}, `overflow-wrap` ne créera une rupture que si un mot entier ne peut pas être placé sur sa propre ligne sans dépasser.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
overflow-wrap: normal;
overflow-wrap: break-word;
overflow-wrap: anywhere;

/* Valeurs globales */
overflow-wrap: inherit;
overflow-wrap: initial;
overflow-wrap: revert;
overflow-wrap: revert-layer;
overflow-wrap: unset;
```

La propriété `overflow-wrap` peut être définie avec l'un des mots-clés suivants.

### Valeurs

- `normal`
  - : Les lignes ne peuvent se casser qu'aux points de rupture de mots normaux (comme un espace entre deux mots).
- `anywhere`
  - : Pour éviter le dépassement, une chaîne de caractères autrement insécable — comme un long mot ou une URL — peut être coupée à n'importe quel point s'il n'y a pas d'autres points de rupture acceptables sur la ligne. Aucun caractère de césure n'est inséré au point de rupture. Les opportunités de retour à la ligne introduites par la césure sont prises en compte lors du calcul des tailles intrinsèques `min-content`.
- `break-word`
  - : Identique à la valeur `anywhere`, les mots normalement insécables peuvent être coupés à des points arbitraires s'il n'y a pas d'autres points de rupture acceptables sur la ligne, mais les opportunités de retour à la ligne introduites par la césure **ne sont pas** prises en compte lors du calcul des tailles intrinsèques `min-content`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Comparer `overflow-wrap`, `word-break` et `hyphens`

Cet exemple compare les résultats de `overflow-wrap`, `word-break` et `hyphens` lors de la coupure d'un mot long.

#### HTML

```html
<p>
  Ils disent que la pêche est excellente au lac
  <em class="normal">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>, mais je
  n'y suis jamais allé moi-même. (<code>normal</code>)
</p>
<p>
  Ils disent que la pêche est excellente au lac
  <em class="ow-anywhere"> Chargoggagoggmanchauggagoggchaubunagungamaugg </em>,
  mais je n'y suis jamais allé moi-même. (<code>overflow-wrap: anywhere</code>)
</p>
<p>
  Ils disent que la pêche est excellente au lac
  <em class="ow-break-word"> Chargoggagoggmanchauggagoggchaubunagungamaugg </em
  >, mais je n'y suis jamais allé moi-même. (<code
    >overflow-wrap: break-word</code
  >)
</p>
<p>
  Ils disent que la pêche est excellente au lac
  <em class="word-break"> Chargoggagoggmanchauggagoggchaubunagungamaugg </em>,
  mais je n'y suis jamais allé moi-même. (<code>word-break</code>)
</p>
<p>
  Ils disent que la pêche est excellente au lac
  <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>, mais
  je n'y suis jamais allé moi-même. (<code>hyphens</code>, sans attribut
  <code>lang</code>)
</p>
<p lang="en">
  Ils disent que la pêche est excellente au lac
  <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>, mais
  je n'y suis jamais allé moi-même. (<code>hyphens</code>, règles anglaises)
</p>
<p class="hyphens" lang="de">
  Ils disent que la pêche est excellente au lac
  <em class="hyphens">Chargoggagoggmanchauggagoggchaubunagungamaugg</em>, mais
  je n'y suis jamais allé moi-même. (<code>hyphens</code>, règles allemandes)
</p>
```

#### CSS

```css
p {
  width: 13em;
  margin: 2px;
  background: gold;
}

.ow-anywhere {
  overflow-wrap: anywhere;
}

.ow-break-word {
  overflow-wrap: break-word;
}

.word-break {
  word-break: break-all;
}

.hyphens {
  hyphens: auto;
}
```

### Résultat

{{EmbedLiveSample("Comparer `overflow-wrap`, `word-break` et `hyphens`", "100%", 260)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("word-break")}}
- La propriété {{CSSxRef("white-space")}}
- La propriété {{CSSxRef("hyphens")}}
- La propriété {{CSSxRef("text-overflow")}}
- [Guide de retour à la ligne et de coupure de texte](/fr/docs/Web/CSS/Guides/Text/Wrapping_breaking_text)
