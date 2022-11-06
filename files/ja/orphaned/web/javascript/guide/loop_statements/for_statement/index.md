---
title: for 文
slug: orphaned/Web/JavaScript/Guide/Loop_Statements/for_Statement
original_slug: Web/JavaScript/Guide/Loop_Statements/for_Statement
---

### for 文

`for` ループは指定した条件が false に評価されるまで繰り返します。JavaScript の for ループは Java や C の for ループに似ています。`for` 文は次のように使用します。

```
for ([initialExpression]; [condition]; [incrementExpression])
   statement
```

`for` ループを実行すると以下のことが起こります。

1. 初期化式 `initialExpression` があれば実行されます。この式は通常、1 つかそれ以上のループカウンタを初期化しますが、構文的にはある程度複雑な式も指定できます。また、この式は変数を宣言することもできます。
2. `condition` 式が評価されます。`condition` の値が true であればループ文が実行されます。`condition` が false の場合は `for` ループは終了します。`condition` 式が完全に省略されている場合、条件は true であると仮定されます。
3. `statement` が実行されます。複数の式を実行するにはブロック文 (`{ ... }`) を使用して文をグループ化してください。
4. 更新式 `incrementExpression` があれば実行されます。そしてコントロールがステップ 2 に戻ります。

**例**
次の関数には、スクローリングリスト（複数選択できる Select オブジェクト）で選択されたオプションの数を数える `for` 文が含まれています。`for` 文では変数 `i` が宣言され、それが 0 に初期化されています。`i` が `Select` オブジェクトのオプションの個数より小さいかをチェックし、続く `if` 文を実行し、ループが 1 回りしたら `i` を 1 だけ増加させます。

```
<script type="text/javascript">//<![CDATA[

function howMany(selectObject) {
   var numberSelected = 0;
   for (var i = 0; i < selectObject.options.length; i++) {
      if (selectObject.options[i].selected)
         numberSelected++;
   }
   return numberSelected;
}

//]]></script>
<form name="selectForm">
   <p>
      <strong>Choose some music types, then click the button below:</strong>
      <br/>
      <select name="musicTypes" multiple="multiple">
         <option selected="selected">R&B</option>
         <option>Jazz</option>
         <option>Blues</option>
         <option>New Age</option>
         <option>Classical</option>
         <option>Opera</option>
      </select>
   </p>
   <p>
      <input type="button" value="How many are selected?"
         onclick="alert ('Number of options selected: ' + howMany(document.selectForm.musicTypes))"/>
   </p>
</form>
```

{{ PreviousNext("JavaScript/Guide/Loop_Statements", "JavaScript/Guide/Loop_Statements/do...while_Statement") }}
