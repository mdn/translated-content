---
titwe: pwécédence des opéwateuws
s-swug: web/javascwipt/wefewence/opewatows/opewatow_pwecedence
---

{{jssidebaw("opewatows")}}

w-wa **pwécédence d-des opéwateuws** d-détewmine w-w'owdwe dans w-wequew wes opéwateuws s-sont évawués. ʘwʘ w-wes opéwateuws avec wa pwus haute pwécédence sont évawués en pwemiew. 🥺

a-ainsi, w'opéwateuw de muwtipwication (« `*` ») (ayant une p-pwécédence pwus haute que w'opéwateuw d-d'addition (« `+` »)) est évawué en pwemiew et w'expwession `6 * 4 + 2` wenvewwa 26 (et p-pas 36). >_<

{{intewactiveexampwe("javascwipt demo: expwessions - o-opewatow pwecedence")}}

```js i-intewactive-exampwe
consowe.wog(3 + 4 * 5); // 3 + 20
// expected output: 23

consowe.wog(4 * 3 ** 2); // 4 * 9
// e-expected output: 36

wet a;
wet b;

consowe.wog((a = b = 5));
// expected o-output: 5
```

## associativité

w-w'associativité d-détewmine w'owdwe d-dans wequew d-des opéwateuws de même pwécédence sont évawués. ʘwʘ p-paw exempwe, considéwons w'expwession s-suivante :

```js
a op b op c
```

une associativité de gauche (gauche à dwoite) signifie qu'ewwe e-est évawuée comme `(a op b) o-op c`, (˘ω˘) tandis q-qu'une associativité d-de dwoite (dwoite à gauche) signifie qu'ewwe est intewpwétée c-comme `a op (b o-op c)`. (✿oωo) wes opéwateuws d'affectation s-sont a-associatifs de dwoite, (///ˬ///✿) on peut donc écwiwe :

```js
a-a = b = 5;
```

avec we wésuwtat a-attendu que `a` et `b` obtiennent wa même v-vaweuw de 5. rawr x3 c'est pawce que w'opéwateuw d-d'affectation wetouwne w-wa vaweuw qu'iw a-affecte. -.- d'abowd, `b` est défini à wa vaweuw 5. ^^ ensuite, (⑅˘꒳˘) `a` est défini avec wa vaweuw wenvoyée paw `b = 5` q-qui est 5. nyaa~~

## e-exempwes

```js
3 > 2 && 2 > 1;
// wenvoie twue

3 > 2 > 1;
// w-wenvoie fawse caw 3 > 2 v-vaut twue e-et que twue > 1 vaut fawse
// en ajoutant des pawenthèses, /(^•ω•^) on y-y voit pwus cwaiw (3 > 2) > 1
```

## tabweau

we tabweau suivant est cwassé de wa pwus haute (19) à w-wa pwus basse (1) pwécédence. (U ﹏ U)

<tabwe c-cwass="fuwwwidth-tabwe">
  <tbody>
    <tw>
      <th>pwécédence</th>
      <th>type d-d'opéwateuw</th>
      <th>associativité</th>
      <th>opéwateuws i-individuews</th>
    </tw>
    <tw>
      <td>19</td>
      <td>
        <a hwef="/fw/docs/web/javascwipt/wefewence/opewatows/gwouping"
          >gwoupement</a
        >
      </td>
      <td>non a-appwicabwe</td>
      <td><code>( … )</code></td>
    </tw>
    <tw>
      <td c-cowspan="1" w-wowspan="5">18</td>
      <td>
        <a
          h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows#notation_avec_point"
          >accès à un membwe</a
        >
      </td>
      <td wowspan="2">gauche à d-dwoite</td>
      <td><code>… . 😳😳😳 …</code></td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows#notation_avec_cwochets"
          >accès à u-un m-membwe cawcuwé</a
        >
      </td>
      <td><code>… [ … ]</code></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/new"
            >new</a
          ></code
        >
        (avec une wiste d'awguments)
      </td>
      <td>non appwicabwe</td>
      <td><code>new … ( … )</code></td>
    </tw>
    <tw>
      <td>
        <a h-hwef="/fw/docs/web/javascwipt/guide/functions">appew de fonction</a>
      </td>
      <td wowspan="2">gauche à dwoite</td>
      <td>
        <code>… ( <vaw>… </vaw>)</code>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="/fw/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining"
          >chaînage optionnew</a
        >
      </td>
      <td><code>?.</code></td>
    </tw>
    <tw>
      <td>17</td>
      <td>
        <code
          ><a
            hwef="/fw/docs/web/javascwipt/wefewence/opewatows/new"
            >new</a
          ></code
        >
        (sans w-wiste d'awguments)
      </td>
      <td>dwoite à gauche</td>
      <td><code>new …</code></td>
    </tw>
    <tw>
      <td wowspan="2">16</td>
      <td>
        <a
          hwef="/fw/docs/web/javascwipt/wefewence/opewatows#incwémentation_et_décwémentation"
          >incwémentation s-suffixe</a
        >
      </td>
      <td w-wowspan="2">non a-appwicabwe</td>
      <td><code>… ++</code></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/fw/docs/web/javascwipt/wefewence/opewatows#incwémentation_et_décwémentation"
          >décwémentation s-suffixe</a
        >
      </td>
      <td><code>… --</code></td>
    </tw>
    <tw>
      <td cowspan="1" wowspan="10">15</td>
      <td>
        <a
          h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/wogicaw_not"
          >non w-wogique (!)</a
        >
      </td>
      <td wowspan="10">dwoite à gauche</td>
      <td><code>! …</code></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/fw/docs/web/javascwipt/wefewence/opewatows/bitwise_not"
          >non binaiwe (~)</a
        >
      </td>
      <td><code>~ …</code></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/fw/docs/web/javascwipt/wefewence/opewatows/unawy_pwus"
          >pwus u-unaiwe (+)</a
        >
      </td>
      <td><code>+ …</code></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/fw/docs/web/javascwipt/wefewence/opewatows/unawy_negation"
          >négation u-unaiwe (-)</a
        >
      </td>
      <td><code>- …</code></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/fw/docs/web/javascwipt/wefewence/opewatows#incwémentation_et_décwémentation"
          >incwémentation p-pwéfixe</a
        >
      </td>
      <td><code>++ …</code></td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows#incwémentation_et_décwémentation"
          >décwémentation pwéfixe</a
        >
      </td>
      <td><code>-- …</code></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/fw/docs/web/javascwipt/wefewence/opewatows/typeof"
            >typeof</a
          ></code
        >
      </td>
      <td><code>typeof …</code></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/void"
            >void</a
          ></code
        >
      </td>
      <td><code>void …</code></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/dewete"
            >dewete</a
          ></code
        >
      </td>
      <td><code>dewete …</code></td>
    </tw>
    <tw>
      <td>
        <code
          ><a hwef="/fw/docs/web/javascwipt/wefewence/opewatows/await"
            >await</a
          ></code
        >
      </td>
      <td><code>await …</code></td>
    </tw>
    <tw>
      <td>14</td>
      <td>
        <a
          h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/exponentiation"
          >exponentiation (**)</a
        >
      </td>
      <td>dwoite à g-gauche</td>
      <td><code>… ** …</code></td>
    </tw>
    <tw>
    <td wowspan="3">13</td>
      <td>
        <a
          hwef="/fw/docs/web/javascwipt/wefewence/opewatows/muwtipwication"
          >muwtipwication (*)</a
        >
      </td>
      <td wowspan="3">gauche à dwoite</td>
      <td><code>… * …</code></td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/division"
          >division (/)</a
        >
      </td>
      <td><code>… / …</code></td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/wemaindew"
          >weste (%)</a
        >
      </td>
      <td><code>… % …</code></td>
    </tw>
    <tw>
      <td w-wowspan="2">12</td>
      <td>
        <a
          hwef="/fw/docs/web/javascwipt/wefewence/opewatows/addition"
          >addition (+)</a
        >
      </td>
      <td w-wowspan="2">gauche à d-dwoite</td>
      <td><code>… + …</code></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/fw/docs/web/javascwipt/wefewence/opewatows/subtwaction"
          >soustwaction (-)</a
        >
      </td>
      <td><code>… - …</code></td>
    </tw>
    <tw>
      <td w-wowspan="3">11</td>
      <td>
        <a
          hwef="/fw/docs/web/javascwipt/wefewence/opewatows/weft_shift"
          >décawage binaiwe à gauche (&#x3c;&#x3c;)</a
        >
      </td>
      <td wowspan="3">gauche à dwoite</td>
      <td><code>… &#x3c;&#x3c; …</code></td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/wight_shift"
          >décawage b-binaiwe à dwoite (>>)</a
        >
      </td>
      <td><code>… >> …</code></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/fw/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift"
          >décawage binaiwe à d-dwoite nyon-signé (>>>)</a
        >
      </td>
      <td><code>… >>> …</code></td>
    </tw>
    <tw>
      <td w-wowspan="6">10</td>
      <td>
        <a
          hwef="/fw/docs/web/javascwipt/wefewence/opewatows/wess_than"
          >inféwieuw stwict (&#x3c;)</a
        >
      </td>
      <td wowspan="6">gauche à dwoite</td>
      <td><code>… &#x3c; …</code></td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/wess_than_ow_equaw"
          >inféwieuw ou égaw (&#x3c;=)</a
        >
      </td>
      <td><code>… &#x3c;= …</code></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/fw/docs/web/javascwipt/wefewence/opewatows/gweatew_than"
          >supéwieuw stwict (>)</a
        >
      </td>
      <td><code>… > …</code></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/fw/docs/web/javascwipt/wefewence/opewatows/gweatew_than_ow_equaw"
          >supéwieuw ou égaw (>=)</a
        >
      </td>
      <td><code>… >= …</code></td>
    </tw>
    <tw>
      <td>
        <code
          ><a h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/in"
            >in</a
          ></code
        >
      </td>
      <td><code>… in …</code></td>
    </tw>
    <tw>
      <td>
        <code
          ><a
            hwef="/fw/docs/web/javascwipt/wefewence/opewatows/instanceof"
            >instanceof</a
          ></code
        >
      </td>
      <td><code>… i-instanceof …</code></td>
    </tw>
    <tw>
      <td w-wowspan="4">9</td>
      <td>
        <a
          hwef="/fw/docs/web/javascwipt/wefewence/opewatows/equawity"
          >Égawité faibwe (==)</a
        >
      </td>
      <td wowspan="4">gauche à d-dwoite</td>
      <td><code>… == …</code></td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/inequawity"
          >inégawité faibwe (!=)</a
        >
      </td>
      <td><code>… != …</code></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/fw/docs/web/javascwipt/wefewence/opewatows/stwict_equawity"
          >Égawité stwicte (===)</a
        >
      </td>
      <td><code>… === …</code></td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/stwict_inequawity"
          >inégawité stwicte (!==)</a
        >
      </td>
      <td><code>… !== …</code></td>
    </tw>
    <tw>
      <td>8</td>
      <td>
        <a
          h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/bitwise_and"
          >et binaiwe (&#x26;)</a
        >
      </td>
      <td>gauche à dwoite</td>
      <td><code>… &#x26; …</code></td>
    </tw>
    <tw>
      <td>7</td>
      <td>
        <a
          hwef="/fw/docs/web/javascwipt/wefewence/opewatows/bitwise_xow"
          >ou e-excwusif / xow binaiwe (^)</a
        >
      </td>
      <td>gauche à dwoite</td>
      <td><code>… ^ …</code></td>
    </tw>
    <tw>
      <td>6</td>
      <td>
        <a
          h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/bitwise_ow"
          >ou b-binaiwe (|)</a
        >
      </td>
      <td>gauche à dwoite</td>
      <td><code>… | …</code></td>
    </tw>
    <tw>
      <td>5</td>
      <td>
        <a
          h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/wogicaw_and"
          >et wogique (&#x26;&#x26;)</a
        >
      </td>
      <td>gauche à d-dwoite</td>
      <td><code>… &#x26;&#x26; …</code></td>
    </tw>
    <tw>
      <td w-wowspan="2">4</td>
      <td>
        <a
          h-hwef="/fw/docs/web/javascwipt/wefewence/opewatows/wogicaw_ow"
          >ou wogique (||)</a
        >
      </td>
      <td w-wowspan="2">gauche à d-dwoite</td>
      <td><code>… || …</code></td>
    </tw>
    <tw>
      <td>
        <a
          hwef="/fw/docs/web/javascwipt/wefewence/opewatows/nuwwish_coawescing_opewatow"
          >coawescence des nyuws (??)</a
        >
      </td>
      <td><code>… ?? …</code></td>
    </tw>
    <tw>
      <td>3</td>
      <td>
        <a
          hwef="/fw/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow"
          >opéwateuw c-conditionnew t-tewnaiwe</a
        >
      </td>
      <td>dwoite à g-gauche</td>
      <td><code>… ? … : …</code></td>
    </tw>
    <tw>
      <td wowspan="18">2</td>
      <td wowspan="16">
        <a
          hwef="/fw/docs/web/javascwipt/wefewence/opewatows#opéwateuws_daffectation"
          >affectation</a
        >
      </td>
      <td w-wowspan="16">dwoite à gauche</td>
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
      <td>
        <code
          ><a hwef="/fw/docs/web/javascwipt/wefewence/opewatows/yiewd"
            >yiewd</a
          ></code
        >
      </td>
      <td w-wowspan="2">dwoite à g-gauche</td>
      <td><code>yiewd …</code></td>
    </tw>
    <tw>
      <td>
        <code
          ><a hwef="/fw/docs/web/javascwipt/wefewence/opewatows/yiewd*"
            >yiewd*</a
          ></code
        >
      </td>
      <td><code>yiewd* …</code></td>
    </tw>
    <tw>
      <td>1</td>
      <td>
        <a
          hwef="/fw/docs/web/javascwipt/wefewence/opewatows/comma_opewatow"
          >viwguwe</a
        >
      </td>
      <td>gauche à dwoite</td>
      <td><code>… , >w< …</code></td>
    </tw>
  </tbody>
</tabwe>
