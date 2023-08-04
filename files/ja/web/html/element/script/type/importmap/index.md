---
title: <script type="importmap">
slug: Web/HTML/Element/script/type/importmap
l10n:
  sourceCommit: 584921f4ba65580c5dce7f9c4181ad7a12f41bd9
---

{{HTMLSidebar}}

**`importmap`** の値を [`<script>` 要素](/ja/docs/Web/HTML/Element/script)の [`type`](/ja/docs/Web/HTML/Element/script/type) 属性に設定すると、要素の本体がインポートマップであることを示します。

インポートマップは、[JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)をインポートする際に、ブラウザがモジュール指定子を解決する方法を開発者が制御できるようにするための JSON オブジェクトです。これは、[`import` 文](/ja/docs/Web/JavaScript/Reference/Statements/import)や [`import()` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/import)でモジュール指定子として使用されたテキストと、指定子を解決するときにテキストを置き換える対応する値との間の対応表を提供します。
JSON オブジェクトは、[JSON のインポートマップ表現](#json_のインポートマップ表現)に適合している必要があります。

インポートマップは、静的インポートや動的インポートのモジュール指定子を解決するために使用されるため、マップ内で宣言された指定子を使用してモジュールをインポートする `<script>` 要素の前に宣言し、処理する必要があります。
インポートマップは [`import` 文](/ja/docs/Web/JavaScript/Reference/Statements/import)や [`import()` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/import)にあるモジュール指定子のみに適用され、 `<script>` 要素の `src` 属性のパスには適用されないことに注意をしてください。

詳しい情報は、JavaScript モジュールガイドの[インポートマップを使用したモジュールのインポート](/ja/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)の節を参照してください。

## 構文

```html
<script type="importmap">
  // JSON オブジェクト定義インポート
</script>
```

`src`、`async`、`nomodule`、`defer`、`crossorigin`、`integrity`、`referrerpolicy` の各属性は指定することはできません。

文書内のインライン定義された最初のインポートマップのみが処理され、それ以降のインポートマップや外部インポートマップは無視されます。

### 例外

- `TypeError`
  - : インポートマップの定義が JSON オブジェクトでない、`importmap` のキーは定義されているがその値が JSON オブジェクトでない、`scopes` のキーは定義されているが、その値が JSON オブジェクトでない。

ブラウザーは、インポートマップの JSON が[インポートマップ](#json_のインポートマップ表現)スキーマに適合していない他の場合、コンソール警告を生成します。

処理されない `type="importmap"` を持つスクリプト要素では [`error` イベント](/ja/docs/Web/API/HTMLElement/error_event)が発行されます。
これは例えば、インポートマップが処理されるときにモジュールの読み込みが既に始まっている場合や、複数のインポートマップがページ内で定義されている場合に発生することがあります。

## 解説

[JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)をインポートする場合は、 [`import` 文](/ja/docs/Web/JavaScript/Reference/Statements/import)と [`import()` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/import)のどちらであっても、インポートするモジュールを示す「モジュール指定子」があります。
ブラウザーは、モジュールをインポートするために、この指定子を絶対的な URL に解決できなければなりません。

例えば、以下の記述では、文書のベース URL からの相対パスであるモジュール指定子 `"./modules/shapes/square.js"` と絶対 URL であるモジュール指定子 `"https://example.com/shapes/circle.js"` から要素をインポートします。

```js
import { name as squareName, draw } from "./modules/shapes/square.js";
import { name as circleName } from "https://example.com/shapes/circle.js";
```

インポートマップにより、開発者はモジュール指定子に（ほとんど）好きなテキストを指定することができます。対応表は、モジュール指定子が解決されたときにテキストを置き換える、対応する値を提供します。

### ベアモジュール

下記のインポートマップは `imports` キーを定義しており、`square` と `circle` というプロパティを持つ「モジュール指定マップ」を持ちます。

```html
<script type="importmap">
  {
    "imports": {
      "square": "./module/shapes/square.js",
      "circle": "https://example.com/shapes/circle.js"
    }
  }
</script>
```

このインポートマップを使えば、上記と同じモジュールをインポートすることができますが、モジュール指定子には「ベアモジュール」を使用します。

```js
import { name as squareName, draw } from "square";
import { name as circleName } from "circle";
```

### パス接頭辞のマッピング

モジュール指定子のマップキーは、モジュール指定子のパスの接頭辞を割り当て直すために使用することもできます。
この場合、プロパティと割り当てられたパスは、どちらも末尾にフォワードスラッシュ (`/`) を保有する必要があることに注意してください。

```html
<script type="importmap">
  {
    "imports": {
      "shapes/": "./module/shapes/",
      "othershapes/": "https://example.com/modules/shapes/"
    }
  }
</script>
```

そして、次のように circle モジュールをインポートすることができました。

```js
import { name as circleName } from "shapes/circle.js";
```

### モジュール指定された対応表のキーに含まれるパス

モジュール指定子のキーは単一の単語名（「素の名前」）である必要はありません。
また、パス区切り文字を含めたり、パス区切り文字で終わったり、絶対 URL であったり、`/`、`./`、`../` で始まる相対 URL パスであったりすることも可能です。

```json
{
  "imports": {
    "modules/shapes/": "./module/src/shapes/",
    "modules/square": "./module/src/other/shapes/square.js",
    "https://example.com/modules/square.js": "./module/src/other/shapes/square.js",
    "../modules/shapes/": "/modules/shapes/"
  }
}
```

モジュール指定子マップに一致する可能性のある複数のモジュール指定子キーがある場合、最も詳細なキー（つまり、より長いパス/値を持つもの）が選択されます。

モジュール指定子 `./foo/../js/app.js` は照合される前に `./js/app.js` に解決されるでしょう。
これは、モジュール指定子のキーが `./js/app.js` であれば、それらがまったく同じでないとしても、モジュール指定子と一致することを意味しています。

### スコープ化されたモジュール指定子の対応表

scopes` キーを使って、モジュールをインポートするスクリプトが特定の URL パスを格納した場合にのみ使用される対応付けを提供することができます。
読み込むスクリプトの URL が指定されたパスに一致する場合、そのスコープに関連付けられたマッピングが使用されます。
これにより、インポートを行うコードによって異なるバージョンのモジュールを使用することができます。

例えば、下記の地図は、ローディングモジュールの URL にパスが記載されている場合にのみ、スコープ付きのマップを使用します。"/modules/customshapes/" というパスが含まれるローディングモジュールの場合のみ、スコープ付きマップが使用されます。

```html
<script type="importmap">
  {
    "imports": {
      "square": "./module/shapes/square.js"
    },
    "scopes": {
      "/modules/customshapes/": {
        "square": "https://example.com/modules/shapes/square.js"
      }
    }
  }
</script>
```

複数のスコープがリファラー URL に一致した場合、最も詳細なスコープパスが使用されます（スコープキー名の中で最も長い名前のものが使用されます）。
ブラウザーは、一致する指定子がない場合は次に最も詳細なスコープパスに代替され、最終的には `imports` キーのモジュール指定子マップに代替されます。

## JSON のインポートマップ表現

以下は、インポートマップの JSON 表現に関する「公式な」定義です。

インポートマップは有効な JSON オブジェクトでなければならず、最大で 2 つのオプションキーを定義することができます。`import` と `scope` です。それぞれのキーの値はオブジェクトでなければならず、空でも構いません。

- `imports` {{optional_inline}}

  - : 値は[モジュール指定子マップ](#モジュール指定子マップ)で、 `import` 文や `import()` 演算子に現れるかもしれないモジュール指定子テキストと、指定子が解決されたときにそれを置き換えるテキストとの間のマッピングを提供するものです。

    これは `scopes` パスの URL が一致しない場合や、一致する `scopes` パスのモジュール指定子マップにモジュール指定子と一致するキーが格納されていない場合に、一致するモジュール指定子を探すために検索される予備的な対応表になります。

    - `<モジュール指定子マップ>`

      - : 「モジュール指定子マップ」は有効な JSON オブジェクトで、_キー_ はモジュールをインポートする際にモジュール指定子内に存在する可能性のあるテキスト、対応する _値_ はモジュール指定子をアドレスに解決する際にこのテキストを置き換える URL やパスです。

        モジュール指定子マップの JSON オブジェクトは、以下の条件を保有します。

        - どのキーも空であってはなりません。
        - 値はすべて文字列で、有効な絶対 URL か、`/`, `./`, `../` で始まる有効な URL 文字列を定義する必要があります。
        - キーが `/` で終わっている場合、対応する値も `/` で終わらなければなりません。
          末尾に `/` を持つキーは、モジュールのアドレスを割り当てられた（または再割り当てされた）ときの接頭辞として使用することができます。
        - オブジェクトプロパティの順序は関係ありません。複数のキーがモジュール指定子に一致する場合、最も詳細なキーが使用されます（言い換えれば、指定子 "olive/branch/" は "olive/" の前に一致することになります）。

- `scopes` {{optional_inline}}

  - : スコープはパス固有の[モジュール指定子マップ](#モジュール指定子マップ)を定義し、モジュールをインポートするコードのパスに依存したマップの選択を可能にします。

    scopes オブジェクトは有効な JSON オブジェクトで、各プロパティは `<scope key>` で、これは URL パスであり、対応する値は `<モジュール指定子マップ>` です。

    モジュールをインポートしているスクリプトの URL が `<scope key>` のパスに一致する場合、そのキーに関連付けられた `<モジュール指定子マップ>` の値が最初に指定子を一致するかどうか調べます。
    一致するスコープキーが複数ある場合は、最も詳細な/深いスコープパスに関連付けられた値が、最初に一致するモジュール指定子であるかどうかを調べます。
    一致するスコープ付きモジュール指定子マップのいずれにも一致するモジュール指定子キーがない場合には、`imports` にあるフォールバックモジュール指定子マップが使用されます。

    なお、スコープによってアドレスの解決方法が変わることはありません。相対アドレスは常にインポートマップのベース URL に解決されます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [JavaScript モジュール > インポートマップを使用したモジュールのインポート](/ja/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)
- [HTML の `<script>` 要素の `type` 属性](/ja/docs/Web/HTML/Element/script#type)
- [`import` 文](/ja/docs/Web/JavaScript/Reference/Statements/import)
- [`import()` 演算子](/ja/docs/Web/JavaScript/Reference/Operators/import)
