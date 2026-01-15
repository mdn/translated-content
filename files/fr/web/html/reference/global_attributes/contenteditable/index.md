---
title: "Attribut HTML universel : contenteditable"
short-title: contenteditable
slug: Web/HTML/Reference/Global_attributes/contenteditable
l10n:
  sourceCommit: 9cfc2285428932f448a1747e347b1e35a3e0172b
---

L'[attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`contenteditable`** est un attribut énuméré qui indique si l'élément doit être éditable par l'utilisateur·ice. Si c'est le cas, le navigateur modifie son widget pour permettre l'édition.

{{InteractiveExample("Démonstration HTML&nbsp;: contenteditable", "tabbed-shorter")}}

```html interactive-example
<blockquote contenteditable="true">
  <p>Éditez ce contenu pour ajouter votre propre citation</p>
</blockquote>

<cite contenteditable="true">-- Écrivez votre propre nom ici</cite>
```

```css interactive-example
blockquote {
  background: #eeeeee;
  border-radius: 5px;
  margin: 16px 0;
}

blockquote p {
  padding: 15px;
}

cite {
  margin: 16px 32px;
  font-weight: bold;
}

blockquote p::before {
  content: "\201C";
}

blockquote p::after {
  content: "\201D";
}

[contenteditable="true"] {
  caret-color: red;
}
```

## Valeurs

Les valeurs autorisées pour cet attribut sont&nbsp;:

- `true`, ou la _chaîne de caractères vide_ qui indiquent que l'élément est éditable.
- `false`, qui indique que l'élément ne peut pas être édité.
- `plaintext-only`, qui indique que le texte brut de l'élément est éditable, mais que la mise en forme riche est désactivée.

Si l'attribut est donné sans valeur, comme `<label contenteditable>Exemple d'étiquette</label>`, sa valeur est traitée comme une chaîne de caractères vide.

Si cet attribut est absent ou si sa valeur est invalide, sa valeur est _héritée_ de son élément parent&nbsp;: l'élément est donc éditable si son parent l'est.

Notez que bien que ses valeurs autorisées incluent `true` et `false`, cet attribut est un attribut _[énuméré](/fr/docs/Glossary/Enumerated)_ et non un attribut _booléen_.

Vous pouvez définir la couleur utilisée pour dessiner le {{Glossary("caret")}} d'insertion du texte avec la propriété CSS {{CSSxRef("caret-color")}}.

Les éléments rendus éditables, et donc interactifs, à l'aide de l'attribut `contenteditable` peuvent être sélectionnés. Ils participent à la navigation clavier séquentielle. Cependant, les éléments avec l'attribut `contenteditable` imbriqués dans d'autres éléments `contenteditable` ne sont pas ajoutés à la séquence de tabulation par défaut. Vous pouvez ajouter les éléments `contenteditable` imbriqués à la séquence de navigation clavier en spécifiant la valeur `tabindex` ([`tabindex="0"`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex)).

Si du contenu est collé dans un élément avec `contenteditable="true"`, toute la mise en forme est conservée. Si du contenu est collé dans un élément avec `contenteditable="plaintext-only"`, toute la mise en forme est supprimée.

## Exemples

### Coller du contenu dans `contenteditable`

Cet exemple comporte deux éléments {{HTMLElement("div")}} avec `contenteditable`, le premier avec la valeur `true` et le second avec la valeur `plaintext-only`. Copiez le contenu ci-dessous et collez-le dans chaque `div` pour voir leurs effets.

#### HTML

```html hidden
<h2>Contenu à copier</h2>
<p class="instructions">
  Copiez tout le texte du bloc ci-dessous et collez-le dans chacun des blocs
  contenteditable pour comparer les résultats.
</p>
<section class="copying">
  <div class="copy">
    <p>
      Ceci est un paragraphe contenant <strong>Gras</strong>,
      <em>Italique</em> et du texte <span class="red">rouge</span>, suivi d'une
      liste ordonnée&nbsp;:
    </p>
    <ol>
      <li>Étape un</li>
      <li>Étape deux</li>
      <li>Étape trois</li>
    </ol>
  </div>
</section>
```

```html
<h2>Pasting areas</h2>
<section class="pasting">
  <div class="wrapper">
    <h3>contenteditable="true"</h3>
    <div contenteditable="true"></div>
  </div>
  <div class="wrapper">
    <h3>contenteditable="plaintext-only"</h3>
    <div contenteditable="plaintext-only"></div>
  </div>
</section>
```

```css hidden
h2 {
  margin-bottom: 0;
}
.copying {
  font-family: "Georgia", serif;
  margin: 1rem;
  padding: 1rem;
  border: solid black 1px;
}
.red {
  color: red;
}
.pasting {
  display: flex;
  flex-direction: row;
  gap: 1rem;
  width: 100%;
  .wrapper {
    flex: 1 1;
    margin: 0;
    padding: 0;
  }
  h3 {
    font-family: monospace;
  }
  [contenteditable] {
    min-height: 3rem;
    border: solid 1px;
    padding: 0.5rem;
    background-color: whitesmoke;
  }
  [contenteditable="true"] {
    caret-color: blue;
  }
  [contenteditable="plaintext-only"] {
    caret-color: red;
  }
}
```

{{EmbedLiveSample("Coller du contenu dans `contenteditable`", 400, 620)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- Les propriétés DOM {{DOMxRef("HTMLElement.contentEditable")}} et {{DOMxRef("HTMLElement.isContentEditable")}}
- La propriété CSS {{CSSxRef("caret-color")}}
- [L'évènement `input` pour l'objet DOM `HTMLElement`](/fr/docs/Web/API/Element/input_event)
