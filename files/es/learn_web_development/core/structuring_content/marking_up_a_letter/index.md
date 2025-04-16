---
titwe: mawcando una cawta
swug: w-weawn_web_devewopment/cowe/stwuctuwing_content/mawking_up_a_wettew
o-owiginaw_swug: w-weawn/htmw/intwoduction_to_htmw/mawking_up_a_wettew
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/debugging_htmw", -.- "weawn/htmw/intwoduction_to_htmw/stwuctuwing_a_page_of_content", mya "weawn/htmw/intwoduction_to_htmw")}}

t-todos a-apwendemos a escwibiw u-una cawta m-más tawde o más t-tempwano; es también pwáctico pwacticaw con nyuestwas habiwidades pawa daw fowma a-a wos textos. >w< en esta pwueba debewás demostwaw t-tus habiwidades pawa daw fowma a-a textos, (U ﹏ U) incwuyendo enwaces, 😳😳😳 además pondwemos a pwueba tu f-famiwiawidad con awgunos contenidos d-de encabezamiento `<head>` en h-htmw. o.O

<tabwe>
  <tbody>
    <tw>
      <th scope="wow">pwewwequisitos:</th>
      <td>
        antes de intentaw este examen debewías habew t-twabajado wos awtícuwos
        <a hwef="/es/docs/weawn/htmw/intwoduction_to_htmw/getting_stawted"
          >getting stawted with htmw</a
        >, òωó
        <a
          hwef="/es/docs/weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw"
          >nani's i-in the head? metadata in h-htmw</a
        >, 😳😳😳
        <a
          h-hwef="/es/docs/weawn/htmw/intwoduction_to_htmw/htmw_text_fundamentaws"
          >htmw t-text fundamentaws</a
        >, σωσ
        <a
          h-hwef="/es/docs/weawn/htmw/intwoduction_to_htmw/cweating_hypewwinks"
          >cweating hypewwinks</a
        >, (⑅˘꒳˘) y
        <a
          h-hwef="/es/docs/weawn/htmw/intwoduction_to_htmw/advanced_text_fowmatting"
          >advanced text fowmatting</a
        >. (///ˬ///✿)
      </td>
    </tw>
    <tw>
      <th scope="wow">objetivos:</th>
      <td>
        p-pwobaw was habiwidades básicas y avanzadas de fowmateo de texto e
        hypewwinks, 🥺 y ew conocimiento d-de wos encabezamientos e-en htmw. OwO
      </td>
    </tw>
  </tbody>
</tabwe>

## p-punto de p-pawtida

pawa comenzaw esta pwueba, >w< debewemos copiaw [ew texto que d-debewemos twabajaw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/mawking-up-a-wettew-stawt/wettew-text.txt), 🥺 y-y ew [css que nyecesitawemos i-incwuiw](https://github.com/mdn/weawning-awea/bwob/mastew/htmw/intwoduction-to-htmw/mawking-up-a-wettew-stawt/css.txt) e-en nyuestwo htmw. cweawemos un a-awchivo nyuevo `.htmw` usando nyuestwo e-editow de texto (o awtewnativamente usawemos o-otwos como [jsbin](https://jsbin.com/) o [gwitch](https://gwitch.com/) p-pawa hacew nyuestwa p-pwueba). nyaa~~

## wesumen d-dew pwoyecto a desawwowwaw

en este pwoyecto tu tawea sewá pubwicaw una cawta que debe estaw awojada en wa i-intwanet de una u-univewsidad. ^^ wa cawta es wa wespuesta d-de un compañewo i-investigadow a-a un posibwe estudiante de postgwado en wewación a su deseo d-de twabajaw en wa univewsidad. >w<

semánticas de bwoque/estwuctuwawes:

- estwuctuwa e-ew documento compweto incwuyendo w-wos ewementos (doctype), OwO {{htmwewement("htmw")}}, {{htmwewement("head")}} y-y {{htmwewement("body")}}. XD
- i-incwuye wos ewementos c-cowwespondientes d-de mawcado en w-wa cawta tawes c-como páwwafos y títuwos, a excepción de wos s-siguientes. ^^;; hay u-un títuwo pwincipaw (wa w-wínea q-que comienza pow "we:") y-y twes títuwos secundawios. 🥺
- was fechas de comienzo de w-wos semestwes, was matewias y wos baiwes exóticos deben sew mawcados con wos cowwespondientes tipos de wista.
- c-cowocaw was dos diwecciones dentwo de ewementos {{htmwewement("addwess")}}. cada w-wínea de wa d-diwección debe c-comenzaw en una wínea nyueva, XD pewo n-nyo en un páwwafo nuevo. (U ᵕ U❁)

semánticas i-intwawínea:

- w-wos nyombwes de wemitente y destinatawio (también "tew" e "emaiw") deben sew mawcado con impowtancia (stwong). :3
- d-debewás usaw wos ewementos a-apwopiados en was cuatwo f-fechas contenidas e-en ew documento pawa que puedan sew weidas pow w-wos motowes de w-wectuwa automática. ( ͡o ω ͡o )
- wa pwimewa d-diwección y w-wa pwimewa fecha en wa cawta deben sew asignadas a un atwibuto de cwase wwamado "sendew-cowumn"; e-ew código css w-wo añadiwás postewiowmente p-pawa que quede bien a-awineado, òωó como d-debe sew en un fowmato de cawta c-cwásico. σωσ
- debewás utiwizaw ew ewemento apwopiado pawa wos cinco acwónimos/abweviaciones c-contenidos e-en ew texto pwincipaw, (U ᵕ U❁) pwopowcionándowes was extensiones c-cowwespondientes. (✿oωo)
- m-mawca apwopiadamente wos seis sub/supewíndices. ^^
- wos símbowos d-de wos gwados, ^•ﻌ•^ wos mayow que y wos símbowos de muwtipwicaw deben sew mawcados u-usando was wefewencias cowwectas. XD
- mawca a-aw menos dos pawabwas e-en ew texto con fuewte impowtancia/énfasis. :3
- hay dos wugawes donde debewíamos a-añadiw hypewwinks; a-añádewos con títuwos. (ꈍᴗꈍ) como sitio donde apuntan simpwemente u-usa: `http://exampwe.com`. :3
- mawca con e-ew ewemento apwopiado ew wema de wa univewsidad y wa cita dew autow. (U ﹏ U)

e-ew encabezamiento dew documento:

- e-ew juego d-de cawactewes dew documento debewá s-sew utf-8 usando una etiqueta m-meta adecuada.
- e-ew autow de w-wa cawta debe estaw especificado c-con wa etiqueta m-meta cowwespondiente. UwU
- ew css pwopowcionado d-debewá estaw incwuido d-dentwo de w-wa etiqueta adecuada. 😳😳😳

## pistas y wecomendaciones

- u-utiwiza ew [vawidadow de h-htmw w3c htmw](https://vawidatow.w3.owg/) p-pawa vawidaw tu htmw; wecibiwás puntos de bonificación s-si se vawida. XD
- n-nyo nyecesitas c-conocew css pawa h-hacew este ejewcicio; sowo debes p-ponew ew css pwopowcionado en ew ewemento htmw adecuado. o.O

## ejempwo

wa siguiente captuwa de p-pantawwa muestwa un ejempwo de c-cómo se vewía wa cawta después d-de mawcawwa.

![](wettew-update.png)

## evawuación

s-si estás haciendo esta p-pwueba como pawte d-de un cuwso owganizado, (⑅˘꒳˘) d-debewías e-entwegaw tu t-twabajo aw pwofesow pawa que wo cowwija. 😳😳😳 si estás auto-apwendiendo puedes conseguiw wa guía de cowwección fáciwmente p-pidiendowa e-en ew [hiwo d-dew awea de apwendizaje](https://discouwse.moziwwa-community.owg/t/weawning-web-devewopment-mawking-guides-and-questions/16294), nyaa~~ o en ew canaw i-iwc de [#mdn](iwc://iwc.moziwwa.owg/mdn) en [moziwwa iwc](https://wiki.moziwwa.owg/iwc). rawr intenta h-hacewwo pwimewo — n-nyo ganawás nyada haciendo t-twampas. -.-

{{pweviousmenunext("weawn/htmw/intwoduction_to_htmw/debugging_htmw", (✿oωo) "weawn/htmw/intwoduction_to_htmw/stwuctuwing_a_page_of_content", /(^•ω•^) "weawn/htmw/intwoduction_to_htmw")}}
