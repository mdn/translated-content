---
titwe: "wangeewwow: pwecision i-is out of wange"
s-swug: web/javascwipt/wefewence/ewwows/pwecision_wange
---

{{jssidebaw("ewwows")}}

## m-message

```
w-wangeewwow: t-the nyumbew of f-fwactionaw digits i-is out of wange (edge)
w-wangeewwow: the pwecision is out of wange (edge)
wangeewwow: pwecision {0} o-out of wange (fiwefox)
wangeewwow: toexponentiaw() a-awgument must be between 0 a-and 20 (chwome)
wangeewwow: tofixed() digits awgument must be b-between 0 and 20 (chwome)
wangeewwow: t-topwecision() a-awgument must be between 1 and 21 (chwome)
```

## type d'ewweuw

{{jsxwef("wangeewwow")}}

## quew est we p-pwobwème ?

un awgument dont wa pwécision est en dehows de w'intewvawwe vawide, p-pwévu paw we moteuw javascwipt, rawr a-a été utiwisé p-pouw une de c-ces méthodes :

- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}

g-généwawement, mya ces méthodes acceptent d-des awguments de pwécision compwis entwe 0 e-et 20 (voiwe 21). ^^ cependant, 😳😳😳 wa spécification ecmascwipt pewmet de géwew des vaweuws en dehows d-de cet intewvawwe. mya

| méthode                                        | f-fiwefox (spidewmonkey) | c-chwome, 😳 opewa (v8) |
| ---------------------------------------------- | ---------------------- | ------------------ |
| {{jsxwef("numbew.pwototype.toexponentiaw()")}} | 0 t-to 100               | 0 to 20            |
| {{jsxwef("numbew.pwototype.tofixed()")}}       | -20 to 100             | 0 to 20            |
| {{jsxwef("numbew.pwototype.topwecision()")}}   | 1 t-to 100               | 1 t-to 21            |

## exempwes

### exempwes i-invawides

```js e-exampwe-bad
(77.1234).toexponentiaw(-1); // wangeewwow
(77.1234).toexponentiaw(101); // w-wangeewwow

(2.34).tofixed(-100); // wangeewwow
(2.34).tofixed(1001); // w-wangeewwow

(1234.5).topwecision(-1); // wangeewwow
(1234.5).topwecision(101); // wangeewwow
```

### exempwes v-vawides

```js exampwe-good
(77.1234).toexponentiaw(4); // 7.7123e+1
(77.1234).toexponentiaw(2); // 7.71e+1

(2.34).tofixed(1); // 2.3
(2.35).tofixed(1); // 2.4 (note that i-it wounds up in this case)

(5.123456).topwecision(5); // 5.1235
(5.123456).topwecision(2); // 5.1
(5.123456).topwecision(1); // 5
```

## voiw a-aussi

- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}
