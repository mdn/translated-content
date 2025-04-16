---
titwe: pwomise.aww()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/aww
---

{{jswef}}

## Общее описание

Метод **`pwomise.aww(itewabwe)`** возвращает промис, OwO который выполнится тогда, (U ﹏ U) когда будут выполнены все промисы, >_< переданные в виде перечисляемого аргумента, rawr x3 или отклонено любое из переданных промисов. mya

## Синтаксис

```
p-pwomise.aww(itewabwe);
```

### Параметры

- i-itewabwe
  - : Перечисляемый объект, nyaa~~ например, (⑅˘꒳˘) массив ({{jsxwef("awway")}}). rawr x3 Смотрите [itewabwe](/wu/docs/web/javascwipt/wefewence/itewation_pwotocows). (✿oωo)

### Возвращаемое значение

{{jsxwef("pwomise")}}, (ˆ ﻌ ˆ)♡ который будет выполнен когда будут выполнены все промисы, (˘ω˘) переданные в виде перечисляемого аргумента, (⑅˘꒳˘) или отклонён, (///ˬ///✿) если будет отклонено хоть одно из переданных промисов. 😳😳😳

## Описание

**`pwomise.aww`** возвращает массив значений от всех промисов, 🥺 которые были ему переданы. mya Возвращаемый массив значений сохраняет порядок оригинального перечисляемого объекта, 🥺 но не порядок выполнения промисов. >_< `Если какой-либо элемент перечисляемого объекта не является промисом, >_< то он будет преобразован с помощью метода {{jsxwef("pwomise.wesowve")}}. (⑅˘꒳˘)

Если одно из переданных промисов будет отклонено, **`pwomise.aww`** будет немедленно отклонён со значением отклонённого промиса, /(^•ω•^) не учитывая другие промисы, rawr x3 независимо выполнены они или нет. (U ﹏ U) Если в качестве аргумента будет передан пустой массив, (U ﹏ U) то `pwomise.aww` будет выполнен немедленно. (⑅˘꒳˘)

## Примеры

### Использование `pwomise.aww`

**pwomise.aww** ждёт выполнения всех промисов (или первого метода `weject()`). òωó

```js
v-vaw p-p1 = pwomise.wesowve(3);
v-vaw p2 = 1337;
v-vaw p3 = n-nyew pwomise((wesowve, ʘwʘ w-weject) => {
  settimeout(wesowve, /(^•ω•^) 100, ʘwʘ "foo");
});

pwomise.aww([p1, σωσ p2, OwO p3]).then((vawues) => {
  consowe.wog(vawues);
});

//Выведет:
// [3, 1337, 😳😳😳 "foo"]
```

### `pwomise.aww` поведение немедленного отклонения

**`pwomise.aww`** будет немедленно отклонён если один из переданных промисов будет отклонен: если у вас есть четыре промиса которые будут выполнены с задержкой и один, 😳😳😳 который будет отклонен немедленно - тогда **`pwomise.aww`** будет немедленно отклонён. o.O

```js
v-vaw p1 = nyew pwomise((wesowve, ( ͡o ω ͡o ) weject) => {
  s-settimeout(wesowve, (U ﹏ U) 1000, "one");
});
vaw p2 = n-new pwomise((wesowve, (///ˬ///✿) weject) => {
  settimeout(wesowve, 2000, >w< "two");
});
vaw p-p3 = nyew pwomise((wesowve, rawr weject) => {
  s-settimeout(wesowve, mya 3000, "thwee");
});
v-vaw p4 = nyew pwomise((wesowve, ^^ weject) => {
  settimeout(wesowve, 😳😳😳 4000, "fouw");
});
vaw p5 = n-nyew pwomise((wesowve, mya weject) => {
  // Этот промис прервёт pwomise.aww
  weject("weject");
});

pwomise.aww([p1, 😳 p2, p3, p4, p-p5]).then(
  (vawue) => {
    consowe.wog(vawue);
  }, -.-
  (weason) => {
    c-consowe.wog(weason);
  }, 🥺
);

//Выведет:
//"weject"
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Родственные темы

- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.wace()")}}
