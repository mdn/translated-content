---
title: inputmode
slug: Web/HTML/Global_attributes/inputmode
---

{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Attributs_universels) **`inputmode`** est un attribut à valeur contrainte qui fournit une indication au navigateur quant au type de donnée qui peut être saisi par l'utilisateur lors de l'édition de l'élément ou de son contenu. Les valeurs autorisées sont les suivantes :

- `none`
  - : Aucun clavier virtuel ne doit être affiché. Cette valeur s'avère utile lorsque l'application ou le site web implémente son propre outil de saisie.
- `text`
  - : C'est du texte qui sera saisi et un clavier dans la locale de l'utilisateur pourra être affiché.
- `decimal`
  - : C'est un nombre décimal qui sera saisi. Le clavier affiché peut contenir des chiffres et le séparateur décimal de la locale de l'utilisateur. Attention, selon les appareils, le signe moins (`-`) peut ne pas être présent.
- `numeric`
  - : C'est un nombre entier qui sera saisi. Le clavier affiché peut contenir les chiffres de 0 à 9. Attention, selon les appareils, le signe moins (`-`) peut ne pas être présent.
- `tel`
  - : C'est un numéro de téléphone qui sera saisi. Le clavier affiché pourra être celui d'un téléphone avec les chiffres allant de 0 à 9, l'astérisque et le dièse. Pour les champs de formulaire où il faut saisir un numéro de téléphone, on utilisera plutôt [`<input type="tel">`](/fr/docs/Web/HTML/Element/Input/tel).
- `search`
  - : L'élément éditable sert à la recherche. Le clavier affiché sera optimisé pour une recherche (par exemple, la touche Entrée pourra être indiquée avec le mot-clé « Rechercher »).
- `email`
  - : C'est une adresse électronique qui sera saisie. Le clavier affiché pourra être optimisé pour la saisie d'adresses email (généralement, on aura le caractère @ et d'autres éléments). Pour les champs de formulaire où il faut saisir une adresse électronique, on utilisera plutôt [`<input type="email">`](/fr/docs/Web/HTML/Element/Input/email).
- `url`
  - : C'est une URL qui sera saisie. Le clavier affiché pourra être optimisé pour la saisie d'URL. Ainsi, la touche pour la barre oblique pourra être plus accessible, le clavier pourra proposer un accès à l'historique des URL utilisées, etc. Pour les champs de formulaire où il faut saisir une URL, on utilisera plutôt [`<input type="url">`](/fr/docs/Web/HTML/Element/Input/url).

Lorsque cet attribut n'est pas explicitement défini, sa valeur par défaut est `"text"`, ce qui indique que c'est du texte qui sera saisi et qu'un clavier standard devrait être utilisé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'ensemble des attributs universels](/fr/docs/Web/HTML/Attributs_universels)
