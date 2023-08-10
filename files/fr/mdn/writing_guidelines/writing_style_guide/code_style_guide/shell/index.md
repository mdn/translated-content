---
title: Lignes directrices des exemples de lignes de commande
slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/Shell
---

{{MDNSidebar}}

Les directives suivantes expliquent comment rédiger des exemples de lignes de commande sur MDN.

## Les commandes Shell en bref

Un _shell_ est un programme qui attend que vous tapiez une commande et que vous appuyiez sur la touche retour. Pour indiquer les commandes que vous devez taper, la documentation MDN les répertorie dans un bloc de code, similaire aux exemples de code. Un tel bloc ressemble à ceci :

```bash example-good
# Cela peut prendre un certain temps…
hg clone https://hg.mozilla.org/mozilla-central/ firefox
cd firefox
```

## Directives

Il existe quelques directives à suivre lors de l'écriture d'un bloc de code shell :

- N'incluez pas de "$" ou de ">" au début d'une instruction shell. Cela perturbe plus qu'il n'aide et n'est pas utile pour copier les instructions.
- Les commentaires commencent par "#".
- Choisissez la coloration syntaxique "bash".

## De bons exemples de commandes shell sur le MDN

Nos [Documents de développement côté serveur de Django](/fr/docs/Learn/Server-side/Django) montrent une bonne pratique de présentation des commandes de l'invite shell, etc. sur le MDN. Regardez [Configurer un environnement de développement Django](/fr/docs/Learn/Server-side/Django/development_environment) par exemple.
