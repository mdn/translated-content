---
title: Descripteur de règle CSS `prefix`
short-title: prefix
slug: Web/CSS/Reference/At-rules/@counter-style/prefix
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`prefix`** de la règle {{CSSxRef('@counter-style')}} permet de définir le contenu qui sera ajouté au début de la représentation du marqueur du compteur.

Lorsque la valeur du compteur est négative, le `prefix` apparaît avant le signe négatif et tout autre `<symbol>` ajouté par le descripteur {{CSSxRef("@counter-style/negative", "negative")}}.

## Syntaxe

```css
/* Valeur <symbol>&nbsp;: chaîne de caractères, image ou identifiant */
prefix: "»";
prefix: "Page ";
prefix: url("bullet.png");
```

### Valeurs

Le descripteur **`prefix`** accepte comme valeur un seul `<symbol>`&nbsp;:

- `<symbol>`
  - : Spécifie un `<symbol>` — une {{CSSxRef("&lt;string&gt;")}}, une {{CSSxRef("&lt;image&gt;")}} ou un {{CSSxRef("&lt;custom-ident&gt;")}} — qui est ajouté avant la représentation du marqueur.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Ajouter un préfixe à un compteur

Dans cet exemple, chaque numéro du compteur est précédé de «&nbsp;Livre&nbsp;» (avec un espace) et suivi d'un deux-points (`:`). Le deux-points est ajouté avec le descripteur {{CSSxRef("@counter-style/suffix", "suffix")}}.

#### HTML

```html
<ol class="livres">
  <li>Flamer, de Mike Curato</li>
  <li>Gender Queer&nbsp;: A Memoir, de Maia Kobabe</li>
  <li>Tricks, de Ellen Hopkins</li>
  <li>The Handmaid's Tale&nbsp;: The Graphic Novel, de Margaret Atwood</li>
  <li>Crank, de Ellen Hopkins</li>
</ol>
```

#### CSS

```css
@counter-style livres {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  prefix: "Livre ";
  suffix: " : ";
}

.livres {
  list-style: livres;
  padding-left: 15ch;
}
```

#### Résultat

{{EmbedLiveSample("Ajouter un préfixe à un compteur")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les descripteurs de {{CSSxRef("@counter-style")}}&nbsp;: {{CSSxRef("@counter-style/system","system")}}, {{CSSxRef("@counter-style/symbols", "symbols")}}, {{CSSxRef("@counter-style/additive-symbols", "additive-symbols")}}, {{CSSxRef("@counter-style/negative", "negative")}}, {{CSSxRef("@counter-style/suffix", "suffix")}}, {{CSSxRef("@counter-style/range", "range")}}, {{CSSxRef("@counter-style/pad", "pad")}}, {{CSSxRef("@counter-style/speak-as", "speak-as")}} et {{CSSxRef("@counter-style/fallback", "fallback")}}
- Propriétés de style de liste&nbsp;: {{CSSxRef("list-style")}}, {{CSSxRef("list-style-image")}}, {{CSSxRef("list-style-position")}}
- La fonction {{CSSxRef("symbols", "symbols()")}} pour créer des styles de compteur anonymes.
- Le module de [styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
- Le module de [listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
