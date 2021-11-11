---
title: Aide-mémoire GitHub
slug: MDN/Contribute/GitHub_cheatsheet
tags:
  - Best practices
  - Community
  - GitHub
  - MDN
  - Beginners
  - Cheatsheet
  - Commands
translation_of: MDN/Contribute/GitHub_cheatsheet
---
{{MDNSidebar}}

Cet article fournit une référence rapide aux commandes essentielles dont vous aurez besoin lorsque vous utiliserez [Git](https://git-scm.com/) et [GitHub](https://github.com/) pour contribuer à MDN. Si vous êtes novice dans l'utilisation de ces outils et avez besoin d'un coup de pouce, notre tutoriel [GitHub pour les débutants](/fr/docs/MDN/Contribute/GitHub_beginners) vous enseigne les bases.

## Cloner

```bash
git clone url-du-depot
```

## Configurer une référence à un dépôt distant

```bash
git remote add nom-ref-distante url-du-depot-distant-a-referencer
```

## Afficher la liste des références distantes

```bash
git remote -v
```

## Préparer une modification du dépôt

### Basculer sur la branche principale

```bash
git switch main
```

### Mettre à jour votre branche principale

```bash
git fetch nom-ref-distante
git rebase nom-ref-distante/main
git push
```

## Obtenir sa branche en local et basculer sur celle-ci

```bash
git pull
git switch nouvelle-branche
```

## Obtenir le dernier statut

```bash
git status
```

## Ajouter, valider et pousser les changements

```bash
git add chemin-fichier-modifie
git commit -m 'mon message de commit'
git push
```

## Dépannage

### Annuler une modification non indexée

```bash
git restore chemin-du-fichier
```

### Retirer un fichier de l'index

```bash
git restore --staged chemin-du-fichier
```

### Annuler le dernier commit

```bash
git reset HEAD~1
```

### Inverser un commit qui a été poussé vers la bifurcation distante

```bash
git revert HEAD
git push
```

> **Note :** Une autre façon de se débarrasser de fichiers qui se sont retrouvés dans des _pull requests_ (demandes de triage) que vous ne voulez pas voir figurer est d'utiliser l'interface utilisateur de GitHub. Allez sur la page de votre demande sur github.com, allez dans l'onglet « Files changed », et trouvez le fichier que vous voulez supprimer de la demande. En haut à droite de la boîte du fichier dans la page, il y aura un menu à « trois points » (`...`). Appuyez sur ce bouton et choisissez « Delete file ». Dans la page de confirmation, entrez un titre pour le nouveau commit, assurez-vous que la case « Commit directly… » est cochée, et appuyez sur le bouton « Commit changes ».

## Vous voulez en voir plus ?

Si vous pensez que cet aide-mémoire devrait contenir plus de commandes, veuillez [créer un ticket](https://github.com/mdn/translated-content/issues/new) pour suggérer ce que vous pensez que nous devrions inclure.
