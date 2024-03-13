---
title: "Attribut HTML : size"
slug: Web/HTML/Attributes/size
---

{{HTMLSidebar}}

L'attribut **`size`** définit la largeur de l'élément [`<input>`](/fr/docs/Web/HTML/Element/input) et la hauteur de l'élément [`<select>`](/fr/docs/Web/HTML/Element/select). Pour `input`, si l'attribut `type` est [`text`](/fr/docs/Web/HTML/Element/input/text) ou [`password`](/fr/docs/Web/HTML/Element/input/password) alors c'est le nombre de caractères. Il doit s'agir d'un nombre entier de valeur 0 ou supérieure. Si aucun `size` n'est spécifié, ou si une valeur invalide est spécifiée, l'entrée n'a pas de taille déclarée, et le contrôle de formulaire aura la largeur par défaut basée sur l'agent utilisateur. Si CSS cible l'élément avec des propriétés ayant un impact sur la largeur, CSS a la priorité.

L'attribut `size` n'a aucun impact sur la validation des contraintes.

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

{{EmbedLiveSample('Exemples')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut [`maxlength`](/fr/docs/Web/HTML/Attributes/maxlength)
- L'attribut [`minlength`](/fr/docs/Web/HTML/Attributes/minlength)
- L'attribut [`pattern`](/fr/docs/Web/HTML/Attributes/pattern)
