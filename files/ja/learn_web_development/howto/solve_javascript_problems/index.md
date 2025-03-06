---
title: よくある JavaScript の問題の解決
slug: Learn_web_development/Howto/Solve_JavaScript_problems
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

JavaScript のコードが正しく動作しないので修正したい、というような場合にみられる、よくある問題の解決方法へのリンクを以下に示します。

## 初心者によくある誤り

### スペル、大文字小文字を訂正する

コードが正しく動かない場合や、何かが未定義であるとブラウザーがエラーを出した場合、変数名や関数名のスペルが正しいか確認してください。

間違いやすいブラウザーの組み込み関数の例です。

| 正                         | 誤                        |
| -------------------------- | ------------------------- |
| `getElementsByTagName()`   | `getElementByTagName()`   |
| `getElementsByName()`      | `getElementByName()`      |
| `getElementsByClassName()` | `getElementByClassName()` |
| `getElementById()`         | `getElementsById()`       |

### セミコロンの位置

セミコロンの位置に誤りがないか確認してください。例を挙げます。

| 正                          | 誤                          |
| --------------------------- | --------------------------- |
| `elem.style.color = 'red';` | `elem.style.color = 'red;'` |

### 関数

関数についての誤りは何点かあります。

よくある誤りの一つとして、関数を定義したがどこからも呼び出していない、というものがあります。例を挙げます。

```js
function myFunction() {
  alert("This is my function.");
}
```

上記のコードで定義した関数は、例えば以下のように呼び出さないかぎり何もしません。

```js
myFunction();
```

#### 関数のスコープ

[関数は関数自身のスコープを持ちます](/ja/docs/Learn_web_development/Core/Scripting/Functions#関数のスコープと競合)。変数をグローバルに（関数の外で）定義するか、[返値](/ja/docs/Learn_web_development/Core/Scripting/Return_values)として変数の値を関数の外に返さないかぎり、関数の外から関数の中で定義された変数にアクセスすることはできません。

#### return 文の後ろのコードの実行

return 文で関数から値を返したとき、 JavaScript のインタープリターはその関数を終了します。 return 文の後ろのコードは実行されません。

Firefox などのいくつかのブラウザーは、 return 文の後ろにコードが存在する場合、開発者ツールのコンソールにエラーメッセージを出力します。 Firefox が出力するメッセージは "unreachable code after return statement" です。

### オブジェクトリテラル記法 vs 通常の代入

JavaScript で普通に何かを代入するときは、単一の等号を使用します。

```js
const myNumber = 0;
```

ただし、[オブジェクト](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects) では、正しい構文を使用するように注意する必要があります。オブジェクトは中括弧で囲み、メンバー名とその値はコロンで区切り、メンバーはカンマで使用しなければなりません。例えば、次のようになります。

```js
const myObject = {
  name: "Chris",
  age: 38,
};
```

## 基本的な定義

- [JavaScript とは](/ja/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#高水準の定義)
- [変数とは](/ja/docs/Learn_web_development/Core/Scripting/Variables#変数とは)
- [文字列とは](/ja/docs/Learn_web_development/Core/Scripting/Strings)
- [配列とは](/ja/docs/Learn_web_development/Core/Scripting/Arrays#配列とは何？)
- [ループとは](/ja/docs/Learn_web_development/Core/Scripting/Loops)
- [関数とは](/ja/docs/Learn_web_development/Core/Scripting/Functions)
- [イベントとは](/ja/docs/Learn_web_development/Core/Scripting/Events)
- [オブジェクトとは](/ja/docs/Learn_web_development/Core/Scripting/Object_basics#オブジェクトの基本)
- [JSON とは](/ja/docs/Learn_web_development/Core/Scripting/JSON#json_とは何か)
- [Web API とは](/ja/docs/Learn_web_development/Extensions/Client-side_APIs/Introduction#api_って何)
- [DOM とは](/ja/docs/Learn_web_development/Core/Scripting/DOM_scripting#ドキュメントオブジェクトモデル)

## 初級のユースケース

### 全般

- [JavaScript をページに追加するには](/ja/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#ページに_javascript_を追加する方法)
- [JavaScript のコードにコメントを追加するには](/ja/docs/Learn_web_development/Core/Scripting/What_is_JavaScript#コメント)

### 変数

- [変数を宣言するには](/ja/docs/Learn_web_development/Core/Scripting/Variables#変数の宣言)
- [変数を値で初期化するには](/ja/docs/Learn_web_development/Core/Scripting/Variables#変数の初期化)
- [変数の値を変更するには](/ja/docs/Learn_web_development/Core/Scripting/Variables#変数の更新)（[代入演算子](/ja/docs/Learn_web_development/Core/Scripting/Math#比較演算子)についても参照してください）
- [JavaScript のデータ型とは](/ja/docs/Learn_web_development/Core/Scripting/Variables#変数のデータ型)
- [「弱い型付け」とは](/ja/docs/Learn_web_development/Core/Scripting/Variables#動的型付け)

### 数学

- [Web 開発で扱わなければならない数値型とは](/ja/docs/Learn_web_development/Core/Scripting/Math#数値の種類)
- [JavaScript での基本的な算術演算の方法とは](/ja/docs/Learn_web_development/Core/Scripting/Math#算術演算子)
- [JavaScript での演算子の優先順位とは](/ja/docs/Learn_web_development/Core/Scripting/Math#演算子の優先順位)
- [JavaScript で値をインクリメント、デクリメントするには](/ja/docs/Learn_web_development/Core/Scripting/Math#インクリメント演算子とデクリメント演算子)
- [JavaScript で値を比較するには](/ja/docs/Learn_web_development/Core/Scripting/Math#比較演算子)(どちらが大きいか、ある値が別の値と等しいか、など)

### 文字列

- [JavaScript で文字列を作成するには](/ja/docs/Learn_web_development/Core/Scripting/Strings#文字列の宣言)
- [単一引用符と二重引用符のどちらを使うべきか](/ja/docs/Learn_web_development/Core/Scripting/Strings#単一引用符、二重引用符、逆引用符)
- [文字列をエスケープするには](/ja/docs/Learn_web_development/Core/Scripting/Strings#文字列に引用符を含めるには)
- [文字列を連結するには](/ja/docs/Learn_web_development/Core/Scripting/Strings#_を用いた連結)
- [文字列と数値を連結できるかどうか](/ja/docs/Learn_web_development/Core/Scripting/Strings#数値と文字列)
- [文字列の長さを調べるには](/ja/docs/Learn_web_development/Core/Scripting/Useful_string_methods#文字列の長さを調べる)
- [文字列内の特定位置の文字を調べるには](/ja/docs/Learn_web_development/Core/Scripting/Useful_string_methods#文字列の特定の文字を受け取る)
- [文字列から部分文字列を抽出するには](/ja/docs/Learn_web_development/Core/Scripting/Useful_string_methods#部分文字列を探して抽出)
- [文字列の大文字・小文字を切り替えるには](/ja/docs/Learn_web_development/Core/Scripting/Useful_string_methods#大文字小文字の切り替え)
- [文字列内の一部の文字列を別の文字列に置き換えるには](/ja/docs/Learn_web_development/Core/Scripting/Useful_string_methods#文字列の一部分を書き換える)

### 配列

- [配列を作成するには](/ja/docs/Learn_web_development/Core/Scripting/Arrays#配列の作成)
- [配列内の要素を取得したり変更したりするには](/ja/docs/Learn_web_development/Core/Scripting/Arrays#配列の項目を取得し変更する)（多次元配列の場合についても含む）
- [配列の長さを調べるには](/ja/docs/Learn_web_development/Core/Scripting/Arrays#配列の長さを調べる)
- [配列に要素を追加するには](/ja/docs/Learn_web_development/Core/Scripting/Arrays#アイテムの追加)
- [配列から要素を削除するには](/ja/docs/Learn_web_development/Core/Scripting/Arrays#アイテムの削除)
- [文字列を分割して配列にするには、もしくは配列を連結して一つの文字列にするには](/ja/docs/Learn_web_development/Core/Scripting/Arrays#文字列と配列を相互に変換する)

### JavaScript のデバッグ

- [基本的なエラーの種類とは](/ja/docs/Learn_web_development/Core/Scripting/What_went_wrong#エラーの種類)
- [ブラウザー開発者ツールとは何か、どのように開くのか](/ja/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools)
- [JavaScript コンソールに値を出力するには](/ja/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#コンソール_api)
- [ブレイクポイント等の JavaScript のデバッグ機能を使うには](/ja/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript#javascript_デバッガーの使用)

JavaScript のデバッグに関する詳細については、[JavaScript のよくある問題を扱う](/ja/docs/Learn_web_development/Core/Scripting/Debugging_JavaScript)を参照してください。よくあるエラーの説明については[その他のよくあるエラー](/ja/docs/Learn_web_development/Core/Scripting/What_went_wrong#その他のよくあるエラー)を参照してください。

### コード内での決定

- [変数の値やその他の条件によって異なるコードブロックのうちどれを実行するか決定するには](/ja/docs/Learn_web_development/Core/Scripting/Conditionals)
- [if...else 文を使用するには](/ja/docs/Learn_web_development/Core/Scripting/Conditionals#if...else_文)
- [条件判定のブロックを別のブロックに入れ子にするには](/ja/docs/Learn_web_development/Core/Scripting/Conditionals#入れ子の_if...else)
- [AND や OR、NOT を JavaScript で使用するには](/ja/docs/Learn_web_development/Core/Scripting/Conditionals#論理演算子_and_と_or_と_not)
- [多くの選択肢を一つの条件として手軽に扱うには](/ja/docs/Learn_web_development/Core/Scripting/Conditionals#switch_文)
- [true/false の判定によって 2 つの選択肢から 1 つを手早く選択するのに、三項演算子を使用するには](/ja/docs/Learn_web_development/Core/Scripting/Conditionals#三項演算子)

### ループ/反復処理

- [同一のコード片を繰り返し実行するには](/ja/docs/Learn_web_development/Core/Scripting/Loops)
- [終了条件に一致する前に、ループを終了させるには](/ja/docs/Learn_web_development/Core/Scripting/Loops#break_でループを終了)
- [次の繰り返し処理にスキップするには](/ja/docs/Learn_web_development/Core/Scripting/Loops#continue_で繰り返しをスキップ)
- [while ループ、do...while ループを使用するには](/ja/docs/Learn_web_development/Core/Scripting/Loops#while_と_do...while)

## 中級のユースケース

### 関数

- [ブラウザー内での関数を調べるには](/ja/docs/Learn_web_development/Core/Scripting/Functions#ブラウザー組み込み関数)
- [関数とメソッドの違いとは](/ja/docs/Learn_web_development/Core/Scripting/Functions#関数とメソッド)
- [独自の関数を作成するには](/ja/docs/Learn_web_development/Core/Scripting/Build_your_own_function)
- [関数を呼び出すには](/ja/docs/Learn_web_development/Core/Scripting/Functions#関数の呼び出し)
- [無名関数とは](/ja/docs/Learn_web_development/Core/Scripting/Functions#無名関数とアロー関数)
- [関数を実行するときに引数を指定するには](/ja/docs/Learn_web_development/Core/Scripting/Functions#関数の引数)
- [関数のスコープとは](/ja/docs/Learn_web_development/Core/Scripting/Functions#関数のスコープと競合)
- [返値とは何か、どのように返値を返すか](/ja/docs/Learn_web_development/Core/Scripting/Return_values)

### オブジェクト

- [オブジェクトを作成するには](/ja/docs/Learn_web_development/Core/Scripting/Object_basics#オブジェクトの基本)
- [ドット記法とは](/ja/docs/Learn_web_development/Core/Scripting/Object_basics#ドット記法)
- [角括弧を用いた記法とは](/ja/docs/Learn_web_development/Core/Scripting/Object_basics#ブラケット記法)
- [オブジェクトのメソッドやプロパティを取得、設定するには](/ja/docs/Learn_web_development/Core/Scripting/Object_basics#オブジェクトメンバーの設定)
- [オブジェクトのコンテキストにおける `this` とは何か](/ja/docs/Learn_web_development/Core/Scripting/Object_basics#this_とは何か)
- [オブジェクト指向プログラミングとは](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#object-oriented_programming_from_10000_meters)
- [コンストラクターやインスタンスとは何か、それらをどのように作成するか](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#constructors_and_object_instances)
- [JavaScript でオブジェクトを作成する方法にはどのようなものがあるか](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#other_ways_to_create_object_instances)

### JSON

- [JSON の構造とは、JavaScript から JSON を読み取るには](/ja/docs/Learn_web_development/Core/Scripting/JSON#json_の構造)
- [JSON ファイルをページに読み込むには](/ja/docs/Learn_web_development/Core/Scripting/JSON#loading_our_json)
- [JSON からテキストに変換するには、テキストから JSON に変換するには](/ja/docs/Learn_web_development/Core/Scripting/JSON#オブジェクトとテキスト間の変換)

### イベント

- [イベントハンドラーとは何か、どのように使うのか](/ja/docs/Learn_web_development/Core/Scripting/Events#event_handler_properties)
- [インラインイベントハンドラーとは](/ja/docs/Learn_web_development/Core/Scripting/Events#Inline_event_handlers_%E2%80%94_don%27t_use_these)
- [`addEventListener()` 関数は何をするものか、どのように使うのか](/ja/docs/Learn_web_development/Core/Scripting/Events#using_addeventlistener)
- [自分のページにイベントのコードを追加するのに、どの方法を使用すべきか](/ja/docs/Learn_web_development/Core/Scripting/Events#what_mechanism_should_i_use)
- [イベントオブジェクトとは何か、どのように使うのか](/ja/docs/Learn_web_development/Core/Scripting/Events#event_objects)
- [既定のイベントの挙動を抑制するには](/ja/docs/Learn_web_development/Core/Scripting/Events#preventing_default_behaviour)
- [ネストされた要素でどのようにイベントが発生するか（イベントの伝播、関連して、キャプチャ、バブリング）](/ja/docs/Learn_web_development/Core/Scripting/Event_bubbling)
- [イベントの委任とは何か、どのように動作するか](/ja/docs/Learn_web_development/Core/Scripting/Events#event_delegation)

### オブジェクト指向 JavaScript

- [オブジェクトのプロトタイプとは何か](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
- [コンストラクタープロパティとは何か、どのように使用するか](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes#コンストラクターの使用)
- [どのようにコンストラクターにメソッドを追加するか](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes#プロトタイプの設定)
- [継承元からメンバーを引き継いで新しいコンストラクターを作成するには](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript)
- [JavaScript で継承を使用すべきときはいつか](/ja/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Classes_in_JavaScript#object_member_summary)

### Web API

- [JavaScript を使用して DOM を操作（要素の追加や削除）するには](/ja/docs/Learn_web_development/Core/Scripting/DOM_scripting#アクティブラーニング_基本的な_dom_操作)
