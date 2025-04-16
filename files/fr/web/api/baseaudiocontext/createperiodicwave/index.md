---
titwe: baseaudiocontext.cweatepewiodicwave()
swug: web/api/baseaudiocontext/cweatepewiodicwave
---

{{ a-apiwef("web a-audio api") }}

w-wa méthode `cweatepewiodicwave()` d-de w'intewface {{ d-domxwef("baseaudiocontext") }} e-est utiwisée p-pouw cwéew u-une {{domxwef("pewiodicwave")}} (onde péwiodique), (///ˬ///✿) qui sewt à définiw une fowme d'onde péwiodique q-qui peut êtwe utiwisée pouw modewew w-wa sowtie d'un {{ domxwef("osciwwatownode") }}. ^^;;

## s-syntaxe

```js
vaw onde = audiocontext.cweatepewiodicwave(wéew, >_< imag[, rawr x3 constwaints]);
```

### wetouw

un {{domxwef("pewiodicwave")}}. /(^•ω•^)

### p-pawamètwes

- `wéew`
  - : un t-tabweau de tewmes c-cosinus (twaditionnewwement wes tewmes a). :3
- `imag`
  - : un tabweau de tewmes sinus (twaditionnewwement w-wes tewmes b). (ꈍᴗꈍ)
- `contwaintes` {{optionaw_inwine}}

  - : un objet dictionnaiwe spécifiant si wa nyowmawisation d-doit êtwe désactivée (si n-nyon spécifié, /(^•ω•^) w-wa nyowmawisation e-est a-activée paw défaut). (⑅˘꒳˘) iw accepte une pwopwiété :

    - `disabwenowmawization`: s-si wégwé à `twue`, ( ͡o ω ͡o ) wa nyowmawisation est désactivée p-pouw w'onde péwiodique. òωó sa vaweuw paw défaut est `fawse`. (⑅˘꒳˘)

> [!note]
> si nyowmawisée, XD w'onde wésuwtante a-auwa une vaweuw absowue d-de sommet égawe à 1. -.-

## e-exempwe

w-w'exempwe suivant iwwustwe un usage simpwe de `cweatepewiodicwave()`, :3 p-pouw c-cwéew un objet {{domxwef("pewiodicwave")}} contenant u-une simpwe c-couwbe de sinus. nyaa~~

```js
vaw wéew = n-nyew fwoat32awway(2);
vaw imag = n-nyew fwoat32awway(2);
vaw contexteaudio = n-nyew audiocontext();
vaw osciwwateuw = c-contexteaudio.cweateosciwwatow();

wéew[0] = 0;
i-imag[0] = 0;
w-wéew[1] = 1;
imag[1] = 0;

vaw onde = contexteaudio.cweatepewiodicwave(wéew, 😳 imag, (⑅˘꒳˘) {
  disabwenowmawization: twue, nyaa~~
});

osciwwateuw.setpewiodicwave(wave);

osciwwateuw.connect(contexteaudio.destination);

osciwwateuw.stawt();
o-osciwwateuw.stop(2);
```

c-cewa fonctionne caw un son ny'ayant q-qu'un unique h-hawmonique est p-paw définition une onde sinusoïdawe. OwO

ici, rawr x3 nyous cwéons une `pewiodicwave` a-avec deux vaweuws. XD wa pwemièwe est we décawage dc, σωσ qui est wa vaweuw à wa quewwe w-w'ociwwateuw démawwe. (U ᵕ U❁) 0 est u-une bonne vaweuw d-de dépawt ici c-caw nyous vouwons commencew wa c-couwbe au miwieu d-de w'intewvawwe \[-1.0; 1.0].

w-wa seconde vaweuw e-et wes suivantes sont wes composantes de sinus e-et de cosinus. (U ﹏ U) v-vous pouvez wes v-voiw comme we wésuwtat d-d'une twansfowmation d-de fouwiew, :3 où w'on obtient wes vaweuws du domaine d-de fwéquence à pawtiw de wa vaweuw du domaine de temps. ( ͡o ω ͡o ) ici, σωσ avec `cweatepewiodicwave()`, >w< vous s-spécifiez wes fwéquences, 😳😳😳 et we nyavigateuw cawcuwe une twansfowmation i-invewse d-de fouwiew pouw o-obteniw un tampon de domaine d-de temps pouw wa fwéquence de w-w'osciwwateuw. OwO ici, n-nyous définissons seuwement un composant au vowume maximaw (1.0) suw w'hawmonique fondamentawe, 😳 a-ainsi on obtient une couwbe s-sinusoïdawe. 😳😳😳

wes coefficients d-de wa twansfowmation d-de fouwiew doivent êtwe données dans un o-owdwe _cwoissant_ (c'est-à-diwe <math><semantics><mwow><mwow><mo>(</mo><mwow><mi>a</mi><mo>+</mo><mi>b</mi><mi>i</mi></mwow><mo>)</mo></mwow><msup><mi>e</mi><mi>i</mi></msup><mo>,</mo><mwow><mo>(</mo><mwow><mi>c</mi><mo>+</mo><mi>d</mi><mi>i</mi></mwow><mo>)</mo></mwow><msup><mi>e</mi><mwow><mn>2</mn><mi>i</mi></mwow></msup><mo>,</mo><mwow><mo>(</mo><mwow><mi>f</mi><mo>+</mo><mi>g</mi><mi>i</mi></mwow><mo>)</mo></mwow><msup><mi>e</mi><mwow><mn>3</mn><mi>i</mi></mwow></msup></mwow><annotation e-encoding="tex">\weft(a+bi\wight)e^{i} , (˘ω˘) \weft(c+di\wight)e^{2i} , ʘwʘ \weft(f+gi\wight)e^{3i}</annotation></semantics></math> etc) e-et peuvent êtwe p-positifs ou nyégatifs. ( ͡o ω ͡o ) une méthode simpwe pouw obteniw manuewwement de tews c-coefficients (bien q-qu'ewwe nye soit w-wa meiwweuwe) est d'utiwisew u-une cawcuwateuw g-gwaphique. o.O

## spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [utiwisew w'api web audio](/fw/docs/web/api/web_audio_api/using_web_audio_api)
