---
title: Expressions rationnelles
slug: Web/JavaScript/Guide/Regular_expressions
---

{{jsSidebar("JavaScript Guide")}}{{PreviousNext("Web/JavaScript/Guide/Formatage_du_texte", "Web/JavaScript/Guide/Collections_indexées")}}

Les expressions rationnelles sont des motifs utilisés pour correspondre à certaines combinaisons de caractères au sein de chaînes de caractères. En JavaScript, les expressions rationnelles sont également des objets. Ces motifs sont utilisés avec les méthodes {{jsxref("RegExp.exec", "exec")}} et {{jsxref("RegExp.test", "test")}} de {{jsxref("RegExp")}}, et avec les méthodes {{jsxref("String.match", "match")}}, {{jsxref("String.matchAll", "matchAll")}}, {{jsxref("String.replace", "replace")}}, {{jsxref("String.search", "search")}} et {{jsxref("String.split", "split")}} de {{jsxref("String")}}. Ce chapitre explique comment utiliser les expressions rationnelles en JavaScript (aussi appelées expressions régulières ou « _RegExp_ »).

## Créer une expression rationnelle

Il est possible de construire une expression rationnelle de deux façons :

- Utiliser un littéral d'expression régulière, qui correspond à un motif contenu entre deux barres obliques, par exemple :

  ```js
  var re = /ab+c/;
  ```

  Lorsque les littéraux d'expression régulière sont utilisés, l'expression est compilée lors du chargement du script. Il est préférable d'utiliser cette méthode lorsque l'expression régulière reste constante, afin d'avoir de meilleurs performances.

- Appeler le constructeur de l'objet {{jsxref("RegExp")}}, par exemple :

  ```js
  var re = new RegExp("ab+c");
  ```

  Avec cette méthode, l'expression rationnelle est compilée lors de l'exécution. On utilisera cette méthode lorsque le motif utilisé est variable ou provient d'une autre source (par exemple une interaction utilisateur).

## Écrire une expression rationnelle

Le motif d'une expression rationnelle est composé de caractères simples (comme `/abc/`), ou de caractères simples et spéciaux, comme `/ab*c/` ou `/Chapitre (\d+)\.\d*/`. Le dernier exemple utilise des parenthèses qui permettent d'avoir une « mémoire ». La correspondance avec le motif contenu entre parenthèses pourra être utilisée par la suite. Ceci est décrit avec [ce paragraphe](#parentheses).

### Utiliser des motifs simples

Les motifs simples sont construits à partir de caractères pour lesquels on souhaite avoir une correspondance directe. Le motif `/des/` correspond lorsqu'on observe exactement les caractères 'des' ensemble et dans cet ordre précis. On pourrait utiliser ce motif et détecter une correspondance dans les chaînes suivantes : "J'ai vu des licornes ?" et "Sa description de licorne était superbe" car la chaîne de caractères 'des' y est présente (dans le mot description pour le second exemple). Il n'y aura pas de correspondance avec la chaîne de caractères "Toc toc" car 'des' n'est pas présente.

### Utiliser des caractères spéciaux

Lorsque le motif à trouver est plus complexe qu'une simple égalité (trouver tous les B, les blancs...), le motif devra contenir des caractères spéciaux. Ainsi, le motif `/ab*c/` correspond à toutes les combinaisons de caractères qui possèdent un seul 'a' suivi de zéro ou plusieurs 'b' (l'astérisque utilisée ici signifie que l'élément qui la précède doit être présent zéro ou plusieurs fois) qui sont immédiatement suivis d'un 'c'. Par exemple, la chaîne de caractère "cbbabbbbcdebc" correspond au motif avec la chaîne de caractères 'abbbbc'.

Les pages suivantes décrivent en détail les caractères spéciaux qui peuvent être utilisés afin de composer une expression rationnelle.

- [Assertions](/fr/docs/Web/JavaScript/Guide/Expressions_régulières/Assertions)
  - : Une assertion caractérisant la façon dont la correspondance peut se produire (en recherchant un motif avant, après ou avec une expression conditionnelle).
- [Limites](/fr/docs/Web/JavaScript/Guide/Expressions_régulières/Limites)
  - : Permet d'indiquer le début ou la fin d'une ligne ou d'un mot.
- [Classes de caractère](/fr/docs/Web/JavaScript/Guide/Expressions_régulières/Classes_de_caractères)
  - : Les classes permettent de distinguer différents caractères selon différents groupes (par exemple les lettres et les chiffres).
- [Groupes et intervalles](/fr/docs/Web/JavaScript/Guide/Expressions_régulières/Groupes_et_intervalles)
  - : Permet d'indiquer un groupe ou un intervalle de caractères.
- [Quantificateurs](/fr/docs/Web/JavaScript/Guide/Expressions_régulières/Quantificateurs)
  - : Permet d'indiquer un nombre de caractères ou d'expressions qui doivent correspondre.
- [Propriétés Unicode](/fr/docs/Web/JavaScript/Guide/Expressions_régulières/Unicode_Properties)
  - : Permet de distinguer les caractères en fonction de leurs caractéristiques Unicode (majuscule/minuscule, symbole mathématique, ponctuation).

### Échapper des caractères

SI on souhaite rechercher certains caractères dans une chaîne de caractères et que ceux-ci ont une signification spéciale lorsqu'ils font partie d'une expression rationnelle (ex. "\*"), il faudra échapper ces caractères spéciaux en plaçant une barre oblique inversée (_backslash_ "\\") devant. Ainsi, si on souhaite trouver un "a" suivi d'un astérisque ("\*") suivi d'un "b", on pourra composer l'expression rationnelle : `/a\*b/` où la barre oblique inversée échappe l'astérisque afin de lui enlever sa signification particulière.

De même si on écrit un littéral d'expression rationnelle et qu'on souhaite rechercher une barre oblique ("/") dans la chaîne cible, on pourra échapper ce caractère (sinon, il aura sa signification particulière aux expressions rationnelles et indiquera la fin du motif). Si on cherche la présence de "/exemple/" dans une chaîne de caractères, on pourra utiliser le littéral `/\/exemple\//`.

Il en va de même avec la barre oblique inversée (dont la signification spécifique est justement l'échappement) : si on veut rechercher la chaîne "C:\\", on pourra utiliser le motif `/C:\\/` (la première barre oblique inversée sert à échapper la seconde).

Lorsqu'on utilise le constructeur {{jsxref("RegExp")}} avec une chaîne de caractères en paramètre (plutôt qu'un littéral), il faudra échapper la barre oblique inversée qui a un sens particulier dans les chaînes de caractères. Ainsi, le littéral `/a\*b/` et `new RegExp("a\\*b")` créeront la même expression (qui permet de chercher la lettre "a", suivie d'un astérisque, suivi de la lettre "b").

La tableau qui suit fournit une liste complète des caractères spéciaux pouvant être utilisés dans les expressions régulières ainsi que leur signification.

<table class="standard-table">
  <caption>
    Caractères spéciaux utilisables pour les expressions rationnelles.
  </caption>
  <thead>
    <tr>
      <th scope="col">Caractère</th>
      <th scope="col">Signification</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>\</code></td>
      <td>
        <p>
          Correspond selon les règles suivantes :<br /><br />Une barre oblique
          inversée (<em>backslash</em>) précédant un caractère non spécial
          indique que le caractère qui suit est spécial et qu'il ne doit pas
          être interprété directement. Ainsi, un '<code>b</code>', sans
          <code>\</code> avant, correspondra pour les 'b' minuscules quel que
          soit leur position. En revanche '<code>\b</code>' ne correspondra à
          aucun caractère mais indique
          <a href="#special-word-boundary">un caractère de fin de mot</a
          >.<br /><br />Un <em>backslash</em> précédant un caractère spécial
          indique que le caractère qui suit doit être interprété littéralement
          (et non pas comme un caractère spécial). Ainsi, le motif
          <code>/a*/</code> utilise le caractère spécial '<code>*</code>' pour
          correspondre à 0 ou plusieurs 'a'. Le motif <code>/a\*/</code>, au
          contraire, rend '<code>*</code>' non-spécial pour correspondre aux
          chaînes de caractères qui comportent la lettre a et une astérisque,
          comme 'a*'.<br /><br />Il ne faut pas oublier d'échapper le caractère
          <code>\</code> car lui-même est un caractère d'échappement dans les
          chaînes de caractères. Cela est utile lorsqu'on utilise la notation
          RegExp("motif").
        </p>
      </td>
    </tr>
    <tr>
      <td><code>^</code></td>
      <td>
        Correspond au début la séquence. Si le marqueur (<em>flag</em>) de
        lignes multiples vaut <code>true</code>, il correspondra également
        immédiatement après un caractère de saut de ligne.<br /><br />Ainsi,
        <code>/^A/</code> ne correspond pas au 'A' de "un A", mais correspond au
        'A' de "Arceau".<br /><br />Le caractère '<code>^</code>' possède un
        sens différent lorsqu'il est utilisé dans un motif d'ensemble de
        caractères. Voir les
        <a href="#special-negated-character-set"
          >compléments sur les ensembles de caractères </a
        >pour plus de détails et d'exemples.
      </td>
    </tr>
    <tr>
      <td><code>$</code></td>
      <td>
        <p>
          Correspond à la fin de la séquence. Si le marqueur (<em>flag</em>) de
          lignes multiples vaut true, il correspondra également immédiatement
          avant un caractère de saut de ligne.
        </p>
        <p>
          Ainsi, <code>/t$/</code> ne correspond pas au 't' de "printemps", mais
          correspond au 't' de "aliment".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>*</code></td>
      <td>
        <p>
          Correspond à l'expression précédente qui est répétée 0 ou plusieurs
          fois. Équivalent à <code>{0,}</code>
        </p>
        <p>
          Ainsi, <code>/bo*/</code> correspond à 'boo' dans "Un booléen" et à
          'b' dans "Un bateau bleu", mais ne correspond à rien dans "Ce matin".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>+</code></td>
      <td>
        <p>
          Correspond à l'expression précédente qui est répétée une ou plusieurs
          fois. C'est équivalent à <code>{1,}</code>.
        </p>
        <p>
          Ainsi, <code>/a+/</code> correspond au 'a' dans "maison" et à tous les
          'a' dans "maaaaaaison" mais ne correspond à rien dans "mission".
        </p>
      </td>
    </tr>
    <tr>
      <td><code>?</code></td>
      <td>
        Correspond à l'expression précédente qui est présente une fois ou pas du
        tout. C'est équivalent à <code>{0,1}</code>.<br /><br />Ainsi,
        <code>/e?le?/</code> correspond au 'el' dans "gel" et au 'le' dans
        "angle" mais aussi au 'l' dans "Oslo".<br /><br />S'il est utilisé
        immédiatement après l'un des quantificateurs : *, +, ?, ou {}, il rend
        le quantificateur moins « gourmand » auquel cas le moins de caractères
        correspond (le comportement par défaut, « gourmand », permettant de
        faire correspondre le plus de caractères possible). Par exemple
        <code>/\d+/</code> utilisée avec "123abc" fait correspondre "123".
        Utiliser <code>/\d+?/</code> à la même chaîne de caractères fait
        correspondre "1".<br /><br />Ce symbole est également utilisé dans les
        tests de présence autour de l'expression, décrits par les lignes
        <code>x(?=y)</code> et <code>x(?!y)</code> de ce tableau.
      </td>
    </tr>
    <tr>
      <td><code>.</code></td>
      <td>
        <p>
          Par défaut, (Le point) correspond à n'importe quel caractère excepté
          un caractère de saut de ligne.
        </p>
        <p>
          Ainsi, <code>/.n/</code> correspond à 'un' et 'en' dans "Un baobab
          nain en cours de croissance" mais pas à 'nain'.
        </p>
        <p>
          Si le marqueur <code>s</code> (<em>dotAll</em>) est utilisé, le point
          correspondra également aux caractères de saut de ligne.
        </p>
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
      </td>
    </tr>
    <tr>
      <td><code>(?:x)</code></td>
      <td>
        Correspond à 'x' mais ne garde pas la correspondance en mémoire. Les
        parenthèses ne <em>capturent</em> pas l'expression et permettent
        d'utiliser des sous-expressions d'une expression régulière pour
        travailler plus finement. L'expression <code>/(?:zoo){1,2}/</code> sans
        parenthèses non-capturantes <code>les caractères {1,2}</code> ne
        s'appliqueraient qu'au dernier 'o' de 'zoo'. Avec les parenthèses
        capturantes, <code>{1,2}</code> s'applique au mot entier 'zoo'. Pour
        plus d'informations, voir
        <a href="#parentheses">Utiliser les parenthèses</a> ci-après.
      </td>
    </tr>
    <tr>
      <td><code>x(?=y)</code></td>
      <td>
        <p>
          Correspond à 'x' seulement s'il est suivi de 'y'. On appelle cela un
          test de succession (<em>lookahead</em>).
        </p>
        <p>
          Ainsi, <code>/Jack(?=Sparrow)/</code> correspond à 'Jack' seulement
          s'il est suivi de 'Sparrow'.
          <code>/Jack(?=Sparrow|Bauer)/</code> correspond à 'Jack' seulement
          s'il est suivi de 'Sparrow' ou de 'Bauer'. Cependant, ni 'Sparrow' ni
          'Bauer' ne feront partie de la correspondance.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>x(?!y)</code></td>
      <td>
        <p>Correspond à 'x' seulement si 'x' n'est pas suivi de 'y'.</p>
        <p>
          Ainsi, <code>/\d+(?!\.)/</code> correspond à un nombre qui n'est pas
          suivi par un point, cette expression utilisée avec
          <code>la chaîne 3.141</code> correspondra pour '141' mais pas pour
          '3.141'.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>(?&#x3C;=<em>y</em>)<em>x</em></code>
      </td>
      <td>
        <p>
          Correspond à <code><em>x</em></code> seulement si
          <code><em>x</em></code> est précédé par <code><em>y</em></code
          >. C'est ce qu'on appelle une recherche arrière (<em>lookbehind</em>).
        </p>
        <p>
          Ainsi /<code>(?&#x3C;=Jack)Sprat/</code> correspond à "Sprat"
          seulement s'il est précédé de "Jack".<br /><code
            >/(?&#x3C;=Jack|Tom)Sprat/</code
          >
          correspond à "Sprat" seulement s'il est précédé de "Jack" ou "Tom".<br />Toutefois,
          "Jack" et "Tom" ne feront pas partie de la correspondance.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>(?&#x3C;!<em>y</em>)<em>x</em></code>
      </td>
      <td>
        <p>
          Correspond à <code><em>x</em></code> uniquement si
          <code><em>x</em></code> n'est pas précédé par
          <code><em>y</em></code> (parfois appelée en anglais
          <em>negated lookbehind</em>)<em>.</em>
        </p>
        <p>
          Ainsi, <code>/(?&#x3C;!-)\d+/</code> correspondra à un nombre
          seulement si celui-ci n'est pas précédé d'un signe moins.<br /><code
            >/(?&#x3C;!-)\d+/.exec('3')</code
          >
          cible "3".<br /><code>/(?&#x3C;!-)\d+/.exec('-3')</code> ne trouve
          aucune correspondance car le nombre est précédé d'un signe.
        </p>
      </td>
    </tr>
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
      <td><code>{n}</code></td>
      <td>
        Correspond pour exactement n occurences de l'expression précédente. N
        doit être un entier positif.<br /><br />Ainsi, <code>/a{2}/</code> ne
        correspond pas au 'a' de "Mozilla" mais correspond à tous les 'a' de
        "Mozilaa" et aux deux premiers 'a' de "Mozillaaa".
      </td>
    </tr>
    <tr>
      <td><code>{n,}</code></td>
      <td>
        <p>
          Correspond lorsqu'il y a au moins <code>n</code> occurences de
          l'expression précédente. <code>n</code> doit être un entier positif.
        </p>
        <p>
          Par exemple <code>/a{2,}/</code> correspondra à <code>"aa"</code> ou à
          <code>"aaa"</code> ou encore à <code>"aaaa"</code> mais pas à
          <code>"a"</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>{n,m}</code></td>
      <td>
        <p>
          Lorsque <code>n</code> et <code>m</code> sont des entiers positifs,
          cela correspond à au moins <code>n</code> occurences de l'expression
          précédente et à au plus <code>m</code> occurrences. Lorsque
          <code>m</code> n'est pas utilisé, la valeur par défaut correspondante
          sera l'infini.
        </p>
        <p>
          Ainsi, <code>/a{1,3}/</code> ne correspond à rien dans "Mozill", au
          'a' de "Mozilla", au deux premiers 'a' de "Mozillaa" et au trois
          premiers 'a' de "Mozillaaaaa". Pour ce dernier exemple, on doit noter
          que le correspondance ne se fait que sur "aaa" bien qu'il y ait plus
          de 'a' dans la chaîne de caractères.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>[xyz]</code></td>
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
        l'exemple qui suit.<br /><br />Le motif <code>[a-d]</code>, aura les
        mêmes correspondances que <code>[abcd]</code>, correspondant au 'b' de
        "bulle" et au 'c' de "ciel". Les motifis <code>/[a-z.]+/ </code>et
        <code>/[\w.]+/</code> correspondront pour la chaîne entirère :
        "Adre.ss.e".
      </td>
    </tr>
    <tr>
      <td><code>[^xyz]</code></td>
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
      </td>
    </tr>
    <tr>
      <td><code>[\b]</code></td>
      <td>
        Correspond pour un retour arrière (U+0008). (À ne pas confondre avec
        <code>\b</code>.)
      </td>
    </tr>
    <tr>
      <td><code>\b</code></td>
      <td>
        <p>
          Correspond à la position d'une <em>limite de mot</em>. Une
          limite de mot correspond à la position où un caractère d'un mot n'est
          pas suivi ou précédé d'un autre caractère de mot. Il faut savoir que
          la limite correspondante n'est pas incluse dans le résultat. Autrement
          dit, la longueur d'une telle correspondance est nulle. (À ne pas
          confondre avec <code>[\b]</code>.)
        </p>
        <p>
          Exemples :<br /><code>/\bm/</code> correspond au 'm' dans "mignon"
          ;<br /><code>/no\b/</code> ne correspond pas au 'no' de "mignon" car
          'no' est suivi de 'n' qui n'est pas un caractère de limite de mot;<br /><code
            >/non\b/</code
          >
          correspond au 'non' de "mignon" car 'non' représente la fin de la
          chaîne de caractère et n'est donc pas suivi par un caractère de
          mot.<br /><code>/\w\b\w/</code> ne correspondra jamais à quoi que ce
          soit car un caractère de mot ne peut pas être suivi à la fois par un
          caractère de mot et un caractère n'étant pas un caractère de mot.
        </p>
        <div class="note">
          <p>
            <strong>Note :</strong> Le moteur d'expressions rationnelles
            JavaScript définit
            <a
              href="http://www.ecma-international.org/ecma-262/5.1/#sec-15.10.2.6"
              >un ensemble de caractères spécifiques</a
            >
            qui doivent être considérés comme des caractères de mot. Tout
            caractère qui n'est pas dans cet ensemble est considéré comme une
            limite de mot. Cet ensemble de caractères est relativement limité
            car constitué uniquement des caractères de l'alphabet romain en
            minuscules et en majuscules, des chiffres décimaux et du tiret-bas
            (<em>underscore</em>). Les autres caractères, comme les caractères
            accentués (é ou ü par exemple), sont donc considérés comme des
            limites de mots.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>\B</code></td>
      <td>
        <p>
          Correspond à une "non-<em>limite de mot</em>". Cela correspond pour
          les cas suivants :
        </p>
        <ul>
          <li>Avant le premier caractère d'une chaîne de caractères</li>
          <li>Après le dernier caractère d'une chaîne de caractères</li>
          <li>Entre deux caractères de mot</li>
          <li>Entre deux caractères qui ne sont pas des caractères de mot</li>
          <li>Avec la chaîne vide.</li>
        </ul>
        <p>
          Ainsi, <code>/\B../</code> correspond au 'oo' de "football" (et
          <code>/e\B./</code> correspond au 'er' dans "une mer "
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code>\c<em>X</em></code>
      </td>
      <td>
        <p>
          Étant donné un caractère <em>X</em> compris entre A et Z, cela
          correspond au caractère de contrôle dans une chaîne de caractères.
        </p>
        <p>
          Ainsi, <code>/\cM/</code> correspond au caractère de contrôle M
          (U+000D) d'une chaîne de caractère.
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
      <td><code>\f</code></td>
      <td>Correspond à un saut de page (U+000C).</td>
    </tr>
    <tr>
      <td><code>\n</code></td>
      <td>Correspond à un saut de ligne (U+000A).</td>
    </tr>
    <tr>
      <td><code>\r</code></td>
      <td>Correspond à un retour chariot (U+000D).</td>
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
      <td><code>\v</code></td>
      <td>Correspond à une tabulation verticale (U+000B).</td>
    </tr>
    <tr>
      <td><code>\w</code></td>
      <td>
        <p>
          Correspond à n'importe quel caractère alphanumérique, y compris le
          tiret bas. C'est équivalent à <code>[A-Za-z0-9_]</code>.
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
          Correspond à n'importe quel caractère n'étant pas un caractère de mot.
          Cela est équivalent à <code>[^A-Za-z0-9_]</code>.
        </p>
        <p>
          Ainsi, <code>/\W/</code> ou <code>/[^A-Za-z0-9_]/</code> correspond à
          '%' dans "50%."
        </p>
      </td>
    </tr>
    <tr>
      <td><code>\n</code></td>
      <td>
        <p>
          Soit <em>n</em> un entier strictement positif, cela fait référence au
          groupe de la n-ième expression entre parenthèses (en comptant les
          parenthèses ouvrantes).
        </p>
        <p>
          Ainsi, <code>/pomme(,)\spoire\1/</code> correspond à 'pomme, poire,'
          dans "pomme, poire, cerise, pêche".
        </p>
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
      <td><code>\u{hhhh}</code></td>
      <td>
        (Uniquement actif quand le marqueur <code>u</code> est activé)
        Correspond au caractère dont la valeur Unicode est <code>hhhh</code> (en
        chiffre hexadécimaux).
      </td>
    </tr>
  </tbody>
</table>

Afin d'échapper les informations saisies par l'utilisateur et de traîter les chaînes de caractères pour les utiliser au sein d'un expression régulière correspondante, il est possible d'utiliser le remplacement suivant :

```js
function escapeRegExp(string) {
  // $& correspond à la chaîne correspondante
  // dans son intégralité
  return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
```

Le marqueur `g` situé en fin d'expression permet d'effectuer une recherche globale, qui parcoure toute la chaîne et renvoie l'ensemble des correspondances trouvées (voir [Utiliser les marqueurs](#recherches_flag) ci-après).

> **Note :** Voir la page sur la méthode [`String.replace`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/replace) pour plus d'informations.

### Utiliser les parenthèses

Les parenthèses encadrant une partie du motif de l'expression régulière peuvent être utilisées pour garder en mémoire les correspondances. Cela pourra être utile pour réutiliser la correspondance trouvée.

Ainsi, le motif `/Chapitre (\d+)\.\d*/` utilise des caractères échappés et spéciaux et indique une partie du motif à garder en mémoire. Ce motif correspond aux caractères 'Chapitre ' suivi par un ou plusieurs caractères numériques (`\d` correspond à un chiffre et `+` indiquant que une série de 1 ou plusieurs chiffres), suivis par un point (qu'il est nécessaire d'échapper car c'est un caractère spécial, on utilise donc '\\' pour indiquer qu'on souhaite reconnaître le caractère '.'), suivi par 0 ou plusieurs chiffres (`\d` correspondant à un chiffre et l'astérisque indiquant que le caractère est présent 0 ou plusieurs fois). Les parenthèses sont utilisées pour garder en mémoire les premiers chiffres correspondant.

Ce motif est trouvé dans "Ouvrir le Chapitre 4.3 au paragraphe 6" et le chiffre '4' est gardé en mémoire. Le motif n'est pas trouvé dans "Chapitre 3 et 4", car la chaîne de caractères ne comporte pas de point après le '3'.

Pour qu'une partie de la chaîne de caractère corresponde mais que la correspondance ne soit pas gardée en mémoire, on pourra utiliser `?:`. Ainsi, `(?:\d+)` correspondra pour une séquence de chiffres (1 ou plusieurs chiffres) mais on ne gardera pas en mémoire les caractères correspondants.

## Utiliser les expressions rationnelles

Les expresssions régulières sont utilisées avec les méthodes `test` et `exec` de l'objet `RegExp` et avec les méthodes `match`, `replace`, `search`, et `split` de l'objet `String`. Ces méthodes sont expliquées en détail dans la [Référence JavaScript](/fr/docs/Web/JavaScript/Reference).

| Méthode                                   | Description                                                                                                                                                                                        |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp.exec", "exec")}}         | Une méthode de l'objet `RegExp` qui exécute une recherche de correspondance dans une chaîne de caractères. Elle renvoie un tableau d'informations ou `null` lorsqu'il n'y a pas de correspondance. |
| {{jsxref("RegExp.test", "test")}}         | Une méthode de l'objet `RegExp` testant la présence d'une correspondance dans une chaîne de caractères. Elle renvoie true ou false.                                                                |
| {{jsxref("String.match", "match")}}       | Une méthode de l'objet `String` qui exécute une recherche de correspondance dans une chaîne de caractères. Elle renvoie un tableau d'informations ou `null` lorsqu'il n'y a pas de correspondance. |
| {{jsxref("String.matchAll", "matchAll")}} | Une méthode de l'objet `String` qui renvoie un itérateur contenant l'ensemble des correspondances, y compris les groupes capturants.                                                               |
| {{jsxref("String.search", "search")}}     | Une méthode de l'objet `String` qui teste la présence d'une correspondance dans une chaîne de correspondance. Elle renvoie la position de la correspondance ou -1 s'il n'y en a pas.               |
| {{jsxref("String.replace", "replace")}}   | Une méthode de l'objet `String` qui recherche une correspondance dans une chaîne de caractères et qui remplace la correspondance par une chaîne de substitution.                                   |
| {{jsxref("String.split", "split")}}       | Une méthode de l'objet `String` qui utilise une expression régulière ou une chaîne de caractères pour découper une chaîne de caractères en un tableau comprenant les fragments résultants.         |

Pour savoir si un motif est présent au sein d'une chaîne de caractères, utiliser les méthodes `test` ou `search`. Pour obtenir plus d'informations (moins rapidement) on utilisera les méthodes `exec` ou `match`. Si on utilise `exec` ou `match` et qu'une correspondance est trouvée, ces méthodes renverront un tableau et mettront à jour des propriétés de l'objet global `RegExp` et aussi de l'instance de `RegExp` associée à l'expression rationnelle. Si aucune correspondance n'est trouvée, la méthode `exec` renverra `null` (qui est automatiquement converti à `false` lors d'un test conditionnel).

Dans l'exemple qui suit, le script utilise la méthode `exec` pour trouver une correspondance dans une chaîne de caractères.

```js
var monExpressionReguliere = /d(b+)d/g;
var monTableau = monExpressionReguliere.exec("cdbbdbsbz");
```

S'il n'est pas nécessaire d'accéder aux propriétés de l'expression régulière, une autre façon de récupérer `monTableau` peut être :

```js
var monTableau = /d(b+)d/g.exec("cdbbdbsbz");
// équivalent à "cdbbdbsbz".match(/d(b+)d/g);
```

Si on souhaite construire une expression régulière à partir d'une chaîne de caractères, on peut utiliser le script suivant :

```js
var monExpressionReguliere = new RegExp("d(b+)d", "g");
var monTableau = monExpressionReguliere.exec("cdbbdbsbz");
```

Avec ces scripts, on obtient bien une correspondance, la méthode renvoie un tableau et met à jour les propriétés listées dans le tableau qui suit.

<table class="standard-table">
  <caption>
    Résultats dûs à l'exécution d'une expression rationnelle.
  </caption>
  <thead>
    <tr>
      <th scope="col">Objet</th>
      <th scope="col">Propriété ou indice</th>
      <th scope="col">Description</th>
      <th scope="col">Pour cet exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td rowspan="4"><code>monTableau</code></td>
      <td></td>
      <td>
        La chaîne de caractères correspondante et les fragments de chaînes
        gardés en mémoire.
      </td>
      <td><code>["dbbd", "bb"]</code></td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>
        L'indice (débute à partir de 0) de la correspondance, compté dans la
        chaîne de caractère initiale.
      </td>
      <td><code>1</code></td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>La chaîne de caractères initiale.</td>
      <td><code>"cdbbdbsbz"</code></td>
    </tr>
    <tr>
      <td><code>[0]</code></td>
      <td>Les derniers caractères qui correspondent.</td>
      <td><code>"dbbd"</code></td>
    </tr>
    <tr>
      <td rowspan="2"><code>monExpressionRégulière</code></td>
      <td><code>lastIndex</code></td>
      <td>
        L'indice auquel débuter la prochaine correspondance. (Cette propriété
        n'est utilisée que si l'expression régulière utilise l'option g, décrite
        dans «
        <a href="#recherches_flag"
          >Effectuer des recherches avancées avec les marqueurs</a
        >
        ».
      </td>
      <td><code>5</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>
        Le texte du motif, mis à jour à la création de l'expression régulière
        mais pas lors de son exécution.
      </td>
      <td><code>"d(b+)d"</code></td>
    </tr>
  </tbody>
</table>

Comme le montre la seconde formulation de cet exemple, il est possible d'utiliser une expression rationnelle, créée avec un objet initialisé sans l'affecter à une variable. Cela implique qu'à chaque utilisation, on aura une nouvelle expression régulière distincte et qu'on ne pourra pas, pour cette raison, accéder aux propriétés de l'expression régulière. Avec le script suivant :

```js
var monExpressionReguliere = /d(b+)d/g;
var monTableau = monExpressionReguliere.exec("cdbbdbsbz");
console.log("La valeur de lastIndex est " + monExpressionReguliere.lastIndex);

// "La valeur de lastIndex est 5"
```

Si le script utilisé est :

```js
var monTableau = /d(b+)d/g.exec("cdbbdbsbz");
console.log("La valeur de lastIndex est " + /d(b+)d/g.lastIndex);

// "La valeur de lastIndex est 0"
```

Les occurences de `/d(b+)d/g` dans les deux instructions sont des objets différents. Leurs propriétés `lastIndex` respectives ont donc des valeurs différentes. Quand il est nécessaire d'accéder aux propriétés d'un objet décrivant une expression rationnelle, il faudra d'abord l'affecter à une variable.

### Utiliser les correspondances de groupes avec les parenthèses

Les parenthèses, utilisées dans un motif d'expression régulière, permettent de garder en mémoire un groupe (ou fragment) d'une correspondance. Ainsi, `/a(b)c/` correspond aux caractères 'abc' et garde 'b' en mémoire. Pour récupérer ces fragments mémorisés, on peut utiliser les éléments du tableau `array` `[1]`, ..., `[n]`.

Le nombre de fragments qu'il est possible de garder entre parenthèses n'est pas limité. Le tableau renvoyé contiendra tout ce qui aura été trouvé. Les exemples qui suivent montrent comment utiliser cette syntaxe.

Le script qui suit utilise la méthode {{jsxref("String.replace", "replace()")}} pour échanger les mots d'une chaîne de caractères. Pour remplacer le texte, le script utilise `$1` et `$2` qui correspondent au premier et deuxième groupe correspondant.

```js
var re = /(\w+)\s(\w+)/;
var str = "Titi toto";
var newstr = str.replace(re, "$2, $1");
console.log(newstr);
```

Cela affichera "toto, Titi".

### Effectuer des recherches avancées en utilisant les marqueurs (_flags_)

Les expressions rationnelles peuvent être utilisées avec des marqueurs optionnels permettant des recherches globales et/ou ne respectant pas la casse. Ces marqueurs peuvent être utilisés séparement ou ensemble, quel que soit l'ordre. Ils font partie de l'expression régulière.

| Drapeau (_Flag_) | Description                                                                                                                                                                                          |
| ---------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `g`              | Recherche globale                                                                                                                                                                                    |
| `i`              | Recherche ne respectant pas la casse                                                                                                                                                                 |
| `m`              | Recherche sur plusieurs lignes                                                                                                                                                                       |
| `s`              | Le point peut correspondre aux caractères de saut de ligne.                                                                                                                                          |
| `u`              | Unicode. Le motif de recherche est interprété comme une séquence de codets Unicode.                                                                                                                  |
| `y`              | Effectue une recherche qui « adhère », en partant de la position courante de la chaîne de caractères sur laquelle la recherche est effectuée. Voir la page sur {{jsxref("RegExp.sticky","sticky")}}. |

Pour utiliser un marqueur avec une expression régulière, on utilisera la syntaxe suivante :

```js
var re = /motif/marqueurs;
```

ou

```js
var re = new RegExp("motif", "marqueurs");
```

Les marqueurs font partie intégrante d'une expression régulière, ils ne peuvent pas être ajoutés ou supprimés ensuite.

Ainsi, `re = /\w+\s/g` permet de créer une expression régulière pour trouver un ou plusieurs caractères suivis d'un espace, la recherche est effectuée globalement, sur toute la chaîne de caractères.

```js
var re = /\w+\s/g;
var str = "un deux trois quatre";
var monTableau = str.match(re);
console.log(monTableau);
```

Cela affichera \["un ", "deux ", "trois "]. On pourrait remplacer la ligne :

```js
var re = /\w+\s/g;
```

avec la ligne :

```js
var re = new RegExp("\\w+\\s", "g");
```

pour obtenir le même résultat.

Le comportement du marqueur `'g'` est différent selon qu'il est utilisé avec [`exec()`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp/exec) ou avec [`match()`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/String/match). Pour `match()`, c'est la chaîne de caractères qui invoque la méthode et l'expression rationnelle est alors un argument. Pour `exec()`, c'est l'expression rationnelle qui invoque la méthode et c'est la chaîne de caractères qui est passée en argument. Dans l'appel à `exec()`, le marqueur `'g'` permet d'avoir une progression itérative.

Le marqueur `m` pourra être utilisé pour traiter une chaîne de caractères de plusieurs lignes comme plusieurs lignes distinctes. Si ce marqueur est utilisé, les caractères spéciaux `^` et `$` correspondront au début ou à la fin de n'importe quelle ligne appartenant à la chaîne de caractères au lieu de correspondre simplement au début ou à la fin de la chaîne.

## Exemples

Les exemples qui suivent utilisent les expressions régulières dans différents cas.

### Changer l'ordre d'une saisie

L'exemple qui suit utilise les expressions régulières et `string.split()` et `string.replace()`. Le script nettoie la chaîne de caractères saisie qui contient des noms (prénom puis nom) séparés par des blancs, tabulations et points-virgules. Enfin il inverse les noms et prénoms puis trie la liste.

```js
// La chaîne des noms contient plusieurs blancs et tabulations,
// il peut y avoir plusieurs espaces entre le nom et le prénom.
var noms = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ; Chris Hand ";

var output = ["---------- Chaîne originale\n", noms + "\n"];

// Préparer deux expressions régulières pour stocker un tableau.
// et découper les chaînes dans ce tableau.

// motif: on peut avoir des blancs, un point virgule puis d'autres blancs
var motif = /\s*;\s*/;

// Découper la chaîne de caractères en morceaux séparés par le précédent motif
// Stocker ces morceaux dans un tableau listeNoms
var listeNoms = noms.split(motif);

// nouveau motif : un ou plusieurs caractères, des blancs puis des caractères.
// On utilise des parenthèses pour garder en mémoire les groupes du motif.
// On utilisera ces groupes par la suite.
motif = /(\w+)\s+(\w+)/;

// Nouveau tableau pour enregistrer les noms traités.
var listeParNomFamille = [];

// Afficher le tableau des noms et remplir le nouveau tableau
// avec les noms et prénoms séparés par des virgules, le nom
// de famille étant écrit en premier
//
// La méthode replace supprime tout ce qui correspond au motif
// et le remplace par le nom (mémorisé), une virgule, un espace
// et le prénom (mémorisé).
//
// Les variables $1 et $2 font références aux fragments gardés
// en mémoire lors de l'utilisation du motif.

output.push("---------- Après découpage avec l'expression régulière");

var i, len;
for (i = 0, len = listeNoms.length; i < len; i++) {
  output.push(listeNoms[i]);
  listeParNomFamille[i] = listeNoms[i].replace(motif, "$2, $1");
}

// Afficher le nouveau tableau
output.push("---------- Noms et prénoms inversés");
for (i = 0, len = listeParNomFamille.length; i < len; i++) {
  output.push(listeParNomFamille[i]);
}

// Trier par le nom de famille puis afficher le tableau trié
listeParNomFamille.sort();
output.push("---------- Triée");
for (i = 0, len = listeParNomFamille.length; i < len; i++) {
  output.push(listeParNomFamille[i]);
}

output.push("---------- Fin");

console.log(output.join("\n"));
```

### Utiliser les caractères spéciaux pour vérifier la saisie

Dans l'exemple suivant, on s'attend à ce que l'utilisateur saisissent un numéro de téléphone. Quand l'utilisateur appuie sur le bouton "Vérifier", le script vérifie la validité du numéro. Si le numéro est valide (il correspond à la séquence de caractères fournie par l'expression régulière), le script affiche un message remerciant l'utilisateur et confirmant le numéro. S'il est invalide, le script informe l'utilisateur et lui signifie que les informations saisies ne sont pas valides.

Dans les parenthèses sans mémoire `(?:` , l'expression régulière cherche les deux premiers chiffres ou l'indicatif du pays suivi d'un blanc et du premier chiffre, ce qui correspond à

```html
\d{2}|\+\d{2}[ ]\d
```

Cette partie signifie : deux chiffres OU un signe '+' suivi de deux chiffres, un blanc et un autre chiffre.

Ensuite, on a un groupe qui est mémorisé (entre parenthèses) :

```html
([- ])
```

Ce groupe correspond à ce qui va être utilisé pour séparer les différentes composantes du numéro de téléphone.

Ensuite,

```html
\d{2}\1
```

signifie qu'on a deux chiffres suivi du premier groupe qui est celui qui définit le séparateur. Le reste est composé de la même façon. Ainsi les numéros de téléphone +33 1 23 45 67 89 et 01 23 45 67 89 seront tous les deux valides.

L'événement `Change`, provoqué quand l'utilisateur appuie sur Entrée, renseigne la valeur `RegExp.input`.

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1" />
    <meta http-equiv="Content-Script-Type" content="text/javascript" />
    <script type="text/javascript">
      var re = /(?:\d{2}|\+\d{2}[ ]\d)([- ])\d{2}\1\d{2}\1\d{2}\1\d{2}/;
      function testInfo(phoneInput) {
        var OK = re.exec(phoneInput.value);
        if (!OK)
          window.alert(
            phone.input + " n'est pas un numéro de téléphone valide!",
          );
        else window.alert("Merci, votre numéro est : " + OK[0]);
      }
    </script>
  </head>
  <body>
    <p>
      Saisissez votre numéro de téléphone (avec indicatif) puis cliquez sur
      "Vérifier". <br />Le format attendu est ## ## ## ## ## ou +## # ## ## ##
      ##.
    </p>
    <form action="#">
      <input id="phone" /><button
        onclick="testInfo(document.getElementById('phone'));">
        Vérifier
      </button>
    </form>
  </body>
</html>
```

{{PreviousNext("Web/JavaScript/Guide/Formatage_du_texte", "Web/JavaScript/Guide/Collections_indexées")}}
