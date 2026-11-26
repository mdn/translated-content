---
title: Propriété CSS `text-autospace`
short-title: text-autospace
slug: Web/CSS/Reference/Properties/text-autospace
l10n:
  sourceCommit: 05b21c9303964f221febe77f053e5636f230afe9
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-autospace`** permet de définir l'espacement appliqué entre les caractères chinois/japonais/coréens (CJK) et les caractères non-CJK.

La plupart des conventions typographiques CJK nécessitent un petit espace entre les caractères CJK et les lettres ou chiffres occidentaux (voir les descriptions du W3C pour le texte [chinois <sup>(angl.)</sup>](https://www.w3.org/International/clreq/#mixed_text_composition_in_horizontal_writing_mode) et [japonais <sup>(angl.)</sup>](https://www.w3.org/TR/jlreq/#composition_of_japanese_and_western_mixed_texts)). Certain·e·s auteur·ice·s insèrent manuellement un caractère d'espace à cet effet, mais `text-autospace` ajoute cet espacement au niveau du moteur de mise en page, sans nécessiter de caractères supplémentaires dans le contenu textuel.

{{InteractiveExample("Démonstration CSS&nbsp;: text-autospace")}}

```css interactive-example-choice
text-autospace: no-autospace;
```

```css interactive-example-choice
text-autospace: normal;
```

```css interactive-example-choice
text-autospace: ideograph-alpha;
```

```css interactive-example-choice
text-autospace: ideograph-numeric;
```

```css interactive-example-choice
text-autospace: auto;
```

```html interactive-example
<section id="default-example">
  <div id="example-element" lang="zh">
    <p>HTML超文本标记语言</p>
    <p>42四十二</p>
  </div>
</section>
```

```css interactive-example
#example-element {
  font: 2rem sans-serif;
}

p {
  margin: 0;
}
```

## Syntaxe

```css
text-autospace: normal;
text-autospace: no-autospace;
text-autospace: ideograph-alpha;
text-autospace: ideograph-numeric;
text-autospace: punctuation;
text-autospace: insert;
text-autospace: replace;
text-autospace: ideograph-alpha ideograph-numeric punctuation;
text-autospace: ideograph-alpha ideograph-numeric;
text-autospace: ideograph-alpha ideograph-numeric insert;
text-autospace: auto;

/* Valeurs globales */
text-autospace: inherit;
text-autospace: initial;
text-autospace: revert;
text-autospace: revert-layer;
text-autospace: unset;
```

### Valeurs

- `normal`
  - : Crée le comportement par défaut pour appliquer automatiquement un espacement entre les caractères CJK et non-CJK et autour de la ponctuation. Cette valeur a le même effet que l'application des valeurs [`ideograph-alpha`](#ideograph-alpha) et [`ideograph-numeric`](#ideograph-numeric).
- `<autospace>`
  - : Fournit un contrôle plus précis sur les comportements d'espacement. Elle accepte le mot-clé `no-autospace`, ou une combinaison d'un ou plusieurs des mots-clés `ideograph-alpha`, `ideograph-numeric` et `punctuation`, éventuellement suivis de `insert` ou `replace`.
    - `no-autospace`
      - : Désactive l'espacement automatique entre les caractères CJK et non-CJK.
    - `ideograph-alpha`
      - : Ajoute un espacement uniquement entre les caractères idéographiques (comme le katakana et le han) et les lettres non idéographiques (comme le latin). Il n'ajoute pas d'espacement entre les caractères idéographiques et les chiffres non idéographiques.
    - `ideograph-numeric`
      - : Ajoute un espacement uniquement entre les caractères idéographiques (comme le katakana et le han) et les chiffres non idéographiques (comme le latin). Il n'ajoute pas d'espacement entre les caractères idéographiques et les lettres non idéographiques.
    - `punctuation`
      - : Ajoute un espacement insécable autour de la ponctuation selon les conventions typographiques spécifiques à la langue.
    - `insert`
      - : Ajoute l'espacement défini uniquement s'il n'y a pas d'espaces existants entre les scripts idéographiques et non idéographiques.
    - `replace`
      - : Remplace l'espacement existant (comme [U+0020](/fr/docs/Glossary/Whitespace)) entre les caractères idéographiques et non idéographiques par l'espacement défini.
- `auto`
  - : Permet au navigateur de choisir un espacement typographiquement approprié. L'espacement peut varier selon les navigateurs et les plateformes.

> [!NOTE]
> Si ni `insert` ni `replace` ne sont définis, le comportement est le même que `insert`.

> [!NOTE]
> Cette propriété s'ajoute à {{CSSxRef("word-spacing")}} et {{CSSxRef("letter-spacing")}}. La quantité d'espacement apportée par le réglage de `letter-spacing` s'ajoute à l'espacement créé par `text-autospace`. Il en va de même pour `word-spacing`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef('text-spacing-trim')}}
- Les unités [`ic`](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#longueurs_relatives_à_la_police_locales) et [`ric`](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#longueurs_relatives_à_la_police_racine)
- Le module [de texte CSS](/fr/docs/Web/CSS/Guides/Text)
- [Composition mixte de texte en mode d'écriture horizontal <sup>(angl.)</sup>](https://www.w3.org/International/clreq/#mixed_text_composition_in_horizontal_writing_mode) dans les exigences pour la mise en page du texte chinois sur w3.org
- [Composition mixte de texte japonais et occidental <sup>(angl.)</sup>](https://www.w3.org/International/jlreq/#japanese_and_western_mixed_text_composition) dans les exigences pour la mise en page du texte japonais sur w3.org
