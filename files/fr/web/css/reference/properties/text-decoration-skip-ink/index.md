---
title: Propriété CSS `text-decoration-skip-ink`
short-title: text-decoration-skip-ink
slug: Web/CSS/Reference/Properties/text-decoration-skip-ink
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-decoration-skip-ink`** définit comment les lignes au-dessus et en dessous du texte sont dessinées lorsqu'elles passent sur les jambages et hampes des glyphes.

{{InteractiveExample("Démonstration CSS&nbsp;: text-decoration-skip-ink")}}

```css interactive-example-choice
text-decoration-skip-ink: auto;
```

```css interactive-example-choice
text-decoration-skip-ink: none;
```

```html interactive-example
<section id="default-example">
  <p>
    <span class="transition-all" id="example-element">parapsychologues</span>
  </p>
</section>
```

```css interactive-example
p {
  font:
    1.9em "Georgia",
    serif;
  text-decoration: underline;
}
```

`text-decoration-skip-ink` ne fait pas partie de la propriété abrégée {{CSSxRef("text-decoration")}}.

## Syntaxe

```css
/* Valeur avec un mot-clé */
text-decoration-skip-ink: none;
text-decoration-skip-ink: auto;
text-decoration-skip-ink: all;

/* Valeurs globales */
text-decoration-skip-ink: inherit;
text-decoration-skip-ink: initial;
text-decoration-skip-ink: revert;
text-decoration-skip-ink: revert-layer;
text-decoration-skip-ink: unset;
```

### Valeurs

- `none`
  - : La ligne décorative traverse l'ensemble des glyphes, qu'ils aient un jambage ou une hampe.
- `auto`
  - : Valeur par défaut — le navigateur _peut_ interrompre les soulignements et les lignes au-dessus afin qu'ils ne touchent pas ou ne s'approchent pas trop d'un glyphe. Autrement dit, ils sont interrompus là où ils croiseraient un glyphe.
- `all`
  - : Le navigateur _doit_ interrompre les soulignements et les lignes au-dessus afin qu'ils ne touchent pas ou ne s'approchent pas trop d'un glyphe. Cela peut être utile avec certaines polices chinoises, japonaises ou coréennes (CJK), où le comportement `auto` pourrait ne pas créer d'interruptions.

    ![Un exemple de "text-decoration-skip-ink".](decoration-skip-ink.png)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<p>Vous devriez partir en quête d'une tasse de café.</p>
<p class="no-skip-ink">Ou peut-être préféreriez-vous du thé&nbsp;?</p>
<p>この文は、 text-decoration-skip-ink: auto の使用例を示しています。</p>
<p class="skip-ink-all">
  この文は、 text-decoration-skip-ink: all の使用例を示しています。
</p>
```

### CSS

```css
p {
  font-size: 1.5em;
  text-decoration: underline blue;
  text-decoration-skip-ink: auto; /* c'est la valeur par défaut */
}

.no-skip-ink {
  text-decoration-skip-ink: none;
}

.skip-ink-all {
  text-decoration-skip-ink: all;
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("text-decoration")}}
- La propriété {{CSSxRef("text-decoration-skip")}}
