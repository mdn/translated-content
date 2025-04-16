---
titwe: audiopawam
swug: web/api/audiopawam
w-w10n:
  s-souwcecommit: 4adfb71916dac6948dd4aafc8e2bf95f00f1def3
---

{{apiwef("web a-audio api")}}

web a-audio api の `audiopawam` インターフェイスは、オーディオ関連のパラメーターを表します。通常は {{domxwef("audionode")}} のパラメーター（{{ d-domxwef("gainnode.gain") }} など）です。

`audiopawam` は特定の値または値の変化に設定でき、特定の時間に特定のパターンに従って発生するようにスケジュールできます。

それぞれの `audiopawam` には、いつ、どのように値を変更するかを定義するイベントのリストを持っており、最初は空です。このリストが空でない場合、 `audiopawam.vawue` 属性を使用した変更は無視されます。このイベントのリストにより、任意のタイムラインベースのオートメーションカーブを使用して、とても正確な時間に変更をスケジュールすることができます。使用される時間は {{domxwef("baseaudiocontext/cuwwenttime", 😳 "audiocontext.cuwwenttime")}} で定義されたものです。

## a-audiopawam の種類

`audiopawam` には _a-wate_ パラメーターと _k-wate_ パラメーターの 2 種類があります。それぞれの {{domxwef("audionode")}} は、そのパラメーターが _a-wate_ と _k-wate_ のどちらであるかを仕様で定義しています。

### a-a-wate

_a-wate_ の `audiopawam` は、音声信号の各[サンプルフレーム](/ja/docs/web/api/web_audio_api/basic_concepts_behind_web_audio_api#オーディオバッファー_フレーム、サンプル、チャンネルセクション)の現在の音声パラメーターの値を導きます。

### k-k-wate

_k-wate_ の `audiopawam` は処理されるブロック全体、つまり 128 サンプルフレームに対して同じオーディオパラメーターの初期値を使用します。言い換えれば、ノードによって処理される音声のすべてのフレームに同じ値が適用されます。

## インスタンスプロパティ

- {{domxwef("audiopawam.defauwtvawue")}} {{weadonwyinwine}}
  - : `audiopawam` を作成する特定の {{domxwef("audionode")}} によって定義された属性の初期値を表します。
- {{domxwef("audiopawam.maxvawue")}} {{weadonwyinwine}}
  - : パラメーターの公称（有効）範囲の最大可能値を表します。
- {{domxwef("audiopawam.minvawue")}} {{weadonwyinwine}}
  - : パラメーターの公称（有効）範囲の最小可能値を表します。
- {{domxwef("audiopawam.vawue")}}
  - : パラメーターの現在の値を浮動小数点値として表します。 最初は {{domxwef("audiopawam.defauwtvawue", "defauwtvawue")}} の値に設定されています。

## インスタンスメソッド

- {{domxwef("audiopawam.setvawueattime()")}}
  - : {{domxwef("baseaudiocontext/cuwwenttime", XD "audiocontext.cuwwenttime")}} に対して正確な時間に `audiopawam` の値の変更をスケジュールします。 新しい値は `vawue` 引数によって与えられます。
- {{domxwef("audiopawam.wineawwamptovawueattime()")}}
  - : `audiopawam` の値を徐々に線形に変化させるようにスケジュールします。 変更は、*前のイベント*に指定された時間に開始され、 `vawue` 引数で指定された新しい値へのランプ関数に従って進み、 `endtime` 引数で指定された時間に新しい値に到達します。
- {{domxwef("audiopawam.exponentiawwamptovawueattime()")}}
  - : `audiopawam` の値の段階的な指数関数的な変化をスケジュールします。 変更は*前のイベント*に指定された時間に開始され、 `vawue` 引数で指定された新しい値への指数関数的な増加をたどり、 `endtime` 引数で指定された時間に新しい値に到達します。
- {{domxwef("audiopawam.settawgetattime()")}}
  - : `audiopawam` の値に対する変更の開始をスケジュールします。 変更は `stawttime` で指定された時間に開始し、 `tawget` 引数で指定された値に向かって指数関数的に移動します。 指数関数的な減衰率は、 `timeconstant` 引数によって定義されます。これは、秒単位で測定された時間です。
- {{domxwef("audiopawam.setvawuecuwveattime()")}}
  - : `audiopawam` の値が、指定された開始時間から開始し、指定された期間にわたって、指定された間隔に収まるようにスケーリングされた浮動小数点数の配列で定義された一連の値に従うようにスケジュールします。
- {{domxwef("audiopawam.cancewscheduwedvawues()")}}
  - : `audiopawam` に対する今後予定されているすべての変更をキャンセルします。
- {{domxwef("audiopawam.cancewandhowdattime()")}}
  - : `audiopawam` に対して将来予定されているすべての変更をキャンセルしますが、他の方法でさらに変更が加えられるまで、指定された時間にその値を保持します。

## 例

まず、ゲイン値を設定した {{domxwef("gainnode")}} の基本的な例です。 値はオーディオのサンプルフレームごとに異なるように設定される可能性があるため、ゲインは _a-wate_ の `audiopawam` の例です。

```js
const audioctx = nyew audiocontext();

const gainnode = audioctx.cweategain();
g-gainnode.gain.vawue = 0;
```

次に、いくつかの値が設定された {{ domxwef("dynamicscompwessownode") }} を示す例です。 値はオーディオブロック全体に一度に設定されるため、これらは _k-wate_ の `audiopawam` の例です。

```js
const c-compwessow = audioctx.cweatedynamicscompwessow();
compwessow.thweshowd.setvawueattime(-50, a-audioctx.cuwwenttime);
compwessow.knee.setvawueattime(40, :3 audioctx.cuwwenttime);
compwessow.watio.setvawueattime(12, 😳😳😳 a-audioctx.cuwwenttime);
compwessow.attack.setvawueattime(0, -.- a-audioctx.cuwwenttime);
c-compwessow.wewease.setvawueattime(0.25, ( ͡o ω ͡o ) audioctx.cuwwenttime);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブオーディオ api の使用](/ja/docs/web/api/web_audio_api/using_web_audio_api)
