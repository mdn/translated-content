---
title: Structure de contrôle
slug: Glossary/Control_flow
tags:
  - Encodage
  - Glossaire
  - JavaScript
translation_of: Glossary/Control_flow
original_slug: Glossaire/Structure_de_contrôle
---
Les _structures de contrôle_ déterminent l'ordre dans lequel l'ordinateur exécute les instructions d'un script.

Le code est exécuté dans l'ordre de la première ligne du fichier jusqu'à la dernière ligne, sauf si l'ordinateur parcourt une des (très fréquentes) structures qui modifie le cours d'exécution du programme, comme des conditions et des boucles.

Par exemple, imaginons un script utilisé pour valider les données saisies par l'utilisateur dans un formulaire sur une page web. Le script envoie la donnée validée, mais si l'utilisateur, disons, laisse vide un champ obligatoire, le script lui demandera de le remplir. Pour faire cela, le script utilise une structure {{Glossary("Conditional", "conditionelle")}} ou `if...else`, afin que le code s'exécute différemment, selon que le formulaire est complété ou non :

    if (champ==vide) {
        demanderUtilisateur();
    } else {
        envoyerForm();
    }

Un script classique en {{glossary("JavaScript")}} ou {{glossary("PHP")}} (et autres langages similaires) comporte de nombreuses structures de contrôle, dont des conditions, des {{Glossary("Loop", "boucles")}} et des {{Glossary("Function", "fonctions")}}. Des portions de script peuvent aussi être amenées à être exécutées quand des {{Glossary("Event", "événements")}} se produisent.

Par exemple, l'extrait de code ci-dessus peut être placé dans une fonction qui se lance quand l'utilisateur clique sur le bouton **Submit** du formulaire. La fonction peut aussi être intégrée dans une boucle qui parcourt tous les champs du formulaire pour les vérifier chacun à tour de rôle. En regardant à nouveau le code des sections `if` et `else`, les lignes `demanderUtilisateur` et `envoyerForm` peuvent également être des appels vers d'autres fonctions du script. Comme vous pouvez le voir, les structures de contrôle peuvent imposer des flux de traitement complexes même avec peu de lignes de code.

Le contrôle de flux montre que lorsque vous lisez un script, vous ne devez pas seulement le lire du début à la fin, mais vous devez aussi regarder la structure du programme et voir comment cela affecte l'ordre d'exécution.

## Pour en savoir plus

### Culture générale

- {{Interwiki("wikipedia","Structure_de_contrôle","Structure de contrôle")}} sur Wikipédia

### Référence technique

- [Référence JavaScript - Structure de contrôle](/fr/docs/Web/JavaScript/Reference#Contrôle_du_flux) sur MDN

### Apprendre

- [Instructions (Structure de contrôle)](/fr/docs/Web/JavaScript/Guide/Contrôle_du_flux_Gestion_des_erreurs) sur MDN
