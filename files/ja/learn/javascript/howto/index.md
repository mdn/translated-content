---
title: JavaScriptのコードのよくある問題を解決する
slug: Learn/JavaScript/Howto
---

{{LearnSidebar}}

JavaScript のコードが正しく動作しないので修正したい、というような場合にみられる、よくある問題の解決方法へのリンクを以下に示します。

## 初学者がよく陥る誤り

### スペル、大文字小文字を訂正する

コードが正しく動かない場合や、何かが未定義であるとブラウザーがエラーを出した場合、変数名や関数名のスペルが正しいか確認してください。

ブラウザーの組み込み関数についての正誤例:

| 正                         | 誤                        |
| -------------------------- | ------------------------- |
| `getElementsByTagName()`   | `getElementbyTagName()`   |
| `getElementsByName()`      | `getElementByName()`      |
| `getElementsByClassName()` | `getElementByClassName()` |
| `getElementById()`         | `getElementsById()`       |

### セミコロンの位置

セミコロンの位置に誤りがないか確認してください。

例:

| 正                          | 誤                          |
| --------------------------- | --------------------------- |
| `elem.style.color = 'red';` | `elem.style.color = 'red;'` |

### 関数

関数についての誤りは何点かあります。

よくある誤りの一つとして、関数を定義したがどこからも呼び出していない、というものがあります。

例:

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

[関数は関数自身のスコープを持ちます](/ja/docs/Learn/JavaScript/Building_blocks/Functions#Function_scope_and_conflicts)。変数をグローバルに（関数の外で）定義するか、[戻り値](/ja/docs/Learn/JavaScript/Building_blocks/Return_values)として変数の値を関数の外に返さないかぎり、関数の外から関数の中で定義された変数にアクセスすることはできません。

#### return 文の後ろのコードの実行

return 文で関数から値を返したとき、JavaScript のインタプリタはその関数を終了します。return 文の後ろのコードは実行されません。

Firefox などのいくつかのブラウザーは、return 文の後ろにコードが存在する場合、開発者ツールのコンソールにエラーメッセージを出力します。Firefox が出力するメッセージは "unreachable code after return statement" です。

### オブジェクトリテラル記法 vs 代入

通常、JavaScript で代入する場合、等号を使います。

例:

```js
var myNumber = 0;
```

[オブジェクト](/ja/docs/Learn/JavaScript/Objects)の場合は、メンバー名とその値をコロンで区切り、メンバー間をカンマで区切る必要があります。

例:

```js
var myObject = {
  name: "Chris",
  age: 38,
};
```

## 基本的な定義

- [JavaScript とは](/ja/docs/Learn/JavaScript/First_steps/What_is_JavaScript#A_high-level_definition)
- [変数とは](/ja/docs/Learn/JavaScript/First_steps/Variables#What_is_a_variable)
- [文字列とは](/ja/docs/Learn/JavaScript/First_steps/Strings)
- [配列とは](/ja/docs/Learn/JavaScript/First_steps/Arrays#What_is_an_Array)
- [ループとは](/ja/docs/Learn/JavaScript/Building_blocks/Looping_code)

<!---->

- [関数とは](/ja/docs/Learn/JavaScript/Building_blocks/Functions)
- [イベントとは](/ja/docs/Learn/JavaScript/Building_blocks/Events)
- [オブジェクトとは](/ja/docs/Learn/JavaScript/Objects/Basics#オブジェクトの基本)
- [JSON とは](/ja/docs/Learn/JavaScript/Objects/JSON#json_とは何か)
- [Web API とは](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Introduction#What_are_APIs)
- [DOM とは](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#The_document_object_model)

## 初級のユースケース

### 全般

- [JavaScript をページに追加するには](/ja/docs/Learn/JavaScript/First_steps/What_is_JavaScript#How_do_you_add_JavaScript_to_your_page)
- [JavaScript のコードにコメントを追加するには](/ja/docs/Learn/JavaScript/First_steps/What_is_JavaScript#Comments)

### 変数

- [変数を宣言するには](/ja/docs/Learn/JavaScript/First_steps/Variables#Declaring_a_variable)
- [変数を値で初期化するには](/ja/docs/Learn/JavaScript/First_steps/Variables#Initializing_a_variable)
- [変数の値を変更するには](/ja/docs/Learn/JavaScript/First_steps/Variables#Updating_a_variable)([代入演算子](/ja/docs/Learn/JavaScript/First_steps/Math#Assignment_operators)についても参照してください)
- [JavaScript のデータ型とは](/ja/docs/Learn/JavaScript/First_steps/Variables#Variable_types)
- [「弱い型付け」とは](/ja/docs/Learn/JavaScript/First_steps/Variables#Loose_typing)

### 数学

- [Web 開発で扱わなければならない数値型とは](/ja/docs/Learn/JavaScript/First_steps/Math#Types_of_numbers)
- [JavaScript での基本的な算術演算の方法とは](/ja/docs/Learn/JavaScript/First_steps/Math#Arithmetic_operators)
- [JavaScript での演算子の優先順位とは](/ja/docs/Learn/JavaScript/First_steps/Math#Operator_precedence)
- [JavaScript で値をインクリメント、デクリメントするには](/ja/docs/Learn/JavaScript/First_steps/Math#Increment_and_decrement_operators)
- [JavaScript で値を比較するには](/ja/docs/Learn/JavaScript/First_steps/Math#Comparison_operators)(どちらが大きいか、ある値が別の値と等しいか、など)

### 文字列

- [JavaScript で文字列を作成するには](/ja/docs/Learn/JavaScript/First_steps/Strings#Creating_a_string)
- [シングルクォーテーションを使うべきか、ダブルクォーテーションを使うべきか](/ja/docs/Learn/JavaScript/First_steps/Strings#Single_quotes_versus_double_quotes)
- [文字列をエスケープするには](/ja/docs/Learn/JavaScript/First_steps/Strings#Escaping_characters_in_a_string)
- [文字列を連結するには](/ja/docs/Learn/JavaScript/First_steps/Strings#Concatenating_strings)
- [文字列と数値を連結できるかどうか](/ja/docs/Learn/JavaScript/First_steps/Strings#Numbers_versus_strings)
- [文字列の長さを調べるには](/ja/docs/Learn/JavaScript/First_steps/Useful_string_methods#Finding_the_length_of_a_string)
- [文字列内の特定位置の文字を調べるには](/ja/docs/Learn/JavaScript/First_steps/Useful_string_methods#Retrieving_a_specific_string_character)
- [文字列から部分文字列を抽出するには](/ja/docs/Learn/JavaScript/First_steps/Useful_string_methods#Finding_a_substring_inside_a_string_and_extracting_it)
- [文字列の大文字・小文字を切り替えるには](/ja/docs/Learn/JavaScript/First_steps/Useful_string_methods#Changing_case)
- [文字列内の一部の文字列を別の文字列に置き換えるには](/ja/docs/Learn/JavaScript/First_steps/Useful_string_methods#Updating_parts_of_a_string)

### 配列

- [配列を作成するには](/ja/docs/Learn/JavaScript/First_steps/Arrays#Creating_an_array)
- [配列内の要素を取得したり変更したりするには](/ja/docs/Learn/JavaScript/First_steps/Arrays#Accessing_and_modifying_array_items)(多次元配列の場合についても含む)
- [配列の長さを調べるには](/ja/docs/Learn/JavaScript/First_steps/Arrays#Finding_the_length_of_an_array)
- [配列に要素を追加する、もしくは、配列から要素を削除するには](/ja/docs/Learn/JavaScript/First_steps/Arrays#Adding_and_removing_array_items)
- [文字列を分割して配列にするには、もしくは配列を連結して一つの文字列にするには](/ja/docs/Learn/JavaScript/First_steps/Arrays#Converting_between_strings_and_arrays)

### JavaScript のデバッグ

- [基本的なエラーの種類とは](/ja/docs/Learn/JavaScript/First_steps/What_went_wrong#Types_of_error)
- [ブラウザー開発者ツールとは何か、どのように開くのか](/ja/docs/Learn/Common_questions/What_are_browser_developer_tools)
- [JavaScript コンソールに値を出力するには](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#The_Console_API)
- [ブレイクポイント等の JavaScript のデバッグ機能を使うには](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript#Using_the_JavaScript_debugger)

JavaScript のデバッグに関する詳細については、[JavaScript のよくある問題を扱う](/ja/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)を参照してください。よくあるエラーの説明については[その他のよくあるエラー](/ja/docs/Learn/JavaScript/First_steps/What_went_wrong#Other_common_errors)を参照してください。

### コード内での決定

- [変数の値やその他の条件によって異なるコードブロックのうちどれを実行するか決定するには](/ja/docs/Learn/JavaScript/Building_blocks/conditionals)
- [if...else 文を使用するには](/ja/docs/Learn/JavaScript/Building_blocks/conditionals#if_..._else_statements)
- [条件判定のブロックを別のブロックに入れ子にするには](/ja/docs/Learn/JavaScript/Building_blocks/conditionals#Nesting_if_..._else)
- [AND や OR、NOT を JavaScript で使用するには](/ja/docs/Learn/JavaScript/Building_blocks/conditionals#Logical_operators_AND_OR_and_NOT)
- [多くの選択肢を一つの条件として手軽に扱うには](/ja/docs/Learn/JavaScript/Building_blocks/conditionals#switch_statements)
- [true/false の判定によって 2 つの選択肢から 1 つを手早く選択するのに、三項演算子を使用するには](/ja/docs/Learn/JavaScript/Building_blocks/conditionals#Ternary_operator)

### ループ/イテレーション

- [同一のコード片を繰り返し実行するには](/ja/docs/Learn/JavaScript/Building_blocks/Looping_code)
- [終了条件にマッチする前に、ループを終了させるには](/ja/docs/Learn/JavaScript/Building_blocks/Looping_code#Exiting_loops_with_break)
- [次の繰り返し処理にスキップするには](/ja/docs/Learn/JavaScript/Building_blocks/Looping_code#Skipping_iterations_with_continue)
- [while ループ、do ... while ループを使用するには](/ja/docs/Learn/JavaScript/Building_blocks/Looping_code#while_and_do_..._while)
- 配列内の要素を反復処理する方法
- 多次元配列の要素を反復処理する方法
- オブジェクト内のメンバーを反復処理する方法
- 配列内にネストされたオブジェクトのメンバーを反復処理する方法

## 中級のユースケース

### 関数

- [ブラウザー内での関数を調べるには](/ja/docs/Learn/JavaScript/Building_blocks/Functions#Built-in_browser_functions)
- [関数とメソッドの違いとは](/ja/docs/Learn/JavaScript/Building_blocks/Functions#Functions_versus_methods)
- [独自の関数を作成するには](/ja/docs/Learn/JavaScript/Building_blocks/Build_your_own_function)
- [関数を呼び出すには](/ja/docs/Learn/JavaScript/Building_blocks/Functions#Invoking_functions)
- [匿名関数とは](/ja/docs/Learn/JavaScript/Building_blocks/Functions#Anonymous_functions)
- [関数を実行するときに引数を指定するには](/ja/docs/Learn/JavaScript/Building_blocks/Functions#Function_parameters)
- [関数のスコープとは](/ja/docs/Learn/JavaScript/Building_blocks/Functions#Function_scope_and_conflicts)
- [戻り値とは何か、どのように戻り値を返すか](/ja/docs/Learn/JavaScript/Building_blocks/Return_values)

### オブジェクト

- [オブジェクトを作成するには](/ja/docs/Learn/JavaScript/Objects/Basics#オブジェクトの基本)
- [ドット記法とは](/ja/docs/Learn/JavaScript/Objects/Basics#ドット記法)
- [角括弧を用いた記法とは](/ja/docs/Learn/JavaScript/Objects/Basics#ブラケット記法)
- [オブジェクトのメソッドやプロパティを取得、設定するには](/ja/docs/Learn/JavaScript/Objects/Basics#オブジェクトメンバーの設定)
- [オブジェクトのコンテキストにおける `this` とは何か](/ja/docs/Learn/JavaScript/Objects/Basics#this_とは何か)
- [オブジェクト指向プログラミングとは](/ja/docs/Learn/JavaScript/Objects/Object-oriented_JS#Object-oriented_programming_from_10000_meters)
- [コンストラクターやインスタンスとは何か、それらをどのように作成するか](/ja/docs/Learn/JavaScript/Objects/Object-oriented_JS#Constructors_and_object_instances)
- [JavaScript でオブジェクトを作成する方法にはどのようなものがあるか](/ja/docs/Learn/JavaScript/Objects/Object-oriented_JS#Other_ways_to_create_object_instances)

### JSON

- [JSON の構造とは、JavaScript から JSON を読み取るには](/ja/docs/Learn/JavaScript/Objects/JSON#json_の構造)
- [JSON ファイルをページに読み込むには](/ja/docs/Learn/JavaScript/Objects/JSON#Loading_our_JSON)
- [JSON からテキストに変換するには、テキストから JSON に変換するには](/ja/docs/Learn/JavaScript/Objects/JSON#オブジェクトとテキスト間の変換)

### イベント

- [イベントハンドラとは何か、どのように使うのか](/ja/docs/Learn/JavaScript/Building_blocks/Events#Event_handler_properties)
- [インラインイベントハンドラとは](/ja/docs/Learn/JavaScript/Building_blocks/Events#Inline_event_handlers_%E2%80%94_don%27t_use_these)
- [`addEventListener()` 関数は何をするものか、どのように使うのか](</ja/docs/Learn/JavaScript/Building_blocks/Events#addEventListener()_and_removeEventListener()>)
- [自分のページにイベントのコードを追加するのに、どの方法を使用すべきか](/ja/docs/Learn/JavaScript/Building_blocks/Events#What_mechanism_should_I_use)
- [イベントオブジェクトとは何か、どのように使うのか](/ja/docs/Learn/JavaScript/Building_blocks/Events#Event_objects)
- [既定のイベントの挙動を抑制するには](/ja/docs/Learn/JavaScript/Building_blocks/Events#Preventing_default_behaviour)
- [ネストされた要素でどのようにイベントが発火するか(イベントの伝播、キャプチャ、バブリング)](/ja/docs/Learn/JavaScript/Building_blocks/Events#Event_bubbling_and_capture)
- [イベントのデリゲートとは何か、どのように動作するか](/ja/docs/Learn/JavaScript/Building_blocks/Events#Event_delegation)

### オブジェクト指向 JavaScript

- [オブジェクトのプロトタイプとは何か](/ja/docs/Learn/JavaScript/Objects/Object_prototypes)
- [コンストラクタープロパティとは何か、どのように使用するか](/ja/docs/Learn/JavaScript/Objects/Object_prototypes#コンストラクターの使用)
- [どのようにコンストラクターにメソッドを追加するか](/ja/docs/Learn/JavaScript/Objects/Object_prototypes#コンストラクターの使用)
- [継承元からメンバーを引き継いで新しいコンストラクターを作成するには](/ja/docs/Learn/JavaScript/Objects/Inheritance)
- [JavaScript で継承を使用すべきときはいつか](/ja/docs/Learn/JavaScript/Objects/Inheritance#Object_member_summary)

### Web API

- [JavaScript を使用して DOM を操作(要素の追加や削除)するには](/ja/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents#Active_learning_Basic_DOM_manipulation)
