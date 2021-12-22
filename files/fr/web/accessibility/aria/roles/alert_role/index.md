---
title: Utilisation du rôle alert
slug: Web/Accessibility/ARIA/Roles/alert_role
tags:
  - ARIA
  - Accessibilité
  - Rôle
  - À relire
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alert_role
original_slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alert_role
---
### Description

Cette technique présente l’utilisation du rôle [`alert` (en)](http://www.w3.org/TR/wai-aria/roles#alert) et décrit les effets produits sur les navigateurs et les technologies d’assistance.

Le rôle `alert` est utilisé pour communiquer un message important et généralement avec une notion d'urgence à l’utilisateur. Lorsque ce rôle est ajouté à un élément, le navigateur émettra un événement d'alerte accessible aux produits de technologie d’assistance qui pourront alors le notifier à l’utilisateur. Le rôle `alert` est le plus utile lorsqu’il s’agit d’attirer l’attention de l’utilisateur, par exemple si :

- Une valeur non valide a été saisie dans un champ de formulaire ;
- La session d’un utilisateur est sur le point d’expirer ;
- La connexion au serveur a été interrompue, les modifications locales ne seront pas sauvegardées.

De fait de sa nature intrusive, le rôle `alert` doit être utilisé avec parcimonie et uniquement dans les situations où l’attention de l’utilisateur est immédiatement requise. Les changements dynamiques de moindre urgence devraient utiliser une méthode moins agressive, telle que `aria-live="polite"` ou autres rôles de zone live.

### Effets possibles sur les agents utilisateurs et les technologies d’assistance

Lorsque le rôle `alert` est ajouté à un élément, ou qu’un tel élément devient visible, l’agent utilisateur devrait suivre les étapes suivantes :

- Présenter l’élément ayant un rôle d’alerte à l’API d’accessibilité du système d’exploitation ;
- Déclencher un événement d'alerte accessible à l’aide l’API d’accessibilité du système d’exploitation si elle le prend en charge.

Les technologies d’assistance devraient être à l’écoute de tels évènements et les notifier à l’utilisateur en conséquence :

- Les lecteurs d’écran peuvent interrompre la sortie en cours (qu’elle soit vocale ou en braille) et immédiatement annoncer ou afficher le message d’alerte ;
- Les loupes ou agrandisseurs d’écran peuvent indiquer qu’une alerte est survenue et quel en est le texte.

> **Note :** plusieurs points de vue existent sur la façon dont les technologies d’assistance devraient traiter cette technique. L’information fournie ci-dessus est l’une de ces opinions et n’est pas normative.

### Exemples

#### Exemple 1 : Ajout du rôle dans le code HTML

L’extrait de code ci-dessous montre comment le rôle `alert` est directement ajouté dans le code source HTML. Au moment où l’élément finit de se charger, le lecteur d’écran doit être notifié de l’alerte. Si l’élément était dans le code source original lorsque la page s’est chargée, le lecteur d’écran annonce immédiatement l’erreur après la lecture du titre de la page.

```html
<h2 role="alert">Votre formulaire ne peut être soumis à cause de 3 erreurs de validation.</h2>
```

#### Exemple 2 : Ajout dynamique d'un élément avec le rôle `alert`

Cet extrait de code crée dynamiquement un élément avec un rôle `alert` et l’ajoute à la structure du document.

```js
var myAlert = document.createElement("p");
myAlert.setAttribute("role", "alert");

var myAlertText = document.createTextNode("Vous devez accepter nos conditions d’utilisation pour créer un compte.");
myAlert.appendChild(myAlertText);
document.body.appendChild(myAlertText);
```

**Note :** le même résultat peut être obtenu avec moins de code en utilisant une bibliothèque de scripts telle que *jQuery* :

```js
$("<p role='alert'>Vous devez accepter nos conditions d’utilisation pour créer un compte.</p>").appendTo(document.body);
```

#### Exemple 3 : Ajout d'un rôle `alert` à un élément existant

Parfois, il peut être utile d’ajouter un rôle `alert` à un élément déjà visible dans la page plutôt que de créer un nouvel élément. Ceci permet au développeur de répéter une information devenue plus pertinente ou urgente pour l’utilisateur. Par exemple, un contrôle de formulaire peut avoir des instructions sur les valeurs attendues. Si une valeur différente est saisie, `role="alert"` peut être ajouté au texte de l’instruction pour que le lecteur d’écran l’annonce comme une alerte. L'extrait de pseudo-code ci-dessous illustre cette approche :

```html
<p id="formInstruction">Vous devez cocher au moins trois options</p>
```

```js
// Lorsque l’utilisateur essaye de soumettre le formulaire avec moins de 3 cases cochées :
document.getElementById("formInstruction").setAttribute("role", "alert");
```

#### Exemple 4 : Rendre visible un élément avec le rôle `alert`

Si un élément possède déjà `role="alert"` et qu’il est initialement caché par des règles CSS, le rendre visible déclenchera l’alerte comme si elle venait juste d’être ajoutée à la page. Cela signifie qu’une alerte existante peut être « réutilisée » plusieurs fois.

**Note :** dans la plupart des cas cette approche n’est pas recommandée, parce qu'il n'est pas idéal de masquer une erreur ou un texte d’alerte qui n’est pas applicable à ce moment précis. Les utilisateurs de technologies d’assistance plus anciennes pourraient toujours percevoir le texte d’alerte même si l’alerte ne s’applique pas à ce moment, faisant croire de façon erronée aux utilisateurs à l’existence d’un problème.

```css
.hidden {
  display:none;
  }
```

```html
<p id="expirationWarning" role="alert" class="hidden">Votre session expirera dans 2 minutes</p>
```

```js
// suppression de la classe 'hidden' rend l’élément visible, ce qui entraînera l’annonce de l’alerte par le lecteur d’écran :
document.getElementById("expirationWarning").className = "";
```

### Notes

- L’utilisation du rôle `alert` sur un élément implique que cet élément a l’attribut `aria-live="assertive"` ;
- Le rôle `alert` ne devrait être utilisé que pour du contenu texte statique. L’élément sur lequel on utilise le rôle `alert` ne devrait pas pouvoir recevoir le focus, car les lecteurs d’écran annonceront automatiquement l’alerte où que se trouve le focus clavier ;
- Si une alerte fournit également des contrôles interactifs – tels que des contrôles de formulaire qui permettraient à l’utilisateur de rectifier une erreur, ou un bouton `OK` pour annuler l’alerte – le rôle [`alertdialog`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_alertdialog) est préférable.

### Attributs ARIA utilisés

- [alert (en)](http://www.w3.org/TR/wai-aria/roles#alert)

### Techniques ARIA connexes

- [Utiliser le rôle `alertdialog`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_alertdialog) ;
- [Utiliser la propriété `aria-invalid`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_la_propriété_aria-invalid).

### Autres ressources

- Guide des bonnes pratiques ARIA - Rôle `Alert` : [http://www.w3.org/TR/wai-aria-practices/#alert (en)](http://www.w3.org/TR/wai-aria-practices/#alert)
