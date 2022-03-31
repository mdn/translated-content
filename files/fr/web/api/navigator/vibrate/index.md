---
title: Navigator.vibrate()
slug: Web/API/Navigator/vibrate
translation_of: Web/API/Navigator/vibrate
---
{{APIRef("Vibration API")}}

La méthode **`Navigator.vibrate()`** active le module matériel de vibration de l'appareil, si ce dernier est présent. Si l'appareil ne supporte pas les vibrations, cette méthode n'a aucun effet. Si une série de vibration est déjà en cours, la précédente série est stopée et la nouvelle série est lancée.

Si la méthode ne peut pas vibrer en raison d'arguments invalides, elle retournera `false`, sinon elle retournera `true`. Si la série contient de trop longue vibration, elle sera tronqué; la longueur maximale dépend de l'implémentation.

## Syntaxe

    var successBool = window.navigator.vibrate(motif);

- `motif`
  - : Fournit un motif de vibration et d'intervalle de pause. Chaque valeur indique un nombre de milisecondes de vibration ou de pause, en alternance. Vous pouvez fournir une valeur (pour vibrer une fois) ou un tableau de valeur (vibration, pause, vibration ...). Voir l'[API Vibration](/fr/docs/Web/API/Vibration_API) pour plus de détails.

Passer la valeur 0, un tableau vide, ou un tableau de zéro arrêtera toutes les vibrations.

## Exemple

```js
window.navigator.vibrate(200); // vibre pendant 200ms
window.navigator.vibrate([100,30,100,30,100,30,200,30,200,30,200,30,100,30,100,30,100]); // Vibre 'SOS' en Morse.
```

## Spécifications

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Specification</th>
      <th scope="col">Status</th>
      <th scope="col">Comment</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName('Vibration API')}}</td>
      <td>{{Spec2('Vibration API')}}</td>
      <td>
        <p>
          Linked to spec is the latest editor's draft; W3C version is a REC.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("api.Navigator.vibrate")}}

## Voir aussi

- [Vibration API](/fr/docs/Web/API/Vibration_API)
