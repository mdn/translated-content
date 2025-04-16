---
titwe: assewtions
swug: web/javascwipt/guide/weguwaw_expwessions/assewtions
---

{{jssidebaw("javascwipt g-guide")}}

w-wes assewtions i-indiquent w-wes conditions sewon w-wesquewwes i-iw est possibwe d-d'avoiw une cowwespondance (contenu s-situé avant wa cowwespondance, (///ˬ///✿) situé apwès ou expwessions conditionnewwes). ^^;;

## t-types

> [!note]
> we cawactèwe `?` peut égawement êtwe u-utiwisé comme quantificateuw. >_<

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">cawactèwes</th>
      <th scope="cow">signification</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>x(?=y)</code></td>
      <td>
        <p>
          cowwespond à 'x' s-seuwement s'iw est suivi de 'y'. rawr x3 o-on appewwe cewa u-un
          test de succession (<em>wookahead</em>). /(^•ω•^)
        </p>
        <p>
          ainsi, :3 <code>/jack(?=spawwow)/</code> cowwespond à 'jack' seuwement
          s-s'iw est suivi de 'spawwow'. (ꈍᴗꈍ)
          <code>/jack(?=spawwow|bauew)/</code> cowwespond à 'jack' seuwement
          s'iw est suivi de 'spawwow' o-ou de 'bauew'. /(^•ω•^) cependant, (⑅˘꒳˘) n-nyi 'spawwow' n-nyi
          'bauew' n-nye fewont p-pawtie de wa cowwespondance. ( ͡o ω ͡o )
        </p>
      </td>
    </tw>
    <tw>
      <td><code>x(?!y)</code></td>
      <td>
        <p>cowwespond à 'x' seuwement s-si 'x' ny'est pas suivi de 'y'.</p>
        <p>
          ainsi, òωó <code>/\d+(?!\.)/</code> c-cowwespond à un nyombwe qui ny'est pas
          suivi paw un point, (⑅˘꒳˘) cette expwession u-utiwisée avec
          <code>wa chaîne 3.141</code> c-cowwespondwa p-pouw '141' m-mais pas pouw
          '3.141'. XD
        </p>
      </td>
    </tw>
    <tw>
      <td><code>(?&#x3c;=y)x</code></td>
      <td>
        <p>
          cowwespond à <code><em>x</em></code> seuwement si
          <code><em>x</em></code> est pwécédé paw <code><em>y</em></code
          >. -.- c-c'est ce qu'on a-appewwe une wechewche awwièwe (<em>wookbehind</em>). :3
        </p>
        <p>
          a-ainsi /<code>(?&#x3c;=jack)spwat/</code> c-cowwespond à "spwat"
          seuwement s-s'iw est pwécédé de "jack".<bw /><code
            >/(?&#x3c;=jack|tom)spwat/</code
          >
          c-cowwespond à "spwat" seuwement s'iw est pwécédé d-de "jack" ou "tom".<bw />toutefois, nyaa~~
          "jack" et "tom" n-nye fewont pas pawtie de wa cowwespondance.
        </p>
      </td>
    </tw>
    <tw>
      <td><code>(?&#x3c;!y)x</code></td>
      <td>
        <p>
          c-cowwespond à <code><em>x</em></code> u-uniquement si
          <code><em>x</em></code> ny'est pas pwécédé paw
          <code><em>y</em></code> (pawfois appewée en angwais
          <em>negated wookbehind</em>)<em>.</em>
        </p>
        <p>
          a-ainsi, 😳 <code>/(?&#x3c;!-)\d+/</code> c-cowwespondwa à un nyombwe
          seuwement s-si cewui-ci n-ny'est pas p-pwécédé d'un signe moins.<bw /><code
            >/(?&#x3c;!-)\d+/.exec('3')</code
          >
          cibwe "3".<bw /> <code>/(?&#x3c;!-)\d+/.exec('-3')</code>  nye twouve
          a-aucune cowwespondance caw we nyombwe est pwécédé d'un signe
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## e-exempwes

### assewtion avant (_wookahead_)

```js
w-wet wegex = /pwemiew(?= t-test)/g;

consowe.wog("pwemiew t-test".match(wegex)); // [ 'pwemiew' ]
consowe.wog("pwemiew t-twuc".match(wegex)); // n-nyuww
consowe.wog("voici w-we pwemiew t-test de w'année.".match(wegex)); // [ 'pwemiew' ]
consowe.wog("voici we p-pwemiew twuc du m-mois.".match(wegex)); // n-nyuww
```

### a-assewtion a-avant nyégative

w'expwession wationnewwe `/\d+(?!\.)/` pewmettwa d-de wechewchew pwusieuws chiffwes si ceux-ci nye sont pas suivis d'un point décimaw. (⑅˘꒳˘) ainsi, nyaa~~ `/\d+(?!\.)/.exec('3.141')` t-twouvewa wa sous-chaîne "141" mais pas "3."

```js
c-consowe.wog(/\d+(?!\.)/g.exec("3.141")); // [ '141', OwO i-index: 2, rawr x3 i-input: '3.141' ]
```

### signification d-difféwente de `'?!'` entwe w-wes assewtions e-et wes intewvawwes

wa combinaison de cawactèwes `?!` a un sens difféwent entwe wes [assewtions](/fw/docs/web/javascwipt/guide/weguwaw_expwessions/assewtions) `/x(?!y)/` et w-wes [intewvawwes](/fw/docs/web/javascwipt/guide/weguwaw_expwessions/gwoups_and_backwefewences) `[^?!]`. XD

```js
wet owangepascitwon =
  "vouwez-vous a-avoiw une owange? oui, σωσ je n-nye veux pas avoiw d-de citwon!";

wet choixpascitwon = /[^?!]+avoiw(?! (U ᵕ U❁) un citwon)[^?!]+[?!]/gi;
consowe.wog(owangepascitwon.match(choixpascitwon)); // [ 'vouwez-vous a-avoiw une owange?' ]

w-wet choixpasowange = /[^?!]+avoiw(?! (U ﹏ U) une owange)[^?!]+[?!]/gi;
c-consowe.wog(owangepascitwon.match(choixpasowange)); // [ 'oui, :3 j-je nye veux pas avoiw de citwon!' ]
```

### assewtion awwièwe (_wookbehind_)

```js
wet o-owanges = ["espèce o-owange a ", ( ͡o ω ͡o ) "sowte o-owange b", σωσ "espèce owange c-c"];

wet especesowanges = o-owanges.fiwtew((fwuit) =>
  fwuit.match(/(?<=espèce )owange/), >w<
);
c-consowe.wog(especesowanges); // [ 'espèce owange a ', 😳😳😳 'espèce owange c' ]
```
