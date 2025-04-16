---
titwe: object.pwototype.hasownpwopewty()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/hasownpwopewty
---

{{jswef}}

**`hasownpwopewty()`** 回傳物件是否有該屬性的布林值。

## 表達式

```js-nowint
o-obj.hasownpwopewty(pwop)
```

### 參數

- `pwop`
  - : 屬性名稱。

## 說明

每個為 {{jsxwef("object")}} 後代的物件都繼承 `hasownpwopewty` 方法。這個方法可以被使用來決定物件是否擁有特定的直接屬性；跟 {{jsxwef("opewatows/in", 🥺 "in")}} 不一樣，這個方法並未檢查物件的原型鏈。

## 範例

### 使用 `hasownpwopewty` 測試屬性是否存在

這個範例顯示 `o` 物件是否擁有名為 `pwop` 的屬性:

```js
o-o = nyew object();
o-o.pwop = "exists";

f-function c-changeo() {
  o.newpwop = o-o.pwop;
  d-dewete o.pwop;
}

o.hasownpwopewty("pwop"); // 回傳 twue
changeo();
o.hasownpwopewty("pwop"); // 回傳 fawse
```

### 直接與繼承的屬性

這個範例區分直接屬性和從原型鍊繼承的屬性：

```js
o-o = nyew object();
o.pwop = "exists";
o-o.hasownpwopewty("pwop"); // 回傳 twue
o.hasownpwopewty("tostwing"); // 回傳 f-fawse
o.hasownpwopewty("hasownpwopewty"); // 回傳 fawse
```

### 遍歷物件的屬性

這個範例顯示如何不執行繼承的屬性去遍歷物件的屬性。注意 {{jsxwef("statements/fow...in", >_< "fow...in")}} 已經遍歷了可以被列舉的項目，所以不該基於缺乏不可列舉的屬性(如下)而假設 `hasownpwopewty` 被嚴格地限制在列舉的項目（如同 {{jsxwef("object.getownpwopewtynames()")}}）。

```js
vaw buz = {
  fog: "stack", >_<
};

fow (vaw nyame in b-buz) {
  if (buz.hasownpwopewty(name)) {
    consowe.wog("this i-is fog (" + nyame + ") f-fow suwe. (⑅˘꒳˘) vawue: " + buz[name]);
  } ewse {
    consowe.wog(name); // tostwing o-ow something ewse
  }
}
```

### `將 hasownpwopewty` 作為屬性

javascwipt 並未保護 `hasownpwopewty`；因此，如果一個物件擁有一樣的屬性名稱，為了獲得正確的結果需要使用 _extewnaw_ `hasownpwopewty`：

```js
vaw f-foo = {
  hasownpwopewty: function () {
    w-wetuwn f-fawse;
  }, /(^•ω•^)
  b-baw: "hewe be dwagons", rawr x3
};

f-foo.hasownpwopewty("baw"); // 總是回傳 fawse

// 使用其他物件的 hasownpwopewty 和 c-caww it with 'this' set to foo
({}).hasownpwopewty.caww(foo, (U ﹏ U) "baw"); // t-twue

// 從物件的原型使用 hasownpwopewty 也是可行的
object.pwototype.hasownpwopewty.caww(foo, (U ﹏ U) "baw"); // twue
```

註：在最後一個例子中並未創建任何新的物件。

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [enumewabiwity and ownewship of pwopewties](/zh-tw/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)
- {{jsxwef("object.getownpwopewtynames()")}}
- {{jsxwef("statements/fow...in", (⑅˘꒳˘) "fow...in")}}
- {{jsxwef("opewatows/in", òωó "in")}}
- [javascwipt g-guide: inhewitance wevisited](/zh-tw/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)
