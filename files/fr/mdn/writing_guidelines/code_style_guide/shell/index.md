---
title: Guide pour rédiger des exemples de commandes shell
short-title: Exemples de scripts shell
slug: MDN/Writing_guidelines/Code_style_guide/Shell
original_slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell
l10n:
  sourceCommit: 0e7eafea05cd771c86e77947639f3396e7a59b2b
---

Les consignes suivantes expliquent comment rédiger des exemples de lignes de commande (_shell_) pour MDN Web Docs.

## Qu'est-ce qu'un « shell »

Un shell est un programme qui attend que vous saisissiez une commande puis appuyiez sur la touche Entrée. Pour indiquer quelles commandes vous devez saisir, le contenu sur MDN Web Docs les présente dans un bloc de code, comme pour les autres exemples de code.

Un tel bloc ressemble à ceci&nbsp;:

```bash example-good
# Cela peut prendre un certain temps…
git clone https://github.com/mdn/content
cd content
```

## General guidelines for shell prompt code examples

### Choisir un format

Les opinions sur l'indentation correcte, les espaces et la longueur des lignes ont toujours été controversées. Les discussions sur ces sujets détournent de la création et de la maintenance du contenu.

Sur MDN Web Docs, nous utilisons [Prettier <sup>(angl.)</sup>](https://prettier.io/) comme formateur de code pour garder un style cohérent (et éviter les discussions hors sujet). Vous pouvez consulter notre [fichier de configuration <sup>(angl.)</sup>](https://github.com/mdn/content/blob/main/.prettierrc.json) pour connaître les règles actuelles, et lire la [documentation de Prettier <sup>(angl.)</sup>](https://prettier.io/docs/index.html).

Prettier formate tout le code et maintient un style cohérent. Cependant, il existe quelques règles supplémentaires à suivre.

### Rédiger des blocs de code shell

Lorsque vous rédigez un bloc de code shell&nbsp;:

- N'incluez pas de «&nbsp;$&nbsp;» ou de «&nbsp;>&nbsp;» au début d'une instruction shell. Cela perturbe plus qu'il n'aide et n'est pas utile pour copier les instructions.
- Les commentaires commencent par «&nbsp;#&nbsp;».
- Choisissez «&nbsp;bash&nbsp;» pour indiquer le langage dans le markdown.

## Voir aussi

Les [documents de développement côté serveur Django](/fr/docs/Learn_web_development/Extensions/Server-side/Django) montrent une bonne pratique de présentation des commandes de l'invite shell sur le MDN.
