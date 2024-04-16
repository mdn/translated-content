---
title: Attributs SVG de base
slug: conflicting/Web/SVG/Attribute_8b46caaa15fc4ef35e048d2af4b381af
original_slug: Web/SVG/Attribute/Core
---

Les _attributs SVG de base_ sont tous les attributs communs pouvant être spécifiés sur n'importe quel élément SVG.

- `id`
- `lang`
- `tabindex`
- `xml:base`
- `xml:lang`
- `xml:space`

## Attributs

- {{SVGAttr('id')}}
  - : Définit un identifiant (ID) qui doit être unique dans tout le document. Son but est d'identifier l'élément pour pouvoir y faire référence plus tard, comme identificateur de fragment, dans du code, ou pour appliquer du style (avec CSS).
    _Valuer_: Tout ID valide; _Animation_: **Non**
- {{SVGAttr('lang')}}

  - : Définit le langage de l'élément — la langue dans laquelle sont écrit les éléments non-éditables et celle dans laquelle devrait être écrits les éléments éditables. L'attribut prend pour valeur l'identifiant de la langue tel que définit dans le [document IETF "Tags for Identifying Languages" (BCP47)](https://www.ietf.org/rfc/bcp/bcp47.txt).

    > **Note :** SVG 2 introduit l'attribut `lang`. Si les attributs `lang` et `xml:lang` sont tous les deux définis, `xml:lang` a la priorité sur `lang`.

    _Valeur_: Tout ID de langage valide; _Animation_: **Non**

- {{SVGAttr('tabindex')}}
  - : L'attribut SVG tabindex permet de contrôler si un élément peut prendre le focus et définit l'ordre relatif des éléments pour la navigation via tabulation.
    _Type de valeur_: [\<integer>](/fr/docs/Web/SVG/Content_type#Integer); _Animation_: **Non**
- {{SVGAttr('xml:base')}}
  - : Spécifie une IRI de base autre que celle du document.
    _Type de valeur_: [\<IRI>](/fr/docs/Web/SVG/Content_type#IRI); _Animation_: **Non**
- {{SVGAttr('xml:lang')}}

  - : C'est un attribut universel autorisé dans tous les documents XML pour définir le langage du texte présent dans l'élément. Son utilisation est presque identique à celle de l'attribut [`lang`](/fr/docs/Web/HTML/Attributs_universels/lang) en HTML, hormis que les documents XML 1.0 ne permettent pas l'utilisation d'une valeur d'attribut nulle (`xml:lang=""`) pour indiquer un langage inconnu. À la place, utiliser `xml:lang="und"`.

    > **Note :** SVG 2 introduit l'attribut `lang`. Si les attributs `lang` et `xml:lang` sont tous les deux définis, `xml:lang` a la priorité sur `lang`.

    _Valeur_: Tout ID de langage valide; _Animation_: **Non**

- {{SVGAttr('xml:space')}} {{deprecated_inline}}

  - : SVG prend en charge l'attribut XML standard `xml:space` pour spécifier le traitement des caractères d'espaces dans les données d'un élément {{ SVGElement("text") }} donné.

    > **Note :** Plutôt qu'utiliser l'attribut `xml:space` vous devriez utiliser la propriété CSS {{cssxref('white-space')}} à la place.

    _Valeur_: **`default`** | `preserve`; _Animation_: **Non**

## Compatibilité des navigateurs

{{Compat}}
