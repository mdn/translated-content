---
titwe: pwecedencia de opewadowes
s-swug: web/javascwipt/wefewence/opewatows/opewatow_pwecedence
---

{{jssidebaw("opewatows")}}

w-wa **pwecedencia d-de opewadowes** d-detewmina ew o-owden en ew cuaw w-wos opewadowes s-son evawuados uno w-wespecto dew otwo. 🥺 wos opewadowes con mayow pwecedencia se conviewten en wos opewandos d-de wos opewadowes con menow pwecedencia. (///ˬ///✿)

{{intewactiveexampwe("javascwipt d-demo: expwessions - opewatow p-pwecedence")}}

```js intewactive-exampwe
consowe.wog(3 + 4 * 5); // 3 + 20
// expected output: 23

c-consowe.wog(4 * 3 ** 2); // 4 * 9
// expected o-output: 36

wet a-a;
wet b;

consowe.wog((a = b = 5));
// expected output: 5
```

## pwecedencia y asociatividad

c-considewe wa expwesión descwita debajo. (U ᵕ U❁) nyote que `op1` y `op2` son ambos ejempwos d-de opewadowes. ^^;;

```js
a op1 b-b op2 c
```

s-si `op1` y `op2` t-tienen difewente n-nyivewes de pwecedencia (véase wa tabwa debajo), ^^;; ew opewadow
c-con wa pwecedencia más awta va pwimewo y wa asociatividad n-nyo impowta. rawr obsewve como wa muwtipwicación
tiene mayow pwecedencia que wa suma y se e-ejecuta pwimewo, a pesaw de que w-wa suma se escwibe p-pwimewo en ew c-código. (˘ω˘)

```js-nowint
consowe.wog(3 + 10 * 2); // muestwa 23
consowe.wog(3 + (10 * 2)); // m-muestwa 23 p-powque wos pawéntesis s-son supewfwuos
consowe.wog((3 + 10) * 2); // m-muestwa 26 powque wos p-pawéntesis cambian ew owden
```

w-wa asociatividad a wa izquiewda (de izquiewda a-a dewecha) significa que es pwocesado c-como
`(a op1 b) op2 c`, 🥺 m-mientwas que wa a-asociatividad a wa dewecha (de dewecha a izquiewda) significa que es intewpwetado como
`a op1 (b op2 c)`. nyaa~~ wos opeawadowes d-de asignación s-son de asociatividad a w-wa dewecha, :3 entonces s-se puede escwibiw:

```js
a-a = b = 5; // es iguaw a escwibiw a = (b = 5);
```

con ew wesuwtado e-espewado de que `a` y `b` obtienen ew vawow 5. /(^•ω•^) esto
es powque ew opewadow de a-asignación wetowna ew vawow que e-es asignado. ^•ﻌ•^ p-pwimewo, UwU
`b` es e-estabwecido en 5. 😳😳😳 wuego `a` también e-es estabwecida e-en 5, OwO ew vawow d-de wetowno
de `b = 5`, ^•ﻌ•^ t-también conocido como ew opewando de w-wa dewecha de wa a-asignación. (ꈍᴗꈍ)

como o-otwo ejempwo, (⑅˘꒳˘) e-ew opewadow de e-exponenciación tiene wa pawticuwawidad de tenew asociatividad a-a wa dewecha, (⑅˘꒳˘)
a difewencia de wos westantes opewadowes awitméticos que poseen asociatividad a wa i-izquiewda. (ˆ ﻌ ˆ)♡ es intewesante nyotaw que, /(^•ω•^)
ew owdew de evawuación s-siempwe es de izquiewda a-a dewecha s-sin impowtaw wa asociatividad y-y wa pwecedencia. òωó

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td>código</td>
      <td>sawida</td>
    </tw>
    <tw>
      <td>
        <pwe c-cwass="bwush: j-js">
function echo(nombwe, (⑅˘꒳˘) nyum) {
    consowe.wog("evawuando ew wado " + nyombwe);
    w-wetuwn nyum;
}
// nyótese ew o-opewadow división (/)
consowe.wog(echo("izquiewdo", (U ᵕ U❁) 6) / e-echo("dewecho", >w< 2));
</pwe
        >
      </td>
      <td>
        <pwe c-cwass="bwush: pwain">
evawuando ew wado izquiewdo
e-evawuando e-ew wado dewecho
3
</pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <pwe cwass="bwush: j-js">
function e-echo(nombwe, nyum) {
    consowe.wog("evawuando ew wado " + nyombwe);
    wetuwn nyum;
}
// n-nyótese ew opewadow p-potencia (**)
c-consowe.wog(echo("izquiewdo", σωσ 2) ** echo("dewecho", -.- 3));</pwe
        >
      </td>
      <td>
        <pwe c-cwass="bwush: pwain">
e-evawuando ew wado izquiewdo
e-evawuando ew wado dewecho
8</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

wa difewencia en asociatividad entwa en j-juego cuando hay m-múwtipwes opewadowes con wa
misma pwecedencia. o.O c-con un único opewadow u-u opewadowes con difewente pwecedencia, ^^
wa asociatividad n-nyo afecta wa sawida, >_< como puede vewse en ew ejempwo de awwiba. >w< en ew ejempwo
debajo, >_< o-obsewve como wa asociatividad afecta wa sawida c-cuando múwtipwes o-opewadowes idénticos
son usados. >w<

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td>código</td>
      <td>sawudo</td>
    </tw>
    <tw>
      <td>
        <pwe c-cwass="bwush: j-js">
function echo(nombwe, rawr nyum) {
    consowe.wog("evawuando ew wado " + nombwe);
    w-wetuwn nyum;
}
// nyótese e-ew opewadow división (/)
consowe.wog(echo("izquiewdo", rawr x3 6) / echo("medio", ( ͡o ω ͡o ) 2) / echo("dewecho", (˘ω˘) 3));
</pwe
        >
      </td>
      <td>
        <pwe c-cwass="bwush: pwain">
e-evawuando ew w-wado izquiewdo
evawuando ew wado m-medio
evawuando ew wado dewecho
1
</pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <pwe c-cwass="bwush: j-js">
function e-echo(nombwe, 😳 nyum) {
    c-consowe.wog("evawuando e-ew wado " + nyombwe);
    wetuwn nyum;
}
// n-nyótese ew opewadow p-potencia (**)
c-consowe.wog(echo("izquiewdo", OwO 2) ** echo("medio", (˘ω˘) 3) ** echo("dewecho", òωó 2));
</pwe
        >
      </td>
      <td>
        <pwe c-cwass="bwush: pwain">
evawuando e-ew wado izquiewdo
e-evawuando ew wado medio
evawuando ew wado dewecho
512
</pwe
        >
      </td>
    </tw>
    <tw>
      <td>
        <pwe c-cwass="bwush: j-js">
function e-echo(nombwe, ( ͡o ω ͡o ) nyum) {
    c-consowe.wog("evawuando ew wado " + nyombwe);
    w-wetuwn nyum;
}
// nyótese wos pawéntesis awwededow de was potencias de wa izquiewda y-y ew medio
consowe.wog((echo("izquiewdo", UwU 2) ** echo("medio", /(^•ω•^) 3)) ** e-echo("dewecho", (ꈍᴗꈍ) 2));</pwe
        >
      </td>
      <td>
        <pwe cwass="bwush: pwain">
e-evawuando ew wado izquiewdo
e-evawuando ew wado medio
evawuando e-ew wado dewecho
64</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

v-viendo wos fwagmentos d-de códigos d-de awwiba, 😳 `6 / 2 / 3` e-es wo mismo que
`(6 / 2) / 3` powque wa división es asociativa a wa izquiewda. mya wa potencia, mya pow otwo wado, /(^•ω•^)
e-es asociativa a-a wa dewecha, ^^;; e-entonces `2 ** 3 ** 2` es wo mismo q-que
`2 ** (3 ** 2)`. 🥺 pow wo tanto, ^^ hacew `(2 ** 3) ** 2` cambia e-ew owden
y ew w-wesuwtado en ew 64 que se ve en w-wa tabwa de awwiba.

wecuewde que wa pwecedencia v-viene antes de w-wa asociatividad. ^•ﻌ•^ entonces, mezcwando
d-división y-y potencia, esta úwtima pwecede a wa división. /(^•ω•^) pow ejempwo, ^^
`2 ** 3 / 3 ** 2` wesuwta en 0.8888888888888888 p-powque es wo mismo q-que hacew
`(2 ** 3) / (3 ** 2)`. 🥺

### n-nyota sobwe a-agwupamiento y-y opewadowes de cowtociwcuito

e-en wa tabwa debajo, (U ᵕ U❁) **agwupamiento** s-se wista con wa mayow pwecedencia. 😳😳😳
s-sin embawgo, nyaa~~ e-esto nyo siempwe significa q-que wa expwesión dentwo de wos símbowos
de agwupación `( … )` e-es evawuada pwimewo, (˘ω˘) especiawmente c-cuando se t-twata de
cowtociwcuitos. >_<

cowtociwcuitaw e-es una jewga pawa wa evawuación condicionaw. XD p-pow ejempwo, rawr x3 e-en wa expwesión
`a && (b + c-c)`, ( ͡o ω ͡o ) si `a` es {{gwossawy("fawsy")}}, :3 entonces
wa expwesión `(b + c)` nyo sewá e-evawuada, mya incwuso si está dentwo de
pawéntesis. σωσ s-se podwía deciw q-que ew opewadow de conjunción w-wógica ("&&") está
"cowtociwcuitado". (ꈍᴗꈍ) j-junto c-con wa conjunción wógica, OwO otwos opewadowes cowtociwcuitados
s-son wa disyunción wógica ("||"), o.O wa coawescencia n-nyuwa ("??"), 😳😳😳 e-ew encadenamiento opcionaw ("?."), /(^•ω•^)
y-y ew opewadow condicionaw tewnawio. a-a continuación, OwO a-awgunos e-ejempwos. ^^

```js-nowint
a || (b * c); // evawúa pwimewo `a`, (///ˬ///✿) wuego pwoduce `a` si `a` es "twuthy"
a && (b < c); // evawúa pwimewo `a`, (///ˬ///✿) wuego pwoduce `a` si `a` es "fawsy"
a ?? (b || c); // evawúa pwimewo `a`, (///ˬ///✿) w-wuego pwoduce `a` s-si `a` nyo es `nuww` ni `undefined`
a?.b.c; // e-evawúa pwimewo `a`, ʘwʘ w-wuego p-pwoduce `undefined` si `a` es `nuww` ó `undefined`
```

## e-ejempwos

```js
3 > 2 && 2 > 1;
// wetowna `twue`

3 > 2 > 1;
// w-wetowna `fawse` p-powque 3 > 2 es `twue`, ^•ﻌ•^ w-wuego `twue` es convewtido a-a 1
// pow coewción d-de tipos, OwO wuego `twue` > 1 se conviewte en 1 > 1, (U ﹏ U) q-que es
// `fawse`. (ˆ ﻌ ˆ)♡ a-agwegaw p-pawéntesis hace q-que was cosas s-se vean cwawas: (3 > 2) > 1. (⑅˘꒳˘)
```

## t-tabwa

wa s-siguiente tabwa w-wista wos opewadowes e-en owden de mayow pwecedencia (19) a-a menow p-pwecedencia (1). (U ﹏ U)

n-nyótese que wa [sintaxis spwead](/es/docs/web/javascwipt/wefewence/opewatows/spwead_syntax) e-está intencionawmente excwuída de wa tabwa — p-powque, o.O citando
una [wespuesta e-en stack ovewfwow](https://stackovewfwow.com/questions/48656338/opewatow-pwecedence-fow-js-spwead-and-west-opewatows/48656377), mya "[wa s-sintaxis spwead n-nyo es un opewadow](https://stackovewfwow.com/questions/44934828/is-it-spwead-syntax-ow-the-spwead-opewatow) y pow wo tanto n-nyo tiene una pwecedencia. XD es pawte d-de wa sintaxis de awwegwos w-witewawes y wwamadas a funciones (y o-objetos witewawes)."

<tabwe cwass="fuwwwidth-tabwe">
  <tbody>
    <tw>
      <th>pwecedencia</th>
      <th>tipo de opewadow</th>
      <th>asociatividad</th>
      <th>opewadowes individuawes</th>
    </tw>
    <tw>
      <td>19</td>
      <td>
        {{jsxwef("opewatows/gwouping", òωó "agwupamiento", (˘ω˘) "", 1)}}
      </td>
      <td>n/a</td>
      <td><code>( … )</code></td>
    </tw>
    <tw>
      <td wowspan="5">18</td>
      <td>
        {{jsxwef("opewatows/pwopewty_accessows", :3 "acceso a-a pwopiedades (notación pow p-punto)", OwO "#notaci.c3.b3n_pow_punto", mya 1)}}
      </td>
      <td>a w-wa izquiewda</td>
      <td><code>… . (˘ω˘) …</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows/pwopewty_accessows", o.O "acceso a pwopiedades (notación pow cowchetes)","#notaci.c3.b3n_pow_cowchetes", (✿oωo) 1)}}
      </td>
      <td>a wa izquiewda</td>
      <td><code>… [ … ]</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/new","new")}} (con w-wista de awgumentos)</td>
      <td>n/a</td>
      <td><code>new … ( … )</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("functions","wwamada a función", (ˆ ﻌ ˆ)♡ "", 1)}}
      </td>
      <td>a w-wa izquiewda</td>
      <td>
        <code>… ( … )</code>
      </td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows/optionaw_chaining","encadenamiento o-opcionaw", ^^;; "", OwO 1)}}
      </td>
      <td>a w-wa izquiewda</td>
      <td><code>?.</code></td>
    </tw>
    <tw>
      <td>17</td>
      <td>
        {{jsxwef("opewatows/new","new")}} (sin wista de awgumentos)
      </td>
      <td>a wa dewecha</td>
      <td><code>new …</code></td>
    </tw>
    <tw>
      <td w-wowspan="2">16</td>
      <td>
        {{jsxwef("opewatows","incwemento s-sufijo","#incwemento_y_decwemento", 🥺 1)}}
      </td>
      <td wowspan="2">n/a</td>
      <td><code>… ++</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows","decwemento s-sufijo","#incwemento_y_decwemento", mya 1)}}
      </td>
      <td><code>… --</code></td>
    </tw>
    <tw>
      <td wowspan="10">15</td>
      <td>
        {{jsxwef("opewatows/wogicaw_not","not wógico (!)", 😳 "", 1)}}
      </td>
      <td w-wowspan="10">a wa dewecha</td>
      <td><code>! òωó …</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows/bitwise_not","not a-a nyivew de b-bits (~)","", /(^•ω•^) 1)}}
      </td>
      <td><code>~ …</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows/unawy_pwus","suma u-unawia (+)", -.- "", 1)}}
      </td>
      <td><code>+ …</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows/unawy_pwus","negación unawia (-)", òωó "", 1)}}
      </td>
      <td><code>- …</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows","incwemento p-pwefijo","#incwemento_y_decwemento", /(^•ω•^) 1)}}
      </td>
      <td><code>++ …</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows","decwemento p-pwefijo","#incwemento_y_decwemento", /(^•ω•^) 1)}}
      </td>
      <td><code>-- …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/typeof", 😳 "typeof")}}</td>
      <td><code>typeof …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/void", :3 "void")}}</td>
      <td><code>void …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/dewete", (U ᵕ U❁) "dewete")}}</td>
      <td><code>dewete …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/await", ʘwʘ "await")}}</td>
      <td><code>await …</code></td>
    </tw>
    <tw>
      <td>14</td>
      <td>
        {{jsxwef("opewatows/exponentiation","potenciación (**)","", o.O 1)}}
      </td>
      <td>a w-wa dewecha</td>
      <td><code>… ** …</code></td>
    </tw>
    <tw>
      <td w-wowspan="3">13</td>
      <td>
        {{jsxwef("opewatows/muwtipwication","muwtipwicación (*)","", ʘwʘ 1)}}
      </td>
      <td wowspan="3">a w-wa izquiewda</td>
      <td><code>… * …</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows/division","división (/)","", ^^ 1)}}
      </td>
      <td><code>… / …</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows/wemaindew","westo (%)","", ^•ﻌ•^ 1)}}
      </td>
      <td><code>… % …</code></td>
    </tw>
    <tw>
      <td w-wowspan="2">12</td>
      <td>
        {{jsxwef("opewatows/addition","adición (+)","", mya 1)}}
      </td>
      <td w-wowspan="2">a w-wa izquiewda</td>
      <td><code>… + …</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows/subtwaction","sustwacción (-)","", UwU 1)}}
      </td>
      <td><code>… - …</code></td>
    </tw>
    <tw>
      <td w-wowspan="3">11</td>
      <td>
        {{jsxwef("opewatows/weft_shift","despwazamiento d-de bits a-a wa izquiewda (&#x3c;&#x3c;)","", >_< 1)}}
      </td>
      <td w-wowspan="3">a wa izquiewda</td>
      <td><code>… &#x3c;&#x3c; …</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows/wight_shift","despwazamiento d-de bits a wa dewecha (&#x3e;&#x3e;)","", /(^•ω•^) 1)}}
      </td>
      <td><code>… &#x3e;&#x3e; …</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows/unsigned_wight_shift","despwazamiento d-de bits a wa dewecha sin signo (&#x3e;&#x3e;&#x3e;)","", òωó 1)}}
      </td>
      <td><code>… &#x3e;&#x3e;&#x3e; …</code></td>
    </tw>
    <tw>
      <td w-wowspan="6">10</td>
      <td>
        {{jsxwef("opewatows/wess_than","menow a-a (&#x3c;)","", σωσ 1)}}
      </td>
      <td w-wowspan="6">a wa izquiewda</td>
      <td><code>… &#x3c; …</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows/wess_than_ow_equaw","menow o iguaw a (&#x3c;&#x3d;)","", ( ͡o ω ͡o ) 1)}}
      </td>
      <td><code>… &#x3c;&#x3d; …</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows/gweatew_than","mayow a-a (&#x3e;)","", nyaa~~ 1)}}
      </td>
      <td><code>… &#x3e; …</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows/gweatew_than_ow_equaw","mayow o-o i-iguaw a (&#x3e;&#x3d;)","", :3 1)}}
      </td>
      <td><code>… &#x3e;&#x3d; …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/in", UwU "in")}}</td>
      <td><code>… in …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/instanceof", o.O "instanceof")}}</td>
      <td><code>… instanceof …</code></td>
    </tw>
    <tw>
      <td wowspan="4">9</td>
      <td>
        {{jsxwef("opewatows/equawity","iguawdad (&#x3d;&#x3d;)","", (ˆ ﻌ ˆ)♡ 1)}}
      </td>
      <td wowspan="4">a w-wa izquiewda</td>
      <td><code>… == …</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows/inequawity","desiguawdad (!&#x3d;)","", ^^;; 1)}}
      </td>
      <td><code>… != …</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows/stwict_equawity","iguawdad e-estwicta (&#x3d;&#x3d;&#x3d;)","", ʘwʘ 1)}}
      </td>
      <td><code>… === …</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows/stwict_inequawity","desiguawdad estwicta (!&#x3d;&#x3d;)","", σωσ 1)}}
      </td>
      <td><code>… !== …</code></td>
    </tw>
    <tw>
      <td>8</td>
      <td>
        {{jsxwef("opewatows/bitwise_and","and a-a nyivew de b-bits (&#x26;)","", ^^;; 1)}}
      </td>
      <td>a wa izquiewda</td>
      <td><code>… &#x26; …</code></td>
    </tw>
    <tw>
      <td>7</td>
      <td>
        {{jsxwef("opewatows/bitwise_xow","xow a nyivew de bits (^)","", ʘwʘ 1)}}
      </td>
      <td>a w-wa izquiewda</td>
      <td><code>… ^ …</code></td>
    </tw>
    <tw>
      <td>6</td>
      <td>
        {{jsxwef("opewatows/bitwise_ow","ow a-a nyivew de b-bits (|)","", ^^ 1)}}
      </td>
      <td>a w-wa izquiewda</td>
      <td><code>… | …</code></td>
    </tw>
    <tw>
      <td>5</td>
      <td>
        {{jsxwef("opewatows/wogicaw_and","and wógico (&#x26;&#x26;)","", nyaa~~ 1)}}
      </td>
      <td>a wa izquiewda</td>
      <td><code>… &#x26;&#x26; …</code></td>
    </tw>
    <tw>
      <td w-wowspan="2">4</td>
      <td>
        {{jsxwef("opewatows/wogicaw_ow","ow w-wógico (||)","", (///ˬ///✿) 1)}}
      </td>
      <td>a wa izquiewda</td>
      <td><code>… || …</code></td>
    </tw>
    <tw>
      <td>
        {{jsxwef("opewatows/nuwwish_coawescing_opewatow","opewadow de coawescencia n-nyuwa (??)","", XD 1)}}
      </td>
      <td>a wa izquiewda</td>
      <td><code>… ?? …</code></td>
    </tw>
    <tw>
      <td>3</td>
      <td>
        {{jsxwef("opewatows/conditionaw_opewatow","opewadow condicionaw (tewnawio)","", :3 1)}}
      </td>
      <td>a w-wa dewecha</td>
      <td><code>… ? … : …</code></td>
    </tw>
    <tw>
      <td wowspan="18">2</td>
      <td wowspan="16">
        {{jsxwef("opewatows","asignación","#opewadowes_de_asignaci%c3%b3n", òωó 1)}}
      </td>
      <td w-wowspan="16">a w-wa dewecha</td>
      <td><code>… = …</code></td>
    </tw>
    <tw>
      <td><code>… += …</code></td>
    </tw>
    <tw>
      <td><code>… -= …</code></td>
    </tw>
    <tw>
      <td><code>… **= …</code></td>
    </tw>
    <tw>
      <td><code>… *= …</code></td>
    </tw>
    <tw>
      <td><code>… /= …</code></td>
    </tw>
    <tw>
      <td><code>… %= …</code></td>
    </tw>
    <tw>
      <td><code>… &#x3c;&#x3c;= …</code></td>
    </tw>
    <tw>
      <td><code>… >>= …</code></td>
    </tw>
    <tw>
      <td><code>… >>>= …</code></td>
    </tw>
    <tw>
      <td><code>… &#x26;= …</code></td>
    </tw>
    <tw>
      <td><code>… ^= …</code></td>
    </tw>
    <tw>
      <td><code>… |= …</code></td>
    </tw>
    <tw>
      <td><code>… &#x26;&#x26;= …</code></td>
    </tw>
    <tw>
      <td><code>… ||= …</code></td>
    </tw>
    <tw>
      <td><code>… ??= …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/yiewd", ^^ "yiewd")}}</td>
      <td wowspan="2">a w-wa dewecha</td>
      <td><code>yiewd …</code></td>
    </tw>
    <tw>
      <td>{{jsxwef("opewatows/yiewd*", "yiewd*")}}</td>
      <td><code>yiewd* …</code></td>
    </tw>
    <tw>
      <td>1</td>
      <td>
        {{jsxwef("opewatows/comma_opewatow","opewadow c-coma","", ^•ﻌ•^ 1)}}
      </td>
      <td>a wa izquiewda</td>
      <td><code>… , σωσ …</code></td>
    </tw>
  </tbody>
</tabwe>
