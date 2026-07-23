---
title: Propriété CSS `hyphens`
short-title: hyphens
slug: Web/CSS/Reference/Properties/hyphens
l10n:
  sourceCommit: 35704c8c6b8065b8a288d0f6454e4a0387538dcc
---

La propriété [CSS](/fr/docs/Web/CSS) **`hyphens`** définit comment les mots doivent être coupés en fin de ligne lorsque le texte s'étend sur plusieurs lignes.

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

Le texte d'exemple "Un mot extraordinairement long en français&nbsp;!" contient le caractère caché `&shy;` (trait d'union conditionnel)&nbsp;: `Un mot extra&shy;ordinairement long en français&nbsp;!`. Ce caractère est utilisé pour indiquer un endroit potentiel où insérer un trait d'union lorsque `hyphens: manual;` est défini.

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

La propriété `hyphens` est définie comme une seule valeur clé choisie dans la liste ci-dessous.

### Valeurs

- `none`
  - : Les mots ne sont pas coupés en fin de ligne et ce même si les caractères invitent à une coupe. Les lignes se terminent uniquement sur des blancs.
- `manual`
  - : Valeur par défaut. Les mots sont coupés pour le retour à la ligne uniquement là où des caractères à l'intérieur du mot suggèrent des opportunités de coupure. Voir [Suggérer des emplacements de coupure pour les lignes](#suggérer_des_emplacements_de_coupure_pour_les_lignes) ci-dessous pour plus de détails.
- `auto`
  - : Le navigateur est libre de couper les mots là où il l'estime approprié selon les règles qu'il choisit. Les emplacements de coupe suggérés (voir [Suggérer des emplacements de coupure pour les lignes](#suggérer_des_emplacements_de_coupure_pour_les_lignes) ci-dessous) par certains caractères devraient être privilégiés par rapport aux coupes automatiques.

## Description

La propriété `hyphens` permet de définir comment les mots doivent être coupés en fin de ligne lorsque le texte s'étend sur plusieurs lignes. Elle peut empêcher complètement la césure, la permettre uniquement aux points définis manuellement dans le texte, ou laisser le navigateur insérer automatiquement des traits d'union là où c'est approprié.

Les règles de césure dépendent de la langue. En HTML, la langue est déterminée par l'attribut [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang). Les navigateurs ne césure les mots que si cet attribut est présent et si le dictionnaire de césure approprié est disponible. Le comportement de la valeur `auto` dépend de la langue indiquée pour sélectionner les règles de césure appropriées.

En XML, l'attribut [`xml:lang`](/fr/docs/Web/SVG/Reference/Attribute/xml:lang) doit être utilisé. La spécification ne définit pas de règles pour la césure dans le contenu XML, donc la césure exacte peut varier d'un navigateur à l'autre.

La propriété {{CSSxRef("hyphenate-character")}} peut être utilisée pour définir un caractère de césure alternatif à utiliser en fin de ligne, au lieu du caractère de césure spécifique à la langue par défaut.

Si vous appliquez [`word-break: break-all`](/fr/docs/Web/CSS/Reference/Properties/word-break#break-all), aucun trait d'union n'est affiché, même si le mot se coupe à un point de césure. Si vous appliquez {{CSSxRef("text-wrap-mode","text-wrap-mode: nowrap")}}, aucun retour à la ligne ne se produit, donc aucun trait d'union n'apparaît.

### Suggérer des emplacements de coupure pour les lignes

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
  <dd lang="fr" class="none">
    Un mot extra&shy;ordinairement long en français
  </dd>
  <dt>
    <code>manual</code>: un trait d'union uniquement à &amp;hyphen; ou &amp;shy;
    (si nécessaire)
  </dt>
  <dd lang="fr" class="manual">
    Un mot extra&shy;ordinairement long en français
  </dd>
  <dt>
    <code>auto</code>: un trait d'union où l'algorithme l'estime nécessaire
  </dt>
  <dd lang="fr" class="auto">
    Un mot extra&shy;ordinairement long en français
  </dd>
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
- [Guide pour le retour à la ligne et la césure du texte](/fr/docs/Web/CSS/Guides/Text/Wrapping_breaking_text)
- Le module [de texte CSS](/fr/docs/Web/CSS/Guides/Text)
