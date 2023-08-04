---
title: accesskey
slug: Web/HTML/Global_attributes/accesskey
---

{{HTMLSidebar("Global_attributes")}}L'[attribut universel](/fr/docs/Web/HTML/Attributs_universels) **`accesskey`** fournit une indication afin de générer un raccourci clavier pour l'élément courant. La valeur de cet attribut est une liste de caractères (un caractère étant ici un seul point de code Unicode) séparés par des espaces. Le navigateur utilisera le premier caractère qui est disponible selon la disposition du clavier utilisée.{{EmbedInteractiveExample("pages/tabbed/attribute-accesskey.html","tabbed-shorter")}}

La combinaison de touches utilisée pour le raccourci clavier dépend du navigateur et du système d'exploitation utilisés.

> **Note :** La spécification WHATWG indique qu'il est possible d'indiquer des caractères séparés par plusieurs espaces, auquel cas le navigateur considèrera le premier qu'il prend en charge. Toutefois, cela ne fonctionne pas dans la plupart des navigateurs. Pour IE/Edge, c'est la première valeur prise en charge qui sera utilisée si celle-ci n'entre pas en conflit avec d'autres commandes.

<table class="standard-table">
  <thead>
    <tr>
      <th></th>
      <th>Windows</th>
      <th>Linux</th>
      <th>Mac</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Firefox</th>
      <td colspan="2">
        <kbd>Alt</kbd> + <kbd>Shift</kbd> + <kbd><em>touche</em></kbd>
      </td>
      <td>
        <p>
          Pour Firefox 57 et les versions ultérieures : <kbd>Control</kbd> +
          <kbd>Option</kbd> + <kbd><em>touche</em></kbd> ou <kbd>Control</kbd> +
          <kbd>Alt</kbd> + <kbd><em>touche</em></kbd
          ><br />Pour Firefox 14 et les versions ultérieures :
          <kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd><em>touche</em></kbd
          ><br />Pour Firefox 13 et les versions antérieures :
          <kbd>Control</kbd> + <kbd><em>touche</em></kbd>
        </p>
      </td>
    </tr>
    <tr>
      <th>Edge</th>
      <td>
        <kbd>Alt</kbd> + <kbd><em>touche</em></kbd>
      </td>
      <td colspan="2">N/A</td>
    </tr>
    <tr>
      <th>Internet Explorer</th>
      <td>
        <kbd>Alt</kbd> + <kbd><em>touche</em></kbd>
      </td>
      <td colspan="2">N/A</td>
    </tr>
    <tr>
      <th>Google Chrome</th>
      <td colspan="2">
        <kbd>Alt</kbd> + <kbd><em>touche</em></kbd>
      </td>
      <td>
        <kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd><em>touche</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Safari</th>
      <td>
        <kbd>Alt</kbd> + <kbd><em>touche</em></kbd>
      </td>
      <td>N/A</td>
      <td>
        <kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd><em>touche</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Opera 15+</th>
      <td colspan="2">
        <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        <kbd>Control</kbd> + <kbd>Alt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tr>
    <tr>
      <th>Opera 12</th>
      <td colspan="3">
        <kbd>Shift</kbd> + <kbd>Esc</kbd> ouvre une liste de contenu accessible
        via la touche <code>accesskey</code>, on peut alors ensuite choisir
        l'élément voulu grâce la touche <kbd><em>touche</em></kbd>
      </td>
    </tr>
  </tbody>
</table>

## Accessibilité

Au-delà de la prise en charge limitée des navigateurs, `accesskey` pose plusieurs problèmes :

- Un raccourci défini avec `accesskey` peut rentrer en conflit avec un raccourci du système ou du navigateur, voire avec un raccourci d'un outil d'assistance. Les raccourcis pouvant être différents entre les navigateurs, systèmes d'exploitation et les outils, il n'est pas certain qu'une combinaison qui fonctionne dans un cas puisse fonctionner partout.
- Certains raccourcis définis avec `accesskey` peuvent ne pas être utilisés avec certains claviers, notamment lorsqu'on doit prendre en compte l'internationalisation.
- Les raccourcis définis avec `accesskey` qui utilisent un nombre peuvent être source de confusion pour les personnes souffrant de problèmes cognitifs si le nombre n'a pas d'association logique avec la fonctionnalité déclenchée par le raccourci.
- Il est nécessaire d'informer l'utilisateur qu'un raccourci est présent afin que celui-ci puisse être conscient de cette fonctionnalité. Sans méthode d'information, l'utilisateur pourra accidentellement déclencher les raccourcis définis avec `accesskey`.

Étant donné ces raisons, il est généralement conseillé de ne pas utiliser `accesskey` pour les sites web et applications généralistes.

- [WebAIM : accessibilité au clavier - `accesskey` (en anglais)](https://webaim.org/techniques/keyboard/accesskey#spec)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Element.accessKey")}}
- {{domxref("HTMLElement.accessKeyLabel")}}
- [Les différents attributs universels](/fr/docs/Web/HTML/Attributs_universels)
