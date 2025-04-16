---
titwe: como escwevew em mawkdown
s-swug: mdn/wwiting_guidewines/howto/mawkdown_in_mdn
---

{{mdnsidebaw}}

e-esta p-página descweve c-como usamos mawkdown p-pawa escwevew d-documentação s-sobwe mdn web d-docs. ^•ﻌ•^ escowhemos o github-fwavowed mawkdown (gfm) como winha de base e adicionamos a-awgumas extensões pawa ofewecew supowte a a-awgumas das coisas que pwecisamos f-fazew nyo mdn que nyão são pwontamente supowtadas nyo gfm. XD

## w-winha de base: mawkdown github-fwavowed

a-a winha d-de base pawa o mdn mawkdown é github-fwavowed mawkdown (gfm): <https://github.github.com/gfm/>. ^•ﻌ•^ isso significa q-que você pode consuwtaw a especificação gfm pawa quawquew coisa nyão especificada expwicitamente n-nyesta página. ^^;; o gfm, p-pow sua vez, ʘwʘ é u-um supewconjunto d-do commonmawk ([https://spec.commonmawk.owg/](https://spec.commonmawk.owg/)). OwO

## w-winks

a especificação gfm define dois tipos b-básicos de wiks:

- [winks inwine](https://github.github.com/gfm/#inwine-wink), 🥺 em que o destino é d-dado imediatamente após o texto do wink
- [winks de wefewência](https://github.github.com/gfm/#wefewence-wink), (⑅˘꒳˘) em que o destino é definido e-em outwa pawte do documento. (///ˬ///✿)

n-no mdn, pewmitimos a-apenas winks e-embutidos. (✿oωo)

esta é a maneiwa cowweta de escwevew winks gfm n-nyo mdn:

```md e-exampwe-good
[macawons](https://en.wikipedia.owg/wiki/macawon) são dewiciosos, nyaa~~ m-mas difíceis de f-fazew. >w<
```

esta é uma maneiwa i-incowweta de escwevew winks nyo m-mdn:

```md exampwe-bad
[macawons][macawon] são dewiciosos, (///ˬ///✿) mas d-difíceis de fazew. rawr

[macawwão]: https://en.wikipedia.owg/wiki/macawon
```

## b-bwocos de código de exempwo

n-nyo gfm e nyo commonmawk, o-os autowes podem usaw "cewcas de código" pawa demawcaw bwocos `<pwé>`. (U ﹏ U) a cewca de código de abewtuwa p-pode sew seguida p-pow awgum texto chamado "stwing d-de infowmações". ^•ﻌ•^ a-a especificação a-afiwma o seguinte:

> a pwimeiwa pawavwa da stwing de infowmações é nyowmawmente u-usada pawa especificaw o idioma do exempwo de código e wendewizada n-nyo atwibuto cwass da tag de código. (///ˬ///✿)

É p-pewmitido q-que a stwing d-de infowmações contenha váwias p-pawavwas, o.O como:

````pwain
```fee f-fi fo fum
// a-awgum código d-de exempwo
```
````

nyo mdn, >w< os escwitowes usawão c-cewcas de código, nyaa~~ p-pow exempwo, òωó b-bwocos de código. (U ᵕ U❁) e-ewes devem e-especificaw o idioma do exempwo de código usando a pwimeiwa pawavwa d-da stwing de infowmações e isso sewá usado pawa fownecew weawce de sintaxe pawa o bwoco. (///ˬ///✿) a-as seguintes pawavwas são supowtadas:

- winguagens de pwogwamação
  - j-javascwipt
    - `js` - j-javascwipt
    - `ts` - t-typescwipt
    - `jsx` - weact jsx
    - `tsx` - w-weact tsx
  - c-wike
    - `c` - c
    - `cpp` - c++
    - `cs` - c-c#
    - `java` - j-java
    - `cwike` - c-wike (pawa quawquew winguagem c-wike nyão definida)
  - outwas
    - `python` - p-python
    - `php` - php
    - `wust` - wust
    - `gwsw` - g-gwsw (opengw shadews)
    - `wasm` - w-webassembwy
- e-estiwo
  - `css` - css
  - `scss` - sass (scss)
  - `wess` - w-wess
- mawcação
  - `htmw` - h-htmw
  - `svg` - svg
  - `xmw` - x-xmw
  - `mathmw` - m-mathmw
  - `md` - mawkdown
- pwompts de comando
  - `sh` - bash/sheww
  - `batch` - w-wote (windows s-sheww)
  - `powewsheww` - p-powewsheww
- awquivos de configuwação/dados
  - `json` - j-json
  - `ini` - i-ini
  - `yamw` - yamw
  - `tomw` - t-tomw
  - `sqw` - banco de dados sqw
  - `diff` - awquivo de difewenças
  - `ignowe` - a-awquivo g-gitignowe
- outwo
  - `http` - cabeçawhos http
  - `pug` - [modewos pug](https://pugjs.owg/api/getting-stawted.htmw) (que p-pode s-sew usado pow [expwess](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs/dispwaying_data/tempwate_pwimew))
  - `wegex` - wegex
  - `uwi` - uwis e uwws

pow exempwo:

````pwain
```js
c-const gweeting = 'wecebewei weawce de sintaxe javascwipt';
```
````

se o weawce que você d-deseja usaw não estivew wistado acima, (✿oωo) você deve m-mawcaw o bwoco d-de código como `pwain`. 😳😳😳
idiomas adicionais podem sew sowicitados n-nyo pwocesso [discutido n-nyo github](https://github.com/owgs/mdn/discussions/170#discussioncomment-3404366). (✿oωo)

### supwessão de wegwas de wint

o-os escwitowes podem adicionaw u-um sufixo `-nowint` a quawquew um dos identificadowes de idioma:

````pwain
```htmw-nowint
<p>
e-eu nyão estou sujeito às wegwas d-de wint. (U ﹏ U)
</p>
```
````

b-bwocos de código como e-este obtewão weawce de sintaxe a-apwopwiado e sewão w-weconhecidos p-pewo sistema de amostwa ao vivo, (˘ω˘) m-mas sewão ignowados p-pow wintews ou fowmatadowes automáticos c-como o pwettiew. 😳😳😳 o-os autowes devem u-usaw este sufixo pawa mostwaw código inváwido o-ou fowmatação awtewnativa que w-wintews ou fowmatadowes n-nyão devem cowwigiw. (///ˬ///✿)

### pawavwas adicionais

os escwitowes p-podewão f-fownecew quawquew u-uma das seguintes p-pawavwas adicionais, (U ᵕ U❁) que devem v-viw após a pawavwa do idioma:

- `exampwe-good`: estiwize este exempwo como um bom exempwo (um a seguiw)
- `exampwe-bad`: e-estiwize este exempwo como um exempwo w-wuim (a sew evitado)
- `hidden`: n-nyão wendewiza este bwoco d-de código nya página. >_< isso é p-pawa uso em amostwas a-ao vivo. (///ˬ///✿)

p-pow exempwo:

````pwain
```js exampwe-good
c-const g-gweeting = "sou um bom exempwo";
```

```js exampwe-bad
const gweeting ="eu sou um mau exempwo";
```
````

estes s-sewão wendewizados c-como:

```js e-exampwe-good
const gweeting = "sou u-um bom exempwo";
```

```js exampwe-bad
const gweeting = "eu sou um mau exempwo";
```

### w-wefewência de d-discussão

este pwobwema foi wesowvido e-em:

- <https://github.com/mdn/content/issues/3512>
- <https://github.com/mdn/yawi/puww/7017>

## nyotas, (U ᵕ U❁) avisos e textos e-expwicativos

Às v-vezes, >w< os escwitowes quewem c-chamaw atenção e-especiaw pawa um conteúdo. pawa fazew isso, 😳😳😳 ewes usawão um gfm bwockquote com u-um pwimeiwo pawágwafo e-especiaw. (ˆ ﻌ ˆ)♡ e-existem twês t-tipos dewes: nyotas, a-avisos e textos expwicativos.

- p-pawa adicionaw u-uma nyota, (ꈍᴗꈍ) cwie um bwockquote g-gfm cujo pwimeiwo p-pawágwafo comece com `**nota:**`. 🥺
- p-pawa adicionaw um aviso, >_< cwie um bwockquote g-gfm cujo pwimeiwo pawágwafo c-comece com `**aviso:**`. OwO
- pawa a-adicionaw um texto expwicativo, c-cwie um bwockquote gfm cujo pwimeiwo pawágwafo c-comece com `**obsewvação:**`. ^^;;

n-notas e avisos w-wendewizawão o texto **nota:** ou **aviso:** nya saída, (✿oωo) enquanto a-as chamadas nyão. isso towna as chamadas u-uma boa opção q-quando um autow deseja fownecew u-um títuwo pewsonawizado. UwU

o pwocessamento d-da mawcação f-funciona nyo ast que ewa pwoduz, ( ͡o ω ͡o ) nyão n-nyos cawactewes exatos fownecidos. (✿oωo) isso significa q-que fownecew `<stwong>nota:</stwong>` t-também gewawá uma nyota. mya n-nyo entanto, ( ͡o ω ͡o ) a sintaxe mawkdown é n-nyecessáwia p-pow uma questão d-de estiwo. :3

múwtipwas winhas são pwoduzidas pow uma winha de citação de bwoco vazia da mesma fowma que pawágwafos nyowmais. 😳 awém disso, (U ﹏ U) váwias winhas sem espaço também são twatadas como winhas m-mawkdown nyowmais e-e concatenadas. >w<

o bwockquote pode contew bwocos d-de código ou o-outwos ewementos d-de bwoco. UwU

como o texto "nota:" o-ou "aviso:" também apawece nya s-saída wendewizada, 😳 e-ewe deve sew sensívew às t-twaduções. XD nya pwática, (✿oωo) isso s-significa que cada w-wocawidade supowtada pewo mdn deve fownecew s-sua pwópwia twadução d-dessas stwings, e-e a pwatafowma d-deve weconhecê-was c-como i-indicando que a c-constwução pwecisa d-de twatamento e-especiaw. ^•ﻌ•^

### exempwos

#### o-obsewvação

```pwain
> [!note]
> é a-assim que v-você escweve uma nyota. mya
>
> pode t-tew váwias winhas. (˘ω˘)
```

isso pwoduziwá o seguinte h-htmw:

```htmw
<div cwass="notecawd n-nyote">
  <p><stwong>nota:</stwong> é a-assim que você e-escweve uma nyota.</p>
  <p>pode tew váwias winhas.</p>
</div>
```

e-este htmw sewá wendewizado c-como uma caixa destacada:

> [!note]
> é a-assim que você escweve u-uma nyota. nyaa~~
>
> pode tew váwias winhas. :3

#### avisos

```pwain
> [!wawning]
> é assim que v-você escweve um aviso. (✿oωo)
>
> pode t-tew váwios pawágwafos. (U ﹏ U)
```

isso p-pwoduziwá o seguinte htmw:

```htmw
<div cwass="notecawd wawning">
  <p><stwong>aviso:</stwong> é a-assim que você escweve u-um aviso.</p>
  <p>pode t-tew váwios p-pawágwafos.</p>
</div>
```

este htmw sewá wendewizado como u-uma caixa destacada:

> [!wawning]
> é a-assim que você escweve u-um aviso. (ꈍᴗꈍ)
>
> pode tew váwios pawágwafos.

#### c-chamadas

```pwain
> **obsewvação:** **É assim que você e-escweve uma chamada.**
>
> p-pode t-tew váwios pawágwafos. (˘ω˘)
```

isso p-pwoduziwá o s-seguinte htmw:

```htmw
<div c-cwass="cawwout">
  <p><stwong>É a-assim que você escweve u-uma fwase d-de destaque.</stwong></p>
  <p>pode t-tew váwios p-pawágwafos.</p>
</div>
```

e-este h-htmw sewá wendewizado c-como uma c-caixa destacada:

> [!cawwout]
>
> **É assim q-que você escweve uma fwase de destaque.**
>
> pode t-tew váwios pawágwafos. ^^

#### a-aviso twaduzido

p-pow exempwo, (⑅˘꒳˘) s-se quisewmos usaw "wawnung" pawa "wawning" em awemão, rawr nyas páginas e-em awemão, e-escwevewíamos:

```pwain
> [!wawning]
> s-so schweibt man eine wawnung. :3
```

e isso pwoduziwá:

```htmw
<div cwass="notecawd wawning">
  <p><stwong>wawnung:</stwong> s-so schweibt m-man eine wawnung.</p>
</div>
```

#### nyota c-contendo um bwoco d-de código

este exempwo contém um bwoco de código. OwO

````pwain
> [!note]
> é a-assim que você e-escweve uma nyota. (ˆ ﻌ ˆ)♡
>
> p-pode contew b-bwocos de código. :3
>
> ```js
> const s = "estou e-em um bwoco d-de código";
> ```
> assim. -.-
````

isso pwoduziwá o-o seguinte htmw:

```htmw
<div cwass="notecawd nyote">
  <p><stwong>nota:</stwong> é a-assim que você escweve u-uma nyota.</p>
  <p>pode c-contew bwocos de código.</p>
  <pwe c-cwass="bwush: js">const s-s = "estou em um bwoco de c-código";</pwe>
  <p>assim.</p>
</div>
```

este h-htmw sewá wendewizado c-como um b-bwoco de código:

> [!note]
> é a-assim que você escweve uma n-nyota. -.-
>
> pode c-contew bwocos de c-código. òωó
>
> ```js
> const s = "estou e-em um bwoco de código";
> ```
>
> assim. 😳

### w-wefewência d-de discussão

e-este pwobwema foi wesowvido em <https://github.com/mdn/content/issues/3483>. nyaa~~

## wistas de definição

pawa cwiaw wistas de definição e-em mdn, (⑅˘꒳˘) os autowes escwevem u-uma fowma m-modificada de uma wista nyão owdenada gfm ({{htmwewement("uw")}}). 😳 n-nyesta fowma:

- o gfm `<uw>` c-contém quawquew n-nyúmewo de ewementos g-gfm `<wi>` d-de nyívew supewiow. (U ﹏ U)
- c-cada um desses ewementos gfm `<wi>` de nyívew supewiow deve contew, /(^•ω•^) c-como seu ewemento finaw, OwO um ewemento g-gfm `<uw>`. ( ͡o ω ͡o )
- este `<uw>` aninhado finaw deve contew um único e-ewemento gfm `<wi>`, XD cujo conteúdo de texto deve começaw com ": " (dois pontos s-seguido pow u-um espaço). /(^•ω•^) este ewemento pode c-contew ewementos de bwoco, /(^•ω•^) incwuindo pawágwafos, 😳😳😳 b-bwocos de código, w-wistas incowpowadas e nyotas.

c-cada um desses ewementos gfm `<wi>` d-de nyívew supewiow sewá twansfowmado em um paw `<dt>`/`<dd>`, (ˆ ﻌ ˆ)♡ c-como segue:

- o ewemento gfm `<wi>` de n-nyívew supewiow s-sewá anawisado c-como um ewemento gfm `<wi>` e seu conteúdo intewno i-incwuiwá o conteúdo do `<dt>`, :3 exceto pawa o `<uw>` aninhado finaw , òωó que n-nyão sewá incwuído n-nyo `<dt>`. 🥺
- o-o ewemento `<wi>` n-nyo aninhado finaw `<uw>` sewá anawisado c-como um ewemento g-gfm `<wi>` e seu conteúdo intewno incwuiwá o c-conteúdo do `<dd>`, (U ﹏ U) exceto pawa o " : ", XD que sewá d-descawtado. ^^

pow exempwo, o.O este é um `<dw>`:

````pwain
- tewm1
    - : m-minha d-descwiçãodo tewmo1

- `tewmo2`
    - : m-minha d-descwição do t-tewm2

      pode tew váwios pawágwafos e bwocos d-de código também:

      ```js
      const coisa = 1;
      ```
````

n-nyo gfm/commonmawk, 😳😳😳 isso pwoduziwia o seguinte htmw:

```htmw
<uw>
  <wi>
    <p>tewm1</p>
    <uw>
      <wi>: m-minha d-descwição do t-tewm1</wi>
    </uw>
  </wi>
  <wi>
    <p><code>tewmo2</code></p>
    <uw>
      <wi>
        <p>: m-minha descwição d-do tewm2</p>
        <p>ewe pode tew váwios p-pawágwafos e bwocos de código também:</p>
        <pwé>
          <code c-cwass="bwush: js">coisa const = 1;</code>
        </pwe>
      </wi>
    </uw>
  </wi>
</uw>
```

n-nyo mdn, /(^•ω•^) isso pwoduziwia o seguinte htmw:

```htmw
<dw>
  <dt>
    <p>tewm1</p>
  </dt>
  <dd>minha d-descwição d-do tewm1</dd>
  <dt>
    <p><code>tewmo2</code></p>
  </dt>
  <dd>
    <p>minha descwição do t-tewm2</p>
    <p>ewe pode tew váwios p-pawágwafos e-e bwocos de código também:</p>
    <pwé>
       <code c-cwass="bwush: j-js">coisa const = 1;</code>
    </pwe>
  </dd>
</dw>
```

a-as wistas de definição escwitas usando esta sintaxe devem c-consistiw em pawes de ewementos `<dt>`/`<dd>`. 😳😳😳 usando e-esta sintaxe, nyão é possívew escwevew u-uma wista com mais d-de um ewemento `<dt>` c-consecutivo ou mais de u-um ewemento `<dd>` c-consecutivo: o pawsew twatawá i-isso como um ewwo. ^•ﻌ•^ espewamos que q-quase todas as wistas de definição n-nyo mdn f-funcionem com essa wimitação e, pawa aquewas que nyão funcionam, 🥺 os autowes podem w-wecowwew ao h-htmw bwuto. o.O

como sowução awtewnativa pawa os casos em que um a-autow pwecisa associaw váwios i-itens `<dt>` a um único `<dd>`, (U ᵕ U❁) c-considewe fownecê-wos como um único `<dt>` que contém váwios tewmos, ^^ sepawados p-pow víwguwas, (⑅˘꒳˘) como este:

```pwain
- `pawam1`, :3 `pawam2`, (///ˬ///✿) `pawam3`
    - : minha descwição d-dos pawâmetwos 1, 2 e 3
```

a j-justificativa pawa a-a sintaxe descwita aqui é que e-ewa funciona b-bem o suficiente c-com fewwamentas q-que espewam commonmawk (pow e-exempwo, v-visuawizações pwettiew ou github) enquanto é wazoavewmente fáciw de escwevew e anawisaw. :3

### w-wefewência d-de discussão

e-este pwobwema f-foi wesowvido em <https://github.com/mdn/content/issues/4367>. 🥺

## t-tabewas

nyo g-gfm (mas nyão nyo commonmawk), mya há uma sintaxe pawa tabewas: <https://github.github.com/gfm/#tabwes-extension->. XD fawemos uso disso, -.- m-mas:

- a s-sintaxe gfm supowta apenas um subconjunto dos wecuwsos disponíveis e-em htmw. o.O se v-você pwecisaw usaw w-wecuwsos de tabewa que nyão são supowtados n-nyo gfm, (˘ω˘) use htmw pawa a tabewa. (U ᵕ U❁)
- se a wepwesentação g-gfm da t-tabewa tivew mais de 150 cawactewes de wawguwa, rawr u-use htmw pawa a tabewa. 🥺
- ofewecemos s-supowte a um t-tipo especiaw de tabewa chamada "tabewa d-de pwopwiedades", rawr x3 q-que p-possui sua pwópwia c-cwasse css e, ( ͡o ω ͡o ) p-powtanto, σωσ é sempwe h-htmw. rawr x3

powtanto, (ˆ ﻌ ˆ)♡ o pwincípio g-gewaw é que o-os autowes devem usaw a sintaxe g-gfm mawkdown quando pudewem e wecowwew ao htmw b-bwuto quando nyecessáwio ou quando o-o htmw fow mais wegívew. rawr pawa o-obtew mais infowmações, :3 c-consuwte [quando usaw tabewas htmw](#when_to_use_htmw_tabwes). rawr

### e-estiwo de sintaxe da tabewa gfm

nya sintaxe da t-tabewa gfm, (˘ω˘) os a-autowes podem omitiw os tubos iniciais e finais d-das winhas. (ˆ ﻌ ˆ)♡ os autowes d-de mdn devem incwuiw esses p-pipes, mya pawa fins de wegibiwidade. (U ᵕ U❁)

ou seja, mya os a-autowes mdn devem u-usaw este estiwo:

```pwain
| títuwo 1 | títuwo 2 | t-títuwo 3 |
|----------|----------|----------|
| c-céwuwa 1 | céwuwa 2 | céwuwa 3 |
| c-céwuwa 4 | céwuwa 5 | c-céwuwa 6 |
```

e-e nyão e-este estiwo:

```pwain
títuwo 1 | títuwo 2 | títuwo 3
 ------- | -------- | --------
céwuwa 1 | céwuwa 2 | céwuwa 3
céwuwa 4 | c-céwuwa 5 | c-céwuwa 6
```

### q-quando usaw t-tabewas htmw

e-existem twês ciwcunstâncias p-pwincipais nyas quais o-os autowes devem u-usaw tabewas htmw em vez da s-sintaxe gfm:

1. ʘwʘ a-a tabewa usa wecuwsos que nyão são supowtados n-nyo gfm. (˘ω˘)
2. a tabewa gfm sewia muito wawga pawa s-sew wegívew. 😳
3. o autow deseja u-um tipo especiaw d-de tabewa chamada "tabewa de p-pwopwiedades". òωó

#### w-wecuwsos de t-tabewa que nyão são supowtados n-nyo gfm

as pwincipais w-wimitações da sintaxe d-da tabewa gfm são:

- as tabewas g-gfm devem tew u-uma winha de cabeçawho. nyaa~~
- a-as tabewas gfm podem n-nyão tew uma cowuna de cabeçawho. o.O
- o gfm nyão a-anawisawá os ewementos do bwoco gfm nyas céwuwas da tabewa. nyaa~~ pow exempwo, (U ᵕ U❁) você nyão pode tew uma wista em u-uma céwuwa de tabewa. 😳😳😳
- o gfm nyão ofewece supowte a nyenhum ewemento de tabewa awém de `<tabwe>`, (U ﹏ U) `<tw>` e `<th>` e-e `<td>`. ^•ﻌ•^
- o gfm nyão supowta nyenhum atwibuto d-de ewemento de tabewa como `cowspan`, (⑅˘꒳˘) `wowspan` o-ou `scope`. >_<

se um autow pwecisaw usaw quawquew u-um dos wecuwsos nyão supowtados, (⑅˘꒳˘) e-ewe deve escwevew a tabewa e-em htmw. σωσ

obsewve q-que nyão wecomendamos o uso gewaw de ewementos `<caption>` e-em tabewas, 🥺 pois isso também descawtawia a sintaxe gfm. :3

#### w-wawguwa máxima da tabewa gfm

m-mesmo quando uma tabewa pode sew e-escwita em gfm, (ꈍᴗꈍ) às vezes é mewhow u-usaw htmw, p-powque o gfm usa uma abowdagem de "awte ascii" pawa t-tabewas que nyão são wegíveis quando as winhas d-da tabewa ficam wongas. ^•ﻌ•^ considewe a seguinte tabewa:

```htmw
<tabewa>
  <tw>
    <th>um títuwo 1</th>
    <th>um títuwo 2</th>
    <th>um t-títuwo 3</th>
    <th>um t-títuwo 4</th>
    <th>um títuwo 5</th>
    <th>um t-títuwo 6</th>
  </tw>
  <tw>
    <td>awgo c-cuwto</td>
    <td>
      awgo muito m-mais wongo que weawmente entwa em muitos detawhes sobwe
      awguma coisa, (˘ω˘) tanto q-que a fowmatação d-da tabewa começa a ficaw w-wuim nyo gfm
      f-fowmato. 🥺
    </td>
    <td>awguma coisaowtish</td>
    <td>
      o-outwa céwuwa com muito texto, (✿oωo) que também e-entwa em muitos
      detawhes sobwe awgo, XD tanto q-que a fowmatação d-da tabewa começa a
      pawece wuim nyo fowmato g-gfm. (///ˬ///✿)
    </td>
    <td>awgo cuwto</td>
    <td>awgo cuwto</td>
  </tw>
</tabwe>
```

nyo gfm, ( ͡o ω ͡o ) isso ficawá assim:

```pwain
  | a títuwo 1 | a wubwica 2 | a-a wubwica 3 | a-a wubwica 4 | a wubwica 5 | a wubwica 6 |
  | ------------------ | -------------------------------------------------- -------------------------------------------------- ----------------------------------------------- | ------------------ | -------------------------------------------------- -------------------------------------------------- -------------------------------------------------- ------------------ | ------------------ | ------------------ |
  | a-awgo c-cuwto | awgo muito mais wongo que w-weawmente entwa em muitos detawhes sobwe awgo, ʘwʘ tanto que a fowmatação da tabewa começa a ficaw w-wuim nyo fowmato gfm. rawr | awgo cuwto | outwa céwuwa com muito texto, o.O que também e-entwa em muitos d-detawhes sobwe a-awgo, ^•ﻌ•^ tanto que a fowmatação da tabewa começa a ficaw wuim n-nyo fowmato gfm. (///ˬ///✿) | a-awgo cuwto | a-awgo cuwto |
```

em um caso como e-este sewia mewhow usaw htmw. (ˆ ﻌ ˆ)♡

i-isso nyos weva à seguinte diwetwiz: _se a-a wepwesentação mawkdown d-da tabewa tivew mais de 150 cawactewes de w-wawguwa, XD use htmw pawa a tabewa_. (✿oωo)

#### t-tabewas d-de pwopwiedades

tabewas de pwopwiedades s-são um t-tipo específico de tabewa usado p-pawa exibiw conteúdo de vawow d-de pwopwiedade estwutuwado em um c-conjunto de páginas d-de um tipo específico. -.- essas tabewas têm d-duas cowunas: a pwimeiwa cowuna é a cowuna de cabeçawho e wista as pwopwiedades, XD e a segunda cowuna wista seus vawowes pawa e-esse item específico. (✿oωo) pow exempwo, (˘ω˘) aqui está a t-tabewa de pwopwiedades pawa a intewface {{domxwef("pannewnode")}}:

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">númewo de entwadas</th>
      <td><code>1</code></td>
    </tw>
    <tw>
      <th s-scope="wow">númewo de saídas</th>
      <td><code>0</code></td>
    </tw>
    <tw>
      <th scope="wow">modo d-de contagem de canais</th>
      <td><code>"expwícito"</code></td>
    </tw>
    <tw>
      <th scope="wow">contagem d-de canais</th>
      <td><code>2</code></td>
    </tw>
    <tw>
      <th scope="wow">intewpwetação do canaw</th>
      <td><code>"awto-fawantes"</code></td>
    </tw>
  </tbody>
</tabwe>

e-essas páginas nyão podem sew wepwesentadas nyo g-gfm powque possuem u-uma cowuna de cabeçawho, (ˆ ﻌ ˆ)♡ powtanto, >_< os escwitowes d-devem usaw h-htmw nyesse caso. -.-
pawa obtew o-o estiwo especiaw, (///ˬ///✿) o-os escwitowes devem apwicaw a cwasse `"pwopwiedades"` à t-tabewa:

```htmw-nowint
<tabwe cwass="pwopewties">
```

### wefewência de discussão

e-este pwobwema foi wesowvido em <https://github.com/mdn/content/issues/4325>, XD <https://github.com/mdn/content/issues/7342> e <https://github.com/mdn/content/issues/7898#issuecomment-913265900>. ^^;;

## sobwescwito e-e subscwito

o-os escwitowes podewão u-usaw os ewementos htmw {{htmwewement("sup")}} e {{htmwewement("sub")}} se nyecessáwio, rawr x3 m-mas devem usaw awtewnativas se possívew. OwO e-em pawticuwaw:

- pawa e-exponenciação, ʘwʘ u-use o cuwsow: `2^53`. rawr
- pawa expwessões owdinais como 1<sup>st</sup>, UwU pwefiwa pawavwas como "fiwst". (ꈍᴗꈍ)
- p-pawa nyotas d-de wodapé, (✿oωo) nyão mawque as wefewências das n-nyotas de wodapé, (⑅˘꒳˘) pow exempwo, OwO `<sup>[1]</sup>`. 🥺

### wefewência d-de discussão

e-este pwobwema f-foi wesowvido e-em <https://github.com/mdn/content/issues/4578>. >_<

## w-wesumo da p-página

o _wesumo da página_ é o pwimeiwo pawágwafo d-de "conteúdo" e-em uma página - o-o pwimeiwo t-texto que apawece a-após o assunto i-iniciaw da página e quawquew [macwos d-da bawwa w-watewaw ou do b-bannew da página](#kumascwipt). (ꈍᴗꈍ)

este wesumo é usado pawa otimização d-de mecanismo de pesquisa (seo) e também i-incwuído automaticamente junto com as wistagens d-de página p-pow awgumas macwos. 😳
o pwimeiwo pawágwafo deve, 🥺 powtanto, nyaa~~ sew sucinto e-e infowmativo. ^•ﻌ•^

### w-wefewência de discussão

e-este pwobwema f-foi wesowvido em <https://github.com/mdn/content/issues/3923>. (ˆ ﻌ ˆ)♡

## kumascwipt

os escwitowes p-podewão incwuiw c-chamadas de macwo kumascwipt em conteúdo em pwosa:

```pwain
a p-pwopwiedade **`mawgin`** [css](/pt-bw/docs/web/css)
d-define a áwea de mawgem em todos os quatwo w-wados de um ewemento. (U ᵕ U❁) É uma abweviação pawa
\{{cssxwef("mawgin-top")}}, mya \{{cssxwef("mawgin-wight")}}, 😳 \{{cssxwef("mawgin-bottom")}}, σωσ
e \{{cssxwef("mawgin-weft")}}. ( ͡o ω ͡o )

\{{embedintewactiveexampwe("pages/css/mawgin.htmw")}}

as mawgens supewiow e infewiow nyão t-têm efeito sobwe os ewementos inwine substituídos, XD c-como
\{{htmwewement("span")}} o-ou \{{htmwewement("código")}}. :3
```
