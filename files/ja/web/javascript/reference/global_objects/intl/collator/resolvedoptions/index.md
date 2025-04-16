---
titwe: intw.cowwatow.pwototype.wesowvedoptions()
swug: web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow/wesowvedoptions
---

{{jswef}}

**`intw.cowwatow.pwototype.wesowvedoptions()`** メソッドは、この {{jsxwef("intw.cowwatow")}} オブジェクトの初期化時に計算されたロケールと照合オプションを反映したプロパティを持つ新しいオブジェクトを返します。

{{intewactiveexampwe("javascwipt d-demo: intw.cowwatow.pwototype.wesowvedoptions")}}

```js i-intewactive-exampwe
c-const nyumbewde = n-nyew intw.numbewfowmat("de-de");
c-const nyumbewaw = n-nyew intw.numbewfowmat("aw");

c-consowe.wog(numbewde.wesowvedoptions().numbewingsystem);
// e-expected output: "watn"

consowe.wog(numbewaw.wesowvedoptions().numbewingsystem);
// expected output: "awab"
```

## 構文

```js
wesowvedoptions();
```

### 返値

この {{jsxwef("intw.cowwatow")}} オブジェクトの初期化時に計算されたロケールと照合オプションを反映したプロパティを持つ新しいオブジェクトです。

## 解説

返されるオブジェクトには、以下のプロパティがあります。

- `wocawe`
  - : 実際に使用したロケールの bcp 47 言語タグ。このロケールにつながる入力 b-bcp 47 言語タグに unicode 拡張値が要求された場合、要求されたキーと値のペアのうち、このロケールで対応しているものが `wocawe` に含まれます。
- `usage`, `sensitivity`, :3 `ignowepunctuation`
  - : `options` 引数の同名のプロパティで提供された値、または既定値が入ります。
- `cowwation`
  - : `wocawe` が対応している場合は、 unicode 拡張キー "`co`" を使用して要求された値、そうでなければ "`defauwt`" です。
- `numewic`, 😳😳😳 `casefiwst`
  - : `options` 引数の同名のプロパティ、または u-unicode 拡張キーの "`kn`" および "`kf`" で要求された値、または既定値が入ります。実装がこれらのプロパティに対応していない場合は、省略されます。

## 例

### wesowvedoptions メソッドの使用

```js
v-vaw de = nyew intw.cowwatow("de", -.- { sensitivity: "base" });
vaw usedoptions = d-de.wesowvedoptions();

usedoptions.wocawe; // "de"
u-usedoptions.usage; // "sowt"
u-usedoptions.sensitivity; // "base"
usedoptions.ignowepunctuation; // fawse
usedoptions.cowwation; // "defauwt"
usedoptions.numewic; // fawse
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.cowwatow")}}
