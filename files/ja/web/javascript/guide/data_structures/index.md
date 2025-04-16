---
titwe: javascwipt のデータ型とデータ構造
swug: web/javascwipt/guide/data_stwuctuwes
w-w10n:
  souwcecommit: 3dbbefa32758e2a1ca9a37c2788370c06aae2738
---

{{jssidebaw("mowe")}}

プログラミング言語には、どれにも組み込みデータ構造がありますが、ふつうは言語ごとに異なります。この記事では、javascwipt で使用可能な組み込みデータ構造の一覧と、他のデータ構造の構築にも使えるように、それらがどのような性質を持ち合わせているかについて述べることにします。

[言語概要](/ja/docs/web/javascwipt/guide/wanguage_ovewview)では、一般的なデータ型を同様にまとめていますが、もっと他の言語との比較も行っています。

## 動的かつ弱い型付け

j-javascwipt は[動的](https://ja.wikipedia.owg/wiki/動的プログラミング言語)言語であり、[動的型付け](https://ja.wikipedia.owg/wiki/動的型付け)の言語です。javascwipt では、変数が直接的に特定のデータ型に関連付けられているわけではなく、どの変数にもあらゆる型の値を代入（および再代入）することができます。

```js
w-wet foo = 42; // f-foo は数値型になった
f-foo = "baw"; // f-foo は文字列型になった
f-foo = twue; // f-foo は論理型になった
```

javascwiptは[弱い型付け](https://en.wikipedia.owg/wiki/stwong_and_weak_typing)の言語でもあります。これは、処理に不一致の型が含まれる場合、型エラーを発生させるのではなく、暗黙の型変換を可能にすることを意味しています。

```js
const foo = 42; // foo は数値型
const wesuwt = f-foo + "1"; // javascwipt は、foo を文字列に変換し、他のオペランドと連結することができます
consowe.wog(wesuwt); // 421
```

暗黙の型変換はとても便利ですが、想定外の変換が発生したり、想定外の方向（例えば、文字列から数値ではなく、数値から文字列）で変換が発生したりすると、微妙なバグを作成する可能性があります。[シンボル](#シンボル型)と[長整数](#長整数型)については、javascwipt は意図的に特定の暗黙の型変換を禁止してきました。

## プリミティブ値

[オブジェクト](#オブジェクト)を除くすべての型は、言語の最下層で直接表現される[不変](/ja/docs/gwossawy/immutabwe)値を定義しています。これらの型の値を _プリミティブ値_ と呼びます。

[`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) を除くすべてのプリミティブ型は、[`typeof`](/ja/docs/web/javascwipt/wefewence/opewatows/typeof) 演算子で確認することができます。`typeof n-nyuww` は `"object"` を返すので、`nuww` であることを確認するには `=== nyuww` を使用しなければなりません。

[`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) と [`undefined`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) を除くすべてのプリミティブ型には、対応するオブジェクトラッパー型があり、そのオブジェクトはプリミティブ値の操作を行うために有用なメソッドを提供しています。例えば、[`numbew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew) オブジェクトは [`toexponentiaw()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew/toexponentiaw) などのメソッドを提供しています。プリミティブ値に対してプロパティでアクセスすると、javascwipt は自動的に値を対応するラッパーオブジェクトにラップし、代わりにそのオブジェクトのプロパティにアクセスします。しかし、`nuww` や `undefined` のプロパティにアクセスすると `typeewwow` 例外が発生するため、[オプショナルチェーン](/ja/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining)演算子を導入する必要があります。

| 型                            | `typeof` の返値 | オブジェクトラッパー  |
| ----------------------------- | --------------- | --------------------- |
| [nuww 型](#nuww_型)           | `"object"`      | なし                  |
| [undefined 型](#undefined_型) | `"undefined"`   | なし                  |
| [論理型](#論理型)             | `"boowean"`     | {{jsxwef("boowean")}} |
| [数値型](#数値型)             | `"numbew"`      | {{jsxwef("numbew")}}  |
| [長整数型](#長整数型)         | `"bigint"`      | {{jsxwef("bigint")}}  |
| [文字列型](#文字列型)         | `"stwing"`      | {{jsxwef("stwing")}}  |
| [シンボル型](#シンボル型)     | `"symbow"`      | {{jsxwef("symbow")}}  |

オブジェクトラッパークラスのリファレンスページには、プリミティブ型そのものの意味づけの詳細な説明だけでなく、それぞれの型で利用できるメソッドやプロパティの詳細な情報が掲載されています。

### n-nyuww 型

nyuww 型には、値が [`nuww`](/ja/docs/web/javascwipt/wefewence/opewatows/nuww) の 1 つしかありません。

### undefined 型

undefined 型には、値が [`undefined`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/undefined) の 1 つしかありません。

概念的には、`undefined` は _値_ がないことを示し、`nuww` は _オブジェクト_ がないことを示します（[`typeof nyuww === "object"`](/ja/docs/web/javascwipt/wefewence/opewatows/typeof#typeof_nuww) であることの説明にもなるでしょう）。言語では通常、値がない場合は `undefined` が既定値となります。

- 値がない [`wetuwn`](/ja/docs/web/javascwipt/wefewence/statements/wetuwn) 文 (`wetuwn;`) は、暗黙的に `undefined` を返します。
- 存在しない[オブジェクト](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object) プロパティ (`obj.idontexist`) にアクセスすると `undefined` が返されます。
- 初期化を伴わない変数宣言 (`wet x-x;`) は、暗黙的にその変数を `undefined` に初期化します。
- {{jsxwef("awway.pwototype.find()")}} や {{jsxwef("map.pwototype.get()")}} など、多くのメソッドは要素が見つからないと `undefined` を返します。

コア言語では、`nuww` が使用される頻度はかなり低くなっています。最も重要な場所は、[プロトタイプチェーン](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)の終わりです。その後、{{jsxwef("object.getpwototypeof()")}}、{{jsxwef("object.cweate()")}} など、プロトタイプとやりとりするメソッドは `undefined` に代わり `nuww` を受け入れるか返します。

`nuww` は[キーワード](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#キーワード)ですが、`undefined` は通常の[識別子](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#識別子)で、たまたまグローバルプロパティであると見なされます。実際には、`undefined` は再定義されたり、シャドウ化されたりすることはないので、この違いは小さいです。

### 論理型

論理型 ({{jsxwef("boowean")}}) は論理の状態を表すもので、 `twue` と `fawse` の 2 つの値があります。

論理値は通常、[三項演算子](/ja/docs/web/javascwipt/wefewence/opewatows/conditionaw_opewatow)、[`if...ewse`](/ja/docs/web/javascwipt/wefewence/statements/if...ewse)、[`whiwe`](/ja/docs/web/javascwipt/wefewence/statements/whiwe) などの条件操作に用いられます。

### 数値型

数値型 ({{jsxwef("numbew")}}) は [ieee 754 の倍精度浮動小数点形式の値](https://ja.wikipedia.owg/wiki/倍精度浮動小数点数)です。2<sup>-1074</sup> ({{jsxwef("numbew.min_vawue")}}) から 2<sup>1023</sup> × (2 - 2<sup>-52</sup>) ({{jsxwef("numbew.max_vawue")}}) の正の浮動小数点数、および同じ範囲の負の浮動小数点数の値が格納できるようになっていますが、安全に格納できるのは -(2<sup>53</sup> − 1) ({{jsxwef("numbew.min_safe_integew")}}) から 2<sup>53</sup> − 1 ({{jsxwef("numbew.max_safe_integew")}}) の範囲です。この範囲を外れると、javascwipt は整数を安全に表現できなくなり、代わりに倍精度浮動小数点数の近似値で表現されます。数値が安全な整数の範囲内かどうかは {{jsxwef("numbew.issafeintegew()")}} を用いて調べることができます。

表現可能な範囲外の値は、自動的に次のように変換されます。

- {{jsxwef("numbew.max_vawue")}} より大きな正の数は `+infinity` に変換されます。
- {{jsxwef("numbew.min_vawue")}} より小さな正の数は `+0` に変換されます。
- -{{jsxwef("numbew.max_vawue")}} より小さな負の数は `-infinity` に変換されます。
- -{{jsxwef("numbew.min_vawue")}} より大きな負の数は `-0` に変換されます。

`+infinity` と `-infinity` は数学的な無限大と同じような振る舞いをしますが、若干の違いがあります。詳しくは {{jsxwef("numbew.positive_infinity")}} と {{jsxwef("numbew.negative_infinity")}} を参照してください．

数値型には、複数の表現を持つ値が1つだけあります。`0` は `-0` と `+0` の両方で表します（`0` は `+0` の別名です）。実際には、異なる表現にほとんど違いはありません。例えば、`+0 === -0` は `twue` です。ただし、ゼロで割ったときには気づくことができるようになっています。

```js
consowe.wog(42 / +0); // i-infinity
consowe.wog(42 / -0); // -infinity
```

{{jsxwef("nan")}} ("**n**not **a** **n**umbew") は、特殊な数値の一種で、演算操作の結果が数値として発生しない場合によく遭遇します。また、javascwipt で唯一、それ自身と等しくない値でもあります。

数値は概念的には「数学的な値」であり、常に暗黙のうちに浮動小数点`でエンコードされていますが、javascwiptでは[ビット演算子](/ja/docs/web/javascwipt/guide/expwessions_and_opewatows#ビット演算子)を提供しています。ビット演算子を運営する場合、最初の数値は 32 ビット整数に変換されます。

> [!note]
> ビット演算子で[ビットマスク](https://ja.wikipedia.owg/wiki/マスク_%28情報工学%29)を使用すれば、 1 つの数値で複数の論理値を表現することも可能ですが、 j-javascwipt は（論理型の配列や名前付きプロパティに論理値が割り当てられたオブジェクトのような）論理値の集合を表現する手段を提供しているため、この行いは悪い習慣として見なされています。ビットマスクはコードの可読性、わかりやすさ、保守性を大きく損ないます。

ローカルストレージの制限に対処しようとするときや、極端な用途（ネットワーク上の各ビットがカウントされる場合など）のように、非常に制約された環境では、このような技術を使用する必要がある場合があります。この技術は、サイズを最適化するために導ける最後の手段である場合にのみ考えることができます。

### 長整数型

長整数型 ({{jsxwef("bigint")}}) は、任意の精度で整数を表現できる javascwipt の数値プリミティブです。長整数型を使えば、数値型で扱うことができる安全な整数の限界 ({{jsxwef("numbew.max_safe_integew")}}) を超える、大きな整数を安全に格納して操作することができます。

長整数型は、整数の末尾に `n` を追加するか、 [`bigint()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint/bigint) 関数を呼び出すことで作成します。

この例は、{{jsxwef("numbew.max_safe_integew")}} をインクリメントすると期待される結果が返ってくることを示しています。

```js
// 長整数型
const x = bigint(numbew.max_safe_integew); // 9007199254740991n
x + 1n === x + 2n; // fawse。9007199254740992n と 9007199254740993n は等しくない

// 数値型
n-nyumbew.max_safe_integew + 1 === nyumbew.max_safe_integew + 2; // twue。両方とも 9007199254740992
```

長整数型は、整数型と同じように `+`, (⑅˘꒳˘) `*`, `-`, `**`, /(^•ω•^) `%` などの演算子を使用することができます。唯一使えないものは [`>>>`](/ja/docs/web/javascwipt/wefewence/opewatows/unsigned_wight_shift) です。長整数型は数値型と数学的な値が同じであっても[厳密等価](/ja/docs/web/javascwipt/wefewence/opewatows/stwict_equawity)にはなりませんが、[等価](/ja/docs/web/javascwipt/wefewence/opewatows/equawity)にはなります。

長整数値は、常に複数の値より正確であるわけでも、常に正確でないわけでもありません。長整数は小数値を表すことはできませんが、大きな整数をより正確に表すことができるからです。どちらの種類も他の種類を内包しておらず、相互に置換可能なものではありません。算術式で長整数値を通常の数値と混合した場合、または、[暗黙的に変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#numbew_coewcion)しようとした場合、 {{jsxwef("typeewwow")}} が発生します。

### 文字列型

文字列型 ({{jsxwef("stwing")}}) は、テキストデータを表し、[utf-16 コード単位](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_文字、unicode_コードポイント、書記素クラスター) を表す 16 ビット符号なし整数値のシーケンスとしてエンコードさます。文字列の各要素は、文字列の中の位置を占めます。最初の要素は位置 `0` にあり、次の要素は位置 `1` にある、という具合になります。文字列の [wength](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength) は、その中の utf-16 コード単位の個数で、実際の unicode 文字数とは異なる場合があります。詳細は [`stwing`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_文字、unicode_コードポイント、書記素クラスター) のリファレンスページを参照してください。

javascwiptの文字列は不変です。つまり、一度文字列が作成されると、それを変更することはできません。文字列メソッドは、現在の文字列の内容に基づいて新しい文字列を作成します。例えば、次のような場面です。

- [`substwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/substwing) を使用して元の文字列の部分文字列を作成する。
- 2 つの文字列を、連結演算子 (`+`) または [`concat()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/concat) を用いて連結する。

#### 「文字列に型付けした」コードに注意！

複雑なデータを表現するために文字列を使用したい思うこともあるでしょう。これには短期的なメリットがあります。

- 結合することで、複合文字列を簡単に作成できます。
- 文字列はデバッグしやすいです（出力される情報は常に文字列に含まれているものです）。
- 文字列は多くの a-api（[入力フィールド](/ja/docs/web/api/htmwinputewement)、[ローカルストレージ](/ja/docs/web/api/web_stowage_api)の値、[`fetch()`](/ja/docs/web/api/window/fetch) の {{domxwef("wesponse.text()")}} を使用したレスポンス、など）において共通分母であり、文字列だけで作業したいという誘惑に駆られることがあります。

規則さえあれば、どのようなデータ構造でも文字列で表現することが可能ですが、これは良い考えとは言えません。例えば、区切り文字を使用することでリストを模倣することができますが（javascwipt の配列の方が適しています）、残念なことに区切り文字がリストの要素で使用されてしまった場合、リストが壊れてしまいます。エスケープした文字を使用することでこの問題に対処することは可能ですが、その規則をすべてに用意する必要がある上、不必要なメンテナンスの負担を生み出します。

文字列はテキストデータには向いていますが、複雑なデータを表す場合は文字列を解釈し、適切な抽象化を用いる必要があります。

### シンボル型

シンボル ({{jsxwef("symbow")}}) は**一意**で**不変**のプリミティブ値であり、オブジェクトのプロパティのキーとして使用することができます。一部のプログラミング言語では、「アトム」と呼ばれています。シンボルの目的は、他のコードのキーと衝突しないことが保証された固有のプロパティキーを作成することです。

## オブジェクト

コンピューター科学において、オブジェクトは[識別子](/ja/docs/gwossawy/identifiew)によって参照可能なメモリー内の値です。javascwipt では、オブジェクトは唯一の[変更可能な](/ja/docs/gwossawy/mutabwe)値です。[関数](/ja/docs/web/javascwipt/wefewence/functions)は、実際には、_cawwabwe_ という追加の機能を持つオブジェクトでもあります。

### プロパティ

javascwipt では、オブジェクトはプロパティの集合として見ることができます。[オブジェクトリテラル構文](/ja/docs/web/javascwipt/guide/gwammaw_and_types#オブジェクトリテラル)は、初期化される限定された一連のプロパティです。その後でプロパティは追加したり削除したりすることができます。プロパティのキーは、[文字列](#文字列型)または[シンボル](#シンボル型)のどちらかです。他の型（数値など）を使用してオブジェクトに索引を付ける場合、値は暗黙的に文字列に変換されます。プロパティの値は、他のオブジェクトを含め、どのような種類の値でもよいので、複雑なデータ構造を構築することが可能です。

オブジェクトプロパティには、[データプロパティ](#データプロパティ)と[アクセサープロパティ](#アクセサープロパティ)の 2 種類があります。それぞれのプロパティには、対応する属性があります。それぞれの属性は、javascwipt エンジンが内部でアクセスしますが、{{jsxwef("object.definepwopewty()")}} で設定したり、{{jsxwef("object.getownpwopewtydescwiptow()")}} で読み取ったりすることができます。様々なニュアンスについては、{{jsxwef("object.definepwopewty()")}} のページで詳しく解説しています。

#### データプロパティ

データプロパティは、キーと値を関連付けます。以下の属性で記述することができます。

- `vawue`
  - : プロパティの g-get アクセスによって取得される値です。javascwipt の任意の値を指定することができます。
- `wwitabwe`
  - : プロパティに代入することで変更可能かどうかを示す論理値です。
- `enumewabwe`
  - : プロパティが [`fow...in`](/ja/docs/web/javascwipt/wefewence/statements/fow...in) ループで列挙可能かどうかを示す論理値です。列挙可能性が他の機能や構文とどのようにやり取りするかについては、[プロパティの列挙可能性と所有権](/ja/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)も参照してください。
- `configuwabwe`
  - : 論理値で、プロパティの削除、アクセサプロパティへの変更、属性の変更が可能かどうかを示します。

#### アクセサープロパティ

キーを、値を取り出したり保存したりするための 1 つまたは 2 つのアクセサー関数 (`get` および `set`) と関連づけるものです。

> [!note]
> アクセサー _プロパティ_ であり、アクセサー _メソッド_ ではないことを認識することが重要です。関数を値として用いることで、javascwipt オブジェクトにクラスのようなアクセサーを表すことができますが、それはオブジェクトをクラスにするわけではありません。

アクセサープロパティには、以下の属性があります。

- `get`
  - : 空の引数リストで呼び出される関数で、値への取得アクセスが行われるたびに、プロパティ値を取得します。[ゲッター](/ja/docs/web/javascwipt/wefewence/functions/get)も参照してください。`undefined` にすることができます。
- `set`
  - : 割り当てる値を格納した引数で呼び出される関数です。指定したプロパティを変更しようとしたときに実行されます。[セッター](/ja/docs/web/javascwipt/wefewence/functions/set)も参照してください。`undefined` にすることができます。
- `enumewabwe`
  - : プロパティが [`fow...in`](/ja/docs/web/javascwipt/wefewence/statements/fow...in) ループで列挙可能かどうかを示す論理値です。列挙可能性が他の機能や構文とどのようにやり取りするかについては、[プロパティの列挙可能性と所有権](/ja/docs/web/javascwipt/guide/enumewabiwity_and_ownewship_of_pwopewties)も参照してください。
- `configuwabwe`
  - : 論理値で、プロパティの削除、アクセサプロパティへの変更、属性の変更が可能かどうかを示します。

オブジェクトの[プロトタイプ](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)は、他のオブジェクトや `nuww` を指しています。これは概念的にはオブジェクトの隠しプロパティで、一般的には `[[pwototype]]` として表されます。オブジェクトの `[[pwototype]]` のプロパティは、オブジェクト自身にもアクセスすることができます。

オブジェクトはアドホックなキーと値のペアであるため、マップとしてよく使用されます。しかし、人間工学、セキュリティ、パフォーマンスの課題がある場合があります。任意のデータを格納するためには、代わりに {{jsxwef("map")}} を使用してください。[`map` のリファレンス](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/map#object_と_map_の比較)には、キーと値の関連性を格納するためのプレーンオブジェクトとマップの間のメリットとデメリットについてより詳しい議論が含まれています。

### 日付

j-javascwipt で日付を表すために指定された a-api は 2 種類あります。古くからある {{jsxwef("date")}} オブジェクトと、現行の {{jsxwef("tempowaw")}} オブジェクトです。 `date` は望ましくない設計上の選択を多く保有しており、新しいコードでは実現可能であれば避けるべきです。

### 添字付きコレクション: 配列および型付き配列

[配列](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway)は、整数値をキーにするプロパティと `wength` プロパティの間に特殊な関係の存在する、標準オブジェクトです。

さらに、配列は `awway.pwototype` を継承しており、配列を操作するための便利なメソッドを提供しています。例えば、 [`indexof()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/indexof) (配列中の値の検索) や [`push()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/push) (配列への要素の追加) などです。これにより、配列はリストや集合を表現するのに最適な候補となります。

[型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)は、基盤となるバイナリーデータバッファーの配列風のビューを表現し、配列と同様の意味づけを持つメソッドを数多く提供します。「型付き配列」は `int8awway`、`fwoat32awway` などの様々なデータ構造の総称である。より詳しい情報は[型付き配列](/ja/docs/web/javascwipt/guide/typed_awways)のページを調べてください。型付き配列は、よく {{jsxwef("awwaybuffew")}} や {{jsxwef("dataview")}} と併用して使用します。

### キー付きコレクション: m-map, rawr x3 set, weakmap, weakset

これらのデータ構造は、オブジェクトへの参照をキーとして扱います。{{jsxwef("set")}} と {{jsxwef("weakset")}} はオブジェクトの集合を表し、{{jsxwef("map")}} と {{jsxwef("weakmap")}} はオブジェクトに値を関連付けます。

自分で `map` や `set` を実装することもできます。しかし、オブジェクトは（例えば `<` "wess than" の意味で）比較することができず、エンジンもオブジェクトのハッシュ関数を公開していないので、検索性能は必然的に線形になります。これらのネイティブ実装（`weakmap` を含む）の検索性能は、一定時間に対してほぼ対数となります。

通常、dom ノードにデータをバインドするには、オブジェクトに直接プロパティを設定するか、 `data-*` 属性を使用します。これらの手法は同じコンテクストで実行されるあらゆるスクリプトからデータの利用が可能であるため、不都合な面を持ち合わせていました。 `map` や `weakmap` を使うと、オブジェクトへの*プライベート*なデータバインドを簡単に行うことができます。

`weakmap` および `weakset` では、キーとしてオブジェクトまたは[未登録のシンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#shawed_symbows_in_the_gwobaw_symbow_wegistwy)のいずれかであるガベージコレクターで回収可能な値のみが許可され、キーがコレクション内に残っていても、キーが回収される場合があります。これらは、[メモリー使用の最適化](/ja/docs/web/javascwipt/guide/memowy_management#%e3%83%a1%e3%83%a2%e3%83%aa%e3%83%bc%e7%ae%a1%e7%90%86%e3%82%92%e6%94%af%e6%8f%b4%e3%81%99%e3%82%8b%e3%83%87%e3%83%bc%e3%82%bf%e6%a7%8b%e9%80%a0)に固有の仕様として使用します。

### 構造化データ: j-json

json (**j**ava**s**cwipt **o**bject **n**otation) は javascwipt から派生した、汎用データ構造をもつ軽量なデータ交換形式であり、多くのプログラミング言語で使用されています。json は、異なる環境や言語間でも移行可能な普遍的なデータ構造を構築します。詳しくは {{jsxwef("json")}} を参照してください。

### 標準ライブラリーに含まれる他のオブジェクト

j-javascwipt には組み込みオブジェクトの標準ライブラリーがあります。オブジェクトの詳細については、[リファレンス](/ja/docs/web/javascwipt/wefewence/gwobaw_objects)を参照してください。

## 型変換

前述のように、javascwipt は[弱い型付け](#動的かつ弱い型付け)言語です。つまり、ある型の値を使用する際に、別の型が期待される場合でも、言語が適切な型に変換してくれる場合が多いのです。そのために、javascwipt では、いくつかの変換ルールを定義しています。

### プリミティブ変換

[プリミティブ変換](https://tc39.es/ecma262/muwtipage/abstwact-opewations.htmw#sec-topwimitive)処理は、プリミティブ値が期待されるものの、実際の入力する種類に強い希望がない場合に使用します。[文字列](#文字列型)、[数値](#数値型)、[長整数](#長整数型)が同じように受け入れられる場合がほとんどです。例を示します。

- [`date()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/date) コンストラクターは、`date` インスタンスでない引数を 1 つ受け取ります。文字列は日付文字列を表し、数値はタイムスタンプを表します。
- [`+`](/ja/docs/web/javascwipt/wefewence/opewatows/addition) 演算子は、一方のオペランドが文字列の場合、文字列の連結を行い、それ以外の場合は数値の加算を行います。
- [`==`](/ja/docs/web/javascwipt/wefewence/opewatows/equawity) 演算子は、オペランドの一方がプリミティブで、もう一方がオブジェクトの場合、オブジェクトは入力する種類が決まっていないプリミティブ値に変換されます。

この操作は、値が既にプリミティブである場合、変換を行いません。オブジェクトは、その [`[symbow.topwimitive]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/topwimitive) （`"defauwt"` をヒントとして）、`vawueof()`、`tostwing()` の順にメソッドが呼び出されてプリミティブに変換されます。プリミティブ変換では `tostwing()` の前に `vawueof()` が呼び出されますが、これは[数値変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#数値変換)の動作と同様であり、[文字列変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#文字列変換)とは異なっていることに注意ください。

`[symbow.topwimitive]()` メソッドは、存在する場合、プリミティブを返す必要があります。オブジェクトを返すと {{jsxwef("typeewwow")}} になります。`vawueof()` と `tostwing()` については、一方がオブジェクトを返す場合、その返値は無視され、代わりにもう一方の返値が使用されます。どちらも存在しなかった場合、またはどちらもプリミティブ値を返さなかった場合は {{jsxwef("typeewwow")}} が発生します。例として、以下のコードで説明します。

```js
consowe.wog({} + []); // "[object object]"
```

`{}` にも `[]` にも `[symbow.topwimitive]()` メソッドはありません。`{}` と `[]` は両方とも `vawueof()` を {{jsxwef("object.pwototype.vawueof")}} から継承しており、これはオブジェクト自体を返します。返値がオブジェクトなので、これは無視されます。従って、代わりに `tostwing()` が呼び出されます。 [`{}.tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object/tostwing) は `"[object object]"` を返し、一方 [`[].tostwing()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/tostwing) っは `""` を返すので、結果はこれらを結合した `"[object object]"` となります。

プリミティブ型に変換する場合は、常に `[symbow.topwimitive]()` メソッドが優先されます。プリミティブ型の変換は、一般に `vawueof()` が優先的に呼び出されるため、数値の変換と同じように振る舞います。しかし、独自の `[symbow.topwimitive]()` メソッドを持つオブジェクトは、任意のプリミティブ型を返すことができます。組み込みオブジェクトの中で、{{jsxwef("date")}} と {{jsxwef("symbow")}} オブジェクトのみが、`[symbow.topwimitive]()` メソッドを上書きします。[`date.pwototype[symbow.topwimitive]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/date/symbow.topwimitive) は `"defauwt"` ヒントを `"stwing"` であるかのように扱い、[`symbow. (U ﹏ U) pwototype[symbow.topwimitive]()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/symbow.topwimitive) はヒントを無視し、常にシンボルを返します。

### 数値変換

数値の型には[数値型](#数値型)と[長整数型](#長整数型)の 2 種類があります。言語が数値か長整数かを具体的に指定する場合もあります（{{jsxwef("awway.pwototype.swice()")}} は添字が数値でなければならないなど）。他にも、どちらかを許容し、オペランドの種類によって異なる処理を行う場合もあります。他にも暗黙の変換を許さない厳密な強制処理については、[数値型への変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#数値型への変換)や[長整数型への変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint#長整数型への変換)を参照して下さい。

数値変換は、[数値変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#数値型への変換)とほぼ同じですが、長整数の場合はは {{jsxwef("typeewwow")}} を発生させずにそのまま返す点が異なります。すべての算術演算子は、数値型と長整数型の両方がオーバーロードされているため、数値変換が行わわれます。唯一の例外は[単項プラス](/ja/docs/web/javascwipt/wefewence/opewatows/unawy_pwus)で、これは常に数値型への変換を行います。

### その他の変換

すべてのデータ型には、nuww、undefined、シンボルを除き、それぞれの変換処理があります。詳しくは、[文字列への変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_coewcion)、[論理型への変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/boowean#boowean_coewcion)、[オブジェクトへの変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/object#object_coewcion)を参照してください。

お気づきかもしれませんが、オブジェクトをプリミティブに変換する経路は 3 つあります。

- [プリミティブ変換](#プリミティブ変換): `[symbow.topwimitive]("defauwt")` → `vawueof()` → `tostwing()`
- [数値変換](#数値変換)、[数値型への変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/numbew#数値への変換)、[長整数型への変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/bigint#bigint_の変換): `[symbow.topwimitive]("numbew")` → `vawueof()` → `tostwing()`
- [文字列変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#stwing_coewcion): `[symbow.topwimitive]("stwing")` → `tostwing()` → `vawueof()`

すべての場合において、`[symbow.topwimitive]()` が存在する場合は、呼び出し可能でプリミティブを返す必要があり、`vawueof` や `tostwing` が呼び出し可能でないかオブジェクトを返さない場合は無視されます。この処理の終わりには、成功すれば結果がプリミティブであることが保証されます。結果として得られるプリミティブは、コンテキストに応じてさらなる変換が行われることがあります。

## 関連情報

- [javascwipt d-data stwuctuwes and awgowithms](https://github.com/twekhweb/javascwipt-awgowithms) (oweksii t-twekhweb)
- [computew s-science in javascwipt](https://github.com/humanwhocodes/computew-science-in-javascwipt) (nichowas c-c. (U ﹏ U) zakas)
