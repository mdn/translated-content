---
title: Utiliser l'attribut aria-labelledby
slug: >-
  orphaned/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute
tags:
  - ARIA
  - Accessibilité
  - Attribut
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute
original_slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute
---
### Description

Cette technique présente l’utilisation de l’attribut [`aria-labelledby`](http://www.w3.org/TR/wai-aria/states_and_properties#aria-labelledby).

L’attribut `aria-labelledby` est utilisé pour indiquer les ID des éléments qui labellisent l’objet. Il est utilisé pour établir une relation entre les composants, ou les groupes, et leurs labels. Les utilisateurs de technologies d’assistance telles que les lecteurs d’écran, naviguent généralement dans un document en tabulant entre les zones de l’écran. Si un label n’est pas associé à un élément de saisie, un composant ou un groupe, il ne sera pas lu par le lecteur d’écran.

`aria-labelledby` est très similaire à l’attribut [aria-describedby](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-describedby)&nbsp;: un label décrit la nature d’un objet, alors qu’une description fournit plus d’informations pouvant être utiles à l’utilisateur.

L’attribut `aria-labelledby` n’est pas uniquement utilisé avec les éléments de formulaire&nbsp;; il peut également être utilisé pour associer un texte statique avec des composants, des groupes d’éléments, des panneaux, des zones possédant un titre, des définitions, etc. La section [Exemples](#exemples) ci-dessous fournit plus d’informations sur l’utilisation de cet attribut dans ces cas précis.

L’attribut `aria-labelledby` peut être utilisé en conjonction avec l’élément {{ HTMLElement("label") }} (à l’aide de l’attribut `for`) pour améliorer la compatibilité avec les agents utilisateurs qui ne prennent pas encore en charge ARIA.

Cet attribut peut être utilisé avec n’importe quel élément caractéristique de formulaire HTML&nbsp;; il n’est pas limité aux éléments auxquels un rôle ARIA a été assigné.

### Valeurs

Une liste d’ID d’éléments séparés par des espaces

### Effets possibles sur les agents utilisateurs et les technologies d’assistance

Lorsque les deux attributs `aria-labelledby` et [`aria-label`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_aria-label_attribute) sont utilisés, les agents utilisateurs donnent la priorité à `aria-labelledby` lors du calcul de la propriété de nom accessible.

### Exemples

#### Exemple 1&nbsp;: Labels multiples

Dans l’exemple ci-dessous, chaque champ de saisie est labellisé à la fois avec son propre label individuel et avec le label pour le groupe&nbsp;:

```html
<div id="facturation">Facturation</div>

<div>
  <div id="nom">Nom</div>

  <input type="text" aria-labelledby="nom facturation"/>
</div>

<div>
  <div id="adresse">Adresse</div>

  <input type="text" aria-labelledby="adresse facturation"/>
</div>
```

#### Exemple 2&nbsp;: Association de titres et de zones

Dans l’exemple ci-dessous, les éléments d’en-têtes sont associés avec les contenus dont ils sont les intitulés. Notez que la zone référencée est celle qui _contient_ l’en-tête.

```html
<div role="main" aria-labelledby="foo">
  <h1 id="foo">Le feu devenu incontrôlable gagne les abords d’Aubagne</h1>
  Un fort mistral a propagé le feu de forêt qui s’est déclaré ce lundi soir suite aux fortes températures de ces derniers jours…
</div>
```

#### Exemple 3&nbsp;: Groupes de boutons radio

Dans l’exemple ci-dessous, le conteneur d’un [radiogroup](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_radiogroup) est associé avec son label à l’aide de l’attribut `aria-labelledby`&nbsp;:

```html
<div id="radio_label">My radio label</div>

<ul role="radiogroup" aria-labelledby="radio_label">
  <li role="radio">Élément №1</li>
  <li role="radio">Élément №2</li>
  <li role="radio">Élément №3</li>
</ul>
```

#### Exemple 4&nbsp;: Titre de boite de dialogue

Dans l’exemple ci-dessous, l’élément d’en-tête qui labellise la boite de dialogue y est relié par l’attribut `aria-labelledby`&nbsp;:

```html
<div role="dialog" aria-labelledby="titreDialogue">
  <h2 id="titreDialogue">Choisir un fichier</h2>
  … Contenus de la boîte de dialogue
</div>
```

#### Exemple 5&nbsp;: Définition intégrée

Dans l’exemple ci-dessous, la définition d’un terme qui est décrit dans le flux naturel de la narration, est associée au terme lui-même à l’aide de l’attribut **aria-labelledby**:

```html
<p>Le docteur expliqua que c’était un <dfn id="placebo">placebo</dfn>, <span role="definition" aria-labelledby="placebo"> ou
une préparation inerte prescrite plus pour le soulagement mental du patient que ses effets possible sur une pathologie.</span>
</p>
```

#### Exemple 6&nbsp;: Listes de définitions

Dans l’exemple ci-dessous, les définitions sont associées avec les termes qu’elles définissent à l’aide de l’attribut `aria-labelledby`&nbsp;:

```html
<dl>
  <dt id="anatheme">anathème</dt>
    <dd role="definition" aria-labelledby="anatheme">une interdiction ou une condamnation prononcée par une autorité ecclésiastique
                                         et accompagnée de l’excommunication</dd>
    <dd role="definition" aria-labelledby="anatheme">une dénonciation vigoureuse&nbsp;: condamnation</dd>

  <dt id="homelie">homélie</dt>
    <dd role="definition" aria-labelledby="homelie">généralement un sermon court</dd>
    <dd role="definition" aria-labelledby="homelie">une lecture ou un discours sur un thème moral</dd>

</dl>
```

#### Exemple 7&nbsp;: Menus

Dans l’exemple ci-dessous, un [menu contextuel](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-haspopup) est associé avec son label à l’aide de l’attribut `aria-labelledby`&nbsp;:

```html
<div role="menubar">
  <div role="menuitem" aria-haspopup="true" id="fichierMenu">Fichier</div>
  <div role="menu" aria-labelledby="fichierMenu">
    <div role="menuitem">Ouvrir</div>
    <div role="menuitem">Enregistrer</div>
    <div role="menuitem">Enregistrer sous…</div>
    …
  </div>
…
</div>
```

### Notes

L’affectation d’_API accessibilité_ la plus courante pour un label est la propriété de _nom accessible_.

### Utilisé par les rôles ARIA

Tous les éléments de balisage de base.

### Techniques ARIA connexes

- [Utiliser l’attribut `aria-label`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-label)&nbsp;;
- [Utiliser l’attribut `aria-describedby`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_l_attribut_aria-describedby).

### Autres ressources

- [Spécification WAI-ARIA pour aria-labelledby](http://www.w3.org/TR/wai-aria/states_and_properties#aria-labelledby).
