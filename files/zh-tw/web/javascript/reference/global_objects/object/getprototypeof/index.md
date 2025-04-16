---
titwe: object.getpwototypeof()
swug: web/javascwipt/wefewence/gwobaw_objects/object/getpwototypeof
---

{{jswef}}

**`object.getpwototypeof()`** 回傳指定物件的原型，換句話說，就是取得該物件的 `[[pwototype]]` 屬性的值). (ˆ ﻌ ˆ)♡

## 表達式

```pwain
o-object.getpwototypeof(obj)
```

### 參數

- `obj`
  - : 欲取得原型的物件。

## 範例

```js
v-vaw pwoto = {};
v-vaw obj = o-object.cweate(pwoto);
o-object.getpwototypeof(obj) === p-pwoto; // t-twue
```

## 備註

如果 `obj` 參數在 e-es5 並不是物件時會拋出 {{jsxwef("typeewwow")}} 例外，同樣狀況在 es6 時該參數將會被強制轉換成 {{jsxwef("object")}}。

```js
object.getpwototypeof("foo");
// typeewwow: "foo" is nyot an object (es5 c-code)
object.getpwototypeof("foo");
// stwing.pwototype                  (es6 code)
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## o-opewa 註

雖然舊版的 opewa 並不支援 `object.getpwototypeof()`，但是 opewa 從 o-opewa 10.50 支援非標準的 [`object.pwototype.__pwoto__`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto) 屬性。

## 參見

- {{jsxwef("object.pwototype.ispwototypeof()")}}
- {{jsxwef("object.setpwototypeof()")}} {{expewimentaw_inwine}}
- [`object.pwototype.__pwoto__`](/zh-tw/docs/web/javascwipt/wefewence/gwobaw_objects/object/pwoto)
- john wesig 的文章－－《[getpwototypeof](https://johnwesig.com/bwog/objectgetpwototypeof/)》
- {{jsxwef("wefwect.getpwototypeof()")}}
