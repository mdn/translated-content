---
title: page-orientation
slug: Web/CSS/Reference/At-rules/@page/page-orientation
original_slug: Web/CSS/@page/page-orientation
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`page-orientation`** pour la [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{cssxref("@page")}} contrôle la rotation d'une page imprimée. Il gère le flux du contenu d'une page à l'autre lorsque l'orientation de la page est modifiée. Ce comportement diffère du descripteur [`size`](/fr/docs/Web/CSS/Reference/At-rules/@page/size) car l'utilisateur·rice peut définir la direction de rotation de la page.

Ce descripteur facilite la mise en page et l'orientation des documents imprimés, en particulier lorsque les documents sont imprimés recto‑verso. L'utilisateur·rice peut préciser comment les pages seront tournées à l'impression. C'est utile pour disposer du contenu tel que des tableaux, qui peuvent être plus larges que le reste du document, dans une orientation différente.

> [!NOTE]
> Les [boîtes de marge](/fr/docs/Web/CSS/Reference/At-rules/@page#règles_de_marge) et les autres éléments positionnels n'interagissent pas spécialement avec ce descripteur. Les marges sont posées comme d'habitude sur la page non tournée, puis tournées avec le reste du contenu.

## Syntaxe

```css
/* Affiche le contenu imprimé en position verticale */
@page {
  page-orientation: upright;
}

/* Affiche le contenu imprimé tourné d'un quart de tour vers la gauche (sens inverse des aiguilles d'une montre) */
@page {
  page-orientation: rotate-left;
}

/* Affiche le contenu imprimé tourné d'un quart de tour vers la droite (sens des aiguilles d'une montre) */
@page {
  page-orientation: rotate-right;
}
```

## Valeurs

- `upright`
  -&nbsp;: Aucune orientation n'est appliquée&nbsp;; la page est mise en page et formatée comme d'habitude.
- `rotate-left`
  -&nbsp;: Après la mise en page, la page doit être affichée tournée d'un quart de tour vers la gauche (sens inverse des aiguilles d'une montre).
- `rotate-right`
  -&nbsp;: Après la mise en page, la page doit être affichée tournée d'un quart de tour vers la droite (sens des aiguilles d'une montre).

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Rotation des pages imprimées

Cet exemple montre comment le contenu d'un document imprimé peut être tourné pour s'adapter au contenu de la page et à la position de la page. Dans la première partie du code CSS, les [pages nommées](/fr/docs/Web/CSS/Reference/At-rules/@page#named_pages) sont configurées pour définir la direction de rotation du contenu.

```css live-sample___rotating-pages
@page upright {
  size: portrait;
  page-orientation: upright;
}

@page left {
  size: landscape;
  page-orientation: rotate-left;
}

@page right {
  size: landscape;
  page-orientation: rotate-right;
}
```

```css hidden live-sample___rotating-pages
fieldset {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  width: fit-content;
}
p {
  max-width: 60ch;
}
@media print {
  fieldset {
    display: none;
  }
  section {
    font-family: Roboto, sans-serif;
    font-size: 1.5rem;
  }
}
```

La seconde partie du code CSS déclare une règle de page nommée définie ci‑dessus pour les sélecteurs, comme `<section class="left">…</section>`.

```css live-sample___rotating-pages
@media print {
  .upright {
    page: upright;
  }
  .left {
    page: left;
  }
  .right {
    page: right;
  }
}
```

```html hidden live-sample___rotating-pages
<fieldset id="printStyle">
  <legend>
    Cliquez sur «&nbsp;Imprimer&nbsp;». La page sera mise en page dans
    l'orientation définie.
  </legend>
  <button id="print">Imprimer</button>
</fieldset>
<div id="print-area">
  <section class="upright">
    <h2>Section en portrait / verticale</h2>
    <p>
      Cette section sera imprimée en portrait et en position verticale
      avec&nbsp;:
    </p>
    <pre>
.upright {
  size: portrait;
  page-orientation: upright;
}
    </pre>
    <p>Premier paragraphe.</p>
    <p>Deuxième paragraphe.</p>
  </section>
  <section class="left">
    <h2>Section en paysage / gauche</h2>
    <p>
      Cette section sera imprimée en paysage et tournée vers la gauche
      avec&nbsp;:
    </p>
    <pre>
.left {
  size: landscape;
  page-orientation: rotate-left;
}
    </pre>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>100 m</th>
          <th>1500 m</th>
          <th>Haies</th>
          <th>Longueur</th>
          <th>Saut en hauteur</th>
          <th>Lancer du javelot</th>
          <th>Lancer du disque</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Dave</th>
          <td>9.65</td>
          <td>3:49</td>
          <td>12.64</td>
          <td>8.54 m</td>
          <td>1.95 m</td>
          <td>56.65 m</td>
          <td>47.63 m</td>
        </tr>
        <tr>
          <th>Simon</th>
          <td>9.87</td>
          <td>3:52</td>
          <td>11.89</td>
          <td>8.16 m</td>
          <td>1.96 m</td>
          <td>59.03 m</td>
          <td>45.72 m</td>
        </tr>
        <tr>
          <th>Fred</th>
          <td>9.67</td>
          <td>3:52</td>
          <td>12.03</td>
          <td>8.04 m</td>
          <td>2.01 m</td>
          <td>62.58 m</td>
          <td>46.83 m</td>
        </tr>
        <tr>
          <th>Gary</th>
          <td>9.77</td>
          <td>3:56</td>
          <td>13.04</td>
          <td>7.96 m</td>
          <td>2.02 m</td>
          <td>63.87 m</td>
          <td>47.73 m</td>
        </tr>
        <tr>
          <th>Dick</th>
          <td>9.95</td>
          <td>3:44</td>
          <td>12.99</td>
          <td>5.66 m</td>
          <td>1.97 m</td>
          <td>56.43 m</td>
          <td>43.87 m</td>
        </tr>
        <tr>
          <th>Tom</th>
          <td>9.84</td>
          <td>3:48</td>
          <td>12.86</td>
          <td>6.87 m</td>
          <td>1.95 m</td>
          <td>67.03 m</td>
          <td>42.73 m</td>
        </tr>
        <tr>
          <th>Harry</th>
          <td>9.91</td>
          <td>3:53</td>
          <td>13.77</td>
          <td>7.34 m</td>
          <td>1.94 m</td>
          <td>62.84 m</td>
          <td>46.72 m</td>
        </tr>
      </tbody>
    </table>
  </section>
  <section class="right">
    <h2>Section en paysage / droite</h2>
    <p>
      Cette section sera imprimée en paysage et tournée vers la droite
      avec&nbsp;:
    </p>
    <pre>
.right {
  size: landscape;
  page-orientation: rotate-right;
}
    </pre>
    <table>
      <thead>
        <tr>
          <th></th>
          <th>100 m</th>
          <th>1500 m</th>
          <th>Haies</th>
          <th>Longueur</th>
          <th>Saut en hauteur</th>
          <th>Lancer du javelot</th>
          <th>Lancer du disque</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th>Dave</th>
          <td>9.65</td>
          <td>3:49</td>
          <td>12.64</td>
          <td>8.54 m</td>
          <td>1.95 m</td>
          <td>56.65 m</td>
          <td>47.63 m</td>
        </tr>
        <tr>
          <th>Simon</th>
          <td>9.87</td>
          <td>3:52</td>
          <td>11.89</td>
          <td>8.16 m</td>
          <td>1.96 m</td>
          <td>59.03 m</td>
          <td>45.72 m</td>
        </tr>
        <tr>
          <th>Fred</th>
          <td>9.67</td>
          <td>3:52</td>
          <td>12.03</td>
          <td>8.04 m</td>
          <td>2.01 m</td>
          <td>62.58 m</td>
          <td>46.83 m</td>
        </tr>
        <tr>
          <th>Gary</th>
          <td>9.77</td>
          <td>3:56</td>
          <td>13.04</td>
          <td>7.96 m</td>
          <td>2.02 m</td>
          <td>63.87 m</td>
          <td>47.73 m</td>
        </tr>
        <tr>
          <th>Dick</th>
          <td>9.95</td>
          <td>3:44</td>
          <td>12.99</td>
          <td>5.66 m</td>
          <td>1.97 m</td>
          <td>56.43 m</td>
          <td>43.87 m</td>
        </tr>
        <tr>
          <th>Tom</th>
          <td>9.84</td>
          <td>3:48</td>
          <td>12.86</td>
          <td>6.87 m</td>
          <td>1.95 m</td>
          <td>67.03 m</td>
          <td>42.73 m</td>
        </tr>
        <tr>
          <th>Harry</th>
          <td>9.91</td>
          <td>3:53</td>
          <td>13.77</td>
          <td>7.34 m</td>
          <td>1.94 m</td>
          <td>62.84 m</td>
          <td>46.72 m</td>
        </tr>
      </tbody>
    </table>
  </section>
</div>
```

```js hidden live-sample___rotating-pages
const printButton = document.querySelector("#print");
printButton.addEventListener("click", () => {
  window.print();
});
```

Cliquez sur le bouton «&nbsp;Imprimer&nbsp;» pour voir l'orientation de la page à l'impression.

{{EmbedLiveSample('rotating-pages', '100%', '540', , , , , "allow-modals")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
