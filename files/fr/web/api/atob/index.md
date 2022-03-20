---
title: window.atob
slug: Web/API/atob
tags:
  - API
  - DOM
  - Reference
  - WindowOrWorkerGlobalScope
  - atob
translation_of: Web/API/WindowOrWorkerGlobalScope/atob
original_slug: Web/API/WindowOrWorkerGlobalScope/atob
---
{{APIRef ("HTML DOM")}}
La fonction `WindowOrWorkerGlobalScope.atob()` décode une chaîne de données qui a été codée en utilisant le codage en base 64. Vous pouvez utiliser la méthode {{domxref("WindowOrWorkerGlobalScope.btoa","btoa()")}} pour encoder et transmettre des données qui pourraient causer des problèmes de communication, puis les transmettre et utiliser la méthode atob() pour décoder les données . Par exemple, vous pouvez coder, transmettre et décoder des caractères de contrôle tels que les valeurs ASCII 0 à 31.

Pour une utilisation avec des chaînes Unicode ou UTF-8, voir [cette note sur l'encodage et le décodage Base64](/fr/docs/D%C3%A9coder_encoder_en_base64) et [cette note sur btoa()](/fr-FR/docs/Web/API/window.btoa#Unicode_Strings).

## Syntaxe

    var donneesDecodees = scope.atob(donneesEncodees);

### Déclenche

Déclenche une {{jsxref("DOMException")}} si la longueur de la chaîne passée en entrée n'est pas un multiple de 4.

## Exemple

    donneesEncodees = window.btoa('Salut, monde'); // encode une chaîne
    donneesDecodees = window.atob(donneesEncodees); // décode la chaîne

## Spécifications

| Spécification                                                                                                            | Statut                           | Commentaire                                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'webappapis.html#dom-btoa', 'WindowOrWorkerGlobalScope.atob()')}} | {{Spec2('HTML WHATWG')}} | Méthode déplacée dans le mixin `WindowOrWorkerGlobalScope` dans la spéc la plus récente.                                               |
| {{SpecName('HTML WHATWG', '#dom-windowbase64-atob', 'WindowBase64.atob()')}}                     | {{Spec2('HTML WHATWG')}} | Pas de changement depuis l'instantané le plus récent {{SpecName("HTML5.1")}}.                                                 |
| {{SpecName('HTML5.1', '#dom-windowbase64-atob', 'WindowBase64.atob()')}}                         | {{Spec2('HTML5.1')}}     | Instantané de {{SpecName("HTML WHATWG")}}. Pas de changement.                                                                 |
| {{SpecName("HTML5 W3C", "#dom-windowbase64-atob", "WindowBase64.atob()")}}                     | {{Spec2('HTML5 W3C')}}     | Instantané de {{SpecName("HTML WHATWG")}}. Création de `WindowBase64` (les propriétés se trouvaient sur la cible avant cela). |

## Compatibilité des navigateurs

{{Compat("api.WindowOrWorkerGlobalScope.atob")}}

## Voir aussi

- [Base64 encoding and decoding](/Web/API/WindowBase64/Base64_encoding_and_decoding)
- [Les URL de `données`](/fr/docs/Web/HTTP/Basics_of_HTTP/Data_URIs)
- {{domxref("WindowOrWorkerGlobalScope.btoa","window.btoa()")}}
- [Components.utils.importGlobalProperties](/fr-FR/docs/Components.utils.importGlobalProperties)
