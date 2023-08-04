---
title: "<dl> : l'élément de liste de descriptions"
slug: Web/HTML/Element/dl
---

{{HTMLSidebar}}

L'élément HTML **`<dl>`** représente une liste de descriptions sous la forme d'une liste de paires associant des termes (fournis par des éléments [`<dt>`](/fr/docs/Web/HTML/Element/dt)) et leurs descriptions ou définitions (fournies par des éléments [`<dd>`](/fr/docs/Web/HTML/Element/dd)). On utilisera par exemple cet élément pour implémenter un glossaire.

{{EmbedInteractiveExample("pages/tabbed/dl.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >
        et, si les éléments enfants de <code>&#x3C;dl></code> incluent une paire
        avec un nom et une valeur, du
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <p>
          Zéro ou plusieurs groupes composés d'un ou plusieurs éléments
          <a href="/fr/docs/Web/HTML/Element/dt"><code>&#x3C;dt></code></a
          >, chacun suivi par un ou plusieurs éléments
          <a href="/fr/docs/Web/HTML/Element/dd"><code>&#x3C;dd></code></a>
          entre lesquels on pourra éventuellement avoir des éléments
          <a href="/fr/docs/Web/HTML/Element/script"
            ><code>&#x3C;script></code></a
          >
          et
          <a href="/fr/docs/Web/HTML/Element/template"
            ><code>&#x3C;template></code></a
          >.
        </p>
        <p>
          Selon le WHATWG : un ou plusieurs éléments
          <a href="/fr/docs/Web/HTML/Element/div"><code>&#x3C;div></code></a>
          éventuellement entrecoupés d'éléments
          <a href="/fr/docs/Web/HTML/Element/script"
            ><code>&#x3C;script></code></a
          >
          ou
          <a href="/fr/docs/Web/HTML/Element/template"
            ><code>&#x3C;template></code></a
          >.
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
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="https://w3c.github.io/aria/#group">group</a>,
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Roles/List_role"
            >list</a
          ></code
        >, <code><a href="https://w3c.github.io/aria/#none">none</a></code
        >, <a href="https://w3c.github.io/aria/#presentation">presentation</a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLDListElement"
          ><code>HTMLDListElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

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

{{EmbedLiveSample("", "",'160')}}

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

{{EmbedLiveSample("", "", 210)}}

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

{{EmbedLiveSample('', '', '280')}}

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

#### Résultat

{{EmbedLiveSample('','',240)}}

### Intégration de groupes nom-valeur dans les éléments `<div>`

[WHATWG](/fr/docs/Glossary/WHATWG) HTML permet d'envelopper chaque groupe nom-valeur d'un élément [`<dl>`](/fr/docs/Web/HTML/Element/dl) dans un élément [`<div>`](/fr/docs/Web/HTML/Element/div). Cela peut être utile lors de l'utilisation de [microdonnées](/fr/docs/Web/HTML/Microdata), ou lorsque les [attributs universels](/fr/docs/Web/HTML/Global_attributes) s'appliquent à un groupe entier, ou encore à des fins de style.

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

{{EmbedLiveSample('','','240')}}

## Notes

Cet élément ne doit pas être utilisé (de même que les éléments [`<ul>`](/fr/docs/Web/HTML/Element/ul)), dans le seul but de créer une indentation sur la page. Bien que cela fonctionne parfaitement, c'est une pratique déconseillée qui mêle mise en forme et sémantique. Cela modifie le rôle que doivent avoir les listes de définitions.

Pour changer l'indentation de la définition d'un terme, il faut utiliser la propriété [CSS](/fr/docs/Web/CSS) [`margin`](/fr/docs/Web/CSS/margin).

## Accessibilité

Les lecteurs d'écran annoncent `<dl>` de façon différente. À partir d'iOS 14, VoiceOver annoncera que le contenu de `<dl>` est une liste lors de la navigation au curseur (mais pas via la lecture générale). Il faut donc s'assurer que la relation entre les éléments de la liste est bien communiquée grâce aux contenus des éléments.

- [CodePen - Les camarades HTML : dt & dd](https://codepen.io/aardrian/debug/NzGaKP) (en)
- [VoiceOver sous iOS 14 prend en charge les listes de descriptions](https://adrianroselli.com/2020/09/voiceover-on-ios-14-supports-description-lists.html) (en)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément [`<dt>`](/fr/docs/Web/HTML/Element/dt)
- L'élément [`<dd>`](/fr/docs/Web/HTML/Element/dd)
