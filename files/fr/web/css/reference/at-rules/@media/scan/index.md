---
title: scan
slug: Web/CSS/Reference/At-rules/@media/scan
original_slug: Web/CSS/@media/scan
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [caractéristique média](/fr/docs/Web/CSS/Reference/At-rules/@media#caractéristiques_média) [CSS](/fr/docs/Web/CSS) **`scan`** permet d'appliquer des styles CSS en fonction du procédé de balayage du périphérique de sortie.

## Syntaxe

La caractéristique `scan` se définit à l'aide de l'une des valeurs-clés suivantes&nbsp;:

- `interlace`
  - : Le périphérique de sortie utilise un rendu «&nbsp;entrelacé&nbsp;», où les images vidéo alternent entre l'affichage des lignes «&nbsp;paires&nbsp;» et «&nbsp;impaires&nbsp;» de l'écran.
- `progressive`
  - : Le périphérique de sortie affiche le contenu à l'écran sans traitement particulier.

## Description

La plupart des écrans modernes (et tous les écrans d'ordinateur) utilisent le rendu progressif, affichant chaque image entièrement sans traitement particulier.

L'entrelacement était utilisé par les moniteurs CRT et certains téléviseurs plasma pour donner l'impression d'un nombre d'images par seconde (<abbr title="images par seconde">IPS</abbr>) plus élevé tout en réduisant la bande passante. Avec l'entrelacement, les images vidéo alternent entre l'affichage des lignes paires et impaires de l'écran, ne téléchargeant et n'affichant que la moitié de l'image à chaque fois. Cela exploite la capacité du cerveau humain à lisser les images, simulant ainsi une diffusion à <abbr title="images par seconde">IPS</abbr> plus élevé pour un coût en bande passante réduit de moitié.

Lorsque vous ciblez des écrans entrelacés, évitez les mouvements très rapides à l'écran et assurez-vous que les détails animés font plus d'1px de large pour réduire le scintillement.

## Exemples

### HTML

```html
<p>Ceci est un test.</p>
```

### CSS

```css
p {
  padding: 10px;
  border: solid;
}

@media screen and (scan: interlace) {
  p {
    background: #f4ae8a;
  }
}
@media screen and (scan: progressive) {
  p {
    text-decoration: underline;
  }
}
@media not screen and (scan: progressive) {
  p {
    border-style: dashed;
  }
}
@media not screen and (scan: interlaced) {
  p {
    color: purple;
  }
}
```

### Résultat

{{EmbedLiveSample("exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La règle at [@media](/fr/docs/Web/CSS/Reference/At-rules/@media), qui permet d'utiliser l'expression `scan`.
- [Utiliser les requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using) pour comprendre quand et comment utiliser une requête média.
