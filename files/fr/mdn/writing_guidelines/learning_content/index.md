---
title: Règles de rédaction pour l'apprentissage du développement web
short-title: Contenu d'apprentissage
slug: MDN/Writing_guidelines/Learning_content
l10n:
  sourceCommit: a1ac64fa4da965d2a152f08221b1a9aed638fd16
---

La section [Apprendre le développement web](/fr/docs/Learn_web_development) de MDN s'adresse spécifiquement aux personnes qui apprennent les bases du développement web et, à ce titre, nécessite une approche différente du reste du contenu MDN. Cet article fournit des règles pour rédiger du contenu d'apprentissage.

## Public cible

Le public cible de la section MDN Apprendre le développement web (aussi appelé Apprendre) est constitué de personnes qui ne sont pas expertes en développement front-end&nbsp;: cela inclut les étudiant·e·s, les développeur·euse·s web débutant·e·s ou en formation, les amateur·ice·s et les enseignant·e·s cherchant des bonnes pratiques à transmettre à leurs élèves.

## Couverture des sujets

_Apprendre_ propose un parcours structuré avec des objectifs d'apprentissage, conçu pour enseigner les compétences et pratiques fondamentales qui permettront aux lecteur·ice·s de devenir des développeur·euse·s front-end accompli·e·s. Les apprenant·e·s peuvent s'y fier pour obtenir des informations fiables pour leurs études, et les enseignant·e·s peuvent s'y appuyer pour définir les résultats attendus de leurs cours et programmes.

En conséquence, nous visons à limiter strictement le périmètre de _Apprendre_ à&nbsp;:

- La mise en place, les compétences transversales et les connaissances de base dans nos [modules de démarrage](/fr/docs/Learn_web_development/Getting_started).
- Les technologies fondamentales nécessaires au début du parcours d'un·e développeur·euse web dans nos [modules de base](/fr/docs/Learn_web_development/Core).
- Les sujets de «&nbsp;seconde vague&nbsp;» qui représentent les prochaines étapes utiles pour les débutant·e·s ayant maîtrisé les modules de base, dans nos [modules d'extension](/fr/docs/Learn_web_development/Extensions).

_Apprendre_ n'est pas destiné à accueillir sur MDN du contenu introductif sur _tous_ les sujets. Cela signifie que les sujets de niche comme MathML et les jeux web, ainsi que les sujets avancés ou spécialisés comme les expressions régulières, les tests de performance, WebRTC et WebGPU, n'ont pas leur place dans _Apprendre_.

Si vous ne voyez pas un sujet traité dans _Apprendre_ et que vous pensez qu'il devrait l'être, ne l'ajoutez pas directement&nbsp;: discutez-en d'abord avec nous (voir [Suggérer du contenu](/fr/docs/MDN/Writing_guidelines/What_we_write#suggestion_de_contenus)).

## Approche

Pour créer et mettre à jour le contenu d'apprentissage du développement web sur MDN, vous devez suivre la même approche que pour le reste de MDN à bien des égards. Vous devez suivre le même [guide de style rédactionnel](/fr/docs/MDN/Writing_guidelines/Writing_style_guide), [guide de style de code](/fr/docs/MDN/Writing_guidelines/Code_style_guide) et [techniques](/fr/docs/MDN/Writing_guidelines/Howto).

Il existe cependant quelques différences&nbsp;:

- **Style tutoriel**&nbsp;: La plupart du contenu MDN est un mélange de documentation de référence et de guides&nbsp;; _Apprendre_, en revanche, vise à proposer des tutoriels pratiques. Il n'existe pas de modèle strict pour chaque page, mais elles doivent être rédigées de façon à guider le·la lecteur·ice pas à pas, à travers des sections progressives et des encadrés «&nbsp;À vous de jouer&nbsp;». Ces encadrés invitent à expérimenter et à écrire du code. Voir par exemple la section «&nbsp;À vous de jouer&nbsp;» en bas de notre page sur le [moteur de recherche](/fr/docs/Learn_web_development/Getting_started/Environment_setup/Browsing_the_web#moteur_de_recherche_2). Ils sont créés avec le markdown suivant&nbsp;:

  ```md
  > [!CALLOUT]
  >
  > **À vous de jouer**
  >
  > Essayez ceci...
  ```

- **Défis**&nbsp;: Le contenu _Apprendre_ inclut régulièrement des défis pour vérifier que le·la lecteur·ice a bien compris les sujets abordés avant de passer à l'article suivant. Ils sont actuellement rédigés selon plusieurs styles, voir par exemple [Défi&nbsp;: Structurer une page de contenu](/fr/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) et [Testez vos compétences&nbsp;: images HTML](/fr/docs/Learn_web_development/Core/Structuring_content/Test_your_skills/Images), mais nous comptons améliorer la cohérence et l'expérience de ces défis à l'avenir.
- **Densité et exhaustivité**&nbsp;: Le contenu MDN est généralement reconnu pour son exhaustivité. Le contenu _Apprendre_ n'est volontairement pas aussi complet que le reste de MDN. Il est moins dense et plus accessible, pour permettre aux apprenant·e·s d'acquérir des compétences utiles et de progresser régulièrement sans se sentir submergé·e·s. Ils pourront approfondir plus tard. Le contenu _Apprendre_ peut omettre des détails pour offrir une expérience d'apprentissage plus confortable, à condition de ne rien enseigner de trompeur ou de mauvaise pratique.
- **Objectifs d'apprentissage stables**&nbsp;: Les objectifs d'apprentissage en haut de chaque tutoriel résument ce que chaque tutoriel enseigne, et ensemble, ils forment un programme structuré pour le développement front-end. Il est essentiel que les objectifs d'apprentissage et le contenu enseigné restent stables et synchronisés, sinon le contenu ne peut pas servir de base fiable à un apprentissage formel (cours, certifications, etc.). Les changements d'objectifs doivent donc être rares et motivés. Si vous essayez d'ajouter du contenu qui n'est pas couvert par les objectifs associés (ou inversement), votre pull request sera fermée. [Faites une suggestion](/fr/docs/MDN/Writing_guidelines/What_we_write#suggestion_de_contenus) d'abord.

> [!NOTE]
> Nous tenons un [journal des modifications](/fr/docs/Learn_web_development/Changelog) qui détaille tout changement significatif apporté aux objectifs d'apprentissage, afin que les enseignant·e·s puissent maintenir à jour leurs ressources basées sur la section MDN _Apprendre_.

## Liens partenaires et intégrations

Comme indiqué dans nos [règles sur les liens externes](/fr/docs/MDN/Writing_guidelines/Writing_style_guide#liens_externes), MDN n'autorise généralement pas les liens externes (ou intégrations) qui semblent promouvoir des produits commerciaux ou mènent à du contenu payant. Cela vise à éviter que le contenu MDN ne perde en crédibilité ou ne devienne moins utile à cause de liens publicitaires.

Le contenu _Apprendre_ de MDN fait cependant quelques exceptions. Nous autorisons des liens vers du contenu externe (parfois payant) provenant de partenaires de confiance. Ce sont des sites avec lesquels MDN a établi une relation de confiance, en examinant leur qualité, leur éthique et leur engagement envers les standards et bonnes pratiques du web, et en les aidant à mettre à jour leur contenu si besoin. Nous leur faisons confiance pour ne pas modifier leurs liens sans préavis, et pour que leur contenu soit sûr.

Les objectifs de ces liens partenaires sont&nbsp;:

- Fournir un accès à du contenu complémentaire qui prolonge ce qui est enseigné sur nos pages.
- Offrir des expériences d'apprentissage multimédia (vidéos, diaporamas, contenus interactifs) que l'équipe MDN n'a pas les moyens de produire. MDN est centré sur le texte, mais les utilisateur·ice·s apprécient parfois d'autres approches.
- Générer des revenus via des liens affiliés vers du contenu payant, que nous pouvons réinvestir pour améliorer MDN.

Cependant, nous&nbsp;:

- N'ajouterons ces liens que s'ils sont réellement utiles et ne compromettent pas l'intégrité du contenu MDN.
- Veillerons toujours à proposer une option gratuite à côté de tout contenu payant. Dans de nombreux cas, nous avons convaincu nos partenaires de rendre gratuit du contenu auparavant payant.
- Marquerons clairement le contenu partenaire avec la mention «&nbsp;Partenaire d'apprentissage MDN&nbsp;», pour bien les distinguer des autres liens.

### Ordre des liens «&nbsp;Voir aussi&nbsp;»

Sur les pages _Apprendre_, les liens «&nbsp;Voir aussi&nbsp;» en bas de page doivent apparaître dans l'ordre suivant&nbsp;:

1. Liens internes.
2. Liens vers du contenu gratuit.
3. Liens vers du contenu mixte gratuit/payant.

### Partenaires pédagogiques actuels

- [Scrimba <sup>(angl.)</sup>](https://scrimba.com/home)
