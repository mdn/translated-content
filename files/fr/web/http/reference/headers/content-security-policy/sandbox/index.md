---
title: "Content-Security-Policy : directive sandbox"
short-title: sandbox
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/sandbox
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`sandbox`** active un bac à sable (<i lang="en">sandbox</i> en anglais) pour les ressources demandées, similaire à l'attribut [`sandbox`](/fr/docs/Web/HTML/Reference/Elements/iframe#sandbox) des éléments HTML {{HTMLElement("iframe")}}.
Elle applique des restrictions aux actions d'une page, dont le fait d'empêcher les fenêtres intrusives (<i lang="en">popups</i> en anglais) et l'exécution de greffons et de scripts et de créer une contrainte de même origine.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Version de CSP</th>
      <td>1.1 / 2</td>
    </tr>
    <tr>
      <th scope="row">Type de directive</th>
      <td>{{Glossary("Document directive", "Directive de document")}}</td>
    </tr>
    <tr>
      <th colspan="2" scope="row">
        Cette directive n'est pas prise en charge dans l'élément HTML {{HTMLElement("meta")}} ou par l'en-tête {{HTTPHeader("Content-Security-Policy-Report-Only")}}.
      </th>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Security-Policy: sandbox;
Content-Security-Policy: sandbox <value>;
```

Où `<value>` peut optionnellement être une valeur parmi&nbsp;:

- `allow-downloads`
  - : Permet de télécharger des fichiers via un élément HTML {{HTMLElement("a")}} ou {{HTMLElement("area")}} avec l'attribut [`download`](/fr/docs/Web/HTML/Reference/Elements/a#download), ainsi que par la navigation qui mène au téléchargement d'un fichier.
    Cela fonctionne indépendamment du fait que l'utilisateur·ice ait cliqué sur le lien ou que le code JS l'ait initié sans interaction de l'utilisateur·ice.
- `allow-forms`
  - : Permet à la page de soumettre des formulaires. Si ce mot-clé n'est pas utilisé, le formulaire sera affiché normalement, mais sa soumission ne déclenchera pas la validation des entrées, l'envoi des données à un serveur web ou la fermeture d'une boîte de dialogue.
- `allow-modals`
  - : Permet à la page d'ouvrir des fenêtres bloquantes avec {{DOMxRef("Window.alert()")}}, {{DOMxRef("Window.confirm()")}}, {{DOMxRef("Window.print()")}} et {{DOMxRef("Window.prompt()")}}, tandis que l'ouverture d'un {{HTMLElement("dialog")}} est autorisée indépendamment de ce mot-clé. Cela permet également à la page de recevoir l'évènement {{DOMxRef("BeforeUnloadEvent")}}.
- `allow-orientation-lock`
  - : Permet à la ressource de [verrouiller l'orientation de l'écran](/fr/docs/Web/API/Screen/lockOrientation).
- `allow-pointer-lock`
  - : Permet à la page d'utiliser [l'API de verrouillage du pointeur](/fr/docs/Web/API/Pointer_Lock_API).
- `allow-popups`
  - : Permet les fenêtres intrusives (créées, par exemple, par {{DOMxRef("Window.open()")}} ou `target="_blank"`).
    Si ce mot-clé n'est pas utilisé, l'affichage des fenêtres intrusives échouera silencieusement.
- `allow-popups-to-escape-sandbox`
  - : Permet à un document en bac à sable d'ouvrir de nouvelles fenêtres sans lui imposer les restrictions du bac à sable. Cela permettra, par exemple, à une publicité tierce d'être sécurisée dans un bac à sable sans imposer les mêmes restrictions à la page vers laquelle la publicité renvoie.
- `allow-presentation`
  - : Permet aux intégrateurs de contrôler si un cadre intégré peut démarrer une [session de présentation](/fr/docs/Web/API/PresentationRequest).
- `allow-same-origin`
  - : Permet à une ressource en bac à sable de conserver son {{Glossary("origin", "origine")}}.
    Une ressource en bac à sable est autrement traitée comme provenant d'une [origine opaque](/fr/docs/Glossary/Origin#origine_opaque), ce qui garantit qu'elle échouera toujours aux vérifications de la {{Glossary("same-origin policy", "politique de même origine")}}, et donc ne pourra pas accéder à [`localstorage` et `document.cookie`](/fr/docs/Web/Security/Defenses/Same-origin_policy#accès_au_stockage_de_données_inter-origines) et à certaines API JavaScript.
    L'en-tête {{HTTPHeader("Origin")}} des ressources en bac à sable sans le mot-clé `allow-same-origin` est `null`.
- `allow-scripts`
  - : Permet à la page d'exécuter des scripts (mais pas de créer des fenêtres intrusives). Si ce mot-clé n'est pas utilisé, cette opération n'est pas autorisée.
- `allow-storage-access-by-user-activation` {{Experimental_Inline}}
  - : Permet à la ressource de demander l'accès aux capacités de stockage du parent avec [l'API d'accès au stockage](/fr/docs/Web/API/Storage_Access_API).
- `allow-top-navigation`
  - : Permet à la ressource de naviguer dans le contexte de navigation de niveau supérieur (celui nommé `_top`).
- `allow-top-navigation-by-user-activation`
  - : Permet à la ressource de naviguer dans le contexte de navigation de niveau supérieur, mais uniquement si cela est initié par un geste de l'utilisateur·ice.
- `allow-top-navigation-to-custom-protocols`
  - : Permet les navigations vers des protocoles non-`http` intégrés au navigateur ou [enregistrés par un site web](/fr/docs/Web/API/Navigator/registerProtocolHandler). Cette fonctionnalité est également activée par les mots-clés `allow-popups` ou `allow-top-navigation`.

> [!NOTE]
> Les valeurs `allow-top-navigation` et les valeurs associées n'ont de sens que pour les documents intégrés (comme les iframes enfants). Pour les documents autonomes, ces valeurs n'ont aucun effet, car le contexte de navigation de niveau supérieur est le document lui-même.

## Exemples

```http
Content-Security-Policy: sandbox allow-scripts;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- L'attribut [`sandbox`](/fr/docs/Web/HTML/Reference/Elements/iframe#sandbox) sur les éléments HTML {{HTMLElement("iframe")}}
