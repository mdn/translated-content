---
title: GainNode
slug: Web/API/GainNode
tags:
  - API
  - Experimental
  - Reference
  - Web Audio API
translation_of: Web/API/GainNode
---
{{ APIRef("Web Audio API") }}

L'interface **`GainNode`** représente une variation de volume. Il s'agit d'un {{domxref("AudioNode")}}, c'est un module de traitement audio, qui provoque un gain donné à appliquer à des données d'entrée avant sa propagation à la sortie. Un `GainNode` a toujours exactement une entrée et une sortie, avec la même quantité de canaux.

Le gain est une valeur sans unité, qui change éventuellement avec le temps, qui est multiplié à chaque échantillon correspondant de tous les canaux entrées. En cas de modification, le nouveau gain est appliqué à l'aide d'un algorithme d'effilochage afin d'éviter aux «clics» inesthétiques d'apparaître dans l'audio résultant.

![Un objet GainNode augmente le gain de la sortie.](webaudiogainnode.png)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><dfn>Nombre d'entrées</dfn></th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row"><dfn>Nombre de sorties</dfn></th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row"><dfn>Mode de comptage des canaux</dfn></th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row"><dfn>Nombre de canaux</dfn></th>
      <td><code>2</code> (inutilisés dans le mode de comptage par défaut)</td>
    </tr>
    <tr>
      <th scope="row"><dfn>Interprétation des canaux</dfn></th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Constructeur

- {{domxref("GainNode.GainNode", "GainNode()")}}
  - : Crée une nouvelle instance d'un objet `GainNode`. Il ne faut pas créer un noeud de gain manuellement, mais plutôt utiliser la méthode {{domxref("AudioContext.createGain()")}}.

## Propriétés

_Hérite des propritétés de son parent,_ _{{domxref("AudioNode")}}_.

- {{domxref("GainNode.gain")}}
  - : Est un [a-rate](/fr/docs/Web/API/AudioParam#a-rate) {{domxref ("AudioParam")}} représentant le montant du gain à appliquer. (Bien que le `AudioParam` retournée est en lecture seule, la valeur qu'il représente ne l'est pas).

## Méthodes

Aucune méthode spécifique; hérite des méthodes de son parent, {{domxref("AudioNode")}}.

## Exemple

{{page("/en-US/docs/Web/API/AudioContext.createGain","Example")}}

## Spécification

| Spécification                                                                        | Statuts                              | Commentaire |
| ------------------------------------------------------------------------------------ | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#GainNode-section', 'GainNode')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité navigateurs

{{Compat("api.GainNode")}}

## Voir aussi

- [Utiliser l'API Web Audio](/en-US/docs/Web_Audio_API/Using_Web_Audio_API)
