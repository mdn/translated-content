---
title: 'Feature-Policy: accelerometer'
slug: Web/HTTP/Headers/Feature-Policy/accelerometer
tags:
  - Accéléromètre
  - Directive
  - Feature Policy
  - Feature-Policy
  - HTTP
  - Reference
translation_of: Web/HTTP/Headers/Feature-Policy/accelerometer
---
{{HTTPSidebar}} {{SeeCompatTable}}

La directive `accelerometer` de l'en-tête HTTP {{HTTPHeader('Feature-Policy')}} contrôle la possibilité pour le document courant de recueillir des informations à propos de l'accélération de l'appareil au moyen de l'interface {{domxref('Accelerometer')}}.

## Syntaxe

    Feature-Policy: accelerometer <listePermissions>;

- \<listePermissions>
  - : {{page('fr/Web/HTTP/Feature_Policy/Using_Feature_Policy', 'allowlist')}}

## Valeur par défaut

La valeur par défaut est `'self'`.

## Spécifications

| Spécification                                                                                    | État                                 | Commentaire          |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | -------------------- |
| {{SpecName('Feature Policy')}}                                                         | {{Spec2('Feature Policy')}} | Définition initiale. |
| {{SpecName('Accelerometer','#accelerometer-interface','Accelerometer')}} | {{Spec2('Accelerometer')}} |                      |

## Compatibilité des navigateurs

{{Compat('http.headers.Feature-Policy.accelerometer')}}

## Voir aussi

- en-tête {{HTTPHeader('Feature-Policy')}}
- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Utiliser Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
