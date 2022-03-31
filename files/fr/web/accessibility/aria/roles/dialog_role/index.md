---
title: Utilisation du rôle dialog
slug: Web/Accessibility/ARIA/Roles/dialog_role
tags:
  - ARIA
  - Accessibilité
  - Développement Web
  - Rôle
translation_of: Web/Accessibility/ARIA/Roles/dialog_role
original_slug: Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_dialog
---
### Description

Cette technique présente l’utilisation du rôle [`dialog (en)`](http://www.w3.org/TR/2009/WD-wai-aria-20091215/roles#dialog).

Le rôle `dialog` est utilisé pour marquer une fenêtre ou une boîte de dialogue d’application web qui sépare le contenu ou l’UI du reste de l’application web ou de la page. Visuellement, les boîtes de dialogues sont généralement placées par dessus le contenu de la page, à l’aide d’un calque (ou « Overlay »). Les boîtes de dialogue peuvent être non-modales (ce qui signifie qu’il est toujours possible d’interagir avec le contenu situé hors de la boîte de dialogue) ou modales (ce qui signifie qu’on ne peut interagir qu’avec le contenu de la boîte de dialogue).

Marquer un élément de dialogue avec le rôle `dialog` aide les technologies d’assistance à identifier le contenu des boîtes de dialogue comme étant regroupé et séparé du reste du contenu de la page. Cependant, le seul ajout de `role="dialog"` n’est pas suffisant pour rendre une boîte de dialogue accessible. De plus, il faut veiller à ce qui suit&nbsp;:

- La boîte de dialogue doit être correctement labélisée&nbsp;;
- Le focus clavier doit être géré correctement.

Les sections ci-dessous décrivent comment ces deux exigences peuvent être satisfaites.

#### Labélisation

Bien qu’il ne soit pas obligatoire que la boîte de dialogue elle-même reçoive le focus, elle doit quand même besoin d’être labélisée. Le label donné à la boîte de dialogue fournira des informations contextuelles pour les contrôles interactifs qu’elle contient. En d’autres termes, le label de la boîte de dialogue agit comme label de regroupement pour les contrôles qu’elle contient. On peut comparer cela à la façon dont un élément `<legend>` fournit un label de regroupement pour les contrôles contenus dans un élément `<fieldset>`.

Si une boîte de dialogue a une barre de titre visible, le texte de cette barre peut être utilisé comme label pour la boîte elle-même. La meilleure façon de le faire est d’utiliser l’attribut `aria-labelledby` pour l’élément `role="dialog"`. De plus, si la boîte de dialogue contient une description supplémentaire, en plus du titre de la boîte, le texte de la description peut être associé avec la boîte de dialogue à l’aide de l’attribut `aria-describedby`. Cette approche est illustrée dans l’extrait de code ci-dessous&nbsp;:

```html
<div role="dialog" aria-labelledby="dialog1Title" aria-describedby="dialog1Desc">
    <h2 id="dialog1Title">Vos informations personnelles ont correctement été actualisées.</h2>

    <p id="dialog1Desc">Vous pouvez modifier vos informations personnelles à n’importe quel moment depuis la section « Compte utilisateur. »</p>

    <button>Fermer</button>
</div>
```

> **Note :** Gardez en tête que le titre d’une boîte de dialogue et sa description ne doivent pas être focalisables afin de toujours être perçus par les lecteurs d’écran opérant en mode non-virtuel. La combinaison du rôle ARIA `dialog` et des techniques de labélisation devrait permettre aux lecteurs d’écran d’annoncer les informations de la boîte de dialogue lorsque le focus arrive sur cette dernière.

#### Gestion du focus

Une boîte de dialogue a des exigences particulières concernant la façon dont le focus clavier doit être géré :

- Les boîtes de dialogue doivent avoir au moins un contrôle focalisable. Pour de nombreuses boîtes de dialogues, ce contrôle sera un bouton «&nbsp;Fermer&nbsp;», «&nbsp;OK&nbsp;» ou «&nbsp;Annuler.&nbsp;» En plus de cela, les boîtes de dialogue peuvent contenir n’importe quelle quantité d’éléments focalisables, même des formulaires ou d'autres composants conteneurs comme des onglets.
- Quand la boîte de dialogue s’affiche à l’écran, le focus clavier devrait être placé sur le contrôle focalisable par défaut de la boîte de dialogue. Ce contrôle dépend de la fonction des boîtes de dialogue. Pour les boîtes de dialogue ne fournissant qu’un texte simple, ce pourra être un bouton «&nbsp;OK&nbsp;». Pour les boîtes de dialogue contenant un formulaire, ce pourra être le premier champ à renseigner du formulaire.
- Pour la plupart des boîtes de dialogue, le comportement attendu est que l’ordre de tabulation de la boîte _tourne_, c’est-à-dire que le premier élément focalisable sera focalisé après que le dernier élément focalisable de la boîte de dialogue aura été atteint lorsque l’utilisateur tabule. En d’autres termes, l’ordre de tabulation doit être contenu par la boîte de dialogue.
- Si la boîte de dialogue peut être déplacée ou redimensionnée, assurez-vous que ces actions peuvent être exécutées par les utilisateurs de clavier tout comme les utilisateurs de souris. De la même façon, si une boîte de dialogue fournit certaines fonctionnalités, comme des barres d’outils ou des menus contextuels, celles-ci doivent également être accessibles et pouvoir être actionnées par les utilisateurs de clavier.
- Les boîtes de dialogue peuvent être modales ou non modales. Lorsqu’une boîte de dialogue _modale_ s’affiche à l’écran, il n’est pas possible d’interagir avec le reste du contenu de la page. En d’autres termes, l’UI principale de l’application ou le contenu de la page est considéré comme temporairement désactivé tant que la boîte de dialogue modale est affichée. Pour les boîtes de dialogue _non modales_ il est toujours possible d’interagir avec du contenu extérieur à la boîte lorsqu’elle est affichée. Pour les boîtes de dialogue non modales, il y devra toujours y avoir un raccourci clavier global permettant de déplacer le focus entre les boîtes de dialogue ouvertes et la page principale. Pour plus d’informations, lisez le guide [Gérer les dialogues modaux et non modaux](/fr/docs/ARIA/Guides_ARIA/Gérer_les_dialogues_modaux_et_non_modaux).

### Effets possibles sur les agents utilisateurs et les technologies d’assistance

Lorsque le rôle `dialog` est utilisé, l’agent utilisateur doit faire la chose suivante&nbsp;:

- Présenter l’élément comme une boîte de dialogue à l’API accessibilité du système d’exploitation.

Lorsque la boîte de dialogue est correctement labélisée et que le focus est déplacé vers un contrôle à l’intérieur de la boîte, les lecteurs d’écran devraient annoncer le rôle accessible du dialogue, son nom et éventuellement sa description avant d’annoncer l’élément qui a reçu le focus.

> **Note :** plusieurs points de vue existent sur la façon dont les technologies d’assistance devraient traiter cette technique. L’information fournie ci-dessus est l’une de ces opinions et n’est pas normative.

### Exemples

#### Exemple 1&nbsp;: une boîte de dialogue contenant un formulaire

```html
<div role="dialog" aria-labelledby="dialog1Title" aria-describedby="dialog1Desc">
    <h2 id="dialog1Title">Formulaire de souscription</h2>

    <p id="dialog1Desc">Nous ne partageons pas ces informations avec des tierces parties.</p>

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
            <label for="interests">Intérêts</label>
            <textarea id="interests"></textarea>
        </p>

        <p>
            <input type="checkbox" id="autoLogin" />
            <label for="autoLogin">Intérêts</label>
        </p>

        <p>
            <input type="submit" value="Enregistrer les informations"/>
            </p>
    </form>
</div>
```

#### Exemple 2&nbsp;: une boîte de dialogue basée sur un `Fieldset` comme contenu alternatif

Pour prendre en charge les navigateurs ou les produits de technologies d’assistance qui ne prennent pas ARIA en charge, il est également possible d’appliquer le balisage `dialog` à un élément `fieldset` comme contenu alternatif. Ainsi le titre de la boîte de dialogue sera toujours annoncé correctement&nbsp;:

```html
<fieldset role="dialog" aria-labelledby="dialog1Title" aria-describedby="dialog1Desc">
    <legend>
        <span id="dialog1Title">Vos informations personnelles ont correctement été actualisées.</span>
        <span id="dialog1Desc">Vous pouvez modifier vos informations personnelles à n’importe quel moment depuis la section « Compte utilisateur ».</span>
    </legend>

    <button>Fermer</button>
</fieldset>
```

#### Exemples concrets&nbsp;:

- [jQuery-UI Dialog](http://jqueryui.com/demos/dialog/)

### Notes

> **Note :** bien qu'il soit possible d’empêcher les utilisateurs de clavier de bouger le focus vers des éléments en dehors des boîtes de dialogues, les utilisateurs de lecteurs d’écran ont toujours la possibilité de parcourir ce contenu pratiquement en utilisant le curseur virtuel du lecteur d’écran. À cause de cela, les boîtes de dialogue sont considérées comme des cas spéciaux du rôle `application`&nbsp;: on s’attend à ce qu’elles soient parcourues avec le mode de navigation non-virtuel par les utilisateurs de lecteur d’écran.

### Attributs ARIA utilisés

- [dialog (en)](http://www.w3.org/TR/wai-aria/roles#dialog)
- [aria-labelledby (en)](http://www.w3.org/TR/wai-aria/states_and_properties#aria-labelledby)
- [aria-describedby (en)](http://www.w3.org/TR/wai-aria/states_and_properties#aria-describedby)

### Techniques ARIA connexes

- [Utiliser le rôle `alertdialog`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_alertdialog)

### Autres ressources
