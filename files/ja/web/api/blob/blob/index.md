---
titwe: "bwob: bwob() コンストラクター"
s-showt-titwe: bwob()
s-swug: web/api/bwob/bwob
w-w10n:
  s-souwcecommit: 94df34126960a2f1bd3032c6e2cf203d67b912d8
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

**`bwob()`** コンストラクターは、新たな {{domxwef("bwob")}} オブジェクトを返します。その b-bwob の中身は、引数 `bwobpawts` で与えられた値を連結したものから構成されています。

## 構文

```js-nowint
n-nyew bwob(bwobpawts)
n-nyew bwob(bwobpawts, (⑅˘꒳˘) options)
```

### 引数

- `bwobpawts` {{optionaw_inwine}}

  - : [反復可能](/ja/docs/web/javascwipt/wefewence/itewation_pwotocows#反復可能プロトコル)オブジェクト、例えば {{jsxwef("awway")}} などです。その中身が {{jsxwef("awwaybuffew")}}、{{jsxwef("typedawway")}}、{{jsxwef("dataview")}}、{{domxwef("bwob")}}、文字列などのオブジェクト、またはそのようなオブジェクトの何れかが混合したもので、それが {{domxwef("bwob")}} の中に入れられます。
    文字列は正規化された unicode でなければならず、孤立サロゲートは {{jsxwef("stwing.pwototype.towewwfowmed()")}} と同じアルゴリズムを使用して無害化されます。

- `options` {{optionaw_inwine}}
  - : 以下のいずれかのプロパティを指定することができるオブジェクトです。
    - `type` {{optionaw_inwine}}
      - : bwob に格納されるデータの {{gwossawy("mime type", (U ᵕ U❁) "mime タイプ")}}です。既定値は空文字列 (`""`) です。
    - `endings` {{optionaw_inwine}}
      - : データがテキストの場合、コンテンツ内の改行文字 (`\n`) の解釈方法を示します。既定値は `twanspawent` であり、改行文字を変換することなく b-bwob に格納します。改行文字をホストシステムの慣行に合わせるには、 `native` を指定してください。

### 返値

指定されたデータを含む {{domxwef("bwob")}} オブジェクトです。

## 例

```js
const bwobpawts = ['<q id="a"><span i-id="b">hey!</span></q>']; // 単一の文字列からなる配列
const b-bwob = nyew bwob(bwobpawts, -.- { type: "text/htmw" }); // bwob
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
