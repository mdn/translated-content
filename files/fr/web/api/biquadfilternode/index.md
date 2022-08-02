---
title: BiquadFilterNode
slug: Web/API/BiquadFilterNode
translation_of: Web/API/BiquadFilterNode
browser-compat: api.BiquadFilterNode
---
{{APIRef("Web Audio API")}}

L'interface **`BiquadFilterNode`** représente un simple filtre de bas niveau, créé avec la méthode [`AudioContext.createBiquadFilter()`](/fr/docs/Web/API/AudioContext/createBiquadFilter). Il s'agit d'un objet [`AudioNode`](/fr/docs/Web/API/AudioNode) qui peut représenter différents types de filtres, dispositifs de réglage de tonalité ou égaliseurs graphiques. Un objet `BiquadFilterNode` possède toujours exactement une entrée et une sortie.

{{InheritanceDiagram}}

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
      <td><code>2</code> (pas utilisés dans le mode de comptage par défaut)</td>
    </tr>
    <tr>
      <th scope="row">Interprétation du canal</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Constructeur

- [`BiquadFilterNode()`](/fr/docs/Web/API/BiquadFilterNode/BiquadFilterNode)
  - : Crée une nouvelle instance d'un objet `BiquadFilterNode`.

## Propriétés

_Hérite des propriétés de son parent, [`AudioNode`](/fr/docs/Web/API/AudioNode)._

- [`BiquadFilterNode.frequency`](/fr/docs/Web/API/BiquadFilterNode/frequency)
  - : Un objet [`AudioParam`](/fr/docs/Web/API/AudioParam) de type [`a-rate`](/fr/docs/Web/API/AudioParam#a-rate)&nbsp;: c'est un nombre flottant à double précision représentant une fréquence de l'algorithme de filtrage, exprimée en Hertz.
- [`BiquadFilterNode.detune`](/fr/docs/Web/API/BiquadFilterNode/detune)
  - : Un objet [`AudioParam`](/fr/docs/Web/API/AudioParam) de type [`a-rate`](/fr/docs/Web/API/AudioParam#a-rate)&nbsp;: c'est un nombre flottant à double précision représentant le désaccordage de la fréquence exprimée en [cents](https://fr.wikipedia.org/wiki/Cent_et_savart).
- [`BiquadFilterNode.Q`](/fr/docs/Web/API/BiquadFilterNode/Q)
  - : Un objet [`AudioParam`](/fr/docs/Web/API/AudioParam) de type [`a-rate`](/fr/docs/Web/API/AudioParam#a-rate)&nbsp;: c'est un nombre flottant à double précision représentant un [facteur de qualité](https://en.wikipedia.org/wiki/Q_factor).
- [`BiquadFilterNode.gain`](/fr/docs/Web/API/BiquadFilterNode/gain) {{readonlyInline}}
  - : Un objet [`AudioParam`](/fr/docs/Web/API/AudioParam) de type [`a-rate`](/fr/docs/Web/API/AudioParam#a-rate)&nbsp;: c'est un nombre flottant à double précision représentant le [gain](https://fr.wikipedia.org/wiki/Gain_(électronique)) utilisé dans l'algorithme de filtrage.
- [`BiquadFilterNode.type`](/fr/docs/Web/API/BiquadFilterNode/type)

  - : Une chaîne de caractères définissant le type d'algorithme de filtrage que le nœud implémente.

    <table class="standard-table">
      <caption>La signification des paramètres diffère en fonction du type du filtre (sauf <code>detune</code> qui a la même signification dans tous les cas, et n'est donc pas listé ci-dessous)</caption>
      <thead>
        <tr>
          <th scope="row"><code>type</code></th>
          <th scope="col">Description</th>
          <th scope="col"><code>frequency</code></th>
          <th scope="col"><code>Q</code></th>
          <th scope="col"><code>gain</code></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><code>lowpass</code></th>
          <td>
            Filtre standard passe-bas résonnant de second ordre avec atténuation de 12dB/octave. Les fréquences inférieures au seuil sont inchangées&nbsp;; les fréquences supérieures sont atténuées.
          </td>
          <td>La fréquence de coupure</td>
          <td>
            Indique comment la fréquence a culminé autour de la coupure. Plus la valeur est élevée, plus le point culminant est haut.
          </td>
          <td>Non utilisé</td>
        </tr>
        <tr>
          <th scope="row"><code>highpass</code></th>
          <td>
            Filtre standard passe-haut résonnant de second ordre avec atténuation de 12dB/octave. Les fréquences inférieures à la fréquence de coupure sont atténuées, les fréquences supérieures sont inchangées.
          </td>
          <td>La fréquence de coupure</td>
          <td>
            Indique comment la fréquence a culminé autour de la coupure. Plus la valeur est élevée, plus le point culminant est haut.
          </td>
          <td>Non utilisé</td>
        </tr>
        <tr>
          <th scope="row"><code>bandpass</code></th>
          <td>            Filtre standard passe-bande de second ordre. Les fréquences en dehors de la plage donnée de fréquences sont atténués, et les fréquences à l'intérieur sont inchangées.
          </td>
          <td>Le centre de la gamme de fréquences.</td>
          <td>
            Contrôle la largeur de la bande de fréquences. Plus Q est grande, plus la bande de fréquences est grande.
          </td>
          <td>Non utilisé</td>
        </tr>
        <tr>
          <th scope="row"><code>lowshelf</code></th>
          <td>
            Filtre standard de dégradé de basses fréquences de second ordre. Les fréquences inférieures à la fréquence obtiennent une impulsion ou une atténuation&nbsp;; les fréquences supérieures sont inchangées.
          </td>
          <td>
            La limite supérieure des fréquences obtenant une impulsion ou une atténuation.
          </td>
          <td>Non utilisé</td>
          <td>
            L'impulsion, en dB, à appliquer&nbsp;; s'il est négatif, ce sera une atténuation.
          </td>
        </tr>
        <tr>
          <th scope="row"><code>highshelf</code></th>
          <td>
            Filtre standard de dégradé de hautes fréquences de second ordre. Les fréquences supérieures à la fréquence obtiennent une impulsion, ou une atténuation&nbsp;; les fréquences inférieures restent inchangées.
          </td>
          <td>
            La limite inférieure des fréquences obtenant une impulsion ou une atténuation.
          </td>
          <td>Non utilisé</td>
          <td>
            L'impulsion, en dB, à appliquer&nbsp;; s'il est négatif, ce sera une atténuation.
          </td>
        </tr>
        <tr>
          <th scope="row"><code>peaking</code></th>
          <td>
            Les fréquences à l'intérieur de la gamme obtiennent une impulsion ou une atténuation&nbsp;; les fréquences en dehors de celle-ci sont inchangées.
          </td>
          <td>
            Le milieu de la gamme de fréquences obtiennent une impulsion, ou une atténuation.
          </td>
          <td>
            Contrôle la largeur de la bande de fréquences. Plus grande est Q, plus grande est la bande de fréquences.
          </td>
          <td>
            L'impulsion, en dB, à appliquer&nbsp;; s'il est négatif, ce sera une atténuation.
          </td>
        </tr>
        <tr>
          <th scope="row"><code>notch</code></th>
          <td>
            Filtre coupe standard, appelé aussi coupe-bande. C'est l'inverse d'un filtre passe-bande&nbsp;: les fréquences en dehors de la gamme de fréquences donnée sont inchangées&nbsp;; les fréquences à l'intérieur de celle-ci sont atténuées.
          </td>
          <td>Le centre de la gamme de fréquences.</td>
          <td>
            Contrôle la largeur de la bande de fréquences. Plus grande est Q, plus grande est la bande de fréquences.
          </td>
          <td>Non utilisé</td>
        </tr>
        <tr>
          <th scope="row"><code>allpass</code></th>
          <td>
            Filtre standard passe-tout du second ordre. Laisse toutes les fréquences inchangées, mais modifie le rapport de phase entre les différentes fréquences.
          </td>
          <td>
            La fréquence du retard de groupe maximal, qui est la fréquence à laquelle le centre de la transition de phase se produit.
          </td>
          <td>
            Contrôle finement la transition à la fréquence moyenne. Plus ce paramètre est grand, plus la transition est fine et large.
          </td>
          <td>Non utilisé</td>
        </tr>
      </tbody>
    </table>

## Méthodes

_Hérite des propriétés de son parent, [`AudioNode`](/fr/docs/Web/API/AudioNode)._

- [`BiquadFilterNode.getFrequencyResponse()`](/fr/docs/Web/API/BiquadFilterNode/getFrequencyResponse)
  - : À partir des valeurs courantes des paramètres de filtre, calcule la fréquence de réponse pour des fréquences spécifiées dans le tableau de fréquences `frequencyHz` passé en paramètre.

## Exemples

Voir la page [`AudioContext.createBiquadFilter`](/fr/docs/Web/API/BaseAudioContext/createBiquadFilter#exemple) pour un exemple de code illustrant comment utiliser un objet `AudioContext` afin de créer un nœud de filtre.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser l'API <i lang="en">Web Audio</i>](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
