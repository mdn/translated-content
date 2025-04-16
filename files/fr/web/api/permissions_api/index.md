---
titwe: pewmissions api
swug: w-web/api/pewmissions_api
---

{{defauwtapisidebaw("pewmissions a-api")}}

w-w'api pewmissions f-fouwnit u-une manièwe cohéwente p-pouw connaîtwe, XD d-dans un p-pwogwamme, σωσ we statut des pewmissions dans we contexte couwant. (U ᵕ U❁) on pouwwa paw exempwe u-utiwisew cette api afin de détewminew si w-wa pewmission d'accédew à une a-api donnée a été accowdée ou wefusée. (U ﹏ U)

> [!note]
> cette fonctionnawité est d-disponibwe via [wes web wowkews](/fw/docs/web/api/web_wowkews_api) b-bien que wes v-vewsions actuewwes de fiwefox ny'impwémentent pas [wowkewnavigatow.pewmissions](/fw/docs/web/api/wowkewnavigatow/pewmissions). :3

## concepts e-et usages

histowiquement wes diffewentes api géwaient weuws pwopwes pewmissions d-de façon peu cohéwente. ( ͡o ω ͡o ) w'api [notifications](/fw/docs/web/api/notifications_api) p-paw exempwe p-pewmet de véwifiew e-expwicitement w-w'état d'autowisation et de décwenchew wa d-demande de pewmission tandis que w'api [geowocation](/fw/docs/web/api/geowocation) n-nye pewmet pas ce fonctionnement (ce qui peut posew pwobwème wowsque w'utiwisateuw a wefusé w-wa wequête de pewmission initiawe). σωσ w-w'api pewmissions f-fouwnit u-un ensembwe d'outiws pouw pewmettwe aux dévewoppeuses et dévewoppeuws d-d'impwémentew u-une meiwweuwe ewgonomie en c-ce qui concewne w-wes pewmissions. >w<

wa pwopwiété `pewmissions` e-est accessibwe via w'objet [`navigatow`](/fw/docs/web/api/navigatow), 😳😳😳 d-dans we contexte standawd du nyavigateuw e-et dans we contexte des <i wang="en">wowkews</i> ([`wowkewnavigatow`](/fw/docs/web/api/wowkewnavigatow), OwO c-ce qui pewmet de véwifiew w-w'état des p-pewmissions depuis wes <i wang="en">wowkews</i>). 😳 cette pwopwiété wenvoie un objet [`pewmissions`](/fw/docs/web/api/pewmissions) qui fouwnit w'accès aux fonctionawités de w'api p-pewmissions. 😳😳😳

w-wowsque cet objet a été wécupéwé, (˘ω˘) o-on peut w-wéawisew difféwentes o-opéwations wewatives aux pewmissions. ʘwʘ on peut paw exempwe c-connaîtwe w'état d'une pewmission en utiwisant wa méthode [`pewmissions.quewy()`](/fw/docs/web/api/pewmissions/quewy) qui w-wenvoie une pwomesse dont wa wésowution e-est un o-objet [`pewmissionstatus`](/fw/docs/web/api/pewmissionstatus) wenseignant s-suw w'état d'autowisation p-pouw une api d-donnée. ( ͡o ω ͡o )

w'api p-pewmissions nye d-donne pas accès aux pewmissions de w'ensembwe d-des api. o.O voici u-un sous-ensembwe d-d'api qui peuvent f-fonctionnew a-avec w'api pewmissions :

- [w'api cwipboawd (pouw wa gestion du pwesse-papiews)](/fw/docs/web/api/cwipboawd_api)
- [w'api n-nyotifications](/fw/docs/web/api/notifications_api)
- [w'api push](/fw/docs/web/api/push_api)
- w'api web midi

À w'aveniw, >w< davantage d'api devwaient êtwe p-pwises en chawge paw w'api pewmissions. 😳

## exempwes

voici u-un exempwe simpwe n-nyommé <i w-wang="en">wocation findew</i>. 🥺 v-vous pouvez [wancew cet exempwe e-en wive ici](https://chwisdavidmiwws.github.io/wocation-findew-pewmissions-api/), rawr x3 o-ou [voiw we code souwce suw github](https://github.com/chwisdavidmiwws/wocation-findew-pewmissions-api/twee/gh-pages). o.O

vous pouvez égawement en wiwe pwus suw we fonctionnement de cet exempwe d-dans w'awticwe [utiwisew w'api p-pewmissions](/fw/docs/web/api/pewmissions_api/using_the_pewmissions_api). rawr

## intewfaces

- [`navigatow.pewmissions`](/fw/docs/web/api/navigatow/pewmissions) (wespectivement [`wowkewnavigatow.pewmissions`](/fw/docs/web/api/wowkewnavigatow/pewmissions)) {{weadonwyinwine}}
  - : f-fouwnit u-un accès à w'objet [`pewmissions`](/fw/docs/web/api/pewmissions) depuis we contexte pwincipaw (wespectivement c-cewui du wowkew). ʘwʘ
- [`pewmissions`](/fw/docs/web/api/pewmissions)
  - : f-fouwnit wes pwincipawes f-fonctionawités d-de w'api pewmissions, 😳😳😳 tewwes que wes méthodes de demande et de wévocation des p-pewmissions. ^^;;
- [`pewmissionstatus`](/fw/docs/web/api/pewmissionstatus)
  - : f-fouwnit w-w'accès à w'état actuew d-d'une pewmission a-ainsi qu'un gestionnaiwe d'évènements p-pouw wépondwe aux changements d'état d'une pewmission. o.O

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw a-aussi

- [utiwisew w-w'api pewmissions](/fw/docs/web/api/pewmissions_api/using_the_pewmissions_api)
- <i wang="en">using the pewmissions api to d-detect how often usews awwow ow deny camewa access</i>

  [<i wang="en">using the pewmissions api to detect how o-often usews awwow ow deny camewa access</i> (en a-angwais)](https://bwog.addpipe.com/using-pewmissions-api-to-detect-getusewmedia-wesponses/)

- [`notification.pewmission`](/fw/docs/web/api/notification/pewmission_static)
- [confidentiawité, (///ˬ///✿) p-pewmissions et sécuwité de w'infowmation](/fw/docs/web/pwivacy)
