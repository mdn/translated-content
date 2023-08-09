---
title: Type de connexion réel
slug: Glossary/Effective_connection_type
l10n:
  sourceCommit: 6fcbba930a3d72f4373a376012db37aa75d1518f
---

Le **type de connexion réel**, ou «&nbsp;<i lang="en">effective connection type</i>&nbsp;» en anglais (abrégé en ECT), fait référence aux performances mesurées du réseau, renvoyant un type de connexion cellulaire, comme la 3G, même si la connexion réelle est effectuée en haut débit ou Wi-Fi, en fonction du temps entre le navigateur demandant une page et le type de connexion réel.

Les valeurs de `"slow-2g"`, `"2g"`, `"3g"` et `"4g"` sont déterminées en utilisant le temps d'aller-retour de la requête et des valeurs de liaison descendante.

| ECT       | Durée minimale d'[aller-retour](</fr/docs/Glossary/Round_Trip_Time_(RTT)>) | Liaison descendante maximale | Explication                                                                                                                             |
| --------- | -------------------------------------------------------------------------- | ---------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| `slow-2g` | 2000 ms                                                                    | 50 ko/s                      | Le réseau convient uniquement aux petits transferts tels que les pages composées uniquement de texte.                                   |
| `2g`      | 1400 ms                                                                    | 70 ko/s                      | Le réseau est adapté aux transferts de petites images.                                                                                  |
| `3g`      | 270 ms                                                                     | 700 ko/s                     | Le réseau est adapté aux transferts de ressources volumineuses telles que des images en haute résolution, de l'audio et de la vidéo SD. |
| `4g`      | 0 ms                                                                       | ∞                            | Le réseau est adapté à la vidéo HD, à la vidéo en temps réel, etc.                                                                      |

[`effectiveType`](/fr/docs/Web/API/NetworkInformation/effectiveType) est une propriété de l'[API d'informations réseau](/fr/docs/Web/API/Network_Information_API), visible sur JavaScript via l'objet [`navigator.connection`](/fr/docs/Web/API/Navigator/connection). Pour voir votre type de connexion réel, ouvrez la console des outils de développement d'un navigateur compatible et saisissez ce qui suit&nbsp;:

```js
navigator.connection.effectiveType;
```

## Voir aussi

- [API d'informations réseau](/fr/docs/Web/API/Network_Information_API)
- [`NetworkInformation`](/fr/docs/Web/API/NetworkInformation)
- [`NetworkInformation.effectiveType`](/fr/docs/Web/API/NetworkInformation/effectiveType)
- [`ECT`](/fr/docs/Web/HTTP/Headers/ECT)
