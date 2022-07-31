---
title: enterkeyhint
slug: Web/HTML/Global_attributes/enterkeyhint
translation_of: Web/HTML/Global_attributes/enterkeyhint
browser-compat: html.global_attributes.enterkeyhint
---
{{HTMLSidebar("Global_attributes")}}

[L'attribut universel](/fr/docs/Web/HTML/Global_attributes) **`enterkeyhint`**
est un attribut à valeur contrainte définissant le libellé d'action (ou l'icône) à présenter pour la touche entrée sur le clavier virtuel.

{{EmbedInteractiveExample("pages/tabbed/attribute-enterkeyhint.html","tabbed-shorter")}}

## Description

Les [contrôles de formulaires](/fr/docs/Learn/Forms) (tels que les éléments [`<textarea>`](/fr/docs/Web/HTML/Element/textarea)
ou [`<input>`](/fr/docs/Web/HTML/Element/input)) ou les éléments utilisant l'attribut
[`contenteditable`](/fr/docs/Web/HTML/Global_attributes/contenteditable) peuvent spécifier un attribut
[`inputmode`](/fr/docs/Web/HTML/Global_attributes/inputmode) pour contrôler le type de clavier virtuel qui sera utilisé. Pour améliorer davantage l'expérience du visiteur, la touche à entrer peut être personnalisée spécifiquement en fournissant un attribut `enterkeyhint` indiquant comment la clé de saisie doit être libellée (ou quelle icône doit être affichée). La clé de saisie représente généralement ce que la personne va devoir faire par la suite. Les actions consistent généralement en l'envoi d'un texte, l'insertion d'une nouvelle ligne, le lancement d'une recherche, etc.

Si aucun attribut `enterkeyhint` n'est fourni, l'agent utilisateur pourrait utiliser une information contextuelle à partir des attributs
[`inputmode`](/fr/docs/Web/HTML/Global_attributes/inputmode),
[`type`](/fr/docs/Web/HTML/Element/input#input_types),
ou [`pattern`](/fr/docs/Web/HTML/Element/input#htmlattrdefpattern) pour afficher une clé de saisie (ou une icône) adaptée.

### Valeurs

L'attribut `enterkeyhint` est un attribut à valeur contrainte et accepte uniquement les valeurs suivantes&nbsp;:

| Valeur                    | Description                                                                                                        | Libellé de l'exemple (dépend de l'agent utilisateur et de la langue) |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- |
| `enterkeyhint="enter"`    | Généralement utilisé pour insérer une nouvelle ligne de texte.                                                     | <kbd>↵</kbd>                                                         |
| `enterkeyhint="done"`     | Signifie généralement qu'il n'y a rien de plus à saisir et que la méthode de saisie de l'éditeur (IME) est fermée. | <kbd>Done</kbd>                                                      |
| `enterkeyhint="go"`       | Généralement utilisé pour envoyer le visiteur à la cible correspondant au texte saisi.                             | <kbd>Open</kbd>                                                      |
| `enterkeyhint="next"`     | Cela envoie généralement la personne visitant le site vers le prochain champ qui accepte une saisie de texte.      | <kbd>Next</kbd>                                                      |
| `enterkeyhint="previous"` | Cela envoie généralement la personne visitant le site vers le champ précédent acceptant une saisie de texte.       | <kbd>Prev</kbd>                                                      |
| `enterkeyhint="search"`   | Cela envoie généralement la personne visitant le site aux résultats de la recherche pour le texte qui a été saisi. | <kbd>Search</kbd>                                                    |
| `enterkeyhint="send"`     | Cela envoie généralement le texte sur une cible donnée.                                                            | <kbd>Send</kbd>                                                      |

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété [`HTMLElement.enterkeyhint`](/fr/docs/Web/API/HTMLElement/enterkeyhint) reflétant cet attribut
- L'attribut universel [`inputmode`](/fr/docs/Web/HTML/Global_attributes/inputmode)
- L'attribut universel [`contenteditable`](/fr/docs/Web/HTML/Global_attributes/contenteditable)
- Les attributs [`type`](/fr/docs/Web/HTML/Element/input#input_types) et [`pattern`](/fr/docs/Web/HTML/Element/input#htmlattrdefpattern) sur les éléments [`<input>`](/fr/docs/Web/HTML/Element/input)
