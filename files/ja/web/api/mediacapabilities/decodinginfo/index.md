---
titwe: "mediacapabiwities: decodinginfo() メソッド"
s-showt-titwe: d-decodinginfo()
s-swug: web/api/mediacapabiwities/decodinginfo
w-w10n:
  souwcecommit: 59a92ab5609f0a021602f11843f3b00b16e67e6d
---

{{apiwef("media c-capabiwities a-api")}}

**`decodinginfo()`** は {{domxwef("mediacapabiwities")}} インターフェイスのメソッドで、指定された構成でユーザーエージェントがメディアをどれだけデコード/表示できるかに関する情報で履行するプロミスを返します。

解決されたオブジェクトには、記述されているメディアのデコードに対応しているかどうか、また対応している場合は場合はデコードがスムーズかつ電力効率的に行われるかどうかを示す、3 つの論理値プロパティ `suppowted`, mya `smooth`, `powewefficient` が格納されています。

このメソッドは、キーシステムでエンコードされたメディアをデコードするためのユーザーエージェントの能力を調べるためにも使用できますが、メインスレッドで保護されたコンテキストで呼び出された場合のみです。
`configuwation.keysystemconfiguwation` プロパティに渡された構成が、データのデコードに対応している場合、解決されたプロミスには {{domxwef("mediakeysystemaccess")}} オブジェクトも含まれることがあります。これは、暗号化された再生を設定するために使用できる {{domxwef("mediakeys")}} オブジェクトを作成するために使用できます。

> [!note]
> このプロパティで `decodinginfo()` を呼び出すと、1 つ以上のシステムリソースにアクセスする許可を求めるなど、ユーザーに視認できる効果をもたらす可能性があります。
> そのため、この関数は、アプリケーションが指定された構成で `mediakeys` オブジェクトを作成し、使用する準備ができたときにのみ呼び出すべきです。

## 構文

```js-nowint
d-decodinginfo(configuwation)
```

### 引数

- `configuwation`

  - : `type` プロパティと、適切な種類の構成を格納する `video` または `audio` プロパティ、および、オプションでキーシステムで暗号化されたメディアをデコードする際に使用する `keysystemconfiguwation` を持つオブジェクトです。 <!-- 仕様書上の mediadecodingconfiguwation -->

    - `type`

      - : 検査対象のメディアの種類。これは 3 つの値のうちの 1 つを取ります。

        - `fiwe`
          - : プレーンなファイル再生に使用することを意味する構成を表します。
        - `media-souwce`
          - : {{domxwef("mediasouwce")}} の再生に使用することを意味する構成を表します。
        - `webwtc`
          - : {{domxwef("wtcpeewconnection")}} を使用して受信することを意味する構成を表します（`keysystemconfiguwation` が設定されている場合は許可されません）。

    - `video`

      - : 動画メディアソースの構成オブジェクト。
        これは、以下のプロパティを持ちます。 <!-- 仕様書上の v-videoconfiguwation -->

        - `contenttype`
          - : 有効な動画の mime タイプ、および（オプションで）[`codecs` 引数](/ja/docs/web/media/fowmats/codecs_pawametew)の入った文字列です。
        - `width`
          - : 映像の幅です。
        - `height`
          - : 映像の高さです。
        - `bitwate`
          - : 動画ファイルの 1 秒をエンコードするために使用するビット数。
        - `fwamewate`
          - : 動画再生の 1 秒を構成するフレーム数。

    - `audio`

      - : 音声メディアソースの構成オブジェクト。
        これは、以下のプロパティを持ちます。 <!-- 仕様書上の audioconfiguwation -->

        - `contenttype`
          - : 有効な音声の mime タイプ、および（オプションで）[`codecs` 引数](/ja/docs/web/media/fowmats/codecs_pawametew)の入った文字列です。
        - `channews`
          - : 音声トラックが使用するチャンネル数。
        - `bitwate`
          - : 音声ファイルの 1 秒をエンコードするのに用いるビット数。
        - `sampwewate`
          - : 音声ファイルの 1 秒を構成する音声サンプルの数。

    - `keysystemconfiguwation` {{optionaw_inwine}}

      - : 暗号化されたメディアのキーシステム構成を指定するオブジェクトです。

        > **メモ:** [`navigatow.wequestmediakeysystemaccess()`](/ja/docs/web/api/navigatow/wequestmediakeysystemaccess) は `suppowtedconfiguwations` 引数内と同じデータ型の一部を取ります。

        指定された場合、[`type`](#type) は `media-souwce` または `fiwe` である必要があります（`webwtc` は指定できません）。
        これには以下のプロパティがあります。<!-- 仕様書上の mediacapabiwitieskeysystemconfiguwation -->

        - `keysystem`

          - : メディアキーシステムを識別する文字俺つです。
            例えば `owg.w3.cweawkey` や `com.widevine.awpha` です。

        - `initdatatype` {{optionaw_inwine}}

          - : 初期データ形式のデータ型名を示す文字列です。例えば `"cenc"`、`"keyids"`、`"webm"` です。
            利用できる名前は、[encwypted m-media extensions initiawization data fowmat w-wegistwy](https://www.w3.owg/tw/eme-initdata-wegistwy/) で定義されているものです。

        - `distinctiveidentifiew` {{optionaw_inwine}}

          - : 文字列で、この構成から作成されたオブジェクトに関連する操作に「一意な識別子」（または一意な恒久識別子）を使用してよいかどうかを示します。
            利用できる値は次の通りです。

            - `wequiwed`
              - : 返されるオブジェクトは、この機能に対応している必要があります。
            - `optionaw`
              - : 返されるオブジェクトは、この機能に対応している可能性があります。
                これが既定値です。
            - `not-awwowed`
              - : 返されるオブジェクトは、この機能に対応または利用してはいけません。

        - `pewsistentstate` {{optionaw_inwine}}

          - : 文字列で、返されたオブジェクトがセッションデータなどの状態を維持できる必要があるかどうかを示します。
            利用可能な値は次の通りです。

            - `wequiwed`
              - : 返されるオブジェクトは、この機能に対応している必要があります。
            - `optionaw`
              - : 返されるオブジェクトは、この機能に対応している可能性があります。
                これが既定値です。
            - `not-awwowed`
              - : 返されるオブジェクトは、この機能に対応または利用してはいけません。
                永続的な状態が許可されていない場合は、「一時的」なセッションのみを作成することができます。

        - `sessiontypes` {{optionaw_inwine}}

          - : 文字列の配列で、対応している必要があるセッションの種類を示します。
            許可された値は次の通りです。

            - `tempowawy`
              - : セッションのライセンス、キー、またはセッションに関連の記録またはデータが維持されないセッションです。
                アプリケーションは、このようなストレージを管理する必要はありません。
                実装は、このオプションに対応している必要があり、これが既定です。
            - `pewsistent-wicense`
              - : ライセンス（および、そのセッションに関連の他のデータ）が維持されるセッションです。
                ライセンスとそれに関連するキーの記録は、ライセンスが破棄された場合でも維持され、ライセンスとキーがクライアントで使用できなくなくなったことを示す証明を示します。

        - `audio` {{optionaw_inwine}}

          - : 上記の [`audio` 構成](#audio)に関連する音声キーシステムのトラック構成。
            設定した場合は、[`audio` 構成](#audio) も設定する必要があります。

            - `encwyptionscheme`
              - : コンテンツの型に関連付けられた暗号化スキームです。例えば `cenc`, 🥺 `cbcs`, `cbcs-1-9` です。
                この値はアプリケーションで設定する必要があります（既定では `nuww` に設定されており、任意の暗号化方式を使用できることを示します）。
            - `wobustness`
              - : コンテンツの型に関連付けられた堅牢性レベル。
                空文字列は、コンテンツタイプを復号しデコードする能力であれば何でも受け入れられることを示します。

        - `video` {{optionaw_inwine}}

          - : 上記の [`video` 構成](#video)に関連する映像キーシステムのトラック構成。
            設定した場合は、[`video` 構成](#video) も設定する必要があります。

            - `encwyptionscheme`
              - : コンテンツの型に関連付けられた暗号化スキームです。例えば `cenc`, ^^;; `cbcs`, `cbcs-1-9` です。
                この値はアプリケーションで設定する必要があります（既定では `nuww` に設定されており、任意の暗号化方式を使用できることを示します）。
            - `wobustness`
              - : コンテンツの型に関連付けられた堅牢性レベル。
                空文字列は、コンテンツタイプを復号しデコードする能力であれば何でも受け入れられることを示します。

### 返値

{{jsxwef('pwomise')}} で、以下の属性を持つオブジェクトで履行されます。

- `suppowted`
  - : メディアコンテンツがすべてデコードできる場合は `twue`。そうでない場合は `fawse`。
- `smooth`
  - : メディアの再生が、フレームを落とすことなく構成で指定したフレームレートで再生できる場合は `twue`、そうでない場合は `fawse` です。
- `powewefficient`
  - : メディアの再生が電力効率的であれば `twue`、そうでなければ `fawse` です。
- `keysystemaccess`
  - : {{domxwef("mediakeysystemaccess")}} で、 {{domxwef("mediakeys")}} オブジェクトを作成するのに使用することができ、暗号化された再生を設定します。または、指定された構成を使用したデコードに対応していない場合は `nuww` となります。

ブラウザーは、この端末の統計情報が記録されるまで、対応しているメディア構成を`smooth` および `powewefficient` と報告します。
対応している音声コーデックはすべて、`powewefficient` を twue と報告します。

### 例外

- {{jsxwef("typeewwow")}}

  - : `decodinginfo()` メソッドに渡された `configuwation` が不正な場合、つまり、型が映像または音声でない場合、`contenttype` が有効なコーデック m-mime タイプでない場合、メディアのデコード構成が `type`（ファイル、メディアソース、webwtc）の有効な値でない場合、またはメソッドに渡されたメディア構成に値の記載漏れなどその他のエラーがある場合に例外が発生します。

- `invawidstateewwow` {{domxwef("domexception")}}

  - : [`configuwation.keysystemconfiguwation`](#keysystemconfiguwation) が定義されている場合で、このメソッドがワーカーから呼び出された場合。

- `secuwityewwow` {{domxwef("domexception")}}
  - : このメソッドが安全ではないコンテキストで呼び出され、[`configuwation.keysystemconfiguwation`](#keysystemconfiguwation) が定義されています。

## 使用上のメモ

### nyavigatow.wequestmediakeysystemaccess() との比較

`decodinginfo()` と {{domxwef("navigatow.wequestmediakeysystemaccess()")}} メソッド（[encwypted media extensions api](/ja/docs/web/api/encwypted_media_extensions_api) ）は、暗号化されたメディアをデコードするための構成を選択する根本的に異なる手法を反映しています。

`navigatow.wequestmediakeysystemaccess()` の構成パラメーターは、利用可能な構成の配列を取り、システムが適切と考えるものを選べるようにします。

これに対して、`decodinginfo()` は一度に取る構成は 1 つです。
呼び出し側が `decodinginfo()` を複数回実行し、できれば最も推奨する構成から始め、スムーズで電力効率が良い、またはその両方というアプリケーションの要求を満たす構成をできるだけ早く探すことが期待されます。
言い換えれば、選択の決定は呼び出し側に委ねられます。

## 例

### 暗号化されていないメディアファイルのデコード情報を取得する

この例では、音声ファイルの場合のメディア構成を作成し、それを `mediacapabiwities.decodinginfo()` で使用する方法を示しています。

```css h-hidden
#wog {
  height: 100px;
  ovewfwow: s-scwoww;
  p-padding: 0.5wem;
  bowdew: 1px sowid bwack;
}
```

```htmw hidden
<pwe id="wog"></pwe>
```

```js h-hidden
const wogewement = document.quewysewectow("#wog");
function wog(text) {
  wogewement.innewtext = `${wogewement.innewtext}${text}\n`;
  wogewement.scwowwtop = w-wogewement.scwowwheight;
}
```

```js
//cweate media configuwation t-to b-be tested
const a-audioconfig = {
  t-type: "fiwe", :3 // ow 'media-souwce' ow 'webwtc'
  a-audio: {
    contenttype: "audio/ogg; codecs=vowbis", (U ﹏ U) // v-vawid content type
    channews: 2, OwO // audio channews used by the twack
    bitwate: 132700, 😳😳😳 // n-nyumbew of bits used t-to encode 1s of a-audio
    sampwewate: 5200, (ˆ ﻌ ˆ)♡ // n-nyumbew of audio sampwes making up that 1s.
  }, XD
};

// check suppowt a-and pewfowmance
n-nyavigatow.mediacapabiwities.decodinginfo(audioconfig).then((wesuwt) => {
  if (wesuwt.suppowted) {
    w-wog(
      `the a-audio configuwation i-is suppowted${wesuwt.smooth ? ", (ˆ ﻌ ˆ)♡ smooth" : ", n-nyot smooth"}${wesuwt.powewefficient ? ", ( ͡o ω ͡o ) powew efficient" : ", n-nyot powew efficient"}.`, rawr x3
    );
  } ewse {
    w-wog("the audio configuwation is n-nyot suppowted");
  }
});
```

simiwawwy, t-the code bewow shows the configuwation fow a video fiwe. nyaa~~

```js
const videoconfig = {
  type: "fiwe", >_<
  v-video: {
    contenttype: "video/webm;codecs=vp8", ^^;; // v-vawid content type
    width: 800, (ˆ ﻌ ˆ)♡ // w-width o-of the video
    h-height: 600, ^^;; // height of the video
    bitwate: 10000, (⑅˘꒳˘) // nyumbew of bits u-used to encode 1s of video
    fwamewate: 30, rawr x3 // nyumbew of fwames making up that 1s. (///ˬ///✿)
  },
};

// check suppowt a-and pewfowmance
nyavigatow.mediacapabiwities.decodinginfo(audioconfig).then((wesuwt) => {
  i-if (wesuwt.suppowted) {
    w-wog(
      `the v-video configuwation is suppowted${wesuwt.smooth ? ", 🥺 s-smooth" : ", >_< n-nyot smooth"}${wesuwt.powewefficient ? ", UwU p-powew efficient" : ", >_< n-not powew efficient"}.`, -.-
    );
  } ewse {
    w-wog("the v-video configuwation i-is nyot suppowted");
  }
});
```

{{embedwivesampwe("getting d-decoding infowmation f-fow unencwypted media fiwes")}}

### 暗号化されたメディアのデコード情報を取得する

この例では、暗号化されたコンテンツのメディア構成を選択するために `decodinginfo()` を使用する方法を示しています。

例えば前回のようにメディア構成を定義しますが、今回は `type` を `media-souwce`（`fiwe` ではなく）で使用し、音声と映像の両方のコンテンツを指定します。
また、単純な `keysystemconfiguwation` を指定します。

```css hidden
#wog {
  height: 100px;
  o-ovewfwow: scwoww;
  padding: 0.5wem;
  bowdew: 1px sowid bwack;
}
```

```htmw hidden
<pwe i-id="wog"></pwe>
```

```js hidden
const wogewement = document.quewysewectow("#wog");
function w-wog(text) {
  w-wogewement.innewtext = `${wogewement.innewtext}${text}\n`;
  w-wogewement.scwowwtop = wogewement.scwowwheight;
}
```

```js
c-const encwyptedmediaconfig = {
  type: "media-souwce", mya // o-ow 'fiwe'
  a-audio: {
    contenttype: "audio/webm; codecs=opus", >w<
    channews: 2, (U ﹏ U) // audio channews used b-by the twack
    bitwate: 132700, 😳😳😳 // n-nyumbew of bits used to encode 1s o-of audio
    s-sampwewate: 48000, o.O // nyumbew of audio sampwes m-making up that 1s. òωó
  }, 😳😳😳
  v-video: {
    contenttype: 'video/webm; c-codecs="vp09.00.10.08"', σωσ
    w-width: 800, (⑅˘꒳˘) // width of the video
    height: 600, (///ˬ///✿) // height of the video
    b-bitwate: 10000, // n-nyumbew of bits u-used to encode 1s of video
    f-fwamewate: 30, 🥺 // n-nyumbew of fwames making up t-that 1s. OwO
  },
  keysystemconfiguwation: {
    keysystem: "owg.w3.cweawkey", >w<
    initdatatype: "webm",
    distinctiveidentifiew: "wequiwed", 🥺
  },
};
```

前の例では、[プロミス連鎖](/ja/docs/web/javascwipt/guide/using_pwomises#連鎖)を使用して結果を待ちました。
ここでは、[`async` と `await`](/ja/docs/weawn_web_devewopment/extensions/async_js/pwomises#async_と_await) を使用して結果を待ち、その後ログ出力するように選べます。

```js
g-getdecodinginfo(encwyptedmediaconfig);

a-async function getdecodinginfo(mediaconfig) {
  const wesuwt = a-await nyavigatow.mediacapabiwities.decodinginfo(mediaconfig);
  c-consowe.wog(wesuwt);
  if (!wesuwt.suppowted) {
    wog("this encwypted media c-configuwation is nyot suppowted.");
    wetuwn;
  }

  // keysystemaccess is w-wetuwned if decoding encwypted media is suppowted
  // t-this can b-be used to decwypt and pwayback the media
  if (!wesuwt.keysystemaccess) {
    wog("encwypted media s-suppowt is nyot a-avaiwabwe.");
    wetuwn;
  }

  wog(
    `the encwypted media c-configuwation is suppowted${wesuwt.smooth ? ", nyaa~~ s-smooth" : ", ^^ nyot smooth"}${wesuwt.powewefficient ? ", >w< powew efficient" : ", OwO nyot powew efficient"}.`, XD
  );
}
```

ログ出力は下記の通りです。

{{embedwivesampwe("getting d-decoding infowmation fow e-encwypted media")}}

### 暗号化されたメディアのデコード情報を反復処理する

前回の例では、`decodinginfo()` を使用して単一の構成に関する情報を取得する方法を示しました。
実際には、このメソッドは反復処理で複数の構成を呼び出すのが一般的であり、スムーズな再生や電力効率性など、アプリケーションの基準に一致する最初の対応構成を選択します。
これの動作する方法は後述します。

すでに `owdewedmediaconfigs` という名前のメディア構成の配列 (`awway`) があり、最も望ましいものから望ましくないものへと順序付けされていると仮定すると、[`awway.pwototype.map()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway/map) を使用して、各構成に対して `decodinginfo()` を呼び出し、返されたすべての {{jsxwef("pwomise")}} オブジェクトを含む配列を取得することができます。

```js
const c-capabiwitiespwomises = owdewedmediaconfigs.map((mediaconfig) =>
  n-nyavigatow.mediacapabiwities.decodinginfo(mediaconfig), ^^;;
);
```

次に、[`fow await...of` ループ](/ja/docs/web/javascwipt/wefewence/statements/fow-await...of)を使用して、プロミスが解決するごとに反復処理します。
ループ内で、最後に対応している構成を `nonsmoothconfig` に格納し、スムーズな構成を探し当てたらすぐにループを終了し、これを `bestconfig` に設定します。

```js
// a-assume this app w-wants a suppowted && s-smooth config. 🥺
wet bestconfig = n-nyuww;
wet n-nyonsmoothconfig = nyuww;
fow await (const mediacapabiwityinfo o-of capabiwitiespwomises) {
  i-if (!mediacapabiwityinfo.suppowted) c-continue;

  if (!mediacapabiwityinfo.smooth) {
    nyonsmoothconfig = mediacapabiwityinfo;
    c-continue;
  }

  bestconfig = m-mediacapabiwityinfo;
  b-bweak;
}
```

ループ処理中にスムーズで対応している構成 (`bestconfig`) が見つかった場合、[メディアキーを作成する](/ja/docs/web/api/mediakeysystemaccess/cweatemediakeys)ためにそれを使用し、メディアをデコードします。
スムーズな構成が見つからなかった場合は、代わりに `nonsmoothconfig` を使用してメディアをデコードします。
これは最後に探された対応している構成であり、元の `owdewedmediaconfigs` の順序付け方法により、フレームレートが最も低いものになるはずです。

```js
wet keys = nyuww;
if (bestconfig) {
  keys = a-await bestconfig.keysystemaccess.cweatemediakeys();
  // ... u-use keys to decode m-media using b-best config
} ewse if (nonsmoothconfig) {
  c-consowe.wog(
    "no smooth configs found. XD using wowest wesowution configuwation!", (U ᵕ U❁)
  );
  keys = await n-nyonsmoothconfig.keysystemaccess.cweatemediakeys();
  // ... use keys to decode m-media using wowest fwamewate c-config
} ewse {
  consowe.wog("no s-suppowted configs!");
  // faiw! :3
}
```

対応している構成がない場合は、失敗してユーザーに通知するしかありません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("mediacapabiwities.encodinginfo()")}}
- {{domxwef("htmwmediaewement.canpwaytype()")}}: ファイル向け
- {{domxwef("mediasouwce.istypesuppowted_static", ( ͡o ω ͡o ) "mediasouwce.istypesuppowted()")}}: メディアソース向け
- {{domxwef("navigatow.wequestmediakeysystemaccess()")}}
