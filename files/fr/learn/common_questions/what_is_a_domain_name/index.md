---
title: Comprendre les noms de domaine
slug: Learn/Common_questions/What_is_a_domain_name
tags:
  - Beginner
  - Domain names
  - Infrastructure
  - Learn
  - Web
translation_of: Learn/Common_questions/What_is_a_domain_name
original_slug: Apprendre/Comprendre_noms_de_domaine
---
Dans cet article, nous discutons des noms de domaine : ce qu'ils sont, comment ils sont organisés et comment en avoir un.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Pour commencer, vous devez comprendre
        <a href="/fr/Apprendre/Fonctionnement_Internet"
          >comment Internet fonctionne</a
        >
        et ce que sont les <a href="/fr/Learn/Understanding_URLs">URL</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>
        Apprendre ce qu'est un nom de domaine, son fonctionnement et son
        importance.
      </td>
    </tr>
  </tbody>
</table>

Les noms de domaine jouent un rôle clé dans l'infrastructure d'Internet. Ils fournissent des adresses, humainement compréhensibles pour retrouver des serveurs web connectés sur Internet.

Tout ordinateur relié à Internet peut être contacté via une adresse {{Glossary("IP")}} publique. En IPv4, cette adresse est constituée de 32 bits, souvent exprimés avec quatre groupes de chiffes, compris entre 0 et 225, séparés par des points (par exemple `173.194.121.32`). Avec IPv6, on a 128 bits, soit huit groupes de quatre chiffres hexadécimaux séparés par deux points (par exemple `2001:0db8:85a3:0042:1000:8a2e:0370:7334`). Les ordinateurs n'ont aucun problème pour mémoriser ces adresses mais ça peut être difficile pour quelqu'un de faire le rapprochement entre un site web/service et cette adresse. De plus, le site peut « déménager » sur un autre ordinateur, l'ordinateur peut changer d'adresse... Dans ces cas, l'adresse correspondante à un site sera modifiée au cours du temps : il faudra alors utiliser la nouvelle adresse pour l'atteindre. Afin de résoudre ces problèmes (mémorisation et stabilité), on utilise des adresses compréhensibles appelée noms de domaine.

## Pédagogie active

_Ce contenu a besoin d'être enrichi, [n'hésitez pas à contribuer !](/fr/docs/MDN/Getting_started)_

- [Qu'est-ce qu'un nom de domaine](http://www.afnic.fr/fr/votre-nom-de-domaine/qu-est-ce-qu-un-nom-de-domaine/) sur le site de l'AFNIC
- [Le DNS](https://www.youtube.com/watch?v=QHVK666TFUI), présentation de Stéphane Bortzmeyer réalisée dans le cadre de « Il était une fois Internet » (CC BY-SA)

## Allons plus loin

### La structure d'un nom de domaine

Un nom de domaine est composé de plusieurs parties, séparées par des points. Ces différents composants sont lus **de droite à gauche** :

![Anatomy of the MDN domain name](structure_fr.png)

Chacune de ces parties fournit des informations sur le nom de domaine dans son ensemble.

- {{Glossary("TLD")}} (_Top-Level Domain_ en anglais qui signifie domaine de premier niveau)
  - : Le TLD fournit une information générique purement indicative sur le service associé au nom de domaine. Certains TLD peuvent indiquer que le site ou service provient d'un pays donné (par exemple : .us, .fr ou .sh qui correspondent aux États-Unis, à la France et à Sainte-Hélène), d'autres TLD sont génériques (par exemple : .com, .org, .net).
- Composant
  - : Les composants sont les différents fragments d'un nom de domaine (le TLD est le premier composant). Un composant peut être une lettre ou une phrase entière (sans espace). Ce composant situé juste après le TLD est parfois appelé « domaine de deuxième niveau » (ou _Secondary Level Domain_ (SLD) en anglais). Un nom de domaine peut avoir plusieurs composants. Il n'est pas nécessaire ni obligatoire qu'il ait trois composants. Par exemple, www\.inf.ed.ac.uk est un nom de domaine tout à fait correct (il a 5 composants dont le TLD). Lorsqu'on possède la partie « supérieure » d'un nom de domaine (par exemple : [mozilla.org](https://mozilla.org)), on peut créer d'autres noms de domaines sous celui-ci (par exemple : [developer.mozilla.org](https://developer.mozilla.org)), ceux-ci sont parfois appelés « sous-domaines ».

### Acheter un nom de domaine

#### Qui possède un nom de domaine ?

Il est impossible d' « acheter » un nom de domaine. Vous payez pour le droit d'utiliser un nom de domaine pendant une période donnée (généralement un an ou plus). Il est possible de renouveller ce droit et ce renouvellement a la priorité sur les demandes d'autres personnes qui souhaiteraient bénéficier de ce nom de domaine.

Très souvent, ce sont des entreprises appelées bureaux d'enregistrement qui maintiennent les registres contenant les informations techniques et administratives qui vous lient à votre nom de domaine.

> **Note :** Pour certains noms de domaines, ce n'est pas un bureau d'enregistrement qui gèrera les registres. Par exemple les noms de domaines sous .fire sont gérés par Amazon.

#### Trouver un nom de domaine disponible

Pour déterminer si un nom de domaine est disponible :

- vous pouvez vous rendre sur le site d'un bureau d'enregistrement. La plupart fournissent un service « whois » (littéralement « qui est-ce ? » en anglais) qui indique si un nom de domaine est disponible.
- si vous utilisez un système qui possède un outil en ligne de commande, vous pouvez y saisir la commande `whois`. Voici un exemple avec `mozilla.org`:

<!---->

    $ whois mozilla.org
    Domain Name:MOZILLA.ORG
    Domain ID: D1409563-LROR
    Creation Date: 1998-01-24T05:00:00Z
    Updated Date: 2013-12-08T01:16:57Z
    Registry Expiry Date: 2015-01-23T05:00:00Z
    Sponsoring Registrar:MarkMonitor Inc. (R37-LROR)
    Sponsoring Registrar IANA ID: 292
    WHOIS Server:
    Referral URL:
    Domain Status: clientDeleteProhibited
    Domain Status: clientTransferProhibited
    Domain Status: clientUpdateProhibited
    Registrant ID:mmr-33684
    Registrant Name:DNS Admin
    Registrant Organization:Mozilla Foundation
    Registrant Street: 650 Castro St Ste 300
    Registrant City:Mountain View
    Registrant State/Province:CA
    Registrant Postal Code:94041
    Registrant Country:US
    Registrant Phone:+1.6509030800

Comme on peut le voir ici, on ne peut pas réserver `mozilla.org` car ce nom de domaine est déjà réservé par la Fondation Mozilla.

Essayons avec un autre, par exemple `unnométrange.fr` :

    > whois unnométrange.fr
    ...
    %% No entries found in the AFNIC Database.

On voit ici que ce nom de domaine n'existe pas dans les bases de données de serveurs `whois` (au moment où nous écrivons cet article). Si vous le souhaitiez, vous pourriez réserver ce nom !

#### Obtenir un nom de domaine

Le processus est assez simple :

1.  Aller sur le site web d'un bureau d'enregistrement
2.  Généralement, celui-ci possède une zone mise en avant pour rechercher la disponibilité d'un nom de domaine et le réserver le cas échéant. Saisissez le nom qui vous intéresse
3.  Il est ensuite nécessaire de remplir un formulaire avec différentes informations et détails. Assurez-vous de leur exactitude et surtout faites attention à l'orthographe choisie pour votre nom de domaine ! Une fois que vous aurez payé, il sera trop tard !
4.  Le bureau d'enregistrement vous informera dès que le nom de domaine sera enregistré et vous pourrez alors l'utiliser. Il faut parfois quelques heures pour qu'un nouveau nom de domaine soit enregistré.

> **Note :** Lors de ces étapes, le bureau d'enregistrement peut vous demander votre adresse postale. Assurez-vous que la valeur saisie est valide car les bureaux d'enregistrement de certains pays peuvent fermer un domaine si l'adresse fournie est invalide.

#### Rafraîchissement du DNS

Des bases de données DNS sont stockées sur chaque serveur DNS, partout dans le monde. Ces serveurs font tous référence à un serveur racine et à quelques uns appelés « serveurs faisant autorité ». Dès lors qu'un bureau d'enregistrement crée ou met à jour une information pour un domaine donné, il faut que cette information soit mise à jour pour chaque base de données DNS. Or, pour faciliter certaines tâches, chaque serveur DNS stocke les informations pour une période donnée avant que celles-ci soient considérées invalides (le serveur DNS demandera alors les informations à jour au serveur faisant autorité). Pour cette raison, la mise à jour peut prendre un certain temps pendant lequel tous les serveurs DNS concernés récupèrent des informations « rafraîchies ».

> **Note :** Ce temps est parfois appelé **temps de propagation**. Cependant ce terme n'est pas précis ni correct car la mise à jour ne se « propage » pas des serveurs faisant autorité vers les différents serveurs DNS. Ce sont les serveurs DNS, interrogés par votre ordinateur, qui demandent l'information aux serveurs faisant autorité dès qu'ils ont besoin des informations pour un nom de domaine ou que celles-ci sont arrivées à expiration.

### Comment fonctionne une requête DNS ?

Comme nous l'avons mentionné au début, quand on souhaite se rendre sur un site web via un navigateur, il est plus facile que de saisir une URL avec un nom de domaine que de saisir l'adresse IP du serveur correspondant. Voyons ce qui se passe quand on saisit une adresse :

1.  Vous saisissez `mozilla.org` dans la barre d'adresse du navigateur.
2.  Le navigateur analyse l'URL (l'adresse) et identifie le nom de domaine. Il demande alors à votre ordinateur si celui-ci connaît l'adresse IP associée à ce nom de domaine (grâce à un cache DNS local). Si l'ordinateur connaît le nom de domaine, il la convertit en une adresse et la transmet au navigateur web qui échange alors avec le serveur qui a cette adresse. C'est tout.
3.  Si votre ordinateur ne connait pas l'adresse IP associée au nom `mozilla.org`, il continue et demande à un serveur DNS, celui-ci renverra alors l'adresse IP correspondante au nom de domaine demandé.
4.  Une fois que l'ordinateur connaît l'adresse IP demandée, le navigateur peut commencer à échanger du contenu avec le serveur web.

![Explanation of the steps needed to obtain the result to a DNS request](2014-10-dns-request2.png)

> **Note :** Si c'est la première fois que quelqu'un demande l'adresse IP pour mozilla.org au serveur DNS, celui-ci ne la connaîtra pas. Il demandera alors au serveur faisant autorité qui possède l'information. Une fois l'adresse connue, il la transmettra à l'ordinateur.

## Étapes suivantes

Dans ces articles, nous avons beaucoup discuté des processus et de l'infrastructure. Nous allons maintenant passer à la suite :

- Si vous souhaitez commencer, débutez en explorant les différents design possibles décrit sur [concevoir une page web](/fr/Apprendre/Concevoir_page_web).
- Construire un site web peut coûter de l'argent. Vous trouverez les différentes informations sur [combien coûte la construction d'un site web](/fr/docs/Learn/How_much_does_it_cost).
- Vous pouvez aussi approfondir en consultant l'article sur [les noms de domaine](https://fr.wikipedia.org/wiki/Nom_de_domaine) sur Wikipédia.
