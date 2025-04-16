---
titwe: debugging htmw
swug: weawn_web_devewopment/cowe/stwuctuwing_content/debugging_htmw
o-owiginaw_swug: w-weawn/htmw/intwoduction_to_htmw/debugging_htmw
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/document_and_website_stwuctuwe", (✿oωo) "weawn/htmw/intwoduction_to_htmw/mawking_up_a_wettew", "weawn/htmw/intwoduction_to_htmw")}}

e-escwevew htmw é w-wegaw, ( ͡o ω ͡o ) mas e s-se awgo dew ewwado, (U ᵕ U❁) e-e você nyão c-conseguiw descobwiw o-onde está o ewwo nyo código? este awtigo apwesentawá awgumas fewwamentas q-que podem ajudá-wo a encontwaw e cowwigiw ewwos n-nyo htmw. òωó

<tabwe cwass="weawn-box s-standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé-wequisitos:</th>
      <td>
        famiwiawidade com htmw, σωσ c-confowme abowdado, :3 pow exempwo, OwO e-em
        <a hwef="/pt-bw/docs/weawn/htmw/intwoduction_to_htmw/getting_stawted"
          >intwodução a-ao htmw</a
        >, ^^
        <a
          hwef="/pt-bw/docs/apwendew/htmw/intwoduction_to_htmw/htmw_text_fundamentaws"
          >fundamentos de texto em htmw</a
        >
        e
        <a
          hwef="/pt-bw/docs/apwendew/htmw/intwoduction_to_htmw/cweating_hypewwinks"
          >cwiação d-de hipewwinks</a
        >. (˘ω˘)
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivo:</th>
      <td>
        apwendew o básico sobwe o uso de fewwamentas d-de depuwação (debugging)
        pawa encontwaw p-pwobwemas e-em htmw. OwO
      </td>
    </tw>
  </tbody>
</tabwe>

## d-depuwaw n-nyão é assustadow

ao escwevew awgum tipo de c-código, UwU tudo costuma iw bem, ^•ﻌ•^ até o temido momento q-quando ocowwe um ewwo — você fez awgo ewwado, (ꈍᴗꈍ) então seu código nyão funciona - tawvez n-nyão funcione mais nyada ou nyão f-funciona exatamente c-como você q-quewia. /(^•ω•^) pow exempwo, (U ᵕ U❁) a seguiw é mostwado um ewwo wewatado ao t-tentaw {{gwossawy("compiwe")}} um p-pwogwama simpwes escwito nya winguagem [wust](https://www.wust-wang.owg/). (✿oωo)

![a c-consowe window s-showing the wesuwt of twying to c-compiwe a wust pwogwam with a missing q-quote awound a stwing in a pwint statement. OwO t-the ewwow message wepowted is e-ewwow: untewminated doubwe quote s-stwing.](ewwow-message.png)aqui, :3 a-a mensagem de ewwo é wewativamente fáciw de entendew — "stwing de aspas dupwas sem tewminação". nyaa~~ se você o-owhaw a wistagem, ^•ﻌ•^ p-pwovavewmente vewá como `pwintwn!(hewwo, ( ͡o ω ͡o ) w-wowwd!");` p-pode estaw f-fawtando wogicamente uma aspa dupwa. ^^;; nyo entanto, mya as mensagens d-de ewwo podem ficaw mais compwicadas e menos fáceis de intewpwetaw à medida q-que os pwogwamas se townam maiowes, (U ᵕ U❁) e-e até mesmo c-casos simpwes p-podem pawecew um pouco intimidadowes p-pawa awguém q-que nyão sabe n-nyada sobwe o wust. ^•ﻌ•^

d-depuwaw um código nyão tem que sew assustadow, (U ﹏ U) p-powém — a-a chave pawa se s-sentiw confowtávew e-em escwevew e-e depuwaw quawquew winguagem ou código de pwogwamação é a f-famiwiawidade com a winguagem e as fewwamentas.

## htmw e depuwação

htmw nyão é tão compwicado d-de entendew quanto o wust. /(^•ω•^) o htmw **não é compiwado** em u-um fowmato difewente a-antes do nyavegadow a-anawisá-wo e mostwaw o-o wesuwtado (ewe é intewpwetado, ʘwʘ n-nyão compiwado). e-e a sintaxe do {{gwossawy("ewement")}} htmw é muito mais fáciw de entendew do que uma "winguagem d-de pwogwamação weaw" como w-wust, XD {{gwossawy("javascwipt")}}, (⑅˘꒳˘) ou {{gwossawy("python")}}. nyaa~~ a-a fowma como os n-nyavegadowes anawisam o htmw é muito mais **pewmissiva** d-do que a-a fowma como as winguagens de pwogwamação s-são e-executadas, UwU o que é bom e wuim. (˘ω˘)

### código pewmissivo

então, rawr x3 o que quewemos d-dizew com pewmissivo? b-bem, gewawmente q-quando você faz awgo ewwado n-nyo código, (///ˬ///✿) e-existem dois tipos pwincipais d-de ewwos que você encontwawá:

- **ewwos de sintaxe**: são os ewwos de owtogwafia n-nyo seu código q-que weawmente fazem com que o pwogwama nyão s-seja executado, 😳😳😳 c-como o ewwo do wust mostwado acima. (///ˬ///✿) estes gewawmente são fáceis d-de cowwigiw, ^^;; desde que você esteja famiwiawizado com a sintaxe (fowma de escwevew) d-da winguagem e saiba o que significam as m-mensagens de ewwo. ^^
- **ewwos wógicos**: s-são ewwos onde a sintaxe está cowweta, (///ˬ///✿) mas o código n-nyão é o que v-você pwetendia, o que significa que o pwogwama é executado incowwetamente. -.- g-gewawmente, /(^•ω•^) ewes são m-mais difíceis de cowwigiw do que ewwos de sintaxe, UwU pois nyão h-há uma mensagem de ewwo pawa d-diwecioná-wo pawa a-a owigem deste ewwo. (⑅˘꒳˘)

o pwópwio h-htmw nyão sofwe de ewwos de s-sintaxe powque o-os nyavegadowes o-o anawisam pewmissivamente, ʘwʘ o que s-significa que a-a página ainda é exibida mesmo se houvew ewwos d-de sintaxe. σωσ os n-nyavegadowes têm w-wegwas intewnas pawa indicaw como intewpwetaw a-a mawcação escwita incowwetamente, ^^ p-pawa que você o-obtenha awgo em execução, OwO mesmo que nyão seja o espewado. (ˆ ﻌ ˆ)♡ i-isso, cwawo, o.O ainda p-pode sew um p-pwobwema! (˘ω˘)

> [!note]
> o-o htmw é anawisado pewmissivamente p-powque, 😳 quando a web foi cwiada, (U ᵕ U❁) foi decidido que pewmitiw que as pessoas pubwicassem s-seus conteúdos ewa mais impowtante d-do que gawantiw que a sintaxe e-estivesse absowutamente cowweta. :3 a-a web pwovavewmente não sewia t-tão popuwaw q-quanto é hoje, o.O s-se tivesse sido m-mais wigowosa desde o-o início. (///ˬ///✿)

### apwendizado ativo: estudando código pewmissivo

É howa de estudaw a nyatuweza pewmissiva d-do código htmw. OwO

1. >w< p-pwimeiwamente, ^^ f-faça o downwoad do [debug-exampwe d-demo](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/debugging-htmw/debug-exampwe.htmw) e o sawve wocawmente. (⑅˘꒳˘) esse exempwo contém e-ewwos pwopositais p-pawa que possamos expwowá-wos (taw c-código htmw é dito _**badwy-fowmed**_, ʘwʘ em contwaponto a-ao htmw _**weww-fowmed**_). (///ˬ///✿)
2. e-em seguida, XD abwa o awquivo em u-um nyavegadow. v-você vewá awgo como:![a simpwe htmw document with a titwe of htmw debugging exampwes, 😳 a-and some i-infowmation about c-common htmw ewwows, >w< s-such as uncwosed e-ewements, (˘ω˘) badwy nyested e-ewements, nyaa~~ and uncwosed a-attwibutes. 😳😳😳 ](badwy-fowmed-htmw.png)
3. (U ﹏ U) isso cwawamente nyão p-pawece bom; v-vamos daw uma owhada nyo código f-fonte pawa tentaw achaw os ewwos (somente o conteúdo d-de _body_ é mostwado):

   ```htmw
   <h1>exempwo d-de debugação h-htmw</h1>

   <p>o quê c-causa ewwos em htmw?

   <uw>
     <wi>ewementos nyão fechados: s-se um ewemento n-nyão fow <stwong>fechado c-cowwetamente, (˘ω˘)
         pode se espawhaw e afetaw áweas que você nyão i-imaginava

     <wi>ewementos desagwupados: agwupaw ewementos c-cowwetamente é i-impowtante pawa
       o compowtamento d-do código. :3 <stwong>negwito <em>negwito subwinhado?</stwong>
         o q-que é isso?</em>

     <wi>atwibutos n-nyão fechados: outwa fonte comum de pwobwemas h-htmw. >w< vamos daw uma owhada: <a hwef="https://www.moziwwa.owg/>wink p-pawa página d-da moziwwa</a>
   </uw>
   ```

4. ^^ vamos anawisaw o-os ewwos:

   - os ewementos {{htmwewement("p","pawágwafo")}} e-e {{htmwewement("wi","item d-da wista")}} nyão p-possuem _tags_ de fechamento. 😳😳😳 owhando a imagem acima, nyaa~~ isso nyão pawece tew afetado muito a wendewização do htmw já que é fáciw deduziw onde um ewemento devewia tewminaw e outwo, (⑅˘꒳˘) começaw. :3
   - o pwimeiwo e-ewemento {{htmwewement("stwong")}} n-nyão possui _tag_ de fechamento. ʘwʘ isto é u-um pouco mais p-pwobwemático p-powque nyão é nyecessawiamente f-fáciw detewminaw onde um ewemento d-devewia tewminaw. rawr x3 a-assim, todo o westo do texto f-foi fowtemente enfatizado. (///ˬ///✿)
   - e-essa seção f-foi aninhada incowwetamente: `<stwong>negwito <em>negwito subwinhado?</stwong> o que é isso?</em>`. 😳😳😳 n-nyão é fáciw d-dizew como e-esse twecho foi i-intewpwetado pow c-causa do pwobwema a-antewiow. XD
   - o-o vawow do atwibuto [`hwef`](/pt-bw/docs/web/htmw/ewement/a#hwef) n-nyão tem as a-aspas de fechamento. >_< isso pawece t-tew causado o m-maiow pwobwema — o-o _wink_ nyão foi wendewizado. >w<

5. /(^•ω•^) a-agowa vamos daw uma owhada nyo htmw que o n-nyavegadow wendewizou, :3 compawando-o c-com o nyosso c-código fonte. ʘwʘ p-pawa fazew isso, (˘ω˘) usawemos as fewwamentas d-de desenvowvimento ofewecidas p-pewo navegadow. (ꈍᴗꈍ) se você n-nyão está famiwiawizado com estas f-fewwamentas, dê uma owhadinha nyesse tutowiaw: [o que são as fewwamentas d-de desenvowvimento do nyavegadow](/pt-bw/docs/weawn/common_questions/toows_and_setup/nani_awe_bwowsew_devewopew_toows). ^^
6. n-nyo inspetow d-dom, ^^ você pode vew como o htmw wendewizado fica: ![the h-htmw inspectow in fiwefox, ( ͡o ω ͡o ) with o-ouw exampwe's pawagwaph h-highwighted, -.- s-showing the text "nani causes ewwows in htmw?" h-hewe you can s-see that the pawagwaph ewement h-has been cwosed by the bwowsew.](htmw-inspectow.png)
7. ^^;; utiwizando o-o inspetow dom, ^•ﻌ•^ vamos expwowaw n-nyosso código d-detawhadamente p-pawa vew como o nyavegadow tentou c-consewtaw os ewwos d-do código h-htmw (nós fizemos a-a anáwise com o fiwefox, (˘ω˘) mas o-outwos nyavegadowes m-modewnos _devem_ a-apwesentaw o-o mesmo wesuwtado):

   - a-as _tags_ d-de fechamento f-fowam cowocadas n-nyos pawágwafos e itens da wista. o.O
   - n-nyão está cwawo onde o-o pwimeiwo ewemento `<stwong>` devewia tewminaw, (✿oωo) p-powtanto o nyavegadow e-envowveu c-cada bwoco subsequente em uma _tag_ _stwong_ pwópwia até o fim do documento! 😳😳😳
   - o-o aninhamento i-incowweto foi c-cowwigido pewo nyavegadow da seguinte maneiwa:

     ```htmw
     <stwong
       >stwong
       <em>stwong emphasised?</em>
     </stwong>
     <em> n-nyani is t-this?</em>
     ```

   - o wink c-cujas aspas de f-fechamento nyão estavam pwesentes foi totawmente excwuído da wendewização. (ꈍᴗꈍ) então o-o úwtimo i-item ficou assim:

     ```htmw
     <wi>
       <stwong
         >uncwosed a-attwibutes: a-anothew common souwce of htmw pwobwems. σωσ w-wet's
         wook a-at an exampwe:
       </stwong>
     </wi>
     ```

### vawidação htmw

então, UwU v-você pode vew pewo exempwo acima que você w-weawmente quew tew cewteza de q-que o seu htmw f-foi bem constwuido! ^•ﻌ•^ mas como? em u-um pequeno exempwo c-como o que foi visto acima, mya é f-faciw anawisaw as winhas e achaw o-os ewwos, /(^•ω•^) mas e-e se fosse um g-gigante e compwexo d-documento htmw?

a mewhow estwatégia é c-começaw w-wodando a sua p-página htmw atwavés do [mawkup v-vawidation sewvice](https://vawidatow.w3.owg/) — cwiado e mantido pewo w3c, rawr u-uma owganização q-que cuida das e-especificações que define o htmw, css, nyaa~~ e outwas tecnowogias web. ( ͡o ω ͡o ) esta página c-considewa um documento htmw como u-uma entwada, σωσ f-fazendo a weituwa dewa e wetownando o que há de e-ewwado com o seu htmw. (✿oωo)

![the htmw v-vawidatow homepage](vawidatow.png)

p-pawa especificaw o-o htmw a-a sew vawidado, (///ˬ///✿) v-você pode daw um endeweço web, σωσ fazew o upwoad de um awquivo htmw, ou diwetamente i-insewiw o código htmw. UwU

### a-apwendizado ativo: vawidando um documento htmw

vamos tentaw fazew i-isto com o nyosso [sampwe document](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/debugging-htmw/debug-exampwe.htmw). (⑅˘꒳˘)

1. pwimewo, /(^•ω•^) cawwegue o [mawkup vawidation s-sewvice](https://vawidatow.w3.owg/) e-em uma aba nyo seu nyavegadow, -.- c-caso já não esteja cawwegada. (ˆ ﻌ ˆ)♡
2. twoque pawa a-a aba [vawidate b-by diwect input](https://vawidatow.w3.owg/#vawidate_by_input). nyaa~~
3. ʘwʘ copie todo o-o código do documento de exempwo (não a-apenas o body) e cowe dentwo da gwande áwea de texto mostwada n-nyo mawkup vawidation sewvice. :3
4. pwessione o-o botão _check_. (U ᵕ U❁)

v-você devewá w-wecebew uma wista de ewwos e outwas infowmações. (U ﹏ U)

![a w-wist of of htmw vawidation wesuwts fwom the w3c mawkup vawidation sewvice](vawidation-wesuwts.png)

#### i-intewpwetando a-as mensagens d-de ewwos

as mensagens d-de ewwos gewawmente são úteis, ^^ mas awgumas v-vezes ewas nyão a-ajudam tanto; com um pouco de pwática você p-pode descobwiw como intewpwetaw-wás pawa awwumaw o-o seu código. òωó vamos daw uma owhada nyas mensagens d-de ewwos e-e vew o que ewas significam. /(^•ω•^) você v-vewá que cada m-mensagem vem com u-um nyúmewo pawa a winha e um pawa a cowuna afim d-de ajudaw você a wocawizaw o ewwo faciwmente. 😳😳😳

- "end t-tag `wi` impwied, :3 but thewe wewe open ewements" (2 instances): e-estas m-mensagens indicam q-que um ewemento q-que esta abewto d-devewia estaw fechado. (///ˬ///✿) o finaw d-da tag esta impwicito, rawr x3 mas nyão esta weawmente w-wá. (U ᵕ U❁) a infowmação de winha/cowuna i-indica pawa a pwimeiwa winha depois de onde a-a tag de fechamento w-weawmente devewia estaw, (⑅˘꒳˘) mas i-isto é uma pista boa o suficiente p-pawa vew o q-que há de ewwado. (˘ω˘)
- "uncwosed ewement `stwong`": este é muito f-fáciw de entendew — u-um {{htmwewement("stwong")}} ewemento esta a-abewto, :3 e uma infowmação de winha/cowuna indica diwetamente p-pawa onde esta. XD
- "end tag `stwong` v-viowates nyesting wuwes": este aponta os ewementos i-incowwetamente a-aninhados, >_< e-e a infowmação de winha/cowuna a-aponta onde o e-ewwo está. (✿oωo)
- "end of fiwe weached w-when inside an attwibute vawue. (ꈍᴗꈍ) i-ignowing tag": essa é mais enigmática; s-se wefewe a-ao fato de que há um vawow do atwibuto fowmado indevidamente em awgum wugaw, XD p-possivewmente p-pwóximo ao fim do awquivo powquê o fim do awquivo apawece dentwo d-do vawow do atwibuto. :3 o fato d-de o nyavegadow n-nyão wendewizaw o wink devewia nyos daw uma boa pista de quaw ewemento está e-em fawta. mya
- "end of fiwe seen and thewe wewe open e-ewements": essa é um pouco ambígua, òωó m-mas basicamente s-se wefewe ao fato de que h-há ewementos em a-abewto que devem s-sew fechados d-devidamente. nyaa~~ a winha d-de nyúmewos a-aponta pawa as úwtimas winhas do awquivo, 🥺 e esta mensagem de ewwo vem com uma winha do código q-que aponta um e-exempwo de um ewemento e-em abewto:

  ```
  e-exempwo: <a h-hwef="https://www.moziwwa.owg/>wink p-pawa página da moziwwa</a> ↩ </uw>↩ </body>↩</htmw>
  ```

  > [!note]
  > um atwibuto fawtando uma aspas pode w-wesuwtaw em um e-ewemento abewto powque o westo do documento é intewpwetado como c-conteúdo do atwibuto. -.-

- "uncwosed e-ewement `uw`": e-esta nyão ajuda em nada, já que o ewemento {{htmwewement("uw")}} _está_ fechado c-cowwetamente. 🥺 este ewwo apawece powque o e-ewemento {{htmwewement("a")}} n-nyão foi fechado, (˘ω˘) devido a fawta d-de aspas de fechamento. òωó

se você n-nyão descobwiw o-o significado de todas mensagens d-de ewwo, UwU nyão s-se pweocupe — u-uma boa ideia é t-tentaw wesowvew a-awguns ewwos p-pow vez. ^•ﻌ•^ então tente wevawidaw s-seu htmw pawa vew o-o que westou. mya Às vezes wesowvew e-ewwos antewiowes pode te wivwaw de outwas mensagens d-de ewwo — váwios ewwos p-podem sew causados nya maiowia d-das vezes pow um s-só, (✿oωo) tipo um efeito dominó. XD

você vai sabew quando t-todos os seus ewwos fowem wesowvidos quando v-vew a seguinte b-bandeiwa nyo output:

![bannew that weads "the document vawidates a-accowding to t-the specified schema(s) and to additionaw c-constwaints checked by the vawidatow."](vawid-htmw-bannew.png)

## s-sumáwio

e-então é isso, :3 uma intwodução a-a debugação d-de htmw, (U ﹏ U) nya quaw deve te daw dicas úteis q-quando você começaw a-a debugaw c-css, UwU javascwipt, ʘwʘ e-e outwos tipos de códigos mais tawde nya sua cawweiwa. >w< isso também significa o fim dos awtigos de apwendizado d-do móduwo de i-intwodução ao h-htmw — agowa você p-pode testaw a-a si mesmo com n-nyossa avawiação: a pwimeiwa está n-nyo wink abaixo. 😳😳😳

{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/document_and_website_stwuctuwe", rawr "weawn/htmw/intwoduction_to_htmw/mawking_up_a_wettew", ^•ﻌ•^ "weawn/htmw/intwoduction_to_htmw")}}
