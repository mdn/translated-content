---
title: symbols
slug: Web/CSS/@counter-style/symbols
tags:
  - CSS
  - Descripteur
  - Reference
translation_of: Web/CSS/@counter-style/symbols
---
{{CSSRef}}

Le descripteur **`symbols`**, rattaché à la règle @ {{cssxref("@counter-style")}}, est utilisé pour définir les symboles à utiliser pour construire les représentations du compteur. Un symbole peut être une chaîne de caractères, une image ou un identifiant.

```css
symbols: A B C D E;
symbols: "\24B6" "\24B7" "\24B8" D E;
symbols: "0" "1" "2" "4" "5" "6" "7" "8" "9";
symbols: url('premier.svg') url('deuxieme.svg') url('troisieme.svg');
symbols: indic-numbers;
```

Le descripteur `symbols` doit être défini lorsque la valeur du descripteur {{cssxref('system')}} vaut `cyclic`, `numeric`, `alphabetic`, `symbolic` ou `fixed`. Lorsque `system` vaut `additive`, ce sera le descripteur {{cssxref('additive-symbols')}} qui sera utilisé afin de définir les symboles.

## Syntaxe

### Valeurs

- Des chaînes de caractères ({{cssxref("&lt;string&gt;")}}) délimitées par des quotes simples ou doubles. La barre oblique inversée (\\) peut être utilisée afin d'échapper les caractères spéciaux. Ainsi, on peut utiliser des caractères Unicode de cette façon `"\24B6"`.
- Des images ({{cssxref("&lt;image&gt;")}}) en utilisant la notation fonctionnelle `url(chemin-vers-image.png)`. **Attention : cette fonctionnalité (l'utilisation d'image) est à risque en termes d'implémentation et de conservation dans les spécifications et n'est implémentée par aucun navigateur actuellement.**
- Des identifiants ({{cssxref("&lt;custom-ident&gt;")}})

<!---->

- `<symbol>`
  - : Représente le symbole à utiliser pour le système de comptage. La valeur du descripteur `symbols` peut être :

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
@counter-style symbols-exemple {
  system: fixed;
  symbols: A "1" "\24B7" D E;
}

.exemple {
  list-style: symbols-exemple;
}
```

### HTML

```html
<ul class="exemple">
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
  <li>Cinq</li>
</ul>
```

### Résultat

{{EmbedLiveSample('Exemples')}}

## Spécifications

| Spécification                                                                                    | État                                         | Commentaires         |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------------------- |
| {{SpecName('CSS3 Counter Styles', '#counter-style-symbols', 'symbols')}} | {{Spec2('CSS3 Counter Styles')}} | Définition initiale. |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.at-rules.counter-style.symbols")}}

## Voir aussi

- {{cssxref("@counter-style")}},
- {{cssxref("list-style")}},
- {{cssxref("list-style-image")}},
- {{cssxref("list-style-position")}},
- {{cssxref("symbols", "symbols()")}}, la notation fonctionnelle utilisée pour créer des styles de compteur anonymes,
- {{cssxref("url()", "url()")}}.
