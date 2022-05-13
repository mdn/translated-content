---
title: Classes de caractères
slug: Web/JavaScript/Guide/Regular_Expressions/Character_Classes
tags:
  - Classes
  - Guide
  - JavaScript
  - RegExp
translation_of: Web/JavaScript/Guide/Regular_Expressions/Character_Classes
original_slug: Web/JavaScript/Guide/Expressions_régulières/Classes_de_caractères
---
{{jsSidebar("JavaScript Guide")}}

Les classes de caractères permettent de distinguer différents ensembles de caractères dans les expressions rationnelles (par exemple les chiffres d'une part et les lettres d'autre part).

## Types

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Caractères</th>
      <th scope="col">Signification</th>
    </tr>
  </thead>
  <tbody></tbody>
  <tbody>
    <tr>
      <td><code>.</code></td>
      <td>
        <p>
          Par défaut, (Le point) correspond à n'importe quel caractère excepté
          un caractère de saut de ligne.
        </p>
        <p>
          Ainsi, <code>/.n/</code> correspond à  'un' et 'en' dans "Un baobab
          nain en cours de croissance" mais pas à 'nain'.
        </p>
        <p>
          Si le marqueur <code>s</code> (<em>dotAll</em>) est utilisé, le point
          correspondra également aux caractères de saut de ligne.
        </p>
        <p>
          Le marqueur <code>m</code> ne modifie pas le comportement du point.
        </p>
        <p>
          Attention, si on utilise le point dans
          <a
            href="/fr/docs/Web/JavaScript/Guide/Expressions_régulières/Groupes_et_intervalles"
            >un intervalle de caractères</a
          >, il n'aura plus cette signification spéciale.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>Correspond à un chiffre et est équivalent à <code>[0-9]</code>.</p>
        <p>
          Ainsi, <code>/\d/</code> ou <code>/[0-9]/</code> correspond à '2' dans
          "H2O est la molécule de l'eau".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          Correspond à tout caractère qui n'est pas un chiffre et est équivalent
          à<code> [^0-9]</code>.
        </p>
        <p>
          Ainsi, <code>/\D/</code> ou <code>/[^0-9]/</code> correspond à 'H'
          dans "H2O est la molécule de l'eau".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          Correspond à n'importe quel caractère alphanumérique de l'alphabet
          latin, y compris le tiret bas. C'est équivalent à
          <code>[A-Za-z0-9_]</code>.
        </p>
        <p>
          Ainsi, <code>/\w/</code> correspond à 'l' dans "licorne", à '5' dans
          "5,28€", et à '3' dans "3D."
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          Correspond à n'importe quel caractère n'étant pas un caractère de
          l'alphabet latin ou le tiret bas. Cela est équivalent à
          <code>[^A-Za-z0-9_]</code>.
        </p>
        <p>
          Ainsi, <code>/\W/</code> ou <code>/[^A-Za-z0-9_]/</code> correspond à
          '%' dans "50%."
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          Correspond à un blanc (cela comprend les espace, tabulation, saut de
          ligne ou saut de page). C'est équivalent à
          <code
            >[
            \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code
          >.
        </p>
        <p>
          Ainsi, <code>/\s\w*/</code> correspond à ' toto' dans "truc toto".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          Correspond à un caractère qui n'est pas un blanc. C'est équivalent à
          <code
            >[^
            \f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code
          >.
        </p>
        <p>Ainsi, <code>/\S\w*/</code> correspond à 'truc' dans "truc toto".</p>
      </td>
    </tr>
    <tr>
      <td><code>\t</code></td>
      <td>Correspond à une tabulation (U+0009).</td>
    </tr>
    <tr>
      <td><code>\r</code></td>
      <td>Correspond à un retour chariot (U+000D).</td>
    </tr>
    <tr>
      <td><code>\n</code></td>
      <td>Correspond à un saut de ligne (U+000A).</td>
    </tr>
    <tr>
      <td><code>\v</code></td>
      <td>Correspond à une tabulation verticale (U+000B).</td>
    </tr>
    <tr>
      <td><code>\f</code></td>
      <td>Correspond à un saut de page (U+000C).</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        Correspond pour un retour arrière (U+0008). (À ne pas confondre avec
        <code>\b</code>, voir
        <a href="/fr/docs/Web/JavaScript/Guide/Expressions_régulières/Limites"
          >les limites</a
        >).
      </td>
    </tr>
    <tr>
      <td><code>\0</code></td>
      <td>
        Correspond au caractère NULL (U+0000). Il ne doit pas être suivi d'un
        autre chiffre car <code>\0&#x3C;chiffres></code> est une
        <a
          href="/fr/docs/Web/JavaScript/Guide/Types_et_grammaire#Les_caractères_d&#x27;échappement"
          >séquence d'échappement</a
        >
        pour les nombres en notation octale (si besoin d'utiliser un chiffre
        ensuite, on pourra utiliser la forme <code>\x00</code>, cf. ci-après).
      </td>
    </tr>
    <tr>
      <td><code>\cX</code></td>
      <td>
        <p>
          Correspond au caractère de contrôle où <code><em>X</em></code> est une
          lettre entre A et Z. Correspond au caractèlres de contrôle
          correspondant entre <code>U+0001</code>-<code>U+001F</code>. Ainsi,
          <code>/\cM/</code> correspondra au caractère controle-M au sein d'une
          chaîne de caractères soit <code>"\r"</code> pour <code>"\r\n"</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\xhh</code></td>
      <td>
        Correspond au caractère dont le code hexadécimal est hh (deux chiffres
        hexadécimaux).
      </td>
    </tr>
    <tr>
      <td><code>\uhhhh</code></td>
      <td>
        Correspond au caractère dont le code est hhhh (quatre chiffres
        hexadécimaux).
      </td>
    </tr>
    <tr>
      <td><code>\u{hhhh}</code> ou <code>\u{hhhhh}</code></td>
      <td>
        (Uniquement actif quand le marqueur <code>u</code> est activé)
        Correspond au caractère dont la valeur Unicode est <code>hhhh</code> (en
        chiffre hexadécimaux).
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          La barre oblique inversée indique que le prochain caractère doit être
          traité spécifiquement ou échappé. Elle se comporte d'une de ces façons
          :
        </p>
        <ul>
          <li>
            Pour les caractères normalement traités littéralement, cela indique
            que le prochain caractère est spécial et qu'il ne doit pas être
            interprété littéralement. Ainsi, <code>/b/</code> correspondra à la
            lettre "b" mais en utilisant la barre oblique inversée devant
            <code>/\b/</code>, on cherchera une limite de mot.
          </li>
          <li>
            Pour les caractères spéciaux, la barre indique que le caractère doit
            être interprété littéralement. Ainsi, "*" est un caractère spécial
            (un quantificateur qui signifie que le caractère précédent doit être
            présent 0 ou plusieurs fois) : <code>/a*/</code> cherchera une
            correspondance avec 0 ou plusieurs "a". Si on souhaite trouver le
            caractère <code>*</code> dans une chaîne, on placera la barre
            oblique inversée devant : on a ainsi <code>/a\*/</code> qui permet
            de trouver "a*" dans une chaîne.
          </li>
        </ul>
        <div class="blockIndicator note">
          <p>
            <strong>Note :</strong> L'échappement vaut également avec la barre
            oblique inversée. Autrement dit, si on cherche la présence de
            <code>\</code> dans une chaîne, on pourra utiliser l'expression
            <code>/\\/</code> (où la première barre oblique échape la seconde).
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification            | État                 | Commentaires                                          |
| ------------------------ | -------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}} | {{Spec2('ES3')}} | Définition initiale. Implémentée avec JavaScript 1.1. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.RegExp.property_escapes")}}

## Voir aussi

- {{JSxRef("RegExp")}}
