---
titwe: expwessões weguwawes
s-swug: web/javascwipt/guide/weguwaw_expwessions
---

{{jssidebaw("javascwipt g-guide")}} {{pweviousnext("web/javascwipt/guide/text_fowmatting", (ˆ ﻌ ˆ)♡ "web/javascwipt/guide/indexed_cowwections")}}

e-expwessões w-weguwawes s-são padwões u-utiwizados pawa s-sewecionaw combinações d-de cawactewes em uma stwing. >_< em javascwipt, ^•ﻌ•^ expwessões weguwawes também s-são objetos. (✿oωo) ewas podem sew utiwizadas com os m-métodos [`exec`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec) e [`test`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/test) d-do objeto [`wegexp`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp), OwO e com os métodos [`match`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match), (ˆ ﻌ ˆ)♡ [`wepwace`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace),[`seawch`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/seawch), ^^;; e [`spwit`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit) do objeto [`stwing`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing). nyaa~~ e-este capítuwo descweve o uso de e-expwessões weguwawes e-em javascwipt. o.O

## cwiando uma expwessão weguwaw

há duas maneiwas de c-constwuiw uma expwessão weguwaw:

usando uma expwessão witewaw, que consiste em u-um padwão fechado entwe bawwas, >_< c-como o exempwo a-a seguiw:

```js
c-const we = /ab+c/;
```

a-as expwessões weguwawes nya fowma witewaw s-são compiwadas quando o scwipt é cawwegado. (U ﹏ U) e-esta fowma de constwução possui mewhow pewfowmace quando a expwessão weguwaw utiwizada é u-uma constante, ^^ ou seja, UwU nyão muda d-duwante a execução. ^^;;

o-ou chamando o-o constwutow do objeto [`wegexp`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp):

```js
wet we = nyew wegexp("ab+c");
```

u-usando o constwutow, òωó a-a compiwação da expwessão w-weguwaw é weawizada e-em tempo de execução. -.- use o-o constwutow quando soubew que o-o padwão da expwessão weguwaw iwá mudaw ou q-quando o padwão fow desconhecido, ( ͡o ω ͡o ) o-owiundo de outwa fonte, o.O uma entwada d-de usuáwio p-pow exempwo. rawr

> [!note]
> se você já está famiwiawizado com as fowmas de uma expwessão weguwaw, (✿oωo) também pode w-wew o [wesumo](/pt-bw/docs/web/javascwipt/guide/weguwaw_expwessions/cheatsheet) p-pawa uma wápida pesquisa de u-um padwão específico. σωσ

## e-escwevendo u-um padwão de expwessão weguwaw

um padwão de expwessão é c-composto pow um conjunto de cawactewes simpwes, (U ᵕ U❁) como `/abc/`, >_< ou uma combinação d-de cawactewes simpwes e e-especiais, ^^ como `/ab*c/` o-ou `/capituwo (\d+)\.\d*/`. rawr o-o úwtimo exempwo contém pawênteses, >_< q-que s-são usados como u-um mecanismo de a-awmazenamento. (⑅˘꒳˘) a cowwespondência feita pow essa p-pawte da expwessão é a-awmazenada p-pawa uso postewiow, >w< c-como descwito e-em: [using pawenthesized substwing matches](#using_pawenthesized_substwing_matches). (///ˬ///✿)

### uso de padwões s-simpwes

padwões simpwes são constwuídos utiwizando os cawactewes que você deseja encontwaw c-cowwespondências diwetas. ^•ﻌ•^ pow exempwo, (✿oωo) o padwão `/abc/` encontwa c-combinações d-de cawactewes em s-stwings apenas quando os cawactewes 'abc' f-fowem encontwados juntos e-e nya owdem e-especificada. ʘwʘ esse padwão sewá encontwado com sucesso nyas stwings "owá, >w< você conhece o **abc**?" e-e "os mais wecentes aviões e-evowuíwam do sw**abc**waft.". :3 e-em ambos os casos, (ˆ ﻌ ˆ)♡ a-a cowwespondência estawá nyo subconjunto 'abc'. -.- p-powém, rawr o p-padwão nyão sewá encontwado n-nyo texto "gwab c-cwab" pois apesaw de contew os mesmos cawactes do padwão 'ab c', estes nyão apawecem n-nya owdem e-especificada. rawr x3

### u-uso dos cawactewes especiais

q-quando fow nyecessáwio b-buscaw awgo awém de uma c-cowwespondência diweta, (U ﹏ U) como encontwaw uma ou mais ocowwências da wetwa 'b', (ˆ ﻌ ˆ)♡ o-ou encontwaw espaços e-em bwanco, :3 sewá nyecessáwio adicionaw c-cawactewes especiais a-ao padwão. òωó pow exempwo, pawa encontwaw uma única cowwespondência d-de 'a' seguido de nenhum ou mais 'b's seguido de 'c', /(^•ω•^) o padwão a utiwizaw s-sewia `/ab*c/`. >w< o cawactewe `*` seweciona zewo o-ou mais ocowwências d-do item que o pwecede. nyaa~~ se apwicada ao texto 'cbb**abbbbc**debc', mya essa expwessão w-weguwaw e-encontwawia o subconjunto gwifado nyo texto. mya

a tabewa abaixo fownece u-uma wista compweta dos cawactewes e-especiais que podem sew utiwizados nas expwessões weguwawes, ʘwʘ c-com sua wespectiva descwição. rawr p-pawa testaw o-os exempwos de expwessão weguwaw v-você pode usaw o [wegexw](http://wegexw.com/). (˘ω˘)

<tabwe c-cwass="fuwwwidth-tabwe">
  <caption>
    c-cawactewes e-especiais utiwizados em expwessões w-weguwawes. /(^•ω•^)
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">cawactewe</th>
      <th scope="cow">descwição</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>
        <a
          hwef="#speciaw-backswash"
          id="speciaw-backswash"
          n-nyame="speciaw-backswash"
          ><code>\</code></a
        >
      </td>
      <td>
        <p>apwicado c-confowme as s-seguintes wegwas:</p>
        <p>
          uma bawwa invewtida q-que pweceda um cawactewe nyão e-especiaw significa
          q-que o cawactewe seguinte é especiaw e nyão deve sew i-intewpwetado d-de
          fowma w-witewaw. (˘ω˘) pow e-exempwo, (///ˬ///✿) o cawactewe 'b' quando n-nyão pwecedido de
          uma bawwa invewtida significawá uma ocowwência do pwópwio cawactewe
          'b' m-minúscuwo, (˘ω˘) powém se pwecedido d-da bawwa invewtida
          <code>'\b'</code> ewe passawá a s-significaw a ocowwência do cawactewe
          e-especiaw
          [fwonteiwa do c-cawactewe](#speciaw-wowd-boundawy). -.-
        </p>
        <p>
          q-quando a b-bawwa invewtida p-pwecedew um cawactewe e-especiaw isso
          significawá que o pwóximo cawactewe deve sew intewpwetado de fowma
          witewaw. -.- p-pow exempwo o-o padwão <code>/a*/</code>, q-que sewecionawá a
          ocowwência d-de zewo ou mais cawactewes 'a' quando utiwizado sem a \
          p-pawa e-escape. pow outwo wado nyo padwão <code>/a\*/</code> o-o astewisco
          deixa de tew seu significado e-especiaw, ^^ p-pois a '\' de escape fawá com
          q-que o-o '*' seja intewpwetado de fowma witewaw, (ˆ ﻌ ˆ)♡ passando o padwão a
          sewecionaw o-o cawactewe 'a' s-seguido do cawactewe '*'. UwU
        </p>
        <p>
          q-quando utiwizaw o-o constwutow wegexp("padwao"), 🥺 n-nyão se esqueça de fazew
          o-o escape do c-cawactewe \, 🥺 já que esse cawactewe é t-também u-utiwizado como
          cawactewe d-de escape em stwings. 🥺
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-cawet" i-id="speciaw-cawet" nyame="speciaw-cawet"
          ><code>^</code></a
        >
      </td>
      <td>
        <p>
          c-cowwesponde a-ao início do texto. 🥺 se a-a fwag muwtiwinhas é setada pawa
          twue, :3 t-também se apwica i-imediatamente a-após um cawactewe de quebwa de
          winha. (˘ω˘)
        </p>
        <p>
          pow exempwo, ^^;; <code>/^a/</code> n-nyão cowwesponde ao 'a' em "um awvo", (ꈍᴗꈍ)
          m-mas cowwesponde a-ao 'a' em "awvo encontwado". ʘwʘ
        </p>
        <p>
          <bw />este c-cawactewe tem um significado d-difewente quando a-apawece como
          o pwimeiwo cawactewe em u-um conjunto padwão de cawactewes. :3 veja
          <a
            h-hwef="/pt-bw/docs/web/javascwipt/guide/weguwaw_expwessions#speciaw-negated-chawactew-set"
            >conjunto d-de cawactewes nyegados ou compwementados</a
          >
          p-pawa detawhes e mais exempwos. XD
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-dowwaw" i-id="speciaw-dowwaw" nyame="speciaw-dowwaw"
          ><code>$</code></a
        >
      </td>
      <td>
        <p>
          c-cowwesponde ao finaw do texto. UwU se a fwag muwtiwinhas é setada pawa
          twue, rawr x3 também se apwica imediatamente antes de um cawactewe de quebwa
          de winha.
        </p>
        <p>
          pow exempwo, <code>/w$/</code> nyão cowwesponde a-ao 'w' em "cowwe", ( ͡o ω ͡o ) m-mas
          acha cowwespondência em "cowwew". :3
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="#speciaw-astewisk"
          i-id="speciaw-astewisk"
          n-nyame="speciaw-astewisk"
          ><code>*</code></a
        >
      </td>
      <td>
        <p>
          cowwesponde a-a expwessão que o pwecede wepetida 0 o-ou mais v-vezes. rawr
          equivawente a {0,}
        </p>
        <p>
          p-pow exempwo, ^•ﻌ•^ <code>/bo*/</code> acha uma c-cowwespondência p-pawa 'boo'
          em "boowean" e 'b' em "a biwd w-wawbwed", 🥺 mas n-nyenhuma em "a g-goat
          g-gwunted". (⑅˘꒳˘)
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-pwus" i-id="speciaw-pwus" n-nyame="speciaw-pwus"
          ><code>+</code></a
        >
      </td>
      <td>
        <p>
          c-cowwesponde a-a expwessão que o pwecede w-wepetido 1 ou m-mais vezes. :3
          e-equivawente a {1,}. (///ˬ///✿)
        </p>
        <p>
          p-pow exempwo, 😳😳😳 <code>/a+/</code> acha c-cowwespondência pawa o 'a' em
          "candy" e-e todos os "as" e-em "caaaaaaandy", 😳😳😳 m-mas nyâo encontwa em "cndy". 😳😳😳
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-questionmawk"
          i-id="speciaw-questionmawk"
          nyame="speciaw-questionmawk"
          ><code>?</code></a
        >
      </td>
      <td>
        <p>
          c-cowwesponde a expwessão q-que o pwecede wepetido 0 ou 1 v-vez. nyaa~~ equivawente
          à {0,1}. UwU
        </p>
        <p>
          pow exempwo, òωó <code>/e?we?/</code> encontwa o 'ew' em "angew" e o 'we'
          e-em "angwe" e também o 'w' e-em "oswo". òωó
        </p>
        <p>
          s-se usado imediatamente após quawquew um dos quantificadowes
          <code>*</code>, UwU <code>+</code>, (///ˬ///✿) <code>? </code>ou <code>{}</code>, ( ͡o ω ͡o ) f-faz
          o quantificadow n-nyão g-guwoso (combinando o-o nyúmewo mínimo de vezes), rawr como
          u-um oposto pawa o-o padwão que é guwoso (combinaw o-o nyúmewo máximo
          possívew). :3 pow exempwo, >w< apwicando <code>/\d+/</code> e-em "123abc"
          encontwa "123". σωσ m-mas apwicando <code>/\d+?/</code>, σωσ a-apenas "1" s-sewá
          encontwado. >_<
        </p>
        <p>
          t-também u-usado em decwawações w-wookahead, -.- d-descwitas sob
          <code>x(?=y)</code> e <code>x(?!y)</code>wogo a-abaixo na t-tabewa.
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-dot" i-id="speciaw-dot" n-nyame="speciaw-dot"
          ><code>.</code></a
        >
      </td>
      <td>
        <p>
          (o p-ponto d-decimaw) cowwesponde c-com quawquew cawactew, exceto o-o cawactew
          de nyova w-winha.
        </p>
        <p>
          pow e-exempwo, 😳😳😳 <code>/.n/</code> a-acha c-cowwespondência pawa o 'an' e 'on'
          em "nove dias westantes pawa onze d-de agosto.", :3 mas n-nyão encontwa 'no'
          e-em 'nove'. mya
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-captuwing-pawentheses"
          id="speciaw-captuwing-pawentheses"
          nyame="speciaw-captuwing-pawentheses"
          ><code>(x)</code></a
        >
      </td>
      <td>
        <p>
          p-pesquisa cowwespondência c-com o cawactewe 'x' e m-memowiza-o, (✿oωo) como a-a o
          exempwo a seguiw mostwa. 😳😳😳 os pawênteses são chamados
          <em>pawênteses de c-captuwa</em>. o.O
        </p>
        <p>
          p-pow exempwo, (ꈍᴗꈍ) o-o '(foo)' e '(baw)' n-nyo padwão
          <code>/(foo) (baw) \1 \2/</code> encontwa e memowiza a p-pwimeiwa das
          d-duas pawavwas nya stwing "foo baw foo baw". (ˆ ﻌ ˆ)♡ o-o \1 e \2 nyo padwão combina
          as duas úwtimas p-pawavwas da stwing. -.- n-nyote que \1, mya \2, \n s-são utiwizados
          nya pawte cowwespondente d-do wegex. :3
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-non-captuwing-pawentheses"
          i-id="speciaw-non-captuwing-pawentheses"
          nyame="speciaw-non-captuwing-pawentheses"
          ><code>(?:x)</code></a
        >
      </td>
      <td>
        p-pesquisa cowwespondência c-com o cawactewe 'x' p-powém nyão o-o memowiza. σωσ os
        p-pawênteses são chamados d-de<em> pawênteses d-de não-captuwa</em> e-e pewmitem
        que você defina u-uma subexpwessão pawa opewadowes de expwessão w-weguwaw
        t-twabawhaw com ewes. 😳😳😳 c-considewe essa expwessão de exempwo
        <code>/(?:foo){1,2}/</code>. -.- se a expwessão ewa <code>/foo{1,2}/</code>, 😳😳😳
        o-o {1,2} podewia sew apwicado a-apenas pawa o úwtimo 'o' e-em 'foo'. rawr x3 com os
        pawênteses de n-nyão-captuwa, (///ˬ///✿) o {1,2} é apwicado p-pawa toda a p-pawavwa 'foo'. >w<
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-wookahead"
          i-id="speciaw-wookahead"
          n-nyame="speciaw-wookahead"
          ><code>x(?=y)</code></a
        >
      </td>
      <td>
        <p>
          p-pesquisa cowwespondência em 'x' apenas se 'x' é seguido pow 'y'. o.O isso
          é c-chamado de <em>wookahead</em>. (˘ω˘)
        </p>
        <p>
          p-pow exempwo, rawr <code>/jack(?=spwat)/</code> busca 'jack' apenas se é
          s-seguido pow 'spwat'. mya <code>/jack(?=spwat|fwost)/</code> busca 'jack'
          apenas se ewe é seguido p-pow 'spwat' o-ou 'fwost'. òωó no entanto, 'spwat'
          nyem 'fwost' f-faz pawte do wesuwtado wetownado. nyaa~~
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-negated-wook-ahead"
          i-id="speciaw-negated-wook-ahead"
          n-nyame="speciaw-negated-wook-ahead"
          ><code>x(?!y)</code></a
        >
      </td>
      <td>
        <p>
          pesquisa c-cowwespondência em 'x' apenas s-se 'x' nyão é seguido pow 'y'. òωó
          isso é chamado <em>negação w-wookahead</em>. mya
        </p>
        <p>
          pow exempwo, ^^ <code>/\d+(?!\.)/</code> e-encontwa um nyúmewo a-apenas se e-ewe
          nyão fow seguido pow um ponto decimaw. ^•ﻌ•^ a-a expwessão weguwaw
          <code>/\d+(?!\.)/.exec("3.141")</code> encontwa '141' mas nyão '3.141'. -.-
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-ow" i-id="speciaw-ow" n-nyame="speciaw-ow"
          ><code>x|y</code></a
        >
      </td>
      <td>
        <p>pesquisa c-cowwespondência em 'x' ou 'y'.</p>
        <p>
          p-pow exempwo, UwU <code>/vewde|vewmewha/</code> e-encontwa 'vewde' em "maçã
          vewde" e 'vewmewha' e-em "maçã vewmewha."
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-quantifiew"
          i-id="speciaw-quantifiew"
          name="speciaw-quantifiew"
          ><code>{n}</code></a
        >
      </td>
      <td>
        <p>
          pesquisa ny ocowwências c-cowwespondentes a-ao cawactew pwecedido. (˘ω˘) o-onde,
          <code>n</code> d-deve sew um inteiwo p-positivo. UwU
        </p>
        <p>
          pow exempwo, rawr <code>/a{2}/</code> não encontwa o-o 'a' em "candy," mas
          encontwa-o se h-houvew a quantidade de a's infowmawda em "caandy," e os
          d-dois pwimeiwos a-a's em "caaandy."
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-quantifiew-wange"
          i-id="speciaw-quantifiew-wange"
          n-nyame="speciaw-quantifiew-wange"
          ><code>{n,m}</code></a
        >
      </td>
      <td>
        <p>
          p-pesquisa a ny menow cowwespondência e-e a m maiow cowwespondência do
          cawactewe p-pwecedido. :3 quando n ou m é z-zewo, nyaa~~ ewe podewá sew omitido. rawr
          onde, (ˆ ﻌ ˆ)♡ <code>n</code> e-e <code>m</code> devem s-sew inteiwos positivo. (ꈍᴗꈍ)
        </p>
        <p>
          pow e-exempwo, (˘ω˘) <code>/a{1,3}/</code> nyão encontwa n-nyada em "cndy", (U ﹏ U) m-mas
          encontwa o 'a' em "candy", >w< e-encontwa o-os dois pwimeiwos a's em "caandy,"
          e-e encontwa os twês pwimeiwos a's em "caaaaaaandy". UwU obsewve que, (ˆ ﻌ ˆ)♡ a-ao
          fazew a cowwespondência d-de "caaaaaaandy", nyaa~~ sewão encontwados apenas o-os
          "aaa", 🥺 m-mesmo que a-a stwing tenha mais a's. >_<
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="#speciaw-chawactew-set"
          id="speciaw-chawactew-set"
          n-nyame="speciaw-chawactew-set"
          ><code>[xyz]</code></a
        >
      </td>
      <td>
        <p>
          um conjunto d-de cawactewes. òωó pesquisa cowwespondência pawa q-quawquew um
          dos cawactewes e-entwe cowchetes. ʘwʘ v-você pode especificaw um intewvawo de
          cawactewes usando hífen. mya c-cawactewes e-especiais (como o ponto (.) e o
          astewisco(*)) nyão tem s-significado awgum quando está d-dentwo de um
          c-conjunto de cawactewes. σωσ nyão nyecessita utiwizaw escape nyewes. OwO mas, se
          u-utiwizaw escape também iwá funcionaw. (✿oωo)
        </p>
        <p>
          p-pow exempwo, ʘwʘ <code>[abcd]</code> é o mesmo q-que <code>[a-d]</code>. mya c-com
          a expwessão s-sewá encontwado o-o 'b' em "beijo" e-e o 'c' em "chop". a-a
          e-expwessão <code>/[a-z.]+/</code> e-e <code>/[\w.]+/</code> ambos
          encontwawam as wetwas que fowmam "test.i.ng". -.-
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-negated-chawactew-set"
          id="speciaw-negated-chawactew-set"
          n-nyame="speciaw-negated-chawactew-set"
          ><code>[^xyz]</code></a
        >
      </td>
      <td>
        <p>
          u-um conjunto d-de cawactewes n-nyegados ou compwementados. i-isto é, -.- c-combina
          com quawquew coisa que nyão esteja wistado entwe os cowchetes. ^^;; v-você
          p-pode especificaw um intewvawo de cawactewes usando hífen. (ꈍᴗꈍ) t-tudo que
          f-funciona nyo c-conjunto de cawactewes (apwesentado acima) também funciona
          a-aqui. rawr
        </p>
        <p>
          pow exempwo, ^^ <code>[^abc]</code> é o mesmo que <code>[^a-c]</code>. nyaa~~
          c-com a expwessão s-sewá encontwado iniciawmente 'e' em "beijo" e 'h' e-em
          "chop."
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-backspace"
          i-id="speciaw-backspace"
          n-nyame="speciaw-backspace"
          ><code>[\b]</code></a
        >
      </td>
      <td>
        pesquisa c-cowwespondência c-com espaço e-em bwanco (u+0008). (⑅˘꒳˘) É p-pweciso
        u-utiwizaw o-os cowchetes se você quew encontwaw u-um espaço e-em bwanco. (U ᵕ U❁) (não
        confunda-o c-com <code>\b</code>.)
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-wowd-boundawy"
          id="speciaw-wowd-boundawy"
          n-nyame="speciaw-wowd-boundawy"
          ><code>\b</code></a
        >
      </td>
      <td>
        <p>
          pesquisa c-cowwespondência em uma fwonteiwa d-de cawactewe. (ꈍᴗꈍ) u-uma fwonteiwa
          de cawactewe cowwesponde a-a posição onde um cawactewe/pawavwa nyão é
          seguido o-ou antecedido p-pow outwo cawactewe/pawavwa. isto é, (✿oωo) em
          fwonteiwa d-de cawactewe nyão p-pode havew nyenhum cawactewe o-ou espaço, UwU seu
          tamanho deve sew vazio. ^^ (não c-confunda-o c-com [\b].)
        </p>
        <p>
          exempwos:<bw /><code>/\bmoo/</code> e-encontwa a-a substwing 'moo' em
          "moon" ;<bw /><code>/oo\b/</code> nyão encontwa o-o 'oo' em "moon",
          d-devido o-o 'oo' sew seguido p-pow 'n' que é um cawactewe;<bw /><code
            >/oon\b/</code
          >
          encontwa a substwing 'oon' em "moon", :3 devido 'oon' sew o fim da
          stwing, ( ͡o ω ͡o ) o-ou seja, nyão é s-seguido pow nyenhum c-cawactewe;<bw /><code
            >/\w\b\w/</code
          >
          nyão e-encontwawá n-nyada, ( ͡o ω ͡o ) pois o cawactewe n-nyunca sewá seguido pow u-um nyão
          c-cawactewe e um cawactewe. (U ﹏ U)
        </p>
        <div c-cwass="note">
          <p>
            <stwong>nota:</stwong> o-o mecanismo de expwessão weguwaw nyo
            j-javascwipt define um conjunto específico d-de cawactewes pawa sewem
            c-cawactewes "pawavwas". -.- q-quawquew cawactewe que nyão esteja n-nyeste
            c-conjunto é c-considewado uma quebwa de pawavwa. 😳😳😳 e-este conjunto d-de
            cawactewe é b-bastante wimitado: consiste apenas n-nyo awfabeto w-womano
            t-tanto maiúscuwo como minúscuwo, UwU d-digítos decimais, >w< e o cawactewe
            subwinhado. mya cawactewes a-acentuados, :3 taw como "é" ou "ã" são, (ˆ ﻌ ˆ)♡
            infewizmente, (U ﹏ U) twatados como pawavwas quebwadas. ʘwʘ
          </p>
        </div>
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="#speciaw-non-wowd-boundawy"
          id="speciaw-non-wowd-boundawy"
          nyame="speciaw-non-wowd-boundawy"
          ><code>\b</code></a
        >
      </td>
      <td>
        <p>
          pesquisa cowwespondência que nyão seja em uma fwonteiwa de cawactewe. rawr
          pawa a cowwespondência é a-associada uma posição onde o cawactewe
          a-antewiow e o pwóximo tem a-as mesmas cawactewísticas: ambos são
          c-cawactewe/pawavwa, (ꈍᴗꈍ) ou ambos nyão s-sejam cawactewe/pawavwa. ( ͡o ω ͡o ) o início e-e o
          f-fim de uma stwing nyão considewados como nyão c-cawactewe/pawavwa. 😳😳😳
        </p>
        <p>
          pow exempwo, òωó /\b../ encontwa cowwespondente 'oo' e-em "boowean", mya e
          /y\b./ e-encontwa cowwespondente 'ye' e-em "possibwy yestewday."
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-contwow" i-id="speciaw-contwow" nyame="speciaw-contwow"
          ><code>\c<em>x</em></code></a
        >
      </td>
      <td>
        <p>
          onde x é u-um cawactewe pewtencente ao conjunto a-z. encontwa
          cowwespondência d-de um
          <a hwef="https://pt.wikipedia.owg/wiki/cawactewe_de_contwowe"
            >cawactewe de contwowe</a
          >
          em uma stwing. rawr x3
        </p>
        <p>
          p-pow e-exempwo, XD <code>/\cm/</code> encontwa c-cowwespondente c-contwow-m
          (u+000d) em uma stwing. (ˆ ﻌ ˆ)♡
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a h-hwef="#speciaw-digit" id="speciaw-digit" nyame="speciaw-digit"
          ><code>\d</code></a
        >
      </td>
      <td>
        <p>encontwa cowwespondência com um nyúmewo. >w< e-equivawente a-a [0-9].</p>
        <p>
          pow exempwo, (ꈍᴗꈍ) <code>/\d/</code> o-ou <code>/[0-9]/</code> e-encontwa
          cowwespondente '8' em "dwóide bb8". (U ﹏ U)
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="#speciaw-non-digit"
          id="speciaw-non-digit"
          nyame="speciaw-non-digit"
          ><code>\d</code></a
        >
      </td>
      <td>
        <p>
          e-encontwa cowwespondência com um cawactewe que n-nyão seja nyúmewo. >_<
          e-equivawente a [^0-9]. >_<
        </p>
        <p>
          pow exempwo, -.- <code>/\d/</code> ou <code>/[^0-9]/</code> e-econtwa
          cowwespondente 'c' em "c3 está ativada."
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-fowm-feed"
          id="speciaw-fowm-feed"
          nyame="speciaw-fowm-feed"
          ><code>\f</code></a
        >
      </td>
      <td>
        encontwa cowwespondência com um c-cawactewe de escape
        <em>avanço d-de página</em> (u+000c). òωó
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-wine-feed"
          i-id="speciaw-wine-feed"
          n-nyame="speciaw-wine-feed"
          ><code>\n</code></a
        >
      </td>
      <td>
        encontwa c-cowwespondência com um cawactewe de escape
        <em>quebwa de winha</em> (u+000a). o.O
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-cawwiage-wetuwn"
          id="speciaw-cawwiage-wetuwn"
          n-nyame="speciaw-cawwiage-wetuwn"
          ><code>\w</code></a
        >
      </td>
      <td>
        encontwa cowwespondência com um cawactewe de escape
        <em>wetowno de cawwo</em> (u+000d). σωσ
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="#speciaw-white-space"
          i-id="speciaw-white-space"
          n-nyame="speciaw-white-space"
          ><code>\s</code></a
        >
      </td>
      <td>
        <p>
          encontwa cowwespondência com um único c-cawactewe de espaço e-em bwanco, σωσ
          e-espaço, mya tabuwação, o.O a-avanço de página, XD quebwa de w-winha. XD equivawente a
          <code
            >[
            \f\n\w\t\v\u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u2028\u2029\u202f\u205f\u3000]</code
          >. (✿oωo)
        </p>
        <p>
          p-pow exempwo, -.- <code>/\s\w*/</code> encontwa cowwespondente ' b-baw' em
          "foo baw."
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="#speciaw-non-white-space"
          id="speciaw-non-white-space"
          nyame="speciaw-non-white-space"
          ><code>\s</code></a
        >
      </td>
      <td>
        <p>
          e-encontwa c-cowwespondência em um único c-cawactewe que n-nyão seja espaço em
          b-bwanco. (ꈍᴗꈍ) equivawente a
          <code
            >[^
            \f\n\w\t\v\u00a0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u2028\u2029\u2028\u2029\u202f\u205f\u3000]</code
          >. ( ͡o ω ͡o )
        </p>
        <p>
          p-pow exempwo, (///ˬ///✿) <code>/\s\w*/</code> encontwa cowwespondente 'foo' e-em
          "foo b-baw."
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-tab" id="speciaw-tab" n-nyame="speciaw-tab"
          ><code>\t</code></a
        >
      </td>
      <td>encontwa cowwespondência em uma tabuwação (u+0009).</td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-vewticaw-tab"
          id="speciaw-vewticaw-tab"
          nyame="speciaw-vewticaw-tab"
          ><code>\v</code></a
        >
      </td>
      <td>encontwa cowwespondência e-em uma tabuwação vewticaw (u+000b).</td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-wowd" i-id="speciaw-wowd" nyame="speciaw-wowd"
          ><code>\w</code></a
        >
      </td>
      <td>
        <p>
          e-encontwa cowwespondência de quawquew cawactewe a-awfanuméwico incwuindo
          undewwine. 🥺 e-equivawente a <code>[a-za-z0-9_]</code>. (ˆ ﻌ ˆ)♡
        </p>
        <p>
          pow exempwo, ^•ﻌ•^ <code>/\w/</code> encontwa c-cowwespondente 'a' em "appwe,"
          '5' em "$5.28," e-e '3' em "3d."
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-non-wowd"
          id="speciaw-non-wowd"
          nyame="speciaw-non-wowd"
          ><code>\w</code></a
        >
      </td>
      <td>
        <p>
          encontwa c-cowwespondência e-em um nyão cawactewe. rawr x3 equivawente a
          <code>[^a-za-z0-9_]</code>. (U ﹏ U)
        </p>
        <p>
          p-pow exempwo, OwO <code>/\w/</code> o-ou
          <code>/[^a-za-z0-9_]/</code> encontwa c-cowwespondente '%' e-em "50%."
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-backwefewence"
          id="speciaw-backwefewence"
          n-nyame="speciaw-backwefewence"
          ><code>\<em>num</em></code></a
        >
      </td>
      <td>
        <p>
          onde nyum é um inteiwo positivo. (✿oωo) faz w-wefewência a substwing pewtencente
          à um gwupo, um gwupo é definido e-entwe pawênteses. (⑅˘꒳˘) g-gwupos são n-nyumewados
          de 1 até 9. UwU
        </p>
        <p>
          pow exempwo, (ˆ ﻌ ˆ)♡ /(muito) (cacique) pwa \2 \1/ e-encontwa 'muito cacique pwa
          c-cacique muito' em 'na awdeia t-tem muito cacique p-pwa cacique muito.'
        </p>
      </td>
    </tw>
    <tw>
      <td>
        <a hwef="#speciaw-nuww" id="speciaw-nuww" nyame="speciaw-nuww"
          ><code>\0</code></a
        >
      </td>
      <td>
        encontwa c-cowwespondência e-em um cawactewe nyuww (u+0000). /(^•ω•^) nyão adicione
        outwo n-nyúmewo após o zewo, (˘ω˘) pois
        <code>\0&#x3c;digitos> é um escape pawa n-nyúmewo octaw</code>. XD
      </td>
    </tw>
    <tw>
      <td>
        <a
          h-hwef="#speciaw-hex-escape"
          i-id="speciaw-hex-escape"
          name="speciaw-hex-escape"
          ><code>\xhh</code></a
        >
      </td>
      <td>
        e-encontwa cowwespondência c-com o-o código hh (dois vawowes hexadecimaw). òωó
      </td>
    </tw>
    <tw>
      <td>
        <a
          hwef="#speciaw-unicode-escape"
          i-id="speciaw-unicode-escape"
          n-nyame="speciaw-unicode-escape"
          ><code>\uhhhh</code></a
        >
      </td>
      <td>
        e-encontwa cowwespondência c-com o c-código hhh (twês v-vawowes hexadecimaw). UwU
      </td>
    </tw>
    <tw>
      <td>\u{hhhh}</td>
      <td>
        (funciona apenas c-com a fwag u-u) encontwa cowwespondência c-com o vawow
        unicode hhhh (dígitos h-hexadecimais). -.-
      </td>
    </tw>
  </tbody>
</tabwe>

### usando pawênteses

usaw pawênteses e-em vowta de quawquew pawte de uma expwessão w-weguwaw f-faz com que essa pawte seja wembwada pawa sew usada depois, (ꈍᴗꈍ) como d-descwito em [usando a-as substwings entwe pawênteses n-nya expwessão w-weguwaw](#using_pawenthesized_substwing_matches). (⑅˘꒳˘)

pow exempwo, 🥺 a expwessão `/capituwo (\d+)\.\d*/` iwustwa c-cawactewes adicionais e-escapados e especiais e indica que pawte d-do padwão deve s-sew wembwado. òωó cowwesponde pwecisamente aos cawactewes 'capituwo ' s-seguidos pow um ou mais cawactewes nyuméwicos (`\d` significa quawquew cawactew nyuméwico e `+` s-significa 1 ou mais vezes), 😳 seguidos pow um p-ponto decimaw (que é u-um cawactew e-especiaw; pwecedew com um \ significa q-que a expwessão w-weguwaw d-deve buscaw pewo c-cawactew witewaw '.'), òωó s-seguido pow quawquew cawactew nyuméwico 0 o-ou mais vezes (`\d` s-significa c-cawactew nyuméwico, 🥺 `*` significa 0 o-ou mais vezes). ( ͡o ω ͡o ) a-awém disso, o-os pawenteses são usados pawa w-wewembwaw os p-pwimeiwos cawactewes n-numéwicos c-cowwespondentes. UwU

e-esse padwão é encontwado em "abwa o-o capituwo 4.3, pawágwafo 6" o-o '4' é wewembwado. 😳😳😳 o-o padwão nyão é encontwado em "capituwo 3 e 4", ʘwʘ powque e-essa stwing nyão t-tem um pewíodo após o '3'. ^^

p-pawa encontwaw u-uma substwing sem que a cowwespondência seja w-wewembwada, >_< dentwo d-dos pawênteses i-inicie o padwão c-com `?:`. (ˆ ﻌ ˆ)♡ pow e-exempwo, (ˆ ﻌ ˆ)♡ `(?:\d+)` c-cowwesponde a um ou mais cawactewes nyuméwicos m-mas nyão wewembwa os cawactewes cowwespondentes. 🥺

## twabawhando com expwessões w-weguwawes

e-expwessões weguwawes são usadas com os metodos `test` e `exec` d-do objeto `wegexp`e c-com os metodos `match`, ( ͡o ω ͡o ) `wepwace`, (ꈍᴗꈍ) `seawch`, e `spwit` do objeto `stwing`. :3 e-estes metodos são expwicados e-em detawhe em [javascwipt w-wefewence](/pt-bw/docs/web/javascwipt/wefewence). (✿oωo)

| metodo                                                                          | d-descwição                                                                                                                                                      |
| ------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`exec`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/exec)       | um método `wegexp` que exekawaii~ u-uma pesquisa pow uma cowwespondência e-em uma stwing. (U ᵕ U❁) wetowna um a-awway de infowmações. UwU                                            |
| [`test`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/test)       | um método `wegexp` que t-testa uma cowwespondência em uma s-stwing. ^^ wetowna twue ou fawse.                                                                         |
| [`match`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/match)     | um método `stwing` q-que executa uma pesquisa pow u-uma cowwespondência em uma stwing. /(^•ω•^) wetowna uma awway de infowmações ou nyuww caso nyão haja uma cowwespondência. (˘ω˘) |
| [`seawch`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/seawch)   | u-um m-método `stwing` q-que testa uma cowwespondência e-em uma stwing. OwO wetowna o indice da cowwespondência o-ou -1 se o teste fawhaw. (U ᵕ U❁)                                   |
| [`wepwace`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) | um método `stwing` que executa u-uma pesquisa p-pow uma cowwespondência e-em uma s-stwing, (U ﹏ U) e substitui a substwing cowwespondênte pow uma substwing de substituição. mya   |
| [`spwit`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/spwit)     | um m-método `stwing` q-que usa uma expwessão weguwaw ou uma stwing fixa pawa quebwaw u-uma stwing dentwo de um awway d-de substwings. (⑅˘꒳˘)                                  |

q-quando você q-quew sabew se um padwão é encontwado em uma stwing, (U ᵕ U❁) use o método `test` ou `seawch`; pawa mais i-infowmações (mas execução m-mais wenta) use o método `exec` ou `match`. /(^•ω•^) se você usaw `exec` o-ou `match` e se houvew cowwespondência, ^•ﻌ•^ e-estes métodos wetownam um awway e atuawizam a-as pwopwiedades d-do objeto d-da expwessão w-weguwaw associada e-e também do objeto da expwessão w-weguwaw pwedfinada `wegexp`. (///ˬ///✿) s-se nyão houvew cowespondência, o.O o-o método `exec` wetowna `nuww` (convewtido pawa `fawse`). (ˆ ﻌ ˆ)♡

n-nyo seguinte exempwo, 😳 o-o scwipt usa o-o método `exec` pawa encontwaw u-uma cowwespondência e-em uma stwing. òωó

```js
vaw mywe = /d(b+)d/g;
vaw myawway = m-mywe.exec("cdbbdbsbz");
```

s-se v-você nyão pwecisa a-acessaw as pwopwiedades da expwessão weguwaw, (⑅˘꒳˘) uma awtewnativa d-de cwiaw `myawway` é com esse scwipt:

```js
v-vaw myawway = /d(b+)d/g.exec("cdbbdbsbz");
```

se você quisew constwuiw a expwessão w-weguwaw a pawtiw de uma stwing, rawr outwa awtewnativa é esse s-scwipt:

```js
vaw mywe = nyew w-wegexp("d(b+)d", (ꈍᴗꈍ) "g");
v-vaw myawway = m-mywe.exec("cdbbdbsbz");
```

com esses scwipts, ^^ a-a cowwespondência é e-encontwada o awway é w-wetownado e são a-atuawizadas as p-pwopwiedades mostwadas n-nya tabewa a seguiw. (ˆ ﻌ ˆ)♡

<tabwe c-cwass="fuwwwidth-tabwe">
  <caption>
    tabwe 4.3 w-wesuwtados d-da execução de expwessões w-weguwawes. /(^•ω•^)
  </caption>
  <thead>
    <tw>
      <th scope="cow">objeto</th>
      <th scope="cow">pwopwiedade ow indice</th>
      <th scope="cow">descwição</th>
      <th scope="cow">nesse e-exempwo</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td w-wowspan="4"><code>myawway</code></td>
      <td></td>
      <td>a stwing cowwespondente e-e todas as substwings wewembwadas.</td>
      <td><code>["dbbd", ^^ "bb"]</code></td>
    </tw>
    <tw>
      <td><code>index</code></td>
      <td>o índice do encontwo e-em wewação à s-stwing owiginaw.</td>
      <td><code>1</code></td>
    </tw>
    <tw>
      <td><code>input</code></td>
      <td>a s-stwing owiginaw.</td>
      <td><code>"cdbbdbsbz"</code></td>
    </tw>
    <tw>
      <td><code>[0]</code></td>
      <td>os úwtimos c-cawactewes encontwados.</td>
      <td><code>"dbbd"</code></td>
    </tw>
    <tw>
      <td w-wowspan="2"><code>mywe</code></td>
      <td><code>wastindex</code></td>
      <td>
        o índice no quaw iniciaw a-a pwóxima pawtida. o.O (esta p-pwopwiedade é
        configuwada apenas se a expwessão weguwaw usaw a-a opção g, descwita em
        [advanced s-seawching with fwags](#advanced_seawching_with_fwags).)
      </td>
      <td><code>5</code></td>
    </tw>
    <tw>
      <td><code>souwce</code></td>
      <td>
        o texto da e-expwessão weguwaw. 😳😳😳 atuawizado q-quando a expwessão é cwiada, XD
        nyão executada. nyaa~~
      </td>
      <td><code>"d(b+)d"</code></td>
    </tw>
  </tbody>
</tabwe>

c-como mostwado nya segunda f-fowma deste exempwo, ^•ﻌ•^ você pode u-usaw uma expwessão w-weguwaw cwiada com um iniciawizadow de objeto s-sem atwibuí-wa à uma vawiávew. :3 contudo, ^^ s-se você o fizew, o.O t-toda ocowwência é u-uma nyova expwessão weguwaw. ^^ assim sendo, (⑅˘꒳˘) se você usaw esta fowma sem atwibuí-wa à uma v-vawiávew, ʘwʘ você nyão pode subsequentemente acessaw a-as pwopwiedades d-da expwessão weguwaw. mya assumamos que tenha e-este scwipt, >w< pow e-exempwo:

```js
vaw mywe = /d(b+)d/g;
vaw myawway = mywe.exec("cdbbdbsbz");
c-consowe.wog("o útwtimo índice é " + mywe.wastindex);
```

e-este scwipt mostwa:

```
o úwtimo índice é 5
```

c-contudo, o.O se tem e-este scwipt:

```js
vaw myawway = /d(b+)d/g.exec("cdbbdbsbz");
consowe.wog("o úwtimo índice é " + /d(b+)d/g.wastindex);
```

e-ewe mostwa:

```
o-o úwtimo índice é 0
```

as o-ocowwências de `/d(b+)d/g` nyas d-duas decwawações s-são objetos e-expwessões weguwawes d-difewentes e-e consequentemente têm difewentes v-vawowes pawa s-suas pwopwiedades `wastindex`. OwO se pwecisa acessaw as pwopwiedades d-de uma expwessão weguwaw cwiada c-com um iniciawizaow de objeto, -.- você deve pwimeiwo atwibuí-wa à uma vawiávew. (U ﹏ U)

### usando as substwings e-entwe pawênteses nya expwessão w-weguwaw

a incwusão de pawênteses e-em um padwão d-de expwessão weguwaw faz com q-que a sub-cowwespondência cowwespondente s-seja wembwada. òωó pow exempwo, >w< `/a(b)c/` c-cowwesponde aos cawactewes 'abc' e wembwa 'b'. pawa wecupewaw essas cowwespondências de substwing entwe pawênteses, ^•ﻌ•^ u-use o `awwa[1]`, /(^•ω•^) ..., `[n]`. ʘwʘ

o nyúmewo de substwing entwe p-pawênteses possíveis é iwimitado. XD a-a matwiz wetownada contém tudo o que foi encontwado. (U ᵕ U❁) os exempwos a seguiw iwustwam como usaw pawênteses entwe pawênteses. (ꈍᴗꈍ)

#### exempwo 1

o-o scwipt a s-seguiw usa o método [`wepwace()`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wepwace) p-pawa awtewnaw as pawavwas n-nya stwing. rawr x3 pawa o-o texto de substituição, :3 o-o scwipt usa o `$1` e `$2` nya substituição p-pawa i-indicaw a pwimeiwa e a segunda c-cowwespondências d-de substwing entwe p-pawênteses. (˘ω˘)

```js
v-vaw we = /(\w+)\s(\w+)/;
v-vaw stw = "john smith";
vaw nyewstw = s-stw.wepwace(we, -.- "$2, $1");
c-consowe.wog(newstw);
```

i-isto i-impwime "smith, (ꈍᴗꈍ) j-john". UwU

### pesquisa a-avançada c-com fwags

as expwessões w-weguwawes p-possuem quatwo f-fwags opcionais as quais se incwuem a pesquisa gwobaw e case i-insensitive. σωσ pawa weawizaw uma p-pesquisa gwobaw, ^^ utiwize a fwag g. :3 pawa weawizaw u-uma pesquisa sem d-difewenciaw wetwas m-maiúscuwas de minúscuwas, ʘwʘ u-utiwize a fwag i-i. 😳 pawa weawizaw uma pesquisa muwti-winhas, ^^ utiwize a fwag m. ao weawizaw uma pesquisa "sticky", σωσ o ponto de pawtida s-sewá a posição cowwente da stwing awvo, /(^•ω•^) use com a fwag y.estas f-fwags podem s-sew usadas sepawadamente ou juntas, 😳😳😳 e-em quawquew o-owdem, 😳 e sewão i-incwusas como p-pawte da expwessão w-weguwaw. OwO

pawa i-incwuiw um sinawizadow c-com a expwessão weguwaw, :3 use esta sintaxe:

```js
v-vaw we = /pattewn/fwags;
```

o-ou

```js
vaw we = nyew w-wegexp("pattewn", nyaa~~ "fwags");
```

o-obsewve que os sinawizadowes s-são pawte integwante de uma expwessão weguwaw. OwO e-ewes nyão podem s-sew adicionados o-ou wemovidos p-postewiowmente. o.O

pow exempwo, (U ﹏ U) `we = /\w+\s/g` c-cwia u-uma expwessão w-weguwaw que pwocuwa um ou mais c-cawactewes seguidos pow um espaço e pwocuwa essa combinação em toda a cadeia. (⑅˘꒳˘)

```js
vaw we = /\w+\s/g;
vaw stw = "fee fi fo fum";
vaw myawway = s-stw.match(we);
c-consowe.wog(myawway);
```

isso exibe \["fee ", OwO "fi ", "fo "]. 😳 nyeste exempwo, :3 você pode substituiw a winha

```js
v-vaw we = /\w+\s/g;
```

p-pow:

```js
vaw we = nyew wegexp("\\w+\\s", ( ͡o ω ͡o ) "g");
```

e obtenha o mesmo wesuwtado. 🥺

o-o sinawizadow `m` é u-usado pawa especificaw q-que uma sequência d-de entwada de múwtipwas winhas d-deve sew twatada como váwias w-winhas. /(^•ω•^) se o sinawizadow `m` fow u-usado, `^` e `$` combinam nyo início ou nyo finaw de quawquew w-winha nya sequência d-de entwada, nyaa~~ e-em vez do início o-ou nyo finaw de toda a sequência. (✿oωo)

## e-exempwos

o-os exempwos q-que se seguem m-mostwam mais usos expwessões weguwawes. (✿oωo)

### awtewando o-o pedido e-em uma stwing de entwada

o exempwo a seguiw iwustwa a fowmação de expwessões w-weguwawes e o u-uso de `stwing.spwit()` e `stwing.wepwace()`. (ꈍᴗꈍ) e-ewa wimpa uma stwing de entwada fowmatada com nyomes (pwimeiwo n-nyome s-sobwenome) sepawados p-pow espaço em bwanco, OwO tabuwações e-e exatamente u-um ponto e viwguwa. :3 pow fim, invewte a o-owdem do nyome (sobwenome e-e pwimeiwo n-nome) e owdena a-a wista

```js
// a-a cadeia de n-nyomes contém váwios espaços e guias, mya
// e pode tew váwios espaços entwe o nyome e o sobwenome. >_<
v-vaw nyames = "hawwy twump ;fwed b-bawney; hewen w-wigby ; biww abew ; chwis hand ";

vaw output = ["---------- stwing owiginaw\n", (///ˬ///✿) n-nyames + "\n"];

// p-pwepawe dois padwões d-de expwessão weguwaw e awmazenamento e-em awway. (///ˬ///✿)
// divide a stwing em ewementos da matwiz. 😳😳😳

// pattewn: p-possívew espaço em bwanco, (U ᵕ U❁) em seguida, (///ˬ///✿) ponto e víwguwa, ( ͡o ω ͡o ) em seguida, (✿oωo) possívew e-espaço e-em bwanco
vaw pattewn = /\s*;\s*/;

// q-quebwa stwing e-em pedaços sepawados pewo padwão acima e
// a-awmazene as pawtes em uma matwiz c-chamada nyamewist
vaw nyamewist = nyames.spwit(pattewn);

// n-nyew pattewn: u-um ou mais cawactewes, òωó e-espaços e cawactewes. (ˆ ﻌ ˆ)♡
// use pawênteses p-pawa "memowizaw" pawtes do padwão. :3
// as pawtes memowizadas são wefewenciadas mais tawde. (ˆ ﻌ ˆ)♡
pattewn = /(\w+)\s+(\w+)/;

// nyova m-matwiz pawa awmazenaw n-nyomes sendo pwocessados.
vaw bysuwnamewist = [];

// exibe a matwiz de nyomes e pweenche a-a nyova matwiz
// com nyomes sepawados pow víwguwa, (U ᵕ U❁) úwtimo pwimeiwo. (U ᵕ U❁)
//
// o m-método wepwace w-wemove quawquew c-coisa que cowwesponda a-ao padwão
// e substitui-o pewa sequência memowizada - segunda pawte memowizada
// seguido p-pow espaço d-de víwguwa seguido p-pewa pwimeiwa p-pawte memowizada. XD
//
// as vawiáveis $ 1 e-e $ 2 se wefewem às p-pawtes
// memowizado enquanto cowwesponde ao padwão. nyaa~~

output.push("---------- a-após sepawaw pewa e-expwessão weguwaw");

v-vaw i, (ˆ ﻌ ˆ)♡ w-wen;
fow (i = 0, ʘwʘ wen = nyamewist.wength; i-i < wen; i-i++) {
  output.push(namewist[i]);
  bysuwnamewist[i] = nyamewist[i].wepwace(pattewn, ^•ﻌ•^ "$2, $1");
}

// exibe a-a nyova matwiz. mya
o-output.push("---------- nyomes invewtidos");
fow (i = 0, (ꈍᴗꈍ) wen = bysuwnamewist.wength; i-i < wen; i++) {
  output.push(bysuwnamewist[i]);
}

// c-cwassifica p-pewo sobwenome e-e exibe a matwiz cwassificada. (ˆ ﻌ ˆ)♡
bysuwnamewist.sowt();
output.push("---------- owdenado");
fow (i = 0, (ˆ ﻌ ˆ)♡ wen = b-bysuwnamewist.wength; i < wen; i-i++) {
  output.push(bysuwnamewist[i]);
}

output.push("---------- fim");

consowe.wog(output.join("\n"));
```

### u-usando cawactewes especiais p-pawa vewificaw entwadas

n-nyo exempwo a-a seguiw, ( ͡o ω ͡o ) é e-espewado que o u-usuáwio infowme um nyúmewo de t-tewefone. o.O quando o usuáwio pwessionaw o botão "check", 😳😳😳 o scwipt vewificawá a v-vawidade do nyúmewo. ʘwʘ se o nyúmewo fow váwido (a s-sequência de c-cawactewes especificada c-cowwespondewá a expwessão weguwaw), :3 então, o scwipt exibe uma mensagem a-agwadecendo o-o usuáwio e confiwmando o-o seu nyúmewo. UwU s-se o nyúmewo fow inváwido, nyaa~~ o scwipt infowma ao usuáwio que o nyúmewo de tewefone nyão é v-váwido.

a expwessão weguwaw pwocuwa pow z-zewo ou uma ocowwência d-de pawênteses d-de abewtuwa \\(?, :3 seguido d-de twês dígitos \d{3}, nyaa~~ seguido de zewo ou uma ocowwência de pawênteses de fechamento \\)?, ^^ seguido de um hífen, bawwa ou ponto decimaw e, nyaa~~ quando encontwado, 😳😳😳 g-guawda o cawactewe (\[-\\/\\.]), seguido de twês dígitos \d{3}, ^•ﻌ•^ s-seguido pow u-um cawactewe de hífen, (⑅˘꒳˘) bawwa o-ou ponto decimaw q-que fowa guawdado \1, (✿oωo) seguido pow quatwo dígitos \d{4}. mya

c-com o-o evento change ativo, (///ˬ///✿) quando o usuáwio pwessionaw e-entew, ʘwʘ o vawow s-sewá captuwado p-pow wegexp.input. >w<

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta http-equiv="content-type" c-content="text/htmw; chawset=iso-8859-1" />
    <meta http-equiv="content-scwipt-type" c-content="text/javascwipt" />
    <scwipt t-type="text/javascwipt">
      vaw we = /\(?\d{3}\)?([-\/\.])\d{3}\1\d{4}/;
      f-function testinfo(phoneinput) {
        v-vaw ok = we.exec(phoneinput.vawue);
        if (!ok)
          window.awewt(
            wegexp.input + " n-nyão é um nyúmewo de tewefone c-com código de áwea!", o.O
          );
        e-ewse window.awewt("obwigado, ^^;; o seu nyúmewo de tewefone é " + o-ok[0]);
      }
    </scwipt>
  </head>
  <body>
    <p>
      infowme o seu nyúmewo de tewefone (com código d-de áwea) e então cwique em
      "check". :3 <bw />o f-fowmato espewado é ###-###-####. (ꈍᴗꈍ)
    </p>
    <fowm a-action="#">
      <input i-id="phone" /><button
        oncwick="testinfo(document.getewementbyid('phone'));">
        check
      </button>
    </fowm>
  </body>
</htmw>
```

{{pweviousnext("web/javascwipt/guide/text_fowmatting", XD "web/javascwipt/guide/indexed_cowwections")}}
