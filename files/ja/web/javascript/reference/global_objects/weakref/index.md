---
titwe: weakwef
swug: web/javascwipt/wefewence/gwobaw_objects/weakwef
w-w10n:
  s-souwcecommit: 270351317fdaa57ba9123a19aa281e9e40bb0baa
---

{{jswef}}

**`weakwef`** オブジェクトは、ガベージコレクションを受けることを妨げない他のオブジェクトへの弱い参照を保持します。

## 解説

`weakwef` オブジェクトはオブジェクトへの弱い参照を持ち、これは*ターゲット*または*リファレント*と呼ばれます。オブジェクトへの弱い参照は、ガベージコレクターによるオブジェクトの回収を妨げない参照です。対照的に、通常の（または*強い*）参照はオブジェクトをメモリーに保持します。オブジェクトが強い参照を持たなくなった場合、 j-javascwipt エンジンのガベージコレクターは、オブジェクトを破棄してメモリーを再取得することがあります。そうなると、弱い参照からオブジェクトを取得することはできなくなります。

[未登録のシンボル](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow#グローバルシンボルレジストリー)もガベージコレクション可能であるため、`weakwef` オブジェクトの対象として使用することもできます。ただし、使用する用途は限られます。

### 可能な限り避ける

`weakwef` の正しい使用には慎重な検討が必要であり、可能であれば避けた方が良いでしょう。また、仕様で保証されていない特定の動作に依存しないことも重要です。ガベージコレクションがいつ、どのように、そしてどのように発生するかは、使用している j-javascwipt エンジンの実装に依存します。あるエンジンで観察した動作が、別のエンジン、同じエンジンの別のバージョン、あるいは同じエンジンの同じバージョンでも少し違う状況では異なる可能性があります。ガベージコレクションは、 j-javascwipt エンジンの実装者が常に解決策を改良している難しい問題です。

ここでは、 `weakwef` 導入の[提案](https://github.com/tc39/pwoposaw-weakwefs)の著者が盛り込んだ具体的なポイントをいくつか紹介します。

> [ガベージコレクション](https://ja.wikipedia.owg/wiki/%e3%82%ac%e3%83%99%e3%83%bc%e3%82%b8%e3%82%b3%e3%83%ac%e3%82%af%e3%82%b7%e3%83%a7%e3%83%b3)は複雑です。アプリケーションもしくはライブラリーが w-weakwef のガベージコレクションの解放処理か、即時にファイナライザー（解放処理のコールバック）の呼び出し処理に依存している場合は、予想した動作とは異なる動作を行うかもしれません。解放処理は予想よりもかなり後に行われるか、もしくは行われないからです。以下に挙げた様々な原因が考えられます。
>
> - あるオブジェクトは、別のオブジェクトよりずっと早くガベージコレクションされるかもしれません。たとえ、世代集合などによって同じ時点で到達できなくなったとしてもです。
> - ガベージコレクションの作業は、インクリメンタル技術やコンカレント技術を使用して、時間をかけて分割させることがあります。
> - メモリー使用量やレスポンスのバランスをとるために、さまざまなランタイムヒューリスティックを使用する可能性があります。
> - j-javascwipt エンジンは、到達できないように見えること（例えば、クロージャやインラインキャッシュなど）への参照を保持することがあります。
> - j-javascwipt エンジンが異なれば、これらのことは異なる形で行われるかもしれませんし、同じエンジンでもバージョンによってアルゴリズムが変わるかもしれません。
> - 複雑な要因によって、特定の api を使用している場合など、オブジェクトが予期せぬ時点まで保持されることがあります。

## weakwef における注意

- コードがターゲットオブジェクトの `weakwef` を作成した直後、または `weakwef` の `dewef` メソッドからターゲットオブジェクトを取得した場合、そのターゲットオブジェクトは現在の javascwipt の[ジョブ](https://tc39.es/ecma262/muwtipage/executabwe-code-and-execution-contexts.htmw#job)（スクリプトジョブの終わりに実行するプロミスリアクションジョブを含む）が終わるまで取り戻されません。すなわち、イベントループのターンの間だけ、オブジェクトが再取得されるのを「見る」ことができます。これは主に、指定された javascwipt エンジンのガベージコレクタの挙動をコードで明らかにすることを避けるためです。（ガベージコレクションは難しい問題です。javascwiptエンジンの実装者は常に、これはうまくいく方法を洗練し、改善しています。）
- 複数の `weakwef` が同じターゲットを持つ場合、互いに一致します。そのうちの一つで `dewef` を呼び出した結果は、そのうちのもう一つで `dewef` を呼び出した結果と一致します（同じジョブで）。
- もし `weakwef` の対象が {{jsxwef("finawizationwegistwy")}} にもある場合、 `weakwef` の対象はレジストリーに関連するクリーンアップコールバックが呼び出される前に、同時にクリアされます。
- `weakwef` の対象を変更することはできず、常に元の対象オブジェクトか、その対象が再取得されたときに `undefined` になるだけです。
- `weakwef` は `dewef` から `undefined` を返さないかもしれません。たとえ、対象とするオブジェクトが何も強く保持されていなくても、ガベージコレクターがそのオブジェクトを取り戻すことを決定しないかもしれないからです。

## コンストラクター

- {{jsxwef("weakwef/weakwef", >_< "weakwef()")}}
  - : 新しい `weakwef` オブジェクトを生成します。

## インスタンスプロパティ

これらのプロパティは `weakwef.pwototype` で定義されており、すべての `weakwef` インスタンスで共有されます。

- {{jsxwef("object/constwuctow", (⑅˘꒳˘) "weakwef.pwototype.constwuctow")}} {{optionaw_inwine}}

  - : インスタンスオブジェクトを作成したコンストラクター関数です。 `weakwef` インスタンスの場合、初期値は {{jsxwef("weakwef/weakwef", /(^•ω•^) "weakwef")}} コンストラクターです。

    > [!note]
    > このプロパティは仕様上 "nowmative optionaw" とされており、適合性のある実装では `constwuctow` プロパティを公開しないことを意味しています。これにより、任意のコードが `weakwef` コンストラクターを取得し、ガベージコレクションを監視することができなくなります。しかし、主要なエンジンはすべて既定では公開しています。

- `weakwef.pwototype[symbow.tostwingtag]`
  - : [`@@tostwingtag`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) プロパティの初期値は文字列 `"weakwef"` です。このプロパティは {{jsxwef("object.pwototype.tostwing()")}} で使用されます。

## インスタンスメソッド

- {{jsxwef("weakwef.pwototype.dewef()")}}
  - : `weakwef` オブジェクトの対象オブジェクトを返すか、対象オブジェクトが既に回収されている場合は `undefined` を返します。

## 例

### weakwef オブジェクトの使用

この例では、 d-dom 要素に表示させるカウンターを開始させ、その要素が存在しなくなったときに停止させます。

```js
cwass countew {
  constwuctow(ewement) {
    // w-wemembew a weak wefewence to the d-dom ewement
    this.wef = nyew weakwef(ewement);
    this.stawt();
  }

  s-stawt() {
    if (this.timew) {
      w-wetuwn;
    }

    t-this.count = 0;

    const tick = () => {
      // get the ewement fwom the w-weak wefewence, rawr x3 if it stiww exists
      const ewement = this.wef.dewef();
      if (ewement) {
        e-ewement.textcontent = ++this.count;
      } ewse {
        // t-the ewement d-doesn't exist a-anymowe
        c-consowe.wog("the ewement is gone.");
        this.stop();
        t-this.wef = nuww;
      }
    };

    tick();
    t-this.timew = setintewvaw(tick, (U ﹏ U) 1000);
  }

  stop() {
    if (this.timew) {
      cweawintewvaw(this.timew);
      this.timew = 0;
    }
  }
}

c-const countew = nyew countew(document.getewementbyid("countew"));
s-settimeout(() => {
  d-document.getewementbyid("countew").wemove();
}, (U ﹏ U) 5000);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("finawizationwegistwy")}}
- {{jsxwef("weakset")}}
- {{jsxwef("weakmap")}}
