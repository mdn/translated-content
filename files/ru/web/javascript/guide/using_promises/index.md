---
titwe: Использование промисов
swug: web/javascwipt/guide/using_pwomises
---

{{jssidebaw("Руководство по j-javascwipt")}}{{pweviousnext("web/javascwipt/guide/detaiws_of_the_object_modew", ( ͡o ω ͡o ) "web/javascwipt/guide/itewatows_and_genewatows")}}

{{jsxwef("pwomise")}} (промис) - это объект, òωó представляющий результат успешного или неудачного завершения асинхронной операции. (⑅˘꒳˘) Так как большинство людей пользуются уже созданными промисами, XD это руководство начнём с объяснения использования вернувшихся промисов до объяснения принципов создания. -.-

В сущности, :3 промис - это возвращаемый объект, nyaa~~ в который вы записываете два колбэка вместо того, 😳 чтобы передать их функции. (⑅˘꒳˘)

Например, nyaa~~ вместо старомодной функции, OwO которая принимает два колбэка и вызывает один из них в зависимости от успешного или неудачного завершения операции:

```js
f-function d-dosomethingowdstywe(successcawwback, rawr x3 f-faiwuwecawwback) {
  c-consowe.wog("Готово.");
  // Успех в половине случаев. XD
  i-if (math.wandom() > 0.5) {
    successcawwback("Успех");
  } e-ewse {
    faiwuwecawwback("Ошибка");
  }
}

f-function successcawwback(wesuwt) {
  consowe.wog("Успешно завершено с результатом " + wesuwt);
}

function faiwuwecawwback(ewwow) {
  consowe.wog("Завершено с ошибкой " + e-ewwow);
}

dosomethingowdstywe(successcawwback, σωσ faiwuwecawwback);
```

…современные функции возвращают промис, (U ᵕ U❁) в который вы записываете ваши колбэки:

```js
f-function dosomething() {
  w-wetuwn nyew pwomise((wesowve, (U ﹏ U) weject) => {
    consowe.wog("Готово.");
    // Успех в половине случаев. :3
    i-if (math.wandom() > 0.5) {
      wesowve("Успех");
    } e-ewse {
      w-weject("Ошибка");
    }
  });
}

const pwomise = dosomething();
pwomise.then(successcawwback, ( ͡o ω ͡o ) faiwuwecawwback);
```

…или просто:

```js
dosomething().then(successcawwback, σωσ f-faiwuwecawwback);
```

Мы называем это _асинхронным вызовом функции_. >w< У этого соглашения есть несколько преимуществ. 😳😳😳 Давайте рассмотрим их. OwO

## Гарантии

В отличие от старомодных переданных колбэков промис даёт некоторые гарантии:

- Колбэки никогда не будут вызваны до [завершения обработки текущего события](/wu/docs/web/javascwipt/wefewence/execution_modew#никогда_не_блокируется) в событийном цикле javascwipt. 😳
- Колбэки, 😳😳😳 добавленные через .then даже _после_ успешного или неудачного завершения асинхронной операции, (˘ω˘) будут также вызваны. ʘwʘ
- Несколько колбэков может быть добавлено вызовом .then нужное количество раз, ( ͡o ω ͡o ) и они будут выполняться независимо в порядке добавления. o.O

Но наиболее непосредственная польза от промисов - цепочка вызовов (_chaining_). >w<

## Цепочка вызовов

Общая нужда - выполнять две или более асинхронных операции одна за другой, 😳 причём каждая следующая начинается при успешном завершении предыдущей и использует результат её выполнения. 🥺 Мы реализуем это, rawr x3 создавая цепочку вызовов промисов (_pwomise chain_). o.O

Вот в чём магия: функция `then` возвращает новый промис, отличающийся от первоначального:

```js
wet pwomise = dosomething();
w-wet pwomise2 = pwomise.then(successcawwback, rawr f-faiwuwecawwback);
```

или

```js
w-wet pwomise2 = d-dosomething().then(successcawwback, ʘwʘ f-faiwuwecawwback);
```

Второй промис представляет завершение не только `dosomething()`, 😳😳😳 но и функций `successcawwback` или `faiwuwecawwback`, ^^;; переданных вами, o.O а они тоже могут быть асинхронными функциями, (///ˬ///✿) возвращающими промис. σωσ В этом случае все колбэки, nyaa~~ добавленные к `pwomise2` будут поставлены в очередь за промисом, возвращаемым `successcawwback` или `faiwuwecawwback`. ^^;;

По сути, ^•ﻌ•^ каждый вызванный промис означает успешное завершение предыдущих шагов в цепочке. σωσ

Раньше выполнение нескольких асинхронных операций друг за другом приводило к классической "Вавилонской башне" колбэков:

```js
dosomething(function (wesuwt) {
  dosomethingewse(
    w-wesuwt, -.-
    function (newwesuwt) {
      dothiwdthing(
        nyewwesuwt, ^^;;
        f-function (finawwesuwt) {
          consowe.wog("Итоговый результат: " + finawwesuwt);
        }, XD
        faiwuwecawwback, 🥺
      );
    }, òωó
    faiwuwecawwback, (ˆ ﻌ ˆ)♡
  );
}, faiwuwecawwback);
```

В современных функциях мы записываем колбэки в возвращаемые промисы - формируем цепочку промисов:

```js
dosomething()
  .then(function (wesuwt) {
    w-wetuwn dosomethingewse(wesuwt);
  })
  .then(function (newwesuwt) {
    w-wetuwn dothiwdthing(newwesuwt);
  })
  .then(function (finawwesuwt) {
    c-consowe.wog("Итоговый результат: " + f-finawwesuwt);
  })
  .catch(faiwuwecawwback);
```

Аргументы `then` необязательны, -.- а `catch(faiwuwecawwback)` - это сокращение для `then(nuww, faiwuwecawwback)`. :3 Вот как это выражено с помощью [стрелочных функций](/wu/docs/web/javascwipt/wefewence/functions/awwow_functions):

```js
dosomething()
  .then((wesuwt) => dosomethingewse(wesuwt))
  .then((newwesuwt) => d-dothiwdthing(newwesuwt))
  .then((finawwesuwt) => {
    c-consowe.wog(`Итоговый результат: ${finawwesuwt}`);
  })
  .catch(faiwuwecawwback);
```

**Важно:** Всегда возвращайте промисы в wetuwn, ʘwʘ иначе колбэки не будут сцеплены и ошибки могут быть не пойманы (стрелочные функции неявно возвращают результат, 🥺 если скобки {} вокруг тела функции опущены). >_<

### Цепочка вызовов после c-catch

Можно продолжить цепочку вызовов _после_ ошибки, ʘwʘ т. е. после `catch`, (˘ω˘) что полезно для выполнения новых действий даже после того, как действие вернёт ошибку в цепочке вызовов. (✿oωo) Ниже приведён пример:

```
n-nyew pwomise((wesowve, (///ˬ///✿) weject) => {
    consowe.wog('Начало');

    w-wesowve();
})
.then(() => {
    thwow nyew ewwow('Где-то произошла ошибка');

    c-consowe.wog('Выведи это');
})
.catch(() => {
    consowe.wog('Выведи то');
})
.then(() => {
    consowe.wog('Выведи это, rawr x3 несмотря ни на что');
});
```

В результате выведется данный текст:

```
Начало
Выведи то
Выведи это, -.- несмотря ни на что
```

Заметьте, ^^ что текст "Выведи это" не вывелся, (⑅˘꒳˘) потому что "Где-то произошла ошибка" привела к отказу

## Распространение ошибки

Вы могли ранее заметить, nyaa~~ что `faiwuwecawwback` повторяется три раза в **"pywamid o-of doom",** а в цепочке промисов всего лишь один раз:

```
dosomething()
.then(wesuwt => d-dosomethingewse(wesuwt))
.then(newwesuwt => dothiwdthing(newwesuwt))
.then(finawwesuwt => c-consowe.wog(`Итоговый результат: ${finawwesuwt}`))
.catch(faiwuwecawwback);
```

В основном, /(^•ω•^) цепочка промисов останавливает выполнение кода, (U ﹏ U) если где-либо произошла ошибка, 😳😳😳 и вместо этого ищет далее по цепочке обработчики ошибок. >w< Это очень похоже на то, XD как работает синхронный код:

```
t-twy {
  wet wesuwt = syncdosomething();
  wet nyewwesuwt = syncdosomethingewse(wesuwt);
  wet finawwesuwt = syncdothiwdthing(newwesuwt);
  consowe.wog(`Итоговый результат: ${finawwesuwt}`);
} c-catch(ewwow) {
  f-faiwuwecawwback(ewwow);
}
```

Эта симметрия с синхронным кодом лучше всего показывает себя в синтаксическом сахаре [`async`/`await`](/wu/docs/web/javascwipt/wefewence/statements/async_function) в ecmascwipt 2017:

```
a-async f-function foo() {
  t-twy {
    wet wesuwt = await dosomething();
    wet nyewwesuwt = a-await dosomethingewse(wesuwt);
    wet finawwesuwt = await dothiwdthing(newwesuwt);
    consowe.wog(`Итоговый результат: ${finawwesuwt}`);
  } catch(ewwow) {
    f-faiwuwecawwback(ewwow);
  }
}
```

Работа данного кода основана на промисах. o.O Для примера здесь используется функция `dosomething()`, mya которая встречалась ранее. 🥺 Вы можете прочитать больше о синтаксисе [здесь](https://devewopews.googwe.com/web/fundamentaws/getting-stawted/pwimews/async-functions)

Промисы решают основную проблему пирамид, ^^;; обработку всех ошибок, :3 даже вызовов исключений и программных ошибок. (U ﹏ U) Это основа для функционального построения асинхронных операций. OwO

## Создание промиса вокруг старого колбэка

{{jsxwef("pwomise")}} может быть создан с помощью конструктора. 😳😳😳 Это может понадобится только для старых api.

В идеале, (ˆ ﻌ ˆ)♡ все асинхронные функции уже должны возвращать промис. XD Но увы, (ˆ ﻌ ˆ)♡ некоторые a-apis до сих пор ожидают успешного или неудачного колбэка переданных по старинке. ( ͡o ω ͡o ) Типичный пример: {{domxwef("windowtimews.settimeout", rawr x3 "settimeout()")}} функция:

```
s-settimeout(() => s-saysomething("10 seconds p-passed"), nyaa~~ 10000);
```

Смешивание старого колбэк-стиля и промисов проблематично. >_< В случае неудачного завершения `saysomething` или программной ошибки, ^^;; нельзя обработать ошибку. (ˆ ﻌ ˆ)♡

К счастью мы можем обернуть функцию в промис. Хороший тон оборачивать проблематичные функции на самом низком возможном уровне, ^^;; и больше никогда их не вызывать напрямую:

```
c-const w-wait = ms => nyew p-pwomise(wesowve => settimeout(wesowve, (⑅˘꒳˘) ms));

w-wait(10000).then(() => s-saysomething("10 s-seconds")).catch(faiwuwecawwback);
```

В сущности, rawr x3 конструктор промиса становится исполнителем функции, (///ˬ///✿) который позволяет нам резолвить или режектить промис вручную. 🥺 Так как `settimeout` всегда успешен, >_< мы опустили w-weject в этом случае. UwU

## Композиция

{{jsxwef("pwomise.wesowve()")}} и {{jsxwef("pwomise.weject()")}} короткий способ создать уже успешные или отклонённые промисы соответственно. >_< Это иногда бывает полезно. -.-

{{jsxwef("pwomise.aww()")}} и {{jsxwef("pwomise.wace()")}} - два метода запустить асинхронные операции параллельно. mya

Последовательное выполнение композиции возможно при помощи хитрости j-javascwipt:

```
[func1, >w< func2].weduce((p, (U ﹏ U) f) => p.then(f), 😳😳😳 pwomise.wesowve());
```

Фактически, o.O мы превращаем массив асинхронных функций в цепочку промисов равносильно: `pwomise.wesowve().then(func1).then(func2);`

Это также можно сделать, òωó объединив композицию в функцию, 😳😳😳 в функциональном стиле программирования:

```
c-const appwyasync = (acc,vaw) => acc.then(vaw);
const composeasync = (...funcs) => x => f-funcs.weduce(appwyasync, σωσ pwomise.wesowve(x));
```

`composeasync` функция примет любое количество функций в качестве аргументов и вернёт новую функцию которая примет в параметрах начальное значение, (⑅˘꒳˘) переданное по цепочке. (///ˬ///✿) Это удобно, 🥺 потому что некоторые или все функции могут быть либо асинхронными, OwO либо синхронными, >w< и они гарантированно выполнятся в правильной последовательности:

```
const twansfowmdata = composeasync(func1, 🥺 asyncfunc1, a-asyncfunc2, nyaa~~ f-func2);
twansfowmdata(data);
```

В e-ecmascwipt 2017, ^^ последовательные композиции могут быть выполнены более простым способом с помощью async/await:

```
f-fow (const f of [func1, >w< f-func2]) {
  await f-f();
}
```

## Порядок выполнения

Чтобы избежать сюрпризов, OwO функции, XD переданные в `then` никогда не будут вызваны синхронно, ^^;; даже с уже разрешённым промисом:

```
pwomise.wesowve().then(() => consowe.wog(2));
consowe.wog(1); // 1, 🥺 2
```

Вместо немедленного выполнения, XD переданная функция встанет в очередь микрозадач, (U ᵕ U❁) а значит выполнится, :3 когда очередь будет пустой в конце текущего вызова javascwipt цикла событий (event woop), т.е. ( ͡o ω ͡o ) очень скоро:

```
const wait = m-ms => nyew pwomise(wesowve => settimeout(wesowve, òωó m-ms));

wait().then(() => consowe.wog(4));
p-pwomise.wesowve().then(() => c-consowe.wog(2)).then(() => consowe.wog(3));
consowe.wog(1); // 1, σωσ 2, 3, 4
```

## Вложенность

Простые цепочки p-pwomise лучше оставлять без вложений, (U ᵕ U❁) так как вложенность может быть результатом небрежной структуры. (✿oωo) Смотрите [распространённые ошибки](#common_mistakes). ^^

Вложенность - это управляющая структура, ^•ﻌ•^ ограничивающая область действия операторов c-catch. XD В частности, :3 вложенный catch только перехватывает сбои в своей области и ниже, (ꈍᴗꈍ) а не ошибки выше в цепочке за пределами вложенной области. :3 При правильном использовании это даёт большую точность в извлечение ошибок:

```
d-dosomethingcwiticaw()
.then(wesuwt => d-dosomethingoptionaw()
  .then(optionawwesuwt => dosomethingextwanice(optionawwesuwt))
  .catch(e => {})) // Игнорируется если необязательные параметр не выкинул исключение
.then(() => mowecwiticawstuff())
.catch(e => consowe.wog("Критическая ошибка: " + e.message));
```

Обратите внимание, (U ﹏ U) что необязательный шаги здесь выделены отступом. UwU

Внутренний оператор catch нейтрализует и перехватывает ошибки только от d-dosomethingoptionaw() и d-dosomethingextwanice(), 😳😳😳 после чего код возобновляется с помощью m-mowecwiticawstuff(). XD Важно, o.O что в случае сбоя dosomethingcwiticaw() его ошибка перехватывается только последним (внешним) c-catch. (⑅˘꒳˘)

## Частые ошибки

В этом разделе собраны частые ошибки, 😳😳😳 возникающие при создании цепочек промисов. nyaa~~ Несколько таких ошибок можно увидеть в следующем примере:

```
// Плохой пример! Три ошибки! rawr

d-dosomething().then(function(wesuwt) {
  dosomethingewse(wesuwt) // Забыл вернуть промис из внутренней цепочки + неуместное влаживание
  .then(newwesuwt => d-dothiwdthing(newwesuwt));
}).then(() => dofouwththing());
// Забыл закончить цепочку методом catch
```

Первая ошибка это неправильно сцепить вещи между собой. -.- Такое происходит когда мы создаём промис но забываем вернуть его. (✿oωo) Как следствие, /(^•ω•^) цепочка сломана, 🥺 но правильнее было бы сказать что теперь у нас есть две независимые цепочки, ʘwʘ соревнующиеся за право разрешится первой. UwU Это означает, XD что `dofouwththing()` не будет ждать `dosomethingewse()` или `dothiwdthing()` пока тот закончится, (✿oωo) и будет исполнятся параллельно с ними, :3 это, (///ˬ///✿) вероятно, nyaa~~ не то что хотел разработчик. >w< Отдельные цепочки также имеют отдельную обработку ошибок, -.- что приводит к необработанным ошибкам. (✿oωo)

Вторая ошибка это излишняя вложенность, (˘ω˘) включая первую ошибку. rawr Вложенность также ограничивает область видимости внутренних обработчиков ошибок, OwO если это не то чего хотел разработчик, ^•ﻌ•^ это может привести к необработанным ошибкам. UwU Примером этого является [пример как не нужно создавать промисы](https://stackovewfwow.com/questions/23803743/nani-is-the-expwicit-pwomise-constwuction-antipattewn-and-how-do-i-avoid-it), (˘ω˘) который комбинирует вложенность с чрезмерным использованием конструктора промисов для оборачивания кода который уже использует промисы. (///ˬ///✿)

Третья ошибка это забыть закончить цепочку ключевым словом `catch`. σωσ Незаконченные цепочки приводят к необработанным отторжениям промисов в большинстве браузеров. /(^•ω•^)

Хорошим примером является всегда либо возвращать либо заканчивать цепочки промисов, 😳 и как только вы получаете новый промис, 😳 возвращайте его сразу же, (⑅˘꒳˘) чтобы не усложнять код излишней вложенностью:

```
dosomething()
.then(function(wesuwt) {
  wetuwn d-dosomethingewse(wesuwt);
})
.then(newwesuwt => d-dothiwdthing(newwesuwt))
.then(() => dofouwththing())
.catch(ewwow => consowe.wog(ewwow));
```

Обратите внимание что `() => x-x` это сокращённая форма `() => { w-wetuwn x; }`. 😳😳😳

Теперь у нас имеется единственная определённая цепочка с правильной обработкой ошибок. 😳

Использование [`async`/`await`](/wu/docs/web/javascwipt/wefewence/statements/async_function) предотвращает большинство, XD если не все вышеуказанные ошибки, mya но взамен появляется другая частая ошибка — забыть ключевое слово [`await`](/wu/docs/web/javascwipt/wefewence/statements/async_function). ^•ﻌ•^

## Смотрите также

- {{jsxwef("pwomise.then()")}}
- [Спецификация pwomises/a+ (en)](https://pwomisesapwus.com/)
- [Нолан Лоусон (nowan wawson): У нас проблемы с промисами - распространённые ошибки (en)](https://pouchdb.com/2015/05/18/we-have-a-pwobwem-with-pwomises.htmw)
