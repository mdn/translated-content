---
title: Publier votre site web
short-title: Publication
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
l10n:
  sourceCommit: 2a563c927890794b513523649ccfbbe48d336465
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

Une fois que vous avez terminé d'écrire le code et d'organiser les fichiers qui composent votre site web, il faut le mettre en ligne pour que tout le monde puisse le trouver. Cet article explique comment obtenir [votre site d'exemple](/fr/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like) en ligne.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Connaissance de base de votre système d'exploitation, des logiciels de base que vous utilisez pour créer un site web, et des systèmes de fichiers.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Les outils et concepts de base liés à la publication d'un site web&nbsp;: hébergement, domaines, programmes FTP.</li>
          <li>Quelles alternatives d'hébergement existent, par exemple GitHub et CodePen.</li>
          <li>Publier un site web avec GitHub Pages.</li>
          <li>L'hébergement, comment l'acheter et comment mettre un site en ligne.</li>
          <li>Comment enregistrer un nom de domaine.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Quelles sont les options ?

Publier un site web est un sujet complexe, car il existe de nombreuses façons de procéder. Cet article explique les approches les plus courantes&nbsp;:

- Obtenir un hébergement et un nom de domaine (faible coût pour les petits projets)
- Utiliser un IDE basé sur le web (gratuit pour les sites de base)
- Utiliser un outil de publication en ligne (gratuit pour les sites de base)

## Trouver un hébergement et un nom de domaine

Pour avoir plus de contrôle sur le contenu et l'apparence du site, la plupart des professionnel·le·s ou entreprises choisissent d'acheter un hébergement web et un nom de domaine&nbsp;:

- L'hébergement web est un espace de fichiers loué sur le [serveur web](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) d'une société d'hébergement. Vous placez les fichiers de votre site web sur le serveur web. Le serveur web fournit le contenu du site aux visiteur·euse·s. Certains services d'hébergement web sont gratuits pour l'hébergement de fichiers statiques de base, tandis que d'autres coûtent un petit montant par mois (environ 2 à 15 €).
- Un [nom de domaine](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) est l'adresse unique où les gens trouvent votre site web, comme `https://www.mozilla.org` ou `https://www.bbc.co.uk`. Vous pouvez louer votre nom de domaine pour autant d'années que vous le souhaitez auprès d'un **bureau d'enregistrement**. Le nom de domaine coûte généralement 5 à 15 $ par an. Ce coût varie en fonction de&nbsp;:
  - Le registre des domaines de premier niveau&nbsp;: les noms de domaine de premier niveau (TLD) comme `.com`, `.org` et `.io` sont gérés par différents registres qui fixent des frais pour les bureaux d'enregistrement. Certains pays utilisent les frais de registre comme source de revenus et fixent des prix élevés&nbsp;; les TLD populaires comme `.io` et `.ai` peuvent également être beaucoup plus chers que le `.com` standard.
  - La majoration du bureau d'enregistrement&nbsp;: certains bureaux d'enregistrement peuvent facturer plus pour certains noms de domaine. Par exemple, le même TLD peut être plus cher selon les bureaux d'enregistrement en fonction de l'offre et de la demande, et certains noms de domaine «&nbsp;premium&nbsp;» peuvent être plus chers, en particulier les noms courts comme `ai.com`.
  - Services associés au nom de domaine&nbsp;: certains bureaux d'enregistrement proposent des options supplémentaires telles qu'un prix promotionnel la première année qui augmente après le renouvellement ou des services de messagerie fournis par le bureau d'enregistrement.

Si vous obtenez votre hébergement web _et_ votre nom de domaine auprès de la même société, ils peuvent être automatiquement liés. Cependant, si vous les obtenez auprès de sociétés distinctes, ou si vous souhaitez changer d'hébergement, vous devez pointer le nom de domaine vers le serveur correct afin que les gens voient votre site web lorsqu'ils naviguent vers cette adresse web. Votre fournisseur d'hébergement vous donne une adresse web, sous la forme d'une adresse IP publique ou d'un sous-domaine de son domaine comme `my-app.pages.dev` ou `my-app.github.io`, et vous configurez vos enregistrements DNS pour ajouter un enregistrement A ou un enregistrement CNAME.

### Suggestions pour trouver hébergement et domaines

- MDN ne fait pas la promotion de sociétés commerciales d'hébergement ou de bureaux d'enregistrement particuliers. Pour en trouver, faites une recherche pour «&nbsp;hébergement web&nbsp;» et «&nbsp;noms de domaine&nbsp;». Tous les bureaux d'enregistrement proposent une fonctionnalité pour vérifier si le nom de domaine souhaité est disponible.
- Votre {{Glossary("ISP", "Fournisseur d'Accès Internet (FAI)")}} domestique ou professionnel propose peut-être un hébergement limité pour un petit site web. Les fonctionnalités sont limitées, mais cela peut être parfait pour vos premières expériences.
- Il existe aussi des services gratuits comme [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/) et [WordPress](https://wordpress.com/). Ces services sont limités, mais suffisants pour des expérimentations initiales.

## Utiliser un outil en ligne

Les entreprises utilisent différents mécanismes pour transférer des fichiers statiques vers leurs serveurs web. Beaucoup proposent plusieurs options&nbsp;; les options courantes comprennent l'utilisation d'un [client (S)FTP](/fr/docs/Glossary/FTP) ou de [RSync <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Rsync), ou le stockage du code source de votre site web dans un [dépôt GitHub <sup>(angl.)</sup>](https://github.com/) et l'octroi d'un accès à l'hébergeur afin qu'il puisse récupérer la source, la compiler si nécessaire et la publier.

Dans les sous-sections suivantes, nous examinons (S)FTP et RSync plus en détail.

### (S)FTP

Chaque système d'exploitation comprend un client (S)FTP dans son gestionnaire de fichiers. L'Explorateur Windows, Nautilus (un gestionnaire de fichiers courant sous Linux) et le Finder de Mac intègrent tous cette fonctionnalité. Cependant, les personnes choisissent souvent des clients (S)FTP dédiés pour afficher côte à côte les répertoires locaux ou distants et enregistrer les mots de passe des serveurs.

Si vous souhaitez installer un client (S)FTP, plusieurs options fiables et gratuites existent&nbsp;: par exemple, [FileZilla <sup>(angl.)</sup>](https://filezilla-project.org/) pour toutes les plateformes, [WinSCP <sup>(angl.)</sup>](https://winscp.net/eng/index.php) pour Windows, [Cyberduck <sup>(angl.)</sup>](https://cyberduck.io/) pour Mac ou Windows.

En général, votre hébergeur vous fournit des instructions de connexion par FTP telles que celles-ci&nbsp;:

> - Serveur SFTP&nbsp;: `sftp://demozilla.examplehostingprovider.net`
> - Nom d'utilisateur&nbsp;: `demozilla`
> - Mot de passe&nbsp;: `quickbrownfox`
> - Port&nbsp;: `5548`
> - Pour publier sur le Web, placez vos fichiers dans le répertoire `Public/htdocs`.

Pour savoir où saisir ces informations dans le client de votre choix, consultez sa documentation.

Une fois la connexion établie, les clients (S)FTP affichent généralement soit une vue à un panneau montrant le système de fichiers du serveur FTP distant, soit une vue à deux panneaux montrant le système de fichiers du serveur FTP distant d'un côté et le système de fichiers local de l'autre. Quelle que soit la présentation des informations, vous devez généralement glisser-déposer les fichiers de votre site local dans la vue FTP distante pour les placer au bon endroit. Comme indiqué plus haut, l'emplacement par défaut (au moins pour les fichiers statiques) est généralement `Public/htdocs`.

### Rsync

{{Glossary("Rsync")}} est un outil de synchronisation de fichiers entre un ordinateur local et un ordinateur distant. Il est considéré comme plus avancé que (S)FTP, car il s'utilise généralement en ligne de commande, même s'il existe des clients avec interface graphique, comme [Acrosync <sup>(angl.)</sup>](https://acrosync.com/mac.html) pour Windows et macOS et [Grsync <sup>(angl.)</sup>](https://www.opbyte.it/grsync/) pour toutes les plateformes.

Une commande de base se présente ainsi&nbsp;:

```bash
rsync [-options] -e "ssh [LES DÉTAILS SSH ICI]" SOURCE user@x.x.x.x:DESTINATION
```

- `-options` est un tiret suivi d'une ou plusieurs lettres, par exemple `-v` pour afficher des messages d'erreur détaillés et `-b` pour créer des sauvegardes. Vous trouvez la liste complète dans la [page de manuel de rsync <sup>(angl.)</sup>](https://linux.die.net/man/1/rsync) (recherchez «&nbsp;Résumé des options&nbsp;»).
- `-e "ssh [LES DÉTAILS SSH ICI]"` contient les informations SSH nécessaires pour établir une connexion sécurisée.
- `SOURCE` est le chemin vers le fichier ou le répertoire local à partir duquel vous souhaitez copier des fichiers.
- `user@` correspond aux identifiants de la personne sur le serveur distant vers lequel vous souhaitez copier des fichiers.
- `x.x.x.x` est l'adresse IP du serveur distant.
- `DESTINATION` est le chemin vers l'emplacement où vous souhaitez copier votre répertoire ou vos fichiers sur le serveur distant.

Votre hébergeur fournit ces informations.

Pour plus d'informations et d'autres exemples&nbsp;:

- Consultez [Comment utiliser Rsync pour copier et synchroniser des fichiers entre des serveurs <sup>(angl.)</sup>](https://www.atlantic.net/vps-hosting/how-to-use-rsync-copy-sync-files-servers/).
- Vous trouvez plus de détails sur les éléments nécessaires dans [Comment copier des fichiers avec Rsync sur SSH <sup>(angl.)</sup>](https://www.digitalocean.com/community/tutorials/how-to-copy-files-with-rsync-over-ssh).

## Utiliser un IDE web tel que CodePen

Il existe plusieurs applications web qui simulent un environnement de développement de site web, vous permettant d'écrire du HTML, du CSS et du JavaScript, qui sont ensuite affichés dans un panneau de rendu. De manière générale, ces outils sont faciles à utiliser, très utiles pour apprendre, pratiques pour partager du code (par exemple, si vous souhaitez montrer une technique ou demander de l'aide à des collègues dans un autre bureau), et gratuits (pour les fonctionnalités de base). Ils hébergent votre page rendue à une adresse web unique. Cependant, les fonctionnalités de base sont limitées, et ces applications ne fournissent généralement pas d'espace d'hébergement pour des ressources (comme des images).

Testez certains de ces exemples pour voir lequel vous convient le mieux&nbsp;:

- [Scrimba <sup>(angl.)</sup>](https://scrimba.com/new?via=mdn) <sup>[_Partenaire d'apprentissage MDN_](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations)</sup>
- [JSFiddle <sup>(angl.)</sup>](https://jsfiddle.net/)
- [JSBin <sup>(angl.)</sup>](https://jsbin.com/)
- [CodePen <sup>(angl.)</sup>](https://codepen.io/)

## Utiliser un outil de publication en ligne

Certains outils vous permettent de publier votre site web en ligne&nbsp;:

- [GitHub](https://github.com/) est un site de «&nbsp;codage social&nbsp;». Il vous permet de téléverser des dépôts de code pour les stocker dans le **système de contrôle de versions** [Git <sup>(angl.)</sup>](https://git-scm.com/). Vous pouvez ensuite collaborer à des projets de code, et le système est à code source ouvert par défaut, ce qui signifie que tout le monde dans le monde peut trouver votre code GitHub, l'utiliser, en tirer des enseignements et l'améliorer. GitHub possède une fonctionnalité très utile appelée [GitHub Pages <sup>(angl.)</sup>](https://pages.github.com/), qui vous permet d'exposer le code d'un site web en direct sur le Web.
- [Netlify](https://www.netlify.com/) est une plateforme d'hébergement web qui fournit l'hébergement de sites web statiques directement à partir de votre dépôt GitHub. Elle fournit également plusieurs fonctionnalités supplémentaires telles que l'aperçu du déploiement, les fonctions sans serveur et la gestion des formulaires.

Ces options sont généralement gratuites avec un ensemble de fonctionnalités limité.

## Quelle approche recommanderions-nous ?

Si vous débutez, nous recommandons GitHub Pages pour sa facilité d'utilisation.

1. Si vous n'avez pas déjà de compte, [inscrivez-vous sur GitHub <sup>(angl.)</sup>](https://github.com/).
2. Créez un dépôt pour stocker votre site en suivant les étapes de la page [Créer un dépôt pour votre site <sup>(angl.)</sup>](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#creating-a-repository-for-your-site).
3. Téléversez les fichiers de votre site dans votre nouveau dépôt à l'aide de l'interface de GitHub. Vous trouvez les instructions pour ce faire dans la page [Ajouter un fichier à un dépôt sur GitHub <sup>(angl.)</sup>](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository#adding-a-file-to-a-repository-on-github).
4. Configurez votre dépôt pour publier son contenu avec GitHub Pages. Pour ce faire, consultez les instructions de la page [Publier à partir d'une branche <sup>(angl.)</sup>](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-from-a-branch).
5. Après un court instant, vous devez voir un message indiquant «&nbsp;Votre site est en ligne à `https://username.github.io/repositoryname/`&nbsp;». Par exemple, si votre nom d'utilisateur·ice GitHub est `bobsmith` et que votre dépôt s'appelle `my-first-website`, le message indique «&nbsp;Votre site est en ligne à `https://bobsmith.github.io/my-first-website/`&nbsp;». Un bouton «&nbsp;Visiter le site&nbsp;» doit apparaître et vous pouvez cliquer dessus pour voir votre site.

> [!NOTE]
> Si vous avez votre propre domaine et souhaitez le faire pointer vers un site GitHub Pages, consultez la page [Configurer un domaine personnalisé pour votre site GitHub Pages <sup>(angl.)</sup>](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site) pour obtenir des indications.

## Lectures pour approfondir

- [Qu'est-ce qu'un serveur web](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Comprendre les noms de domaine](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [Déployer un site web <sup>(angl.)</sup>](https://www.codecademy.com/learn/deploy-a-website)&nbsp;: un bon tutoriel de Codecademy qui va un peu plus loin et qui montre quelques techniques supplémentaires.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}
