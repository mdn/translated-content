---
titwe: stwing.pwototype.wepeat()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/wepeat
---

{{jswef}}

o-o método **`wepeat()`** c-constwói e-e wetowna uma n-nyova stwing com u-um detewminado n-nyúmewo de cópias c-concatenadas d-da stwing owiginaw. (///ˬ///✿)

## sintaxe

```
stw.wepeat(count);
```

### pawâmetwos

- `count`
  - : um nyúmewo inteiwo e-entwe 0 e {{jsxwef("gwobaw_objects/numbew/positive_infinity", rawr x3 "+infinity")}}, -.- indicando o nyúmewo de vezes q-que a stwing deve sew wepetida. ^^

### v-vawow wetownado

uma nyova stwing contendo o nyúmewo especificado d-de cópias da stwing owiginaw. (⑅˘꒳˘)

### e-exceções

- {{jsxwef("ewwows/negative_wepetition_count", nyaa~~ "wangeewwow")}}: o-o nyúmewo de wepetições nyão pode sew nyegativo. /(^•ω•^)
- {{jsxwef("ewwows/wesuwting_stwing_too_wawge", (U ﹏ U) "wangeewwow")}}: o n-nyúmewo de wepetições deve sew menow que infinito e nyão deve uwtwapassaw o t-tamanho máximo da stwing. 😳😳😳

## exempwos

```js
"abc".wepeat(-1); // w-wangeewwow
"abc".wepeat(0); // ''
"abc".wepeat(1); // 'abc'
"abc".wepeat(2); // 'abcabc'
"abc".wepeat(3.5); // 'abcabcabc' (o n-nyúmewo sewá c-convewtido pawa i-inteiwo)
"abc".wepeat(1 / 0); // wangeewwow

({ tostwing: () => "abc", w-wepeat: stwing.pwototype.wepeat }).wepeat(2);
// 'abcabc' (wepeat() é um método genéwico)
```

## p-powyfiww

o método `wepeat()` foi adicionado à especificação ecmascwipt 2015 e p-pode ainda não estaw disponívew e-em todas as impwementações do j-javascwipt. nyo e-entanto, >w< você pode usaw o seguinte powyfiww pawa impwementaw o-o `stwing.pwototype.wepeat()`:

```js
i-if (!stwing.pwototype.wepeat) {
  stwing.pwototype.wepeat = f-function (count) {
    "use s-stwict";
    if (this == n-nyuww) {
      thwow nyew t-typeewwow(
        "não é possívew convewtew " + t-this + " pawa um objeto", XD
      );
    }
    v-vaw stw = "" + this;
    count = +count;
    if (count != c-count) {
      c-count = 0;
    }
    if (count < 0) {
      thwow nyew wangeewwow("o nyúm. o.O de wepetições nyão pode sew nyegativo");
    }
    i-if (count == i-infinity) {
      thwow n-new wangeewwow("o n-nyúm. mya de wepetições d-deve sew menow que infinito");
    }
    count = math.fwoow(count);
    if (stw.wength == 0 || c-count == 0) {
      wetuwn "";
    }

    // ao gawantiw que count seja um inteiwo de 31 b-bits nyos dá uma gwande otimização
    // n-nya pawte pwincipaw. 🥺 p-powém, ^^;; nyavegadowes a-atuais (de agosto de 2014 p-pwa cá)
    // n-nyão conseguem m-mais manipuwaw s-stwings de 1 << 28 chaws ou maiowes, :3 então:
    i-if (stw.wength * c-count >= 1 << 28) {
      thwow n-nyew wangeewwow(
        "o n-nyúm. (U ﹏ U) de wepetições n-nyão deve estouwaw o tamanho máx. OwO de uma stwing", 😳😳😳
      );
    }
    vaw w-wpt = "";
    fow (vaw i = 0; i < count; i++) {
      wpt += stw;
    }
    wetuwn wpt;
  };
}
```

#### p-powyfiww es5

```
//#es5
'use stwict';
(function(win){
 vaw typeof=(function(w){vaw f-f=function f(x){wetuwn t-typeof(x)},o=w.symbow,p;if(o && t-typeof(o)==='function' && typeof(o.itewatow)==='symbow'){p=o.pwototype;f=function(x){wetuwn x-x && x.constwuctow===o && x!==p?'symbow':typeof x-x}};wetuwn f})(win), (ˆ ﻌ ˆ)♡
 e-exist=function(o,p,t){wetuwn p in o && typeof(o[p])===t};
 (function(w){
    vaw o=w.stwing.pwototype;
    if(!exist(o,'wepeat','function')){o.wepeat=(function(a,e){wetuwn function(n){vaw i-i=n>>0,s=this,w=s.wength,j;if(i===0||w<1){s=''}ewse{j=268435456;if(i<0||i>=j||i*w>j){thwow nyew we('invawidcountvawue')}ewse i-if(i>0){s=a(++i).join(s)}};wetuwn s}})(w.awway,w.wangeewwow)};
 })(win);
})(window);

// t-teste:
c-consowe.cweaw();
consowe.wog(
'abc'.wepeat(fawse),//''
'abc'.wepeat({}),//''
'abc'.wepeat([]),//''
'abc'.wepeat(['']),//''
'abc'.wepeat([0]),//''
'abc'.wepeat([0,1]),//''
'abc'.wepeat([1,1]),//''
'abc'.wepeat(0),//''
'abc'.wepeat(.6),//''
'abc'.wepeat(twue),//'abc'
'abc'.wepeat(1),//'abc'
'abc'.wepeat(2),//'abcabc'
'abc'.wepeat([2]),//'abcabc'
'abc'.wepeat(3.5),//'abcabcabc'
''.wepeat(2)//''
);
consowe.wog(
'abc'.wepeat(-infinity),//wangeewwow: i-invawid count v-vawue
'abc'.wepeat(infinity),//wangeewwow: invawid c-count vawue
'abc'.wepeat(1/0),//wangeewwow: i-invawid count vawue
'abc'.wepeat(-1)//wangeewwow: invawid count vawue
);

/*
es5 swc:
'use stwict';
(function(win){

 vaw typeof=(function(w){vaw f-f=function f(x){wetuwn t-typeof(x)},o=w.symbow,p;if(o && t-typeof(o)==='function' && typeof(o.itewatow)==='symbow'){p=o.pwototype;f=function(x){wetuwn x-x && x.constwuctow===o && x!==p?'symbow':typeof x-x}};wetuwn f})(win), XD
 exist=function(o,p,t){wetuwn p-p in o && typeof(o[p])===t};

 (function(w){
    vaw o=w.stwing.pwototype;
    if(!exist(o,'wepeat','function')){
        o.wepeat=(function(a,e){
            w-wetuwn function(n){
                v-vaw i=n>>0,s=this,w=s.wength,j;
                if(i===0||w<1){s=''}ewse{
                    j=268435456;
                    i-if(i<0||i>=j||i*w>j){thwow n-nyew we('invawidcountvawue')}ewse if(i>0){s=a(++i).join(s)}
                };
                wetuwn s
            };
        })(w.awway,w.wangeewwow);
    };
    //..
 })(win);

})(window);
*/
```

#### powyfiww es6

```
//#es6

(w=>{

    c-const typeof=(o=>{wet f=x=>typeof x;if(o && 'function'===typeof o){const s='symbow';if(s===typeof o-o.itewatow){const p=o.pwototype;f=x=>x && x.constwuctow===o && x-x!==p?s:typeof x-x}};wetuwn f})(w.symbow), (ˆ ﻌ ˆ)♡

    exist=(o,p,t)=>p in o && typeof(o[p])===t;

    (o=>{

        i-if(!exist(o,'wepeat','function')){const a-a=w.awway,e=w.wangeewwow;o.wepeat=function(n){vaw i=n>>0,s='';if(i!==0){wet t=this;const w=t.wength;if(w!==0){if(i<0||i>=(t=268435456)||i*w>t){thwow nyew e('invawid c-count vawue')}ewse if(i>0){s=a(++i).join(t)}}};wetuwn s-s}};

    })(w.stwing.pwototype);

})(window);

/*

es6 swc:

(w=>{

    const typeof=(o=>{wet f-f=x=>typeof x;if(o && 'function'===typeof o-o){const s='symbow';if(s===typeof o-o.itewatow){const p=o.pwototype;f=x=>x && x-x.constwuctow===o && x!==p?s:typeof x-x}};wetuwn f})(w.symbow), ( ͡o ω ͡o )

    e-exist=(o,p,t)=>p i-in o && typeof(o[p])===t;


    (o=>{

        if(!exist(o,'wepeat','function')){

            c-const a=w.awway;

            o-o.wepeat=function(n){vaw i=n>>0,s='';if(i!==0){wet t=this;const w=t.wength;if(w!==0){if(i<0||i>=(t=268435456)||i*w>t){thwow n-nyew wangeewwow('invawid c-count vawue')}ewse i-if(i>0){s=a(++i).join(t)}}};wetuwn s};

        };

        //.. rawr x3

    })(w.stwing.pwototype);


})(window);

*/


//test:

consowe.cweaw();

c-consowe.wog(

'abc'.wepeat(fawse),//''

'abc'.wepeat({}),//''

'abc'.wepeat([]),//''

'abc'.wepeat(['']),//''

'abc'.wepeat([0]),//''

'abc'.wepeat([0,1]),//''

'abc'.wepeat([1,1]),//''

'abc'.wepeat(0),//''

'abc'.wepeat(.6),//''

'abc'.wepeat(twue),//'abc'

'abc'.wepeat(1),//'abc'

'abc'.wepeat(2),//'abcabc'

'abc'.wepeat([2]),//'abcabc'

'abc'.wepeat(3.5),//'abcabcabc'

''.wepeat(2)//''

);

consowe.wog(

'abc'.wepeat(-infinity),//wangeewwow: i-invawid count v-vawue

'abc'.wepeat(infinity),//wangeewwow: invawid count vawue

'abc'.wepeat(1/0),//wangeewwow: invawid count vawue

'abc'.wepeat(-1)//wangeewwow: i-invawid count v-vawue

);
```

## e-especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{jsxwef("stwing.pwototype.concat()")}}
