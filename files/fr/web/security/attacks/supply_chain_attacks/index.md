---
title: Attaques de la chaîne d'approvisionnement
slug: Web/Security/Attacks/Supply_chain_attacks
l10n:
  sourceCommit: afcdfa050626bb7eb05ee693df8997020db9ff2e
---

Une _chaîne d'approvisionnement logicielle_ consiste en l'ensemble des logiciels et outils utilisés pour créer et maintenir un produit logiciel. Cela inclut non seulement les logiciels développés pour le produit lui-même, mais aussi tous les logiciels et outils utilisés dans sa production.

Dans une attaque de la chaîne d'approvisionnement (<i lang="en">supply chain attack</i> en anglais), l'attaquant·e cible une partie de la chaîne d'approvisionnement du produit afin de compromettre le produit lui-même.

L'exemple le plus évident est une bibliothèque tierce. Si vous utilisez, par exemple, un paquet [npm <sup>(angl.)</sup>](https://www.npmjs.com/) développé par un tiers, il peut compromettre votre site. Cela peut se faire délibérément, s'il est malveillant, ou accidentellement, s'il contient des vulnérabilités involontaires. Essentiellement, vous devez faire confiance à vos dépendances tierces autant qu'à votre propre code.

De manière moins évidente, le même principe s'applique à tous les outils que vous utilisez pour créer votre logiciel, y compris les éditeurs de code, les plugins d'éditeur, les systèmes de contrôle de version, les outils de compilation, et ainsi de suite. Chacun de ces outils peut insérer du code malveillant ou vulnérable dans votre produit logiciel final, au cours des transformations qu'il applique.

Dans ce document, nous allons présenter les pratiques à suivre pour sécuriser votre chaîne d'approvisionnement logicielle. Il est organisé en deux sections principales&nbsp;:

- [Sécuriser votre environnement de développement](#sécuriser_votre_environnement_de_développement)&nbsp;: pratiques pour s'assurer que votre propre code n'est pas compromis.
- [Gérer les dépendances tierces](#gérer_les_dépendances_tierces)&nbsp;: pratiques pour s'assurer que vos dépendances ne sont pas compromises.

## Sécuriser votre environnement de développement

Une voie pour une attaque de la chaîne d'approvisionnement consiste à ce qu'un·e attaquant·e introduise des vulnérabilités ou du code malveillant directement dans votre propre produit. En général, un·e attaquant·e fait cela en compromettant le compte d'un·e mainteneur·euse de projet, ou en exploitant des faiblesses dans les outils de développement utilisés par les mainteneur·euse·s.

Notre guide sur la [sécurité opérationnelle](/fr/docs/Web/Security/Defenses/Operational_security#sécuriser_votre_environnement_de_développement) décrit les pratiques pour contrer ces menaces, notamment&nbsp;:

- [Exiger une authentification forte pour les mainteneur·euse·s de projet](/fr/docs/Web/Security/Defenses/Operational_security#exiger_une_authentification_forte_pour_les_mainteneurs_de_projet)
- [Mettre en œuvre un contrôle d'accès basé sur les rôles pour les mainteneur·euse·s de projet](/fr/docs/Web/Security/Defenses/Operational_security#mettre_en_œuvre_un_contrôle_daccès_basé_sur_les_rôles_pour_les_mainteneurs_de_projet)
- [Évaluer les outils que vous utilisez](/fr/docs/Web/Security/Defenses/Operational_security#évaluer_les_outils_que_vous_utilisez)
- [Sécuriser votre configuration](/fr/docs/Web/Security/Defenses/Operational_security#sécuriser_votre_configuration)

## Gérer les dépendances tierces

Les dépendances tierces incluent non seulement les bibliothèques et cadriciels que votre code utilise, mais également tous les outils tiers impliqués dans le processus de développement, y compris les éditeurs, les IDE, les systèmes de contrôle de version, les gestionnaires de paquets et les outils de compilation.

Les attaquant·e·s peuvent compromettre votre projet en exploitant les faiblesses de ces dépendances. Notre guide sur la [sécurité opérationnelle](/fr/docs/Web/Security/Defenses/Operational_security#gérer_les_dépendances_tierces) décrit les pratiques pour contrer ces menaces, notamment&nbsp;:

- [Évaluer les nouvelles dépendances](/fr/docs/Web/Security/Defenses/Operational_security#évaluer_les_nouvelles_dépendances)
- [Mettre à jour les dépendances existantes](/fr/docs/Web/Security/Defenses/Operational_security#mettre_à_jour_les_dépendances_existantes)
- [Maintenir une _liste des composants logiciels_ (SBOM)](/fr/docs/Web/Security/Defenses/Operational_security#maintenir_une_liste_des_composants_logiciels_liste_des_composants_logiciels)

De plus, les projets doivent [utiliser l'intégrité des ressources externes](#utiliser_lintégrité_des_ressources_externes) pour les scripts et les feuilles de style hébergés par un site tiers.

### Utiliser l'intégrité des ressources externes

De nombreux sites Web incluent des scripts hébergés à l'extérieur&nbsp;: notamment, mais pas exclusivement, des scripts servis depuis un {{Glossary("CDN", "Content Delivery Network (CDN)")}}&nbsp;:

```html
<script src="https://cdn.example.org/library.js"></script>
```

Cela représente un risque pour votre chaîne d'approvisionnement&nbsp;: si un·e attaquant·e parvient à prendre le contrôle du domaine `cdn.example.org`, il ou elle peut remplacer le script par un script malveillant et ainsi compromettre votre site.

Les scripts externes, comme les autres dépendances logicielles, doivent faire partie de votre SBOM, mais une défense supplémentaire consiste à définir l'attribut [`integrity`](/fr/docs/Web/HTML/Reference/Elements/script#integrity) du script&nbsp;:

```html
<script
  src="https://cdn.example.org/library.js"
  integrity="sha256-d5f450f7ce715d827de27ca569e183f819d33c1e7601875fd61eccbc98f56c5b"></script>
```

La valeur de cet attribut contient un {{Glossary("hash_function", "hachage cryptographique")}} du contenu du script. Si le script a été modifié par un·e attaquant·e, le navigateur refuse de le charger, et vous êtes protégé·e.

Cela ajoute effectivement une charge de maintenance supplémentaire&nbsp;: chaque fois que la source change (par exemple, à chaque nouvelle version publiée), vous devez mettre à jour la valeur de l'attribut dans votre code.

L'élément HTML {{HTMLElement("link")}} prend également en charge l'attribut `integrity`, vous pouvez donc (et devez) l'utiliser pour les feuilles de style CSS ainsi que pour les scripts.

Voir [l'intégrité des ressources externes](/fr/docs/Web/Security/Defenses/Subresource_Integrity) pour plus de détails.

## Liste de contrôle récapitulative de la défense

- Suivre les pratiques de sécurité opérationnelle pour&nbsp;:
  - [Sécuriser votre propre environnement de développement](/fr/docs/Web/Security/Defenses/Operational_security#sécuriser_votre_propre_environnement_de_développement).
  - [Limiter le risque lié aux dépendances tierces](/fr/docs/Web/Security/Defenses/Operational_security#gérer_les_dépendances_tierces).
- Utiliser [l'intégrité des ressources externes](#utiliser_lintégrité_des_ressources_externes) pour les scripts et les feuilles de style référencés de manière externe.

## Voir aussi

- [Sécurité de la chaîne d'approvisionnement logicielle <sup>(angl.)</sup>](https://cheatsheetseries.owasp.org/cheatsheets/Software_Supply_Chain_Security_Cheat_Sheet.html) sur [owasp.org <sup>(angl.)</sup>](https://owasp.org/)
