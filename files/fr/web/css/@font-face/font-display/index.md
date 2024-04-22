---
title: font-display
slug: Web/CSS/@font-face/font-display
---

{{CSSRef}}

La propriété **`font-display`** détermine la façon dont une fonte est affichée selon qu'elle ait été chargée et prête à être utilisée.

## Le déroulement de l'affichage d'une police

La gestion d'une fonte de caractères s'effectue selon trois périodes distinctes dont la première commence lorsque l'agent utilisateur tente de télécharger une fonte.

- Période 1 : Blocage des fontes
  - : Si la fonte n'est pas chargée, tout élément utilisant cette fonte doit être rendu avec une fonte alternative invisible. Si la fonte est chargée correctement pendant cette période, elle est utilisée normalement.
- Période 2 : Échange des fontes
  - : Si la fonte n'est pas chargée, tout élément utilisant cette fonte doit utiliser une fonte alternative visible. Si la fonte est chargée correctement pendant cette période, elle est utilisée normalement.
- Période 3 : Échec du chargement des fontes
  - : Si la fonte n'est pas chargée, l'agent utilisateur considère qu'il y a eu un échec du chargement et utilise la fonte alternative disponible.

{{cssinfo}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
font-display: auto;
font-display: block;
font-display: swap;
font-display: fallback;
font-display: optional;
```

### Valeurs

- `auto`
  - : La stratégie d'affichage de la fonte est définie par l'agent utilisateur.
- `block`
  - : La période de blocage est courte et est suivi d'une période d'échange infinie.
- `swap`
  - : La période de blocage est extrêmement courte et est suivie par une période d'échange infinie.
- `fallback`
  - : La période de blocage est extrêmement courte et est suivie par une courte période d'échange.
- `optional`
  - : La période de blocage est extrêmement courte et il n'y a pas de période d'échange.

### Syntaxe formelle

{{csssyntax}}

## Exemples

```css
@font-face {
  font-family: FonteExemple;
  src:
    url(/chemin/vers/fonts/examplefont.woff) format("woff"),
    url(/chemin/vers/fonts/examplefont.eot) format("eot");
  font-weight: 400;
  font-style: normal;
  font-display: fallback;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
