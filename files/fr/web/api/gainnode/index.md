---
title: GainNode
slug: Web/API/GainNode
translation_of: Web/API/GainNode
browser-compat: api.GainNode
---
{{APIRef("Web Audio API")}}

L'interface **`GainNode`** représente une variation de volume. Il s'agit d'un objet [`AudioNode`](/fr/docs/Web/API/AudioNode), c'est un module de traitement audio, qui provoque un gain donné à appliquer à des données d'entrée avant sa propagation à la sortie. Un `GainNode` a toujours exactement une entrée et une sortie, avec la même quantité de canaux.

Le gain est une valeur sans unité, qui change éventuellement avec le temps, qui est multiplié à chaque échantillon correspondant de tous les canaux en entrées. En cas de modification, le nouveau gain est appliqué instantanément, ce qui peut entraîner des «&nbsp;clics&nbsp;» inesthétiques sur l'audio résultant. Pour éviter que cela se produise, on ne changera jamais la valeur directement mais en utilisant les méthodes d'interpolation exponentielles de l'interface [`AudioParam`](/fr/docs/Web/API/AudioParam).

![Un objet GainNode augmente le gain de la sortie.](webaudiogainnode.png)

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Nombre d'entrées</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Nombre de sorties</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Mode de comptage des canaux</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Nombre de canaux</th>
      <td><code>2</code> (inutilisés dans le mode de comptage par défaut)</td>
    </tr>
    <tr>
      <th scope="row">Interprétation des canaux</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Constructeur

- [`GainNode()`](/fr/docs/Web/API/GainNode/GainNode)
  - : Crée une nouvelle instance d'un objet `GainNode`. Il est aussi possible d'utiliser la méthode de construction [`BaseAudioContext.createGain()`](/fr/docs/Web/API/BaseAudioContext/createGain). Voir [créer un objet `AudioNode`](/fr/docs/Web/API/AudioNode#créer_un_objet_audionode).

## Propriétés

_Hérite des propritétés de son parent, [`AudioNode`](/fr/docs/Web/API/AudioNode)._

- [`GainNode.gain`](/fr/docs/Web/API/GainNode/gain) {{readonlyinline}}
  - : Est un [`AudioParam`](/fr/docs/Web/API/AudioParam) de type [`a-rate`](/fr/docs/Web/API/AudioParam#a-rate) représentant le montant du gain à appliquer. Il faut modifier [`AudioParam.value`](/fr/docs/Web/API/AudioParam/value) ou utiliser les méthodes fournies par `AudioParam` pour changer l'effet du gain.

## Méthodes

_Aucune méthode spécifique, cette interface hérite des méthodes de son parent, [`AudioNode`](/fr/docs/Web/API/AudioNode)_.

## Exemple

Voir la page sur [`BaseAudioContext.createGain()`](/fr/docs/Web/API/BaseAudioContext/createGain#example) pour un exemple de code illustrant comment utiliser un objet `AudioContext` afin de créer un objet `GainNode`.

## Spécification

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser l'API <i lang="en">Web Audio</i>](/fr/docs/Web_Audio_API/Using_Web_Audio_API)
