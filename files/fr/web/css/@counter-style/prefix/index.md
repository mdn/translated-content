---
title: prefix
slug: Web/CSS/@counter-style/prefix
---

{{CSSRef}}

Le descripteur **`prefix`**, utilisé avec la règle @ {{cssxref("@counter-style")}}, permet de définir un symbole qui sera ajouté comme préfixe à la représentation du marqueur. Si aucune valeur n'est fournie, la valeur utilisée par défaut sera la chaîne de caractères vide.

## Syntaxe

```css
/* Valeurs de symbole */
prefix: "»";
prefix: "Page";
```

### Valeurs

- `<symbol>`
  - : Définit le symbole à utilisé comme préfixe devant le marqueur du compteur de la liste. Cette valeur peut être une valeur de type {{cssxref("&lt;string&gt;")}}, {{cssxref("&lt;image&gt;")}} ou {{cssxref("&lt;custom-ident&gt;")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
@counter-style chapitres {
  system: numeric;
  symbols: "0" "1" "2" "3" "4" "5" "6" "7" "8" "9";
  prefix: "Chapitre ";
}

.exemple {
  list-style: chapitres;
  padding-left: 15ch;
}
```

### HTML

```html
<ul class="exemple">
  <li>Au fond du terrier</li>
  <li>La mare aux larmes</li>
  <li>La course cocasse</li>
  <li>L'habitation du lapin blanc</li>
  <li>Conseils d'une chenille</li>
</ul>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("list-style")}},
- {{cssxref("list-style-image")}},
- {{cssxref("list-style-position")}},
- {{cssxref("symbols", "symbols()")}}, la notation fonctionnelle qui permet de créer des styles de compteur anonymes.
