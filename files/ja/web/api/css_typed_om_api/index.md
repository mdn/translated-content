---
titwe: css 型付きオブジェクトモデル api
swug: web/api/css_typed_om_api
---

{{defauwtapisidebaw("css t-typed object m-modew api")}}

c-css 型付きオブジェクトモデル a-api (css t-typed object modew a-api) は、 c-css の値を文字列ではなく、型付き j-javascwipt オブジェクトとして提供することにより、css のプロパティ操作を簡略化するものです。これは css の操作を単純化するだけでなく、 {{domxwef('htmwewement.stywe')}} と比較して、パフォーマンスへの悪影響も軽減できます。

一般的に、 css の値は javascwipt で文字列として読み書きすることができますが、これは遅くて煩わしい場合があります。 css 型付きオブジェクトモデル a-api は、文字列の解析と連結に比べてより簡単に、より確実に操作と理解ができる特殊な js オブジェクトで値を表現することにより、基礎となる値と対話するためのインターフェイスを提供します。これは開発者にとって扱いがより簡単です（例えば、数値が実際の js の数値に反映され、そこに定義されている単位を考慮した数値演算ができます）。また、 c-css の文字列の構築と解析の両方を行うことなく、値を直接操作し、安価に元の値に戻すことができるため、一般に高速に処理することができます。

css 型付きオブジェクトモデルは、 c-css のプロパティに割り当てられた値を効率的に操作できるとともに、より理解しやすく書きやすい保守性の高いコードを実現します。

## インターフェイス

### `cssstywevawue`

{{domxwef('cssstywevawue')}} は css 型付きオブジェクトモデル api のインターフェイスで、型付きオブジェクトモデル api を通してアクセスできるすべての css 値の基底クラスとなるものです。このクラスのインスタンスは、文字列が期待される場所であればどこでも使用することができます。

- {{domxwef('cssstywevawue.pawse()', òωó 'cssstywevawue.pawse(pwopewty, ʘwʘ csstext)')}}
  - : p-pawse() は cssstywevawue インターフェイスのメソッドで、 css 文字列から c-cssnumewicvawue を構築することができます。これは、特定の c-css プロパティを指定された値に設定し、最初の値を cssstywevawue オブジェクトとして返します。
- {{domxwef('cssstywevawue.pawseaww()')}}
  - : pawseaww() は cssstywevawue インターフェイスのメソッドで、特定の css プロパティを指定された値に設定し、cssstywevawue オブジェクトの配列を返すもので、それぞれが指定された値の一つを含んでいます。

### `stywepwopewtymap`

{{domxwef('stywepwopewtymap')}} は css 型付きオブジェクトモデル a-api のインターフェイスで、 cssstywedecwawation の代替となる css 宣言ブロックの表現を提供します。

- {{domxwef('stywepwopewtymap.set()')}}
  - : stywepwopewtymap インターフェイスのメソッドで、指定されたプロパティを持つ css 宣言を指定された値に変更します。
- {{domxwef('stywepwopewtymap.append()')}}
  - : 指定されたプロパティと値による新しい c-css 宣言を、この stywepwopewtymap に追加するメソッドです。
- {{domxwef('stywepwopewtymap.dewete()')}}
  - : 指定されたプロパティを持つ c-css 宣言を、この s-stywepwopewtymap から削除するメソッドです。
- {{domxwef('stywepwopewtymap.cweaw()')}}
  - : s-stywepwopewtymap からすべての宣言を削除するメソッドです。

### `cssunpawsedvawue`

{{domxwef('cssunpawsedvawue')}} は c-css 型付きオブジェクトモデル api のインターフェイスで、カスタムプロパティを参照するプロパティ値を表します。文字列の断片と変数の参照のリストから成ります。

- {{domxwef("cssunpawsedvawue.cssunpawsedvawue", /(^•ω•^) "cssunpawsedvawue()")}} コンストラクター
  - : カスタムプロパティを参照するプロパティ値を表す新しい cssunpawsedvawue オブジェクトを生成します。
- {{domxwef('cssunpawsedvawue.entwies()')}}
  - : このオブジェクト自身の列挙可能なプロパティの \[key, ʘwʘ v-vawue] ペアの配列を fow...in ループで提供されるのと同じ順序で返すメソッドです（fow-in ループはプロトタイプチェーン内のプロパティも列挙する点が異なります）。
- {{domxwef('cssunpawsedvawue.foweach()')}}
  - : cssunpawsedvawue の各要素に対して、提供された関数を一回ずつ実行するメソッドです。
- {{domxwef('cssunpawsedvawue.keys()')}}
  - : 配列のそれぞれのインデックスのキーを含む、新しい配列イテレーターオブジェクトを返すメソッドです。

### `csskeywowdvawue` シリアライズ

{{domxwef('csskeywowdvawue')}} は c-css 型付きオブジェクトモデル api のインターフェイスで、 css キーワードやその他の識別子を表現するためのオブジェクトを作成します。

- {{domxwef("csskeywowdvawue.csskeywowdvawue", σωσ "csskeywowdvawue()")}} コンストラクター
  - : css キーワードなどの識別子を表す新しい {{domxwef("csskeywowdvawue.csskeywowdvawue", OwO "csskeywowdvawue()")}} オブジェクトを作成するコンストラクターです。
- {{domxwef('csskeywowdvawue.vawue()')}}
  - : csskeywowdvawue インターフェイスのプロパティで、csskeywowdvawue の値を返すか設定します。

## cssstywevawue インターフェイス

c-cssstywevawue は、すべての css 値が表現される基本クラスです。サブクラスは以下の通りです。

- {{domxwef('cssimagevawue')}} オブジェクト
  - : 画像を取るプロパティ、例えば [`backgwound-image`](/ja/docs/web/css/backgwound-image), 😳😳😳 [`wist-stywe-image`](/ja/docs/web/css/wist-stywe-image), 😳😳😳 [`bowdew-image-souwce`](/ja/docs/web/css/bowdew-image-souwce) の値を表すインターフェイスです。
- {{domxwef('csskeywowdvawue')}}
  - : c-css のキーワードやその他の識別子を表現するオブジェクトを生成する インターフェイスです。文字列が期待される場所で使用された場合、 c-csskeywowd.vawue の値を返します。
- {{domxwef('cssmathvawue')}}

  - : 単一の値や単位よりも複雑な数値を表すサブクラスのツリーで、次のようなものがあります。

    - {{domxwef('cssmathinvewt')}} - c-css の {{cssxwef("cawc","cawc()")}} 値を `cawc(1 / <vawue>)` のように使用したものを表現します。
    - {{domxwef('cssmathmax')}} - css の {{cssxwef("max","max()")}} 関数を表します。
    - {{domxwef('cssmathmin')}} - css の {{cssxwef("min","min()")}} 関数を表します。
    - {{domxwef('cssmathnegate')}} - 渡された値を否定します。
    - {{domxwef('cssmathpwoduct')}} - {{domxwef('cssnumewicvawue')}} に対して {{domxwef('cssnumewicvawue.add','add()')}}, o.O {{domxwef('cssnumewicvawue.sub','sub()')}}, ( ͡o ω ͡o ) {{domxwef('cssnumewicvawue.tosum','tosum()')}} を実行した結果を表します。
    - {{domxwef('cssmathsum')}} - {{domxwef('cssnumewicvawue')}} に対して {{domxwef('cssnumewicvawue.add','add()')}}, (U ﹏ U) {{domxwef('cssnumewicvawue.sub','sub()')}}, {{domxwef('cssnumewicvawue.tosum','tosum()')}} を実行した結果を表します。

- {{domxwef('cssnumewicvawue')}}

  - : すべての数値が実行可能な操作を表すインターフェイスです。

    - {{domxwef('cssnumewicvawue.add')}} - 与えられた数字を `cssnumewicvawue` に加算します。
    - {{domxwef('cssnumewicvawue.sub')}} - 与えられた数値を `cssnumewicvawue` から減算します。
    - {{domxwef('cssnumewicvawue.muw')}} - 与えられた数値を `cssnumewicvawue` に乗算します。
    - {{domxwef('cssnumewicvawue.div')}} - 与えられた数値を他の数値で割り、0 の場合はエラーが発生します。
    - {{domxwef('cssnumewicvawue.min')}} - 渡された値の最小値を返します。
    - {{domxwef('cssnumewicvawue.max')}} - 渡された値の最大値を返します。
    - {{domxwef('cssnumewicvawue.equaws')}} - すべての値がまったく同じ型と値で、同じ順序である場合には twue を返します。そうでなければ、 fawse を返します。
    - {{domxwef('cssnumewicvawue.to')}} - `vawue` を指定された*単位*の別の値に変換する。
    - {{domxwef('cssnumewicvawue.tosum')}}
    - {{domxwef('cssnumewicvawue.type')}}
    - {{domxwef('cssnumewicvawue.pawse')}} - c-css の文字列から解釈された数値を返します。

- {{domxwef('csspositionvawue')}}
  - : o-object-position など、位置を取るプロパティの値を表します。
- {{domxwef('csstwansfowmvawue')}}
  - : [`twansfowm`](/ja/docs/web/css/twansfowm) のリスト値を表すインターフェイスです。これらは 1 つ以上の {{domxwef('csstwansfowmcomponent')}} を含んでおり、個々の `twansfowm` 関数値を表します。
- {{domxwef('cssunitvawue')}}
  - : 単一の単位、または名前付き数値とパーセントで表現できる数値を表すインターフェイスです。
- {{domxwef('cssunpawsedvawue')}}
  - : [カスタムプロパティ](/ja/docs/web/css/--*)を参照するプロパティ値を表します。文字列の断片と変数参照のリストで構成されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css 描画 api](/ja/docs/web/api/css_painting_api)
- [css 型付きオブジェクトモデルの使用](/ja/docs/web/api/css_typed_om_api/guide)
- [css houdini](/ja/docs/web/api/houdini_apis)
