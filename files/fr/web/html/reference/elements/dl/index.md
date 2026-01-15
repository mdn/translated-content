---
title: "<dl> : l'élément de liste de descriptions"
slug: Web/HTML/Reference/Elements/dl
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément HTML **`<dl>`** représente une liste de descriptions sous la forme d'une liste de paires associant des termes (fournis par des éléments [`<dt>`](/fr/docs/Web/HTML/Reference/Elements/dt)) et leurs descriptions ou définitions (fournies par des éléments [`<dd>`](/fr/docs/Web/HTML/Reference/Elements/dd)). On utilisera par exemple cet élément pour implémenter un glossaire.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;dl&gt;", "tabbed-standard")}}

```html interactive-example
<p>Cryptides de Cornouailles&nbsp;:</p>

<dl>
  <dt>Bête de Bodmin</dt>
  <dd>Un grand félin qui habite la lande de Bodmin.</dd>

  <dt>Morgawr</dt>
  <dd>Un serpent de mer.</dd>

  <dt>Homme-hibou</dt>
  <dd>Une créature géante ressemblant à un hibou.</dd>
</dl>
```

```css interactive-example
p,
dt {
  font-weight: bold;
}

dl,
dd {
  font-size: 0.9rem;
}

dd {
  margin-bottom: 1em;
}
```

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `compact` {{Deprecated_Inline}}
  - : Cet attribut booléen indique que la liste doit être rendue avec un affichage compact. L'interprétation de cet attribut dépend de l'agent utilisateur. Utilisez plutôt [CSS](/fr/docs/Web/CSS)&nbsp;: pour obtenir un effet similaire à l'attribut `compact`, la propriété CSS {{CSSxRef("line-height")}} peut être utilisée avec la valeur `80%`.

## Accessibilité

Chaque lecteur d'écran expose le contenu de `<dl>` différemment, notamment le nombre total d'éléments, le contexte termes/définitions et les modes de navigation. Ces différences ne sont pas nécessairement des bogues.
À partir d'iOS 14, VoiceOver annoncera que le contenu de `<dl>` est une liste lorsqu'on navigue avec le curseur virtuel (et non via la commande «&nbsp;lire tout&nbsp;»). VoiceOver ne prend pas en charge les commandes de navigation de liste avec `<dl>`. Faites attention à l'application des rôles ARIA `term` et `definition` aux constructions `<dl>`, car VoiceOver (macOS et iOS) ajustera la manière dont ils sont annoncés.

- [VoiceOver sur iOS 14 prend en charge les listes de descriptions <sup>(angl.)</sup>](https://adrianroselli.com/2020/09/voiceover-on-ios-14-supports-description-lists.html)
- [Brève note sur la prise en charge des listes de descriptions <sup>(angl.)</sup>](https://adrianroselli.com/2022/12/brief-note-on-description-list-support.html)

## Exemples

### Un seul terme et une seule définition

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    Un navigateur Web libre, open-source, multi-plateforme dévelopé par la
    Mozilla Corporation et des centaines de volontaires.
  </dd>
  <!-- D'autres termes et leurs descriptions -->
</dl>
```

#### Résultat

{{EmbedLiveSample("Un seul terme et une seule définition")}}

### Plusieurs termes avec une même définition

```html
<dl>
  <dt>Firefox</dt>
  <dt>Mozilla Firefox</dt>
  <dt>Fx</dt>
  <dd>
    Un navigateur Web libre, open-source, multi-plateforme dévelopé par la
    Mozilla Corporation et des centaines de volontaires.
  </dd>
  <!-- D'autres termes et leurs définitions -->
</dl>
```

#### Résultat

{{EmbedLiveSample("Plusieurs termes avec une même définition")}}

### Un seul terme avec plusieurs définitions

```html
<dl>
  <dt>Firefox</dt>
  <dd>
    Un navigateur Web libre, open-source, multi-plateforme dévelopé par la
    Mozilla Corporation et des centaines de volontaires.
  </dd>
  <dd>
    Le petit panda, panda roux, panda fuligineux ou panda éclatant (Ailurus
    fulgens), est un mammifère originaire de l'Himalaya et de la Chine
    méridionale.
  </dd>
  <!-- D'autres termes et leurs définitions -->
</dl>
```

#### Résultat

{{EmbedLiveSample("Un seul terme avec plusieurs définitions")}}

### Termes et descriptions multiples

Il est également possible de définir plusieurs termes avec plusieurs descriptions correspondantes, en combinant les exemples ci-dessus.

### Métadonnées

Les listes de définitions sont utiles lorsqu'on souhaite afficher des métadonnées sous forme d'une liste de clés-valeurs.

```html
<dl>
  <dt>Nom</dt>
  <dd>Godzilla</dd>
  <dt>Né le</dt>
  <dd>1952</dd>
  <dt>Lieu de naissance</dt>
  <dd>Japon</dd>
  <dt>Couleur</dt>
  <dd>Vert</dd>
</dl>
```

Conseil : il peut être pratique de définir un séparateur clé-valeur dans le CSS, par exemple :

```css
dt::after {
  content: ": ";
}
```

### Intégration de groupes nom-valeur dans les éléments `<div>`

Le HTML permet d'envelopper chaque groupe nom-valeur d'un élément `<dl>` dans un élément {{HTMLElement("div")}}. Cela peut être utile lors de l'utilisation de [microdonnées](/fr/docs/Web/HTML/Guides/Microdata), ou lorsque les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes) s'appliquent à un groupe entier, ou encore à des fins de style.

```html
<dl>
  <div>
    <dt>Nom</dt>
    <dd>Godzilla</dd>
  </div>
  <div>
    <dt>Né le</dt>
    <dd>1952</dd>
  </div>
  <div>
    <dt>Lieu de naissance</dt>
    <dd>Japon</dd>
  </div>
  <div>
    <dt>Couleur</dt>
    <dd>Vert</dd>
  </div>
</dl>
```

#### Résultat

{{EmbedLiveSample("Intégration de groupes nom-valeur dans les éléments `<div>`")}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >
        et, si les éléments enfants de <code>&#x3C;dl></code> incluent une paire
        avec un nom et une valeur, du contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <p>
          Soit&nbsp;: zéro ou plusieurs groupes, chacun constitué d'un ou
          plusieurs éléments {{HTMLElement("dt")}} suivis d'un ou
          plusieurs éléments {{HTMLElement("dd")}}, éventuellement
          mêlés à des éléments {{HTMLElement("script")}} et
          {{HTMLElement("template")}}.<br />Ou&nbsp;: (dans le
          {{Glossary("WHATWG")}} HTML, {{Glossary("W3C")}} HTML 5.2 et
          versions ultérieures) un ou plusieurs éléments
          {{HTMLElement("div")}}, éventuellement mêlés à des
          éléments {{HTMLElement("script")}} et
          {{HTMLElement("template")}}.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise d'ouverture et la balise de fermeture sont
        obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément acceptant du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://w3c.github.io/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant <sup>(angl.)</sup></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>,
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/list_role"
            >list</a
          ></code
        >, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLDListElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("dt")}}
- L'élément {{HTMLElement("dd")}}
