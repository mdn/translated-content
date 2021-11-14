---
title: autocapitalize
slug: Web/HTML/Global_attributes/autocapitalize
tags:
  - Attribut
  - Attribut universel
  - HTML
  - Reference
translation_of: Web/HTML/Global_attributes/autocapitalize
original_slug: Web/HTML/Attributs_universels/autocapitalize
---
{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Attributs_universels) **`autocapitalize`** est un attribut à valeurs contraintes qui contrôle la façon dont le texte saisi est automatiquement converti en majuscules ou non. Voici les valeurs autorisées pour cet attribut :

- `off` ou `none` : aucune transformation automatique n'est appliquée (par défaut, les lettres sont écrites en minuscules)
- `on` ou `sentences` : la première lettre de chaque phrase est automatiquement écrite en majuscule, les autres lettres ne sont pas transformées (elles sont par défaut en minuscules)
- `words` : la première lettre de chaque mot est automatiquement écrite en majuscule, les autres lettres ne sont pas transformées (elles sont par défaut en minuscules)
- `characters` : toutes les lettres sont converties en majuscules.

L'attribut `autocapitalize` n'a aucun impact lorsqu'on utilise un clavier physique. Il modifie la saisie pour les autres moyens de saisie tels que les claviers virtuels ou les moyens de saisie orale. Le but de cet attribut est d'aider de tels moyens à faciliter la saisie de l'utilisateur. Par défaut, un tel moyen de saisie utilisera une majuscule pour chaque début de phrase, modifier l'attribut `autocapitalize` permet aux auteurs de modifier ce comportement selon les différents éléments.

L'attribut `autocapitalize` n'entraînera pas de mise en majuscule automatique pour un élément {{HTMLElement("input")}} dont l'attribut {{htmlattrxref("type", "input")}} vaut `url`, `email` ou `password`.

## Spécifications

| Spécification                                                                                                    | État                             | Commentaires |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', "interaction.html#autocapitalization", "autocapitalize")}} | {{Spec2('HTML WHATWG')}} |              |

## Compatibilité des navigateurs

{{Compat("html.global_attributes.autocapitalize")}}
