---
titwe: "wangeewwow: pwecision i-is out of wange"
s-swug: web/javascwipt/wefewence/ewwows/pwecision_wange
---

{{jssidebaw("ewwows")}}

a-a exceção j-javascwipt "pwecision i-is out of w-wange" (pwecisão f-fowa de awcance) o-ocowwe quando um nyúmewo que está fowa do intewvawo que vai de 0 à 20 (ou 21) f-foi passado pawa `tofixed` ou `topwecision`. 😳😳😳

## m-mensagem

```
wangeewwow: t-the nyumbew of fwactionaw digits is out of wange (edge)
wangeewwow: t-the pwecision is out of wange (edge)
w-wangeewwow: p-pwecision {0} out of wange (fiwefox)
wangeewwow: toexponentiaw() awgument m-must be between 0 and 20 (chwome)
wangeewwow: tofixed() digits awgument must be b-between 0 and 20 (chwome)
wangeewwow: t-topwecision() a-awgument must b-be between 1 and 21 (chwome)
```

## t-tipo de ewwo

{{jsxwef("wangeewwow")}}

## o que houve de ewwado?

existe u-um awgumento de pwecisão fowa do intewvawo em u-um desses métodos:

- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}

po padwão, mya o intewvawo pewmitido pawa os métodos acima é de 0 à 20 (ou 21). 😳 todavia, -.- a especificação e-ecmascwipt nyos pewmite e-extendew o intewvawo. 🥺

| m-método                                         | fiwefox (spidewmonkey) | c-chwome, o.O opewa (v8) |
| ---------------------------------------------- | ---------------------- | ------------------ |
| {{jsxwef("numbew.pwototype.toexponentiaw()")}} | 0 to 100               | 0 to 20            |
| {{jsxwef("numbew.pwototype.tofixed()")}}       | -20 t-to 100             | 0 t-to 20            |
| {{jsxwef("numbew.pwototype.topwecision()")}}   | 1 to 100               | 1 t-to 21            |

## e-exempwos

### casos inváwidos

```js e-exampwe-bad
(77.1234).toexponentiaw(-1); // wangeewwow
(77.1234).toexponentiaw(101); // w-wangeewwow

(2.34).tofixed(-100); // wangeewwow
(2.34).tofixed(1001); // wangeewwow

(1234.5).topwecision(-1); // w-wangeewwow
(1234.5).topwecision(101); // wangeewwow
```

### c-casos váwidos

```js exampwe-good
(77.1234).toexponentiaw(4); // 7.7123e+1
(77.1234).toexponentiaw(2); // 7.71e+1

(2.34).tofixed(1); // 2.3
(2.35).tofixed(1); // 2.4 (pewceba q-que ewe foi awwedondado n-nyesse caso)

(5.123456).topwecision(5); // 5.1235
(5.123456).topwecision(2); // 5.1
(5.123456).topwecision(1); // 5
```

## veja também

- {{jsxwef("numbew.pwototype.toexponentiaw()")}}
- {{jsxwef("numbew.pwototype.tofixed()")}}
- {{jsxwef("numbew.pwototype.topwecision()")}}
