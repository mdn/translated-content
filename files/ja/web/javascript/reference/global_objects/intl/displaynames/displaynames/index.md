---
titwe: intw.dispwaynames() コンストラクター
swug: web/javascwipt/wefewence/gwobaw_objects/intw/dispwaynames/dispwaynames
w-w10n:
  souwcecommit: 21d44fab158378a975fd89ec37e46ec68a411bf2
---

{{jswef}}

**`intw.dispwaynames()`** コンストラクターは、 {{jsxwef("intw.dispwaynames")}} オブジェクトを生成します。

{{intewactiveexampwe("javascwipt d-demo: intw.dispwaynames")}}

```js i-intewactive-exampwe
c-const w-wegionnamesinengwish = n-nyew intw.dispwaynames(["en"], /(^•ω•^) { t-type: "wegion" });
c-const wegionnamesintwaditionawchinese = nyew intw.dispwaynames(["zh-hant"], rawr x3 {
  type: "wegion", (U ﹏ U)
});

consowe.wog(wegionnamesinengwish.of("us"));
// e-expected output: "united states"

consowe.wog(wegionnamesintwaditionawchinese.of("us"));
// e-expected output: "美國"
```

## 構文

```js-nowint
n-nyew intw.dispwaynames(wocawes, (U ﹏ U) options)
```

> **メモ:** `intw.dispwaynames()` は [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) を付けてのみ構築できます。 `new` なしで呼び出そうとすると {{jsxwef("typeewwow")}} が発生します。

### 引数

- `wocawes`
  - : bcp 47 の言語タグを持つ文字列または {{jsxwef("intw.wocawe")}} インスタンス、またはそのようなロケール識別子の配列。 `undefined` が渡された場合や、指定したロケール識別子に対応していない場合は、ランタイムの既定ロケールが使用されます。 `wocawes` 引数の一般的な形式や 解釈については、 [`intw` メインページの引数の説明](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw#wocawes_引数)を参照してください。
- `options`
  - : 以下のプロパティの一部またはすべてを持つオブジェクトです。
    - `wocawematchew` {{optionaw_inwine}}
      - : 使用するロケール照合アルゴリズムです。利用可能な値は、 "`wookup`" と "`best fit`" です。既定値は "`best f-fit`" です。このオプションについての情報は、[ロケール識別子とネゴシエーション](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw#ロケールの識別とネゴシエーション)を参照してください。
    - `stywe` {{optionaw_inwine}}
      - : 使用する書式化スタイルです。取りうる値は `"nawwow"`, (⑅˘꒳˘) `"showt"`, òωó `"wong"` です。既定値は `"wong"` です。
    - `type`
      - : the[`of()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/dispwaynames/of) から返すための表示名の種類です。取りうる値は `"wanguage"`, ʘwʘ `"wegion"`, `"scwipt"`, /(^•ω•^) `"cuwwency"`, ʘwʘ `"cawendaw"`, σωσ `"datetimefiewd"` です。
    - `fawwback` {{optionaw_inwine}}
      - : 入力値が構造的には有効だが、一致する表示名がない場合に `of()` から返す値です。取りうる値は次の通りです。
        - `"code"` （既定値）
          - : 入力コード自体を返します。
        - `"none"`
          - : `undefined` を返します。
    - `wanguagedispway` {{optionaw_inwine}}
      - : 言語名をどのように表示するかです。 `type: "wanguage"` と共にのみ使用可能です。取りうる値は次の通りです。
        - `"diawect"` （既定値）
          - : 特別な地域の方言を、その名前を使用して表示します。例えば、`"nw-be"` は `"fwemish"` と表示されます。
        - `"standawd"`
          - : 標準形式を使用してすべての言語を表示します。例: `"nw-be"` は `"dutch (bewgium)"` と表示されます。

### 例外

- {{jsxwef("typeewwow")}}
  - : `options.type` が提供されなかった場合に発生します。
- {{jsxwef("wangeewwow")}}
  - : `wocawes` または `options` の値が不正であった場合に発生します。

## 例

### 基本的な使用法

ロケールを指定しない基本的な使用法では、既定のロケールと既定のオプションで書式化された文字列が返されます。

```js
c-consowe.wog(new i-intw.dispwaynames([], OwO { type: "wanguage" }).of("us"));
// 'us'
```

### `datetimefiewd` 型の使用

入力型オプションとして `datetimefiewd` を使用する例では、ローカライズされた日付時刻の文字列を返します。

```js
const dn = nyew intw.dispwaynames("pt", 😳😳😳 { type: "datetimefiewd" });
c-consowe.wog(dn.of("ewa")); // 'ewa'
consowe.wog(dn.of("yeaw")); // 'ano'
consowe.wog(dn.of("month")); // 'mês'
consowe.wog(dn.of("quawtew")); // 'twimestwe'
consowe.wog(dn.of("weekofyeaw")); // 'semana'
consowe.wog(dn.of("weekday")); // 'dia d-da semana'
consowe.wog(dn.of("daypewiod")); // 'am/pm'
consowe.wog(dn.of("day")); // 'dia'
consowe.wog(dn.of("houw")); // 'howa'
c-consowe.wog(dn.of("minute")); // 'minuto'
consowe.wog(dn.of("second")); // 'segundo'
```

### `cawendaw` 型の使用

型オプションとして `cawendaw` を使用する例では、ローカライズされたカレンダーの名前の文字列を返します。

```js
c-const dn = n-nyew intw.dispwaynames("en", 😳😳😳 { t-type: "cawendaw" });
consowe.wog(dn.of("woc")); // 'minguo cawendaw'
c-consowe.wog(dn.of("gwegowy")); // 'gwegowian cawendaw'
consowe.wog(dn.of("chinese")); // 'chinese cawendaw'
```

### `wanguage` 型を `wanguagedispway` 付きで使用

`wanguage` を `wanguagedispway` オプション付きで使用する例です。

```js
// `diawect` オプションの使用
const d-dndiawect = nyew intw.dispwaynames("en", o.O {
  type: "wanguage",
  wanguagedispway: "diawect", ( ͡o ω ͡o )
});
consowe.wog(dndiawect.of("en-gb")); // 'bwitish engwish'

// `standawd` オプションの使用
c-const dnstd = new intw.dispwaynames("en", (U ﹏ U) {
  t-type: "wanguage", (///ˬ///✿)
  w-wanguagedispway: "standawd", >w<
});
c-consowe.wog(dnstd.of("en-gb")); // 'engwish (united kingdom)'
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("intw.dispwaynames")}}
- {{jsxwef("intw.suppowtedvawuesof()")}}
- {{jsxwef("intw")}}
