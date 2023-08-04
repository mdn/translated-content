---
title: prefers-color-scheme
slug: Web/CSS/@media/prefers-color-scheme
---

> **Nota:** Se você definiu `privacy.resistFingerprinting` como **true**, [`prefers-color-scheme`](/pt-BR/docs/Web/CSS/@media/prefers-color-scheme) será substituída pela `light`.

O **`prefers-color-scheme`** [CSS](/pt-BR/docs/CSS) [media feature](/pt-BR/docs/Web/CSS/Media_Queries/Using_media_queries#Media_features) é usado para detectar se o usuário solicitou que o sistema use um tema de cores claras ou escuras.

## Syntax

- `no-preference`
  - : Indica que o usuário não fez nenhuma preferência conhecida pelo sistema. Este valor da palavra-chave é avaliado como `false` no [contexo booleano](https://drafts.csswg.org/mediaqueries-5/#boolean-context).
- `light`
  - : Indica que o usuário notificou o sistema de que prefere uma interface com um tema claro.
- `dark`
  - : Indica que o usuário notificou o sistema de que prefere uma interface com um tema escuro.

## Exemplos

Os elementos abaixo têm um tema de cores inicial. Eles podem ser mais temáticos de acordo com a preferência do esquema de cores do usuário.

### HTML

```html
<div class="day">Dia (inicial)</div>
<div class="day light-scheme">Dia (modificar e utilizar um tema claro)</div>
<div class="day dark-scheme">Dia (modificar e utilizar um tema escuro)</div>
<br />

<div class="night">Noite (inicial)</div>
<div class="night light-scheme">Noite (modificar e utilizar um tema claro)</div>
<div class="night dark-scheme">Noite (modificar e utilizar um tema escuro)</div>
```

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

### Resultado

{{EmbedLiveSample("Exemples")}}

## Especificações

| Especificação                                                                                     | Estado                          | Comentários        |
| ------------------------------------------------------------------------------------------------- | ------------------------------- | ------------------ |
| {{SpecName('CSS5 Media Queries', '#descdef-media-prefers-color-scheme', 'prefers-color-scheme')}} | {{Spec2('CSS5 Media Queries')}} | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("css.at-rules.media.prefers-color-scheme")}}

## Veja também

- [Video tutorial: Coding a Dark Mode for your Website](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Redesigning your product and website for dark mode](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- Changing color schemes in [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/design/human-interface-guidelines/macos/visual-design/dark-mode/) and [Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019).

{{QuickLinksWithSubpages("/pt-BR/docs/Web/CSS/@media/")}}
