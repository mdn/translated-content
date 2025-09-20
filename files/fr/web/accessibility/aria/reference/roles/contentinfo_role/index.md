---
title: "ARIA : rôle contentinfo"
short-title: contentinfo
slug: Web/Accessibility/ARIA/Reference/Roles/contentinfo_role
l10n:
  sourceCommit: c1564acf160ef4b320fb7b89ab65211b9c50cf1b
---

Le rôle `contentinfo` définit un pied de page, contenant des informations d'identification telles que des informations sur le droit d'auteur, des liens de navigation et des déclarations de confidentialité, que l'on trouve sur chaque document d'un site. Cette section est communément appelée pied de page.

```html
<div role="contentinfo">
  <h2>Pied de page</h2>
  <!-- contenu du pied de page -->
</div>
```

Ceci est un pied de page de site web. L'utilisation de l'élément {{HTMLElement('footer')}} à la place est recommandée&nbsp;:

```html
<footer>
  <h2>Pied de page</h2>
  <!-- contenu du pied de page -->
</footer>
```

## Description

Le rôle `contentinfo` est [un repère](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#3._rôles_de_repères) utilisé pour identifier un pied de page. Les repères peuvent être utilisés par les technologies d'assistance pour identifier et naviguer rapidement vers de grandes sections du document. Les pages ne doivent inclure qu'un seul rôle de repère `contentinfo` de niveau supérieur par page.

Chaque page ne doit inclure qu'un seul repère `contentinfo`, créé soit en utilisant l'élément {{HTMLElement('footer')}} soit en déclarant `role="contentinfo"`. Les repères `contentinfo` présents dans un contenu intégré via {{HTMLElement('iframe')}} ne comptent pas dans cette limite.

> [!NOTE]
> L'utilisation de l'élément {{HTMLElement('footer')}} communiquera automatiquement qu'une section a un rôle de `contentinfo`. Les développeurs devraient toujours préférer utiliser le bon élément HTML sémantique plutôt que d'utiliser ARIA, en s'assurant de {{HTMLElement('footer#accessibility', 'test for known issues')}} dans VoiceOver.

## Exemples

```html
<body>
  <!-- autre contenu de page -->

  <div role="contentinfo">
    <h2>MDN Web Docs</h2>
    <ul>
      <li><a href="#">Technologies du Web</a></li>
      <li><a href="#">Apprendre le développement Web</a></li>
      <li><a href="#">À propos du MDN</a></li>
      <li><a href="#">Retour d'information</a></li>
    </ul>
    <p>
      © 2005-2012 Mozilla et contributeurs individuels. Le contenu est
      disponible sous <a href="#">ces licences</a>.
    </p>
  </div>
</body>
```

## Problèmes d'accessibilité

### Utiliser avec parcimonie

[Les rôles de repère](/fr/docs/Web/Accessibility/ARIA/Reference/Roles#3._rôles_de_repères) sont destinés à identifier de plus grandes sections globales du document. L'utilisation de trop de rôles de repère peut créer du «&nbsp;bruit&nbsp;» dans les lecteurs d'écran, rendant difficile la compréhension de la mise en page globale de la page.

### Un repère `contentinfo` par page

#### L'élément `<body>`

Il ne devrait y avoir qu'un seul repère `contentinfo` par document, utilisé comme le descendant immédiat de l'élément {{HTMLElement('body')}}.

#### Les grands pieds de page

Nichez pas d'autres éléments {{HTMLElement('footer')}} ou repères `contentinfo` supplémentaires à l'intérieur du pied de page du document. Utilisez plutôt d'autres [éléments de sectionnement de contenu](/fr/docs/Web/HTML/Reference/Elements#sectionnement_du_contenu).

### Étiquetage des repères

#### Repères multiples

S'il y a plus d'un rôle de repère `contentinfo` ou élément {{HTMLElement('footer')}} dans un document, fournissez une étiquette avec l'attribut [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) pour chaque repère. Cette étiquette permettra aux utilisateurs de technologies d'assistance de comprendre rapidement l'objectif de chaque repère.

```html
<body>
  …

  <article>
    <h2>Pad thaï quotidien</h2>
    <!-- contenu de l'article -->
    <footer aria-label="Métadonnées du Pad thaï quotidien">
      <p>
        Publié le <time datetime="2021-09-23 12:17">23 septembre</time> par
        <a href="#">Lisa</a>.
      </p>
    </footer>
  </article>

  …

  <footer aria-label="Pied de page">
    <!-- contenu du pied de page -->
  </footer>
</body>
```

#### Descriptions redondantes

Les lecteurs d'écran annonceront le type de rôle du repère. De ce fait, vous n'avez pas besoin de décrire ce qu'est le repère dans son étiquette. Par exemple, une déclaration de `role="contentinfo"` avec un `aria-label="Pied de page"` peut être annoncée de manière redondante comme, «&nbsp;pied de page contentinfo&nbsp;».

## Bonnes pratiques

### Préférer HTML

Lorsqu'il est un descendant immédiat de l'élément {{HTMLElement('body')}}, l'utilisation de l'élément {{HTMLElement('footer')}} communiquera automatiquement qu'une section a un rôle de `contentinfo` (sauf pour {{HTMLElement('footer#accessibility', 'un problème connu')}} dans VoiceOver). Si possible, préférez utiliser `<footer>` à la place. Notez qu'un élément `footer` imbriqué dans un `article`, `aside`, `main`, `nav` ou `section` n'est pas considéré comme `contentinfo`.

### Avantages supplémentaires

Certaines technologies, telles que les extensions de navigateur, peuvent générer des listes de tous les rôles de repère présents sur une page, permettant aux utilisateur·ice·s ne disposant pas de lecteurs d'écran d'identifier et de naviguer rapidement vers de grandes sections du document.

- [Extension de navigateur Landmarks <sup>(angl.)</sup>](https://matatk.agrip.org.uk/landmarks/)

## Spécifications

{{Specifications}}

## Voir aussi

- L'élément HTML {{HTMLElement('footer')}}
- [Utiliser des sections HTML et des plans](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [Utiliser des repères WAI-ARIA - 2013 | The Paciello Group <sup>(angl.)</sup>](https://www.tpgi.com/using-wai-aria-landmarks-2013/)
- [Repères accessibles | scottohara.me <sup>(angl.)</sup>](https://www.scottohara.me/blog/2018/03/03/landmarks.html)
- [Mise à jour de l'élément Footer | HTML5 Doctor <sup>(angl.)</sup>](https://html5doctor.com/the-footer-element-update/)
