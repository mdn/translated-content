---
title: suffix
slug: Web/CSS/Reference/At-rules/@counter-style/suffix
original_slug: Web/CSS/@counter-style/suffix
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`suffix`** de la règle {{cssxref("@counter-style")}} permet de spécifier le contenu qui sera ajouté à la fin de la représentation du marqueur.

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
  - : Spécifie un `<symbol>` qui est ajouté à la fin de la représentation du marqueur. Il peut s'agir d'une {{cssxref("&lt;string&gt;")}}, d'une {{cssxref("&lt;image&gt;")}} ou d'un {{cssxref("&lt;custom-ident&gt;")}}.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

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

{{ EmbedLiveSample('définir_un_suffixe_pour_un_compteur')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les descripteurs de {{cssxref("@counter-style")}}&nbsp;: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/additive-symbols", "additive-symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}} et {{cssxref("@counter-style/fallback", "fallback")}}
- Propriétés de style de liste&nbsp;: {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- La fonction {{cssxref("symbols", "symbols()")}} pour créer des styles de compteur anonymes.
- Le module de [styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
- Le module de [listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
