---
title: オブジェクトとプロパティ
slug: orphaned/Web/JavaScript/Guide/Objects_and_Properties
---

### オブジェクトとプロパティ

JavaScript のオブジェクトには、それに結びつけられたプロパティがあります。簡単な記法でオブジェクトのプロパティにアクセスできます。

```
objectName.propertyName
```

オブジェクト名もプロパティ名も大文字と小文字を区別します。プロパティの定義は、そのプロパティに値を代入することで行います。例えば、`myCar` という名前のオブジェクトがあるとします（今回はオブジェクトが既に存在していると仮定）。次のようにして、そのオブジェクトに `make`、`model`、`year` という名前のプロパティをそれぞれ作成することができます。

```
myCar.make = "Ford";
myCar.model = "Mustang";
myCar.year = 1969;
```

配列はある単一の変数名に結びつけられた値の順序集合です。JavaScript におけるプロパティと配列は密接に関連しています。事実、それらは同一のデータ構造への異なるインタフェースなのです。そのため、例えば次のようにして `myCar` オブジェクトのプロパティにアクセスすることができます。

```
myCar["make"] = "Ford";
myCar["model"] = "Mustang";
myCar["year"] = 1969;
```

この手の配列は*連想配列*として知られています。それぞれのインデックスの要素が文字列にも結びつけられているからです。これがどう動作するかというと、次の関数は引数としてオブジェクトとそのオブジェクトの名前を渡すとオブジェクトのプロパティを表示します。

```
function show_props(obj, obj_name) {
   var result = "";
   for (var i in obj)
      result += obj_name + "." + i + " = " + obj[i] + "\n";
   return result;
}
```

関数 `show_props(myCar, "myCar")` を呼び出すと以下の結果が返されます。

```
myCar.make = Ford
myCar.model = Mustang
myCar.year = 1969
```

{{ PreviousNext("JavaScript/Guide/Predefined_Functions/escape_and_unescape_Functions", "JavaScript/Guide/Creating_New_Objects") }}
