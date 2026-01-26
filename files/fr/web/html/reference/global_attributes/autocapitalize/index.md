---
title: "Attribut HTML universel : autocapitalize"
short-title: autocapitalize
slug: Web/HTML/Reference/Global_attributes/autocapitalize
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'[attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`autocapitalize`** est un attribut {{Glossary("Enumerated", "énuméré")}} qui contrôle si le texte saisi est automatiquement mis en majuscule et, le cas échéant, de quelle manière. Cela concerne&nbsp;:

- les éléments {{HTMLElement("input")}} et {{HTMLElement("textarea")}}.
- tout élément sur lequel l'attribut [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) est défini.

`autocapitalize` n'affecte pas le comportement lors de la saisie au clavier physique. Il influence en revanche le comportement d'autres mécanismes de saisie, tels que les claviers virtuels sur appareils mobiles ou la saisie vocale. Cela peut aider les utilisateur·ice·s en accélérant et facilitant la saisie de données, par exemple en mettant automatiquement en majuscule la première lettre de chaque phrase.

## Valeurs

Les valeurs possibles sont&nbsp;:

- `none` or `off`
  - : Ne pas mettre automatiquement en majuscule le texte.
- `sentences` or `on`
  - : Mettre automatiquement en majuscule le premier caractère de chaque phrase.
- `words`
  - : Mettre automatiquement en majuscule le premier caractère de chaque mot.
- `characters`
  - : Mettre automatiquement en majuscule chaque caractère.

## Notes d'utilisation

- `autocapitalize` peut être défini sur les éléments `<input>` et `<textarea>`, _et_ sur leurs éléments conteneurs {{HTMLElement("form")}}. Lorsqu'un `autocapitalize` est défini sur un élément `<form>`, il définit le comportement d'autocapitalisation pour tous les `<input>` et `<textarea>` contenus, en remplaçant les valeurs `autocapitalize` définies sur les éléments enfants.
- `autocapitalize` n'a aucun effet sur les types `<input>` `url`, `email` ou `password`, pour lesquels l'autocapitalisation n'est jamais activée.
- Lorsque `autocapitalize` n'est pas défini, le comportement par défaut adopté varie selon les navigateurs. Par exemple&nbsp;:
  - Chrome et Safari utilisent par défaut `on`/`sentences`
  - Firefox utilise par défaut `off`/`none`.

## Exemples

### HTML

```html
<p>
  Formulaire pour tester les différents paramètres d'autocapitalisation&nbsp;:
</p>

<form>
  <div>
    <label for="default"
      >Par défaut&nbsp;: pas d'autocapitalisation définie</label
    >
    <input type="text" id="default" name="default" />
  </div>
  <div>
    <label for="off">autocapitalize="off"</label>
    <input type="text" id="off" name="off" autocapitalize="off" />
  </div>
  <div>
    <label for="none">autocapitalize="none"</label>
    <input type="text" id="none" name="none" autocapitalize="none" />
  </div>
  <div>
    <label for="on">autocapitalize="on"</label>
    <input type="text" id="on" name="on" autocapitalize="on" />
  </div>
  <div>
    <label for="sentences">autocapitalize="sentences"</label>
    <input
      type="text"
      id="sentences"
      name="sentences"
      autocapitalize="sentences" />
  </div>
  <div>
    <label for="words">autocapitalize="words"</label>
    <input type="text" id="words" name="words" autocapitalize="words" />
  </div>
  <div>
    <label for="characters">autocapitalize="characters"</label>
    <input
      type="text"
      id="characters"
      name="characters"
      autocapitalize="characters" />
  </div>
  <div>
    <label for="characters-ta"
      >autocapitalize="characters" sur la zone de texte</label
    >
    <textarea
      type="text"
      id="characters-ta"
      name="characters-ta"
      autocapitalize="characters">
    </textarea>
  </div>
</form>

<hr />

<p contenteditable autocapitalize="characters">
  Ce contenu est éditable et possède autocapitalize="characters".
</p>
```

```css hidden
div {
  margin-bottom: 20px;
}
```

## Résultat

Testez l'effet sur chaque champ à l'aide d'un clavier virtuel ou de la saisie vocale (la saisie depuis un clavier physique ne fera rien).

{{EmbedLiveSample("Exemples", "100%", 500)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
