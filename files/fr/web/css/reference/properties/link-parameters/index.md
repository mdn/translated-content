---
title: Propriété CSS `link-parameters`
short-title: link-parameters
slug: Web/CSS/Reference/Properties/link-parameters
l10n:
  sourceCommit: a9dc3374034d357cbfea717fd5d641605359e3c7
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`link-parameters`** permet de définir les valeurs des ressources externes, telles que les SVG, dont les attributs ont été définis avec la fonction CSS {{CSSxRef("env()")}}.

## Syntaxe

```css-nolint
/* Une seule valeur */
link-parameters: param(--color, red);

/* Plusieurs valeurs */
link-parameters:
  param(--color1, red),
  param(--color2, blue),
  param(--color3, green);
```

## Valeurs

- `none`
  - : Aucun paramètre de lien n'est défini.

- {{CSSxRef("param()")}}
  - : Une liste d'un ou plusieurs paramètres de lien.

## Définition formelle

{{CSSInfo}}

## Exemples

### Mettre à jour les couleurs d'un fichier SVG externe

Dans cet exemple, le SVG original, à gauche, est un carré avec l'attribut `stroke` défini avec `env(--couleur1, chartreuse)` et l'attribut `fill` défini avec `env(--couleur2, darkgreen)`. La propriété `link-parameters` est utilisée pour mettre à jour ces deux attributs sur le carré mis à jour, à droite, avec plusieurs fonctions CSS {{CSSxRef("param()")}}.

```html
<div class="carres">
  <img
    class="original"
    src="square.svg"
    alt="Un carré avec une bordure chartreuse et un remplissage vert foncé." />
  <img
    class="mis-a-jour"
    src="square.svg"
    alt="Un carré avec une bordure rouge et un remplissage tomate." />
</div>
```

```css hidden
.carres {
  height: 200px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
img {
  height: 100%;
}
```

```css-nolint
.mis-a-jour {
  link-parameters:
    param(--couleur1, red),
    param(--couleur2, tomato);
}
```

{{EmbedLiveSample("Mettre à jour les couleurs d'un fichier SVG externe", "100%", 210)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("param()")}}
- La fonction {{CSSxRef("env()")}}
