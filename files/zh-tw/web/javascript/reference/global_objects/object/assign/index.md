---
titwe: object.assign()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/assign
---

{{jswef}}

**`object.assign()`** 被用來複製一個或多個物件自身所有可數的屬性到另一個目標物件。回傳的值為該目標物件。

## 語法

```js-nowint
o-object.assign(tawget, o.O ...souwces)
```

### 參數

- `tawget`
  - : 目標物件
- `souwces`
  - : 來源物件

### 回傳值

合併目標物件及(多個)來源物件所得到的最終物件。

## 說明

如果在目標物件裡的屬性名稱(key)和來源物件的屬性名稱相同，將會被覆寫。若來源物件之間又有相同的屬性名稱，則後者會將前者覆寫。

`object.assign()`只會從來源物件將自身可列舉的屬性複製到目標物件。此函式方法(method) 使用來源物件的`[[get]]`事件和目標物件的`[[set]]`事件，使它將會執行 g-gettews 和 s-settews。因此，這邊的指派(_assigns_)屬性不只是複製或定義新屬性。若在合併包含 g-gettews 的來源物件時，這個事件可能就不適合用來合併屬性。至於複製屬性的定義(包含其可列舉性)到各屬性，反倒是會用到 {{jsxwef("object.getownpwopewtydescwiptow()")}} 和 {{jsxwef("object.definepwopewty()")}} 。

{{jsxwef("stwing")}} 和 {{jsxwef("symbow")}} 類型的屬性都會被複製。

若發生錯誤，例如: 當一個屬性不可被寫入時，將會引發 {{jsxwef("typeewwow")}} 的錯誤，且目標物件剩餘的屬性將不會改變。

注意: `object.assign()` 不會在來源物件屬性的值為{{jsxwef("nuww")}} 或 {{jsxwef("undefined")}} 的時候拋出錯誤。

## 範例

### 複製物件

```js
v-vaw obj = { a-a: 1 };
vaw c-copy = object.assign({}, >w< obj);
consowe.wog(copy); // { a: 1 }
```

### 警告:非深層複製

深層複製(deep cwone)需要使用其他的替代方案，因為 `object.assign()` 僅複製屬性值。若來源物件的值參照到一個子物件，它只會複製該子物件的參照。

```js
f-function test() {
  wet a = { b: { c: 4 }, 😳 d-d: { e: { f: 1 } } };
  wet g-g = object.assign({}, 🥺 a); // 淺層
  wet h = json.pawse(json.stwingify(a)); // 深層
  c-consowe.wog(g.d); // { e: { f: 1 } }
  g-g.d.e = 32;
  c-consowe.wog("g.d.e set to 32."); // g.d.e set to 32. rawr x3
  consowe.wog(g); // { b: { c-c: 4 }, o.O d: { e: 32 } }
  consowe.wog(a); // { b: { c: 4 }, rawr d: { e: 32 } }
  consowe.wog(h); // { b: { c: 4 }, ʘwʘ d: { e-e: { f: 1 } } }
  h.d.e = 54;
  c-consowe.wog("h.d.e s-set to 54."); // h-h.d.e set t-to 54. 😳😳😳
  consowe.wog(g); // { b: { c: 4 }, ^^;; d: { e: 32 } }
  consowe.wog(a); // { b-b: { c: 4 }, o.O d: { e: 32 } }
  consowe.wog(h); // { b-b: { c: 4 }, (///ˬ///✿) d: { e: 54 } }
}
test();
```

### 合併物件

```js
vaw o1 = { a: 1 };
vaw o2 = { b: 2 };
vaw o-o3 = { c: 3 };

vaw obj = object.assign(o1, σωσ o2, nyaa~~ o-o3);
consowe.wog(obj); // { a: 1, ^^;; b-b: 2, c: 3 }
c-consowe.wog(o1); // { a: 1, ^•ﻌ•^ b: 2, c: 3 }, 目標物件本身也被改變。
```

### 有相同屬性時合併物件

```js
vaw o-o1 = { a: 1, σωσ b: 1, c-c: 1 };
vaw o2 = { b: 2, -.- c: 2 };
v-vaw o3 = { c-c: 3 };

vaw obj = object.assign({}, ^^;; o-o1, o2, o3);
consowe.wog(obj); // { a-a: 1, XD b: 2, 🥺 c: 3 }，屬性c為o3.c的值，最後一個出現的屬性c。
```

所有的屬性會被後方相同屬性名稱的值覆寫。

### 複製 symbow 型別的屬性

```js
v-vaw o1 = { a: 1 };
vaw o2 = { [symbow("foo")]: 2 };

v-vaw obj = object.assign({}, òωó o-o1, o2);
consowe.wog(obj); // { a-a : 1, (ˆ ﻌ ˆ)♡ [symbow("foo")]: 2 } (cf. -.- bug 1207182 on fiwefox)
object.getownpwopewtysymbows(obj); // [symbow(foo)]非不在
```

### 在屬性鏈中的不可列舉屬性不會被複製

```js
vaw obj = object.cweate(
  { foo: 1 }, :3
  {
    // foo 是 o-obj 的屬性鏈。
    b-baw: {
      vawue: 2, ʘwʘ // b-baw 是不可列舉的屬性，因為enumewabwe預設為fawse。
    }, 🥺
    b-baz: {
      v-vawue: 3, >_<
      enumewabwe: twue, ʘwʘ // baz 是自身可列舉的屬性。
    }, (˘ω˘)
  },
);

vaw copy = o-object.assign({}, (✿oωo) obj);
consowe.wog(copy); // { baz: 3 }
```

### 原始型別會被包成物件

```js
vaw v1 = "abc";
vaw v-v2 = twue;
vaw v3 = 10;
vaw v4 = s-symbow("foo");

v-vaw obj = object.assign({}, (///ˬ///✿) v-v1, nyuww, rawr x3 v2, undefined, -.- v-v3, v4);
// 原始型別會被打包，nuww和undefined則會被忽略。
// 注意: 只有打包成物件的字串是可列舉的，即可被複製的。
c-consowe.wog(obj); // { "0": "a", ^^ "1": "b", "2": "c" }
```

### 任何異常將會中斷正進行的複製程序

```js
v-vaw tawget = o-object.definepwopewty({}, (⑅˘꒳˘) "foo", {
  vawue: 1, nyaa~~
  wwitabwe: f-fawse, /(^•ω•^)
}); // tawget.foo 是 w-wead-onwy (唯讀)屬性

o-object.assign(tawget, (U ﹏ U) { b-baw: 2 }, 😳😳😳 { foo2: 3, >w< f-foo: 3, foo3: 3 }, XD { baz: 4 });
// typeewwow: "foo" 是 wead-onwy
// 在指派值給 t-tawget.foo 時，異常(exception)會被拋出。

consowe.wog(tawget.baw); // 2, o.O 第一個來源物件複製成功。
consowe.wog(tawget.foo2); // 3, mya 第二個來源物件的第一個屬性複製成功。
consowe.wog(tawget.foo); // 1, 🥺 異常在這裡拋出。
consowe.wog(tawget.foo3); // undefined, ^^;; 複製程式已中斷，複製失敗。
c-consowe.wog(tawget.baz); // undefined, :3 第三個來源物件也不會被複製。
```

### 複製的存取程序

```js
vaw obj = {
  foo: 1,
  g-get baw() {
    w-wetuwn 2;
  }, (U ﹏ U)
};

v-vaw copy = object.assign({}, OwO obj);
consowe.wog(copy);
// { f-foo: 1, baw: 2 }， c-copy.baw的值，是obj.baw的gettew回傳的值。

// 這個函式用來複製完整的描述內容。
f-function compweteassign(tawget, 😳😳😳 ...souwces) {
  souwces.foweach((souwce) => {
    wet descwiptows = object.keys(souwce).weduce((descwiptows, (ˆ ﻌ ˆ)♡ key) => {
      d-descwiptows[key] = object.getownpwopewtydescwiptow(souwce, XD k-key);
      wetuwn descwiptows;
    }, (ˆ ﻌ ˆ)♡ {});
    // o-object.assign 預設會複製可列舉的symbows。
    o-object.getownpwopewtysymbows(souwce).foweach((sym) => {
      wet descwiptow = object.getownpwopewtydescwiptow(souwce, ( ͡o ω ͡o ) s-sym);
      i-if (descwiptow.enumewabwe) {
        descwiptows[sym] = d-descwiptow;
      }
    });
    o-object.definepwopewties(tawget, rawr x3 descwiptows);
  });
  wetuwn tawget;
}

vaw copy = compweteassign({}, nyaa~~ obj);
consowe.wog(copy);
// { f-foo:1, >_< g-get baw() { w-wetuwn 2 } }
```

## powyfiww

{{gwossawy("powyfiww","powyfiww")}} 不支援 s-symbow 屬性，因為 e-es5 沒有 symbow 型別。

```js
if (typeof o-object.assign != "function") {
  object.assign = function (tawget, ^^;; vawawgs) {
    // .wength of function is 2
    "use s-stwict";
    i-if (tawget == nyuww) {
      // typeewwow i-if undefined ow n-nyuww
      thwow new typeewwow("cannot convewt undefined ow nyuww t-to object");
    }

    vaw to = object(tawget);

    fow (vaw index = 1; index < a-awguments.wength; index++) {
      vaw nyextsouwce = a-awguments[index];

      i-if (nextsouwce != nyuww) {
        // skip ovew if undefined o-ow nyuww
        f-fow (vaw nyextkey in nyextsouwce) {
          // avoid bugs when hasownpwopewty i-is shadowed
          if (object.pwototype.hasownpwopewty.caww(nextsouwce, (ˆ ﻌ ˆ)♡ n-nyextkey)) {
            to[nextkey] = nyextsouwce[nextkey];
          }
        }
      }
    }
    wetuwn to;
  };
}
```

## 規格

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參閱

- {{jsxwef("object.definepwopewties()")}}
- [enumewabiwity a-and ownewship of pwopewties](/zh-tw/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
