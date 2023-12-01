---
title: prefers-color-scheme
slug: Web/CSS/@media/prefers-color-scheme
---

{{CSSRef}}

> **Note :** Si vous avez modifié `privacy.resistFingerprinting` à **vrai**, le paramètre {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} sera redéfini à `light`.
> Sinon, vous pouvez créer le paramètre numérique `ui.systemUsesDarkTheme` pour redéfinier le comportement par défaut et retourner `light` (valeur : 0), `dark` (valeur : 1), or `no-preference` (valeur : 2). (Firefox retournera `light` si une autre valeur est utilisée.)

La caractéristique média **`prefers-color-scheme`** permet de détecter les préférences exprimées par l'utilisateur quant au thème à utiliser (sombre ou clair).

## Syntaxe

- `light`
  - : Cette valeur indique que l'utilisateur a exprimé le choix d'utiliser une interface avec une dominante claire, ou qu'il n'a pas exprimé son choix.
- `dark`
  - : Cette valeur indique que l'utilisateur a exprimé le choix d'utiliser une interface avec une dominante sombre.

## Exemples

### CSS

```css
.day {
  background: #eee;
  color: black;
}
.night {
  background: #333;
  color: white;
}

@media (prefers-color-scheme: dark) {
  .day.dark-scheme {
    background: #333;
    color: white;
  }
  .night.dark-scheme {
    background: black;
    color: #ddd;
  }
}

@media (prefers-color-scheme: light) {
  .day.light-scheme {
    background: white;
    color: #555;
  }
  .night.light-scheme {
    background: #eee;
    color: black;
  }
}

.day,
.night {
  display: inline-block;
  padding: 1em;
  width: 7em;
  height: 2em;
  vertical-align: middle;
}
```

### HTML

```html
<div class="day">Jour (initial)</div>
<div class="day light-scheme">
  Jour (modifié si utilisation d'un thème clair)
</div>
<div class="day dark-scheme">
  Jour (modifié si utilisation d'un thème sombre)
</div>
<br />

<div class="night">Nuit (initial)</div>
<div class="night light-scheme">
  Nuit (modifié si utilisation d'un thème clair)
</div>
<div class="night dark-scheme">
  Nuit (modifié si utilisation d'un thème sombre)
</div>
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Tutoriel vidéo (en anglais) : « Coding a Dark Mode for your Website », Coder un thème sombre pour votre site web](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Revoir la conception d'un produit ou d'un site pour le mode sombre](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- Modifier le thème du system sur [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/dark-mode/) et [Android](https://www.phonandroid.com/android-10-comment-activer-le-theme-fonce.html).

{{QuickLinksWithSubpages("/fr/docs/Web/CSS/@media/")}}
