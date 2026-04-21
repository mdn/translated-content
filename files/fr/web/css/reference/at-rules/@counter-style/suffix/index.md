---
title: suffix
slug: Web/CSS/Reference/At-rules/@counter-style/suffix
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`suffix`** de la règle {{CSSxRef("@counter-style")}} permet de définir le contenu qui sera ajouté à la fin de la représentation du marqueur.

## Syntaxe

```css
/* Valeur <symbol>&nbsp;: chaîne de caractères, image ou identifiant */
suffix: "";
suffix: ") ";
suffix: url("bullet.png");
```

### Valeurs

Le descripteur **`suffix`** accepte comme valeur un seul `<symbol>`&nbsp;:

- `<symbol>`
  - : Spécifie un `<symbol>` qui est ajouté à la fin de la représentation du marqueur. Il peut s'agir d'une {{CSSxRef("&lt;string&gt;")}}, d'une {{CSSxRef("&lt;image&gt;")}} ou d'un {{CSSxRef("&lt;custom-ident&gt;")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir un suffixe pour un compteur

#### HTML

```html
<ul class="choices">
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Aucun des choix ci-dessus</li>
</ul>
```

#### CSS

```css
@counter-style options {
  system: fixed;
  symbols: A B C D;
  suffix: ") ";
}

.choices {
  list-style: options;
}
```

#### Résultat

{{EmbedLiveSample("Définir un suffixe pour un compteur")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les descripteurs de {{CSSxRef("@counter-style")}}&nbsp;: {{CSSxRef("@counter-style/system","system")}}, {{CSSxRef("@counter-style/symbols", "symbols")}}, {{CSSxRef("@counter-style/additive-symbols", "additive-symbols")}}, {{CSSxRef("@counter-style/negative", "negative")}}, {{CSSxRef("@counter-style/prefix", "prefix")}}, {{CSSxRef("@counter-style/range", "range")}}, {{CSSxRef("@counter-style/pad", "pad")}}, {{CSSxRef("@counter-style/speak-as", "speak-as")}} et {{CSSxRef("@counter-style/fallback", "fallback")}}
- Propriétés de style de liste&nbsp;: {{CSSxRef("list-style")}}, {{CSSxRef("list-style-image")}}, {{CSSxRef("list-style-position")}}
- La fonction {{CSSxRef("symbols", "symbols()")}} pour créer des styles de compteur anonymes.
- Le module de [styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
- Le module de [listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
