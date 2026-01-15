---
title: Publier votre site web
short-title: Publication
slug: Learn_web_development/Getting_started/Your_first_website/Publishing_your_website
original_slug: Learn/Getting_started_with_the_web/Publishing_your_website
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}

Une fois que vous avez terminé d'écrire le code et d'organiser les fichiers qui composent votre site web, il faut le mettre en ligne pour que tout le monde puisse le trouver. Cet article explique comment mettre votre site d'exemple en ligne très simplement.

> [!NOTE]
> Vous aurez besoin d'un site d'exemple disponible sur votre ordinateur pour suivre cet article. Il doit contenir au moins un fichier `index.html` valide. Si ce n'est pas déjà fait, nous vous conseillons d'en créer un en suivant les articles précédents de ce module, en commençant par [À quoi ressemblera le site web&nbsp;?](/fr/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like).

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Connaissance de base de votre système d'exploitation, des logiciels de base que vous utiliserez pour créer un site web, et des systèmes de fichiers.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Les outils et concepts de base liés à la publication d'un site web&nbsp;: hébergement, domaines, programmes FTP.</li>
          <li>Quelles alternatives d'hébergement existent, par exemple Google App Engine, GitHub et CodePen.</li>
          <li>Publier un site web avec GitHub Pages.</li>
          <li>L'hébergement, comment l'acheter et comment mettre un site en ligne.</li>
          <li>Comment enregistrer un nom de domaine.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Quelles sont les options ?

Publier un site web est un sujet complexe, car il existe de nombreuses façons de procéder. Cet article n'a pas pour but de documenter toutes les méthodes possibles. Il explique plutôt les avantages et les inconvénients de trois approches pratiques pour les débutant·e·s. Ensuite, il détaille une méthode qui peut fonctionner immédiatement pour de nombreux·ses lecteur·ice·s.

### Trouver un hébergement et un nom de domaine

Pour avoir plus de contrôle sur le contenu et l'apparence du site, la plupart des professionnel·le·s ou entreprises choisissent d'acheter un hébergement web et un nom de domaine&nbsp;:

- L'hébergement web est un espace de fichiers loué sur le [serveur web](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server) d'une société d'hébergement. Vous placez les fichiers de votre site web sur le serveur web. Le serveur web fournit le contenu du site aux visiteur·euse·s.
- Un [nom de domaine](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name) est l'adresse unique où les gens trouvent votre site web, comme `https://www.mozilla.org` ou `https://www.bbc.co.uk`. Vous pouvez louer votre nom de domaine pour autant d'années que vous le souhaitez auprès d'un **bureau d'enregistrement**.

Si vous obtenez l'hébergement _et_ le nom de domaine auprès de la même société, ils sont généralement configurés automatiquement pour fonctionner ensemble. Cependant, si vous les obtenez auprès de sociétés différentes, ou si vous souhaitez changer d'hébergeur, il faudra effectuer quelques réglages pour que le nom de domaine pointe vers le bon serveur. Cela permet aux gens de voir votre site lorsqu'ils saisissent cette adresse web. Cela se fait généralement en se connectant sur le site du bureau d'enregistrement et en configurant les [serveurs de noms <sup>(angl.)</sup>](https://kinsta.com/knowledgebase/what-is-a-nameserver/) fournis par votre hébergeur.

Les sociétés proposent différents moyens pour transférer les fichiers sur leurs serveurs web. Beaucoup offrent plusieurs options&nbsp;:

- Une interface de glisser-déposer (vous en verrez un exemple dans la section [Publier sur GitHub](#publier_sur_github) plus loin).
- Un programme {{Glossary("FTP", "Protocole de transfert de fichiers (FTP)")}}. Les programmes <abbr>FTP</abbr> varient beaucoup, mais en général, il faut se connecter au serveur web avec les identifiants fournis par l'hébergeur (nom d'utilisateur, mot de passe, nom d'hôte). Le programme affiche alors vos fichiers locaux et ceux du serveur dans deux fenêtres, et permet de transférer les fichiers dans les deux sens.
- Garder le code source du site dans un dépôt GitHub (voir plus bas) et donner accès à l'hébergeur pour qu'il puisse récupérer le code source, le construire si besoin, et le publier.
- Certaines sociétés fournissent des [outils en ligne de commande](/fr/docs/Learn_web_development/Getting_started/Environment_setup/Command_line) pour transférer vos fichiers.

#### Suggestions pour trouver hébergement et domaines

- MDN ne fait pas la promotion de sociétés commerciales d'hébergement ou de bureaux d'enregistrement particuliers. Pour en trouver, faites une recherche pour «&nbsp;hébergement web&nbsp;» et «&nbsp;noms de domaine&nbsp;». Tous les bureaux d'enregistrement proposent une fonctionnalité pour vérifier si le nom de domaine souhaité est disponible.
- Votre {{Glossary("ISP", "Fournisseur d'Accès Internet (FAI)")}} domestique ou professionnel propose peut-être un hébergement limité pour un petit site web. Les fonctionnalités seront limitées, mais cela peut être parfait pour vos premières expériences.
- Il existe aussi des services gratuits comme [Neocities](https://neocities.org/), [Google Sites](https://sites.google.com/) et [WordPress](https://wordpress.com/). Ces services sont limités, mais suffisants pour des expérimentations initiales.

### Utiliser un outil en ligne comme GitHub ou Google App Engine

Certains outils permettent de publier votre site web en ligne&nbsp;:

- [GitHub <sup>(angl.)</sup>](https://github.com/) est un site de «&nbsp;codage collaboratif&nbsp;». Il permet de téléverser des dépôts de code pour stockage dans le **système de gestion de versions** [Git <sup>(angl.)</sup>](https://git-scm.com/). Vous pouvez alors collaborer à des projets de code&nbsp;; le système est open source par défaut, ce qui signifie que n'importe qui dans le monde peut trouver votre code GitHub, l'utiliser, en tirer des leçons et l'améliorer. GitHub propose une fonctionnalité très utile appelée [Pages GitHub <sup>(angl.)</sup>](https://pages.github.com/), qui permet de présenter du code de site web en direct sur le web.
- [Google App Engine](https://cloud.google.com/appengine) est une plateforme puissante qui permet de créer et d'exécuter des applications sur l'infrastructure de Google — que vous ayez besoin de créer une application web multi-couches à partir de zéro ou d'héberger un site web statique. Voir [Comment héberger votre site Web sur Google App Engine&nbsp;?](/fr/docs/Learn_web_development/Howto/Tools_and_setup/How_do_you_host_your_website_on_Google_App_Engine) pour plus d'informations.

Ces options sont généralement gratuites, mais avec un nombre de fonctionnalités limité.

### Utiliser un IDE web tel que CodePen

Il existe plusieurs applications web qui simulent un environnement de développement de site web, vous permettant d'écrire du HTML, du CSS et du JavaScript, qui sont ensuite affichés dans un panneau de rendu. De manière générale, ces outils sont faciles à utiliser, très utiles pour apprendre, pratiques pour partager du code (par exemple, si vous souhaitez montrer une technique ou demander de l'aide à des collègues dans un autre bureau), et gratuits (pour les fonctionnalités de base). Ils hébergent votre page rendue à une adresse web unique. Cependant, les fonctionnalités de base sont limitées, et ces applications ne fournissent généralement pas d'espace d'hébergement pour des ressources (comme des images).

Testez certains de ces exemples pour voir lequel vous convient le mieux&nbsp;:

- [Scrimba](https://scrimba.com/new?via=mdn) <sup>[_Partenaire d'apprentissage MDN_](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations)</sup>
- [JSFiddle](https://jsfiddle.net/)
- [JSBin](https://jsbin.com/)
- [CodePen](https://codepen.io/)

## Publier sur GitHub

Voyons maintenant comment publier votre site sur les Pages GitHub.

1. Tout d'abord, [inscrivez-vous sur GitHub <sup>(angl.)</sup>](https://github.com/) et vérifiez votre adresse e-mail.
2. Ensuite, vous devez [créer un dépôt <sup>(angl.)</sup>](https://github.com/new) pour stocker vos fichiers. Sur cette page&nbsp;:
   1. Dans la case <i lang="en">Repository name</i>, saisissez <i lang="en">username</i>.github.io, où <i lang="en">username</i> est votre nom d'utilisateur. Par exemple, notre ami Bob Smith saisirait _bobsmith.github.io_.
   2. Cliquez sur le bouton <i lang="en">Create repository</i> (Créer un dépôt) en bas de la page.
3. Sur la page suivante, trouvez le lien <i lang="en">uploading an existing file</i> (téléverser un fichier existant) et cliquez dessus. Cela vous amènera à la page de téléversement de fichiers.
4. À ce stade, vous pouvez glisser-déposer les fichiers de votre système de fichiers local sur la page web pour les téléverser dans le dépôt GitHub. Pour ce faire&nbsp;:
   1. Ouvrez une fenêtre de l'explorateur de fichiers (ou Finder) sur votre ordinateur.
   2. Assurez-vous de voir à la fois l'explorateur de fichiers _et_ la fenêtre du navigateur web — placez-les côte à côte sur votre écran.
   3. Naviguez dans l'explorateur jusqu'au dossier contenant votre site d'exemple.
      > [!NOTE]
      > Assurez-vous que votre dossier contient un fichier `index.html`.
   4. Sélectionnez tous les fichiers de votre site d'exemple (par exemple avec le raccourci clavier <kbd>Ctrl</kbd> + <kbd>A</kbd>, ou <kbd>Cmd</kbd> + <kbd>A</kbd> sur macOS).
   5. Faites glisser les fichiers depuis l'explorateur vers la section «&nbsp;<i lang="en">Drag files here to add them to your repository</i>&nbsp;» (Glissez-déposez des fichiers ici pour les ajouter à votre dépôt) de la page GitHub.
   6. La bordure et le texte de la section changent pour indiquer qu'un dépôt est possible. Déposez les fichiers à ce moment-là.
   7. Cliquez sur le bouton <i lang="en">Commit changes</i> (Valider les modifications) en bas de la page.
5. Rendez-vous à l'adresse _username_.github.io pour voir votre site en ligne. Par exemple, pour le nom d'utilisateur _chrisdavidmills_, allez sur [_chrisdavidmills_.github.io](https://chrisdavidmills.github.io/).

   > [!NOTE]
   > Il peut s'écouler quelques minutes avant que votre site soit en ligne. S'il n'apparaît pas immédiatement, attendez quelques minutes puis réessayez.

Pour en savoir plus, consultez [Bien démarrer avec GitHub Pages](https://docs.github.com/fr/pages/getting-started-with-github-pages).

## Lectures pour approfondir

- [Qu'est-ce qu'un serveur web](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_web_server)
- [Comprendre les noms de domaine](/fr/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_domain_name)
- [Combien ça coûte de faire quelque chose sur le Web&nbsp;?](/fr/docs/Learn_web_development/Howto/Tools_and_setup/How_much_does_it_cost)
- [Deploy a Website](https://www.codecademy.com/learn/deploy-a-website)&nbsp;: un bon tutoriel de Codecademy qui va un peu plus loin et qui montre quelques techniques supplémentaires.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Web_standards", "Learn_web_development/Getting_started/Your_first_website")}}
