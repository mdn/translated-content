---
title: "Attribut HTML : size"
short-title: size
slug: Web/HTML/Reference/Attributes/size
original_slug: Web/HTML/Attributes/size
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'attribut **`size`** définit la largeur de l'élément HTML {{HTMLElement('input')}} et la hauteur de l'élément {{HTMLElement('select')}}. Pour un élément `input`, il définit le nombre de caractères que l'agent utilisateur permet à l'utilisateur·ice de voir lors de la modification de la valeur. Pour un élément `select`, il définit le nombre d'options qui doivent être affichées à l'utilisateur·ice. Il doit s'agir d'un entier non négatif valide supérieur à zéro.

Si aucun `size` n'est défini, ou si une valeur invalide est spécifiée, l'entrée n'a pas de taille déclarée et le contrôle de formulaire aura la largeur par défaut selon l'agent utilisateur. Si du CSS cible l'élément avec des propriétés impactant la largeur, le CSS prévaut.

L'attribut `size` n'a aucun impact sur la validation des contraintes.

{{InteractiveExample("Démonstration HTML&nbsp;: size", "tabbed-standard")}}

```html interactive-example
<label for="firstName">Prénom&nbsp;:</label>
<input id="firstName" name="firstName" type="text" size="10" />

<label for="lastName">Nom&nbsp;:</label>
<input id="lastName" name="lastName" type="text" size="20" />

<label for="fruit">Fruit préféré&nbsp;:</label>
<select id="fruit" name="fruit" size="2">
  <option>Orange</option>
  <option>Banane</option>
  <option>Pomme</option>
</select>
```

```css interactive-example
label {
  display: block;
  margin-top: 1rem;
}
```

## Exemples

En ajoutant `size` sur certains types d'entrée, la largeur de l'entrée peut être contrôlée. L'ajout de la taille sur une sélection modifie la hauteur, définissant le nombre d'options visibles à l'état fermé.

```html
<label for="fruit">Entrez un fruit</label>
<input type="text" size="15" id="fruit" />
<label for="vegetable">Entrez un légume</label>
<input type="text" id="vegetable" />

<select name="fruits" size="5">
  <option>banane</option>
  <option>cerise</option>
  <option>fraise</option>
  <option>durian</option>
  <option>myrtille</option>
</select>

<select name="vegetables" size="5">
  <option>carotte</option>
  <option>concombre</option>
  <option>chou-fleur</option>
  <option>céleri</option>
  <option>feuilles de collard</option>
</select>
```

{{EmbedLiveSample('Exemples', '100%', 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut [`maxlength`](/fr/docs/Web/HTML/Reference/Attributes/maxlength)
- L'attribut [`minlength`](/fr/docs/Web/HTML/Reference/Attributes/minlength)
- L'attribut [`pattern`](/fr/docs/Web/HTML/Reference/Attributes/pattern)
