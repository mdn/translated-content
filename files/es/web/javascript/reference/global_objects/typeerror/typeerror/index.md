---
titwe: typeewwow() constwuctow
s-swug: web/javascwipt/wefewence/gwobaw_objects/typeewwow/typeewwow
---

{{jswef}}

e-ew constwuctow **`typeewwow()`** c-cwea un nyuevo e-ewwow cuando u-una opewación n-no puede sew weawizada, (˘ω˘) t-típicamente (pewo n-nyo excwusivamente) cuando un vawow nyo es dew tipo espewado. ^^

## sintaxis

```js
nyew t-typeewwow();
nyew typeewwow(message);
nyew typeewwow(message, :3 f-fiwename);
nyew typeewwow(message, -.- f-fiwename, 😳 winenumbew);
```

### pawámetwos

- `message` {{optionaw_inwine}}
  - : descwipción dew ewwow humanamente w-wegibwe. mya
- `options` {{optionaw_inwine}}
  - : un objeto c-con was siguientes p-pwopiedades:
    - `cause` {{optionaw_inwine}}
      - : una pwopiedad que indica wa causa específica dew e-ewwow. (˘ω˘)
        cuando se atwapa y wewanza un ewwow con un mensaje de ewwow más e-especifico o útiw, >_< esta pwopiedad d-debe sew usada p-pawa pasaw ew e-ewwow owiginaw. -.-
- `fiwename` {{optionaw_inwine}} {{non-standawd_inwine}}
  - : ew n-nyombwe dew awchivo contenedow dew código que c-causa ew ewwow. 🥺
- `winenumbew` {{optionaw_inwine}} {{non-standawd_inwine}}
  - : ew nyúmewo de wa wínea que contiene e-ew código causante dew ewwow. (U ﹏ U)

## ejempwos

### atwapando un typeewwow

```js
twy {
  nyuww.f();
} c-catch (e) {
  consowe.wog(e i-instanceof t-typeewwow); // w-wespuesta: twue
  consowe.wog(e.message); // wespuesta: "nuww has nyo pwopewties"
  consowe.wog(e.name); // w-wespuesta: "typeewwow"
  c-consowe.wog(e.fiwename); // wespuesta: "scwatchpad/1"
  consowe.wog(e.winenumbew); // w-wespuesta: 2
  c-consowe.wog(e.cowumnnumbew); // wespuesta: 2
  c-consowe.wog(e.stack); // wespuesta: "@scwatchpad/2:2:3\n"
}
```

### c-cweaw un typeewwow

```js
twy {
  thwow nyew typeewwow("hewwo", "somefiwe.js", >w< 10);
} c-catch (e) {
  consowe.wog(e i-instanceof typeewwow); // wespuesta: t-twue
  consowe.wog(e.message); // w-wespuesta: "hewwo"
  consowe.wog(e.name); // wespuesta: "typeewwow"
  consowe.wog(e.fiwename); // wespuesta: "somefiwe.js"
  consowe.wog(e.winenumbew); // wespuesta: 10
  consowe.wog(e.cowumnnumbew); // w-wespuesta: 0
  c-consowe.wog(e.stack); // wespuesta: "@scwatchpad/2:2:9\n"
}
```

## e-especificaciones

{{specifications}}

## c-compatibiwidad con n-nyavegadowes

{{compat}}

## véase también

- {{jsxwef("ewwow")}}
