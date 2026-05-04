---
title: Règle CSS `@property`
short-title: "@property"
slug: Web/CSS/Reference/At-rules/@property
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@property`** est utilisée pour définir explicitement des [propriétés CSS personnalisées](/fr/docs/Web/CSS/Reference/Properties/--*), avec vérification et contrainte de type, définition de valeurs par défaut et choix de l'héritage ou non de la propriété personnalisée.

> [!NOTE]
> La méthode JavaScript {{DOMxRef('CSS.registerProperty_static', 'registerProperty()')}} est équivalente à la règle `@property`.

## Syntaxe

```css
@property --peutEtreNimporteQuoi {
  syntax: "*";
  inherits: true;
}

@property --rotation {
  syntax: "<angle>";
  inherits: false;
  initial-value: 45deg;
}

@property --defaultSize {
  syntax: "<length> | <percentage>";
  inherits: true;
  initial-value: 200px;
}
```

Le nom de la propriété personnalisée est un {{CSSxRef("dashed-ident")}} qui commence par `--` et est suivi d'un identifiant valide défini par l'utilisateur·ice. Il est sensible à la casse.

### Descripteurs

- {{CSSxRef("@property/syntax","syntax")}}
  - : Une chaîne de caractères qui décrit les types de valeurs autorisées pour la propriété personnalisée enregistrée.
- {{CSSxRef("@property/inherits","inherits")}}
  - : Un booléen qui contrôle si l'enregistrement de la propriété personnalisée défini par `@property` est hérité par défaut.
- {{CSSxRef("@property/initial-value","initial-value")}}
  - : Une valeur qui définit la valeur de départ de la propriété.

## Description

La règle `@property` fait partie de l'ensemble d'API [CSS Houdini](/fr/docs/Web/API/Houdini_APIs). Elle permet aux développeur·euse·s de définir explicitement des [propriétés CSS personnalisées](/fr/docs/Web/CSS/Reference/Properties/--*), avec vérification et contrainte de type, définition de valeurs par défaut et choix de l'héritage ou non de la propriété personnalisée.

La règle `@property` permet d'enregistrer des propriétés personnalisées directement dans les feuilles de style sans nécessiter de JavaScript. Les règles `@property` valides produisent des propriétés personnalisées enregistrées, ce qui a le même effet que d'appeler {{DOMxRef('CSS.registerProperty_static', 'registerProperty()')}} avec des paramètres équivalents.

Les conditions suivantes doivent être respectées pour que la règle `@property` soit valide&nbsp;:

- La règle `@property` doit inclure les descripteurs {{CSSxRef("@property/syntax","syntax")}} et {{CSSxRef("@property/inherits","inherits")}}.
  Si l'un des deux manque, la règle entière est invalide et ignorée.

- Le descripteur `syntax` peut être un nom de type de donnée (comme `<color>`, `<length>`, ou `<number>`, etc.), avec des multiplicateurs (`+`, `#`) et des combinateurs (`|`), un identifiant personnalisé, ou la définition universelle (`*`), ce qui signifie que la syntaxe peut être n'importe quel flux de jetons valide. La valeur est une chaîne de caractères ({{CSSxRef("string")}}). Elle doit donc être placée entre guillemets.
- Le descripteur {{CSSxRef("@property/initial-value","initial-value")}} est optionnel si la valeur du descripteur `syntax` est la définition universelle (`syntax: "*"`).
  Si le descripteur `initial-value` est requis mais omis, la règle entière est invalide et ignorée.
- Si la valeur du descripteur `syntax` n'est pas la définition universelle, le descripteur {{CSSxRef("@property/initial-value","initial-value")}} doit être une valeur [indépendante du calcul](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent)<sup>(angl.)</sup>.
  Cela signifie que la valeur peut être convertie en valeur calculée sans dépendre d'autres valeurs, sauf pour les définitions «&nbsp;globales&nbsp;» indépendantes de CSS.
  Par exemple, `10px` est indépendant du calcul&nbsp;: il ne change pas lors de la conversion en valeur calculée. `2in` est aussi valide, car `1in` équivaut toujours à `96px`. En revanche, `3em` n'est pas valide, car la valeur d'un `em` dépend de la propriété {{CSSxRef("font-size")}} du parent.
- Les descripteurs inconnus sont invalides et ignorés, mais n'invalident pas la règle `@property`.

Si plusieurs règles `@property` valides sont définies avec le même nom, la dernière dans l'ordre de la feuille de style «&nbsp;prend le dessus&nbsp;». Si des propriétés personnalisées sont enregistrées avec le même nom en utilisant `@property` en CSS et `CSS.registerProperty()` en JavaScript, l'enregistrement JavaScript prévaut.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

Dans cet exemple, nous utilisons la règle `@property` pour déclarer deux propriétés personnalisées, puis nous utilisons ces propriétés dans nos déclarations de style.

#### HTML

```html
<p>Bonjour le monde&nbsp;!</p>
```

#### CSS

```css
@property --myColor {
  syntax: "<color>";
  inherits: true;
  initial-value: rebeccapurple;
}

@property --myWidth {
  syntax: "<length> | <percentage>";
  inherits: true;
  initial-value: 200px;
}

p {
  background-color: var(--myColor);
  width: var(--myWidth);
  color: white;
}
```

#### Résultats

{{EmbedLiveSample("Exemple simple", "100%", 60)}}

Le paragraphe devrait avoir une largeur de `200px`, un arrière-plan violet et un texte blanc.

### Animer la valeur d'une propriété personnalisée

Dans cet exemple, on définit une propriété personnalisée appelée `--progress` avec `@property`&nbsp;: elle accepte des valeurs de type {{CSSxRef("&lt;percentage&gt;")}} et a une valeur initiale de `25%`. On utilise `--progress` pour définir la position des arrêts de couleur dans un {{CSSxRef("gradient/linear-gradient", "linear-gradient()")}}, spécifiant où le vert s'arrête et où le noir commence. On anime ensuite la valeur de `--progress` jusqu'à `100%` sur 2,5 secondes, ce qui donne l'effet d'une barre de progression animée.

#### HTML

```html
<div class="bar"></div>
```

#### CSS

```css
@property --progress {
  syntax: "<percentage>";
  inherits: false;
  initial-value: 25%;
}

.bar {
  display: inline-block;
  --progress: 25%;
  width: 100%;
  height: 5px;
  background: linear-gradient(
    to right,
    #00d230 var(--progress),
    black var(--progress)
  );
  animation: progressAnimation 2.5s ease infinite;
}

@keyframes progressAnimation {
  to {
    --progress: 100%;
  }
}
```

#### Résultats

{{EmbedLiveSample("Animer la valeur d'une propriété personnalisée", "100%", 60)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("var()")}}
- [Propriétés personnalisées (`--*`)](/fr/docs/Web/CSS/Reference/Properties/--*)
- [Enregistrement des propriétés personnalisées CSS](/fr/docs/Web/CSS/Guides/Properties_and_values_API/Registering_properties)
- Le module [de l'API des propriétés et valeurs CSS](/fr/docs/Web/CSS/Guides/Properties_and_values_API)
- La documentation API [des propriétés et valeurs CSS](/fr/docs/Web/API/CSS_Properties_and_Values_API)
- [Guide d'utilisation des propriétés CSS personnalisées (variables)](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties)
- Le module [des propriétés CSS personnalisées pour les variables en cascade](/fr/docs/Web/CSS/Guides/Cascading_variables)
