---
title: Signature (functions) (シグネチャ (関数))
slug: Glossary/Signature/Function
---

**関数シグネチャ** (もしくは型シグネチャ、メソッドシグネチャ) は{{Glossary("Function", "関数")}}や{{Glossary("Method", "メソッド")}}の入力と出力を定義します。

シグネチャは以下のものを含みます:

- {{Glossary("Parameter", "パラメーター")}} とその {{Glossary("Type", "型")}}
- 返り値とその型
- スローされる可能性のある{{Glossary("Exception", "例外")}}
- {{Glossary("OOP", "オブジェクト指向")}} プログラムにおける利用可能性の情報(`public`、`static`、`prototype` のようなキーワード)。

## さらに詳しく

### JavaScript におけるシグネチャ

{{Glossary("JavaScript")}} は型付けの弱い動的言語です。なので先行して変数の型を宣言する必要がありません。プログラムが処理される間に自動的に型が決定します。JavaScript のシグネチャはそれでもやはりメソッドの情報を付与します:

```js
MyObject.prototype.myFunction(value);
```

- メソッドは `MyObject` という {{Glossary("オブジェクト")}} に追加される
- メソッドは{{Glossary("static method", "静的メソッド")}}になるのとは対照的に `MyObject` の `prototype` に追加される (したがって{{Glossary("instance method", "インスタンスメソッド")}}となる)。
- 関数名は `myFunction` である。
- メソッドは未定義の `value` という一つのパラメータを受け取る。

### Java におけるシグネチャ

{{Glossary("Java")}}では、シグネチャは仮想マシンコードレベルでメソッドやクラスを区別するために使用されます。 Java コードを実行できるように変数の型をコード中で宣言する必要があります。 Java は*強い型付け*がなされ、コンパイル中にすべてのパラメーターが正しいかどうかをチェックします。

```java
public static void main(String[] args)
```

- `public` キーワードはアクセス修飾子ですべてのオブジェクトからこのメソッドを呼び出すことができることを明示します。
- `static` キーワードはこのメソッドがインスタンスメソッドとは対照的にクラスメソッドであることを明示します。
- `void` キーワードはこのメソッドの返り値が無いことを明示します。
- メソッド名は `main` です。
- メソッドは `args` という `String` 配列型のパラメータを一つ受け取ります。

## `さらに学ぶ`

### `一般知識`

- Wikipedia の [Java internal type signatures](https://en.wikipedia.org/wiki/Type_signature#Java)
