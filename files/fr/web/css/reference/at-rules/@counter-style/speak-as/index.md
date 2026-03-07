---
title: speak-as
slug: Web/CSS/Reference/At-rules/@counter-style/speak-as
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`speak-as`** permet de définir comment un symbole de compteur construit avec une règle {{CSSxRef('@counter-style')}} sera représenté à l'oral. Par exemple, l'auteur·ice peut indiquer qu'un symbole de compteur doit être prononcé comme sa valeur numérique ou simplement représenté par une indication sonore.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
speak-as: auto;
speak-as: bullets;
speak-as: numbers;
speak-as: words;
speak-as: spell-out;

/* Valeur de nom @counter-style */
speak-as: <counter-style-name>;
```

### Valeurs

- `auto`
  - : Si la valeur de `speak-as` est définie comme `auto`, la valeur effective de `speak-as` sera déterminée en fonction de la valeur du descripteur {{CSSxRef("@counter-style/system", "system")}}&nbsp;:
    - Si la valeur de `system` est `alphabetic`, la valeur effective de `speak-as` sera `spell-out`.
    - Si `system` est `cyclic`, la valeur effective de `speak-as` sera `bullets`.
    - Si `system` est `extends`, la valeur de `speak-as` sera la même que si `speak-as: auto` était défini sur le style étendu.
    - Dans tous les autres cas, définir `auto` a le même effet que définir `speak-as: numbers`.

- `bullets`
  - : Une phrase ou une indication sonore définie par l'{{Glossary("user agent", "agent utilisateur")}} pour représenter un élément de liste non ordonnée sera prononcée.
- `numbers`
  - : La valeur numérique du compteur sera prononcée dans la langue du document.
- `words`
  - : L'agent utilisateur générera la valeur du compteur normalement et la prononcera comme un mot dans la langue du document.
- `spell-out`
  - : L'agent utilisateur générera la représentation du compteur normalement et la prononcera lettre par lettre. Si l'agent utilisateur ne sait pas comment prononcer un symbole de compteur particulier, il pourra le prononcer comme si la valeur de `speak-as` était `numbers`.
- `<counter-style-name>`
  - : Le nom d'un autre style de compteur, défini comme {{CSSxRef("&lt;custom-ident&gt;")}}. Si cette valeur est incluse, le compteur sera prononcé selon la forme définie dans ce style de compteur, un peu comme si on définissait le descripteur {{CSSxRef("@counter-style/fallback", "fallback")}}. Si le style défini n'existe pas, `speak-as` revient à `auto`.

## Accessibilité

La prise en charge par les technologies d'assistance de la propriété `speak-as` est très limitée. Ne comptez pas sur cette propriété pour transmettre des informations essentielles à la compréhension de la page.

[Parlons de CSS Speech | Css Tricks <sup>(angl.)</sup>](https://css-tricks.com/lets-talk-speech-css/) (2017)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la forme orale d'un compteur

Dans cet exemple, le système de compteur est fixe avec des symboles visuels inintelligibles. Cependant, le descripteur `speak-as` est utilisé pour que les marqueurs des éléments de liste soient lus comme des nombres dans l'arbre d'accessibilité. Lorsque cette propriété est prise en charge, les lecteurs d'écran liront les nombres plutôt que les marqueurs visuels.

Pour expérimenter le résultat du descripteur `speak-as`, utilisez une technologie d'assistance comme VoiceOver ou un autre lecteur d'écran, ou consultez le [panneau d'accessibilité <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/index.html#accessibility-inspector) dans les outils de développement d'un navigateur qui prend en charge `speak-as`.

#### HTML

```html
<ul class="list">
  <li>J'ai eu une pomme</li>
  <li>J'ai mangé deux bananes</li>
  <li>J'ai dévoré trois oranges</li>
  <li>Je n'ai pas faim pour le dîner</li>
  <li>Mais je prendrai cinq boules de glace en dessert</li>
</ul>
```

#### CSS

```css
@counter-style speak-as-example {
  system: fixed;
  symbols:     ;
  suffix: " ";
  speak-as: numbers;
}

.list {
  list-style: speak-as-example;
}
```

#### Résultat

{{EmbedLiveSample("Définir la forme orale d'un compteur")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les descripteurs de {{CSSxRef("@counter-style")}}&nbsp;: {{CSSxRef("@counter-style/system","system")}}, {{CSSxRef("@counter-style/symbols", "symbols")}}, {{CSSxRef("@counter-style/additive-symbols", "additive-symbols")}}, {{CSSxRef("@counter-style/negative", "negative")}}, {{CSSxRef("@counter-style/prefix", "prefix")}}, {{CSSxRef("@counter-style/suffix", "suffix")}}, {{CSSxRef("@counter-style/range", "range")}}, {{CSSxRef("@counter-style/pad", "pad")}} et {{CSSxRef("@counter-style/fallback", "fallback")}}
- Propriétés de style de liste&nbsp;: {{CSSxRef("list-style")}}, {{CSSxRef("list-style-image")}}, {{CSSxRef("list-style-position")}}
- La fonction {{CSSxRef("symbols", "symbols()")}} pour créer des styles de compteur anonymes.
- Le module de [styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
- Le module de [listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
