---
title: prefix
slug: Web/CSS/Reference/At-rules/@counter-style/prefix
original_slug: Web/CSS/@counter-style/prefix
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`prefix`** de la règle {{cssxref('@counter-style')}} permet de spécifier le contenu qui sera ajouté au début de la représentation du marqueur du compteur.

Lorsque la valeur du compteur est négative, le `prefix` apparaît avant le signe négatif et tout autre `<symbol>` ajouté par le descripteur {{cssxref("@counter-style/negative", "negative")}}.

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
  - : Spécifie un `<symbol>` — une {{cssxref("&lt;string&gt;")}}, une {{cssxref("&lt;image&gt;")}} ou un {{cssxref("&lt;custom-ident&gt;")}} — qui est ajouté avant la représentation du marqueur.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Ajouter un préfixe à un compteur

Dans cet exemple, chaque numéro du compteur est précédé de «&nbsp;Livre&nbsp;» (avec un espace) et suivi d'un deux-points (`:`). Le deux-points est ajouté avec le descripteur {{cssxref("@counter-style/suffix", "suffix")}}.

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

{{ EmbedLiveSample('ajouter_un_préfixe_à_un_compteur') }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les descripteurs de {{cssxref("@counter-style")}}&nbsp;: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}} et {{cssxref("@counter-style/fallback", "fallback")}}
- Propriétés de style de liste&nbsp;: {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- La fonction {{cssxref("symbols", "symbols()")}} pour créer des styles de compteur anonymes.
- Le module de [styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
- Le module de [listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
