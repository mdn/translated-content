---
title: Utiliser l'attribut aria-describedby
slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute
tags:
  - ARIA
  - Accessibility
  - Attribute
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute
original_slug: Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-describedby
---
L'attribut [`aria-describedby`](https://www.w3.org/TR/wai-aria/#aria-describedby) est utilisé pour indiquer les identifiants des éléments qui décrivent l'objet. Il est utilisé pour établir une relation entre des composants ou des groupes et un texte les décrivant. Il est similaire à [aria-labelledby](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute) où un label décrit la nature d'un objet, tandis qu'une description fournit plus d'informations pouvant être utiles à l'utilisateur.

L'attribut `aria-describedby` n'est pas uniquement utilisé pour des éléments de formulaire ; il peut également être utilisé pour associer un texte statique avec des composants graphiques, des groupes d'éléments, des panneaux, des zones possédant un titre, des définitions, etc. La section [Exemples](#examples) ci-dessous fournit plus d'informations sur l'utilisation de cet attribut dans ces cas précis.

Cet attribut peut être utilisé avec n'importe quel élément de formulaire HTML ; il n'est pas limité aux éléments auxquels un rôle ARIA a été assigné.

## Valeur

La valeur de cet attribut est une liste d'identifiants d'éléments, séparés par des espaces

## Effets possibles sur les agents utilisateurs et les technologies d'assistance

> **Note :** il existe plusieurs points de vue sur la façon dont les technologies d'assistance devraient traiter cette technique. L'information fournie ci-dessus est l'une de ces opinions et n'est pas normative.

## Exemples

### Exemple 1 : Descriptions des points de repère (landmarks) d'une application

Dans l'exemple ci-dessous, un paragraphe d'introduction décrit une application de calendrier. `aria-describedby` est utilisé pour associer le paragraphe avec le conteneur de l'application.

```html
<div role="applicaton" aria-labelledby="calendar" aria-describedby="info">
    <h1 id="calendar">Calendrier<h1>
    <p id="info">
        Ce calendrier affiche les prévisions de match du Racing Métro.
    </p>
    <div role="grid">
        …
    </div>
</div>
```

### Exemple 2 : Un bouton de fermeture

Dans l'exemple ci-dessous, un lien qui fonctionne comme le bouton `Fermer` d'une boîte de dialogue est décrit ailleurs dans le document. L'attribut `aria-describedby` est utilisé pour associer la description au lien.

```html
<button aria-label="Fermer" aria-describedby="descriptionClose"
    onclick="myDialog.close()">X</button>
…

<div id="descriptionClose">
  La fermeture de cette fenêtre entraînera la perte des
  informations saisies et vous renverra vers la page
  principale.
</div>
```

## Notes

- L'attribut `aria-describedby` n'est pas destiné à référencer les descriptions d'une ressource externe. Comme il s'agit d'un identifiant, il doit référencer un élément du DOM du document courant.

## Utilisé par les rôles ARIA

Tous les éléments de balisage de base.

## Techniques ARIA connexes

- [Utiliser l'attribut `aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)

## Compatibilité

À faire : ajouter les informations de prise en charge pour les combinaisons les plus courantes d'agents utilisateurs et de produits de technologies d'assistance.

## Autres ressources

- [Spécification WAI-ARIA de `aria-describedby`](https://www.w3.org/TR/wai-aria/states_and_properties#aria-describedby)
