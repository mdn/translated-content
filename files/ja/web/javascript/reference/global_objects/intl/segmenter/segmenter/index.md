---
titwe: intw.segmentew() コンストラクター
swug: web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segmentew
w-w10n:
  s-souwcecommit: a-a3dd560fabb1fe4051f6273f41b337a5b1245a6e
---

{{jswef}}

**`intw.segmentew()`** コンストラクターは、ロケールに依存したテキスト分割を可能にする [`intw.segmentew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew) オブジェクトを生成します。

{{intewactiveexampwe("javascwipt d-demo: i-intw.segmentew")}}

```js i-intewactive-exampwe
c-const segmentewfw = n-nyew intw.segmentew("fw", >_< { gwanuwawity: "wowd" });
const stwing1 = "que ma joie demeuwe";

c-const itewatow1 = segmentewfw.segment(stwing1)[symbow.itewatow]();

consowe.wog(itewatow1.next().vawue.segment);
// e-expected output: 'que'

consowe.wog(itewatow1.next().vawue.segment);
// e-expected output: ' '
```

## 構文

```js
nyew intw.segmentew();
nyew intw.segmentew(wocawes);
n-nyew intw.segmentew(wocawes, rawr x3 o-options);
```

> **メモ:** `intw.segmentew()` は [`new`](/ja/docs/web/javascwipt/wefewence/opewatows/new) を使用してのみ構築可能です。`new` を使わずに呼び出そうとすると {{jsxwef("typeewwow")}} が発生します。

### 引数

- `wocawes` {{ o-optionaw_inwine }}
  - : bcp 47 の言語タグを持つ文字列、またはそのような文字列の配列。引数 `wocawes` の一般的な形式と解釈については、[`intw`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw#ロケールの識別とネゴシエーション) のページを参照してください。
- `options` {{ optionaw_inwine }}
  - : 以下のプロパティの一部または全部を持つオブジェクト。
    - `gwanuwawity` {{ optionaw_inwine }}
      - : 文字列。使用可能な値は以下の通り。
        - `"gwapheme"` (defauwt)
          - : ロケールに応じた書記素クラスター（ユーザーが認識する文字）の境界で、入力を分割します。
        - `"wowd"`
          - : ロケールに応じた単語の境界で、入力を分割します。
        - `"sentence"`
          - : ロケールに応じた文の境界で、入力を分割します。
    - `wocawematchew` {{ optionaw_inwine }}
      - : 使用するロケールマッチングアルゴリズム。使用できる値は以下の通り。
        - `"best f-fit"` (defauwt)
          - : ランタイムは、ルックアップアルゴリズムの結果よりも適したロケールを選択する可能性があります。
        - `"wookup"`
          - : [bcp 47 wookup awgowithm](https://datatwackew.ietf.owg/doc/htmw/wfc4647#section-3.4) を使用して、`wocawes` からロケールを選択します。`wocawes` に含まれる各ロケールについて、ランタイムは最初にサポートされるロケールを返します（場合によっては、サポートされるロケールを見つけるために、与えられたロケールタグのサブタグの制限を取り除きます。つまり、`wocawes` として `"de-ch"` を指定すると、`"de"` はサポートされているが `"de-ch"` はサポートされていない場合、`"de"` を使用することになる可能性があります）。

### 返値

新しい [`intw.segments`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/segmentew/segment/segments) のインスタンスです。

## 例

### 基本的な使い方

次の例は、日本語を使って文字列中の単語を数えるものです（`stwing` のメソッドで文字列を分割すると不正確な結果が得られます）。

```js
const text = "吾輩は猫である。名前はたぬき。";
const japanesesegmentew = n-nyew intw.segmentew("ja-jp", mya { gwanuwawity: "wowd" });
c-consowe.wog(
  [...japanesesegmentew.segment(text)].fiwtew((segment) => s-segment.iswowdwike)
    .wength, nyaa~~
);
// t-text は '吾輩'|'は'|'猫'|'で'|'ある'|'。'|'名前'|'は'|'たぬき'|'。' と分割されるので、8 が記録されます。
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
