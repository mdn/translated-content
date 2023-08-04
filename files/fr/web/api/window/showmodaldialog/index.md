---
title: Window.showModalDialog()
slug: Web/API/Window/showModalDialog
---

{{deprecated_header}}{{APIRef}}

> **Attention :** Cette fonctionnalité a été retirée. Veuillez corriger les sites ou applications web sous votre responsabilité qui l'utiliseraient encore.
>
> Cette méthode a été retirée avec Chrome 43 et Firefox 56.

La méthode **`Window.showModalDialog()`** permettait de créer et d'afficher une boîte de dialogue modale contenant un document HTML indiqué.

## Syntaxe

```js
showModalDialog(uri);
showModalDialog(uri, arguments);
showModalDialog(uri, arguments, options);
```

### Paramètres

- `uri`
  - : L'URL du document à afficher dans la boîte de dialogue.
- `arguments` {{optional_inline}}
  - : Les valeurs passées comme propriétés à la boîte de dialogue.
- `options` {{optional_inline}}
  - : Une chaîne de caractères indiquant l'aspect de l'interface utilisateur pour la boîte de dialogue en utilisant une ou plusieurs valeurs, séparées par des points-virgules&nbsp;:

<table class="no-markdown">
  <tbody>
    <tr>
      <th>Syntaxe</th>
      <th>Description</th>
    </tr>
    <tr>
      <td><code>center: {on | off | yes | no | 1 | 0 }</code></td>
      <td>
        Si la valeur est <code>on</code>, <code>yes</code>, ou <code>1</code>, la boîte de dialogue est centrée à l'écran. Sinon, elle est cachée. La valeur par défaut est <code>yes</code>.
      </td>
    </tr>
    <tr>
      <td>
        <code>dialogheight: <em>height</em></code>
      </td>
      <td>La hauteur de la boîte de dialogue, exprimée en pixels.</td>
    </tr>
    <tr>
      <td>
        <code>dialogleft: <em>left</em></code>
      </td>
      <td>La distance de la boîte de dialogue par rapport au bord gauche de l'écran.</td>
    </tr>
    <tr>
      <td>
        <code>dialogwidth: <em>width</em></code>
      </td>
      <td>La largeur de la boîte de dialogue, exprimée en pixels.</td>
    </tr>
    <tr>
      <td>
        <code>dialogtop: <em>top</em></code>
      </td>
      <td>La distance de la boîte de dialogue par rapport au bord haut de l'écran.</td>
    </tr>
    <tr>
      <td><code>resizable: {on | off | yes | no | 1 | 0 }</code></td>
      <td>
        Si cet argument vaut <code>on</code>, <code>yes</code>, ou <code>1</code>, la fenêtre de la boîte de dialogue peut être redimensionnée, sinon sa taille est fixe. La valeur par défaut est <code>no</code>.
      </td>
    </tr>
    <tr>
      <td><code>scroll: {on | off | yes | no | 1 | 0 }</code></td>
      <td>
        Si cet argument vaut <code>on</code>, <code>yes</code>, ou <code>1</code>, la boîte de dialogue dispose de barres de défilement, sinon sa taille est fixe. La valeur par défaut est <code>no</code>.
      </td>
    </tr>
  </tbody>
</table>

> **Note :** Firefox n'implémente pas les arguments `dialogHide`, `edge`, `status`, ou `unadorned`.

### Valeur de retour

Contient la propriété `returnValue` telle que définie par le document ciblé par `uri`.

## Notes

`showModalDialog()` fut brièvement standardisée en HTML5. Le troisième argument pour les options additionnelles ne faisait pas partie de la version HTML5.

## Spécifications

- [MSDN page
  for `showModalDialog`](<https://msdn.microsoft.com/library/ms536759(VS.85).aspx>)

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`<dialog>`](/fr/docs/Web/HTML/Element/dialog) qui remplace `window.showModalDialog()`.
- [Une prothèse d'émulation pour `showModalDialog()`](https://github.com/niutech/showModalDialog) qui utilise [`<dialog>`](/fr/docs/Web/HTML/Element/dialog) et [les générateurs](/fr/docs/Web/JavaScript/Reference/Statements/function*)
