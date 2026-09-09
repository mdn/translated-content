---
title: Prise de contrôle de sous-domaine
slug: Web/Security/Attacks/Subdomain_takeover
l10n:
  sourceCommit: df8445288d6a7c39ef7d7c711af2189790b23831
---

Une prise de contrôle de sous-domaine (<i lang="en">Subdomain takeover</i> en anglais) se produit lorsqu'un·e attaquant·e prend le contrôle d'un sous-domaine d'un domaine cible. Généralement, cela se produit lorsque le sous-domaine possède un nom canonique ([CNAME <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/CNAME_record)) dans le système de noms de domaine ([DNS](/fr/docs/Glossary/DNS)), mais qu'aucun hôte ne fournit de contenu pour celui-ci. Cela peut se produire soit parce qu'un hôte virtuel n'a pas encore été publié, soit parce qu'un hôte virtuel a été supprimé. Un·e attaquant·e peut prendre le contrôle de ce sous-domaine en fournissant son propre hôte virtuel, puis en y hébergeant son propre contenu.

Si un·e attaquant·e y parvient, il·elle peut potentiellement lire les [cookies](/fr/docs/Web/HTTP/Guides/Cookies) définis depuis le domaine principal, effectuer une [injection de scripts inter-site](/fr/docs/Web/Security/Attacks/XSS) ou contourner les [politiques de sécurité du contenu](/fr/docs/Web/HTTP/Guides/CSP), ce qui lui permet de capturer des informations protégées, notamment des identifiants de connexion, ou d'envoyer du contenu malveillant à des utilisateur·ice·s qui ne se doutent de rien.

Un sous-domaine est comme une prise électrique. Si votre propre appareil (hôte) y est branché, tout va bien. Cependant, si vous retirez votre appareil de la prise (ou si vous n'en avez pas encore branché un), quelqu'un peut en brancher un autre. Vous devez couper le courant au niveau du disjoncteur ou du boîtier à fusibles (DNS) pour empêcher la prise d'être utilisée par quelqu'un d'autre.

## Comment se produisent-ils ?

Si le processus de mise à disposition ou de retrait d'un hôte virtuel n'est pas correctement géré, un·e attaquant·e peut avoir l'occasion de prendre le contrôle d'un sous-domaine.

### Pendant la mise à disposition

Un·e attaquant·e configure un hôte virtuel pour un nom de sous-domaine que vous avez acheté auprès du fournisseur d'hébergement, avant que vous ne puissiez le faire.

Supposons que vous contrôliez le domaine example.com. Vous voulez ajouter un blog à l'adresse blog.example.com et vous décidez d'utiliser un fournisseur d'hébergement qui gère une plateforme de blogs. (Pour «&nbsp;blog&nbsp;», vous pouvez remplacer ce terme par «&nbsp;plateforme de commerce électronique&nbsp;», «&nbsp;plateforme de service client&nbsp;» ou tout autre scénario d'hébergement virtuel «&nbsp;dans le cloud&nbsp;».) Le processus que vous suivez peut ressembler à ceci&nbsp;:

1. Vous enregistrez le nom «&nbsp;blog.example.com&nbsp;» auprès d'un bureau d'enregistrement de domaines.
2. Vous configurez les enregistrements DNS pour rediriger vers l'hôte virtuel les navigateurs qui souhaitent accéder à blog.example.com.
3. Vous créez un hôte virtuel auprès du fournisseur d'hébergement.

À moins que le fournisseur d'hébergement ne vérifie très attentivement que l'entité qui configure l'hôte virtuel est bien propriétaire du nom de sous-domaine, un·e attaquant·e plus rapide que vous peut créer un hôte virtuel auprès du même fournisseur d'hébergement en utilisant votre nom de sous-domaine. Dans ce cas, dès que vous configurez le DNS à l'étape 2, l'attaquant·e peut héberger du contenu sur votre sous-domaine.

### Pendant le retrait

Vous désactivez votre hôte virtuel, mais un·e attaquant·e configure un nouvel hôte virtuel en utilisant le même nom et le même fournisseur d'hébergement.

Vous (ou votre entreprise) décidez que vous ne souhaitez plus gérer de blog, alors vous supprimez l'hôte virtuel du fournisseur d'hébergement. Cependant, si vous ne supprimez pas l'entrée DNS qui pointe vers le fournisseur d'hébergement, un·e attaquant·e peut alors créer son propre hôte virtuel auprès de ce fournisseur, revendiquer votre sous-domaine, et y héberger son propre contenu.

## Se défendre contre la prise de contrôle de sous-domaine

Prévenir les prises de contrôle de sous-domaines consiste à respecter l'ordre des opérations dans la gestion du cycle de vie des hôtes virtuels et du DNS. Selon la taille de l'organisation, cela peut nécessiter une communication et une coordination entre plusieurs services, ce qui ne peut qu'augmenter le risque d'une configuration vulnérable.

- Définissez des processus standard pour la mise à disposition et le retrait des hôtes. Effectuez toutes les étapes aussi rapprochées que possible.
  - Commencez la mise à disposition en revendiquant l'hôte virtuel&nbsp;; créez les enregistrements DNS _en dernier_.
  - Commencez le retrait en supprimant les enregistrements DNS _en premier_.

- Dressez un inventaire de tous les domaines de votre organisation et de leurs fournisseurs d'hébergement, puis mettez-le à jour lorsque la situation évolue, afin de vous assurer que rien ne reste orphelin.
- Faites pression sur les fournisseurs d'hébergement pour qu'ils comblent les lacunes&nbsp;; demandez-leur comment ils vérifient qu'une personne qui revendique un hôte virtuel possède réellement un droit légitime sur le nom de domaine. Travaillez au sein de votre organisation pour intégrer ce point au processus de qualification des fournisseurs.

## Mon sous-domaine a été pris sous contrôle. Que dois-je faire ?

Si vous découvrez qu'un sous-domaine de votre domaine a été pris sous le contrôle d'un tiers, la première étape, si possible, consiste à «&nbsp;couper le courant&nbsp;» en supprimant l'entrée DNS du sous-domaine. Si votre site comporte plusieurs couches de virtualisation, par exemple un [CDN](/fr/docs/Glossary/CDN) en plus de l'hébergement virtuel, vous devez peut-être examiner chaque couche afin de déterminer exactement où l'attaquant·e a fait valoir sa revendication d'hôte virtuel pour prendre le contrôle de votre domaine.

## En savoir plus

- [«&nbsp;Réflexions approfondies&nbsp;» sur les vulnérabilités de prise de contrôle de sous-domaines <sup>(angl.)</sup>](https://claudijd.github.io/2017/02/03/deep-thoughts-on-subdomain-takeovers/)
- [Prise de contrôle de sous-domaine&nbsp;: notions de base <sup>(angl.)</sup>](https://0xpatrik.com/subdomain-takeover-basics/)
