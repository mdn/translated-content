---
title: hyphens
slug: Web/CSS/Reference/Properties/hyphens
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

The **`hyphens`** [CSS](/fr/docs/Web/CSS) property specifies how words should be hyphenated when text wraps across multiple lines. It can prevent hyphenation entirely, hyphenate at manually-specified points within the text, or let the browser automatically insert hyphens where appropriate.

{{InteractiveExample("Démonstration CSS&nbsp;: hyphens")}}

```css interactive-example-choice
hyphens: none;
```

```css interactive-example-choice
hyphens: manual;
```

```css interactive-example-choice
hyphens: auto;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">Un mot extraordinairement long en français&nbsp;!</p>
</section>
```

```css interactive-example
#example-element {
  border: 2px dashed #999999;
  font-size: 1.5rem;
  text-align: left;
  width: 7rem;
}
```

> [!NOTE]
> Dans la démonstration ci-dessus, la chaîne «&nbsp;Un mot extraordinairement long en français&nbsp;!&nbsp;» contient le caractère caché `&shy;` (trait d'union conditionnel)&nbsp;: `Un mot extra&shy;ordinairement long en français&nbsp;!`. Ce caractère est utilisé pour indiquer un emplacement potentiel où produire un trait d'union lorsque `hyphens: manual;` est défini.

Les règles relatives aux traits d'union en fin de ligne dépendent de la langue utilisée. En HTML, la langue est définie grâce à l'attribut [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang) et les navigateurs appliqueront les règles uniquement si cet attribut est présent et que le dictionnaire correspondant (pour la gestion des traits d'union et des fins de ligne) est disponible. Pour des documents XML, on utilisera l'attribut [`xml:lang`](/fr/docs/Web/SVG/Attribute/xml:lang).

> [!NOTE]
> Les règles exactes qui définissent la production des traits d'union en fin de ligne ne sont pas explicitement définies par la spécification, aussi, le comportement peut varier entre les navigateurs.

Si elle est prise en charge, {{CSSxRef("hyphenate-character")}} peut être utilisée pour définir un caractère de coupure alternatif à produire en fin de ligne.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
hyphens: none;
hyphens: manual;
hyphens: auto;

/* Valeurs globales */
hyphens: inherit;
hyphens: initial;
hyphens: revert;
hyphens: revert-layer;
hyphens: unset;
```

### Valeurs

- `none`
  - : Les mots ne sont pas coupés en fin de ligne et ce même si les caractères invitent à une coupe. Les lignes se termineront uniquement sur des blancs.
- `manual`
  - : Valeur par défaut. Les mots sont coupés pour le retour à la ligne uniquement là où des caractères à l'intérieur du mot suggèrent des opportunités de coupure. Voir [Suggérer des emplacements de coupure pour les lignes](#suggérer_des_emplacements_de_coupure_pour_les_lignes) ci-dessous pour plus de détails.
- `auto`
  - : Le navigateur est libre de couper les mots là où il l'estime approprié selon les règles qu'il choisit. Les emplacements de coupe suggérés par certains caractères devraient être privilégiés par rapport aux coupes automatiques.

> [!NOTE]
> Le comportement défini par `auto` dépend de la langue indiquée par le document. Aussi, il faut indiquer la langue via l'attribut HTML `lang` pour s'assurer que les fins de ligne et les traits d'union sont bien gérés selon la langue indiquée.

> [!NOTE]
> Si vous appliquez [`word-break: break-all`](/fr/docs/Web/CSS/Reference/Properties/word-break#break-all), aucun trait d'union n'est affiché, même si le mot est coupé à un emplacement de coupure.

## Suggérer des emplacements de coupure pour les lignes

Deux caractères Unicode peuvent être utilisés manuellement pour indiquer des emplacements où produire un saut de ligne&nbsp;:

- U+2010 (HYPHEN)
  - : Le caractère de trait d'union «&nbsp;dur&nbsp;» indique un emplacement visible pour un saut de ligne. Même si la ligne n'est pas coupée à cet endroit, le trait d'union est affiché.
- U+00AD (SHY)
  - : Un trait d'union invisible, «&nbsp;**s**oft&nbsp;» **hy**phen (pour «&nbsp;trait d'union doux&nbsp;»). Ce caractère n'est pas affiché visiblement&nbsp;; il marque un endroit où le navigateur doit produire une coupure si nécessaire. En HTML, utilisez `&shy;` pour insérer un trait d'union conditionnel.

> [!NOTE]
> Lorsque l'élément HTML {{HTMLElement("wbr")}} provoque un saut de ligne, aucun trait d'union n'est produit.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la coupure des mots dans le texte

Dans cet exemple, on crée trois classes CSS pour illustrer chacune des configurations possibles pour la propriété `hyphens`.

#### HTML

```html
<dl>
  <dt><code>none</code>: aucun trait d'union, dépassement si nécessaire</dt>
  <dd lang="en" class="none">An extreme&shy;ly long English word</dd>
  <dt>
    <code>manual</code>: un trait d'union uniquement à &amp;hyphen; ou &amp;shy;
    (si nécessaire)
  </dt>
  <dd lang="en" class="manual">An extreme&shy;ly long English word</dd>
  <dt>
    <code>auto</code>: un trait d'union où l'algorithme l'estime nécessaire
  </dt>
  <dd lang="en" class="auto">An extreme&shy;ly long English word</dd>
</dl>
```

#### CSS

```css
dd {
  width: 55px;
  border: 1px solid black;
}
dd.none {
  hyphens: none;
}
dd.manual {
  hyphens: manual;
}
dd.auto {
  hyphens: auto;
}
```

#### Résultat

{{EmbedLiveSample("Définir la coupure des mots dans le texte", "100%", 490)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("content")}}
- La propriété {{CSSxRef("overflow-wrap")}} (de façon formelle `word-wrap`)
- La propriété {{CSSxRef("word-break")}}
- [Guide to wrapping and breaking text](/fr/docs/Web/CSS/Guides/Text/Wrapping_breaking_text)
