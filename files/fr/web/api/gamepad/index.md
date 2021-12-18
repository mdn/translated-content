---
title: Gamepad
slug: Web/API/Gamepad
translation_of: Web/API/Gamepad
---
{{APIRef("Gamepad API")}}

L'interface **`Gamepad`** de l'[API Gamepad](/fr/docs/Web/API/Gamepad_API) définit une manette individuelle ou un autre contrôleur, autorisant l'accès à des informations telles que les boutons pressés, la position des axes et l'identifiant.

Un objet `Gamepad` peut être retourné de deux manières :

- Via la propriété `gamepad` des événements {{event("gamepadconnected")}} et {{event("gamepaddisconnected")}}.
- Ou en prenant n'importe quelle position dans le tableau retourné par la méthode {{domxref("Navigator.getGamepads()")}}.

## Propriétés

- {{domxref("Gamepad.axes")}} {{readonlyInline}}
  - : Un tableau représentant les contrôles avec les axes présents sur le dispositif (par exemple : les joysticks analogiques).
- {{domxref("Gamepad.buttons")}} {{readonlyInline}}
  - : Un tableau d'objets {{domxref("gamepadButton")}} représentant les boutons présents sur le dispositif.
- {{domxref("Gamepad.connected")}} {{readonlyInline}}
  - : Un booléen indiquant si la manette est toujours connectée au système.
- {{domxref("Gamepad.displayId")}} {{readonlyInline}}
  - : Retourne {{domxref("VRDisplay.displayId")}} associé à {{domxref("VRDisplay")}} — Le VRDisplay dont la manette contrôle la scène affichée.
- {{domxref("Gamepad.id")}} {{readonlyInline}}
  - : Un {{domxref("DOMString")}} contenant l'information d'identification de la manette.
- {{domxref("Gamepad.index")}} {{readonlyInline}}
  - : Un entier qui s'auto-incrémente pour être unique à chaque dispositif actuellement connecté au système.
- {{domxref("Gamepad.mapping")}} {{readonlyInline}}
  - : Une chaîne de caractères indiquant si le navigateur a remappé les contrôles du dispositif à un layout connu.
- {{domxref("Gamepad.timestamp")}} {{readonlyInline}}
  - : Un {{domxref("DOMHighResTimeStamp")}} représentant la dernière fois que les données pour cette manette a été mise à jour. _Noter que cette propriété n'est pas supportée partout._

### Extensions expérimentales apportées à `Gamepad`

Les interfaces suivantes sont définies dans la spécification {{SpecName("GamepadExtensions")}} et fournissent un accès à des fonctionnalités expérimentales tels que les retours haptiques et informations de position des contrôleurs WebVR.

- {{domxref("Gamepad.hand")}} {{readonlyinline}}
  - : Une énumération qui définit dans quelle main le contrôleur est tenue (ou dans laquelle il est probablement tenue).
- {{domxref("Gamepad.hapticActuators")}} {{readonlyinline}}
  - : Un tableau contenant des objets {{domxref("GamepadHapticActuator")}} dont chacun représente un matériel disponible pour le contrôleur pour les retours haptiques.
- {{domxref("Gamepad.pose")}} {{readonlyinline}}
  - : Un objet {{domxref("GamepadPose")}} qui représente la position et l'orientation d'un contrôleur WebVR dans l'espace en trois dimensions.

## Exemples

```js
window.addEventListener("gamepadconnected", function(event) {
  console.log("Contrôleur connecté à %d: %s. %d boutons, %d axes.",
  event.gamepad.index, event.gamepad.id,
  event.gamepad.buttons.length, event.gamepad.axes.length);
});
```

## Spécifications

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">Statut</th>
      <th scope="col">Commentaire</th>
    </tr>
    <tr>
      <td>
        {{SpecName("Gamepad", "#gamepad-interface", "Gamepad")}}
      </td>
      <td>{{Spec2("Gamepad")}}</td>
      <td>Première définition</td>
    </tr>
    <tr>
      <td>
        {{SpecName('WebVR', '#gamepad-getvrdisplays-attribute', 'displayId')}}
      </td>
      <td>{{Spec2("WebVR")}}</td>
      <td>
        <p>
          Définit la propriété {{domxref("Gamepad.displayId")}}.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName("GamepadExtensions", "#partial-gamepad-interface", "Gamepad extensions")}}
      </td>
      <td>{{Spec2("GamepadExtensions")}}</td>
      <td>Définit les extensions expérimentales</td>
    </tr>
  </tbody>
</table>

## Compatibilités des navigateurs

{{Compat("api.Gamepad")}}

## Voir aussi

- [Utilisation de l'API Gamepad](/fr/docs/Web/Guide/API/Gamepad)
- [API Gamepad](/fr/docs/Web/API/Gamepad_API)
