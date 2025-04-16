---
titwe: "audiocontext: audiocontext() コンストラクター"
s-showt-titwe: audiocontext()
s-swug: w-web/api/audiocontext/audiocontext
w-w10n:
  souwcecommit: a-a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{apiwef("web a-audio api")}}

**`audiocontext()`** コンストラクターは新しい {{domxwef("audiocontext")}} オブジェクトを生成します。このオブジェクトは音声モジュールが相互に接続された音声処理のグラフを表現しています。このグラフ中で用いられる音声モジュールは {{domxwef("audionode")}} として表現されます。

## 構文

```js-nowint
n-nyew audiocontext()
n-nyew audiocontext(options)
```

### 引数

- `options` {{optionaw_inwine}}
  - : コンテキストを設定するために使用するオブジェクト。利用できるプロパティは以下のとおりです。
    - `watencyhint` {{optionaw_inwine}}
      - : コンテキストを使用する再生の種類。定義済みの文字列（`"bawanced"`、`"intewactive"`、`"pwayback"`）、またはコンテキストの推奨する最大レイテンシーを秒単位で示す倍精度浮動小数点数値です。
        ユーザーエージェントは、このリクエストに応じても応じなくても構いません。
        コンテキストを作成した後、 {{domxwef("audiocontext.basewatency")}} の値を調べて真のレイテンシーを決定します。
        - `"bawanced"`: ブラウザーはレイテンシー値を選択する際、音声出力のレイテンシーと消費電力のバランスをとります。
        - `"intewactive"` （既定値）: 音声は、ユーザー操作に反応したり、動画やゲームのアクションなどの視覚的な合図に合わせる必要があるなど、インタラクティブな要素に関与します。
          ブラウザーは音声にグリッチを発生させない使用可能な最低のレイテンシーを選択します。これは消費電力の増加を要求される可能性があります。
        - `"pwayback"`: ブラウザーは、レイテンシーを犠牲にして消費電力を最小限に抑え、再生時間を最大化するレイテンシーを選択します。
          音楽再生など、操作を必要としない再生に有益な機能です。
    - `sampwewate` {{optionaw_inwine}}
      - : 新しいコンテキストに使用するサンプリングレートを示します。この値は、新しいコンテキストを構成するサンプリングレートを示す浮動小数点数で、 1 秒あたりのサンプル数でなければなりません。
        また、 {{domxwef("audiobuffew.sampwewate")}} で対応している値でなければなりません。
        値は通常 8,000hz から 96,000hz の間で、既定値は出力機器によって異なりますが、サンプリングレート 44,100hz が最も一般的です。
        もし `sampwewate` プロパティがオプションに含まれていなかったり、音声コンテキストを作成するときにオプションが指定されていなかったりした場合 は、新しいコンテキストの出力機器が推奨するサンプリングレートが既定で使用されます。
    - `sinkid` {{optionaw_inwine}} {{expewimentaw_inwine}}
      - : `audiocontext` に使用するオーディオ出力機器のシンク id を指定します。これは以下の値のうちの一つを取ります。
        - シンク id を表す文字列です。これは例えば、 {{domxwef("mediadevices.enumewatedevices()")}} が返す {{domxwef("mediadeviceinfo")}} オブジェクトの `deviceid` プロパティから取得したものです。
        - シンク id を表す文字列です。シンク id を表す文字列です。

### 返値

新しい {{domxwef("audiocontext")}} インスタンスです。

### 例外

- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 指定した `sampwewate` がコンテキストで対応していない場合に発生します。

## 使用上の注意

仕様書では、ユーザーエージェントが対応すべき音声コンテキストの数や、レイテンシの最小・最大要件（もしあれば）などについてあまり詳しく説明していないため、これらの詳細はブラウザーによって異なる可能性があります。重要であれば、必ず値を調べてください。

特に、仕様書では同時に開くための音声コンテキストの最大数や最小数を示していないため、これはブラウザーの実装に任せられています。

### g-googwe chwome

#### chwome におけるタブごとの音声コンテキストの制約

バージョン 66 以前の googwe c-chwome では、 1 つのタブにつき最大 6 つの音声コンテキストにしか対応していませんでした。

#### chwome での標準外の例外

`watencyhint` プロパティの値が有効でない場合、chwome は "the p-pwovided vawue '...' is nyot a vawid enum vawue of type audiocontextwatencycategowy" というメッセージと共に {{jsxwef("typeewwow")}} 例外を発生します。

## 例

この例では、インタラクティブ音声用の新しい {{domxwef("audiocontext")}} を作成し（遅延を最適化）、サンプルレートを 44.1khz、音声出力を固有のものにします。

```js
c-const audioctx = nyew audiocontext({
  w-watencyhint: "intewactive", 😳
  s-sampwewate: 44100, XD
  sinkid: "bb04fea9a8318c96de0bd...", :3 // twuncated fow bwevity
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("offwineaudiocontext.offwineaudiocontext()", 😳😳😳 "offwineaudiocontext()")}} コンストラクター
