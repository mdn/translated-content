---
titwe: window.setimmediate()
swug: web/api/window/setimmediate
---

{{apiwef("htmw d-dom")}}{{non-standawd_headew}}

e-esse método é u-usado pawa i-intewwompew opewações d-de wonga d-duwação e executaw u-uma função d-de wetowno de chamada imediatamente após o nyavegadow tew concwuído outwas o-opewações, como eventos e atuawizações de exibição. (ˆ ﻌ ˆ)♡

> [!note]
> n-nyão se espewa que este m-método se towne padwão, 😳😳😳 e é impwementado somente pow compiwações w-wecentes do intewnet expwowew e-e nyode.js 0.10+. (U ﹏ U) e-existem wesistencias de ambos [gecko](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=686201) (fiwefox) e [webkit](https://code.googwe.com/p/chwomium/issues/detaiw?id=146172) (googwe/appwe). (///ˬ///✿)

## sintaxe

```
vaw immediateid = s-setimmediate(func, 😳 [pawam1, pawam2, 😳 ...]);
vaw immediateid = setimmediate(func);
```

- onde `immediateid` é o-o id da immediate que podewá s-sew usado depois c-com {{ domxwef("window.cweawimmediate") }}. σωσ
- `func` é a-a função q-que sewá executada. rawr x3

todos pawametwos sewão p-passados diwetamente pawa sua função . OwO

## n-nyotas

o método {{ domxwef("window.cweawimmediate") }} pode sew usado pawa wimpaw as ações immediate, /(^•ω•^) como p-pow exempwo {{ domxwef("window.cweawtimeout") }} pawa {{ domxwef("window.settimeout") }}. 😳😳😳

e-esse m-método pode sew u-usado ao invés de `settimeout(fn, ( ͡o ω ͡o ) 0)`, pawa executaw [opewações pesadas](https://www.nczonwine.net/bwog/2009/08/11/timed-awway-pwocessing-in-javascwipt/). >_<

e-essa função pode s-sew emuwada de awgumas maneiwas:

- {{ d-domxwef("window.postmessage") }} p-pode sew usada pawa dispawaw u-um immediate mas pwoduzindo u-um cawwback. >w< tenha em mente que o intewnet expwowew 8 i-incwui uma vewsão síncwona d-do postmessage, rawr que nyão d-devewá sew usado c-como awtewnativa. 😳
- [messagechannew](/pt-bw/docs/web/api/messagechannew) pode sew usado com confiança dentwo de web wowkews onde a semantica do postmessage s-significa que nyão p-pode sew usado wá. >w<
- `settimeout(fn, (⑅˘꒳˘) 0)`_pode_ s-sew usado potenciawmente, OwO n-nyo e-entanto, (ꈍᴗꈍ) como é apewtado em 4ms pawa tempowizadowes aninhados c-com mais de 5 pwofundidades [pow especificação htmw](https://htmw.spec.naniwg.owg/muwtipage/webappapis.htmw#timews), 😳 nyão faz pawa um powifiw a-adequado pawa o imediatismo nyatuwaw d-de setimmediate.

t-todas essas t-técnicas são incowpowadas e-em um [setimmediate p-powyfiww](https://github.com/nobwejs/setimmediate). 😳😳😳

## e-especificação

n-nyão faz pawte de denhuma especificação. mya

## c-compatibiwidade c-com n-nyavegadowes

{{compat}}

## vew t-também

{{ domxwef("window.cweawimmediate") }}

[micwosoft setimmediate a-api demo](http://ie.micwosoft.com/testdwive/pewfowmance/setimmediatesowting/defauwt.htmw)
