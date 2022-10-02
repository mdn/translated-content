---
title: Object Manipulation Statements
slug: orphaned/Web/JavaScript/Guide/Object_Manipulation_Statements
original_slug: Web/JavaScript/Guide/Object_Manipulation_Statements
---

### オブジェクト操作文

JavaScript はオブジェクトの操作に `for...in`、`for each...in` および `with` 文を使用します。

#### for...in 文

[`for...in`](/ja/Core_JavaScript_1.5_Reference/Statements/for...in) 文は指定した変数をオブジェクトの全プロパティに対して反復します。それぞれのプロパティに対して JavaScript は指定した文を実行します。`for...in` 文は次のように使用します。

```
for (variable in object) {
   statements
}
```

**例**
次の関数は、あるオブジェクトとそのオブジェクトの名前を引数にとります。そしてそのオブジェクトの全プロパティに対して反復し、プロパティ名とその値のリストにした文字列を返します。

```
function dump_props(obj, obj_name) {
   var result = "";
   for (var i in obj) {
      result += obj_name + "." + i + " = " + obj[i] + "<br>";
   }
   result += "<hr>";
   return result;
}
```

`make` および `model` というプロパティを持つ `car` というオブジェクトでは次のような結果が得られます。

```
car.make = Ford
car.model = Mustang
```

**配列**
[Array](/ja/Core_JavaScript_1.5_Reference/Global_Objects/Array) の要素に対して反復する方法としてこれを用いることは魅力的かもしれませんが、**for...in** 文はその配列の要素に加えてユーザ定義プロパティに対して繰り返すため、独自のプロパティやメソッドを追加するなどして Array オブジェクトに変更を加えると **for...in** 文は数値のインデックスに加えてユーザ定義プロパティの名前を返します。したがって、配列に対して反復したいときには数値のインデックスを用いた従来の [for](/ja/Core_JavaScript_1.5_Reference/Statements/for) ループを使用したほうがいいでしょう。

#### for each...in 文

[`for each...in`](/ja/Core_JavaScript_1.5_Reference/Statements/for_each...in) は [JavaScript 1.6](/ja/New_in_JavaScript_1.6) で導入されるループ文です。これは `for...in` に似ていますが、オブジェクトのプロパティの名前ではなく、プロパティの値に対して反復します。

#### with 文

[`with`](/ja/Core_JavaScript_1.5_Reference/Statements/with) 文はデフォルトのオブジェクトについて文のセットを実行します。JavaScript はその文のセットにおいて非修飾名を検索し、その名前がデフォルトのオブジェクトのプロパティであるかを決定します。非修飾名がプロパティにマッチすると、そのプロパティがその文で使われます。そうでない場合はローカル変数かグローバル変数が使われます。

`with` 文は次のように使用します。

```
with (object) {
   statements
}
```

**例**
次の `with` 文では `Math` オブジェクトがデフォルトのオブジェクトに指定されています。`with` 文内の文は `PI` プロパティや `cos` および `sin` メソッドを参照していますが、オブジェクトは指定していません。JavaScript はこれらの参照は `Math` オブジェクトへのものであると想定します。

```
var a, x, y;
var r = 10;
with (Math) {
   a = PI * r * r;
   x = r * cos(PI);
   y = r * sin(PI/2);
}
```

注意：`with` 文を使うことでプログラムをより簡潔にすることができますが、`with` の不適切な使用はプログラムを大幅にスローダウンさせることに繋がります。[Core JavaScript 1.5 Reference:Statements:with](/ja/Core_JavaScript_1.5_Reference/Statements/with) を参照してください。

{{ PreviousNext("JavaScript/Guide/Loop_Statements/continue_Statement", "JavaScript/Guide/Comments") }}
