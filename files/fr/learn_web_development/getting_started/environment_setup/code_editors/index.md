---
title: Éditeurs de code
slug: Learn_web_development/Getting_started/Environment_setup/Code_editors
l10n:
  sourceCommit: 62ab95d20f246369cfab654c5a7a8727deb21ea6
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}

Précédemment, nous vous avons demandé d'installer un éditeur de code, car vous en aurez besoin pour suivre ce parcours. Dans cet article, nous examinons les éditeurs de code plus en détail, afin de vous donner une idée de ce qu'ils peuvent vous apporter.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Connaissance de base de votre système d'exploitation.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Quels éditeurs de code sont disponibles et adaptés à vos besoins.</li>
          <li>Ce qu'un éditeur de code basique peut faire.</li>
          <li>Ce que les extensions d'éditeur de code peuvent faire et comment en installer une.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Quels éditeurs de code sont disponibles ?

Avant de commencer à coder, vous avez peut-être déjà utilisé un traitement de texte comme Microsoft Word. Vous vous demandez peut-être si vous pouvez travailler avec du code dans ces mêmes programmes. Malheureusement, la réponse est «&nbsp;pas vraiment&nbsp;»&nbsp;:

- Les programmes comme Microsoft Word sont des éditeurs de **fichiers binaires**&nbsp;: leurs fichiers contiennent un format non textuel, lisible uniquement par ces programmes. Le code source d'un site web, lui, est stocké en texte brut.
- Word _peut_ ouvrir et éditer des fichiers texte, mais il ne les gère pas très bien. Il n'est pas conçu pour travailler avec du code — il sert à rédiger des documents comme des lettres ou des rapports. Il vous faut un programme conçu pour gérer et produire du texte brut, et travailler avec du code.

Vous avez probablement déjà un éditeur de texte sur votre ordinateur. Par défaut, Windows inclut le [Bloc-notes](<https://fr.wikipedia.org/wiki/Bloc-notes_(Windows)>) et macOS propose [TextEdit](https://fr.wikipedia.org/wiki/TextEdit). Les distributions Linux varient&nbsp;: Ubuntu 22.04 LTS inclut [GNOME Text Editor <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/GNOME_Text_Editor) par défaut. Les éditeurs de texte par défaut peuvent dépanner, mais leurs fonctionnalités sont limitées.

Il est préférable d'utiliser un éditeur de code complet comme [Visual Studio Code](https://code.visualstudio.com/) (multiplateforme, gratuit), [Sublime Text](https://www.sublimetext.com/) (multiplateforme, payant), ou [Notepad++](https://notepad-plus-plus.org/) (Windows, gratuit).

Nous recommandons Visual Studio Code (VS Code), car c'est l'éditeur que nous utilisons principalement. Si vous ne l'avez pas encore (ou un autre éditeur de code), vous devriez [l'installer avant de continuer <sup>(angl.)</sup>](https://code.visualstudio.com/).

> [!NOTE]
> Les environnements de développement intégrés (EDI) comme [NetBeans <sup>(angl.)</sup>](https://netbeans.apache.org/front/main/index.html) (multiplateforme, gratuit) et [WebStorm](https://www.jetbrains.com/fr-fr/webstorm/) (multiplateforme, payant) offrent plus de fonctionnalités que les simples éditeurs de code, mais sont souvent plus complexes que nécessaire à ce stade de votre apprentissage.

## Fonctionnalités de base d'un éditeur de code

Dans cette section, nous allons voir quelques-unes des fonctionnalités les plus importantes que vous trouverez dans les éditeurs de code, et comment elles peuvent vous aider dans votre travail.

> [!NOTE]
> Les sections ci-dessous ne font qu'effleurer ce qu'un éditeur de code peut faire. Pour une liste complète, consultez la [documentation de Visual Studio Code <sup>(angl.)</sup>](https://code.visualstudio.com/docs) (ou cherchez la documentation de votre éditeur si vous en utilisez un autre).

> [!NOTE]
> Si vous n'utilisez que le clavier, sachez que VS Code propose de nombreux raccourcis. Voir la [référence des raccourcis clavier par défaut de VS Code <sup>(angl.)</sup>](https://code.visualstudio.com/docs/reference/default-keybindings).

### Ouvrir et éditer des fichiers

Cela peut sembler évident, mais installer un éditeur de code est utile car il vous donne une application unique pour ouvrir tous les fichiers de code dont vous aurez besoin. Rien de plus agaçant que de double-cliquer sur un fichier et de le voir s'ouvrir dans une application inadaptée, ou que le système d'exploitation ne le reconnaisse pas.

Cela devrait se configurer automatiquement lors de l'installation de VS Code, mais si vous avez encore des soucis avec certains types de fichiers, vous pouvez les associer manuellement à l'application. La méthode varie selon le système d'exploitation, donc cherchez «&nbsp;choisir l'application qui ouvre un type de fichier &lt;nom-et-version-OS&gt;&nbsp;» — par exemple, «&nbsp;choisir l'application qui ouvre un type de fichier windows 11&nbsp;» si vous êtes sous Windows 11.

Vous trouverez plus d'informations sur l'ouverture et l'édition de fichiers et dossiers dans l'article suivant.

### Coloration syntaxique

Les éditeurs de code comme VS Code proposent la coloration syntaxique — c'est-à-dire que les éléments du code sont affichés en différentes couleurs selon leur rôle. Cela rend le code bien plus lisible que s'il était tout monochrome. Prenons cet exemple JavaScript&nbsp;:

```js
function creerSalutation(nom) {
  const salutations = `Bonjour, ${nom}!`;
  return salutations;
}
```

Vous n'avez pas besoin de comprendre ce que fait ce code pour l'instant, mais vous voyez déjà à quoi ressemble la coloration syntaxique. Oui, MDN propose aussi la coloration dans ses blocs de code&nbsp;!

Essayez cet exercice dans VS Code&nbsp;:

1. Copiez l'exemple ci-dessus (les blocs de code MDN ont une icône de copie en haut à droite).
2. Ouvrez VS Code et créez un nouveau fichier via _Fichier_ > _Nouveau fichier..._
3. Dans le nouveau fichier, cliquez sur le texte _Sélectionner une langue_, puis choisissez _JavaScript_ dans la liste déroulante.
4. Collez le code pour voir la coloration syntaxique JavaScript de VS Code.

VS Code propose d'autres fonctionnalités syntaxiques&nbsp;:

- Vous verrez une fine ligne verticale reliant le mot-clé `function` à l'accolade fermante (`}`). Ces lignes marquent les niveaux d'indentation, ce qui aide à repérer où commencent et finissent les blocs.
- Essayez aussi de placer le curseur sur une accolade ouvrante ou fermante (`{` ou `}`)&nbsp;: les deux seront surlignées. Cela aide à repérer les blocs, surtout dans des structures imbriquées. Ce surlignage fonctionne aussi avec les parenthèses (`(` et `)`) et crochets (`[` et `]`).

### Saisie semi-automatique/suggestion de code

Quand vous tapez du code dans un éditeur, il peut souvent suggérer la suite à écrire, et compléter certains modèles (c'est-à-dire du code standard qui ne change pas).

Testez dans VS Code&nbsp;:

1. Revenez au fichier JavaScript créé précédemment.
2. Allez en bas du fichier et appuyez sur <kbd>Entrée</kbd>/<kbd>Retour</kbd> plusieurs fois pour être sur une nouvelle ligne.
3. Commencez à taper `function` — une liste d'options devrait apparaître.
4. Sélectionnez l'option _function_ avec _Function Statement_ à droite. Cela insérera&nbsp;:

   ```js-nolint
   function name(params) {

   }
   ```

5. Cliquez à l'intérieur de la fonction, sur la ligne vide. Tapez `document` et sélectionnez la première suggestion. Cela fait référence à l'objet {{domxref("Document")}} (pas d'inquiétude si ce n'est pas clair pour l'instant).
6. Après `document`, tapez un point (`.`) — une nouvelle liste d'options apparaît, avec toutes les propriétés et méthodes de l'objet `document`.

C'est suffisant pour l'instant. Passons à la suite.

### Aide au débogage

Les éditeurs de code ne corrigent pas tous vos problèmes, mais ils peuvent vous aider à repérer les fautes de frappe et erreurs simples. Voyons quelques exemples.

1. Revenez à votre fichier JavaScript et supprimez tout le code. Remplacez-le par&nbsp;:

   ```js-nolint example-bad
   function creerSalutation(nom) {
     const salutation = `Bonjour, ${Nom}!`;
     return salutation;
   }

   const bonjourChris = creerSalutation("Chris);

   console.log(bonjourChris;
   ```

2. La petite croix à droite du bloc indique un mauvais exemple (et c'est justifié)&nbsp;: il y a trois erreurs dans ce code&nbsp;! Regardez comment VS Code les met en évidence, puis corrigez-les avec nous.
3. Première erreur&nbsp;: on utilise `nom` à la première ligne, mais `Nom` à la seconde pour la même variable. JavaScript est sensible à la casse, donc il les considère comme différentes. VS Code colore `nom` en gris foncé (valeur déclarée mais jamais utilisée, souvent signe d'une faute de frappe) et met trois points sous `Nom` (suggestion de correction, ici «&nbsp;vouliez-vous écrire `nom`&nbsp;?&nbsp;»). Corrigez en remplaçant `Nom` par `nom`.
   > [!NOTE]
   > Survolez les surlignages pour plus d'infos.
4. Deuxième erreur, ligne 6&nbsp;: on écrit `"Chris`. En JavaScript, une chaîne de caractères (**string**) doit être entourée de deux guillemets, or il en manque un. VS Code souligne l'erreur d'une vague rouge, comme pour les fautes d'orthographe dans Word. Corrigez en mettant `"Chris"` à la place de `"Chris`.
5. Dernière erreur, une vague rouge reste à la fin, même après correction précédente. C'est parce qu'une parenthèse ouvrante doit toujours être fermée. Corrigez `(helloChris` en `(helloChris)`.

### Recherche et remplacement

Tout éditeur de code digne de ce nom propose une fonction de recherche/remplacement puissante. Pratique si vous cherchez une fonction ou si vous voulez renommer une variable partout.

Le concept est familier si vous avez déjà utilisé un ordinateur, mais voyons-le rapidement&nbsp;:

1. Revenez à votre fichier JavaScript et ouvrez le panneau de recherche via _Édition_ > _Rechercher_.
2. Tapez `creerSalutation` dans la zone _Rechercher_ — les deux occurrences sont surlignées, et vous pouvez naviguer entre elles avec les flèches. L'occurrence active est plus lumineuse.
3. Passez en mode remplacement via _Édition_ > _Remplacer_ ou en cliquant sur la flèche à gauche de la zone _Rechercher_.
4. Tapez `direBonjour` dans la zone _Remplacer_.
5. Remplacez toutes les occurrences de `creerSalutation` par `direBonjour` avec les boutons à droite. Le bouton de gauche passe à l'occurrence suivante et la remplace, celui de droite remplace tout d'un coup.

VS Code propose de nombreuses options avancées — voir [Rechercher et remplacer <sup>(angl.)</sup>](https://code.visualstudio.com/docs/editing/codebasics#_find-and-replace).

## Améliorer votre éditeur avec des extensions

La plupart des éditeurs de code disposent d'un système d'extensions ou de plugins pour ajouter des fonctionnalités non incluses par défaut. Elles peuvent&nbsp;:

- Activer la complétion, le linting ou le débogage pour des langages non pris en charge, ou ajouter des fonctions supplémentaires.
- Permettre d'utiliser d'autres outils directement dans l'éditeur, comme le contrôle de version ou les serveurs de test locaux.
- Ajouter des thèmes ou schémas de couleurs pour l'interface ou la coloration du code.
- Suggérer des extraits de code pour répondre à des besoins. Ils peuvent être générés à partir de modèles statiques ou via des outils d'IA. L'utilisation de l'IA pour générer du code présente les mêmes avantages et limites que pour la recherche (voir [Rechercher des informations > Utiliser l'IA](/fr/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#utiliser_lia)).

### Explorer les extensions VS Code

Les extensions VS Code se gèrent via le panneau Extensions, accessible par le menu _Affichage_ > _Extensions_. Essayons-le maintenant&nbsp;:

1. Ouvrez le panneau Extensions.
2. Dans la zone _Rechercher..._, tapez «&nbsp;JavaScript&nbsp;» pour voir les extensions disponibles. Cliquez sur quelques résultats pour voir ce qu'elles proposent. N'en installez aucune pour l'instant.
3. Installons plutôt une extension simple et utile pour tout fichier de code. Tapez «&nbsp;Prettier&nbsp;» dans la zone de recherche et cliquez sur _Prettier - code formatter_. Une fois l'extension [Prettier](https://prettier.io/) installée, elle peut formater votre code à chaque enregistrement, le rendant plus lisible.
4. Cliquez sur _Installer_ dans l'onglet Extension. Fermez l'onglet une fois l'installation terminée.
5. Pour activer Prettier, modifiez quelques réglages. Ouvrez les paramètres de VS Code (_Code_ > _Paramètres..._ > _Paramètres_ sur macOS, _Fichier_ > _Préférences_ > _Paramètres_ sur Windows).
6. Dans la zone _Rechercher dans les paramètres_, tapez «&nbsp;formatter&nbsp;» pour filtrer la liste.
7. Trouvez l'option _Editor: Default Formatter_ et sélectionnez _Prettier - Code formatter_ dans le menu déroulant.
8. Trouvez l'option _Editor: Format On Save_ et activez-la en cochant la case.
9. Fermez l'onglet Paramètres.

C'est tout pour la configuration, voyons Prettier en action&nbsp;:

1. Revenez à l'onglet de votre fichier JavaScript et enregistrez-le (_Fichier_ > _Enregistrer_). Le fichier doit être enregistré pour que Prettier fonctionne. Nommez-le `test.js`. L'emplacement importe peu.
2. Remplacez le contenu par&nbsp;:

   ```js-nolint example-bad
   function direBonjour(nom){const salutation = `Bonjour, ${nom}!`;
   return salutation;}
   ```

3. Enregistrez à nouveau&nbsp;: Prettier devrait reformater le code ainsi&nbsp;:

   ```js
   function direBonjour(nom) {
     const salutation = `Bonjour, ${nom}!`;
     return salutation;
   }
   ```

{{PreviousMenuNext("Learn_web_development/Getting_started/Environment_setup/Browsing_the_web", "Learn_web_development/Getting_started/Environment_setup/Dealing_with_files", "Learn_web_development/Getting_started/Environment_setup")}}
