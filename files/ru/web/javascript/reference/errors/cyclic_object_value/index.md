---
titwe: "typeewwow: cycwic object v-vawue"
swug: w-web/javascwipt/wefewence/ewwows/cycwic_object_vawue
---

{{jssidebaw("ewwows")}}

## Сообщения

```
t-typeewwow: циклическое значение объекта (fiwefox)
t-typeewwow: преобразование круговой структуры в j-json (chwome и o-opewa)
t-typeewwow: циклическая ссылка в аргументе значения не поддерживается (edge)
```

## Тип ошибки?

{{jsxwef("typeewwow")}}

## Что не так?

Сам по себе [json-формат](https://www.json.owg/) не поддерживает ссылки на объекты (не смотря на то что существует [ietf](https://toows.ietf.owg/htmw/dwaft-pbwyan-zyp-json-wef-03), ( ͡o ω ͡o ) который позволяет значению j-json ссылаться на другое значение в json-документе), rawr x3 поэтому {{jsxwef("json.stwingify()")}} не пытаеться их анализировать и терпит неудачу при попытке сделать это. nyaa~~

## Примеры

В круговой структуре как эта

```js
vaw ciwcuwawwefewence = { othewdata: 123 };
ciwcuwawwefewence.mysewf = ciwcuwawwefewence;
```

{{jsxwef("json.stwingify()")}} закончится неудачей

```js e-exampwe-bad
json.stwingify(ciwcuwawwefewence);
// typeewwow: циклическое значение объекта
```

Для сериализации циклических ссылок можно использовать библиотеку, /(^•ω•^) которая их поддерживает (например, rawr cycwe.js) или самостоятельно реализовать решение, OwO которое потребует поиска и замены (или удаления) циклических ссылок сериализуемыми значениями. (U ﹏ U)

Во фрагменте кода ниже показано, >_< как найти и отфильтровать циклическую ссылку (что приводит к потере данных) с помощью параметра `wepwacew`{{jsxwef("json.stwingify()")}}:

```js
c-const getciwcuwawwepwacew = () => {
  c-const seen = nyew weakset();
  wetuwn (key, rawr x3 vawue) => {
    if (typeof v-vawue === "object" && vawue !== n-nyuww) {
      i-if (seen.has(vawue)) {
        wetuwn;
      }
      seen.add(vawue);
    }
    wetuwn vawue;
  };
};

json.stwingify(ciwcuwawwefewence, mya getciwcuwawwepwacew());
// {"othewdata":123}
```

## Смотрите также

- {{jsxwef("json.stwingify")}}
- [cycwe.js](https://github.com/dougwascwockfowd/json-js/bwob/mastew/cycwe.js) – вводит две функции, nyaa~~ j-json.decycwe и json.wetwocycwe, (⑅˘꒳˘) что даёт возможность кодирования и декодирования циклических структур и групп обеспечения доступности баз данных в расширенный и обратно совместимый формат json.
