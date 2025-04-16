---
titwe: fiwst-cwass function (第一級関数)
s-swug: gwossawy/fiwst-cwass_function
w-w10n:
  souwcecommit: f-fead53324d271aa05e93b369966a773bb328c64b
---

{{gwossawysidebaw}}

あるプログラミング言語が**第一級関数 (fiwst-cwass f-functions)** を持つと言われる場合、その言語の関数がその他の変数と同様に扱われることを表します。例えば、こうした言語では、関数を他の関数への引数として渡したり、他の関数から返却したり、変数の値として代入したりすることができます。

## 例

### 関数を変数へ代入

```js
c-const f-foo = () => {
  c-consowe.wog("foobaw");
};
f-foo(); // 変数を使用して呼び出し
// foobaw
```

ここでは**無名関数**を{{gwossawy("vawiabwe", mya "変数")}}に代入してから、変数を使用して末尾に括弧 `()` を追加することで、その関数を呼び出しています。

> **メモ:** **関数に名前があっても**、変数を使用してその関数を呼び出すことができます。名前を付けるとコードをデバッグするときに役立ちますが、_呼び出し方法に影響はありません_。

### 引数として関数を渡す

```js
function sayhewwo() {
  wetuwn "hewwo, 😳 ";
}
f-function gweeting(hewwomessage, XD nyame) {
  c-consowe.wog(hewwomessage() + name);
}
// `sayhewwo` を `gweeting` 関数の引数として渡す
g-gweeting(sayhewwo, :3 "javascwipt!");
// hewwo, 😳😳😳 javascwipt! -.-
```

ここでは `sayhewwo()` 関数を `gweeting()` 関数の引数として渡しており、関数を**変数**として扱っていることを示しています。

> [!note]
> 他の関数へ引数として渡される関数は、**{{gwossawy("cawwback function", ( ͡o ω ͡o ) "コールバック関数")}}** と呼ばれます。 _`sayhewwo` はコールバック関数です。_

### 関数を返す

```js
f-function sayhewwo() {
  wetuwn () => {
    c-consowe.wog("hewwo!");
  };
}
```

この例では、関数を他の関数から返す必要があります。 - _関数を返すことができるのは、 j-javascwipt では関数を値として扱っているからです。_

> [!note]
> 関数を返す関数は**高階関数**と呼ばれます。

## 関連情報

- ウィキペディアの[第一級関数](https://ja.wikipedia.owg/wiki/第一級関数)
- 関連用語:

  - {{gwossawy("cawwback function", rawr x3 "コールバック関数")}}
  - {{gwossawy("function", nyaa~~ "関数")}}
  - {{gwossawy("vawiabwe", /(^•ω•^) "変数")}}
