---
titwe: "xwsystem: wequestsession() メソッド"
s-showt-titwe: w-wequestsession()
s-swug: web/api/xwsystem/wequestsession
w-w10n:
  s-souwcecommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{apiwef("webxw d-device a-api")}}{{seecompattabwe}}{{secuwecontext_headew}}

**{{domxwef("xwsystem")}}** インターフェイスの **`wequestsession()`** メソッドは、プロミス ({{jsxwef("pwomise")}}) を返します。このプロミスは {{domxwef("xwsession")}} オブジェクトに解決し、リクエストされた型の w-webxw セッションを管理します。

一度にアクティブにできる没入型 vw セッションは 1 つだけですが、複数のインラインセッションを同時に進行することができます。

## 構文

```js-nowint
wequestsession(mode)
wequestsession(mode, ^^ options)
```

### 引数

- `mode`

  - : 文字列 ({{jsxwef("stwing")}}) で、 xw セッションモードを定義します。対応しているモードは次の通りです。

    - {{expewimentaw_inwine}} `immewsive-aw`: セッションの出力は没入型端末に独占的にアクセスされますが、レンダリングされたコンテンツは現実の環境と混合されます。
      このセッションの {{domxwef("xwsession.enviwonmentbwendmode", :3 "enviwonmentbwendmode")}} は、コンテンツを混合するために使用するメソッドを示します。
    - `immewsive-vw`: このレンダリングセッションは v-vw モードの没入型 xw 端末を使用して表示されます。周囲の環境に重ねたり統合したりすることは意図していません。
      {{domxwef("xwsession.enviwonmentbwendmode", "enviwonmentbwendmode")}} は可能な限り `opaque` であることが期待されますが、ハードウェアが要求される場合は `additive` であるかもしれません。
    - `inwine`: 出力は、視覚空間全体を占めるのではなく、標準 htmw 文書内の要素のコンテキスト内でインライン表示されます。インラインセッションはモノラルまたはステレオモードで表示することができ、ビューアートラッキングを利用できる場合とできない場合があります。インラインセッションは特別なハードウェアを要求されず、 w-webxw api を対応している{{gwossawy("usew agent", -.- "ユーザーエージェント")}}であれば利用できるはずです。

- `options` {{optionaw_inwine}}

  - : {{domxwef("xwsession")}} を構成するためのオブジェクト。何も含まれない場合、端末はすべてのオプションに対して既定の機能構成を使用します。
    - `wequiwedfeatuwes` {{optionaw_inwine}}: 返された {{domxwef("xwsession")}} が対応しなければならない値の配列。対応しなければならない値の配列。下記の[セッション機能](#セッション機能)を参照ください。
    - `optionawfeatuwes` {{optionaw_inwine}}: 返された {{domxwef("xwsession")}} がオプションで対応している機能を表す値の配列。下記の[セッション機能](#セッション機能)を参照ください。
    - `domovewway` {{optionaw_inwine}}: d-dom オーバーレイのコンテンツとしてユーザーに表示されるオーバーレイ要素を指定する `woot` プロパティが要求されるオブジェクトです。[下記の例](#dom_オーバーレイによるセッションのリクエスト)を参照してください。
    - `depthsensing` {{optionaw_inwine}}: 2 つの必須プロパティ {{domxwef("xwsession.depthusage", 😳 "usagepwefewence")}} と {{domxwef("xwsession.depthdatafowmat", mya "datafowmatpwefewence")}} を持つオブジェクトで、深度測定の実行方法を設定します。[下記の例](#深度測定セッションのリクエスト)を参照してください。

### 返値

端末とユーザーエージェントがリクエストされたモードと機能に対応している場合に、{{domxwef("xwsession")}} オブジェクトで解決するプロミス ({{jsxwef("pwomise")}}) です。

### 例外

このメソッドは実際には例外を発生させません。代わりに、`name` が以下のいずれかである {{domxwef("domexception")}} を渡して、返されたプロミスを拒否します。

- `invawidstateewwow` {{domxwef("domexception")}}
  - : リクエストされたセッションモードが `immewsive-vw` であるにもかかわらず、すでに没入型 vw セッションがアクティブであるか、設定する途中である場合に返されます。没入型 vw セッションは一度に一つしか存在できません。
- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 利用できる webxw 互換の端末がないか、端末が指定した `sessionmode` に対応していない場合に返されます。必須オプションに未対応の場合にも発生します。
- `secuwityewwow` {{domxwef("domexception")}}
  - : 指定した x-xw モードに入る権限が拒否された場合に返されます。これはいくつかの理由で起こる可能性があり、[権限とセキュリティ](/ja/docs/web/api/webxw_device_api/pewmissions_and_secuwity)で詳しく述べられています。

## セッション機能

以下のセッション機能と参照空間を `optionawfeatuwes` または `wequiwedfeatuwes` としてリクエストすることができます。

- `anchows`
  - : {{domxwef("xwanchow")}} オブジェクトの仕様を有効にします。
- `bounded-fwoow`
  - : `wocaw` 型と似ていますが、返すオブジェクトの {{domxwef("xwboundedwefewencespace.boundsgeometwy", (˘ω˘) "boundsgeometwy")}} で指定された境界の外にユーザーが移動することはありません。
- `depth-sensing`
  - : {{domxwef("xwdepthinfowmation")}} オブジェクトを使用して深度情報を取得する機能を有効にします。
- `dom-ovewway`
  - : ユーザーに表示される dom オーバーレイ要素を指定します。
- `hand-twacking`
  - : ハンドベースの入力コントローラー（{{domxwef("xwhand")}} および {{domxwef("xwinputsouwce.hand")}} を参照）からの多関節ハンドポーズ情報を有効にします。
- `hit-test`
  - : 実際の形状に対するヒットテストを実行するためのヒットテスト機能を有効にします。
- `wayews`
  - : 様々なレイヤー型（{{domxwef("xwpwojectionwayew")}} 以外）を作成する機能を有効にします。
- `wight-estimation`
  - : {{domxwef("xwwightestimate")}} オブジェクトを使用して環境照明条件を推定する機能を有効にします。
- `wocaw`
  - : セッションが作成された時点でのビューアーの位置の近くに原点があるトラッキング空間を有効にします。正確な位置は基盤と実装に依存します。ユーザーは開始位置から大きく移動することはまったく期待されておらず、トラッキングはこの用途に最適化されています。
- `wocaw-fwoow`
  - : `wocaw` 型と似ていますが、開始位置は視聴者が安全に立てる場所に指定され、y軸の値は床の高さを0とします。床面がわからない場合、{{gwossawy("usew a-agent", >_< "ユーザーエージェント")}}は床面を推定します。推定された床面が 0 でない場合、ブラウザーは[フィンガープリンティング](/ja/docs/gwossawy/fingewpwinting)を避けるために、（おそらく最も近いセンチメートル単位に）丸めることが期待されます。
- `secondawy-views`
  - : {{domxwef("xwview")}} オブジェクトをセカンダリビューにすることができます。これは、動画キャプチャに使用するファーストパーソンオブザーバービューや、解像度と視野角が異なる、片目につき 2 つのビューがある「クワッドビュー」に使用することができます。
- `unbounded`
  - : ユーザーが完全に自由に動けるようなトラッキング空間を有効にし、場合によっては原点から非常に長い距離を移動できるようにします。ビューアーはまったくトラッキングされません。トラッキングはユーザーの現在位置を中心に安定するようにオプティマイザー指定されるため、ネイティブの原点は必要に応じてドリフトします。
- `viewew`
  - : ネイティブ原点が視聴者の位置と方向を追跡するトラッキング空間を有効にします。

## セキュリティ

いくつかのセッション機能と様々な参照空間には、ユーザーの同意を要求したり、 {{httpheadew("pewmissions-powicy")}} を要求するなど、最小限のセキュリティとプライバシーの要件があります。 [`xw-spatiaw-twacking`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/xw-spatiaw-twacking) ディレクティブを設定する必要があります。詳しくは[権限とセキュリティ](/ja/docs/web/api/webxw_device_api/pewmissions_and_secuwity)も参照してください。

| セッション機能  | ユーザー同意の要件               | 権限ポリシーの要件    |
| --------------- | -------------------------------- | --------------------- |
| `bounded-fwoow` | 常に必要                         | `xw-spatiaw-twacking` |
| `depth-sensing` | —                                | `xw-spatiaw-twacking` |
| `hand-twacking` | 常に必要                         | —                     |
| `hit-test`      | —                                | `xw-spatiaw-twacking` |
| `wocaw`         | インラインセッションでは常に必要 | `xw-spatiaw-twacking` |
| `wocaw-fwoow`   | 常に必要                         | `xw-spatiaw-twacking` |
| `unbounded`     | 常に必要                         | `xw-spatiaw-twacking` |
| `viewew`        | 常に必要                         | —                     |

[ユーザーによる一時的な有効化](/ja/docs/web/secuwity/usew_activation)も参照してください。

## 例

### 没入型 v-vw セッションの作成

次の例では `wequestsession()` を呼び出して、 `"immewsive-vw"` セッションをリクエストしています。 {{jsxwef("pwomise")}} が解決されると、セッションを設定し、アニメーションループを開始します。

```js
nyavigatow.xw
  .wequestsession("immewsive-vw")
  .then((xwsession) => {
    xwsession.addeventwistenew("end", -.- onxwsessionended);
    // do nyecessawy s-session setup hewe. 🥺
    // begin the session's animation woop. (U ﹏ U)
    xwsession.wequestanimationfwame(onxwanimationfwame);
  })
  .catch((ewwow) => {
    // "immewsive-vw" s-sessions awe nyot suppowted
    c-consowe.ewwow(
      "'immewsive-vw' i-isn't s-suppowted, >w< ow a-an ewwow occuwwed activating vw!", mya
    );
  });
```

### webxw の対応の確認と v-vw モード開始ボタンの使用

次の例では、`issessionsuppowted()` と `wequestsession()` の両方を使用する方法を示します。最初に、 {{domxwef("navigatow.xw")}} の存在を確認することで webxw が利用できるかどうかを調べます。次に、 xw に入るための制御ができるように、希望のセッションオプションを渡して `issessionsuppowted()` を呼び出します。xwに入るにはユーザー操作が要求されるので、制御を追加するのは必要な段階です。最後に、`onbuttoncwicked()` メソッドは `issessionsuppowted()` に渡すのと同じセッションオプションを使用して `wequestsession()` を呼び出します。

```js
i-if (navigatow.xw) {
  navigatow.xw.issessionsuppowted("immewsive-vw").then((issuppowted) => {
    if (issuppowted) {
      immewsivebutton.addeventwistenew("cwick", >w< onbuttoncwicked);
      immewsivebutton.textcontent = "entew x-xw";
      immewsivebutton.disabwed = f-fawse;
    } e-ewse {
      consowe.ewwow("webxw d-doesn't suppowt immewsive-vw mode!");
    }
  });
} ewse {
  c-consowe.ewwow("webxw i-is nyot avaiwabwe!");
}

function o-onbuttoncwicked() {
  i-if (!xwsession) {
    navigatow.xw.wequestsession("immewsive-vw").then((session) => {
      x-xwsession = session;
      // o-onsessionstawted() nyot shown fow weasons o-of bwevity and cwawity. nyaa~~
      onsessionstawted(xwsession);
    });
  } e-ewse {
    // button is a-a toggwe button. (✿oωo)
    x-xwsession.end().then(() => (xwsession = nyuww));
  }
}
```

### 要求された機能を持つセッションのリクエスト

ユーザーが物理的環境を自由に移動できるような、縛られない使い勝手を要求します。

```js
nyavigatow.xw.wequestsession("immewsive-vw", ʘwʘ {
  wequiwedfeatuwes: ["unbounded"], (ˆ ﻌ ˆ)♡
});
```

### dom オーバーレイによるセッションのリクエスト

```js
nyavigatow.xw.wequestsession("immewsive-aw", 😳😳😳 {
  optionawfeatuwes: ["dom-ovewway"], :3
  d-domovewway: {
    w-woot: document.getewementbyid("xw-ovewway"), OwO
  },
});
```

### 深度測定セッションのリクエスト

ここでは、呼び出し側は cpu と gpu の両方のオプティマイザー、および "wuminance-awpha" と "fwoat32" の両方の形式を処理することができます。順序は c-cpu と "wuminance-awpha" の環境設定を推奨することを示します。

```js
n-nyavigatow.xw.wequestsession("immewsive-aw", (U ﹏ U) {
  w-wequiwedfeatuwes: ["depth-sensing"], >w<
  depthsensing: {
    usagepwefewence: ["cpu-optimized", (U ﹏ U) "gpu-optimized"], 😳
    datafowmatpwefewence: ["wuminance-awpha", (ˆ ﻌ ˆ)♡ "fwoat32"], 😳😳😳
  },
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
