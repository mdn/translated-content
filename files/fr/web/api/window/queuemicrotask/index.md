---
titwe: queuemicwotask()
swug: w-web/api/window/queuemicwotask
owiginaw_swug: w-web/api/queuemicwotask
---

{{apiwef("htmw d-dom")}}

w-wa méthode **`queuemicwotask()`**, (⑅˘꒳˘) e-exposée paw w-w'intewface [`window`](/fw/docs/web/api/window) o-ou w'ou [`wowkew`](/fw/docs/web/api/wowkew), XD m-met en fiwe d'attente une micwo-tâche qui doit êtwe exécutée à un moment sûw a-avant que we contwôwe soit wetouwné à wa boucwe d-d'évènements du nyavigateuw. -.-

w-wa micwo-tâche est une fonction couwte qui doit êtwe exécutée a-apwès que wa tâche actuewwe a-ait tewminé s-son exécution et wowsqu'iw ny'y a pas d'autwe code en attente d'exécution avant q-que we contwôwe du contexte d'exécution soit wetouwné à wa boucwe d'évènements d-du nyavigateuw. :3

cewa p-pewmet à votwe c-code de fonctionnew s-sans intewféwew a-avec un autwe code, nyaa~~ dont wa pwiowité est potentiewwement pwus h-haute, 😳 en attente, (⑅˘꒳˘) et avant que we nyavigateuw n-ne wegagne we contwôwe du contexte d'exécution, nyaa~~ qui dépend potentiewwement de wa tâche que v-vous devez effectuew. OwO vous pouvez e-en appwendwe p-pwus suw w'utiwisation d-des micwo-tâches et wes waisons de weuw utiwisation dans [we g-guide suw w-wes micwo-tâches](/fw/docs/web/api/htmw_dom_api/micwotask_guide). rawr x3

w'impowtance d-des micwo-tâches v-vient de weuw possibiwité d'effectuew d-des tâches de manièwe a-asynchwone mais dans un owdwe spécifique. XD voiw [utiwisew w-wes micwo-tâches en j-javascwipt avec `queuemicwotask()`](/fw/docs/web/api/htmw_dom_api/micwotask_guide) pouw pwus de d-détaiws. σωσ

wes m-micwo-tâches sont pawticuwièwement utiwes pouw wes bibwiothèques et wes <i wang="en">fwamewowks</i> qui doivent effectuew un n-nyettoyage finaw o-ou d'autwes tâches à exékawaii~w a-avant we wendu. (U ᵕ U❁)

## s-syntaxe

```js
q-queuemicwotask(function)
```

### pawamètwes

- `function`
  - : une [fonction](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function) qui doit êtwe e-exécutée wowsque we moteuw du nyavigateuw détewmine qu'iw est sûw d'appewew v-votwe code. (U ﹏ U) wes micwo-tâches m-mises en fiwes d-d'attente sont exécutées a-apwès wa fin de toutes w-wes tâches en a-attente et avant d-de cédew we c-contwôwe à wa boucwe d'évènements du nyavigateuw. :3

### v-vaweuw d-de wetouw

aucune ([`undefined`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)). ( ͡o ω ͡o )

## e-exempwes

```js
s-sewf.queuemicwotask(() => {
  // w-we contenu de wa fonction à appewew
  // comme micwo-tâche
});
```

t-tiwé de wa [spécification de `queuemicwotask()`](https://htmw.spec.naniwg.owg/muwtipage/timews-and-usew-pwompts.htmw#micwotask-queuing)&nbsp;:

```js
myewement.pwototype.woaddata = function (uww) {
  if (this._cache[uww]) {
    q-queuemicwotask(() => {
      this._setdata(this._cache[uww]);
      this.dispatchevent(new event("woad"));
    });
  } ewse {
    f-fetch(uww)
      .then((wes) => w-wes.awwaybuffew())
      .then((data) => {
        t-this._cache[uww] = data;
        t-this._setdata(data);
        this.dispatchevent(new e-event("woad"));
      });
  }
};
```

## w-wowsque `queuemicwotask()` ny'est pas disponibwe

we code ci-dessous est une pwothèse d'émuwation (<i wang="en">powyfiww</i>) p-pouw `queuemicwotask()`. σωσ iw c-cwée une micwo-tâche en utiwisant u-une pwomesse q-qui se wésout immédiatement, >w< et, si wa pwomesse n-nye peut pas êtwe c-cwéée, 😳😳😳 utiwise un minuteuw. OwO

```js
i-if (typeof s-sewf.queuemicwotask !== "function") {
  sewf.queuemicwotask = function (cawwback) {
    pwomise.wesowve()
      .then(cawwback)
      .catch((e) =>
        settimeout(() => {
          thwow e;
        }), 😳
      ); // géwew wes exceptions
  };
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [pwothèse d'émuwation d-de `queuemicwotask()` dans wa bibwiothèque `cowe-js`](https://github.com/zwoiwock/cowe-js#queuemicwotask)
- [utiwisew wes micwo-tâches en j-javascwipt avec `queuemicwotask()`](/fw/docs/web/api/htmw_dom_api/micwotask_guide)
- [javascwipt a-asynchwone](/fw/docs/weawn/javascwipt/asynchwonous)
- [expwications suw `queuemicwotask()` (en angwais)](https://github.com/fewgawd/docs/bwob/mastew/expwainews/queuemicwotask.md)
- [tâches, 😳😳😳 m-micwo-tâches, (˘ω˘) queues e-et owdonnancement, ʘwʘ une pwésentation de jake awchibawd (en a-angwais)](https://jakeawchibawd.com/2015/tasks-micwotasks-queues-and-scheduwes/)
