---
title: ::target-text
slug: Web/CSS/Reference/Selectors/::target-text
original_slug: Web/CSS/::target-text
l10n:
  sourceCommit: b460458fa125f4ee252d01466c1390d16ba19215
---

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::target-text`** représente le texte vers lequel l'écran vient de défiler, dans le cas où le navigateur prend en charge les [fragments de texte](/fr/docs/Web/URI/Reference/Fragment/Text_fragments). Il permet aux auteur·ice·s de mettre en évidence cette section de texte.

Le pseudo-élément `::target-text` suit un modèle d'héritage spécial commun à tous les pseudo-éléments de mise en évidence. Pour plus de détails sur le fonctionnement de cet héritage, consultez la section [Héritage des pseudo-éléments de mise en évidence](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements#héritage_des_pseudo-éléments_de_mise_en_évidence).

## Syntaxe

```css
::target-text {
  /* ... */
}
```

## Exemples

### Mise en évidence de scroll-to-text

```css
::target-text {
  background-color: rebeccapurple;
  color: white;
}
```

Pour voir ce code CSS en action, suivez ce lien vers la [démonstration de scroll-to-text](https://mdn.github.io/css-examples/target-text/index.html#:~:text=From%20the%20foregoing%20remarks%20we%20may%20gather%20an%20idea%20of%20the%20importance).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Text fragments <sup>(angl.)</sup>](https://web.dev/text-fragments/)
- {{cssxref(":target")}} (pour mettre en évidence les éléments cibles)
