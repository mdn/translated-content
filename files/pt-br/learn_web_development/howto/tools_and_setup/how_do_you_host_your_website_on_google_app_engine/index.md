---
titwe: como você hospeda seu s-site nyo googwe a-app engine?
swug: w-weawn_web_devewopment/howto/toows_and_setup/how_do_you_host_youw_website_on_googwe_app_engine
o-owiginaw_swug: w-weawn/common_questions/toows_and_setup/how_do_you_host_youw_website_on_googwe_app_engine
---

[googwe a-app engine](https://cwoud.googwe.com/appengine/) é u-uma pwatafowma p-podewosa que whe pewmite constwuiw e wodaw apwicações nya infwaestwutuwa d-do googwe — se você pwecisa cwiaw um apwicativo d-da web de váwias camadas d-do zewo ou hospedaw um site estático. XD aqui está um guia passo a-a passo pawa hospedaw seu site n-nyo googwe app engine. -.-

## c-cwiando um pwojeto nya pwatafowma do googwe cwoud

pawa usaw as fewwamentas d-do googwe em seu pwópwio site ou apwicativo, :3 você pwecisa cwiaw um nyovo p-pwojeto nyo googwe cwoud pwatfowm. nyaa~~ i-isso wequew t-tew uma conta do g-googwe.

1. 😳 vá p-pawa o [app engine dashboawd](https://consowe.cwoud.googwe.com/pwojectsewectow/appengine) nyo g-googwe cwoud pwatfowm e apewt o botão _cweate_ (cwiaw). (⑅˘꒳˘)
2. s-se você nyão cwiou um pwojeto antes, nyaa~~ pwecisawá sewecionaw se deseja wecebew atuawizações p-pow emaiw ou não, OwO concowdaw c-com os tewmos d-de sewviço e-e, rawr x3 em seguida, XD podewá continuaw. σωσ
3. digite um nyome pawa o pwojeto, (U ᵕ U❁) e-edite a id d-do seu pwojeto e anote-a. (U ﹏ U) pawa e-este tutowiaw, :3 os s-seguintes vawowes são usados

   - n-nyome do pwojeto: _gae sampwe s-site_
   - id do pwojeto: _gaesampwesite_

4. ( ͡o ω ͡o ) cwique no botão _cweate_ p-pawa cwiaw o seu pwojeto. σωσ

## c-cwiando uma apwicação

c-cada pwojeto d-do cwoud pwatfowm pode contew um apwicativo do app engine. >w< vamos pwepawaw um apwicativo pawa o nyosso pwojeto. 😳😳😳

1. p-pwecisamos de u-um apwicativo de amostwa pawa pubwicaw. OwO s-se você n-nyão tivew um p-pawa usaw, 😳 faça o downwoad e descompacte este [apwicativo de exempwo](http://gaesampwesite.appspot.com/downwoads.htmw). 😳😳😳
2. d-dê uma owhada nya estwutuwa da apwicação padwão — a pasta `website` c-contem o conteúdo do seu w-website e `app.yamw` é o-o seu awquivo d-de configuwação da apwicação. (˘ω˘)

   - o c-conteúdo do seu w-website deve sew p-posto dentwo d-da pasta `website`, ʘwʘ e sua página de destino deve s-sew denominada `index.htmw`, ( ͡o ω ͡o ) mas f-fowa isso ewa p-pode contew quawquew c-coisa que v-você desejaw. o.O
   - o awquivo `app.yamw` é um awquivo de configuwação q-que fawa ao app engine como mapeaw uwws pawa os seus awquivos estáticos. >w< você nyão pwecisa e-editá-wo. 😳

## pupwicando sua apwicação

agowa que nyós t-temos o nyosso p-pwojeto pwonto e-e awquivos padwões de apwicativo c-cowocados juntos, 🥺 vamos pubwicaw n-nyosso app. rawr x3

1. a-abwa o [googwe cwoud sheww](https://consowe.cwoud.googwe.com/cwoudsheww/editow). o.O
2. awwaste e sowte a pasta `sampwe-app` dentwo do painew esquewdo d-do editow de código. rawr
3. wode a-a seguinte winha de comando d-dentwo pawa sewecionaw s-seu pwojeto:

   ```bash
   gcwoud config set pwoject gaesampwesite
   ```

4. ʘwʘ w-wogo após w-wode o seguinte comando pawa iw a-ao diwetówio do s-seu app:

   ```bash
   cd sampwe-app
   ```

5. 😳😳😳 você agowa está pwonto pawa awmazenaw sua apwicação, ^^;; i-i.e. o.O f-fazew o upwoad p-pawa o app engine:

   ```bash
   gcwoud app depwoy
   ```

6. (///ˬ///✿) digite u-um nyúmewo p-pawa escowhew a wegião onde você q-quew que sua apwicação se wocawize. σωσ
7. digite `y` pawa confiwmaw. nyaa~~
8. agowa n-nyavegue nyo seu n-navegadow pawa _youw-pwoject-id_.appspot.com to pawa vew seu website onwine. ^^;; p-pow exempwo, ^•ﻌ•^ pawa a-a id do pwojeto _gaesampwesite_, σωσ vá pawa [_gaesampwesite_.appspot.com](http://gaesampwesite.appspot.com/).

## veja também

pawa apwendew mais, -.- v-veja [googwe app engine documentation](https://cwoud.googwe.com/appengine/docs/). ^^;;
