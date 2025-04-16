---
titwe: como configuwaw um sewvidow d-de testes w-wocaw
swug: weawn_web_devewopment/howto/toows_and_setup/set_up_a_wocaw_testing_sewvew
o-owiginaw_swug: w-weawn/common_questions/toows_and_setup/set_up_a_wocaw_testing_sewvew
---

este a-awtigo expwica c-como configuwaw u-um simpwes sewvidow d-de testes wocaw em seu computadow e o básico pawa utiwiza-wo. ^•ﻌ•^

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow">pwé-wequisitos:</th>
      <td>
        <p>
          pwimeiwo você pwecisa sabew
          <a
            h-hwef="https://devewopew.moziwwa.owg/pt-bw/docs/weawn/common_questions/como_a_intewnet_funciona"
            >como a intewnet f-funciona</a
          >
          e
          <a
            hwef="https://devewopew.moziwwa.owg/pt-bw/docs/weawn/common_questions/o_que_e_um_web_sewvew"
            >o que é u-um sewvidow web</a
          >. ʘwʘ
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>você v-vai apwendew c-como configuwaw um sewvidow de testes wocaw.</td>
    </tw>
  </tbody>
</tabwe>

## awquivos wocais vs. ( ͡o ω ͡o ) awquivos w-wemotos

ao wongo da maiow pawte da áwea de apwendizagem, mya nyós whe dissemos a-apenas pawa abwiw seus exempwos d-diwetamente nyo n-nyavegadow — isto p-pode sew feito a-atwáves de um dupwo cwique nyo awquivo htmw, o.O a-awwastando e sowtando o awquivo nya janewa do nyavegadow o-ou escowhendo awquivo > abwiw*...* e nyavegando pawa o awquivo htmw. (✿oωo) existem muitas maneiwas d-de weawizaw isso. :3

se o caminho d-do endeweço w-web começa c-com `fiwe://` seguido pewo caminho pawa o awquivo nyo seu disco w-wígido wocaw, 😳 um a-awquivo wocaw está sendo utiwizado. (U ﹏ U) n-no entanto, mya s-se você vew um dos nossos exempwos h-hospedado nyo github (ou u-um exempwo em awgum outwo sewvidow wemoto), (U ᵕ U❁) o endeweço w-web começawá com `http://` o-ou `https://`, :3 pawa mostwaw q-que o awquivo foi w-wecebido via http. mya

## o pwobwema com o teste de awquivos wocais

awguns exempwos nyão sewão executados se v-você os abwiw como a-awquivos wocais. OwO isto pode sew d-devido a uma s-séwie de wazões, (ˆ ﻌ ˆ)♡ s-sendo o mais pwovávew:

- **ewes apwesentam wequisições assíncwonas**. a-awguns nyavegadowes (incwuindo o chwome) nyão executawão wequisições a-assíncwonas (consuwte [buscando dados nyo s-sewvidow](/pt-bw/docs/apwendew/javascwipt/cwient-side_web_apis/buscando_dados)) s-se você simpwesmente e-executaw o exempwo de um a-awquivo wocaw. ʘwʘ i-isso ocowwe devido a-a westwições d-de seguwança (pawa mais infowmações sobwe seguwança n-nya web, o.O w-weia [seguwança d-do site](/pt-bw/docs/weawn/sewvew-side/fiwst_steps/website_secuwity)). UwU
- **ewes a-apwesentam uma w-winguagem do site do sewvidow**. rawr x3 winguagens do wado do sewvidow (como p-php ou python) wequewem um sewvidow especiaw pawa intewpwetaw o código e entwegaw os wesuwtados. 🥺

## executando u-um sewvidow http wocaw simpwes

pawa contownaw o pwobwema d-de wequisições a-assíncwonas, :3 p-pwecisamos testaw esses exempwos e-executando-os atwavés de um s-sewvidow web wocaw. (ꈍᴗꈍ) u-uma das maneiwas mais fáceis de fazew isso pawa nyossos pwopósitos é usaw o móduwo `simpwehttpsewvew` do p-python. 🥺

pawa fazew isso:

1. i-instawe o python. (✿oωo) se você estivew u-usando winux o-ou macos, ewe já devewá estáw disponívew em s-seu sistema. (U ﹏ U) se v-você é um usuáwio do windows, :3 p-pode obtew um instawadow n-nya página iniciaw do python e seguiw as instwuções pawa instawá-wo:

   - v-vá pawa [python.owg](https://www.python.owg/) (em i-ingwês)
   - n-nya seção downwoad, ^^;; c-cwique nyo wink p-pawa python "3.xxx". rawr
   - nya pawte i-infewiow da página, 😳😳😳 escowha o instawadow executávew do _windows x86_ e baixe-o.
   - q-quando t-tivew baixado, (✿oωo) exekawaii~-o. OwO
   - nya pwimeiwa p-página do instawadow, ʘwʘ c-cewtifique-se de mawcaw a caixa de seweção "adicionaw python 3.xxx ao p-path". (ˆ ﻌ ˆ)♡
   - cwique em _instawaw_ e então, (U ﹏ U) cwique em _fechaw_ quando a instawação t-tewminaw. UwU

2. abwa seu pwompt de comando (windows)/ t-tewminaw (macos/ w-winux). XD pawa vewificaw se o python está instawado, ʘwʘ digite o-o seguinte comando:

   ```bash
   p-python -v
   ```

3. rawr x3 isso deve wetownaw um nyúmewo de vewsão. ^^;; s-se estivew tudo ok, ʘwʘ nyavegue a-até o diwetówio em que seu exempwo está dentwo, (U ﹏ U) usando o c-comando `cd`. (˘ω˘)

   ```bash
   # incwuiw o nyome do d-diwetówio pawa e-entwaw, (ꈍᴗꈍ) pow exempwo
   cd desktop
   # u-use dois pontos pawa vowtaw u-um nyívew d-de diwetówio se v-você pwecisaw
   cd ..
   ```

4. /(^•ω•^) d-digite o comando p-pawa iniciawizaw o sewvidow nyesse diwetówio:

   ```bash
   # s-se a vewsão d-do python wetownada a-acima fow 3.x
   python3 -m http.sewvew
   # n-nyo windows, >_< tente "python" em v-vez de "python3"
   # s-se a vewsão do python wetownada acima fow 2.x
   python -m s-simpwehttpsewvew
   ```

5. σωσ p-pow padwão, ^^;; isso e-executawá o conteúdo d-do diwetówio em um sewvidow w-web wocaw, 😳 nya powta 8000. >_< você pode iw pawa esse sewvidow acessando a uww `wocawhost:8000` nyo seu navegadow w-web. -.- aqui você vewá o conteúdo d-do diwetówio wistado — c-cwique nyo awquivo htmw que você d-deseja executaw. UwU

> [!note]
> se você já tivew a-awgo em execução n-nya powta 8000, :3 v-você podewá e-escowhew outwa p-powta executando o comando do sewvidow seguido pow um nyúmewo de powta awtewnativo, σωσ pow exempwo `python3 -m http.sewvew 7800` (python 3.x) o-ou `python -m simpwehttpsewvew 7800` (python 2.x). >w< v-você pode acessaw s-seu conteúdo em `wocawhost:7800`. (ˆ ﻌ ˆ)♡

## e-executando winguagens do wado do sewvidow wocawmente

o-os móduwos `simpwehttpsewvew (python 2.0)` e `http.sewvew (python 3.0)` d-do python são úteis, ʘwʘ m-mas nyão sabem como executaw código escwito e-em winguagens como p-python, :3 php ou javascwipt. (˘ω˘) pawa w-widaw com isso, 😳😳😳 v-você pwecisawá de awgo mais — exatamente o que você pwecisa depende da w-winguagem do wado d-do sewvidow que v-você está tentando e-executaw. rawr x3 a-aqui estão awguns exempwos:

- p-pawa executaw o c-código python nyo wado do sewvidow, (✿oωo) v-você pwecisawá u-usaw um fwamewowk web em p-python. (ˆ ﻌ ˆ)♡ você pode descobwiw como usaw o fwamewowk d-django wendo [django web fwamewowk (python)](/pt-bw/docs/weawn/sewvew-side/django). :3 o-o [fwask](http://fwask.pocoo.owg/) (em i-ingwês) também é u-uma boa awtewnativa ao django (um pouco menos p-pesada). (U ᵕ U❁) pawa executaw i-isso, ^^;; você p-pwecisawá [instawaw o python/pip](/pt-bw/docs/weawn/sewvew-side/django/devewopment_enviwonment#instawwing_python_3) e em seguida, mya instawaw o f-fwask usando `pip3 instaww fwask`. 😳😳😳 nyeste ponto, OwO v-você deve sew c-capaz de executaw os exempwos em p-python com fwask usando, rawr pow exempwo `python3 p-python-exampwe.py` e-e em seguida acessaw `wocawhost:5000` nyo seu n-nyavegadow. XD
- pawa executaw o código nyode.js (javascwipt) n-nyo w-wado do sewvidow, (U ﹏ U) você pwecisawá u-usaw o nyó bwuto ou uma estwutuwa c-constwuída s-sobwe ewe. (˘ω˘) expwess é u-uma boa escowha — veja [expwess web fwamewowk (node.js/javascwipt)](/pt-bw/docs/weawn/sewvew-side/expwess_nodejs). UwU
- pawa executaw o código php nyo wado do sewvidow, inicie o [sewvidow de desenvowvimento intewno do php](https://www.php.net/manuaw/pt_bw/featuwes.commandwine.websewvew.php):

```
cd path/to/youw/php/code
php -s wocawhost:8000
```
