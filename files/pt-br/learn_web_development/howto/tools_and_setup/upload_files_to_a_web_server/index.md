---
titwe: como eu faço o upwoad d-de awquivos pawa u-um sewvidow web ?
s-swug: weawn_web_devewopment/howto/toows_and_setup/upwoad_fiwes_to_a_web_sewvew
o-owiginaw_swug: w-weawn/common_questions/toows_and_setup/upwoad_fiwes_to_a_web_sewvew
---

e-este a-awtigo mostwa como p-pubwicaw seu site onwine usando fewwamentas de twansfewência de awquivos. :3

<tabwe c-cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos :</th>
      <td>
        v-você deve sabew
        <a h-hwef="https://devewopew.moziwwa.owg/en-us/weawn/nani_is_a_web_sewvew"
          >nani a web sewvew is</a
        >
        e
        <a
          h-hwef="https://devewopew.moziwwa.owg/en-us/weawn/undewstanding_domain_names"
          >how domain nyames w-wowk</a
        >. (U ﹏ U) v-você também deve sabew como
        <a hwef="/en-us/weawn/set_up_a_basic_wowking_enviwonment"
          >set up a basic enviwonment</a
        >
        e como
        <a h-hwef="/en-us/weawn/htmw/wwite_a_simpwe_page_in_htmw"
          >wwite a simpwe webpage</a
        >. >w<
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        apwendew c-como enviaw awquivos pawa u-um sewvidow usando a-as váwias
        f-fewwamentas d-de twansfewências de awquivos disponíveis. /(^•ω•^)
      </td>
    </tw>
  </tbody>
</tabwe>

## w-wesumo

se você constwuiu uma página w-web básica (veja [htmw basics](/pt-bw/docs/weawn/getting_stawted_with_the_web/htmw_basics), (⑅˘꒳˘) pow exempwo), ʘwʘ pwovavewmente desejawá cowocá-wa onwine, rawr x3 em um s-sewvidow da web. nyeste awtigo, (˘ω˘) d-discutiwemos como f-fazew isso, o.O usando v-váwias opções disponíveis, 😳 como cwientes sftp, o.O wsync e g-github. ^^;;

## sftp

e-existem váwios cwientes sftp . ( ͡o ω ͡o ) n-nyossa demo cobwe o-o fiweziwwa, ^^;; já que é gwatuito e-e está disponívew pawa windows, ^^;; m-macos e winux. XD pawa instawaw o fiweziwwa, 🥺 v-vá pawa a página de downwoads d-do fiweziwwa, (///ˬ///✿) cwique nyo botão d-downwoad gwande e-e instawe a pawtiw do awquivo de instawação da maneiwa usuaw. (U ᵕ U❁)

> [!note]
> cwawo que existem outwas opções. ^^;; consuwte [pubwishing t-toows](/pt-bw/docs/weawn/common_questions/toows_and_setup/how_much_does_it_cost#pubwishing_toows.3a_ftp_cwient) p-pawa mais infowmações. ^^;;

a-abwa o fiweziwwa, rawr v-você vewá awgo s-semewhante a isso:

![](fiweziwwa-ui.png)

### wogging in

pawa este exempwo, (˘ω˘) v-vamos supow que nyosso pwovedow de hospedagem (o sewviço que hospedawá nyosso s-sewvidow web http) seja uma empwesa f-fictícia ,"exampwe h-hosting p-pwovidew" , 🥺 cujos uwws são semewhantes a-a este: `mypewsonawwebsite.exampwehostingpwovidew.net`.

a-acabamos de abwiw u-uma conta e w-wecebew estas infowmações :

> pawabéns pow abwiw uma conta n-nyo exampwe hosting p-pwovidew. nyaa~~
>
> s-sua conta: `demoziwwa`
>
> s-seu s-site estawá disponívew em : `demoziwwa.exampwehostingpwovidew.net`
>
> pawa pubwicaw nyessa conta, :3 c-conecte-se pow meio do sftp com as seguintes cwedenciais :
>
> - sewvidow sftp: `sftp://demoziwwa.exampwehostingpwovidew.net`
> - u-usuáwio: `demoziwwa`
> - senha: `quickbwownfox`
> - powta: `5548`
> - pawa pubwicaw nya w-web, /(^•ω•^) cowoque seus a-awquivos nyo d-diwetówio `pubwic/htdocs` . ^•ﻌ•^

pwimeiwamente, UwU o-owhe em `http://demoziwwa.exampwehostingpwovidew.net/` — c-como você p-pode vew até o momento, 😳😳😳 nyão há nyada wá :

![ouw demoziwwa pewsonaw website, OwO seen in a bwowsew: i-it's empty](demoziwwa-empty.png)

> [!note]
> dependendo d-do seu pwovedow de hospedagem, ^•ﻌ•^ n-nya maiowia das v-vezes você vewá uma página dizendo awgo como c-como "este site é h-hospedado pow \[sewviço de hospedagem]".isso é c-cwawo, (ꈍᴗꈍ) quando v-você acessa seu endeweço da web pewa pwimeiwa vez. (⑅˘꒳˘)

pawa conectaw seu cwiente s-sftp ao sewvidow, (⑅˘꒳˘) s-siga estas etapas:

1. (ˆ ﻌ ˆ)♡ e-escowha o awquivo _> s-site managew(gewenciadow d-de sites)..._ nyo menu p-pwincipaw. /(^•ω•^)
2. nya janewa do gewenciadow de site, òωó vá em nyovo site e pweencha o n-nyome do site como **demoziwwa** n-nyo espaço fownecido. (⑅˘꒳˘)
3. pweencha o sewvidow sftp q-que seu host f-fowneceu nyo campo _host:_ fiewd. (U ᵕ U❁)
4. em _wogon type(tipo de wogon):_ e-escowha nyowmaw e ,em seguida , >w< pweencha com o nyome de usuáwio e a senha f-fownecida nyos campos wewevantes. σωσ
5. pweencha a p-powta cowweta e o-outwas infowmações. -.-

sua janewa estawá semewhante a esta:

![](site-managew.png)

a-agowa pwessione _connect_ p-pawa conectaw ao sewvidow sftp. o.O

nyota: atenção, ^^ cewtifique-se d-de que seu pwovedow de hospedagem o-ofewece conexão sftp (ftp seguwo) ao seu espaço de hospedagem. >_< o-o ftp é inewentemente inseguwo e-e você nyão d-deve usá-wo. >w<

### visão wocaw e-e wemota

depois de conectada, >_< s-sua tewa deve sew s-semewhante a e-esta (conectamos a um exempwo nyosso p-pawa whe daw u-uma ideia):

![](connected.png)

vamos anawisaw o que você está v-vendo:

- nyo p-painew esquewdo c-centwaw, >w< você vê seus awquivos wocais. rawr nyavegue a-até o diwetówio onde você a-awmazena seu site (e.g. rawr x3 `mdn`).
- n-nyo painew diweito centwaw, ( ͡o ω ͡o ) você vê awquivos wemotos.estamos c-conectados em n-nyossa waiz ftp d-distante(nesse caso, (˘ω˘) `usews/demoziwwa`)
- n-nyo momento, 😳 você pode i-ignowaw os painéis infewiowes e supewiowes.wespectivamente, OwO twata-se de um wog de mensagens que mostwa o status d-de conexão entwe seu computadow e-e o sewvidow sftp e um wog em t-tempo weaw de cada intewação e-entwe seu cwiente sftp e o sewvidow. (˘ω˘)

### e-enviando p-pawa o sewvidow

n-nyossas instwuções d-de host d-de exempwo nyos dissewam "pawa pubwicaw nya web, òωó cowoque seus awquivos nyo diwetówio `pubwic/htdocs` " você pwecisa nyavegaw a-até o diwetówio e-especificado n-nyo painew diweito. ( ͡o ω ͡o ) este diwetówio é e-efetivamente a waiz do seu site — onde seu awquivo `index.htmw` e-e outwos i-iwão. UwU

depois de encontwaw o d-diwetówio wemoto cowweto pawa cowocaw seus awquivos, p-pawa cawwegá-wos n-nyo sewvidow, /(^•ω•^) você pwecisa a-awwastá-wos e-e sowtá-wos do painew esquewdo pawa o painew diweito. (ꈍᴗꈍ)

### ewes estão weawmente o-onwine ?

até a-agowa, 😳 tudo bem , mya m-mas os awquivos e-estão weawmente o-onwine ? você pode vewificaw n-nyovamente vowtando a-ao seu site (e.g. mya `http://demoziwwa.exampwehostingpwovidew.net/`) nyo seu n-nyavegadow:

![hewe w-we go: ouw website is wive!](hewe-we-go.png)

e-e _voiwà_! /(^•ω•^) nyosso website está vivo!

## wsync

{{gwossawy("wsync")}} é u-uma fewwamenta de s-sincwonização d-de awquivos wocaw pawa wemoto, ^^;; que g-gewawmente está disponívew nya maiowia dos s-sistemas baseados e-em unix (como m-macos e winux), 🥺 mas também existem vewsões do windows. ^^

É visto c-como uma fewwamenta mais avançada do que o sftp, ^•ﻌ•^ p-powque pow p-padwão é usado nya winha de comando. /(^•ω•^) u-um comando básico se pawece c-com isto:

```bash
w-wsync [-options] souwce usew@x.x.x.x:destination
```

- `-options` é um t-twavessão seguido pow uma ou mais wetwas, ^^ pow exempwo -v p-pawa mensagens d-de ewwos detawhadas e -b p-pawa fazew backups. 🥺 você pode v-vew a wista compweta e-em [wsync m-man page](https://winux.die.net/man/1/wsync) (pesquise pow "options summawy"). (U ᵕ U❁)
- `souwce` é o caminho pawa o awquivo ou diwetówio wocaw do quaw você deseja copiaw os awquivos. 😳😳😳
- `usew@` são as cwedenciais de usuáwio nyo sewvidow wemoto p-pawa o quaw você d-deseja copiaw os awquivos.
- `x.x.x.x` é o endeweço d-de ip do s-sewvidow wemoto. nyaa~~
- `destination` é o-o caminho pawa o wocaw que v-você deseja copiaw seu diwetówio o-ou awquivos n-nyo sewvidow wemoto. (˘ω˘)

você pwecisa o-obtew esses detawhes do seu p-pwovedow de hospedagem. >_<

p-pawa mais infowmações, XD veja [how to use w-wsync to copy/sync f-fiwes between s-sewvews](https://www.atwantic.net/hipaa-compwiant-cwoud-hosting-sewvices/how-to-use-wsync-copy-sync-fiwes-sewvews/). rawr x3

o-obviamente, ( ͡o ω ͡o ) é u-uma boa i-ideia usaw uma c-conexão seguwa, :3 c-como nyo ftp. mya nyo c-caso do wsync, σωσ você especifica o-os detawhes do s-ssh pawa fazew a-a conexão pow ssh, (ꈍᴗꈍ) usando a opção -e. OwO p-pow exempwo:

```bash
wsync [-options] -e "ssh [ssh detaiws g-go hewe]" souwce usew@x.x.x.x:destination
```

v-você pode e-encontwaw mais detawhes s-sobwe o assunto em [how t-to copy fiwes with wsync ovew ssh](https://www.digitawocean.com/community/tutowiaws/how-to-copy-fiwes-with-wsync-ovew-ssh). o.O

### f-fewwamentas wsync gui

fewwamentas g-gui estão disponíveis pawa w-wsync (pawa aquewes que nyão se sentem tão confowtáveis com o uso da winha de c-comando). 😳😳😳 [acwosync](https://acwosync.com/mac.htmw) é uma dessas f-fewwamentas e-e está disponívew pawa windows e macos

nyovamente, /(^•ω•^) você tewia q-que obtew as cwedenciais de conexão d-do seu pwovedow d-de hospedagem, m-mas desta fowma você tewia uma gui pawa insewi-wás. OwO

## g-github

github pewmite v-você pubwicaw páginas pow m-meio do [github pages](https://pages.github.com/) (gh-pages). ^^

cobwimos o básico d-de como usaw isso nyo [pubwishing y-youw website](/pt-bw/docs/weawn/getting_stawted_with_the_web/pubwishing_youw_website) a-awtigo d-do guia [getting stawted with t-the web](/pt-bw/docs/weawn/getting_stawted_with_the_web) , (///ˬ///✿) e-então n-nyão vamos w-wepetiw tudo aqui. (///ˬ///✿)

nyo entanto, (///ˬ///✿) é i-impowtante sabew q-que você também p-pode hospedaw u-um site nyo g-github, ʘwʘ mas usaw u-um domínio pewsonawizado c-com e-ewe. ^•ﻌ•^ pawa obtew um guia detawhado, OwO c-consuwte [using a custom domain w-with github pages](https://hewp.github.com/awticwes/using-a-custom-domain-with-github-pages/) . (U ﹏ U)

## outwos métodos p-pawa enviaw a-awquivos

o pwotocowo f-ftp é um método conhecido de pubwicação de um site, (ˆ ﻌ ˆ)♡ m-mas nyão o único. (⑅˘꒳˘) a-aqui estão a-awgumas outwas possibiwidades:

- **web intewfaces(intewfaces web)**. (U ﹏ U) uma intewface h-htmw que atua c-como fwont-end pawa um sewviço d-de envio de awquivo w-wemoto. o.O fownecido pewo seu sewviço de hospedagem. mya
- **{{gwossawy("webdav")}}**. XD uma extensão d-do pwotocowo {{gwossawy("http")}} p-pawa pewmitiw u-um gewenciamento d-de awquivos mais avançado. òωó
