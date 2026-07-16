---
title: Rsync
slug: Glossary/Rsync
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

[Rsync <sup>(angl.)</sup>](https://rsync.samba.org/) est un outil de synchronisation de fichiers open source qui permet le transfert incrémental de fichiers. Il peut être utilisé sur des canaux non sécurisés ou sécurisés (comme SSH). Il est disponible sur la plupart des systèmes basés sur Unix (comme macOS et Linux) ainsi que sur Windows. Il existe aussi des outils avec interface graphique qui utilisent rsync, par exemple [Acrosync <sup>(angl.)</sup>](https://acrosync.com/mac.html).

Une commande de base ressemble à ceci&nbsp;:

```bash
rsync [-options] SOURCE user@x.x.x.x:DESTINATION
```

- `-options` est un tiret suivi d'une ou plusieurs lettres, par exemple `-v` pour les messages d'erreur détaillés, et `-b` pour effectuer des sauvegardes. Voir la liste complète des options dans la [page de manuel rsync <sup>(angl.)</sup>](https://linux.die.net/man/1/rsync) (cherchez «&nbsp;Options summary&nbsp;»).
- `SOURCE` est le chemin du fichier ou du dossier local que vous souhaitez copier ou synchroniser
- `user@` correspond aux identifiants de l'utilisateur·ice sur le serveur distant vers lequel vous souhaitez copier les fichiers.
- `x.x.x.x` est l'adresse IP du serveur distant.
- `DESTINATION` est le chemin de l'emplacement où vous souhaitez copier votre dossier ou vos fichiers sur le serveur distant.

Vous pouvez également établir une connexion via SSH en utilisant l'option `-e` comme suit&nbsp;:

```bash
rsync [-options] -e "ssh [SSH DETAILS GO HERE]" SOURCE user@x.x.x.x:DESTINATION
```

De nombreux exemples sont disponibles sur Internet, notamment sur le [site officiel <sup>(angl.)</sup>](https://rsync.samba.org/examples.html) et sur la [page Wikipédia <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Rsync#Examples) consacrée à rsync.
