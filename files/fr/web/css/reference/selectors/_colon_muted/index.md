---
title: Pseudo-classe CSS `:muted`
short-title: :muted
slug: Web/CSS/Reference/Selectors/:muted
l10n:
  sourceCommit: d1aa0dbd7441564e6ce8f6706c2022a2e1912d8c
---

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:muted`** représente un élément capable de produire du son, tel que {{HTMLElement("audio")}} ou {{HTMLElement("video")}}, mais qui est muet (silencieux de force).

La pseudo-classe `:muted` est différente de {{CSSxRef(":volume-locked")}} en ce sens que l'auteur·ice de la page a le contrôle sur la possibilité de couper ou de rétablir le son d'un élément multimédia.
Les agents utilisateurs peuvent définir la valeur `muted` des médias en fonction des préférences d'utilisation (par exemple, en mémorisant la dernière valeur définie entre les sessions, sur une base par site, ou autrement).
Un élément qui est `:volume-locked` ne peut pas être coupé, rétabli ou avoir son volume modifié avec JavaScript en raison d'une préférence du système d'exploitation ou de l'agent utilisateur.

## Syntaxe

```css
:muted {
  /* ... */
}
```

## Exemples

### HTML

L'attribut `muted` est ajouté à l'élément HTML {{HTMLElement("video")}} afin que le son soit coupé, cela fonctionne de la même manière pour les éléments HTML {{HTMLElement("audio")}}.

```html
<!-- 'Big Buck Bunny' sous licence CC 3.0 par la Blender Foundation. Hébergé par archive.org -->
<!-- Posté depuis peach.blender.org -->
<video
  controls
  muted
  src="https://archive.org/download/BigBuckBunny_124/Content/big_buck_bunny_720p_surround.mp4"
  poster="https://peach.blender.org/wp-content/uploads/title_anouncement.jpg?x11217"
  width="620">
  Désolé, votre navigateur ne prend pas en charge les vidéos intégrées, mais ne
  vous inquiétez pas, vous pouvez
  <a href="https://archive.org/details/BigBuckBunny_124"> la télécharger </a>
  et la regarder avec votre lecteur vidéo préféré !
</video>
```

### CSS

Si l'élément `<video>` est `muted`, un contour rouge est dessiné autour de celui-ci, lorsqu'il n'est pas coupé, il a un contour vert. Essayez de basculer l'icône de sourdine dans les contrôles pour voir l'état changer.

```css hidden
video {
  margin: 5px;
}
```

```css
video:muted {
  outline: 5px solid red;
}

video:not(:muted) {
  outline: 5px solid green;
}
```

{{EmbedLiveSample("Exemples", "", 400)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La pseudo-classe {{CSSxRef(":buffering")}}
- La pseudo-classe {{CSSxRef(":paused")}}
- La pseudo-classe {{CSSxRef(":playing")}}
- La pseudo-classe {{CSSxRef(":seeking")}}
- La pseudo-classe {{CSSxRef(":stalled")}}
- La pseudo-classe {{CSSxRef(":volume-locked")}}
- [Sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
- Propriété [`muted`](/fr/docs/Web/API/HTMLMediaElement/muted) des objets {{DOMxRef("HTMLMediaElement")}}
