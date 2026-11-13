---
title: Propriété CSS `line-clamp`
short-title: line-clamp
slug: Web/CSS/Reference/Properties/line-clamp
l10n:
  sourceCommit: 0451ba52048b172d3c2c1b8b5ce21950384ecbb2
---

La propriété [CSS](/fr/docs/Web/CSS) **`line-clamp`** permet de limiter le contenu d'un {{Glossary("block", "bloc")}} au nombre de lignes indiqué. Optionnellement, elle permet également d'insérer du contenu dans la dernière ligne pour indiquer que le contenu a été tronqué.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
line-clamp: none;

/* Valeurs de type <integer> seulement */
line-clamp: 3;
line-clamp: 10;

/* Valeurs de type <integer> et <'block-ellipsis'> */
line-clamp: 3 no-ellipsis;
line-clamp: 10 "… (il y a du contenu supplémentaire)";

/* Valeurs de type <'block-ellipsis'> seulement */
line-clamp: no-ellipsis;
line-clamp: "… (il y a du contenu supplémentaire)";

/* Valeurs globales */
line-clamp: inherit;
line-clamp: initial;
line-clamp: revert;
line-clamp: revert-layer;
line-clamp: unset;
```

### Valeurs

Cette propriété est définie avec une ou deux valeurs séparées par des espaces parmi la liste suivante&nbsp;:

- `none`
  - : Définit que le contenu n'est pas tronqué. Ce mot-clé ne peut pas être combiné avec les autres valeurs. C'est la valeur par défaut.
- {{CSSxRef("&lt;integer&gt;")}} {{Optional_Inline}}
  - : Définit le nombre de lignes après lesquelles le contenu est tronqué. Il doit être supérieur à 0.
- `<'block-ellipsis'>` {{Optional_Inline}}
  - : Définit le contenu inséré dans la dernière ligne. Elle peut prendre l'une des valeurs suivantes&nbsp;:
    - `no-ellipsis`&nbsp;: Aucune ellipse (caractère U+2026) n'est ajoutée si le texte est tronqué en raison du nombre de lignes défini.
    - `auto`&nbsp;: Affiche un caractère d'ellipse (U+2026) si le texte est tronqué.
    - {{CSSxRef("&lt;string&gt;")}}&nbsp;: Affiche la chaîne de caractères définie à la fin de la ligne affectée. Les navigateurs peuvent tronquer cette chaîne de caractères si elle est très longue. Une chaîne de caractères vide se comporte comme la valeur `no-ellipsis`.

> [!NOTE]
> Si `<'block-ellipsis'>` est défini sans un `<integer>`, il s'applique uniquement lorsque le contenu est tronqué en raison de la hauteur du conteneur.

## Description

Dans la plupart des cas, vous voulez également définir {{CSSxRef("overflow")}} à `hidden`, sinon le contenu n'est pas rogné mais une ellipse est tout de même affichée après le nombre de lignes indiqué.

Lorsqu'elle est appliquée à des éléments d'ancrage, la troncature peut se produire au milieu du texte, pas nécessairement à la fin.

> [!NOTE]
> Pour la compatibilité avec les anciennes versions, la propriété préfixée par le fournisseur `-webkit-line-clamp` ne fonctionne qu'en combinaison avec la propriété {{CSSxRef("display")}} définie à `-webkit-box` ou `-webkit-inline-box` et la propriété {{CSSxRef("box-orient", "-webkit-box-orient")}} définie à `vertical`. Bien que ces propriétés préfixées soient obsolètes, la co-dépendance de ces trois propriétés est un comportement entièrement défini et continue d'être pris en charge.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Tronquer le contenu avec une ellipse ou une chaîne de caractères personnalisée

Dans cet exemple, il y a trois cartes, chacune avec une valeur différente de `line-clamp`&nbsp;:

- La première ne possède qu'un `<integer>` pour restreindre le nombre de lignes.
- La deuxième possède un `<integer>` et la valeur `no-ellipsis`.
- La troisième possède un `<integer>` et une `<string>` personnalisée.

#### HTML

```html
<section>
  <div class="carte">
    <h2>nombre de lignes</h2>
    <p class="entier">
      Dans cette carte, le <em>nombre de lignes</em> est défini par un entier
      (<code>&lt;integer&gt;</code>). Tout contenu qui ne rentre pas est tronqué
      et une ellipse est affichée.
    </p>
  </div>
  <div class="carte">
    <h2>pas d'ellipse</h2>
    <p class="aucune-ellipse">
      Dans cette carte, un <code>&lt;integer&gt;</code> et une valeur
      <em>no-ellipsis</em> sont définis. Tout contenu qui ne rentre pas est
      tronqué et aucune ellipse n'est affichée.
    </p>
  </div>
  <div class="carte">
    <h2>chaîne de caractères personnalisée</h2>
    <p class="chaine-de-caracteres">
      Dans cette carte, un <code>&lt;integer&gt;</code> et une valeur
      <em>string</em>
      sont définis. Tout contenu qui ne rentre pas est tronqué et la chaîne de
      caractères personnalisée est affichée à la place d'une ellipse.
    </p>
  </div>
</section>
```

#### CSS

```css hidden
/* disposition pour les cartes */
section {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  justify-content: space-between;
}
em {
  color: tomato;
}
.carte {
  padding: 0.2rem;
  border: 1px solid tomato;
  border-radius: 0.2rem;
  max-width: 250px;
}
```

```css
.entier {
  line-clamp: 2;
  overflow: hidden;
}
.aucune-ellipse {
  line-clamp: 2 no-ellipsis;
  overflow: hidden;
}
.chaine-de-caracteres {
  line-clamp: 2 "… (mon texte personnalisé)";
  overflow: hidden;
}
```

#### Résultat

{{EmbedLiveSample("Tronquer le contenu avec une ellipse ou une chaîne de caractères personnalisée", "100%", 150)}}

### Tronquer un paragraphe avec la propriété héritée

Cet exemple utilise la propriété héritée `-webkit-line-clamp` avec `display` défini sur `-webkit-box`.

> [!NOTE]
> Lors de l'utilisation de la propriété héritée `-webkit-line-clamp`, vous devez également définir {{CSSxRef("overflow")}} sur `hidden`, sinon le contenu n'est pas tronqué, bien qu'une ellipse soit toujours affichée après le nombre de lignes définies.

### HTML

```html
<p>
  Dans cet exemple <code>-webkit-line-clamp</code> vaut <code>3</code>, ce qui
  signifie que le texte est rogné après trois lignes. Une ellipse est affichée à
  n lignes de l'endroit où le texte est tronqué.
</p>
```

#### CSS

```css
p {
  width: 300px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```

#### Résultat

{{EmbedLiveSample("Tronquer un paragraphe avec la propriété héritée", "100%", 130)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Limiter le texte sur plusieurs lignes <sup>(angl.)</sup>](https://css-tricks.com/line-clampin/) sur CSS-Tricks
