---
title: Utilisation du rôle alertdialog
slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alertdialog_role
tags:
  - ARIA
  - Accessibilité
  - Développement Web
  - Rôle
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_alertdialog_role
original_slug: Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_role_alertdialog
---
### Description

Cette technique présente l’utilisation du rôle [`alertdialog`](http://www.w3.org/TR/2009/WD-wai-aria-20091215/roles#alertdialog) role.

Le rôle `alertdialog` est utilisé pour notifier à l’utilisateur des informations urgentes qui requièrent son attention immédiate. Comme le nom l’indique, `alertdialog` est un type de boîte de dialogue. Cela signifie que la plupart des instructions fournies à propos de l’[utilisation du rôle `dialog`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_dialog_role) s’appliquent également au rôle `alertdialog`&nbsp;:

- La boîte de dialogue d’alerte doit toujours avoir un nom accessible (attribué à l’aide de `aria-labelledby` ou de `aria-label`) et, dans la plupart des cas, le texte d’alerte sera marqué comme étant la description accessible de la boîte de dialogue d’alerte (définie avec de l’attribut `aria-describedby`).
- Contrairement aux alertes classiques, une boîte de dialogue d’alerte doit avoir au moins un contrôle pouvant recevoir le focus et ce dernier doit s’y placer lors de l’affichage de la boîte de dialogue. Généralement les boîtes de dialogues d’alertes ont au moins un bouton de confirmation, de fermeture ou d’annulation qui peut être utilisé pour recevoir le focus. De plus, les boîtes de dialogues d’alerte peuvent avoir d’autres contrôles interactifs tels que des champs de saisie, des onglets ou des cases à cocher. Le contrôle sur lequel placer le focus dépendra de l’objet de la boîte de dialogue.
- L’ordre de tabulation dans la boite de dialogue de l’alerte doit boucler.

La différence avec les boîtes de dialogues classiques réside dans le fait que le rôle `alertdialog` devrait uniquement être utilisé lorsque des alertes, des erreurs ou des avertissements ont lieu. En d’autres termes, lorsque les informations et les contrôles d’une boîte de dialogue nécessitent l’attention immédiate de l’utilisateur il est préférable d’utiliser le rôle `alertdialog` plutôt que `dialog.` Il revient au développeur de faire la distinction entre les deux.

Du fait de sa nature urgente, les boîtes de dialogues d’alertes doivent toujours être modales.

> **Note :** ce rôle ne devrait être utilisé que pour des messages d’alertes associés à des contrôles interactifs. Si une boîte de dialogue d’alerte ne comporte que du contenu statique et qu’elle ne possède absolument aucun contrôle interactif, `alertdialog` n’est probablement pas le rôle le plus judicieux à utiliser. Le rôle `alert` est plus adapté pour ce cas (comme décrit dans l’article sur la technique d’[utilisation du rôle `alert`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_role_alert)).

### Effets possibles sur les agents utilisateurs et les technologies d’assistance

Lorsque le rôle `alertdialog` est utilisé, l’agent utilisateur devrait suivre les étapes suivantes&nbsp;:

- Présenter l’élément comme une boîte de dialogue à l’API d’accessibilité du système d’exploitation.
- Déclencher un évènement d’alerte accessible à l’aide l’API d’accessibilité du système d’exploitation si elle le prend en charge.

Lorsque la boîte de dialogue de l’alerte apparaît, les lecteurs d’écran devraient annoncer l’alerte.

Lorsque la boîte de dialogue est correctement labélisée et que le focus se place sur un contrôle qu’elle contient, les lecteurs d’écran devraient annoncer le rôle accessible de la boîte de dialogue, son nom et éventuellement sa description, avant d’annoncer l’élément qui a reçu le focus.

> **Note :** il existe plusieurs points de vue sur la façon dont les technologies d’assistance devraient traiter cette technique. L’information fournie ci-dessus est l’une de ces opinions et n’est pas normative.

### Exemples

#### Exemple 1&nbsp;: Une boîte de dialogue d’alerte

L’extrait de code ci-dessous présente la façon de baliser une boîte de dialogue d’alerte qui ne contient qu’un message et un bouton `OK`.

```html
<div role="alertdialog" aria-labelledby="dialog1Titre" aria-describedby="dialog1Desc">
  <div role="document" tabindex="0">
    <h2 id="dialog1Titre">Votre session est sur le point d’expirer</h2>
    <p id="dialog1Desc">Pour prolonger votre session, cliquez sur le bouton OK</p>
    <button>OK</button>
  </div>
</div>
```

#### Exemples concrets&nbsp;:

À définir

### Notes

### Attributs ARIA utilisés

- [alertdialog](http://www.w3.org/TR/wai-aria/roles#dialog)&nbsp;;
- [aria-labelledby](http://www.w3.org/TR/wai-aria/states_and_properties#aria-labelledby)&nbsp;;
- [aria-describedby](http://www.w3.org/TR/wai-aria/states_and_properties#aria-describedby).

### Techniques ARIA connexes

- [Utiliser le rôle `dialog`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_dialog)&nbsp;;
- [Utiliser le rôle `alert`](/fr/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_rôle_alert).
