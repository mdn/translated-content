---
title: 'Publier sur le Web : combien ça coûte ?'
slug: Learn/Common_questions/How_much_does_it_cost
tags:
  - Beginner
  - Learn
  - WebMechanics
translation_of: Learn/Common_questions/How_much_does_it_cost
original_slug: Apprendre/Publier_sur_le_Web_combien_ça_coûte
---
Se lancer sur le Web n'est pas aussi bon marché qu'il y paraît à première vue. Dans cet article, nous verrons les différentes dépenses et leur raison d'être.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Vous devez au préalable connaître<a
          href="/fr/Apprendre/Quels_logiciels_sont_nécessaires_pour_construire_un_site_web"
        >
          les logiciels nécessaires au développement web</a
        >, les différences entre
        <a href="/fr/Apprendre/page_vs_site_vs_serveur_vs_moteur_recherche"
          >une page web, un site web, etc</a
        >. et savoir
        <a href="/fr/Apprendre/Comprendre_noms_de_domaine"
          >ce qu'est un nom de domaine</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>
        Revoir le processus de création complet d'un site web et analyser le
        coût éventeul de chaque étape.
      </td>
    </tr>
  </tbody>
</table>

Lorsqu'on lance un site web, on peut très bien ne rien payer ou, au contraire, dépenser de façon astronomique. Dans cet article, nous verrons les coûts associés à chaque étape et ce à quoi s'attendre en fonction de ce qu'on paye (ou qu'on ne paye pas).

## Aller plus loin

### Développer son site soi-même

#### Logiciels

##### Éditeurs de texte

Vous disposez probablement d'un éditeur de texte grâce à votre système d'exploitation (Notepad sur Windows, gedit sur Linux, TextEdit sur Mac). Mais, comme vous le verrez bientôt, un éditeur de texte adapté au développement web (avec une coloration syntaxique et d'autres fonctionnalités) vous rendra un meilleur service.

De nombreux éditeurs sont gratuits : [Bluefish](http://bluefish.openoffice.nl/), [TextWrangler](http://www.barebones.com/products/textwrangler/), [Eclipse](http://eclipse.org/) et [Netbeans](https://netbeans.org/). Certains comme [Sublime Text](http://www.sublimetext.com/) peuvent être utilisés librement mais vous serez invité à payer si vous les utilisez continuellement ou dans un cadre professionnel. D'autres comme [PhpStorm](https://www.jetbrains.com/phpstorm/) peuvent coûter entre quelques dizaines et plusieurs centaines d'euros en fonction de l'abonnement choisi. Enfin, certains comme [Microsoft Visual Studio](http://www.visualstudio.com/) peuvent coûter plusieurs centaines voire plusieurs milliers d'euros selon l'utilisation qui en est faite.

Pour commencer, n'hésitez pas à essayer plusieurs éditeurs (même les éditeurs payants disposent souvent d'une version d'essai) pour savoir lequel vous convient le mieux. Si vous prévoyez de n'écrire que du {{Glossary("HTML")}}, {{Glossary("CSS")}} et  {{Glossary("Javascript")}} simples, vous pouvez utiliser un éditeur simple.

Le prix d'un éditeur ne reflète pas toujours son utilité ou sa qualité. À vous de les essayer et de forger votre avis. Par exemple, Sublime Text n'est pas très cher mais peut être agrémenté d'extensions (_plugins_) gratuites qui augmentent sensiblement les fonctionnalités qu'il offre.

##### Éditeurs graphiques

Votre système inclue probablement déjà un éditeur ou une visionneuse d'images (Paint pour Windows, Eye of Gnome pour Ubuntu, Preview sur Mac). Mais ces programmes sont limités et vous pourrez avoir besoin de fonctionnalités supplémentaires.

Les éditeurs graphiques peuvent être gratuits ([GIMP](http://www.gimp.org/)), payants ([PaintShop Pro](http://www.paintshoppro.com/), moins de 100 € ) voire assez chers ([Adobe Photoshop](https://www.adobe.com/products/photoshop.html) pour plusieurs centaines d'euros).

Vous pouvez utiliser n'importe lequel de ces éditeurs. Leurs fonctionnalités sont tr_s proches (certains de ces éditeurs sont si complets que vous n'utiliserez jamais toutes leurs fonctionnalités). Cependant, si vous avez besoin d'échanger vos éléments avec d'autres concepteurs, voyez avec eux les outils qu'ils utilisent. En effet les éditeurs peuvent permettre d'exporter vers des formats de fichiers standards mais d'autres possèdent leurs propres formats spécifiques.

##### Éditeurs multimédia

Si vous souhaitez intégrer des éléments audio ou vidéo dans votre site, vous pourrez utiliser des services en ligne (par exemple YouTube, Vimeo ou Dailymotion) pour intégrer les vidéos depuis ces sites ou vous pourrez créer ves propres vidéos (voir ci-après quant à la bande passante).

Pour éditer des fichiers audio, il existe des logiciels gratuits ([Audacity](http://audacity.sourceforge.net/?lang=en), [Wavosaur](http://www.wavosaur.com/)) ou d'autres qui coûtent quelques centaines d'euros ([Sony Sound Forge](http://www.sonycreativesoftware.com/soundforge), [Adobe Audition](http://www.adobe.com/products/audition.html)). Les logiciels d'édition vidéo peuvent être gratuits ([PiTiVi](http://www.pitivi.org/), [OpenShot](http://www.openshot.org/) pour Linux, [iMovie](https://www.apple.com/mac/imovie/) pour Mac), coûter moins d'une centaine d'euros ([Adobe Premiere Elements](https://www.adobe.com/us/products/premiere-elements.html)) ou coûter plusieurs centaines d'euros ([Adobe Premiere Pro](https://www.adobe.com/products/premiere.html), [Avid Media Composer](http://www.avid.com/US/products/family/Media-Composer), [Final Cut Pro](https://www.apple.com/final-cut-pro/)). Le logiciel qui est fourni avec votre caméra peut également parfaitement subvenir à vos besoins.

##### Outils de publication : client {{Glossary("FTP")}}

Vous aurez également besoin d'un logiciel pour transférer les fichiers depuis votre disquer dur vers un serveur web distant. Pour cela, vous utiliserez un client FTP.

Chaque système d'exploitation inclut un client FTP avec le gestionnaire de fichiers. Que ce soit Windows Explorer, Nautilus (un gestionnaire de fichiers pour Linux) ou Finder sur Mac, tous incluent cette fonctionnalité. Cependant, certains choisissent souvent d'utiliser un client FTP dédié à cet usage afin d'enregistrer les mots de passe et d'afficher les vues simultanées entre les emplacements locaux et les répertoires distants.

Si vous souhaitez installer un client FTP, il existe plusieurs options correctes et gratuites : [FileZilla](https://filezilla-project.org/) pour toutes les plateformes, [WinSCP](http://winscp.net/) pour Windows, [Cyberduck](https://cyberduck.io/) pour Mac et Windows [et d'autres encore](https://en.wikipedia.org/wiki/List_of_FTP_server_software).

> **Note :** Il existe d'autres méthodes pour publier du contenu sur des serveurs distants : rsync et git par exemple. Mais ces méthodes ne sont pas aussi simples à appliquer que FTP et nous ne les aborderons pas dans cette section.

#### Navigateurs

Si vous lisez cet article, il y a de grandes chances que vous ayez un navigateur web. Sinon, vous pouvez [télécharger Firefox](https://www.mozilla.org/firefox/all/) ou [télécharger Google Chrome](https://www.google.com/chrome/browser/).

#### Accès au Web

##### Ordinateur / Modem

Pour éditer/publier un site web, vous aurez besoin d'un ordinateur. Le prix d'un ordinateur peut varier énormément en fonction de votre budget et de l'endroit où vous vivez. _A minima_ vous aurez besoin d'un ordinateur qui puisse lancer un éditeur et un navigateur, il est donc possible de commencer le développement web avec un ordinateur d'entrée de gamme.

Bien sûr, vous aurez besoin d'un ordinateur plus performants si vous voulez produire des concepts plus lourds, retoucher des photos ou produire des fichiers audio et vidéo.

Vous aurez besoin de transférer votre contenu vers un serveur distant. Pour cela, vous aurez besoin d'un modem et d'une accès Internet. Cela revient généralement à plusieurs euros par mois, que vous payez à un fournisseur d'accès Internet.

##### Accès Internet

Assurez-vous d'avoir suffisamment de bande passante :

- Un accès bas-débit devrait suffire pour un site web « simple » (des images de taille raisonnable, du texte, un peu de CSS et de JavaScript).
- Si, en revanche, vous souhaitez maintenir un site plus volumineux avec des centaines de fichiers voire servir des fichiers audio/vidéo depuis votre propre serveur web, vous aurez besoin d'un accès ADSL voire d'un accès à la fibre. Le prix et la disponibilité d'un tel accès peuvent varier selon votre situation géographique et selon que vous êtes un professionnel ou un particulier.

#### Hébergement

##### Comprendre ce qu'est la « bande passante »

Le tarif d'un hébergeur variera en fonction de la bande passante consommée par votre site web. Celle-ci dépend du nombre de visiteurs (humains ou robots) sur une période donnée et de l'espace occupé par votre contenu (c'est pour cette raison que la plupart des gens stockent leurs vidéos sur Youtube, Dailymotion et Vimeo). Par exemple, votre fournisseur peut avoir une formule qui permet d'avoir jusqu'à plusieurs milliers de visiteurs par jours pour une bande passante raisonnable (cette définition de « raisonnable » peut varier d'un fournisseur à l'autre). Grosso modo, un hébergement personnalisé moyen et qui vous permet de servir suffisamment de visiteurs coûte entre 10 et 15 euros par mois.

> **Note :** Un débit « illimité » n'existe pas en réalité. Si vous consommez beaucoup de bande passante, attendez-vous à devoir payer en conséquence.

##### Nom de domaine

Vous pouvez acheter un nom de domaine chez un fournisseur de nom de domaine (ou bureau d'enregistrement). Votre hébergeur peut aussi être un bureau d'enregistrement ([1&1](https://www.1and1.com/) et [Gandi](https://www.gandi.net/?lang=en) sont par exemple des hébergeurs et des bureaux d'enregistrement). Un nom de domaine coûte, en général, entre 5 et 15 € par an. Le coût peut varier en fonction :

- Des obligations locales (certains noms de domaines locaux sont plus chers car en fonction du pays, le prix fixé est différent)
- Des services associés au nom de domaine : certains bureaux d'enregistrement fournissent par exemple une protection contre le spam en masquant votre adresse physique et votre adresse électronique derrière leur adresse.

##### Hébergement « maison » et hébergement « packagé »

Lorsque vous souhaitez publier un site, vous pouvez tout faire vous-même : mettre en place une base de données si nécessaire, installer un système de gestion de contenu ({{Glossary("CMS")}}) (comme [Wordpress](http://wordpress.org/), [Dotclear](http://dotclear.org/), [spip](http://www.spip.net/en_rubrique25.html), etc.), transférer vos modèles de fichiers ou utiliser vos propres modèles.

Vous pouvez également utiliser un environnement pré-paramétré par votre hébergeur ou souscrire à un service d'hébergement avec des CMS pré-paramétrés ([Wordpress](http://wordpress.com/), [Tumblr](https://www.tumblr.com/), [Blogger](https://www.blogger.com/)). Avec cette dernière option, vous pourrez avoir un hébergement gratuit mais vous aurez beaucoup moins de contrôle sur la mise en forme et la mise en place du site web.

##### Hébergement gratuit et hébergement payant

Si des options gratuites existent, pourquoi donc faudrait-il payer pour un hébergement ?

1.  Un hébergement payant vous permet d'avoir plus de libertés : votre site vous appartient et vous pouvez le migrer d'un hébergeur à un autre lorsque c'est nécessaire.
2.  Un hébergement gratuit est souvent accompagné de publicité et vous contrôlez moins votre contenu.

Certains choisissent une approche hybride en hébergeant leur site principal avec un nom de domaine et un hébergeur payants et utilisent un service gratuit pour héberger des contenus moins stratégiques.

### Agences web professionnelles et hébergement

Si vous souhaitez mettre en place un site professionnel, vous contacterez probablement une agence web qui le développera pour vous.

Le coût d'un tel projet varie selon plusieurs facteurs :

- Est-ce que le site web ne contient que quelques pages de texte ou est-ce un site complexe avec plusieurs centaines de pages ?
- Le site est-il mis à jour régulièrement ou s'agit-il d'un site web statique ?
- Est-ce que le site web doit être connecté au service informatique de votre entreprise pour récolter du contenu (par exemple des données internes) ?
- Souhaitez-vous que votre site brille de mille feux avec les dernières mises en forme à la mode ?
- Est-ce que l'agence web doit détecter et résoudre des problèmes de scénarios et d'ergonomie complexes (en organisant par exemples des tests utilisateurs ou du _A/B testing_ afin de déterminer une meilleure solution) ?

De plus, en ce qui concerne l'hébergement :

- Faut-il des serveurs redondants au cas où un serveur tombe en panne ?
- Est-ce qu'une fiabilité de 95% est suffisante ou faut-il un service qui fonctionne 24H/24, 7J/7 ?
- Un serveur partagé est-il suffisant ou faut-il préférer un machine dédiée avec de hautes performances ?

Selon les réponses à ces questions, votre site peut coûter entre quelques milliers d'euros et plusieurs centaines de milliers d'euros.

## Prochaines étapes

Maintenant que la question du coût est résolue, il est temps de commencer à concevoir ce site web et de [préparer un environnement de travail](/fr/docs/Learn/Set_up_a_basic_working_environment).

- Vous pouvez lire [cet article sur comment choisir et installer un éditeur de texte](/fr/Apprendre/Choisir_installer_paramétrer_un_éditeur_de_texte).
- Si vous souhaitez en savoir plus sur les aspects de conception, vous pouvez [décortiquer l'anatomie d'une page web](/fr/Apprendre/Concevoir_page_web).
