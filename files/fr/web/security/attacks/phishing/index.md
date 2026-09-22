---
title: Hameçonnage
slug: Web/Security/Attacks/Phishing
l10n:
  sourceCommit: 849ca26a53af83dbb6b576b6f05ea618f9291d1f
---

L'hameçonnage (<i lang="en">phishing</i> en anglais) est une attaque {{Glossary("social engineering", "d'ingénierie sociale")}} dans laquelle un·e utilisateur·ice est trompé·e en croyant qu'il ou elle interagit avec un site avec lequel il·elle a un compte, alors qu'en réalité il·elle interagit avec l'attaquant·e. L'attaquant·e convainc l'utilisateur·ice de saisir ses identifiants sur le faux site, et vole ainsi les identifiants de l'utilisateur·ice.

## Vue d'ensemble

L'hameçonnage est une attaque très ancienne, mais toujours très courante, qui connaît de nombreuses variantes, conçues à la fois pour contourner les défenses et tirer parti de nouvelles vulnérabilités. Sous sa forme basique&nbsp;:

1. L'attaquant·e enregistre un nom de domaine qui ressemble à celui du site cible. Par exemple, si le site bancaire de l'utilisateur·ice est `ma-banque.example.com`, l'attaquant·e peut enregistrer `ma-banque.examp1e.com`.
2. L'attaquant·e crée un site à cette adresse qui ressemble au site réel.
3. L'attaquant·e envoie un courriel à l'utilisateur·ice, se faisant passer pour `ma-banque.example.com`, donnant une raison de demander à l'utilisateur·ice de visiter le site, et contenant un lien vers le faux site `ma-banque.examp1e.com`.
4. L'utilisateur·ice clique sur le lien et est invité·e à se connecter. Il·elle saisit son nom d'utilisateur·ice et son mot de passe, et l'attaquant·e dispose désormais de ses identifiants.

Les attaques par hameçonnage utilisent parfois différentes techniques pour contacter leurs victimes, comme les messages texte ou les appels vocaux, et n'impliquent parfois aucun site web, convainquant les utilisateur·ice·s de leur communiquer oralement des mots de passe ou des codes PIN.

Certaines attaques par hameçonnage sont très indiscriminées et envoient de nombreux messages à des victimes potentielles, dans l'espoir que certaines se fassent piéger. En revanche, lors d'attaques par _hameçonnage ciblé_, les attaquant·e·s recherchent des victimes précises et recueillent des informations personnelles à leur sujet pour rendre le leurre plus convaincant. Par exemple, l'e-mail semble provenir de quelqu'un que la victime connaît et contient même des informations privées.

Les attaques par hameçonnage ne dépendent pas de la naïveté ou de l'inexpérience des utilisateur·ice·s&nbsp;: plusieurs décennies d'expérience montrent que même des utilisateur·ice·s très expérimenté·e·s et compétent·e·s sont vulnérables aux attaques par hameçonnage, en particulier lorsqu'ils·elles sont occupé·e·s, fatigué·e·s ou distrait·e·s.

## Défenses

Une difficulté, pour un site web, à se défendre contre l'hameçonnage est que le site ciblé n'est pas du tout impliqué dans l'attaque. Celle-ci dépend entièrement du fait que l'utilisateur·ice se fasse piéger par l'attaquant·e. Cette section présente quelques pratiques utiles, mais la seule qui soit réellement efficace consiste à utiliser des [clés d'accès](#passkeys) plutôt que des mots de passe.

### Configurer le DNS

Les e-mails d'hameçonnage falsifient souvent l'adresse de l'expéditeur·ice pour faire croire à la victime que l'e-mail provient réellement du site ciblé. Trois enregistrements {{Glossary("DNS")}} aident les serveurs de messagerie à détecter ces falsifications, ce qui contribue à marquer les e-mails d'hameçonnage comme indésirables dans le client de messagerie de la victime ou à les bloquer complètement.

- L'enregistrement [du cadriciel de politique de sécurité (<abbr lang="en" title="Sender Policy Framework">SPF</abbr>) <sup>(angl.)</sup>](https://www.cloudflare.com/en-ca/learning/dns/dns-records/dns-spf-record/) répertorie les adresses autorisées à envoyer un e-mail depuis le domaine. Un serveur de messagerie destinataire extrait le nom de domaine de l'en-tête `Return-Path` de l'e-mail et recherche l'enregistrement SPF associé à ce domaine.
- L'enregistrement [d'identification courriel par DomainKeys (<abbr lang="en" title="DomainKeys Identified Mail">DKIM</abbr>) <sup>(angl.)</sup>](https://www.cloudflare.com/en-ca/learning/dns/dns-records/dns-dkim-record/) permet à l'expéditeur·ice de {{Glossary("digital signature", "signer numériquement")}} les e-mails. Le serveur destinataire extrait le nom de domaine de la signature et l'utilise pour rechercher l'enregistrement DKIM associé à ce domaine. L'enregistrement DKIM contient la clé publique utilisée pour vérifier la signature. Le nom de domaine de la signature correspond également au nom de domaine de l'en-tête `From` de l'e-mail (cela signifie essentiellement que les noms de domaine correspondent ou que la valeur de l'en-tête `From` est un sous-domaine du domaine de la signature).
- L'enregistrement [d'authentification, rapports et conformité des messages fondés sur le domaine (<abbr lang="en" title="Domain-based Message Authentication, Reporting, and Conformance">DMARC</abbr>) <sup>(angl.)</sup>](https://www.cloudflare.com/en-ca/learning/dns/dns-records/dns-dmarc-record/) indique au destinataire comment traiter les échecs SPF et DKIM&nbsp;: les mettre en quarantaine comme indésirables, les rejeter ou les autoriser.

Vous devez configurer ces enregistrements DNS pour vos domaines afin d'aider les serveurs de messagerie à reconnaître les messages falsifiés.

### Gestionnaires de mots de passe

Les gestionnaires de mots de passe peuvent fournir un certain niveau de protection contre les attaques par hameçonnage. Ils remplissent trois fonctions principales&nbsp;:

- **Génération de mots de passe**&nbsp;: créer des mots de passe robustes lors de l'inscription des utilisateur·ice·s.
- **Stockage de mots de passe**&nbsp;: stocker les mots de passe d'un·e utilisateur·ice de manière sécurisée afin qu'il·elle n'ait pas à les mémoriser (et puisse donc utiliser des mots de passe plus robustes).
- **Saisie de mots de passe**&nbsp;: saisir automatiquement le mot de passe de l'utilisateur·ice pour un site lorsqu'il·elle consulte la page de connexion de ce site.

La dernière de ces fonctions aide contre l'hameçonnage. L'utilisateur·ice ne voit peut-être pas la différence entre le faux domaine `ma-banque.examp1e.com` et le vrai domaine `ma-banque.example.com`, mais le gestionnaire de mots de passe la voit et ne saisit donc pas automatiquement le vrai mot de passe sur le faux site. Cela suffit parfois à avertir l'utilisateur·ice que la demande de connexion n'est pas légitime.

En tant que développeur·euse web, vous ne pouvez pas obliger vos utilisateur·ice·s à utiliser un gestionnaire de mots de passe. Cependant, si vous ne faites pas attention, vous pouvez empêcher ces gestionnaires de s'intégrer à votre site. L'article [Faire fonctionner les gestionnaires de mots de passe avec votre formulaire de connexion <sup>(angl.)</sup>](https://hidde.blog/making-password-managers-play-ball-with-your-login-form/) résume très bien les pratiques à suivre et celles à éviter si vous voulez permettre aux utilisateur·ice·s d'utiliser des gestionnaires de mots de passe sur votre site. Il est également important de tester votre site avec des gestionnaires de mots de passe, qu'ils soient intégrés aux navigateurs ou proposés par des applications autonomes populaires.

Malheureusement, les utilisateur·ice·s apprennent à s'attendre à ce que les outils échouent parfois et à contourner leurs défaillances. Ainsi, même si un·e utilisateur·ice possède un gestionnaire de mots de passe, que celui-ci fonctionne avec votre site et qu'il ne remplit pas automatiquement le mot de passe lors d'une tentative d'hameçonnage, rien ne garantit que l'utilisateur·ice ne colle pas simplement le mot de passe manuellement.

### Authentification à plusieurs facteurs

L'utilisation de {{Glossary("multi-factor authentication", "l'authentification à plusieurs facteurs (MFA)")}} pour authentifier les utilisateur·ice·s rend l'hameçonnage plus difficile, mais ne l'empêche pas selon la méthode utilisée.

En particulier, dans les implémentations MFA les plus courantes, l'utilisateur·ice doit saisir son mot de passe et un autre code, appelé [mot de passe à usage unique (<abbr lang="en" title="One-Time Password">OTP</abbr>)](/fr/docs/Web/Security/Authentication/OTP), qui est propre à cette tentative de connexion. Deux variantes sont courantes&nbsp;:

- <i lang="en">OTP</i> par SMS&nbsp;:
  - L'utilisateur·ice fournit son numéro de téléphone portable lors de son inscription.
  - Après que l'utilisateur·ice a fourni son nom d'utilisateur·ice et son mot de passe, le site web lui envoie un SMS contenant un <i lang="en">OTP</i>.
  - L'utilisateur·ice saisit <i lang="en">l'OTP</i>.
  - Si les valeurs de <i lang="en">l'OTP</i> correspondent, l'utilisateur·ice est connecté·e.

- <i lang="en">OTP</i> fondé sur le temps (<abbr lang="en" title="Time-Based One-Time Password">TOTP</abbr>)&nbsp;:
  - L'utilisateur·ice a une application d'authentification installée.
  - Après que l'utilisateur·ice a fourni son nom d'utilisateur·ice et son mot de passe, le site web calcule un <i lang="en">OTP</i> en utilisant l'heure actuelle comme entrée.
  - Le dispositif d'authentification de l'utilisateur·ice effectue le même calcul, et l'utilisateur·ice saisit <i lang="en">l'OTP</i> que l'application génère.
  - Si les valeurs de <i lang="en">l'OTP</i> correspondent, l'utilisateur·ice est connecté·e.

Le <i lang="en">TOTP</i> est considéré comme plus sécurisé que <i lang="en">l'OTP</i> par SMS, car les attaquant·e·s peuvent intercepter les messages SMS. Cependant, du point de vue de l'hameçonnage, les deux méthodes sont vulnérables.

Pour hameçonner un·e utilisateur·ice qui utilise un <i lang="en">OTP</i> comme second facteur, le faux site de l'attaquant·e agit comme un manipulateur au milieu entre l'utilisateur·ice et le vrai site&nbsp;:

1. L'attaquant·e envoie à l'utilisateur·ice l'e-mail contenant le lien vers le faux site.
2. L'utilisateur·ice clique sur le lien de l'e-mail et saisit son nom d'utilisateur·ice et son mot de passe sur le faux site.
3. Le faux site relaie le nom d'utilisateur·ice et le mot de passe au vrai site.
4. Le vrai site génère un <i lang="en">TOTP</i>.
5. Le faux site demande à l'utilisateur·ice de saisir son <i lang="en">TOTP</i>.
6. L'application d'authentification de l'utilisateur·ice génère le même <i lang="en">TOTP</i>, et l'utilisateur·ice le saisit sur le faux site.
7. Le faux site relaie le <i lang="en">TOTP</i> au vrai site, et l'attaquant·e obtient l'accès.

![Diagramme montrant comment une attaque par hameçonnage fonctionne contre une authentification TOTP à deux facteurs](totp-phish.svg)

Cette attaque est beaucoup plus difficile que le simple hameçonnage d'un mot de passe, car l'attaquant·e agit en temps réel. Cependant, les boîtes à outils d'hameçonnage réduisent considérablement la difficulté de sa mise en œuvre.

### Clés d'accès

La défense technique la plus efficace contre l'hameçonnage consiste à authentifier les utilisateur·ice·s à l'aide de [clés d'accès](/fr/docs/Web/Security/Authentication/Passkeys).

Une clé d'accès se crée lorsque l'utilisateur·ice s'inscrit sur le site et est propre à {{Glossary("origin", "l'origine")}} pour laquelle elle se crée. La clé d'accès se génère et se stocke dans un module appelé _dispositif d'authentification_, intégré à l'appareil de l'utilisateur·ice ou qui lui est relié.

Contrairement aux mots de passe ou aux codes <i lang="en">OTP</i>, un·e utilisateur·ice ne saisit jamais manuellement une clé d'accès sur un site&nbsp;: en réalité, la clé d'accès ne se transmet jamais au site. Lorsqu'un site web demande à l'utilisateur·ice de s'authentifier avec l'authentification web, le navigateur demande au dispositif d'authentification une clé d'accès qui correspond à l'origine du site. S'il en trouve une, le dispositif d'authentification génère un jeton que le navigateur envoie au site web. Le site web vérifie le jeton et connecte l'utilisateur·ice.

Comme la clé d'accès est propre à l'origine du site, si une clé d'accès se crée pour le compte de l'utilisateur·ice sur `ma-banque.example.com`, l'utilisateur·ice ne peut pas l'utiliser sur `ma-banque.examp1e.com`. Le navigateur ne la considère simplement pas comme applicable au faux site.

Les clés d'accès constituent donc une défense efficace contre l'hameçonnage. Il s'agit d'une méthode d'authentification beaucoup plus récente que les mots de passe ou les <i lang="en">OTP</i>, et les outils qui l'entourent sont moins matures. Cependant, la situation évolue et les clés d'accès remplacent les mots de passe comme méthode d'authentification la plus courante sur le web.

### Indicateur de sécurité personnalisé

Une autre défense contre l'hameçonnage, qui n'est plus souvent utilisée, consiste pour le site web à afficher un message ou une image secrète à l'utilisateur·ice sur sa page de connexion.

1. Après l'inscription de l'utilisateur·ice, il·elle choisit un message ou une image secrète à associer à son compte.
2. Lorsque l'utilisateur·ice se connecte, il·elle saisit d'abord son nom d'utilisateur·ice.
3. La page de connexion affiche ensuite le secret associé au compte.
4. Si le secret ne correspond pas à ce que l'utilisateur·ice attend, il·elle ne saisit pas son mot de passe.

L'idée est que l'attaquant·e ne connaît pas le secret et ne peut donc pas l'afficher sur la fausse page de connexion.

Dans une variante de cette technique, le site web utilise un cookie persistant pour décider quel secret afficher, plutôt que le nom d'utilisateur·ice.

En pratique, cette technique présente quelques difficultés&nbsp;:

- Elle repose sur l'attention que l'utilisateur·ice porte à l'indicateur de sécurité&nbsp;: elle repose donc sur la sensibilisation des utilisateur·ice·s. L'expérience montre qu'en règle générale (c'est-à-dire en dehors d'un contexte contrôlé comme une entreprise gérée de manière sécurisée), la sensibilisation des utilisateur·ice·s n'est pas très efficace pour empêcher les attaques par hameçonnage.
- Selon le mécanisme utilisé pour décider quel secret afficher, celui-ci peut être vulnérable à la même attaque de manipulateur au milieu que l'authentification à plusieurs facteurs.
- Le mécanisme utilisé par le serveur pour décider quel secret afficher peut être vulnérable&nbsp;: par exemple, il peut être plus facile pour un·e attaquant·e de découvrir un nom d'utilisateur·ice qu'un mot de passe. Avec un nom d'utilisateur·ice, un·e attaquant·e peut déterminer le secret et créer un faux site convaincant.

En raison de ces faiblesses, cette défense est rarement utilisée&nbsp;: l'authentification à plusieurs facteurs et les clés d'accès sont toutes deux considérées comme des défenses plus robustes.

## Liste de contrôle récapitulative de la défense

- Configurez les enregistrements DNS `SPF`, `DKIM` et `DMARC` pour vos domaines.
- Envisagez d'utiliser des clés d'accès pour authentifier les utilisateur·ice·s.
- Si vous utilisez des mots de passe, envisagez d'utiliser l'authentification à plusieurs facteurs et assurez-vous que les gestionnaires de mots de passe peuvent fonctionner avec votre site.
