---
title: Présentation
slug: Web/XSLT/Transforming_XML_with_XSLT/An_Overview
---

[« Transformations XML avec XSLT](/fr/docs/Transformations_XML_avec_XSLT)

L'eXtensible Stylesheet Language/Transform est un langage très puissant, et une étude approfondie de celui-ci n'est pas l'objectif de ce document, mais une présentation succincte des concepts fondamentaux vous aidera à mieux appréhender la description des capacités de Netscape qui suit.

- Une feuille de styles XSLT est un document XML.
  - : Contrairement aux CSS qui ont leur propre syntaxe, une feuille de style XSLT est un document XML, qui doit se conformer à toutes les règles du langage XML. Ainsi, le principe d'une transformation est qu'un document XML est utilisé pour transformer un autre document XML.
- Une feuille de styles XSLT est identifiée comme telle par un en-tête XSLT standard.
  - : L'élément externe dans une feuille de styles XSLT doit être l'élément \<xsl:stylesheet> (ou éventuellement l'élément `<xsl:transform>`). Cet élément inclut au moins une déclaration d'espace de nommage (`namespace`) et l'attribut de version obligatoire. On peut également inclure d'autres espaces de nommage et trois attributs optionnels.
- L'espace de nommage imposé pour XSLT est "http\://www\.w3.org/1999/XSL/Transform".

  - : Les espaces de nommages sont une source de confusion importante dans XML. Bien qu'ils semblent souvent être des URI, ils ne se réfèrent pas à une ressource située à cette adresse. Ils sont uniquement un moyen d'attribuer un identifiant unique à un ensemble d'éléments connus. La chaîne "http\://www\.w3.org/1999/XSL/Transform" est une constante qui marque les éléments ainsi désignés comme appartenant à l'ensemble des balises définies par le W3C dans sa recommandation XSLT de 1999. Une autre chaîne occasionnellement utilisée dans les feuilles de styles, "http\://www\.w3.org/TR/WD-xsl", indique la conformité avec un des premiers brouillons de travail (Working Draft en anglais, d'où le WD) du document du W3C. Ce dernier espace de nommage n'est pas compatible avec celui que la W3C a adopté et il n'est pas supporté par Netscape. Comme saisir la chaîne "http\://www\.w3.org/1999/XSL/Transform" à chaque fois serait pénible et rendrait la balisage difficile à lire, il existe un mécanisme pour assigner une abréviation à un espace de nommage dans l'en-tête de la feuille de styles. Dans sa totalité, l'élément ouvrant d'une feuille de style serait&nbsp;:

    ```xml
    <xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    ```

- Le pseudo attribut xmlns définit xsl comme l'abréviation du nom complet de l'espace de nommage pour ce document. Ainsi l'élément stylesheet ci-dessus est préfixé par `xsl:`. Bien que xsl soit conventionnellement utilisé, il n'est pas imposé et il est possible de choisir un autre raccourci. Les exemples de ce document utilisent tous le préfixe xsl.
- Toutes les transformations XSLT sont exécutées sur les arbres, et non sur les documents.
- Le moteur de transformation XSLT, appelé le processeur, ne fonctionne pas directement sur les documents. Avant qu'une transformation ne soit effectuée, le document XML originel et la feuille de styles doivent être analysés, afin de créer une représentation abstraite de la structure du document qui sera mise en mémoire. C'est cette représentation, appelée «&nbsp;arbre&nbsp;», qui sera traitée par le processeur. L'arbre est un type de données abstrait, un modèle conceptuel que peut être implémenté de diverses façons en fonction l'analyseur et le processeur. Netscape utilise une structure d'arbre proche de celle du [DOM](/fr/DOM) du W3C, mais d'autres sont également possibles. Les seules obligations concernent la disposition des objets dans l'arbre, leurs propriétés, et leurs relations. L'arbre consiste en une organisation hiérarchique de nœuds. Il peut être constitué à l'aide de sept types de nœuds&nbsp;: le nœud*root* (unique), des nœuds*élément*, des nœuds*text*, des nœuds*attribut*, des nœuds commentaires, des nœuds d'instructions de traitement, et des nœuds d'espaces de nommage. En haut de l'arbre on trouve le nœud racine (root). Le nœud racine ne correspond à aucune partie individuelle du document XML&nbsp;: il représente l'ensemble du document. En dessous du nœud racine se trouvent ses enfants, qui peuvent être des éléments, des commentaires, des instructions de traitement, etc. Certains de ces enfants peuvent également avoir leurs propres enfants, et ainsi de suite sur plusieurs niveaux. Il existe des contraintes concernant le positionnement des noeuds&nbsp;: par exemple, les nœuds texte ne peuvent pas avoir d'enfant. Le résultat du traitement par le processeur est également un arbre. Netscape utilise cet arbre pour créer le contenu dans la fenêtre du navigateur.
- XSLT est un langage déclaratif de haut niveau.
- Une feuille de styles XSLT est un ensemble de règles, appelées*modèles* (templates en anglais), qui déclare chacune qu'un nœud correspondant à ce motif spécifique doit être traité de cette façon spécifique et se retrouver à cette position spécifique dans l'arbre résultat. Les détails de l'exécution sont laissés au processeur, et comme l'ordre d'exécution des règles de la feuille de styles ne peut donc être garanti, XSLT ne supporte aucune fonctionnalité pouvant provoquer un effet de bord. En cela, il se comporte comme*Lisp* ou*Scheme*.
- Les emplacements dans les arbres sont spécifiés à l'aide de XPath, une recommandation du W3C.
- Les transformations dépendent de la capacité du processeur à identifier individuellement les nœuds dans l'arbre. Pour faciliter cela, le W3C a décidé d'utiliser un langage séparé, XPath, qui a également d'autres utilisations en dehors du contexte XSLT. Comme son nom l'indique, XPath définit un «&nbsp;chemin&nbsp;» (path en anglais) que le processeur doit suivre dans l'arbre pour parvenir au nœud voulu. Ce chemin se compose d'expressions spécifiques à XPath à évaluer, expressions qui peuvent contenir un certain nombre de conditions à remplir, une méthode pour associer des nœuds et/ou d'une indication de direction dans l'arbre. Vous trouverez une description complète des spécifications de XPath les plus communément utilisées avec XSLT dans les documents de la section*référence*.
- Les conflits éventuels dans la correspondance avec les modèles sont résolus par l'utilisation d'un ensemble de règles de priorité en cascade.
- En général, une règle modèle plus spécifique a la priorité sur une d'ordre plus général, et toutes choses égales par ailleurs, une règle apparaissant tard dans la feuille de style a la priorité sur celles qui se trouvent avant elle.
- Les feuilles de styles peuvent être attachées à un document XML par l'intermédiaire d'une instruction de traitement.
- La méthode la plus simple pour indiquer la feuille de styles XSLT à utiliser pour traiter un document XML particulier est d'inclure une instruction de traitement dans le document XML lui-même. Par exemple, si la feuille de styles se nomme inventory.xsl et se trouve dans le même répertoire que le document XML, l'instruction de traitement dans le document pourrait ressembler à&nbsp;:

  ```xml
  <?xml-stylesheet type="text/xml" href="inventory.xsl"?>
  ```

Cette instruction doit être placée dans le prologue du document XML.

Pour en savoir plus sur XSLT et XPath, voir la section [Autres ressources](/fr/Transformations_XML_avec_XSLT/Autres_ressources) à la fin de cet article.
