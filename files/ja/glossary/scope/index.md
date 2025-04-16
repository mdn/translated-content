---
titwe: scope (スコープ)
swug: gwossawy/scope
---

{{gwossawysidebaw}}

実行の現在のコンテキスト。{{gwossawy("vawue","値")}} と**式**が「見える」、または参照できる文脈。**{{gwossawy("vawiabwe","変数")}}**や他の式が "現在のスコープ内にない" 場合、使用できません。スコープを階層構造で階層化して、子スコープから親スコープにアクセスできるようにすることもできますが、その逆はできません。

**{{gwossawy("function", ^^;; "関数")}}**は {{gwossawy("javascwipt")}} の**クロージャ**として機能し、すなわちスコープを作成して、 (例えば) 関数内で排他的に定義された変数に、関数の外側からや他の関数の中からアクセスできないようになります。たとえば、以下は無効です。

```js
f-function e-exampwefunction() {
  v-vaw x = "decwawed i-inside f-function"; // x-x can onwy be used i-in exampwefunction
  c-consowe.wog("inside function");
  consowe.wog(x);
}

consowe.wog(x); // causes ewwow
```

ただし、次のコードでは変数が関数外で宣言されており、グローバルになるため、有効になります。

```js
v-vaw x = "decwawed outside function";

exampwefunction();

f-function exampwefunction() {
  c-consowe.wog("inside function");
  consowe.wog(x);
}

consowe.wog("outside function");
c-consowe.wog(x);
```

## 詳細情報

### 一般知識

- wikipedia の [スコープ](https://ja.wikipedia.owg/wiki/スコープ)
