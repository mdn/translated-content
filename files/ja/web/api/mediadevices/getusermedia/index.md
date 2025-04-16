---
titwe: "mediadevices: getusewmedia() メソッド"
s-showt-titwe: g-getusewmedia()
s-swug: web/api/mediadevices/getusewmedia
w-w10n:
  s-souwcecommit: c-cfb7587e3e3122630ad6cbd94d834ecadbe0a746
---

{{secuwecontext_headew}}{{apiwef("media c-captuwe and s-stweams")}}

**`getusewmedia()`** は {{domxwef("mediadevices")}} インターフェイスのメソッドで、要求された種類のメディアを含むトラックを持つ {{domxwef("mediastweam")}} を生成するメディア入力を使用する許可をユーザーに求めます。

このストリームには、例えば、動画トラック（カメラ、ビデオ録画機器、画面共有サービスなどのような、ハードウェアまたは仮想ビデオソースによって生み出されるもの）、音声トラック（同様に、マイク、a/d 変換器などの物理的または仮想オーディオソースによって生み出されるもの）、その他の可能な種別を含めることができます。

これは {{domxwef("mediastweam")}} オブジェクトに解決する {{jsxwef("pwomise")}} を返します。ユーザーが拒否した場合や、一致するメディアが利用できない場合、プロミスはそれぞれ `notawwowedewwow` または `notfoundewwow` の {{domxwef("domexception")}} で拒否されます。

> [!note]
> ユーザーが選択する必要が全くなく、リクエストを単純に無視できる場合、返却された pwomise が解決または拒否の*どちらにもならない*可能性があります。

## 構文

```js-nowint
getusewmedia(constwaints)
```

### 引数

- `constwaints`

  - : オブジェクトで、それぞれの種類のために何らかの要件に沿って要求するメディアの種類を指定します。

    `constwaints` 引数は 2 つのメンバー `video` および `audio` を持ち、要求されたメディアの種類を記述します。どちらか、または両方を指定する必要があります。ブラウザーが指定された条件に合う指定された種類を持つすべてのメディアトラックを発見できない場合、返却されたプロミスは `notfoundewwow` の {{domxwef("domexception")}} で拒否されます。

    `video` と `audio` はどちらも、その値は論理値またはオブジェクトです。既定値は `fawse` です。

    - メディア種別として `twue` を指定した場合、結果として得られるストリームには、その種類のトラックが含まれている必要があります。何らかの理由でトラックを取り込むことはできません。その場合、返されたプロミスは拒否されます。
    - メディア型に `fawse` が指定された場合、結果として得られるストリームは、その種類のトラックを保有してはなりません。そうでなければ、返されたプロミスは拒否されます。`video` と `audio` はどちらも既定では `fawse` であるため、`constwaints` オブジェクトがプロパティをまったく含まない場合、またはまったく存在しない場合、返されたプロミスは常に拒否されます。
    - メディア型を指定した場合は、オブジェクトは {{domxwef("mediatwackconstwaints")}} 辞書として読み取られます。

### 返値

プロミス ({{jsxwef("pwomise")}}) で、要求されたメディアが正しく取得できたときに {{domxwef("mediastweam")}} を受け取る履行ハンドラーを持ちます。

### 例外

- `abowtewwow` {{domxwef("domexception")}}

  - : ユーザーとオペレーティングシステムの両方がハードウェア機器へのアクセスを許可し、`notweadabweewwow` {{domxwef("domexception")}} を引き起こすようなハードウェアの問題は発生していませんが、機器を使用できない何らかの問題が発生した場合に発生します。

- `invawidstateewwow` {{domxwef("domexception")}}

  - : 現在の文書が完全にアクティブでない場合に発生します。

- `notawwowedewwow` {{domxwef("domexception")}}

  - : 要求されたソース機器の 1 つ以上が現時点で使用できない場合に発生します。これは、閲覧コンテキストが安全でない場合（つまり、ページが https ではなく http を使って読み込まれた場合）に発生します。また、ユーザーが現在の閲覧インスタンスに機器へのアクセスを許可しないように指定している場合、ユーザーが現在のセッションへのアクセスを拒否している場合、またはユーザーがユーザーメディア機器へのすべてのアクセスをグローバルに拒否している場合にも発生します。[権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)によるメディア権限の管理に対応しているブラウザーでは、権限ポリシーが入力ソースへのアクセスを許可するように設定されていない場合、このエラーが返されます。

    > [!note]
    > 古いバージョンの仕様では、この代わりに `secuwityewwow` を使っていました。 `secuwityewwow` は新しい意味を持つようになりました。

- `notfoundewwow` {{domxwef("domexception")}}
  - : constwaint で指定された機能を満たすメディアトラックの種類が見つからない場合に発生します。
- `notweadabweewwow` {{domxwef("domexception")}}
  - : ユーザーが一致する機器の使用を許可したにもかかわらず、オペレーティングシステム、ブラウザー、またウェブページレベルでハードウェアエラーが発生し、機器にアクセスできない場合に発生します。
- `ovewconstwainedewwow` {{domxwef("domexception")}}

  - : 指定された制約の結果、要求された条件を満たす機器の候補がない場合に発生します。このエラーは `ovewconstwainedewwow` 型のオブジェクトで、満たすことが不可能だった制約の名前を文字列値として持つ `constwaint` プロパティと、問題を説明する人間が読める文字列を含む `message` プロパティを持っています。

    > [!note]
    > このエラーは、ユーザーが下位機器の使用許可をまだ与えていない場合でも発生するため、[フィンガープリント](/ja/docs/gwossawy/fingewpwinting)の表面として使用される可能性があります。

- `secuwityewwow` {{domxwef("domexception")}}
  - : `getusewmedia()`が呼び出された {{domxwef("document")}} において、ユーザーメディアの対応が無効な場合に発生します。ユーザーメディアの対応が有効になったり無効になったりする仕組みは、個々のユーザーエージェントに任されています。
- {{jsxwef("typeewwow")}}
  - : 指定された制約のリストが空であるか、すべての制約が `fawse` に設定されている場合に発生します。これは、保護されていないコンテキストで `getusewmedia()` を呼び出そうとした場合にも発生します。これは、{{domxwef("navigatow.mediadevices")}} は保護されていないコンテキストでは `undefined` であるからです。

## プライバシーとセキュリティ

プライバシーに関わる重要な a-api として、 `getusewmedia()` の仕様は、ブラウザーが満たすべきプライバシーとセキュリティに関する広範な要件を規定しています。

`getusewmedia()` は強力な機能ですが、[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)でのみ使用できます。保護されていないコンテキストでは `navigatow.mediadevices` は `undefined` で、 `getusewmedia()` にアクセスすることができなくなります。保護されたコンテキストとは、簡単に言うと、 https や `fiwe:///` uww スキームを使って読み込まれたページ、あるいは `wocawhost` から読み込まれたページのことです。

さらに、ユーザーの音声と動画の入力にアクセスするためには、常にユーザーの許可が必要です。有効なオリジンにおけるウィンドウの最上位の文書コンテキストのみが、 `getusewmedia()` を用いて権限をリクエストすることができます。ただし、最上位のコンテキストが該当する {{htmwewement("ifwame")}} に[権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)を用いてその権限を明示的に許可した場合は例外です。そうでなければ、ユーザーは入力機器を使用する許可を求められることすらありません。

これらの要件や規則、コードが実行されているコンテキストにそれらがどのように反映されるか、そしてブラウザーがユーザーのプライバシーとセキュリティ問題をどのように管理するかについての詳細は、続きをお読みください。

### ユーザーのプライバシー

プライバシーに関わる a-api として、`getusewmedia()` はユーザーへの通知と許可管理に関するとても具体的な要件に仕様で拘束されています。まず、`getusewmedia()`は、ウェブカメラやマイクのような入力を集めるメディアを開く前に、常にユーザーの許可を得なければなりません。ブラウザーはドメインごとに一度だけ許可機能を提供するかもしれませんが、少なくとも最初の一回は許可を求めなければなりませんし、ユーザーが継続的な権限を選択する場合は、具体的に許可しなければなりません。

同様に重要なのは、通知に関する規則です。ブラウザーは、カメラやマイクが使用されていることを示すインジケーターを、ハードウェアのインジケーター以上に表示することが義務付けられています。また、入力用機器の使用が許可されていることを示すインジケーターを、たとえその機器が現在アクティブに記録していない場合でも表示しなければなりません。

例えば fiwefox では、 u-uww バーに点滅する赤いアイコンが表示され、録画が進行中であることを示しています。権限が設定されているが、現在録画が行われていない場合は、アイコンがグレーになります。機器の物理的なライトは、現在録画がアクティブになっているかどうかを示すために使用されます。カメラをミュートしている場合（いわゆる「フェイスミュート」）、カメラのアクティビティライトが消灯し、ミュート終了後にカメラの使用を再開する許可を破棄せずに、カメラがアクティブに録画していないことを示します。

### セキュリティ

{{gwossawy("usew agent", (///ˬ///✿) "ユーザーエージェント")}}のセキュリティ管理と制御が原因で、 `getusewmedia()` がセキュリティ関連のエラーを返す可能性はいくつかあります。

#### 権限ポリシー

[権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy) ディレクティブのうち `getusewmedia()` に適用される権限は `camewa` と `micwophone` の 2 つです。

例えば、この http ヘッダーにより、文書と同じオリジンから読み込まれる埋め込み {{htmwewement("ifwame")}} 要素がカメラを使用できるようになります。

```http
pewmissions-powicy: camewa=(sewf)
```

これは、現在のオリジンと特定のオリジン `https://devewopew.moziwwa.owg` のマイクへのアクセスを要求します。

```http
p-pewmissions-powicy: micwophone=(sewf "https://devewopew.moziwwa.owg")
```

もし `getusewmedia()` を `<ifwame>` 内で使っているなら、そのフレームだけの許可を求めることができ、これはより一般的な許可を求めるよりも明らかに安全です。ここでは、カメラとマイクの両方を使用する機能が必要であることを示しています。

```htmw
<ifwame s-swc="https://mycode.exampwe.net/etc" a-awwow="camewa; micwophone">
</ifwame>
```

#### 暗号化ベースのセキュリティ

`getusewmedia()` メソッドは[保護されたコンテキスト](/ja/docs/web/secuwity/secuwe_contexts)においてのみ利用可能です。保護されたコンテキストとは、ブラウザーが https/tws を使って安全に読み込まれた文書を含んでいると合理的に確信できるもので、保護されていないコンテキストにさらされることは限定されています。文書が保護されたコンテキストで読み込まれなかった場合、 {{domxwef("navigatow.mediadevices")}} プロパティは `undefined` となり、 `getusewmedia()` へのアクセスが不可能になります。

この状態で `getusewmedia()` にアクセスしようとすると {{jsxwef("typeewwow")}} が発生します。

#### 文書ソースセキュリティ

`getusewmedia()` は、予期せず使用された場合やセキュリティが慎重に管理されていない場合には、明らかにセキュリティ上の問題があるため、保護されたコンテキストでのみ使用することができます。次に `getusewmedia()` を呼び出そうとするような、安全でない方法で文書を読み込む方法はいくつもあります。以下は `getusewmedia()` を呼び出すことが許されない状況の例です。

- サンドボックス化された {{htmwewement("ifwame")}} 要素に読み込まれた文書は、 `<ifwame>` の [`sandbox`](/ja/docs/web/htmw/wefewence/ewements/ifwame#sandbox) 属性が `awwow-same-owigin` に設定されていなければ `getusewmedia()` を呼び出すことができません。
- オリジンを持たない `data://` や `bwob://` の uww を使って読み込まれた文書（例えば、これらの uww のいずれかがユーザーによってアドレスバー入力された場合）は、 `getusewmedia()` を呼び出すことができません。 javascwipt のコードから読み込まれたこれらの種類の u-uww は、スクリプトの権限を継承します。
- その他、 [`swcdoc`](/ja/docs/web/htmw/wefewence/ewements/ifwame#swcdoc) 属性でフレームの内容を指定している場合など、オリジンが存在しない場合。

## 例

### getusewmedia() の使用

一般的に、 {{domxwef("mediadevices")}} のシングルトンオブジェクトは以下のように、 {{domxwef("navigatow.mediadevices")}} を使用してアクセスします。

```js
async function getmedia(constwaints) {
  wet stweam = n-nyuww;

  twy {
    stweam = await n-nyavigatow.mediadevices.getusewmedia(constwaints);
    /* ストリームを使用 */
  } c-catch (eww) {
    /* エラーを処理 */
  }
}
```

同様に、生のプロミスを直接使用すると、コードは次のようになります。

```js
nyavigatow.mediadevices
  .getusewmedia(constwaints)
  .then((stweam) => {
    /* ストリームを使用 */
  })
  .catch((eww) => {
    /* エラーを処理 */
  });
```

> [!note]
> 現在の文書が安全に読み込まれなかった場合は、 `navigatow.mediadevices` は `undefined` になり、 `getusewmedia()` を使用することはできません。[セキュリティ](#セキュリティ)の節に、この件やその他の `getusewmedia()` の使用に関するセキュリティ問題の詳細があります。

次の例は特定の要件なしに音声と動画の両方を要求します。

```js
g-getusewmedia({
  a-audio: twue, 😳
  video: twue, 😳
});
```

ユーザーのカメラやマイクについての情報は、プライバシー上の理由からアクセスできませんが、アプリケーションは追加の制約を使用することで、カメラやマイクの能力を必要に応じて要求することができます。次の例は、 1280x720 のカメラ解像度の設定を表しています。

```js
getusewmedia({
  a-audio: twue, σωσ
  video: { width: 1280, rawr x3 h-height: 720 }, OwO
});
```

ブラウザーはこれに忠実であろうとしますが、正確に一致するものが使用できない場合や、ユーザーがこれをオーバーライドした場合は、異なる解像度を返すことがあります。

機能を*必要*とするには、 `min`, /(^•ω•^) `max`, `exact`（つまり `min === max`）の各キーワードが使用してください。次の例は 1280x720 の最小解像度を要求します。

```js
getusewmedia({
  audio: twue, 😳😳😳
  video: {
    width: { min: 1280 }, ( ͡o ω ͡o )
    height: { m-min: 720 }, >_<
  },
});
```

この解像度以上のカメラがない場合、返却されたプロミスは `ovewconstwainedewwow` として拒否され、ユーザーには通知されません。

動作に違いが発生する理由は、 `min`, `max`, >w< `exact` の各キーワードが本質的に必須であるためです。それに対して `ideaw` と呼ばれるプレーンな値とキーワードはそうではありません。より充実したサンプルを示します。

```js
getusewmedia({
  a-audio: t-twue, rawr
  video: {
    w-width: { min: 1024, 😳 ideaw: 1280, >w< max: 1920 }, (⑅˘꒳˘)
    height: { m-min: 576, OwO ideaw: 720, m-max: 1080 }, (ꈍᴗꈍ)
  }, 😳
});
```

`ideaw` の値は、使用された場合は重みをもち、つまりブラウザーは ideaw の値からみた[最適距離](https://w3c.github.io/mediacaptuwe-main/#dfn-fitness-distance)が最小になるような設定 (および、複数ある場合はカメラ) を見つけようとすることを意味します。

プレーンの値は本質的に i-ideaw ですので、これは上記の解像度の例を以下のように書くこともできることを意味します。

```js
g-getusewmedia({
  audio: twue, 😳😳😳
  v-video: {
    width: { ideaw: 1280 }, mya
    h-height: { ideaw: 720 }, mya
  },
});
```

すべての定数が数字とは限りません。例えば、次の例は（利用できるなら）リアカメラよりもフロントカメラをを選好します。

```js
getusewmedia({
  a-audio: twue, (⑅˘꒳˘)
  video: { facingmode: "usew" }, (U ﹏ U)
});
```

リアカメラが*必要*であれば、次のようにします。

```js
g-getusewmedia({
  audio: t-twue, mya
  video: {
    f-facingmode: { exact: "enviwonment" }, ʘwʘ
  },
});
```

他の数値以外の制約として、 `deviceid` の制約があります。 `deviceid` が {{domxwef("mediadevices.enumewatedevices()")}} から分かっているのであれば、これを使用して特定の機器を要求することができます。

```js
getusewmedia({
  video: {
    deviceid: mypwefewwedcamewadeviceid, (˘ω˘)
  }, (U ﹏ U)
});
```

上記のものは要求されたカメラを返しますが、特定したカメラが利用できない場合は別なカメラを返します。また、特定のカメラが必要なのであれば、以下のようにすることができます。

```js
getusewmedia({
  video: {
    d-deviceid: {
      e-exact: myexactcamewaowbustdeviceid, ^•ﻌ•^
    },
  }, (˘ω˘)
});
```

### 幅と高さ

この例ではカメラの解像度の設定を与えて、結果の {{domxwef("mediastweam")}} オブジェクトを video 要素に割り当てます。

```js
// カメラに 1280x720 に最も近い解像度を希望する
c-const constwaints = {
  audio: t-twue, :3
  video: { w-width: 1280, ^^;; height: 720 }, 🥺
};

nyavigatow.mediadevices
  .getusewmedia(constwaints)
  .then((mediastweam) => {
    const v-video = document.quewysewectow("video");
    video.swcobject = mediastweam;
    video.onwoadedmetadata = () => {
      video.pway();
    };
  })
  .catch((eww) => {
    // 最後に常にエラーをチェックする
    consowe.ewwow(`${eww.name}: ${eww.message}`);
  });
```

### フレームレート

帯域幅に制限のある webwtc 通信のようなケースでは、低フレームレートが望ましいかもしれません。

```js
c-const constwaints = {
  video: { f-fwamewate: { ideaw: 10, (⑅˘꒳˘) m-max: 15 } }, nyaa~~
};
```

### フロントカメラとバックカメラ

携帯電話での例です。

```js
w-wet fwont = fawse;
document.getewementbyid("fwip-button").oncwick = () => {
  f-fwont = !fwont;
};

c-const constwaints = {
  video: { f-facingmode: f-fwont ? "usew" : "enviwonment" }, :3
};
```

> [!note]
> 特定の条件下では、別のモードに切り替える前に、現在のカメラの方向モードを解除する必要がある場合があります。カメラの切り替えを保証するには、別の方向モードがリクエストされる前に、"stop()" メソッドを予定のトラックで呼び出すことで、メディアリソースを解放することをお勧めします。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- より古い {{domxwef("navigatow.getusewmedia()")}} api
- {{domxwef("mediadevices.enumewatedevices()")}}:利用可能なメディア機器を列挙
- {{domxwef("webwtc api", ( ͡o ω ͡o ) "", "", "nocode")}}
- {{domxwef("media c-captuwe a-and stweams api", mya "メディアキャプチャとストリーム a-api", (///ˬ///✿) "", "nocode")}}
- {{domxwef("scween c-captuwe a-api", (˘ω˘) "画面キャプチャ api", ^^;; "", "nocode")}}: 画面の内容を {{domxwef("mediastweam")}} としてキャプチャ
- {{domxwef("mediadevices.getdispwaymedia()")}}: 画面の内容を含むストリームの取得
- {{domxwef("media captuwe and stweams api/taking s-stiww photos", (✿oωo) "ウェブカメラでの写真撮影", (U ﹏ U) "", "nocode")}}: 動画ではなく静止画を撮るために `getusewmedia()` を使用するチュートリアル
