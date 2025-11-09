---
title: syntax
slug: Web/CSS/Reference/At-rules/@property/syntax
original_slug: Web/CSS/@property/syntax
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`syntax`** de la [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{cssxref("@property")}} définit les types de valeurs autorisées pour la [propriété personnalisée CSS](/fr/docs/Web/CSS/Reference/Properties/--*) enregistrée.
Il contrôle la façon dont la valeur spécifiée de la propriété est traitée pour obtenir la [valeur calculée](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_calculée).
Ce descripteur est obligatoire&nbsp;: s'il est absent ou invalide, la règle `@property` entière est ignorée.

## Syntaxe

```css
/* Un de type de donnée */
syntax: "<color>";

/* Un combinateur '|' pour plusieurs types de données */
syntax: "<length> | <percentage>";

/* Liste de valeurs séparées par des espaces */
syntax: "<color>+";

/* Liste de valeurs séparées par des virgules */
syntax: "<length>#";

/* Mots-clés */
syntax: "small | medium | large";

/* Combinaison de type de donnée et de mot-clé */
syntax: "<length> | auto";

/* Valeur de syntaxe universelle */
syntax: "*";
```

### Valeurs

Une chaîne de caractères (appelée chaîne de syntaxe) qui définit les valeurs autorisées.
Elle peut être&nbsp;:

- Un ou plusieurs noms de composants de syntaxe, qui peuvent être&nbsp;:
  - Des noms de types de données (écrits entre chevrons, comme `<color>` ou `<length>`)
  - Des mots-clés (écrits sans chevrons, comme `auto` ou `none`)
- La syntaxe universelle `*`, qui accepte toute valeur CSS valide.
  Elle ne peut pas être multipliée ni combinée avec d'autres composants de syntaxe.

Les noms de composants de syntaxe peuvent être utilisés seuls ou multipliés et combinés de différentes façons&nbsp;:

- Les multiplicateurs `+` (séparé par des espaces) et `#` (séparé par des virgules) indiquent qu'une liste de valeurs est attendue.
  Par exemple, `<color>#` signifie qu'une liste de valeurs `<color>` séparées par des virgules est attendue.

- Le combinateur barre verticale (`|`) permet de créer des conditions «&nbsp;ou&nbsp;» pour la syntaxe attendue.
  Par exemple, `<length> | auto` accepte `<length>` ou `auto`, et `<color># | <integer>#` attend une liste de valeurs `<color>` ou une liste de valeurs `<integer>`, toutes deux séparées par des virgules.

Les noms de composants de syntaxe suivants sont pris en charge&nbsp;:

- `"<angle>"`
  - : Accepte toute valeur {{cssxref("&lt;angle&gt;")}} valide.
- `"<color>"`
  - : Accepte toute valeur {{cssxref("&lt;color&gt;")}} valide.
- `"<custom-ident>"`
  - : Accepte toute valeur {{cssxref("&lt;custom-ident&gt;")}} valide.
- `"<image>"`
  - : Accepte toute valeur {{cssxref("&lt;image&gt;")}} valide.
- `"<integer>"`
  - : Accepte toute valeur {{cssxref("&lt;integer&gt;")}} valide.
- `"<length>"`
  - : Accepte toute valeur {{cssxref("&lt;length&gt;")}} valide.
- `"<length-percentage>"`
  - : Accepte toute valeur {{cssxref("&lt;length&gt;")}} ou {{cssxref("&lt;percentage&gt;")}} valide, ainsi que toute expression {{cssxref("calc", "calc()")}} combinant des valeurs `<length>` et `<percentage>`.
- `"<number>"`
  - : Accepte toute valeur {{cssxref("&lt;number&gt;")}} valide.
- `"<percentage>"`
  - : Accepte toute valeur {{cssxref("&lt;percentage&gt;")}} valide.
- `"<resolution>"`
  - : Accepte toute valeur {{cssxref("&lt;resolution&gt;")}} valide.
- `"<string>"`
  - : Accepte toute valeur {{cssxref("&lt;string&gt;")}} valide.
- `"<time>"`
  - : Accepte toute valeur {{cssxref("&lt;time&gt;")}} valide.
- `"<transform-function>"`
  - : Accepte toute valeur {{cssxref("&lt;transform-function&gt;")}} valide.
- `"<transform-list>"`
  - : Accepte une liste de valeurs {{cssxref("&lt;transform-function&gt;")}} valides. Équivalent à `"<transform-function>+"`.
- `"<url>"`
  - : Accepte toute valeur {{cssxref("url_value", "&lt;url&gt;")}} valide.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Enregistrer une propriété personnalisée avec vérification de type

Cet exemple montre comment définir une propriété personnalisée `--my-color` qui n'accepte que des valeurs `<color>`&nbsp;:

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

En utilisant [JavaScript](/fr/docs/Web/JavaScript) {{domxref('CSS.registerProperty_static', 'CSS.registerProperty()')}}&nbsp;:

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Autres descripteurs de {{cssxref("@property")}}&nbsp;: {{cssxref("@property/inherits","inherits")}} et {{cssxref("@property/initial-value", "initial-value")}}
- [API Propriétés et valeurs CSS](/fr/docs/Web/API/CSS_Properties_and_Values_API)
- [API Peinture CSS](/fr/docs/Web/API/CSS_Painting_API)
- [API Typage de modèle d'objet CSS](/fr/docs/Web/API/CSS_Typed_OM_API)
- [API Houdini](/fr/docs/Web/API/Houdini_APIs)
