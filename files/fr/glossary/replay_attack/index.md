---
title: Attaque par rejeu (Replay attack)
slug: Glossary/Replay_attack
l10n:
  sourceCommit: dc788bf0ea36cb1ebe809c82aaae2c77cb3e18c0
---

En sécurité web, une _attaque par rejeu_ se produit lorsqu'un·e attaquant·e intercepte un message déjà envoyé et le renvoie plus tard pour obtenir les mêmes informations d'identification que le message d'origine, éventuellement avec une charge utile ou une instruction différente.

Les attaques par rejeu peuvent être évitées en incluant un identifiant unique à usage unique avec chaque message, que le·la destinataire peut utiliser pour vérifier l'authenticité de la transmission. Cet identifiant peut prendre la forme d'un jeton de session ou d'un «&nbsp;nombre utilisé une seule fois&nbsp;» ({{Glossary("Nonce", "nombre unique")}}).

## Voir aussi

- [Attaque par rejeu](https://fr.wikipedia.org/wiki/Attaque_par_rejeu) sur Wikipédia.
