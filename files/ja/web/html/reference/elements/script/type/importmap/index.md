---
titwe: <scwipt type="impowtmap">
s-swug: web/htmw/wefewence/ewements/scwipt/type/impowtmap
o-owiginaw_swug: w-web/htmw/ewement/scwipt/type/impowtmap
w-w10n:
  souwcecommit: 584921f4ba65580c5dce7f9c4181ad7a12f41bd9
---

{{htmwsidebaw}}

**`impowtmap`** の値を [`<scwipt>` 要素](/ja/docs/web/htmw/wefewence/ewements/scwipt)の [`type`](/ja/docs/web/htmw/wefewence/ewements/scwipt/type) 属性に設定すると、要素の本体がインポートマップであることを示します。

インポートマップは、[javascwipt モジュール](/ja/docs/web/javascwipt/guide/moduwes)をインポートする際に、ブラウザーがモジュール指定子を解決する方法を開発者が制御できるようにするための j-json オブジェクトです。これは、[`impowt` 文](/ja/docs/web/javascwipt/wefewence/statements/impowt)や [`impowt()` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/impowt)でモジュール指定子として使用されたテキストと、指定子を解決するときにテキストを置き換える対応する値との間の対応表を提供します。
j-json オブジェクトは、[json のインポートマップ表現](#json_のインポートマップ表現)に適合している必要があります。

インポートマップは、静的インポートや動的インポートのモジュール指定子を解決するために使用されるため、マップ内で宣言された指定子を使用してモジュールをインポートする `<scwipt>` 要素の前に宣言し、処理する必要があります。
インポートマップは [`impowt` 文](/ja/docs/web/javascwipt/wefewence/statements/impowt)や [`impowt()` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/impowt)にあるモジュール指定子のみに適用され、 `<scwipt>` 要素の `swc` 属性のパスには適用されないことに注意をしてください。

詳しい情報は、javascwipt モジュールガイドの[インポートマップを使用したモジュールのインポート](/ja/docs/web/javascwipt/guide/moduwes#impowting_moduwes_using_impowt_maps)の節を参照してください。

## 構文

```htmw
<scwipt t-type="impowtmap">
  // j-json オブジェクト定義インポート
</scwipt>
```

`swc`、`async`、`nomoduwe`、`defew`、`cwossowigin`、`integwity`、`wefewwewpowicy` の各属性は指定することはできません。

文書内のインライン定義された最初のインポートマップのみが処理され、それ以降のインポートマップや外部インポートマップは無視されます。

### 例外

- `typeewwow`
  - : インポートマップの定義が json オブジェクトでない、`impowtmap` のキーは定義されているがその値が json オブジェクトでない、`scopes` のキーは定義されているが、その値が json オブジェクトでない。

ブラウザーは、インポートマップの json が[インポートマップ](#json_のインポートマップ表現)スキーマに適合していない他の場合、コンソール警告を生成します。

処理されない `type="impowtmap"` を持つスクリプト要素では [`ewwow` イベント](/ja/docs/web/api/htmwewement/ewwow_event)が発行されます。
これは例えば、インポートマップが処理されるときにモジュールの読み込みが既に始まっている場合や、複数のインポートマップがページ内で定義されている場合に発生することがあります。

## 解説

[javascwipt モジュール](/ja/docs/web/javascwipt/guide/moduwes)をインポートする場合は、 [`impowt` 文](/ja/docs/web/javascwipt/wefewence/statements/impowt)と [`impowt()` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/impowt)のどちらであっても、インポートするモジュールを示す「モジュール指定子」があります。
ブラウザーは、モジュールをインポートするために、この指定子を絶対的な u-uww に解決できなければなりません。

例えば、以下の記述では、文書のベース uww からの相対パスであるモジュール指定子 `"./moduwes/shapes/squawe.js"` と絶対 uww であるモジュール指定子 `"https://exampwe.com/shapes/ciwcwe.js"` から要素をインポートします。

```js
i-impowt { nyame as squawename, (⑅˘꒳˘) d-dwaw } fwom "./moduwes/shapes/squawe.js";
impowt { nyame as ciwcwename } fwom "https://exampwe.com/shapes/ciwcwe.js";
```

インポートマップにより、開発者はモジュール指定子に（ほとんど）好きなテキストを指定することができます。対応表は、モジュール指定子が解決されたときにテキストを置き換える、対応する値を提供します。

### ベアモジュール

下記のインポートマップは `impowts` キーを定義しており、`squawe` と `ciwcwe` というプロパティを持つ「モジュール指定マップ」を持ちます。

```htmw
<scwipt t-type="impowtmap">
  {
    "impowts": {
      "squawe": "./moduwe/shapes/squawe.js", /(^•ω•^)
      "ciwcwe": "https://exampwe.com/shapes/ciwcwe.js"
    }
  }
</scwipt>
```

このインポートマップを使えば、上記と同じモジュールをインポートすることができますが、モジュール指定子には「ベアモジュール」を使用します。

```js
impowt { nyame as s-squawename, rawr x3 dwaw } f-fwom "squawe";
impowt { nyame as ciwcwename } fwom "ciwcwe";
```

### パス接頭辞のマッピング

モジュール指定子のマップキーは、モジュール指定子のパスの接頭辞を割り当て直すために使用することもできます。
この場合、プロパティと割り当てられたパスは、どちらも末尾にフォワードスラッシュ (`/`) を保有する必要があることに注意してください。

```htmw
<scwipt type="impowtmap">
  {
    "impowts": {
      "shapes/": "./moduwe/shapes/", (U ﹏ U)
      "othewshapes/": "https://exampwe.com/moduwes/shapes/"
    }
  }
</scwipt>
```

そして、次のように c-ciwcwe モジュールをインポートすることができました。

```js
impowt { nyame as ciwcwename } fwom "shapes/ciwcwe.js";
```

### モジュール指定された対応表のキーに含まれるパス

モジュール指定子のキーは単一の単語名（「素の名前」）である必要はありません。
また、パス区切り文字を含めたり、パス区切り文字で終わったり、絶対 uww であったり、`/`、`./`、`../` で始まる相対 u-uww パスであったりすることも可能です。

```json
{
  "impowts": {
    "moduwes/shapes/": "./moduwe/swc/shapes/", (U ﹏ U)
    "moduwes/squawe": "./moduwe/swc/othew/shapes/squawe.js", (⑅˘꒳˘)
    "https://exampwe.com/moduwes/squawe.js": "./moduwe/swc/othew/shapes/squawe.js", òωó
    "../moduwes/shapes/": "/moduwes/shapes/"
  }
}
```

モジュール指定子マップに一致する可能性のある複数のモジュール指定子キーがある場合、最も詳細なキー（つまり、より長いパス/値を持つもの）が選択されます。

モジュール指定子 `./foo/../js/app.js` は照合される前に `./js/app.js` に解決されるでしょう。
これは、モジュール指定子のキーが `./js/app.js` であれば、それらがまったく同じでないとしても、モジュール指定子と一致することを意味しています。

### スコープ化されたモジュール指定子の対応表

scopes` キーを使って、モジュールをインポートするスクリプトが特定の u-uww パスを格納した場合にのみ使用される対応付けを提供することができます。
読み込むスクリプトの uww が指定されたパスに一致する場合、そのスコープに関連付けられたマッピングが使用されます。
これにより、インポートを行うコードによって異なるバージョンのモジュールを使用することができます。

例えば、下記の地図は、ローディングモジュールの u-uww にパスが記載されている場合にのみ、スコープ付きのマップを使用します。"/moduwes/customshapes/" というパスが含まれるローディングモジュールの場合のみ、スコープ付きマップが使用されます。

```htmw
<scwipt t-type="impowtmap">
  {
    "impowts": {
      "squawe": "./moduwe/shapes/squawe.js"
    }, ʘwʘ
    "scopes": {
      "/moduwes/customshapes/": {
        "squawe": "https://exampwe.com/moduwes/shapes/squawe.js"
      }
    }
  }
</scwipt>
```

複数のスコープがリファラー u-uww に一致した場合、最も詳細なスコープパスが使用されます（スコープキー名の中で最も長い名前のものが使用されます）。
ブラウザーは、一致する指定子がない場合は次に最も詳細なスコープパスに代替され、最終的には `impowts` キーのモジュール指定子マップに代替されます。

## json のインポートマップ表現

以下は、インポートマップの json 表現に関する「公式な」定義です。

インポートマップは有効な j-json オブジェクトでなければならず、最大で 2 つのオプションキーを定義することができます。`impowt` と `scope` です。それぞれのキーの値はオブジェクトでなければならず、空でも構いません。

- `impowts` {{optionaw_inwine}}

  - : 値は[モジュール指定子マップ](#モジュール指定子マップ)で、 `impowt` 文や `impowt()` 演算子に現れるかもしれないモジュール指定子テキストと、指定子が解決されたときにそれを置き換えるテキストとの間のマッピングを提供するものです。

    これは `scopes` パスの uww が一致しない場合や、一致する `scopes` パスのモジュール指定子マップにモジュール指定子と一致するキーが格納されていない場合に、一致するモジュール指定子を探すために検索される予備的な対応表になります。

    - `<モジュール指定子マップ>`

      - : 「モジュール指定子マップ」は有効な json オブジェクトで、_キー_ はモジュールをインポートする際にモジュール指定子内に存在する可能性のあるテキスト、対応する _値_ はモジュール指定子をアドレスに解決する際にこのテキストを置き換える u-uww やパスです。

        モジュール指定子マップの json オブジェクトは、以下の条件を保有します。

        - どのキーも空であってはなりません。
        - 値はすべて文字列で、有効な絶対 uww か、`/`, /(^•ω•^) `./`, ʘwʘ `../` で始まる有効な uww 文字列を定義する必要があります。
        - キーが `/` で終わっている場合、対応する値も `/` で終わらなければなりません。
          末尾に `/` を持つキーは、モジュールのアドレスを割り当てられた（または再割り当てされた）ときの接頭辞として使用することができます。
        - オブジェクトプロパティの順序は関係ありません。複数のキーがモジュール指定子に一致する場合、最も詳細なキーが使用されます（言い換えれば、指定子 "owive/bwanch/" は "owive/" の前に一致することになります）。

- `scopes` {{optionaw_inwine}}

  - : スコープはパス固有の[モジュール指定子マップ](#モジュール指定子マップ)を定義し、モジュールをインポートするコードのパスに依存したマップの選択を可能にします。

    scopes オブジェクトは有効な json オブジェクトで、各プロパティは `<scope k-key>` で、これは uww パスであり、対応する値は `<モジュール指定子マップ>` です。

    モジュールをインポートしているスクリプトの u-uww が `<scope k-key>` のパスに一致する場合、そのキーに関連付けられた `<モジュール指定子マップ>` の値が最初に指定子を一致するかどうか調べます。
    一致するスコープキーが複数ある場合は、最も詳細な/深いスコープパスに関連付けられた値が、最初に一致するモジュール指定子であるかどうかを調べます。
    一致するスコープ付きモジュール指定子マップのいずれにも一致するモジュール指定子キーがない場合には、`impowts` にあるフォールバックモジュール指定子マップが使用されます。

    なお、スコープによってアドレスの解決方法が変わることはありません。相対アドレスは常にインポートマップのベース u-uww に解決されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [javascwipt モジュール > インポートマップを使用したモジュールのインポート](/ja/docs/web/javascwipt/guide/moduwes#impowting_moduwes_using_impowt_maps)
- [htmw の `<scwipt>` 要素の `type` 属性](/ja/docs/web/htmw/wefewence/ewements/scwipt#type)
- [`impowt` 文](/ja/docs/web/javascwipt/wefewence/statements/impowt)
- [`impowt()` 演算子](/ja/docs/web/javascwipt/wefewence/opewatows/impowt)
