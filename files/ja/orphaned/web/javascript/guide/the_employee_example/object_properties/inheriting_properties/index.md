---
title: Inheriting Properties
slug: orphaned/Web/JavaScript/Guide/The_Employee_Example/Object_Properties/Inheriting_Properties
original_slug: Web/JavaScript/Guide/The_Employee_Example/Object_Properties/Inheriting_Properties
---

### プロパティの継承

次の文を用いて（[図 8.3](/ja/Core_JavaScript_1.5_Guide/The_Employee_Example/Creating_the_Hierarchy) で示したように）`mark` オブジェクトを `WorkerBee` として作成するとします。

```
mark = new WorkerBee;
```

JavaScript は new 演算子に出くわすと、新しく汎用オブジェクトを生成し、この新しいオブジェクトを `this` キーワードの値として WorkerBee コンストラクタ関数に渡します。コンストラクタ関数は明示的に `projects` プロパティの値をセットします。さらに、内部的な `__proto__` プロパティの値として `WorkerBee.prototype` の値をセットします。（このプロパティ名は最初と最後に 2 文字ずつのアンダースコアが付いています。）`__proto__` プロパティはプロパティの値を返すのに使用されるプロトタイプチェーンを決定します。これらのプロパティがセットされると JavaScript は新しいオブジェクトを返し、代入文は変数 `mark` にそのオブジェクトをセットします。

このプロセスでは `mark` がプロトタイプチェーンから継承するプロパティとして明示的には `mark` オブジェクトに値（*ローカルの*値）を格納しません。プロパティの値を使用するとき、JavaScript はまずその値がそのオブジェクトに存在しているかどうかを確認します。存在している場合はその値が返されます。値がローカルには存在していない場合、JavaScript はプロトタイプチェーンを確認します（`__proto__` プロパティを使用）。プロトタイプチェーン内のオブジェクトがそのプロパティの値を持っている場合、その値が返されます。そのようなプロパティが見つからない場合は JavaScript はそのオブジェクトにはそのプロパティがないと報告します。このようにして、`mark` オブジェクトには次のようなプロパティと値が入ることになります。

```
mark.name = "";
mark.dept = "general";
mark.projects = [];
```

`mark` オブジェクトは `mark.__proto__` の原型的なオブジェクトから name および dept プロパティの値を継承します。WorkerBee コンストラクタによって projects プロパティにローカルの値が代入されます。このことでプロパティとその値を継承することができます。このプロセスの細かいところは [プロパティの継承、再び](/ja/Core_JavaScript_1.5_Guide/Property_Inheritance_Revisited) にて議論します。

これらのコンストラクタにインスタンス固有の値を渡せないため、この情報は汎用的になります。プロパティの値は WorkerBee によって作成されるすべての新しいオブジェクトに共有される、デフォルトの値になります。もちろん、これらのどのプロパティのでもその値を変えることができます。そのためには次のようにして `mark` に固有の情報を与えます。

```
mark.name = "Doe, Mark";
mark.dept = "admin";
mark.projects = ["navigator"];
```

{{ PreviousNext("Core JavaScript 1.5 Guide:The Employee Example:Object Properties", "Core JavaScript 1.5 Guide:The Employee Example:Object Properties:Adding Properties") }}
