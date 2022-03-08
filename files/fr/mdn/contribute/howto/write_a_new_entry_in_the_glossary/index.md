---
title: Écrire et référencer une entrée de glossaire
slug: MDN/Contribute/Howto/Write_a_new_entry_in_the_Glossary
tags:
  - Comment…
  - Glossaire
  - Guide
  - MDN Méta(2)
translation_of: MDN/Contribute/Howto/Write_a_new_entry_in_the_Glossary
---
{{MDNSidebar}}

Le [glossaire](/fr/docs/Glossary) MDN est le lieu privilégié où nous définissons la terminologie, le jargon et les abréviations utilisés dans la documentation et les codes.  Contribuer à ce glossaire est une moyen simple de rendre le Web plus compréhensible pour n'importe qui. Nul besoin de posséder un haut niveau de compétence pour écrire des entrées du glossaire,  elles doivent rester simples et évidentes.

## Comment créer une entrée

Pour trouver des sujets ayant besoin d'entrées de glossaire, consultez la [liste des termes à documenter](/fr/docs/Glossary#Contribute_to_the_glossary) à la fin de la page concernant le sujet en question ; cliquez n'importe lequel de ses liens pour commencer une nouvelle page de glossaire, puis suivez les étapes ci-dessous.

### Étape 1: écrire un résumé

Le premier paragraphe d'une page de glossaire consiste en une description courte et simple du terme — de préférence n'exédant pas les deux lignes. Assurez-vous que n'importe qui lisant cette description puisse immédiatement saisir le sens du terme concerné.

> **Note :** ne copiez-collez pas la définition d'un autre endroit (spécialement pas de Wikipédia, puisque leurs licences sont réduites et donc incompatiles avec celles de MDN).

> **Note :** il est important également de s'assurer que le contenu est simple et compréhensible. Cela vaut la peine de passer un peu de temps dessus plutôt que de trahir le sens. Ce glossaire doit contenir du contenu nouveau et utile, pas répéter ce que l'on peut trouver partout ailleurs.

Les liens conduisant à cette entrée de glossaire feront apparaitre ce résumé au survol de la souris, de telle sorte que le lecteur pourra obtenir une définition sans avoir à naviguer jusqu'à la page concernée (voyez ci-dessous comment insérer un lien vers une entrée de glossaire avec la macro \\{{Glossary}}).

Si vous y tenez, vous pouvez ajouter quelques paragraphes supplémentaires, mais prenez garde de ne pas vous retrouver à écrire tout un article. Écrire un article complet est une bonne chose, mais ne le placez pas dans le glossaire. Si vous ne savez pas où placer cet article, n'hésitez pas à [prendre la parole pour en parler ici](/fr/docs/MDN/Community#Join_our_mailing_lists).

### Étape 2 : offrir d'autres sources

Pour terminer, une entrée de glossaire devrait toujours s'achever sur une section « En savoir plus ». Cette section devrait contenir des liens qui aideront le lecteur à aller plus loin : découvrir le sujet plus en détail, apprendre à utiliser la technologie en question, etc.

Il est recommandé de trier ces liens en au moins trois groupes :

- Connaissance générale
  - : Liens qui fournissent plus d'information générale ; par exemple, un lien vers [Wikipédia](http://fr.wikipedia.org/) est un excellent début.
- Références techniques
  - : Liens vers une information technique plus avancée, sur MDN par exemple.
- Apprentissage et tutoriels
  - : Liens vers des tutoriels, des exercices ou tout autre matériel susceptible d'apprendre au lecteur à maitriser les technologies liées au terme défini.

## Termes suggérés

Vous désirez contribuer mais vous ignorez quel terme doit être défini ? [Voici une liste](https://developer.mozilla.org/fr/docs/Glossary#Contribute_to_the_glossary) de suggestions. Cliquez un mot et lancez-vous !

## Gérer les ambiguïtés

Parfois, en fonction du contexte, un même terme peut connaitre plusieurs définitions. Pour traiter ces ambiguïtés, vous devez suivre ce guide :

- La page principale du terme doit être une page de « désambiguïsation » contenant la macro {{TemplateLink("GlossaryDisambiguation")}}.
- Des sous-pages définissent ensuite le terme dans chacun de ses contextes propres.

Illustrons cela par un exemple. Le terme _signature_ peut avoir différentes significations dans au moins trois contextes différents : la _sécurité_, les _fonctions_ et les _mèls_.

1.  La page [Glossaire/Signature](/fr/docs/Glossary/Signature) est la page de « désambiguïsation » avec la macro {{TemplateLink("GlossaryDisambiguation")}} macro.
2.  La sous-page [Glossaire/Signature/Sécurité](/fr/docs/Glossary/Signature/Security) est la page définissant le terme dans le contexte de la sécurité informatique.
3.  La sous-page [Glossaire/Signature/Fonction](/fr/docs/Glossary/Signature/Function) est la page définissant les _signatures de fonction_.
4.  La sous-page [Glossaire/Signature/Mèl](/en-US/docs/Glossary/Signature/Email) est la page définissant les signatures de mèl.

## Utiliser la macro \\{{Glossary}}

Le glossaire devient beaucoup plus utile lorsque le lecteur peut atteindre les définitions depuis un autre document sans avoir à  naviguer hors de ce document. C'est la raison pour laquelle nous vous incitons à créer des liens vers le glossaire dès que vous le pouvez, en utilisant la macro {{TemplateLink("Glossary")}} :

| Macro                                                      | Result                                               | Note                                                                                                                                                    |
| ---------------------------------------------------------- | ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| \\{{Glossary("browser")}}                         | {{Glossary("browser")}}                     | Quand un terme correspond à un terme à définir, utilisez simplement la macro telle quelle (notez qu'elle est sensible à la casse — minuscule/majuscule) |
| \\{{Glossary("browser", "Web browser")}}     | {{Glossary("browser","Web browser")}}     | Fournissez en deuxième argument un texte alternatif à afficher.                                                                                         |
| \\{{Glossary("browser", "Web browser", 1)}} | {{Glossary("browser","Web browser",1)}} | Optionnellement, entrez le chiffre `1` comme troisième argument pour afficher le lien de façon classique plutôt que comme une mise en exergue subtile.  |

Les liens créés avec la macro \\{{Glossary}} affichent toujours un texte au survol de la souris, qui contient le résumé de l'entrée du glossaire (cf. ci-dessus).

### Conventions

Dans la plupart des cas, sur MDN, l'usage de la macro est sûr. Il y a cependant quelques exceptions que vous devez aborder avec précaution :

- Si un terme est déjà lié à une autre partie de MDN, n'y touchez pas et n'utilisez pas la macro \\{{Glossary}}.
- À l'intérieur d'une même section d'article, n'utilisez la macro \\{{Glossary}} qu'une seule fois pour le même terme (_astuce : une section commence toujours par un titre_).
