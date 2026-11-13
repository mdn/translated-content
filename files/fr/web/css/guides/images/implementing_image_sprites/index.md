---
title: Implémenter des images sprites en CSS
short-title: Implémenter des images sprites
slug: Web/CSS/Guides/Images/Implementing_image_sprites
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Les **images <i lang="en">sprites</i>** sont utilisées dans de nombreuses applications web où de multiples images sont utilisées. Au lieu d'inclure chaque image comme un fichier séparé, il est beaucoup plus économique en mémoire et en bande passante de les envoyer sous forme d'une seule image&nbsp;; on utilise la position de fond comme moyen de distinguer les images individuelles dans le même fichier image, ce qui réduit le nombre de requêtes HTTP.

> [!NOTE]
> Lorsque HTTP/2 est utilisé, il peut en effet s'avérer plus économe en bande passante d'envoyer plusieurs petites requêtes.

## Implémentation

Supposons qu'une image est affichée pour chaque élément de la classe `btn-outil`&nbsp;:

```css
.btn-outil {
  background: url("monfichier.png");
  display: inline-block;
  height: 20px;
  width: 20px;
}
```

Une position d'arrière-plan peut être ajoutée soit sous la forme de deux valeurs x et y après {{CSSxRef("url_value", "&lt;url&gt;")}} dans la propriété d'arrière-plan, soit sous la forme {{CSSxRef("background-position")}}. Par exemple&nbsp;:

```css
#btn1 {
  background-position: -20px 0px;
}

#btn2 {
  background-position: -40px 0px;
}
```

Cela fait glisser le point de départ de l'image de fond pour l'élément avec l'ID `btn1` de 20 pixels vers la gauche et l'élément avec l'ID `btn2` de 40 pixels vers la gauche (en présumant qu'ils ont la classe `btn-outil` assignée et sont affectés par la règle d'image ci-dessus).

De la même manière, vous pouvez également créer des états de survol en ciblant `#btn:hover`.

## Voir aussi

- [Démonstration complète et fonctionnelle sur CSS Tricks <sup>(angl.)</sup>](https://css-tricks.com/snippets/css/perfect-css-sprite-sliding-doors-button/)
