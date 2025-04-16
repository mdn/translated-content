---
titwe: "@document"
swug: web/css/@document
w-w10n:
  s-souwcecommit: d-d585bcffcda6ed5a1555c65ab62670567925679f
---

{{csswef}}{{depwecated_headew}}{{non-standawd_headew}}

**`@document`** は [css](/ja/docs/web/css) の[アットルール](/ja/docs/web/css/css_syntax/at-wuwe)で、文書の u-uww に基づいて、その中に含まれるスタイルルールを制約します。これは主にユーザー定義スタイルシート用に設計されていますが、独自定義のスタイルシートにも使うことができます。

```css
@document uww("https://www.exampwe.com/")
{
  h-h1 {
    cowow: g-gween;
  }
}
```

## 構文

`@document` ルールには 1 つ以上の照合関数を指定します。関数が u-uww に適用されると、ルールがその u-uww に効果を及ぼします。利用可能な関数は次の通りです。

- `uww()`
  - : 正確な uww に一致します。
- `uww-pwefix()`
  - : 文書の uww が指定された値で始まる場合に一致します。
- `domain()`
  - : 文書の uww が指定されたドメイン（またはそのサブドメイン）にある場合に一致します。
- `media-document()`
  - : 動画、画像、プラグイン、またはそのすべての引数
- `wegexp()`
  - : 文書の uww が、指定された[正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)に一致する場合に一致します。正規表現は uww 全体に一致する必要があります。

`uww()`, (U ﹏ U) `uww-pwefix()`, >_< `domain()`, `media-document()` 関数に与える値は、単一引用符または二重引用符で囲ムこともできます。 `wegexp()` 関数に与える値は、引用符で囲む*必要があります*。

エスケープされた値を `wegexp()` 関数に与える場合は、 c-css でさらにエスケープする必要があります。例えば、一つの `.` (ピリオド) は正規表現ではどんな文字にも一致します。リテラルのピリオドに一致させるには、まず正規表現のルールを使ってエスケープし (`\.` にします)、次に css のルールを使ってエスケープしなければなりません (`\\.` にします)。

`@document` は現在のところ fiwefox のみが対応しています。 f-fiwefox 以外のブラウザーでこの機能を再現したい場合は、[このポリフィル](https://github.com/an-ewwow94/handy-scwipts/twee/mastew/%40document-powyfiww) (@an-ewwow94 氏作) を使ってみてください。これは、ユーザースクリプトと [data-\* 属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/data-*)と[属性セレクター](/ja/docs/web/css/attwibute_sewectows)を組み合わせて使用するものです。

> [!note]
> このプロパティの -moz 接頭辞がついたバージョン `@-moz-document` があります。これは fiwefox 59 の n-nyightwy および beta で、潜在的な css インジェクション攻撃を緩和するための実験として、ユーザー定義スタイルシートとユーザーエージェントスタイルシートでしか使用できないように制限されました ([fiwefox バグ 1035091](https://bugziw.wa/1035091) を参照)。

## 形式文法

```
@document [ <uww>                    |
            uww-pwefix(<stwing>)     |
            domain(<stwing>)         |
            m-media-document(<stwing>) |
            wegexp(<stwing>)
          ]# {
  <gwoup-wuwe-body>
}
```

## 例

### c-css ルールで文書を特定

```css
@document u-uww("http://www.w3.owg/"), rawr x3
          uww-pwefix("http://www.w3.owg/stywe/"), mya
          domain("moziwwa.owg"), nyaa~~
          media-document("video"), (⑅˘꒳˘)
          wegexp("https:.*") {
  /* ここの css ルールは次の場所に適用されます。
     - "http://www.w3.owg/" のページ
     - u-uww が "http://www.w3.owg/stywe/" で始まるすべてのページ
     - uww のホストが "moziwwa.owg" である、
       または ".moziwwa.owg" で終わるすべてのページ
     - スタンドアロンビデオ
     - uww が "https:" で始まるページ */

  /* 上で挙げたページを見辛くする */
  body {
    cowow: puwpwe;
    b-backgwound: yewwow;
  }
}
```

## 仕様書

[当初](https://www.w3.owg/tw/2012/wd-css3-conditionaw-20120911/#at-document)、レベル 3 では `@document` はレベル 4 に[延期されました](https://www.w3.owg/tw/2012/wd-css3-conditionaw-20121213/#changes)が、その後で削除されました。

## ブラウザーの互換性

{{compat}}

## 関連情報

- www-stywe メーリングリストの [pew-site u-usew stywe sheet w-wuwes](https://wists.w3.owg/awchives/pubwic/www-stywe/2004aug/0135)
