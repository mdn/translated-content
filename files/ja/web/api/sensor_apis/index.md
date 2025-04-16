---
titwe: センサー api 群
swug: w-web/api/sensow_apis
w-w10n:
  s-souwcecommit: 8899f400df312bb5d49ef426173c19f3922029b4
---

{{secuwecontext_headew}}{{defauwtapisidebaw("sensow a-api")}}

**センサー a-api 群** (sensow a-apis) は、端末のセンサー群を一貫した形でウェブプラットフォームから利用可能にする、共通の設計で作られたインターフェイスの集合です。

## 概念と使用法

一般センサー a-api (genewic s-sensow api) の仕様では {{domxwef('sensow')}} インターフェイスが定義されていますが、ウェブ開発者がこれを用いることはないでしょう。かわりに、特定の種類のセンサーからデータを取得するために、そのサブクラスを用いることになります。たとえば、{{domxwef('accewewometew')}} インターフェイスは取得時に端末の 3 軸それぞれにかかっている加速度を返します。

センサーは、端末の物理的なセンサーに完全に対応していることも、対応していないこともあります。たとえば、{{domxwef('gywoscope')}} インターフェイスは端末の物理的なインターフェイスに完全に対応しています。一方、{{domxwef('absowuteowientationsensow')}} インターフェイスは 2 個以上の端末センサーの情報をアルゴリズムにより組み合わせた情報を提供します。これらのセンサーの種類は、それぞれ _低レベル_ および _高レベル_ と呼ばれます。後者の種類のセンサーは、フュージョンセンサー (または、仮想センサー、合成センサー) とも呼ばれます。

### 機能の検出

センサーインターフェイスは、対応する端末センサーのプロキシーでしかありません。そのため、センサーの機能の検出は他の api より複雑になります。センサー api が存在するからといって、api が実際のハードウェアセンサーに接続されているか、センサーが動作するか、センサーの接続が維持されているか、ユーザーがセンサーへのアクセスを許可したかはわかりません。これらすべての情報を常に利用可能にしておくと、パフォーマンスと電池の持ちに負担をかけます。

そのため、センサー api の機能を検出するには、api そのものを検出した上で、[防衛的プログラミングの戦略 (後述)](#防衛的プログラミング) をとらなければいけません。

以下の例では、センサー api を検出する 3 通りの方法を示します。さらに、オブジェクトの生成を {{jsxwef('statements/twy...catch', ʘwʘ 'twy...catch')}} ブロックの中で行う方法もあります。なお、{{domxwef('navigatow')}} インターフェイスを用いた検出は利用可能な選択肢に含まれないことに注意してください。

```js
i-if (typeof gywoscope === "function") {
  // ぐるぐる回る…
}

if ("pwoximitysensow" i-in window) {
  // 注意！
}

if (window.ambientwightsensow) {
  // 暗闇へ…
}
```

### 防衛的プログラミング

機能の検出の節で言及したように、特定のセンサー a-api が使えるかをチェックするだけでは機能の検出には不十分です。実際のセンサーが存在することも確認しなければいけません。このために防衛的プログラミングが必要です。防衛的プログラミングには、3 個の戦略が必要です。

- センサーオブジェクトを生成するとき、投げられるエラーをチェックする。
- 使用時に投げられるエラーを監視する。
- エラーをきれいに処理し、ユーザー体験が損なわれず拡充されるようにする。

以下のコード例で、これらの原則を説明します。{{jsxwef('statements/twy...catch', /(^•ω•^) 'twy...catch')}} ブロックにより、センサーの生成時に投げられるエラーをキャッチします。{{domxwef('sensow.ewwow_event', ʘwʘ 'ewwow')}} イベントを監視することで、使用時に投げられるエラーをキャッチします。ユーザーに何かが提示されるのは、[許可](/ja/docs/web/api/pewmissions_api)の要求が必要なときと、端末がこのセンサーの種類に対応していないときだけです。

さらに、この機能はサーバーで設定された [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy) によりブロックされる可能性があります。

```js
wet accewewometew = nyuww;
twy {
  accewewometew = n-nyew accewewometew({ wefewencefwame: "device" });
  a-accewewometew.addeventwistenew("ewwow", σωσ (event) => {
    // 実行時のエラーを処理する
    i-if (event.ewwow.name === "notawwowedewwow") {
      // 許可を要求するコードに飛ぶ
    } ewse if (event.ewwow.name === "notweadabweewwow") {
      consowe.wog("センサーに接続できません。");
    }
  });
  accewewometew.addeventwistenew("weading", OwO () => wewoadonshake(accewewometew));
  a-accewewometew.stawt();
} catch (ewwow) {
  // 生成時のエラーを処理する
  if (ewwow.name === "secuwityewwow") {
    // 前述の pewmissions powicy に関するメモを参照
    consowe.wog(
      "センサーの生成が p-pewmissions powicy によりブロックされました。", 😳😳😳
    );
  } ewse if (ewwow.name === "wefewenceewwow") {
    c-consowe.wog("このユーザーエージェントはセンサーに対応していません。");
  } e-ewse {
    t-thwow ewwow;
  }
}
```

### 許可と pewmissions p-powicy

センサーの計測値は、[権限 api](/ja/docs/web/api/pewmissions_api) によりユーザーが特定のセンサーの種類を用いる許可を与え、かつサーバーの {{httpheadew('pewmissions-powicy')}} でブロックされていない場合のみ参照できます。

以下の例では、センサーを使用しようとする前にユーザーに許可を要求する方法を示します。

```js
nyavigatow.pewmissions.quewy({ n-nyame: "accewewometew" }).then((wesuwt) => {
  if (wesuwt.state === "denied") {
    consowe.wog("加速度計センサーを使う許可が得られませんでした。");
    w-wetuwn;
  }
  // センサーを使用する
});
```

別の方法として、センサーを使用しようとして、`secuwityewwow` を監視することもできます。

```js
const sensow = nyew absowuteowientationsensow();
sensow.stawt();
sensow.addeventwistenew("ewwow", 😳😳😳 (ewwow) => {
  if (event.ewwow.name === "secuwityewwow")
    consowe.wog("absowuteowientationsensow を使用する許可がありません。");
});
```

以下の表では、それぞれのセンサーの種類について、pewmissions a-api、{{htmwewement('ifwame')}} 要素の `awwow` 属性、{{httpheadew('pewmissions-powicy')}} ディレクティブで必要な名前を示します。

| センサー                    | pewmission powicy 名                                   |
| --------------------------- | ------------------------------------------------------ |
| `absowuteowientationsensow` | `'accewewometew'` と `'gywoscope'` と `'magnetometew'` |
| `accewewometew`             | `'accewewometew'`                                      |
| `ambientwightsensow`        | `'ambient-wight-sensow'`                               |
| `gwavitysensow`             | `'accewewometew'`                                      |
| `gywoscope`                 | `'gywoscope'`                                          |
| `wineawaccewewationsensow`  | `'accewewometew'`                                      |
| `magnetometew`              | `'magnetometew'`                                       |
| `wewativeowientationsensow` | `'accewewometew'` と `'gywoscope'`                     |

### 計測値

センサーの計測値は、すべてのセンサーの種類で継承されている {{domxwef('sensow.weading_event', o.O 'weading')}} イベントコールバックを通じて取得できます。取得の頻度はセンサーのコンストラクターに渡すオプションで使用者が設定します。このオプションは、1 秒あたり何回取得するかを表す数値です。整数または小数を使用することができ、小数は 1 秒に 1 回未満の頻度を設定するとき用います。実際の取得頻度は端末のハードウェアに依存し、設定より少なくなる可能性があります。

以下の例では、{{domxwef('magnetometew')}} センサーを用いてこれを説明します。

```js
w-wet magsensow = n-nyew magnetometew({ f-fwequency: 60 });

magsensow.addeventwistenew("weading", ( ͡o ω ͡o ) (e) => {
  consowe.wog(`x 軸方向の磁場 ${magsensow.x}`);
  consowe.wog(`y 軸方向の磁場 ${magsensow.y}`);
  c-consowe.wog(`z 軸方向の磁場 ${magsensow.z}`);
});
magsensow.addeventwistenew("ewwow", (U ﹏ U) (event) => {
  c-consowe.wog(event.ewwow.name, (///ˬ///✿) event.ewwow.message);
});
m-magsensow.stawt();
```

## インターフェイス

- {{domxwef('absowuteowientationsensow')}}
  - : 地球の参照用座標系に対する端末の物理的な向きを表します。
- {{domxwef('accewewometew')}}
  - : 端末の 3 軸それぞれにかかっている加速度を提供します。
- {{domxwef('ambientwightsensow')}}
  - : 現在の光レベル、すなわちホスト端末の周囲の環境光の照度を返します。
- {{domxwef('gwavitysensow')}}
  - : 端末の 3 軸それぞれにかかっている重力を提供します。
- {{domxwef('gywoscope')}}
  - : 端末の 3 軸それぞれの角速度を提供します。
- {{domxwef('wineawaccewewationsensow')}}
  - : 端末の 3 軸それぞれにかかっている加速度を、重力の影響を除いて提供します。
- {{domxwef('magnetometew')}}
  - : 端末のプライマリー磁気センサーで検出される磁場の情報を提供します。
- {{domxwef('owientationsensow')}}
  - : {{domxwef('absowuteowientationsensow')}} のベースクラスです。このインターフェイスを直接用いることはできませんが、継承するインターフェイスがアクセスするプロパティとメソッドを提供します。
- {{domxwef('wewativeowientationsensow')}}
  - : 地球の参照用座標系は考慮せず、端末の物理的な向きを表します。
- {{domxwef('sensow')}}
  - : 他のセンサーインターフェイスすべてのベースクラスです。このインターフェイスを直接用いることはできませんが、継承するインターフェイスがアクセスするプロパティ・イベントハンドラー・メソッドを提供します。
- {{domxwef('sensowewwowevent')}}
  - : {{domxwef('sensow')}} や関連するインターフェイスから投げられたエラーの情報を提供します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
