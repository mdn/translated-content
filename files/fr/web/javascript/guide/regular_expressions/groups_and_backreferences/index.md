---
title: Groupes et intervalles
slug: Web/JavaScript/Guide/Regular_Expressions/Groups_and_Backreferences
tags:
  - Groupes
  - Guide
  - Intervalles
  - JavaScript
  - RegExp
translation_of: Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
original_slug: Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
---
{{jsSidebar("JavaScript Guide")}}

Les groupes et intervalles permettent de représenter des groupes ou des intervalles de caractères dans des expressions rationnelles.

## Types

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Caractères</th>
      <th scope="col">Signification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>x|y</code></td>
      <td>
        <p>Correspond à 'x' ou 'y'.</p>
        <p>
          Ainsi, <code>/vert|rouge/</code> correspond à 'vert' dans "feu vert"
          et à 'rouge' dans "feu rouge".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>[xyz]</code> ou <code>[a-c]</code></td>
      <td>
        Un ensemble de caractère. Ce type de motif correspond pour n'importe
        quel caractètre présent entre les crochets, y compris les
        <a
          href="/fr/docs/Web/JavaScript/Guide/Types_et_grammaire#Les_caractères_d&#x27;échappement"
          >séquences d'échappement</a
        >. Les caractères spéciaux comme le point (.) et l'astérisque ne sont
        pas considérés comme spéciaux au sein d'un ensemble et n'ont donc pas
        besoin d'être échappés. Il est possible de donner un ensemble sur un
        intervalle de caractères en utilisant un tiret (-), comme le montre
        l'exemple qui suit.<br /><br />Le motif <code>[a-d]</code>,  aura les
        mêmes correspondances que <code>[abcd]</code>, correspondant au 'b' de
        "bulle" et au 'c' de "ciel". Les motifis <code>/[a-z.]+/ </code>et
        <code>/[\w.]+/</code> correspondront pour la chaîne entirère :
        "Adre.ss.e".
      </td>
    </tr>
    <tr>
      <td>
        <p><code>[^xyz]</code> ou <code>[^a-c]</code></p>
      </td>
      <td>
        <p>
          Exclusion d'un ensemble de caractères. Cela correspond à tout ce qui
          n'est pas compris entre crochets. Il est possible de fournir un
          intervalle de caractères en utilisant un tiret (-). Les autres règles
          qui s'appliquent pour l'ensemble de caractères (ci-avant) s'appliquent
          également ici.
        </p>
        <p>
          Par exemple, <code>[^abc]</code> est équivalent à <code>[^a-c]</code>.
          Ils correspondent à 'u' dans "bulle" et à 'i' dans "ciel".
        </p>
        <div class="note">
          <p>
            <strong>Note :</strong> Le caractère <code>^</code> peut également
            être utilisé afin d'indiquer le
            <a
              href="/fr/docs/Web/JavaScript/Guide/Expressions_régulières/Limites"
              >début d'un champ</a
            >.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>(x)</code></td>
      <td>
        <p>
          Correspond à 'x' et garde la correspondance en mémoire. Les
          parenthèses permettent de <em>capturer </em>l'expression dans un «
          groupe ».<br /><br />Les '<code>(toto)</code>' et
          '<code>(truc)</code>', dans le motif
          <code>/(toto) (truc) \1 \2/</code> correspondent et gardent en mémoire
          les deux premiers mots de la chaîne de caractère "toto truc toto
          truc". Les <code>\1</code> et <code>\2</code> du motif correspondent
          respectivement à la première et à la deuxième correspondances pour les
          sous-chaînes entre parenthèses. Lorsqu'on souhaite effectuer un
          remplacement, on utilisera <code>$1</code> et <code>$2</code> pour
          faire référence au premier et second groupe et <code>$</code
          ><code>n </code>pour faire référence au n-ième groupe capturé (ex.
          <code>('toto truc'.replace(/(...) (...)/, '$2 $1').</code>
          <code>$&#x26;</code> fera référence à la chaîne entière).
        </p>
        <p>
          Capturing groups have a performance penalty. If you don't need the
          matched substring to be recalled, prefer non-capturing parentheses
          (see below).
        </p>
        <p>
          <code
            ><a
              href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match"
              >String.match()</a
            ></code
          >
          won't return groups if the <code>/.../g</code> flag is set. However,
          you can still use
          <code
            ><a
              href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll"
              >String.matchAll()</a
            ></code
          >
          to get all matches.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\n</code></td>
      <td>
        <p>
          Avec <code><em>n</em></code> un entier positif. Cela permet de faire
          référence à la dernière sous-chaîne qui correspond au n-ième groupe
          entre parenthèses de l'expression rationnelle (en comptant les
          parenthèses gauche). Ainsi,
          <code>/apple(,)\sorange\1/</code> correspondra à "apple, orange," dans
          "apple, orange, cherry, peach".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;Nom>x)</code></td>
      <td>
        <p>
          Correspond à <code>x</code> et nomme la correspondance. Les
          correspondances associées pourront être retrouvées via le nom indiqué.
          Les chevrons (<code>'&#x3C;'</code> et <code>'>'</code>) sont
          obligatoires pour encadrer le nom.
        </p>
        <p>
          Ainsi, si on veut extraire la composante de zone d'un numéro de
          téléphone aux États-Unis, on pourra écrire
          <code>/\((?&#x3C;area>\d\d\d)\)/</code> et récupérer le nombre voulu
          avec <code>matches.groups.area</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        Correspond à 'x' mais ne garde pas la correspondance en mémoire. Les
        parenthèses ne <em>capturent</em> pas l'expression et permettent
        d'utiliser des sous-expressions d'une expression régulière pour
        travailler plus finement. L'expression <code>/(?:zoo){1,2}/</code> sans
        parenthèes non-capturantes <code>les caractères {1,2}</code> ne
        s'appliqueraient qu'au dernier 'o' de 'zoo'. Avec les parenthèses
        capturantes, <code>{1,2}</code> s'applique au mot entier 'zoo'.
      </td>
    </tr>
  </tbody>
</table>

> **Note :** Firefox ne prend pas en charge les groupes nommés. Pour plus d'informations, voir [le bug correspondant](https://bugzilla.mozilla.org/show_bug.cgi?id=1362154).
