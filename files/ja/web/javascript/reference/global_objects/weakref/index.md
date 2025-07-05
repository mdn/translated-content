---
title: WeakRef
slug: Web/JavaScript/Reference/Global_Objects/WeakRef
l10n:
  sourceCommit: 270351317fdaa57ba9123a19aa281e9e40bb0baa
---

{{JSRef}}

**`WeakRef`** オブジェクトは、ガベージコレクションを受けることを妨げない他のオブジェクトへの弱い参照を保持します。

## 解説

`WeakRef` オブジェクトはオブジェクトへの弱い参照を持ち、これは*ターゲット*または*リファレント*と呼ばれます。オブジェクトへの弱い参照は、ガベージコレクターによるオブジェクトの回収を妨げない参照です。対照的に、通常の（または*強い*）参照はオブジェクトをメモリーに保持します。オブジェクトが強い参照を持たなくなった場合、 JavaScript エンジンのガベージコレクターは、オブジェクトを破棄してメモリーを再取得することがあります。そうなると、弱い参照からオブジェクトを取得することはできなくなります。

[未登録のシンボル](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol#グローバルシンボルレジストリー)もガベージコレクション可能であるため、`WeakRef` オブジェクトの対象として使用することもできます。ただし、使用する用途は限られます。

### 可能な限り避ける

`WeakRef` の正しい使用には慎重な検討が必要であり、可能であれば避けた方が良いでしょう。また、仕様で保証されていない特定の動作に依存しないことも重要です。ガベージコレクションがいつ、どのように、そしてどのように発生するかは、使用している JavaScript エンジンの実装に依存します。あるエンジンで観察した動作が、別のエンジン、同じエンジンの別のバージョン、あるいは同じエンジンの同じバージョンでも少し違う状況では異なる可能性があります。ガベージコレクションは、 JavaScript エンジンの実装者が常に解決策を改良している難しい問題です。

ここでは、 `WeakRef` 導入の[提案](https://github.com/tc39/proposal-weakrefs)の著者が盛り込んだ具体的なポイントをいくつか紹介します。

> [ガベージコレクション](https://ja.wikipedia.org/wiki/%E3%82%AC%E3%83%99%E3%83%BC%E3%82%B8%E3%82%B3%E3%83%AC%E3%82%AF%E3%82%B7%E3%83%A7%E3%83%B3)は複雑です。アプリケーションもしくはライブラリーが WeakRef のガベージコレクションの解放処理か、即時にファイナライザー（解放処理のコールバック）の呼び出し処理に依存している場合は、予想した動作とは異なる動作を行うかもしれません。解放処理は予想よりもかなり後に行われるか、もしくは行われないからです。以下に挙げた様々な原因が考えられます。
>
> - あるオブジェクトは、別のオブジェクトよりずっと早くガベージコレクションされるかもしれません。たとえ、世代集合などによって同じ時点で到達できなくなったとしてもです。
> - ガベージコレクションの作業は、インクリメンタル技術やコンカレント技術を使用して、時間をかけて分割させることがあります。
> - メモリー使用量やレスポンスのバランスをとるために、さまざまなランタイムヒューリスティックを使用する可能性があります。
> - JavaScript エンジンは、到達できないように見えること（例えば、クロージャやインラインキャッシュなど）への参照を保持することがあります。
> - JavaScript エンジンが異なれば、これらのことは異なる形で行われるかもしれませんし、同じエンジンでもバージョンによってアルゴリズムが変わるかもしれません。
> - 複雑な要因によって、特定の API を使用している場合など、オブジェクトが予期せぬ時点まで保持されることがあります。

## WeakRef における注意

- コードがターゲットオブジェクトの `WeakRef` を作成した直後、または `WeakRef` の `deref` メソッドからターゲットオブジェクトを取得した場合、そのターゲットオブジェクトは現在の JavaScript の[ジョブ](https://tc39.es/ecma262/multipage/executable-code-and-execution-contexts.html#job)（スクリプトジョブの終わりに実行するプロミスリアクションジョブを含む）が終わるまで取り戻されません。すなわち、イベントループのターンの間だけ、オブジェクトが再取得されるのを「見る」ことができます。これは主に、指定された JavaScript エンジンのガベージコレクタの挙動をコードで明らかにすることを避けるためです。（ガベージコレクションは難しい問題です。JavaScriptエンジンの実装者は常に、これはうまくいく方法を洗練し、改善しています。）
- 複数の `WeakRef` が同じターゲットを持つ場合、互いに一致します。そのうちの一つで `deref` を呼び出した結果は、そのうちのもう一つで `deref` を呼び出した結果と一致します（同じジョブで）。
- もし `WeakRef` の対象が {{jsxref("FinalizationRegistry")}} にもある場合、 `WeakRef` の対象はレジストリーに関連するクリーンアップコールバックが呼び出される前に、同時にクリアされます。
- `WeakRef` の対象を変更することはできず、常に元の対象オブジェクトか、その対象が再取得されたときに `undefined` になるだけです。
- `WeakRef` は `deref` から `undefined` を返さないかもしれません。たとえ、対象とするオブジェクトが何も強く保持されていなくても、ガベージコレクターがそのオブジェクトを取り戻すことを決定しないかもしれないからです。

## コンストラクター

- {{jsxref("WeakRef/WeakRef", "WeakRef()")}}
  - : 新しい `WeakRef` オブジェクトを生成します。

## インスタンスプロパティ

これらのプロパティは `WeakRef.prototype` で定義されており、すべての `WeakRef` インスタンスで共有されます。

- {{jsxref("Object/constructor", "WeakRef.prototype.constructor")}} {{Optional_Inline}}
  - : インスタンスオブジェクトを作成したコンストラクター関数です。 `WeakRef` インスタンスの場合、初期値は {{jsxref("WeakRef/WeakRef", "WeakRef")}} コンストラクターです。

    > [!NOTE]
    > このプロパティは仕様上 "normative optional" とされており、適合性のある実装では `constructor` プロパティを公開しないことを意味しています。これにより、任意のコードが `WeakRef` コンストラクターを取得し、ガベージコレクションを監視することができなくなります。しかし、主要なエンジンはすべて既定では公開しています。

- `WeakRef.prototype[Symbol.toStringTag]`
  - : [`@@toStringTag`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) プロパティの初期値は文字列 `"WeakRef"` です。このプロパティは {{jsxref("Object.prototype.toString()")}} で使用されます。

## インスタンスメソッド

- {{jsxref("WeakRef.prototype.deref()")}}
  - : `WeakRef` オブジェクトの対象オブジェクトを返すか、対象オブジェクトが既に回収されている場合は `undefined` を返します。

## 例

### WeakRef オブジェクトの使用

この例では、 DOM 要素に表示させるカウンターを開始させ、その要素が存在しなくなったときに停止させます。

```js
class Counter {
  constructor(element) {
    // Remember a weak reference to the DOM element
    this.ref = new WeakRef(element);
    this.start();
  }

  start() {
    if (this.timer) {
      return;
    }

    this.count = 0;

    const tick = () => {
      // Get the element from the weak reference, if it still exists
      const element = this.ref.deref();
      if (element) {
        element.textContent = ++this.count;
      } else {
        // The element doesn't exist anymore
        console.log("The element is gone.");
        this.stop();
        this.ref = null;
      }
    };

    tick();
    this.timer = setInterval(tick, 1000);
  }

  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = 0;
    }
  }
}

const counter = new Counter(document.getElementById("counter"));
setTimeout(() => {
  document.getElementById("counter").remove();
}, 5000);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("FinalizationRegistry")}}
- {{jsxref("WeakSet")}}
- {{jsxref("WeakMap")}}
