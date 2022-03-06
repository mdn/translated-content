---
title: De quels logiciels ai-je besoin pour construire un site web ?
slug: Learn/Common_questions/What_software_do_I_need
tags:
  - Beginner
  - Learn
  - NeedsActiveLearning
  - WebMechanics
translation_of: Learn/Common_questions/What_software_do_I_need
original_slug: Apprendre/Quels_logiciels_sont_nécessaires_pour_construire_un_site_web
---
Dans cet article, nous listons les logiciels nécessaires pour éditer, mettre en ligne ou consulter un site web.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Vous devriez déjà connaître
        <a href="/fr/Apprendre/page_vs_site_vs_serveur_vs_moteur_recherche"
          >la différence entre une page web, un serveur web et un moteur de
          recherche.</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs :</th>
      <td>
        Connaître les logiciels qui sont nécessaires pour créer, éditer, mettre
        en ligne ou consulter un site web.
      </td>
    </tr>
  </tbody>
</table>

La plupart des logiciels nécessaires au développement d'un site web peuvent être téléchargés gratuitement sur Internet. Quelques liens seront fournis au fur et à mesure de l'article. Vous aurez besoin d'outils pour :

1.  Créer et éditer des pages web
2.  Téléverser (_uploader_) vos fichiers vers votre serveur web
3.  Visualiser votre site web.

Tous les systèmes d'exploitation (ou presque) possèdent par défaut un éditeur de texte et un outil pour visualiser des sites web (qu'on appellera un navigateur web). Seul l'outil qui permet de transférer les fichiers vers votre serveur web pourrait manquer à l'appel.

## Pédagogie active

_Il n'y a, pour le moment, pas de matériau pour la pédagogie active. [Cependant, vous pouvez contribuer](/fr/docs/MDN/D%C3%A9buter_sur_MDN)._

## Aller plus loin

### Créer et éditer des pages web

Pour créer et éditer un site web, vous aurez besoin d'un éditeur de texte. Les éditeurs de texte permettent de créer et de modifier des fichiers dont le contenu est du texte, sans aucune mise en forme (d'autres formats comme **{{Glossary("RTF")}}** vous permettent d'ajouter une mise en forme sur un fichier (comme le gras ou le soulignement) mais ils ne sont pas utilisables pour écrire des pages web). Le choix d'un éditeur de texte est important car vous allez devoir l'utiliser de façon intensive lorsque vous allez construire votre site.

Tous les systèmes d'exploitations possèdent un éditeur de texte basique par défaut. Ces éditeurs sont plutôt simples à manipuler mais n'ont pas certaines fonctionnalités utiles au développement web. Si vous souhaitez choisir un autre éditeur que celui par défaut, il y en a une myriade qui sont disponibles, dont certains gratuits. Les éditeurs de texte tiers pourront inclure des fonctionnalités supplémentaires comme la coloration syntaxique, l'auto-complétion, le repli de sections, la recherche avancée, etc. Voici une très courte liste d'éditeurs disponibles :

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Système d'exploitation</th>
      <th scope="col">Éditeur natif par défaut</th>
      <th scope="col">Éditeur tiers</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Windows</td>
      <td>
        <ul>
          <li>
            <a
              href="https://fr.wikipedia.org/wiki/Bloc-notes_%28Windows%29"
              rel="external"
              >Bloc-notes</a
            >
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li><a href="http://notepad-plus-plus.org/fr/">Notepad++</a></li>
          <li><a href="https://www.visualstudio.com">Visual Studio Code</a></li>
          <li><a href="https://www.jetbrains.com/webstorm">Web Storm</a></li>
          <li><a href="http://brackets.io">Brackets</a></li>
          <li><a href="https://shiftedit.net">ShiftEdit</a></li>
          <li><a href="https://www.sublimetext.com">Sublime Text</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Mac OS</td>
      <td>
        <ul>
          <li>
            <a href="http://fr.wikipedia.org/wiki/TextEdit" rel="external"
              >TextEdit</a
            >
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li>
            <a href="http://www.barebones.com/products/textwrangler/"
              >TextWrangler</a
            >
          </li>
          <li><a href="https://www.visualstudio.com">Visual Studio Code</a></li>
          <li><a href="http://brackets.io">Brackets</a></li>
          <li><a href="https://shiftedit.net">ShiftEdit</a></li>
          <li><a href="https://www.sublimetext.com">Sublime Text</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Linux</td>
      <td>
        <ul>
          <li>
            <a href="http://fr.wikipedia.org/wiki/Vi" rel="external">Vi</a>
            (tout système UNIX)
          </li>
          <li>
            <a href="http://fr.wikipedia.org/wiki/Gedit" rel="external"
              >GEdit</a
            >
            (Gnome)
          </li>
          <li>
            <a
              href="https://fr.wikipedia.org/wiki/Kate_%28logiciel%29"
              rel="external"
              >Kate</a
            >
            (KDE)
          </li>
          <li>
            <a href="https://en.wikipedia.org/wiki/Leafpad">LeafPad</a> (Xfce)
          </li>
        </ul>
      </td>
      <td>
        <ul>
          <li><a href="http://www.gnu.org/software/emacs/">Emacs</a></li>
          <li><a href="http://www.vim.org/" rel="external">Vim</a></li>
          <li><a href="https://www.visualstudio.com">Visual Studio Code</a></li>
          <li><a href="http://brackets.io">Brackets</a></li>
          <li><a href="https://shiftedit.net">ShiftEdit</a></li>
          <li><a href="https://www.sublimetext.com">Sublime Text</a></li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Chrome OS</td>
      <td></td>
      <td>
        <ul>
          <li><a href="https://shiftedit.net">ShiftEdit</a></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Voici une capture d'écran qui illustre l'allure d'un éditeur de texte avancé (ici Notepad++) :

![Screenshot of Notepad++.](NotepadPlusPlus.png)

### Transférer des fichiers vers un serveur web

Lorsque votre site web est peaufiné, testé et est prêt à être publié, vous devrez téléverser (_uploader_) vos fichiers vers votre serveur web (pour l'achat de l'espace serveur, voir l'article [combien ça coûte de publier quelque chose sur le Web&nbsp;?](/fr/docs/Learn/How_much_does_it_cost)). Une fois que vous disposez d'un serveur via votre fournisseur, celui-ci vous enverra les informations d'accès FTP (pour _File Transfer Protocol_ ou protocole de transfert de fichiers), souvent en donnant une URL SFTP, un nom d'utilisateur, un mot de passe et d'autres informations nécessaires à la connexion au serveur. Sachez toutefois que le FTP est une technique vieillissante et que de nouveaux systèmes commencent à devenir populaires, comme [RSync](https://en.wikipedia.org/wiki/Rsync) et [Git/Github](https://help.github.com/articles/using-a-custom-domain-with-github-pages).

> **Note :** FTP est par nature non sécurisé. Vous devez toujours vous assurer que votre fournisseur d'hébergement vous autorise à vous connecter de manière sécurisée, c'est-à-dire via SFTP (_Secure_ FTP) ou via RSync avec SSH.

Le téléversement des fichiers vers un serveur web est une étape importante dans la publication d'un site web et nous la décrivons beaucoup plus en détails [dans un article à part](/fr/docs/Learn/Upload_files_to_a_web_server). Voyons tout de même une liste de clients FTP basiques :

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Système d'exploitation</th>
      <th colspan="2" rowspan="1" scope="col" style="text-align: center">
        Logiciel client FTP
      </th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Windows</td>
      <td><a href="http://winscp.net" rel="external">WinSCP</a></td>
      <td colspan="1" rowspan="3">
        <a href="https://filezilla-project.org/">FileZilla</a> (tout système
        d'exploitation)
      </td>
    </tr>
    <tr>
      <td>Linux</td>
      <td>
        <a href="https://live.gnome.org/Nautilus" rel="external">Nautilus</a>
        (Gnome)<br /><a href="http://www.konqueror.org/">Konqueror</a> (KDE)
      </td>
    </tr>
    <tr>
      <td>Mac OS</td>
      <td><a href="http://cyberduck.de/">Cyberduck</a></td>
    </tr>
  </tbody>
</table>

### Visualiser des sites web

Comme vous le savez sans doute déjà, vous avez besoin d'un navigateur web pour visualiser des pages web. De [nombreux](http://en.wikipedia.org/wiki/List_of_web_browsers) navigateurs existent que vous pouvez utiliser de façon personnelle. Toutefois, lorsqu'on développe un site web, il faut au moins le tester sur les navigateurs les plus utilisés afin de s'assurer que le site fonctionne pour la plupart des personnes :

- [Mozilla Firefox](https://www.mozilla.org/firefox/new/)
- [Google Chrome](https://www.google.fr/chrome/browser/)
- [Microsoft Internet Explorer](http://windows.microsoft.com/fr-fr/internet-explorer/download-ie)
- [Apple Safari](http://www.apple.com/safari/)

Si votre site s'adresse à un public particulier (par exemple un pays spécifique ou une plate-forme donnée), vous pourrez avoir à tester votre site sur des navigateurs supplémentaires comme [Opera](http://www.opera.com/), [Dolphin](http://dolphin.com/) ou [UC Browser](http://www.ucweb.com/ucbrowser/).

Cela se complique quand on réalise que certains navigateurs ne fonctionnent que sur certains systèmes d'exploitation. Apple Safari ne fonctionne que sur iOS et Mac OS, Internet Explorer ne fonctionne que sur Windows, etc. Face à ce problème, mieux vaut tirer parti de services comme [Browsershots](http://browsershots.org/) ou [Browserstack](http://www.browserstack.com/). Browsershots fournit des captures d'écran de votre site, tel qu'il est rendu dans les différents navigateurs. Browserstack vous permet de complètement contrôler des machines virtuelles afin que vous puissiez tester votre site sur les environnements les plus fréquents. Sinon, vous pouvez mettre en place votre propre machine virtuelle mais cela demandera quelques connaissances (si vous choisissez cette option, Microsoft met à disposition, sur [modern.ie](https://modern.ie), une machine virtuelle prête à être utilisée).

Dans tous les cas, vous devrez tester votre site sur de vrais appareils, notamment pour les appareils mobiles. La simulation mobile en est encore à ses débuts et est moins stable que la simulation d'ordinateur fixes. Bien entendu, acquérir des appareils mobiles représente un certain budget et nous vous conseillons de consulter l'initiative [Open Device Lab](http://opendevicelab.com/). Vous pouvez également partager les appareils à plusieurs si vous souhaitez tester sur un maximum de plates-formes sans trop dépenser.

## Prochaines étapes

- Certains de ces logiciels sont libres et/ou gratuits, d'autres ne le sont pas. [En savoir plus sur le coût d'un site web.](/fr/docs/Learn/How_much_does_it_cost)
- Si vous souhaitez en apprendre plus sur les éditeurs de texte et choisir celui qui sera le plus adapté, consultez notre article sur [comment choisir, installer et paramétrer son éditeur de texte](/fr/Apprendre/Choisir_installer_paramétrer_un_éditeur_de_texte).
- Si vous vous demandez comment publier votre site web sur le Web, jetez un coup d'œil à [« Comment transférer des fichiers vers un serveur web »](/fr/docs/Apprendre/Upload_files_to_a_web_server).
