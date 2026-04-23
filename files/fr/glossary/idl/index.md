---
title: IDL
slug: Glossary/IDL
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **IDL** (pour <i lang="en">Interface Description Language</i> en anglais) est un langage générique utilisé pour définir les interfaces des objets en dehors de tout autre langage de programmation spécifique.

## Attributs de contenu et attributs IDL

En HTML, la plupart des attributs ont deux aspects&nbsp;: l'**attribut de contenu** et l'**attribut IDL**.

L'attribut de contenu est celui que vous définissez dans le contenu (le code HTML) et que vous pouvez définir ou obtenir via {{DOMxRef("element.setAttribute()")}} ou {{DOMxRef("element.getAttribute()")}}. L'attribut de contenu est toujours une chaîne de caractères, même lorsque la valeur attendue devrait être un entier. Par exemple, pour définir l'attribut `maxlength` d'un élément {{HTMLElement("input")}} à 42 en utilisant l'attribut de contenu, vous devez appeler `setAttribute("maxlength", "42")` sur cet élément.

L'attribut IDL est aussi appelé propriété JavaScript. Ce sont les attributs que vous pouvez lire ou définir en utilisant les propriétés JavaScript comme `element.foo`. L'attribut IDL va toujours utiliser (mais peut transformer) l'attribut de contenu sous-jacent pour retourner une valeur lorsque vous le lisez, et va enregistrer une valeur dans l'attribut de contenu lorsque vous le définissez. En d'autres termes, les attributs IDL reflètent, en essence, les attributs de contenu.

La plupart du temps, les attributs IDL renvoient leurs valeurs telles qu'elles sont réellement utilisées. Par exemple, la valeur par défaut de `type` pour les éléments {{HTMLElement("input")}} est «&nbsp;text&nbsp;», donc si vous définissez `input.type="foobar"`, l'élément `<input>` sera de type text (dans l'apparence et le comportement) mais la valeur de l'attribut de contenu «&nbsp;type&nbsp;» sera «&nbsp;foobar&nbsp;». Cependant, l'attribut IDL `type` renverra la chaîne de caractères «&nbsp;text&nbsp; ».

Les attributs IDL ne sont pas toujours des chaînes de caractères&nbsp;: par exemple, `input.maxlength` est un nombre (un entier signé). Lorsque vous utilisez les attributs IDL, vous lisez ou définissez des valeurs du type souhaité, donc `input.maxlength` renverra toujours un nombre et, lorsque vous définissez `input.maxlength`, il attend un nombre. Si vous passez un autre type, il est automatiquement converti en nombre selon les règles standard de conversion de type en JavaScript.

Les attributs IDL peuvent [refléter d'autres types <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#reflecting-content-attributes-in-idl-attributes) comme des entiers non signés, des URL, des booléens, etc. Malheureusement, il n'existe pas de règles claires et la façon dont les attributs IDL se comportent avec leurs attributs de contenu correspondants dépend de l'attribut. La plupart du temps, cela suit [les règles définies dans la spécification <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/urls-and-fetching.html#reflecting-content-attributes-in-idl-attributes), mais parfois ce n'est pas le cas. Les spécifications HTML essaient de rendre cela aussi simple que possible pour les développeur·euse·s, mais pour diverses raisons (principalement historiques), certains attributs ont un comportement particulier (`select.size`, par exemple) et il convient de lire les spécifications pour comprendre précisément leur comportement.

## Voir aussi

- [Référence des attributs HTML](/fr/docs/Web/HTML/Reference/Attributes)
- [IDL](https://fr.wikipedia.org/wiki/Interface_Description_Language) sur Wikipédia
- [Interface Definition Language <sup>(angl.)</sup>](http://www.eecs.berkeley.edu/~messer/netappc/Supplements/10-idl.pdf)
