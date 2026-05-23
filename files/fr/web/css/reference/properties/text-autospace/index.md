---
title: Propriété CSS `text-autospace`
short-title: text-autospace
slug: Web/CSS/Reference/Properties/text-autospace
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-autospace`** permet de définir l'espacement appliqué entre les caractères chinois/japonais/coréens (CJK) et les caractères non-CJK.

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

## Exemples

Cet exemple montre la différence entre différentes valeurs de `text-autospace`. Essayez de sélectionner une valeur dans la liste déroulante pour voir comment elle affecte l'espacement dans le texte.

```html hidden
<form>
  <label for="autospace">Choose value for <code>text-autospace:</code></label>
  <select name="autospace" id="autospace">
    <option selected value="no-autospace">no-autospace</option>
    <option value="normal">normal</option>
    <option value="ideograph-alpha">ideograph-alpha</option>
    <option value="ideograph-numeric">ideograph-numeric</option>
  </select>
</form>
<div class="unsupported">
  <code>text-autospace</code> n'est pas pris en charge dans votre navigateur.
</div>
```

```html
<main>
  <figure class="no-autospace">
    <figcaption>
      <code>
        text-autospace: <span id="autospace-value">no-autospace</span>;
      </code>
    </figcaption>
    <div>
      <p>HTML超文本标记语言</p>
      <p>42四十二</p>
    </div>
  </figure>
</main>
```

```css
.no-autospace {
  text-autospace: no-autospace;
}
.auto {
  text-autospace: auto;
}
.normal {
  text-autospace: normal;
}
.ideograph-alpha {
  text-autospace: ideograph-alpha;
}
.ideograph-numeric {
  text-autospace: ideograph-numeric;
}
```

```css hidden
figure {
  margin: 1rem;
  div {
    font-size: 2rem;
    padding: 1rem;
    font-family: sans-serif;
    border: tomato solid 1px;
  }
  p {
    margin: 0;
  }
}
main {
  max-width: max-content;
}
@supports not (text-autospace: normal) {
  form {
    display: none;
  }
  .unsupported {
    color: red;
  }
}
@supports (text-autospace: normal) {
  .unsupported {
    display: none;
  }
}
```

```js hidden
const chose = document.querySelector("#autospace");
const fig = document.querySelector("figure");
const codeValue = document.querySelector("#autospace-value");
chose.addEventListener("change", (e) => {
  fig.className = e.target.value;
  codeValue.innerText = e.target.value;
});
```

{{EmbedLiveSample("Exemples", 200, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef('text-spacing-trim')}}
- Les unités [`ic`](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#longueurs_relatives_à_la_police_locales) et [`ric`](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#longueurs_relatives_à_la_police_racine)
- Le module [de texte CSS](/fr/docs/Web/CSS/Guides/Text)
