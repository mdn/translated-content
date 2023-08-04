---
title: hyphens
slug: Web/CSS/hyphens
---

{{CSSRef}}

La propriété **`hyphens`** indique au navigateur comment gérer les traits d'union lors des sauts de ligne. Grâce à elle, on peut empêcher l'utilisation des traits d'union en fin de ligne, contrôler quand ils sont ajoutés ou laisser le navigateur décider.

{{EmbedInteractiveExample("pages/css/hyphens.html")}}

Les règles relatives aux traits d'union en fin de ligne dépendent de la langue utilisée. En HTML, la langue est définie grâce à l'attribut [`lang`](/fr/docs/Web/HTML/Global_attributes/lang) et les navigateurs n'appliqueront les règles que si cet attribut est présent et que le dictionnaire correspondant (pour la gestion des traits d'union et des fins de ligne) est disponible. Pour des documents XML, on utilisera l'attribut [`xml:lang`](/fr/docs/Web/SVG/Attribute/xml:lang).

> **Note :** Les règles exactes qui définissent l'application des traits d'union en fin de ligne ne sont pas explicitement définies par la spécification, aussi, le comportement peut varier entre les navigateurs.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
hyphens: none;
hyphens: manual;
hyphens: auto;

/* Valeurs globales */
hyphens: inherit;
hyphens: initial;
hyphens: unset;
```

### Valeurs

- `none`
  - : Les mots ne sont pas coupés en fin de ligne et ce même si les caractères invitent à une coupe. Les lignes se termineront uniquement sur des blancs.
- `manual`
  - : Les mots sont coupés là où des caractères invitant à un saut de ligne sont présents. Voir la section suivante pour plus de détails.
- `auto`
  - : Le navigateur est libre de couper les mots là où il l'estime approprié selon les règles qu'il choisit. Les emplacements de coupe suggérés par certains caractères devraient être privilégiés par rapport aux coupes automatiques.

> **Note :** Le comportement défini par `auto` dépend de la langue indiquée par le document. Aussi, il faut indiquer la langue via l'attribut HTML `lang` pour s'assurer que les fins de ligne et les traits d'union sont bien gérés selon la langue indiquée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Suggérer des emplacements de coupe pour les lignes

Deux caractères Unicode peuvent être utilisés manuellement pour indiquer des emplacement où effectuer des sauts de ligne :

- U+2010 (HYPHEN)
  - : Un trait d'union « dur » qui indique un emplacement indiqué pour un saut de ligne. Même si la ligne n'est pas coupée à cet endroit, le trait d'union est affiché.
- U+00AD (SOFT HYPHEN)
  - : Un trait d'union « doux ». Ce caractère n'est pas affichée de façon visible. Il indique au navigateur un emplacement où effectuer le saut de ligne si nécessaire. En HTML, on peut utiliser l'entité `&shy;` pour insérer ce caractère.

## Exemples

Dans cet exemple, on crée trois classes CSS pour illustrer chacune des configurations possibles pour la propriété `hyphens`.

### CSS

```css
p {
  width: 55px;
  border: 1px solid black;
}
p.none {
  -webkit-hyphens: none;
  -ms-hyphens: none;
  hyphens: none;
}
p.manual {
  -webkit-hyphens: manual;
  -ms-hyphens: manual;
  hyphens: manual;
}
p.auto {
  -webkit-hyphens: auto;
  -ms-hyphens: auto;
  hyphens: auto;
}
```

### HTML

```html
<ul>
  <li>
    <code>none</code>: aucun trait d'union, dépassement si nécessaire
    <p lang="en" class="none">An extreme&shy;ly long English word</p>
  </li>
  <li>
    <code>manual</code>: un trait d'union uniquement à &amp;hyphen; ou &amp;shy;
    (si nécessaire)
    <p lang="en" class="manual">An extreme&shy;ly long English word</p>
  </li>
  <li>
    <code>auto</code>: un trait d'union où l'algorithme l'estime nécessaire
    <p lang="en" class="auto">An extreme&shy;ly long English word</p>
  </li>
</ul>
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", "490'")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("content")}}
