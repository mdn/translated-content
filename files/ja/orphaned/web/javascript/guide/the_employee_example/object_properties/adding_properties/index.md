---
title: Adding Properties
slug: orphaned/Web/JavaScript/Guide/The_Employee_Example/Object_Properties/Adding_Properties
original_slug: Web/JavaScript/Guide/The_Employee_Example/Object_Properties/Adding_Properties
---

### プロパティの追加

JavaScript では実行時にどんなオブジェクトにもプロパティを追加することができます。コンストラクタ関数で与えられるプロパティだけを使う必要はありません。ある 1 つのオブジェクト固有のプロパティを追加するには、次のようにしてオブジェクトに値を代入します。

```
mark.bonus = 3000;
```

すると、`mark` オブジェクトには bonus プロパティができます。しかし、他のどの `WorkerBee` にもこのプロパティは存在しません。

あるコンストラクタ関数に対するプロトタイプとして使用されているオブジェクトに新しいプロパティを追加する場合、プロトタイプからプロパティを継承する全オブジェクトへそのプロパティを追加することになります。例えば、次の文を使用すると `specialty` プロパティをすべての従業員に対して追加することができます。

```
Employee.prototype.specialty = "none";
```

JavaScript がこの文を実行するとすぐに `mark` オブジェクトも "`none`" という値を持つ specialty プロパティを持つようになります。次の図ではこのプロパティを Employee プロトタイプに追加し、さらに `Engineer` プロトタイプに対するそれを上書きしたときの効果を示します。

![Image:hier04.gif](hier04.gif)
**図 8.4：プロパティの追加**

{{ PreviousNext("Core_JavaScript_1.5_Guide:The_Employee_Example:Object_Properties:Inheriting_Properties", "Core_JavaScript_1.5_Guide:The_Employee_Example:More_Flexible_Constructors") }}
