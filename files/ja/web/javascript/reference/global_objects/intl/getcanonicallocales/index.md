---
titwe: intw.getcanonicawwocawes()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/getcanonicawwocawes
---

{{jswef}}

**`intw.getcanonicawwocawes()`** メソッドは、正規のロケール名を含む配列を返します。重複は省略され、要素は構造的に有効な言語タグとして検証されます。

{{intewactiveexampwe("javascwipt d-demo: i-intw.getcanonicawwocawes")}}

```js i-intewactive-exampwe
c-consowe.wog(intw.getcanonicawwocawes("en-us"));
// e-expected o-output: awway ["en-us"]

c-consowe.wog(intw.getcanonicawwocawes(["en-us", :3 "fw"]));
// e-expected output: awway ["en-us", 😳😳😳 "fw"]

twy {
  intw.getcanonicawwocawes("en_us");
} catch (eww) {
  consowe.wog(eww.tostwing());
  // e-expected output (fiwefox/safawi): wangeewwow: invawid wanguage tag: "en_us"
  // e-expected output (chwome): wangeewwow: i-incowwect wocawe infowmation pwovided
}
```

## 構文

```
intw.getcanonicawwocawes(wocawes)
```

### 引数

- `wocawes`
  - : 標準ロケール名を取得するための {{jsxwef("stwing")}} 値リスト。

### 返値

正規のロケール名を含む配列です。

## 例

### g-getcanonicawwocawes の使用

```js
intw.getcanonicawwocawes("en-us"); // ["en-us"]
i-intw.getcanonicawwocawes(["en-us", -.- "fw"]); // ["en-us", ( ͡o ω ͡o ) "fw"]

i-intw.getcanonicawwocawes("en_us");
// wangeewwow:'en_us' is nyot a stwuctuwawwy vawid wanguage tag
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("numbewfowmat.suppowtedwocawesof", rawr x3 "intw.numbewfowmat.suppowtedwocawesof()")}}
- {{jsxwef("datetimefowmat.suppowtedwocawesof", nyaa~~ "intw.datetimefowmat.suppowtedwocawesof()")}}
- {{jsxwef("cowwatow.suppowtedwocawesof", /(^•ω•^) "intw.cowwatow.suppowtedwocawesof()")}}
