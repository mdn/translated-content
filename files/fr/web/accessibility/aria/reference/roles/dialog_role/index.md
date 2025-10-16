---
title: "ARIA : rôle dialog"
short-title: dialog
slug: Web/Accessibility/ARIA/Reference/Roles/dialog_role
original_slug: Web/Accessibility/ARIA/Roles/dialog_role
l10n:
  sourceCommit: a8b25483994fa47cf949b432ddf34a6bce2ddb2e
---

Le rôle `dialog` est utilisé pour marquer un dialogue ou une fenêtre d'application basée sur HTML qui sépare le contenu ou l'interface utilisateur du reste de l'application ou de la page web. Les dialogues sont généralement placés au-dessus du reste du contenu de la page à l'aide d'un superposition. Les dialogues peuvent être soit non modaux (il est toujours possible d'interagir avec le contenu en dehors du dialogue) ou modaux (seul le contenu dans le dialogue peut être interagi avec).

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">
    Vos informations personnelles ont été mises à jour avec succès
  </h2>
  <p id="dialog1Desc">
    Vous pouvez modifier vos informations à tout moment dans la section de votre
    compte utilisateur·ice.
  </p>
  <button>Fermer</button>
</div>
```

## Description

Un `dialog` est une fenêtre descendante de la fenêtre principale d'une application web. Pour les pages HTML, la fenêtre principale de l'application est l'ensemble du document web, c'est-à-dire l'élément body.

Baliser un élément de dialogue avec le rôle `dialog` aide la technologie d'assistance à identifier le contenu du dialogue comme étant regroupé et séparé du reste du contenu de la page. Cependant, ajouter `role="dialog"` seul n'est pas suffisant pour rendre un dialogue accessible. De plus, les éléments suivants doivent être pris en compte :

- Le dialogue doit être correctement étiqueté
- La gestion de la sélection du clavier doit être effectuée correctement

Les sections ci-dessous décrivent comment ces deux exigences peuvent être satisfaites.

### Étiquetage

Bien qu'il ne soit pas nécessaire que le dialogue lui-même puisse recevoir la sélection, il doit tout de même être étiqueté. L'étiquette donnée au dialogue fournira des informations contextuelles pour les contrôles interactifs à l'intérieur du dialogue. En d'autres termes, l'étiquette du dialogue agit comme une étiquette de regroupement pour les contrôles à l'intérieur (similaire à la façon dont un élément `<legend>` fournit une étiquette de regroupement pour les contrôles à l'intérieur d'un élément `<fieldset>`).

Si un dialogue a déjà une barre de titre visible, le texte à l'intérieur de cette barre peut être utilisé pour étiqueter le dialogue lui-même. La meilleure façon d'y parvenir est d'utiliser l'attribut [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) sur l'élément `role="dialog"`. De plus, si le dialogue contient un texte descriptif supplémentaire en plus du titre du dialogue, ce texte peut être associé au dialogue à l'aide de l'attribut [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby). Cette approche est illustrée dans l'extrait de code ci-dessous :

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">
    Vos informations personnelles ont été mises à jour avec succès
  </h2>
  <p id="dialog1Desc">
    Vous pouvez modifier vos informations à tout moment dans la section de votre
    compte utilisateur·ice.
  </p>
  <button>Fermer</button>
</div>
```

> [!NOTE]
> Gardez à l'esprit qu'un titre de dialogue et un texte descriptif n'ont pas besoin d'être sélectionnables pour être perçus par les lecteurs d'écran fonctionnant en mode non virtuel. La combinaison du rôle de dialogue ARIA et des techniques d'étiquetage devrait permettre au lecteur d'écran d'annoncer les informations du dialogue lorsque la sélection est déplacée à l'intérieur.

### Fonctionnalités JavaScript requises

#### Gestion de la sélection

Un dialogue a des exigences particulières concernant la gestion de la sélection du clavier&nbsp;:

- Les dialogues doivent toujours avoir au moins un contrôle focalisable. Pour de nombreux dialogues, il y aura un bouton comme «&nbsp;Fermer&nbsp;», «&nbsp;OK&nbsp;» ou «&nbsp;Annuler&nbsp;». En plus du contrôle nécessaire, les dialogues peuvent contenir un nombre quelconque d'éléments focalisables, même des formulaires entiers ou d'autres widgets conteneurs comme des onglets.
- Lorsque le dialogue apparaît à l'écran, la sélection au clavier (dont le contrôle dépend de l'objectif du dialogue) doit être déplacé vers le contrôle focalisable par défaut à l'intérieur du dialogue. Pour les dialogues qui ne fournissent qu'un message de base, cela pourrait être un bouton «&nbsp;OK&nbsp;». Pour les dialogues contenant un formulaire, cela pourrait être le premier champ du formulaire.
- Après la fermeture du dialogue, la sélection clavier doit être déplacée vers l'endroit où il se trouvait avant d'entrer dans le dialogue. Sinon, la sélection peut être perdue au début de la page.
- Pour la plupart des dialogues, le comportement attendu est que l'ordre de tabulation du dialogue _s'enroule_, ce qui signifie que lorsque l'utilisateur·ice passe d'un élément focalisable à l'autre dans le dialogue, le premier élément focalisable sera mis au point après que le dernier ait été atteint. En d'autres termes, l'ordre de tabulation doit être contenu dans le dialogue et par celui-ci.
- Si le dialogue peut être déplacé ou redimensionné, assurez-vous que ces actions doivent être réalisables par les utilisateur·ice·s de clavier ainsi que par les utilisateur·ice·s de souris. De même, si un dialogue fournit des fonctionnalités spéciales comme des barres d'outils ou des menus contextuels, ceux-ci doivent être accessibles et utilisables par les utilisateur·ice·s de clavier.
- Les dialogues peuvent être modaux ou non modaux. Lorsqu'un dialogue _modal_ apparaît à l'écran, il n'est pas possible d'interagir avec le contenu de la page en dehors du dialogue. En d'autres termes, l'interface utilisateur principale de l'application ou le contenu de la page est considéré comme temporairement désactivé tant que le dialogue modal est affiché. Pour les dialogues _non modaux_, il est toujours possible d'interagir avec le contenu en dehors du dialogue pendant que celui-ci est affiché. Notez que pour les dialogues non modaux, il devra y avoir un raccourci clavier global qui permet de déplacer la sélection entre les dialogues ouverts et la page principale.

### Propriétés, états et rôles ARIA associés

- [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
  - : Utilisez cet attribut pour étiqueter le dialogue. Souvent, la valeur de l'attribut `aria-labelledby` sera l'identifiant de l'élément utilisé pour titrer le dialogue.
- [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
  - : Utilisez cet attribut pour décrire le contenu du dialogue.

### Possible effets sur les agents utilisateurs et la technologie d'assistance

Lorsque le rôle `dialog` est utilisé, l'agent utilisateur doit faire ce qui suit&nbsp;:

- Exposer l'élément en tant que dialogue dans l'API d'accessibilité du système d'exploitation.

Lorsque le dialogue est correctement étiqueté et que la sélection est déplacée vers un élément (souvent un élément interactif, tel qu'un bouton) à l'intérieur du dialogue, les lecteurs d'écran doivent annoncer le rôle accessible du dialogue, son nom et éventuellement sa description, tout en annonçant l'élément focalisé.

> [!NOTE]
> Les opinions peuvent différer sur la manière dont la technologie d'assistance doit gérer cette technique, et l'ordre des annonces peut différer en fonction de la technologie d'assistance utilisée. Les informations fournies ci-dessus sont l'une de ces opinions et peuvent changer à mesure que la spécification est définie.

## Exemples

### Un dialogue contenant un formulaire

```html
<div
  role="dialog"
  aria-labelledby="dialog1Title"
  aria-describedby="dialog1Desc">
  <h2 id="dialog1Title">Formulaire d'inscription</h2>
  <p id="dialog1Desc">
    Nous ne partagerons pas ces informations avec des tiers.
  </p>
  <form>
    <p>
      <label for="firstName">Prénom</label>
      <input id="firstName" type="text" />
    </p>
    <p>
      <label for="lastName">Nom</label>
      <input id="lastName" type="text" />
    </p>
    <p>
      <label for="interests">Centres d'intérêt</label>
      <textarea id="interests"></textarea>
    </p>
    <p>
      <input type="checkbox" id="autoLogin" name="autoLogin" />
      <label for="autoLogin">Connexion automatique&nbsp;?</label>
    </p>
    <p>
      <input type="submit" value="Enregistrer les informations" />
    </p>
  </form>
</div>
```

#### Exemples fonctionnels

- [jQuery-UI Dialog <sup>(angl.)</sup>](https://jqueryui.com/dialog/)

### Notes

> [!NOTE]
> Quand il est possible d'empêcher les utilisateur·ice·s de clavier de déplacer la sélection vers des éléments en dehors de la boîte de dialogue, les utilisateur·ice·s de lecteurs d'écran peuvent toujours être en mesure de naviguer vers ce contenu à l'aide du curseur virtuel de leur lecteur d'écran.
> Il est important pour les développeurs de s'assurer que le contenu en dehors de la boîte de dialogue modale est inaccessible à tous les utilisateur·ice·s pendant que la boîte de dialogue modale est active.

## Spécifications

{{Specifications}}

## Voir aussi

- [ARIA&nbsp;: rôle alertdialog](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role)
- L'élément HTML {{HTMLElement('dialog')}}
