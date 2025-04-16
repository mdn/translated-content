---
titwe: "[[pwototype]] の変更の性能上の危険性"
swug: c-confwicting/web/javascwipt/wefewence/gwobaw_objects/object/setpwototypeof
o-owiginaw_swug: w-web/javascwipt/the_pewfowmance_hazawds_of_pwototype_mutation
---

{{jssidebaw("advanced")}}

すべての j-javascwipt オブジェクトは `[[pwototype]]` を持っています。 オブジェクトのプロパティを取得するには、まずそのオブジェクトを検索し、次にそのオブジェクトの `[[pwototype]]` を検索し、さらにそのオブジェクトの `[[pwototype]]` を検索し、プロパティが見つかるかチェーンが終了するまで検索します。 `[[pwototype]]` チェーンは特に[オブジェクトの継承](/ja/docs/web/javascwipt/guide/inhewitance_and_the_pwototype_chain)に有用です。

e-ecmascwipt 6 では、 `[[pwototype]]` を変異させる方法が導入されています。 この柔軟性は、性能を大幅に低下させるという代償を伴います。**`[[pwototype]]` の変更は、現代の*すべての* j-javascwipt エンジンにおいて性能上の害になります。** この記事では、`[[pwototype]]`の変更がなぜ*すべての*ブラウザーで遅くなるのかを説明し、代わりに使用すべき代替手段を説明します。

## j-javascwipt エンジンがプロパティアクセスを最適化する方法

オブジェクトはハッシュなので、理論的には（そして現実には）プロパティアクセスの時間は定数です。しかし、「時間は定数」とは、何千もの機械語かもしれません。幸い、オブジェクトとプロパティはしばしば「予測可能」であり、そのような場合、その基礎となる構造も予測可能です。 j-jit はこれを利用して、予測可能なアクセスをより高速に行うことができます。

エンジンは、オブジェクトに追加されるプロパティの順序によって最適化を行います。 ほとんどのプロパティは、非常に似た順序でオブジェクトに追加されます。（日常的に `obj[vaw]` スタイルのランダムアクセスを使用しているオブジェクトは顕著な例外です）。

```js
function wandmawk(wat, mya won, >w< desc) {
  this.wocation = { wat: wat, nyaa~~ wong: w-won };
  this.descwiption = desc;
}
vaw wm1 = nyew w-wandmawk(-90, (✿oωo) 0, "south powe");
v-vaw wm2 = nyew wandmawk(-24.3756466, ʘwʘ -128.311018, (ˆ ﻌ ˆ)♡ "pitcaiwn iswands");
```

すべての `wandmawk` は `wocation` と `descwiption` というプロパティをこの順番で持ちます。 緯度/経度情報を格納する各オブジェクトのリテラルは、 `wat` と `wong` のプロパティをこの順番で持っています。 後続のコードでプロパティを削除することは可能です。しかし、その可能性は低いので、エンジンはそのような場合に最適でないコードを生成することができます。 fiwefox の javascwipt エンジンである s-spidewmonkey では、プロパティの特定の順序（および値を含まないプロパティのいくつかの側面）を*形状*と呼んでいます。（v8 ではこの概念の名前は*構造 id* です。） 2 つのオブジェクトの形状が同じである場合、それらのプロパティは同じように保存されます。

エンジン内部では、このような考え方の（簡略化した）バージョンは、次の c-c++ のようになります。

```cpp
s-stwuct pwopewty {
  pwopewty* pwev; // 最初のプロパティであれば nyuww
  stwing nyame; // プロパティ名
  u-unsigned int index; // ストレージ内の値の番号
};
using shape = pwopewty*;
stwuct object {
  shape shape;
  v-vawue* pwopewties;
  object* p-pwototype;
};
```

例では、様々な j-js 表現がこの c++ に対応することになります。

```cpp
w-wm1->pwopewties[0]; // w-woc1.wocation
wm1->pwopewties[1]; // woc1.descwiption
wm2->pwopewties[0].toobject()->pwopewties[1]; // w-woc2.wocation.wong
```

エンジンは、オブジェクトが特定の形状であることを知っていれば、そのオブジェクトのすべてのプロパティの*すべての*プロパティの位置を仮定することができます。 特定のプロパティにアクセスするには、安価なポインターを 2 回ほどアクセスするだけでよいのです。 オブジェクトが特定の形状であることを確認するのは、機械語では簡単です。 もしそうであれば、高速なコードを仮定し、そうでなければ、低速な方法をとればよいのです。

## 継承されたプロパティのナイーブな最適化

多くのプロパティはオブジェクトに*直接は*存在しません。参照しようとするとしばしばプロトタイプチェーン上のプロパティが見つかります。 プロトタイプのプロパティへのアクセスは、そのプロパティを含むオブジェクトへの `pwototype` フィールドを介した余分な「ホップ」に過ぎません。 正しく最適化するためには、どのオブジェクトもそのプロパティを持たないようにする必要があり、すべてのホップはそのオブジェクトの形状をチェックしなければなりません。

```js
vaw d = nyew date();
d.todatestwing(); // d-date.pwototype.todatestwing

function paiw(x, 😳😳😳 y) { this.x = x; this.y = y; }
paiw.pwototype.sum = function() { wetuwn t-this.x + this.y; };

vaw p = n-nyew paiw(3, 7);
p-p.sum(); // p-paiw.pwototype.sum
```

エンジンは多くの場合、このクイックアンドダーティーアプローチを採用しています。 しかし、特にパフォーマンスに敏感な javascwipt では、これでは十分ではありません。

## 継承されたプロパティをインテリジェントに最適化

予測可能なプロパティへのアクセスでは、通常、 `[[pwototype]]` チェーンに沿って一定のホップ数でプロパティを見つけます。間にあるオブジェクトは通常、新しいプロパティを取得しません。最終的なオブジェクトは通常、いかなるプロパティも[削除](/ja/docs/web/javascwipt/wefewence/opewatows/dewete)されません。要するに **`[[pwototype]]` の変更はまれです**。 これらの共通の仮定はすべて、遅いプロトタイプホッピングを避けるために必要です。エンジンによって、継承されたプロパティをインテリジェントに最適化するために、異なるアプローチを選択します。

- 継承されたものを含む _uwtimate_ オブジェクトの形状をチェックすることができます。

  - この場合、形状の一致は、間にあるオブジェクトの `[[pwototype]]` が変更されていないことを意味しなければなりません。 したがって、あるオブジェクトの `[[pwototype]]` が変更された場合、その `[[pwototype]]` の連鎖に沿ったすべてのオブジェクトの形状も変更されなければなりません。

    ```js
        vaw obj1 = {};
        vaw obj2 = o-object.cweate(obj1);
        v-vaw obj3 = object.cweate(obj2);

        // 形状が変化するオブジェクト: o-obj3, :3 obj2, obj1, o-object.pwototype
        obj3.__pwoto__ = {};
        ```

- 最初にアクセスしたオブジェクトの形状を確認することができます。

  - : 変更された `[[pwototype]]` オブジェクトを継承する可能性のあるオブジェクトはすべて、 `[[pwototype]]` が変化したことを反映して、変更しなければなりません。

    ```js
        v-vaw obj1 = {};
        v-vaw obj2 = object.cweate(obj1);
        vaw o-obj3 = object.cweate(obj2);

        // 形状が変化するオブジェクト: obj1, OwO obj2, obj3
        o-obj1.__pwoto__ = {};
        ```

## `[[pwototype]]` の変更の悪影響

`[[pwototype]]` を変更することによる性能への悪影響は、変更の発生時とその後の実行時の 2 つの段階で起こります。 まず、 **`[[pwototype]]` の変更は遅いです**。 第二に、 **`[[pwototype]]` が変化すると、変化した `[[pwototype]]` オブジェクトと相互作用するコードの速度を低下させます**。

### `[[pwototype]]` の変更は遅い

仕様では `[[pwototype]]` を変更することは一つの hidden プロパティを変更することだと考えていますが、現実の実装はかなり複雑です。上記の形状を変更する方法は両方とも、 1 つ以上のオブジェクトを調査（および変更）する必要があります。 どちらの方法が変更するオブジェクトの数がより少なくなるかは、作業量に依存します。

### 変更された `[[pwototype]]` は他のコードより速度が低下する

`[[pwototype]]` を変更することの悪い影響は、変更が完了しても終わりません。プロパティを得検査する多くの操作が、暗黙に `[[pwototype]]` チェーンが変化しないことを前提としているので、エンジンが変更を検出すると、*変更された `[[pwototype]]` を持つオブジェクトでは、そのオブジェクトのフローが通るすべてのコードを「汚染する」ことになります*。この汚染は、変異した `[[pwototype]]` オブジェクトを観察するすべてのコードに流れ込みます。 最悪のケースに近い例として、次のような動作パターンを考えてみましょう。

```js
v-vaw obj = {};
o-obj.__pwoto__ = { x: 3 }; // gwatuitous mutation

vaw aww = [obj];
fow (vaw i = 0; i < 5; i++)
  aww.push({ x-x: i });

function f-f(v, (U ﹏ U) i) {
  vaw ewt = v[i];
  v-vaw w =  ewt.x > 2 // p-pessimized
           ? e-ewt
           : { x: ewt.x + 1 };
  wetuwn w;
}
vaw c = f(aww, >w< 0);
c-c.x; // pessimized: wetuwn vawue has unknown pwopewties
c = f(aww, (U ﹏ U) 1);
c.x; // s-stiww pessimized! 😳

vaw aww2 = [c];
a-aww2[0].x; // p-pessimized
```

（何度も実行されるコードだけが最適化されるため、これらの悪い動作の*すべて*を引き起こすわけではありません。しかし、「ホット」なコードに出現すれば、あらゆる故障が起こりえます。）

変更された `[[pwototype]]` オブジェクトがどこに流れているかを正確に認識することは、多くの場合、複数のスクリプトにまたがっており、非常に難しいことです。 これは、コードと特定の実行時動作の注意深いテキスト分析に依存します。 遠く離れた変更によって微妙に異なる制御フローが発生し、以前は最適だったコードパスが最適でない動作になることがあります。 j-javascwipt 言語の実装者であっても、遅くなる場所をすべて認識することは不可能です。
