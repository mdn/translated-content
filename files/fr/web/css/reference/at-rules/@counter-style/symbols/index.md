---
title: Descripteur de règle CSS `symbols`
short-title: symbols
slug: Web/CSS/Reference/At-rules/@counter-style/symbols
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`symbols`** de la règle {{CSSxRef("@counter-style")}} est utilisé pour définir les symboles servant à créer les représentations du compteur dans le système de compteur indiqué. Ce descripteur est obligatoire lorsque la valeur du descripteur {{CSSxRef('@counter-style/system', 'system')}} est `cyclic`, `numeric`, `alphabetic`, `symbolic` ou `fixed`.

## Syntaxe

```css
symbols: A B C D E;
symbols: "\24B6" "\24B7" "\24B8" D E;
symbols: "0" "1" "2" "4" "5" "6" "7" "8" "9";
symbols: url("one.svg") url("two.svg") url("three.svg");
symbols: indic-numbers;
```

### Valeurs

Le descripteur `symbols` est défini comme une liste d'une ou plusieurs valeurs `<symbol>` séparées par des espaces.

- `<symbol>`
  - : Spécifie le symbole à utiliser dans le système de compteur. Chaque symbole de la liste peut être une {{CSSxRef("&lt;string&gt;")}}, une {{CSSxRef("&lt;image&gt;")}} ou un {{CSSxRef("&lt;custom-ident&gt;")}}. La valeur `<image>` peut être définie comme une {{CSSxRef("url_value", "&lt;url&gt;")}} ou une {{CSSxRef("&lt;gradient&gt;")}}.

> [!NOTE]
> Lorsqu'on utilise un {{Glossary("identifier", "identifiant")}} pour un symbole, il faut noter que les caractères non alphabétiques {{Glossary("ASCII")}} comme `*`, `"` et `\` ne sont pas considérés comme des identifiants. Ils doivent être soit entourés de guillemets comme une chaîne, soit échappés.

## Description

Un symbole peut être une chaîne de caractères, une image ou un identifiant. Il est utilisé dans la règle {{CSSxRef("@counter-style")}} [at-rule](/fr/docs/Web/CSS/Guides/Syntax/At-rules).

Lorsque la valeur du descripteur {{CSSxRef('@counter-style/system', 'system')}} est `cyclic`, `numeric`, `alphabetic`, `symbolic` ou `fixed`, le descripteur `symbols` doit être défini. Pour le système `additive`, utilisez le descripteur {{CSSxRef('@counter-style/additive-symbols', 'additive-symbols')}} à la place pour définir les symboles.

Bien qu'un espace entre les symboles entre guillemets ne soit pas obligatoire, cela rend le CSS plus lisible. Pour utiliser un guillemet comme symbole, il faut soit échapper le caractère guillemet, soit entourer le caractère de guillemets différents, comme `"'"`.

Lorsque vous définissez des symboles avec des identifiants au lieu de chaînes de caractères, veillez à respecter les règles de syntaxe des identifiants. Par exemple, comme indiqué ci-dessus, les caractères non alphabétiques ASCII comme `*` ne sont pas des identifiants et doivent être entourés de guillemets ou échappés. Les caractères d'échappement hexadécimal sont suivis d'un espace. Cet espace peut ressembler à celui qui sépare deux identifiants, mais il permet aux chiffres de suivre les caractères échappés en hexadécimal. Cela signifie que deux espaces doivent être inclus après un identifiant échappé en hexadécimal pour le séparer du suivant. Par exemple, il est préférable d'utiliser la chaîne `"\2A 1"` plutôt que `\2A  1` avec deux espaces, car vos outils de code pourraient supprimer les doubles espaces. Il est généralement plus sûr de mettre entre guillemets les identifiants qui doivent être échappés ou d'utiliser des chaînes de caractères.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir les symboles du compteur

Dans cet exemple, la liste des valeurs pour le descripteur `symbols` inclut des lettres (`A`, `D`, `E`), un nombre entre guillemets (`"1"`), et un identifiant échappé en hexadécimal entre guillemets (`"\24B7"`) pour le caractère `Ⓑ`.

#### HTML

```html
<ul class="list">
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
  <li>Cinq</li>
</ul>
```

#### CSS

```css
@counter-style symbols-example {
  system: fixed;
  symbols: A "1" "\24B7" D E;
}

.list {
  list-style: symbols-example;
}
```

#### Résultat

{{EmbedLiveSample("Définir les symboles du compteur")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les descripteurs de {{CSSxRef("@counter-style")}}&nbsp;: {{CSSxRef("@counter-style/system","system")}}, {{CSSxRef("@counter-style/additive-symbols", "additive-symbols")}}, {{CSSxRef("@counter-style/negative", "negative")}}, {{CSSxRef("@counter-style/prefix", "prefix")}}, {{CSSxRef("@counter-style/suffix", "suffix")}}, {{CSSxRef("@counter-style/range", "range")}}, {{CSSxRef("@counter-style/pad", "pad")}}, {{CSSxRef("@counter-style/speak-as", "speak-as")}} et {{CSSxRef("@counter-style/fallback", "fallback")}}
- Propriétés de style de liste&nbsp;: {{CSSxRef("list-style")}}, {{CSSxRef("list-style-image")}}, {{CSSxRef("list-style-position")}}
- La fonction {{CSSxRef("symbols", "symbols()")}} pour créer des styles de compteur anonymes.
- Le module de [styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
- Le module de [listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
