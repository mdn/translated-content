---
title: env()
slug: Web/CSS/env
---

{{CSSRef}}

La fonction CSS **`env()`** peut être utilisée afin d'insérer la valeur d'une variable d'environnement dans une règle. Les variables d'environnement sont globales pour un document donné, à la différence des [propriétés personnalisées](/fr/docs/Web/CSS/--*). Les variables d'environnement sont définies au niveau de l'agent utilisateur et non par l'utilisateur/le concepteur.

`env()` peut être utilisée aux endroits où on souhaite remplacer la valeur, à la façon de la fonction [`var()`](</fr/docs/Web/CSS/var()>).

```css
body {
  padding: env(safe-area-inset-top, 20px) env(safe-area-inset-right, 20px) env(
      safe-area-inset-bottom,
      20px
    ) env(safe-area-inset-left, 20px);
}
```

La fonction `env()` peut être utilisée à n'importe quel endroit où une valeur peut être associée à une propriété, à n'importe quel endroit où une valeur peut être utilisée dans un descripteur d'une règle @ (ex. dans une [requête média](/fr/docs/Web/CSS/@media)) et, de façon générale, à n'importe quel endroit où les valeurs CSS sont autorisées. Selon les évolutions de la spécification, cette fonction pourrait également être utilisées à d'autres endroits comme les sélecteurs.

> **Note :** Les variables d'environnement furent initialement fournies par le navigateur iOS afin de permettre aux développeurs de placer le contenu sur une zone sûre de la zone d'affichage (_viewport_) et d'éviter le décrochement formé en haut de l'écran sur certains des appareils.

## Syntaxe

```css
/* Utilisation des quatre zones sûres */
env(safe-area-inset-top)
env(safe-area-inset-right)
env(safe-area-inset-bottom)
env(safe-area-inset-left)

/* Utilisation du deuxième paramètre pour une valeur de recours */
env(safe-area-inset-top, 20px);
env(safe-area-inset-right, 1em);
env(safe-area-inset-bottom, 0.5vh);
env(safe-area-inset-left, 1.4rem);
```

### Valeurs

- `safe-area-inset-top`, `safe-area-inset-right`, `safe-area-inset-bottom`, `safe-area-inset-left`
  - : Ces mots-clés sont des variables d'environnement qui définissent un rectangle avec les décalages par rapport à chacun des côtés de la zone d'affichage (_viewport_) dans lequel on pourra placer du contenu sans que ce dernier puisse être rogné du fait de la forme non rectangulaire de l'affichage.

> **Note :** À la différence des autres propriétés CSS, les identifiants provenant de l'agent utilisateur sont sensibles à la casse.

### Syntaxe formelle

{{csssyntax}}

## Exemples

Dans l'exemple qui suit, on utilise le deuxième paramètre de la notation fonctionnelle `env()` afin de fournir une valeur de recours lorsque la variable d'environnement n'est pas disponible.

### HTML

```html
<p>
  Si la fonction <code>env()</code> est prise en charge dans votre navigateur,
  le texte de ce paragraphe aura 50 pixels de padding avec la bordure gauche
  mais pas la droite / basse et haute. En effet, le code CSS associé est
  équivalent à <code>padding: 0 0 0 50px</code>
  car les noms des propriétés CSS associées aux agents utilisateurs sont
  sensibles à la casse (contrairement aux autres propriétés).
</p>
```

### CSS

```css
p {
  width: 300px;
  border: 2px solid red;
  padding: env(safe-area-inset-top, 50px) env(safe-area-inset-right, 50px) env(
      safe-area-inset-bottom,
      50px
    ) env(SAFE-AREA-INSET-LEFT, 50px);
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

### Exemples de valeurs

```css
/* zéro pour les agents utilisateurs rectangulaires */
padding: env(safe-area-inset-bottom, 50px);

/* 50px car les propriétés de l'agent sont sensibles à la casse */
padding: env(Safe-area-inset-bottom, 50px);

/* correspond à padding: 50px 20px car x n'est pas une variable
   d'environnement valide */
padding: env(x, 50px 20px);

/* ignorée car '50px, 20px' n'est pas une valeur de padding correcte
   et que x n'est pas une variable d'environnement */
padding: env(x, 50px, 20px);
```

Pour la deuxième valeur, il est possible d'utiliser des virgules afin de fournir un ensemble composite de valeurs à la propriété. Toutefois, si la propriété en question ne permet pas de gérer plusieurs valeurs, la déclaration sera invalide.

> **Note :** Les propriétés relatives à l'agent utilisateur ne sont pas réinitialisées avec la propriété {{cssxref("all")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{CSSxRef("var", "var(…)")}}
- [Les propriétés personnalisées et la cascade](/fr/docs/Web/CSS/CSS_Variables)
- [Les propriétés personnalisées (--\*)](/fr/docs/Web/CSS/--*)
- [Utiliser les propriétés CSS personnalisées](/fr/docs/Web/CSS/Les_variables_CSS)
