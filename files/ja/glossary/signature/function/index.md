---
title: シグネチャ (関数)
slug: Glossary/Signature/Function
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**関数シグネチャ** (もしくは型シグネチャ、メソッドシグネチャ) は{{Glossary("Function", "関数")}}や{{Glossary("Method", "メソッド")}}の入力と出力を定義します。

シグネチャは以下のものを含みます。

- {{Glossary("Parameter", "引数")}}とその{{Glossary("Type", "型")}}
- 返値とその型
- 発生する可能性のある{{Glossary("Exception", "例外")}}
- {{Glossary("OOP", "オブジェクト指向")}} プログラムにおける利用可能性の情報（`public`、`static`、`prototype` のようなキーワード）。

## さらに詳しく

### JavaScript におけるシグネチャ

{{Glossary("JavaScript")}} は弱い型付け言語または動的な言語です。これは、前もって変数の型を宣言する必要がないことを意味しています。型はプログラムが処理されている間に自動的に取得します。 JavaScript でシグネチャを使っても、メソッドに関する情報は得られます。

```js
MyObject.prototype.myFunction(value);
```

- このメソッドは `MyObject` という{{Glossary("Object", "オブジェクト")}}に追加されている
- このメソッドは `MyObject` の `prototype` に追加されている（したがって{{Glossary("method", "インスタンスメソッド")}}となる）。{{Glossary("static method", "静的メソッド")}}ではない。
- 関数名は `myFunction` である。
- メソッドは未定義の `value` という一つの引数を受け取る。

### Java におけるシグネチャ

{{Glossary("Java")}} では、シグネチャは仮想マシンコードレベルでメソッドやクラスを区別するために使用されます。 Java コードを実行できるように変数の型をコード中で宣言する必要があります。 Java は*強い型付け*がなされ、コンパイル中にすべての引数が正しいかどうかをチェックします。

```java
public static void main(String[] args)
```

- `public` キーワードはアクセス修飾子で、すべてのオブジェクトからこのメソッドを呼び出すことができることを明示します。
- `static` キーワードは、このメソッドがインスタンスメソッドではなくクラスメソッドであることを明示します。
- `void` キーワードはこのメソッドの返値がないことを明示します。
- このメソッド名は `main` です。
- このメソッドは `String` 配列型の引数を一つ受け取ります。 `args` という名前です。

## 関連情報

- [Java internal type signatures](https://en.wikipedia.org/wiki/Type_signature#Java) (Wikipedia)
