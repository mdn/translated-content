---
title: Comment documenter un en-tête HTTP
slug: MDN/Writing_guidelines/Howto/Document_an_HTTP_header
l10n:
  sourceCommit: 17db3c03142f7077dc335f6f7c127388e2c64442
---

{{MDNSidebar}}

La [référence des en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers) sur MDN Web Docs documente les champs d'en-têtes HTTP. Ce sont des composants de la section d'en-tête des messages de requête et de réponse dans le protocole de transfert hypertexte ([HTTP](/fr/docs/Web/HTTP)). Ils définissent les paramètres de fonctionnement d'une transaction HTTP. Cet article explique comment créer une nouvelle page de référence pour un en-tête HTTP.

Vous devrez avoir des connaissances en [HTTP](/fr/docs/Web/HTTP) ou être prêt à vous familiariser avec ses détails.

> [!NOTE]
> La documentation de nouvelles en-têtes HTTP doit d'abord avoir lieu en anglais avant de pouvoir traduire le nouveau contenu en français. L'organisation du contenu de MDN ne permet pas de créer du contenu en français si celui-ci n'existe pas déjà en anglais.

## Étape 1 - Déterminer l'en-tête HTTP à documenter

- De nombreux en-têtes HTTP sont définis dans diverses normes de l'IETF.
- L'IANA tient un [registre des champs d'en-tête HTTP](https://www.iana.org/assignments/http-fields/http-fields.xhtml) et Wikipédia répertorie [les champs d'en-tête connus](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields), mais tous ne sont pas pertinents pour les développeuses et développeurs web ou ne font pas partie d'une norme officielle.
- S'il existe des **liens rouges** sur la page de [référence des en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers), ces en-têtes sont un bon choix à documenter.
- En cas de doute, [demandez à l'équipe de MDN Web Docs](/fr/docs/MDN/Community/Communication_channels) s'il est judicieux d'écrire sur l'en-tête que vous avez choisi.

## Étape 2 - Vérifier les pages d'en-tête HTTP existantes

- Les en-têtes HTTP existants sont documentés [ici](/fr/docs/Web/HTTP/Reference/Headers).
- Il existe différentes catégories d'en-têtes&nbsp;: [en-tête de requête](/fr/docs/Glossary/Request_header), [en-tête de réponse](/fr/docs/Glossary/Response_header), et [en-tête de représentation](/fr/docs/Glossary/Representation_header).
- Trouvez la catégorie de l'en-tête que vous vous apprêtez à documenter (notez que certains en-têtes peuvent être à la fois des en-têtes de requête et des en-têtes de réponse, selon le contexte).
- Accédez à une page de référence d'en-tête existant dans la même catégorie.

## Étape 3 - Créer la page d'en-tête HTTP

- Toutes les pages d'en-tête se trouvent sous cette arborescence&nbsp;: [/docs/Web/HTTP/Headers/](/fr/docs/Web/HTTP/Reference/Headers)
- Pour créer une nouvelle page, voir les instructions dans notre [guide de création de pages](/fr/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Étape 4 - Rédiger le contenu

- Vous pouvez soit partir de notre [modèle de page d'en-tête HTTP](/fr/docs/MDN/Writing_guidelines/Page_structures/Page_types#http_header_reference_page), soit utiliser une structure copiée à partir de l'un des documents d'en-tête HTTP existants que vous avez trouvés à l'étape 2. C'est à vous de choisir.
- Rédigez un texte sur le nouvel en-tête HTTP.
- Assurez-vous d'avoir les sections suivantes&nbsp;:
  - Texte d'introduction dont la première phrase mentionne le nom de l'en-tête (en gras) et résume son objectif.
  - - Une boîte d'information contenant au moins le type d'en-tête et si l'en-tête est un [nom d'en-tête interdit](/fr/docs/Glossary/Forbidden_request_header).
  - Un encart syntaxique contenant toutes les directives/paramètres/valeurs possibles de l'en-tête HTTP.
  - Une section expliquant ces directives/valeurs.
  - Une section d'exemples qui contient un cas d'utilisation pratique pour cet en-tête ou qui montre où et comment il se produit habituellement.
  - Une section de spécification listant les documents standards RFC pertinents.
  - Une section "Voir aussi" énumérant les ressources pertinentes.

## Étape 5 - Ajouter des informations sur la compatibilité des navigateurs

- Si vous avez consulté d'autres pages d'en-tête HTTP, vous verrez qu'il existe une macro `{{Compat}}` qui remplit une table du navigateur pour vous.
- La page du tableau de compatibilité est générée à partir de données structurées. Si vous souhaitez contribuer à ces données, veuillez consulter les instructions à l'adresse <https://github.com/mdn/browser-compat-data/blob/main/README.md> et nous envoyer une <i lang="en">pull request</i>.

## Étape 6 - Mise à jour de la liste des en-têtes HTTP

Assurez-vous que votre en-tête est répertorié dans une catégorie appropriée sur la [page de référence des en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers).

## Étape 7 - Révision du contenu

Après avoir créé la page d'en-tête, soumettez-la en tant que [<i lang="en">pull request</i>](https://docs.github.com/fr/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request). Un membre de notre équipe de révision sera automatiquement désigné pour réviser votre page.
