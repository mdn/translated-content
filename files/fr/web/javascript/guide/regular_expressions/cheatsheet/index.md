---
title: Antisèche sur la syntaxe des expressions rationnelles
slug: Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
translation_of: Web/JavaScript/Guide/Regular_Expressions/Cheatsheet
---
{{jsSidebar("JavaScript Guide")}}

Cette page fournit une «&nbsp;antisèche&nbsp;» sur l'ensemble des fonctionnalités offertes par la syntaxe des objets `RegExp` en agrégeant le contenu des articles contenus dans le guide sur les expressions rationnelles. Si vous avez besoin de plus d'informations sur un sujet donné, vous pouvez suivre le lien donné en début de chaque section pour accéder à l'article correspondant. Vous pouvez également aller consulter [le guide en question](/fr/docs/Web/JavaScript/Guide/Regular_Expressions).

## Classes de caractères
[Les classes de caractères](/fr/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes) permettent de distinguer différents types de caractères comme, entre autres, les lettres ou les chiffres.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Caractères</th>
      <th scope="col">Signification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.</code></td>
      <td>
        <p>Peut signifier&nbsp;:</p>
        <ul>
          <li>
            Correspond à n'importe quel caractère <em>à l'exception</em> des terminateurs de ligne&nbsp;: <code>\n</code>, <code>\r</code>, <code>\u2028</code> ou <code>\u2029</code>. Ainsi, <code>/.y/</code> correspondra à "my" et "ay", mais pas à "yes" pour la chaîne de caractères "yes make my day".
          </li>
          <li>
            À l'intérieur d'une classe de caractères, le point perd ce sens spécial et correspond, littéralement, à un point.
          </li>
        </ul>
        <p>
          On notera que le marqueur multiligne <code>m</code> ne modifie pas le comportement du point. Aussi, pour qu'un motif corresponde sur plusieurs lignes, la classe de caractères <code>[^]</code> pour être utilisée, car elle correspondra à tout caractère, y compris ceux de nouvelle ligne.
        </p>
        <p>
          ES2018 a ajouté le marqueur <code>s</code> "dotAll", qui permet au point de correspondre aux terminateurs de ligne.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\d</code></td>
      <td>
        <p>
          Correspond à tout chiffre (chiffre arabe). Équivalent à la classe <code>[0-9]</code>. Ainsi, <code>/\d/</code> ou <code>/[0-9]/</code> correspondent à "2" dans "B2 est le numéro de suite".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\D</code></td>
      <td>
        <p>
          Correspond à tout caractère qui n'est pas un chiffre (chiffre arabe). Équivalent à la classe <code>[^0-9]</code>. Ainsi, <code>/\D/</code> ou <code>/[^0-9]/</code> correspondent à "B" dans "B2 est le numéro de suite".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          Correspond à tout caractère alphanumérique appartenant à l'alphabet latin ou aux chiffres arabes, incluant également le tiret bas. Équivalent à la classe <code>[A-Za-z0-9_]</code>. Ainsi, <code>/\w/</code> pourra correspondre à "a" dans "apple", "5" dans "$5.28", et "3" dans "3D".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\W</code></td>
      <td>
        <p>
          Correspond à tout caractère qui n'est pas un caractère de mot de l'alphabet latin ou des chiffres arabes. Équivalent à la classe <code>[^A-Za-z0-9_]</code>. Ainsi, <code>/\W/</code> ou <code>/[^A-Za-z0-9_]/</code> correspondra à "%" dans "50%".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\s</code></td>
      <td>
        <p>
          Correspond à un caractère de blanc, ce qui inclut un espace, une tabulation, une tabulation verticale, un saut de ligne ou les autres caractères d'espacement Unicode. Équivalent à la classe <code>[\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Ainsi, <code>/\s\w*/</code> correspondra à " truc" dans "toto truc".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\S</code></td>
      <td>
        <p>
          Correspond à un caractère qui n'est pas un blanc. Équivalent <code>[^\f\n\r\t\v\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]</code>. Ainsi, <code>/\S\w*/</code> correspondra à "toto" dans "toto truc".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\t</code></td>
      <td>Correspond à une tabulation horizontale.</td>
    </tr>
    <tr>
      <td><code>\r</code></td>
      <td>Correspond à un retour chariot.</td>
    </tr>
    <tr>
      <td><code>\n</code></td>
      <td>Correspond à un saut de ligne.</td>
    </tr>
    <tr>
      <td><code>\v</code></td>
      <td>Correspond à une tabulation verticale.</td>
    </tr>
    <tr>
      <td><code>\f</code></td>
      <td>Correspond à un saut de page.</td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>Correspond à un retour arrière. Si vous recherchez le caractère de limite de mot, (<code>\b</code>), voir <a href="/fr/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions">Limites</a>.
      </td>
    </tr>
    <tr>
      <td><code>\0</code></td>
      <td>Correspond au caractère NUL. Ne doit pas être suivi par un autre chiffre.</td>
    </tr>
    <tr>
      <td>
        <code>\c<em>X</em></code>
      </td>
      <td>
        <p>
          Correspond à un caractère de contrôle représenté par sa <a href="https://fr.wikipedia.org/wiki/Notation_caret">notation caret</a>, où "X" est une lettre de  A à Z (correspondant respectivement aux points de code <code>U+0001</code><em> à </em><code>U+001F</code>). Ainsi, <code>/\cM/</code> correspondra à "\r" dans "\r\n".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\x<em>hh</em></code>
      </td>
      <td>
        Correspond au caractère dont le code hexadécimal sur deux chiffres vaut <code><em>hh</em></code>.
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>hhhh</em></code>
      </td>
      <td>
        Correspond au codet UTF-16 de valeur hexadécimale (représentée sur 4 chiffres) <code><em>hhhh</em></code>.
      </td>
    </tr>
    <tr>
      <td>
        <code>\u<em>{hhhh}</em> or <em>\u{hhhhh}</em></code>
      </td>
      <td>
        (Uniquement lorsque le marqueur <code>u</code> est activé) Correspond au caractère dont la valeur Unicode représentée en hexadécimale vaut <code>U+<em>hhhh</em></code> ou <code>U+<em>hhhhh</em></code> .
      </td>
    </tr>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          Indique que le caractère suivant devrait être traité spécialement ou échappé. Il se comporte d'une de ces deux façons.
        </p>
        <ul>
          <li>
            Pour les caractères usuellement traités littéralement, cela indique que le prochain caractère est spécial et ne devrait pas être interprété littéralement. Ainsi, <code>/b/</code> correspond au caractère "b". En ajoutant une barre oblique inversée devant "b", c'est-à-dire en utilisant <code>/\b/</code>, le caractère devient spécial et indique une limite de mot.
          </li>
          <li>
            Pour les caractères usuellement traités comme spéciaux, cela indique que le prochain caractère n'est pas spécial et devrait être interprété littéralement. Par exemple, "*" est un caractère spécial qui indique 0 ou plusieurs occurrences du caractère précédent&nbsp;: <code>/a*/</code> correspondre à 0 ou plusieurs fois le caractère "a". Pour avoir une correspondance littérale du caractère <code>*</code>, il faudra utiliser une barre oblique inversée en préfixe&nbsp;: <code>/a\*/</code> correspondra à "a*".
          </li>
        </ul>
        <p>
          On notera que certains caractères comme <code>:</code>, <code>-</code>, <code>@</code> n'ont pas de signification spéciale, qu'ils soient échappés ou non. Ainsi, les séquences d'échappement comme <code>\:</code>, <code>\-</code>, <code>\@</code> seront équivalentes à la forme littérale du caractère non échappé. Toutefois, pour les expressions rationnelles avec <a href="/fr/docs/Web/JavaScript/Guide/Regular_Expressions#advanced_searching_with_flags_2">le marqueur unicode</a>, ces échappements génèreront une erreur <em>invalid identity escape</em>. Cela est fait pour s'assurer de la rétro-compatibilité pour le code existant qui utilise des nouvelles séquences d'échappement comme <code>\p</code> ou <code>\k</code>.
        </p>
        <div class="note">
          <p>
            <strong>Note :</strong> Afin de correspondre à ce caractère ("\") littéralement, on l'échappera lui-même en utilisant <code>/\\/</code>.
          </p>
        </div>
      </td>
    </tr>
  </tbody>
</table>

## Assertions

[Les assertions](/fr/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions) incluent les limites (décrivant les débuts et fins de ligne ou de mots) et d'autres motifs indiquant certains critères pour qu'une correspondance soit possible (recherche en avant, en arrière, expressions conditionnelles).

### Assertions de limites

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Caractères</th>
      <th scope="col">Signification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>^</code></td>
      <td>
        <p>
          Correspond au début de la chaîne. Si le marqueur multiligne est présent, cela correspond également immédiatement après un caractère de rupture de ligne. Ainsi, <code>/^U/</code> ne correspond pas au "U" dans "un U", mais correspond au premier "U" dans "Un U".
        </p>
        <div class="note">
          <p>
            <strong>Note :</strong> Ce caractère a un sens différent s'il apparaît au début d'un <a href="/fr/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges">groupe</a>.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>$</code></td>
      <td>
        <p>
          Correspond à la fin de la chaîne. Si le marqueur multiligne est présent, cela correspond également immédiatement avant un caractère de rupture de ligne. Ainsi, <code>/t$/</code> ne correspond pas au "t" dans "élémentaire", mais lui correspond dans "élément".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          Correspond à une limite de mot. Il s'agit de la position où un caractère de mot n'est pas suivi ou précédé d'un autre caractère de mot. Par exemple entre une lettre et un espace. La limite de mot n'est pas incluse dans la correspondance. Autrement dit, la longueur d'une limite de mot vaut zéro.
        </p>
        <p>Exemples&nbsp;:</p>
        <ul>
          <li><code>/\bm/</code> correspond au "m" dans "mur".</li>
          <li>
            <code>/oo\b/</code> ne correspond pas à "oo" dans "cool", car "oo"
            est suivi par "l" qui est un caractère de mot.
          </li>
          <li>
            <code>/ool\b/</code> correspond à "ool" dans "cool", car "ool" est à la fin de la chaîne de caractères et n'est donc pas suivi par un caractère de mot.
          </li>
          <li>
            <code>/\w\b\w/</code> ne correspondra jamais à rien, car un caractère de mot ne peut pas être suivi à la fois par une limite de mot et par un caractère de mot.
          </li>
        </ul>
        <p>
          Pour la correspondance du caractère retour arrière (<code>[\b]</code>), voir <a href="/fr/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes">les classes de caractères</a>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\B</code></td>
      <td>
        <p>
          Correspond à une position qui n'est pas une limite de mot. Il s'agit d'une position où le caractère précédent et le caractère suivant sont du même type&nbsp;: ou tous les deux sont des caractères de mot, ou tous les deux ne sont pas des caractères de mot. On a donc cette correspondance entre deux lettres ou entre deux espaces. De même que pour la limite de mot, cette position n'est pas incluse dans la correspondance. Ainsi, <code>/\Bol/</code> correspond à "ol" dans "truc cool", et <code>/hi\B/</code> correspond à "hi" dans "c'était hier".
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Autres assertions

> **Note :** Le caractère `?` peut également être utilisé comme quantificateur.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Caractères</th>
      <th scope="col">Signification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>x(?=y)</code></td>
      <td>
        <p>
          <strong>Recherche en avant</strong> Correspond à "x" uniquement si "x" est suivi par "y". Ainsi, /<code>Jack(?=Sprat)/</code> ne correspond à "Jack" qui si celui-ci est suivi par "Sprat". <code>/Jack(?=Sprat|Frost)/</code> correspond à "Jack" uniquement si celui-ci est suivi par "Sprat" ou "Frost". Toutefois, "Sprat" ou "Frost" ne font pas partie du résultat de la correspondance.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>
          <strong>Recherche en avant négative</strong> Correspond à "x" uniquement si "x" n'est pas suivi par "y". Ainsi, <code>/\d+(?!\.)/</code> correspond à un nombre, uniquement s'il n'est pas suivi par un point. <code>/\d+(?!\.)/.exec('3.141')</code> trouvera une correspondance pour "141" mais pas pour "3".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;=y)x</code></td>
      <td>
        <p>
          <strong>Recherche en arrière</strong> Correspond à "x" uniquement si "x" est précédé de "y". Ainsi, <code>/(?&#x3C;=Jack)Sprat/</code> correspond à "Sprat" uniquement s'il est précédé par "Jack". <code>/(?&#x3C;=Jack|Tom)Sprat/</code> correspond à "Sprat" uniquement s'il est précédé par "Jack" ou "Tom". Toutefois, ni "Jack" ni "Tom" ne font partie du résultat de la correspondance.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;!y)x</code></td>
      <td>
        <p>
          <strong>Recherche en arrière négative</strong> Correspond à "x" uniquement si "x" n'est pas précédé de "y". Ainsi, <code>/(?&#x3C;!-)\d+/</code> correspond à un nombre, uniquement s'il n'est pas précédé d'un signe moins <code>/(?&#x3C;!-)\d+/.exec('3')</code> trouvera une correspondance avec "3". <code>/(?&#x3C;!-)\d+/.exec('-3')</code> ne trouvera pas de correspondance car le nombre est précédé d'un signe moins.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Groupes et intervalles

[Les groupes et intervalles](/fr/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges) indiquent des groupes ou intervalles pour les caractères.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Caractères</th>
      <th scope="col">Signification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><em>x</em>|<em>y</em></code>
      </td>
      <td>
        <p>
          Correspond à "x" ou "y". Ainsi <code>/verte|rouge/</code> correspondra à "verte" dans "pomme verte" et à "rouge" dans "pomme rouge".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>[xyz]<br />[a-c]</code>
      </td>
      <td>
        <p>
          Une classe de caractères.  Correspond à n'importe lequel des caractères entre crochets. Il est possible d'indiquer un intervalle de caractères en utilisant un tiret. Toutefois, si le tiret apparaît comme premier ou dernier caractère entre les crochets, il sera interprété littéralement.
        </p>
        <p>
          Ainsi, <code>[abcd]</code> est équivalent à <code>[a-d]</code> et trouve "b" comme correspondance dans "bonnet", et "c" comme correspondance dans "côté".
        </p>
        <p>
          Par exemple, <code>[abcd-]</code> et <code>[-abcd]</code> correspondent au "b" dans "bonnet", au "c" dans "côté" et au tiret dans "peut-être".
        </p>
        <p>
          Par exemple, <code>[\w-]</code> est équivalent à <code>[A-Za-z0-9_-]</code>. "b" est une correspondance dans "bonnet", "c" est une correspondance dans "côté", et "t" est une correspondance dans "peut-être".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p>
          <code>[^xyz]<br />[^a-c]</code>
        </p>
      </td>
      <td>
        <p>
          La négation ou le complément d'une classe de caractère. Correspond à tout ce qui n'est pas indiqué entre les crochets. Il est possible d'indiquer un intervalle de caractères en utilisant un tiret. Si ce dernier est le premier ou le dernier caractère entre les crochets, il est interprété littéralement. Ainsi <code>[^abc]</code> est équivalent à <code>[^a-c]</code>. En utilisant ce motif, on a une correspondance pour "o" dans "coucou" et pour "h" dans "chouette".
        </p>
        <div class="note">
          <p>
            <strong>Note :</strong> Le caractère ^ peut également indiquer <a href="/fr/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions">le début d'une chaîne de caractères</a>.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>(<em>x</em>)</code></td>
      <td>
        <p>
          <strong>Groupe capturant</strong> Correspond à <code><em>x</em></code> et mémorise la correspondance. Ainsi, <code>/(toto)/</code> correspond à "toto" dans "toto truc" et mémorise cette correspondance.
        </p>
        <p>
          Une expression rationnelle peut avoir plusieurs groupes capturants. Les résultats de ces mémorisations sont stockés dans un tableau dont les éléments suivent le même ordre que les parenthèses ouvrantes des groupes capturants, ce qui correspond généralement à l'ordre des groupes. On peut ainsi accéder aux résultats avec l'index correspondant (<code>[1], ..., [n]</code>) ou en utilisant les propriétés de l'objet <code>RegExp</code> (<code>$1, ..., $9</code>).
        </p>
        <p>
          Les groupes capturants induisent un coût en performances. Si vous n'avez pas besoin de réutiliser les fragments de chaînes qui correspondent, privilégiez l'utilisation des groupes non capturants (voir ci-après).
        </p>
        <p>
          <code><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/match">String.match()</a></code> ne renverra pas de groupes si le marqueur <code>/.../g</code> est utilisé. Toutefois, on peut toujours utiliser <code><a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/String/matchAll">String.matchAll()</a></code> pour obtenir toutes les correspondances.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\<em>n</em></code>
      </td>
      <td>
        <p>
          Avec "n" un entier positif. Une référence à la n-ième correspondance fournie par un groupe. Ainsi, <code>/pomme(,)\sorange\1/</code> correspond à "pommme, orange," dans "pommme, orange, cerise, pêche".
        </p>
      </td>
    </tr>
    <tr>
      <td>\k&#x3C;Nom></td>
      <td>
        <p>
          Une référence au dernier fragment de chaîne correspondant au <strong>groupe capturant nommé</strong> indiqué par <code>&#x3C;Nom></code>.
        </p>
        <p>
          Ainsi, <code>/(?&#x3C;titre>\w+), oui \k&#x3C;titre>/</code> correspondra à "Messire, oui Messire" dans "Encore du travail ? Messire, oui Messire".
        </p>
        <div class="note">
          <p>
            <strong>Note :</strong> <code>\k</code> est utilisé ici littéralement pour indiquer le début d'une référence vers un groupe de capture nommé.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>(?&#x3C;Nom>x)</code></td>
      <td>
        <p>
          <strong>Groupe de capture nommé</strong> Correspond à "x" et enregistre la correspondance avec le nom indiqué par <code>&#x3C;Nom></code>. Les chevrons (<code>&#x3C;</code> et <code>></code>) sont nécessaires pour indiquer le nom du groupe.
        </p>
        <p>
          Ainsi, pour extraire le département d'un code postal, on pourra utiliser <code>/\((?&#x3C;dep>\d{2})\d+\)/</code>. Le résultat sera alors disponible via <code>matches.groups.dep</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        <strong>Groupe non-capturant</strong> Correspond à "x" mais ne garde pas la correspondance en mémoire. La sous-chaîne correspondante ne peut pas être récupérée depuis les éléments du tableau des correspondances (<code>[1], ..., [n]</code>) ou depuis les propriétés prédéfinies de l'objet <code>RegExp</code> (<code>$1, ..., $9</code>).
      </td>
    </tr>
  </tbody>
</table>

## Quantificateurs

[Les quantificateurs](/fr/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers) indiquent le nombre de caractères ou d'expressions pour la correspondance.

> **Note :** Dans ce qui suit, *élément* fait référence à des caractères uniques ou à des [classes de caractères](/fr/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes), [des échappements Unicode](/fr/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes), [des groupes et des intervalles](/fr/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges).

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Caractères</th>
      <th scope="col">Signification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><em>x</em>*</code>
      </td>
      <td>
        <p>
          Correspond à l'élément précédent "x" 0 ou plusieurs fois. Ainsi, <code>/bo*/</code> correspondra à  "buuuuu" dans "Il a marqué un buuuuut" et à "b" dans "Un bateau gazouilla", mais à rien dans "Un fromage de chèvre".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          Correspond à l'élément précédent "x" 1 ou plusieurs fois. Cette forme est équivalente à <code>{1,}</code>. Ainsi, <code>/a+/</code> correspond à "a" dans "bateau" et à tous les "a" dans "levioosaaaaa".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>
          Correspond à l'élément précédent "x" 0 ou 1 fois. Ainsi, <code>/e?le?/</code> correspond à "el" dans "dégel" et à "le" dans "angle."
        </p>
        <p>
          S'il est utilisé immédiatement après l'un des quantificateurs <code>*</code>, <code>+</code>, <code>?</code>, ou <code>{}</code>, cela rend le quantificateur «&nbsp;non-glouton&nbsp;» et celui correspond alors pour le minimum de la quantité (alors que par défaut, la correspondance s'effectue pour la quantité maximale).
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          Avec "n" un entier positif, correspond à "n" occurrences, exactement, de l'élément "x" précédent. Ainsi, <code>/a{2}/</code> ne correspond pas à "a" dans "bateau" mais correspond à tous les "a" dans "baateau" et seulement au deux premiers "a" dans "baaaaateau".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          Avec "n" un entier positif, correspond à au moins "n" occurrences de l'élément "x" précédent. Ainsi, <code>/a{2,}/</code> ne correspond pas à "a" dans "bateau", mais correspond à tous les "a" dans "baateau" et dans "baaaaaateau".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><em>x</em>{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <p>
          Avec "n" qui vaut 0 ou un entier positif et "m" un autre entier positif, et
          <code><em>m</em> > <em>n</em></code>, correspond au moins à "n" et au plus à "m" occurrences de l'élément "x" précédent. Ainsi, <code>/a{1,3}/</code> ne correspond à rien dans "bteau", à "a" dans "bateau", aux deux "a" dans "baateau", et aux trois premiers "a" dans "baaaaateau". On voit ici que la correspondance dans le dernier exemple est "aaa", même si la chaîne originale contient plus de "a".
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <p><code><em>x</em>*?</code></p>
        <p><code><em>x</em>+?</code></p>
        <p><code><em>x</em>??</code></p>
        <p><code><em>x</em>{n}?</code></p>
        <p><code><em>x</em>{n,}?</code></p>
        <p><code><em>x</em>{n,m}?</code></p>
      </td>
      <td>
        <p>
          Par défaut, les quantificateurs comme <code>*</code> et <code>+</code> sont «&nbsp;gloutons&nbsp;», ce qui signifie que la correspondance est la plus grande possible. Ajouter le caractère <code>?</code> après le quantificateur le rend «&nbsp;non-glouton&nbsp;», ce qui signifie que la correspondance est alors la plus courte possible. Ainsi, avec une chaîne comme "du &#x3C;toto> &#x3C;truc> avec &#x3C;/truc> &#x3C;/toto> bidule":
        </p>
        <ul>
          <li>
            <code>/&#x3C;.*>/</code> correspondra à "&#x3C;toto> &#x3C;truc> avec &#x3C;/truc> &#x3C;/toto>"
          </li>
          <li><code>/&#x3C;.*?>/</code> correspondra à "&#x3C;toto>"</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Échappement de propriétés Unicode

[Les séquences d'échappement de propriétés Unicode](/fr/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes) permettent de cibler des caractères en fonction de leurs propriétés Unicode.

```js
// Valeurs non-binaires
\p{ValeurPropriétéUnicode}
\p{NomPropriétéUnicode=ValeurPropriétéUnicode}

// Valeurs binaires et non-binaires
\p{NomPropriétéUnicodeBinaire}

// Négation : \P correspond à la négation de \p
\P{ValeurPropriétéUnicode}
\P{NomPropriétéUnicodeBinaire}
```

- NomPropriétéUnicodeBinaire
  - : Le nom d'une [propriété binaire Unicode](https://tc39.es/ecma262/multipage/text-processing.html#table-binary-unicode-properties). Par exemple [`ASCII`](https://unicode.org/reports/tr18/#General_Category_Property), [`Alpha`](https://unicode.org/reports/tr44/#Alphabetic), `Math`, [`Diacritic`](https://unicode.org/reports/tr44/#Diacritic), [`Emoji`](https://unicode.org/reports/tr51/#Emoji_Properties), [`Hex_Digit`](https://unicode.org/reports/tr44/#Hex_Digit), `Math`, [`White_space`](https://unicode.org/reports/tr44/#White_Space), etc. Voir [la liste des propriétés dans les données Unicode](https://www.unicode.org/Public/UCD/latest/ucd/PropList.txt) pour plus d'informations.
- NomPropriétéUnicode

  - : Le nom d'une propriété [non-binaire](https://tc39.es/ecma262/multipage/text-processing.html#table-nonbinary-unicode-properties)&nbsp;:

    - [General_Category](https://unicode.org/reports/tr18/#General_Category_Property) (`gc`)
    - [Script](https://unicode.org/reports/tr24/#Script) (`sc`)
    - [Script_Extensions](https://unicode.org/reports/tr24/#Script_Extensions) (`scx`)

    Voir aussi [PropertyValueAliases.txt](https://www.unicode.org/Public/UCD/latest/ucd/PropertyValueAliases.txt)

- ValeurPropriétéUnicode
  - : L'une des valeurs indiquées dans la section "Values". De nombreuses valeurs ont des alias ou des noms raccourcis (par exemple, la valeur `Decimal_Number`, de la propriété `General_Category`, peut être écrite `Nd`, `digit`, ou encore `Decimal_Number`). Pour la plupart des valeurs, la partie *`NomPropriétéUnicode`* et le signe égal peuvent être omis. Si *`NomPropriétéUnicode`* est indiqué, la valeur doit correspondre au type de propriété indiquée.

> **Note :** Il existe de nombreuses propriétés et valeurs disponibles. Il serait laborieux de les lister ici de façon exhaustive.
