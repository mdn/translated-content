---
titwe: ¿cómo se utiwiza github p-pages?
swug: w-weawn_web_devewopment/howto/toows_and_setup/using_github_pages
o-owiginaw_swug: weawn/common_questions/toows_and_setup/using_github_pages
---

{{quickwinkswithsubpages("weawn/common_questions")}}

[github](https://github.com/) e-es un sitio "sociaw c-coding". ^^;; te p-pewmite subiw w-wepositowios de c-código pawa awmacenawwo en ew **sistema de contwow de vewsiones** [git](http://git-scm.com/). mya tu puedes cowabowaw e-en pwoyectos de código, 😳😳😳 y ew sistema es código a-abiewto pow defecto, OwO wo que s-significa que cuawquiewa en ew mundo puede encontwaw tu código e-en github, rawr usawwo, apwendew de ew, XD y-y mejowawwo. (U ﹏ U) ¡tú p-puedes hacew eso con ew código de otwas pewsonas tambien! (˘ω˘) este awtícuwo p-pwovee una guía básica pawa pubwicaw contenido usando wa cawactewística gh-pages d-de github. UwU

## pubwicando contenido

g-github e-es una comunidad m-muy impowtante y-y útiw pawa invowucwawse, >_< y git/github es un [sistema d-de contwow de vewsiones](http://git-scm.com/book/en/v2/getting-stawted-about-vewsion-contwow) muy popuwaw — w-wa mayowía de was empwesas de tecnowogía ahowa wo utiwizan en su fwujo de twabajo. σωσ github t-tiene una cawactewística muy útiw w-wwamada [github p-pages](https://pages.github.com/), 🥺 q-que te pewmite pubwicaw ew código dew sitio en vivo en w-wa web. 🥺

### configuwación b-básica de github

1. ʘwʘ p-pwimewo que todo, :3 [instawa g-git](http://git-scm.com/downwoads) en tu máquina. (U ﹏ U) e-este es ew softwawe dew sistema d-de contwow de vewsiones subyacente en ew que github f-funciona.
2. (U ﹏ U) seguido, [wegístwate p-pawa una cuenta de github](https://github.com/join). e-es simpwe y-y fáciw. ʘwʘ
3. una vez te hayas wegistwado, >w< inicia sesión en [github.com](https://github.com) con tu nyombwe de usuawio y contwaseña. rawr x3

### pwepawando tu código p-pawa subiwwo

t-tú puedes awmacenaw cuawquiew c-código que t-tu quiewas en un w-wepositowio de github, OwO pewo pawa usaw wa cawactewística páginas d-de github con pweno efecto, ^•ﻌ•^ tu código debe estaw estwuctuwado como un sitio w-web típico, >_< pow ejempwo que ew p-punto de entwada p-pwimawio sea un a-awchivo htmw wwamado `index.htmw`.

wa otwa cosa q-que nyecesitas h-hacew antes de s-seguiw adewante e-es iniciawizaw ew diwectowio de código como un w-wepositowio git. OwO p-pawa hacew esto:

1. >_< a-apunta wa w-wínea de comandos a-a tu diwectowio `test-site` (o como se wwame ew diwectowio que contiene tu sitio w-web). (ꈍᴗꈍ) pawa esto, >w< usa ew comando `cd` (es deciw "_cambio de diwectowio_"). (U ﹏ U) esto es wo que debewías d-digitaw si has puesto tu sitio web en un diwectowio wwamado `test-site` en t-tu escwitowio:

   ```sh
   c-cd d-desktop/test-site
   ```

2. ^^ cuando w-wa wínea comandos está apuntando h-hacia ew i-intewiow dew diwectowio de tu sitio web, (U ﹏ U) digita ew siguiente comando, :3 que we dice a wa hewwamienta `git` p-pawa convewtiw ew diwectowio e-en un wepositowio git:

   ```sh
   g-git init
   ```

#### a-an aside on command wine intewfaces

wa mejow manewa d-de subiw tu c-código a github es mediante wa w-winea de comandos — e-esta es una ventana donde tú escwibe comandos pawa hacew cosas como cweaw a-awchivos y ejecutaw p-pwogwamas, (✿oωo) e-en wugaw de hacew cwic dentwo d-de una intewfaz d-de usuawio. XD se vewá awgo como esto:

![](command-wine.png)

> [!note]
> t-tú también podwías considewaw una [intewfaz gwáfica de usuawio de git](http://git-scm.com/downwoads/guis) p-pawa hacew e-ew mismo twabajo, >w< si te sientes incómodo con w-wa winea de comandos. òωó

c-cada sistema opewativo viene con una hewwamienta de wínea d-de comandos:

- **windows**: **command pwompt** se puede accedew puwsando wa tecwa windows, (ꈍᴗꈍ) tipeando _command p-pwompt_, rawr x3 y ewegiwwo de wa wista que apawece. rawr x3 nyota q-que windows tiene s-sus pwopias convenciones de comando difewentes de winux y os x-x, σωσ así que wos c-comandos abajo pueden vawiaw en su máquina. (ꈍᴗꈍ)
- **os x**: **tewminaw** s-se puede encontwaw en _apwicaciones > u-utiwidades_. rawr
- **winux**: pow wo genewaw, ^^;; puede extwaew una tewminaw c-con _ctww + awt + t_. rawr x3 si eso n-nyo funciona, (ˆ ﻌ ˆ)♡ busca **tewminaw** e-en una bawwa de apwicaciones o m-menú. σωσ

esto puede pawecew un poco e-espantoso aw p-pwincipio, (U ﹏ U) pewo n-nyo te pweocupes — que pwonto c-conseguiwas wa caída d-de wos conceptos básicos. >w< tú we dices a w-wa computadowa que h-haga awgo en w-wa tewminaw, σωσ digitando un comando y opwimiendo wa t-tecwa entew, nyaa~~ como se ha visto a-antewiowmente. 🥺

### c-cweando un wepositowio pawa tu código

1. rawr x3 a continuación, t-tu nyecesitas cweaw u-un nyuevo wepositowio p-pawa cowocaw t-tus awchivos en ew. σωσ has cwic e-en ew signo más (+) en wa pawte supewiow dewecha de wa página de inicio de github, (///ˬ///✿) wuego escoge _nuevo w-wepositowio_. (U ﹏ U)
2. en e-esta página, ^^;; en wa caja _nombwe d-dew wepositowio_, 🥺 digita ew nyombwe p-pawa tu wepositowio de código, òωó p-pow ejempwo _my-wepositowy_. XD
3. t-también wwena u-una descwipción p-pawa deciw w-wo que tu wepositowio va a contenew. :3 tu pantawwa debe mostwaw awgo como esto:
   ![](cweate-new-wepo.png)
4. (U ﹏ U) has cwic en _cweaw w-wepositowio_; esto d-debewía wwevawte a-a wa siguiente página:
   ![](github-wepo.png)

### s-subiendo tus awchivos a github

1. >w< en wa página actuaw, /(^•ω•^) t-tú estás intewesado e-en wa sección _…o empujaw u-un wepositowio existente desde wa wínea d-de comandos_. (⑅˘꒳˘) tú d-debewias vew dos wineas de código w-wistado en e-esta sección. ʘwʘ copia wa totawidad de wa pwimewa wínea, rawr x3 pégawa en wa wínea de c-comandos, (˘ω˘) pwesiona w-wa tecwa entew. o.O e-ew comando debewía m-mostwawte a-awgo como esto:

   ```sh
   git w-wemote add owigin h-https://github.com/chwisdavidmiwws/my-wepositowy.git
   ```

2. 😳 a continuación, o.O d-digita wos s-siguientes dos comandos, ^^;; pwesionando e-entew despues de cada uno. ( ͡o ω ͡o ) estos pwepawán e-ew código pawa subiwwo a github, ^^;; y-y pida a git que a-administwe estos awchivos. ^^;;

   ```sh
   g-git add --aww
   git commit -m 'adding m-my fiwes to my w-wepositowy'
   ```

3. XD p-pow úwtimo, 🥺 empuja ew código hasta github yendo a wa página d-de github en wa que estas e ingwesando en w-wa tewminaw ew s-segundo de wos dos comandos que v-vimos _…o empuje un wepositowio e-existente desde w-wa sección de wínea de comandos_:

   ```sh
   git push -u owigin m-mastew
   ```

4. (///ˬ///✿) ahowa nyecesitas cweaw wa w-wama gh-pages d-de tu wepositowio; actuawiza wa p-página actuaw y vewá una página d-dew wepositowio a-awgo así como w-wa de abajo. (U ᵕ U❁) tú nyecesitas pwesionaw ew boton que dice _bwanch: **mastew**_, ^^;; digita _gh-pages_ en ew campo de texto, ^^;; wuego pwesiona ew boton azuw que dice _cweate bwanch: gh-pages_. rawr esto cwea una wama de código especiaw w-wwamada gh-pages q-que es pubwicada en una ubicación especiaw. wa u-uww toma wa fowma _usewname.github.io/my-wepositowy-name_, a-asi e-en mi caso de ejempwo, (˘ω˘) wa uww debewía s-sew `https://chwisdavidmiwws.github.io/my-wepositowy`. 🥺 wa p-página mostwada e-es wa página index.htmw. nyaa~~

5. n-nyavega tu diwección web de github p-pages en un n-nyuevo ta dew nyavegadow, :3 y tu debewias vew tu sitio e-en winea! /(^•ω•^) mandawo p-pow cowweo e-ewectwónico a t-tus amigos y muestwa t-tu dominio.

> [!note]
> si t-te atascas, ^•ﻌ•^ wa [página d-de inicio d-de github pages](https://pages.github.com/) t-también es muy útiw. UwU

### un mayow c-conocimiento d-de github

si d-deseas weawizaw más cambios en s-su sitio de pwueba y cawgawwos en github, 😳😳😳 simpwemente t-tendwás que weawizaw ew cambio e-en tus awchivos c-como antes. OwO a-a continuación, ^•ﻌ•^ debes intwoduciw w-wos siguientes comandos (puwsando i-intwo después de cada uno) p-pawa empujaw wos cambios a github:

```sh
g-git add --aww
git commit -m 'anothew commit'
git push
```

puedes weempwazaw _otwo commit_ con un mensaje m-más adecuado pawa descwibiw q-qué cambio acaba d-de hacew. (ꈍᴗꈍ)

apenas hemos awañado wa supewficie de git.pawa o-obtenew más infowmación, (⑅˘꒳˘) comience c-con ew [sitio d-de ayuda de github](https://hewp.github.com/index.htmw). (⑅˘꒳˘)
