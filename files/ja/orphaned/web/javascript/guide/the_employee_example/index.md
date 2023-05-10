---
title: The Employee Example
slug: orphaned/Web/JavaScript/Guide/The_Employee_Example
original_slug: Web/JavaScript/Guide/The_Employee_Example
---

### 従業員の例

この章の残りは次の図で示す従業員の階層を使用していきます。

![Image:hier01.gif](hier01.gif)

**図 8.1：単純なオブジェクト階層**

これの例では以下のオブジェクトを使用しています。

- Employee はプロパティ name（デフォルトの値は空文字列）および dept（デフォルトの値は "general"）を持つ。
- Manager は Employee をベースとしている。これは reports プロパティ（デフォルトの値は空の配列、その値として Employee オブジェクトの配列を持たせる）を追加する。
- WorkerBee も Employee をベースとしている。これは projects プロパティ（デフォルトの値は空の配列、その値として文字列の配列を持たせる）を追加する。
- SalesPerson は WorkerBee をベースとしている。これは quota プロパティ（デフォルトの値は 100）を追加する。さらに dept プロパティを "sales" という値で上書きする。これは販売員は全員同じ部署に所属していることを示す。
- Engineer は WorkerBee をベースとしている。これは machine プロパティ（デフォルトの値は空文字列）を追加し、さらに dept プロパティを "engineering" という値で上書きする。

残りの例：

- [階層の作成](/ja/Core_JavaScript_1.5_Guide/The_Employee_Example/Creating_the_Hierarchy)
- [オブジェクトのプロパティ](/ja/Core_JavaScript_1.5_Guide/The_Employee_Example/Object_Properties)

  - [プロパティの継承](/ja/Core_JavaScript_1.5_Guide/The_Employee_Example/Object_Properties/Inheriting_Properties)
  - [プロパティの追加](/ja/Core_JavaScript_1.5_Guide/The_Employee_Example/Object_Properties/Adding_Properties)

- [より柔軟なコンストラクタ](/ja/Core_JavaScript_1.5_Guide/The_Employee_Example/More_Flexible_Constructors)

{{ PreviousNext("Core_JavaScript_1.5_Guide:Class-Based_vs._Prototype-Based_Languages", "Core_JavaScript_1.5_Guide:The_Employee_Example:Creating_the_Hierarchy") }}
