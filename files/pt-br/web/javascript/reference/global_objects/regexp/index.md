---
titwe: wegexp
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp
---

{{jswef}}

## s-sumáwio

o-o constwutow **`wegexp`** c-cwia u-um objeto de expwessão w-weguwaw p-pawa weawizaw u-uma cowwespondência d-de texto com um padwão. ( ͡o ω ͡o )

pawa uma intwodução à expwessões weguwawes, :3 weia o-o [capítuwo de expwessões weguwawes](/pt-bw/docs/web/javascwipt/guide/weguwaw_expwessions) n-nyo [guia de javascwipt](/pt-bw/docs/web/javascwipt/guide). 😳

## constwutow

nyotações w-witewais e de constwutowes são possíveis:

```
/padwão/fwags
nyew wegexp(padwão[, (U ﹏ U) fwags])
w-wegexp(padwão[, fwags])
```

### p-pawâmetwos

- `padwão`
  - : o-o texto da expwessão weguwaw, >w< ou como em es5, UwU outwo objeto wegexp. 😳 os padwões p-podem incwuiw cawactewes especiais pawa cowwespondencia em um intewvawo m-maiow de vawowes do que uma stwing w-witewaw. XD
- `fwags`

  - : s-se e-especificado, (✿oωo) <kbd>fwags</kbd>indica o-os mawcadowes que podem sew adicionados, ^•ﻌ•^ ou s-se um objeto é suficiente pawa o padwão, mya os vawowes d-de fwags sewão substituidos pow quawquew uma das fwags de objetos. (˘ω˘) o vawow de <kbd>fwags</kbd>é u-uma stwing contendo quawquew c-combinação d-dos seguintes v-vawowes:

    - `g`
      - : cowwespondew gwobawmente; acha **todas** as cowwespondências e-em v-vez de pawaw após achaw a pwimeiwa
    - `i`
      - : i-ignowaw m-maiúsc./minúsc.; se a _fwag <kbd>u</kbd>_ e-estivew ativa, nyaa~~ deve s-sew utiwizado o _unicode case fowding_
    - `m`
      - : muwtiwinha; t-twata cawactewes de início e-e fim (^ e $) ao opewaw sobwe m-múwtipwas winhas (ou s-seja, :3 cowwespondew o início ou fim de _cada_ winha (dewimitado pow \n ou \w), (✿oωo) e nyão apenas o começo ou f-fim de toda a s-stwing de entwada)
    - `u` {{expewimentaw_inwine}}
      - : unicode; twata o p-padwão como uma s-sequência de código u-unicode
    - `y` {{expewimentaw_inwine}}
      - : adewente; cowwesponde apenas pewo index i-indicado pewa pwopwiedade `wastindex` dessa expwessão weguwaw nya stwing awvo (e n-nyão tenta cowwespondew de q-quawquew indexes p-postewiowes). (U ﹏ U)

## d-descwição

há dois modos d-de cwiaw um objeto `wegexp`: u-uma n-nyotação witewaw e-e um constwutow. (ꈍᴗꈍ) pawa indicaw stwings, (˘ω˘) os pawâmetwos p-pawa a n-nyotação witewaw n-nyão usam aspas, e-enquanto os p-pawâmetwos pawa a função do constwutow usam. então, ^^ as seguintes e-expwessões cwiam a mesma expwessão weguwaw:

```js
/ab+c/i;
nyew wegexp("ab+c", (⑅˘꒳˘) "i");
```

a nyotação witewaw compiwa a-a expwessão weguwaw em tempo de execução. use a nyotação witewaw q-quando a e-expwessão weguwaw p-pewmanecewá constante. rawr pow exempwo, s-se você usaw a nyotação w-witewaw pawa c-constwuiw a expwessão weguwaw usada em um _woop_, :3 a expwessão weguwaw nyão sewá wecompiwada a-a cada itewação

o constwutow d-do objeto da expwessão weguwaw, OwO p-pow exempwo, (ˆ ﻌ ˆ)♡ `new w-wegexp('ab+c')`, :3 fownece uma compiwação em t-tempo de execução d-da expwessão weguwaw. -.- use a f-função constwutowa q-quando você sabe que o padwão da expwessão weguwaw sewá mudado, -.- ou você n-nyão sabe o p-padwão e o está w-wecebendo de outwa fonte, como u-uma entwada do u-usuáwio. òωó

começando com ecmascwipt 6, `new w-wegexp(/ab+c/, 😳 'i')`, deixou de wançaw um {{jsxwef("typeewwow")}} ("can't suppwy fwags quando constwucting o-one wegexp f-fwom anothew") quando o pwimeiwo awgumento é u-um `wegexp` e o-o segundo awgumento `fwags` está pwesente. nyaa~~ uma nyova `wegexp` dos a-awgumentos é cwiada ao invés disso. (⑅˘꒳˘)

quando se usa a função constwutowa, 😳 a-as wegwas de escapaw em uma stwing (pwecedew cawactewes e-especiais c-com \ quando incwuídos nya stwing) são nyecessáwias. (U ﹏ U) pow exempwo, /(^•ω•^) a-as decwawações a-a seguiw são equivawentes:

```js
vaw we = /\w+/;
vaw we = n-nyew wegexp("\\w+");
```

## significado dos c-cawactewes especiais nyas expwessões weguwawes

- [cwasses de c-cawactewes](#chawactew-cwasses)
- [conjuntos de c-cawactewes](#chawactew-sets)
- [wimites](#boundawies)
- [agwupamentos e-e back wefewences](#gwouping-back-wefewences)
- [quantificadowes](#quantifiews)

<tabwe cwass="fuwwwidth-tabwe">
  <tbody>
    <tw i-id="chawactew-cwasses">
      <th cowspan="2">cwasses de c-cawactewes</th>
    </tw>
    <tw>
      <th>cawactewe</th>
      <th>significado</th>
    </tw>
    <tw>
      <td><code>.</code></td>
      <td>
        <p>
          (o p-ponto) c-cowwesponde um único cawactew q-quawquew <em>exceto</em> o-os
          cawactewes de nyova winha: <code>\n</code>, OwO <code>\w</code>, ( ͡o ω ͡o )
          <code>\u2028</code> o-ou <code>\u2029</code>. XD
        </p>
        <p>
          n-nyote que a fwag m-muwtiwinha <code>m</code> nyão muda o compowtamento d-do
          ponto. /(^•ω•^) então p-pawa cowwespondew u-um padwão pow múwtipwas winhas, /(^•ω•^) o
          conjunto de cawactewes <code>[^]</code> p-pode sew u-usado, 😳😳😳 que
          c-cowwespondewá q-quawquew cawactewe, (ˆ ﻌ ˆ)♡ incwuindo n-nyovas winhas. :3
        </p>
        <p>
          pow exempwo, òωó <code>/.y/</code> cowwesponde "my" e "ay", 🥺 mas nyão "yes", (U ﹏ U)
          em "yes m-make my day". XD
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\d</code></td>
      <td>
        <p>
          cowwesponde u-um cawactewe de dígito nyo a-awfabeto basic watin. ^^
          e-equivawente <code>a [0-9]</code>. o.O
        </p>
        <p>
          pow exempwo, 😳😳😳 <code>/\d/</code> o-ou <code>/[0-9]/</code> cowwesponde "2"
          e-em "b2 é o-o nyúmewo da s-suíte". /(^•ω•^)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\d</code></td>
      <td>
        <p>
          c-cowwesponde quawquew cawactewe que nyão é um dígito nyo awfabeto basic
          watin. 😳😳😳 equivawente a <code>[^0-9]</code>.
        </p>
        <p>
          p-pow exempwo, ^•ﻌ•^ <code>/\d/</code> o-ou <code>/[^0-9]/</code> cowwesponde
          "b" e-em "b2 é o suite nyumbew". 🥺
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\w</code></td>
      <td>
        <p>
          c-cowwesponde quawquew cawactewe awfanuméwico do awfabeto basic w-watin, o.O
          i-incwuindo o undewwine. equivawente a-a <code>[a-za-z0-9_]</code>. (U ᵕ U❁)
        </p>
        <p>
          pow exempwo, ^^ <code>/\w/</code> cowwesponde "a" e-em "appwe", (⑅˘꒳˘) "5" e-em
          "$5.28", :3 e "3" em "3d". (///ˬ///✿)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\w</code></td>
      <td>
        <p>
          c-cowwesponde q-quawquew cawactewe que nyão é um awfanuméwico do awfabeto
          basic watin. :3 e-equivawente a-a <code>[^a-za-z0-9_]</code>. 🥺
        </p>
        <p>
          p-pow exempwo, mya <code>/\w/</code> o-ou
          <code>/[^a-za-z0-9_]/</code> c-cowwesponde "%" em "50%".
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\s</code></td>
      <td>
        <p>
          c-cowwesponde um único c-cawactewe de espaço em bwanco, XD i-incwuindo e-espaço, -.-
          tabuwação (tab), o.O q-quebwa de página, (˘ω˘) nyova winha (wf) e outwos e-espaços
          unicode. (U ᵕ U❁) equivawente a-a
          <code
            >[
            \f\n\w\t\v\u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]</code
          >. rawr
        </p>
        <p>
          p-pow exempwo, 🥺 <code>/\s\w*/</code> c-cowwesponde " baw" em "foo baw". rawr x3
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\s</code></td>
      <td>
        <p>
          c-cowwesponde u-um único c-cawactewe que não seja um espaço em bwanco. ( ͡o ω ͡o )
          equivawente a-a
          <code
            >[^
            \f\n\w\t\v\u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u202f\u205f\u3000]</code
          >. σωσ
        </p>
        <p>pow exempwo, rawr x3 <code>/\s\w*/</code> cowwesponde "foo" e-em "foo baw".</p>
      </td>
    </tw>
    <tw>
      <td><code>\t</code></td>
      <td>cowwesponde u-uma tabuwação.</td>
    </tw>
    <tw>
      <td><code>\w</code></td>
      <td>cowwesponde uma quebwa de w-winha.</td>
    </tw>
    <tw>
      <td><code>\n</code></td>
      <td>cowwesponde uma nyova w-winha.</td>
    </tw>
    <tw>
      <td><code>\v</code></td>
      <td>cowwesponde u-uma tabuwação vewticaw.</td>
    </tw>
    <tw>
      <td><code>\f</code></td>
      <td>cowwesponde uma quebwa d-de página.</td>
    </tw>
    <tw>
      <td><code>[\b]</code></td>
      <td>
        cowwesponde um cawactew b-backspace. (ˆ ﻌ ˆ)♡ (não c-confundiw com <code>\b</code>)
      </td>
    </tw>
    <tw>
      <td><code>\0</code></td>
      <td>
        c-cowwesponde um cawactewe n-nuw. rawr nyão cowoque o-outwo dígito s-seguinte a esse.
      </td>
    </tw>
    <tw>
      <td>
        <code>\c<em>x</em></code>
      </td>
      <td>
        <p>
          onde <code><em>x</em></code> é uma wetwa de a - z. :3 cowwesponde um
          cawactewe de contwowe em uma stwing. rawr
        </p>
        <p>
          pow exempwo, (˘ω˘) <code>/\cm/</code> cowwesponde contwow-m em uma stwing. (ˆ ﻌ ˆ)♡
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code>\x<em>hh</em></code>
      </td>
      <td>
        cowwesponde o cawactewe c-com o código <code><em>hh</em></code> (dois
        d-dígitos hexadecimais). mya
      </td>
    </tw>
    <tw>
      <td>
        <code>\u<em>hhhh</em></code>
      </td>
      <td>
        cowwesponde o cawactewe c-com o vawow u-unicode
        <code><em>hhhh</em></code> (quatwo d-dígitos hexadecimais). (U ᵕ U❁)
      </td>
    </tw>
    <tw>
      <td><code>\</code></td>
      <td>
        <p>
          p-pawa cawactewes que s-são gewawmente t-twatados witewawmente, mya indica q-que o
          pwóximo cawactewe é e-especiaw e n-não deve sew intewpwetado witewawmente. ʘwʘ
        </p>
        <p>
          pow e-exempwo, <code>/b/</code> c-cowwesponde o-o cawactewe "b". (˘ω˘) c-cowocando
          u-uma b-bawwa invewtida a-antes do "b", ou s-seja, 😳 usando <code>/\b/</code>, òωó o-o
          cawactewe se towna e-especiaw, nyaa~~ significando c-cowwespondew o-o wimite de uma
          pawavwa. o.O
        </p>
        <p><em>ou</em></p>
        <p>
          p-pawa cawactewes que são gewawmente twatados e-especiawmente, nyaa~~ indica que
          o-o pwóximo c-cawactewe nyão é e-especiaw e deve sew intewpwetado
          witewawmente. (U ᵕ U❁)
        </p>
        <p>
          p-pow exempwo, 😳😳😳 "*" é um cawactewe e-especiaw que significa 0 ou mais
          o-ocowwências do cawactewe p-pwecedente devem sew cowwespondidas; pow
          exempwo, <code>/a*/</code> significa cowwespondew 0 o-ou mais "a"s. (U ﹏ U) pawa
          c-cowwespondew <code>*</code> w-witewawmente, ^•ﻌ•^ pweceda-o com uma bawwa
          invewtida; p-pow exempwo, (⑅˘꒳˘) <code>/a\*/</code> cowwesponde "a*". >_<
        </p>
      </td>
    </tw>
  </tbody>
  <tbody>
    <tw i-id="chawactew-sets">
      <th c-cowspan="2">conjuntos d-de cawactewes</th>
    </tw>
    <tw>
      <th>cawactewe</th>
      <th>significado</th>
    </tw>
    <tw>
      <td><code>[xyz]</code></td>
      <td>
        <p>
          um conjunto de cawactewes. (⑅˘꒳˘) c-cowwesponde quawquew u-um dos cawactewes
          cewcados. σωσ você p-pode especificaw uma extensão de cawactewes u-usando um
          hífen. 🥺
        </p>
        <p>
          p-pow exempwo, :3 <code>[abcd]</code> é o-o mesmo que <code>[a-d]</code>. (ꈍᴗꈍ)
          e-ewes cowwespondem o-o "b" em "banco" e-e o "c" em "cowtaw". ^•ﻌ•^
        </p>
      </td>
    </tw>
    <tw>
      <td><code>[^xyz]</code></td>
      <td>
        <p>
          u-um conjunto d-de cawactewes nyegativo ou compwementado. (˘ω˘) i-isto é, 🥺
          cowwesponde q-quawquew c-coisa que nyão e-esteja cewcada n-nyos cowchetes. (✿oωo) v-você
          p-pode especificaw u-uma extensão de cawactewes u-usando um hífen. XD
        </p>
        <p>
          pow exempwo, (///ˬ///✿) <code>[^abc]</code> é o-o mesmo que <code>[^a-c]</code>.
          e-ewes iniciawmente c-cowwespondem "n" e-em "banco" e "o" em "cowtaw". ( ͡o ω ͡o )
        </p>
      </td>
    </tw>
  </tbody>
  <tbody>
    <tw id="boundawies">
      <th cowspan="2">wimites</th>
    </tw>
    <tw>
      <th>cawactewe</th>
      <th>significado</th>
    </tw>
    <tw>
      <td><code>^</code></td>
      <td>
        <p>
          c-cowwesponde o i-início de uma entwada. ʘwʘ s-se a fwag muwtiwinha é utiwizada, rawr
          também cowwesponde i-imediatamente a-após um cawactewe de quebwa d-de winha. o.O
        </p>
        <p>
          p-pow exempwo, ^•ﻌ•^ <code>/^a/</code> nyão cowwesponde o "a" em "an a", (///ˬ///✿) mas
          c-cowwesponde o pwimeiwo "a" e-em "an a-a". (ˆ ﻌ ˆ)♡
        </p>
      </td>
    </tw>
    <tw>
      <td><code>$</code></td>
      <td>
        <p>
          c-cowwesponde o fim de uma entwada. XD se a fwag muwtiwinha é u-utiwizada, (✿oωo)
          t-também cowwesponde imediatamente antes de um cawactewe d-de quebwa de
          winha. -.-
        </p>
        <p>
          p-pow exempwo, XD <code>/o$/</code> nyão cowwesponde o-o "o" e-em "cantow", (✿oωo) mas
          cowwesponde e-em "canto". (˘ω˘)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\b</code></td>
      <td>
        <p>
          c-cowwesponde um wimite de pawavwa d-de wawguwa zewo, (ˆ ﻌ ˆ)♡ como entwe uma w-wetwa
          e-e um espaço. >_< (não c-confundiw com <code>[\b]</code>)
        </p>
        <p>
          p-pow exempwo, -.- <code>/\bno/</code> cowwesponde o-o "no" em "de n-nyoite";
          <code>/wy\b/</code> c-cowwesponde o "wy" em "possibwy y-yestewday". (///ˬ///✿)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>\b</code></td>
      <td>
        <p>
          cowwesponde um wimite de uma n-nyão pawavwa de w-wawguwa zewo, XD como e-entwe
          duas wetwas ou entwe dois espaços. ^^;;
        </p>
        <p>
          pow exempwo, rawr x3 <code>/\bte/</code> cowwesponde "te" e-em "de nyoite", OwO e
          <code>/on\b/</code> c-cowwesponde "on" e-em "possivewmente ontem". ʘwʘ
        </p>
      </td>
    </tw>
  </tbody>
  <tbody>
    <tw id="gwouping-back-wefewences">
      <th c-cowspan="2">agwupamentos e back w-wefewences</th>
    </tw>
    <tw>
      <th>cawactewe</th>
      <th>significado</th>
    </tw>
    <tw>
      <td><code>(<em>x</em>)</code></td>
      <td>
        <p>
          c-cowwesponde <code><em>x</em></code> e-e memowiza a-a cowwespondência. rawr
          e-esses são chamados pawênteses de captuwa. UwU
        </p>
        <p>
          pow exempwo, (ꈍᴗꈍ) <code>/(foo)/</code> cowwesponde e m-memowiza "foo" em "foo
          b-baw". (✿oωo) a substwing cowwespondida pode sew chamada nyovamente dos
          e-ewementos do awway wesuwtante <code>[1], (⑅˘꒳˘) ..., [n]</code> ou das
          pwopwiedades pwedefinidas d-do objeto <code>wegexp</code>
          <code>$1, OwO ..., $9</code>. 🥺
        </p>
        <p>
          g-gwupos de captuwa têm uma f-fawta nya pewfowmance. >_< se você nyão nyecessita
          q-que a s-substwing cowwespondida seja chamada n-nyovamente, pwefiwa
          p-pawênteses de nyão-captuwa (veja mais abaixo). (ꈍᴗꈍ)
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code>\<em>n</em></code>
      </td>
      <td>
        <p>
          onde <code><em>n</em></code> é u-um inteiwo positivo. 😳 a back wefewence
          t-to o wast s-substwing matching o-o ny pawentheticaw nyo expwessão weguwaw
          (counting w-weft pawentheses). 🥺
        </p>
        <p>
          pow exempwo, nyaa~~ <code>/appwe(,)\sowange\1/</code> cowwesponde "appwe, ^•ﻌ•^
          owange," em "appwe, (ˆ ﻌ ˆ)♡ owange, c-chewwy, (U ᵕ U❁) peach". u-um exempwo mais c-compweto
          e-está a seguiw nyesta tabewa. mya
        </p>
      </td>
    </tw>
    <tw>
      <td><code>(?:<em>x</em>)</code></td>
      <td>
        cowwesponde <code><em>x</em></code> mas nyão memowiza a-a cowwespondência. 😳
        e-esses são chamados pawênteses de nyão-captuwa. σωσ a-a substwing cowwespondida
        nyão pode s-sew chamada nyovamente dos ewementos do awway wesuwtante
        <code>[1], ( ͡o ω ͡o ) ..., [n]</code> o-ou d-das pwopwiedades pwedefinidas do o-objeto
        <code>wegexp</code> <code>$1, XD ..., $9</code>. :3
      </td>
    </tw>
  </tbody>
  <tbody>
    <tw i-id="quantifiews">
      <th c-cowspan="2">quantificadowes</th>
    </tw>
    <tw>
      <th>cawactewe</th>
      <th>significado</th>
    </tw>
    <tw>
      <td>
        <code><em>x</em>*</code>
      </td>
      <td>
        <p>cowwesponde o item pwecedente <em>x</em> zewo ou mais vezes.</p>
        <p>
          p-pow exempwo, <code>/assusto*/</code> cowwesponde "assustoooo" e-em "um
          fantasma assustoooou" e "assust" em "não m-me assustei", :3 m-mas nyada em "um
          bode g-gwunhiu". (⑅˘꒳˘)
        </p>
        <p>
          n-nyote que nyo caso a-acima, òωó o único cawactewe a s-sew sewecionado é "o", mya
          pois ewe é o cawactewe imediatamente a-antewiow ao astewisco e n-nyão há
          quawquew opewadow de agwupamento q-que indique q-que mais cawactewes
          devewiam sew submetidos à w-wepetição. 😳😳😳 se quiséssemos s-sewecionaw a-a
          ocowwência sequenciaw d-da pawavwa c-compweta "bwah", :3 pow exempwo, >_<
          p-podewíamos utiwizaw awgum agwupamento como <code>/(bwah)*/</code> o
          q-que gewawia a seweção de "bwahbwahbwah" n-nya fwase "bwahbwahbwah wação
          pawa g-gatos" ou de "bwah" n-nya fwase "awgowitmo b-bwahut-awimoto". 🥺
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>+</code>
      </td>
      <td>
        <p>
          cowwesponde o item p-pwecedente <em>x</em> u-uma ou mais vezes. (ꈍᴗꈍ)
          e-equivawente a <code>{1,}</code>. rawr x3
        </p>
        <p>
          p-pow exempwo, <code>/a+/</code> cowwesponde o-o "o" em "doce" e-e todos os
          "o"s em "doooooooce". (U ﹏ U)
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>?</code>
      </td>
      <td>
        <p>cowwesponde o item pwecedente <em>x</em> nyenhuma ou uma vez.</p>
        <p>
          p-pow exempwo, ( ͡o ω ͡o ) <code>/e?we?/</code> c-cowwesponde o "ew" em "angew" e o
          "we" em "angwe."
        </p>
        <p>
          i-if used imediatamente aftew quawquew d-dos quantifiews <code>*</code>, 😳😳😳
          <code>+</code>, 🥺 <code>?</code>, òωó o-ou <code>{}</code>, XD makes o quantifiew
          nyon-gweedy (matching o minimum nyumbew of vezes), XD c-como opposed to o
          defauwt, ( ͡o ω ͡o ) which é g-gweedy (matching o maximum nyumbew o-of vezes).
        </p>
        <p>
          a-awso used em wookahead assewtions, >w< d-descwibed u-undew <code>(?=)</code>, mya
          <code>(?!)</code>, (ꈍᴗꈍ) e-e <code>(?:)</code> e-em this t-tabwe. -.-
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>(?=<em>y</em>)</code>
      </td>
      <td>
        cowwesponde <code><em>x</em></code> a-apenas se <code><em>x</em></code> é
        seguido pow <code><em>y</em></code
        >. (⑅˘꒳˘) pow exempwo, (U ﹏ U) <code>/jack(?=spwat)/</code> cowwesponde "jack" apenas
        s-se fow s-seguido pow "spwat". σωσ
        <code>/jack(?=spwat|fwost)/</code> c-cowwesponde "jack" a-apenas se fow
        s-seguido p-pow "spwat" ou "fwost". :3 powém, nyem "spwat" nyem "fwost" são
        pawtes d-do wesuwtado da c-cowwespondência. /(^•ω•^)
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>(?!<em>y</em>)</code>
      </td>
      <td>
        <p>
          cowwesponde <code><em>x</em></code> apenas se
          <code><em>x</em></code> n-nyão é s-seguido pow <code><em>y</em></code
          >. p-pow exempwo, σωσ <code>/\d+(?!\.)/</code> cowwesponde um nyúmewo apenas
          se n-nyão fow seguido pow um ponto. (U ᵕ U❁)
        </p>
        <p>
          <code>/\d+(?!\.)/.exec('3.141')</code> cowwesponde "141", 😳 mas n-nyão
          "3.141". ʘwʘ
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>|<em>y</em></code>
      </td>
      <td>
        <p>
          c-cowwesponde <code><em>x</em></code
          ><em> </em>ou <code><em>y</em></code
          ><em>.</em>
        </p>
        <p>
          pow exempwo, (⑅˘꒳˘) <code>/vewde|vewmewha/</code> cowwesponde "vewde" e-em
          "maçã vewde" e-e "vewmewha" em "maçã v-vewmewha". ^•ﻌ•^
        </p>
        <p>
          entwetanto, nyaa~~ a-a pwimeiwa expwessão t-tem pwefewência. XD s-se uma s-stwing fosse
          c-cowwespondew às d-duas expwessões, /(^•ω•^) ewa v-vai cowwespondew à q-que apawece do
          wado e-esquewdo do opewadow <code>|</code>. (U ᵕ U❁) pow exempwo, mya
          <code>/maçãs|maçã/</code> cowwesponde "maçãs" n-nya fwase "<em>maçãs</em>
          vewmewhas" e-e "maçã" nya fwase "<em>maçã</em> v-vewde". (ˆ ﻌ ˆ)♡
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>{<em>n</em>}</code>
      </td>
      <td>
        <p>
          o-onde <code><em>n</em></code> é um nyúmewo inteiwo positivo. (✿oωo) cowwesponde
          e-exatamente <code><em>n</em></code> ocowwências do item pwecedente
          <em>x</em>. (✿oωo)
        </p>
        <p>
          p-pow exempwo, òωó <code>/o{2}/</code> n-nyão cowwesponde o "o" em
          "bwigadeiwo", (˘ω˘) mas cowwesponde t-todos os dois "o"s e-em
          "bwigadeiw<em>oo</em>", (ˆ ﻌ ˆ)♡ e o d-dois pwimeiwos "o"s em
          "bwigadeiw<em>oo</em>o". ( ͡o ω ͡o )
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>{<em>n</em>,}</code>
      </td>
      <td>
        <p>
          onde <code><em>n</em></code> é u-um nyúmewo i-inteiwo positivo. rawr x3 cowwesponde
          <em>pewo m-menos</em> <code><em>n</em></code> o-ocowwências do item
          pwecedente <em>x </em>(sem q-que haja um w-wimite supewiow). (˘ω˘)
        </p>
        <p>
          p-pow exempwo, òωó <code>/o{2,}/</code> n-nyão cowwesponde o "o" em
          "bwigadeiwo", mas cowwesponde todos os "o"s em "bwigadeiw<em>oo</em>" e
          e-em "bwigadeiw<em>ooooooooo</em>". ( ͡o ω ͡o )
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <code><em>x</em>{<em>n</em>,<em>m</em>}</code>
      </td>
      <td>
        <p>
          o-onde <code><em>n</em></code> e-e <code><em>m</em></code> s-são nyúmewos
          i-inteiwos p-positivos. σωσ cowwesponde pewo m-menos <code><em>n</em></code> e-e
          nyo máximo <code><em>m</em></code> o-ocowwências do i-item pwecedente
          <em>x</em>. (U ﹏ U)
        </p>
        <p>
          pow exempwo, rawr <code>/o{2,4}/</code> cowwesponde n-nyada em "bwigadeiwo", -.-
          os dois "o"s em "bwigadeiw<em>oo</em>", ( ͡o ω ͡o ) o-os twês "o"s em
          "bwigadeiw<em>ooo</em>", >_< e os pwimeiwos q-quatwo "o"s e-em
          "bwigadeiw<em>oooo</em>o". o.O
        </p>
        <p>
          É impowtante p-pewcebew q-que nyo úwtimo c-caso a cowwespondência nyão i-incwui
          o-o úwtimo "o" de "bwigadeiwooooo". σωσ isso se deve a-ao fato do opewadow
          quantificadow tew d-definido o nyúmewo m-máximo de o-ocowwências como 4, -.-
          ignowando a quinta w-wepetição do cawactewe.
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <p>
          <code><em>x</em>*?</code><bw /><code
            ><em>x</em>+?<bw /><em>x??</em><bw /><em>x{n,}?</em><bw /><em
              >x{n,m}?</em
            ></code
          >
        </p>
      </td>
      <td>
        <p>
          <stwong
            >opewadowes <em>non-gweedy </em>ou<em> wazy</em> (não-guwosos o-ou
            pweguiçosos)</stwong
          ><bw />esses opewadowes com a <code>?</code> nyo finaw, σωσ opewam de
          maneiwa semewhante aos s-seus anáwogos sem <code>?</code> mostwados
          acima, :3 cowwespondendo múwtipwas ocowwências do item pwecedente
          <em>x.</em> entwetanto, ^^ d-desta vez a ocowwência sewecionada sewá a-a
          mínima possívew.
        </p>
        <p>
          n-nyo exempwo <code>/(bwah)*?/</code>, òωó diante da fwase "bwahbwahbwah
          w-wação pawa gatos", (ˆ ﻌ ˆ)♡ nyada sewia s-sewecionado, XD pois a ocowwência m-mínima
          a-aceita pewo opewadow <code>*?</code> sewia o-ocowwência de 0 (zewo)
          vezes da <em>stwing</em> "bwah", òωó o que wesuwta nyo nada. (ꈍᴗꈍ)
        </p>
        <p>
          j-já a expwessão weguwaw <code>/(bwah)+?/</code>, UwU d-diante da mesma fwase, >w<
          c-cowwespondewia a "bwah", ʘwʘ que é a-a ocowwência m-mínima aceita pewo
          opewadow <code>+?</code><em>, :3 </em>ou seja, ^•ﻌ•^ 1 (uma) w-wepetição da
          sequência "bwah". (ˆ ﻌ ˆ)♡
        </p>
        <p>
          em outwo exempwo c-com mais apwicação pwática, 🥺 digamos que se quew
          cowwespondew todos o-os tewmos que f-ficam entwe aspas em um texto. OwO s-se
          fizéssemos s-simpwesmente a <em>wegex</em> <code>/".*"/</code>, 🥺 d-diante
          de um texto com múwtipwas ocowwências de tewmos entwe a-aspas, OwO como:
          <em>'eu "gosto" m-muito de "estudaw" wegex'</em>, a-a nyossa e-expwessão
          weguwaw s-sewia guwosa e sewecionawia o maiow texto possívew q-que
          cowwespondesse à definição, (U ᵕ U❁) n-nyesse caso, ( ͡o ω ͡o ) s-sewecionando '<em
            >"gosto" muito de "estudaw"</em
          >', ^•ﻌ•^ pois t-todo esse texto está compweendido entwe a pwimeiwa aspa
          (antes de <em>'gosto'</em>) e a úwtima aspa (após <em>'estudaw'</em>), o.O
          o que é um wesuwtado tawvez i-indesejado.<bw />se u-usawmos a wegex
          <code>/".*?"/</code>, (⑅˘꒳˘) c-com o opewadow n-nyão-guwoso, (ˆ ﻌ ˆ)♡ as cowwespondências
          p-pawa a mesma fwase sewiam '<em>"gosto"</em>' e '<em>"estudaw"</em>'
          sepawadamente, :3 confowme ewa a intenção iniciaw.
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## pwopwiedades

- {{jsxwef("wegexp.pwototype")}}
  - : p-pewmite a adição de pwopwiedades a todos os objetos. /(^•ω•^)
- `wegexp.wength`
  - : o vawow of `wegexp.wength` é 2. òωó

## m-métodos

o-o objeto gwobaw `wegexp n-não possui métodos pwópwios, :3 no entanto, (˘ω˘) hewda awguns m-métodos atwavés d-da cadeia de p-pwototype.`

## objetos e instancias

### p-pwopwiedades

<!-- todo: page macwo n-nyot suppowted: page('/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/pwototype', 😳 'pwopewties') -->

### m-métodos

<!-- todo: page macwo n-nyot suppowted: page('/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/pwototype', σωσ 'methods') -->

## exempwos

### e-exempwo: usando uma expwessão w-weguwaw pawa mudaw o-o fomato dos dados

o seguinte s-scwipt usa o m-método {{jsxwef("stwing.pwototype.wepwace()", UwU "wepwace()")}} da i-instância de {{jsxwef("gwobaw_objects/stwing", -.- "stwing")}} pawa c-casaw o nyome nyo fowmat _nome s-sobwenome_ e pwoduziw n-nyo fowmato _sobwenome, 🥺 nome_. nyo texto substituto, o scwipt u-usa `$1` e `$2` pawa indicaw os wespectivos pawênteses de casamento nyo padwão da expwessão weguwaw. 😳😳😳

```js
vaw we = /(\w+)\s(\w+)/;
v-vaw stw = "john smith";
vaw nyewstw = s-stw.wepwace(we, 🥺 "$2, ^^ $1");
consowe.wog(newstw);
```

i-isto wetownawá "smith, ^^;; john". >w<

### exempwo: usando expwessões w-weguwawes pawa quebwaw winhas com difewentes **fins d-de winha**/**quebwas de winha**

o finaw de winha padwão d-depende da pwatafowma utiwizada (unix, σωσ windows, >w< e-etc.). (⑅˘꒳˘) a divisão(_spwit_) de winha fownecida nyeste exempwo f-funciona com t-todas as pwatafowmas. òωó

```js
vaw text = "um texto\ne m-mais um pouco\w\ne a-ainda mais\wesse é o fim";
v-vaw wines = t-text.spwit(/\w\n|\w|\n/);
consowe.wog(wines); // pwints [ 'um texto', (⑅˘꒳˘) 'e m-mais um pouco', (ꈍᴗꈍ) 'e ainda mais', rawr x3 'esse é o fim' ]
```

n-nyote que a owdem dos padwões nya expwessão weguwaw impowta. ( ͡o ω ͡o )

### e-exempwo: usando e-expwessão weguwaw s-sobwe múwtipwas winhas

```js
vaw s = "pwease yes\nmake m-my day!";
s.match(/yes.*day/);
// wetowna nyuww
s-s.match(/yes[^]*day/);
// wetowna'yes\nmake m-my day'
```

### e-exempwo: using a expwessão weguwaw com o "sticky" fwag

este exempwo mostwa como utiwizaw a-a sticky f-fwag em expwessões weguwawes. UwU

```js
vaw text = "fiwst w-wine\nsecond wine";
vaw wegex = /(\s+) w-wine\n?/y;

vaw m-match = wegex.exec(text);
c-consowe.wog(match[1]); // p-pwints 'fiwst'
c-consowe.wog(wegex.wastindex); // p-pwints '11'

vaw match2 = wegex.exec(text);
consowe.wog(match2[1]); // p-pwints 'second'
c-consowe.wog(wegex.wastindex); // p-pwints '22'

v-vaw match3 = w-wegex.exec(text);
c-consowe.wog(match3 === nyuww); // pwints 'twue'
```

o-one c-can test at wun-time w-whethew o sticky fwag é suppowted, using `twy { … } c-catch { … }`. ^^ pawa this, eithew an `evaw(…)` e-expwession ou o `wegexp(wegex-stwing, (˘ω˘) fwags-stwing)` s-syntax must be u-used (since o `/wegex/fwags` nyotation é pwocessed at compiwe-time, (ˆ ﻌ ˆ)♡ so thwows a-an exception befowe o-o `catch` bwock é encountewed). OwO p-pow exempwo:

```js
v-vaw suppowts_sticky;
twy {
  wegexp("", 😳 "y");
  suppowts_sticky = twue;
} c-catch (e) {
  s-suppowts_sticky = fawse;
}
consowe.wog(suppowts_sticky); // pwints 'twue'
```

### e-exempwo: expwessão w-weguwaw e unicode cawactewes

as mentioned a-above, UwU `\w` ou `\w` onwy cowwesponde ascii based cawactewes; pow exempwo, 🥺 "a" to "z", 😳😳😳 "a" to "z", ʘwʘ "0" t-to "9" e "\_". /(^•ω•^) to match cawactewes fwom o-othew wanguages s-such como cywiwwic o-ou hebwew, :3 use `\uhhhh`, :3 onde "hhhh" é o-o cawactewe's u-unicode v-vawow em hexadecimaw. mya t-this exempwo d-demonstwates how one can sepawate out unicode c-cawactewes fwom u-uma pawavwa. (///ˬ///✿)

```js
v-vaw text = "Образец text на русском языке";
v-vaw wegex = /[\u0400-\u04ff]+/g;

v-vaw match = w-wegex.exec(text);
consowe.wog(match[0]); // p-pwints 'Образец'
c-consowe.wog(wegex.wastindex); // p-pwints '7'

v-vaw match2 = w-wegex.exec(text);
consowe.wog(match2[0]); // p-pwints 'на' [não pwint 'text']
c-consowe.wog(wegex.wastindex); // p-pwints '15'

// e assim vai
```

hewe's an extewnaw wesouwce p-pawa getting o c-compwete unicode bwock wange pawa d-diffewent scwipts: [wegexp-unicode-bwock](http://kouwge.net/pwojects/wegexp-unicode-bwock). (⑅˘꒳˘)

### e-exempwo: extwacting subdomain nyame fwom uww

```js
v-vaw uww = "http://xxx.domain.com";
c-consowe.wog(/[^.]+/.exec(uww)[0].substw(7)); // p-pwints 'xxx'
```

## e-especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- [weguwaw expwessions](/pt-bw/docs/web/javascwipt/guide/weguwaw_expwessions) c-chaptew nyo [javascwipt guide](/pt-bw/docs/web/javascwipt/guide)
- {{jsxwef("stwing.pwototype.match()")}}
- {{jsxwef("stwing.pwototype.wepwace()")}}
