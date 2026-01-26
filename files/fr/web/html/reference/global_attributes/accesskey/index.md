---
title: "Attribut HTML universel : accesskey"
short-title: accesskey
slug: Web/HTML/Reference/Global_attributes/accesskey
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'[attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`accesskey`** indique un raccourci clavier possible pour l'élément courant. La valeur de l'attribut doit être un seul caractère imprimable (ce qui inclut les caractères accentués et autres caractères pouvant être générés par le clavier).

{{InteractiveExample("Démonstration HTML&nbsp;: accesskey", "tabbed-shorter")}}

```html interactive-example
<p>
  Si vous avez besoin de vous détendre, appuyez sur le <b>S</b>oulagement&nbsp;!
</p>
<button accesskey="s">Soulagement</button>
```

```css interactive-example
b {
  text-decoration: underline;
}
```

La combinaison de touches utilisée pour le raccourci clavier dépend du navigateur et du système d'exploitation utilisés&nbsp;:

<table class="standard-table">
  <tbody>
    <tr>
      <th></th>
      <th>Windows</th>
      <th>Linux</th>
      <th>Mac</th>
    </tr>
    <tr>
      <th>Firefox</th>
      <td colspan="2"><kbd>Alt</kbd> + <kbd>Majuscule</kbd> + <kbd><em>touche</em></kbd></td>
      <td>
        <kbd>Control</kbd> + <kbd>Option</kbd> +
        <kbd><em>touche</em></kbd> ou <kbd>Control</kbd> + <kbd>Alt</kbd> +
        <kbd><em>touche</em></kbd>
      </td>
    </tr>
    <tr>
      <th>MS Edge</th>
      <td rowspan="2"><kbd>Alt</kbd> + <kbd><em>touche</em></kbd></td>
      <td rowspan="2">
        <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd><em>touche</em></kbd><br>ou <kbd>Control</kbd> + <kbd>Option</kbd> + <kbd>Shift</kbd> +
        <kbd><em>touche</em></kbd>
      </td>
      <td rowspan="2"><kbd>Control</kbd> + <kbd>Option</kbd> + <kbd><em>touche</em></kbd></td>
    </tr>
    <tr>
      <th>Google Chrome</th>
    </tr>
    <tr>
      <th>Safari</th>
      <td colspan="2">n/a</td>
      <td><kbd>Control</kbd> + <kbd>Option</kbd> + <kbd><em>touche</em></kbd></td>
    </tr>
    <tr>
      <th>Opera</th>
      <td colspan="2"><kbd>Alt</kbd> + <kbd><em>touche</em></kbd></td>
      <td><kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd><em>touche</em></kbd></td>
    </tr>
  </tbody>
</table>

## Accessibilité

Plusieurs problèmes se posent concernant l'attribut `accesskey`&nbsp;:

- La valeur d'un `accesskey` peut entrer en conflit avec un raccourci clavier du système, du navigateur ou avec des fonctionnalités des technologies d'assistance. Ce qui fonctionne pour une combinaison donnée (système d'exploitation, technologie d'assistance et navigateur) peut ne pas fonctionner pour d'autres combinaisons.
- Certaines valeurs de `accesskey` peuvent être absentes de certains claviers, notamment lorsque l'internationalisation est en jeu. S'adapter à des langues spécifiques peut donc engendrer d'autres problèmes.
- Les valeurs de `accesskey` reposant sur des chiffres peuvent être déroutantes pour les personnes présentant des troubles cognitifs, lorsqu'il n'existe pas d'association logique entre le chiffre et la fonctionnalité déclenchée.
- Il est nécessaire d'informer l'utilisateur·ice de la présence de `accesskey` afin qu'il·elle en soit conscient·e de cette fonctionnalité. Si le système ne dispose d'aucun moyen d'indiquer cela, l'utilisateur·ice risque d'activer accidentellement des `accesskey`.

Pour ces raisons, il est généralement recommandé de ne pas utiliser `accesskey` pour la plupart des sites web et applications à usage général.

- [WebAIM&nbsp;: accessibilité au clavier — `accesskey` <sup>(angl.)</sup>](https://webaim.org/techniques/keyboard/accesskey#spec)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLElement.accessKey")}}
- La propriété {{DOMxRef("HTMLElement.accessKeyLabel")}}
- [Les différents attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- L'attribut ARIA [`aria-keyshortcuts`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-keyshortcuts)
