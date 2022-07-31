---
title: Utiliser le rôle link
slug: Web/Accessibility/ARIA/Roles/link_role
tags:
  - ARIA
  - Accessibilité
  - Rôle
translation_of: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_link_role
original_slug: Web/Accessibility/ARIA/ARIA_Techniques/Using_the_link_role
---
### Description

Cette technique présente l’utilisation du rôle [link](http://www.w3.org/TR/wai-aria/roles#link) et décrit les effets produits sur les navigateurs et les technologies d’assistance.

Le rôle `link` est utilisé pour identifier un élément qui crée un hyperlien vers une ressource qui peut être dans l’application ou à l’extérieur. Lorsque ce rôle est ajouté à un élément, la tabulation peut être utilisée pour donner le focus au lien et la barre d’espace ou la touche Entrée peuvent exécuter le lien.

L’attribut [tabindex](http://www.w3.org/TR/wai-aria-practices/#focus_tabindex) peut éventuellement être utilisé avec ce rôle pour spécifier directement la position de l’élément dans l’ordre de tabulation.

### Effets possibles sur les agents utilisateurs et les technologies d’assistance

Lorsque le rôle `link` est ajouté à un élément, ou qu’un élément possédant ce rôle devient visible, l’agent utilisateur devrait suivre les étapes suivantes&nbsp;:

- Présenter l’élément comme un lien à l’API accessibilité du système d’exploitation.
- Déclencher un événement lien accessible à l’aide de l’API d’accessibilité du système d’exploitation si elle le prend en charge.

Les technologies d’assistance devraient être à l’écoute de tels événements et les notifier à l’utilisateur en conséquence&nbsp;:

- Les lecteurs d'écran devraient annoncer le texte du lien ou son label lorsque l'élément avec le rôle `link`reçoit le focus, en plus du fait ce que c'est un lien. Les liens ARIA devraient être intégré dans la fonction « lister les liens » (_List Links_) des lecteurs d'écran de la même façon que les liens ordinaires, et les actions dans cette liste de dialogue, tels que « Activer le lien » ou « Déplacer le lien », devraient se comporter de la meme façon qu'avec des liens ordinaires.
- Les loupes d’écran devraient agrandir le lien.

> **Note :** il existe plusieurs points de vue sur la façon dont les technologies d’assistance devraient traiter cette technique. L’information fournie ci-dessus est l’une de ces opinions et n’est pas normative.

### Exemples

#### Exemple 1&nbsp;: **Ajoute le rôle dans le code HTML**

L’extrait de code ci-dessous montre comment le rôle `link` est ajouté dans le code source HTML.

```html
<div role=”link”>Un lien</div>
```

#### **Exemple 2&nbsp;: Lien accessible créé depuis une application à l'aide d'un \<span>**

```html
<script type="text/javascript">
sap = {ui:{keycodes:{SPACE:32, ENTER:13 }}};
//gère les clics et les événement clavier sur le lien
function navigateLink(evt) {
    if (evt.type=="click" ||
        evt.keyCode == sap.ui.keycodes.SPACE ||
        evt.keyCode == sap.ui.keycodes.ENTER) {
        var ref = evt.target != null ? evt.target : evt.srcElement;
        if (ref) window.open(ref.getAttribute("href"),"_blank");
    }
}
</script>

<body role="application">

    <h3>Lien simple créé avec un <span></h3>
    <span href="http://www.w3c.org" onkeydown="navigateLink(event)" onclick="navigateLink(event)" tabindex="0" id="link1" role="link" class="link">
      Activez ce lien en appuyant sur la barre d’espace ou la touche Entrée
    </span>
</body>
```

#### Exemples concrets&nbsp;:

- <http://codetalks.org/source/widgets/link/link.html>
- <http://codetalks.org/source/widgets/link/link.sample.html>

### Notes

Si l'activation du lien déclenche une action mais ne déplace pas le focus du navigateur ou que cela ouvre une nouvelle page, vous devriez considérer l'utilisation du rôle [button](http://www.w3.org/TR/wai-aria/roles#button) au lieu du rôle `link`.

### Attributs ARIA utilisés

- [`link`](http://www.w3.org/TR/wai-aria/roles#link)

### Techniques ARIA connexes

- Rôle [button](http://www.w3.org/TR/wai-aria/roles#button).

### Autres ressources

- Bonnes pratiques ARIA - Rôle `Link`&nbsp;: [#link](http://www.w3.org/TR/wai-aria-practices/#link)
