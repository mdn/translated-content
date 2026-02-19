---
title: "Attribut HTML universel : enterkeyhint"
short-title: enterkeyhint
slug: Web/HTML/Reference/Global_attributes/enterkeyhint
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'[attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`enterkeyhint`** est un attribut {{Glossary("Enumerated", "énuméré")}} définissant le libellé d'action (ou l'icône) à présenter pour la touche entrée sur le clavier virtuel.

{{InteractiveExample("Démonstration HTML&nbsp;: enterkeyhint", "tabbed-shorter")}}

```html interactive-example
<input enterkeyhint="go" />

<p contenteditable enterkeyhint="go">https://exemple.org</p>
```

## Description

Les [contrôles de formulaires](/fr/docs/Learn_web_development/Extensions/Forms) (tels que les éléments {{HTMLElement("textarea")}} ou {{HTMLElement("input")}}) ou les éléments utilisant l'attribut [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) peuvent définir un attribut [`inputmode`](/fr/docs/Web/HTML/Reference/Global_attributes/inputmode) pour contrôler le type de clavier virtuel utilisé. Pour améliorer l'expérience de l'utilisateur·ice, la touche entrée peut être personnalisée en fournissant un attribut `enterkeyhint` indiquant comment la touche doit être libellée (ou quelle icône doit être affichée). La touche entrée représente généralement l'action suivante à effectuer&nbsp;: envoyer un texte, insérer une nouvelle ligne ou lancer une recherche.

Si aucun attribut `enterkeyhint` n'est fourni, l'agent utilisateur peut utiliser des informations contextuelles issues des attributs [`inputmode`](/fr/docs/Web/HTML/Reference/Global_attributes/inputmode), [`type`](/fr/docs/Web/HTML/Reference/Elements/input#input_types) ou [`pattern`](/fr/docs/Web/HTML/Reference/Elements/input#pattern) pour afficher une étiquette (ou une icône) adaptée pour la touche entrée.

## Valeurs

L'attribut `enterkeyhint` est un attribut {{Glossary("Enumerated", "énuméré")}} et n'accepte que les valeurs suivantes&nbsp;:

<table class="no-markdown">
  <thead>
    <tr>
      <th>Valeur</th>
      <th>Description</th>
      <th>Exemple d'étiquette (dépend de l'agent utilisateur et de la langue)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>enterkeyhint="enter"</code></td>
      <td>Insère généralement une nouvelle ligne.</td>
      <td><kbd>Return</kbd>, <kbd>↵</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="done"</code></td>
      <td>Indique généralement qu'il n'y a plus rien à saisir et que l'éditeur de méthode de saisie (IME) sera fermé.</td>
      <td><kbd>Done</kbd>, <kbd>✅</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="go"</code></td>
      <td>Indique généralement d'amener l'utilisateur·ice vers la cible du texte saisi.</td>
      <td><kbd>Go</kbd>, <kbd>🡢</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="next"</code></td>
      <td>Indique généralement de passer au champ suivant acceptant du texte.</td>
      <td><kbd>Next</kbd>, <kbd>⇥</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="previous"</code></td>
      <td>Indique généralement de revenir au champ précédent acceptant du texte.</td>
      <td><kbd>Return</kbd>, <kbd>⇤</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="search"</code></td>
      <td>Indique généralement d'afficher les résultats de la recherche du texte saisi.</td>
      <td><kbd>Search</kbd>, <kbd>🔍</kbd></td>
    </tr>
    <tr>
      <td><code>enterkeyhint="send"</code></td>
      <td>Indique généralement d'envoyer le texte à sa destination.</td>
      <td><kbd>Send</kbd></td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLElement.enterKeyHint")}} reflétant cet attribut
- L'attribut universel [`inputmode`](/fr/docs/Web/HTML/Reference/Global_attributes/inputmode)
- L'attribut universel [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable)
- Les attributs [`type`](/fr/docs/Web/HTML/Reference/Elements/input#input_types) et [`pattern`](/fr/docs/Web/HTML/Reference/Elements/input#pattern) sur les éléments {{HTMLElement("input")}}
